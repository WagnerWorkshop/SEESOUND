(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="171",Fh=0,uc=1,Ih=2,id=1,Uh=2,ui=3,Ui=0,Cn=1,$n=2,Jn=0,Fi=1,Ri=2,dc=3,hc=4,So=5,pi=100,Oh=101,Bh=102,kh=103,zh=104,Vh=200,Hh=201,Gh=202,Wh=203,fs=204,ms=205,Xh=206,qh=207,jh=208,Yh=209,$h=210,Zh=211,Kh=212,Jh=213,Qh=214,Eo=0,Co=1,wo=2,Dr=3,To=4,Ao=5,Ro=6,Po=7,rd=0,ep=1,tp=2,Ii=0,np=1,ip=2,rp=3,sp=4,ap=5,op=6,lp=7,sd=300,Fr=301,Ir=302,No=303,Lo=304,Ra=306,Do=1e3,Zi=1001,Fo=1002,bn=1003,cp=1004,As=1005,Zn=1006,Va=1007,Ki=1008,gi=1009,ad=1010,od=1011,gs=1012,Sl=1013,er=1014,Kn=1015,Qn=1016,El=1017,Cl=1018,Ur=1020,ld=35902,cd=1021,ud=1022,Gn=1023,dd=1024,hd=1025,Pr=1026,Or=1027,wl=1028,Tl=1029,pd=1030,Al=1031,Rl=1033,la=33776,ca=33777,ua=33778,da=33779,Io=35840,Uo=35841,Oo=35842,Bo=35843,ko=36196,zo=37492,Vo=37496,Ho=37808,Go=37809,Wo=37810,Xo=37811,qo=37812,jo=37813,Yo=37814,$o=37815,Zo=37816,Ko=37817,Jo=37818,Qo=37819,el=37820,tl=37821,ha=36492,nl=36494,il=36495,fd=36283,rl=36284,sl=36285,al=36286,up=3200,md=3201,gd=0,dp=1,Pi="",Nn="srgb",Br="srgb-linear",ga="linear",Tt="srgb",ar=7680,pc=519,hp=512,pp=513,fp=514,vd=515,mp=516,gp=517,vp=518,_p=519,fc=35044,bp=35048,mc="300 es",fi=2e3,va=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const ds=Math.PI/180,vs=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Pl(n,e){return(n%e+e)%e}function xp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function yp(n,e,t){return n!==e?(t-n)/(e-n):0}function hs(n,e,t){return(1-t)*n+t*e}function Mp(n,e,t,i){return hs(n,e,1-Math.exp(-t*i))}function Sp(n,e=1){return e-Math.abs(Pl(n,e*2)-e)}function Ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tp(n,e){return n+Math.random()*(e-n)}function Ap(n){return n*(.5-Math.random())}function Rp(n){n!==void 0&&(gc=n);let e=gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pp(n){return n*ds}function Np(n){return n*vs}function Lp(n){return(n&n-1)===0&&n!==0}function Dp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ip(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),f=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nl={DEG2RAD:ds,RAD2DEG:vs,generateUUID:Xr,clamp:bt,euclideanModulo:Pl,mapLinear:xp,inverseLerp:yp,lerp:hs,damp:Mp,pingpong:Sp,smoothstep:Ep,smootherstep:Cp,randInt:wp,randFloat:Tp,randFloatSpread:Ap,seededRandom:Rp,degToRad:Pp,radToDeg:Np,isPowerOfTwo:Lp,ceilPowerOfTwo:Dp,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Ip,normalize:mn,denormalize:Er};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,r,s,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],v=i[8],_=r[0],m=r[3],p=r[6],E=r[1],y=r[4],b=r[7],N=r[2],P=r[5],D=r[8];return s[0]=a*_+o*E+l*N,s[3]=a*m+o*y+l*P,s[6]=a*p+o*b+l*D,s[1]=c*_+u*E+d*N,s[4]=c*m+u*y+d*P,s[7]=c*p+u*b+d*D,s[2]=h*_+f*E+v*N,s[5]=h*m+f*y+v*P,s[8]=h*p+f*b+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,v=t*d+i*h+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new at;function _d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Up(){const n=_a("canvas");return n.style.display="block",n}const vc={};function Cr(n){n in vc||(vc[n]=!0,console.warn(n))}function Op(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Bp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _c=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zp(){const n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Tt&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?ga:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:_c,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:_c,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),n}const Ct=zp();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let or;class Vp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=_a("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hp=0;class bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ga(r[a].image)):s.push(Ga(r[a]))}else s=Ga(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gp=0;class xn extends Wr{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=Zi,r=Zi,s=Zn,a=Ki,o=Gn,l=gi,c=xn.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Xr(),this.name="",this.source=new bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=sd;xn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,N=(p+1)/2,P=(u+h)/4,D=(d+_)/4,B=(v+m)/4;return y>b&&y>N?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=D/i):b>N?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=B/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=D/s,r=B/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends Wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Wp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xd extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xp extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],f=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==v){let m=1-o;const p=l*h+c*f+u*v+d*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const N=Math.sqrt(y),P=Math.atan2(N,p*E);m=Math.sin(m*P)/N,o=Math.sin(o*P)/N}const b=o*E;if(l=l*m+h*b,c=c*m+f*b,u=u*m+v*b,d=d*m+_*b,m===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=N,c*=N,u*=N,d*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*f-c*h,e[t+1]=l*v+u*h+c*d-o*f,e[t+2]=c*v+u*f+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),f=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"YXZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"ZXY":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"ZYX":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"YZX":this._x=h*u*d+c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d-h*f*v;break;case"XZY":this._x=h*u*d-c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d+h*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new V,xc=new Es;class ir{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ps.subVectors(this.max,Qr),lr.subVectors(e.a,Qr),cr.subVectors(e.b,Qr),ur.subVectors(e.c,Qr),bi.subVectors(cr,lr),xi.subVectors(ur,cr),zi.subVectors(lr,ur);let t=[0,-bi.z,bi.y,0,-xi.z,xi.y,0,-zi.z,zi.y,bi.z,0,-bi.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-bi.y,bi.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!Xa(t,lr,cr,ur,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,lr,cr,ur,Ps))?!1:(Ns.crossVectors(bi,xi),t=[Ns.x,Ns.y,Ns.z],Xa(t,lr,cr,ur,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new V,new V,new V,new V,new V,new V,new V,new V],Un=new V,Rs=new ir,lr=new V,cr=new V,ur=new V,bi=new V,xi=new V,zi=new V,Qr=new V,Ps=new V,Ns=new V,Vi=new V;function Xa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qp=new ir,es=new V,qa=new V;class rr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(qa)),this.expandByPoint(es.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new V,ja=new V,Ls=new V,yi=new V,Ya=new V,Ds=new V,$a=new V;class Ll{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=yi.dot(this.direction),l=-yi.dot(Ls),c=yi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(Ls,h),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,r,s){Ya.subVectors(t,e),Ds.subVectors(i,e),$a.crossVectors(Ya,Ds);let a=this.direction.dot($a),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(yi,Ds));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(yi));if(c<0||l+c>a)return null;const u=-o*yi.dot($a);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,s,a,o,l,c,u,d,h,f,v,_,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,f,v,_,m)}set(e,t,i,r,s,a,o,l,c,u,d,h,f,v,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,v=c*u,_=c*d;t[0]=h+_*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,v=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,v=o*u,_=o*d;t[0]=l*u,t[4]=v*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=v*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+v,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Yp)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Mi.crossVectors(i,Tn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Mi.crossVectors(i,Tn)),Mi.normalize(),Fs.crossVectors(Tn,Mi),r[0]=Mi.x,r[4]=Fs.x,r[8]=Tn.x,r[1]=Mi.y,r[5]=Fs.y,r[9]=Tn.y,r[2]=Mi.z,r[6]=Fs.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],v=i[2],_=i[6],m=i[10],p=i[14],E=i[3],y=i[7],b=i[11],N=i[15],P=r[0],D=r[4],B=r[8],C=r[12],S=r[1],F=r[5],ee=r[9],$=r[13],ne=r[2],Q=r[6],Z=r[10],pe=r[14],g=r[3],A=r[7],R=r[11],q=r[15];return s[0]=a*P+o*S+l*ne+c*g,s[4]=a*D+o*F+l*Q+c*A,s[8]=a*B+o*ee+l*Z+c*R,s[12]=a*C+o*$+l*pe+c*q,s[1]=u*P+d*S+h*ne+f*g,s[5]=u*D+d*F+h*Q+f*A,s[9]=u*B+d*ee+h*Z+f*R,s[13]=u*C+d*$+h*pe+f*q,s[2]=v*P+_*S+m*ne+p*g,s[6]=v*D+_*F+m*Q+p*A,s[10]=v*B+_*ee+m*Z+p*R,s[14]=v*C+_*$+m*pe+p*q,s[3]=E*P+y*S+b*ne+N*g,s[7]=E*D+y*F+b*Q+N*A,s[11]=E*B+y*ee+b*Z+N*R,s[15]=E*C+y*$+b*pe+N*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*f-i*l*f)+_*(+t*l*f-t*c*h+s*a*h-r*a*f+r*c*u-s*l*u)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],v=e[12],_=e[13],m=e[14],p=e[15],E=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,y=v*h*c-u*m*c-v*l*f+a*m*f+u*l*p-a*h*p,b=u*_*c-v*d*c+v*o*f-a*_*f-u*o*p+a*d*p,N=v*d*l-u*_*l-v*o*h+a*_*h+u*o*m-a*d*m,P=t*E+i*y+r*b+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=E*D,e[1]=(_*h*s-d*m*s-_*r*f+i*m*f+d*r*p-i*h*p)*D,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*D,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*f-i*l*f)*D,e[4]=y*D,e[5]=(u*m*s-v*h*s+v*r*f-t*m*f-u*r*p+t*h*p)*D,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*p-t*l*p)*D,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*f+t*l*f)*D,e[8]=b*D,e[9]=(v*d*s-u*_*s-v*i*f+t*_*f+u*i*p-t*d*p)*D,e[10]=(a*_*s-v*o*s+v*i*c-t*_*c-a*i*p+t*o*p)*D,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*f-t*o*f)*D,e[12]=N*D,e[13]=(u*_*r-v*d*r+v*i*h-t*_*h-u*i*m+t*d*m)*D,e[14]=(v*o*r-a*_*r-v*i*l+t*_*l+a*i*m-t*o*m)*D,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,v=s*d,_=a*u,m=a*d,p=o*d,E=l*c,y=l*u,b=l*d,N=i.x,P=i.y,D=i.z;return r[0]=(1-(_+p))*N,r[1]=(f+b)*N,r[2]=(v-y)*N,r[3]=0,r[4]=(f-b)*P,r[5]=(1-(h+p))*P,r[6]=(m+E)*P,r[7]=0,r[8]=(v+y)*D,r[9]=(m-E)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=dr.set(r[0],r[1],r[2]).length();const a=dr.set(r[4],r[5],r[6]).length(),o=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/a,d=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=fi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,v;if(o===fi)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===va)f=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=fi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),h=(t+e)*c,f=(i+r)*u;let v,_;if(o===fi)v=(a+s)*d,_=-2*d;else if(o===va)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dr=new V,On=new At,jp=new V(0,0,0),Yp=new V(1,1,1),Mi=new V,Fs=new V,Tn=new V,yc=new At,Mc=new Es;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $p=0;const Sc=new V,hr=new Es,oi=new At,Is=new V,ts=new V,Zp=new V,Kp=new Es,Ec=new V(1,0,0),Cc=new V(0,1,0),wc=new V(0,0,1),Tc={type:"added"},Jp={type:"removed"},pr={type:"childadded",child:null},Za={type:"childremoved",child:null};class Xt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new V,t=new ei,i=new Es,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new at}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ts,Is,this.up):oi.lookAt(Is,ts,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(oi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jp),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new V(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new V,li=new V,Ka=new V,ci=new V,fr=new V,mr=new V,Ac=new V,Ja=new V,Qa=new V,eo=new V,to=new Bt,no=new Bt,io=new Bt;class Hn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),li.subVectors(i,t),Ka.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(li),l=Bn.dot(Ka),c=li.dot(li),u=li.dot(Ka),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,i),io.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(to,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),li.subVectors(e,t),Bn.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Bn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;fr.subVectors(r,i),mr.subVectors(s,i),Ja.subVectors(e,i);const l=fr.dot(Ja),c=mr.dot(Ja);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,r);const u=fr.dot(Qa),d=mr.dot(Qa);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(fr,a);eo.subVectors(e,s);const f=fr.dot(eo),v=mr.dot(eo);if(v>=0&&f<=v)return t.copy(s);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(mr,o);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return Ac.subVectors(s,r),o=(d-u)/(d-u+(f-v)),t.copy(r).addScaledVector(Ac,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(i).addScaledVector(fr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ct.workingColorSpace){if(e=Pl(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const i=Md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ct.fromWorkingColorSpace(un.copy(this),e),Math.round(bt(un.r*255,0,255))*65536+Math.round(bt(un.g*255,0,255))*256+Math.round(bt(un.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Nn){Ct.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Us);const i=hs(Si.h,Us.h,t),r=hs(Si.s,Us.s,t),s=hs(Si.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new rt;rt.NAMES=Md;let Qp=0;class sr extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Fi,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=ms,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fs&&(i.blendSrc=this.blendSrc),this.blendDst!==ms&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dl extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new V,Os=new ot;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class Sd extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ef=0;const Pn=new At,so=new Xt,gr=new V,An=new ir,ns=new ir,Zt=new V;class wn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Ed:Sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(An.min,ns.min),An.expandByPoint(Zt),Zt.addVectors(An.max,ns.max),An.expandByPoint(Zt)):(An.expandByPoint(ns.min),An.expandByPoint(ns.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Zt.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(e,c),Zt.add(gr)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new V,l[B]=new V;const c=new V,u=new V,d=new V,h=new ot,f=new ot,v=new ot,_=new V,m=new V;function p(B,C,S){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,B),f.fromBufferAttribute(s,C),v.fromBufferAttribute(s,S),u.sub(c),d.sub(c),f.sub(h),v.sub(h);const F=1/(f.x*v.y-v.x*f.y);isFinite(F)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(F),o[B].add(_),o[C].add(_),o[S].add(_),l[B].add(m),l[C].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,C=E.length;B<C;++B){const S=E[B],F=S.start,ee=S.count;for(let $=F,ne=F+ee;$<ne;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const y=new V,b=new V,N=new V,P=new V;function D(B){N.fromBufferAttribute(r,B),P.copy(N);const C=o[B];y.copy(C),y.sub(N.multiplyScalar(N.dot(C))).normalize(),b.crossVectors(P,C);const F=b.dot(l[B])<0?-1:1;a.setXYZW(B,y.x,y.y,y.z,F)}for(let B=0,C=E.length;B<C;++B){const S=E[B],F=S.start,ee=S.count;for(let $=F,ne=F+ee;$<ne;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[v++]=c[f++]}return new Qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new At,Hi=new Ll,Bs=new rr,Pc=new V,ks=new V,zs=new V,Vs=new V,ao=new V,Hs=new V,Nc=new V,Gs=new V;class Dn extends Xt{constructor(e=new wn,t=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ao.fromBufferAttribute(d,e),a?Hs.addScaledVector(ao,u):Hs.addScaledVector(ao.sub(t),u))}t.add(Hs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(Bs.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Bs,Pc)===null||Hi.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Rc.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],p=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,N=y;b<N;b+=3){const P=o.getX(b),D=o.getX(b+1),B=o.getX(b+2);r=Ws(this,p,e,i,c,u,d,P,D,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const E=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);r=Ws(this,a,e,i,c,u,d,E,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],p=a[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,N=y;b<N;b+=3){const P=b,D=b+1,B=b+2;r=Ws(this,p,e,i,c,u,d,P,D,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const E=m,y=m+1,b=m+2;r=Ws(this,a,e,i,c,u,d,E,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tf(n,e,t,i,r,s,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ui,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:n}}function Ws(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ks),n.getVertexPosition(l,zs),n.getVertexPosition(c,Vs);const u=tf(n,e,t,i,ks,zs,Vs,Nc);if(u){const d=new V;Hn.getBarycoord(Nc,ks,zs,Vs,d),r&&(u.uv=Hn.getInterpolatedAttribute(r,o,l,c,d,new ot)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,o,l,c,d,new ot)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};Hn.getNormal(ks,zs,Vs,h.normal),u.face=h,u.barycoord=d}return u}class Cs extends wn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(d,2));function v(_,m,p,E,y,b,N,P,D,B,C){const S=b/D,F=N/B,ee=b/2,$=N/2,ne=P/2,Q=D+1,Z=B+1;let pe=0,g=0;const A=new V;for(let R=0;R<Z;R++){const q=R*F-$;for(let ge=0;ge<Q;ge++){const Ve=ge*S-ee;A[_]=Ve*E,A[m]=q*y,A[p]=ne,c.push(A.x,A.y,A.z),A[_]=0,A[m]=0,A[p]=P>0?1:-1,u.push(A.x,A.y,A.z),d.push(ge/D),d.push(1-R/B),pe+=1}}for(let R=0;R<B;R++)for(let q=0;q<D;q++){const ge=h+q+Q*R,Ve=h+q+Q*(R+1),K=h+(q+1)+Q*(R+1),he=h+(q+1)+Q*R;l.push(ge,Ve,he),l.push(Ve,K,he),g+=6}o.addGroup(f,g,C),f+=g,h+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=kr(n[t]);for(const r in i)e[r]=i[r]}return e}function nf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const _s={clone:kr,merge:gn};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wd extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new V,Lc=new ot,Dc=new ot;class Ln extends wd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Dc),t.subVectors(Dc,Lc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,_r=1;class af extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(vr,_r,e,t);r.layers=this.layers,this.add(r);const s=new Ln(vr,_r,e,t);s.layers=this.layers,this.add(s);const a=new Ln(vr,_r,e,t);a.layers=this.layers,this.add(a);const o=new Ln(vr,_r,e,t);o.layers=this.layers,this.add(o);const l=new Ln(vr,_r,e,t);l.layers=this.layers,this.add(l);const c=new Ln(vr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Td extends xn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class of extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Jn});s.uniforms.tEquirect.value=t;const a=new Dn(r,s),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Zn),new af(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class lf extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cf extends xn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=bn,u=bn,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fc extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const br=new At,Ic=new At,Xs=[],Uc=new ir,uf=new At,is=new Dn,rs=new rr;class Oc extends Dn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,uf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),Uc.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(Uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,br),rs.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(i),e.ray.intersectsSphere(rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,br),Ic.multiplyMatrices(i,br),is.matrixWorld=Ic,is.raycast(e,Xs);for(let a=0,o=Xs.length;a<o;a++){const l=Xs[a];l.instanceId=s,l.object=this,t.push(l)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new cf(new Float32Array(r*this.count),r,this.count,wl,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const oo=new V,df=new V,hf=new at;class ji{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oo.subVectors(i,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hf.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new rr,qs=new V;class Fl{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,a=new ji){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],v=r[9],_=r[10],m=r[11],p=r[12],E=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,m-f,b-p).normalize(),i[1].setComponents(l+s,h+c,m+f,b+p).normalize(),i[2].setComponents(l+a,h+u,m+v,b+E).normalize(),i[3].setComponents(l-a,h-u,m-v,b-E).normalize(),i[4].setComponents(l-o,h-d,m-_,b-y).normalize(),t===fi)i[5].setComponents(l+o,h+d,m+_,b+y).normalize();else if(t===va)i[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new V,xa=new V,Bc=new At,ss=new Ll,js=new rr,lo=new V,kc=new V;class pf extends Xt{constructor(e=new wn,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ba.fromBufferAttribute(t,r-1),xa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ba.distanceTo(xa);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;Bc.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let _=f,m=v-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),y=Ys(this,e,ss,l,p,E);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(f),p=Ys(this,e,ss,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let _=f,m=v-1;_<m;_+=c){const p=Ys(this,e,ss,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ys(this,e,ss,l,v-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ys(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(ba.fromBufferAttribute(a,r),xa.fromBufferAttribute(a,s),t.distanceSqToSegment(ba,xa,lo,kc)>i)return;lo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(lo);if(!(l<e.near||l>e.far))return{distance:l,point:kc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const zc=new V,Vc=new V;class Ad extends pf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)zc.fromBufferAttribute(t,r),Vc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zc.distanceTo(Vc);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ff extends sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new At,ol=new Ll,$s=new rr,Zs=new V;class mf extends Xt{constructor(e=new wn,t=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;Hc.copy(r).invert(),ol.copy(e.ray).applyMatrix4(Hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=h,_=f;v<_;v++){const m=c.getX(v);Zs.fromBufferAttribute(d,m),Gc(Zs,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let v=h,_=f;v<_;v++)Zs.fromBufferAttribute(d,v),Gc(Zs,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gc(n,e,t,i,r,s,a){const o=ol.distanceSqToPoint(n);if(o<t){const l=new V;ol.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ks extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Rd extends xn{constructor(e,t,i,r,s,a,o,l,c,u=Pr){if(u!==Pr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=er),i===void 0&&u===Or&&(i=Ur),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pa extends wn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*h-a;for(let y=0;y<c;y++){const b=y*d-s;v.push(b,-E,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const y=E+c*p,b=E+c*(p+1),N=E+1+c*(p+1),P=E+1+c*p;f.push(y,b,P),f.push(b,N,P)}this.setIndex(f),this.setAttribute("position",new fn(v,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ul extends wn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new V,h=new V,f=[],v=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],y=p/i;let b=0;p===0&&a===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let N=0;N<=t;N++){const P=N/t;d.x=-e*Math.cos(r+P*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+P*s)*Math.sin(a+y*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(P+b,1-y),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const y=u[p][E+1],b=u[p][E],N=u[p+1][E],P=u[p+1][E+1];(p!==0||a>0)&&f.push(y,b,P),(p!==i-1||l<Math.PI)&&f.push(b,N,P)}this.setIndex(f),this.setAttribute("position",new fn(v,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gf extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vf extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nd extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const co=new At,Wc=new V,Xc=new V;class _f{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Na extends wd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bf extends _f{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xf extends Nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new bf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yf extends Nd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mf extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qc(){return performance.now()}class Ef extends Ad{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new wn;r.setAttribute("position",new fn(t,3)),r.setAttribute("color",new fn(i,3));const s=new Il({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new rt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function jc(n,e,t,i){const r=Cf(i);switch(t){case cd:return n*e;case dd:return n*e;case hd:return n*e*2;case wl:return n*e/r.components*r.byteLength;case Tl:return n*e/r.components*r.byteLength;case pd:return n*e*2/r.components*r.byteLength;case Al:return n*e*2/r.components*r.byteLength;case ud:return n*e*3/r.components*r.byteLength;case Gn:return n*e*4/r.components*r.byteLength;case Rl:return n*e*4/r.components*r.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Bo:return Math.max(n,16)*Math.max(e,8)/4;case Io:case Oo:return Math.max(n,8)*Math.max(e,8)/2;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ha:case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fd:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cf(n){switch(n){case gi:case ad:return{byteLength:1,components:1};case gs:case od:case Qn:return{byteLength:2,components:1};case El:case Cl:return{byteLength:2,components:4};case er:case Sl:case Kn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ld(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wf(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],_=d[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
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
}`,wm=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,$0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,eg=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Rf,alphamap_pars_fragment:Pf,alphatest_fragment:Nf,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:Ff,batching_pars_vertex:If,batching_vertex:Uf,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:kf,iridescence_fragment:zf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:jf,color_pars_vertex:Yf,color_vertex:$f,common:Zf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:rm,envmap_fragment:sm,envmap_common_pars_fragment:am,envmap_pars_fragment:om,envmap_pars_vertex:lm,envmap_physical_pars_fragment:bm,envmap_vertex:cm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:hm,fog_pars_fragment:pm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:vm,lights_pars_begin:_m,lights_toon_fragment:xm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Em,lights_physical_pars_fragment:Cm,lights_fragment_begin:wm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Fm,map_particle_fragment:Im,map_particle_pars_fragment:Um,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:km,morphcolor_vertex:zm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:jm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Qm,opaque_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:r0,dithering_pars_fragment:s0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:h0,skinning_pars_vertex:p0,skinning_vertex:f0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:v0,tonemapping_fragment:_0,tonemapping_pars_fragment:b0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:E0,worldpos_vertex:C0,background_vert:w0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:P0,cube_frag:N0,depth_vert:L0,depth_frag:D0,distanceRGBA_vert:F0,distanceRGBA_frag:I0,equirect_vert:U0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:k0,meshbasic_vert:z0,meshbasic_frag:V0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:q0,meshnormal_frag:j0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:Z0,meshphysical_frag:K0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:eg,points_frag:tg,shadow_vert:ng,shadow_frag:ig,sprite_vert:rg,sprite_frag:sg},Ie={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Yn={basic:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:gn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:gn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new rt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:gn([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:gn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:gn([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:gn([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:gn([Ie.common,Ie.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:gn([Ie.lights,Ie.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Yn.physical={uniforms:gn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Js={r:0,b:0,g:0},Wi=new ei,ag=new At;function og(n,e,t,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function _(y){let b=!1;const N=v(y);N===null?p(o,l):N&&N.isColor&&(p(N,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,b){const N=v(b);N&&(N.isCubeTexture||N.mapping===Ra)?(u===void 0&&(u=new Dn(new Cs(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:kr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wi.copy(b.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Wi)),u.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Tt,(d!==N||h!==N.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=N,h=N.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Dn(new Pa(2,2),new pn({name:"BackgroundMaterial",uniforms:kr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(N.colorSpace)!==Tt,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||h!==N.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=N,h=N.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(Js,Cd(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,b,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m,dispose:E}}function lg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,F,ee,$,ne){let Q=!1;const Z=d($,ee,F);s!==Z&&(s=Z,c(s.object)),Q=f(S,$,ee,ne),Q&&v(S,$,ee,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,b(S,F,ee,$),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,F,ee){const $=ee.wireframe===!0;let ne=i[S.id];ne===void 0&&(ne={},i[S.id]=ne);let Q=ne[F.id];Q===void 0&&(Q={},ne[F.id]=Q);let Z=Q[$];return Z===void 0&&(Z=h(l()),Q[$]=Z),Z}function h(S){const F=[],ee=[],$=[];for(let ne=0;ne<t;ne++)F[ne]=0,ee[ne]=0,$[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ee,attributeDivisors:$,object:S,attributes:{},index:null}}function f(S,F,ee,$){const ne=s.attributes,Q=F.attributes;let Z=0;const pe=ee.getAttributes();for(const g in pe)if(pe[g].location>=0){const R=ne[g];let q=Q[g];if(q===void 0&&(g==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),g==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),R===void 0||R.attribute!==q||q&&R.data!==q.data)return!0;Z++}return s.attributesNum!==Z||s.index!==$}function v(S,F,ee,$){const ne={},Q=F.attributes;let Z=0;const pe=ee.getAttributes();for(const g in pe)if(pe[g].location>=0){let R=Q[g];R===void 0&&(g==="instanceMatrix"&&S.instanceMatrix&&(R=S.instanceMatrix),g==="instanceColor"&&S.instanceColor&&(R=S.instanceColor));const q={};q.attribute=R,R&&R.data&&(q.data=R.data),ne[g]=q,Z++}s.attributes=ne,s.attributesNum=Z,s.index=$}function _(){const S=s.newAttributes;for(let F=0,ee=S.length;F<ee;F++)S[F]=0}function m(S){p(S,0)}function p(S,F){const ee=s.newAttributes,$=s.enabledAttributes,ne=s.attributeDivisors;ee[S]=1,$[S]===0&&(n.enableVertexAttribArray(S),$[S]=1),ne[S]!==F&&(n.vertexAttribDivisor(S,F),ne[S]=F)}function E(){const S=s.newAttributes,F=s.enabledAttributes;for(let ee=0,$=F.length;ee<$;ee++)F[ee]!==S[ee]&&(n.disableVertexAttribArray(ee),F[ee]=0)}function y(S,F,ee,$,ne,Q,Z){Z===!0?n.vertexAttribIPointer(S,F,ee,ne,Q):n.vertexAttribPointer(S,F,ee,$,ne,Q)}function b(S,F,ee,$){_();const ne=$.attributes,Q=ee.getAttributes(),Z=F.defaultAttributeValues;for(const pe in Q){const g=Q[pe];if(g.location>=0){let A=ne[pe];if(A===void 0&&(pe==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),pe==="instanceColor"&&S.instanceColor&&(A=S.instanceColor)),A!==void 0){const R=A.normalized,q=A.itemSize,ge=e.get(A);if(ge===void 0)continue;const Ve=ge.buffer,K=ge.type,he=ge.bytesPerElement,Se=K===n.INT||K===n.UNSIGNED_INT||A.gpuType===Sl;if(A.isInterleavedBufferAttribute){const j=A.data,ye=j.stride,Y=A.offset;if(j.isInstancedInterleavedBuffer){for(let ve=0;ve<g.locationSize;ve++)p(g.location+ve,j.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<g.locationSize;ve++)m(g.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ve=0;ve<g.locationSize;ve++)y(g.location+ve,q/g.locationSize,K,R,ye*he,(Y+q/g.locationSize*ve)*he,Se)}else{if(A.isInstancedBufferAttribute){for(let j=0;j<g.locationSize;j++)p(g.location+j,A.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let j=0;j<g.locationSize;j++)m(g.location+j);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let j=0;j<g.locationSize;j++)y(g.location+j,q/g.locationSize,K,R,q*he,q/g.locationSize*j*he,Se)}}else if(Z!==void 0){const R=Z[pe];if(R!==void 0)switch(R.length){case 2:n.vertexAttrib2fv(g.location,R);break;case 3:n.vertexAttrib3fv(g.location,R);break;case 4:n.vertexAttrib4fv(g.location,R);break;default:n.vertexAttrib1fv(g.location,R)}}}}E()}function N(){B();for(const S in i){const F=i[S];for(const ee in F){const $=F[ee];for(const ne in $)u($[ne].object),delete $[ne];delete F[ee]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const F=i[S.id];for(const ee in F){const $=F[ee];for(const ne in $)u($[ne].object),delete $[ne];delete F[ee]}delete i[S.id]}function D(S){for(const F in i){const ee=i[F];if(ee[S.id]===void 0)continue;const $=ee[S.id];for(const ne in $)u($[ne].object),delete $[ne];delete ee[S.id]}}function B(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function cg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*h[_];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ug(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Gn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const B=D===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==gi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kn&&!B)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:N,maxSamples:P}}function dg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ji,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,y=E*4;let b=p.clippingState||null;l.value=b,b=u(v,h,y,f);for(let N=0;N!==y;++N)b[N]=t[N];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=f+_*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=f;y!==_;++y,b+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hg(n){let e=new WeakMap;function t(a,o){return o===No?a.mapping=Fr:o===Lo&&(a.mapping=Ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===No||o===Lo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new of(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const wr=4,Yc=[.125,.215,.35,.446,.526,.582],$i=20,uo=new Na,$c=new rt;let ho=null,po=0,fo=0,mo=!1;const Yi=(1+Math.sqrt(5))/2,xr=1/Yi,Zc=[new V(-Yi,xr,0),new V(Yi,xr,0),new V(-xr,0,Yi),new V(xr,0,Yi),new V(0,Yi,-xr),new V(0,Yi,xr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ho=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,po,fo),this._renderer.xr.enabled=mo,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Qn,format:Gn,colorSpace:Br,depthBuffer:!1},r=Jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pg(s)),this._blurMaterial=fg(s,e,t)}return r}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,r){const o=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor($c),u.toneMapping=Ii,u.autoClear=!1;const f=new Dl({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),v=new Dn(new Cs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy($c),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Qs(r,E*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,uo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zc[(r-s-1)%Zc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Dn(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$i-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let E=0;for(let D=0;D<$i;++D){const B=D/_,C=Math.exp(-B*B/2);p.push(C),D===0?E+=C:D<m&&(E+=2*C)}for(let D=0;D<p.length;D++)p[D]=p[D]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const b=this._sizeLods[r],N=3*b*(r>y-wr?r-y+wr:0),P=4*(this._cubeSize-b);Qs(t,N,P,3*b,2*b),l.setRenderTarget(t),l.render(d,uo)}}function pg(n){const e=[],t=[],i=[];let r=n;const s=n-wr+1+Yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-wr?l=Yc[a-n+wr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,_=3,m=2,p=1,E=new Float32Array(_*v*f),y=new Float32Array(m*v*f),b=new Float32Array(p*v*f);for(let P=0;P<f;P++){const D=P%3*2/3-1,B=P>2?0:-1,C=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];E.set(C,_*v*P),y.set(h,m*v*P);const S=[P,P,P,P,P,P];b.set(S,p*v*P)}const N=new wn;N.setAttribute("position",new Qt(E,_)),N.setAttribute("uv",new Qt(y,m)),N.setAttribute("faceIndex",new Qt(b,p)),e.push(N),r>wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jc(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fg(n,e,t){const i=new Float32Array($i),r=new V(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qc(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function eu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Lo,u=l===Fr||l===Ir;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Kc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Kc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vg(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,v=d.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let y=0,b=E.length;y<b;y+=3){const N=E[y+0],P=E[y+1],D=E[y+2];h.push(N,P,P,D,D,N)}}else if(v!==void 0){const E=v.array;_=v.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const N=y+0,P=y+1,D=y+2;h.push(N,P,P,D,D,N)}}else return;const m=new(_d(h)?Ed:Sd)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function _g(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function c(h,f,v){v!==0&&(n.drawElementsInstanced(i,f,s,h*a,v),t.update(f,i,v))}function u(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,i,1)}function d(h,f,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,v);let p=0;for(let E=0;E<v;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xg(n,e,t){const i=new WeakMap,r=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let C=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),v===!0&&(y=2),_===!0&&(y=3);let b=o.attributes.position.count*y,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*N*4*d),D=new xd(P,b,N,d);D.type=Kn,D.needsUpdate=!0;const B=y*4;for(let S=0;S<d;S++){const F=m[S],ee=p[S],$=E[S],ne=b*N*4*S;for(let Q=0;Q<F.count;Q++){const Z=Q*B;f===!0&&(r.fromBufferAttribute(F,Q),P[ne+Z+0]=r.x,P[ne+Z+1]=r.y,P[ne+Z+2]=r.z,P[ne+Z+3]=0),v===!0&&(r.fromBufferAttribute(ee,Q),P[ne+Z+4]=r.x,P[ne+Z+5]=r.y,P[ne+Z+6]=r.z,P[ne+Z+7]=0),_===!0&&(r.fromBufferAttribute($,Q),P[ne+Z+8]=r.x,P[ne+Z+9]=r.y,P[ne+Z+10]=r.z,P[ne+Z+11]=$.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new ot(b,N)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function yg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Dd=new xn,tu=new Rd(1,1),Fd=new xd,Id=new Xp,Ud=new Td,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),au=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function La(n,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),jt(t,i)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;su.set(i),n.uniformMatrix3fv(this.addr,!1,su),jt(t,i)}}function Ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),jt(t,i)}}function Rg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function Og(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=vd,s=tu):s=Dd,t.setTexture2D(e||s,r)}function Bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Id,r)}function kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ud,r)}function zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fd,r)}function Vg(n){switch(n){case 5126:return Mg;case 35664:return Sg;case 35665:return Eg;case 35666:return Cg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ng;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Fg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}function Hg(n,e){n.uniform1fv(this.addr,e)}function Gg(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function qg(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jg(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yg(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $g(n,e){n.uniform1iv(this.addr,e)}function Zg(n,e){n.uniform2iv(this.addr,e)}function Kg(n,e){n.uniform3iv(this.addr,e)}function Jg(n,e){n.uniform4iv(this.addr,e)}function Qg(n,e){n.uniform1uiv(this.addr,e)}function e1(n,e){n.uniform2uiv(this.addr,e)}function t1(n,e){n.uniform3uiv(this.addr,e)}function n1(n,e){n.uniform4uiv(this.addr,e)}function i1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dd,s[a])}function r1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Id,s[a])}function s1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ud,s[a])}function a1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fd,s[a])}function o1(n){switch(n){case 5126:return Hg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return jg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return a1}}class l1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vg(t.type)}}class c1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o1(t.type)}}class u1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const go=/(\w+)(\])?(\[|\.)?/g;function ou(n,e){n.seq.push(e),n.map[e.id]=e}function d1(n,e,t){const i=n.name,r=i.length;for(go.lastIndex=0;;){const s=go.exec(i),a=go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ou(t,c===void 0?new l1(o,n,e):new c1(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new u1(o),ou(t,d)),t=d}}}class pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);d1(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const h1=37297;let p1=0;function f1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const cu=new at;function m1(n){Ct._getMatrix(cu,Ct.workingColorSpace,n);const e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+f1(n.getShaderSource(e),a)}else return r}function g1(n,e){const t=m1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function v1(n,e){let t;switch(e){case np:t="Linear";break;case ip:t="Reinhard";break;case rp:t="Cineon";break;case sp:t="ACESFilmic";break;case op:t="AgX";break;case lp:t="Neutral";break;case ap:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new V;function _1(){Ct.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function x1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ls(n){return n!==""}function du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(n){return n.replace(M1,E1)}const S1=new Map;function E1(n,e){let t=ct[e];if(t===void 0){const i=S1.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(C1,w1)}function w1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function T1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function A1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function P1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case ep:e="ENVMAP_BLENDING_MIX";break;case tp:e="ENVMAP_BLENDING_ADD";break}return e}function N1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function L1(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=T1(t),c=A1(t),u=R1(t),d=P1(t),h=N1(t),f=b1(t),v=x1(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ii?v1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,g1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=ll(a),a=du(a,t),a=hu(a,t),o=ll(o),o=du(o,t),o=hu(o,t),a=pu(a),o=pu(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+a,b=E+p+o,N=lu(r,r.VERTEX_SHADER,y),P=lu(r,r.FRAGMENT_SHADER,b);r.attachShader(_,N),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(F){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(_).trim(),$=r.getShaderInfoLog(N).trim(),ne=r.getShaderInfoLog(P).trim();let Q=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,N,P);else{const pe=uu(r,N,"vertex"),g=uu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ee+`
`+pe+`
`+g)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):($===""||ne==="")&&(Z=!1);Z&&(F.diagnostics={runnable:Q,programLog:ee,vertexShader:{log:$,prefix:m},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(N),r.deleteShader(P),B=new pa(r,_),C=y1(r,_)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,h1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=P,this}let D1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new I1(e),t.set(e,i)),i}}class I1{constructor(e){this.id=D1++,this.code=e,this.usedTimes=0}}function U1(n,e,t,i,r,s,a){const o=new yd,l=new F1,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,S,F,ee,$){const ne=ee.fog,Q=$.geometry,Z=C.isMeshStandardMaterial?ee.environment:null,pe=(C.isMeshStandardMaterial?t:e).get(C.envMap||Z),g=pe&&pe.mapping===Ra?pe.image.height:null,A=v[C.type];C.precision!==null&&(f=r.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));const R=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,q=R!==void 0?R.length:0;let ge=0;Q.morphAttributes.position!==void 0&&(ge=1),Q.morphAttributes.normal!==void 0&&(ge=2),Q.morphAttributes.color!==void 0&&(ge=3);let Ve,K,he,Se;if(A){const re=Yn[A];Ve=re.vertexShader,K=re.fragmentShader}else Ve=C.vertexShader,K=C.fragmentShader,l.update(C),he=l.getVertexShaderID(C),Se=l.getFragmentShaderID(C);const j=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Y=$.isInstancedMesh===!0,ve=$.isBatchedMesh===!0,He=!!C.map,Ge=!!C.matcap,st=!!pe,L=!!C.aoMap,Et=!!C.lightMap,$e=!!C.bumpMap,Ye=!!C.normalMap,De=!!C.displacementMap,it=!!C.emissiveMap,Ue=!!C.metalnessMap,T=!!C.roughnessMap,x=C.anisotropy>0,H=C.clearcoat>0,oe=C.dispersion>0,de=C.iridescence>0,X=C.sheen>0,Me=C.transmission>0,Ee=x&&!!C.anisotropyMap,Ae=H&&!!C.clearcoatMap,Ze=H&&!!C.clearcoatNormalMap,me=H&&!!C.clearcoatRoughnessMap,fe=de&&!!C.iridescenceMap,Ne=de&&!!C.iridescenceThicknessMap,qe=X&&!!C.sheenColorMap,Oe=X&&!!C.sheenRoughnessMap,tt=!!C.specularMap,nt=!!C.specularColorMap,yt=!!C.specularIntensityMap,z=Me&&!!C.transmissionMap,we=Me&&!!C.thicknessMap,ie=!!C.gradientMap,ue=!!C.alphaMap,Le=C.alphaTest>0,Re=!!C.alphaHash,w=!!C.extensions;let O=Ii;C.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(O=n.toneMapping);const W={shaderID:A,shaderType:C.type,shaderName:C.name,vertexShader:Ve,fragmentShader:K,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:ve,batchingColor:ve&&$._colorsTexture!==null,instancing:Y,instancingColor:Y&&$.instanceColor!==null,instancingMorph:Y&&$.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Br,alphaToCoverage:!!C.alphaToCoverage,map:He,matcap:Ge,envMap:st,envMapMode:st&&pe.mapping,envMapCubeUVHeight:g,aoMap:L,lightMap:Et,bumpMap:$e,normalMap:Ye,displacementMap:h&&De,emissiveMap:it,normalMapObjectSpace:Ye&&C.normalMapType===dp,normalMapTangentSpace:Ye&&C.normalMapType===gd,metalnessMap:Ue,roughnessMap:T,anisotropy:x,anisotropyMap:Ee,clearcoat:H,clearcoatMap:Ae,clearcoatNormalMap:Ze,clearcoatRoughnessMap:me,dispersion:oe,iridescence:de,iridescenceMap:fe,iridescenceThicknessMap:Ne,sheen:X,sheenColorMap:qe,sheenRoughnessMap:Oe,specularMap:tt,specularColorMap:nt,specularIntensityMap:yt,transmission:Me,transmissionMap:z,thicknessMap:we,gradientMap:ie,opaque:C.transparent===!1&&C.blending===Fi&&C.alphaToCoverage===!1,alphaMap:ue,alphaTest:Le,alphaHash:Re,combine:C.combine,mapUv:He&&_(C.map.channel),aoMapUv:L&&_(C.aoMap.channel),lightMapUv:Et&&_(C.lightMap.channel),bumpMapUv:$e&&_(C.bumpMap.channel),normalMapUv:Ye&&_(C.normalMap.channel),displacementMapUv:De&&_(C.displacementMap.channel),emissiveMapUv:it&&_(C.emissiveMap.channel),metalnessMapUv:Ue&&_(C.metalnessMap.channel),roughnessMapUv:T&&_(C.roughnessMap.channel),anisotropyMapUv:Ee&&_(C.anisotropyMap.channel),clearcoatMapUv:Ae&&_(C.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(C.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(C.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(C.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(C.sheenRoughnessMap.channel),specularMapUv:tt&&_(C.specularMap.channel),specularColorMapUv:nt&&_(C.specularColorMap.channel),specularIntensityMapUv:yt&&_(C.specularIntensityMap.channel),transmissionMapUv:z&&_(C.transmissionMap.channel),thicknessMapUv:we&&_(C.thicknessMap.channel),alphaMapUv:ue&&_(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ye||x),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(He||ue),fog:!!ne,useFog:C.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:$.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:O,decodeVideoTexture:He&&C.map.isVideoTexture===!0&&Ct.getTransfer(C.map.colorSpace)===Tt,decodeVideoTextureEmissive:it&&C.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(C.emissiveMap.colorSpace)===Tt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===$n,flipSided:C.side===Cn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:w&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(w&&C.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return W.vertexUv1s=c.has(1),W.vertexUv2s=c.has(2),W.vertexUv3s=c.has(3),c.clear(),W}function p(C){const S=[];if(C.shaderID?S.push(C.shaderID):(S.push(C.customVertexShaderID),S.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)S.push(F),S.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(E(S,C),y(S,C),S.push(n.outputColorSpace)),S.push(C.customProgramCacheKey),S.join()}function E(C,S){C.push(S.precision),C.push(S.outputColorSpace),C.push(S.envMapMode),C.push(S.envMapCubeUVHeight),C.push(S.mapUv),C.push(S.alphaMapUv),C.push(S.lightMapUv),C.push(S.aoMapUv),C.push(S.bumpMapUv),C.push(S.normalMapUv),C.push(S.displacementMapUv),C.push(S.emissiveMapUv),C.push(S.metalnessMapUv),C.push(S.roughnessMapUv),C.push(S.anisotropyMapUv),C.push(S.clearcoatMapUv),C.push(S.clearcoatNormalMapUv),C.push(S.clearcoatRoughnessMapUv),C.push(S.iridescenceMapUv),C.push(S.iridescenceThicknessMapUv),C.push(S.sheenColorMapUv),C.push(S.sheenRoughnessMapUv),C.push(S.specularMapUv),C.push(S.specularColorMapUv),C.push(S.specularIntensityMapUv),C.push(S.transmissionMapUv),C.push(S.thicknessMapUv),C.push(S.combine),C.push(S.fogExp2),C.push(S.sizeAttenuation),C.push(S.morphTargetsCount),C.push(S.morphAttributeCount),C.push(S.numDirLights),C.push(S.numPointLights),C.push(S.numSpotLights),C.push(S.numSpotLightMaps),C.push(S.numHemiLights),C.push(S.numRectAreaLights),C.push(S.numDirLightShadows),C.push(S.numPointLightShadows),C.push(S.numSpotLightShadows),C.push(S.numSpotLightShadowsWithMaps),C.push(S.numLightProbes),C.push(S.shadowMapType),C.push(S.toneMapping),C.push(S.numClippingPlanes),C.push(S.numClipIntersection),C.push(S.depthPacking)}function y(C,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),C.push(o.mask)}function b(C){const S=v[C.type];let F;if(S){const ee=Yn[S];F=_s.clone(ee.uniforms)}else F=C.uniforms;return F}function N(C,S){let F;for(let ee=0,$=u.length;ee<$;ee++){const ne=u[ee];if(ne.cacheKey===S){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new L1(n,S,C,s),u.push(F)),F}function P(C){if(--C.usedTimes===0){const S=u.indexOf(C);u[S]=u[u.length-1],u.pop(),C.destroy()}}function D(C){l.remove(C)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:N,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:B}}function O1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function B1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,f,v,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,v,_,m){const p=a(d,h,f,v,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,h,f,v,_,m){const p=a(d,h,f,v,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||B1),i.length>1&&i.sort(h||mu),r.length>1&&r.sort(h||mu)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function k1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gu,n.set(i,[a])):r>=s.length?(a=new gu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function z1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new rt};break;case"SpotLight":t={position:new V,direction:new V,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function V1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H1=0;function G1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W1(n){const e=new z1,t=V1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new At,a=new At;function o(c){let u=0,d=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,v=0,_=0,m=0,p=0,E=0,y=0,b=0,N=0,P=0,D=0;c.sort(G1);for(let C=0,S=c.length;C<S;C++){const F=c[C],ee=F.color,$=F.intensity,ne=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=ee.r*$,d+=ee.g*$,h+=ee.b*$;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(F.sh.coefficients[Z],$);D++}else if(F.isDirectionalLight){const Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const pe=F.shadow,g=t.get(F);g.shadowIntensity=pe.intensity,g.shadowBias=pe.bias,g.shadowNormalBias=pe.normalBias,g.shadowRadius=pe.radius,g.shadowMapSize=pe.mapSize,i.directionalShadow[f]=g,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=F.shadow.matrix,E++}i.directional[f]=Z,f++}else if(F.isSpotLight){const Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(ee).multiplyScalar($),Z.distance=ne,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,i.spot[_]=Z;const pe=F.shadow;if(F.map&&(i.spotLightMap[N]=F.map,N++,pe.updateMatrices(F),F.castShadow&&P++),i.spotLightMatrix[_]=pe.matrix,F.castShadow){const g=t.get(F);g.shadowIntensity=pe.intensity,g.shadowBias=pe.bias,g.shadowNormalBias=pe.normalBias,g.shadowRadius=pe.radius,g.shadowMapSize=pe.mapSize,i.spotShadow[_]=g,i.spotShadowMap[_]=Q,b++}_++}else if(F.isRectAreaLight){const Z=e.get(F);Z.color.copy(ee).multiplyScalar($),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=Z,m++}else if(F.isPointLight){const Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){const pe=F.shadow,g=t.get(F);g.shadowIntensity=pe.intensity,g.shadowBias=pe.bias,g.shadowNormalBias=pe.normalBias,g.shadowRadius=pe.radius,g.shadowMapSize=pe.mapSize,g.shadowCameraNear=pe.camera.near,g.shadowCameraFar=pe.camera.far,i.pointShadow[v]=g,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=F.shadow.matrix,y++}i.point[v]=Z,v++}else if(F.isHemisphereLight){const Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar($),Z.groundColor.copy(F.groundColor).multiplyScalar($),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==f||B.pointLength!==v||B.spotLength!==_||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==E||B.numPointShadows!==y||B.numSpotShadows!==b||B.numSpotMaps!==N||B.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,B.directionalLength=f,B.pointLength=v,B.spotLength=_,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=E,B.numPointShadows=y,B.numSpotShadows=b,B.numSpotMaps=N,B.numLightProbes=D,i.version=H1++)}function l(c,u){let d=0,h=0,f=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const y=c[p];if(y.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(y.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function vu(n){const e=new W1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function X1(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vu(n),e.set(r,[o])):s>=a.length?(o=new vu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function Y1(n,e,t){let i=new Fl;const r=new ot,s=new ot,a=new Bt,o=new Pd({depthPacking:md}),l=new vf,c={},u=t.maxTextureSize,d={[Ui]:Cn,[Cn]:Ui,[$n]:$n},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:q1,fragmentShader:j1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new wn;v.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let p=this.type;this.render=function(P,D,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const C=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(Jn),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const $=p!==ui&&this.type===ui,ne=p===ui&&this.type!==ui;for(let Q=0,Z=P.length;Q<Z;Q++){const pe=P[Q],g=pe.shadow;if(g===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;r.copy(g.mapSize);const A=g.getFrameExtents();if(r.multiply(A),s.copy(g.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/A.x),r.x=s.x*A.x,g.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/A.y),r.y=s.y*A.y,g.mapSize.y=s.y)),g.map===null||$===!0||ne===!0){const q=this.type!==ui?{minFilter:bn,magFilter:bn}:{};g.map!==null&&g.map.dispose(),g.map=new Fn(r.x,r.y,q),g.map.texture.name=pe.name+".shadowMap",g.camera.updateProjectionMatrix()}n.setRenderTarget(g.map),n.clear();const R=g.getViewportCount();for(let q=0;q<R;q++){const ge=g.getViewport(q);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),ee.viewport(a),g.updateMatrices(pe,q),i=g.getFrustum(),b(D,B,g.camera,pe,this.type)}g.isPointLightShadow!==!0&&this.type===ui&&E(g,B),g.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,S,F)};function E(P,D){const B=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Fn(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,B,h,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,B,f,_,null)}function y(P,D,B,C){let S=null;const F=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)S=F;else if(S=B.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ee=S.uuid,$=D.uuid;let ne=c[ee];ne===void 0&&(ne={},c[ee]=ne);let Q=ne[$];Q===void 0&&(Q=S.clone(),ne[$]=Q,D.addEventListener("dispose",N)),S=Q}if(S.visible=D.visible,S.wireframe=D.wireframe,C===ui?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:d[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ee=n.properties.get(S);ee.light=B}return S}function b(P,D,B,C,S){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const $=e.update(P),ne=P.material;if(Array.isArray(ne)){const Q=$.groups;for(let Z=0,pe=Q.length;Z<pe;Z++){const g=Q[Z],A=ne[g.materialIndex];if(A&&A.visible){const R=y(P,A,C,S);P.onBeforeShadow(n,P,D,B,$,R,g),n.renderBufferDirect(B,null,$,R,P,g),P.onAfterShadow(n,P,D,B,$,R,g)}}}else if(ne.visible){const Q=y(P,ne,C,S);P.onBeforeShadow(n,P,D,B,$,Q,null),n.renderBufferDirect(B,null,$,Q,P,null),P.onAfterShadow(n,P,D,B,$,Q,null)}}const ee=P.children;for(let $=0,ne=ee.length;$<ne;$++)b(ee[$],D,B,C,S)}function N(P){P.target.removeEventListener("dispose",N);for(const B in c){const C=c[B],S=P.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}const $1={[Eo]:Co,[wo]:Ro,[To]:Po,[Dr]:Ao,[Co]:Eo,[Ro]:wo,[Po]:To,[Ao]:Dr};function Z1(n,e){function t(){let z=!1;const we=new Bt;let ie=null;const ue=new Bt(0,0,0,0);return{setMask:function(Le){ie!==Le&&!z&&(n.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){z=Le},setClear:function(Le,Re,w,O,W){W===!0&&(Le*=O,Re*=O,w*=O),we.set(Le,Re,w,O),ue.equals(we)===!1&&(n.clearColor(Le,Re,w,O),ue.copy(we))},reset:function(){z=!1,ie=null,ue.set(-1,0,0,0)}}}function i(){let z=!1,we=!1,ie=null,ue=null,Le=null;return{setReversed:function(Re){if(we!==Re){const w=e.get("EXT_clip_control");we?w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT):w.clipControlEXT(w.LOWER_LEFT_EXT,w.NEGATIVE_ONE_TO_ONE_EXT);const O=Le;Le=null,this.setClear(O)}we=Re},getReversed:function(){return we},setTest:function(Re){Re?j(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!z&&(n.depthMask(Re),ie=Re)},setFunc:function(Re){if(we&&(Re=$1[Re]),ue!==Re){switch(Re){case Eo:n.depthFunc(n.NEVER);break;case Co:n.depthFunc(n.ALWAYS);break;case wo:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case Ao:n.depthFunc(n.GEQUAL);break;case Ro:n.depthFunc(n.GREATER);break;case Po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Re}},setLocked:function(Re){z=Re},setClear:function(Re){Le!==Re&&(we&&(Re=1-Re),n.clearDepth(Re),Le=Re)},reset:function(){z=!1,ie=null,ue=null,Le=null,we=!1}}}function r(){let z=!1,we=null,ie=null,ue=null,Le=null,Re=null,w=null,O=null,W=null;return{setTest:function(re){z||(re?j(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(re){we!==re&&!z&&(n.stencilMask(re),we=re)},setFunc:function(re,be,xe){(ie!==re||ue!==be||Le!==xe)&&(n.stencilFunc(re,be,xe),ie=re,ue=be,Le=xe)},setOp:function(re,be,xe){(Re!==re||w!==be||O!==xe)&&(n.stencilOp(re,be,xe),Re=re,w=be,O=xe)},setLocked:function(re){z=re},setClear:function(re){W!==re&&(n.clearStencil(re),W=re)},reset:function(){z=!1,we=null,ie=null,ue=null,Le=null,Re=null,w=null,O=null,W=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],v=null,_=!1,m=null,p=null,E=null,y=null,b=null,N=null,P=null,D=new rt(0,0,0),B=0,C=!1,S=null,F=null,ee=null,$=null,ne=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,pe=0;const g=n.getParameter(n.VERSION);g.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(g)[1]),Z=pe>=1):g.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(g)[1]),Z=pe>=2);let A=null,R={};const q=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Ve=new Bt().fromArray(q),K=new Bt().fromArray(ge);function he(z,we,ie,ue){const Le=new Uint8Array(4),Re=n.createTexture();n.bindTexture(z,Re),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let w=0;w<ie;w++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(we+w,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Re}const Se={};Se[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Dr),$e(!1),Ye(uc),j(n.CULL_FACE),L(Jn);function j(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function ye(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Y(z,we){return d[z]!==we?(n.bindFramebuffer(z,we),d[z]=we,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=we),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=we),!0):!1}function ve(z,we){let ie=f,ue=!1;if(z){ie=h.get(we),ie===void 0&&(ie=[],h.set(we,ie));const Le=z.textures;if(ie.length!==Le.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,w=Le.length;Re<w;Re++)ie[Re]=n.COLOR_ATTACHMENT0+Re;ie.length=Le.length,ue=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ie)}function He(z){return v!==z?(n.useProgram(z),v=z,!0):!1}const Ge={[pi]:n.FUNC_ADD,[Oh]:n.FUNC_SUBTRACT,[Bh]:n.FUNC_REVERSE_SUBTRACT};Ge[kh]=n.MIN,Ge[zh]=n.MAX;const st={[Vh]:n.ZERO,[Hh]:n.ONE,[Gh]:n.SRC_COLOR,[fs]:n.SRC_ALPHA,[$h]:n.SRC_ALPHA_SATURATE,[jh]:n.DST_COLOR,[Xh]:n.DST_ALPHA,[Wh]:n.ONE_MINUS_SRC_COLOR,[ms]:n.ONE_MINUS_SRC_ALPHA,[Yh]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA,[Zh]:n.CONSTANT_COLOR,[Kh]:n.ONE_MINUS_CONSTANT_COLOR,[Jh]:n.CONSTANT_ALPHA,[Qh]:n.ONE_MINUS_CONSTANT_ALPHA};function L(z,we,ie,ue,Le,Re,w,O,W,re){if(z===Jn){_===!0&&(ye(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),z!==So){if(z!==m||re!==C){if((p!==pi||b!==pi)&&(n.blendEquation(n.FUNC_ADD),p=pi,b=pi),re)switch(z){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ri:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ri:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}E=null,y=null,N=null,P=null,D.set(0,0,0),B=0,m=z,C=re}return}Le=Le||we,Re=Re||ie,w=w||ue,(we!==p||Le!==b)&&(n.blendEquationSeparate(Ge[we],Ge[Le]),p=we,b=Le),(ie!==E||ue!==y||Re!==N||w!==P)&&(n.blendFuncSeparate(st[ie],st[ue],st[Re],st[w]),E=ie,y=ue,N=Re,P=w),(O.equals(D)===!1||W!==B)&&(n.blendColor(O.r,O.g,O.b,W),D.copy(O),B=W),m=z,C=!1}function Et(z,we){z.side===$n?ye(n.CULL_FACE):j(n.CULL_FACE);let ie=z.side===Cn;we&&(ie=!ie),$e(ie),z.blending===Fi&&z.transparent===!1?L(Jn):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const ue=z.stencilWrite;o.setTest(ue),ue&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function Ye(z){z!==Fh?(j(n.CULL_FACE),z!==F&&(z===uc?n.cullFace(n.BACK):z===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),F=z}function De(z){z!==ee&&(Z&&n.lineWidth(z),ee=z)}function it(z,we,ie){z?(j(n.POLYGON_OFFSET_FILL),($!==we||ne!==ie)&&(n.polygonOffset(we,ie),$=we,ne=ie)):ye(n.POLYGON_OFFSET_FILL)}function Ue(z){z?j(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function T(z){z===void 0&&(z=n.TEXTURE0+Q-1),A!==z&&(n.activeTexture(z),A=z)}function x(z,we,ie){ie===void 0&&(A===null?ie=n.TEXTURE0+Q-1:ie=A);let ue=R[ie];ue===void 0&&(ue={type:void 0,texture:void 0},R[ie]=ue),(ue.type!==z||ue.texture!==we)&&(A!==ie&&(n.activeTexture(ie),A=ie),n.bindTexture(z,we||Se[z]),ue.type=z,ue.texture=we)}function H(){const z=R[A];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(z){Ve.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Oe(z){K.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),K.copy(z))}function tt(z,we){let ie=c.get(we);ie===void 0&&(ie=new WeakMap,c.set(we,ie));let ue=ie.get(z);ue===void 0&&(ue=n.getUniformBlockIndex(we,z.name),ie.set(z,ue))}function nt(z,we){const ue=c.get(we).get(z);l.get(we)!==ue&&(n.uniformBlockBinding(we,ue,z.__bindingPointIndex),l.set(we,ue))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},A=null,R={},d={},h=new WeakMap,f=[],v=null,_=!1,m=null,p=null,E=null,y=null,b=null,N=null,P=null,D=new rt(0,0,0),B=0,C=!1,S=null,F=null,ee=null,$=null,ne=null,Ve.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ye,bindFramebuffer:Y,drawBuffers:ve,useProgram:He,setBlending:L,setMaterial:Et,setFlipSided:$e,setCullFace:Ye,setLineWidth:De,setPolygonOffset:it,setScissorTest:Ue,activeTexture:T,bindTexture:x,unbindTexture:H,compressedTexImage2D:oe,compressedTexImage3D:de,texImage2D:fe,texImage3D:Ne,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:Ze,texStorage3D:me,texSubImage2D:X,texSubImage3D:Me,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ae,scissor:qe,viewport:Oe,reset:yt}}function K1(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return f?new OffscreenCanvas(T,x):_a("canvas")}function _(T,x,H){let oe=1;const de=Ue(T);if((de.width>H||de.height>H)&&(oe=H/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(oe*de.width),Me=Math.floor(oe*de.height);d===void 0&&(d=v(X,Me));const Ee=x?v(X,Me):d;return Ee.width=X,Ee.height=Me,Ee.getContext("2d").drawImage(T,0,0,X,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+X+"x"+Me+")."),Ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,x,H,oe,de=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===n.RED&&(H===n.FLOAT&&(X=n.R32F),H===n.HALF_FLOAT&&(X=n.R16F),H===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.R8UI),H===n.UNSIGNED_SHORT&&(X=n.R16UI),H===n.UNSIGNED_INT&&(X=n.R32UI),H===n.BYTE&&(X=n.R8I),H===n.SHORT&&(X=n.R16I),H===n.INT&&(X=n.R32I)),x===n.RG&&(H===n.FLOAT&&(X=n.RG32F),H===n.HALF_FLOAT&&(X=n.RG16F),H===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.RG8UI),H===n.UNSIGNED_SHORT&&(X=n.RG16UI),H===n.UNSIGNED_INT&&(X=n.RG32UI),H===n.BYTE&&(X=n.RG8I),H===n.SHORT&&(X=n.RG16I),H===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.RGB8UI),H===n.UNSIGNED_SHORT&&(X=n.RGB16UI),H===n.UNSIGNED_INT&&(X=n.RGB32UI),H===n.BYTE&&(X=n.RGB8I),H===n.SHORT&&(X=n.RGB16I),H===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),H===n.UNSIGNED_INT&&(X=n.RGBA32UI),H===n.BYTE&&(X=n.RGBA8I),H===n.SHORT&&(X=n.RGBA16I),H===n.INT&&(X=n.RGBA32I)),x===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),x===n.RGBA){const Me=de?ga:Ct.getTransfer(oe);H===n.FLOAT&&(X=n.RGBA32F),H===n.HALF_FLOAT&&(X=n.RGBA16F),H===n.UNSIGNED_BYTE&&(X=Me===Tt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(T,x){let H;return T?x===null||x===er||x===Ur?H=n.DEPTH24_STENCIL8:x===Kn?H=n.DEPTH32F_STENCIL8:x===gs&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===er||x===Ur?H=n.DEPTH_COMPONENT24:x===Kn?H=n.DEPTH_COMPONENT32F:x===gs&&(H=n.DEPTH_COMPONENT16),H}function N(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==Zn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){const x=T.target;x.removeEventListener("dispose",P),B(x),x.isVideoTexture&&u.delete(x)}function D(T){const x=T.target;x.removeEventListener("dispose",D),S(x)}function B(T){const x=i.get(T);if(x.__webglInit===void 0)return;const H=T.source,oe=h.get(H);if(oe){const de=oe[x.__cacheKey];de.usedTimes--,de.usedTimes===0&&C(T),Object.keys(oe).length===0&&h.delete(H)}i.remove(T)}function C(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const H=T.source,oe=h.get(H);delete oe[x.__cacheKey],a.memory.textures--}function S(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(x.__webglFramebuffer[oe]))for(let de=0;de<x.__webglFramebuffer[oe].length;de++)n.deleteFramebuffer(x.__webglFramebuffer[oe][de]);else n.deleteFramebuffer(x.__webglFramebuffer[oe]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[oe])}else{if(Array.isArray(x.__webglFramebuffer))for(let oe=0;oe<x.__webglFramebuffer.length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[oe]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let oe=0;oe<x.__webglColorRenderbuffer.length;oe++)x.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[oe]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=T.textures;for(let oe=0,de=H.length;oe<de;oe++){const X=i.get(H[oe]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(H[oe])}i.remove(T)}let F=0;function ee(){F=0}function $(){const T=F;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),F+=1,T}function ne(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Q(T,x){const H=i.get(T);if(T.isVideoTexture&&De(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const oe=T.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,T,x);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function Z(T,x){const H=i.get(T);if(T.version>0&&H.__version!==T.version){K(H,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function pe(T,x){const H=i.get(T);if(T.version>0&&H.__version!==T.version){K(H,T,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function g(T,x){const H=i.get(T);if(T.version>0&&H.__version!==T.version){he(H,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const A={[Do]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},R={[bn]:n.NEAREST,[cp]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},q={[hp]:n.NEVER,[_p]:n.ALWAYS,[pp]:n.LESS,[vd]:n.LEQUAL,[fp]:n.EQUAL,[vp]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function ge(T,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zn||x.magFilter===Va||x.magFilter===As||x.magFilter===Ki||x.minFilter===Zn||x.minFilter===Va||x.minFilter===As||x.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,A[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,A[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,A[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,R[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,R[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==As&&x.minFilter!==Ki||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ve(T,x){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",P));const oe=x.source;let de=h.get(oe);de===void 0&&(de={},h.set(oe,de));const X=ne(x);if(X!==T.__cacheKey){de[X]===void 0&&(de[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),de[X].usedTimes++;const Me=de[T.__cacheKey];Me!==void 0&&(de[T.__cacheKey].usedTimes--,Me.usedTimes===0&&C(x)),T.__cacheKey=X,T.__webglTexture=de[X].texture}return H}function K(T,x,H){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);const de=Ve(T,x),X=x.source;t.bindTexture(oe,T.__webglTexture,n.TEXTURE0+H);const Me=i.get(X);if(X.version!==Me.__version||de===!0){t.activeTexture(n.TEXTURE0+H);const Ee=Ct.getPrimaries(Ct.workingColorSpace),Ae=x.colorSpace===Pi?null:Ct.getPrimaries(x.colorSpace),Ze=x.colorSpace===Pi||Ee===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let me=_(x.image,!1,r.maxTextureSize);me=it(x,me);const fe=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let qe=y(x.internalFormat,fe,Ne,x.colorSpace,x.isVideoTexture);ge(oe,x);let Oe;const tt=x.mipmaps,nt=x.isVideoTexture!==!0,yt=Me.__version===void 0||de===!0,z=X.dataReady,we=N(x,me);if(x.isDepthTexture)qe=b(x.format===Or,x.type),yt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,qe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,qe,me.width,me.height,0,fe,Ne,null));else if(x.isDataTexture)if(tt.length>0){nt&&yt&&t.texStorage2D(n.TEXTURE_2D,we,qe,tt[0].width,tt[0].height);for(let ie=0,ue=tt.length;ie<ue;ie++)Oe=tt[ie],nt?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,fe,Ne,Oe.data):t.texImage2D(n.TEXTURE_2D,ie,qe,Oe.width,Oe.height,0,fe,Ne,Oe.data);x.generateMipmaps=!1}else nt?(yt&&t.texStorage2D(n.TEXTURE_2D,we,qe,me.width,me.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,fe,Ne,me.data)):t.texImage2D(n.TEXTURE_2D,0,qe,me.width,me.height,0,fe,Ne,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){nt&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,qe,tt[0].width,tt[0].height,me.depth);for(let ie=0,ue=tt.length;ie<ue;ie++)if(Oe=tt[ie],x.format!==Gn)if(fe!==null)if(nt){if(z)if(x.layerUpdates.size>0){const Le=jc(Oe.width,Oe.height,x.format,x.type);for(const Re of x.layerUpdates){const w=Oe.data.subarray(Re*Le/Oe.data.BYTES_PER_ELEMENT,(Re+1)*Le/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Re,Oe.width,Oe.height,1,fe,w)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,me.depth,fe,Oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,qe,Oe.width,Oe.height,me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,me.depth,fe,Ne,Oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,qe,Oe.width,Oe.height,me.depth,0,fe,Ne,Oe.data)}else{nt&&yt&&t.texStorage2D(n.TEXTURE_2D,we,qe,tt[0].width,tt[0].height);for(let ie=0,ue=tt.length;ie<ue;ie++)Oe=tt[ie],x.format!==Gn?fe!==null?nt?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,fe,Oe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,qe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,fe,Ne,Oe.data):t.texImage2D(n.TEXTURE_2D,ie,qe,Oe.width,Oe.height,0,fe,Ne,Oe.data)}else if(x.isDataArrayTexture)if(nt){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,qe,me.width,me.height,me.depth),z)if(x.layerUpdates.size>0){const ie=jc(me.width,me.height,x.format,x.type);for(const ue of x.layerUpdates){const Le=me.data.subarray(ue*ie/me.data.BYTES_PER_ELEMENT,(ue+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,me.width,me.height,1,fe,Ne,Le)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,fe,Ne,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,me.width,me.height,me.depth,0,fe,Ne,me.data);else if(x.isData3DTexture)nt?(yt&&t.texStorage3D(n.TEXTURE_3D,we,qe,me.width,me.height,me.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,fe,Ne,me.data)):t.texImage3D(n.TEXTURE_3D,0,qe,me.width,me.height,me.depth,0,fe,Ne,me.data);else if(x.isFramebufferTexture){if(yt)if(nt)t.texStorage2D(n.TEXTURE_2D,we,qe,me.width,me.height);else{let ie=me.width,ue=me.height;for(let Le=0;Le<we;Le++)t.texImage2D(n.TEXTURE_2D,Le,qe,ie,ue,0,fe,Ne,null),ie>>=1,ue>>=1}}else if(tt.length>0){if(nt&&yt){const ie=Ue(tt[0]);t.texStorage2D(n.TEXTURE_2D,we,qe,ie.width,ie.height)}for(let ie=0,ue=tt.length;ie<ue;ie++)Oe=tt[ie],nt?z&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe,Ne,Oe):t.texImage2D(n.TEXTURE_2D,ie,qe,fe,Ne,Oe);x.generateMipmaps=!1}else if(nt){if(yt){const ie=Ue(me);t.texStorage2D(n.TEXTURE_2D,we,qe,ie.width,ie.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ne,me)}else t.texImage2D(n.TEXTURE_2D,0,qe,fe,Ne,me);m(x)&&p(oe),Me.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function he(T,x,H){if(x.image.length!==6)return;const oe=Ve(T,x),de=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+H);const X=i.get(de);if(de.version!==X.__version||oe===!0){t.activeTexture(n.TEXTURE0+H);const Me=Ct.getPrimaries(Ct.workingColorSpace),Ee=x.colorSpace===Pi?null:Ct.getPrimaries(x.colorSpace),Ae=x.colorSpace===Pi||Me===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let ue=0;ue<6;ue++)!Ze&&!me?fe[ue]=_(x.image[ue],!0,r.maxCubemapSize):fe[ue]=me?x.image[ue].image:x.image[ue],fe[ue]=it(x,fe[ue]);const Ne=fe[0],qe=s.convert(x.format,x.colorSpace),Oe=s.convert(x.type),tt=y(x.internalFormat,qe,Oe,x.colorSpace),nt=x.isVideoTexture!==!0,yt=X.__version===void 0||oe===!0,z=de.dataReady;let we=N(x,Ne);ge(n.TEXTURE_CUBE_MAP,x);let ie;if(Ze){nt&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,tt,Ne.width,Ne.height);for(let ue=0;ue<6;ue++){ie=fe[ue].mipmaps;for(let Le=0;Le<ie.length;Le++){const Re=ie[Le];x.format!==Gn?qe!==null?nt?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,0,0,Re.width,Re.height,qe,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,tt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,0,0,Re.width,Re.height,qe,Oe,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,tt,Re.width,Re.height,0,qe,Oe,Re.data)}}}else{if(ie=x.mipmaps,nt&&yt){ie.length>0&&we++;const ue=Ue(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,tt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(me){nt?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,fe[ue].width,fe[ue].height,qe,Oe,fe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,fe[ue].width,fe[ue].height,0,qe,Oe,fe[ue].data);for(let Le=0;Le<ie.length;Le++){const w=ie[Le].image[ue].image;nt?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,0,0,w.width,w.height,qe,Oe,w.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,tt,w.width,w.height,0,qe,Oe,w.data)}}else{nt?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,qe,Oe,fe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,qe,Oe,fe[ue]);for(let Le=0;Le<ie.length;Le++){const Re=ie[Le];nt?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,0,0,qe,Oe,Re.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,tt,qe,Oe,Re.image[ue])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),X.__version=de.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Se(T,x,H,oe,de,X){const Me=s.convert(H.format,H.colorSpace),Ee=s.convert(H.type),Ae=y(H.internalFormat,Me,Ee,H.colorSpace),Ze=i.get(x),me=i.get(H);if(me.__renderTarget=x,!Ze.__hasExternalTextures){const fe=Math.max(1,x.width>>X),Ne=Math.max(1,x.height>>X);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,X,Ae,fe,Ne,x.depth,0,Me,Ee,null):t.texImage2D(de,X,Ae,fe,Ne,0,Me,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ye(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,de,me.__webglTexture,0,$e(x)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,de,me.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(T,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const oe=x.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,X=b(x.stencilBuffer,de),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=$e(x);Ye(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,X,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,T)}else{const oe=x.textures;for(let de=0;de<oe.length;de++){const X=oe[de],Me=s.convert(X.format,X.colorSpace),Ee=s.convert(X.type),Ae=y(X.internalFormat,Me,Ee,X.colorSpace),Ze=$e(x);H&&Ye(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Ae,x.width,x.height):Ye(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(x.depthTexture);oe.__renderTarget=x,(!oe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const de=oe.__webglTexture,X=$e(x);if(x.depthTexture.format===Pr)Ye(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(x.depthTexture.format===Or)Ye(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Y(T){const x=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const oe=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){const de=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),x.__depthDisposeCallback=de}x.__boundDepthTexture=oe}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ye(x.__webglFramebuffer,T)}else if(H){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),j(x.__webglDepthbuffer[oe],T,!1);else{const de=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),j(x.__webglDepthbuffer,T,!1);else{const oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(T,x,H){const oe=i.get(T);x!==void 0&&Se(oe.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Y(T)}function He(T){const x=T.texture,H=i.get(T),oe=i.get(x);T.addEventListener("dispose",D);const de=T.textures,X=T.isWebGLCubeRenderTarget===!0,Me=de.length>1;if(Me||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,a.memory.textures++),X){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)H.__webglFramebuffer[Ee][Ae]=n.createFramebuffer()}else H.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Me)for(let Ee=0,Ae=de.length;Ee<Ae;Ee++){const Ze=i.get(de[Ee]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ye(T)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<de.length;Ee++){const Ae=de[Ee];H.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const Ze=s.convert(Ae.format,Ae.colorSpace),me=s.convert(Ae.type),fe=y(Ae.internalFormat,Ze,me,Ae.colorSpace,T.isXRRenderTarget===!0),Ne=$e(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),j(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),ge(n.TEXTURE_CUBE_MAP,x);for(let Ee=0;Ee<6;Ee++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Se(H.__webglFramebuffer[Ee][Ae],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ae);else Se(H.__webglFramebuffer[Ee],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let Ee=0,Ae=de.length;Ee<Ae;Ee++){const Ze=de[Ee],me=i.get(Ze);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),ge(n.TEXTURE_2D,Ze),Se(H.__webglFramebuffer,T,Ze,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),m(Ze)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),ge(Ee,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Se(H.__webglFramebuffer[Ae],T,x,n.COLOR_ATTACHMENT0,Ee,Ae);else Se(H.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,Ee,0);m(x)&&p(Ee),t.unbindTexture()}T.depthBuffer&&Y(T)}function Ge(T){const x=T.textures;for(let H=0,oe=x.length;H<oe;H++){const de=x[H];if(m(de)){const X=E(T),Me=i.get(de).__webglTexture;t.bindTexture(X,Me),p(X),t.unbindTexture()}}}const st=[],L=[];function Et(T){if(T.samples>0){if(Ye(T)===!1){const x=T.textures,H=T.width,oe=T.height;let de=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),Ee=x.length>1;if(Ee)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const Ze=i.get(x[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,H,oe,0,0,H,oe,de,n.NEAREST),l===!0&&(st.length=0,L.length=0,st.push(n.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(X),L.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const Ze=i.get(x[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $e(T){return Math.min(r.maxSamples,T.samples)}function Ye(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function De(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function it(T,x){const H=T.colorSpace,oe=T.format,de=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Br&&H!==Pi&&(Ct.getTransfer(H)===Tt?(oe!==Gn||de!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=ee,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=pe,this.setTextureCube=g,this.rebindTextures=ve,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ye}function J1(n,e){function t(i,r=Pi){let s;const a=Ct.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.BYTE;if(i===od)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===Gn)return n.RGBA;if(i===dd)return n.LUMINANCE;if(i===hd)return n.LUMINANCE_ALPHA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===wl)return n.RED;if(i===Tl)return n.RED_INTEGER;if(i===pd)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===da)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Uo||i===Oo||i===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===zo||i===Vo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ko||i===zo)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ho||i===Go||i===Wo||i===Xo||i===qo||i===jo||i===Yo||i===$o||i===Zo||i===Ko||i===Jo||i===Qo||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ho)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ko)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===nl||i===il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ha)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fd||i===rl||i===sl||i===al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Q1={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&h>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`;class nv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pn({vertexShader:ev,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iv extends Wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,v=null;const _=new nv,m=t.getContextAttributes();let p=null,E=null;const y=[],b=[],N=new ot;let P=null;const D=new Ln;D.viewport=new Bt;const B=new Ln;B.viewport=new Bt;const C=[D,B],S=new Mf;let F=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=y[K];return he===void 0&&(he=new vo,y[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=y[K];return he===void 0&&(he=new vo,y[K]=he),he.getGripSpace()},this.getHand=function(K){let he=y[K];return he===void 0&&(he=new vo,y[K]=he),he.getHandSpace()};function $(K){const he=b.indexOf(K.inputSource);if(he===-1)return;const Se=y[he];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function ne(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",Q);for(let K=0;K<y.length;K++){const he=b[K];he!==null&&(b[K]=null,y[K].disconnect(he))}F=null,ee=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,E=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Se=null,j=null;m.depth&&(j=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Or:Pr,Se=m.stencil?Ur:er);const ye={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Fn(h.textureWidth,h.textureHeight,{format:Gn,type:gi,depthTexture:new Rd(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(K){for(let he=0;he<K.removed.length;he++){const Se=K.removed[he],j=b.indexOf(Se);j>=0&&(b[j]=null,y[j].disconnect(Se))}for(let he=0;he<K.added.length;he++){const Se=K.added[he];let j=b.indexOf(Se);if(j===-1){for(let Y=0;Y<y.length;Y++)if(Y>=b.length){b.push(Se),j=Y;break}else if(b[Y]===null){b[Y]=Se,j=Y;break}if(j===-1)break}const ye=y[j];ye&&ye.connect(Se)}}const Z=new V,pe=new V;function g(K,he,Se){Z.setFromMatrixPosition(he.matrixWorld),pe.setFromMatrixPosition(Se.matrixWorld);const j=Z.distanceTo(pe),ye=he.projectionMatrix.elements,Y=Se.projectionMatrix.elements,ve=ye[14]/(ye[10]-1),He=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],st=(ye[9]-1)/ye[5],L=(ye[8]-1)/ye[0],Et=(Y[8]+1)/Y[0],$e=ve*L,Ye=ve*Et,De=j/(-L+Et),it=De*-L;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(it),K.translateZ(De),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ue=ve+De,T=He+De,x=$e-it,H=Ye+(j-it),oe=Ge*He/T*Ue,de=st*He/T*Ue;K.projectionMatrix.makePerspective(x,H,oe,de,Ue,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function A(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let he=K.near,Se=K.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),S.near=B.near=D.near=he,S.far=B.far=D.far=Se,(F!==S.near||ee!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,ee=S.far),D.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,S.layers.mask=D.layers.mask|B.layers.mask;const j=K.parent,ye=S.cameras;A(S,j);for(let Y=0;Y<ye.length;Y++)A(ye[Y],j);ye.length===2?g(S,D,B):S.projectionMatrix.copy(D.projectionMatrix),R(K,S,j)};function R(K,he,Se){Se===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let q=null;function ge(K,he){if(u=he.getViewerPose(c||a),v=he,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let j=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,j=!0);for(let Y=0;Y<Se.length;Y++){const ve=Se[Y];let He=null;if(f!==null)He=f.getViewport(ve);else{const st=d.getViewSubImage(h,ve);He=st.viewport,Y===0&&(e.setRenderTargetTextures(E,st.colorTexture,h.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(E))}let Ge=C[Y];Ge===void 0&&(Ge=new Ln,Ge.layers.enable(Y),Ge.viewport=new Bt,C[Y]=Ge),Ge.matrix.fromArray(ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(He.x,He.y,He.width,He.height),Y===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),j===!0&&S.cameras.push(Ge)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Y=d.getDepthInformation(Se[0]);Y&&Y.isValid&&Y.texture&&_.init(e,Y,r.renderState)}}for(let Se=0;Se<y.length;Se++){const j=b[Se],ye=y[Se];j!==null&&ye!==void 0&&ye.update(j,he,c||a)}q&&q(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}const Ve=new Ld;Ve.setAnimationLoop(ge),this.setAnimationLoop=function(K){q=K},this.dispose=function(){}}}const Xi=new ei,rv=new At;function sv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,b=E.envMapRotation;y&&(m.envMap.value=y,Xi.copy(b),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function av(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const b=y.program;i.uniformBlockBinding(E,b)}function c(E,y){let b=r[E.id];b===void 0&&(v(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",m));const N=y.program;i.updateUBOMapping(E,N);const P=e.render.frame;s[E.id]!==P&&(h(E),s[E.id]=P)}function u(E){const y=d();E.__bindingPointIndex=y;const b=n.createBuffer(),N=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=r[E.id],b=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,D=b.length;P<D;P++){const B=Array.isArray(b[P])?b[P]:[b[P]];for(let C=0,S=B.length;C<S;C++){const F=B[C];if(f(F,P,C,N)===!0){const ee=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let Q=0;Q<$.length;Q++){const Z=$[Q],pe=_(Z);typeof Z=="number"||typeof Z=="boolean"?(F.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,ee+ne,F.__data)):Z.isMatrix3?(F.__data[0]=Z.elements[0],F.__data[1]=Z.elements[1],F.__data[2]=Z.elements[2],F.__data[3]=0,F.__data[4]=Z.elements[3],F.__data[5]=Z.elements[4],F.__data[6]=Z.elements[5],F.__data[7]=0,F.__data[8]=Z.elements[6],F.__data[9]=Z.elements[7],F.__data[10]=Z.elements[8],F.__data[11]=0):(Z.toArray(F.__data,ne),ne+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,y,b,N){const P=E.value,D=y+"_"+b;if(N[D]===void 0)return typeof P=="number"||typeof P=="boolean"?N[D]=P:N[D]=P.clone(),!0;{const B=N[D];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return N[D]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function v(E){const y=E.uniforms;let b=0;const N=16;for(let D=0,B=y.length;D<B;D++){const C=Array.isArray(y[D])?y[D]:[y[D]];for(let S=0,F=C.length;S<F;S++){const ee=C[S],$=Array.isArray(ee.value)?ee.value:[ee.value];for(let ne=0,Q=$.length;ne<Q;ne++){const Z=$[ne],pe=_(Z),g=b%N,A=g%pe.boundary,R=g+A;b+=A,R!==0&&N-R<pe.storage&&(b+=N-R),ee.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=b,b+=pe.storage}}}const P=b%N;return P>0&&(b+=N-P),E.__size=b,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Od{constructor(e={}){const{canvas:t=Up(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=Ii,this.toneMappingExposure=1;const b=this;let N=!1,P=0,D=0,B=null,C=-1,S=null;const F=new Bt,ee=new Bt;let $=null;const ne=new rt(0);let Q=0,Z=t.width,pe=t.height,g=1,A=null,R=null;const q=new Bt(0,0,Z,pe),ge=new Bt(0,0,Z,pe);let Ve=!1;const K=new Fl;let he=!1,Se=!1;const j=new At,ye=new At,Y=new V,ve=new Bt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function st(){return B===null?g:1}let L=i;function Et(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Re,!1),L===null){const k="webgl2";if(L=Et(k,M),L===null)throw Et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $e,Ye,De,it,Ue,T,x,H,oe,de,X,Me,Ee,Ae,Ze,me,fe,Ne,qe,Oe,tt,nt,yt,z;function we(){$e=new gg(L),$e.init(),nt=new J1(L,$e),Ye=new ug(L,$e,e,nt),De=new Z1(L,$e),Ye.reverseDepthBuffer&&h&&De.buffers.depth.setReversed(!0),it=new bg(L),Ue=new O1,T=new K1(L,$e,De,Ue,Ye,nt,it),x=new hg(b),H=new mg(b),oe=new wf(L),yt=new lg(L,oe),de=new vg(L,oe,it,yt),X=new yg(L,de,oe,it),qe=new xg(L,Ye,T),me=new dg(Ue),Me=new U1(b,x,H,$e,Ye,yt,me),Ee=new sv(b,Ue),Ae=new k1,Ze=new X1($e),Ne=new og(b,x,H,De,X,f,l),fe=new Y1(b,X,Ye),z=new av(L,it,Ye,De),Oe=new cg(L,$e,it),tt=new _g(L,$e,it),it.programs=Me.programs,b.capabilities=Ye,b.extensions=$e,b.properties=Ue,b.renderLists=Ae,b.shadowMap=fe,b.state=De,b.info=it}we();const ie=new iv(b,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return g},this.setPixelRatio=function(M){M!==void 0&&(g=M,this.setSize(Z,pe,!1))},this.getSize=function(M){return M.set(Z,pe)},this.setSize=function(M,k,U=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,pe=k,t.width=Math.floor(M*g),t.height=Math.floor(k*g),U===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(Z*g,pe*g).floor()},this.setDrawingBufferSize=function(M,k,U){Z=M,pe=k,g=U,t.width=Math.floor(M*U),t.height=Math.floor(k*U),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,k,U,J){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,k,U,J),De.viewport(F.copy(q).multiplyScalar(g).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,k,U,J){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,k,U,J),De.scissor(ee.copy(ge).multiplyScalar(g).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){De.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){A=M},this.setTransparentSort=function(M){R=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(M=!0,k=!0,U=!0){let J=0;if(M){let G=!1;if(B!==null){const _e=B.texture.format;G=_e===Rl||_e===Al||_e===Tl}if(G){const _e=B.texture.type,Te=_e===gi||_e===er||_e===gs||_e===Ur||_e===El||_e===Cl,Fe=Ne.getClearColor(),ke=Ne.getClearAlpha(),Qe=Fe.r,et=Fe.g,We=Fe.b;Te?(v[0]=Qe,v[1]=et,v[2]=We,v[3]=ke,L.clearBufferuiv(L.COLOR,0,v)):(_[0]=Qe,_[1]=et,_[2]=We,_[3]=ke,L.clearBufferiv(L.COLOR,0,_))}else J|=L.COLOR_BUFFER_BIT}k&&(J|=L.DEPTH_BUFFER_BIT),U&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ne.dispose(),Ae.dispose(),Ze.dispose(),Ue.dispose(),x.dispose(),H.dispose(),X.dispose(),yt.dispose(),z.dispose(),Me.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",te),ie.removeEventListener("sessionend",le),Je.stop()};function ue(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=it.autoReset,k=fe.enabled,U=fe.autoUpdate,J=fe.needsUpdate,G=fe.type;we(),it.autoReset=M,fe.enabled=k,fe.autoUpdate=U,fe.needsUpdate=J,fe.type=G}function Re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function w(M){const k=M.target;k.removeEventListener("dispose",w),O(k)}function O(M){W(M),Ue.remove(M)}function W(M){const k=Ue.get(M).programs;k!==void 0&&(k.forEach(function(U){Me.releaseProgram(U)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,U,J,G,_e){k===null&&(k=He);const Te=G.isMesh&&G.matrixWorld.determinant()<0,Fe=Lt(M,k,U,J,G);De.setMaterial(J,Te);let ke=U.index,Qe=1;if(J.wireframe===!0){if(ke=de.getWireframeAttribute(U),ke===void 0)return;Qe=2}const et=U.drawRange,We=U.attributes.position;let dt=et.start*Qe,xt=(et.start+et.count)*Qe;_e!==null&&(dt=Math.max(dt,_e.start*Qe),xt=Math.min(xt,(_e.start+_e.count)*Qe)),ke!==null?(dt=Math.max(dt,0),xt=Math.min(xt,ke.count)):We!=null&&(dt=Math.max(dt,0),xt=Math.min(xt,We.count));const kt=xt-dt;if(kt<0||kt===1/0)return;yt.setup(G,J,Fe,U,ke);let wt,ft=Oe;if(ke!==null&&(wt=oe.get(ke),ft=tt,ft.setIndex(wt)),G.isMesh)J.wireframe===!0?(De.setLineWidth(J.wireframeLinewidth*st()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(G.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),De.setLineWidth(Ke*st()),G.isLineSegments?ft.setMode(L.LINES):G.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else G.isPoints?ft.setMode(L.POINTS):G.isSprite&&ft.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ft.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ke=G._multiDrawStarts,zt=G._multiDrawCounts,Mt=G._multiDrawCount,yn=ke?oe.get(ke).bytesPerElement:1,ri=Ue.get(J).currentProgram.getUniforms();for(let an=0;an<Mt;an++)ri.setValue(L,"_gl_DrawID",an),ft.render(Ke[an]/yn,zt[an])}else if(G.isInstancedMesh)ft.renderInstances(dt,kt,G.count);else if(U.isInstancedBufferGeometry){const Ke=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,zt=Math.min(U.instanceCount,Ke);ft.renderInstances(dt,kt,zt)}else ft.render(dt,kt)};function re(M,k,U){M.transparent===!0&&M.side===$n&&M.forceSinglePass===!1?(M.side=Cn,M.needsUpdate=!0,gt(M,k,U),M.side=Ui,M.needsUpdate=!0,gt(M,k,U),M.side=$n):gt(M,k,U)}this.compile=function(M,k,U=null){U===null&&(U=M),p=Ze.get(U),p.init(k),y.push(p),U.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),M!==U&&M.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const J=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Fe=_e[Te];re(Fe,U,G),J.add(Fe)}else re(_e,U,G),J.add(_e)}),y.pop(),p=null,J},this.compileAsync=function(M,k,U=null){const J=this.compile(M,k,U);return new Promise(G=>{function _e(){if(J.forEach(function(Te){Ue.get(Te).currentProgram.isReady()&&J.delete(Te)}),J.size===0){G(M);return}setTimeout(_e,10)}$e.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let be=null;function xe(M){be&&be(M)}function te(){Je.stop()}function le(){Je.start()}const Je=new Ld;Je.setAnimationLoop(xe),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(M){be=M,ie.setAnimationLoop(M),M===null?Je.stop():Je.start()},ie.addEventListener("sessionstart",te),ie.addEventListener("sessionend",le),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,k,B),p=Ze.get(M,y.length),p.init(k),y.push(p),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(ye),Se=this.localClippingEnabled,he=me.init(this.clippingPlanes,Se),m=Ae.get(M,E.length),m.init(),E.push(m),ie.enabled===!0&&ie.isPresenting===!0){const _e=b.xr.getDepthSensingMesh();_e!==null&&ae(_e,k,-1/0,b.sortObjects)}ae(M,k,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(A,R),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&Ne.addToRenderList(m,M),this.info.render.frame++,he===!0&&me.beginShadows();const U=p.state.shadowsArray;fe.render(U,M,k),he===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,G=m.transmissive;if(p.setupLights(),k.isArrayCamera){const _e=k.cameras;if(G.length>0)for(let Te=0,Fe=_e.length;Te<Fe;Te++){const ke=_e[Te];Ce(J,G,M,ke)}Ge&&Ne.render(M);for(let Te=0,Fe=_e.length;Te<Fe;Te++){const ke=_e[Te];ze(m,M,ke,ke.viewport)}}else G.length>0&&Ce(J,G,M,k),Ge&&Ne.render(M),ze(m,M,k);B!==null&&(T.updateMultisampleRenderTarget(B),T.updateRenderTargetMipmap(B)),M.isScene===!0&&M.onAfterRender(b,M,k),yt.resetDefaultState(),C=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],he===!0&&me.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ae(M,k,U,J){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){J&&ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);const Te=X.update(M),Fe=M.material;Fe.visible&&m.push(M,Te,Fe,U,ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const Te=X.update(M),Fe=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ve.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ve.copy(Te.boundingSphere.center)),ve.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(Fe)){const ke=Te.groups;for(let Qe=0,et=ke.length;Qe<et;Qe++){const We=ke[Qe],dt=Fe[We.materialIndex];dt&&dt.visible&&m.push(M,Te,dt,U,ve.z,We)}}else Fe.visible&&m.push(M,Te,Fe,U,ve.z,null)}}const _e=M.children;for(let Te=0,Fe=_e.length;Te<Fe;Te++)ae(_e[Te],k,U,J)}function ze(M,k,U,J){const G=M.opaque,_e=M.transmissive,Te=M.transparent;p.setupLightsView(U),he===!0&&me.setGlobalState(b.clippingPlanes,U),J&&De.viewport(F.copy(J)),G.length>0&&Xe(G,k,U),_e.length>0&&Xe(_e,k,U),Te.length>0&&Xe(Te,k,U),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ce(M,k,U,J){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Fn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Qn:gi,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const _e=p.state.transmissionRenderTarget[J.id],Te=J.viewport||F;_e.setSize(Te.z,Te.w);const Fe=b.getRenderTarget();b.setRenderTarget(_e),b.getClearColor(ne),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),Ge&&Ne.render(U);const ke=b.toneMapping;b.toneMapping=Ii;const Qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),he===!0&&me.setGlobalState(b.clippingPlanes,J),Xe(M,U,J),T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e),$e.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let We=0,dt=k.length;We<dt;We++){const xt=k[We],kt=xt.object,wt=xt.geometry,ft=xt.material,Ke=xt.group;if(ft.side===$n&&kt.layers.test(J.layers)){const zt=ft.side;ft.side=Cn,ft.needsUpdate=!0,ht(kt,U,J,wt,ft,Ke),ft.side=zt,ft.needsUpdate=!0,et=!0}}et===!0&&(T.updateMultisampleRenderTarget(_e),T.updateRenderTargetMipmap(_e))}b.setRenderTarget(Fe),b.setClearColor(ne,Q),Qe!==void 0&&(J.viewport=Qe),b.toneMapping=ke}function Xe(M,k,U){const J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,_e=M.length;G<_e;G++){const Te=M[G],Fe=Te.object,ke=Te.geometry,Qe=J===null?Te.material:J,et=Te.group;Fe.layers.test(U.layers)&&ht(Fe,k,U,ke,Qe,et)}}function ht(M,k,U,J,G,_e){M.onBeforeRender(b,k,U,J,G,_e),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(b,k,U,J,M,_e),G.transparent===!0&&G.side===$n&&G.forceSinglePass===!1?(G.side=Cn,G.needsUpdate=!0,b.renderBufferDirect(U,k,J,G,M,_e),G.side=Ui,G.needsUpdate=!0,b.renderBufferDirect(U,k,J,G,M,_e),G.side=$n):b.renderBufferDirect(U,k,J,G,M,_e),M.onAfterRender(b,k,U,J,G,_e)}function gt(M,k,U){k.isScene!==!0&&(k=He);const J=Ue.get(M),G=p.state.lights,_e=p.state.shadowsArray,Te=G.state.version,Fe=Me.getParameters(M,G.state,_e,k,U),ke=Me.getProgramCacheKey(Fe);let Qe=J.programs;J.environment=M.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(M.isMeshStandardMaterial?H:x).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Qe===void 0&&(M.addEventListener("dispose",w),Qe=new Map,J.programs=Qe);let et=Qe.get(ke);if(et!==void 0){if(J.currentProgram===et&&J.lightsStateVersion===Te)return pt(M,Fe),et}else Fe.uniforms=Me.getUniforms(M),M.onBeforeCompile(Fe,b),et=Me.acquireProgram(Fe,ke),Qe.set(ke,et),J.uniforms=Fe.uniforms;const We=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=me.uniform),pt(M,Fe),J.needsLights=Yt(M),J.lightsStateVersion=Te,J.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=et,J.uniformsList=null,et}function lt(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=pa.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function pt(M,k){const U=Ue.get(M);U.outputColorSpace=k.outputColorSpace,U.batching=k.batching,U.batchingColor=k.batchingColor,U.instancing=k.instancing,U.instancingColor=k.instancingColor,U.instancingMorph=k.instancingMorph,U.skinning=k.skinning,U.morphTargets=k.morphTargets,U.morphNormals=k.morphNormals,U.morphColors=k.morphColors,U.morphTargetsCount=k.morphTargetsCount,U.numClippingPlanes=k.numClippingPlanes,U.numIntersection=k.numClipIntersection,U.vertexAlphas=k.vertexAlphas,U.vertexTangents=k.vertexTangents,U.toneMapping=k.toneMapping}function Lt(M,k,U,J,G){k.isScene!==!0&&(k=He),T.resetTextureUnits();const _e=k.fog,Te=J.isMeshStandardMaterial?k.environment:null,Fe=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Br,ke=(J.isMeshStandardMaterial?H:x).get(J.envMap||Te),Qe=J.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,et=!!U.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),We=!!U.morphAttributes.position,dt=!!U.morphAttributes.normal,xt=!!U.morphAttributes.color;let kt=Ii;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(kt=b.toneMapping);const wt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=wt!==void 0?wt.length:0,Ke=Ue.get(J),zt=p.state.lights;if(he===!0&&(Se===!0||M!==S)){const nn=M===S&&J.id===C;me.setState(J,M,nn)}let Mt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==zt.state.version||Ke.outputColorSpace!==Fe||G.isBatchedMesh&&Ke.batching===!1||!G.isBatchedMesh&&Ke.batching===!0||G.isBatchedMesh&&Ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ke.instancing===!1||!G.isInstancedMesh&&Ke.instancing===!0||G.isSkinnedMesh&&Ke.skinning===!1||!G.isSkinnedMesh&&Ke.skinning===!0||G.isInstancedMesh&&Ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ke.instancingMorph===!1&&G.morphTexture!==null||Ke.envMap!==ke||J.fog===!0&&Ke.fog!==_e||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==me.numPlanes||Ke.numIntersection!==me.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==et||Ke.morphTargets!==We||Ke.morphNormals!==dt||Ke.morphColors!==xt||Ke.toneMapping!==kt||Ke.morphTargetsCount!==ft)&&(Mt=!0):(Mt=!0,Ke.__version=J.version);let yn=Ke.currentProgram;Mt===!0&&(yn=gt(J,k,G));let ri=!1,an=!1,_i=!1;const mt=yn.getUniforms(),on=Ke.uniforms;if(De.useProgram(yn.program)&&(ri=!0,an=!0,_i=!0),J.id!==C&&(C=J.id,an=!0),ri||S!==M){De.buffers.depth.getReversed()?(j.copy(M.projectionMatrix),Bp(j),kp(j),mt.setValue(L,"projectionMatrix",j)):mt.setValue(L,"projectionMatrix",M.projectionMatrix),mt.setValue(L,"viewMatrix",M.matrixWorldInverse);const ln=mt.map.cameraPosition;ln!==void 0&&ln.setValue(L,Y.setFromMatrixPosition(M.matrixWorld)),Ye.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&mt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,an=!0,_i=!0)}if(G.isSkinnedMesh){mt.setOptional(L,G,"bindMatrix"),mt.setOptional(L,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),mt.setValue(L,"boneTexture",nn.boneTexture,T))}G.isBatchedMesh&&(mt.setOptional(L,G,"batchingTexture"),mt.setValue(L,"batchingTexture",G._matricesTexture,T),mt.setOptional(L,G,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",G._indirectTexture,T),mt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",G._colorsTexture,T));const Mn=U.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&qe.update(G,U,yn),(an||Ke.receiveShadow!==G.receiveShadow)&&(Ke.receiveShadow=G.receiveShadow,mt.setValue(L,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(on.envMap.value=ke,on.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(on.envMapIntensity.value=k.environmentIntensity),an&&(mt.setValue(L,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&It(on,_i),_e&&J.fog===!0&&Ee.refreshFogUniforms(on,_e),Ee.refreshMaterialUniforms(on,J,g,pe,p.state.transmissionRenderTarget[M.id]),pa.upload(L,lt(Ke),on,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(pa.upload(L,lt(Ke),on,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&mt.setValue(L,"center",G.center),mt.setValue(L,"modelViewMatrix",G.modelViewMatrix),mt.setValue(L,"normalMatrix",G.normalMatrix),mt.setValue(L,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let ln=0,Bi=nn.length;ln<Bi;ln++){const ki=nn[ln];z.update(ki,yn),z.bind(ki,yn)}}return yn}function It(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Yt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,k,U){Ue.get(M.texture).__webglTexture=k,Ue.get(M.depthTexture).__webglTexture=U;const J=Ue.get(M);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=U===void 0,J.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,k){const U=Ue.get(M);U.__webglFramebuffer=k,U.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,U=0){B=M,P=k,D=U;let J=!0,G=null,_e=!1,Te=!1;if(M){const ke=Ue.get(M);if(ke.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(ke.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(ke.__hasExternalTextures)T.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const We=M.depthTexture;if(ke.__boundDepthTexture!==We){if(We!==null&&Ue.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Qe=M.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Te=!0);const et=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(et[k])?G=et[k][U]:G=et[k],_e=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?G=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[U]:G=et,F.copy(M.viewport),ee.copy(M.scissor),$=M.scissorTest}else F.copy(q).multiplyScalar(g).floor(),ee.copy(ge).multiplyScalar(g).floor(),$=Ve;if(De.bindFramebuffer(L.FRAMEBUFFER,G)&&J&&De.drawBuffers(M,G),De.viewport(F),De.scissor(ee),De.setScissorTest($),_e){const ke=Ue.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,U)}else if(Te){const ke=Ue.get(M.texture),Qe=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,U||0,Qe)}C=-1},this.readRenderTargetPixels=function(M,k,U,J,G,_e,Te){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){De.bindFramebuffer(L.FRAMEBUFFER,Fe);try{const ke=M.texture,Qe=ke.format,et=ke.type;if(!Ye.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-J&&U>=0&&U<=M.height-G&&L.readPixels(k,U,J,G,nt.convert(Qe),nt.convert(et),_e)}finally{const ke=B!==null?Ue.get(B).__webglFramebuffer:null;De.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(M,k,U,J,G,_e,Te){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){const ke=M.texture,Qe=ke.format,et=ke.type;if(!Ye.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=M.width-J&&U>=0&&U<=M.height-G){De.bindFramebuffer(L.FRAMEBUFFER,Fe);const We=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),L.readPixels(k,U,J,G,nt.convert(Qe),nt.convert(et),0);const dt=B!==null?Ue.get(B).__webglFramebuffer:null;De.bindFramebuffer(L.FRAMEBUFFER,dt);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Op(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(We),L.deleteSync(xt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,k=null,U=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1]);const J=Math.pow(2,-U),G=Math.floor(M.image.width*J),_e=Math.floor(M.image.height*J),Te=k!==null?k.x:0,Fe=k!==null?k.y:0;T.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,U,0,0,Te,Fe,G,_e),De.unbindTexture()};const tn=L.createFramebuffer(),$t=L.createFramebuffer();this.copyTextureToTexture=function(M,k,U=null,J=null,G=0,_e=null){M.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,M=arguments[1],k=arguments[2],_e=arguments[3]||0,U=null),_e===null&&(G!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Te,Fe,ke,Qe,et,We,dt,xt,kt;const wt=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(U!==null)Te=U.max.x-U.min.x,Fe=U.max.y-U.min.y,ke=U.isBox3?U.max.z-U.min.z:1,Qe=U.min.x,et=U.min.y,We=U.isBox3?U.min.z:0;else{const Mn=Math.pow(2,-G);Te=Math.floor(wt.width*Mn),Fe=Math.floor(wt.height*Mn),M.isDataArrayTexture?ke=wt.depth:M.isData3DTexture?ke=Math.floor(wt.depth*Mn):ke=1,Qe=0,et=0,We=0}J!==null?(dt=J.x,xt=J.y,kt=J.z):(dt=0,xt=0,kt=0);const ft=nt.convert(k.format),Ke=nt.convert(k.type);let zt;k.isData3DTexture?(T.setTexture3D(k,0),zt=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),zt=L.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Mt=L.getParameter(L.UNPACK_ROW_LENGTH),yn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),_i=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We);const mt=M.isDataArrayTexture||M.isData3DTexture,on=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const Mn=Ue.get(M),nn=Ue.get(k),ln=Ue.get(Mn.__renderTarget),Bi=Ue.get(nn.__renderTarget);De.bindFramebuffer(L.READ_FRAMEBUFFER,ln.__webglFramebuffer),De.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let ki=0;ki<ke;ki++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(M).__webglTexture,G,We+ki),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(k).__webglTexture,_e,kt+ki)),L.blitFramebuffer(Qe,et,Te,Fe,dt,xt,Te,Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);De.bindFramebuffer(L.READ_FRAMEBUFFER,null),De.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Ue.has(M)){const Mn=Ue.get(M),nn=Ue.get(k);De.bindFramebuffer(L.READ_FRAMEBUFFER,tn),De.bindFramebuffer(L.DRAW_FRAMEBUFFER,$t);for(let ln=0;ln<ke;ln++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mn.__webglTexture,G,We+ln):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mn.__webglTexture,G),on?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,_e,kt+ln):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,_e),G!==0?L.blitFramebuffer(Qe,et,Te,Fe,dt,xt,Te,Fe,L.COLOR_BUFFER_BIT,L.NEAREST):on?L.copyTexSubImage3D(zt,_e,dt,xt,kt+ln,Qe,et,Te,Fe):L.copyTexSubImage2D(zt,_e,dt,xt,Qe,et,Te,Fe);De.bindFramebuffer(L.READ_FRAMEBUFFER,null),De.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(zt,_e,dt,xt,kt,Te,Fe,ke,ft,Ke,wt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(zt,_e,dt,xt,kt,Te,Fe,ke,ft,wt.data):L.texSubImage3D(zt,_e,dt,xt,kt,Te,Fe,ke,ft,Ke,wt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,dt,xt,Te,Fe,ft,Ke,wt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,dt,xt,wt.width,wt.height,ft,wt.data):L.texSubImage2D(L.TEXTURE_2D,_e,dt,xt,Te,Fe,ft,Ke,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_i),_e===0&&k.generateMipmaps&&L.generateMipmap(zt),De.unbindTexture()},this.copyTextureToTexture3D=function(M,k,U=null,J=null,G=0){return M.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,J=arguments[1]||null,M=arguments[2],k=arguments[3],G=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,U,J,G)},this.initRenderTarget=function(M){Ue.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),De.unbindTexture()},this.resetState=function(){P=0,D=0,B=null,De.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const Bd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ov=new Na(-1,1,1,-1,0,1);class lv extends wn{constructor(){super(),this.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fn([0,2,0,0,2,0],2))}}const cv=new lv;class Bl{constructor(e){this._mesh=new Dn(cv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ov)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uv extends jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _u extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class dv extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ot);this._width=i.width,this._height=i.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uv(Bd),this.copyPass.material.blending=Jn,this.clock=new Sf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_u!==void 0&&(a instanceof _u?i=!0:a instanceof dv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pv extends jr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const fv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zr extends jr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(s,a,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Fn(s,a,{type:Qn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Fn(s,a,{type:Qn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=fv;this.highPassUniforms=_s.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ot(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Bd;this.copyUniforms=_s.clone(u.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new Dl,this.fsQuad=new Bl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=zr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}zr.BlurDirectionX=new ot(1,0);zr.BlurDirectionY=new ot(0,1);const mv={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class gv extends jr{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Fn(1,1,{minFilter:bn,magFilter:bn,type:Qn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Pd,this.materialDepth.depthPacking=md,this.materialDepth.blending=Jn;const o=mv,l=_s.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new pn({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new Bl(this.materialBokeh),this._oldClearColor=new rt}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const vv="linear basic scriabin colors",_v={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"rule-16",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:1},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:2},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:3},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:4},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:5},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:6},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:7},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:8},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:9},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:10},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:11},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:12},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:13},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:14},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:15}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],_disabled:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},bv={name:vv,params:_v},xv="linear basic",yv={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:0},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:1},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:2},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:3},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:4},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:5},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:6},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:7},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:8},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:9},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:10},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:11},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:12},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:13},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:14}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Mv={name:xv,params:yv},Sv="linear colors",Ev={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"hsv pitch",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING / x coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(time/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"y-set-norm-frequency",group:"SPACING / y coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:2},{id:"amplitude brightness",group:"Appearance / brightness",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*2"}],order:3},{id:"thinning",group:"Appearance / brightness",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:4},{id:"background saturation",group:"Default / background color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:5},{id:"soft",group:"Appearance / size",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:6},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:7},{id:"luma",group:"",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",expression:"normFreq*255"}],order:8}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Cv={name:Sv,params:Ev},wv="textured timbre colors",Tv={inputGain:.91,freqNormMin:16,freqNormMax:2e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"y-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time+10*binMagnitude)/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"z coordinate",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"normFreq-1-time"}],order:2},{id:"hue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"binPhaseDeviation"}],order:3},{id:"red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:4},{id:"green",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:5},{id:"blue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:6},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:7},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:8},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*1.5"}],order:10},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*0.5"}],order:11},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"1-spectralRolloff"}],order:12}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::Appearance"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"color",selectedGroupName:"color",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Av={name:wv,params:Tv},Rv=1,Pv="linear timbre colors",Nv={inputGain:1.37,freqNormMin:16,freqNormMax:1e4,fftSize:16384,fluxWindowFrames:10,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:70,binAttackTimeNormMax:748,globalRmsNormMin:-63,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:2751488,particlesByFrame:2204,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"topXZ",cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,cameraAngleOfView:55,postProcessEnabled:1,bloomEnabled:1,bloomStrength:.92,bloomRadius:2,bloomThreshold:.76,bokehEnabled:0,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01,persistMode:1,originSignEnabled:1,coordinateGuidesEnabled:1,ruleBlocks:[{id:"spawnedParticles-x-base",group:"Light Particles/Position",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time) / audioLengthSec - 0.5) * canvasWidthPx"}],order:0},{id:"spawnedParticles-y-base",group:"Light Particles/Position",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"binMagnitude * canvasHeightPx * 0.5"}],order:1},{id:"spawnedParticles-z-base",group:"Light Particles/Position",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"- (normFreq * 1.4 - 0.9) * canvasHeightPx"}],order:2},{id:"spawnedParticles-size-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"set",output:"size",expression:"(binMagnitude) * 2"}],order:3},{id:"spawnedParticles-shapeType-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:4},{id:"spawnedParticles-particleCount-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"0.2 * binMagnitude"}],order:5},{id:"spawnedParticles-red-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"red",expression:"binAttackTime * 10"}],order:6},{id:"spawnedParticles-green-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"binFlux * 10"}],order:7},{id:"spawnedParticles-blue-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",input:"binPhaseDeviation"}],order:8},{id:"spawnedParticles-hue-base",group:"Light Particles/Appearance",subgroup:"",enabled:!1,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"hue",input:"binFlux"}],order:9},{id:"spawnedParticles-saturation-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"pow((binPhaseDeviation + 1 - spectralRolloff) * 0.5, 1.4)"}],order:10},{id:"spawnedParticles-brightness-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy) * (1 + binPhaseDeviation * 3)"}],order:11},{id:"spawnedParticles-luma-base",group:"Light Particles/Appearance",subgroup:"",enabled:!1,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:12},{id:"spawnedParticles-opacity-base",group:"Light Particles/Appearance",subgroup:"",enabled:!0,sectionDisabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"opacity",expression:"pow(binMagnitude, 3)"}],order:13},{id:"lines-direction-base",group:"Lines/Position",subgroup:"",enabled:!1,sectionDisabled:!1,target:"lines",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"direction",value:"x"}],order:18}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::count","spawnedParticles::Appearance","spawnedParticles::SPACING"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:"",standaloneGroups:[]},amplitudeThreshold:-96,particleRenderPercent:100,tonicHz:261.63,particlesPerOctave:102,_disabled:[],cameraFov:104,enableAggressiveThinning:!0,dominantPeakCulling:!0,peakEnergyThreshold:.18,uiDirectives:{responsiveInterface:!0,resizableAndCollapsibleTabs:!0,tooltipsForAllControls:!0,tooltipContent:"feature_and_current_value"}},Lv="2026-04-06T20:23:54.144Z",Dv={schemaVersion:Rv,name:Pv,params:Nv,updatedAt:Lv},Fv={menu:{file:"File",view:"View",settings:"Settings",rules:"Rules",collapse:"Collapse"},file:{project:"Project",projectNew:"New Project",projectLoad:"Load",projectSave:"Save",projectSaveAs:"Save As",presets:"Presets",presetLoad:"Load",presetUpload:"Upload",presetSave:"Save",presetSaveProject:"Save",presetSaveLocal:"Save Local",presetRemove:"Remove",presetSelectPlaceholder:"Select preset",presetNamePlaceholder:"Preset name",export:"Export",exportImage:"PNG",exportImageNoBg:"PNG transparent",exportVideo:"Video",exportObj:"OBJ"},view:{canvasSize:"Canvas Size",width:"Width",height:"Height",canvasZoom:"Canvas Zoom %",backgroundColor:"Background Color",cameraPosition:"Camera Position",cameraTarget:"Camera Target",cameraReset:"Reset Camera",cameraFit:"Fit",cameraClean:"Clean",projection:"Projection",projectionAxo:"Axonometry",projectionPerspective:"Perspective",axoPreset:"Axo Preset",axoIsometric:"Isometry",axoOrthoXY:"Orthogonal XY",axoOrthoXZ:"Orthogonal XZ",axoOrthoYZ:"Orthogonal YZ",angleOfView:"Angle Of View",blending:"Blending",postProcessing:"Post-Processing",postProcessingEnabled:"Enable Post-Processing",bloomEnabled:"Bloom Enabled",bloomStrength:"Bloom Strength",bloomRadius:"Bloom Radius",bloomThreshold:"Bloom Threshold",bokehEnabled:"Bokeh Enabled",bokehFocus:"Bokeh Focus",bokehAperture:"Bokeh Aperture",bokehMaxBlur:"Bokeh Max Blur",guides:"Guides",guideAxes:"Origin Axes",guideCoordinates:"Coordinate Guides",cameraHud:"Camera HUD"},settings:{sensitivity:"Sensitivity",audioResolution:"Audio Resolution",particleDefaultSize:"Default Size",particleCapacity:"Capacity",spawnRate:"Spawn Rate",activityInterval:"Activity Interval",frequencyRange:"Frequency Range",volume:"Volume",instability:"Instability",attackSharpness:"Attack Sharpness",energy:"Energy",sharpness:"Sharpness",activity:"Activity",noisiness:"Noisiness",sliders:"Sliders",processing:"Processing",system:"System",normalizationRanges:"Normalization Ranges",resetDefaults:"Reset Defaults"},rules:{title:"Rules",condition:"Condition",addCondition:"If",when:"When",selectValue:"Select value",removeCondition:"Remove condition",always:"always",expression:"Expression",detailVariable:"Detail Variable",overallVariable:"Overall Variable",targetParticles:"Particles",targetLines:"Lines",targetBackground:"Background",targetCamera:"Camera",undefined:"undefined",insertVariable:"Insert variable...",detailVariables:"Detail Variables",overallVariables:"Overall Variables",mathPlaceholder:"Type math or number and add",addMath:"Add Math",clearTokens:"Clear",tokenEditorPlaceholder:"Build expression with variables and math actions",insertHere:"Insert",insertToken:"Insert token...",number:"Number",mathActions:"Math Actions",mathValue:"Value",mathAdd:"Add",mathSubtract:"Subtract",mathMultiply:"Multiply",mathDivide:"Divide",mathParentheses:"Parentheses"}},Iv=[{id:"binMagnitude",group:"detail",label:"Detail Volume",legacyName:"binMagnitude",description:"Per-frequency volume of the current bin."},{id:"binRMSEnergy",group:"detail",label:"Detail Energy",legacyName:"binRMSEnergy",description:"Per-frequency RMS energy for the current bin."},{id:"frequencyHz",group:"detail",label:"Frequency Hz",legacyName:"frequencyHz",description:"Physical frequency measured in Hz."},{id:"normFreq",group:"detail",label:"Frequency Normalized",legacyName:"normFreq",description:"Physical frequency normalized into a 0-1 range."},{id:"notePitchClass",group:"detail",label:"Musical Note",legacyName:"notePitchClass",description:"High value means a higher note within the chromatic scale."},{id:"pan",group:"detail",label:"Pan",legacyName:"pan",description:"Left-to-right stereo value."},{id:"octave",group:"detail",label:"Octave",legacyName:"octave",description:"High value means a higher register."},{id:"binAttackTime",group:"detail",label:"Attack Sharpness",legacyName:"binAttackTime",description:"High value means a very fast, snappy start to the sound."},{id:"binEnvelope",group:"detail",label:"Envelope",legacyName:"binEnvelope",description:"High value means the sound is currently at its loudest point in its cycle."},{id:"binEnvelopeState",group:"detail",label:"Envelope State",legacyName:"binEnvelopeState",description:"Current ADSR phase of a specific frequency bin."},{id:"binFlux",group:"detail",label:"Activity",legacyName:"binFlux",description:"High value means the sound or tone is changing rapidly."},{id:"binPhase",group:"detail",label:"Phase",legacyName:"binPhase",description:"High value means the wave is at the top of its cycle."},{id:"binPhaseDeviation",group:"detail",label:"Instability",legacyName:"binPhaseDeviation",description:"High value means phase is shifting unpredictably."},{id:"amplitude",group:"overall",label:"Volume",legacyName:"amplitude",description:"Volume of the current frame."},{id:"high",group:"overall",label:"High Tones",legacyName:"high",description:"Volume of the high frequency range."},{id:"mid",group:"overall",label:"Mid Tones",legacyName:"mid",description:"Volume of the mid frequency range."},{id:"bass",group:"overall",label:"Low Tones",legacyName:"bass",description:"Volume of the low frequency range."},{id:"deltaTime",group:"overall",label:"Delta Time",legacyName:"deltaTime",description:"Elapsed time between current frame and previous frame."},{id:"peakFreq",group:"overall",label:"Peak Frequency",legacyName:"peakFreq",description:"How high the loudest detected frequency is."},{id:"time",group:"overall",label:"Current Time",legacyName:"time",description:"Timestamp of the audio file."},{id:"chromagram",group:"overall",label:"Complexity",legacyName:"chromagram",description:"High value means a rich multi-note harmonic profile."},{id:"globalRmsEnergy",group:"overall",label:"Energy",legacyName:"globalRmsEnergy",description:"Average volume of the current frame."},{id:"inharmonicity",group:"overall",label:"Dissonance",legacyName:"inharmonicity",description:"High value means overtones are out of tune with the fundamental."},{id:"peakAmplitude",group:"overall",label:"Peak Volume",legacyName:"peakAmplitude",description:"High value means the loudest point is near maximum."},{id:"spectralCentroid",group:"overall",label:"Sharpness",legacyName:"spectralCentroid",description:"High value means a high-frequency dominant sound."},{id:"spectralFlatness",group:"overall",label:"Noisiness",legacyName:"spectralFlatness",description:"High value means noisy; low value means pure tone."},{id:"spectralFlux",group:"overall",label:"Activity",legacyName:"spectralFlux",description:"High value means sound is changing rapidly."},{id:"spectralRolloff",group:"overall",label:"Brightness",legacyName:"spectralRolloff",description:"High value means the sound includes many high frequencies."},{id:"spectralSkewness",group:"overall",label:"Imbalance",legacyName:"spectralSkewness",description:"High value means energy is weighted toward one end of the spectrum."},{id:"spectralSpread",group:"overall",label:"Spread",legacyName:"spectralSpread",description:"High value means the sound covers a wide frequency spread."},{id:"zeroCrossingRate",group:"overall",label:"Rattle",legacyName:"zeroCrossingRate",description:"High value means sharp high-frequency clatter."},{id:"canvasHeightPx",group:"overall",label:"Canvas Height",legacyName:"canvasHeightPx",description:"Canvas height measured in pixels."},{id:"canvasWidthPx",group:"overall",label:"Canvas Width",legacyName:"canvasWidthPx",description:"Canvas width measured in pixels."},{id:"audioLengthSec",group:"overall",label:"Audio Length",legacyName:"audioLengthSec",description:"Audio file length measured in seconds."}],Uv={uiText:Fv,ruleVariables:Iv},kd=Uv,Yr=Object.freeze(kd.ruleVariables||[]),ce=Object.freeze(kd.uiText||{});function Vr(n){return Yr.filter(e=>e.group===n)}function cl(n){return Yr.find(e=>e.id===n)||null}const Ov=Object.freeze({binMagnitude:[0,1],binPhase:[0,1],binFlux:[-1,1],binPhaseDeviation:[0,1],binAttackTime:[0,1],binEnvelope:[0,3],binEnvelopeState:[0,3],binRMSEnergy:[0,1],frequencyHz:[0,22050],notePitchClass:[0,11],octave:[-2,12],normFreq:[0,1],pan:[-1,1],amplitude:[0,1],bass:[0,1],mid:[0,1],high:[0,1],peakFreq:[0,22050],globalRmsEnergy:[0,1],peakAmplitude:[0,1],zeroCrossingRate:[0,1],spectralCentroid:[0,1],spectralFlux:[0,1],spectralFlatness:[0,1],spectralRolloff:[0,1],spectralSpread:[0,1],spectralSkewness:[0,1],chromagram:[0,1],inharmonicity:[0,1],time:[0,Number.POSITIVE_INFINITY],deltaTime:[0,1],canvasWidthPx:[0,Number.POSITIVE_INFINITY],canvasHeightPx:[0,Number.POSITIVE_INFINITY],canvasWidthUnits:[0,Number.POSITIVE_INFINITY],canvasHeightUnits:[0,Number.POSITIVE_INFINITY],canvasWidth:[0,Number.POSITIVE_INFINITY],canvasHeight:[0,Number.POSITIVE_INFINITY],audioLengthSec:[0,Number.POSITIVE_INFINITY]}),Bv=[{id:"canvasWidth",group:"overall",label:"Canvas Width",legacyName:"canvasWidth",description:"Legacy alias of canvasWidthPx."},{id:"canvasHeight",group:"overall",label:"Canvas Height",legacyName:"canvasHeight",description:"Legacy alias of canvasHeightPx."}],kv=Yr.concat(Bv).map(n=>({id:n.id,type:"number",range:Ov[n.id]||[0,1],category:n.group,label:n.label,legacyName:n.legacyName,description:n.description})),zv=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","lines","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","lines","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","lines","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"targetX",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetY",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetZ",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"angleOfView",type:"number",range:[20,120],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","lines","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]},{id:"length",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"direction",type:"enum",values:["x","y","z"],targets:["lines"]},{id:"thickness",type:"number",range:[0,64],targets:["lines"]},{id:"lineCount",type:"number",range:[0,1],targets:["lines"]}],kl=Object.freeze(["spawnedParticles","allParticles","lines","background","camera"]),zd=Object.freeze(["spawnedOnly","allLivingFrame"]),Vd=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),Hd=Object.freeze(["always",">",">=","<","<=","==","!="]),Da=Object.freeze({version:1,entries:Object.freeze(kv.map(n=>Object.freeze({...n})))}),zl=Object.freeze({version:1,entries:Object.freeze(zv.map(n=>Object.freeze({...n})))});new Map(Da.entries.map(n=>[n.id,n]));new Map(zl.entries.map(n=>[n.id,n]));function Vv(){return Da}function Hv(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Gv(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function bu(n,e){if(typeof n!="string")return null;const t=Gv(n);if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!Hv(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),s=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of s)if(!i.has(a))return`Expression references unknown identifier: ${a}`;return null}function Gd(n){return(n==null?void 0:n.target)==="physicalParticles"?"__legacy_physical_particles__":kl.includes(n==null?void 0:n.target)?n.target:String((n==null?void 0:n.context)||"").toLowerCase().includes("line")?"lines":(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Wv(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:kl).includes(e)}function Xv(n,e={input:Da,output:zl}){var d,h,f,v,_;const t=[],i=[],r=[],s=new Map((((d=e.input)==null?void 0:d.entries)??[]).map(m=>[m.id,m])),a=new Map((((h=e.output)==null?void 0:h.entries)??[]).map(m=>[m.id,m]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};zd.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=Gd(n);if(kl.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(f=n.condition)!=null&&f.operator&&!Hd.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((v=n.condition)==null?void 0:v.expression)!==void 0){const m=bu(n.condition.expression,s);m&&t.push(`Condition expression invalid: ${m}`)}const l=(_=n.condition)==null?void 0:_.input;l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((m,p)=>{const E=m==null?void 0:m.output;if(!E||!a.has(E)){t.push(`Unknown action output at index ${p}: ${String(E)}`);return}const y=a.get(E);if(Wv(y,o)||t.push(`Output ${E} is not valid for target ${o} at index ${p}`),m!=null&&m.operator&&!Vd.includes(m.operator)&&t.push(`Unknown action operator at index ${p}: ${String(m.operator)}`),y.type==="enum"&&(m==null?void 0:m.value)!==void 0&&!y.values.includes(m.value)&&t.push(`Invalid enum value for ${E} at index ${p}: ${String(m.value)}. Allowed: ${y.values.join("|")}`),(m==null?void 0:m.operator)==="set"){const N=u.get(E);N!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:E,overriddenActionIndex:N,winningActionIndex:N,resolution:"first-executes"}),i.push(`Contradiction on ${E}: action ${N} takes precedence; later action ${p} is ignored.`)),u.set(E,p)}const b=m==null?void 0:m.input;if(b&&!s.has(b)&&t.push(`Unknown action input at index ${p}: ${b}`),(m==null?void 0:m.expression)!==void 0){const N=bu(m.expression,s);N&&t.push(`Action expression invalid at index ${p}: ${N}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function Wd(n,e={input:Da,output:zl}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{var c,u,d;const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,sectionDisabled:(s==null?void 0:s.sectionDisabled)===!0,target:Gd(s),scope:zd.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(h=>({...h})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),Hd.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=String(o.condition.input)),(u=o.condition)!=null&&u.valueInput&&(o.condition.valueInput=String(o.condition.valueInput)),typeof((d=o.condition)==null?void 0:d.expression)=="string"&&(o.condition.expression=o.condition.expression),o.scope=o.target==="spawnedParticles"||o.target==="lines"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(h=>h&&typeof h=="object").map(h=>({operator:Vd.includes(h.operator)?h.operator:"set",output:h.output,value:h.value,input:h.input,expression:h.expression}));const l=Xv(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const qv="seesound_user_defaults_v4",Xd="seesound_disabled_v4",qd="seesound_user_presets_v1",jd="seesound_hidden_root_presets_v1",jv=Object.assign({"../../../presets/linear basic scriabin colors.json":bv,"../../../presets/linear basic.json":Mv,"../../../presets/linear colors.json":Cv,"../../../presets/linear textured.json":Av,"../../../presets/linear timbre colors.json":Dv}),ya=1,Yv={logCompilerStatus:!1,logCompilerTiming:!1},bs=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:ya,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],standaloneGroups:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""}});function Fa(n){const e=n&&typeof n=="object"?n:{};return{collapsedGroups:Array.isArray(e.collapsedGroups)?e.collapsedGroups.map(t=>String(t||"").trim()).filter(Boolean):[],collapsedSubgroups:[],collapsedRules:Array.isArray(e.collapsedRules)?e.collapsedRules.map(t=>String(t||"").trim()).filter(Boolean):[],selectedContextGroup:String(e.selectedContextGroup||"spawnedParticles"),selectedGroupPath:String(e.selectedGroupPath||e.selectedGroupName||""),selectedGroupName:String(e.selectedGroupPath||e.selectedGroupName||""),selectedSubgroup:"",standaloneGroups:Array.isArray(e.standaloneGroups)?e.standaloneGroups.map(t=>String(t||"").trim()).filter(Boolean):[]}}function Vl(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",s=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:s}}).filter(Boolean):[]}function dn({key:n,label:e,min:t,max:i,step:r,def:s,unit:a,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:s,unit:a,desc:o,canDisable:!1}}const Hl=[{key:"inputGain",group:"inputGain",label:"Sensitivity",min:0,max:3,step:.01,default:1,unit:"×",desc:"Global input gain scaler applied before analysis and spawning.",canDisable:!1},{key:"freqNormMin",group:"inputProcessing",label:"Frequency Range Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for frequency normalization.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Frequency Range Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for frequency normalization.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"Audio Resolution",default:2048,unit:"",desc:"FFT analysis size. Higher values increase frequency detail.",isDropdown:!0,dropdownOptions:[{label:"512",value:512},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},{key:"fluxWindowFrames",group:"inputProcessing",label:"Activity Interval",min:1,max:64,step:1,default:10,unit:"frames",desc:"Rolling frame window used to smooth activity detection.",canDisable:!1},dn({key:"binMagnitudeNormMin",label:"Volume Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalization lower bound for per-bin volume."}),dn({key:"binMagnitudeNormMax",label:"Volume Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for per-bin volume."}),dn({key:"binFluxNormMin",label:"Activity Detail Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalization lower bound for per-frequency activity."}),dn({key:"binFluxNormMax",label:"Activity Detail Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalization upper bound for per-frequency activity."}),dn({key:"binPhaseDeviationNormMin",label:"Instability Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalization lower bound for per-bin instability."}),dn({key:"binPhaseDeviationNormMax",label:"Instability Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalization upper bound for per-bin instability."}),dn({key:"binAttackTimeNormMin",label:"Attack Sharpness Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalization lower bound for per-bin attack sharpness."}),dn({key:"binAttackTimeNormMax",label:"Attack Sharpness Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalization upper bound for per-bin attack sharpness."}),dn({key:"globalRmsNormMin",label:"Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalization lower bound for frame energy."}),dn({key:"globalRmsNormMax",label:"Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for frame energy."}),dn({key:"spectralCentroidNormMin",label:"Sharpness Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalization lower bound for spectral sharpness."}),dn({key:"spectralCentroidNormMax",label:"Sharpness Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalization upper bound for spectral sharpness."}),dn({key:"globalSpectralFluxNormMin",label:"Activity Global Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalization lower bound for frame-level activity."}),dn({key:"globalSpectralFluxNormMax",label:"Activity Global Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalization upper bound for frame-level activity."}),dn({key:"spectralFlatnessNormMin",label:"Noisiness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalization lower bound for spectral noisiness."}),dn({key:"spectralFlatnessNormMax",label:"Noisiness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalization upper bound for spectral noisiness."}),{key:"defaultParticleSize",group:"geometry",label:"Default Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Capacity",min:1e5,max:5e6,step:1e3,default:1e6,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particlesByFrame",group:"geometry",label:"Spawn Rate",min:100,max:5e3,step:1,default:1e3,unit:"N",desc:"Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"cameraPosX",group:"mixing",label:"Camera Position X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position X in world units.",canDisable:!1},{key:"cameraPosY",group:"mixing",label:"Camera Position Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position Y in world units.",canDisable:!1},{key:"cameraPosZ",group:"mixing",label:"Camera Position Z",min:-5e3,max:5e3,step:1,default:420,unit:"u",desc:"Camera position Z in world units.",canDisable:!1},{key:"cameraTargetX",group:"mixing",label:"Camera Target X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target X in world units.",canDisable:!1},{key:"cameraTargetY",group:"mixing",label:"Camera Target Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Y in world units.",canDisable:!1},{key:"cameraTargetZ",group:"mixing",label:"Camera Target Z",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Z in world units.",canDisable:!1},{key:"cameraAngleOfView",group:"mixing",label:"Angle Of View",min:20,max:120,step:1,default:55,unit:"deg",desc:"Perspective camera field of view in degrees.",canDisable:!1},{key:"postProcessEnabled",group:"mixing",label:"Post-Processing",min:0,max:1,step:1,default:0,unit:"",desc:"Master switch for all post-processing effects.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomEnabled",group:"mixing",label:"Bloom Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Unreal Bloom pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomStrength",group:"mixing",label:"Bloom Strength",min:0,max:4,step:.01,default:1.15,unit:"",desc:"Bloom intensity multiplier.",canDisable:!1},{key:"bloomRadius",group:"mixing",label:"Bloom Radius",min:0,max:2,step:.01,default:.7,unit:"",desc:"Bloom spread radius.",canDisable:!1},{key:"bloomThreshold",group:"mixing",label:"Bloom Threshold",min:0,max:1,step:.01,default:.18,unit:"",desc:"Luminance threshold before bloom is applied.",canDisable:!1},{key:"bokehEnabled",group:"mixing",label:"Bokeh Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Bokeh depth-of-field pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bokehFocus",group:"mixing",label:"Bokeh Focus",min:1,max:5e3,step:1,default:380,unit:"u",desc:"Bokeh focus distance.",canDisable:!1},{key:"bokehAperture",group:"mixing",label:"Bokeh Aperture",min:0,max:.001,step:1e-5,default:12e-5,unit:"",desc:"Bokeh aperture value.",canDisable:!1},{key:"bokehMaxBlur",group:"mixing",label:"Bokeh Max Blur",min:0,max:.1,step:5e-4,default:.01,unit:"",desc:"Maximum blur amount for bokeh pass.",canDisable:!1},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]},{key:"originSignEnabled",group:"mixing",label:"Origin Axes",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide origin axes guide.",isToggle:!0,toggleLabels:["Off","On"]},{key:"coordinateGuidesEnabled",group:"mixing",label:"Coordinate Guides",min:0,max:1,step:1,default:0,unit:"",desc:"Show/hide coordinate guide grids.",isToggle:!0,toggleLabels:["Off","On"]}];function $v(){try{return JSON.parse(localStorage.getItem(qv)||"{}")}catch{return{}}}function Zv(){try{return new Set(JSON.parse(localStorage.getItem(Xd)||"[]"))}catch{return new Set}}function tr(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=Wd(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:bs.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):bs.ruleSchemaVersion,t.palettes=Vl(e.palettes),t.ruleUiState=Fa(e.ruleUiState),r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Kv(){const n=tr($v()),e={};for(const t of Hl)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=Vl(n.palettes),e.ruleUiState=Fa(n.ruleUiState),e}const se=Kv(),ps=Zv(),di=[],Ia=[],xu=300;let xs=!1;function Jv(n){return JSON.parse(JSON.stringify(n))}function Gl(){return{params:Jv(se),disabled:[...ps]}}function Qv(n,e){if(!n||!e||JSON.stringify(n.params)!==JSON.stringify(e.params))return!1;const t=Array.isArray(n.disabled)?[...n.disabled].sort():[],i=Array.isArray(e.disabled)?[...e.disabled].sort():[];return JSON.stringify(t)===JSON.stringify(i)}function Yd(n){const e=tr((n&&typeof n=="object"?n.params:{})||{});for(const i of Object.keys(se))delete se[i];for(const[i,r]of Object.entries(e))se[i]=r,Ji(i,r);const t=new Set(Array.isArray(n==null?void 0:n.disabled)?n.disabled:[]);ps.clear();for(const i of t)ps.add(i);try{localStorage.setItem(Xd,JSON.stringify([...ps]))}catch{}Ji("disabled",null),Ji("*",e)}function Wl(){if(xs)return;const n=Gl(),e=di[di.length-1];e&&Qv(e,n)||(di.push(n),di.length>xu&&di.splice(0,di.length-xu),Ia.length=0)}function e_(){return di.length>0}function t_(){return Ia.length>0}function n_(){if(!e_())return!1;const n=di.pop(),e=Gl();Ia.push(e),xs=!0;try{Yd(n)}finally{xs=!1}return!0}function i_(){if(!t_())return!1;const n=Ia.pop(),e=Gl();di.push(e),xs=!0;try{Yd(n)}finally{xs=!1}return!0}const ul=new Set;function Xl(n){return ul.add(n),()=>ul.delete(n)}function Ji(n,e){for(const t of ul)try{t(se,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function Dt(n,e){Wl(),se[n]=e,Ji(n,e)}function rn(n){Wl();const e=n&&typeof n=="object"?n:{},t=tr({...se,...e}),i=Object.create(null),r=Object.keys(e);for(const l of r){const c=t[l];Object.is(se[l],c)||(se[l]=c,i[l]=c)}const s=["ruleBlocks","ruleEngineEnabled","ruleSchemaVersion","palettes","ruleUiState"];if(s.some(l=>Object.prototype.hasOwnProperty.call(e,l)))for(const l of s){const c=t[l];Object.is(se[l],c)||(se[l]=c,i[l]=c)}const o=Object.entries(i);if(o.length!==0){for(const[l,c]of o)Ji(l,c);Ji("*",i)}}function r_(){Wl();for(const n of Hl)se[n.key]=n.default;se.ruleBlocks=[],se.ruleEngineEnabled=!0,se.ruleSchemaVersion=ya,se.palettes=[],se.ruleUiState=Fa(bs.ruleUiState),Ji("*",null)}function ys(){const n=tr(se);return{...se,...n,_disabled:[...ps]}}function s_(n){const e=String(n||"").replace(/\\/g,"/");return e.slice(e.lastIndexOf("/")+1).replace(/\.json$/i,"")}function Ua(){try{const n=JSON.parse(localStorage.getItem(jd)||"[]");return Array.isArray(n)?new Set(n.map(e=>String(e||"").trim()).filter(Boolean)):new Set}catch{return new Set}}function $d(n){try{localStorage.setItem(jd,JSON.stringify([...n]))}catch{}}function Oa(){try{const n=JSON.parse(localStorage.getItem(qd)||"[]");if(!Array.isArray(n))return new Map;const e=new Map;for(const t of n){const i=String((t==null?void 0:t.name)||"").trim();i&&e.set(i,{name:i,params:Hr(t==null?void 0:t.params)})}return e}catch{return new Map}}function Zd(n){try{const e=[...n.values()].map(t=>({name:t.name,params:Hr(t.params)}));localStorage.setItem(qd,JSON.stringify(e))}catch{}}let ta=null;function ql(){if(ta)return ta;const n=new Map;for(const[e,t]of Object.entries(jv)){const i=t&&typeof t=="object"?t:{},r=String(i.name||s_(e)).trim();r&&n.set(r,{name:r,params:Hr(i.params)})}return ta=n,ta}function a_(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function o_(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function l_(n,e){if(e==null)return;if(n!=null&&n.isToggle)return o_(e,n.default);if(n!=null&&n.isDropdown){const r=a_(n).find(s=>String(s)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function Hr(n){try{const e=n&&typeof n=="object"?n:{},t={...e};for(const i of Hl){if(!Object.prototype.hasOwnProperty.call(e,i.key)||e[i.key]===void 0||e[i.key]===null){t[i.key]=i.default;continue}t[i.key]=l_(i,e[i.key])}return Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=bs.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=bs.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=Vl(e.palettes),t.ruleUiState=Fa(e.ruleUiState),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),tr(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),tr(n&&typeof n=="object"?n:{})}}async function dl(){const n=Ua(),e=[...ql().keys()].filter(i=>!n.has(i)),t=[...Oa().keys()];return[...new Set([...e,...t])].sort((i,r)=>i.localeCompare(r))}async function Ma(n,e){const t=String(n||"").trim();if(!t)return{ok:!1,error:"Preset name is required."};const i=Hr(e),r=Oa();r.set(t,{name:t,params:i}),Zd(r);const s=Ua();return s.delete(t)&&$d(s),{ok:!0,name:t,source:"localStorage"}}async function Kd(n){const e=String(n||"").trim();if(!e)return null;const t=Oa();if(t.has(e)){const a=t.get(e);return{name:a.name,params:Hr(a.params)}}if(Ua().has(e))return null;const r=ql();if(!r.has(e))return null;const s=r.get(e);try{return{name:s.name,params:Hr(s.params)}}catch(a){return console.warn("[Preset] load normalization failed, applying raw params:",a),{name:s.name,params:tr(s.params)}}}async function c_(n){const e=String(n||"").trim();if(!e)return{ok:!1,deleted:!1};const t=Oa();if(t.delete(e))return Zd(t),{ok:!0,deleted:!0,source:"localStorage"};if(ql().has(e)){const i=Ua();return i.add(e),$d(i),{ok:!0,deleted:!0,source:"hidden-root"}}return{ok:!1,deleted:!1}}var Ai;(function(n){n.Range="range",n.Steps="steps",n.Positions="positions",n.Count="count",n.Values="values"})(Ai||(Ai={}));var vn;(function(n){n[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue"})(vn||(vn={}));function u_(n){return Sa(n)&&typeof n.from=="function"}function Sa(n){return typeof n=="object"&&typeof n.to=="function"}function yu(n){n.parentElement.removeChild(n)}function hl(n){return n!=null}function Mu(n){n.preventDefault()}function d_(n){return n.filter(function(e){return this[e]?!1:this[e]=!0},{})}function h_(n,e){return Math.round(n/e)*e}function p_(n,e){var t=n.getBoundingClientRect(),i=n.ownerDocument,r=i.documentElement,s=Jd(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),e?t.top+s.y-r.clientTop:t.left+s.x-r.clientLeft}function Wn(n){return typeof n=="number"&&!isNaN(n)&&isFinite(n)}function Su(n,e,t){t>0&&(hn(n,e),setTimeout(function(){fa(n,e)},t))}function Eu(n){return Math.max(Math.min(n,100),0)}function Ba(n){return Array.isArray(n)?n:[n]}function f_(n){n=String(n);var e=n.split(".");return e.length>1?e[1].length:0}function hn(n,e){n.classList&&!/\s/.test(e)?n.classList.add(e):n.className+=" "+e}function fa(n,e){n.classList&&!/\s/.test(e)?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function m_(n,e){return n.classList?n.classList.contains(e):new RegExp("\\b"+e+"\\b").test(n.className)}function Jd(n){var e=window.pageXOffset!==void 0,t=(n.compatMode||"")==="CSS1Compat",i=e?window.pageXOffset:t?n.documentElement.scrollLeft:n.body.scrollLeft,r=e?window.pageYOffset:t?n.documentElement.scrollTop:n.body.scrollTop;return{x:i,y:r}}function g_(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function v_(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch{}return n}function __(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function jl(n,e){return 100/(e-n)}function pl(n,e,t){return e*100/(n[t+1]-n[t])}function b_(n,e){return pl(n,n[0]<0?e+Math.abs(n[0]):e-n[0],0)}function x_(n,e){return e*(n[1]-n[0])/100+n[0]}function Ms(n,e){for(var t=1;n>=e[t];)t+=1;return t}function y_(n,e,t){if(t>=n.slice(-1)[0])return 100;var i=Ms(t,n),r=n[i-1],s=n[i],a=e[i-1],o=e[i];return a+b_([r,s],t)/jl(a,o)}function M_(n,e,t){if(t>=100)return n.slice(-1)[0];var i=Ms(t,e),r=n[i-1],s=n[i],a=e[i-1],o=e[i];return x_([r,s],(t-a)*jl(a,o))}function S_(n,e,t,i){if(i===100)return i;var r=Ms(i,n),s=n[r-1],a=n[r];return t?i-s>(a-s)/2?a:s:e[r-1]?n[r-1]+h_(i-n[r-1],e[r-1]):i}var Qd=function(){function n(e,t,i){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=t;var r,s=[];for(Object.keys(e).forEach(function(a){s.push([Ba(e[a]),a])}),s.sort(function(a,o){return a[0][0]-o[0][0]}),r=0;r<s.length;r++)this.handleEntryPoint(s[r][1],s[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return n.prototype.getDistance=function(e){for(var t=[],i=0;i<this.xNumSteps.length-1;i++)t[i]=pl(this.xVal,e,i);return t},n.prototype.getAbsoluteDistance=function(e,t,i){var r=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[r+1];)r++;else e===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);!i&&e===this.xPct[r+1]&&r++,t===null&&(t=[]);var s,a=1,o=t[r],l=0,c=0,u=0,d=0;for(i?s=(e-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):s=(this.xPct[r+1]-e)/(this.xPct[r+1]-this.xPct[r]);o>0;)l=this.xPct[r+1+d]-this.xPct[r+d],t[r+d]*a+100-s*100>100?(c=l*s,a=(o-100*s)/t[r+d],s=1):(c=t[r+d]*l/100*a,a=0),i?(u=u-c,this.xPct.length+d>=1&&d--):(u=u+c,this.xPct.length-d>=1&&d++),o=t[r+d]*a;return e+u},n.prototype.toStepping=function(e){return e=y_(this.xVal,this.xPct,e),e},n.prototype.fromStepping=function(e){return M_(this.xVal,this.xPct,e)},n.prototype.getStep=function(e){return e=S_(this.xPct,this.xSteps,this.snap,e),e},n.prototype.getDefaultStep=function(e,t,i){var r=Ms(e,this.xPct);return(e===100||t&&e===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/i},n.prototype.getNearbySteps=function(e){var t=Ms(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},n.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(f_);return Math.max.apply(null,e)},n.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},n.prototype.convert=function(e){return this.getStep(this.toStepping(e))},n.prototype.handleEntryPoint=function(e,t){var i;if(e==="min"?i=0:e==="max"?i=100:i=parseFloat(e),!Wn(i)||!Wn(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(t[0]);var r=Number(t[1]);i?this.xSteps.push(isNaN(r)?!1:r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},n.prototype.handleStepPoint=function(e,t){if(t){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=pl([this.xVal[e],this.xVal[e+1]],t,0)/jl(this.xPct[e],this.xPct[e+1]);var i=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],r=Math.ceil(Number(i.toFixed(3))-1),s=this.xVal[e]+this.xNumSteps[e]*r;this.xHighestCompleteStep[e]=s}},n}(),Cu={to:function(n){return n===void 0?"":n.toFixed(2)},from:Number},eh={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},Ci={tooltips:".__tooltips",aria:".__aria"};function E_(n,e){if(!Wn(e))throw new Error("noUiSlider: 'step' is not numeric.");n.singleStep=e}function C_(n,e){if(!Wn(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");n.keyboardPageMultiplier=e}function w_(n,e){if(!Wn(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");n.keyboardMultiplier=e}function T_(n,e){if(!Wn(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");n.keyboardDefaultStep=e}function A_(n,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");n.spectrum=new Qd(e,n.snap||!1,n.singleStep)}function R_(n,e){if(e=Ba(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");n.handles=e.length,n.start=e}function P_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");n.snap=e}function N_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");n.animate=e}function L_(n,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");n.animationDuration=e}function th(n,e){var t=[!1],i;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(i=1;i<n.handles;i++)t.push(e);t.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==n.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t=e}n.connect=t}function D_(n,e){switch(e){case"horizontal":n.ort=0;break;case"vertical":n.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function nh(n,e){if(!Wn(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(n.margin=n.spectrum.getDistance(e))}function F_(n,e){if(!Wn(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(n.limit=n.spectrum.getDistance(e),!n.limit||n.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function I_(n,e){var t;if(!Wn(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||Wn(e[0])||Wn(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),n.padding=[n.spectrum.getDistance(e[0]),n.spectrum.getDistance(e[1])],t=0;t<n.spectrum.xNumSteps.length-1;t++)if(n.padding[0][t]<0||n.padding[1][t]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=n.spectrum.xVal[0],s=n.spectrum.xVal[n.spectrum.xVal.length-1];if(i/(s-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function U_(n,e){switch(e){case"ltr":n.dir=0;break;case"rtl":n.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function O_(n,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var t=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,s=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,l=e.indexOf("invert-connects")>=0,c=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(n.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");nh(n,n.start[1]-n.start[0])}if(l&&n.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(n.margin||n.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");n.events={tap:t||s,drag:i,dragAll:c,smoothSteps:u,fixed:r,snap:s,hover:a,unconstrained:o,invertConnects:l}}function B_(n,e){if(e!==!1)if(e===!0||Sa(e)){n.tooltips=[];for(var t=0;t<n.handles;t++)n.tooltips.push(e)}else{if(e=Ba(e),e.length!==n.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(i){if(typeof i!="boolean"&&!Sa(i))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),n.tooltips=e}}function k_(n,e){if(e.length!==n.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");n.handleAttributes=e}function z_(n,e){if(!Sa(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");n.ariaFormat=e}function V_(n,e){if(!u_(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");n.format=e}function H_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");n.keyboardSupport=e}function G_(n,e){n.documentElement=e}function W_(n,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");n.cssPrefix=e}function X_(n,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof n.cssPrefix=="string"?(n.cssClasses={},Object.keys(e).forEach(function(t){n.cssClasses[t]=n.cssPrefix+e[t]})):n.cssClasses=e}function ih(n){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Cu,format:Cu},t={step:{r:!1,t:E_},keyboardPageMultiplier:{r:!1,t:C_},keyboardMultiplier:{r:!1,t:w_},keyboardDefaultStep:{r:!1,t:T_},start:{r:!0,t:R_},connect:{r:!0,t:th},direction:{r:!0,t:U_},snap:{r:!1,t:P_},animate:{r:!1,t:N_},animationDuration:{r:!1,t:L_},range:{r:!0,t:A_},orientation:{r:!1,t:D_},margin:{r:!1,t:nh},limit:{r:!1,t:F_},padding:{r:!1,t:I_},behaviour:{r:!0,t:O_},ariaFormat:{r:!1,t:z_},format:{r:!1,t:V_},tooltips:{r:!1,t:B_},keyboardSupport:{r:!0,t:H_},documentElement:{r:!1,t:G_},cssPrefix:{r:!0,t:W_},cssClasses:{r:!0,t:X_},handleAttributes:{r:!1,t:k_}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:eh,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};n.format&&!n.ariaFormat&&(n.ariaFormat=n.format),Object.keys(t).forEach(function(l){if(!hl(n[l])&&i[l]===void 0){if(t[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}t[l].t(e,hl(n[l])?n[l]:i[l])}),e.pips=n.pips;var r=document.createElement("div"),s=r.style.msTransform!==void 0,a=r.style.transform!==void 0;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function q_(n,e,t){var i=g_(),r=__(),s=r&&v_(),a=n,o,l,c,u,d,h,f=e.spectrum,v=[],_=[],m=[],p=0,E={},y=!1,b=n.ownerDocument,N=e.documentElement||b.documentElement,P=b.body,D=b.dir==="rtl"||e.ort===1?0:100;function B(w,O){var W=b.createElement("div");return O&&hn(W,O),w.appendChild(W),W}function C(w,O){var W=B(w,e.cssClasses.origin),re=B(W,e.cssClasses.handle);if(B(re,e.cssClasses.touchArea),re.setAttribute("data-handle",String(O)),e.keyboardSupport&&(re.setAttribute("tabindex","0"),re.addEventListener("keydown",function(xe){return De(xe,O)})),e.handleAttributes!==void 0){var be=e.handleAttributes[O];Object.keys(be).forEach(function(xe){re.setAttribute(xe,be[xe])})}return re.setAttribute("role","slider"),re.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),O===0?hn(re,e.cssClasses.handleLower):O===e.handles-1&&hn(re,e.cssClasses.handleUpper),W.handle=re,W}function S(w,O){return O?B(w,e.cssClasses.connect):!1}function F(w,O){l=B(O,e.cssClasses.connects),c=[],u=[],u.push(S(l,w[0]));for(var W=0;W<e.handles;W++)c.push(C(O,W)),m[W]=W,u.push(S(l,w[W+1]))}function ee(w){hn(w,e.cssClasses.target),e.dir===0?hn(w,e.cssClasses.ltr):hn(w,e.cssClasses.rtl),e.ort===0?hn(w,e.cssClasses.horizontal):hn(w,e.cssClasses.vertical);var O=getComputedStyle(w).direction;return O==="rtl"?hn(w,e.cssClasses.textDirectionRtl):hn(w,e.cssClasses.textDirectionLtr),B(w,e.cssClasses.base)}function $(w,O){return!e.tooltips||!e.tooltips[O]?!1:B(w.firstChild,e.cssClasses.tooltip)}function ne(){return a.hasAttribute("disabled")}function Q(w){var O=c[w];return O.hasAttribute("disabled")}function Z(w){w!=null?(c[w].setAttribute("disabled",""),c[w].handle.removeAttribute("tabindex")):(a.setAttribute("disabled",""),c.forEach(function(O){O.handle.removeAttribute("tabindex")}))}function pe(w){w!=null?(c[w].removeAttribute("disabled"),c[w].handle.setAttribute("tabindex","0")):(a.removeAttribute("disabled"),c.forEach(function(O){O.removeAttribute("disabled"),O.handle.setAttribute("tabindex","0")}))}function g(){h&&(x("update"+Ci.tooltips),h.forEach(function(w){w&&yu(w)}),h=null)}function A(){g(),h=c.map($),Ue("update"+Ci.tooltips,function(w,O,W){if(!(!h||!e.tooltips)&&h[O]!==!1){var re=w[O];e.tooltips[O]!==!0&&(re=e.tooltips[O].to(W[O])),h[O].innerHTML=re}})}function R(){x("update"+Ci.aria),Ue("update"+Ci.aria,function(w,O,W,re,be){m.forEach(function(xe){var te=c[xe],le=oe(_,xe,0,!0,!0,!0),Je=oe(_,xe,100,!0,!0,!0),ae=be[xe],ze=String(e.ariaFormat.to(W[xe]));le=f.fromStepping(le).toFixed(1),Je=f.fromStepping(Je).toFixed(1),ae=f.fromStepping(ae).toFixed(1),te.children[0].setAttribute("aria-valuemin",le),te.children[0].setAttribute("aria-valuemax",Je),te.children[0].setAttribute("aria-valuenow",ae),te.children[0].setAttribute("aria-valuetext",ze)})})}function q(w){if(w.mode===Ai.Range||w.mode===Ai.Steps)return f.xVal;if(w.mode===Ai.Count){if(w.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var O=w.values-1,W=100/O,re=[];O--;)re[O]=O*W;return re.push(100),ge(re,w.stepped)}return w.mode===Ai.Positions?ge(w.values,w.stepped):w.mode===Ai.Values?w.stepped?w.values.map(function(be){return f.fromStepping(f.getStep(f.toStepping(be)))}):w.values:[]}function ge(w,O){return w.map(function(W){return f.fromStepping(O?f.getStep(W):W)})}function Ve(w){function O(ae,ze){return Number((ae+ze).toFixed(7))}var W=q(w),re={},be=f.xVal[0],xe=f.xVal[f.xVal.length-1],te=!1,le=!1,Je=0;return W=d_(W.slice().sort(function(ae,ze){return ae-ze})),W[0]!==be&&(W.unshift(be),te=!0),W[W.length-1]!==xe&&(W.push(xe),le=!0),W.forEach(function(ae,ze){var Ce,Xe,ht,gt=ae,lt=W[ze+1],pt,Lt,It,Yt,tn,$t,M,k=w.mode===Ai.Steps;for(k&&(Ce=f.xNumSteps[ze]),Ce||(Ce=lt-gt),lt===void 0&&(lt=gt),Ce=Math.max(Ce,1e-7),Xe=gt;Xe<=lt;Xe=O(Xe,Ce)){for(pt=f.toStepping(Xe),Lt=pt-Je,tn=Lt/(w.density||1),$t=Math.round(tn),M=Lt/$t,ht=1;ht<=$t;ht+=1)It=Je+ht*M,re[It.toFixed(5)]=[f.fromStepping(It),0];Yt=W.indexOf(Xe)>-1?vn.LargeValue:k?vn.SmallValue:vn.NoValue,!ze&&te&&Xe!==lt&&(Yt=0),Xe===lt&&le||(re[pt.toFixed(5)]=[Xe,Yt]),Je=pt}}),re}function K(w,O,W){var re,be,xe=b.createElement("div"),te=(re={},re[vn.None]="",re[vn.NoValue]=e.cssClasses.valueNormal,re[vn.LargeValue]=e.cssClasses.valueLarge,re[vn.SmallValue]=e.cssClasses.valueSub,re),le=(be={},be[vn.None]="",be[vn.NoValue]=e.cssClasses.markerNormal,be[vn.LargeValue]=e.cssClasses.markerLarge,be[vn.SmallValue]=e.cssClasses.markerSub,be),Je=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],ae=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];hn(xe,e.cssClasses.pips),hn(xe,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function ze(Xe,ht){var gt=ht===e.cssClasses.value,lt=gt?Je:ae,pt=gt?te:le;return ht+" "+lt[e.ort]+" "+pt[Xe]}function Ce(Xe,ht,gt){if(gt=O?O(ht,gt):gt,gt!==vn.None){var lt=B(xe,!1);lt.className=ze(gt,e.cssClasses.marker),lt.style[e.style]=Xe+"%",gt>vn.NoValue&&(lt=B(xe,!1),lt.className=ze(gt,e.cssClasses.value),lt.setAttribute("data-value",String(ht)),lt.style[e.style]=Xe+"%",lt.innerHTML=String(W.to(ht)))}}return Object.keys(w).forEach(function(Xe){Ce(Xe,w[Xe][0],w[Xe][1])}),xe}function he(){d&&(yu(d),d=null)}function Se(w){he();var O=Ve(w),W=w.filter,re=w.format||{to:function(be){return String(Math.round(be))}};return d=a.appendChild(K(O,W,re)),d}function j(){var w=o.getBoundingClientRect(),O="offset"+["Width","Height"][e.ort];return e.ort===0?w.width||o[O]:w.height||o[O]}function ye(w,O,W,re){var be=function(te){var le=Y(te,re.pageOffset,re.target||O);if(!le||ne()&&!re.doNotReject||m_(a,e.cssClasses.tap)&&!re.doNotReject||w===i.start&&le.buttons!==void 0&&le.buttons>1||re.hover&&le.buttons)return!1;s||le.preventDefault(),le.calcPoint=le.points[e.ort],W(le,re)},xe=[];return w.split(" ").forEach(function(te){O.addEventListener(te,be,s?{passive:!0}:!1),xe.push([te,be])}),xe}function Y(w,O,W){var re=w.type.indexOf("touch")===0,be=w.type.indexOf("mouse")===0,xe=w.type.indexOf("pointer")===0,te=0,le=0;if(w.type.indexOf("MSPointer")===0&&(xe=!0),w.type==="mousedown"&&!w.buttons&&!w.touches)return!1;if(re){var Je=function(Ce){var Xe=Ce.target;return Xe===W||W.contains(Xe)||w.composed&&w.composedPath().shift()===W};if(w.type==="touchstart"){var ae=Array.prototype.filter.call(w.touches,Je);if(ae.length>1)return!1;te=ae[0].pageX,le=ae[0].pageY}else{var ze=Array.prototype.find.call(w.changedTouches,Je);if(!ze)return!1;te=ze.pageX,le=ze.pageY}}return O=O||Jd(b),(be||xe)&&(te=w.clientX+O.x,le=w.clientY+O.y),w.pageOffset=O,w.points=[te,le],w.cursor=be||xe,w}function ve(w){var O=w-p_(o,e.ort),W=O*100/j();return W=Eu(W),e.dir?100-W:W}function He(w){var O=100,W=!1;return c.forEach(function(re,be){if(!Q(be)){var xe=_[be],te=Math.abs(xe-w),le=te===100&&O===100,Je=te<O,ae=te<=O&&w>xe;(Je||ae||le)&&(W=be,O=te)}}),W}function Ge(w,O){w.type==="mouseout"&&w.target.nodeName==="HTML"&&w.relatedTarget===null&&L(w,O)}function st(w,O){if(navigator.appVersion.indexOf("MSIE 9")===-1&&w.buttons===0&&O.buttonsProperty!==0)return L(w,O);var W=(e.dir?-1:1)*(w.calcPoint-O.startCalcPoint),re=W*100/O.baseSize;X(W>0,re,O.locations,O.handleNumbers,O.connect)}function L(w,O){O.handle&&(fa(O.handle,e.cssClasses.active),p-=1),O.listeners.forEach(function(W){N.removeEventListener(W[0],W[1])}),p===0&&(fa(a,e.cssClasses.drag),Ae(),w.cursor&&(P.style.cursor="",P.removeEventListener("selectstart",Mu))),e.events.smoothSteps&&(O.handleNumbers.forEach(function(W){Ze(W,_[W],!0,!0,!1,!1)}),O.handleNumbers.forEach(function(W){H("update",W)})),O.handleNumbers.forEach(function(W){H("change",W),H("set",W),H("end",W)})}function Et(w,O){if(!O.handleNumbers.some(Q)){var W;if(O.handleNumbers.length===1){var re=c[O.handleNumbers[0]];W=re.children[0],p+=1,hn(W,e.cssClasses.active)}w.stopPropagation();var be=[],xe=ye(i.move,N,st,{target:w.target,handle:W,connect:O.connect,listeners:be,startCalcPoint:w.calcPoint,baseSize:j(),pageOffset:w.pageOffset,handleNumbers:O.handleNumbers,buttonsProperty:w.buttons,locations:_.slice()}),te=ye(i.end,N,L,{target:w.target,handle:W,listeners:be,doNotReject:!0,handleNumbers:O.handleNumbers}),le=ye("mouseout",N,Ge,{target:w.target,handle:W,listeners:be,doNotReject:!0,handleNumbers:O.handleNumbers});be.push.apply(be,xe.concat(te,le)),w.cursor&&(P.style.cursor=getComputedStyle(w.target).cursor,c.length>1&&hn(a,e.cssClasses.drag),P.addEventListener("selectstart",Mu,!1)),O.handleNumbers.forEach(function(Je){H("start",Je)})}}function $e(w){w.stopPropagation();var O=ve(w.calcPoint),W=He(O);W!==!1&&(e.events.snap||Su(a,e.cssClasses.tap,e.animationDuration),Ze(W,O,!0,!0),Ae(),H("slide",W,!0),H("update",W,!0),e.events.snap?Et(w,{handleNumbers:[W]}):(H("change",W,!0),H("set",W,!0)))}function Ye(w){var O=ve(w.calcPoint),W=f.getStep(O),re=f.fromStepping(W);Object.keys(E).forEach(function(be){be.split(".")[0]==="hover"&&E[be].forEach(function(xe){xe.call(Re,re)})})}function De(w,O){if(ne()||Q(O))return!1;var W=["Left","Right"],re=["Down","Up"],be=["PageDown","PageUp"],xe=["Home","End"];e.dir&&!e.ort?W.reverse():e.ort&&!e.dir&&(re.reverse(),be.reverse());var te=w.key.replace("Arrow",""),le=te===be[0],Je=te===be[1],ae=te===re[0]||te===W[0]||le,ze=te===re[1]||te===W[1]||Je,Ce=te===xe[0],Xe=te===xe[1];if(!ae&&!ze&&!Ce&&!Xe)return!0;w.preventDefault();var ht;if(ze||ae){var gt=ae?0:1,lt=yt(O),pt=lt[gt];if(pt===null)return!1;pt===!1&&(pt=f.getDefaultStep(_[O],ae,e.keyboardDefaultStep)),Je||le?pt*=e.keyboardPageMultiplier:pt*=e.keyboardMultiplier,pt=Math.max(pt,1e-7),pt=(ae?-1:1)*pt,ht=v[O]+pt}else Xe?ht=e.spectrum.xVal[e.spectrum.xVal.length-1]:ht=e.spectrum.xVal[0];return Ze(O,f.toStepping(ht),!0,!0),H("slide",O),H("update",O),H("change",O),H("set",O),!1}function it(w){w.fixed||c.forEach(function(O,W){ye(i.start,O.children[0],Et,{handleNumbers:[W]})}),w.tap&&ye(i.start,o,$e,{}),w.hover&&ye(i.move,o,Ye,{hover:!0}),w.drag&&u.forEach(function(O,W){if(!(O===!1||W===0||W===u.length-1)){var re=c[W-1],be=c[W],xe=[O],te=[re,be],le=[W-1,W];hn(O,e.cssClasses.draggable),w.fixed&&(xe.push(re.children[0]),xe.push(be.children[0])),w.dragAll&&(te=c,le=m),xe.forEach(function(Je){ye(i.start,Je,Et,{handles:te,handleNumbers:le,connect:O})})}})}function Ue(w,O){E[w]=E[w]||[],E[w].push(O),w.split(".")[0]==="update"&&c.forEach(function(W,re){H("update",re)})}function T(w){return w===Ci.aria||w===Ci.tooltips}function x(w){var O=w&&w.split(".")[0],W=O?w.substring(O.length):w;Object.keys(E).forEach(function(re){var be=re.split(".")[0],xe=re.substring(be.length);(!O||O===be)&&(!W||W===xe)&&(!T(xe)||W===xe)&&delete E[re]})}function H(w,O,W){Object.keys(E).forEach(function(re){var be=re.split(".")[0];w===be&&E[re].forEach(function(xe){xe.call(Re,v.map(e.format.to),O,v.slice(),W||!1,_.slice(),Re)})})}function oe(w,O,W,re,be,xe,te){var le;return c.length>1&&!e.events.unconstrained&&(re&&O>0&&(le=f.getAbsoluteDistance(w[O-1],e.margin,!1),W=Math.max(W,le)),be&&O<c.length-1&&(le=f.getAbsoluteDistance(w[O+1],e.margin,!0),W=Math.min(W,le))),c.length>1&&e.limit&&(re&&O>0&&(le=f.getAbsoluteDistance(w[O-1],e.limit,!1),W=Math.min(W,le)),be&&O<c.length-1&&(le=f.getAbsoluteDistance(w[O+1],e.limit,!0),W=Math.max(W,le))),e.padding&&(O===0&&(le=f.getAbsoluteDistance(0,e.padding[0],!1),W=Math.max(W,le)),O===c.length-1&&(le=f.getAbsoluteDistance(100,e.padding[1],!0),W=Math.min(W,le))),te||(W=f.getStep(W)),W=Eu(W),W===w[O]&&!xe?!1:W}function de(w,O){var W=e.ort;return(W?O:w)+", "+(W?w:O)}function X(w,O,W,re,be){var xe=W.slice(),te=re[0],le=e.events.smoothSteps,Je=[!w,w],ae=[w,!w];re=re.slice(),w&&re.reverse(),re.length>1?re.forEach(function(Ce,Xe){var ht=oe(xe,Ce,xe[Ce]+O,Je[Xe],ae[Xe],!1,le);ht===!1?O=0:(O=ht-xe[Ce],xe[Ce]=ht)}):Je=ae=[!0];var ze=!1;re.forEach(function(Ce,Xe){ze=Ze(Ce,W[Ce]+O,Je[Xe],ae[Xe],!1,le)||ze}),ze&&(re.forEach(function(Ce){H("update",Ce),H("slide",Ce)}),be!=null&&H("drag",te))}function Me(w,O){return e.dir?100-w-O:w}function Ee(w,O){_[w]=O,v[w]=f.fromStepping(O);var W=Me(O,0)-D,re="translate("+de(W+"%","0")+")";if(c[w].style[e.transformRule]=re,e.events.invertConnects&&_.length>1){var be=_.every(function(xe,te,le){return te===0||xe>=le[te-1]});if(y!==!be){ue();return}}me(w),me(w+1),y&&(me(w-1),me(w+2))}function Ae(){m.forEach(function(w){var O=_[w]>50?-1:1,W=3+(c.length+O*w);c[w].style.zIndex=String(W)})}function Ze(w,O,W,re,be,xe){return be||(O=oe(_,w,O,W,re,!1,xe)),O===!1?!1:(Ee(w,O),!0)}function me(w){if(u[w]){var O=_.slice();y&&O.sort(function(le,Je){return le-Je});var W=0,re=100;w!==0&&(W=O[w-1]),w!==u.length-1&&(re=O[w]);var be=re-W,xe="translate("+de(Me(W,be)+"%","0")+")",te="scale("+de(be/100,"1")+")";u[w].style[e.transformRule]=xe+" "+te}}function fe(w,O){return w===null||w===!1||w===void 0||(typeof w=="number"&&(w=String(w)),w=e.format.from(w),w!==!1&&(w=f.toStepping(w)),w===!1||isNaN(w))?_[O]:w}function Ne(w,O,W){var re=Ba(w),be=_[0]===void 0;O=O===void 0?!0:O,e.animate&&!be&&Su(a,e.cssClasses.tap,e.animationDuration),m.forEach(function(le){Ze(le,fe(re[le],le),!0,!1,W)});var xe=m.length===1?0:1;if(be&&f.hasNoSize()&&(W=!0,_[0]=0,m.length>1)){var te=100/(m.length-1);m.forEach(function(le){_[le]=le*te})}for(;xe<m.length;++xe)m.forEach(function(le){Ze(le,_[le],!0,!0,W)});Ae(),m.forEach(function(le){H("update",le),re[le]!==null&&O&&H("set",le)})}function qe(w){Ne(e.start,w)}function Oe(w,O,W,re){if(w=Number(w),!(w>=0&&w<m.length))throw new Error("noUiSlider: invalid handle number, got: "+w);Ze(w,fe(O,w),!0,!0,re),H("update",w),W&&H("set",w)}function tt(w){if(w===void 0&&(w=!1),w)return v.length===1?v[0]:v.slice(0);var O=v.map(e.format.to);return O.length===1?O[0]:O}function nt(){for(x(Ci.aria),x(Ci.tooltips),Object.keys(e.cssClasses).forEach(function(w){fa(a,e.cssClasses[w])});a.firstChild;)a.removeChild(a.firstChild);delete a.noUiSlider}function yt(w){var O=_[w],W=f.getNearbySteps(O),re=v[w],be=W.thisStep.step,xe=null;if(e.snap)return[re-W.stepBefore.startValue||null,W.stepAfter.startValue-re||null];be!==!1&&re+be>W.stepAfter.startValue&&(be=W.stepAfter.startValue-re),re>W.thisStep.startValue?xe=W.thisStep.step:W.stepBefore.step===!1?xe=!1:xe=re-W.stepBefore.highestStep,O===100?be=null:O===0&&(xe=null);var te=f.countStepDecimals();return be!==null&&be!==!1&&(be=Number(be.toFixed(te))),xe!==null&&xe!==!1&&(xe=Number(xe.toFixed(te))),[xe,be]}function z(){return m.map(yt)}function we(w,O){var W=tt(),re=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];re.forEach(function(xe){w[xe]!==void 0&&(t[xe]=w[xe])});var be=ih(t);re.forEach(function(xe){w[xe]!==void 0&&(e[xe]=be[xe])}),f=be.spectrum,e.margin=be.margin,e.limit=be.limit,e.padding=be.padding,e.pips?Se(e.pips):he(),e.tooltips?A():g(),_=[],Ne(hl(w.start)?w.start:W,O),w.connect&&ie()}function ie(){for(;l.firstChild;)l.removeChild(l.firstChild);for(var w=0;w<=e.handles;w++)u[w]=S(l,e.connect[w]),me(w);it({drag:e.events.drag,fixed:!0})}function ue(){y=!y,th(e,e.connect.map(function(w){return!w})),ie()}function Le(){o=ee(a),F(e.connect,o),it(e.events),Ne(e.start),e.pips&&Se(e.pips),e.tooltips&&A(),R()}Le();var Re={destroy:nt,steps:z,on:Ue,off:x,get:tt,set:Ne,setHandle:Oe,reset:qe,disable:Z,enable:pe,__moveHandles:function(w,O,W){X(w,O,_,W)},options:t,updateOptions:we,target:a,removePips:he,removeTooltips:g,getPositions:function(){return _.slice()},getTooltips:function(){return h},getOrigins:function(){return c},pips:Se};return Re}function j_(n,e){if(!n||!n.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+n);if(n.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var t=ih(e),i=q_(n,t,e);return n.noUiSlider=i,i}const Y_={__spectrum:Qd,cssClasses:eh,create:j_},$_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z" fill="#1C274C"/>\r
<path d="M20 6.23751C19.9992 5.94016 19.9949 5.76263 19.9746 5.60842C19.7974 4.26222 18.7381 3.2029 17.3919 3.02567C17.1969 3 16.9647 3 16.5003 3H9.98828C10.1042 3.10392 10.2347 3.23445 10.45 3.44975L11.0003 4C11.8161 4.81578 12.2239 5.22367 12.7124 5.49543C12.9807 5.64471 13.2653 5.7626 13.5606 5.84678C14.0982 6 14.675 6 15.8287 6H16.2024C17.9814 6 19.1593 6 20 6.23751Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 10C12.25 9.58579 12.5858 9.25 13 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z" fill="#1C274C"/>\r
</svg>`,Z_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"/>\r
</svg>`,K_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224Z" fill="#1C274C"/>\r
<path d="M15.5227 12C15.5227 13.6569 14.1694 15 12.4999 15C10.8304 15 9.47705 13.6569 9.47705 12C9.47705 10.3431 10.8304 9 12.4999 9C14.1694 9 15.5227 10.3431 15.5227 12Z" fill="#1C274C"/>\r
</svg>`,J_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" fill="#1C274C"/>\r
<path d="M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z" fill="#1C274C"/>\r
<path d="M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z" fill="#1C274C"/>\r
</svg>`,fl=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g id="Menu / Close_LG">\r
<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
</g>\r
</svg>`,Q_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.35791 12.7787C2.74772 13.7201 2.99956 15.0291 3.50323 17.647C3.8658 19.5316 4.04709 20.4738 4.67523 21.0991C4.8382 21.2614 5.02054 21.4052 5.2186 21.5277C5.98195 21.9999 6.99539 21.9999 9.02227 21.9999H15.9777C18.0046 21.9999 19.0181 21.9999 19.7814 21.5277C19.9795 21.4052 20.1618 21.2614 20.3248 21.0991C20.9529 20.4738 21.1342 19.5316 21.4968 17.647C22.0004 15.0291 22.2523 13.7201 21.6421 12.7787C21.4864 12.5384 21.2943 12.321 21.0721 12.1332C20.2011 11.3975 18.7933 11.3975 15.9777 11.3975H9.02227C6.20667 11.3975 4.79888 11.3975 3.92792 12.1332C3.70566 12.321 3.51363 12.5384 3.35791 12.7787ZM9.69518 17.1806C9.69518 16.7814 10.0376 16.4577 10.4601 16.4577H14.5398C14.9622 16.4577 15.3047 16.7814 15.3047 17.1806C15.3047 17.5798 14.9622 17.9035 14.5398 17.9035H10.4601C10.0376 17.9035 9.69518 17.5798 9.69518 17.1806Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M3.5762 12.4846C3.68271 12.3586 3.80034 12.241 3.92792 12.1332C4.79888 11.3975 6.20667 11.3975 9.02227 11.3975H15.9777C18.7933 11.3975 20.2011 11.3975 21.0721 12.1332C21.2 12.2413 21.3179 12.3592 21.4247 12.4857V9.75579C21.4247 8.84687 21.4247 8.09279 21.3394 7.49156C21.2494 6.85704 21.0531 6.29458 20.5839 5.83245C20.5074 5.75707 20.4266 5.68552 20.342 5.61807C19.8302 5.21023 19.2167 5.04345 18.5222 4.96608C17.8531 4.89155 17.0102 4.89157 15.9769 4.89158L15.6242 4.89158C14.6421 4.89158 14.29 4.88587 13.9711 4.80533C13.7837 4.75802 13.604 4.69195 13.4352 4.60878C13.151 4.46867 12.9033 4.25762 12.2077 3.64132L11.7336 3.22128C11.5345 3.04489 11.3987 2.9245 11.2531 2.81755C10.6284 2.35879 9.86779 2.08132 9.07145 2.01534C8.88602 1.99998 8.6968 1.99999 8.41356 2.00002L8.29714 2.00001C7.65647 1.9999 7.23365 1.99983 6.86652 2.0612C5.26167 2.32947 3.96392 3.45143 3.64782 4.93575C3.57591 5.27344 3.57602 5.66035 3.57619 6.21853L3.5762 12.4846Z" fill="#1C274C"/>\r
</svg>`,e2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22Z" fill="#1C274C"/>\r
<path d="M9.01296 19.0472C8.72446 19.3176 8.27554 19.3176 7.98705 19.0472L5.98705 17.1722C5.68486 16.8889 5.66955 16.4142 5.95285 16.112C6.23615 15.8099 6.71077 15.7945 7.01296 16.0778L7.75 16.7688V13.5C7.75 13.0858 8.08579 12.75 8.5 12.75C8.91422 12.75 9.25 13.0858 9.25 13.5L9.25 16.7688L9.98705 16.0778C10.2892 15.7945 10.7639 15.8099 11.0472 16.112C11.3305 16.4142 11.3151 16.8889 11.013 17.1722L9.01296 19.0472Z" fill="#1C274C"/>\r
<path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#1C274C"/>\r
</svg>`,t2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22Z" fill="#1C274C"/>\r
<path d="M10.7022 14.2635C10.8477 13.8757 10.6512 13.4434 10.2633 13.298C9.8755 13.1525 9.44319 13.349 9.29775 13.7369L7.79775 17.7369C7.65231 18.1247 7.84882 18.557 8.23666 18.7024C8.6245 18.8479 9.05681 18.6514 9.20225 18.2635L10.7022 14.2635Z" fill="#1C274C"/>\r
<path d="M7.53033 14.5305C7.82322 14.2376 7.82322 13.7628 7.53033 13.4699C7.23744 13.177 6.76256 13.177 6.46967 13.4699L5.46967 14.4699C5.17678 14.7628 5.17678 15.2376 5.46967 15.5305L6.46967 16.5305C6.76256 16.8234 7.23744 16.8234 7.53033 16.5305C7.82322 16.2376 7.82322 15.7628 7.53033 15.4699L7.06066 15.0002L7.53033 14.5305Z" fill="#1C274C"/>\r
<path d="M12.0303 15.4699C11.7374 15.177 11.2626 15.177 10.9697 15.4699C10.6768 15.7628 10.6768 16.2376 10.9697 16.5305L11.4393 17.0002L10.9697 17.4699C10.6768 17.7628 10.6768 18.2376 10.9697 18.5305C11.2626 18.8234 11.7374 18.8234 12.0303 18.5305L13.0303 17.5305C13.3232 17.2376 13.3232 16.7628 13.0303 16.4699L12.0303 15.4699Z" fill="#1C274C"/>\r
<path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#1C274C"/>\r
</svg>`,n2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M11.9993 2C16.7133 2 19.0704 2 20.5348 3.46447C21.2923 4.22195 21.658 5.21824 21.8345 6.65598V10H2.16406V6.65598C2.3406 5.21824 2.70628 4.22195 3.46377 3.46447C4.92823 2 7.28525 2 11.9993 2Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14ZM12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V15.1893L10.0303 13.9697C9.73744 13.6768 9.26256 13.6768 8.96967 13.9697C8.67678 14.2626 8.67678 14.7374 8.96967 15.0303L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697C14.7374 13.6768 14.2626 13.6768 13.9697 13.9697L12.75 15.1893V11Z" fill="#1C274C"/>\r
</svg>`,i2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M22 15.9998V14.9998C22 12.1714 21.9998 10.7576 21.1211 9.87891C20.2424 9.00023 18.8282 9.00023 15.9998 9.00023H7.99977C5.17135 9.00023 3.75713 9.00023 2.87845 9.87891C2 10.7574 2 12.1706 2 14.9976V14.9998V15.9998C2 18.8282 2 20.2424 2.87868 21.1211C3.75736 21.9998 5.17157 21.9998 8 21.9998H16H16C18.8284 21.9998 20.2426 21.9998 21.1213 21.1211C22 20.2424 22 18.8282 22 15.9998Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 4.02744L14.4306 5.98809C14.7001 6.30259 15.1736 6.33901 15.4881 6.06944C15.8026 5.79988 15.839 5.3264 15.5695 5.01191L12.5695 1.51191C12.427 1.34567 12.219 1.25 12 1.25C11.7811 1.25 11.5731 1.34567 11.4306 1.51191L8.43057 5.01191C8.161 5.3264 8.19743 5.79988 8.51192 6.06944C8.82641 6.33901 9.29989 6.30259 9.56946 5.98809L11.25 4.02744L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z" fill="#1C274C"/>\r
</svg>`,r2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#1C274C"/>\r
</svg>`,rh=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill="#1C274C"/>\r
<path d="M8.50397 13.1766C7.91991 12.5566 6.94501 12.5241 6.32092 13.1038L5.51041 13.8566C5.20691 14.1385 4.73236 14.1209 4.45047 13.8174C4.16858 13.5139 4.1861 13.0394 4.4896 12.7575L5.3001 12.0047C6.52816 10.8641 8.44651 10.9281 9.59579 12.1481L12.2433 14.9584C12.5202 15.2523 12.9735 15.2919 13.2972 15.0504C14.4971 14.1553 16.1679 14.257 17.2503 15.2911L19.5181 17.4577C19.8176 17.7438 19.8284 18.2186 19.5423 18.5181C19.2562 18.8176 18.7814 18.8284 18.4819 18.5423L16.2141 16.3757C15.661 15.8473 14.8073 15.7953 14.1941 16.2527C13.2596 16.9499 11.9509 16.8356 11.1515 15.9869L8.50397 13.1766Z" fill="#1C274C"/>\r
<path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill="#1C274C"/>\r
</svg>`,s2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>\r
<circle cx="16" cy="8" r="2" stroke="#1C274C" stroke-width="1.5"/>\r
<path d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>`,a2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z" fill="#1C274C"/>\r
<path d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z" fill="#1C274C"/>\r
</svg>`,o2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" fill="#1C274C"/>\r
<path opacity="0.7" d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="#1C274C"/>\r
</svg>`,l2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">\r
  <path fill="#000000" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>\r
</svg>`,ml=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M14.9522 3C13.9146 3 13.0796 3.83502 11.4096 5.50506L6.5 10.4146L13.5854 17.5L18.4949 12.5904C20.165 10.9204 21 10.0854 21 9.04776C21 8.01013 20.165 7.1751 18.4949 5.50506C16.8249 3.83502 15.9899 3 14.9522 3Z" fill="#1C274C"/>\r
<path d="M13.5854 17.5001L6.5 10.4147L5.50506 11.4096C3.83502 13.0796 3 13.9147 3 14.9523C3 15.9899 3.83502 16.825 5.50506 18.495C7.1751 20.165 8.01013 21.0001 9.04776 21.0001C10.0854 21.0001 10.9204 20.165 12.5904 18.495L13.5854 17.5001Z" fill="#1C274C"/>\r
<g opacity="0.5">\r
<path d="M9.03264 21H9C9.01086 21.0003 9.02174 20.9999 9.03264 21Z" fill="#1C274C"/>\r
<path d="M9.06287 21C9.85928 20.9938 10.5389 20.4938 11.5734 19.5L21 19.5C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9.06287Z" fill="#1C274C"/>\r
</g>\r
</svg>`,sh=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M20.8412 10.4666C20.5491 10.1778 20.0789 10.1778 19.7868 10.4666L18.1005 12.1333C17.8842 12.3471 17.8185 12.6703 17.934 12.9517C18.0496 13.233 18.3236 13.4167 18.6278 13.4167H19.5269C19.1456 17.2462 15.876 20.25 11.8828 20.25C9.10034 20.25 6.66595 18.7903 5.31804 16.6061C5.10051 16.2536 4.63841 16.1442 4.28591 16.3618C3.93342 16.5793 3.82401 17.0414 4.04154 17.3939C5.65416 20.007 8.56414 21.75 11.8828 21.75C16.6907 21.75 20.6476 18.0892 21.0332 13.4167H22.0002C22.3044 13.4167 22.5784 13.233 22.694 12.9517C22.8096 12.6703 22.7438 12.3471 22.5275 12.1333L20.8412 10.4666Z" fill="#1C274C"/>\r
</svg>`,ah=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2892 2.88976C17.2615 2.75159 15.9068 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25L14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10583 22.75 9.94359V10C22.75 10.4142 22.4142 10.75 22 10.75C21.5858 10.75 21.25 10.4142 21.25 10C21.25 8.09318 21.2484 6.73851 21.1102 5.71085C20.975 4.70476 20.7213 4.12511 20.2981 3.7019C19.8749 3.27869 19.2952 3.02502 18.2892 2.88976ZM2 13.25C2.41421 13.25 2.75 13.5858 2.75 14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25C10.4142 21.25 10.75 21.5858 10.75 22C10.75 22.4142 10.4142 22.75 10 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564L1.25 14C1.25 13.5858 1.58579 13.25 2 13.25Z" fill="#1C274C"/>\r
<g opacity="0.5">\r
<path d="M9.94358 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75C8.09318 2.75 6.73851 2.75159 5.71085 2.88976C4.70476 3.02502 4.12511 3.27869 3.7019 3.7019C3.27869 4.12511 3.02502 4.70476 2.88976 5.71085C2.75159 6.73851 2.75 8.09318 2.75 10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10V9.94358V9.94357C1.24998 8.10582 1.24997 6.65019 1.40314 5.51098C1.56076 4.33856 1.89288 3.38961 2.64124 2.64124C3.38961 1.89288 4.33856 1.56076 5.51098 1.40314C6.65019 1.24997 8.10582 1.24998 9.94357 1.25H9.94358Z" fill="#1C274C"/>\r
<path d="M22 13.25C22.4142 13.25 22.75 13.5858 22.75 14V14.0564V14.0565C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H14.0564H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14C21.25 13.5858 21.5858 13.25 22 13.25Z" fill="#1C274C"/>\r
</g>\r
</svg>`,c2=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" fill="#1C274C"/>\r
</svg>`,vt="__none__",wu=Object.freeze(["always",">",">=","<","<=","==","!="]),Tu=Object.freeze([{id:"file",label:ce.menu.file},{id:"view",label:ce.menu.view},{id:"settings",label:ce.menu.settings},{id:"rules",label:ce.menu.rules}]),u2=Object.freeze([512,1024,2048,4096,8192,16384]),d2=Object.freeze([{key:"inputGain",label:ce.settings.sensitivity,min:0,max:3,step:.01,tooltip:"Technical term: Input Gain. Scales all amplitude before analysis."},{key:"defaultParticleSize",label:ce.settings.particleDefaultSize,min:1,max:40,step:.5,tooltip:"Technical term: Default Size. Base object size before rule outputs."},{key:"maxParticles",label:ce.settings.particleCapacity,min:1e5,max:5e6,step:5e4,tooltip:"Technical term: Capacity. Total GPU object slots."},{key:"particlesByFrame",label:ce.settings.spawnRate,min:100,max:5e3,step:1,tooltip:"Technical term: Objects By Frame. Number of log-frequency spawn buckets shared by light particles and lines."},{key:"fluxWindowFrames",label:ce.settings.activityInterval,min:1,max:64,step:1,tooltip:"Technical term: Flux Window Frames. Rolling frame window for activity averaging."}]),h2=Object.freeze([{id:"frequencyRange",syncKeys:["freqNormMin","freqNormMax"],label:ce.settings.frequencyRange,min:16,max:2e4,step:1,unit:"Hz",tooltip:"Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.",get:()=>({min:Number(se.freqNormMin??40),max:Number(se.freqNormMax??12e3)}),set:(n,e)=>rn({freqNormMin:n,freqNormMax:e})},{id:"volumeRange",syncKeys:["binMagnitudeNormMin","binMagnitudeNormMax"],label:ce.settings.volume,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.",get:()=>({min:Number(se.binMagnitudeNormMin??-70),max:Number(se.binMagnitudeNormMax??0)}),set:(n,e)=>rn({binMagnitudeNormMin:n,binMagnitudeNormMax:e})},{id:"instabilityRange",syncKeys:["binPhaseDeviationNormMin","binPhaseDeviationNormMax"],label:ce.settings.instability,min:0,max:Math.PI,step:.001,unit:"rad",tooltip:"Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.",get:()=>({min:Number(se.binPhaseDeviationNormMin??0),max:Number(se.binPhaseDeviationNormMax??Math.PI)}),set:(n,e)=>rn({binPhaseDeviationNormMin:n,binPhaseDeviationNormMax:e})},{id:"attackSharpnessRange",syncKeys:["binAttackTimeNormMin","binAttackTimeNormMax"],label:ce.settings.attackSharpness,min:0,max:2e3,step:1,unit:"ms",tooltip:"Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.",get:()=>({min:Number(se.binAttackTimeNormMin??5),max:Number(se.binAttackTimeNormMax??500)}),set:(n,e)=>rn({binAttackTimeNormMin:n,binAttackTimeNormMax:e})},{id:"energyRange",syncKeys:["globalRmsNormMin","globalRmsNormMax"],label:ce.settings.energy,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.",get:()=>({min:Number(se.globalRmsNormMin??-60),max:Number(se.globalRmsNormMax??0)}),set:(n,e)=>rn({globalRmsNormMin:n,globalRmsNormMax:e})},{id:"sharpnessRange",syncKeys:["spectralCentroidNormMin","spectralCentroidNormMax"],label:ce.settings.sharpness,min:16,max:22050,step:1,unit:"Hz",tooltip:"Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.",get:()=>({min:Number(se.spectralCentroidNormMin??150),max:Number(se.spectralCentroidNormMax??8e3)}),set:(n,e)=>rn({spectralCentroidNormMin:n,spectralCentroidNormMax:e})},{id:"activityRange",syncKeys:["globalSpectralFluxNormMin","globalSpectralFluxNormMax","binFluxNormMin","binFluxNormMax"],label:ce.settings.activity,min:0,max:200,step:.1,unit:"AU",tooltip:"Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.",get:()=>({min:Number(se.globalSpectralFluxNormMin??0),max:Number(se.globalSpectralFluxNormMax??100)}),set:(n,e)=>{rn({globalSpectralFluxNormMin:n,globalSpectralFluxNormMax:e,binFluxNormMin:n/100,binFluxNormMax:e/100})}},{id:"noisinessRange",syncKeys:["spectralFlatnessNormMin","spectralFlatnessNormMax"],label:ce.settings.noisiness,min:0,max:1,step:.001,unit:"ratio",tooltip:"Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.",get:()=>({min:Number(se.spectralFlatnessNormMin??0),max:Number(se.spectralFlatnessNormMax??1)}),set:(n,e)=>rn({spectralFlatnessNormMin:n,spectralFlatnessNormMax:e})}]),Au=Object.freeze([{target:"spawnedParticles",section:"Light Particles",subgroup:"Position",output:"x",label:"X"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Position",output:"y",label:"Y"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Position",output:"z",label:"Z"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"size",label:"Size"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"shapeType",label:"Shape",type:"enum",options:["circle","square"]},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"particleCount",label:"Particle Count"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"red",label:"Red"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"green",label:"Green"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"lines",section:"Lines",subgroup:"Position",output:"x",label:"X"},{target:"lines",section:"Lines",subgroup:"Position",output:"y",label:"Y"},{target:"lines",section:"Lines",subgroup:"Position",output:"z",label:"Z"},{target:"lines",section:"Lines",subgroup:"Position",output:"length",label:"Length"},{target:"lines",section:"Lines",subgroup:"Position",output:"direction",label:"Direction",type:"enum",options:["x","y","z"]},{target:"lines",section:"Lines",subgroup:"Appearance",output:"thickness",label:"Thickness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"lineCount",label:"Line Count"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"red",label:"Red"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"green",label:"Green"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"background",section:"Background",subgroup:"Appearance",output:"red",label:"Red"},{target:"background",section:"Background",subgroup:"Appearance",output:"green",label:"Green"},{target:"background",section:"Background",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"background",section:"Background",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"background",section:"Background",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"background",section:"Background",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"camera",section:"Camera",subgroup:"Position",output:"x",label:"Position X"},{target:"camera",section:"Camera",subgroup:"Position",output:"y",label:"Position Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"z",label:"Position Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetX",label:"Target X"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetY",label:"Target Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetZ",label:"Target Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"angleOfView",label:"Angle Of View"}]),oh=new Set(Yr.map(n=>n.id));new RegExp(`\\b(${Yr.map(n=>n.id.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")).sort((n,e)=>e.length-n.length).join("|")})\\b`,"g");const Ru=Object.freeze({file:$_,view:Z_,settings:K_,rules:J_}),Ot=Object.freeze({load:Q_,save:e2,savePreset:t2,saveAs:n2,upload:i2,remove:r2,exportImage:rh,exportImageNoBg:s2,exportVideo:a2,exportObj:o2,reset:sh,fit:ah,add:l2,duplicate:c2,clear:ml,clean:ml,close:fl}),lh=Object.freeze([{value:"math:add",label:"+"},{value:"math:subtract",label:"-"},{value:"math:multiply",label:"x"},{value:"math:divide",label:"÷"},{value:"math:openParen",label:"("},{value:"math:closeParen",label:")"},{value:"math:parentheses",label:"()"},{value:"math:power",label:"power"},{value:"math:clamp",label:"clamp"},{value:"math:average",label:"average"}]);function p2(){return{all:[],byKey:new Map}}function Wt(n,e,t=null){if(!(!n||typeof e!="function")){if(!Array.isArray(t)||t.length===0){n.all.push(e);return}for(const i of t){const r=String(i||"").trim();r&&(n.byKey.has(r)||n.byKey.set(r,[]),n.byKey.get(r).push(e))}}}function Pu(n){for(const e of n)try{e()}catch{}}function Nu(n,e=[],t=!1){var r;const i=new Set(t?(n==null?void 0:n.all)||[]:[]);for(const s of Array.isArray(e)?e:[]){const a=String(s||"").trim();if(!a)continue;const o=(r=n==null?void 0:n.byKey)==null?void 0:r.get(a);if(o)for(const l of o)i.add(l)}return[...i]}function I(n,e="",t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:s!=null&&i.setAttribute(r,String(s));return i}function Sn(n,e,t){const i=Number(n);return Number.isFinite(i)?Math.max(e,Math.min(t,i)):e}function f2(n,e,t){const i=Sn(Math.round(n),0,255).toString(16).padStart(2,"0"),r=Sn(Math.round(e),0,255).toString(16).padStart(2,"0"),s=Sn(Math.round(t),0,255).toString(16).padStart(2,"0");return`#${i}${r}${s}`}function m2(n,e,t){const i=(Number(n)%360+360)%360,r=Sn(Number(e)/100,0,1),s=Sn(Number(t)/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a/2;let c=0,u=0,d=0;return i<60?(c=a,u=o,d=0):i<120?(c=o,u=a,d=0):i<180?(c=0,u=a,d=o):i<240?(c=0,u=o,d=a):i<300?(c=o,u=0,d=a):(c=a,u=0,d=o),{r:Math.round((c+l)*255),g:Math.round((u+l)*255),b:Math.round((d+l)*255)}}function g2(n){const e=String(n||"").trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{6}$/.test(e))return{h:0,s:0,l:0};const t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,s=Math.max(t,i,r),a=Math.min(t,i,r),o=s-a;let l=0;o>0&&(s===t?l=60*((i-r)/o%6):s===i?l=60*((r-t)/o+2):l=60*((t-i)/o+4)),l<0&&(l+=360);const c=(s+a)/2,u=o===0?0:o/(1-Math.abs(2*c-1));return{h:l,s:u*100,l:c*100}}function Ht(n,e,t){if(!n||!e)return;const i=String(t||n.textContent||"").trim();n.textContent="",n.append(I("span","cp-btn-icon",{html:e}),I("span","cp-btn-label",{text:i})),n.setAttribute("aria-label",i)}function Yl(n){const e=String(n||""),t=cl(e);return{type:"pill",label:(t==null?void 0:t.label)||e,code:e}}function $l(n=0){const e=Number(n);return{type:"number",value:Number.isFinite(e)?e:0}}function Ut(n){return{type:"op",code:String(n||"")}}function kn(){return{type:"slot"}}function v2(n){return n==="math:add"?[Ut(" + ")]:n==="math:subtract"?[Ut(" - ")]:n==="math:multiply"?[Ut(" * ")]:n==="math:divide"?[Ut(" / ")]:n==="math:openParen"?[Ut("(")]:n==="math:closeParen"?[Ut(")")]:n==="math:parentheses"?[Ut("("),kn(),Ut(")")]:n==="math:power"?[Ut("pow("),kn(),Ut(", "),kn(),Ut(")")]:n==="math:clamp"?[Ut("clamp("),kn(),Ut(", "),kn(),Ut(", "),kn(),Ut(")")]:n==="math:average"?[Ut("avg("),kn(),Ut(", "),kn(),Ut(")")]:[kn()]}function gl(n){return!n||typeof n!="object"?null:n.type==="pill"?Yl(n.code):n.type==="number"?$l(n.value):n.type==="op"?Ut(n.code):n.type==="slot"?kn():null}function ch(n){const e=[];for(const t of Array.isArray(n)?n:[])if(!(!t||typeof t!="object")){if(t.type==="pill"){e.push(String(t.code||""));continue}if(t.type==="number"){const i=Number(t.value);e.push(Number.isFinite(i)?String(i):"0");continue}t.type==="op"&&e.push(String(t.code||""))}return e.join("")}function _2(n){const e=String(n||"");if(!e.trim())return[];const t=new Set(Yr.map(a=>a.id)),i=/([A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[()+\-*/])/g,r=[];let s=0;for(const a of e.matchAll(i)){const o=Number(a.index);if(o>s){const c=e.slice(s,o);c.trim()&&r.push(Ut(c))}const l=String(a[0]||"");t.has(l)?r.push(Yl(l)):/^\d+(?:\.\d+)?$/.test(l)?r.push($l(Number(l))):r.push(Ut(["+","-","*","/"].includes(l)?` ${l} `:l)),s=o+l.length}if(s<e.length){const a=e.slice(s);a.trim()&&r.push(Ut(a))}return r.length||r.push(kn()),r}function b2(n=""){const e=I("select","cp-input-select cp-rule-token-insert-select");e.appendChild(I("option","",{value:"",text:ce.rules.insertToken}));const t=document.createElement("optgroup");t.label=ce.rules.detailVariables;for(const a of Vr("detail"))t.appendChild(I("option","",{value:`var:${a.id}`,text:a.label}));const i=document.createElement("optgroup");i.label=ce.rules.overallVariables;for(const a of Vr("overall"))i.appendChild(I("option","",{value:`var:${a.id}`,text:a.label}));const r=document.createElement("optgroup");r.label=ce.rules.number,r.appendChild(I("option","",{value:"number",text:ce.rules.number}));const s=document.createElement("optgroup");s.label=ce.rules.mathActions;for(const a of lh)s.appendChild(I("option","",{value:a.value,text:a.label}));return e.append(t,i,r,s),n&&(e.value=n),e}function x2(n=""){const e=I("select","cp-input-select cp-rule-token-action-select cp-rule-token-value-select");e.appendChild(I("option","",{value:"",text:ce.rules.insertVariable}));const t=document.createElement("optgroup");t.label=ce.rules.detailVariables;for(const s of Vr("detail"))t.appendChild(I("option","",{value:`var:${s.id}`,text:s.label}));const i=document.createElement("optgroup");i.label=ce.rules.overallVariables;for(const s of Vr("overall"))i.appendChild(I("option","",{value:`var:${s.id}`,text:s.label}));const r=document.createElement("optgroup");return r.label=ce.rules.number,r.appendChild(I("option","",{value:"number",text:ce.rules.number})),e.append(r,t,i),n&&(e.value=n),e}function y2(n=""){const e=I("select","cp-input-select cp-rule-token-action-select cp-rule-token-math-select");e.appendChild(I("option","",{value:"",text:ce.rules.mathActions}));for(const t of lh)e.appendChild(I("option","",{value:t.value,text:t.label}));return n&&(e.value=n),e}function uh(n){const e=String(n||"");return e?e.startsWith("var:")?[Yl(e.slice(4))]:e==="number"?[$l(0)]:e.startsWith("math:")?v2(e):[]:[]}function M2(n){return(Array.isArray(n)?n:[]).some(e=>(e==null?void 0:e.type)==="slot")}function zn(n){var s,a;if(!(n!=null&&n.tokenEditor))return;const e=n.tokenEditor;e.innerHTML="";const t=Array.isArray(n.tokens)?n.tokens:[];(!Number.isInteger(n.pendingInsertIndex)||n.pendingInsertIndex<0||n.pendingInsertIndex>t.length)&&(n.pendingInsertIndex=null);const i=(o,l)=>{var f;const c=Number(o),u=Number(l);if(!Number.isInteger(c)||!Number.isInteger(u)||c<0||c>=n.tokens.length||u<0||u>n.tokens.length)return;const[d]=n.tokens.splice(c,1);let h=u;c<u&&(h-=1),n.tokens.splice(h,0,d),n.dragTokenIndex=null,zn(n),(f=n.onExpressionChanged)==null||f.call(n)},r=o=>{const l=I("div","cp-rule-token-gap"),c=I("button","cp-rule-token-gap-btn",{type:"button"});Ht(c,Ot.add,ce.rules.insertHere),c.classList.toggle("is-armed",n.pendingInsertIndex===o),c.addEventListener("click",()=>{n.pendingInsertIndex=o,zn(n)}),l.addEventListener("dragover",u=>{Number.isInteger(n.dragTokenIndex)&&u.preventDefault()}),l.addEventListener("drop",u=>{Number.isInteger(n.dragTokenIndex)&&(u.preventDefault(),i(n.dragTokenIndex,o))}),l.appendChild(c),e.appendChild(l)};r(0),t.length===0&&e.appendChild(I("span","cp-rule-token-placeholder",{text:ce.rules.tokenEditorPlaceholder}));for(let o=0;o<t.length;o++){const l=gl(t[o]);if(!l)continue;if(n.tokens[o]=l,l.type==="slot"){const u=I("button","cp-rule-token-slot",{type:"button",text:ce.rules.selectValue});if(u.draggable=!0,u.addEventListener("dragstart",d=>{var h;n.dragTokenIndex=o,(h=d.dataTransfer)==null||h.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.addEventListener("click",()=>{n.insertContext={mode:"replace",index:o},zn(n)}),e.appendChild(u),((s=n.insertContext)==null?void 0:s.mode)==="replace"&&((a=n.insertContext)==null?void 0:a.index)===o){const d=b2();d.classList.add("cp-rule-token-picker"),d.addEventListener("change",()=>{var f;const h=uh(d.value).map(gl).filter(Boolean);h.length&&(n.tokens.splice(o,1,...h),n.insertContext=null,zn(n),(f=n.onExpressionChanged)==null||f.call(n))}),e.appendChild(d),requestAnimationFrame(()=>d.focus())}r(o+1);continue}if(l.type==="pill"){const u=I("button","cp-rule-token-pill",{type:"button",title:l.code});u.draggable=!0,u.addEventListener("dragstart",d=>{var h;n.dragTokenIndex=o,(h=d.dataTransfer)==null||h.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.append(I("span","cp-rule-token-pill-label",{text:l.label}),I("span","cp-rule-token-pill-remove",{html:fl})),u.addEventListener("click",()=>{var d;n.tokens.splice(o,1),zn(n),(d=n.onExpressionChanged)==null||d.call(n)}),e.appendChild(u),r(o+1);continue}if(l.type==="number"){const u=I("div","cp-rule-token-number-wrap");u.draggable=!0,u.addEventListener("dragstart",f=>{var v;n.dragTokenIndex=o,(v=f.dataTransfer)==null||v.setData("text/plain",String(o)),f.dataTransfer&&(f.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null});const d=I("input","cp-input-number cp-rule-token-number",{type:"number",step:.001,value:String(l.value??0)});d.addEventListener("change",()=>{var f;l.value=Number(d.value),(f=n.onExpressionChanged)==null||f.call(n)});const h=I("button","cp-rule-token-number-remove",{type:"button",title:"Remove token"});h.appendChild(I("span","cp-rule-token-pill-remove",{html:fl})),h.addEventListener("click",f=>{var v;f.preventDefault(),f.stopPropagation(),n.tokens.splice(o,1),zn(n),(v=n.onExpressionChanged)==null||v.call(n)}),u.append(d,h),e.appendChild(u),r(o+1);continue}const c=I("button","cp-rule-token-math",{type:"button",text:l.code.trim()||l.code});c.draggable=!0,c.addEventListener("dragstart",u=>{var d;n.dragTokenIndex=o,(d=u.dataTransfer)==null||d.setData("text/plain",String(o)),u.dataTransfer&&(u.dataTransfer.effectAllowed="move")}),c.addEventListener("dragend",()=>{n.dragTokenIndex=null}),c.addEventListener("click",()=>{var u;n.tokens.splice(o,1),zn(n),(u=n.onExpressionChanged)==null||u.call(n)}),e.appendChild(c),r(o+1)}}function S2(n){return Ru[n]||Ru.rules}function E2(n,e){const t=I("div","cp-setting-row cp-setting-range"),i=I("div","cp-setting-label-wrap"),r=I("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const s=I("div","cp-setting-range-controls"),a=I("div","cp-range-container cp-range-slider"),o=I("input","cp-input-number",{type:"number",step:n.step}),l=I("input","cp-input-number",{type:"number",step:n.step});Y_.create(a,{start:[n.min,n.max],connect:!0,range:{min:n.min,max:n.max},step:n.step,behaviour:"tap-drag"});const c=a.noUiSlider;let u=!0,d=!1;const h=(_,m)=>{o.value=String(_),l.value=String(m)};c.on("update",_=>{const m=Number(_[0]),p=Number(_[1]);d||h(m,p),!u&&n.set(m,p)});const f=()=>{let _=Number(o.value),m=Number(l.value);if(Number.isFinite(_)||(_=n.min),Number.isFinite(m)||(m=n.max),_>m){const b=_;_=m,m=b}const p=Sn(_,n.min,n.max),E=Sn(m,n.min,n.max),y=p!==_||E!==m;u=!0,d=y,c.set([p,E]),d=!1,u=!1,h(_,m),n.set(_,m)};o.addEventListener("input",f),l.addEventListener("input",f),o.addEventListener("change",f),l.addEventListener("change",f);const v=()=>{const _=n.get(),m=Number(_.min),p=Number(_.max),E=Number.isFinite(m)?m:n.min,y=Number.isFinite(p)?p:n.max,b=Sn(E,n.min,n.max),N=Sn(y,n.min,n.max),P=b!==E||N!==y;u=!0,d=P,c.set([b,N]),d=!1,u=!1,h(E,y)};return s.append(a,o,l),t.append(i,s),Wt(e,v,n.syncKeys),v(),u=!1,t}function C2(n,e){const t=I("div","cp-setting-row"),i=I("div","cp-setting-label-wrap"),r=I("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const s=I("div","cp-setting-controls"),a=I("input","cp-input-range",{type:"range",min:n.min,max:n.max,step:n.step}),o=I("input","cp-input-number",{type:"number",step:n.step,min:n.min,max:n.max}),l=d=>{const h=Sn(d,n.min,n.max);Dt(n.key,h)},c=d=>{const h=Number(d);Number.isFinite(h)&&Dt(n.key,h)};a.addEventListener("input",()=>l(Number(a.value))),o.addEventListener("change",()=>c(o.value));const u=()=>{const d=Number(se[n.key]),h=Number.isFinite(d)?d:n.min;a.value=String(Sn(h,n.min,n.max)),o.value=String(h)};return s.append(a,o),t.append(i,s),Wt(e,u,[n.key]),u(),t}function Lr(n,e){const t=document.createDocumentFragment();for(const i of n){const r=I("option","",{value:i.value,text:i.label});i.title&&(r.title=i.title),String(i.value)===String(e)&&(r.selected=!0),t.appendChild(r)}return t}function Lu(n=vt){const e=I("select","cp-input-select");e.appendChild(I("option","",{value:vt,text:ce.rules.selectValue}));const t=document.createElement("optgroup");t.label=ce.rules.detailVariables;for(const r of Vr("detail"))t.appendChild(I("option","",{value:r.id,text:r.label}));const i=document.createElement("optgroup");i.label=ce.rules.overallVariables;for(const r of Vr("overall"))i.appendChild(I("option","",{value:r.id,text:r.label}));return e.append(t,i),n&&n!==vt&&(e.value=n),e}function w2(n){const e=I("div","cp-menu-pane-inner"),t=".ssp-preset.json",i=(A="")=>{const R=String(A||"").trim();return R?/\.ssp-preset\.json$/i.test(R)?R.replace(/\.ssp-preset\.json$/i,""):R.replace(/\.[^./\\]+$/g,""):""},r=(A,R)=>({schemaVersion:1,name:String(A||"").trim(),params:R&&typeof R=="object"?R:{},updatedAt:new Date().toISOString()}),s=(A,R="")=>{const q=JSON.parse(String(A||"{}"));if(!q||typeof q!="object")throw new Error("Preset file is invalid.");const ge=String((q==null?void 0:q.name)||"").trim()||i(R);return q!=null&&q.params&&typeof q.params=="object"?{name:ge,params:q.params}:{name:ge,params:q}},a=async(A,R)=>{const q=String(A||"").trim(),ge=`${q||"seesound-preset"}${t}`,Ve=r(q,R);if(typeof window.showSaveFilePicker=="function")try{const j=await window.showSaveFilePicker({suggestedName:ge,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!j)return!1;const ye=await j.createWritable();return await ye.write(JSON.stringify(Ve,null,2)),await ye.close(),!0}catch{return!1}const K=new Blob([JSON.stringify(Ve,null,2)],{type:"application/json"}),he=URL.createObjectURL(K),Se=document.createElement("a");return Se.href=he,Se.download=ge,document.body.appendChild(Se),Se.click(),Se.remove(),URL.revokeObjectURL(he),!0},o=async()=>{if(typeof window.showOpenFilePicker=="function")try{const[A]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!A)return null;const R=await A.getFile(),q=await R.text();return s(q,R.name)}catch{return null}return new Promise(A=>{const R=document.createElement("input");R.type="file",R.accept=`${t},.json`,R.style.display="none",R.addEventListener("change",async()=>{var q;try{const ge=(q=R.files)==null?void 0:q[0];if(!ge){A(null);return}const Ve=await ge.text();A(s(Ve,ge.name))}catch{A(null)}finally{R.remove()}},{once:!0}),document.body.appendChild(R),R.click()})},l=(A="")=>{const R=String(A||"").trim();return R?/\.ssp\.json$/i.test(R)?R.replace(/\.ssp\.json$/i,""):R.replace(/\.[^./\\]+$/g,""):""},c=I("section","cp-section"),u=I("div","cp-section-title-row"),d=I("h3","cp-section-title",{text:ce.file.project}),h=I("span","cp-project-name"),f=ce.file.projectNew||"New Project",v=(A={})=>{const R=String((A==null?void 0:A.projectName)||"").trim(),q=String((A==null?void 0:A.fileName)||"").trim(),ge=R||l(q)||f;h.textContent=ge,h.title=ge};v(),u.append(d,h),c.appendChild(u);const _=I("div","cp-button-grid"),m=I("button","cp-btn",{text:ce.file.projectLoad}),p=I("button","cp-btn",{text:ce.file.projectSave}),E=I("button","cp-btn",{text:ce.file.projectSaveAs});Ht(m,Ot.load,ce.file.projectLoad),Ht(p,Ot.save,ce.file.projectSave),Ht(E,Ot.saveAs,ce.file.projectSaveAs),_.append(m,p,E),c.appendChild(_),m.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-open-request"))),p.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-request"))),E.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-as-request"))),window.addEventListener("seesound:project-file-state",A=>{v((A==null?void 0:A.detail)||{})}),window.addEventListener("seesound:project-loaded",A=>{v((A==null?void 0:A.detail)||{})}),window.addEventListener("seesound:project-autosaved",A=>{v((A==null?void 0:A.detail)||{})});const y=I("section","cp-section cp-preset-bar");y.appendChild(I("h3","cp-section-title",{text:ce.file.presets}));const b=I("div","cp-preset-row"),N=I("select","cp-input-select cp-preset-sel"),P=I("input","cp-input-text cp-preset-name",{type:"text",placeholder:ce.file.presetNamePlaceholder}),D=I("button","cp-btn",{text:ce.file.presetLoad}),B=I("button","cp-btn",{text:ce.file.presetUpload||"Upload"}),C=I("button","cp-btn",{text:ce.file.presetSaveProject||ce.file.presetSave}),S=I("button","cp-btn",{text:ce.file.presetSaveLocal||"Save Local"}),F=I("button","cp-btn cp-btn-danger",{text:ce.file.presetRemove});Ht(D,Ot.load,ce.file.presetLoad),Ht(B,Ot.upload,ce.file.presetUpload||"Upload"),Ht(C,Ot.save,ce.file.presetSaveProject||ce.file.presetSave),Ht(S,Ot.saveAs,ce.file.presetSaveLocal||"Save Local"),Ht(F,Ot.remove,ce.file.presetRemove),b.append(N,D,B,F,P,C,S),y.appendChild(b);async function ee(){const A=await dl(),R=String(N.value||"");N.innerHTML="",N.appendChild(I("option","",{value:"",text:ce.file.presetSelectPlaceholder}));for(const q of A)N.appendChild(I("option","",{value:q,text:q}));R&&A.includes(R)&&(N.value=R)}N.addEventListener("change",()=>{N.value&&(P.value=N.value)}),D.addEventListener("click",async()=>{const A=String(N.value||"").trim();if(!A)return;const R=await Kd(A);R!=null&&R.params&&rn(R.params)}),B.addEventListener("click",async()=>{const A=await o();if(!(A!=null&&A.params)||typeof A.params!="object")return;const R=String(A.name||"").trim();rn(A.params),R&&(await Ma(R,A.params),await ee(),N.value=R,P.value=R,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),C.addEventListener("click",async()=>{const A=String(P.value||"").trim(),R=String(N.value||"").trim(),q=A||R;if(!q)return;const ge=ys();window.dispatchEvent(new CustomEvent("seesound:project-preset-save-request",{detail:{name:q,params:ge}})),await Ma(q,ge),await ee(),N.value=q,P.value=q,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}),S.addEventListener("click",async()=>{const A=String(P.value||"").trim(),R=String(N.value||"").trim(),q=A||R;!q||!await a(q,ys())||(P.value=q)}),F.addEventListener("click",async()=>{const A=String(N.value||"").trim();A&&(await c_(A),P.value="",await ee(),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),window.addEventListener("seesound:preset-library-changed",()=>{ee()});const $=I("section","cp-section");$.appendChild(I("h3","cp-section-title",{text:ce.file.export}));const ne=I("div","cp-button-grid"),Q=I("button","cp-btn",{text:ce.file.exportImage}),Z=I("button","cp-btn",{text:ce.file.exportImageNoBg}),pe=I("button","cp-btn",{text:ce.file.exportVideo}),g=I("button","cp-btn",{text:ce.file.exportObj});Ht(Q,Ot.exportImage,ce.file.exportImage),Ht(Z,Ot.exportImageNoBg,ce.file.exportImageNoBg),Ht(pe,Ot.exportVideo,ce.file.exportVideo),Ht(g,Ot.exportObj,ce.file.exportObj),ne.append(Q,Z,pe,g),$.appendChild(ne),Q.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image"))),Z.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image-no-bg"))),pe.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-video-toggle"))),g.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-obj"))),e.append(c,y,$),n.appendChild(e),ee()}function T2(n,e){const t=I("div","cp-menu-pane-inner"),i=I("section","cp-section");i.appendChild(I("h3","cp-section-title",{text:ce.view.canvasSize}));const r=I("input","cp-input-number",{type:"number",min:160,step:1}),s=I("input","cp-input-number",{type:"number",min:120,step:1}),a=I("div","cp-inline-pair");a.append(I("label","cp-setting-label",{text:ce.view.width}),r,I("label","cp-setting-label",{text:ce.view.height}),s),i.appendChild(a);const o=I("input","cp-input-range",{type:"range",min:5,max:400,step:1}),l=I("input","cp-input-number",{type:"number",min:5,max:400,step:1}),c=I("div","cp-setting-row"),u=I("div","cp-setting-label-wrap");u.appendChild(I("label","cp-setting-label",{text:ce.view.canvasZoom}));const d=I("div","cp-setting-controls");d.append(o,l),c.append(u,d),i.appendChild(c);const h=I("section","cp-section");h.appendChild(I("h3","cp-section-title",{text:ce.view.backgroundColor}));const f=I("input","cp-input-color",{type:"color"});h.appendChild(f);const v=I("section","cp-section");v.appendChild(I("h3","cp-section-title",{text:ce.view.cameraPosition}));const _=I("input","cp-input-number",{type:"number",step:1}),m=I("input","cp-input-number",{type:"number",step:1}),p=I("input","cp-input-number",{type:"number",step:1}),E=I("div","cp-inline-triplet");E.append(_,m,p),v.appendChild(E),v.appendChild(I("h3","cp-section-title",{text:ce.view.cameraTarget}));const y=I("input","cp-input-number",{type:"number",step:1}),b=I("input","cp-input-number",{type:"number",step:1}),N=I("input","cp-input-number",{type:"number",step:1}),P=I("div","cp-inline-triplet");P.append(y,b,N),v.appendChild(P);const D=I("div","cp-button-grid"),B=I("button","cp-btn",{text:ce.view.cameraReset}),C=I("button","cp-btn",{text:ce.view.cameraFit}),S=I("button","cp-btn",{text:ce.view.cameraClean});Ht(B,Ot.reset,ce.view.cameraReset),Ht(C,Ot.fit,ce.view.cameraFit),Ht(S,Ot.clean,ce.view.cameraClean),D.append(B,C,S),v.appendChild(D);const F=I("section","cp-section");F.appendChild(I("h3","cp-section-title",{text:ce.view.projection}));const ee=I("select","cp-input-select");ee.appendChild(Lr([{value:"axonometric",label:ce.view.projectionAxo},{value:"perspective",label:ce.view.projectionPerspective}],se.cameraProjection));const $=I("select","cp-input-select");$.appendChild(Lr([{value:"orthoXY",label:ce.view.axoOrthoXY},{value:"topXZ",label:ce.view.axoOrthoXZ},{value:"orthoYZ",label:ce.view.axoOrthoYZ},{value:"isometric",label:ce.view.axoIsometric}],se.cameraAxoPreset)),F.append(ee,$);const ne=I("section","cp-section");ne.appendChild(I("h3","cp-section-title",{text:ce.view.angleOfView}));const Q=I("input","cp-input-range",{type:"range",min:20,max:120,step:1}),Z=I("input","cp-input-number",{type:"number",min:20,max:120,step:1}),pe=I("div","cp-setting-controls");pe.append(Q,Z),ne.appendChild(pe);const g=I("section","cp-section");g.appendChild(I("h3","cp-section-title",{text:ce.view.blending}));const A=I("select","cp-input-select");A.appendChild(Lr([{value:"source-over",label:"Normal"},{value:"screen",label:"Screen"},{value:"alpha",label:"Alpha"},{value:"multiply",label:"Multiply"}],se.blendMode)),g.appendChild(A);const R=I("section","cp-section");R.appendChild(I("h3","cp-section-title",{text:ce.view.postProcessing}));const q=I("input","cp-input-toggle",{type:"checkbox"}),ge=I("input","cp-input-toggle",{type:"checkbox"}),Ve=I("input","cp-input-toggle",{type:"checkbox"}),K=I("label","cp-toggle-row");K.append(q,I("span","cp-setting-label",{text:ce.view.postProcessingEnabled}));const he=I("label","cp-toggle-row");he.append(ge,I("span","cp-setting-label",{text:ce.view.bloomEnabled}));const Se=I("label","cp-toggle-row");Se.append(Ve,I("span","cp-setting-label",{text:ce.view.bokehEnabled}));const j=I("input","cp-input-range",{type:"range",min:0,max:4,step:.01}),ye=I("input","cp-input-number",{type:"number",min:0,max:4,step:.01}),Y=I("div","cp-setting-row");Y.append(I("label","cp-setting-label",{text:ce.view.bloomStrength}),(()=>{const ae=I("div","cp-setting-controls");return ae.append(j,ye),ae})());const ve=I("input","cp-input-range",{type:"range",min:0,max:2,step:.01}),He=I("input","cp-input-number",{type:"number",min:0,max:2,step:.01}),Ge=I("div","cp-setting-row");Ge.append(I("label","cp-setting-label",{text:ce.view.bloomRadius}),(()=>{const ae=I("div","cp-setting-controls");return ae.append(ve,He),ae})());const st=I("input","cp-input-range",{type:"range",min:0,max:1,step:.01}),L=I("input","cp-input-number",{type:"number",min:0,max:1,step:.01}),Et=I("div","cp-setting-row");Et.append(I("label","cp-setting-label",{text:ce.view.bloomThreshold}),(()=>{const ae=I("div","cp-setting-controls");return ae.append(st,L),ae})());const $e=I("input","cp-input-range",{type:"range",min:1,max:5e3,step:1}),Ye=I("input","cp-input-number",{type:"number",min:1,max:5e3,step:1}),De=I("div","cp-setting-row");De.append(I("label","cp-setting-label",{text:ce.view.bokehFocus}),(()=>{const ae=I("div","cp-setting-controls");return ae.append($e,Ye),ae})());const it=I("input","cp-input-range",{type:"range",min:0,max:.001,step:1e-5}),Ue=I("input","cp-input-number",{type:"number",min:0,max:.001,step:1e-5}),T=I("div","cp-setting-row");T.append(I("label","cp-setting-label",{text:ce.view.bokehAperture}),(()=>{const ae=I("div","cp-setting-controls");return ae.append(it,Ue),ae})());const x=I("input","cp-input-range",{type:"range",min:0,max:.1,step:5e-4}),H=I("input","cp-input-number",{type:"number",min:0,max:.1,step:5e-4}),oe=I("div","cp-setting-row");oe.append(I("label","cp-setting-label",{text:ce.view.bokehMaxBlur}),(()=>{const ae=I("div","cp-setting-controls");return ae.append(x,H),ae})()),R.append(K,he,Y,Ge,Et,Se,De,T,oe);const de=I("section","cp-section");de.appendChild(I("h3","cp-section-title",{text:ce.view.guides}));const X=I("input","cp-input-toggle",{type:"checkbox"}),Me=I("input","cp-input-toggle",{type:"checkbox"}),Ee=I("input","cp-input-toggle",{type:"checkbox"}),Ae=I("label","cp-inline-pair");Ae.append(X,I("span","cp-setting-label",{text:ce.view.guideAxes}));const Ze=I("label","cp-inline-pair");Ze.append(Me,I("span","cp-setting-label",{text:ce.view.guideCoordinates}));const me=I("label","cp-inline-pair");me.append(Ee,I("span","cp-setting-label",{text:ce.view.cameraHud})),de.append(Ae,Ze,me),r.addEventListener("change",()=>{const ae=Math.max(160,Math.floor(Number(r.value)||160));Dt("canvasWidth",ae)}),s.addEventListener("change",()=>{const ae=Math.max(120,Math.floor(Number(s.value)||120));Dt("canvasHeight",ae)});const fe=ae=>{const ze=Sn(ae,5,400);Dt("canvasScale",Math.floor(ze))},Ne=ae=>{const ze=Number(ae);Number.isFinite(ze)&&Dt("canvasScale",Math.floor(ze))};o.addEventListener("input",()=>fe(Number(o.value))),l.addEventListener("change",()=>Ne(l.value)),f.addEventListener("input",()=>{const ae=g2(f.value);rn({defaultBackgroundHue:Math.round(ae.h),defaultBackgroundSaturation:Math.round(ae.s),defaultBackgroundLightness:Math.round(ae.l)})});const qe=()=>{_.value=String(Number(se.cameraPosX??0)),m.value=String(Number(se.cameraPosY??0)),p.value=String(Number(se.cameraPosZ??420)),y.value=String(Number(se.cameraTargetX??0)),b.value=String(Number(se.cameraTargetY??0)),N.value=String(Number(se.cameraTargetZ??0))},Oe=()=>{rn({cameraPosX:Number(_.value)||0,cameraPosY:Number(m.value)||0,cameraPosZ:Number(p.value)||0,cameraTargetX:Number(y.value)||0,cameraTargetY:Number(b.value)||0,cameraTargetZ:Number(N.value)||0})};for(const ae of[_,m,p,y,b,N])ae.addEventListener("change",Oe);B.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-reset-camera"))}),C.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-fit-camera"))}),S.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-clean-canvas"))}),ee.addEventListener("change",()=>Dt("cameraProjection",ee.value)),$.addEventListener("change",()=>Dt("cameraAxoPreset",$.value)),A.addEventListener("change",()=>Dt("blendMode",A.value)),q.addEventListener("change",()=>Dt("postProcessEnabled",q.checked?1:0)),ge.addEventListener("change",()=>Dt("bloomEnabled",ge.checked?1:0)),Ve.addEventListener("change",()=>Dt("bokehEnabled",Ve.checked?1:0));const tt=({slider:ae,number:ze,key:Ce,min:Xe,max:ht})=>{const gt=pt=>{const Lt=Sn(pt,Xe,ht);Dt(Ce,Lt)},lt=pt=>{const Lt=Number(pt);Number.isFinite(Lt)&&Dt(Ce,Lt)};ae.addEventListener("input",()=>gt(Number(ae.value))),ze.addEventListener("change",()=>lt(ze.value))};tt({slider:j,number:ye,key:"bloomStrength",min:0,max:4}),tt({slider:ve,number:He,key:"bloomRadius",min:0,max:2}),tt({slider:st,number:L,key:"bloomThreshold",min:0,max:1}),tt({slider:$e,number:Ye,key:"bokehFocus",min:1,max:5e3}),tt({slider:it,number:Ue,key:"bokehAperture",min:0,max:.001}),tt({slider:x,number:H,key:"bokehMaxBlur",min:0,max:.1});const nt=ae=>{Dt("cameraAngleOfView",Sn(ae,20,120))},yt=ae=>{const ze=Number(ae);Number.isFinite(ze)&&Dt("cameraAngleOfView",ze)};Q.addEventListener("input",()=>nt(Number(Q.value))),Z.addEventListener("change",()=>yt(Z.value)),X.addEventListener("change",()=>{Dt("originSignEnabled",X.checked?1:0)}),Me.addEventListener("change",()=>{Dt("coordinateGuidesEnabled",Me.checked?1:0)}),Ee.addEventListener("change",()=>{window.dispatchEvent(new CustomEvent("seesound:camera-hud-toggle",{detail:{enabled:Ee.checked}}))}),window.addEventListener("seesound:origin-sign-state",ae=>{var Ce;const ze=(Ce=ae==null?void 0:ae.detail)==null?void 0:Ce.enabled;typeof ze=="boolean"&&(X.checked=ze)}),window.addEventListener("seesound:coordinate-guide-state",ae=>{var Ce;const ze=(Ce=ae==null?void 0:ae.detail)==null?void 0:Ce.enabled;typeof ze=="boolean"&&(Me.checked=ze)}),window.addEventListener("seesound:camera-hud-state",ae=>{var Ce;const ze=(Ce=ae==null?void 0:ae.detail)==null?void 0:Ce.enabled;typeof ze=="boolean"&&(Ee.checked=ze)});const z=()=>{r.value=String(Number(se.canvasWidth??0)||0),s.value=String(Number(se.canvasHeight??0)||0)},we=()=>{const ae=Math.max(5,Math.min(400,Math.floor(Number(se.canvasScale)||100)));o.value=String(ae),l.value=String(ae)},ie=()=>{const ae=m2(Number(se.defaultBackgroundHue??0),Number(se.defaultBackgroundSaturation??0),Number(se.defaultBackgroundLightness??0));f.value=f2(ae.r,ae.g,ae.b)},ue=()=>{ee.value=String(se.cameraProjection||"axonometric"),$.value=String(se.cameraAxoPreset||"orthoXY");const ae=ee.value==="perspective";ne.style.display=ae?"":"none"},Le=()=>{A.value=String(se.blendMode||"screen")},Re=()=>{const ae=Number(se.cameraAngleOfView??55);Q.value=String(ae),Z.value=String(ae)},w=()=>{q.checked=Number(se.postProcessEnabled??0)>=.5,ge.checked=Number(se.bloomEnabled??1)>=.5,Ve.checked=Number(se.bokehEnabled??1)>=.5},O=()=>{X.checked=Number(se.originSignEnabled??1)>=.5,Me.checked=Number(se.coordinateGuidesEnabled??0)>=.5},W=()=>{const ae=Number(se.bloomStrength??1.15);j.value=String(ae),ye.value=String(ae)},re=()=>{const ae=Number(se.bloomRadius??.7);ve.value=String(ae),He.value=String(ae)},be=()=>{const ae=Number(se.bloomThreshold??.18);st.value=String(ae),L.value=String(ae)},xe=()=>{const ae=Number(se.bokehFocus??380);$e.value=String(ae),Ye.value=String(ae)},te=()=>{const ae=Number(se.bokehAperture??12e-5);it.value=String(ae),Ue.value=String(ae)},le=()=>{const ae=Number(se.bokehMaxBlur??.01);x.value=String(ae),H.value=String(ae)},Je=()=>{qe()};Wt(e,z,["canvasWidth","canvasHeight"]),Wt(e,we,["canvasScale"]),Wt(e,ie,["defaultBackgroundHue","defaultBackgroundSaturation","defaultBackgroundLightness"]),Wt(e,ue,["cameraProjection","cameraAxoPreset"]),Wt(e,Le,["blendMode"]),Wt(e,Re,["cameraAngleOfView"]),Wt(e,w,["postProcessEnabled","bloomEnabled","bokehEnabled"]),Wt(e,O,["originSignEnabled","coordinateGuidesEnabled"]),Wt(e,W,["bloomStrength"]),Wt(e,re,["bloomRadius"]),Wt(e,be,["bloomThreshold"]),Wt(e,xe,["bokehFocus"]),Wt(e,te,["bokehAperture"]),Wt(e,le,["bokehMaxBlur"]),Wt(e,Je,["cameraPosX","cameraPosY","cameraPosZ","cameraTargetX","cameraTargetY","cameraTargetZ"]),window.addEventListener("seesound:camera-state",ae=>{var Yt,tn,$t,M,k,U;const ze=(ae==null?void 0:ae.detail)||{},Ce=Number((Yt=ze.position)==null?void 0:Yt.x),Xe=Number((tn=ze.position)==null?void 0:tn.y),ht=Number(($t=ze.position)==null?void 0:$t.z),gt=Number((M=ze.target)==null?void 0:M.x),lt=Number((k=ze.target)==null?void 0:k.y),pt=Number((U=ze.target)==null?void 0:U.z),Lt=Number(ze.fov),It=String(ze.projection||"");Number.isFinite(Ce)&&(_.value=String(Ce)),Number.isFinite(Xe)&&(m.value=String(Xe)),Number.isFinite(ht)&&(p.value=String(ht)),Number.isFinite(gt)&&(y.value=String(gt)),Number.isFinite(lt)&&(b.value=String(lt)),Number.isFinite(pt)&&(N.value=String(pt)),Number.isFinite(Lt)&&(Q.value=String(Lt),Z.value=String(Lt)),(It==="perspective"||It==="axonometric")&&(ee.value=It,ne.style.display=It==="perspective"?"":"none")}),z(),we(),ie(),ue(),Le(),Re(),w(),O(),W(),re(),be(),xe(),te(),le(),Je(),Ee.checked=!1,t.append(i,h,v,F,ne,g,R,de),n.appendChild(t)}function A2(n,e){const t=I("div","cp-menu-pane-inner"),i=I("section","cp-section");i.appendChild(I("h3","cp-section-title",{text:ce.settings.processing||"Processing"}));const r=I("div","cp-setting-row"),s=I("div","cp-setting-label-wrap");s.appendChild(I("label","cp-setting-label",{text:ce.settings.audioResolution,title:"Technical term: FFT Size. Frequency-domain analysis resolution."}));const a=I("select","cp-input-select");a.appendChild(Lr(u2.map(u=>({value:u,label:String(u)})),se.fftSize)),a.addEventListener("change",()=>{Dt("fftSize",Number(a.value))}),r.append(s,a),i.appendChild(r);for(const u of d2)i.appendChild(C2(u,e));const o=I("button","cp-btn cp-btn-wide",{text:ce.settings.resetDefaults});Ht(o,Ot.reset,ce.settings.resetDefaults),o.addEventListener("click",()=>{r_()}),i.appendChild(o);const l=I("section","cp-section");l.appendChild(I("h3","cp-section-title",{text:ce.settings.normalizationRanges}));for(const u of h2)l.appendChild(E2(u,e));const c=()=>{a.value=String(se.fftSize||2048)};Wt(e,c,["fftSize"]),c(),t.append(i,l),n.appendChild(t)}function _o(n){var s;const e=n.definition.output;if(n.definition.type==="enum")return{operator:"set",output:e,value:n.enumValue||((s=n.definition.options)==null?void 0:s[0])||"square"};const t=n.definition.type==="enum"?"":ch(n.tokens);if(n.definition.type!=="enum"&&M2(n.tokens))return null;n.expression=t;const i=String(t||"").trim();if(!i)return null;const r=Number(i);return Number.isFinite(r)&&/^[-+]?\d+(\.\d+)?$/.test(i)?{operator:"set",output:e,value:r}:oh.has(i)?{operator:"set",output:e,input:i}:{operator:"set",output:e,expression:i}}function R2(n,e){const t=I("div","cp-menu-pane-inner"),i=I("div","cp-rules-wrapper");t.appendChild(i);const r=new Map,s=[],a=new Map,o=new Map,l=new Map,c=new Map;let u=0;function d(g,A){return`${g}:${A}`}function h(g,A=!1){const R=`${g.target}-${g.output}`;return A?(u+=1,`${R}-dup-${u}`):`${R}-base`}function f(g,A=!1){var R;return{definition:g,instanceId:h(g,A),isDuplicate:A,enabled:!1,collapsed:!1,conditionEnabled:!1,conditionOperator:"always",conditionDetail:vt,conditionOverall:vt,conditionValue:0,conditionValueInput:vt,expression:"",tokens:[],insertContext:null,pendingInsertIndex:null,dragTokenIndex:null,enumValue:((R=g.options)==null?void 0:R[0])||"square",toggle:null,card:null,conditionRow:null,syncConditionUi:null,tokenEditor:null,onExpressionChanged:null,enumSelect:null,actionSelect:null,duplicateBtn:null,removeBtn:null,collapseBtn:null}}function v(g){var A;g.enabled=!1,g.collapsed=!1,g.conditionEnabled=!1,g.conditionOperator="always",g.conditionDetail=vt,g.conditionOverall=vt,g.conditionValue=0,g.conditionValueInput=vt,g.expression="",g.tokens=[],g.insertContext=null,g.pendingInsertIndex=null,g.enumValue=((A=g.definition.options)==null?void 0:A[0])||"square"}function _(g){const A=b(g);return JSON.stringify(A||{operator:"always"})}function m(){var R;const g=new Map,A=new Set;for(const q of s){if(!(q!=null&&q.enabled)||!_o(q))continue;const Ve=`${q.definition.target}|${q.definition.output}|${_(q)}`,K=g.get(Ve);if(K){A.add(K.instanceId),A.add(q.instanceId);continue}g.set(Ve,q)}for(const q of s)(R=q.card)==null||R.classList.toggle("is-danger",A.has(q.instanceId))}const p=g=>D.get(g)!==!1,E=g=>{if(!(g!=null&&g.card))return;const A=p(g.definition.section);g.card.classList.toggle("is-disabled",!g.enabled||!A),g.card.classList.toggle("is-collapsed",!!g.collapsed),g.removeBtn&&(g.removeBtn.style.display=g.isDuplicate?"":"none"),g.collapseBtn&&(g.collapseBtn.textContent=g.collapsed?"▸":"▾")};function y(g,A="",R=null){const q=j=>s.filter(ye=>ye.definition.target===g&&ye.definition.output===j),ge=[...q("red"),...q("green"),...q("blue")],K=q("hue")[0]||null;if(!K||ge.length===0)return;if(A==="red"||A==="green"||A==="blue"){const j=R||q(A)[0];if(j){for(const ye of ge)ye.enabled=!!j.enabled;j.enabled&&String(j.expression||"").trim()&&(K.enabled=!1)}}if(A==="hue"&&K.enabled&&String(K.expression||"").trim())for(const j of ge)j.enabled=!1;const he=ge.some(j=>j.enabled&&String(j.expression||"").trim()),Se=K.enabled&&String(K.expression||"").trim();if(he&&Se)if(A==="hue")for(const j of ge)j.enabled=!1;else K.enabled=!1;for(const j of ge)j.toggle&&(j.toggle.checked=j.enabled),E(j);K.toggle&&(K.toggle.checked=K.enabled),E(K)}function b(g){if(!g.conditionEnabled||g.conditionOperator==="always")return{operator:"always"};const A=String(g.conditionDetail||vt),R=String(g.conditionOverall||vt),q=A!==vt?A:R!==vt?R:"";if(!q)return{operator:"always"};const ge=String(g.conditionValueInput||vt);return ge&&ge!==vt?{operator:g.conditionOperator,input:q,valueInput:ge}:{operator:g.conditionOperator,input:q,value:Number(g.conditionValue)||0}}let N=!1,P=!1;const D=new Map;function B(g,A=!1){if(!g||!A&&!g.enabled||!A&&g.conditionEnabled&&!(g.conditionDetail!==vt||g.conditionOverall!==vt))return;const R=_o(g);!A&&g.enabled&&!R||C()}function C(){if(N)return;y("spawnedParticles"),y("physicalParticles"),y("lines"),y("background"),m();const g=[];for(let A=0;A<s.length;A++){const R=s[A],q=_o(R);q&&g.push({id:R.instanceId||`${R.definition.target}-${R.definition.output}`,group:`${R.definition.section}/${R.definition.subgroup}`,subgroup:"",enabled:!!R.enabled,sectionDisabled:!p(R.definition.section),target:R.definition.target,condition:b(R),actions:[q],order:A})}P=!0,Dt("ruleBlocks",g)}function S(g){var A,R,q,ge,Ve,K;N=!0;try{for(const j of[...s]){if(!j.isDuplicate)continue;(A=j.card)==null||A.remove();const ye=s.indexOf(j);ye>=0&&s.splice(ye,1);const Y=c.get(j.definition.section);if(Y){const ve=Y.indexOf(j);ve>=0&&Y.splice(ve,1)}}for(const j of s)v(j);D.clear();for(const j of Au)D.has(j.section)||D.set(j.section,!0);const he=Array.isArray(g)?[...g]:[];he.sort((j,ye)=>Number((j==null?void 0:j.order)??0)-Number((ye==null?void 0:ye.order)??0));const Se=new Map;for(const j of he){const ye=String((j==null?void 0:j.target)||""),Y=Array.isArray(j==null?void 0:j.actions)?j.actions[0]:null,ve=String((Y==null?void 0:Y.output)||""),He=d(ye,ve),Ge=r.get(He);if(!Ge)continue;const st=Se.get(He)||0;let L=Ge;if(st>0){const it=String((j==null?void 0:j.id)||"");if(!/-dup-\d+$/i.test(it))continue;L=f(Ge.definition,!0),L.instanceId=it||h(Ge.definition,!0),Z(L,Ge.card)}Se.set(He,1),(j==null?void 0:j.sectionDisabled)===!0&&D.set(L.definition.section,!1),L.enabled=j.enabled!==!1;const Et=String(((R=j==null?void 0:j.condition)==null?void 0:R.operator)||"always");L.conditionOperator=wu.includes(Et)?Et:"always",L.conditionValue=Number(((q=j==null?void 0:j.condition)==null?void 0:q.value)??0);const $e=String(((ge=j==null?void 0:j.condition)==null?void 0:ge.valueInput)||"");L.conditionValueInput=oh.has($e)?$e:vt;const Ye=String(((Ve=j==null?void 0:j.condition)==null?void 0:Ve.input)||""),De=cl(Ye);(De==null?void 0:De.group)==="detail"?(L.conditionDetail=Ye,L.conditionOverall=vt):(De==null?void 0:De.group)==="overall"&&(L.conditionOverall=Ye,L.conditionDetail=vt),L.conditionEnabled=L.conditionOperator!=="always"&&!!Ye,L.definition.type==="enum"?L.enumValue=String((Y==null?void 0:Y.value)||L.enumValue):typeof(Y==null?void 0:Y.expression)=="string"?L.expression=Y.expression:typeof(Y==null?void 0:Y.input)=="string"?L.expression=Y.input:(Y==null?void 0:Y.value)!==void 0&&(Y==null?void 0:Y.value)!==null&&(L.expression=String(Y.value)),L.tokens=_2(L.expression)}y("spawnedParticles"),y("physicalParticles"),y("lines"),y("background");for(const j of s)j.toggle&&(j.toggle.checked=j.enabled),E(j),(K=j.syncConditionUi)==null||K.call(j),j.enumSelect&&(j.enumSelect.value=j.enumValue),zn(j);for(const[j,ye]of a.entries()){const Y=p(j);ye.checked=Y;const ve=o.get(j);ve&&ve.classList.toggle("is-section-disabled",!Y)}m()}finally{N=!1}}let F="",ee="",$=null;const ne=new Map;function Q(g){return(Array.isArray(g)?g:[]).map(A=>gl(A)).filter(Boolean)}function Z(g,A=null){var de;const R=g.definition,q=l.get(R.section);if(!q)return;const ge=I("article",`cp-rule-card${g.isDuplicate?" cp-rule-card--duplicate":""}`),Ve=I("div","cp-rule-card-header"),K=I("div","cp-rule-card-tools"),he=I("button","cp-btn cp-btn-icon cp-rule-card-duplicate",{type:"button",title:"Duplicate rule","aria-label":"Duplicate rule"});he.innerHTML=Ot.duplicate;const Se=I("button","cp-btn cp-btn-icon cp-btn-danger cp-rule-card-remove",{type:"button",title:"Remove duplicate rule","aria-label":"Remove duplicate rule"});Se.innerHTML=Ot.remove,Se.style.display=g.isDuplicate?"":"none";const j=I("button","cp-btn cp-btn-icon cp-rule-card-collapse",{type:"button",title:"Collapse rule","aria-label":"Collapse rule",text:g.collapsed?"▸":"▾"});K.append(he,Se,j);const ye=I("input","cp-input-toggle",{type:"checkbox"}),Y=g.isDuplicate?" (Duplicate)":"",ve=I("div","cp-rule-card-title",{text:`${R.label}${Y}`});Ve.append(ye,ve,K);const He=I("div","cp-rule-card-condition-builder"),Ge=I("button","cp-btn cp-rule-condition-add",{type:"button",text:ce.rules.addCondition});Ht(Ge,Ot.add,ce.rules.addCondition);const st=I("div","cp-rule-condition-sentence"),L=I("span","cp-rule-condition-when",{text:ce.rules.when}),Et=Lu(vt),$e=I("select","cp-input-select cp-rule-condition-operator");$e.appendChild(Lr(wu.filter(X=>X!=="always").map(X=>({value:X,label:X})),">"));const Ye=I("input","cp-input-number",{type:"number",step:.001,value:"0"}),De=Lu(vt);De.classList.add("cp-rule-condition-value-input");const it=I("button","cp-btn cp-btn-danger cp-rule-condition-remove",{type:"button",text:ce.rules.removeCondition});Ht(it,Ot.clear,ce.rules.removeCondition),st.append(L,Et,$e,Ye,De,it),He.append(Ge,st);const Ue=I("div","cp-rule-card-expression");let T=null,x=null,H=null;if(R.type==="enum")T=I("select","cp-input-select"),T.appendChild(Lr(R.options.map(X=>({value:X,label:X})),g.enumValue)),Ue.appendChild(T);else{const X=I("div","cp-rule-token-row"),Me=x2("");H=y2(""),x=I("div","cp-rule-token-editor",{role:"list",tabindex:"0"}),X.append(Me,H),Ue.append(X,x);const Ee=()=>{if(g.expression=ch(g.tokens),(R.output==="red"||R.output==="green"||R.output==="blue")&&y(R.target,R.output,g),R.output==="hue"&&y(R.target,"hue",g),g.enabled&&!String(g.expression||"").trim()){g.enabled=!1,g.toggle&&(g.toggle.checked=!1),E(g),C();return}B(g)};g.onExpressionChanged=Ee;const Ae=(Ze,me)=>{const fe=uh(Ze);if(!fe.length)return;const Ne=Number.isInteger(g.pendingInsertIndex)?g.pendingInsertIndex:g.tokens.length;g.tokens.splice(Ne,0,...fe),g.pendingInsertIndex=null,me&&(me.value=""),zn(g),Ee()};Me.addEventListener("change",()=>{Ae(String(Me.value||""),Me)}),H.addEventListener("change",()=>{Ae(String(H.value||""),H)})}ge.append(Ve,He,Ue),(A==null?void 0:A.parentNode)===q?A.after(ge):q.appendChild(ge),g.toggle=ye,g.card=ge,g.duplicateBtn=he,g.removeBtn=Se,g.collapseBtn=j,g.conditionRow=He,g.tokenEditor=x,g.enumSelect=T,g.actionSelect=H,g.syncConditionUi=()=>{if(Ge.style.display=g.conditionEnabled?"none":"",st.style.display=g.conditionEnabled?"":"none",!g.conditionEnabled)return;$e.value=g.conditionOperator==="always"?">":g.conditionOperator;const X=g.conditionDetail!==vt?g.conditionDetail:g.conditionOverall;Et.value=X||vt,Ye.value=String(Number(g.conditionValue||0)),De.value=g.conditionValueInput||vt},g.syncConditionUi();const oe=A?Math.max(0,s.findIndex(X=>X.card===A)+1):s.length;s.splice(oe,0,g),(de=c.get(R.section))==null||de.push(g),he.addEventListener("click",()=>{var Me;const X=f(R,!0);X.enabled=g.enabled,X.conditionEnabled=g.conditionEnabled,X.conditionOperator=g.conditionOperator,X.conditionDetail=g.conditionDetail,X.conditionOverall=g.conditionOverall,X.conditionValue=g.conditionValue,X.conditionValueInput=g.conditionValueInput,X.expression=g.expression,X.tokens=Q(g.tokens),X.enumValue=g.enumValue,Z(X,g.card),E(X),(Me=X.syncConditionUi)==null||Me.call(X),X.enumSelect&&(X.enumSelect.value=X.enumValue),X.definition.type!=="enum"&&zn(X),C()}),Se.addEventListener("click",()=>{var Ae;if(!g.isDuplicate)return;const X=s.indexOf(g);X>=0&&s.splice(X,1);const Me=c.get(R.section)||[],Ee=Me.indexOf(g);Ee>=0&&Me.splice(Ee,1),(Ae=g.card)==null||Ae.remove(),C()}),j.addEventListener("click",()=>{g.collapsed=!g.collapsed,E(g)}),ye.addEventListener("change",()=>{if(g.enabled=ye.checked,E(g),(R.output==="red"||R.output==="green"||R.output==="blue")&&y(R.target,R.output,g),R.output==="hue"&&y(R.target,"hue",g),!g.enabled){C();return}B(g)}),Ge.addEventListener("click",()=>{var X;g.conditionEnabled=!0,g.conditionOperator==="always"&&(g.conditionOperator=">"),(X=g.syncConditionUi)==null||X.call(g),B(g)}),$e.addEventListener("change",()=>{g.conditionEnabled=!0,g.conditionOperator=$e.value,B(g)}),Et.addEventListener("change",()=>{const X=String(Et.value||vt);if(g.conditionEnabled=!0,g.conditionDetail=vt,g.conditionOverall=vt,X!==vt){const Me=cl(X);(Me==null?void 0:Me.group)==="detail"?g.conditionDetail=X:(Me==null?void 0:Me.group)==="overall"&&(g.conditionOverall=X)}B(g)}),Ye.addEventListener("change",()=>{g.conditionEnabled=!0,g.conditionValue=Number(Ye.value)||0,g.conditionValueInput=vt,B(g)}),De.addEventListener("change",()=>{g.conditionEnabled=!0;const X=String(De.value||vt);g.conditionValueInput=X!==vt?X:vt,B(g)}),it.addEventListener("click",()=>{var X;g.conditionEnabled=!1,g.conditionOperator="always",g.conditionDetail=vt,g.conditionOverall=vt,g.conditionValue=0,g.conditionValueInput=vt,(X=g.syncConditionUi)==null||X.call(g),B(g,!0)}),T&&T.addEventListener("change",()=>{g.enumValue=T.value,B(g)}),R.type!=="enum"&&zn(g),g.toggle&&(g.toggle.checked=g.enabled),E(g)}for(const g of Au){if(g.section!==F){F=g.section;const R=F;ee="";const q=I("section","cp-rule-section"),ge=I("div","cp-rule-section-header"),Ve=I("button","cp-rule-section-title cp-rule-section-toggle",{type:"button",text:R,"aria-expanded":"true"}),K=I("input","cp-input-toggle cp-rule-section-enable",{type:"checkbox"});K.checked=!0;const he=I("div","cp-rule-section-body");a.set(R,K),o.set(R,q),l.set(R,he),c.set(R,[]),Ve.addEventListener("click",()=>{const j=!(ne.get(R)!==!1);ne.set(R,j),q.classList.toggle("is-collapsed",!j),Ve.setAttribute("aria-expanded",j?"true":"false")}),K.addEventListener("change",()=>{D.set(R,!!K.checked),q.classList.toggle("is-section-disabled",!K.checked);const Se=c.get(R)||[];for(const j of Se)E(j);C()}),ge.append(Ve,K),q.append(ge,he),i.appendChild(q),$=he}g.subgroup!==ee&&(ee=g.subgroup,$.appendChild(I("h4","cp-rule-subgroup-title",{text:ee})));const A=f(g,!1);r.set(d(g.target,g.output),A),Z(A)}const pe=()=>{if(P){P=!1;return}S(Array.isArray(se.ruleBlocks)?se.ruleBlocks:[])};Wt(e,pe,["ruleBlocks"]),pe(),n.appendChild(t)}function P2(n){const e=I("button","cp-menu-button",{type:"button","data-menu-id":n.id,"aria-label":n.label,title:n.label}),t=I("span","cp-menu-icon",{html:S2(n.id)}),i=I("span","cp-menu-label",{text:n.label});return e.append(t,i),e}function N2(n){const e=I("section","cp-menu-pane",{"data-menu-id":n.id}),t=I("div","cp-menu-pane-header");t.appendChild(I("h2","cp-menu-pane-title",{text:n.label}));const i=I("button","cp-btn cp-menu-collapse",{type:"button",text:ce.menu.collapse});Ht(i,Ot.close,ce.menu.collapse),t.appendChild(i);const r=I("div","cp-menu-pane-body");return e.append(t,r),{pane:e,body:r,closeButton:i}}function L2(n){if(!n)return;n.innerHTML="",n.className="",n.classList.add("cp-shell");const e=I("div","cp-shell-root"),t=I("nav","cp-menu-rail"),i=I("div","cp-menu-stack"),r=p2(),s=new Map,a=new Map;for(const E of Tu){const y=P2(E);s.set(E.id,y),t.appendChild(y);const b=N2(E);a.set(E.id,b),i.appendChild(b.pane)}e.append(t,i),n.appendChild(e),w2(a.get("file").body),T2(a.get("view").body,r),A2(a.get("settings").body,r),R2(a.get("rules").body,r);let o=null,l="settings",c=!1,u=!1,d=null;const h=()=>{d!==null&&(window.clearTimeout(d),d=null)},f=()=>{h(),!(o||c||u)&&(d=window.setTimeout(()=>{d=null,!(o||c||u)&&(l=null,_())},100))};function v(){return o||(c||u?l:null)}function _(){const E=v();for(const[y,b]of s.entries()){const N=E===y,P=o===y;b.classList.toggle("is-active",N),b.classList.toggle("is-pinned",P),b.setAttribute("aria-expanded",N?"true":"false")}for(const[y,b]of a.entries()){const N=E===y;b.pane.classList.toggle("is-active",N)}n.classList.toggle("is-open",!!E)}t.addEventListener("mouseenter",()=>{h(),c=!0,_()}),t.addEventListener("mouseleave",()=>{c=!1,f()});for(const E of Tu){const y=s.get(E.id),b=a.get(E.id);y.addEventListener("mouseenter",()=>{h(),l=E.id,_()}),y.addEventListener("click",()=>{o===E.id?(o=null,l=null):(o=E.id,l=E.id),_()}),b.pane.addEventListener("mouseenter",()=>{h(),u=!0,l=E.id,_()}),b.pane.addEventListener("mouseleave",()=>{u=!1,f()}),b.closeButton.addEventListener("click",()=>{o=null,l=null,_()})}const m=()=>{Pu(Nu(r,[],!0))},p=E=>{const y=Nu(r,E,!1);y.length&&Pu(y)};Xl((E,y,b)=>{if(!y){m();return}if(y==="*"){if(b&&typeof b=="object"&&!Array.isArray(b))return;m();return}p([y])}),l="settings",_(),m()}function D2(n,e,t){return Math.min(t,Math.max(e,n))}function qi(n){const e=Number(n);return Number.isFinite(e)?Math.round(D2(e,0,255)):0}function F2(n,e,t,i){const r=qi(n),s=qi(e),a=qi(t),o=qi(i),l=.299*r+.587*s+.114*a;if(l<=1e-9)return[o,o,o];const c=o/l;let u=r*c,d=s*c,h=a*c;const f=Math.max(u,d,h);if(f>255){const v=(255-o)/Math.max(1e-9,f-o);u=o+v*(u-o),d=o+v*(d-o),h=o+v*(h-o)}return[qi(u),qi(d),qi(h)]}const dh=()=>{},Ni=()=>{};function En(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function _t(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?En(e/255):En(e):0}function hh(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,s=parseInt(t.slice(4,6),16)/255;return[En(i),En(r),En(s)]}function I2(n){if(Array.isArray(n))return n.length<3?null:[_t(n[0]),_t(n[1]),_t(n[2])];if(typeof n=="string"){const e=hh(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[_t(t[0]),_t(t[1]),_t(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[_t(n.r),_t(n.g),_t(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[_t(n.h),_t(n.s),_t(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[_t(n.hue),_t(n.saturation),_t(n.brightness)]}return null}function U2(n,e,t){const i=Number(n),s=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,a=En(e),o=En(t),l=Math.floor(s*6),c=s*6-l,u=o*(1-a),d=o*(1-c*a),h=o*(1-(1-c)*a);switch(l%6){case 0:return[o,h,u];case 1:return[d,o,u];case 2:return[u,o,h];case 3:return[u,d,o];case 4:return[h,u,o];default:return[o,u,d]}}function O2(n,e,t){const i=En(n),r=En(e),s=En(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return[c,u,a]}function ma(n){return Array.isArray(n)?n.length<3?null:[_t(n[0]),_t(n[1]),_t(n[2])]:typeof n=="string"?hh(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[_t(n.rgb[0]),_t(n.rgb[1]),_t(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[_t(n.r),_t(n.g),_t(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[_t(n.h),_t(n.s),_t(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[_t(n.hue),_t(n.saturation),_t(n.brightness)]:null}function ph(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function B2(n,e,t){const i=ph(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,a=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return ma(i.colors[a])}function k2(n,e,t){const i=ph(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return ma(i.colors[0]);const s=En(t)*(i.colors.length-1),a=Math.floor(s),o=Math.min(i.colors.length-1,a+1),l=s-a,c=ma(i.colors[a]),u=ma(i.colors[o]);return!c&&!u?null:c?u?[En(c[0]+(u[0]-c[0])*l),En(c[1]+(u[1]-c[1])*l),En(c[2]+(u[2]-c[2])*l)]:c:u}const z2=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[_t(n),_t(e),_t(t)],hsv:(n,e,t)=>[_t(n),_t(e),_t(t)],palette:(n,e,t)=>B2(n,e,t),gradient:(n,e,t)=>k2(n,e,t),matchLuma:(n,e,t,i)=>{const[r,s,a]=F2(n,e,t,i);return[r/255,s/255,a/255]},hsvToRgbColor:(n,e,t)=>U2(n,e,t),rgbToHsvColor:(n,e,t)=>O2(n,e,t),toColorVector:n=>I2(n)});function ka(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function wi(n){for(const e of n||[]){if((e==null?void 0:e.enabled)===!1||(e==null?void 0:e.sectionDisabled)===!0)continue;const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function Du(n,e){for(const t of n||[]){if((t==null?void 0:t.enabled)===!1||(t==null?void 0:t.sectionDisabled)===!0)continue;const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const V2=new Set([">",">=","<","<=","==","!="]);let na={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],physicalParticles:[],lines:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:dh,applyLivingRules:Ni,applyPhysicalRules:Ni,applyLineRules:Ni}};function Fu(n,e){const t=ka(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)e.has(s)&&i.add(s);return[...i]}function yr(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled)||(i==null?void 0:i.sectionDisabled)===!0)continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of Fu(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of Fu(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Zl(n){return JSON.stringify(n)}function fh(n){const e=ka(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Zl(n.value)}function H2(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let s=0;s<n.length;s++){const a=n[s],o=s>0?n[s-1]:"";if(!r&&a==="'"&&o!=="\\"){i=!i;continue}if(!i&&a==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(a==="(")e++;else if(a===")")e=Math.max(0,e-1);else if(a==="[")t++;else if(a==="]")t=Math.max(0,t-1);else if(a===","&&e===0&&t===0)return!0}}return!1}function G2(n){const e=ka(n.expression);return e?H2(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Zl(n.value)}function Iu(n,e){const t=G2(n),[i,r,s]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${s} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${s} = (target.${s} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${s} = (target.${s} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${s} = (target.${s} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${s} = (target.${s} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${s} = clamp((target.${s} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function W2(n){const e=fh(n),t=["const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);","const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (__hasRgb) {","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) __baseRgb = [0, 0, 0];","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function X2(n){if(!n||n.operator==="always")return"true";const e=ka(n.expression);if(e)return`(${e})`;if(!V2.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Zl(n.value??0);return`((${t}) ${n.operator} (${i}))`}function q2(n){const e=n.output;if(e==="rgb")return Iu(n,["red","green","blue"]);if(e==="hsv")return Iu(n,["hue","saturation","brightness"]);if(e==="luma")return W2(n);const t=fh(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Tr(n,e,t,i){const r=[],s=[],a=new Set;r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const o of t)o==="deltaTime"||o==="time"||r.push(`  const ${o} = Number.isFinite(i.${o}) ? i.${o} : 0;`);return e.forEach(o=>{if(!o.enabled||o.sectionDisabled===!0)return;const l=X2(o.condition),c=Array.isArray(o.actions)?o.actions:[],u=[];for(const d of c){const h=String((d==null?void 0:d.output)||"");if(!h)continue;const f=`${l}::${h}`;a.has(f)||(a.add(f),u.push(d))}if(u.length!==0){r.push(`  // rule ${o.id}`),r.push(`  if (${l}) {`),s.push({ruleId:o.id,functionName:n,sourceLine:r.length+1});for(const d of u)r.push(`    ${q2(d)}`);r.push("  }")}}),r.push("}"),{source:r.join(`
`),lineMap:s}}function j2(n,e){return Tr("applySpawnRules",n,e,!1)}function Y2(n,e){return Tr("applyLivingRules",n,e,!0)}function $2(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function Uu(n,e){const t=performance.now(),i=Wd(n,e),s=[...i.ruleBlocks].sort((Q,Z)=>(Q.order??0)-(Z.order??0)),a=s.filter(Q=>Q.target==="spawnedParticles"),o=s.filter(Q=>Q.target==="allParticles"),l=[],c=s.filter(Q=>Q.target==="lines"),u=s.filter(Q=>Q.target==="background"),d=s.filter(Q=>Q.target==="camera"),h=Q=>!Q||Q.enabled===!1||Q.sectionDisabled===!0?!1:Array.isArray(Q.actions)&&Q.actions.length>0,f=a.filter(h).length,v=o.filter(h).length,_=l.filter(h).length,m=c.filter(h).length,p=u.filter(h).length,E=d.filter(h).length,y=$2(s);if(na.hash===y)return na.result;const b=Vv().entries.map(Q=>Q.id),N=new Set(b),P={spawnedParticles:yr(a,N),allParticles:yr(o,N),physicalParticles:yr(l,N),lines:yr(c,N),background:yr(u,N),camera:yr(d,N)},D=[...new Set([...P.spawnedParticles,...P.allParticles,...P.physicalParticles,...P.lines,...P.background,...P.camera])],B=j2(a,b),C=Y2(o,b),S=Tr("applyPhysicalRules",l,b,!0),F=Tr("applyLineRules",c,b,!0),ee=Tr("applyBackgroundRules",u,b,!0),$=Tr("applyCameraRules",d,b,!0),ne=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",B.source,C.source,S.source,F.source,ee.source,$.source,"return { applySpawnRules, applyLivingRules, applyPhysicalRules, applyLineRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const Z=new Function("helpers",ne)(z2),pe={hash:y,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:f,livingRuleCount:v,physicalRuleCount:_,lineRuleCount:m,backgroundRuleCount:p,cameraRuleCount:E,usesParticleHsb:wi([...a,...o]),usesPhysicalHsb:wi(l),usesLineHsb:wi(c),usesBackgroundHsb:wi(u),usesLivingShapeType:Du(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:P,requiredInputs:D,lineMap:[...B.lineMap,...C.lineMap,...S.lineMap,...F.lineMap,...ee.lineMap,...$.lineMap],source:ne,applySpawnRules:typeof Z.applySpawnRules=="function"?Z.applySpawnRules:dh,applyLivingRules:typeof Z.applyLivingRules=="function"?Z.applyLivingRules:Ni,applyPhysicalRules:typeof Z.applyPhysicalRules=="function"?Z.applyPhysicalRules:Ni,applyLineRules:typeof Z.applyLineRules=="function"?Z.applyLineRules:Ni,applyBackgroundRules:typeof Z.applyBackgroundRules=="function"?Z.applyBackgroundRules:Ni,applyCameraRules:typeof Z.applyCameraRules=="function"?Z.applyCameraRules:Ni};return na={hash:y,result:pe},pe}catch(Q){const Z=Number.isFinite(Q==null?void 0:Q.lineNumber)?Number(Q.lineNumber):null;return{...na.result,hash:y,compileStatus:"error",compileError:(Q==null?void 0:Q.message)||String(Q),compileLine:Z,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:f,livingRuleCount:v,physicalRuleCount:_,lineRuleCount:m,backgroundRuleCount:p,cameraRuleCount:E,usesParticleHsb:wi([...a,...o]),usesPhysicalHsb:wi(l),usesLineHsb:wi(c),usesBackgroundHsb:wi(u),usesLivingShapeType:Du(o,"shapeType"),requiredInputsByTarget:P,requiredInputs:D,lineMap:[...B.lineMap,...C.lineMap,...S.lineMap,...F.lineMap,...ee.lineMap,...$.lineMap],source:ne,rejected:i.rejected}}}const Kl=16,vl=2e4,Ou=Math.log2(Kl),Z2=Math.log2(vl),K2=100,J2=5e3;function ia(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Kl))-Ou)/(Z2-Ou)))}function Kt(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return Number.isFinite(s)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?je(s):je((s-i)/(r-i)):0}function Bu(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function je(n){return Math.max(0,Math.min(1,n))}function cs(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function mh(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function Q2(n){const e=mh(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function eb(n){const e=mh(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function as(n,e,t){const i=je(n),r=je(e),s=je(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function ra(n,e,t){const i=cs(n)??0,r=je(e),s=je(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const tb=`
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
`,nb=`
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
`;class ib{constructor(e,t={}){this._scene=e,this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0,this._lineVisibleCount=0,this._physicalVisibleCount=0,this._physicalPaintCount=0;const i=new wn,r=new wn;this._geo=i,this._lineGeo=r,this._allocateBuffers(this._N);const s=new pn({vertexShader:tb,fragmentShader:nb,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:Ri});this._mesh=new mf(i,s),this._mesh.frustumCulled=!1;const a=new Il({vertexColors:!0,transparent:!0,opacity:.9,blending:Ri,depthWrite:!1});this._lineMesh=new Ad(r,a),this._lineMesh.frustumCulled=!1,e.add(this._mesh),e.add(this._lineMesh),this._physicalGeometry=new Ul(.5,16,12),this._physicalMaterial=new gf({color:new rt(1,1,1),side:$n,transparent:!0,opacity:1,roughness:.7,metalness:.1,emissive:new rt(0,0,0),emissiveIntensity:0}),this._physicalMesh=new Oc(this._physicalGeometry,this._physicalMaterial,this._N),this._physicalMesh.count=0,this._physicalMesh.frustumCulled=!1,e.add(this._physicalMesh),this._physicalAmbientLight=new yf(16777215,.45),this._physicalKeyLight=new xf(16777215,.95),this._physicalKeyLight.position.set(.5,.8,1.2),e.add(this._physicalAmbientLight),e.add(this._physicalKeyLight),this._physicalDummy=new Xt,this._tmpInstanceColor=new rt,this._mat=s,this._lineMat=a,this._lastBlending=s.blending,this._background=new rt(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._compiledRules=Uu([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._binRms=new Float32Array(this._N),this._linePos=new Float32Array(this._N*2*3),this._lineCol=new Float32Array(this._N*2*3),this._lineThickness=new Float32Array(this._N),this._lineAlpha=new Float32Array(this._N),this._physicalPos=new Float32Array(this._N*3),this._physicalSize=new Float32Array(this._N),this._physicalCol=new Float32Array(this._N*3),this._physicalOpacity=new Float32Array(this._N),this._physicalRoughness=new Float32Array(this._N),this._physicalMetalness=new Float32Array(this._N),this._physicalLuminosity=new Float32Array(this._N),this._aPos=new Qt(this._pos,3),this._aCol=new Qt(this._col,3),this._aSz=new Qt(this._sz,1),this._aAlpha=new Qt(this._alpha,1),this._aShape=new Qt(this._shape,1),this._aLinePos=new Qt(this._linePos,3),this._aLineCol=new Qt(this._lineCol,3);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape,this._aLinePos,this._aLineCol])t.setUsage(bp);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this._lineGeo.setAttribute("position",this._aLinePos),this._lineGeo.setAttribute("color",this._aLineCol),this._physicalMesh&&(this._scene.remove(this._physicalMesh),this._physicalMesh=new Oc(this._physicalGeometry,this._physicalMaterial,this._N),this._physicalMesh.count=0,this._physicalMesh.frustumCulled=!1,this._scene.add(this._physicalMesh)),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s),binRms:this._binRms.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c],this._binRms[l]=this._binRms[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0,this._binRms[r+l]=a.binRms?a.binRms[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u],this._pan[i-r-o+c]=a.pan?a.pan[u]:0,this._binRms[i-r-o+c]=a.binRms?a.binRms[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._lineVisibleCount=0,this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._lineVisibleCount=0,this._physicalPaintCount=0,this._physicalVisibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._lineGeo.setDrawRange(0,0),this._physicalMesh&&(this._physicalMesh.count=0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let s=0;s<r;s++)i.sz[s]=Math.max(0,i.sz[s]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=Uu(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=Q2(i),s=eb(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number.isFinite(Number(t.deltaTime))&&Number(t.deltaTime)>0?Number(t.deltaTime):1/60,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?je(t.binMagnitude):0,binPhase:Number.isFinite(t.binPhase)?je(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?je(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?je(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?je(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?je(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,canvasWidth:Number(t.canvasWidthPx)||0,canvasHeight:Number(t.canvasHeightPx)||0,audioLengthSec:Number(t.audioLengthSec)||0,frequencyHz:i,notePitchClass:r,octave:s,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount),t=Math.max(0,this._physicalVisibleCount);if(e===0&&t===0)return{empty:!0,min:new V,max:new V,center:new V,size:new V};const i=new V(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),r=new V(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let o=0;o<e;o++){const l=this._pos[o*3],c=this._pos[o*3+1],u=this._pos[o*3+2];l<i.x&&(i.x=l),c<i.y&&(i.y=c),u<i.z&&(i.z=u),l>r.x&&(r.x=l),c>r.y&&(r.y=c),u>r.z&&(r.z=u)}for(let o=0;o<t;o++){const c=Math.max(0,this._physicalSize[o])*.5,u=this._physicalPos[o*3],d=this._physicalPos[o*3+1],h=this._physicalPos[o*3+2];u-c<i.x&&(i.x=u-c),d-c<i.y&&(i.y=d-c),h-c<i.z&&(i.z=h-c),u+c>r.x&&(r.x=u+c),d+c>r.y&&(r.y=d+c),h+c>r.z&&(r.z=h+c)}const s=i.clone().add(r).multiplyScalar(.5),a=r.clone().sub(i);return{empty:!1,min:i,max:r,center:s,size:a}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0,o.binRMSEnergy=Number.isFinite(this._binRms[c])?this._binRms[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];let d=Number.isFinite(u.red)?je(u.red):this._col[c*3],h=Number.isFinite(u.green)?je(u.green):this._col[c*3+1],f=Number.isFinite(u.blue)?je(u.blue):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const v=as(d,h,f),_=cs(u.hue),m=Number.isFinite(u.saturation)?je(u.saturation):v.s,p=Number.isFinite(u.brightness)?je(u.brightness):v.v,E=ra(_??v.h,m,p);d=E.r,h=E.g,f=E.b}this._col[c*3]=d,this._col[c*3+1]=h,this._col[c*3+2]=f,this._alpha[c]=Number.isFinite(u.opacity)?Math.max(0,Math.min(1,u.opacity)):this._alpha[c],this._shape[c]=Bu(u.shapeType),this._binRms[c]=Number.isFinite(o.binRMSEnergy)?je(o.binRMSEnergy):this._binRms[c],l++}return l}applyBackgroundRules(e){const t=this._background,i=as(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?je(r.red):t.r,a=Number.isFinite(r.green)?je(r.green):t.g,o=Number.isFinite(r.blue)?je(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=as(s,a,o),c=cs(r.hue),u=Number.isFinite(r.saturation)?je(r.saturation):l.s,d=Number.isFinite(r.brightness)?je(r.brightness):l.v,h=ra(c??l.h,u,d);s=h.r,a=h.g,o=h.b}t.setRGB(s,a,o)}applyLineRules(e,t){this._compiledRules.applyLineRules(e,t)}applyPhysicalRules(e,t){}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1,targetX:(t==null?void 0:t.targetX)??0,targetY:(t==null?void 0:t.targetY)??0,targetZ:(t==null?void 0:t.targetZ)??0,angleOfView:(t==null?void 0:t.angleOfView)??55};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null,targetX:Number.isFinite(i.targetX)?i.targetX:null,targetY:Number.isFinite(i.targetY)?i.targetY:null,targetZ:Number.isFinite(i.targetZ)?i.targetZ:null,angleOfView:Number.isFinite(i.angleOfView)?i.angleOfView:null}}update(e,t,i,r){var ie,ue,Le,Re,w,O,W,re,be,xe;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((ie=e.ctx)==null?void 0:ie.sampleRate)??44100)/2,d=t.persistMode??0,h=t.inputGain??1,f=t.defaultParticleSize??6,v=Math.max(Kl,Math.min(vl,Number(t.freqNormMin??40))),_=Math.max(v+1,Math.min(vl,Number(t.freqNormMax??12e3))),m=ia(v),p=ia(_),E=Number(t.binMagnitudeNormMin??-70),y=Number(t.binMagnitudeNormMax??0),b=Number(t.binFluxNormMin??0),N=Number(t.binFluxNormMax??.5),P=Number(t.binPhaseDeviationNormMin??0),D=Number(t.binPhaseDeviationNormMax??Math.PI),B=Number(t.binAttackTimeNormMin??5),C=Number(t.binAttackTimeNormMax??500),S=Number(t.globalRmsNormMin??-60),F=Number(t.globalRmsNormMax??0),ee=Number(t.spectralCentroidNormMin??150),$=Number(t.spectralCentroidNormMax??8e3),ne=Number(t.globalSpectralFluxNormMin??0),Q=Number(t.globalSpectralFluxNormMax??100),Z=Number(t.spectralFlatnessNormMin??0),pe=Number(t.spectralFlatnessNormMax??1),g=Number(t.particlesByFrame),A=Number.isFinite(g)?Math.max(K2,Math.min(J2,Math.round(g))):1e3,R=Math.max(1,A),q=Math.pow(_/Math.max(v,1e-6),1/R),ge=Number.isFinite(q)&&q>1?q:1,Ve=t.blendMode??"screen",K=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,he=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,Se=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,j=!!(e.analyserL&&e.analyserR&&e.getBinPan),ye=((ue=e.getBinMagnitude)==null?void 0:ue.call(e))||null,Y=((Le=e.getBinFlux)==null?void 0:Le.call(e))||null,ve=((Re=e.getBinPhaseDeviation)==null?void 0:Re.call(e))||null,He=((w=e.getBinPhase)==null?void 0:w.call(e))||null,Ge=((O=e.getBinEnvelope)==null?void 0:O.call(e))||null,st=((W=e.getBinAttackTime)==null?void 0:W.call(e))||null,L=new Set(((re=this._compiledRules)==null?void 0:re.requiredInputs)||[]),Et=L.has("binMagnitude"),$e=L.has("binPhase"),Ye=L.has("binFlux"),De=L.has("binPhaseDeviation"),it=L.has("binAttackTime"),Ue=L.has("binEnvelope")||L.has("binEnvelopeState"),T=t.ruleEngineEnabled!==!1,x=T&&this._compiledRules.spawnRuleCount>0,H=T&&this._compiledRules.lineRuleCount>0;if(Ve==="alpha"){const te=this._mat;(te.blending!==So||te.blendSrc!==fs||te.blendDst!==ms||te.blendEquation!==pi)&&(te.blending=So,te.blendSrc=fs,te.blendDst=ms,te.blendEquation=pi,te.needsUpdate=!0,this._lastBlending=te.blending),te.depthWrite&&(te.depthWrite=!1,te.needsUpdate=!0)}else{const le={screen:Ri,lighter:Ri,"source-over":Fi,multiply:Fi}[Ve]??Ri;le!==this._lastBlending&&(this._mat.blending=le,this._mat.needsUpdate=!0,this._lastBlending=le);const Je=Ve==="source-over";this._mat.depthWrite!==Je&&(this._mat.depthWrite=Je,this._mat.needsUpdate=!0)}this._lineMat.blending!==this._mat.blending&&(this._lineMat.blending=this._mat.blending,this._lineMat.needsUpdate=!0),this._lineMat.depthWrite&&(this._lineMat.depthWrite=!1,this._lineMat.needsUpdate=!0);const oe=Number(t.cameraCanvasWidthUnits),de=Number(t.cameraCanvasHeightUnits),X=Number.isFinite(oe)&&oe>0?oe:i,Me=Number.isFinite(de)&&de>0?de:r,Ee=(K%360+360)%360;this._background.setHSL(Ee/360,je(he/100),je(Se/100));const Ae=Me/2,Ze=((be=e.audioEl)==null?void 0:be.currentTime)??0,me=((xe=e.audioEl)==null?void 0:xe.duration)??0,fe={binMagnitude:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:Kt(e.rmsDbfs,S,F),binRMSEnergy:Kt(e.rmsDbfs,S,F),spectralCentroid:Kt(e.spectralCentroidHz,ee,$),spectralFlux:Kt(e.spectralFluxAU,ne,Q),spectralFlatness:Kt(e.spectralFlatnessRatio,Z,pe),inharmonicity:je(e.inharmonicity),peakAmplitude:je(e.peakAmplitude),zeroCrossingRate:je(e.zeroCrossingRate),spectralRolloff:je(e.spectralRolloff),spectralSpread:je(e.spectralSpread),spectralSkewness:je(e.spectralSkewness),chromagram:je(e.chromagram)};if(fe.amplitude=fe.globalRmsEnergy,Et&&ye&&ye.length>0){let te=0;for(let le=0;le<ye.length;le++)te+=Kt(ye[le],E,y);fe.binMagnitude=te/ye.length}if(Ye&&Y&&Y.length>0){let te=0;for(let le=0;le<Y.length;le++)te+=Kt(Y[le],b,N);fe.binFlux=te/Y.length}if(De&&ve&&ve.length>0){let te=0;for(let le=0;le<ve.length;le++)te+=Kt(ve[le],P,D);fe.binPhaseDeviation=te/ve.length}if(it&&st&&st.length>0){let te=0;for(let le=0;le<st.length;le++)te+=Kt(st[le],B,C);fe.binAttackTime=te/st.length}if(Ue&&Ge&&Ge.length>0){let te=0;for(let le=0;le<Ge.length;le++)te+=Ge[le];fe.binEnvelope=te/Ge.length,fe.binEnvelopeState=fe.binEnvelope}if($e&&He&&He.length>0){let te=0;for(let le=0;le<He.length;le++)te+=Kt(He[le],-Math.PI,Math.PI);fe.binPhase=te/He.length}let Ne=d===1&&x?this._paintCount:0,qe=d===1&&H?this._lineVisibleCount:0,Oe=0;const tt=(te,le=1)=>{if(!x)return;if(Ne>=this._N&&d===1){const Fe=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),ke=this._archiveAndCompactOldest(Fe,Ne,t,Ze);Ne=Math.max(0,Ne-ke)}if(Ne>=this._N)return;const Je=te.hz,ae=ia(Je),ze=Kt(ae,m,p),Ce=Number.isFinite(te.binPan)?te.binPan:e.pan??0;Number.isFinite(te.byte)&&te.byte;const Xe=Number.isFinite(te.energy)?te.energy:0,ht=Number.isFinite(te.binMagnitude)?te.binMagnitude:void 0,gt=Number.isFinite(te.binPhase)?te.binPhase:void 0,lt=Number.isFinite(te.binFlux)?te.binFlux:void 0,pt=Number.isFinite(te.binPhaseDeviation)?te.binPhaseDeviation:void 0,Lt=Number.isFinite(te.binAttackTime)?te.binAttackTime:void 0,It=Number.isFinite(te.binEnvelope)?te.binEnvelope:void 0,Yt=Number.isFinite(te.binRMSEnergy)?te.binRMSEnergy:void 0,tn=(ze*2-1)*Ae,$t=0,M=0,k=je(Xe),U={x:$t,y:tn,z:M,size:Math.max(1,f*(.5+Xe*1.5)),red:k,green:k,blue:k,opacity:Math.min(1,(.08+Xe*1.9)*le),particleCount:1,shapeType:"square"};x&&this.applySpawnRulesToParticle({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:Je,normFreq:ze,pan:Ce,spectralCentroid:fe.spectralCentroid,spectralFlux:fe.spectralFlux,spectralFlatness:fe.spectralFlatness,inharmonicity:fe.inharmonicity,peakAmplitude:fe.peakAmplitude,zeroCrossingRate:fe.zeroCrossingRate,spectralRolloff:fe.spectralRolloff,spectralSpread:fe.spectralSpread,spectralSkewness:fe.spectralSkewness,chromagram:fe.chromagram,binMagnitude:ht,binPhase:gt,binFlux:lt,binPhaseDeviation:pt,binAttackTime:Lt,binEnvelope:It,binEnvelopeState:It,binRMSEnergy:Yt,globalRmsEnergy:fe.globalRmsEnergy,amplitude:fe.amplitude,time:Ze,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:X,canvasHeightUnits:Me,audioLengthSec:me}),particle:U});const J=Number.isFinite(U.particleCount)?je(U.particleCount):1;if(J<=0||J<1&&Math.random()>J)return;this._pos[Ne*3]=Number.isFinite(U.x)?U.x:$t,this._pos[Ne*3+1]=Number.isFinite(U.y)?U.y:tn,this._pos[Ne*3+2]=Number.isFinite(U.z)?U.z:M,this._sz[Ne]=Number.isFinite(U.size)?Math.max(0,U.size):Math.max(2,f);let G=Number.isFinite(U.red)?je(U.red):k,_e=Number.isFinite(U.green)?je(U.green):k,Te=Number.isFinite(U.blue)?je(U.blue):k;if(this._compiledRules.usesParticleHsb){const Fe=as(G,_e,Te),ke=cs(U.hue),Qe=Number.isFinite(U.saturation)?je(U.saturation):Fe.s,et=Number.isFinite(U.brightness)?je(U.brightness):Fe.v,We=ra(ke??Fe.h,Qe,et);G=We.r,_e=We.g,Te=We.b}this._col[Ne*3]=G,this._col[Ne*3+1]=_e,this._col[Ne*3+2]=Te,this._alpha[Ne]=Number.isFinite(U.opacity)?Math.max(0,Math.min(1,U.opacity)):Math.min(1,(.08+Xe*1.9)*le),this._shape[Ne]=Bu(U.shapeType),this._pan[Ne]=Number.isFinite(Ce)?Math.max(-1,Math.min(1,Ce)):0,this._binRms[Ne]=Number.isFinite(Yt)?je(Yt):0,Ne++},nt=(te,le=1)=>{if(!H||qe>=this._N)return;const Je=te.hz,ae=ia(Je),ze=Kt(ae,m,p),Ce=Number.isFinite(te.binPan)?te.binPan:e.pan??0,Xe=Number.isFinite(te.energy)?te.energy:0,ht=Number.isFinite(te.binMagnitude)?te.binMagnitude:void 0,gt=Number.isFinite(te.binPhase)?te.binPhase:void 0,lt=Number.isFinite(te.binFlux)?te.binFlux:void 0,pt=Number.isFinite(te.binPhaseDeviation)?te.binPhaseDeviation:void 0,Lt=Number.isFinite(te.binAttackTime)?te.binAttackTime:void 0,It=Number.isFinite(te.binEnvelope)?te.binEnvelope:void 0,Yt=Number.isFinite(te.binRMSEnergy)?te.binRMSEnergy:void 0,tn=(ze*2-1)*Ae,$t=0,M=0,k=je(Xe),U={x:$t,y:tn,z:M,length:Math.max(1,Ae*.12*Xe),direction:"y",thickness:1,lineCount:1,red:k,green:k,blue:k,opacity:Math.min(1,(.08+Xe*1.4)*le)};H&&this.applyLineRules({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:Je,normFreq:ze,pan:Ce,spectralCentroid:fe.spectralCentroid,spectralFlux:fe.spectralFlux,spectralFlatness:fe.spectralFlatness,inharmonicity:fe.inharmonicity,peakAmplitude:fe.peakAmplitude,zeroCrossingRate:fe.zeroCrossingRate,spectralRolloff:fe.spectralRolloff,spectralSpread:fe.spectralSpread,spectralSkewness:fe.spectralSkewness,chromagram:fe.chromagram,binMagnitude:ht,binPhase:gt,binFlux:lt,binPhaseDeviation:pt,binAttackTime:Lt,binEnvelope:It,binEnvelopeState:It,binRMSEnergy:Yt,globalRmsEnergy:fe.globalRmsEnergy,amplitude:fe.amplitude,time:Ze,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:X,canvasHeightUnits:Me,audioLengthSec:me})},U);const J=Number.isFinite(U.lineCount)?je(U.lineCount):1;if(J<=0||J<1&&Math.random()>J)return;let G=Number.isFinite(U.red)?je(U.red):k,_e=Number.isFinite(U.green)?je(U.green):k,Te=Number.isFinite(U.blue)?je(U.blue):k;if(this._compiledRules.usesLineHsb){const on=as(G,_e,Te),Mn=cs(U.hue),nn=Number.isFinite(U.saturation)?je(U.saturation):on.s,ln=Number.isFinite(U.brightness)?je(U.brightness):on.v,Bi=ra(Mn??on.h,nn,ln);G=Bi.r,_e=Bi.g,Te=Bi.b}const Fe=Number.isFinite(U.opacity)?Math.max(0,Math.min(1,U.opacity)):.4,ke=G*Fe,Qe=_e*Fe,et=Te*Fe,We=Number.isFinite(U.x)?U.x:$t,dt=Number.isFinite(U.y)?U.y:tn,xt=Number.isFinite(U.z)?U.z:M,wt=(Number.isFinite(U.length)?Math.max(0,U.length):Math.max(1,Ae*.12*Xe))*.5,ft=typeof U.direction=="string"?U.direction.trim().toLowerCase():"",Ke=ft==="x"||ft==="y"||ft==="z"?ft:"y";let zt=We,Mt=dt,yn=xt,ri=We,an=dt,_i=xt;Ke==="x"?(zt=We-wt,ri=We+wt):Ke==="z"?(yn=xt-wt,_i=xt+wt):(Mt=dt-wt,an=dt+wt);const mt=qe*6;this._linePos[mt]=zt,this._linePos[mt+1]=Mt,this._linePos[mt+2]=yn,this._linePos[mt+3]=ri,this._linePos[mt+4]=an,this._linePos[mt+5]=_i,this._lineCol[mt]=ke,this._lineCol[mt+1]=Qe,this._lineCol[mt+2]=et,this._lineCol[mt+3]=ke,this._lineCol[mt+4]=Qe,this._lineCol[mt+5]=et,this._lineThickness[qe]=Number.isFinite(U.thickness)?Math.max(0,U.thickness):1,this._lineAlpha[qe]=Fe,qe++},yt=o.length/Math.max(1e-6,u),z=te=>{const le=Math.floor(te*yt);return Math.max(0,Math.min(l-1,le))};let we=v;for(let te=0;te<R;te++){const le=te===R-1?_:Math.min(_,we*ge),Je=Math.sqrt(Math.max(v,we)*Math.max(v,le)),ae=z(we),ze=z(le);if(ze<ae){we=le;continue}let Ce=0,Xe=0,ht=0,gt=0,lt=0,pt=0,Lt=0,It=0,Yt=0,tn=0,$t=0;for(let U=ae;U<=ze;U++){const J=o[U],G=ye&&U<ye.length?Kt(ye[U],E,y):J/255;ht+=G,Et&&(pt+=G),$e&&He&&U<He.length&&(Lt+=Kt(He[U],-Math.PI,Math.PI)),Ye&&Y&&U<Y.length&&(It+=Kt(Y[U],b,N)),De&&ve&&U<ve.length&&(Yt+=Kt(ve[U],P,D)),it&&st&&U<st.length&&(tn+=Kt(st[U],B,C)),Ue&&Ge&&U<Ge.length&&($t+=Kt(Ge[U]/3,0,1));const _e=j?e.getBinPan(U):e.pan??0,Te=Math.max(1,J);gt+=_e*Te,lt+=Te,J>Xe&&(Xe=J),Ce++}if(Ce<=0||Xe<=1)continue;const M=ht/Ce,k=M*h;if(tt({hz:Je,byte:Xe,energy:k,binPan:lt>0?gt/lt:0,binRMSEnergy:je(M),binMagnitude:Et?pt/Ce:void 0,binPhase:$e?Lt/Ce:void 0,binFlux:Ye?It/Ce:void 0,binPhaseDeviation:De?Yt/Ce:void 0,binAttackTime:it?tn/Ce:void 0,binEnvelope:Ue?$t/Ce:void 0}),nt({hz:Je,energy:k,binPan:lt>0?gt/lt:0,binRMSEnergy:je(M),binMagnitude:Et?pt/Ce:void 0,binPhase:$e?Lt/Ce:void 0,binFlux:Ye?It/Ce:void 0,binPhaseDeviation:De?Yt/Ce:void 0,binAttackTime:it?tn/Ce:void 0,binEnvelope:Ue?$t/Ce:void 0}),we=le,Ne>=this._N)break}if(d===1?(this._paintCount=Ne,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._lineVisibleCount=qe,this._lineGeo.setDrawRange(0,this._lineVisibleCount*2),this._physicalPaintCount=Oe,this._physicalVisibleCount=this._physicalPaintCount,this._pruneArchive(t,Ze)):(this._paintCount=0,this._visibleCount=Ne,this._geo.setDrawRange(0,Ne),this._lineVisibleCount=qe,this._lineGeo.setDrawRange(0,qe*2),this._physicalPaintCount=0,this._physicalVisibleCount=Oe),this._physicalMesh){const te=Math.max(0,Math.min(this._N,this._physicalVisibleCount));let le=0,Je=0,ae=0,ze=0;for(let Ce=0;Ce<te;Ce++){const Xe=this._physicalPos[Ce*3],ht=this._physicalPos[Ce*3+1],gt=this._physicalPos[Ce*3+2],lt=Math.max(0,this._physicalSize[Ce]);this._physicalDummy.position.set(Xe,ht,gt),this._physicalDummy.scale.set(lt,lt,lt),this._physicalDummy.rotation.set(0,0,0),this._physicalDummy.updateMatrix(),this._physicalMesh.setMatrixAt(Ce,this._physicalDummy.matrix);const pt=je(this._physicalCol[Ce*3]),Lt=je(this._physicalCol[Ce*3+1]),It=je(this._physicalCol[Ce*3+2]);this._tmpInstanceColor.setRGB(pt,Lt,It),this._physicalMesh.setColorAt(Ce,this._tmpInstanceColor),le+=this._physicalRoughness[Ce],Je+=this._physicalMetalness[Ce],ae+=this._physicalLuminosity[Ce],ze+=this._physicalOpacity[Ce]}if(this._physicalMesh.count=te,this._physicalMesh.instanceMatrix.needsUpdate=!0,this._physicalMesh.instanceColor&&(this._physicalMesh.instanceColor.needsUpdate=!0),te>0){const Ce=1/te;this._physicalMaterial.roughness=je(le*Ce),this._physicalMaterial.metalness=je(Je*Ce),this._physicalMaterial.opacity=je(ze*Ce),this._physicalMaterial.transparent=this._physicalMaterial.opacity<.999;const Xe=Math.max(0,ae*Ce);this._physicalMaterial.emissiveIntensity=Xe,this._physicalMaterial.emissive.setScalar(Math.min(1,Xe))}this._physicalMaterial.needsUpdate=!0}t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...fe,time:Ze,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:X,canvasHeightUnits:Me,audioLengthSec:me})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...fe,time:Ze,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:X,canvasHeightUnits:Me,audioLengthSec:me})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...fe,time:Ze,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:X,canvasHeightUnits:Me,audioLengthSec:me})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0,this._lineMat.blending=e,this._lineMat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}getLineVisibleCount(){return this._lineVisibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;for(let i=0;i<this._N;i++){const r=i*6;this._linePos[r]*=e,this._linePos[r+1]*=t,this._linePos[r+3]*=e,this._linePos[r+4]*=t}this._aPos.needsUpdate=!0,this._aLinePos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose(),this._lineMesh.geometry.dispose(),this._lineMat.dispose()}}function rb(){return window.AudioContext||window.webkitAudioContext}async function sb(n){if(!n)throw new Error("No file provided for decoding.");const e=rb();if(!e)throw new Error("Web Audio API is not supported in this browser.");const t=new e;try{const i=await n.arrayBuffer(),r=await t.decodeAudioData(i.slice(0));if(!r||!Number.isFinite(r.duration)||r.duration<=0)throw new Error("Audio decode produced no playable data.");return n}finally{try{await t.close()}catch{}}}const ku=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#1C274C"/>\r
</svg>`,zu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"/>\r
</svg>`,ab=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#1C274C"/>\r
<path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#1C274C"/>\r
</svg>`,Vu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/>\r
</svg>`,ob=`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
\r<g id="SVGRepo_bgCarrier" stroke-width="0"/>
\r<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
\r<g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316V8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632Z" fill="#1C274C"/> <path d="M11 7.12303L11 8.76844V15.2316V16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0786 13.8532C22.3071 13.0455 22.3071 10.9545 21.0786 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z" fill="#1C274C"/> </g>
\r</svg>`,lb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316V8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632Z" fill="#1C274C"/>\r
<path d="M11 7.12303L11 8.76844V15.2316V16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0786 13.8532C22.3071 13.0455 22.3071 10.9545 21.0786 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z" fill="#1C274C"/>\r
</svg>`,Hu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M2 11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C17 6.56878 17 8.21252 17 11.5V12.5C17 15.7875 17 17.4312 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5V11.5Z" fill="#1C274C"/>\r
<path d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z" fill="#1C274C"/>\r
</svg>`,cb=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M9.60733 1.51737C10.3774 1.34229 11.1783 1.25 11.9998 1.25C17.9369 1.25 22.7498 6.06294 22.7498 12C22.7498 17.9371 17.9369 22.75 11.9998 22.75C11.1783 22.75 10.3774 22.6577 9.60733 22.4826C9.20343 22.3908 8.95044 21.9889 9.04226 21.585C9.13409 21.1811 9.53596 20.9281 9.93987 21.02C10.6016 21.1704 11.291 21.25 11.9998 21.25C17.1085 21.25 21.2498 17.1086 21.2498 12C21.2498 6.89137 17.1085 2.75 11.9998 2.75C11.291 2.75 10.6016 2.8296 9.93987 2.98004C9.53596 3.07187 9.13409 2.81888 9.04226 2.41497C8.95044 2.01106 9.20343 1.60919 9.60733 1.51737Z" fill="#1C274C"/>\r
<g opacity="0.5">\r
<path d="M7.31347 3.13173C7.53417 3.48225 7.42894 3.94531 7.07842 4.16602C5.90324 4.90597 4.90597 5.90324 4.16602 7.07842C3.94531 7.42894 3.48225 7.53417 3.13173 7.31347C2.78121 7.09277 2.67598 6.6297 2.89668 6.27918C3.7562 4.91411 4.91411 3.7562 6.27918 2.89668C6.6297 2.67598 7.09277 2.78121 7.31347 3.13173Z" fill="#1C274C"/>\r
<path d="M3.13173 16.686C3.48225 16.4653 3.94531 16.5706 4.16602 16.9211C4.90598 18.0963 5.90324 19.0935 7.07842 19.8335C7.42894 20.0542 7.53417 20.5172 7.31347 20.8678C7.09277 21.2183 6.6297 21.3235 6.27918 21.1028C4.91411 20.2433 3.7562 19.0854 2.89668 17.7203C2.67598 17.3698 2.78121 16.9067 3.13173 16.686Z" fill="#1C274C"/>\r
</g>\r
<path opacity="0.3" d="M2.98004 9.93987C3.07187 9.53596 2.81888 9.13409 2.41497 9.04226C2.01106 8.95044 1.60919 9.20343 1.51737 9.60733C1.34229 10.3774 1.25 11.1783 1.25 11.9998C1.25 12.8213 1.34229 13.6222 1.51737 14.3923C1.60919 14.7962 2.01106 15.0492 2.41497 14.9574C2.81888 14.8656 3.07187 14.4637 2.98004 14.0598C2.8296 13.398 2.75 12.7087 2.75 11.9998C2.75 11.291 2.8296 10.6016 2.98004 9.93987Z" fill="#1C274C"/>\r
<path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" fill="#1C274C"/>\r
</svg>`,ub=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.7803 3.53033C22.0732 3.23744 22.0732 2.76256 21.7803 2.46967C21.4874 2.17678 21.0126 2.17678 20.7197 2.46967L16.2705 6.91886C16.2246 6.39532 16.1646 5.93197 16.077 5.52977C15.9052 4.74135 15.6003 4.05581 14.9609 3.60646C14.7259 3.44128 14.4642 3.30809 14.1923 3.21531C13.3741 2.9361 12.5608 3.15928 11.7348 3.56055C10.9212 3.95576 9.93412 4.60663 8.70324 5.41822L8.43647 5.59411C7.98856 5.88944 7.83448 5.98815 7.67513 6.05848C7.50452 6.13378 7.3252 6.18757 7.14132 6.21862C6.96956 6.24762 6.7866 6.25003 6.25008 6.25003L6.08906 6.24998C4.87215 6.24933 4.02659 6.24889 3.27496 6.59664C2.58016 6.9181 1.91141 7.54732 1.54828 8.22128C1.15566 8.94996 1.10959 9.712 1.04409 10.7955L1.03618 10.926C1.01373 11.2943 1 11.6585 1 12C1 12.3416 1.01373 12.7058 1.03618 13.0741L1.04409 13.2045C1.10959 14.2881 1.15566 15.0501 1.54828 15.7788C1.91141 16.4527 2.58016 17.082 3.27496 17.4034C3.88551 17.6859 4.55803 17.7386 5.44121 17.7481L2.71967 20.4697C2.42678 20.7626 2.42678 21.2374 2.71967 21.5303C3.01256 21.8232 3.48744 21.8232 3.78033 21.5303L21.7803 3.53033Z" fill="#1C274C"/>\r
<g opacity="0.4">\r
<path d="M16.2382 9.07225L7.61424 17.6963C8.00956 18.1712 9.02592 18.8138 9.33873 19.0002C10.3775 19.6809 11.2373 20.2249 11.9702 20.5491C12.7125 20.8775 13.4501 21.0381 14.1921 20.7849C14.464 20.6921 14.7257 20.5589 14.9607 20.3937C15.6668 19.8975 15.9657 19.1135 16.1276 18.2141C16.2868 17.3297 16.3412 16.1578 16.409 14.6979L16.4117 14.6404C16.4635 13.5254 16.4998 12.5522 16.4998 12.0002C16.4998 11.9729 16.5 11.9363 16.5002 11.8916C16.503 11.3245 16.5122 9.46272 16.2382 9.07225Z" fill="#1C274C"/>\r
<path d="M20.5143 6.31657C20.8918 6.14622 21.336 6.3142 21.5063 6.69176C21.9734 7.7269 22.4998 9.45974 22.4998 12.0002C22.4998 14.1917 22.108 15.783 21.6998 16.8444C21.496 17.3742 21.2892 17.7693 21.1273 18.0392C21.0464 18.174 20.9768 18.2774 20.9246 18.3505C20.8984 18.3871 20.8767 18.4161 20.86 18.4377C20.8516 18.4485 20.8446 18.4574 20.8389 18.4645L20.8314 18.4738L20.8284 18.4774L20.8271 18.4789C20.8271 18.4789 20.826 18.4803 20.2512 18.0013L20.826 18.4803C20.5608 18.7985 20.0879 18.8415 19.7697 18.5763C19.453 18.3124 19.4089 17.8428 19.6698 17.5246L19.6733 17.5202L19.6834 17.5068C19.6888 17.4996 19.6957 17.4902 19.704 17.4787C19.7337 17.437 19.7813 17.3669 19.8411 17.2674C19.9604 17.0685 20.1286 16.7512 20.2998 16.3059C20.6416 15.4173 20.9998 14.0086 20.9998 12.0002C20.9998 9.67383 20.5192 8.15116 20.1391 7.30865C19.9687 6.93109 20.1367 6.48692 20.5143 6.31657Z" fill="#1C274C"/>\r
<path d="M19.3006 9.84771C19.2164 9.44214 18.8194 9.18162 18.4138 9.26583C18.0082 9.35003 17.7477 9.74706 17.8319 10.1526C17.9204 10.5789 17.9998 11.1874 17.9998 12.0002C17.9998 12.99 17.882 13.6773 17.7733 14.1014C17.7189 14.3137 17.6665 14.461 17.6316 14.5482C17.6141 14.5918 17.601 14.6205 17.5941 14.6349L17.5891 14.6452C17.3953 15.0058 17.5266 15.4563 17.8856 15.6558C18.2477 15.8569 18.7043 15.7265 18.9054 15.3644L18.2509 15.0008C18.9054 15.3644 18.9061 15.3631 18.9061 15.3631L18.9069 15.3617L18.9086 15.3586L18.9124 15.3515L18.9221 15.3332C18.9293 15.3191 18.9382 15.3014 18.9484 15.2798C18.9689 15.2368 18.9949 15.1788 19.0243 15.1053C19.0831 14.9581 19.1557 14.7492 19.2263 14.4739C19.3676 13.923 19.4998 13.1103 19.4998 12.0002C19.4998 11.0891 19.4107 10.3782 19.3006 9.84771Z" fill="#1C274C"/>\r
</g>\r
</svg>`,Gu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2.00299 11.7155C2.04033 9.87326 2.059 8.95215 2.67093 8.16363C2.78262 8.0197 2.9465 7.8487 3.08385 7.73274C3.83639 7.09741 4.82995 7.09741 6.81706 7.09741C7.527 7.09741 7.88197 7.09741 8.22035 7.00452C8.29067 6.98522 8.36024 6.96296 8.4289 6.93781C8.75936 6.81674 9.05574 6.60837 9.64851 6.19161C11.9872 4.54738 13.1565 3.72527 14.138 4.08241C14.3261 4.15088 14.5083 4.24972 14.671 4.37162C15.5194 5.00744 15.5839 6.48675 15.7128 9.44537C15.7606 10.5409 15.7931 11.4785 15.7931 12C15.7931 12.5215 15.7606 13.4591 15.7128 14.5546C15.5839 17.5132 15.5194 18.9926 14.671 19.6284C14.5083 19.7503 14.3261 19.8491 14.138 19.9176C13.1565 20.2747 11.9872 19.4526 9.64851 17.8084C9.05574 17.3916 8.75936 17.1833 8.4289 17.0622C8.36024 17.037 8.29067 17.0148 8.22035 16.9955C7.88197 16.9026 7.52701 16.9026 6.81706 16.9026C4.82995 16.9026 3.83639 16.9026 3.08385 16.2673C2.9465 16.1513 2.78262 15.9803 2.67093 15.8364C2.059 15.0478 2.04033 14.1267 2.00299 12.2845C2.00103 12.1878 2 12.0928 2 12C2 11.9072 2.00103 11.8122 2.00299 11.7155Z" fill="#1C274C"/>\r
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M19.4894 5.5523C19.782 5.29229 20.2169 5.33445 20.4607 5.64646L19.9309 6.11724C20.4607 5.64646 20.4607 5.64646 20.4607 5.64646L20.4617 5.64781L20.4629 5.64933L20.4656 5.65286L20.4726 5.66195C20.4778 5.66891 20.4843 5.67767 20.492 5.68825C20.5073 5.7094 20.5273 5.73783 20.5513 5.77369C20.5994 5.8454 20.6634 5.94678 20.7378 6.07901C20.8866 6.34356 21.0769 6.73103 21.2642 7.25049C21.6396 8.29118 21.9998 9.85148 21.9998 12.0003C21.9998 14.1492 21.6396 15.7095 21.2642 16.7502C21.0769 17.2697 20.8866 17.6571 20.7378 17.9217C20.6634 18.0539 20.5994 18.1553 20.5513 18.227C20.5273 18.2629 20.5073 18.2913 20.492 18.3124C20.4843 18.323 20.4778 18.3318 20.4726 18.3387L20.4656 18.3478L20.4629 18.3514L20.4617 18.3529C20.4617 18.3529 20.4607 18.3542 19.9309 17.8834L20.4607 18.3542C20.2169 18.6662 19.782 18.7084 19.4894 18.4484C19.1982 18.1896 19.1576 17.7291 19.3976 17.4172C19.3976 17.4172 19.3992 17.4149 19.4008 17.4128C19.4056 17.4061 19.4153 17.3926 19.429 17.3721C19.4563 17.3312 19.5001 17.2626 19.555 17.165C19.6648 16.9699 19.8194 16.6588 19.9769 16.2222C20.2911 15.3509 20.6205 13.9696 20.6205 12.0003C20.6205 10.031 20.2911 8.64979 19.9769 7.77847C19.8194 7.34192 19.6648 7.03077 19.555 6.83571C19.5001 6.73813 19.4563 6.66945 19.429 6.62856C19.4153 6.60811 19.4056 6.5946 19.4008 6.58789C19.3992 6.58572 19.3976 6.58351 19.3976 6.58351" fill="#1C274C"/>\r
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M17.7572 8.41592C18.0902 8.21868 18.51 8.34659 18.695 8.70163L18.0921 9.05876C18.695 8.70163 18.695 8.70163 18.695 8.70163L18.6957 8.70291L18.6964 8.70428L18.6979 8.70727L18.7014 8.71425L18.7103 8.73224C18.717 8.74604 18.7251 8.76345 18.7345 8.78454C18.7534 8.82672 18.7772 8.88359 18.8043 8.95571C18.8584 9.1 18.9252 9.30487 18.9901 9.57473C19.12 10.1149 19.2415 10.9118 19.2415 12.0003C19.2415 13.0888 19.12 13.8857 18.9901 14.4259C18.9252 14.6958 18.8584 14.9006 18.8043 15.0449C18.7772 15.117 18.7534 15.1739 18.7345 15.2161C18.7251 15.2372 18.717 15.2546 18.7103 15.2684L18.7014 15.2864L18.6979 15.2934L18.6964 15.2963L18.6957 15.2977C18.6957 15.2977 18.695 15.299 18.0921 14.9419L18.695 15.299C18.51 15.654 18.0902 15.782 17.7572 15.5847C17.4271 15.3891 17.3063 14.9474 17.4846 14.5938L17.4892 14.5838C17.4955 14.5696 17.5076 14.5415 17.5236 14.4987C17.5557 14.4132 17.6039 14.2687 17.654 14.0606C17.754 13.6448 17.8622 12.9709 17.8622 12.0003C17.8622 11.0297 17.754 10.3558 17.654 9.94003C17.6039 9.73189 17.5557 9.58745 17.5236 9.50194C17.5076 9.45915 17.4955 9.43099 17.4892 9.41687L17.4846 9.40684C17.3063 9.05328 17.4271 8.61149 17.7572 8.41592Z" fill="#1C274C"/>\r
</svg>`;function Mr(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Rt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function Rn(n,e,t){!n||!e||(n.innerHTML="",n.append(Rt("span","audio-player__icon",{html:e})),t&&n.setAttribute("aria-label",t))}function db(n){if(!n){console.warn("[AudioPlayer] No container element.");const Y=new Audio;return Y.crossOrigin="anonymous",{audioEl:Y,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Rt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=document.getElementById("app");function a(Y){r.classList.toggle("audio-player__collapse-btn--icon",Y),Y?(Rn(r,ku,"Expand player"),r.title="Expand player"):(r.textContent="«",r.setAttribute("aria-label","Collapse audio player"),r.title="Collapse player"),s&&s.classList.toggle("audio-player-collapsed",Y)}a(!1);const o=Rt("div","audio-player__body"),l=Rt("div","audio-player__file-row"),c=Rt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});c.style.display="none";const u=Rt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});Rn(u,ku,"Open audio file");const d=Rt("span","audio-player__file-name",{text:"No file loaded"});l.append(c,u);const h=Rt("div","audio-player__transport"),f=Rt("button","audio-player__btn audio-player__btn--play cp-btn cp-btn-icon",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});Rn(f,zu,"Play");const v=Rt("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});Rn(v,Vu,"Stop");const _=Rt("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});Rn(_,ob,"−10 seconds");const m=Rt("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});Rn(m,lb,"+10 seconds");const p=Rt("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-mute","aria-label":"Mute output",disabled:"true",title:"Mute output"});Rn(p,Gu,"Mute output");const E=Rt("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});Rn(E,rh,"Save PNG");const y=Rt("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-record","aria-label":"Record video",disabled:"true",title:"Record canvas and audio"});Rn(y,Hu,"Record video");const b=.25,N=4,P=.05,D=[1,1.5,2,3],B=Rt("div","audio-player__speed-wrap"),C=Rt("button","audio-player__btn cp-btn cp-btn-icon audio-player__speed-btn",{id:"btn-speed","aria-label":"Playback speed",title:"Playback speed",disabled:"true",type:"button"});Rn(C,cb,"Playback speed");const S=Rt("div","audio-player__speed-popover",{role:"dialog","aria-label":"Playback speed controls"});S.hidden=!0;const F=Rt("input","audio-player__speed-slider cp-input-range",{type:"range",min:String(b),max:String(N),step:String(P),value:"1","aria-label":"Playback speed multiplier"}),ee=Rt("div","audio-player__speed-value",{text:"1.00x"}),$=Rt("div","audio-player__speed-presets"),ne=D.map(Y=>{const ve=Rt("button","cp-btn audio-player__speed-preset",{type:"button",text:`${Y.toFixed(1)}x`});return $.appendChild(ve),{value:Y,btn:ve}});S.append(F,ee,$),B.append(C,S),h.append(_,f,v,m,p,E,y,B);const Q=Rt("div","audio-player__progress-row"),Z=Rt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function pe(Y){Z.style.background=`linear-gradient(90deg, var(--color-accent) ${Y}%, var(--color-border) ${Y}%)`}pe(0);const g=Rt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),A=Rt("div","audio-player__progress-meta");A.append(d,g),Q.append(Z,A),o.append(l,h,Q),n.append(r,o);function R(Y){Rn(f,Y?ab:zu,Y?"Pause":"Play")}function q(Y){Rn(y,Y?Vu:Hu,Y?"Stop recording":"Record video")}function ge(Y){Rn(p,Y?ub:Gu,Y?"Unmute output":"Mute output"),p.classList.toggle("audio-player__btn--active",!!Y),p.title=Y?"Unmute output":"Mute output"}function Ve(Y,ve=""){c.disabled=Y,f.disabled=Y||!e.src,v.disabled=Y||!e.src,_.disabled=Y||!e.src,m.disabled=Y||!e.src,p.disabled=Y||!e.src,y.disabled=Y||!e.src,C.disabled=Y||!e.src,F.disabled=Y||!e.src;for(const He of ne)He.btn.disabled=Y||!e.src;(Y||!e.src)&&(S.hidden=!0),Y&&ve&&(d.textContent=ve)}function K(Y){const ve=Math.max(b,Math.min(N,Number(Y)));if(!Number.isFinite(ve))return;e.playbackRate=ve;const He=Number(ve.toFixed(2));F.value=String(He),ee.textContent=`${He.toFixed(2)}x`;for(const Ge of ne)Ge.btn.classList.toggle("is-active",Math.abs(He-Ge.value)<.001);n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:ve},bubbles:!0}))}function he(Y,ve=(Y==null?void 0:Y.name)||"Audio loaded"){Y&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(Y),e.load(),d.textContent=ve,t=!1,R(!1),f.classList.remove("audio-player__btn--active"),Z.value="0",pe(0),g.textContent="0:00 / –:––",Se(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:Y,audioEl:e},bubbles:!0})))}function Se(){f.disabled=!1,v.disabled=!1,_.disabled=!1,m.disabled=!1,p.disabled=!1,y.disabled=!1,C.disabled=!1,F.disabled=!1;for(const Y of ne)Y.btn.disabled=!1}c.addEventListener("change",async Y=>{const ve=Y.target.files[0];if(ve){Ve(!0,`Loading ${ve.name}...`);try{d.textContent=`Decoding ${ve.name}...`;const He=await sb(ve);he(He,He.name)}catch(He){console.warn("[AudioPlayer] decode failed:",He),d.textContent="Decode failed. Try another file."}finally{Ve(!1),c.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(Y){console.warn("[AudioPlayer] play() failed:",Y.message)}}),e.addEventListener("play",()=>{t=!0,R(!0),f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,R(!1),f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,R(!1),f.classList.remove("audio-player__btn--active")}),v.addEventListener("click",()=>{e.pause(),e.currentTime=0,Z.value="0",pe(0),g.textContent=`0:00 / ${Mr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),_.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),m.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),E.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),y.addEventListener("click",()=>{y.disabled||n.dispatchEvent(new CustomEvent("player:recordvideo-toggle",{detail:{audioEl:e},bubbles:!0}))}),p.addEventListener("click",()=>{p.disabled||n.dispatchEvent(new CustomEvent("player:mute-toggle",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:mute-state",Y=>{var He;const ve=!!((He=Y==null?void 0:Y.detail)!=null&&He.muted);ge(ve)}),n.addEventListener("player:recordvideo-state",Y=>{var He;const ve=!!((He=Y==null?void 0:Y.detail)!=null&&He.running);q(ve),y.classList.toggle("audio-player__btn--active",ve),p.disabled=ve||!e.src,!ve&&e.src&&(y.disabled=!1),C.disabled=ve||!e.src,F.disabled=ve||!e.src;for(const Ge of ne)Ge.btn.disabled=ve||!e.src;ve&&(S.hidden=!0)}),C.addEventListener("click",Y=>{Y.stopPropagation(),!C.disabled&&(S.hidden=!S.hidden)}),F.addEventListener("input",()=>{K(F.value)});for(const Y of ne)Y.btn.addEventListener("click",()=>{K(Y.value)});document.addEventListener("click",Y=>{if(S.hidden)return;const ve=Y.target;ve instanceof Node&&B.contains(ve)||(S.hidden=!0)}),n.addEventListener("keydown",Y=>{Y.key==="Escape"&&(S.hidden=!0)}),K(1),ge(!1);let j=!1;Z.addEventListener("mousedown",()=>{j=!0}),Z.addEventListener("touchstart",()=>{j=!0},{passive:!0}),Z.addEventListener("input",()=>{const Y=parseFloat(Z.value);pe(Y),e.duration&&(g.textContent=`${Mr(e.duration*Y/100)} / ${Mr(e.duration)}`)}),Z.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(Z.value)/100*e.duration),j=!1}),e.addEventListener("timeupdate",()=>{if(j)return;const Y=e.currentTime,ve=e.duration;if(!isFinite(ve)||ve===0)return;const He=Y/ve*100;Z.value=String(He),pe(He),g.textContent=`${Mr(Y)} / ${Mr(ve)}`}),e.addEventListener("loadedmetadata",()=>{g.textContent=`0:00 / ${Mr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),a(i),i&&(S.hidden=!0)});function ye(Y,ve=(Y==null?void 0:Y.name)||"Audio loaded"){return Y instanceof File?(he(Y,ve),!0):!1}return{audioEl:e,getIsPlaying:()=>t,loadFile:ye}}function bo(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function hb({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=bo("div","canvas-wrapper__resize-handle-right"),a=bo("div","canvas-wrapper__resize-handle-bottom"),o=bo("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(h,f,v){h.preventDefault();const _=h.touches?h.touches[0].clientX:h.clientX,m=h.touches?h.touches[0].clientY:h.clientY;l={type:f,startX:_,startY:m,startW:n.clientWidth,startH:n.clientHeight,handle:v},v.classList.add("dragging"),document.body.style.cursor=f==="right"?"ew-resize":f==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(h){if(!l)return;const f=h.touches?h.touches[0].clientX:h.clientX,v=h.touches?h.touches[0].clientY:h.clientY,_=f-l.startX,m=v-l.startY,p=160,E=120,y=e.getBoundingClientRect();let b=l.startW,N=l.startH;(l.type==="right"||l.type==="corner")&&(b=Math.max(p,Math.min(l.startW+_,y.width-4))),(l.type==="bottom"||l.type==="corner")&&(N=Math.max(E,Math.min(l.startH+m,window.innerHeight-4)));const P=i>0?b/i:1,D=r>0?N/r:1;i=b,r=N,n.style.width=`${b}px`,n.style.height=`${N}px`,t(b,N,P,D)}function d(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",h=>c(h,"right",s)),a.addEventListener("mousedown",h=>c(h,"bottom",a)),o.addEventListener("mousedown",h=>c(h,"corner",o)),s.addEventListener("touchstart",h=>c(h,"right",s),{passive:!1}),a.addEventListener("touchstart",h=>c(h,"bottom",a),{passive:!1}),o.addEventListener("touchstart",h=>c(h,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),window.addEventListener("resize",()=>{if(!n.style.width){const h=e.clientWidth,f=e.clientHeight,v=i>0?h/i:1,_=r>0?f/r:1;i=h,r=f,t(h,f,v,_)}}),{setSize(h,f){const v=i>0?h/i:1,_=r>0?f/r:1;i=h,r=f,n.style.width=`${h}px`,n.style.height=`${f}px`,t(h,f,v,_)},getSize(){return{w:i,h:r}}}}const gh=1,us=".ssp.json";function Wu({params:n,presetName:e="",presetLibrary:t=[],projectName:i=""}){return{schemaVersion:gh,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),projectName:String(i||""),presetName:String(e||""),params:n&&typeof n=="object"?n:{},presetLibrary:Array.isArray(t)?t:[]}}function pb(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return{schemaVersion:Number.isFinite(Number(e.schemaVersion))?Number(e.schemaVersion):gh,createdAt:e.createdAt||null,updatedAt:e.updatedAt||null,projectName:String(e.projectName||""),presetName:String(e.presetName||""),params:e.params,presetLibrary:Array.isArray(e.presetLibrary)?e.presetLibrary:[]}}function fb(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function ii(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Jl(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function mb(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return ii(i/t)}function gb(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return ii(r/Math.max(s,e))}function vb(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const d=n[u];if(!(d<r)&&d>=n[u-1]&&d>=n[u+1]){const h=u/Math.max(1,t-1)*i;s.push({i:u,hz:h,mag:d/255})}}if(s.length<2)return 0;s.sort((u,d)=>d.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const d=a[u],f=Math.max(1,Math.round(d.hz/o))*o,v=Math.abs(d.hz-f)/Math.max(f,1e-9);l+=v*d.mag,c+=d.mag}return c<=1e-9?0:ii(l/c*2)}function _b(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return ii(e/255)}function bb(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return ii(e/Math.max(1,n.length-1))}function xb(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let a=0;for(let c=0;c<i;c++)a+=Math.max(0,n[c]/255);if(a<=1e-9)return 0;const o=a*s;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const u=c/Math.max(1,i-1)*r;return ii(u/Math.max(1,r))}return 1}function vh(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Number.isFinite(t)?t:Jl(n,e);let a=0,o=0;for(let c=0;c<i;c++){const u=Math.max(0,n[c]/255),h=c/Math.max(1,i-1)*r-s;o+=h*h*u,a+=u}if(a<=1e-9)return 0;const l=Math.sqrt(o/a);return ii(l/Math.max(1,r))}function yb(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,s=e/2,a=Number.isFinite(t)?t:Jl(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*s):Math.max(1e-6,vh(n,e,a)*s);let l=0,c=0;for(let d=0;d<r;d++){const h=Math.max(0,n[d]/255),v=(d/Math.max(1,r-1)*s-a)/o;c+=v*v*v*h,l+=h}if(l<=1e-9)return 0;const u=c/l;return ii((u+2)/4)}function Mb(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let s=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const u=69+12*Math.log2(c/440),d=(Math.round(u)%12+12)%12;r[d]+=l,s+=l}if(s<=1e-9)return 0;let a=0;for(let o=0;o<12;o++)r[o]>a&&(a=r[o]);return ii(a/s)}function Sb(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return ii((Number.isFinite(n)?n:0)/t)}const Eb=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g opacity="0.5">\r
<path d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z" fill="#1C274C"/>\r
</g>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1565 8.02441C11.5557 8.02441 11.8793 8.34806 11.8793 8.74731V10.4341H13.5661C13.9653 10.4341 14.289 10.7577 14.289 11.1569C14.289 11.5562 13.9653 11.8798 13.5661 11.8798H11.8793V13.5666C11.8793 13.9658 11.5557 14.2895 11.1565 14.2895C10.7572 14.2895 10.4336 13.9658 10.4336 13.5666V11.8798H8.74682C8.34758 11.8798 8.02393 11.5562 8.02393 11.1569C8.02393 10.7577 8.34758 10.4341 8.74682 10.4341H10.4336V8.74731C10.4336 8.34806 10.7572 8.02441 11.1565 8.02441Z" fill="#1C274C"/>\r
<path d="M17.1001 18.1219L20.7664 21.7882C21.0487 22.0705 21.5064 22.0705 21.7887 21.7882C22.071 21.5059 22.071 21.0482 21.7887 20.7659L18.1224 17.0996C17.809 17.4666 17.4671 17.8085 17.1001 18.1219Z" fill="#1C274C"/>\r
</svg>`,Cb=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g opacity="0.5">\r
<path d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z" fill="#1C274C"/>\r
</g>\r
<path d="M17.0996 18.1219C17.4666 17.8085 17.8085 17.4666 18.1219 17.0996L21.7882 20.7659C22.0705 21.0482 22.0705 21.5059 21.7882 21.7882C21.5059 22.0705 21.0482 22.0705 20.7659 21.7882L17.0996 18.1219Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.02344 11.1565C8.02344 10.7572 8.34709 10.4336 8.74633 10.4336H13.5656C13.9648 10.4336 14.2885 10.7572 14.2885 11.1565C14.2885 11.5557 13.9648 11.8794 13.5656 11.8794H8.74633C8.34709 11.8794 8.02344 11.5557 8.02344 11.1565Z" fill="#1C274C"/>\r
</svg>`,ti=document.getElementById("three-canvas"),ni=document.getElementById("canvas-wrapper"),en=document.getElementById("canvas-col"),Nt=new Od({canvas:ti,antialias:!0});Nt.setPixelRatio(window.devicePixelRatio);Nt.setClearColor(0,1);Nt.autoClear=!0;const ws=new hv(Nt),nr=new lf,Ql=250,ec=new Ef(Ql);let Ar=!0;ec.userData.excludeFromPng=!0;nr.add(ec);function _h(){window.dispatchEvent(new CustomEvent("seesound:origin-sign-state",{detail:{enabled:Ar,size:Ql}}))}window.addEventListener("seesound:origin-sign-toggle",n=>{var t;const e=(t=n==null?void 0:n.detail)==null?void 0:t.enabled;typeof e=="boolean"?Ar=e:Ar=!Ar,ec.visible=Ar,_h()});_h();const Jt=new Na(-1,1,1,-1,.001,5e3),_n=new Ln(55,1,.001,5e3);let Be=Jt;const Gt=new V(0,0,0),tc=new V(0,0,420),Xu=tc.length(),bh=new pv(nr,Be),Rr=new zr(new ot(1,1),Number(se.bloomStrength??1.15),Number(se.bloomRadius??.7),Number(se.bloomThreshold??.18)),sn=new gv(nr,Be,{focus:Number(se.bokehFocus??380),aperture:Number(se.bokehAperture??12e-5),maxblur:Number(se.bokehMaxBlur??.01)});ws.addPass(bh);ws.addPass(Rr);ws.addPass(sn);for(const n of[Jt,_n])n.position.copy(tc),n.up.set(0,1,0),n.lookAt(Gt);function nc(){const e=se.cameraProjection==="perspective"?_n:Jt;if(e===Be)return;e.position.copy(Be.position),e.quaternion.copy(Be.quaternion),e.up.copy(Be.up),e.zoom=Be.zoom,e.lookAt(Gt),e.updateProjectionMatrix(),Be=e,bh.camera=Be,sn.camera=Be;const t=Be.isPerspectiveCamera?1:0;sn.materialBokeh.defines.PERSPECTIVE_CAMERA!==t&&(sn.materialBokeh.defines.PERSPECTIVE_CAMERA=t,sn.materialBokeh.needsUpdate=!0),vi()}function xo(n,e){var i,r,s;const t=Number(e);if(Number.isFinite(t)){if((i=sn==null?void 0:sn.uniforms)!=null&&i[n]){sn.uniforms[n].value=t;return}(s=(r=sn==null?void 0:sn.materialBokeh)==null?void 0:r.uniforms)!=null&&s[n]&&(sn.materialBokeh.uniforms[n].value=t)}}function xh(){const n=Number(se.postProcessEnabled??0)>=.5,e=Number(se.bloomEnabled??1)>=.5,t=Number(se.bokehEnabled??1)>=.5;Rr.enabled=n&&e,sn.enabled=n&&t,Rr.strength=Math.max(0,Number(se.bloomStrength??1.15)||0),Rr.radius=Math.max(0,Number(se.bloomRadius??.7)||0),Rr.threshold=Math.max(0,Math.min(1,Number(se.bloomThreshold??.18)||0)),xo("focus",Math.max(1,Number(se.bokehFocus??380)||380)),xo("aperture",Math.max(0,Number(se.bokehAperture??12e-5)||0)),xo("maxblur",Math.max(0,Number(se.bokehMaxBlur??.01)||0))}function wb(){if(!(Number(se.postProcessEnabled??0)>=.5))return!1;const e=Number(se.bloomEnabled??1)>=.5,t=Number(se.bokehEnabled??1)>=.5;return e||t}const Ft={radius:420,azimuth:0,elevation:0};function vi(){const n=Be.position.x-Gt.x,e=Be.position.y-Gt.y,t=Be.position.z-Gt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);Ft.radius=i,Ft.azimuth=Math.atan2(n,t),Ft.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function Ea(){const n=Math.cos(Ft.elevation);Be.position.set(Gt.x+Ft.radius*n*Math.sin(Ft.azimuth),Gt.y+Ft.radius*Math.sin(Ft.elevation),Gt.z+Ft.radius*n*Math.cos(Ft.azimuth)),Be.lookAt(Gt)}function yh(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Mh(){Gt.set(0,0,0);const n=Math.max(1,Nt.domElement.clientWidth||en.clientWidth||window.innerWidth),e=Math.max(1,Nt.domElement.clientHeight||en.clientHeight||window.innerHeight);ac(n,e);for(const t of[Jt,_n])t.position.copy(tc),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(Gt),t.updateProjectionMatrix();nc(),ic(!0),vi()}function ic(n=!1){if(se.cameraProjection==="perspective")return;const e=String(se.cameraAxoPreset||"orthoXY"),t=n?Xu:Math.max(40,Number(Ft.radius)||Xu),{azimuth:i,elevation:r}=yh(e);Ft.radius=t,Ft.azimuth=i,Ft.elevation=r,Ea(),vi()}vi();const ut={active:!1,button:-1,lastX:0,lastY:0,pinchDistance:0},St={active:!1,offsetX:0,offsetY:0,scale:1,lastX:0,lastY:0,pinchDistance:0};function Sh(n){const e=Math.max(5,Math.min(2e3,Math.floor(Number(se.canvasScale)||100))),t=Math.max(5,Math.min(2e3,e+n));t!==e&&Dt("canvasScale",t)}function Eh(){Mh()}function Ch(){Ab()}function wh(){Pt.clear()}function Ts(n,e,t){if(!n||!e)return;const i=String(t||"").trim();n.textContent="",n.append(Object.assign(document.createElement("span"),{className:"canvas-nav-actions__icon cp-btn-icon",innerHTML:e}),Object.assign(document.createElement("span"),{className:"canvas-nav-actions__label",textContent:i})),i&&n.setAttribute("aria-label",i)}const rc=document.createElement("div");rc.className="canvas-nav-actions";const $r=document.createElement("button");$r.type="button";$r.className="canvas-nav-actions__btn cp-btn";$r.title="Reset camera";Ts($r,sh,"Reset Camera");$r.addEventListener("click",Eh);const Zr=document.createElement("button");Zr.type="button";Zr.className="canvas-nav-actions__btn cp-btn";Zr.title="Fit image to canvas bounds";Ts(Zr,ah,"Fit");Zr.addEventListener("click",Ch);const Kr=document.createElement("button");Kr.type="button";Kr.className="canvas-nav-actions__btn cp-btn";Kr.title="Clear particles and scene elements";Ts(Kr,ml,"Clear");Kr.addEventListener("click",wh);const Jr=document.createElement("button");Jr.type="button";Jr.className="canvas-nav-actions__btn cp-btn";Jr.title="Increase canvas zoom";Ts(Jr,Eb,"Zoom In");Jr.addEventListener("click",()=>Sh(10));const Oi=document.createElement("button");Oi.type="button";Oi.className="canvas-nav-actions__btn canvas-nav-actions__btn--conditional cp-btn";Oi.title="Decrease canvas zoom";Ts(Oi,Cb,"Zoom Out");Oi.addEventListener("click",()=>Sh(-10));rc.append($r,Zr,Kr,Jr,Oi);const qu=document.getElementById("app")||document.body;qu&&qu.appendChild(rc);function Gr(){const n=ni.clientWidth,e=ni.clientHeight,t=en.clientWidth,i=en.clientHeight,r=n>=t*.95&&e>=i*.95;Oi.classList.toggle("is-visible",r),Oi.disabled=!r}window.addEventListener("resize",Gr);Gr();function sc(){ni.style.transform=`translate(${St.offsetX}px, ${St.offsetY}px) scale(${St.scale})`}ti.addEventListener("contextmenu",n=>n.preventDefault());function _l(n,e,t){if(t===0)Ft.azimuth-=n*.006,Ft.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,Ft.elevation-e*.005)),Ea();else if(t===1){const i=Math.max(1,Nt.domElement.clientHeight||en.clientHeight||window.innerHeight),r=new V,s=new V,a=new V;Be.updateMatrixWorld();const o=Be.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Be.isOrthographicCamera)l=(Be.top-Be.bottom)/(Math.max(.01,Be.zoom)*i);else{const c=Math.max(.001,Be.position.distanceTo(Gt)),u=Nl.degToRad(Be.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Be.zoom)}a.copy(r).multiplyScalar(-n*l),a.addScaledVector(s,e*l),Be.position.add(a),Gt.add(a),vi()}else if(t===2){const i=-n*.004,r=-e*.004;Be.rotateOnWorldAxis(new V(0,1,0),i),Be.rotateX(r)}}function Th(n){if(Be.isPerspectiveCamera){const e=new V;Be.getWorldDirection(e);const t=Math.max(2,Ft.radius*.08),i=(n>0?1:-1)*t;Be.position.addScaledVector(e,i),vi()}else{const e=n>0?.92:1.08;Be.zoom=Math.max(.05,Math.min(64,Be.zoom*e)),Be.updateProjectionMatrix()}}en.addEventListener("mousedown",n=>{n.target===ti||ni.contains(n.target)&&n.target!==en||n.button===0&&(St.active=!0,St.lastX=n.clientX,St.lastY=n.clientY,n.preventDefault())});en.addEventListener("touchstart",n=>{if(!(n.target===ti||ni.contains(n.target)&&n.target!==en)){if(n.touches.length===1)St.active=!0,St.lastX=n.touches[0].clientX,St.lastY=n.touches[0].clientY;else if(n.touches.length===2){St.active=!0;const e=n.touches[0].clientX-n.touches[1].clientX,t=n.touches[0].clientY-n.touches[1].clientY;St.pinchDistance=Math.sqrt(e*e+t*t)}}},{passive:!1});ti.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(ut.active=!0,ut.button=n.button,ut.lastX=n.clientX,ut.lastY=n.clientY,n.preventDefault())});ti.addEventListener("touchstart",n=>{if(n.touches.length===1)ut.active=!0,ut.button=0,ut.lastX=n.touches[0].clientX,ut.lastY=n.touches[0].clientY;else if(n.touches.length===2){ut.active=!0,ut.button=1,ut.lastX=(n.touches[0].clientX+n.touches[1].clientX)/2,ut.lastY=(n.touches[0].clientY+n.touches[1].clientY)/2;const e=n.touches[0].clientX-n.touches[1].clientX,t=n.touches[0].clientY-n.touches[1].clientY;ut.pinchDistance=Math.sqrt(e*e+t*t)}n.cancelable&&n.preventDefault()},{passive:!1});window.addEventListener("mouseup",()=>{ut.active=!1,ut.button=-1,St.active=!1});window.addEventListener("touchend",n=>{n.touches.length===0?(ut.active=!1,ut.button=-1,St.active=!1):n.touches.length===1&&(ut.button=0,ut.lastX=n.touches[0].clientX,ut.lastY=n.touches[0].clientY)});window.addEventListener("mousemove",n=>{if(St.active){const i=n.clientX-St.lastX,r=n.clientY-St.lastY;St.lastX=n.clientX,St.lastY=n.clientY,St.offsetX+=i,St.offsetY+=r,sc();return}if(!ut.active)return;const e=n.clientX-ut.lastX,t=n.clientY-ut.lastY;ut.lastX=n.clientX,ut.lastY=n.clientY,_l(e,t,ut.button)});window.addEventListener("touchmove",n=>{if(St.active){if(n.cancelable&&n.preventDefault(),n.touches.length===1){const e=n.touches[0].clientX-St.lastX,t=n.touches[0].clientY-St.lastY;St.lastX=n.touches[0].clientX,St.lastY=n.touches[0].clientY,St.offsetX+=e,St.offsetY+=t,sc()}else if(n.touches.length===2){const e=n.touches[0].clientX-n.touches[1].clientX,t=n.touches[0].clientY-n.touches[1].clientY,i=Math.sqrt(e*e+t*t);if(St.pinchDistance>0){const r=(i-St.pinchDistance)*.005,s=Math.max(.05,Math.min(20,St.scale+r));Dt("canvasScale",Math.round(s*100))}St.pinchDistance=i}return}if(ut.active){if(n.cancelable&&n.preventDefault(),n.touches.length===1&&ut.button===0){const e=n.touches[0].clientX-ut.lastX,t=n.touches[0].clientY-ut.lastY;ut.lastX=n.touches[0].clientX,ut.lastY=n.touches[0].clientY,_l(e,t,0)}else if(n.touches.length===2&&ut.button===1){const e=(n.touches[0].clientX+n.touches[1].clientX)/2,t=(n.touches[0].clientY+n.touches[1].clientY)/2,i=n.touches[0].clientX-n.touches[1].clientX,r=n.touches[0].clientY-n.touches[1].clientY,s=Math.sqrt(i*i+r*r),a=e-ut.lastX,o=t-ut.lastY;_l(a,o,1);const l=ut.pinchDistance-s;Math.abs(l)>1&&(Th(l*.75),ut.pinchDistance=s),ut.lastX=e,ut.lastY=t}}},{passive:!1});ti.addEventListener("wheel",n=>{n.preventDefault(),Th(n.deltaY)},{passive:!1});en.addEventListener("wheel",n=>{if(n.target===ti||ni.contains(n.target)&&n.target!==en)return;n.preventDefault();const t=-n.deltaY*.001,i=Math.max(.05,Math.min(20,St.scale+t));Dt("canvasScale",Math.round(i*100))},{passive:!1});function Tb(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Be.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Be.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Be.position.z=n.z,e=!0),e&&(Be.lookAt(Gt),vi()),Number.isFinite(n.zoom)&&(Be.zoom=Math.max(.05,Math.min(64,n.zoom)),Be.updateProjectionMatrix())}function Ab(){const n=Pt.getVisibleBounds();if(n.empty){Mh();return}const e=1e-6,t=Math.max(1,Number(window.devicePixelRatio)||1),i=Nt.domElement.width/t,r=Nt.domElement.height/t,s=Math.max(1,i||Number(se.canvasWidth)||Nt.domElement.clientWidth||en.clientWidth||window.innerWidth),a=Math.max(1,r||Number(se.canvasHeight)||Nt.domElement.clientHeight||en.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(Gt.copy(c),Be.isOrthographicCamera){const{azimuth:d,elevation:h}=yh(se.cameraAxoPreset);Ft.azimuth=d,Ft.elevation=h,Ft.radius=Math.max(u*2.2,60),Ea(),Be.updateMatrixWorld(!0);const f=Be.matrixWorld.elements,v=new V(f[0],f[1],f[2]).normalize(),_=new V(f[4],f[5],f[6]).normalize(),m=[new V(n.min.x,n.min.y,n.min.z),new V(n.min.x,n.min.y,n.max.z),new V(n.min.x,n.max.y,n.min.z),new V(n.min.x,n.max.y,n.max.z),new V(n.max.x,n.min.y,n.min.z),new V(n.max.x,n.min.y,n.max.z),new V(n.max.x,n.max.y,n.min.z),new V(n.max.x,n.max.y,n.max.z)];let p=0,E=0;const y=new V;for(const P of m)y.copy(P).sub(c),p=Math.max(p,Math.abs(y.dot(v))),E=Math.max(E,Math.abs(y.dot(_)));const b=Math.max(p,E*o,e),N=Math.max(E,p/Math.max(e,o),e);Jt.left=-b,Jt.right=b,Jt.top=N,Jt.bottom=-N,Jt.zoom=1,Jt.near=-Math.max(5e3,u*6),Jt.far=Math.max(5e3,u*6),Jt.updateProjectionMatrix()}else{_n.lookAt(c),vi(),_n.updateMatrixWorld(!0);const d=_n.matrixWorld.elements,h=new V(d[0],d[1],d[2]).normalize(),f=new V(d[4],d[5],d[6]).normalize(),v=new V;_n.getWorldDirection(v);const _=[new V(n.min.x,n.min.y,n.min.z),new V(n.min.x,n.min.y,n.max.z),new V(n.min.x,n.max.y,n.min.z),new V(n.min.x,n.max.y,n.max.z),new V(n.max.x,n.min.y,n.min.z),new V(n.max.x,n.min.y,n.max.z),new V(n.max.x,n.max.y,n.min.z),new V(n.max.x,n.max.y,n.max.z)],m=Nl.degToRad(_n.fov),p=Math.max(e,Math.tan(m*.5)),E=2*Math.atan(Math.tan(m*.5)*(_n.aspect||o)),y=Math.max(e,Math.tan(E*.5));let b=e,N=0;const P=new V;for(const D of _){P.copy(D).sub(c);const B=Math.abs(P.dot(h)),C=Math.abs(P.dot(f)),S=P.dot(v);N=Math.max(N,S);const F=S+Math.max(B/y,C/p);b=Math.max(b,F)}Ft.radius=Math.max(b+e,N+e),Ea(),_n.near=Math.max(.001,Ft.radius-u*3),_n.far=Math.max(_n.near+1,Ft.radius+u*6),_n.updateProjectionMatrix()}vi()}function ac(n,e){Jt.left=-n/2,Jt.right=n/2,Jt.top=e/2,Jt.bottom=-e/2,Jt.updateProjectionMatrix(),_n.aspect=n/Math.max(1,e),_n.updateProjectionMatrix(),Nt.setSize(n,e,!1),ws.setSize(n,e),Rr.setSize(n,e)}const Rb=en.clientWidth||window.innerWidth,Pb=en.clientHeight||window.innerHeight;ac(Rb,Pb);nc();ic();{const n=Be.isPerspectiveCamera?1:0;sn.materialBokeh.defines.PERSPECTIVE_CAMERA!==n&&(sn.materialBokeh.defines.PERSPECTIVE_CAMERA=n,sn.materialBokeh.needsUpdate=!0)}xh();const Pt=new ib(nr,{maxParticles:se.maxParticles??262144}),Qi=Pt.onRulesChanged(se.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:Qi}));function Nb(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.physicalParticles)?n.physicalParticles:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function Ah(n=null){const e=Nb(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","canvasWidthUnits","canvasHeightUnits","audioLengthSec","binEnergy"]),i=e.has("binMagnitude")||e.has("binEnergy")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),s=e.has("binPhaseDeviation")||e.has("binPhasedeviation"),a=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),u=e.has("spectralCentroid"),d=e.has("spectralFlux"),h=e.has("spectralFlatness"),f=e.has("inharmonicity"),v=e.has("peakAmplitude"),_=e.has("zeroCrossingRate"),m=e.has("spectralRolloff"),p=e.has("spectralSpread"),E=e.has("spectralSkewness"),y=e.has("chromagram"),b=new Set(t);return c&&b.add("globalRmsEnergy"),u&&b.add("spectralCentroid"),d&&b.add("spectralFlux"),h&&b.add("spectralFlatness"),f&&b.add("inharmonicity"),v&&b.add("peakAmplitude"),_&&b.add("zeroCrossingRate"),m&&b.add("spectralRolloff"),p&&b.add("spectralSpread"),E&&b.add("spectralSkewness"),y&&b.add("chromagram"),i&&b.add("binMagnitude"),r&&b.add("binFlux"),s&&b.add("binPhaseDeviation"),o&&b.add("binPhase"),a&&b.add("binEnvelope"),a&&b.add("binEnvelopeState"),l&&b.add("binAttackTime"),c&&b.add("binRMSEnergy"),e.has("binFreq")&&b.add("binFreq"),{used:e,calculatedInputs:b,worklet:{enabled:i||r||s||a||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:s,needPhase:o,needEnvelope:a,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:u,needGlobalSpectralFlux:d,needSpectralFlatness:h,needInharmonicity:f,needPeakAmplitude:v,needZeroCrossingRate:_,needSpectralRolloff:m,needSpectralSpread:p,needSpectralSkewness:E,needChromagram:y},backend:{calc_fft:!0,calc_magnitude:i||r||u||h||d,calc_magnitude_dbfs:i||c,calc_phase:s||o,calc_phase_deviation:s,calc_local_spectral_flux:r||a,calc_envelope_state:a,calc_rms_energy:c,calc_peak_amplitude:v,calc_zero_crossing_rate:_,calc_spectral_centroid:u,calc_global_spectral_flux:d,calc_spectral_flatness:h,calc_spectral_rolloff:m,calc_spectral_spread:p,calc_spectral_skewness:E,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:y}}}function qn(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return!Number.isFinite(s)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(s-i)/(r-i)))}const yo=Object.freeze([1024,2048,4096,8192,16384]);function bl(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=yo[0],i=Math.abs(e-t);for(let r=1;r<yo.length;r++){const s=yo[r],a=Math.abs(e-s);a<i&&(t=s,i=a)}return t}function oc(n=null){const e=Ah(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}oc(Qi==null?void 0:Qi.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||Pt.scaleAllParticleSizes(t/e)});class Lb{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.outputGain=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=bl(se.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none",this.monitorMuted=!1}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-C6EfNb8V.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=Ah(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=bl(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.outputGain=this.ctx.createGain(),this.outputGain.gain.value=this.monitorMuted?0:1,this.analyser.connect(this.outputGain),this.outputGain.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}setMonitorMuted(e){var i;if(this.monitorMuted=!!e,!this.outputGain)return;const t=this.monitorMuted?0:1;try{this.outputGain.gain.setValueAtTime(t,((i=this.ctx)==null?void 0:i.currentTime)??0)}catch{this.outputGain.gain.value=t}}update(){var _,m,p;if(!this.analyser)return;((_=this.ctx)==null?void 0:_.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((m=this.ctx)==null?void 0:m.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((p=this.ctx)==null?void 0:p.sampleRate)??44100,i=t/2,r=E=>E/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,d=0,h=0;for(let E=0;E<e;E++){const y=this.frequencyData[E],b=r(E);b<250?(s+=y,a++):b<4e3?(o+=y,l++):(c+=y,u++),y>d&&(d=y,h=E)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(h)),this.peakByte=d;const f=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const E=Jl(this.frequencyData,t);this.spectralCentroidHz+=(E-this.spectralCentroidHz)*f,this.spectralCentroid=Sb(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const y=mb(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(y-this.spectralFluxAU)*f,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const E=gb(this.frequencyData);this.spectralFlatnessRatio+=(E-this.spectralFlatnessRatio)*f,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const E=vb(this.frequencyData,t);this.inharmonicity+=(E-this.inharmonicity)*f}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(_b(this.frequencyData)-this.peakAmplitude)*f:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(bb(this.timeDomainData)-this.zeroCrossingRate)*f:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(xb(this.frequencyData,t,.85)-this.spectralRolloff)*f:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const E=vh(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(E-this.spectralSpread)*f:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const y=yb(this.frequencyData,t,this.spectralCentroidHz,E);this.spectralSkewness+=(y-this.spectralSkewness)*f}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(Mb(this.frequencyData,t)-this.chromagram)*f:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let v=0;for(const E of this.timeDomainData)v+=((E-128)/128)**2;if(this.amplitude=Math.sqrt(v/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let E=0,y=0;for(let b=0;b<this._freqL.length;b++)E+=this._freqL[b],y+=this._freqR[b];this.pan=(y-E)/(E+y+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const Pe=new Lb;Pe.setRuleInputUsage(Qi==null?void 0:Qi.requiredInputsByTarget);const ju=document.getElementById("status-dot"),Yu=document.getElementById("status-text");function Db(n,e){ju&&(ju.className=n),Yu&&(Yu.textContent=e)}Db("open","Browser mode");const In=document.createElement("div");In.id="camera-hud";In.style.position="fixed";In.style.top="8px";In.style.left="50%";In.style.transform="translateX(-50%)";In.style.zIndex="220";In.style.display="none";In.style.alignItems="center";In.style.gap="6px";const Xn=document.createElement("div");Xn.id="camera-readout";Xn.style.fontFamily="var(--font-mono, monospace)";Xn.style.fontSize="10px";Xn.style.color="var(--color-text-muted, #bbb)";Xn.style.background="rgba(0,0,0,0.35)";Xn.style.padding="4px 6px";Xn.style.borderRadius="4px";Xn.style.pointerEvents="none";Xn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";let Ss=!1;function Fb(){window.dispatchEvent(new CustomEvent("seesound:camera-hud-state",{detail:{enabled:Ss}}))}function xl(n){Ss=!!n,In.style.display=Ss?"flex":"none",Fb()}window.addEventListener("seesound:camera-hud-toggle",n=>{var t;const e=(t=n==null?void 0:n.detail)==null?void 0:t.enabled;xl(typeof e=="boolean"?e:!Ss)});In.append(Xn);const $u=document.getElementById("app")||document.body;$u&&$u.appendChild(In);xl(!1);let Mo=0,Sr=!1,Ca="",Vn=null,sa=null,aa=[],oa=null,os=null,Zu=0;const Li={tier:"free",maxExportResolution:Number.POSITIVE_INFINITY,canExportObj:!1,canCloudRender:!1};function za(n,e={}){try{window.parent&&window.parent!==window&&window.parent.postMessage({source:"seesound-engine",type:n,payload:e},"*")}catch{}}function Ib(n){const e=n&&typeof n=="object"?n:{};Li.tier=String(e.tier||Li.tier)==="pro"?"pro":"free";const t=Number(e.maxExportResolution);Li.maxExportResolution=Number.isFinite(t)&&t>0?Math.floor(t):Number.POSITIVE_INFINITY,Li.canExportObj=!!e.canExportObj,Li.canCloudRender=!!e.canCloudRender}window.addEventListener("message",n=>{const e=n==null?void 0:n.data;!e||typeof e!="object"||e.source!=="seesound-platform"||e.type!=="platform:config"||Ib(e.payload)});za("engine:ready");function wa(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function Ta(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function lc(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Rh(){var e,t;if(Ca)return Ta(Ca);const n=String(((e=Pe==null?void 0:Pe.audioEl)==null?void 0:e.currentSrc)||((t=Pe==null?void 0:Pe.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return Ta(r)}catch{}return"audio"}function jn(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}${us}`}function Ti(){return{fileName:"New Project.ssp.json",presetName:"default",params:ys(),presetLibrary:[]}}async function Ub(){var h;const n=wa(Rh(),"audio"),e=wa(lc(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(se.canvasWidth)||Nt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(se.canvasHeight)||Nt.domElement.height/Math.max(1,window.devicePixelRatio))),s=Number(Li.maxExportResolution),a=Math.max(i,r),o=Number.isFinite(s)&&s>0&&a>s?s/a:1,l=Math.max(1,Math.floor(i*o)),c=Math.max(1,Math.floor(r*o));o<1&&za("engine:export-blocked",{reason:"resolution_limit",requestedWidth:i,requestedHeight:r,allowedMaxRes:s});const u=document.createElement("canvas"),d=new Od({canvas:u,antialias:!0,preserveDrawingBuffer:!0});try{const f=d.capabilities.maxTextureSize||8192,v=Math.min(l,f),_=Math.min(c,f),m=Math.max(1,Number(((h=Nt.getPixelRatio)==null?void 0:h.call(Nt))||window.devicePixelRatio||1)),p=Math.max(1,Math.floor(v/m)),E=Math.max(1,Math.floor(_/m));d.setPixelRatio(m),d.setSize(p,E,!1);let y=Be.clone();Be===Jt||y.isOrthographicCamera?(y=Be.clone(),y.updateProjectionMatrix()):y.isPerspectiveCamera&&(y.aspect=v/Math.max(1,_),y.updateProjectionMatrix());const b=[];nr.traverse(D=>{var B;(B=D==null?void 0:D.userData)!=null&&B.excludeFromPng&&D.visible&&(b.push(D),D.visible=!1)}),d.setClearColor(Pt.getBackgroundColor(),1),Pt.setViewportHeight(d.domElement.height),d.render(nr,y);for(const D of b)D.visible=!0;const N=await new Promise(D=>u.toBlob(D,"image/png"));if(!N)throw new Error("PNG export failed (empty blob).");const P=document.createElement("a");P.href=URL.createObjectURL(N),P.download=t,document.body.appendChild(P),P.click(),P.remove(),URL.revokeObjectURL(P.href),(v!==l||_!==c)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:l,h:c},exported:{w:v,h:_},maxTextureSize:f})}finally{Pt.setViewportHeight(Nt.domElement.height),d.dispose()}}function Ku(n,e){n.dispatchEvent(new CustomEvent("player:mute-state",{detail:{muted:!!e},bubbles:!1}))}function Aa(n,e){n.dispatchEvent(new CustomEvent("player:recordvideo-state",{detail:{running:e},bubbles:!1}))}async function Ob(n){var s;if(!n)return{track:null,cleanup:null};try{if(typeof n.captureStream=="function"){const o=n.captureStream().getAudioTracks()[0]||null;if(o)return{track:o,cleanup:null}}}catch{}Pe.init(n),((s=Pe.ctx)==null?void 0:s.state)==="suspended"&&await Pe.ctx.resume();const e=Pe.source||Pe.streamSource;if(!e||!Pe.ctx)return{track:null,cleanup:null};const t=Pe.ctx.createMediaStreamDestination();return e.connect(t),{track:t.stream.getAudioTracks()[0]||null,cleanup:()=>{try{e.disconnect(t)}catch{}try{t.disconnect()}catch{}}}}async function Bb(n,e){if(Vn||!(e!=null&&e.src))return;if(typeof MediaRecorder>"u"||typeof ti.captureStream!="function"){alert("Video recording is not supported in this browser.");return}const t=Math.max(1,Math.floor(Nt.domElement.width/Math.max(1,window.devicePixelRatio))),i=Math.max(1,Math.floor(Nt.domElement.height/Math.max(1,window.devicePixelRatio))),r=Number(Li.maxExportResolution);if(Number.isFinite(r)&&r>0&&Math.max(t,i)>r){za("engine:export-blocked",{reason:"resolution_limit",requestedWidth:t,requestedHeight:i,allowedMaxRes:r}),alert(`Free plan export limit is ${Math.floor(r)}p. Reduce canvas size or upgrade to Pro.`);return}const s=ti.captureStream(60),a=new MediaStream;for(const h of s.getVideoTracks())a.addTrack(h);const{track:o,cleanup:l}=await Ob(e);oa=l,o&&a.addTrack(o);const u=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(h=>{var f;return(f=MediaRecorder.isTypeSupported)==null?void 0:f.call(MediaRecorder,h)})||"",d=new MediaRecorder(a,u?{mimeType:u}:void 0);if(aa=[],sa=a,Vn=d,d.ondataavailable=h=>{h.data&&h.data.size>0&&aa.push(h.data)},d.onstop=()=>{const h=aa;aa=[];const f=new Blob(h,{type:d.mimeType||"video/webm"});if(f.size>0){const v=wa(Rh(),"audio"),_=wa(lc(),"preset"),m=document.createElement("a");m.href=URL.createObjectURL(f),m.download=`${v} - ${_}.webm`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(m.href)}if(sa)for(const v of sa.getTracks())try{v.stop()}catch{}if(sa=null,typeof oa=="function")try{oa()}catch{}oa=null,os&&(e.removeEventListener("ended",os),os=null),Vn=null,Aa(n,!1)},e.paused)try{await e.play()}catch{}os=()=>{Vn&&Vn.state!=="inactive"&&Vn.stop()},e.addEventListener("ended",os,{once:!0}),d.start(200),Aa(n,!0)}function kb(n){if(Vn)try{Vn.state!=="inactive"&&Vn.stop()}catch{Vn=null,Aa(n,!1)}}function Ju(){let n=0,e=0;if(Be.isOrthographicCamera)n=Math.abs((Be.right-Be.left)/Math.max(.01,Be.zoom)),e=Math.abs((Be.top-Be.bottom)/Math.max(.01,Be.zoom));else{const r=Math.max(.001,Be.position.distanceTo(Gt)),s=Nl.degToRad(Be.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,Be.zoom),n=e*Be.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:Gt.x-t,right:Gt.x+t,top:Gt.y+i,bottom:Gt.y-i}}function Ph(){var t,i,r,s,a,o,l,c,u,d,h;if(requestAnimationFrame(Ph),Mo++,Mo%120===0){const f=Number(((t=Pt==null?void 0:Pt.getApproxFps)==null?void 0:t.call(Pt))||0);if(f>0&&f<24){const v=performance.now();v-Zu>15e3&&(Zu=v,za("engine:performance-drop",{fps:f,canCloudRender:!!Li.canCloudRender}))}}Pe.update();const n=!!(Pe.audioEl&&!Pe.audioEl.paused&&!Pe.audioEl.ended);if(n&&!Pe.analyser&&Pe.audioEl&&Pe.init(Pe.audioEl),n){const f=Nt.domElement.width/window.devicePixelRatio,v=Nt.domElement.height/window.devicePixelRatio,_=Ju(),m={...se,cameraState:{x:Be.position.x,y:Be.position.y,z:Be.position.z,zoom:Be.zoom},cameraCanvasWidthUnits:_.w,cameraCanvasHeightUnits:_.h};Pt.update(Pe,m,f,v),Tb(Pt.getCameraOutput());const p=((i=Pe.getBinMagnitude)==null?void 0:i.call(Pe))||null,E=((r=Pe.getBinFlux)==null?void 0:r.call(Pe))||null,y=((s=Pe.getBinPhaseDeviation)==null?void 0:s.call(Pe))||null,b=((a=Pe.getBinPhase)==null?void 0:a.call(Pe))||null,N=((o=Pe.getBinAttackTime)==null?void 0:o.call(Pe))||null,P=((l=Pe.getBinEnvelope)==null?void 0:l.call(Pe))||null,D=Pe.peakFreq??0,B=(c=Pe.ctx)!=null&&c.sampleRate?Pe.ctx.sampleRate*.5:22050,C=qn(Pe.rmsDbfs,se.globalRmsNormMin??-60,se.globalRmsNormMax??0),S=qn(Pe.spectralCentroidHz,se.spectralCentroidNormMin??150,se.spectralCentroidNormMax??8e3),F=qn(Pe.spectralFluxAU,se.globalSpectralFluxNormMin??0,se.globalSpectralFluxNormMax??100),ee=qn(Pe.spectralFlatnessRatio,se.spectralFlatnessNormMin??0,se.spectralFlatnessNormMax??1),$=(R,q)=>{if(!R||!R.length)return 0;let ge=0;for(let Ve=0;Ve<R.length;Ve++)ge+=q(R[Ve]);return ge/R.length},ne=$(p,R=>qn(R,se.binMagnitudeNormMin??-70,se.binMagnitudeNormMax??0)),Q=$(E,R=>qn(R,se.binFluxNormMin??0,se.binFluxNormMax??.5)),Z=$(y,R=>qn(R,se.binPhaseDeviationNormMin??0,se.binPhaseDeviationNormMax??Math.PI)),pe=$(b,R=>qn(R,-Math.PI,Math.PI)),g=$(N,R=>qn(R,se.binAttackTimeNormMin??5,se.binAttackTimeNormMax??500)),A=$(P,R=>qn(R,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:C,globalRmsEnergy:C,binEnergy:ne,frequencyHz:D,normFreq:Math.max(0,Math.min(1,D/Math.max(1e-6,B))),bass:Pe.bass??0,mid:Pe.mid??0,high:Pe.high??0,peakFreq:D,pan:Pe.pan??0,spectralCentroid:S,spectralFlux:F,spectralFlatness:ee,inharmonicity:Pe.inharmonicity??0,peakAmplitude:Pe.peakAmplitude??0,zeroCrossingRate:Pe.zeroCrossingRate??0,spectralRolloff:Pe.spectralRolloff??0,spectralSpread:Pe.spectralSpread??0,spectralSkewness:Pe.spectralSkewness??0,chromagram:Pe.chromagram??0,binMagnitude:ne,binFreq:D,binPhase:pe,binFlux:Q,binPhaseDeviation:Z,binAttackTime:g,binEnvelope:A,binEnvelopeState:A,binRMSEnergy:C,time:((u=Pe.audioEl)==null?void 0:u.currentTime)??0,deltaTime:1/60,canvasWidthPx:f,canvasHeightPx:v,canvasWidthUnits:_.w,canvasHeightUnits:_.h,audioLengthSec:((d=Pe.audioEl)==null?void 0:d.duration)??0}}}))}const e=Pt.getBackgroundColor();if(Nt.setClearColor(e,1),Pt.setViewportHeight(Nt.domElement.height),wb()?ws.render():Nt.render(nr,Be),Ss&&Mo%6===0){const f=(Be.rotation.x*180/Math.PI).toFixed(2),v=(Be.rotation.y*180/Math.PI).toFixed(2),_=(Be.rotation.z*180/Math.PI).toFixed(2),m=Be.position.x.toFixed(2),p=Be.position.y.toFixed(2),E=Be.position.z.toFixed(2),y=Math.max(0,Number(((h=Pt.getLineVisibleCount)==null?void 0:h.call(Pt))??0)),b=y>0?` lines ${y}`:"",N=Ju(),P=N.w,D=N.h;Xn.textContent=`cam p(${m},${p},${E}) r(${f},${v},${_}) pts ${Pt.getVisibleCount()}${b} fft ${Pe.peakByte} amp ${Pe.amplitude.toFixed(3)} sc ${Pe.spectralCentroid.toFixed(3)} sf ${Pe.spectralFlux.toFixed(3)} sfl ${Pe.spectralFlatness.toFixed(3)} inh ${Pe.inharmonicity.toFixed(3)} canv ${P.toFixed(2)} × ${D.toFixed(2)} origin ${Ql}u ${Ar?"on":"off"}`}}Ph();{const n=document.getElementById("audio-player"),{audioEl:e,loadFile:t}=db(n);Pe.audioEl=e;let i=null;e.addEventListener("play",async()=>{var g;Pe.init(e),((g=Pe.ctx)==null?void 0:g.state)==="suspended"&&await Pe.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var g;Pe.init(e),Pe.setMonitorMuted(Sr),((g=Pe.ctx)==null?void 0:g.state)==="suspended"&&await Pe.ctx.resume()}),n.addEventListener("player:play",()=>{}),n.addEventListener("player:pause",()=>{}),n.addEventListener("player:stop",()=>{}),n.addEventListener("player:savepng",async()=>{await Ub()}),n.addEventListener("player:mute-toggle",async()=>{var g;Sr=!Sr,Pe.setMonitorMuted(Sr),Ku(n,Sr),e.paused||(Pe.init(e),((g=Pe.ctx)==null?void 0:g.state)==="suspended"&&await Pe.ctx.resume())}),n.addEventListener("player:recordvideo-toggle",async()=>{if(Vn){kb(n);return}try{await Bb(n,e)}catch(g){console.warn("[Recorder] start failed:",g),alert("Failed to start recording."),Aa(n,!1)}}),n.addEventListener("player:playbackrate",g=>{var R;const A=Number((R=g==null?void 0:g.detail)==null?void 0:R.rate);Number.isFinite(A)&&(e.playbackRate=Math.max(.25,Math.min(4,A)))}),n.addEventListener("player:fileloaded",g=>{var R;const A=(R=g==null?void 0:g.detail)==null?void 0:R.file;i=A instanceof File?A:null,Ca=(i==null?void 0:i.name)||"",i&&v(i),C()}),Ku(n,Sr);let r=null,s="",a=null,o=!1,l=null;const c="seesound_project_draft_v1",u="seesound_local_audio_v1",d="files",h="last-audio",f=()=>new Promise((g,A)=>{try{const R=indexedDB.open(u,1);R.onupgradeneeded=()=>{const q=R.result;q.objectStoreNames.contains(d)||q.createObjectStore(d)},R.onsuccess=()=>g(R.result),R.onerror=()=>A(R.error)}catch(R){A(R)}}),v=async g=>{if(!(g instanceof File))return;const A=await f();await new Promise((R,q)=>{const ge=A.transaction(d,"readwrite");ge.objectStore(d).put({blob:g,name:g.name,type:g.type||"audio/*",updatedAt:Date.now()},h),ge.oncomplete=()=>R(),ge.onerror=()=>q(ge.error)}),A.close()},_=async()=>{const g=await f(),A=await new Promise((R,q)=>{const K=g.transaction(d,"readonly").objectStore(d).get(h);K.onsuccess=()=>R(K.result||null),K.onerror=()=>q(K.error)});return g.close(),!A||!(A.blob instanceof Blob)?null:new File([A.blob],String(A.name||"restored-audio.wav"),{type:String(A.type||"audio/*"),lastModified:Number(A.updatedAt||Date.now())})},m=()=>{const g=Ti();return Wu({params:g.params,presetName:g.presetName,presetLibrary:g.presetLibrary,projectName:Ta(g.fileName)})},p=()=>{window.dispatchEvent(new CustomEvent("seesound:project-file-state",{detail:{fileName:String(s||"").trim()}}))},E=async()=>{const g=await dl(),A=[];for(const R of g){const q=await Kd(R);!(q!=null&&q.params)||typeof q.params!="object"||A.push({name:String(R||""),params:q.params})}return A},y=async()=>{if((await dl()).filter(q=>!String(q||"").startsWith("rule__")).length>0)return;const R=Ti();if(R.presetLibrary.length>0){await b(R.presetLibrary);return}await Ma("default",ys()),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))},b=async g=>{if(Array.isArray(g)){for(const A of g){const R=String((A==null?void 0:A.name)||"").trim(),q=A==null?void 0:A.params;!R||!q||typeof q!="object"||await Ma(R,q)}window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}},N=async g=>{await b(g)},P=async(g,A)=>{const R=await g.createWritable();await R.write(JSON.stringify(A,null,2)),await R.close()},D=async()=>{const g=ys(),A=await E(),R=lc();return Wu({params:g,presetName:R,presetLibrary:A,projectName:Ta(s||jn())})},B=async()=>{if(!o)try{const A={payload:await D(),fileName:String(s||"").trim(),hasBoundFile:!!r,updatedAt:Date.now(),hasAudio:i instanceof File};localStorage.setItem(c,JSON.stringify(A))}catch(g){console.warn("[Project] local draft save failed:",g)}},C=()=>{o||(l&&clearTimeout(l),l=setTimeout(async()=>{l=null,await B()},500))},S=async()=>{try{const g=localStorage.getItem(c);if(!g)return!1;const A=JSON.parse(g),R=A==null?void 0:A.payload;if(!R||typeof R!="object")return!1;if(r=null,s=String((A==null?void 0:A.fileName)||Ti().fileName||"").trim(),p(),await $(R),A!=null&&A.hasAudio){const q=await _();q&&(t(q,q.name),i=q,Ca=q.name||"")}return!0}catch(g){return console.warn("[Project] local draft restore failed:",g),!1}},F=async({forceDownload:g=!1}={})=>{try{const A=await D();if(!g&&r){await P(r,A),window.dispatchEvent(new CustomEvent("seesound:project-autosaved",{detail:{fileName:s||jn()}})),p(),C();return}fb(A,jn()),C()}catch(A){console.warn("[Project] save failed:",A)}},ee=()=>{!r||o||(a&&clearTimeout(a),a=setTimeout(async()=>{a=null,await F({forceDownload:!1})},450))},$=async g=>{try{o=!0,g.params&&typeof g.params=="object"&&rn(g.params),Array.isArray(g.presetLibrary)&&await N(g.presetLibrary),await y(),window.dispatchEvent(new CustomEvent("seesound:project-loaded",{detail:{fileName:s,presetName:String((g==null?void 0:g.presetName)||"")}}))}catch(A){console.warn("[Project] load failed:",A)}finally{o=!1,C()}},ne=async()=>{if(typeof window.showOpenFilePicker!="function")return!1;try{const[g]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Project",accept:{"application/json":[us,".json"]}}]});if(!g)return!1;const A=await g.getFile(),R=await A.text(),q=pb(R);return r=g,s=String(A.name||"").trim(),await $(q),p(),!0}catch{return!1}},Q=async(g="",A=!0)=>{if(typeof window.showSaveFilePicker!="function"){if(A){const R=Ti();rn(R.params),await N(R.presetLibrary)}return r=null,s=String(g||Ti().fileName).trim()||jn(),p(),C(),!0}try{const R=String(g||"").trim()||jn(),q=await window.showSaveFilePicker({suggestedName:R,types:[{description:"SEESOUND Project",accept:{"application/json":[us,".json"]}}]});if(!q)return!1;if(A){const ge=Ti();rn(ge.params),await N(ge.presetLibrary)}return r=q,s=String(q.name||R).trim(),await F({forceDownload:!1}),p(),C(),!0}catch{return!1}},Z=async(g="")=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const A=String(g||"").trim()||jn(),R=await window.showSaveFilePicker({suggestedName:A,types:[{description:"SEESOUND Project",accept:{"application/json":[us,".json"]}}]});return R?(r=R,s=String(R.name||A).trim(),await F({forceDownload:!1}),p(),!0):!1}catch{return!1}};n.addEventListener("player:saveproject",async()=>{if(r){await F({forceDownload:!1});return}await Z(jn())||await F({forceDownload:!0})}),n.addEventListener("player:loadproject",async g=>{var A;await $(((A=g==null?void 0:g.detail)==null?void 0:A.payload)||{})}),window.addEventListener("seesound:project-save-request",async()=>{if(r){await F({forceDownload:!1});return}await Z(jn())||await F({forceDownload:!0})}),window.addEventListener("seesound:project-save-as-request",async()=>{const g=s?`${s}${us}`:jn();await Z(g)||await F({forceDownload:!0})}),window.addEventListener("seesound:project-load-request",async g=>{const A=(g==null?void 0:g.detail)||{},R=String(A.fileName||"").trim();R&&(s=R,p()),await $(A.payload||{}),!r&&typeof window.showSaveFilePicker=="function"&&window.confirm("Attach this project to an autosave file now?")&&await Q(String(A.fileName||jn()),!1)}),window.addEventListener("seesound:project-open-request",async()=>{await ne()}),window.addEventListener("seesound:project-new-request",async()=>{await Q(Ti().fileName,!0)}),window.addEventListener("seesound:preset-library-changed",()=>{ee(),C()}),Xl((g,A)=>{!A||A==="*"||o||(ee(),C())});const pe=async()=>{if(await S())return;s=Ti().fileName,p(),await $(m())};p(),pe()}let Di=null,yl=!1;Di=hb({wrapper:ni,column:en,onResize(n,e){if(ac(n,e),cc(n,e),Gr(),!yl){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(se.canvasWidth)!==t||Number(se.canvasHeight)!==i)&&rn({canvasWidth:t,canvasHeight:i})}}});function cc(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(se.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function zb(n){const e=n instanceof Element?n:null;return e?!!e.closest('input,textarea,select,[contenteditable="true"]'):!1}window.addEventListener("keydown",n=>{if(n.defaultPrevented||!(n.ctrlKey||n.metaKey)||n.altKey||zb(n.target))return;const e=String(n.key||"").toLowerCase();if(e==="z"&&!n.shiftKey){if(!n_())return;n.preventDefault(),n.stopPropagation();return}if(e==="y"||e==="z"&&n.shiftKey){if(!i_())return;n.preventDefault(),n.stopPropagation()}});function Nh(){const e=Math.max(5,Math.min(2e3,Math.floor(Number(se.canvasScale)||100)))/100;St.scale=e,ni.style.transformOrigin="center center",sc(),Gr()}function Lh(){var i;const n=((i=Di==null?void 0:Di.getSize)==null?void 0:i.call(Di))||{},e=Math.max(160,Math.floor(n.w||ni.clientWidth||en.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||ni.clientHeight||en.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function Dh(){if(!Di)return;const n=Lh(),e=Math.max(160,Math.floor(Number(se.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(se.canvasHeight)||n.h));if(e===n.w&&t===n.h){cc(n.w,n.h),Gr();return}yl=!0,Di.setSize(e,t),yl=!1,Gr()}Dh();Nh();{const n=Lh();(Number(se.canvasWidth)!==n.w||Number(se.canvasHeight)!==n.h)&&rn({canvasWidth:n.w,canvasHeight:n.h}),cc(n.w,n.h)}Xl((n,e)=>{if(e==="cameraProjection"&&nc(),(e==="cameraProjection"||e==="cameraAxoPreset")&&ic(),(e==="postProcessEnabled"||e==="bloomEnabled"||e==="bokehEnabled"||e==="bloomStrength"||e==="bloomRadius"||e==="bloomThreshold"||e==="bokehFocus"||e==="bokehAperture"||e==="bokehMaxBlur")&&xh(),(e==="canvasWidth"||e==="canvasHeight")&&Dh(),e==="canvasScale"&&Nh(),e==="maxParticles"){const t=Math.max(4096,Math.floor(se.maxParticles||4096));se.maxParticles!==t&&(se.maxParticles=t),Pt.setMaxParticles(t)}if(e==="fftSize"){const t=bl(se.fftSize);if(se.fftSize!==t){Dt("fftSize",t);return}Pe.setFftSize(t)}if(e==="ruleBlocks"){const t=Pt.onRulesChanged(se.ruleBlocks??[]);Pe.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),oc(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});window.addEventListener("seesound:view-reset-camera",Eh);window.addEventListener("seesound:view-fit-camera",Ch);window.addEventListener("seesound:view-clean-canvas",wh);L2(document.getElementById("control-panel"));var td,nd;oc((nd=(td=Pt.getRuleCompileState)==null?void 0:td.call(Pt))==null?void 0:nd.requiredInputsByTarget);const Qu=Array.isArray(se.ruleBlocks)?se.ruleBlocks.length:0,hi=Pt.getRuleCompileState(),ed=(hi==null?void 0:hi.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${ya} compile=${ed} rules=${Qu}`,{schemaVersion:ya,compileStatus:ed,compileTimeMs:(hi==null?void 0:hi.compileTimeMs)??0,compileError:(hi==null?void 0:hi.compileError)??null,ruleCount:Qu,debug:Yv});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
