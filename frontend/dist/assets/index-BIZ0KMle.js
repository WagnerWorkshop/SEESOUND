(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="171",Kd=0,ic=1,Jd=2,Cu=1,Qd=2,ii=3,Li=0,vn=1,ai=2,Ri=0,Ci=1,_r=2,rc=3,sc=4,Eo=5,oi=100,eh=101,th=102,nh=103,ih=104,rh=200,sh=201,ah=202,oh=203,ns=204,is=205,lh=206,ch=207,uh=208,dh=209,hh=210,fh=211,ph=212,mh=213,gh=214,wo=0,To=1,Ao=2,Mr=3,Ro=4,Co=5,Po=6,No=7,Pu=0,_h=1,vh=2,Pi=0,xh=1,bh=2,yh=3,Mh=4,Sh=5,Eh=6,wh=7,Nu=300,Sr=301,Er=302,Lo=303,Fo=304,wa=306,Do=1e3,Xi=1001,Io=1002,zn=1003,Th=1004,gs=1005,$n=1006,Ba=1007,$i=1008,fi=1009,Lu=1010,Fu=1011,rs=1012,bl=1013,ji=1014,li=1015,ds=1016,yl=1017,Ml=1018,wr=1020,Du=35902,Iu=1021,Uu=1022,Bn=1023,Ou=1024,ku=1025,br=1026,Tr=1027,Bu=1028,Sl=1029,zu=1030,El=1031,wl=1033,Js=33776,Qs=33777,ea=33778,ta=33779,Uo=35840,Oo=35841,ko=35842,Bo=35843,zo=36196,Ho=37492,Go=37496,Vo=37808,Wo=37809,Xo=37810,$o=37811,qo=37812,Yo=37813,jo=37814,Zo=37815,Ko=37816,Jo=37817,Qo=37818,el=37819,tl=37820,nl=37821,na=36492,il=36494,rl=36495,Hu=36283,sl=36284,al=36285,ol=36286,Ah=3200,Rh=3201,Ch=0,Ph=1,Ti="",Rn="srgb",Ar="srgb-linear",ca="linear",Lt="srgb",er=7680,ac=519,Nh=512,Lh=513,Fh=514,Gu=515,Dh=516,Ih=517,Uh=518,Oh=519,oc=35044,kh=35048,lc="300 es",ci=2e3,ua=2001;class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const Jr=Math.PI/180,ss=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Tl(n,e){return(n%e+e)%e}function Bh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zh(n,e,t){return n!==e?(t-n)/(e-n):0}function Qr(n,e,t){return(1-t)*n+t*e}function Hh(n,e,t,i){return Qr(n,e,1-Math.exp(-t*i))}function Gh(n,e=1){return e-Math.abs(Tl(n,e*2)-e)}function Vh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $h(n,e){return n+Math.random()*(e-n)}function qh(n){return n*(.5-Math.random())}function Yh(n){n!==void 0&&(cc=n);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jh(n){return n*Jr}function Zh(n){return n*ss}function Kh(n){return(n&n-1)===0&&n!==0}function Jh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ef(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*d,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*d,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*d,o*c);break;case"XZX":n.set(o*d,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*d,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Al={DEG2RAD:Jr,RAD2DEG:ss,generateUUID:Lr,clamp:xt,euclideanModulo:Tl,mapLinear:Bh,inverseLerp:zh,lerp:Qr,damp:Hh,pingpong:Gh,smoothstep:Vh,smootherstep:Wh,randInt:Xh,randFloat:$h,randFloatSpread:qh,seededRandom:Yh,degToRad:jh,radToDeg:Zh,isPowerOfTwo:Kh,ceilPowerOfTwo:Jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:ef,normalize:un,denormalize:mr};class Ft{constructor(e=0,t=0){Ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,i,r,s,a,o,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],m=i[5],g=i[8],v=r[0],p=r[3],h=r[6],T=r[1],y=r[4],x=r[7],R=r[2],A=r[5],C=r[8];return s[0]=a*v+o*T+l*R,s[3]=a*p+o*y+l*A,s[6]=a*h+o*x+l*C,s[1]=c*v+d*T+f*R,s[4]=c*p+d*y+f*A,s[7]=c*h+d*x+f*C,s[2]=u*v+m*T+g*R,s[5]=u*p+m*y+g*A,s[8]=u*h+m*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*s,m=c*s-a*l,g=t*f+i*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=u*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new ft;function Vu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tf(){const n=da("canvas");return n.style.display="block",n}const uc={};function gr(n){n in uc||(uc[n]=!0,console.warn(n))}function nf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function rf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dc=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const n={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Lt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?ca:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ar]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:dc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:dc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}const Tt=af();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let tr;class of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=da("canvas")),tr.width=e.width,tr.height=e.height;const i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lf=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ha(r[a].image)):s.push(Ha(r[a]))}else s=Ha(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cf=0;class xn extends Nr{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=Xi,r=Xi,s=$n,a=$i,o=Bn,l=fi,c=xn.DEFAULT_ANISOTROPY,d=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Lr(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Nu;xn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],g=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(m+1)/2,R=(h+1)/2,A=(d+u)/4,C=(f+v)/4,N=(g+p)/4;return y>x&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=N/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-v)/T,this.z=(u-d)/T,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends Nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xu extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class df extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const u=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==u||c!==m||d!==g){let p=1-o;const h=l*u+c*m+d*g+f*v,T=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,h*T);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const x=o*T;if(l=l*p+u*x,c=c*p+m*x,d=d*p+g*x,f=f*p+v*x,p===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+d*f+l*m-c*u,e[t+1]=l*g+d*u+c*f-o*m,e[t+2]=c*g+d*m+o*u-l*f,e[t+3]=d*g-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),u=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*m*g,this._y=c*m*f-u*d*g,this._z=c*d*g+u*m*f,this._w=c*d*f-u*m*g;break;case"YXZ":this._x=u*d*f+c*m*g,this._y=c*m*f-u*d*g,this._z=c*d*g-u*m*f,this._w=c*d*f+u*m*g;break;case"ZXY":this._x=u*d*f-c*m*g,this._y=c*m*f+u*d*g,this._z=c*d*g+u*m*f,this._w=c*d*f-u*m*g;break;case"ZYX":this._x=u*d*f-c*m*g,this._y=c*m*f+u*d*g,this._z=c*d*g-u*m*f,this._w=c*d*f+u*m*g;break;case"YZX":this._x=u*d*f+c*m*g,this._y=c*m*f+u*d*g,this._z=c*d*g-u*m*f,this._w=c*d*f-u*m*g;break;case"XZY":this._x=u*d*f-c*m*g,this._y=c*m*f-u*d*g,this._z=c*d*g+u*m*f,this._w=c*d*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new z,fc=new hs;class fs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),vs.subVectors(this.max,Br),nr.subVectors(e.a,Br),ir.subVectors(e.b,Br),rr.subVectors(e.c,Br),xi.subVectors(ir,nr),bi.subVectors(rr,ir),Fi.subVectors(nr,rr);let t=[0,-xi.z,xi.y,0,-bi.z,bi.y,0,-Fi.z,Fi.y,xi.z,0,-xi.x,bi.z,0,-bi.x,Fi.z,0,-Fi.x,-xi.y,xi.x,0,-bi.y,bi.x,0,-Fi.y,Fi.x,0];return!Va(t,nr,ir,rr,vs)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,nr,ir,rr,vs))?!1:(xs.crossVectors(xi,bi),t=[xs.x,xs.y,xs.z],Va(t,nr,ir,rr,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,_s=new fs,nr=new z,ir=new z,rr=new z,xi=new z,bi=new z,Fi=new z,Br=new z,vs=new z,xs=new z,Di=new z;function Va(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Di.fromArray(n,s);const o=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),d=i.dot(Di);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const hf=new fs,zr=new z,Wa=new z;class ps{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Wa)),this.expandByPoint(zr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new z,Xa=new z,bs=new z,yi=new z,$a=new z,ys=new z,qa=new z;class Rl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xa.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Xa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=yi.dot(this.direction),l=-yi.dot(bs),c=yi.lengthSq(),d=Math.abs(1-a*a);let f,u,m,g;if(d>0)if(f=a*l-o,u=a*o-l,g=s*d,f>=0)if(u>=-g)if(u<=g){const v=1/d;f*=v,u*=v,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xa).addScaledVector(bs,u),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){$a.subVectors(t,e),ys.subVectors(i,e),qa.crossVectors($a,ys);let a=this.direction.dot(qa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(ys.crossVectors(yi,ys));if(l<0)return null;const c=o*this.direction.dot($a.cross(yi));if(c<0||l+c>a)return null;const d=-o*yi.dot(qa);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,i,r,s,a,o,l,c,d,f,u,m,g,v,p){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,f,u,m,g,v,p)}set(e,t,i,r,s,a,o,l,c,d,f,u,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),a=1/sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,m=a*f,g=o*d,v=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*f,g=c*d,v=c*f;t[0]=u+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*f,g=c*d,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*f,g=o*d,v=o*f;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-u*f,t[8]=g*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+g,t[10]=u-v*f}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+v,t[5]=a*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Mi.crossVectors(i,yn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Mi.crossVectors(i,yn)),Mi.normalize(),Ms.crossVectors(yn,Mi),r[0]=Mi.x,r[4]=Ms.x,r[8]=yn.x,r[1]=Mi.y,r[5]=Ms.y,r[9]=yn.y,r[2]=Mi.z,r[6]=Ms.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],T=i[3],y=i[7],x=i[11],R=i[15],A=r[0],C=r[4],N=r[8],w=r[12],b=r[1],P=r[5],$=r[9],X=r[13],J=r[2],V=r[6],H=r[10],se=r[14],q=r[3],le=r[7],ve=r[11],Ee=r[15];return s[0]=a*A+o*b+l*J+c*q,s[4]=a*C+o*P+l*V+c*le,s[8]=a*N+o*$+l*H+c*ve,s[12]=a*w+o*X+l*se+c*Ee,s[1]=d*A+f*b+u*J+m*q,s[5]=d*C+f*P+u*V+m*le,s[9]=d*N+f*$+u*H+m*ve,s[13]=d*w+f*X+u*se+m*Ee,s[2]=g*A+v*b+p*J+h*q,s[6]=g*C+v*P+p*V+h*le,s[10]=g*N+v*$+p*H+h*ve,s[14]=g*w+v*X+p*se+h*Ee,s[3]=T*A+y*b+x*J+R*q,s[7]=T*C+y*P+x*V+R*le,s[11]=T*N+y*$+x*H+R*ve,s[15]=T*w+y*X+x*se+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*o*u+i*c*u+r*o*m-i*l*m)+v*(+t*l*m-t*c*u+s*a*u-r*a*m+r*c*d-s*l*d)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+h*(-r*o*d-t*l*f+t*o*u+r*a*f-i*a*u+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],T=f*p*c-v*u*c+v*l*m-o*p*m-f*l*h+o*u*h,y=g*u*c-d*p*c-g*l*m+a*p*m+d*l*h-a*u*h,x=d*v*c-g*f*c+g*o*m-a*v*m-d*o*h+a*f*h,R=g*f*l-d*v*l-g*o*u+a*v*u+d*o*p-a*f*p,A=t*T+i*y+r*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=T*C,e[1]=(v*u*s-f*p*s-v*r*m+i*p*m+f*r*h-i*u*h)*C,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*C,e[3]=(f*l*s-o*u*s-f*r*c+i*u*c+o*r*m-i*l*m)*C,e[4]=y*C,e[5]=(d*p*s-g*u*s+g*r*m-t*p*m-d*r*h+t*u*h)*C,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*h-t*l*h)*C,e[7]=(a*u*s-d*l*s+d*r*c-t*u*c-a*r*m+t*l*m)*C,e[8]=x*C,e[9]=(g*f*s-d*v*s-g*i*m+t*v*m+d*i*h-t*f*h)*C,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*h+t*o*h)*C,e[11]=(d*o*s-a*f*s-d*i*c+t*f*c+a*i*m-t*o*m)*C,e[12]=R*C,e[13]=(d*v*r-g*f*r+g*i*u-t*v*u-d*i*p+t*f*p)*C,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*p-t*o*p)*C,e[15]=(a*f*r-d*o*r+d*i*l-t*f*l-a*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,f=o+o,u=s*c,m=s*d,g=s*f,v=a*d,p=a*f,h=o*f,T=l*c,y=l*d,x=l*f,R=i.x,A=i.y,C=i.z;return r[0]=(1-(v+h))*R,r[1]=(m+x)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(m-x)*A,r[5]=(1-(u+h))*A,r[6]=(p+T)*A,r[7]=0,r[8]=(g+y)*C,r[9]=(p-T)*C,r[10]=(1-(u+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const a=sr.set(r[4],r[5],r[6]).length(),o=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,d=1/a,f=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ci){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r);let m,g;if(o===ci)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ua)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ci){const l=this.elements,c=1/(t-e),d=1/(i-r),f=1/(a-s),u=(t+e)*c,m=(i+r)*d;let g,v;if(o===ci)g=(a+s)*f,v=-2*f;else if(o===ua)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const sr=new z,In=new Gt,ff=new z(0,0,0),pf=new z(1,1,1),Mi=new z,Ms=new z,yn=new z,pc=new Gt,mc=new hs;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mf=0;const gc=new z,ar=new hs,Qn=new Gt,Ss=new z,Hr=new z,gf=new z,_f=new hs,_c=new z(1,0,0),vc=new z(0,1,0),xc=new z(0,0,1),bc={type:"added"},vf={type:"removed"},or={type:"childadded",child:null},Ya={type:"childremoved",child:null};class fn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new z,t=new pi,i=new hs,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(_c,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_c,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ss.copy(e):Ss.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Hr,Ss,this.up):Qn.lookAt(Ss,Hr,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Qn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new z(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new z,ei=new z,ja=new z,ti=new z,lr=new z,cr=new z,yc=new z,Za=new z,Ka=new z,Ja=new z,Qa=new $t,eo=new $t,to=new $t;class kn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Un.subVectors(e,t),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Un.subVectors(r,t),ei.subVectors(i,t),ja.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(ei),l=Un.dot(ja),c=ei.dot(ei),d=ei.dot(ja),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(c*l-o*d)*u,g=(a*d-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Qa.setScalar(0),eo.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(e,t),eo.fromBufferAttribute(e,i),to.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qa,s.x),a.addScaledVector(eo,s.y),a.addScaledVector(to,s.z),a}static isFrontFacing(e,t,i,r){return Un.subVectors(i,t),ei.subVectors(e,t),Un.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Un.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,i),cr.subVectors(s,i),Za.subVectors(e,i);const l=lr.dot(Za),c=cr.dot(Za);if(l<=0&&c<=0)return t.copy(i);Ka.subVectors(e,r);const d=lr.dot(Ka),f=cr.dot(Ka);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(lr,a);Ja.subVectors(e,s);const m=lr.dot(Ja),g=cr.dot(Ja);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(cr,o);const p=d*g-m*f;if(p<=0&&f-d>=0&&m-g>=0)return yc.subVectors(s,r),o=(f-d)/(f-d+(m-g)),t.copy(r).addScaledVector(yc,o);const h=1/(p+v+u);return a=v*h,o=u*h,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Es={h:0,s:0,l:0};function no(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class At{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Tt.workingColorSpace){if(e=Tl(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=no(a,s,e+1/3),this.g=no(a,s,e),this.b=no(a,s,e-1/3)}return Tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const i=qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Tt.fromWorkingColorSpace(on.copy(this),e),Math.round(xt(on.r*255,0,255))*65536+Math.round(xt(on.g*255,0,255))*256+Math.round(xt(on.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Rn){Tt.fromWorkingColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Es);const i=Qr(Si.h,Es.h,t),r=Qr(Si.s,Es.s,t),s=Qr(Si.l,Es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new At;At.NAMES=qu;let xf=0;class Fr extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ci,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ns,this.blendDst=is,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ns&&(i.blendSrc=this.blendSrc),this.blendDst!==is&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yu extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new z,ws=new Ft;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}}class ju extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zu extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bf=0;const An=new Gt,io=new fn,ur=new z,Mn=new fs,Gr=new fs,Qt=new z;class Gn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?Zu:ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Hn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Mn.min,Gr.min),Mn.expandByPoint(Qt),Qt.addVectors(Mn.max,Gr.max),Mn.expandByPoint(Qt)):(Mn.expandByPoint(Gr.min),Mn.expandByPoint(Gr.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Qt.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),Qt.add(ur)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new z,l[N]=new z;const c=new z,d=new z,f=new z,u=new Ft,m=new Ft,g=new Ft,v=new z,p=new z;function h(N,w,b){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),u.fromBufferAttribute(s,N),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),d.sub(c),f.sub(c),m.sub(u),g.sub(u);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),o[N].add(v),o[w].add(v),o[b].add(v),l[N].add(p),l[w].add(p),l[b].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,w=T.length;N<w;++N){const b=T[N],P=b.start,$=b.count;for(let X=P,J=P+$;X<J;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new z,x=new z,R=new z,A=new z;function C(N){R.fromBufferAttribute(r,N),A.copy(R);const w=o[N];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,P)}for(let N=0,w=T.length;N<w;++N){const b=T[N],P=b.start,$=b.count;for(let X=P,J=P+$;X<J;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let h=0;h<d;h++)u[g++]=c[m++]}return new hn(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new Gt,Ii=new Rl,Ts=new ps,Sc=new z,As=new z,Rs=new z,Cs=new z,ro=new z,Ps=new z,Ec=new z,Ns=new z;class ui extends fn{constructor(e=new Gn,t=new Yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(ro.fromBufferAttribute(f,e),a?Ps.addScaledVector(ro,d):Ps.addScaledVector(ro.sub(t),d))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Ts.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Ts,Sc)===null||Ii.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Mc.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Mc),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=T,R=y;x<R;x+=3){const A=o.getX(x),C=o.getX(x+1),N=o.getX(x+2);r=Ls(this,h,e,i,c,d,f,A,C,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const T=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=Ls(this,a,e,i,c,d,f,T,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],h=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=T,R=y;x<R;x+=3){const A=x,C=x+1,N=x+2;r=Ls(this,h,e,i,c,d,f,A,C,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const T=p,y=p+1,x=p+2;r=Ls(this,a,e,i,c,d,f,T,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function yf(n,e,t,i,r,s,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Li,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ns);return c<t.near||c>t.far?null:{distance:c,point:Ns.clone(),object:n}}function Ls(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,As),n.getVertexPosition(l,Rs),n.getVertexPosition(c,Cs);const d=yf(n,e,t,i,As,Rs,Cs,Ec);if(d){const f=new z;kn.getBarycoord(Ec,As,Rs,Cs,f),r&&(d.uv=kn.getInterpolatedAttribute(r,o,l,c,f,new Ft)),s&&(d.uv1=kn.getInterpolatedAttribute(s,o,l,c,f,new Ft)),a&&(d.normal=kn.getInterpolatedAttribute(a,o,l,c,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};kn.getNormal(As,Rs,Cs,u.normal),d.face=u,d.barycoord=f}return d}class ms extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(d,3)),this.setAttribute("uv",new Hn(f,2));function g(v,p,h,T,y,x,R,A,C,N,w){const b=x/C,P=R/N,$=x/2,X=R/2,J=A/2,V=C+1,H=N+1;let se=0,q=0;const le=new z;for(let ve=0;ve<H;ve++){const Ee=ve*P-X;for(let Ze=0;Ze<V;Ze++){const re=Ze*b-$;le[v]=re*T,le[p]=Ee*y,le[h]=J,c.push(le.x,le.y,le.z),le[v]=0,le[p]=0,le[h]=A>0?1:-1,d.push(le.x,le.y,le.z),f.push(Ze/C),f.push(1-ve/N),se+=1}}for(let ve=0;ve<N;ve++)for(let Ee=0;Ee<C;Ee++){const Ze=u+Ee+V*ve,re=u+Ee+V*(ve+1),O=u+(Ee+1)+V*(ve+1),ie=u+(Ee+1)+V*ve;l.push(Ze,re,ie),l.push(re,O,ie),q+=6}o.addGroup(m,q,w),m+=q,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=Rr(n[t]);for(const r in i)e[r]=i[r]}return e}function Mf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ku(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Sf={clone:Rr,merge:dn};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ju extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new z,wc=new Ft,Tc=new Ft;class Pn extends Ju{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Tc),t.subVectors(Tc,wc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,hr=1;class Tf extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(dr,hr,e,t);r.layers=this.layers,this.add(r);const s=new Pn(dr,hr,e,t);s.layers=this.layers,this.add(s);const a=new Pn(dr,hr,e,t);a.layers=this.layers,this.add(a);const o=new Pn(dr,hr,e,t);o.layers=this.layers,this.add(o);const l=new Pn(dr,hr,e,t);l.layers=this.layers,this.add(l);const c=new Pn(dr,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qu extends xn{constructor(e,t,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ri});s.uniforms.tEquirect.value=t;const a=new ui(r,s),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=$n),new Tf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Rf extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const so=new z,Cf=new z,Pf=new ft;class zi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=so.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(so),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pf.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new ps,Fs=new z;class ed{constructor(e=new zi,t=new zi,i=new zi,r=new zi,s=new zi,a=new zi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],m=r[8],g=r[9],v=r[10],p=r[11],h=r[12],T=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,u-c,p-m,x-h).normalize(),i[1].setComponents(l+s,u+c,p+m,x+h).normalize(),i[2].setComponents(l+a,u+d,p+g,x+T).normalize(),i[3].setComponents(l-a,u-d,p-g,x-T).normalize(),i[4].setComponents(l-o,u-f,p-v,x-y).normalize(),t===ci)i[5].setComponents(l+o,u+f,p+v,x+y).normalize();else if(t===ua)i[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class td extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ha=new z,fa=new z,Ac=new Gt,Vr=new Rl,Ds=new ps,ao=new z,Rc=new z;class Nf extends fn{constructor(e=new Gn,t=new td){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ha.fromBufferAttribute(t,r-1),fa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ha.distanceTo(fa);e.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;Ac.copy(r).invert(),Vr.copy(e.ray).applyMatrix4(Ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const h=d.getX(v),T=d.getX(v+1),y=Is(this,e,Vr,l,h,T);y&&t.push(y)}if(this.isLineLoop){const v=d.getX(g-1),p=d.getX(m),h=Is(this,e,Vr,l,v,p);h&&t.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const h=Is(this,e,Vr,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=Is(this,e,Vr,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Is(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(ha.fromBufferAttribute(a,r),fa.fromBufferAttribute(a,s),t.distanceSqToSegment(ha,fa,ao,Rc)>i)return;ao.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ao);if(!(l<e.near||l>e.far))return{distance:l,point:Rc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Cc=new z,Pc=new z;class Lf extends Nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Cc.fromBufferAttribute(t,r),Pc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ff extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nc=new Gt,ll=new Rl,Us=new ps,Os=new z;class Df extends fn{constructor(e=new Gn,t=new Ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(r),Us.radius+=s,e.ray.intersectsSphere(Us)===!1)return;Nc.copy(r).invert(),ll.copy(e.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,v=m;g<v;g++){const p=c.getX(g);Os.fromBufferAttribute(f,p),Lc(Os,p,l,r,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,v=m;g<v;g++)Os.fromBufferAttribute(f,g),Lc(Os,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lc(n,e,t,i,r,s,a){const o=ll.distanceSqToPoint(n);if(o<t){const l=new z;ll.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ks extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nd extends xn{constructor(e,t,i,r,s,a,o,l,c,d=br){if(d!==br&&d!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===br&&(i=ji),i===void 0&&d===Tr&&(i=wr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ta extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=t/l,m=[],g=[],v=[],p=[];for(let h=0;h<d;h++){const T=h*u-a;for(let y=0;y<c;y++){const x=y*f-s;g.push(x,-T,0),v.push(0,0,1),p.push(y/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const y=T+c*h,x=T+c*(h+1),R=T+1+c*(h+1),A=T+1+c*h;m.push(y,x,A),m.push(x,R,A)}this.setIndex(m),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(v,3)),this.setAttribute("uv",new Hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class If extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uf extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class id extends Ju{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Of extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kf extends Lf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Gn;r.setAttribute("position",new Hn(t,3)),r.setAttribute("color",new Hn(i,3));const s=new td({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new At,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Fc(n,e,t,i){const r=Bf(i);switch(t){case Iu:return n*e;case Ou:return n*e;case ku:return n*e*2;case Bu:return n*e/r.components*r.byteLength;case Sl:return n*e/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case El:return n*e*2/r.components*r.byteLength;case Uu:return n*e*3/r.components*r.byteLength;case Bn:return n*e*4/r.components*r.byteLength;case wl:return n*e*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:case Bo:return Math.max(n,16)*Math.max(e,8)/4;case Uo:case ko:return Math.max(n,8)*Math.max(e,8)/2;case zo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case na:case il:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hu:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case al:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(n){switch(n){case fi:case Lu:return{byteLength:1,components:1};case rs:case Fu:case ds:return{byteLength:2,components:1};case yl:case Ml:return{byteLength:2,components:4};case ji:case bl:case li:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zf(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){const g=f[u],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
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
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,tp=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,Bp=`struct PhysicalMaterial {
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
}`,zp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,Ym=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Hf,alphahash_pars_fragment:Gf,alphamap_fragment:Vf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:$f,aomap_fragment:qf,aomap_pars_fragment:Yf,batching_pars_vertex:jf,batching_vertex:Zf,begin_vertex:Kf,beginnormal_vertex:Jf,bsdfs:Qf,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:rp,clipping_planes_vertex:sp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:hp,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:xp,envmap_common_pars_fragment:bp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Fp,envmap_vertex:Sp,fog_vertex:Ep,fog_pars_vertex:wp,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Np,lights_pars_begin:Lp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Up,lights_phong_pars_fragment:Op,lights_physical_fragment:kp,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:Hp,lights_fragment_end:Gp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:$p,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:jp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Qp,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:rm,normal_fragment_maps:sm,normal_pars_fragment:am,normal_pars_vertex:om,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:xm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:Em,shadowmask_pars_fragment:wm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Nm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Fm,transmission_fragment:Dm,transmission_pars_fragment:Im,uv_pars_fragment:Um,uv_pars_vertex:Om,uv_vertex:km,worldpos_vertex:Bm,background_vert:zm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:Vm,cube_vert:Wm,cube_frag:Xm,depth_vert:$m,depth_frag:qm,distanceRGBA_vert:Ym,distanceRGBA_frag:jm,equirect_vert:Zm,equirect_frag:Km,linedashed_vert:Jm,linedashed_frag:Qm,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:hg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:vg,sprite_frag:xg},Re={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xn={basic:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:dn([Re.points,Re.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:dn([Re.common,Re.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:dn([Re.sprite,Re.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:dn([Re.common,Re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:dn([Re.lights,Re.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Xn.physical={uniforms:dn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Bs={r:0,b:0,g:0},Oi=new pi,bg=new Gt;function yg(n,e,t,i,r,s,a){const o=new At(0);let l=s===!0?0:1,c,d,f=null,u=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const R=g(y);R===null?h(o,l):R&&R.isColor&&(h(R,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===wa)?(d===void 0&&(d=new ui(new ms(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Rr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Oi)),d.material.toneMapped=Tt.getTransfer(R.colorSpace)!==Lt,(f!==R||u!==R.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=R,u=R.version,m=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ui(new Ta(2,2),new mi({name:"BackgroundMaterial",uniforms:Rr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||u!==R.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,u=R.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,x){y.getRGB(Bs,Ku(n)),i.buffers.color.setClear(Bs.r,Bs.g,Bs.b,x,a)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:v,addToRenderList:p,dispose:T}}function Mg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(b,P,$,X,J){let V=!1;const H=f(X,$,P);s!==H&&(s=H,c(s.object)),V=m(b,X,$,J),V&&g(b,X,$,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(b,P,$,X),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function d(b){return n.deleteVertexArray(b)}function f(b,P,$){const X=$.wireframe===!0;let J=i[b.id];J===void 0&&(J={},i[b.id]=J);let V=J[P.id];V===void 0&&(V={},J[P.id]=V);let H=V[X];return H===void 0&&(H=u(l()),V[X]=H),H}function u(b){const P=[],$=[],X=[];for(let J=0;J<t;J++)P[J]=0,$[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:$,attributeDivisors:X,object:b,attributes:{},index:null}}function m(b,P,$,X){const J=s.attributes,V=P.attributes;let H=0;const se=$.getAttributes();for(const q in se)if(se[q].location>=0){const ve=J[q];let Ee=V[q];if(Ee===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Ee=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Ee=b.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==X}function g(b,P,$,X){const J={},V=P.attributes;let H=0;const se=$.getAttributes();for(const q in se)if(se[q].location>=0){let ve=V[q];ve===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));const Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),J[q]=Ee,H++}s.attributes=J,s.attributesNum=H,s.index=X}function v(){const b=s.newAttributes;for(let P=0,$=b.length;P<$;P++)b[P]=0}function p(b){h(b,0)}function h(b,P){const $=s.newAttributes,X=s.enabledAttributes,J=s.attributeDivisors;$[b]=1,X[b]===0&&(n.enableVertexAttribArray(b),X[b]=1),J[b]!==P&&(n.vertexAttribDivisor(b,P),J[b]=P)}function T(){const b=s.newAttributes,P=s.enabledAttributes;for(let $=0,X=P.length;$<X;$++)P[$]!==b[$]&&(n.disableVertexAttribArray($),P[$]=0)}function y(b,P,$,X,J,V,H){H===!0?n.vertexAttribIPointer(b,P,$,J,V):n.vertexAttribPointer(b,P,$,X,J,V)}function x(b,P,$,X){v();const J=X.attributes,V=$.getAttributes(),H=P.defaultAttributeValues;for(const se in V){const q=V[se];if(q.location>=0){let le=J[se];if(le===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const ve=le.normalized,Ee=le.itemSize,Ze=e.get(le);if(Ze===void 0)continue;const re=Ze.buffer,O=Ze.type,ie=Ze.bytesPerElement,de=O===n.INT||O===n.UNSIGNED_INT||le.gpuType===bl;if(le.isInterleavedBufferAttribute){const ae=le.data,be=ae.stride,qe=le.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<q.locationSize;Ve++)h(q.location+Ve,ae.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)p(q.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Ve=0;Ve<q.locationSize;Ve++)y(q.location+Ve,Ee/q.locationSize,O,ve,be*ie,(qe+Ee/q.locationSize*Ve)*ie,de)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)h(q.location+ae,le.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<q.locationSize;ae++)p(q.location+ae);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ae=0;ae<q.locationSize;ae++)y(q.location+ae,Ee/q.locationSize,O,ve,Ee*ie,Ee/q.locationSize*ae*ie,de)}}else if(H!==void 0){const ve=H[se];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(q.location,ve);break;case 3:n.vertexAttrib3fv(q.location,ve);break;case 4:n.vertexAttrib4fv(q.location,ve);break;default:n.vertexAttrib1fv(q.location,ve)}}}}T()}function R(){N();for(const b in i){const P=i[b];for(const $ in P){const X=P[$];for(const J in X)d(X[J].object),delete X[J];delete P[$]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const $ in P){const X=P[$];for(const J in X)d(X[J].object),delete X[J];delete P[$]}delete i[b.id]}function C(b){for(const P in i){const $=i[P];if($[b.id]===void 0)continue;const X=$[b.id];for(const J in X)d(X[J].object),delete X[J];delete $[b.id]}}function N(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function Sg(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,f){f!==0&&(n.drawArraysInstanced(i,c,d,f),t.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];t.update(m,i,1)}function l(c,d,f,u){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v]*u[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Eg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==fi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==li&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function wg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new zi,o=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||r;return r=u,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const T=s?0:i,y=T*4;let x=h.clippingState||null;l.value=x,x=d(g,u,y,m);for(let R=0;R!==y;++R)x[R]=t[R];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,m,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const h=m+v*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,x=m;y!==v;++y,x+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Tg(n){let e=new WeakMap;function t(a,o){return o===Lo?a.mapping=Sr:o===Fo&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lo||o===Fo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Af(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vr=4,Dc=[.125,.215,.35,.446,.526,.582],Wi=20,oo=new id,Ic=new At;let lo=null,co=0,uo=0,ho=!1;const Hi=(1+Math.sqrt(5))/2,fr=1/Hi,Uc=[new z(-Hi,fr,0),new z(Hi,fr,0),new z(-fr,0,Hi),new z(fr,0,Hi),new z(0,Hi,-fr),new z(0,Hi,fr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,uo),this._renderer.xr.enabled=ho,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ds,format:Bn,colorSpace:Ar,depthBuffer:!1},r=kc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ag(s)),this._blurMaterial=Rg(s,e,t)}return r}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,i,r){const o=new Pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Ic),d.toneMapping=Pi,d.autoClear=!1;const m=new Yu({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new ui(new ms,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Ic),v=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;zs(r,T*y,h>2?y:0,y,y),d.setRenderTarget(r),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ui(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Uc[(r-s-1)%Uc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ui(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),v=s/g,p=isFinite(s)?1+Math.floor(d*v):Wi;p>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const h=[];let T=0;for(let C=0;C<Wi;++C){const N=C/v,w=Math.exp(-N*N/2);h.push(w),C===0?T+=w:C<p&&(T+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/T;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const x=this._sizeLods[r],R=3*x*(r>y-vr?r-y+vr:0),A=4*(this._cubeSize-x);zs(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(f,oo)}}function Ag(n){const e=[],t=[],i=[];let r=n;const s=n-vr+1+Dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-vr?l=Dc[a-n+vr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,v=3,p=2,h=1,T=new Float32Array(v*g*m),y=new Float32Array(p*g*m),x=new Float32Array(h*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,N=A>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];T.set(w,v*g*A),y.set(u,p*g*A);const b=[A,A,A,A,A,A];x.set(b,h*g*A)}const R=new Gn;R.setAttribute("position",new hn(T,v)),R.setAttribute("uv",new hn(y,p)),R.setAttribute("faceIndex",new hn(x,h)),e.push(R),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kc(n,e,t){const i=new Zi(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rg(n,e,t){const i=new Float32Array(Wi),r=new z(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Bc(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function zc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function Cg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lo||l===Fo,d=l===Sr||l===Er;if(c||d){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Oc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Oc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Pg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ng(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function c(f){const u=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let y=0,x=T.length;y<x;y+=3){const R=T[y+0],A=T[y+1],C=T[y+2];u.push(R,A,A,C,C,R)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,x=T.length/3-1;y<x;y+=3){const R=y+0,A=y+1,C=y+2;u.push(R,A,A,C,C,R)}}else return;const p=new(Vu(u)?Zu:ju)(u,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function d(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Lg(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,m){n.drawElements(i,m,s,u*a),t.update(m,i,1)}function c(u,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,u*a,g),t.update(m,i,g))}function d(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,i,1)}function f(u,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<u.length;h++)c(u[h]/a,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,v,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*v[T];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Fg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Dg(n,e,t){const i=new WeakMap,r=new $t;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=o.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*R*4*f),C=new Xu(A,x,R,f);C.type=li,C.needsUpdate=!0;const N=y*4;for(let b=0;b<f;b++){const P=p[b],$=h[b],X=T[b],J=x*R*4*b;for(let V=0;V<P.count;V++){const H=V*N;m===!0&&(r.fromBufferAttribute(P,V),A[J+H+0]=r.x,A[J+H+1]=r.y,A[J+H+2]=r.z,A[J+H+3]=0),g===!0&&(r.fromBufferAttribute($,V),A[J+H+4]=r.x,A[J+H+5]=r.y,A[J+H+6]=r.z,A[J+H+7]=0),v===!0&&(r.fromBufferAttribute(X,V),A[J+H+8]=r.x,A[J+H+9]=r.y,A[J+H+10]=r.z,A[J+H+11]=X.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new Ft(x,R)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Ig(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const sd=new xn,Hc=new nd(1,1),ad=new Xu,od=new df,ld=new Qu,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),$c=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Aa(n,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;$c.set(i),n.uniformMatrix2fv(this.addr,!1,$c),Kt(t,i)}}function Hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Xc.set(i),n.uniformMatrix3fv(this.addr,!1,Xc),Kt(t,i)}}function Gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Wc.set(i),n.uniformMatrix4fv(this.addr,!1,Wc),Kt(t,i)}}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hc.compareFunction=Gu,s=Hc):s=sd,t.setTexture2D(e||s,r)}function Jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||od,r)}function Qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ld,r)}function e_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ad,r)}function t_(n){switch(n){case 5126:return Ug;case 35664:return Og;case 35665:return kg;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return $g;case 5125:return qg;case 36294:return Yg;case 36295:return jg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(n,e){n.uniform1fv(this.addr,e)}function i_(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function r_(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function s_(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function a_(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function o_(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function l_(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function c_(n,e){n.uniform1iv(this.addr,e)}function u_(n,e){n.uniform2iv(this.addr,e)}function d_(n,e){n.uniform3iv(this.addr,e)}function h_(n,e){n.uniform4iv(this.addr,e)}function f_(n,e){n.uniform1uiv(this.addr,e)}function p_(n,e){n.uniform2uiv(this.addr,e)}function m_(n,e){n.uniform3uiv(this.addr,e)}function g_(n,e){n.uniform4uiv(this.addr,e)}function __(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||sd,s[a])}function v_(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||od,s[a])}function x_(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ld,s[a])}function b_(n,e,t){const i=this.cache,r=e.length,s=Aa(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ad,s[a])}function y_(n){switch(n){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return h_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return b_}}class M_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}}class S_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y_(t.type)}}class E_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function qc(n,e){n.seq.push(e),n.map[e.id]=e}function w_(n,e,t){const i=n.name,r=i.length;for(fo.lastIndex=0;;){const s=fo.exec(i),a=fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qc(t,c===void 0?new M_(o,n,e):new S_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new E_(o),qc(t,f)),t=f}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);w_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const T_=37297;let A_=0;function R_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const jc=new ft;function C_(n){Tt._getMatrix(jc,Tt.workingColorSpace,n);const e=`mat3( ${jc.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+R_(n.getShaderSource(e),a)}else return r}function P_(n,e){const t=C_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N_(n,e){let t;switch(e){case xh:t="Linear";break;case bh:t="Reinhard";break;case yh:t="Cineon";break;case Mh:t="ACESFilmic";break;case Eh:t="AgX";break;case wh:t="Neutral";break;case Sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new z;function L_(){Tt.getLuminanceCoefficients(Hs);const n=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function D_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function I_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function jr(n){return n!==""}function Kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(n){return n.replace(U_,k_)}const O_=new Map;function k_(n,e){let t=pt[e];if(t===void 0){const i=O_.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(n){return n.replace(B_,z_)}function z_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function H_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function W_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pu:e="ENVMAP_BLENDING_MULTIPLY";break;case _h:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function X_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=H_(t),c=G_(t),d=V_(t),f=W_(t),u=X_(t),m=F_(t),g=D_(s),v=r.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),h.length>0&&(h+=`
`)):(p=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),h=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?N_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),L_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),a=cl(a),a=Kc(a,t),a=Jc(a,t),o=cl(o),o=Kc(o,t),o=Jc(o,t),a=Qc(a),o=Qc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=T+p+a,x=T+h+o,R=Yc(r,r.VERTEX_SHADER,y),A=Yc(r,r.FRAGMENT_SHADER,x);r.attachShader(v,R),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(v).trim(),X=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(A).trim();let V=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,A);else{const se=Zc(r,R,"vertex"),q=Zc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+se+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(X===""||J==="")&&(H=!1);H&&(P.diagnostics={runnable:V,programLog:$,vertexShader:{log:X,prefix:p},fragmentShader:{log:J,prefix:h}})}r.deleteShader(R),r.deleteShader(A),N=new ia(r,v),w=I_(r,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,T_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let q_=0;class Y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new j_(e),t.set(e,i)),i}}class j_{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}}function Z_(n,e,t,i,r,s,a){const o=new $u,l=new Y_,c=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,b,P,$,X){const J=$.fog,V=X.geometry,H=w.isMeshStandardMaterial?$.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),q=se&&se.mapping===wa?se.image.height:null,le=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ee=ve!==void 0?ve.length:0;let Ze=0;V.morphAttributes.position!==void 0&&(Ze=1),V.morphAttributes.normal!==void 0&&(Ze=2),V.morphAttributes.color!==void 0&&(Ze=3);let re,O,ie,de;if(le){const E=Xn[le];re=E.vertexShader,O=E.fragmentShader}else re=w.vertexShader,O=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const ae=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),qe=X.isInstancedMesh===!0,Ve=X.isBatchedMesh===!0,yt=!!w.map,ct=!!w.matcap,Rt=!!se,D=!!w.aoMap,it=!!w.lightMap,He=!!w.bumpMap,Qe=!!w.normalMap,Ce=!!w.displacementMap,dt=!!w.emissiveMap,Ie=!!w.metalnessMap,S=!!w.roughnessMap,_=w.anisotropy>0,L=w.clearcoat>0,G=w.dispersion>0,K=w.iridescence>0,te=w.sheen>0,we=w.transmission>0,ge=_&&!!w.anisotropyMap,Pe=L&&!!w.clearcoatMap,ut=L&&!!w.clearcoatNormalMap,fe=L&&!!w.clearcoatRoughnessMap,Le=K&&!!w.iridescenceMap,We=K&&!!w.iridescenceThicknessMap,et=te&&!!w.sheenColorMap,Fe=te&&!!w.sheenRoughnessMap,Ke=!!w.specularMap,tt=!!w.specularColorMap,Ge=!!w.specularIntensityMap,I=we&&!!w.transmissionMap,xe=we&&!!w.thicknessMap,ee=!!w.gradientMap,Q=!!w.alphaMap,Me=w.alphaTest>0,Se=!!w.alphaHash,ke=!!w.extensions;let St=Pi;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=n.toneMapping);const Ct={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:re,fragmentShader:O,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&X._colorsTexture!==null,instancing:qe,instancingColor:qe&&X.instanceColor!==null,instancingMorph:qe&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ar,alphaToCoverage:!!w.alphaToCoverage,map:yt,matcap:ct,envMap:Rt,envMapMode:Rt&&se.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:it,bumpMap:He,normalMap:Qe,displacementMap:u&&Ce,emissiveMap:dt,normalMapObjectSpace:Qe&&w.normalMapType===Ph,normalMapTangentSpace:Qe&&w.normalMapType===Ch,metalnessMap:Ie,roughnessMap:S,anisotropy:_,anisotropyMap:ge,clearcoat:L,clearcoatMap:Pe,clearcoatNormalMap:ut,clearcoatRoughnessMap:fe,dispersion:G,iridescence:K,iridescenceMap:Le,iridescenceThicknessMap:We,sheen:te,sheenColorMap:et,sheenRoughnessMap:Fe,specularMap:Ke,specularColorMap:tt,specularIntensityMap:Ge,transmission:we,transmissionMap:I,thicknessMap:xe,gradientMap:ee,opaque:w.transparent===!1&&w.blending===Ci&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:Me,alphaHash:Se,combine:w.combine,mapUv:yt&&v(w.map.channel),aoMapUv:D&&v(w.aoMap.channel),lightMapUv:it&&v(w.lightMap.channel),bumpMapUv:He&&v(w.bumpMap.channel),normalMapUv:Qe&&v(w.normalMap.channel),displacementMapUv:Ce&&v(w.displacementMap.channel),emissiveMapUv:dt&&v(w.emissiveMap.channel),metalnessMapUv:Ie&&v(w.metalnessMap.channel),roughnessMapUv:S&&v(w.roughnessMap.channel),anisotropyMapUv:ge&&v(w.anisotropyMap.channel),clearcoatMapUv:Pe&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(w.sheenRoughnessMap.channel),specularMapUv:Ke&&v(w.specularMap.channel),specularColorMapUv:tt&&v(w.specularColorMap.channel),specularIntensityMapUv:Ge&&v(w.specularIntensityMap.channel),transmissionMapUv:I&&v(w.transmissionMap.channel),thicknessMapUv:xe&&v(w.thicknessMap.channel),alphaMapUv:Q&&v(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Qe||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(yt||Q),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:yt&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Lt,decodeVideoTextureEmissive:dt&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(T(b,w),y(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function T(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const b=g[w.type];let P;if(b){const $=Xn[b];P=Sf.clone($.uniforms)}else P=w.uniforms;return P}function R(w,b){let P;for(let $=0,X=d.length;$<X;$++){const J=d[$];if(J.cacheKey===b){P=J,++P.usedTimes;break}}return P===void 0&&(P=new $_(n,b,w,s),d.push(P)),P}function A(w){if(--w.usedTimes===0){const b=d.indexOf(w);d[b]=d[d.length-1],d.pop(),w.destroy()}}function C(w){l.remove(w)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:N}}function K_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function J_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,u,m,g,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=u,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,u,m,g,v,p){const h=a(f,u,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,u,m,g,v,p){const h=a(f,u,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,u){t.length>1&&t.sort(f||J_),i.length>1&&i.sort(u||tu),r.length>1&&r.sort(u||tu)}function d(){for(let f=e,u=n.length;f<u;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function Q_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new nu,n.set(i,[a])):r>=s.length?(a=new nu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ev(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new At};break;case"SpotLight":t={position:new z,direction:new z,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function tv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nv=0;function iv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rv(n){const e=new ev,t=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Gt,a=new Gt;function o(c){let d=0,f=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,T=0,y=0,x=0,R=0,A=0,C=0;c.sort(iv);for(let w=0,b=c.length;w<b;w++){const P=c[w],$=P.color,X=P.intensity,J=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=$.r*X,f+=$.g*X,u+=$.b*X;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],X);C++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,q=t.get(P);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=H,m++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy($).multiplyScalar(X),H.distance=J,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;const se=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,se.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=se.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=V,x++}v++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy($).multiplyScalar(X),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=H,p++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const se=P.shadow,q=t.get(P);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(X),H.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[h]=H,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==T||N.numPointShadows!==y||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=T,N.numPointShadows=y,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=C,i.version=nv++)}function l(c,d){let f=0,u=0,m=0,g=0,v=0;const p=d.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),f++}else if(y.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function iu(n){const e=new rv(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function sv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new iu(n),e.set(r,[o])):s>=a.length?(o=new iu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`;function lv(n,e,t){let i=new ed;const r=new Ft,s=new Ft,a=new $t,o=new If({depthPacking:Rh}),l=new Uf,c={},d=t.maxTextureSize,f={[Li]:vn,[vn]:Li,[ai]:ai},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:av,fragmentShader:ov}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ui(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let h=this.type;this.render=function(A,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Ri),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const X=h!==ii&&this.type===ii,J=h===ii&&this.type!==ii;for(let V=0,H=A.length;V<H;V++){const se=A[V],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const le=q.getFrameExtents();if(r.multiply(le),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/le.x),r.x=s.x*le.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/le.y),r.y=s.y*le.y,q.mapSize.y=s.y)),q.map===null||X===!0||J===!0){const Ee=this.type!==ii?{minFilter:zn,magFilter:zn}:{};q.map!==null&&q.map.dispose(),q.map=new Zi(r.x,r.y,Ee),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ve=q.getViewportCount();for(let Ee=0;Ee<ve;Ee++){const Ze=q.getViewport(Ee);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),$.viewport(a),q.updateMatrices(se,Ee),i=q.getFrustum(),x(C,N,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===ii&&T(q,N),q.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(w,b,P)};function T(A,C){const N=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,N,u,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,N,m,v,null)}function y(A,C,N,w){let b=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=N.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=b.uuid,X=C.uuid;let J=c[$];J===void 0&&(J={},c[$]=J);let V=J[X];V===void 0&&(V=b.clone(),J[X]=V,C.addEventListener("dispose",R)),b=V}if(b.visible=C.visible,b.wireframe=C.wireframe,w===ii?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:f[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=n.properties.get(b);$.light=N}return b}function x(A,C,N,w,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const X=e.update(A),J=A.material;if(Array.isArray(J)){const V=X.groups;for(let H=0,se=V.length;H<se;H++){const q=V[H],le=J[q.materialIndex];if(le&&le.visible){const ve=y(A,le,w,b);A.onBeforeShadow(n,A,C,N,X,ve,q),n.renderBufferDirect(N,null,X,ve,A,q),A.onAfterShadow(n,A,C,N,X,ve,q)}}}else if(J.visible){const V=y(A,J,w,b);A.onBeforeShadow(n,A,C,N,X,V,null),n.renderBufferDirect(N,null,X,V,A,null),A.onAfterShadow(n,A,C,N,X,V,null)}}const $=A.children;for(let X=0,J=$.length;X<J;X++)x($[X],C,N,w,b)}function R(A){A.target.removeEventListener("dispose",R);for(const N in c){const w=c[N],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const cv={[wo]:To,[Ao]:Po,[Ro]:No,[Mr]:Co,[To]:wo,[Po]:Ao,[No]:Ro,[Co]:Mr};function uv(n,e){function t(){let I=!1;const xe=new $t;let ee=null;const Q=new $t(0,0,0,0);return{setMask:function(Me){ee!==Me&&!I&&(n.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){I=Me},setClear:function(Me,Se,ke,St,Ct){Ct===!0&&(Me*=St,Se*=St,ke*=St),xe.set(Me,Se,ke,St),Q.equals(xe)===!1&&(n.clearColor(Me,Se,ke,St),Q.copy(xe))},reset:function(){I=!1,ee=null,Q.set(-1,0,0,0)}}}function i(){let I=!1,xe=!1,ee=null,Q=null,Me=null;return{setReversed:function(Se){if(xe!==Se){const ke=e.get("EXT_clip_control");xe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const St=Me;Me=null,this.setClear(St)}xe=Se},getReversed:function(){return xe},setTest:function(Se){Se?ae(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Se){ee!==Se&&!I&&(n.depthMask(Se),ee=Se)},setFunc:function(Se){if(xe&&(Se=cv[Se]),Q!==Se){switch(Se){case wo:n.depthFunc(n.NEVER);break;case To:n.depthFunc(n.ALWAYS);break;case Ao:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case Ro:n.depthFunc(n.EQUAL);break;case Co:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=Se}},setLocked:function(Se){I=Se},setClear:function(Se){Me!==Se&&(xe&&(Se=1-Se),n.clearDepth(Se),Me=Se)},reset:function(){I=!1,ee=null,Q=null,Me=null,xe=!1}}}function r(){let I=!1,xe=null,ee=null,Q=null,Me=null,Se=null,ke=null,St=null,Ct=null;return{setTest:function(E){I||(E?ae(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(E){xe!==E&&!I&&(n.stencilMask(E),xe=E)},setFunc:function(E,k,j){(ee!==E||Q!==k||Me!==j)&&(n.stencilFunc(E,k,j),ee=E,Q=k,Me=j)},setOp:function(E,k,j){(Se!==E||ke!==k||St!==j)&&(n.stencilOp(E,k,j),Se=E,ke=k,St=j)},setLocked:function(E){I=E},setClear:function(E){Ct!==E&&(n.clearStencil(E),Ct=E)},reset:function(){I=!1,xe=null,ee=null,Q=null,Me=null,Se=null,ke=null,St=null,Ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,m=[],g=null,v=!1,p=null,h=null,T=null,y=null,x=null,R=null,A=null,C=new At(0,0,0),N=0,w=!1,b=null,P=null,$=null,X=null,J=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,se=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=se>=2);let le=null,ve={};const Ee=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),re=new $t().fromArray(Ee),O=new $t().fromArray(Ze);function ie(I,xe,ee,Q){const Me=new Uint8Array(4),Se=n.createTexture();n.bindTexture(I,Se),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ee;ke++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(xe+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Se}const de={};de[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Mr),He(!1),Qe(ic),ae(n.CULL_FACE),D(Ri);function ae(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function be(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function qe(I,xe){return f[I]!==xe?(n.bindFramebuffer(I,xe),f[I]=xe,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ve(I,xe){let ee=m,Q=!1;if(I){ee=u.get(xe),ee===void 0&&(ee=[],u.set(xe,ee));const Me=I.textures;if(ee.length!==Me.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,ke=Me.length;Se<ke;Se++)ee[Se]=n.COLOR_ATTACHMENT0+Se;ee.length=Me.length,Q=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,Q=!0);Q&&n.drawBuffers(ee)}function yt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const ct={[oi]:n.FUNC_ADD,[eh]:n.FUNC_SUBTRACT,[th]:n.FUNC_REVERSE_SUBTRACT};ct[nh]=n.MIN,ct[ih]=n.MAX;const Rt={[rh]:n.ZERO,[sh]:n.ONE,[ah]:n.SRC_COLOR,[ns]:n.SRC_ALPHA,[hh]:n.SRC_ALPHA_SATURATE,[uh]:n.DST_COLOR,[lh]:n.DST_ALPHA,[oh]:n.ONE_MINUS_SRC_COLOR,[is]:n.ONE_MINUS_SRC_ALPHA,[dh]:n.ONE_MINUS_DST_COLOR,[ch]:n.ONE_MINUS_DST_ALPHA,[fh]:n.CONSTANT_COLOR,[ph]:n.ONE_MINUS_CONSTANT_COLOR,[mh]:n.CONSTANT_ALPHA,[gh]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,xe,ee,Q,Me,Se,ke,St,Ct,E){if(I===Ri){v===!0&&(be(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),I!==Eo){if(I!==p||E!==w){if((h!==oi||x!==oi)&&(n.blendEquation(n.FUNC_ADD),h=oi,x=oi),E)switch(I){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _r:n.blendFunc(n.ONE,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _r:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,y=null,R=null,A=null,C.set(0,0,0),N=0,p=I,w=E}return}Me=Me||xe,Se=Se||ee,ke=ke||Q,(xe!==h||Me!==x)&&(n.blendEquationSeparate(ct[xe],ct[Me]),h=xe,x=Me),(ee!==T||Q!==y||Se!==R||ke!==A)&&(n.blendFuncSeparate(Rt[ee],Rt[Q],Rt[Se],Rt[ke]),T=ee,y=Q,R=Se,A=ke),(St.equals(C)===!1||Ct!==N)&&(n.blendColor(St.r,St.g,St.b,Ct),C.copy(St),N=Ct),p=I,w=!1}function it(I,xe){I.side===ai?be(n.CULL_FACE):ae(n.CULL_FACE);let ee=I.side===vn;xe&&(ee=!ee),He(ee),I.blending===Ci&&I.transparent===!1?D(Ri):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function Qe(I){I!==Kd?(ae(n.CULL_FACE),I!==P&&(I===ic?n.cullFace(n.BACK):I===Jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=I}function Ce(I){I!==$&&(H&&n.lineWidth(I),$=I)}function dt(I,xe,ee){I?(ae(n.POLYGON_OFFSET_FILL),(X!==xe||J!==ee)&&(n.polygonOffset(xe,ee),X=xe,J=ee)):be(n.POLYGON_OFFSET_FILL)}function Ie(I){I?ae(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+V-1),le!==I&&(n.activeTexture(I),le=I)}function _(I,xe,ee){ee===void 0&&(le===null?ee=n.TEXTURE0+V-1:ee=le);let Q=ve[ee];Q===void 0&&(Q={type:void 0,texture:void 0},ve[ee]=Q),(Q.type!==I||Q.texture!==xe)&&(le!==ee&&(n.activeTexture(ee),le=ee),n.bindTexture(I,xe||de[I]),Q.type=I,Q.texture=xe)}function L(){const I=ve[le];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(I){re.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function Fe(I){O.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),O.copy(I))}function Ke(I,xe){let ee=c.get(xe);ee===void 0&&(ee=new WeakMap,c.set(xe,ee));let Q=ee.get(I);Q===void 0&&(Q=n.getUniformBlockIndex(xe,I.name),ee.set(I,Q))}function tt(I,xe){const Q=c.get(xe).get(I);l.get(xe)!==Q&&(n.uniformBlockBinding(xe,Q,I.__bindingPointIndex),l.set(xe,Q))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},le=null,ve={},f={},u=new WeakMap,m=[],g=null,v=!1,p=null,h=null,T=null,y=null,x=null,R=null,A=null,C=new At(0,0,0),N=0,w=!1,b=null,P=null,$=null,X=null,J=null,re.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:be,bindFramebuffer:qe,drawBuffers:Ve,useProgram:yt,setBlending:D,setMaterial:it,setFlipSided:He,setCullFace:Qe,setLineWidth:Ce,setPolygonOffset:dt,setScissorTest:Ie,activeTexture:S,bindTexture:_,unbindTexture:L,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:Le,texImage3D:We,updateUBOMapping:Ke,uniformBlockBinding:tt,texStorage2D:ut,texStorage3D:fe,texSubImage2D:te,texSubImage3D:we,compressedTexSubImage2D:ge,compressedTexSubImage3D:Pe,scissor:et,viewport:Fe,reset:Ge}}function dv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,d=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):da("canvas")}function v(S,_,L){let G=1;const K=Ie(S);if((K.width>L||K.height>L)&&(G=L/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const te=Math.floor(G*K.width),we=Math.floor(G*K.height);f===void 0&&(f=g(te,we));const ge=_?g(te,we):f;return ge.width=te,ge.height=we,ge.getContext("2d").drawImage(S,0,0,te,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+te+"x"+we+")."),ge}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,_,L,G,K=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=_;if(_===n.RED&&(L===n.FLOAT&&(te=n.R32F),L===n.HALF_FLOAT&&(te=n.R16F),L===n.UNSIGNED_BYTE&&(te=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(te=n.R8UI),L===n.UNSIGNED_SHORT&&(te=n.R16UI),L===n.UNSIGNED_INT&&(te=n.R32UI),L===n.BYTE&&(te=n.R8I),L===n.SHORT&&(te=n.R16I),L===n.INT&&(te=n.R32I)),_===n.RG&&(L===n.FLOAT&&(te=n.RG32F),L===n.HALF_FLOAT&&(te=n.RG16F),L===n.UNSIGNED_BYTE&&(te=n.RG8)),_===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(te=n.RG8UI),L===n.UNSIGNED_SHORT&&(te=n.RG16UI),L===n.UNSIGNED_INT&&(te=n.RG32UI),L===n.BYTE&&(te=n.RG8I),L===n.SHORT&&(te=n.RG16I),L===n.INT&&(te=n.RG32I)),_===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(te=n.RGB8UI),L===n.UNSIGNED_SHORT&&(te=n.RGB16UI),L===n.UNSIGNED_INT&&(te=n.RGB32UI),L===n.BYTE&&(te=n.RGB8I),L===n.SHORT&&(te=n.RGB16I),L===n.INT&&(te=n.RGB32I)),_===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),L===n.UNSIGNED_INT&&(te=n.RGBA32UI),L===n.BYTE&&(te=n.RGBA8I),L===n.SHORT&&(te=n.RGBA16I),L===n.INT&&(te=n.RGBA32I)),_===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),_===n.RGBA){const we=K?ca:Tt.getTransfer(G);L===n.FLOAT&&(te=n.RGBA32F),L===n.HALF_FLOAT&&(te=n.RGBA16F),L===n.UNSIGNED_BYTE&&(te=we===Lt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(S,_){let L;return S?_===null||_===ji||_===wr?L=n.DEPTH24_STENCIL8:_===li?L=n.DEPTH32F_STENCIL8:_===rs&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ji||_===wr?L=n.DEPTH_COMPONENT24:_===li?L=n.DEPTH_COMPONENT32F:_===rs&&(L=n.DEPTH_COMPONENT16),L}function R(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==zn&&S.minFilter!==$n?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){const _=S.target;_.removeEventListener("dispose",A),N(_),_.isVideoTexture&&d.delete(_)}function C(S){const _=S.target;_.removeEventListener("dispose",C),b(_)}function N(S){const _=i.get(S);if(_.__webglInit===void 0)return;const L=S.source,G=u.get(L);if(G){const K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(S),Object.keys(G).length===0&&u.delete(L)}i.remove(S)}function w(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const L=S.source,G=u.get(L);delete G[_.__cacheKey],a.memory.textures--}function b(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[G][K]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=S.textures;for(let G=0,K=L.length;G<K;G++){const te=i.get(L[G]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(L[G])}i.remove(S)}let P=0;function $(){P=0}function X(){const S=P;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function J(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function V(S,_){const L=i.get(S);if(S.isVideoTexture&&Ce(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const G=S.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(L,S,_);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function H(S,_){const L=i.get(S);if(S.version>0&&L.__version!==S.version){O(L,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function se(S,_){const L=i.get(S);if(S.version>0&&L.__version!==S.version){O(L,S,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function q(S,_){const L=i.get(S);if(S.version>0&&L.__version!==S.version){ie(L,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const le={[Do]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Io]:n.MIRRORED_REPEAT},ve={[zn]:n.NEAREST,[Th]:n.NEAREST_MIPMAP_NEAREST,[gs]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ee={[Nh]:n.NEVER,[Oh]:n.ALWAYS,[Lh]:n.LESS,[Gu]:n.LEQUAL,[Fh]:n.EQUAL,[Uh]:n.GEQUAL,[Dh]:n.GREATER,[Ih]:n.NOTEQUAL};function Ze(S,_){if(_.type===li&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$n||_.magFilter===Ba||_.magFilter===gs||_.magFilter===$i||_.minFilter===$n||_.minFilter===Ba||_.minFilter===gs||_.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,le[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,le[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,le[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ve[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zn||_.minFilter!==gs&&_.minFilter!==$i||_.type===li&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function re(S,_){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let K=u.get(G);K===void 0&&(K={},u.set(G,K));const te=J(_);if(te!==S.__cacheKey){K[te]===void 0&&(K[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[te].usedTimes++;const we=K[S.__cacheKey];we!==void 0&&(K[S.__cacheKey].usedTimes--,we.usedTimes===0&&w(_)),S.__cacheKey=te,S.__webglTexture=K[te].texture}return L}function O(S,_,L){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const K=re(S,_),te=_.source;t.bindTexture(G,S.__webglTexture,n.TEXTURE0+L);const we=i.get(te);if(te.version!==we.__version||K===!0){t.activeTexture(n.TEXTURE0+L);const ge=Tt.getPrimaries(Tt.workingColorSpace),Pe=_.colorSpace===Ti?null:Tt.getPrimaries(_.colorSpace),ut=_.colorSpace===Ti||ge===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let fe=v(_.image,!1,r.maxTextureSize);fe=dt(_,fe);const Le=s.convert(_.format,_.colorSpace),We=s.convert(_.type);let et=y(_.internalFormat,Le,We,_.colorSpace,_.isVideoTexture);Ze(G,_);let Fe;const Ke=_.mipmaps,tt=_.isVideoTexture!==!0,Ge=we.__version===void 0||K===!0,I=te.dataReady,xe=R(_,fe);if(_.isDepthTexture)et=x(_.format===Tr,_.type),Ge&&(tt?t.texStorage2D(n.TEXTURE_2D,1,et,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,et,fe.width,fe.height,0,Le,We,null));else if(_.isDataTexture)if(Ke.length>0){tt&&Ge&&t.texStorage2D(n.TEXTURE_2D,xe,et,Ke[0].width,Ke[0].height);for(let ee=0,Q=Ke.length;ee<Q;ee++)Fe=Ke[ee],tt?I&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Fe.width,Fe.height,Le,We,Fe.data):t.texImage2D(n.TEXTURE_2D,ee,et,Fe.width,Fe.height,0,Le,We,Fe.data);_.generateMipmaps=!1}else tt?(Ge&&t.texStorage2D(n.TEXTURE_2D,xe,et,fe.width,fe.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Le,We,fe.data)):t.texImage2D(n.TEXTURE_2D,0,et,fe.width,fe.height,0,Le,We,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){tt&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,et,Ke[0].width,Ke[0].height,fe.depth);for(let ee=0,Q=Ke.length;ee<Q;ee++)if(Fe=Ke[ee],_.format!==Bn)if(Le!==null)if(tt){if(I)if(_.layerUpdates.size>0){const Me=Fc(Fe.width,Fe.height,_.format,_.type);for(const Se of _.layerUpdates){const ke=Fe.data.subarray(Se*Me/Fe.data.BYTES_PER_ELEMENT,(Se+1)*Me/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Se,Fe.width,Fe.height,1,Le,ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Fe.width,Fe.height,fe.depth,Le,Fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,et,Fe.width,Fe.height,fe.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Fe.width,Fe.height,fe.depth,Le,We,Fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,et,Fe.width,Fe.height,fe.depth,0,Le,We,Fe.data)}else{tt&&Ge&&t.texStorage2D(n.TEXTURE_2D,xe,et,Ke[0].width,Ke[0].height);for(let ee=0,Q=Ke.length;ee<Q;ee++)Fe=Ke[ee],_.format!==Bn?Le!==null?tt?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Fe.width,Fe.height,Le,Fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?I&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Fe.width,Fe.height,Le,We,Fe.data):t.texImage2D(n.TEXTURE_2D,ee,et,Fe.width,Fe.height,0,Le,We,Fe.data)}else if(_.isDataArrayTexture)if(tt){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,et,fe.width,fe.height,fe.depth),I)if(_.layerUpdates.size>0){const ee=Fc(fe.width,fe.height,_.format,_.type);for(const Q of _.layerUpdates){const Me=fe.data.subarray(Q*ee/fe.data.BYTES_PER_ELEMENT,(Q+1)*ee/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,fe.width,fe.height,1,Le,We,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Le,We,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,fe.width,fe.height,fe.depth,0,Le,We,fe.data);else if(_.isData3DTexture)tt?(Ge&&t.texStorage3D(n.TEXTURE_3D,xe,et,fe.width,fe.height,fe.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Le,We,fe.data)):t.texImage3D(n.TEXTURE_3D,0,et,fe.width,fe.height,fe.depth,0,Le,We,fe.data);else if(_.isFramebufferTexture){if(Ge)if(tt)t.texStorage2D(n.TEXTURE_2D,xe,et,fe.width,fe.height);else{let ee=fe.width,Q=fe.height;for(let Me=0;Me<xe;Me++)t.texImage2D(n.TEXTURE_2D,Me,et,ee,Q,0,Le,We,null),ee>>=1,Q>>=1}}else if(Ke.length>0){if(tt&&Ge){const ee=Ie(Ke[0]);t.texStorage2D(n.TEXTURE_2D,xe,et,ee.width,ee.height)}for(let ee=0,Q=Ke.length;ee<Q;ee++)Fe=Ke[ee],tt?I&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Le,We,Fe):t.texImage2D(n.TEXTURE_2D,ee,et,Le,We,Fe);_.generateMipmaps=!1}else if(tt){if(Ge){const ee=Ie(fe);t.texStorage2D(n.TEXTURE_2D,xe,et,ee.width,ee.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,We,fe)}else t.texImage2D(n.TEXTURE_2D,0,et,Le,We,fe);p(_)&&h(G),we.__version=te.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ie(S,_,L){if(_.image.length!==6)return;const G=re(S,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const te=i.get(K);if(K.version!==te.__version||G===!0){t.activeTexture(n.TEXTURE0+L);const we=Tt.getPrimaries(Tt.workingColorSpace),ge=_.colorSpace===Ti?null:Tt.getPrimaries(_.colorSpace),Pe=_.colorSpace===Ti||we===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ut=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Le=[];for(let Q=0;Q<6;Q++)!ut&&!fe?Le[Q]=v(_.image[Q],!0,r.maxCubemapSize):Le[Q]=fe?_.image[Q].image:_.image[Q],Le[Q]=dt(_,Le[Q]);const We=Le[0],et=s.convert(_.format,_.colorSpace),Fe=s.convert(_.type),Ke=y(_.internalFormat,et,Fe,_.colorSpace),tt=_.isVideoTexture!==!0,Ge=te.__version===void 0||G===!0,I=K.dataReady;let xe=R(_,We);Ze(n.TEXTURE_CUBE_MAP,_);let ee;if(ut){tt&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ke,We.width,We.height);for(let Q=0;Q<6;Q++){ee=Le[Q].mipmaps;for(let Me=0;Me<ee.length;Me++){const Se=ee[Me];_.format!==Bn?et!==null?tt?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Se.width,Se.height,et,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Ke,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Se.width,Se.height,et,Fe,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Ke,Se.width,Se.height,0,et,Fe,Se.data)}}}else{if(ee=_.mipmaps,tt&&Ge){ee.length>0&&xe++;const Q=Ie(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ke,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(fe){tt?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le[Q].width,Le[Q].height,et,Fe,Le[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,Le[Q].width,Le[Q].height,0,et,Fe,Le[Q].data);for(let Me=0;Me<ee.length;Me++){const ke=ee[Me].image[Q].image;tt?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,ke.width,ke.height,et,Fe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Ke,ke.width,ke.height,0,et,Fe,ke.data)}}else{tt?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,et,Fe,Le[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ke,et,Fe,Le[Q]);for(let Me=0;Me<ee.length;Me++){const Se=ee[Me];tt?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,et,Fe,Se.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Ke,et,Fe,Se.image[Q])}}}p(_)&&h(n.TEXTURE_CUBE_MAP),te.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function de(S,_,L,G,K,te){const we=s.convert(L.format,L.colorSpace),ge=s.convert(L.type),Pe=y(L.internalFormat,we,ge,L.colorSpace),ut=i.get(_),fe=i.get(L);if(fe.__renderTarget=_,!ut.__hasExternalTextures){const Le=Math.max(1,_.width>>te),We=Math.max(1,_.height>>te);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,te,Pe,Le,We,_.depth,0,we,ge,null):t.texImage2D(K,te,Pe,Le,We,0,we,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Qe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,fe.__webglTexture,0,He(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,fe.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(S,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,te=x(_.stencilBuffer,K),we=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=He(_);Qe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,te,_.width,_.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,te,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{const G=_.textures;for(let K=0;K<G.length;K++){const te=G[K],we=s.convert(te.format,te.colorSpace),ge=s.convert(te.type),Pe=y(te.internalFormat,we,ge,te.colorSpace),ut=He(_);L&&Qe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Pe,_.width,_.height):Qe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const K=G.__webglTexture,te=He(_);if(_.depthTexture.format===br)Qe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===Tr)Qe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function qe(S){const _=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const G=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");be(_.__webglFramebuffer,S)}else if(L){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),ae(_.__webglDepthbuffer[G],S,!1);else{const K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ae(_.__webglDepthbuffer,S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(S,_,L){const G=i.get(S);_!==void 0&&de(G.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&qe(S)}function yt(S){const _=S.texture,L=i.get(S),G=i.get(_);S.addEventListener("dispose",C);const K=S.textures,te=S.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),te){L.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)L.__webglFramebuffer[ge][Pe]=n.createFramebuffer()}else L.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)L.__webglFramebuffer[ge]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(we)for(let ge=0,Pe=K.length;ge<Pe;ge++){const ut=i.get(K[ge]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&Qe(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ge=0;ge<K.length;ge++){const Pe=K[ge];L.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ge]);const ut=s.convert(Pe.format,Pe.colorSpace),fe=s.convert(Pe.type),Le=y(Pe.internalFormat,ut,fe,Pe.colorSpace,S.isXRRenderTarget===!0),We=He(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Le,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,L.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)de(L.__webglFramebuffer[ge][Pe],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else de(L.__webglFramebuffer[ge],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(_)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ge=0,Pe=K.length;ge<Pe;ge++){const ut=K[ge],fe=i.get(ut);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Ze(n.TEXTURE_2D,ut),de(L.__webglFramebuffer,S,ut,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),p(ut)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ge=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,G.__webglTexture),Ze(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)de(L.__webglFramebuffer[Pe],S,_,n.COLOR_ATTACHMENT0,ge,Pe);else de(L.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ge,0);p(_)&&h(ge),t.unbindTexture()}S.depthBuffer&&qe(S)}function ct(S){const _=S.textures;for(let L=0,G=_.length;L<G;L++){const K=_[L];if(p(K)){const te=T(S),we=i.get(K).__webglTexture;t.bindTexture(te,we),h(te),t.unbindTexture()}}}const Rt=[],D=[];function it(S){if(S.samples>0){if(Qe(S)===!1){const _=S.textures,L=S.width,G=S.height;let K=n.COLOR_BUFFER_BIT;const te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),ge=_.length>1;if(ge)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Pe]);const ut=i.get(_[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ut,0)}n.blitFramebuffer(0,0,L,G,0,0,L,G,K,n.NEAREST),l===!0&&(Rt.length=0,D.length=0,Rt.push(n.COLOR_ATTACHMENT0+Pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Rt.push(te),D.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,we.__webglColorRenderbuffer[Pe]);const ut=i.get(_[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function He(S){return Math.min(r.maxSamples,S.samples)}function Qe(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(S){const _=a.render.frame;d.get(S)!==_&&(d.set(S,_),S.update())}function dt(S,_){const L=S.colorSpace,G=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ar&&L!==Ti&&(Tt.getTransfer(L)===Lt?(G!==Bn||K!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function Ie(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Qe}function hv(n,e){function t(i,r=Ti){let s;const a=Tt.getTransfer(r);if(i===fi)return n.UNSIGNED_BYTE;if(i===yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===ds)return n.HALF_FLOAT;if(i===Iu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===Bn)return n.RGBA;if(i===Ou)return n.LUMINANCE;if(i===ku)return n.LUMINANCE_ALPHA;if(i===br)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===zu)return n.RG;if(i===El)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===Js||i===Qs||i===ea||i===ta)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===Oo||i===ko||i===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zo||i===Ho||i===Go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zo||i===Ho)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Go)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vo||i===Wo||i===Xo||i===$o||i===qo||i===Yo||i===jo||i===Zo||i===Ko||i===Jo||i===Qo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$o)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===il||i===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===na)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hu||i===sl||i===al||i===ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fv={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mi({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends Nr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,m=null,g=null;const v=new gv,p=t.getContextAttributes();let h=null,T=null;const y=[],x=[],R=new Ft;let A=null;const C=new Pn;C.viewport=new $t;const N=new Pn;N.viewport=new $t;const w=[C,N],b=new Of;let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let ie=y[O];return ie===void 0&&(ie=new po,y[O]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(O){let ie=y[O];return ie===void 0&&(ie=new po,y[O]=ie),ie.getGripSpace()},this.getHand=function(O){let ie=y[O];return ie===void 0&&(ie=new po,y[O]=ie),ie.getHandSpace()};function X(O){const ie=x.indexOf(O.inputSource);if(ie===-1)return;const de=y[ie];de!==void 0&&(de.update(O.inputSource,O.frame,c||a),de.dispatchEvent({type:O.type,data:O.inputSource}))}function J(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",V);for(let O=0;O<y.length;O++){const ie=x[O];ie!==null&&(x[O]=null,y[O].disconnect(ie))}P=null,$=null,v.reset(),e.setRenderTarget(h),m=null,u=null,f=null,r=null,T=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",J),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Zi(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,de=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?Tr:br,de=p.stencil?wr:ji);const be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new Zi(u.textureWidth,u.textureHeight,{format:Bn,type:fi,depthTexture:new nd(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(O){for(let ie=0;ie<O.removed.length;ie++){const de=O.removed[ie],ae=x.indexOf(de);ae>=0&&(x[ae]=null,y[ae].disconnect(de))}for(let ie=0;ie<O.added.length;ie++){const de=O.added[ie];let ae=x.indexOf(de);if(ae===-1){for(let qe=0;qe<y.length;qe++)if(qe>=x.length){x.push(de),ae=qe;break}else if(x[qe]===null){x[qe]=de,ae=qe;break}if(ae===-1)break}const be=y[ae];be&&be.connect(de)}}const H=new z,se=new z;function q(O,ie,de){H.setFromMatrixPosition(ie.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const ae=H.distanceTo(se),be=ie.projectionMatrix.elements,qe=de.projectionMatrix.elements,Ve=be[14]/(be[10]-1),yt=be[14]/(be[10]+1),ct=(be[9]+1)/be[5],Rt=(be[9]-1)/be[5],D=(be[8]-1)/be[0],it=(qe[8]+1)/qe[0],He=Ve*D,Qe=Ve*it,Ce=ae/(-D+it),dt=Ce*-D;if(ie.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(dt),O.translateZ(Ce),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),be[10]===-1)O.projectionMatrix.copy(ie.projectionMatrix),O.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ie=Ve+Ce,S=yt+Ce,_=He-dt,L=Qe+(ae-dt),G=ct*yt/S*Ie,K=Rt*yt/S*Ie;O.projectionMatrix.makePerspective(_,L,G,K,Ie,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function le(O,ie){ie===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(ie.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let ie=O.near,de=O.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(de=v.depthFar)),b.near=N.near=C.near=ie,b.far=N.far=C.far=de,(P!==b.near||$!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,$=b.far),C.layers.mask=O.layers.mask|2,N.layers.mask=O.layers.mask|4,b.layers.mask=C.layers.mask|N.layers.mask;const ae=O.parent,be=b.cameras;le(b,ae);for(let qe=0;qe<be.length;qe++)le(be[qe],ae);be.length===2?q(b,C,N):b.projectionMatrix.copy(C.projectionMatrix),ve(O,b,ae)};function ve(O,ie,de){de===null?O.matrix.copy(ie.matrixWorld):(O.matrix.copy(de.matrixWorld),O.matrix.invert(),O.matrix.multiply(ie.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(ie.projectionMatrix),O.projectionMatrixInverse.copy(ie.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ss*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Ee=null;function Ze(O,ie){if(d=ie.getViewerPose(c||a),g=ie,d!==null){const de=d.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ae=!1;de.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let qe=0;qe<de.length;qe++){const Ve=de[qe];let yt=null;if(m!==null)yt=m.getViewport(Ve);else{const Rt=f.getViewSubImage(u,Ve);yt=Rt.viewport,qe===0&&(e.setRenderTargetTextures(T,Rt.colorTexture,u.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(T))}let ct=w[qe];ct===void 0&&(ct=new Pn,ct.layers.enable(qe),ct.viewport=new $t,w[qe]=ct),ct.matrix.fromArray(Ve.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Ve.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(b.matrix.copy(ct.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(ct)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const qe=f.getDepthInformation(de[0]);qe&&qe.isValid&&qe.texture&&v.init(e,qe,r.renderState)}}for(let de=0;de<y.length;de++){const ae=x[de],be=y[de];ae!==null&&be!==void 0&&be.update(ae,ie,c||a)}Ee&&Ee(O,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const re=new rd;re.setAnimationLoop(Ze),this.setAnimationLoop=function(O){Ee=O},this.dispose=function(){}}}const ki=new pi,vv=new Gt;function xv(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Ku(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),d(p,h)):h.isMeshStandardMaterial?(s(p,h),u(p,h),h.isMeshPhysicalMaterial&&m(p,h,x)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,T,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===vn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===vn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h),y=T.envMap,x=T.envMapRotation;y&&(p.envMap.value=y,ki.copy(x),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),p.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(ki)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const x=y.program;i.uniformBlockBinding(T,x)}function c(T,y){let x=r[T.id];x===void 0&&(g(T),x=d(T),r[T.id]=x,T.addEventListener("dispose",p));const R=y.program;i.updateUBOMapping(T,R);const A=e.render.frame;s[T.id]!==A&&(u(T),s[T.id]=A)}function d(T){const y=f();T.__bindingPointIndex=y;const x=n.createBuffer(),R=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const y=r[T.id],x=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const N=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,b=N.length;w<b;w++){const P=N[w];if(m(P,A,w,R)===!0){const $=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let V=0;V<X.length;V++){const H=X[V],se=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,$+J,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,J),J+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,y,x,R){const A=T.value,C=y+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const N=R[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(T){const y=T.uniforms;let x=0;const R=16;for(let C=0,N=y.length;C<N;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,P=w.length;b<P;b++){const $=w[b],X=Array.isArray($.value)?$.value:[$.value];for(let J=0,V=X.length;J<V;J++){const H=X[J],se=v(H),q=x%R,le=q%se.boundary,ve=q+le;x+=le,ve!==0&&R-ve<se.storage&&(x+=R-ve),$.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=se.storage}}}const A=x%R;return A>0&&(x+=R-A),T.__size=x,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class cd{constructor(e={}){const{canvas:t=tf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Pi,this.toneMappingExposure=1;const x=this;let R=!1,A=0,C=0,N=null,w=-1,b=null;const P=new $t,$=new $t;let X=null;const J=new At(0);let V=0,H=t.width,se=t.height,q=1,le=null,ve=null;const Ee=new $t(0,0,H,se),Ze=new $t(0,0,H,se);let re=!1;const O=new ed;let ie=!1,de=!1;const ae=new Gt,be=new Gt,qe=new z,Ve=new $t,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Rt(){return N===null?q:1}let D=i;function it(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Se,!1),D===null){const F="webgl2";if(D=it(F,M),D===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let He,Qe,Ce,dt,Ie,S,_,L,G,K,te,we,ge,Pe,ut,fe,Le,We,et,Fe,Ke,tt,Ge,I;function xe(){He=new Pg(D),He.init(),tt=new hv(D,He),Qe=new Eg(D,He,e,tt),Ce=new uv(D,He),Qe.reverseDepthBuffer&&u&&Ce.buffers.depth.setReversed(!0),dt=new Fg(D),Ie=new K_,S=new dv(D,He,Ce,Ie,Qe,tt,dt),_=new Tg(x),L=new Cg(x),G=new zf(D),Ge=new Mg(D,G),K=new Ng(D,G,dt,Ge),te=new Ig(D,K,G,dt),et=new Dg(D,Qe,S),fe=new wg(Ie),we=new Z_(x,_,L,He,Qe,Ge,fe),ge=new xv(x,Ie),Pe=new Q_,ut=new sv(He),We=new yg(x,_,L,Ce,te,m,l),Le=new lv(x,te,Qe),I=new bv(D,dt,Qe,Ce),Fe=new Sg(D,He,dt),Ke=new Lg(D,He,dt),dt.programs=we.programs,x.capabilities=Qe,x.extensions=He,x.properties=Ie,x.renderLists=Pe,x.shadowMap=Le,x.state=Ce,x.info=dt}xe();const ee=new _v(x,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(H,se,!1))},this.getSize=function(M){return M.set(H,se)},this.setSize=function(M,F,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,se=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),W===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(H*q,se*q).floor()},this.setDrawingBufferSize=function(M,F,W){H=M,se=F,q=W,t.width=Math.floor(M*W),t.height=Math.floor(F*W),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,F,W,Y){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,F,W,Y),Ce.viewport(P.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Ze)},this.setScissor=function(M,F,W,Y){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,F,W,Y),Ce.scissor($.copy(Ze).multiplyScalar(q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){Ce.setScissorTest(re=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(M=!0,F=!0,W=!0){let Y=0;if(M){let U=!1;if(N!==null){const he=N.texture.format;U=he===wl||he===El||he===Sl}if(U){const he=N.texture.type,_e=he===fi||he===ji||he===rs||he===wr||he===yl||he===Ml,Ne=We.getClearColor(),De=We.getClearAlpha(),ue=Ne.r,Je=Ne.g,Oe=Ne.b;_e?(g[0]=ue,g[1]=Je,g[2]=Oe,g[3]=De,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=ue,v[1]=Je,v[2]=Oe,v[3]=De,D.clearBufferiv(D.COLOR,0,v))}else Y|=D.COLOR_BUFFER_BIT}F&&(Y|=D.DEPTH_BUFFER_BIT),W&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),We.dispose(),Pe.dispose(),ut.dispose(),Ie.dispose(),_.dispose(),L.dispose(),te.dispose(),Ge.dispose(),I.dispose(),we.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",B),ee.removeEventListener("sessionend",ne),ce.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=dt.autoReset,F=Le.enabled,W=Le.autoUpdate,Y=Le.needsUpdate,U=Le.type;xe(),dt.autoReset=M,Le.enabled=F,Le.autoUpdate=W,Le.needsUpdate=Y,Le.type=U}function Se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ke(M){const F=M.target;F.removeEventListener("dispose",ke),St(F)}function St(M){Ct(M),Ie.remove(M)}function Ct(M){const F=Ie.get(M).programs;F!==void 0&&(F.forEach(function(W){we.releaseProgram(W)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,W,Y,U,he){F===null&&(F=yt);const _e=U.isMesh&&U.matrixWorld.determinant()<0,Ne=me(M,F,W,Y,U);Ce.setMaterial(Y,_e);let De=W.index,ue=1;if(Y.wireframe===!0){if(De=K.getWireframeAttribute(W),De===void 0)return;ue=2}const Je=W.drawRange,Oe=W.attributes.position;let ot=Je.start*ue,ze=(Je.start+Je.count)*ue;he!==null&&(ot=Math.max(ot,he.start*ue),ze=Math.min(ze,(he.start+he.count)*ue)),De!==null?(ot=Math.max(ot,0),ze=Math.min(ze,De.count)):Oe!=null&&(ot=Math.max(ot,0),ze=Math.min(ze,Oe.count));const $e=ze-ot;if($e<0||$e===1/0)return;Ge.setup(U,Y,Ne,W,De);let lt,mt=Fe;if(De!==null&&(lt=G.get(De),mt=Ke,mt.setIndex(lt)),U.isMesh)Y.wireframe===!0?(Ce.setLineWidth(Y.wireframeLinewidth*Rt()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(U.isLine){let Xe=Y.linewidth;Xe===void 0&&(Xe=1),Ce.setLineWidth(Xe*Rt()),U.isLineSegments?mt.setMode(D.LINES):U.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else U.isPoints?mt.setMode(D.POINTS):U.isSprite&&mt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)mt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))mt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Xe=U._multiDrawStarts,Bt=U._multiDrawCounts,bt=U._multiDrawCount,jt=De?G.get(De).bytesPerElement:1,bn=Ie.get(Y).currentProgram.getUniforms();for(let Ut=0;Ut<bt;Ut++)bn.setValue(D,"_gl_DrawID",Ut),mt.render(Xe[Ut]/jt,Bt[Ut])}else if(U.isInstancedMesh)mt.renderInstances(ot,$e,U.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Bt=Math.min(W.instanceCount,Xe);mt.renderInstances(ot,$e,Bt)}else mt.render(ot,$e)};function E(M,F,W){M.transparent===!0&&M.side===ai&&M.forceSinglePass===!1?(M.side=vn,M.needsUpdate=!0,Et(M,F,W),M.side=Li,M.needsUpdate=!0,Et(M,F,W),M.side=ai):Et(M,F,W)}this.compile=function(M,F,W=null){W===null&&(W=M),h=ut.get(W),h.init(F),y.push(h),W.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),M!==W&&M.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const Y=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const he=U.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ne=he[_e];E(Ne,W,U),Y.add(Ne)}else E(he,W,U),Y.add(he)}),y.pop(),h=null,Y},this.compileAsync=function(M,F,W=null){const Y=this.compile(M,F,W);return new Promise(U=>{function he(){if(Y.forEach(function(_e){Ie.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){U(M);return}setTimeout(he,10)}He.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let k=null;function j(M){k&&k(M)}function B(){ce.stop()}function ne(){ce.start()}const ce=new rd;ce.setAnimationLoop(j),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(M){k=M,ee.setAnimationLoop(M),M===null?ce.stop():ce.start()},ee.addEventListener("sessionstart",B),ee.addEventListener("sessionend",ne),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,F,N),h=ut.get(M,y.length),h.init(F),y.push(h),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),O.setFromProjectionMatrix(be),de=this.localClippingEnabled,ie=fe.init(this.clippingPlanes,de),p=Pe.get(M,T.length),p.init(),T.push(p),ee.enabled===!0&&ee.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&ye(he,F,-1/0,x.sortObjects)}ye(M,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(le,ve),ct=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ct&&We.addToRenderList(p,M),this.info.render.frame++,ie===!0&&fe.beginShadows();const W=h.state.shadowsArray;Le.render(W,M,F),ie===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,U=p.transmissive;if(h.setupLights(),F.isArrayCamera){const he=F.cameras;if(U.length>0)for(let _e=0,Ne=he.length;_e<Ne;_e++){const De=he[_e];Ye(Y,U,M,De)}ct&&We.render(M);for(let _e=0,Ne=he.length;_e<Ne;_e++){const De=he[_e];Be(p,M,De,De.viewport)}}else U.length>0&&Ye(Y,U,M,F),ct&&We.render(M),Be(p,M,F);N!==null&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(x,M,F),Ge.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(h=y[y.length-1],ie===!0&&fe.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function ye(M,F,W,Y){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||O.intersectsSprite(M)){Y&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);const _e=te.update(M),Ne=M.material;Ne.visible&&p.push(M,_e,Ne,W,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||O.intersectsObject(M))){const _e=te.update(M),Ne=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ve.copy(_e.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){const De=_e.groups;for(let ue=0,Je=De.length;ue<Je;ue++){const Oe=De[ue],ot=Ne[Oe.materialIndex];ot&&ot.visible&&p.push(M,_e,ot,W,Ve.z,Oe)}}else Ne.visible&&p.push(M,_e,Ne,W,Ve.z,null)}}const he=M.children;for(let _e=0,Ne=he.length;_e<Ne;_e++)ye(he[_e],F,W,Y)}function Be(M,F,W,Y){const U=M.opaque,he=M.transmissive,_e=M.transparent;h.setupLightsView(W),ie===!0&&fe.setGlobalState(x.clippingPlanes,W),Y&&Ce.viewport(P.copy(Y)),U.length>0&&Ae(U,F,W),he.length>0&&Ae(he,F,W),_e.length>0&&Ae(_e,F,W),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ye(M,F,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Zi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ds:fi,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const he=h.state.transmissionRenderTarget[Y.id],_e=Y.viewport||P;he.setSize(_e.z,_e.w);const Ne=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(J),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),ct&&We.render(W);const De=x.toneMapping;x.toneMapping=Pi;const ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),ie===!0&&fe.setGlobalState(x.clippingPlanes,Y),Ae(M,W,Y),S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he),He.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Oe=0,ot=F.length;Oe<ot;Oe++){const ze=F[Oe],$e=ze.object,lt=ze.geometry,mt=ze.material,Xe=ze.group;if(mt.side===ai&&$e.layers.test(Y.layers)){const Bt=mt.side;mt.side=vn,mt.needsUpdate=!0,Mt($e,W,Y,lt,mt,Xe),mt.side=Bt,mt.needsUpdate=!0,Je=!0}}Je===!0&&(S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he))}x.setRenderTarget(Ne),x.setClearColor(J,V),ue!==void 0&&(Y.viewport=ue),x.toneMapping=De}function Ae(M,F,W){const Y=F.isScene===!0?F.overrideMaterial:null;for(let U=0,he=M.length;U<he;U++){const _e=M[U],Ne=_e.object,De=_e.geometry,ue=Y===null?_e.material:Y,Je=_e.group;Ne.layers.test(W.layers)&&Mt(Ne,F,W,De,ue,Je)}}function Mt(M,F,W,Y,U,he){M.onBeforeRender(x,F,W,Y,U,he),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,F,W,Y,M,he),U.transparent===!0&&U.side===ai&&U.forceSinglePass===!1?(U.side=vn,U.needsUpdate=!0,x.renderBufferDirect(W,F,Y,U,M,he),U.side=Li,U.needsUpdate=!0,x.renderBufferDirect(W,F,Y,U,M,he),U.side=ai):x.renderBufferDirect(W,F,Y,U,M,he),M.onAfterRender(x,F,W,Y,U,he)}function Et(M,F,W){F.isScene!==!0&&(F=yt);const Y=Ie.get(M),U=h.state.lights,he=h.state.shadowsArray,_e=U.state.version,Ne=we.getParameters(M,U.state,he,F,W),De=we.getProgramCacheKey(Ne);let ue=Y.programs;Y.environment=M.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(M.isMeshStandardMaterial?L:_).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,ue===void 0&&(M.addEventListener("dispose",ke),ue=new Map,Y.programs=ue);let Je=ue.get(De);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===_e)return Dt(M,Ne),Je}else Ne.uniforms=we.getUniforms(M),M.onBeforeCompile(Ne,x),Je=we.acquireProgram(Ne,De),ue.set(De,Je),Y.uniforms=Ne.uniforms;const Oe=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),Dt(M,Ne),Y.needsLights=ht(M),Y.lightsStateVersion=_e,Y.needsLights&&(Oe.ambientLightColor.value=U.state.ambient,Oe.lightProbe.value=U.state.probe,Oe.directionalLights.value=U.state.directional,Oe.directionalLightShadows.value=U.state.directionalShadow,Oe.spotLights.value=U.state.spot,Oe.spotLightShadows.value=U.state.spotShadow,Oe.rectAreaLights.value=U.state.rectArea,Oe.ltc_1.value=U.state.rectAreaLTC1,Oe.ltc_2.value=U.state.rectAreaLTC2,Oe.pointLights.value=U.state.point,Oe.pointLightShadows.value=U.state.pointShadow,Oe.hemisphereLights.value=U.state.hemi,Oe.directionalShadowMap.value=U.state.directionalShadowMap,Oe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Oe.spotShadowMap.value=U.state.spotShadowMap,Oe.spotLightMatrix.value=U.state.spotLightMatrix,Oe.spotLightMap.value=U.state.spotLightMap,Oe.pointShadowMap.value=U.state.pointShadowMap,Oe.pointShadowMatrix.value=U.state.pointShadowMatrix),Y.currentProgram=Je,Y.uniformsList=null,Je}function Pt(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=ia.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Dt(M,F){const W=Ie.get(M);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function me(M,F,W,Y,U){F.isScene!==!0&&(F=yt),S.resetTextureUnits();const he=F.fog,_e=Y.isMeshStandardMaterial?F.environment:null,Ne=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ar,De=(Y.isMeshStandardMaterial?L:_).get(Y.envMap||_e),ue=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Je=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,ze=!!W.morphAttributes.color;let $e=Pi;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($e=x.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=lt!==void 0?lt.length:0,Xe=Ie.get(Y),Bt=h.state.lights;if(ie===!0&&(de===!0||M!==b)){const zt=M===b&&Y.id===w;fe.setState(Y,M,zt)}let bt=!1;Y.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Bt.state.version||Xe.outputColorSpace!==Ne||U.isBatchedMesh&&Xe.batching===!1||!U.isBatchedMesh&&Xe.batching===!0||U.isBatchedMesh&&Xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Xe.instancing===!1||!U.isInstancedMesh&&Xe.instancing===!0||U.isSkinnedMesh&&Xe.skinning===!1||!U.isSkinnedMesh&&Xe.skinning===!0||U.isInstancedMesh&&Xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Xe.instancingMorph===!1&&U.morphTexture!==null||Xe.envMap!==De||Y.fog===!0&&Xe.fog!==he||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==fe.numPlanes||Xe.numIntersection!==fe.numIntersection)||Xe.vertexAlphas!==ue||Xe.vertexTangents!==Je||Xe.morphTargets!==Oe||Xe.morphNormals!==ot||Xe.morphColors!==ze||Xe.toneMapping!==$e||Xe.morphTargetsCount!==mt)&&(bt=!0):(bt=!0,Xe.__version=Y.version);let jt=Xe.currentProgram;bt===!0&&(jt=Et(Y,F,U));let bn=!1,Ut=!1,Wt=!1;const gt=jt.getUniforms(),Jt=Xe.uniforms;if(Ce.useProgram(jt.program)&&(bn=!0,Ut=!0,Wt=!0),Y.id!==w&&(w=Y.id,Ut=!0),bn||b!==M){Ce.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),rf(ae),sf(ae),gt.setValue(D,"projectionMatrix",ae)):gt.setValue(D,"projectionMatrix",M.projectionMatrix),gt.setValue(D,"viewMatrix",M.matrixWorldInverse);const rn=gt.map.cameraPosition;rn!==void 0&&rn.setValue(D,qe.setFromMatrixPosition(M.matrixWorld)),Qe.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ut=!0,Wt=!0)}if(U.isSkinnedMesh){gt.setOptional(D,U,"bindMatrix"),gt.setOptional(D,U,"bindMatrixInverse");const zt=U.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(D,"boneTexture",zt.boneTexture,S))}U.isBatchedMesh&&(gt.setOptional(D,U,"batchingTexture"),gt.setValue(D,"batchingTexture",U._matricesTexture,S),gt.setOptional(D,U,"batchingIdTexture"),gt.setValue(D,"batchingIdTexture",U._indirectTexture,S),gt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&gt.setValue(D,"batchingColorTexture",U._colorsTexture,S));const nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&et.update(U,W,jt),(Ut||Xe.receiveShadow!==U.receiveShadow)&&(Xe.receiveShadow=U.receiveShadow,gt.setValue(D,"receiveShadow",U.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jt.envMap.value=De,Jt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Jt.envMapIntensity.value=F.environmentIntensity),Ut&&(gt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&je(Jt,Wt),he&&Y.fog===!0&&ge.refreshFogUniforms(Jt,he),ge.refreshMaterialUniforms(Jt,Y,q,se,h.state.transmissionRenderTarget[M.id]),ia.upload(D,Pt(Xe),Jt,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ia.upload(D,Pt(Xe),Jt,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(D,"center",U.center),gt.setValue(D,"modelViewMatrix",U.modelViewMatrix),gt.setValue(D,"normalMatrix",U.normalMatrix),gt.setValue(D,"modelMatrix",U.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const zt=Y.uniformsGroups;for(let rn=0,wn=zt.length;rn<wn;rn++){const cn=zt[rn];I.update(cn,jt),I.bind(cn,jt)}}return jt}function je(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function ht(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,F,W){Ie.get(M.texture).__webglTexture=F,Ie.get(M.depthTexture).__webglTexture=W;const Y=Ie.get(M);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const W=Ie.get(M);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,W=0){N=M,A=F,C=W;let Y=!0,U=null,he=!1,_e=!1;if(M){const De=Ie.get(M);if(De.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(De.__webglFramebuffer===void 0)S.setupRenderTarget(M);else if(De.__hasExternalTextures)S.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(De.__boundDepthTexture!==Oe){if(Oe!==null&&Ie.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(M)}}const ue=M.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(_e=!0);const Je=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Je[F])?U=Je[F][W]:U=Je[F],he=!0):M.samples>0&&S.useMultisampledRTT(M)===!1?U=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Je)?U=Je[W]:U=Je,P.copy(M.viewport),$.copy(M.scissor),X=M.scissorTest}else P.copy(Ee).multiplyScalar(q).floor(),$.copy(Ze).multiplyScalar(q).floor(),X=re;if(Ce.bindFramebuffer(D.FRAMEBUFFER,U)&&Y&&Ce.drawBuffers(M,U),Ce.viewport(P),Ce.scissor($),Ce.setScissorTest(X),he){const De=Ie.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,W)}else if(_e){const De=Ie.get(M.texture),ue=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,W||0,ue)}w=-1},this.readRenderTargetPixels=function(M,F,W,Y,U,he,_e){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Ne=Ne[_e]),Ne){Ce.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const De=M.texture,ue=De.format,Je=De.type;if(!Qe.textureFormatReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-Y&&W>=0&&W<=M.height-U&&D.readPixels(F,W,Y,U,tt.convert(ue),tt.convert(Je),he)}finally{const De=N!==null?Ie.get(N).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,F,W,Y,U,he,_e){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Ne=Ne[_e]),Ne){const De=M.texture,ue=De.format,Je=De.type;if(!Qe.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-Y&&W>=0&&W<=M.height-U){Ce.bindFramebuffer(D.FRAMEBUFFER,Ne);const Oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(F,W,Y,U,tt.convert(ue),tt.convert(Je),0);const ot=N!==null?Ie.get(N).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,ot);const ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nf(D,ze,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(Oe),D.deleteSync(ze),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,W=0){M.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const Y=Math.pow(2,-W),U=Math.floor(M.image.width*Y),he=Math.floor(M.image.height*Y),_e=F!==null?F.x:0,Ne=F!==null?F.y:0;S.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,_e,Ne,U,he),Ce.unbindTexture()};const Vt=D.createFramebuffer(),rt=D.createFramebuffer();this.copyTextureToTexture=function(M,F,W=null,Y=null,U=0,he=null){M.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,M=arguments[1],F=arguments[2],he=arguments[3]||0,W=null),he===null&&(U!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=U,U=0):he=0);let _e,Ne,De,ue,Je,Oe,ot,ze,$e;const lt=M.isCompressedTexture?M.mipmaps[he]:M.image;if(W!==null)_e=W.max.x-W.min.x,Ne=W.max.y-W.min.y,De=W.isBox3?W.max.z-W.min.z:1,ue=W.min.x,Je=W.min.y,Oe=W.isBox3?W.min.z:0;else{const nn=Math.pow(2,-U);_e=Math.floor(lt.width*nn),Ne=Math.floor(lt.height*nn),M.isDataArrayTexture?De=lt.depth:M.isData3DTexture?De=Math.floor(lt.depth*nn):De=1,ue=0,Je=0,Oe=0}Y!==null?(ot=Y.x,ze=Y.y,$e=Y.z):(ot=0,ze=0,$e=0);const mt=tt.convert(F.format),Xe=tt.convert(F.type);let Bt;F.isData3DTexture?(S.setTexture3D(F,0),Bt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Bt=D.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const bt=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ut=D.getParameter(D.UNPACK_SKIP_ROWS),Wt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const gt=M.isDataArrayTexture||M.isData3DTexture,Jt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const nn=Ie.get(M),zt=Ie.get(F),rn=Ie.get(nn.__renderTarget),wn=Ie.get(zt.__renderTarget);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let cn=0;cn<De;cn++)gt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(M).__webglTexture,U,Oe+cn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(F).__webglTexture,he,$e+cn)),D.blitFramebuffer(ue,Je,_e,Ne,ot,ze,_e,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||Ie.has(M)){const nn=Ie.get(M),zt=Ie.get(F);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,Vt),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,rt);for(let rn=0;rn<De;rn++)gt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,U,Oe+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,U),Jt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,he,$e+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,he),U!==0?D.blitFramebuffer(ue,Je,_e,Ne,ot,ze,_e,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):Jt?D.copyTexSubImage3D(Bt,he,ot,ze,$e+rn,ue,Je,_e,Ne):D.copyTexSubImage2D(Bt,he,ot,ze,ue,Je,_e,Ne);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Jt?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Bt,he,ot,ze,$e,_e,Ne,De,mt,Xe,lt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,he,ot,ze,$e,_e,Ne,De,mt,lt.data):D.texSubImage3D(Bt,he,ot,ze,$e,_e,Ne,De,mt,Xe,lt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,ot,ze,_e,Ne,mt,Xe,lt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,ot,ze,lt.width,lt.height,mt,lt.data):D.texSubImage2D(D.TEXTURE_2D,he,ot,ze,_e,Ne,mt,Xe,lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt),he===0&&F.generateMipmaps&&D.generateMipmap(Bt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,F,W=null,Y=null,U=0){return M.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,M=arguments[2],F=arguments[3],U=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,W,Y,U)},this.initRenderTarget=function(M){Ie.get(M).__webglFramebuffer===void 0&&S.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){A=0,C=0,N=null,Ce.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const yv=[{id:"binMagnitude",type:"number",range:[0,1],category:"advanced"},{id:"binEnergy",type:"number",range:[0,1],category:"advanced",hidden:!0},{id:"binPhase",type:"number",range:[0,1],category:"advanced"},{id:"binFlux",type:"number",range:[-1,1],category:"advanced"},{id:"binPhaseDeviation",type:"number",range:[0,1],category:"advanced"},{id:"binPhasedeviation",type:"number",range:[0,1],category:"advanced",hidden:!0},{id:"binAttackTime",type:"number",range:[0,1],category:"advanced"},{id:"binEnvelope",type:"number",range:[0,3],category:"advanced"},{id:"binEnvelopeState",type:"number",range:[0,3],category:"advanced"},{id:"binRMSEnergy",type:"number",range:[0,1],category:"advanced"},{id:"frequencyHz",type:"number",range:[0,22050],category:"base"},{id:"notePitchClass",type:"number",range:[0,11],category:"base"},{id:"octave",type:"number",range:[-2,12],category:"base"},{id:"binFreq",type:"number",range:[0,22050],category:"advanced",hidden:!0},{id:"normFreq",type:"number",range:[0,1],category:"base"},{id:"pan",type:"number",range:[-1,1],category:"base"},{id:"amplitude",type:"number",range:[0,1],category:"base"},{id:"bass",type:"number",range:[0,1],category:"base"},{id:"mid",type:"number",range:[0,1],category:"base"},{id:"high",type:"number",range:[0,1],category:"base"},{id:"peakFreq",type:"number",range:[0,22050],category:"base"},{id:"globalRmsEnergy",type:"number",range:[0,1],category:"advanced"},{id:"peakAmplitude",type:"number",range:[0,1],category:"advanced"},{id:"zeroCrossingRate",type:"number",range:[0,1],category:"advanced"},{id:"spectralCentroid",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlux",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlatness",type:"number",range:[0,1],category:"advanced"},{id:"spectralRolloff",type:"number",range:[0,1],category:"advanced"},{id:"spectralSpread",type:"number",range:[0,1],category:"advanced"},{id:"spectralSkewness",type:"number",range:[0,1],category:"advanced"},{id:"chromagram",type:"number",range:[0,1],category:"advanced"},{id:"inharmonicity",type:"number",range:[0,1],category:"advanced"},{id:"time",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"base"},{id:"deltaTime",type:"number",range:[0,1],category:"base"},{id:"canvasWidthPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasWidthUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"audioLengthSec",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"}],Mv=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]}],Sv=Object.freeze({r:"red",g:"green",b:"blue",a:"opacity",backgroundRed:"red",backgroundGreen:"green",backgroundBlue:"blue"}),Ev=Object.freeze(new Set(["backgroundRed","backgroundGreen","backgroundBlue"])),ud=Object.freeze({binEnergy:"binMagnitude",binFreq:"frequencyHz"}),Cr=Object.freeze(["spawnedParticles","allParticles","background","camera"]),dd=Object.freeze(["spawnedOnly","allLivingFrame"]),Pl=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),hd=Object.freeze(["always",">",">=","<","<=","==","!="]),Ra=Object.freeze({version:1,entries:Object.freeze(yv.map(n=>Object.freeze({...n})))}),Ca=Object.freeze({version:1,entries:Object.freeze(Mv.map(n=>Object.freeze({...n})))});new Map(Ra.entries.map(n=>[n.id,n]));const wv=new Map(Ca.entries.map(n=>[n.id,n]));function fd(){return Ra}function Tv(){return Ca}function Av(n){return!n||n.type==="always"||n.operator==="always"}function Rv(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Cv(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function ru(n,e){if(typeof n!="string")return null;const t=Cv(ul(n));if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!Rv(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),s=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of s)if(!i.has(a))return`Expression references unknown identifier: ${a}`;return null}function pd(n){return typeof n!="string"?n:Sv[n]||n}function es(n){return typeof n!="string"?n:ud[n]||n}function Pv(n){return String(n).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ul(n){if(typeof n!="string"||!n)return n;let e=n;for(const[t,i]of Object.entries(ud)){const r=new RegExp(`\\b${Pv(t)}\\b`,"g");e=e.replace(r,i)}return e}function Nl(n){return Cr.includes(n==null?void 0:n.target)?n.target:(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Nv(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:Cr).includes(e)}function Lv(n,e={input:Ra,output:Ca}){var f,u,m,g,v;const t=[],i=[],r=[],s=new Map((((f=e.input)==null?void 0:f.entries)??[]).map(p=>[p.id,p])),a=new Map((((u=e.output)==null?void 0:u.entries)??[]).map(p=>[p.id,p]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};dd.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=Nl(n);if(Cr.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(m=n.condition)!=null&&m.operator&&!hd.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((g=n.condition)==null?void 0:g.expression)!==void 0){const p=ru(n.condition.expression,s);p&&t.push(`Condition expression invalid: ${p}`)}const l=es((v=n.condition)==null?void 0:v.input);l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],d=new Map;return c.forEach((p,h)=>{const T=pd(p==null?void 0:p.output);if(!T||!a.has(T)){t.push(`Unknown action output at index ${h}: ${String(T)}`);return}const y=a.get(T);if(Nv(y,o)||t.push(`Output ${T} is not valid for target ${o} at index ${h}`),p!=null&&p.operator&&!Pl.includes(p.operator)&&t.push(`Unknown action operator at index ${h}: ${String(p.operator)}`),y.type==="enum"&&(p==null?void 0:p.value)!==void 0&&!y.values.includes(p.value)&&t.push(`Invalid enum value for ${T} at index ${h}: ${String(p.value)}. Allowed: ${y.values.join("|")}`),(p==null?void 0:p.operator)==="set"){const R=d.get(T);R!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:T,overriddenActionIndex:R,winningActionIndex:h,resolution:"latter-executes"}),i.push(`Contradiction on ${T}: action ${h} overrides action ${R}.`)),d.set(T,h)}const x=es(p==null?void 0:p.input);if(x&&!s.has(x)&&t.push(`Unknown action input at index ${h}: ${x}`),(p==null?void 0:p.expression)!==void 0){const R=ru(p.expression,s);R&&t.push(`Action expression invalid at index ${h}: ${R}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function Fv(n){const e=Array.isArray(n)?n:[],t=new Map,i=new Set,r=[];return e.forEach((a,o)=>{if(!(a!=null&&a.enabled))return;const l=a.scope||"spawnedOnly",c=a.id||`rule-${o}`,d=Array.isArray(a.actions)?a.actions:[];Av(a.condition)&&d.forEach(u=>{if((u==null?void 0:u.operator)!=="set"||!wv.has(u==null?void 0:u.output))return;const m=Nl(a),g=`${m}:${l}:${u.output}`,v=t.get(g);v&&(i.add(v.ruleId),i.add(c),r.push({color:"red",type:"crossRuleConflict",scope:l,target:m,output:u.output,overriddenRuleId:v.ruleId,winningRuleId:c,resolution:"latter-executes"})),t.set(g,{ruleId:c,index:o})})}),{rules:e.map((a,o)=>{const l=(a==null?void 0:a.id)||`rule-${o}`;return{...a,uiState:i.has(l)?"red":"normal"}}),notes:r,redRuleIds:[...i]}}function md(n,e={input:Ra,output:Ca}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{var c,d,f;const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,target:Nl(s),scope:dd.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(u=>({...u})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),hd.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=es(o.condition.input)),(d=o.condition)!=null&&d.valueInput&&(o.condition.valueInput=es(o.condition.valueInput)),typeof((f=o.condition)==null?void 0:f.expression)=="string"&&(o.condition.expression=ul(o.condition.expression)),o.scope=o.target==="spawnedParticles"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(u=>u&&typeof u=="object").map(u=>{const m=u.output;return Ev.has(m)&&!(s!=null&&s.target)&&(o.target="background",o.scope="allLivingFrame"),{operator:Pl.includes(u.operator)?u.operator:"set",output:pd(m),value:u.value,input:es(u.input),expression:ul(u.expression)}});const l=Lv(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Pa="http://localhost:8000",gd="seesound_user_defaults_v4",Ll="seesound_disabled_v4",pa=1,Dv={logCompilerStatus:!1,logCompilerTiming:!1},as=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:pa,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],standaloneGroups:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""}});function Na(n){const e=n&&typeof n=="object"?n:{};return{collapsedGroups:Array.isArray(e.collapsedGroups)?e.collapsedGroups.map(t=>String(t||"").trim()).filter(Boolean):[],collapsedSubgroups:[],collapsedRules:Array.isArray(e.collapsedRules)?e.collapsedRules.map(t=>String(t||"").trim()).filter(Boolean):[],selectedContextGroup:String(e.selectedContextGroup||"spawnedParticles"),selectedGroupPath:String(e.selectedGroupPath||e.selectedGroupName||""),selectedGroupName:String(e.selectedGroupPath||e.selectedGroupName||""),selectedSubgroup:"",standaloneGroups:Array.isArray(e.standaloneGroups)?e.standaloneGroups.map(t=>String(t||"").trim()).filter(Boolean):[]}}function Fl(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",s=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:s}}).filter(Boolean):[]}const su=[{id:"inputGain",label:"Input"},{id:"inputProcessing",label:"Input Processing"},{id:"geometry",label:"Geometry"},{id:"mixing",label:"Mixing"}];function ln({key:n,label:e,min:t,max:i,step:r,def:s,unit:a,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:s,unit:a,desc:o,canDisable:!1}}const Yi=[{key:"inputGain",group:"inputGain",label:"Input Gain",min:0,max:3,step:.01,default:1,unit:"×",desc:"Scales every amplitude value before processing. 1× = unchanged.",canDisable:!1},{key:"amplitudeThreshold",group:"inputGain",label:"Amplitude Threshold",min:-96,max:0,step:1,default:-48,unit:"dB",desc:"Hard noise gate: any bin quieter than this level is hidden.",canDisable:!0},{key:"freqNormMin",group:"inputProcessing",label:"Freq Norm Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for log2-based frequency normalization into normFreq.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Freq Norm Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for log2-based frequency normalization into normFreq.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"FFT Size",default:2048,unit:"",desc:"FFT analysis size. Discrete power-of-two choices; larger sizes increase frequency detail and then progressively thin high-frequency buckets.",isDropdown:!0,dropdownOptions:[{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},ln({key:"binMagnitudeNormMin",label:"Per-Bin Magnitude Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS)."}),ln({key:"binMagnitudeNormMax",label:"Per-Bin Magnitude Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS)."}),ln({key:"binFluxNormMin",label:"Per-Bin Spectral Flux Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame."}),ln({key:"binFluxNormMax",label:"Per-Bin Spectral Flux Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame."}),ln({key:"binPhaseDeviationNormMin",label:"Per-Bin Phase Deviation Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians."}),ln({key:"binPhaseDeviationNormMax",label:"Per-Bin Phase Deviation Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians."}),ln({key:"binAttackTimeNormMin",label:"Per-Bin Attack Time Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms)."}),ln({key:"binAttackTimeNormMax",label:"Per-Bin Attack Time Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms)."}),ln({key:"globalRmsNormMin",label:"Global RMS Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS)."}),ln({key:"globalRmsNormMax",label:"Global RMS Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS)."}),ln({key:"spectralCentroidNormMin",label:"Spectral Centroid Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz)."}),ln({key:"spectralCentroidNormMax",label:"Spectral Centroid Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz)."}),ln({key:"globalSpectralFluxNormMin",label:"Global Spectral Flux Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units)."}),ln({key:"globalSpectralFluxNormMax",label:"Global Spectral Flux Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units)."}),ln({key:"spectralFlatnessNormMin",label:"Spectral Flatness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0)."}),ln({key:"spectralFlatnessNormMax",label:"Spectral Flatness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0)."}),{key:"defaultParticleSize",group:"geometry",label:"Particle Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Max Particle Capacity",min:4096,max:8e6,step:1024,default:262144,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particleRenderPercent",group:"geometry",label:"Particle Render %",min:1,max:100,step:1,default:100,unit:"%",desc:"Bucket thinning: only this percentage of log-frequency buckets can spawn particles each frame (evenly distributed by bucket index).",canDisable:!1},{key:"particlesByFrame",group:"geometry",label:"Particles By Frame",min:100,max:5e3,step:1,default:1e3,unit:"N",desc:"Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]}];function _d(){try{return JSON.parse(localStorage.getItem(gd)||"{}")}catch{return{}}}function Iv(){try{return new Set(JSON.parse(localStorage.getItem(Ll)||"[]"))}catch{return new Set}}function Ki(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=md(i);if(t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:as.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):as.ruleSchemaVersion,t.palettes=Fl(e.palettes),t.ruleUiState=Na(e.ruleUiState),!Number.isFinite(Number(e.particlesByFrame))&&Number.isFinite(Number(e.particlesPerOctave))){const s=Math.round(Number(e.particlesPerOctave)*10);t.particlesByFrame=Math.max(100,Math.min(5e3,s))}return r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Uv(){const n=Ki(_d()),e={};for(const t of Yi)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.tonicHz=n.tonicHz??261.63,e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=Fl(n.palettes),e.ruleUiState=Na(n.ruleUiState),e}const oe=Uv(),sn=Iv(),ri=[],La=[],au=300;let os=!1;function Ov(n){return JSON.parse(JSON.stringify(n))}function Dl(){return{params:Ov(oe),disabled:[...sn]}}function kv(n,e){if(!n||!e||JSON.stringify(n.params)!==JSON.stringify(e.params))return!1;const t=Array.isArray(n.disabled)?[...n.disabled].sort():[],i=Array.isArray(e.disabled)?[...e.disabled].sort():[];return JSON.stringify(t)===JSON.stringify(i)}function vd(n){const e=Ki((n&&typeof n=="object"?n.params:{})||{});for(const i of Object.keys(oe))delete oe[i];for(const[i,r]of Object.entries(e))oe[i]=r,Ni(i,r);const t=new Set(Array.isArray(n==null?void 0:n.disabled)?n.disabled:[]);sn.clear();for(const i of t)sn.add(i);try{localStorage.setItem(Ll,JSON.stringify([...sn]))}catch{}Ni("disabled",null),Ni("*",e)}function Fa(){if(os)return;const n=Dl(),e=ri[ri.length-1];e&&kv(e,n)||(ri.push(n),ri.length>au&&ri.splice(0,ri.length-au),La.length=0)}function Bv(){return ri.length>0}function zv(){return La.length>0}function Hv(){if(!Bv())return!1;const n=ri.pop(),e=Dl();La.push(e),os=!0;try{vd(n)}finally{os=!1}return!0}function Gv(){if(!zv())return!1;const n=La.pop(),e=Dl();ri.push(e),os=!0;try{vd(n)}finally{os=!1}return!0}const dl=new Set;function Ji(n){return dl.add(n),()=>dl.delete(n)}function Ni(n,e){for(const t of dl)try{t(oe,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function En(n,e){Fa(),oe[n]=e,Ni(n,e)}function Da(n){Fa();const e={...oe,...n&&typeof n=="object"?n:{}},t=Ki(e);for(const[i,r]of Object.entries(t))oe[i]=r,Ni(i,r);Ni("*",t)}function xd(){Fa();for(const n of Yi)oe[n.key]=n.default;oe.tonicHz=261.63,oe.ruleBlocks=[],oe.ruleEngineEnabled=!0,oe.ruleSchemaVersion=pa,oe.palettes=[],oe.ruleUiState=Na(as.ruleUiState),Ni("*",null)}function Il(n,e){try{const t=_d();t[n]=e,localStorage.setItem(gd,JSON.stringify(t))}catch{}}function Vv(n){Fa(),sn.has(n)?sn.delete(n):sn.add(n);try{localStorage.setItem(Ll,JSON.stringify([...sn]))}catch{}Ni("disabled",n)}function ma(){const n=Ki(oe);return{...oe,...n,_disabled:[...sn]}}function Wv(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function Xv(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function $v(n,e){if(e==null)return;if(n!=null&&n.isToggle)return Xv(e,n.default);if(n!=null&&n.isDropdown){const r=Wv(n).find(s=>String(s)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function bd(n){try{const e=n&&typeof n=="object"?n:{},t={...e},i=Number(e.particlesPerOctave),r=Number.isFinite(i);for(const s of Yi){const a=Object.prototype.hasOwnProperty.call(e,s.key);if(s.key==="particlesByFrame"&&!a&&r){const o=Math.round(i*10);t.particlesByFrame=Math.max(100,Math.min(5e3,o));continue}if(!a||e[s.key]===void 0||e[s.key]===null){t[s.key]=s.default;continue}t[s.key]=$v(s,e[s.key])}return!Object.prototype.hasOwnProperty.call(e,"tonicHz")||!Number.isFinite(Number(e.tonicHz))?t.tonicHz=261.63:t.tonicHz=Number(e.tonicHz),Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=as.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=as.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=Fl(e.palettes),t.ruleUiState=Na(e.ruleUiState),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),Ki(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),Ki(n&&typeof n=="object"?n:{})}}async function ga(){try{const n=await fetch(`${Pa}/api/presets`,{cache:"no-store"});return n.ok?(await n.json()).presets??[]:[]}catch{return[]}}async function _a(n,e){const t=bd(e);return fetch(`${Pa}/api/presets`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,params:t})}).then(i=>i.json())}async function Ul(n){const e=await fetch(`${Pa}/api/presets/${encodeURIComponent(n)}`,{cache:"no-store"});if(!e.ok)return null;const t=await e.json();if(!(t!=null&&t.params))return t;try{return{...t,params:bd(t.params)}}catch(i){return console.warn("[Preset] load normalization failed, applying raw params:",i),{...t,params:Ki(t.params)}}}async function yd(n){return fetch(`${Pa}/api/presets/${encodeURIComponent(n)}`,{method:"DELETE"}).then(e=>e.json())}function qv(n,e,t){return Math.min(t,Math.max(e,n))}function Bi(n){const e=Number(n);return Number.isFinite(e)?Math.round(qv(e,0,255)):0}function Md(n,e,t,i){const r=Bi(n),s=Bi(e),a=Bi(t),o=Bi(i),l=.299*r+.587*s+.114*a;if(l<=1e-9)return[o,o,o];const c=o/l;let d=r*c,f=s*c,u=a*c;const m=Math.max(d,f,u);if(m>255){const g=(255-o)/Math.max(1e-9,m-o);d=o+g*(d-o),f=o+g*(f-o),u=o+g*(u-o)}return[Bi(d),Bi(f),Bi(u)]}const ou="cde-styles-v2",Sd=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function Yv(){if(document.getElementById(ou))return;const n=document.createElement("style");n.id=ou,n.textContent=`
.cde-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(5, 10, 8, 0.82);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.cde-popup {
    width: min(1200px, 97vw);
    max-height: 92vh;
    border: 1px solid #4f7562;
    border-radius: 10px;
    background: #0d1410;
    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.72);
    color: #e2f0eb;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 12px;
}

.cde-header {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #4f7562;
    padding: 8px 12px;
    background: #0b1410;
}

.cde-header-title {
    flex: 1;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    color: #b9a79b;
}

.cde-btn,
.cde-input,
.cde-select {
    background: #111a16;
    border: 1px solid #4f7562;
    color: #e2f0eb;
    border-radius: 4px;
    font-size: 12px;
}

.cde-btn {
    cursor: pointer;
    padding: 4px 8px;
}

.cde-btn:hover {
    border-color: #b9a79b;
}

.cde-btn-primary {
    color: #d2910a;
    border-color: rgba(210, 145, 10, 0.4);
    background: rgba(210, 145, 10, 0.12);
}

.cde-btn-danger {
    color: #e67a7a;
    border-color: rgba(212, 85, 6, 0.45);
    background: rgba(212, 85, 6, 0.12);
}

.cde-input,
.cde-select {
    padding: 4px 6px;
    outline: none;
}

.cde-input:focus,
.cde-select:focus {
    border-color: #d2910a;
    box-shadow: 0 0 0 2px rgba(210, 145, 10, 0.15);
}

.cde-main {
    display: grid;
    grid-template-columns: 290px 1fr;
    min-height: 0;
    flex: 1;
}

.cde-sidebar {
    border-right: 1px solid #4f7562;
    padding: 10px;
    overflow: auto;
}

.cde-editor {
    padding: 10px;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.cde-section-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 10px;
    color: #b9a79b;
    margin-bottom: 6px;
}

.cde-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 6px;
}

.cde-row > .cde-input,
.cde-row > .cde-select {
    flex: 1;
    min-width: 0;
}

.cde-list {
    display: grid;
    gap: 4px;
    max-height: 200px;
    overflow: auto;
    margin-bottom: 8px;
}

.cde-list-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 6px;
    border: 1px solid rgba(79, 117, 98, 0.35);
    border-radius: 4px;
    cursor: pointer;
    background: rgba(17, 26, 22, 0.7);
}

.cde-list-item:hover {
    border-color: #b9a79b;
}

.cde-list-item.active {
    border-color: #d2910a;
    background: rgba(210, 145, 10, 0.12);
}

.cde-color-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    flex-shrink: 0;
}

.cde-preview {
    height: 18px;
    border: 1px solid rgba(79, 117, 98, 0.45);
    border-radius: 4px;
    margin-bottom: 10px;
}

.cde-table-wrap {
    overflow: auto;
    border: 1px solid rgba(79, 117, 98, 0.35);
    border-radius: 6px;
    min-height: 0;
    flex: 1;
}

.cde-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 780px;
}

.cde-table th,
.cde-table td {
    border-bottom: 1px solid rgba(79, 117, 98, 0.25);
    padding: 5px 6px;
    text-align: center;
}

.cde-table th {
    position: sticky;
    top: 0;
    background: #0b1410;
    z-index: 1;
    font-size: 10px;
    text-transform: uppercase;
    color: #b9a79b;
    letter-spacing: 0.05em;
}

.cde-table tbody tr:hover {
    background: rgba(79, 117, 98, 0.06);
}

.cde-rgb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.cde-num {
    width: 52px;
}

.cde-note {
    color: #7a8a83;
    font-size: 11px;
}

.cde-swatch {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    position: relative;
    overflow: hidden;
}

.cde-swatch input[type=color] {
    position: absolute;
    inset: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    opacity: 0;
    border: none;
    cursor: pointer;
}

.cde-footer {
    border-top: 1px solid #4f7562;
    background: #0b1410;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cde-footer .cde-note {
    margin-left: auto;
}

@media (max-width: 960px) {
    .cde-main {
        grid-template-columns: 1fr;
    }
    .cde-sidebar {
        border-right: none;
        border-bottom: 1px solid #4f7562;
    }
}
`,document.head.appendChild(n)}function jv(n,e,t){return Math.min(t,Math.max(e,n))}function at(n){const e=Number(n);return Number.isFinite(e)?Math.round(jv(e,0,255)):0}function Gi(n,e,t){const i=r=>at(r).toString(16).padStart(2,"0");return`#${i(n)}${i(e)}${i(t)}`}function Ed(n){const e=String(n||"").trim(),t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return[128,128,128];const i=t[1];return[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16)]}function Ia(n,e="palette"){return String(n||"").trim().toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||e}function Zv(n,e,t){return[at(n[0]+(e[0]-n[0])*t),at(n[1]+(e[1]-n[1])*t),at(n[2]+(e[2]-n[2])*t)]}function mo(n,e=48){const t=Array.isArray(n)?n:[];if(t.length<=1)return t.slice(0,1);const i=Math.max(2,Math.floor(e)),r=[];for(let s=0;s<i;s++){const o=s/(i-1)*(t.length-1),l=Math.floor(o),c=Math.min(t.length-1,l+1),d=o-l;r.push(Zv(t[l],t[c],d))}return r}function Vi(n,e=0){const t=n&&typeof n=="object"?n:{},i=typeof t.name=="string"&&t.name.trim()?t.name.trim():`Palette ${e+1}`,r=typeof t.id=="string"&&t.id.trim()?t.id.trim():Ia(i,`palette-${e+1}`),s=t.type==="continuous"?"continuous":"discrete",a=Array.isArray(t.colors)?t.colors.map(o=>{if(Array.isArray(o)&&o.length>=3)return[at(o[0]),at(o[1]),at(o[2])];if(typeof o=="string")return Ed(o);if(o&&typeof o=="object"){if(Array.isArray(o.rgb)&&o.rgb.length>=3)return[at(o.rgb[0]),at(o.rgb[1]),at(o.rgb[2])];if(Number.isFinite(o.r)||Number.isFinite(o.g)||Number.isFinite(o.b))return[at(o.r),at(o.g),at(o.b)]}return[128,128,128]}):[];return{id:r,name:i,type:s,colors:a}}function ra(n){const e=Array.isArray(n==null?void 0:n.colors)?n.colors:[];return e.length===0?[{note:0,luma:64,input:[220,60,40]},{note:1,luma:128,input:[220,60,40]},{note:2,luma:192,input:[220,60,40]}]:e.map((t,i)=>{const r=at(t==null?void 0:t[0]),s=at(t==null?void 0:t[1]),a=at(t==null?void 0:t[2]),o=Math.round(.299*r+.587*s+.114*a);return{note:i,luma:o,input:[r,s,a]}})}function sa(n){return n.map(e=>{const t=at(e.luma),[i,r,s]=e.input;return Md(at(i),at(r),at(s),t)})}function Kv(n,e){const i=[["index","note","luma","input_r","input_g","input_b","output_r","output_g","output_b"].join(",")],r=sa(e);for(let s=0;s<e.length;s++){const a=e[s],o=r[s];i.push([s,Sd[s%12],at(a.luma),at(a.input[0]),at(a.input[1]),at(a.input[2]),at(o[0]),at(o[1]),at(o[2])].join(","))}return i.join(`
`)}function Jv(n){const t=String(n||"").replace(/\r/g,`
`).split(`
`).map(d=>d.trim()).filter(Boolean);if(t.length===0)return[];const i=(()=>{const d=t[0],f=(d.match(/,/g)||[]).length,u=(d.match(/;/g)||[]).length,m=(d.match(/\t/g)||[]).length;return m>=f&&m>=u?"	":u>f?";":","})(),r=d=>d.split(i).map(f=>f.trim()),s=r(t[0]).map(d=>d.toLowerCase()),a=s.some(d=>/luma|input_r|output_r|r|red/.test(d)),o={luma:s.indexOf("luma"),inR:s.indexOf("input_r"),inG:s.indexOf("input_g"),inB:s.indexOf("input_b"),outR:s.indexOf("output_r"),outG:s.indexOf("output_g"),outB:s.indexOf("output_b"),r:s.indexOf("r"),g:s.indexOf("g"),b:s.indexOf("b")},l=a?1:0,c=[];for(let d=l;d<t.length;d++){const u=r(t[d]).map(h=>Number(h));let m=128,g=null,v=null,p=null;if(a)o.luma>=0&&Number.isFinite(u[o.luma])&&(m=u[o.luma]),o.inR>=0&&Number.isFinite(u[o.inR])&&(g=u[o.inR]),o.inG>=0&&Number.isFinite(u[o.inG])&&(v=u[o.inG]),o.inB>=0&&Number.isFinite(u[o.inB])&&(p=u[o.inB]),(g===null||v===null||p===null)&&o.r>=0&&o.g>=0&&o.b>=0&&Number.isFinite(u[o.r])&&Number.isFinite(u[o.g])&&Number.isFinite(u[o.b])&&(g=u[o.r],v=u[o.g],p=u[o.b]),(g===null||v===null||p===null)&&o.outR>=0&&o.outG>=0&&o.outB>=0&&Number.isFinite(u[o.outR])&&Number.isFinite(u[o.outG])&&Number.isFinite(u[o.outB])&&(g=u[o.outR],v=u[o.outG],p=u[o.outB]);else{const h=u.filter(T=>Number.isFinite(T));h.length>=4?(m=h[0],g=h[1],v=h[2],p=h[3]):h.length>=3&&(g=h[0],v=h[1],p=h[2],m=Math.round(.299*g+.587*v+.114*p))}!Number.isFinite(g)||!Number.isFinite(v)||!Number.isFinite(p)||c.push({note:c.length,luma:at(m),input:[at(g),at(v),at(p)]})}return c}function lu(n,e,t){const i=new Blob([t],{type:e}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=n,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(r)}function Qv(n){const e=Array.isArray(n==null?void 0:n.colors)&&n.colors.length>0?n.colors[0]:[128,128,128];return Gi(e[0],e[1],e[2])}function go(n=0){const e=`Palette ${n+1}`;return{id:Ia(e,`palette-${n+1}`),name:e,type:"discrete",colors:[[255,0,0],[255,120,0],[255,220,0],[150,255,0],[0,255,80],[0,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[255,0,150],[255,0,60]]}}const e0=Object.freeze({spectrum:{id:"spectrum",name:"Spectrum",type:"discrete",colors:[[255,0,0],[255,96,0],[255,180,0],[235,255,0],[140,255,0],[35,255,0],[0,255,120],[0,255,235],[0,160,255],[25,80,255],[120,40,255],[220,0,255]]},scriabin:{id:"scriabin",name:"Scriabin",type:"discrete",colors:[[220,20,40],[160,0,200],[245,235,70],[160,180,170],[50,90,220],[130,0,170],[35,95,210],[230,90,0],[200,40,120],[30,150,60],[140,150,175],[85,30,165]]},circleOfFifths:{id:"circle-of-fifths",name:"Circle of Fifths",type:"discrete",colors:[[225,65,65],[225,135,65],[225,195,65],[180,225,65],[110,225,65],[65,225,105],[65,225,185],[65,190,225],[65,120,225],[120,90,225],[185,70,225],[225,65,160]]}});function cu(n){const e=Array.isArray(n)?n:[];return e.length===0?ra({colors:[]}):e.map((t,i)=>{const r=at(t==null?void 0:t[0]),s=at(t==null?void 0:t[1]),a=at(t==null?void 0:t[2]);return{note:i,luma:Math.round(.299*r+.587*s+.114*a),input:[r,s,a]}})}function t0(n,e){const t=new Set((Array.isArray(n)?n:[]).map(s=>String((s==null?void 0:s.id)||"").trim()).filter(Boolean)),i=Ia(e||"palette","palette");if(!t.has(i))return i;let r=2;for(;t.has(`${i}-${r}`);)r++;return`${i}-${r}`}function n0(n,e){const t=e0[n];if(!t)return null;const i=Vi(t,Array.isArray(e)?e.length:0);return i.id=t0(e,i.id),i.id!==t.id&&(i.name=`${t.name} ${i.id.split("-").slice(-1)[0]}`),i}function i0(){if(Yv(),document.querySelector(".cde-overlay"))return;const n=(()=>{const S=Array.isArray(oe.palettes)?oe.palettes:[];return S.length>0?S.map((_,L)=>Vi(_,L)):[go(0)]})(),e={palettes:n,selectedIndex:0,rows:ra(n[0]),dirty:!1,unsubscribe:null},t=document.createElement("div");t.className="cde-overlay";const i=document.createElement("div");i.className="cde-popup";const r=document.createElement("div");r.className="cde-header";const s=document.createElement("div");s.className="cde-header-title",s.textContent="Color Design — Palette Manager";const a=document.createElement("button");a.className="cde-btn cde-btn-primary",a.textContent="Apply to Engine";const o=document.createElement("button");o.className="cde-btn",o.textContent="Close",r.append(s,a,o);const l=document.createElement("div");l.className="cde-main";const c=document.createElement("div");c.className="cde-sidebar";const d=document.createElement("div");d.className="cde-editor";const f=document.createElement("div");f.className="cde-section-title",f.textContent="Palettes";const u=document.createElement("div");u.className="cde-list";const m=document.createElement("div");m.className="cde-row";const g=document.createElement("button");g.className="cde-btn cde-btn-primary",g.textContent="+ New";const v=document.createElement("button");v.className="cde-btn",v.textContent="Duplicate";const p=document.createElement("button");p.className="cde-btn cde-btn-danger",p.textContent="Delete",m.append(g,v,p);const h=document.createElement("div");h.className="cde-row";const T=document.createElement("select");T.className="cde-select",T.innerHTML=['<option value="spectrum">Spectrum</option>','<option value="scriabin">Scriabin</option>','<option value="circleOfFifths">Circle of Fifths</option>'].join("");const y=document.createElement("button");y.className="cde-btn",y.textContent="Add Template",h.append(T,y);const x=document.createElement("div");x.className="cde-section-title",x.textContent="Selected Palette";const R=document.createElement("div");R.className="cde-row";const A=document.createElement("input");A.className="cde-input",A.placeholder="Palette Name",R.appendChild(A);const C=document.createElement("div");C.className="cde-row";const N=document.createElement("select");N.className="cde-select",N.innerHTML=['<option value="discrete">Discrete (step lookup)</option>','<option value="continuous">Continuous (gradient)</option>'].join(""),C.appendChild(N);const w=document.createElement("div");w.className="cde-preview";const b=document.createElement("div");b.className="cde-section-title",b.textContent="Import / Export";const P=document.createElement("div");P.className="cde-row";const $=document.createElement("button");$.className="cde-btn",$.textContent="Import CSV/JSON";const X=document.createElement("button");X.className="cde-btn",X.textContent="Export CSV";const J=document.createElement("button");J.className="cde-btn",J.textContent="Export JSON",P.append($,X,J);const V=document.createElement("input");V.type="file",V.accept=".csv,.json,text/csv,application/json",V.style.display="none",c.append(f,u,m,h,x,R,C,w,b,P,V);const H=document.createElement("div");H.className="cde-section-title",H.textContent="Color Table Builder";const se=document.createElement("div");se.className="cde-row";const q=document.createElement("button");q.className="cde-btn cde-btn-primary",q.textContent="+ Add Row";const le=document.createElement("button");le.className="cde-btn",le.textContent="Fill 12 Notes";const ve=document.createElement("button");ve.className="cde-btn",ve.textContent="Sort by Luma",se.append(q,le,ve);const Ee=document.createElement("div");Ee.className="cde-table-wrap";const Ze=document.createElement("table");Ze.className="cde-table",Ze.innerHTML=`
        <thead>
            <tr>
                <th>#</th>
                <th>Note</th>
                <th>Luma</th>
                <th>Input RGB</th>
                <th>Output RGB</th>
                <th>Output Hex</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody></tbody>
    `,Ee.appendChild(Ze);const re=document.createElement("div");re.className="cde-footer";const O=document.createElement("button");O.className="cde-btn cde-btn-primary",O.textContent="Use Output Colors";const ie=document.createElement("button");ie.className="cde-btn",ie.textContent="Use Input Colors";const de=document.createElement("div");de.className="cde-note",de.textContent="Palettes are saved in params.palettes and included in preset JSON save/load.",re.append(O,ie,de),d.append(H,se,Ee,re),l.append(c,d),i.append(r,l),t.appendChild(i),document.body.appendChild(t);function ae(){return e.palettes[e.selectedIndex]||null}function be(S=!0){const _=ae();if(!_)return;const L=S?sa(e.rows):e.rows.map(G=>[at(G.input[0]),at(G.input[1]),at(G.input[2])]);if(_.type==="continuous"){const G=Math.max(24,L.length*8);_.colors=mo(L,G)}else _.colors=L;e.dirty=!0}function qe(){const S=e.palettes.map((_,L)=>Vi(_,L));En("palettes",S),e.dirty=!1}function Ve(S){e.selectedIndex=Math.max(0,Math.min(e.palettes.length-1,S));const _=ae();e.rows=ra(_),Qe()}function yt(S){const _=ae();if(((_==null?void 0:_.type)==="continuous"?"continuous":"discrete")===S)return;const G=sa(e.rows);if(S==="continuous"){const K=Math.max(24,Math.min(96,Math.max(2,G.length)*4));e.rows=cu(mo(G,K))}else e.rows=cu(mo(G,12))}function ct(){u.innerHTML="",e.palettes.forEach((S,_)=>{const L=document.createElement("div");L.className=`cde-list-item${_===e.selectedIndex?" active":""}`;const G=document.createElement("div");G.className="cde-color-dot",G.style.background=Qv(S);const K=document.createElement("div");K.style.flex="1",K.style.minWidth="0",K.innerHTML=`<div>${S.name||S.id}</div><div class="cde-note">${S.id} · ${S.type} · ${S.colors.length} colors</div>`,L.append(G,K),L.addEventListener("click",()=>{be(!0),Ve(_)}),u.appendChild(L)})}function Rt(){const S=ae();if(!S)return;A.value=S.name||"",N.value=S.type||"discrete";const _=Array.isArray(S.colors)?S.colors:[];if(_.length===0){w.style.background="#2a2a2a";return}if(S.type==="continuous"){const L=_.map((G,K)=>`${Gi(G[0],G[1],G[2])} ${K/Math.max(1,_.length-1)*100}%`).join(", ");w.style.background=`linear-gradient(90deg, ${L})`}else{const L=100/_.length,G=[];for(let K=0;K<_.length;K++){const te=(K*L).toFixed(3),we=((K+1)*L).toFixed(3),ge=Gi(_[K][0],_[K][1],_[K][2]);G.push(`${ge} ${te}%`,`${ge} ${we}%`)}w.style.background=`linear-gradient(90deg, ${G.join(", ")})`}}function D(S,_){const L=document.createElement("div");L.className="cde-swatch",L.style.background=Gi(S[0],S[1],S[2]);const G=document.createElement("input");return G.type="color",G.value=Gi(S[0],S[1],S[2]),G.addEventListener("input",()=>{const K=Ed(G.value);L.style.background=G.value,_(K)}),L.appendChild(G),L}function it(S,_,L=0,G=255){const K=document.createElement("input");return K.className="cde-input cde-num",K.type="number",K.min=String(L),K.max=String(G),K.step="1",K.value=String(at(S)),K.addEventListener("change",()=>{_(at(K.value))}),K}function He(){const S=Ze.querySelector("tbody");S.innerHTML="";const _=sa(e.rows);e.rows.forEach((L,G)=>{const K=document.createElement("tr"),te=document.createElement("td");te.textContent=String(G+1);const we=document.createElement("td");we.textContent=Sd[G%12];const ge=document.createElement("td"),Pe=it(L.luma,E=>{L.luma=E,e.dirty=!0,He()});ge.appendChild(Pe);const ut=document.createElement("td"),fe=document.createElement("div");fe.className="cde-rgb";const Le=D(L.input,E=>{L.input=[at(E[0]),at(E[1]),at(E[2])],e.dirty=!0,He()}),We=it(L.input[0],E=>{L.input[0]=E,e.dirty=!0,He()}),et=it(L.input[1],E=>{L.input[1]=E,e.dirty=!0,He()}),Fe=it(L.input[2],E=>{L.input[2]=E,e.dirty=!0,He()});fe.append(Le,We,et,Fe),ut.appendChild(fe);const Ke=_[G],tt=document.createElement("td"),Ge=document.createElement("div");Ge.className="cde-rgb";const I=document.createElement("div");I.className="cde-swatch",I.style.background=Gi(Ke[0],Ke[1],Ke[2]);const xe=it(Ke[0],()=>{},0,255),ee=it(Ke[1],()=>{},0,255),Q=it(Ke[2],()=>{},0,255);xe.readOnly=!0,ee.readOnly=!0,Q.readOnly=!0,xe.style.opacity="0.8",ee.style.opacity="0.8",Q.style.opacity="0.8",Ge.append(I,xe,ee,Q),tt.appendChild(Ge);const Me=document.createElement("td"),Se=Gi(Ke[0],Ke[1],Ke[2]),ke=document.createElement("input");ke.className="cde-input",ke.readOnly=!0,ke.value=Se,ke.addEventListener("click",()=>{var E;(E=navigator.clipboard)==null||E.writeText(Se).catch(()=>{})}),Me.appendChild(ke);const St=document.createElement("td"),Ct=document.createElement("button");Ct.className="cde-btn cde-btn-danger",Ct.textContent="✕",Ct.addEventListener("click",()=>{e.rows.splice(G,1),e.rows.length===0&&e.rows.push({note:0,luma:128,input:[128,128,128]}),e.dirty=!0,He()}),St.appendChild(Ct),K.append(te,we,ge,ut,tt,Me,St),S.appendChild(K)})}function Qe(){ct(),Rt(),He()}A.addEventListener("input",()=>{const S=ae();if(!S)return;const _=A.value.trim()||`Palette ${e.selectedIndex+1}`;S.name=_,S.id=Ia(_,`palette-${e.selectedIndex+1}`),e.dirty=!0,Qe()}),N.addEventListener("change",()=>{const S=ae();if(!S)return;const _=N.value==="continuous"?"continuous":"discrete";yt(_),S.type=_,e.dirty=!0,Qe()}),y.addEventListener("click",()=>{be(!0);const S=n0(T.value,e.palettes);S&&(e.palettes.push(S),Ve(e.palettes.length-1),e.dirty=!0)}),g.addEventListener("click",()=>{be(!0);const S=go(e.palettes.length);e.palettes.push(S),Ve(e.palettes.length-1),e.dirty=!0}),v.addEventListener("click",()=>{const S=ae();if(!S)return;be(!0);const _=Vi(S,e.palettes.length);_.id=`${_.id}-copy`,_.name=`${_.name} copy`,e.palettes.push(_),Ve(e.palettes.length-1),e.dirty=!0}),p.addEventListener("click",()=>{if(e.palettes.length<=1){alert("At least one palette must remain.");return}e.palettes.splice(e.selectedIndex,1),Ve(Math.max(0,e.selectedIndex-1)),e.dirty=!0}),q.addEventListener("click",()=>{const S=e.rows[e.rows.length-1];e.rows.push({note:e.rows.length,luma:S?at(S.luma):128,input:S?[...S.input]:[200,100,50]}),e.dirty=!0,He()}),le.addEventListener("click",()=>{const S=ae();if(!S)return;const _=Array.isArray(S.colors)&&S.colors.length>0?S.colors:go(0).colors;e.rows=[];for(let L=0;L<12;L++){const G=_[L%_.length],K=Math.round(.299*G[0]+.587*G[1]+.114*G[2]);e.rows.push({note:L,luma:K,input:[at(G[0]),at(G[1]),at(G[2])]})}e.dirty=!0,He()}),ve.addEventListener("click",()=>{e.rows.sort((S,_)=>Number(S.luma)-Number(_.luma)),e.dirty=!0,He()}),O.addEventListener("click",()=>{be(!0),ct()}),ie.addEventListener("click",()=>{be(!1),ct()}),a.addEventListener("click",()=>{be(!0),qe()}),X.addEventListener("click",()=>{const S=ae();if(!S)return;const _=(S.id||"palette").replace(/[^A-Za-z0-9_-]/g,"_"),L=Kv(S,e.rows);lu(`${_}.csv`,"text/csv;charset=utf-8",L)}),J.addEventListener("click",()=>{const S=ae();if(!S)return;be(!0);const _=(S.id||"palette").replace(/[^A-Za-z0-9_-]/g,"_"),L=JSON.stringify(S,null,2);lu(`${_}.json`,"application/json;charset=utf-8",L)}),$.addEventListener("click",()=>V.click()),V.addEventListener("change",async S=>{var L;const _=(L=S.target.files)==null?void 0:L[0];if(_)try{const G=await _.text();if(_.name.toLowerCase().endsWith(".json")){const te=JSON.parse(G);if(Array.isArray(te)){const we=te.map((ge,Pe)=>Vi(ge,Pe));we.length>0&&(be(!0),e.palettes=we,Ve(0),e.dirty=!0)}else{const we=Vi(te,e.palettes.length);be(!0),e.palettes.push(we),Ve(e.palettes.length-1),e.dirty=!0}}else{const te=Jv(G);te.length===0?alert("No valid palette rows found in CSV."):(e.rows=te,be(!0),e.dirty=!0,Qe())}}catch(G){console.warn("[ColorDesignEditor] import failed:",G),alert("Failed to import palette file.")}finally{V.value=""}});function Ce(){if(be(!0),e.dirty&&qe(),typeof e.unsubscribe=="function"){try{e.unsubscribe()}catch{}e.unsubscribe=null}t.remove(),document.removeEventListener("keydown",dt),window.removeEventListener("seesound:commit-pending-color-edits",Ie)}function dt(S){S.key==="Escape"&&Ce()}function Ie(){be(!0),e.dirty&&qe()}o.addEventListener("click",Ce),t.addEventListener("pointerdown",S=>{S.target===t&&Ce()}),document.addEventListener("keydown",dt),window.addEventListener("seesound:commit-pending-color-edits",Ie),e.unsubscribe=Ji((S,_)=>{var te;if(_!=="palettes"&&_!=="*")return;const L=Array.isArray(S==null?void 0:S.palettes)?S.palettes:[];if(L.length===0)return;const G=(te=ae())==null?void 0:te.id;e.palettes=L.map((we,ge)=>Vi(we,ge));const K=G?e.palettes.findIndex(we=>we.id===G):0;e.selectedIndex=K>=0?K:0,e.rows=ra(ae()),Qe()}),Qe()}const wd=1,Zr=".ssp.json";function r0({params:n,presetName:e="",presetLibrary:t=[],projectName:i=""}){return{schemaVersion:wd,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),projectName:String(i||""),presetName:String(e||""),params:n&&typeof n=="object"?n:{},presetLibrary:Array.isArray(t)?t:[]}}function Td(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return{schemaVersion:Number.isFinite(Number(e.schemaVersion))?Number(e.schemaVersion):wd,createdAt:e.createdAt||null,updatedAt:e.updatedAt||null,projectName:String(e.projectName||""),presetName:String(e.presetName||""),params:e.params,presetLibrary:Array.isArray(e.presetLibrary)?e.presetLibrary:[]}}function s0(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function Z(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:r==="title"?i.title=s:i.setAttribute(r,s);return i}function Gs(n,e){return n.isDropdown||n.isToggle||Number.isInteger(n.step)?String(e):Number(e).toFixed(2)}let Wr=null;function Ol(n){const e=Z("button","cp-info-btn",{text:"ⓘ","aria-label":`Info: ${n.label}`});let t;return n.isDropdown?t=n.dropdownGroups?n.dropdownGroups.flatMap(i=>i.options.map(r=>r.label)).join(", "):(n.dropdownOptions??[]).map(i=>i.label).join(", "):n.isToggle?t=(n.toggleLabels??["Off","On"]).join(" / "):t=`${n.min}–${n.max}${n.unit?" "+n.unit:""}`,e.addEventListener("click",i=>{if(i.stopPropagation(),Wr&&(Wr.remove(),Wr=null),e.classList.contains("active")){e.classList.remove("active");return}const r=Z("div","cp-info-popup");r.innerHTML=`
      <div class="cp-info-title">${n.label}</div>
      <div class="cp-info-desc">${n.desc}</div>
      <div class="cp-info-meta">
        ${n.isToggle?"Options":"Range"}: ${t}
        ${!n.isToggle&&n.neutralValue!==void 0?` · Neutral: ${n.neutralValue}`:""}
        ${n.isToggle?"":` · Default: ${n.default}${n.unit?" "+n.unit:""}`}
      </div>`;const s=e.getBoundingClientRect();r.style.top=`${s.bottom+6}px`,r.style.left=`${Math.min(s.left,window.innerWidth-280)}px`,document.body.appendChild(r),e.classList.add("active"),Wr=r,r.addEventListener("click",a=>a.stopPropagation()),requestAnimationFrame(()=>{const a=()=>{r.remove(),e.classList.remove("active"),Wr=null,document.removeEventListener("click",a),document.removeEventListener("keydown",o)},o=l=>{l.key==="Escape"&&a()};document.addEventListener("click",a),document.addEventListener("keydown",o)})}),e}function kl(n,e){const t=Z("button","cp-bypass-btn"),i=()=>{const r=sn.has(n.key);t.textContent=r?"○":"●",t.title=r?`${n.label} is bypassed — click to enable`:`Click to bypass ${n.label}`,e.classList.toggle("cp-row-disabled",r)};return i(),t.addEventListener("click",()=>{Vv(n.key),i(),a0(n)}),t}const gn=new Map;function a0(n,e){var t;(t=gn.get(n.key))==null||t(oe[n.key])}function o0(n){const e=Z("div","cp-row");e.classList.toggle("cp-row-disabled",sn.has(n.key)),n.canDisable&&e.appendChild(kl(n,e));const t=Z("label","cp-label",{text:n.label,title:n.desc});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=Z("div","cp-slider-wrap"),r=Z("input","cp-slider",{id:`cp-${n.key}`,type:"range",min:n.min,max:n.max,step:n.step,value:oe[n.key]}),s=Z("input","cp-val-input",{type:"number",step:n.step,value:Gs(n,oe[n.key]),title:`Current value${n.unit?" ("+n.unit+")":""}`}),a=Z("button","cp-star-btn",{text:"★",title:"Save current value as default"});let o=Number(oe[n.key]);r.addEventListener("input",()=>{const c=parseFloat(r.value);En(n.key,c),s.value=Gs(n,c),updateTrack(c)}),s.addEventListener("change",()=>{const c=parseFloat(s.value);isNaN(c)||(En(n.key,c),r.value=String(Math.min(n.max,Math.max(n.min,c))),updateTrack(c))}),s.addEventListener("keydown",c=>{c.key==="Escape"&&(s.value=Gs(n,oe[n.key]))}),a.addEventListener("click",()=>{Il(n.key,oe[n.key])});let l=null;return n.key==="defaultParticleSize"&&(l=Z("button","cp-preset-btn cp-rule-mini",{text:"Apply All",title:"Scale all current particles by new/old default size"}),l.addEventListener("click",()=>{const c=Number(oe[n.key]),d=Number(o);!Number.isFinite(c)||!Number.isFinite(d)||d<=0||c<=0||(window.dispatchEvent(new CustomEvent("seesound:particle-size-apply-all",{detail:{oldDefaultSize:d,newDefaultSize:c}})),o=c)})),gn.set(n.key,c=>{r.value=String(Math.min(n.max,Math.max(n.min,c))),s.value=Gs(n,c),updateTrack(c),o=Number(c),e.classList.toggle("cp-row-disabled",sn.has(n.key))}),i.append(r,s,a,...l?[l]:[],Ol(n)),e.appendChild(i),e}function l0(n){const e=Z("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",sn.has(n.key)),n.canDisable&&e.appendChild(kl(n,e));const t=Z("label","cp-label",{text:n.label});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=Z("select","cp-dropdown",{id:`cp-${n.key}`});if(n.dropdownGroups)for(const s of n.dropdownGroups){const a=Z("optgroup","",{label:s.label});for(const o of s.options){const l=Z("option","",{value:o.value,text:o.label});String(o.value)===String(oe[n.key])&&(l.selected=!0),a.appendChild(l)}i.appendChild(a)}else for(const s of n.dropdownOptions??[]){const a=Z("option","",{value:s.value,text:s.label});String(s.value)===String(oe[n.key])&&(a.selected=!0),i.appendChild(a)}i.addEventListener("change",()=>{const s=i.value,a=Number(s);En(n.key,s!==""&&!isNaN(a)?a:s)});const r=Z("button","cp-star-btn",{text:"★",title:"Save as default"});return r.addEventListener("click",()=>Il(n.key,oe[n.key])),gn.set(n.key,s=>{i.value=String(s),e.classList.toggle("cp-row-disabled",sn.has(n.key))}),e.append(i,r,Ol(n)),e}function c0(n){const e=Z("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",sn.has(n.key)),n.canDisable&&e.appendChild(kl(n,e));const t=Z("label","cp-label",{text:n.label,title:n.desc});e.appendChild(t);const i=n.toggleLabels??["Off","On"],r=Z("div","cp-seg-group"),s=Number(oe[n.key]),a=i.map((l,c)=>{const d=Z("button","cp-seg-btn",{text:l});return s===c&&d.classList.add("active"),d.addEventListener("click",()=>{sn.has(n.key)||(En(n.key,c),a.forEach((f,u)=>f.classList.toggle("active",u===c)))}),d});r.append(...a);const o=Z("button","cp-star-btn",{text:"★",title:"Save as default"});return o.addEventListener("click",()=>Il(n.key,oe[n.key])),gn.set(n.key,l=>{const c=Number(l);a.forEach((d,f)=>d.classList.toggle("active",f===c)),e.classList.toggle("cp-row-disabled",sn.has(n.key))}),e.append(r,o,Ol(n)),e}function u0(){const n=Z("div","cp-preset-bar"),e="rule__";function t(){const C=document.activeElement;C instanceof HTMLElement&&C.closest(".cp-body")&&C.blur()}const i=Z("div","cp-preset-row"),r=Z("span","cp-preset-label",{text:"PROJECT"}),s=Z("button","cp-preset-btn",{text:"＋",title:"Create new project file (defaults)"}),a=Z("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save project (current file)"}),o=Z("button","cp-preset-btn",{text:"🖫+",title:"Save project as..."}),l=Z("button","cp-preset-btn",{text:"🗁",title:"Load project"}),c=Z("button","cp-preset-btn",{text:"🎨",title:"Open Palette Manager"}),d=Z("input","",{type:"file",accept:".ssp.json,.json"});d.style.display="none",i.append(r,s,a,o,l,c);const f=Z("div","cp-preset-row"),u=Z("select","cp-preset-sel"),m=Z("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset"}),g=Z("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});Z("div","cp-preset-row");const v=Z("input","cp-preset-name",{type:"text",placeholder:"preset_title"}),p=Z("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save current rule preset (Ctrl+P)"});f.append(u,m,g,v,p),n.append(i,f,d);let h=[];async function T(){var $;t(),window.dispatchEvent(new CustomEvent("seesound:commit-pending-color-edits"));const C=v.value.trim(),N=String(u.value||"").trim(),w=C||N;if(!w)return alert("Enter or select a preset name first."),v.focus(),!1;if(!C&&N&&(v.value=N),h.includes(w)&&!confirm(`Overwrite preset "${w}"?`))return!1;const b=(($=Sn==null?void 0:Sn.serialize)==null?void 0:$.call(Sn))??(Array.isArray(oe.ruleBlocks)?oe.ruleBlocks:[]),P=ma();return P.ruleBlocks=b,await _a(w,P),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")),await y(),u.value=w,!0}async function y(){h=(await ga()).filter(w=>!String(w||"").startsWith(e));const N=u.value;u.innerHTML='<option value="">select preset</option>';for(const w of h){const b=Z("option","",{value:w,text:w});u.appendChild(b)}N&&h.includes(N)&&(u.value=N)}const x=async C=>{var w;if(!C)return;const N=await Ul(C);if(N!=null&&N.params){Da(N.params);for(const b of Yi)(w=gn.get(b.key))==null||w(oe[b.key]);Sn==null||Sn.replaceFromRuleBlocks(Array.isArray(oe.ruleBlocks)?oe.ruleBlocks:[])}};u.addEventListener("change",()=>{u.value&&(v.value=u.value)}),m.addEventListener("click",async()=>{u.value&&await x(u.value)}),g.addEventListener("click",async()=>{u.value&&confirm(`Delete preset "${u.value}"?`)&&(await yd(u.value),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")),await y(),v.value="")}),p.addEventListener("click",async()=>{await T()}),s.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-new-request"))}),a.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-save-request"))}),o.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-save-as-request"))}),l.addEventListener("click",()=>{if(typeof window.showOpenFilePicker=="function"){window.dispatchEvent(new CustomEvent("seesound:project-open-request"));return}d.click()}),c.addEventListener("click",()=>{i0()}),d.addEventListener("change",async C=>{var w;const N=(w=C.target.files)==null?void 0:w[0];if(N)try{const b=await N.text(),P=Td(b);window.dispatchEvent(new CustomEvent("seesound:project-load-request",{detail:{payload:P,fileName:N.name}}))}catch(b){console.warn("[Project] load parse failed:",b),alert("Failed to load project file.")}finally{d.value=""}}),v.addEventListener("keydown",C=>{C.key==="Enter"&&p.click()});const R=window.__seesoundShortcutAbort;R&&typeof R.abort=="function"&&R.abort();const A=new AbortController;return window.__seesoundShortcutAbort=A,document.addEventListener("keydown",async C=>{if(C.defaultPrevented||C.altKey||!(C.ctrlKey||C.metaKey))return;const N=String(C.key||"").toLowerCase();if(N==="s"){C.preventDefault(),C.stopPropagation(),window.dispatchEvent(new CustomEvent("seesound:project-save-request"));return}N==="p"&&!C.shiftKey&&(C.preventDefault(),C.stopPropagation(),await T())},{signal:A.signal}),window.addEventListener("seesound:project-loaded",async C=>{var w;const N=String(((w=C==null?void 0:C.detail)==null?void 0:w.presetName)||"").trim();if(await y(),!!N){if(h.includes(N)){u.value=N,v.value=N;return}v.value=N}}),y(),n}function d0(){const n=Z("div","cp-canvas-size"),e=Z("div","cp-canvas-size-title",{text:"Canvas Size"}),t=Z("div","cp-canvas-size-row"),i=Z("div","cp-canvas-size-row"),r=Z("div","cp-canvas-size-row"),s=Z("label","cp-canvas-size-label",{text:"↔"}),a=Z("input","cp-canvas-size-input",{type:"number",step:"1",min:"160",value:String(Math.max(160,Number(oe.canvasWidth??0)||160))}),o=Z("label","cp-canvas-size-label",{text:"↕"}),l=Z("input","cp-canvas-size-input",{type:"number",step:"1",min:"120",value:String(Math.max(120,Number(oe.canvasHeight??0)||120))}),c=Z("label","cp-canvas-size-label",{text:"%"}),d=Z("input","cp-canvas-size-input",{type:"number",step:"1",min:"5",max:"400",value:String(Math.max(5,Math.min(400,Math.floor(Number(oe.canvasScale??100)||100))))}),f=Z("button","cp-preset-btn cp-rule-mini",{text:"Apply"}),u=Z("div","cp-canvas-size-label",{text:"BG HSL"}),m=Z("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"360",value:String(Math.max(0,Math.min(360,Math.floor(Number(oe.defaultBackgroundHue??0)||0))))}),g=Z("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(oe.defaultBackgroundSaturation??0)||0))))}),v=Z("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(oe.defaultBackgroundLightness??0)||0))))}),p=Z("div","cp-canvas-size-label",{text:"Origin"}),h=Z("button","cp-preset-btn cp-rule-mini",{text:"On",title:"Toggle origin sign visibility"}),T=Z("div","cp-canvas-size-label",{text:"Size: 250 units"});let y=!0;const x=()=>{h.textContent=y?"On":"Off",h.setAttribute("aria-pressed",y?"true":"false")};h.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:origin-sign-toggle",{detail:{enabled:!y}}))}),window.addEventListener("seesound:origin-sign-state",b=>{var $;const P=($=b==null?void 0:b.detail)==null?void 0:$.enabled;typeof P=="boolean"&&(y=P,x())});const R={w:0,h:0,s:100};function A(b,P,$,X){const J=Number(b);return Number.isFinite(J)?Math.max(P,Math.min($,Math.floor(J))):X}function C(){const b=Number(oe.canvasWidth),P=Number(oe.canvasHeight),$=Number(oe.canvasScale),X=Number.isFinite(b)&&b>0?b:R.w,J=Number.isFinite(P)&&P>0?P:R.h,V=Number.isFinite($)&&$>0?$:R.s;document.activeElement!==a&&(a.value=String(Math.max(160,Math.floor(X||160)))),document.activeElement!==l&&(l.value=String(Math.max(120,Math.floor(J||120)))),document.activeElement!==d&&(d.value=String(Math.max(5,Math.min(400,Math.floor(V||100))))),document.activeElement!==m&&(m.value=String(A(oe.defaultBackgroundHue,0,360,0))),document.activeElement!==g&&(g.value=String(A(oe.defaultBackgroundSaturation,0,100,0))),document.activeElement!==v&&(v.value=String(A(oe.defaultBackgroundLightness,0,100,0)))}function N(){const b=Math.max(160,Math.floor(Number(a.value)||160)),P=Math.max(120,Math.floor(Number(l.value)||120)),$=Math.max(5,Math.min(400,Math.floor(Number(d.value)||100)));En("canvasWidth",b),En("canvasHeight",P),En("canvasScale",$)}function w(){En("defaultBackgroundHue",A(m.value,0,360,0)),En("defaultBackgroundSaturation",A(g.value,0,100,0)),En("defaultBackgroundLightness",A(v.value,0,100,0))}return a.addEventListener("change",N),l.addEventListener("change",N),a.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),N(),a.blur())}),l.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),N(),l.blur())}),d.addEventListener("change",N),d.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),N(),d.blur())}),m.addEventListener("change",w),g.addEventListener("change",w),v.addEventListener("change",w),m.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),w(),m.blur())}),g.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),w(),g.blur())}),v.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),w(),v.blur())}),f.addEventListener("click",N),gn.set("canvasWidth",()=>C()),gn.set("canvasHeight",()=>C()),gn.set("canvasScale",()=>C()),gn.set("defaultBackgroundHue",()=>C()),gn.set("defaultBackgroundSaturation",()=>C()),gn.set("defaultBackgroundLightness",()=>C()),Ji((b,P)=>{(P==="canvasWidth"||P==="canvasHeight"||P==="canvasScale"||P==="defaultBackgroundHue"||P==="defaultBackgroundSaturation"||P==="defaultBackgroundLightness")&&C()}),window.addEventListener("seesound:canvas-size",b=>{var P,$,X;R.w=Number((P=b==null?void 0:b.detail)==null?void 0:P.w)||R.w,R.h=Number(($=b==null?void 0:b.detail)==null?void 0:$.h)||R.h,R.s=Number((X=b==null?void 0:b.detail)==null?void 0:X.s)||R.s,C()}),t.append(s,a,o,l,c,d,f),i.append(u,m,g,v),r.append(p,h,T),n.append(e,t,i,r),C(),x(),n}function h0(n,e,t){const i=Z("div",`cp-group${t?" cp-open":""}`),r=Z("button","cp-group-header");r.innerHTML=`<span class="cp-group-chevron">${t?"▾":"▸"}</span><span>${n.label}</span><span class="cp-group-count">${e.length}</span>`;const s=Z("div","cp-group-body");s.style.display=t?"":"none";for(const o of e)o.isDropdown?s.appendChild(l0(o)):o.isToggle?s.appendChild(c0(o)):s.appendChild(o0(o));let a=t;return r.setAttribute("aria-expanded",String(a)),r.addEventListener("click",()=>{a=!a,i.classList.toggle("cp-open",a),s.style.display=a?"":"none",r.setAttribute("aria-expanded",String(a));const o=r.querySelector(".cp-group-chevron");o&&(o.textContent=a?"▾":"▸")}),i.append(r,s),i}const f0=fd().entries;function uu(n){const e=new Set(["binMagnitude","binEnergy","binFreq","frequencyHz","normFreq","notePitchClass","octave"]),t=new Set(["binPhase","binFlux","binPhaseDeviation","binPhasedeviation","binAttackTime","binEnvelope","binEnvelopeState","binRMSEnergy"]),i=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime"]),r=new Set(["globalRmsEnergy","spectralCentroid","spectralFlux","spectralFlatness","inharmonicity","peakAmplitude","zeroCrossingRate","spectralRolloff","spectralSpread","spectralSkewness","chromagram"]);return e.has(n)?0:t.has(n)?1:i.has(n)?2:r.has(n)?3:n.startsWith("canvas")?4:n==="audioLengthSec"?5:6}function Ad(n){return[...n].sort((e,t)=>{const i=uu(e)-uu(t);return i!==0?i:String(e).localeCompare(String(t))})}const va=Ad(f0.filter(n=>!n.hidden).map(n=>n.id));let di=[...va];const Bl=Tv().entries,p0=Bl.map(n=>n.id),Rd=new Map(Bl.map(n=>[n.id,n])),m0=["always",">",">=","<","<=","==","!="],Kr=[...Cr],Cd=[...Pl],Ht=" / ";let Sn=null;function g0(n){const e=new Set(va),t=Array.isArray(n)?[...new Set(n)].filter(i=>e.has(i)):[];di=Ad([...new Set([...t,...va])])}function ts(n=0){return`rule-${Math.max(1,Math.floor(n)+1)}`}function Pd(){return`rule-ui-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function du(n=0){return{id:ts(n),group:"",subgroup:"",enabled:!0,target:"spawnedParticles",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",value:1}],order:n}}function zl(n){return n==="shapeType"}function wi(n){const e=String((n==null?void 0:n.context)||"").toLowerCase();if(e.includes("background"))return"background";if(e.includes("camera"))return"camera";if(e.includes("particle"))return"spawnedParticles";const t=typeof(n==null?void 0:n.target)=="string"?n.target:"";return Kr.includes(t)?t:(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function hl(n){return Bl.filter(e=>!Array.isArray(e.targets)||e.targets.includes(n)).map(e=>e.id)}function _0(n){var i,r;if(!n||n.type!=="number")return!1;const e=Number((i=n==null?void 0:n.range)==null?void 0:i[0]),t=Number((r=n==null?void 0:n.range)==null?void 0:r[1]);return Number.isFinite(e)&&Number.isFinite(t)&&e===0&&t===1}function hu(n){if(n==="rgb"||n==="hsv")return n;const e=Rd.get(n);return _0(e)?`${n} (norm)`:n}function _o(n){const e=hl(n.target);if(e.length===0){n.actionOutput="opacity";return}e.includes(n.actionOutput)||(n.actionOutput=e[0])}function v0(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function x0(n,e){const t=v0(n);if(!t||!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(t))return 0;const i={clamp:(r,s,a)=>Math.max(s,Math.min(a,r)),lerp:(r,s,a)=>r+(s-r)*a,smoothstep:(r,s,a)=>{const o=Math.max(0,Math.min(1,(a-r)/Math.max(1e-9,s-r)));return o*o*(3-2*o)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,PI:Math.PI,E:Math.E};for(const r of va)i[r]=Number(e==null?void 0:e[r])||0;try{const r=Object.keys(i),s=r.map(c=>i[c]),o=new Function(...r,`return (${t});`)(...s);if(typeof o=="boolean")return o?1:0;const l=Number(o);return Number.isFinite(l)?l:0}catch{return 0}}function b0(n){var a,o;const e=Rd.get(n);if(!e)return 0;if(e.type==="enum")return n==="shapeType"?"square":Array.isArray(e.values)&&e.values.length>0?e.values[0]:0;const t=Number((a=e==null?void 0:e.range)==null?void 0:a[0]),i=Number((o=e==null?void 0:e.range)==null?void 0:o[1]),r=Number.isFinite(t),s=Number.isFinite(i);return r&&s?(t+i)*.5:r&&!s?t===0?1:t:!r&&s?i===0?-1:i:1}function y0(n,e){if(!(n!=null&&n.conditionEnabled)||(n==null?void 0:n.conditionOp)==="always")return!0;const t=Number(e==null?void 0:e[n.conditionInput])||0,i=n.conditionRhsMode==="input"?Number(e==null?void 0:e[n.conditionRhsInput])||0:Number(n.conditionRhsLiteral)||0;switch(n.conditionOp){case">":return t>i;case">=":return t>=i;case"<":return t<i;case"<=":return t<=i;case"==":return t===i;case"!=":return t!==i;default:return!0}}function M0(n,e){const t=String((n==null?void 0:n.actionValueText)||"").trim();if(!t)return 0;if(di.includes(t))return Number(e==null?void 0:e[t])||0;if(zl(n==null?void 0:n.actionOutput))return t==="circle"?"circle":"square";const i=Number(t);return Number.isFinite(i)?i:x0(t,e)}function fu(n,e){const t=new Map,i=new Map,r=s=>(t.has(s)||t.set(s,Object.create(null)),t.get(s));for(const s of n){const a=wi(s),o=r(a),l=s.actionOutput;l in o||(o[l]=b0(l));const c=o[l];let d=c;if(s.enabled!==!1&&y0(s,e)){const f=M0(s,e);if(zl(l))d=String(f)==="circle"?"circle":"square";else{const u=Number(c),m=Number(f),g=Number.isFinite(u)?u:0,v=Number.isFinite(m)?m:0;switch(s.actionOp){case"set":d=v;break;case"add":d=g+v;break;case"subtract":d=g-v;break;case"multiply":d=g*v;break;case"divide":d=Math.abs(v)>1e-6?g/v:g;break;case"clamp":d=Math.max(-Math.abs(v),Math.min(Math.abs(v),g));break;default:d=g;break}}o[l]=d}i.set(s._uid,{inKey:l,outKey:l,inValue:c,outValue:d})}return i}function Vs(n,e,t){n.innerHTML="";for(const i of e){const r=Z("option","",{value:i.value,text:i.label});String(i.value)===String(t)&&(r.selected=!0),n.appendChild(r)}typeof n._autoSize=="function"&&n._autoSize()}function vo(n,e){const t={operator:n.conditionEnabled?n.conditionOp:"always"};n.conditionEnabled&&n.conditionOp!=="always"&&(t.input=n.conditionInput,n.conditionRhsMode==="input"?t.valueInput=n.conditionRhsInput:t.value=Number(n.conditionRhsLiteral));const i={operator:n.actionOp,output:n.actionOutput},r=String(n.actionValueText??"").trim();if(zl(n.actionOutput))i.value=r==="circle"?"circle":"square";else{const s=Number(r);r&&Number.isFinite(s)?i.value=s:di.includes(r)?i.input=r:i.expression=r}return{id:n.id,group:Nt(n.group),subgroup:"",enabled:!!n.enabled,target:n.target,condition:t,actions:[i],order:e}}function Xr(n,e){var c,d,f,u,m;const t=Array.isArray(n.actions)&&n.actions[0]?n.actions[0]:{operator:"set",output:"opacity",value:1},i=((c=n.condition)==null?void 0:c.operator)||"always",r=i!=="always",s=typeof t.expression=="string"?t.expression:typeof t.input=="string"&&t.input.trim()?t.input.trim():t.value==="circle"||t.value==="square"?t.value:Number.isFinite(Number(t.value))?String(Number(t.value)):"1",a=typeof n.group=="string"?n.group:"",o=typeof n.subgroup=="string"?n.subgroup:"",l=Nt(o?`${a||""}/${o}`:a);return{_uid:typeof n._uid=="string"&&n._uid?n._uid:Pd(),id:typeof n.id=="string"&&n.id.trim()?n.id.trim():ts(e),group:l,subgroup:"",enabled:n.enabled!==!1,target:wi(n),conditionEnabled:r,conditionOp:i,conditionInput:di.includes((d=n.condition)==null?void 0:d.input)?n.condition.input:"amplitude",conditionRhsMode:(f=n.condition)!=null&&f.valueInput?"input":"literal",conditionRhsInput:di.includes((u=n.condition)==null?void 0:u.valueInput)?n.condition.valueInput:"amplitude",conditionRhsLiteral:Number.isFinite(Number((m=n.condition)==null?void 0:m.value))?Number(n.condition.value):.5,actionOutput:p0.includes(t.output)?t.output:"opacity",actionOp:Cd.includes(t.operator)?t.operator:"set",actionValueText:s,uiState:n.uiState||"normal",order:Number.isFinite(n.order)?Number(n.order):e}}function Ws(n){if(typeof n=="string")return n;const e=Number(n);return Number.isFinite(e)?e.toFixed(3):"0.000"}function ls(n){return String(n||"").split("/").map(e=>String(e||"").trim()).filter(Boolean)}function xa(n){return Array.isArray(n)?n.map(e=>String(e||"").trim()).filter(Boolean).join(Ht):""}function Nt(n){return xa(ls(String(n||"").replaceAll(Ht,"/")))}function $r(n){const e=ls(String(n||"").replaceAll(Ht,"/"));return e.length<=1?"":xa(e.slice(0,-1))}function qr(n,e){const t=ls(String(n||"").replaceAll(Ht,"/")),i=String(e||"").trim();return xa(i?[...t,i]:t)}function S0(n){return`When ${!n.conditionEnabled||n.conditionOp==="always"?"always":`${n.conditionInput} ${n.conditionOp} ${n.conditionRhsMode==="input"?n.conditionRhsInput:Number(n.conditionRhsLiteral).toFixed(2)}`}, ${n.actionOp} ${n.actionOutput} using ${String(n.actionValueText||"0")}`}function E0(n){const t=(()=>{const i=Array.isArray(oe==null?void 0:oe.palettes)?oe.palettes:[],r=[];for(const s of i){const a=String((s==null?void 0:s.id)||"").trim();!a||r.includes(a)||r.push(a)}return r})().flatMap(i=>{const r=i.replace(/'/g,"\\'");return[{value:`expr:palette('${r}', notePitchClass)`,label:`Discrete palette by notePitchClass (${i})`},{value:`expr:gradient('${r}', normFreq)`,label:`Gradient palette by normFreq (${i})`}]});return n==="rgb"?[{value:"",label:"rgb templates..."},{value:"expr:rgb(amplitude*255, bass*255, high*255)",label:"RGB from amp/bass/high"},...t,{value:"expr:matchLuma(220,60,40, amplitude*255)",label:"Luma-matched tone"},...t.length===0?[{value:"",label:"save a palette to unlock palette templates"}]:[]]:n==="hsv"?[{value:"",label:"hsv templates..."},{value:"expr:hsv(normFreq*360, 85, 60 + amplitude*40)",label:"HSV musical ramp"},{value:"expr:hsv((notePitchClass/12)*360, 90, 65)",label:"HSV by pitch class"},{value:"expr:hsv((octave+1)*30, 80, 70)",label:"HSV by octave"},...t,...t.length===0?[{value:"",label:"save a palette to unlock palette templates"}]:[]]:[{value:"",label:"template..."}]}function pn(n,e,t="cp-rule-input"){const i=Z("select",t);for(const s of n){const a=Z("option","",{value:s.value,text:s.label});String(s.value)===String(e)&&(a.selected=!0),i.appendChild(a)}const r=()=>{const s=i.options[i.selectedIndex],a=s?String(s.textContent||s.value||""):"",o=getComputedStyle(i).font||"10px sans-serif";pn._canvas||(pn._canvas=document.createElement("canvas"),pn._ctx=pn._canvas.getContext("2d"));const l=pn._ctx;if(!l)return;l.font=o;const c=Math.ceil(l.measureText(a).width),d=Math.max(50,Math.min(280,c+30));i.style.width=`${d}px`};return i._autoSize=r,i.addEventListener("change",r),i.addEventListener("focus",r),requestAnimationFrame(r),i}function fl(n){if(!(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement))return;let e=!1,t=!1;n.addEventListener("pointerdown",()=>{if(!t){e=!0;return}e=!1,t=!1}),n.addEventListener("focus",()=>{e&&(e=!1,requestAnimationFrame(()=>{try{n.select(),t=!0}catch{t=!1}}))}),n.addEventListener("blur",()=>{e=!1,t=!1})}function w0(n,e="0.01",t="cp-rule-input cp-rule-num"){const i=Z("input",t,{type:"number",value:String(n),step:e});return fl(i),i}function T0(n){if(!n)return null;const e=Z("div","cp-rule-section"),t=Z("div","cp-rule-header"),i=Z("span","cp-rule-title",{text:"Rule Builder"});t.append(i);const r=Z("div","cp-rule-error"),s=Z("div","cp-rule-rows"),a=Z("div","cp-rule-preset"),o=Z("select","cp-preset-sel"),l=Z("input","cp-preset-name",{type:"text",placeholder:"single_rule_preset"}),c=Z("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save selected rule as preset"}),d=Z("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset (append)"}),f=Z("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});a.append(o,d,f,l,c),e.append(t,r,a,s),n.appendChild(e);let u=(Array.isArray(oe.ruleBlocks)?oe.ruleBlocks:[]).map(Xr),m=!1,g=-1,v=[],p=-1;const h=new Map,T=new Set,y=new Set,x=new Set,R=new Set;let A="",C="spawnedParticles";const N="rule__";let w=[],b=Object.create(null),P=null,$=null,X=0;function J(){const E=oe.ruleUiState&&typeof oe.ruleUiState=="object"?oe.ruleUiState:{};T.clear(),y.clear(),x.clear(),h.clear();for(const B of Array.isArray(E.collapsedGroups)?E.collapsedGroups:[]){const ne=String(B||"").trim();ne&&(ne.startsWith("context::")?y.add(ne):T.add(ne))}const k=new Set((Array.isArray(E.collapsedRules)?E.collapsedRules:[]).map(B=>String(B||"").trim()).filter(Boolean));for(const B of u)k.has(String(B.id||"").trim())&&x.add(B._uid);const j=Array.isArray(E.standaloneGroups)?E.standaloneGroups:[];for(const B of j){const ne=String(B||"").trim();if(!ne)continue;const ce=ne.indexOf("::");if(ce<=0)continue;const ye=ne.slice(0,ce),Be=Nt(ne.slice(ce+2));Be&&be(Be,ye)}C=String(E.selectedContextGroup||C||"spawnedParticles"),A=Nt(E.selectedGroupPath||E.selectedGroupName||"")}function V(){const E=u.filter(j=>x.has(j._uid)).map(j=>String(j.id||"").trim()).filter(Boolean),k=[];for(const[j,B]of h.entries()){const ne=Nt(j);if(!(!ne||!(B instanceof Set)))for(const ce of B)Cr.includes(ce)&&k.push(`${ce}::${ne}`)}En("ruleUiState",{collapsedGroups:[...T,...y],collapsedSubgroups:[],collapsedRules:E,standaloneGroups:k,selectedContextGroup:C,selectedGroupPath:A,selectedGroupName:A,selectedSubgroup:""})}function H(){P&&clearTimeout(P),P=setTimeout(()=>{P=null,V()},120)}J();function se(){const E=document.activeElement;E instanceof HTMLElement&&E.closest(".cp-rule-section")&&E.blur()}function q(){return s.closest(".cp-pane-body")||s}function le(){X=0,$&&(clearInterval($),$=null)}function ve(E){const k=E<0?-1:1;$&&X===k||(le(),X=k,$=setInterval(()=>{const j=q();j.scrollTop+=X*14},16))}function Ee(E){const j=q().getBoundingClientRect(),B=36;if(E<=j.top+B){ve(-1);return}if(E>=j.bottom-B){ve(1);return}le()}function Ze(E){const k=new Set(u.map(ne=>String(ne.id||"").trim()).filter(Boolean)),j=String(E||"").trim()||ts(u.length);if(!k.has(j))return j;let B=2;for(;k.has(`${j}-${B}`);)B++;return`${j}-${B}`}function re(E){if(E<0||E>=u.length)return;const k=u[E],j={...k,_uid:Pd(),id:Ze(k.id||ts(u.length)),uiState:"normal"};u.splice(E+1,0,j),ie()}function O(E){E!=null&&E.compileStatus,r.textContent=E!=null&&E.compileError?`Compile error: ${E.compileError}${E.compileLine?` (line ${E.compileLine})`:""}`:Array.isArray(E==null?void 0:E.rejected)&&E.rejected.length>0?`Rejected rules: ${E.rejected.map(k=>k.id).join(", ")}`:""}function ie(){const E=new Set(u.map(ne=>ne._uid));for(const ne of[...R])E.has(ne)||R.delete(ne);for(const ne of[...x])E.has(ne)||x.delete(ne);for(const ne of u)_o(ne);const k=u.map((ne,ce)=>vo(ne,ce)),j=Fv(k),B=new Set(j.redRuleIds);u=u.map(ne=>({...ne,uiState:B.has(ne.id)?"red":"normal"})),m=!0,En("ruleBlocks",j.rules),m=!1,O({compileStatus:"stale",compileError:null}),ke()}function de(E){return k=>{E(k)!==!1&&ie()}}function ae(E){return String(E||"").trim()}function be(E,k=null){const j=ae(E);j&&(h.has(j)||h.set(j,new Set),k&&Cr.includes(k)&&h.get(j).add(k))}function qe(){for(const E of u){const k=ae(E.group);k&&be(k,wi(E))}}function Ve(E){const k=E instanceof Element?E:null;return k?!!k.closest("input,select,button,textarea,label,.cp-rule-slot-add"):!1}function yt(E){E<0||E>=u.length||(R.clear(),R.add(u[E]._uid),p=E,A="")}function ct(E){if(E<0||E>=u.length)return;if(p<0||p>=u.length){yt(E);return}const k=Math.min(p,E),j=Math.max(p,E);R.clear();for(let B=k;B<=j;B++)R.add(u[B]._uid);A=""}function Rt(E){if(E<0||E>=u.length)return;const k=u[E]._uid;R.has(k)?R.delete(k):R.add(k),p=E,A=""}function D(E,k){if(E<0||E>=u.length)return;const j=!!(k.ctrlKey||k.metaKey);k.shiftKey?ct(E):j?Rt(E):yt(E),ke()}function it(E){const k=E instanceof Element?E:null;return k?!!k.closest('input,textarea,select,[contenteditable="true"]'):!1}function He(E){const k=[...new Set((E||[]).filter(j=>j>=0&&j<u.length))].sort((j,B)=>j-B);if(k.length===0)return!1;for(let j=k.length-1;j>=0;j--)u.splice(k[j],1);return R.clear(),A="",!0}function Qe(){const E=Ce();if(E.length===0)return!1;const k=He(E);return k&&ie(),k}function Ce(){const E=[];for(let k=0;k<u.length;k++)R.has(u[k]._uid)&&E.push(k);return E}function dt(E){return E.startsWith(N)?E.slice(N.length):E}async function Ie(){w=(await ga()).filter(j=>String(j||"").startsWith(N));const k=String(o.value||"");o.innerHTML='<option value="">rule presets</option>';for(const j of w){const B=Z("option","",{value:j,text:dt(j)});o.appendChild(B)}k&&w.includes(k)&&(o.value=k)}async function S(){se();const E=Ce();if(E.length<1){alert("Select one or more rules to save as a rule preset.");return}const k=String(l.value||dt(String(o.value||""))).trim();if(!k){alert("Enter a single-rule preset name first."),l.focus();return}const j=`${N}${k}`;if(w.includes(j)&&!confirm(`Overwrite single-rule preset "${k}"?`))return;const B=E.map((ce,ye)=>vo(u[ce],ye)),ne=ma();ne.ruleBlocks=B,await _a(j,ne),await Ie(),o.value=j,l.value=k}async function _(E){var B;if(!E)return;const k=await Ul(E),j=Array.isArray((B=k==null?void 0:k.params)==null?void 0:B.ruleBlocks)?k.params.ruleBlocks:[];if(j.length===0){alert("Selected rule preset has no rule block.");return}for(const ne of j)u.push(Xr(ne,u.length));ie()}function L(E,k="",j=C){let B=v.map(Ae=>u.findIndex(Mt=>Mt._uid===Ae)).filter(Ae=>Ae>=0).sort((Ae,Mt)=>Ae-Mt);if(B.length===0&&(B=Ce()),B.length===0&&g>=0&&g<u.length&&(B=[g]),B.length===0)return;const ne=new Set(B);if(E>=0&&E<=u.length){const Ae=E-1;if(ne.has(E)||Ae>=0&&ne.has(Ae)){g=-1,v=[];return}}const ce=B.map(Ae=>u[Ae]);for(let Ae=B.length-1;Ae>=0;Ae--)u.splice(B[Ae],1);let ye=Math.max(0,Math.min(u.length,E));for(const Ae of B)Ae<ye&&ye--;const Be=Nt(k),Ye=Kr.includes(j)?j:C;for(const Ae of ce)Kr.includes(Be)?(Ae.target=Be,Ae.group="",Ae.subgroup=""):(Ae.target=Ye,Ae.group=Be,Ae.subgroup="");u.splice(ye,0,...ce),be(Be),R.clear();for(const Ae of ce)R.add(Ae._uid);p=u.findIndex(Ae=>Ae._uid===ce[ce.length-1]._uid),A=Be,g=-1,v=[],ie()}function G(E,k="",j=C){L(E,k,j)}function K(E,k="",j=C){const B=Xr(du(u.length),u.length),ne=Nt(k),ce=Kr.includes(j)?j:C;Kr.includes(ne)?(B.target=ne,B.group="",B.subgroup=""):(B.target=ce,B.group=ne,B.subgroup="");const ye=Math.max(0,Math.min(u.length,E));u.splice(ye,0,B),be(B.group),A=ne,ie()}function te(E,k){if(E<0||E>=u.length)return;const j=ae(u[E].group),B=[];for(let Be=0;Be<u.length;Be++)ae(u[Be].group)===j&&B.push(Be);const ne=B.indexOf(E);if(ne<0)return;const ce=ne+k;if(ce<0||ce>=B.length)return;const ye=B[ce];[u[E],u[ye]]=[u[ye],u[E]],ie()}function we(E,k,j){const B=R.has(E._uid),ne=Z("div",`cp-rule-row${E.uiState==="red"?" cp-rule-row-red":""}${B?" cp-rule-row-selected":""}`);ne.draggable=!0,ne.dataset.ruleIndex=String(k),ne.dataset.ruleUid=E._uid,ne.addEventListener("click",pe=>{if(Ve(pe.target))return;const nt=pe.target instanceof Element?pe.target:null;!nt||!(nt===ne||nt.classList.contains("cp-rule-row-top")||nt.classList.contains("cp-rule-body")||nt.classList.contains("cp-rule-line"))||D(k,pe)}),ne.addEventListener("dragstart",pe=>{if(Ve(pe.target)){pe.preventDefault();return}R.has(E._uid)||yt(k),v=Ce().map(nt=>u[nt]._uid),g=k,pe.dataTransfer&&(pe.dataTransfer.effectAllowed="move",pe.dataTransfer.setData("text/plain",E._uid)),ne.classList.add("cp-rule-row-dragging")}),ne.addEventListener("dragover",pe=>{pe.preventDefault(),Ee(pe.clientY)}),ne.addEventListener("drop",pe=>{pe.preventDefault(),pe.stopPropagation(),le(),G(k+1,Nt(E.group),wi(E))}),ne.addEventListener("dragend",()=>{le(),g=-1,v=[],ne.classList.remove("cp-rule-row-dragging")});const ce=Z("div","cp-rule-row-top"),ye=x.has(E._uid),Be=Z("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:ye?"▸":"▾",title:ye?"Expand rule":"Collapse rule"});Be.addEventListener("click",pe=>{pe.preventDefault(),pe.stopPropagation(),x.has(E._uid)?x.delete(E._uid):x.add(E._uid),H(),ke()});const Ye=Z("span","cp-rule-index",{text:`#${k+1}`}),Ae=Z("input","cp-rule-input cp-rule-name",{type:"text",value:E.id,placeholder:"rule name"});fl(Ae);const Mt=Z("input","cp-rule-toggle",{type:"checkbox"});Mt.checked=!!E.enabled,Mt.addEventListener("change",de(()=>(E.enabled=Mt.checked,!0))),Ae.addEventListener("keydown",de(pe=>{if(pe.key!=="Enter")return!1;pe.preventDefault();const nt=String(Ae.value||"").trim();return E.id=nt||ts(k),Ae.value=E.id,Ae.blur(),!0}));const Et=Z("button","cp-preset-btn cp-rule-mini",{text:"Move Up"}),Pt=Z("button","cp-preset-btn cp-rule-mini",{text:"↓"}),Dt=Z("button","cp-preset-btn cp-rule-mini",{text:"❐"});Dt.title="Duplicate rule";const me=Z("button","cp-preset-btn cp-rule-mini cp-preset-del",{text:"🗙"});Et.textContent="↑",Et.addEventListener("click",()=>te(k,-1)),Pt.addEventListener("click",()=>te(k,1)),Dt.addEventListener("click",()=>re(k)),me.addEventListener("click",()=>{const pe=Ce();if(pe.length>1&&R.has(E._uid)){for(let nt=pe.length-1;nt>=0;nt--)u.splice(pe[nt],1);R.clear(),ie();return}u.splice(k,1),R.delete(E._uid),x.delete(E._uid),ie()}),ce.append(Be,Ye,Ae,Mt,Et,Pt,Dt,me);const je=Z("div","cp-rule-line");je.appendChild(Z("span","cp-rule-k",{text:"IF"}));const ht=Z("button","cp-preset-btn cp-rule-mini",{type:"button",text:"+"}),Vt=Z("button","cp-preset-btn cp-rule-mini cp-preset-del",{type:"button",text:"🗙"}),rt=pn(m0.map(pe=>({value:pe,label:pe})),E.conditionOp),M=pn(di.map(pe=>({value:pe,label:pe})),E.conditionInput),F=pn([{value:"literal",label:"literal"},{value:"input",label:"input"}],E.conditionRhsMode),W=w0(E.conditionRhsLiteral),Y=pn(di.map(pe=>({value:pe,label:pe})),E.conditionRhsInput),U=()=>{const pe=!!E.conditionEnabled;ht.style.display=pe?"none":"",Vt.style.display=pe?"":"none",rt.style.display=pe?"":"none";const nt=rt.value==="always";M.style.display=pe&&!nt?"":"none",F.style.display=pe&&!nt?"":"none",W.style.display=pe&&!nt&&F.value==="literal"?"":"none",Y.style.display=pe&&!nt&&F.value==="input"?"":"none",pe||(E.conditionOp="always")};ht.addEventListener("click",de(()=>(E.conditionEnabled=!0,(!E.conditionOp||E.conditionOp==="always")&&(E.conditionOp=">"),rt.value=E.conditionOp,U(),!0))),Vt.addEventListener("click",de(()=>(E.conditionEnabled=!1,E.conditionOp="always",rt.value="always",U(),!0))),rt.addEventListener("change",de(()=>(E.conditionOp=rt.value,U(),!0))),M.addEventListener("change",de(()=>(E.conditionInput=M.value,!0))),F.addEventListener("change",de(()=>(E.conditionRhsMode=F.value,U(),!0))),W.addEventListener("keydown",de(pe=>pe.key!=="Enter"?!1:(pe.preventDefault(),E.conditionRhsLiteral=Number(W.value),W.blur(),!0))),Y.addEventListener("change",de(()=>(E.conditionRhsInput=Y.value,!0))),je.append(ht,Vt,rt,M,F,W,Y),U();const he=Z("div","cp-rule-line");he.appendChild(Z("span","cp-rule-k",{text:"Action"})),_o(E);const _e=pn(hl(E.target).map(pe=>({value:pe,label:hu(pe)})),E.actionOutput),Ne=pn(Cd.map(pe=>({value:pe,label:pe})),E.actionOp),De=Z("div","cp-rule-expr-wrap"),ue=Z("textarea","cp-rule-input cp-rule-expr",{placeholder:"value / formula / input id (e.g. bass*0.5 + 0.2)"});fl(ue),ue.value=E.actionValueText||"";const Je=Z("div","cp-rule-expr-controls"),Oe=pn([],"","cp-rule-input cp-rule-tag"),ot=pn([],"","cp-rule-input cp-rule-tag"),ze=pn([],"","cp-rule-input cp-rule-tag"),$e=Z("button","cp-preset-btn cp-rule-mini",{type:"button",text:"🗑",title:"Clear expression"}),lt=Z("div","cp-rule-expr-suggest");Je.append(Oe,ot,ze,$e),De.append(ue,Je,lt);const mt=["+","-","*","/","(",")","clamp(","min(","max(","abs(","pow(","PI","E","and","or","not"],Xe=["square","circle"],Bt=()=>{_o(E);const pe=hl(E.target).map(_t=>({value:_t,label:hu(_t)}));Vs(_e,pe,E.actionOutput);const nt=_e.value==="rgb"||_e.value==="hsv";nt&&Vs(Oe,E0(_e.value),""),Oe.style.display=nt?"":"none";const wt=_e.value==="shapeType";Vs(ot,wt?[{value:"",label:"+ shape..."},...Xe.map(_t=>({value:_t,label:_t}))]:[{value:"",label:"+ input..."},...di.map(_t=>({value:_t,label:_t}))],""),Vs(ze,[{value:"",label:"+ math..."},...mt.map(_t=>({value:_t,label:_t}))],""),ze.style.display=wt?"none":"",wt?ue.placeholder!=="shape: square or circle"&&(ue.placeholder="shape: square or circle"):ue.placeholder!=="value / formula / input id (e.g. bass*0.5 + 0.2)"&&(ue.placeholder="value / formula / input id (e.g. bass*0.5 + 0.2)"),wt&&(lt.style.display="none",lt.innerHTML="")},bt=()=>[...new Set(di)];let jt=0,bn=0,Ut=[],Wt=-1;function gt(){const pe=String(ue.value||""),nt=Number.isFinite(ue.selectionStart)?ue.selectionStart:pe.length,wt=Number.isFinite(ue.selectionEnd)?ue.selectionEnd:nt;jt=Math.max(0,Math.min(pe.length,nt)),bn=Math.max(jt,Math.min(pe.length,wt))}function Jt(pe){const nt=Array.from(lt.querySelectorAll(".cp-rule-expr-suggest-btn"));if(nt.length===0){Wt=-1;return}const wt=Math.max(0,Math.min(nt.length-1,pe));Wt=wt;for(let _t=0;_t<nt.length;_t++)nt[_t].classList.toggle("is-active",_t===wt)}function nn(){const pe=String(ue.value||""),nt=Number.isFinite(ue.selectionStart)?ue.selectionStart:pe.length,_t=pe.slice(0,nt).match(/([A-Za-z_][A-Za-z0-9_]*)$/);return{token:_t?_t[1]:"",start:_t?nt-_t[1].length:nt,end:nt}}function zt(pe){gt();const nt=String(ue.value||""),wt=nn(),_t=`${nt.slice(0,wt.start)}${pe}${nt.slice(wt.end)}`;ue.value=_t,E.actionValueText=_t;const _i=wt.start+pe.length;ue.focus(),ue.setSelectionRange(_i,_i),gt(),cn(),wn(!0)}function rn(pe){const nt=String(ue.value||""),wt=document.activeElement===ue&&Number.isFinite(ue.selectionStart),_t=wt?ue.selectionStart:jt,_i=wt?ue.selectionEnd:bn,vi=`${nt.slice(0,_t)}${pe}${nt.slice(_i)}`;ue.value=vi,E.actionValueText=vi;const Qi=_t+pe.length;ue.focus(),ue.setSelectionRange(Qi,Qi),gt(),cn(),wn(!0)}function wn(pe=!1){if(_e.value==="shapeType"){lt.style.display="none",lt.innerHTML="";return}const nt=nn(),wt=String(nt.token||"").toLowerCase();if(!wt&&!pe){lt.style.display="none",lt.innerHTML="";return}const _t=bt(),_i=wt?_t.filter(vi=>vi.toLowerCase().includes(wt)&&vi.toLowerCase()!==wt).slice(0,12):_t.slice(0,12);if(Ut=_i,_i.length===0){Wt=-1,lt.style.display="none",lt.innerHTML="";return}lt.innerHTML="";for(const vi of _i){const Qi=Z("button","cp-rule-expr-suggest-btn",{type:"button",text:vi});Qi.addEventListener("mousedown",ka=>{ka.preventDefault()}),Qi.addEventListener("click",ka=>{ka.preventDefault(),zt(vi)}),lt.appendChild(Qi)}lt.style.display="flex",Jt(0)}function cn(){ue.style.height="auto",ue.style.height=`${Math.max(24,ue.scrollHeight)}px`}ue.addEventListener("pointerdown",()=>{ne.draggable=!1}),ue.addEventListener("pointerup",()=>{ne.draggable=!0}),ue.addEventListener("dragstart",pe=>{pe.preventDefault()}),_e.addEventListener("change",de(()=>(E.actionOutput=_e.value,Bt(),!0))),Ne.addEventListener("change",de(()=>(E.actionOp=Ne.value,!0))),ue.addEventListener("input",()=>{gt(),E.actionValueText=ue.value,cn(),wn(!0)}),ot.addEventListener("change",de(()=>{const pe=ot.value;return pe?(rn(pe),ot.value="",!0):!1})),Oe.addEventListener("change",de(()=>{const pe=String(Oe.value||"");if(!pe)return!1;const nt=pe.split(":"),wt=String(nt.length>1?nt.slice(1).join(":"):nt[0]).trim();if(!wt)return Oe.value="",!1;ue.value=wt,E.actionValueText=wt,cn(),wn(!0),ue.focus();const _t=wt.length;return ue.setSelectionRange(_t,_t),gt(),Oe.value="",!0})),ze.addEventListener("change",de(()=>{const pe=ze.value;return pe?(rn(pe),ze.value="",!0):!1})),$e.addEventListener("click",de(()=>ue.value?(ue.value="",E.actionValueText="",cn(),wn(),ue.focus(),!0):!1)),ue.addEventListener("click",()=>wn(!0)),ue.addEventListener("focus",()=>{gt(),cn(),wn(!0)}),ue.addEventListener("keyup",()=>{gt(),wn(!0)}),ue.addEventListener("select",gt),ue.addEventListener("keydown",de(pe=>{const nt=lt.style.display!=="none"&&Ut.length>0;if(nt&&pe.key==="ArrowDown")return pe.preventDefault(),Jt((Wt+1)%Ut.length),!1;if(nt&&pe.key==="ArrowUp"){pe.preventDefault();const wt=Wt<=0?Ut.length-1:Wt-1;return Jt(wt),!1}if(nt&&pe.key==="Enter"&&!pe.ctrlKey&&!pe.metaKey){pe.preventDefault();const wt=Wt>=0?Wt:0,_t=Ut[wt];return _t?(zt(_t),!0):!1}return pe.key==="Enter"&&(pe.ctrlKey||pe.metaKey)?(pe.preventDefault(),E.actionValueText=ue.value,ue.blur(),!0):!1})),ue.addEventListener("blur",()=>{E.actionValueText=ue.value,gt(),ne.draggable=!0,Ut=[],Wt=-1,setTimeout(()=>{lt.style.display="none"},120),ie()}),he.append(_e,Ne,De),Bt(),cn();const Yd=Z("div","cp-rule-summary",{text:S0(E)}),ec=Z("div","cp-rule-live"),tc=Z("span","cp-rule-live-chip cp-rule-live-chip-in"),Ir=Z("span","cp-rule-live-key");Ir.dataset.ruleUid=E._uid,Ir.dataset.probeKind="in",Ir.dataset.probeField="key";const Ur=Z("span","cp-rule-live-value");Ur.dataset.ruleUid=E._uid,Ur.dataset.probeKind="in",Ur.dataset.probeField="value",tc.append(Ir,Ur);const nc=Z("span","cp-rule-live-chip cp-rule-live-chip-out"),Or=Z("span","cp-rule-live-key");Or.dataset.ruleUid=E._uid,Or.dataset.probeKind="out",Or.dataset.probeField="key";const kr=Z("span","cp-rule-live-value");kr.dataset.ruleUid=E._uid,kr.dataset.probeKind="out",kr.dataset.probeField="value",nc.append(Or,kr),ec.append(tc,nc);const Tn=j==null?void 0:j.get(E._uid),jd=(Tn==null?void 0:Tn.inKey)||E.actionOutput,Zd=(Tn==null?void 0:Tn.outKey)||E.actionOutput;Ir.textContent=`${jd} in`,Or.textContent=`${Zd} out`,Ur.textContent=Ws(Tn==null?void 0:Tn.inValue),kr.textContent=Ws(Tn==null?void 0:Tn.outValue);const Oa=Z("div","cp-rule-body");return Oa.append(je,he,ec,Yd),ye&&(Oa.style.display="none"),ne.append(ce,Oa),ne}function ge(E,k="",j=C){const B=Z("div","cp-rule-slot"),ne=Z("button","cp-rule-slot-add",{type:"button",text:"+",title:"Insert rule here"});ne.addEventListener("click",Be=>{Be.preventDefault(),Be.stopPropagation(),K(E,k,j)}),B.appendChild(ne);let ce=null;const ye=()=>{ce&&(clearTimeout(ce),ce=null)};return B.addEventListener("mouseenter",()=>{ye(),ce=setTimeout(()=>{B.classList.add("cp-rule-slot-expanded")},450)}),B.addEventListener("mouseleave",()=>{ye(),B.classList.remove("cp-rule-slot-expanded")}),B.addEventListener("dragover",Be=>{Be.preventDefault(),Ee(Be.clientY),B.classList.add("cp-rule-slot-expanded"),B.classList.add("cp-rule-slot-active")}),B.addEventListener("dragleave",()=>{le(),B.classList.remove("cp-rule-slot-active")}),B.addEventListener("drop",Be=>{Be.preventDefault(),Be.stopPropagation(),le(),B.classList.remove("cp-rule-slot-active"),G(E,k,j)}),B}function Pe(E,k="",j=C){const B=Z("div","cp-rule-lane"),ne=fu(u,b);if(E.length===0)return B.appendChild(ge(u.length,k,j)),B;B.appendChild(ge(E[0],k,j));for(const ce of E){const ye=we(u[ce],ce,ne),Be=ge(ce+1,k,j);B.appendChild(ye),B.appendChild(Be)}return B}function ut(E,k="",j=C){E.addEventListener("dragover",B=>{B.preventDefault(),Ee(B.clientY),E.classList.add("cp-rule-dropzone-active")}),E.addEventListener("dragleave",()=>{le(),E.classList.remove("cp-rule-dropzone-active")}),E.addEventListener("drop",B=>{B.preventDefault(),B.stopPropagation(),le(),E.classList.remove("cp-rule-dropzone-active"),G(u.length,k,j)})}function fe(E,k){const j=wi(k);return E.includes?E.includes.has(j):j===E.key}function Le(E){return ls(String(E||"").replaceAll(Ht,"/"))}function We(E){let k=E.ruleIndices.length;for(const j of E.children.values())k+=We(j);return k}function et(E,k){const j={name:"",path:"",children:new Map,ruleIndices:[]};for(const ne of E){const ce=u[ne],ye=Nt(ce.group);if(!ye){j.ruleIndices.push(ne);continue}const Be=Le(ye);let Ye=j,Ae="";for(const Mt of Be)Ae=qr(Ae,Mt),Ye.children.has(Mt)||Ye.children.set(Mt,{name:Mt,path:Ae,children:new Map,ruleIndices:[]}),Ye=Ye.children.get(Mt);Ye.ruleIndices.push(ne)}const B=ne=>{if(!ne)return;const ce=Le(ne);let ye=j,Be="";for(const Ye of ce)Be=qr(Be,Ye),ye.children.has(Ye)||ye.children.set(Ye,{name:Ye,path:Be,children:new Map,ruleIndices:[]}),ye=ye.children.get(Ye)};for(const[ne,ce]of h.entries())!(ce instanceof Set)||!ce.has(k)||B(Nt(ne));return j}function Fe(E,k){const j=Nt(k),B=`${j}${Ht}`;let ne=-1;for(let ce=0;ce<u.length;ce++){if(!fe(E,u[ce]))continue;const ye=Nt(u[ce].group);(ye===j||ye.startsWith(B))&&(ne=ce)}if(ne>=0)return ne+1;for(let ce=u.length-1;ce>=0;ce--)if(fe(E,u[ce]))return ce+1;return u.length}function Ke(){const E=Ce();if(E.length>0){const j=E[E.length-1],B=u[j];K(j+1,Nt(B.group),wi(B));return}const k={key:C,includes:C==="spawnedParticles"?new Set(["spawnedParticles","allParticles"]):void 0};if(A){const j=Fe(k,A);K(j,A,C);return}K(u.length,"",C)}function tt(E){const k=Nt(E),j=k?`${k}${Ht}`:"",B=new Set;for(const ce of u){const ye=Nt(ce.group);if(ye&&!(k&&!(ye===k||ye.startsWith(j)))){if(!k&&ye.includes(Ht)){B.add(ye.split(Ht)[0]);continue}if(k){const Ye=(ye===k?"":ye.slice(j.length)).split(Ht)[0];Ye&&B.add(Ye)}else B.add(ye.split(Ht)[0])}}let ne=1;for(;B.has(`group-${ne}`);)ne++;return`group-${ne}`}function Ge(E,k){const j=wi(k);return E==="spawnedParticles"?j==="spawnedParticles"||j==="allParticles":j===E}function I(E,k,j){const B=Nt(k),ne=$r(B),ce=ls(j).join("-").trim();if(!B||!ce)return;const ye=qr(ne,ce);if(ye===B)return;const Be=`${B}${Ht}`;for(const[Pt,Dt]of[...h.entries()]){if(!(Dt instanceof Set)||!Dt.has(E))continue;const me=Nt(Pt);if(me===B){h.delete(Pt),be(ye,E);continue}if(me.startsWith(Be)){h.delete(Pt);const je=`${ye}${Ht}${me.slice(Be.length)}`;be(je,E)}}for(const Pt of u){if(!Ge(E,Pt))continue;const Dt=Nt(Pt.group);if(Dt===B){Pt.group=ye;continue}Dt.startsWith(Be)&&(Pt.group=`${ye}${Ht}${Dt.slice(Be.length)}`)}C===E&&(A===B?A=ye:String(A||"").startsWith(Be)&&(A=`${ye}${Ht}${A.slice(Be.length)}`));const Ye=new Set,Ae=`${E}::`,Mt=`${Ae}${B}`,Et=`${Mt}${Ht}`;for(const Pt of T){if(Pt===Mt){Ye.add(`${Ae}${ye}`);continue}if(Pt.startsWith(Et)){Ye.add(`${Ae}${ye}${Ht}${Pt.slice(Et.length)}`);continue}Ye.add(Pt)}T.clear();for(const Pt of Ye)T.add(Pt);H(),ie()}function xe(E,k){const j=Nt(k);if(!j)return;const B=`${j}${Ht}`;for(const[ne,ce]of[...h.entries()]){if(!(ce instanceof Set)||!ce.has(E))continue;const ye=Nt(ne);(ye===j||ye.startsWith(B))&&(ce.delete(E),ce.size===0&&h.delete(ne))}}function ee(E,k){const j=Nt(k);if(!j)return;const B=`${E}::${j}`,ne=`${B}${Ht}`;for(const ce of[...T])(ce===B||ce.startsWith(ne))&&T.delete(ce)}function Q(E,k){const j=Nt(k);if(!j)return;const B=`${j}${Ht}`;u=u.filter(ne=>{if(!Ge(E,ne))return!0;const ce=Nt(ne.group);return!(ce===j||ce.startsWith(B))}),xe(E,j),ee(E,j),C===E&&(A===j||A.startsWith(B))&&(A=$r(j)),R.clear(),p=-1,ie()}function Me(E,k){const j=Nt(k);if(!j)return;const B=$r(j),ne=`${j}${Ht}`;let ce=0;for(const ye of u){if(!Ge(E,ye))continue;const Be=Nt(ye.group);if(Be===j){ye.group=B,ce++;continue}if(Be.startsWith(ne)){const Ye=Be.slice(ne.length);ye.group=qr(B,Ye),ce++}}ce!==0&&(xe(E,j),ee(E,j),C===E&&(A===j||A.startsWith(ne))&&(A=B),ie())}function Se(){const E=Ce(),k=Nt(A),j=[];if(k){const Ye=`${k}${Ht}`;for(let Ae=0;Ae<u.length;Ae++){const Mt=u[Ae];if(!Ge(C,Mt))continue;const Et=Nt(Mt.group);(Et===k||Et.startsWith(Ye))&&j.push(Ae)}}const B=[...new Set([...E,...j])].sort((Ye,Ae)=>Ye-Ae);let ne=$r(k),ce=C;if(!ne&&B.length>0){const Ye=u[B[0]];ne=$r(Nt(Ye.group)),ce=wi(Ye)}const ye=tt(ne),Be=qr(ne,ye);if(A=Be,C=ce,be(Be,ce),B.length===0){H(),ke();return}for(const Ye of B){const Ae=u[Ye];Ae.group=Be,Ae.target=ce,Ae.subgroup=""}R.clear();for(const Ye of B)R.add(u[Ye]._uid);p=B[B.length-1]??-1,ie()}function ke(){s.innerHTML="";const E=Z("div","cp-rule-context-groups"),k=[{key:"spawnedParticles",label:"Particles",includes:new Set(["spawnedParticles","allParticles"])},{key:"background",label:"Background"},{key:"camera",label:"Camera"}];k.some(B=>B.key===C)||(C="spawnedParticles");const j=(B,ne)=>{const ce=`${ne.key}::${B.path}`,ye=C===ne.key&&A===B.path,Be=T.has(ce),Ye=Z("div","cp-rule-group"),Ae=Z("div",`cp-rule-group-header${ye?" cp-rule-group-header-selected":""}`),Mt=Z("button","cp-preset-btn cp-rule-mini cp-rule-fold",{type:"button",text:Be?"▸":"▾"}),Et=Z("span","cp-rule-group-title",{text:B.name,title:"Double-click to rename group"}),Pt=Z("button","cp-preset-btn cp-rule-mini cp-rule-group-rename-btn",{type:"button",text:"🖋",title:"Rename group"}),Dt=Z("div","cp-rule-group-actions"),me=Z("button","cp-preset-btn cp-rule-mini cp-rule-group-delete-btn",{type:"button",text:"⊠",title:"Delete group and all rules/subgroups inside it"}),je=We(B),ht=je>0?Z("button","cp-preset-btn cp-rule-mini cp-rule-group-ungroup-btn",{type:"button",text:"⮺",title:"Ungroup rules (keep rules, remove this group level)"}):null,Vt=()=>{const rt=B.name,M=Z("input","cp-rule-group-rename",{type:"text",value:rt}),F=W=>{W&&I(ne.key,B.path,M.value),ke()};M.addEventListener("keydown",W=>{W.key==="Enter"&&(W.preventDefault(),F(!0)),W.key==="Escape"&&(W.preventDefault(),F(!1))}),M.addEventListener("blur",()=>F(!0),{once:!0}),Et.replaceWith(M),M.focus(),M.select()};if(Mt.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),T.has(ce)?T.delete(ce):T.add(ce),H(),ke()}),Pt.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation(),Vt()}),me.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation();const M=`Delete group "${B.path}" and all nested rules/subgroups?`;confirm(M)&&Q(ne.key,B.path)}),ht&&ht.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation();const M=`Ungroup rules in "${B.path}" (rules are kept)?`;confirm(M)&&Me(ne.key,B.path)}),Et.addEventListener("dblclick",rt=>{rt.preventDefault(),rt.stopPropagation(),Vt()}),Ae.addEventListener("click",()=>{C=ne.key,A=B.path,R.clear(),H(),ke()}),Ae.addEventListener("dragover",rt=>{rt.preventDefault(),Ee(rt.clientY),Ae.classList.add("cp-rule-dropzone-active")}),Ae.addEventListener("dragleave",()=>{le(),Ae.classList.remove("cp-rule-dropzone-active")}),Ae.addEventListener("drop",rt=>{rt.preventDefault(),rt.stopPropagation(),le(),Ae.classList.remove("cp-rule-dropzone-active");const M=Fe(ne,B.path);G(M,B.path,ne.key)}),Ae.append(Mt,Et,Pt,Z("span","cp-group-count",{text:String(je)})),ht&&Dt.appendChild(ht),Dt.appendChild(me),Ae.appendChild(Dt),Ye.appendChild(Ae),!Be){const rt=Z("div","cp-rule-group-body");rt.appendChild(Pe(B.ruleIndices,B.path,ne.key));const M=Z("div","cp-rule-groups"),F=[...B.children.values()].sort((W,Y)=>W.name.localeCompare(Y.name));for(const W of F)M.appendChild(j(W,ne));F.length>0&&rt.appendChild(M),ut(rt,B.path,ne.key),Ye.appendChild(rt)}return Ye};for(const B of k){const ne=[];for(let Et=0;Et<u.length;Et++)fe(B,u[Et])&&ne.push(Et);const ce=Z("div",`cp-group cp-open cp-rule-context-group${C===B.key?" cp-rule-group-selected":""}`),ye=`context::${B.key}`,Be=y.has(ye),Ye=Z("div","cp-group-header"),Ae=Z("button","cp-preset-btn cp-rule-mini cp-rule-fold",{type:"button",text:Be?"▸":"▾",title:Be?"Expand section":"Collapse section"});Ae.addEventListener("click",Et=>{Et.preventDefault(),Et.stopPropagation(),y.has(ye)?y.delete(ye):y.add(ye),H(),ke()}),Ye.addEventListener("click",()=>{C=B.key,A="",H(),ke()}),Ye.append(Ae,Z("span","",{text:B.label}),Z("span","cp-group-count",{text:String(ne.length)}));const Mt=Z("div","cp-group-body cp-rule-group-body");if(!Be){const Et=et(ne,B.key);Mt.appendChild(Pe(Et.ruleIndices,"",B.key));const Pt=[...Et.children.values()].sort((Dt,me)=>Dt.name.localeCompare(me.name));if(Pt.length>0){const Dt=Z("div","cp-rule-groups");for(const me of Pt)Dt.appendChild(j(me,B));Mt.appendChild(Dt)}ut(Mt,"",B.key)}ce.append(Ye,Mt),E.appendChild(ce)}s.appendChild(E)}o.addEventListener("change",()=>{const E=String(o.value||"");E&&(l.value=dt(E))}),c.addEventListener("click",async()=>{await S()}),d.addEventListener("click",async()=>{await _(String(o.value||""))}),f.addEventListener("click",async()=>{const E=String(o.value||"");if(!E)return;const k=dt(E);confirm(`Delete single-rule preset "${k}"?`)&&(await yd(E),await Ie(),l.value="")});const St=window.__seesoundRuleDeleteAbort;St&&typeof St.abort=="function"&&St.abort();const Ct=new AbortController;return window.__seesoundRuleDeleteAbort=Ct,document.addEventListener("keydown",E=>{E.defaultPrevented||(E.key==="Delete"||E.key==="Backspace")&&(it(E.target)||Qe()&&(E.preventDefault(),E.stopPropagation()))},{signal:Ct.signal}),Sn={serialize:()=>u.map((E,k)=>vo(E,k)),createGroupFromSelection:()=>{Se()},insertRuleFromSelection:()=>{Ke()},addRow:E=>{u.push(Xr(E||du(u.length),u.length)),ie()},replaceFromRuleBlocks:E=>{u=(Array.isArray(E)?E:[]).map(Xr),h.clear(),R.clear(),p=-1,g=-1,v=[],A="",qe(),J(),ke(),O({compileStatus:"stale",compileError:null})},renderCompileStatus:O},Ji((E,k)=>{if(k==="ruleUiState"){J(),ke();return}if(k==="palettes"){ke();return}k!=="ruleBlocks"||m||Sn==null||Sn.replaceFromRuleBlocks(Array.isArray(oe.ruleBlocks)?oe.ruleBlocks:[])}),e.addEventListener("keydown",E=>{if(E.defaultPrevented||E.ctrlKey||E.metaKey||E.altKey||!(E.key==="ArrowUp"||E.key==="ArrowDown"))return;const k=E.target instanceof Element?E.target.closest("input,textarea,select"):null;if(!(k instanceof HTMLElement)||!k.closest(".cp-rule-row"))return;const j=Array.from(e.querySelectorAll('.cp-rule-row input:not([type="checkbox"]):not([disabled]), .cp-rule-row textarea:not([disabled]), .cp-rule-row select:not([disabled])')),B=j.indexOf(k);if(B<0)return;const ne=E.key==="ArrowDown"?1:-1,ce=j[B+ne];if(ce instanceof HTMLElement&&(E.preventDefault(),ce.focus(),ce instanceof HTMLInputElement||ce instanceof HTMLTextAreaElement))try{ce.select()}catch{}}),ke(),window.addEventListener("seesound:calculated-rule-inputs",E=>{var k;g0((k=E==null?void 0:E.detail)==null?void 0:k.calculatedInputs),ke()}),window.addEventListener("seesound:rule-probe",E=>{var B;b=((B=E==null?void 0:E.detail)==null?void 0:B.inputs)||Object.create(null);const k=fu(u,b),j=s.querySelectorAll("[data-rule-uid][data-probe-field]");for(const ne of j){const ce=ne.getAttribute("data-rule-uid"),ye=ne.getAttribute("data-probe-kind"),Be=ne.getAttribute("data-probe-field"),Ye=k.get(ce);if(Ye){if(Be==="key"){ne.textContent=ye==="out"?`${Ye.outKey} out`:`${Ye.inKey} in`;continue}ne.textContent=Ws(ye==="out"?Ye.outValue:Ye.inValue)}}}),Ie(),ie(),window.addEventListener("seesound:rule-compile-state",E=>O(E.detail||{})),Sn}function A0(n){if(!n){console.warn("[ControlPanel] No container element found.");return}const e="seesound_settings_panel_width_v1";function t(re){const ie=Math.max(220,Math.floor(window.innerWidth*.7));return Math.max(220,Math.min(ie,Math.floor(Number(re)||220)))}let i=(()=>{try{const re=Number(localStorage.getItem(e));if(Number.isFinite(re)&&re>0)return t(re)}catch{}return t(n.getBoundingClientRect().width||280)})();function r(re,O=!1){const ie=t(re),de=O?28:ie;document.documentElement.style.setProperty("--panel-width",`${de}px`),window.dispatchEvent(new CustomEvent("seesound:panel-width",{detail:{width:de,expandedWidth:ie,collapsed:!!O}}))}n.style.width=`${i}px`,r(i,!1);const s=Z("div","cp-header"),a=Z("div","cp-resize-handle",{title:"Drag to resize settings"}),o=Z("button","cp-collapse-btn",{text:"»",title:"Collapse panel"}),l=Z("span","cp-title",{text:"Parameters"}),c=Z("button","cp-reset-btn",{text:"↺",title:"Reset all to factory defaults"});s.append(l,c,o);const d=Z("div","cp-body cp-pane-stack"),f="seesound_panel_collapsed_panes_v1",u=(()=>{try{const re=JSON.parse(localStorage.getItem(f)||"{}");return{file:!!re.file,settings:!!re.settings,rules:!!re.rules}}catch{return{file:!1,settings:!1,rules:!1}}})(),m=()=>{try{localStorage.setItem(f,JSON.stringify(u))}catch{}},g=(re,O,ie="")=>{const de=Z("section",`cp-pane ${ie}`.trim()),ae=Z("div","cp-pane-header"),be=Z("span","cp-pane-title",{text:O}),qe=Z("button","cp-pane-toggle",{type:"button",text:u[re]?"▸":"▾",title:u[re]?`Expand ${O}`:`Collapse ${O}`});ae.append(qe,be);const Ve=Z("div","cp-pane-body");return de.append(ae,Ve),{id:re,pane:de,paneHeader:ae,paneBody:Ve,paneToggle:qe,paneTitle:be}},v=g("file","File","cp-pane-file"),p=g("settings","Settings","cp-pane-settings"),h=g("rules","Rules","cp-pane-rules"),T=Z("div","cp-pane-header-actions"),y=Z("button","cp-preset-btn cp-rule-mini cp-rule-add-group",{type:"button",text:"⮼"}),x=Z("button","cp-preset-btn cp-rule-mini cp-rule-add",{type:"button",text:"+"});T.append(y,x),h.paneHeader.appendChild(T);const R=(re="")=>{const O=String(re||"").trim();v.paneTitle.textContent=O?`File: ${O}`:"File"};R(""),window.addEventListener("seesound:project-file-state",re=>{var O;R((O=re==null?void 0:re.detail)==null?void 0:O.fileName)}),window.addEventListener("seesound:project-loaded",re=>{var O;R((O=re==null?void 0:re.detail)==null?void 0:O.fileName)}),window.addEventListener("seesound:project-autosaved",re=>{var O;R((O=re==null?void 0:re.detail)==null?void 0:O.fileName)}),v.paneBody.appendChild(u0()),p.paneBody.appendChild(d0());for(let re=0;re<su.length;re++){const O=su[re],ie=Yi.filter(de=>de.group===O.id&&de.key!=="canvasWidth"&&de.key!=="canvasHeight"&&de.key!=="canvasScale"&&de.key!=="defaultBackgroundHue"&&de.key!=="defaultBackgroundSaturation"&&de.key!=="defaultBackgroundLightness");ie.length!==0&&p.paneBody.appendChild(h0(O,ie,re<3))}const A=T0(h.paneBody);y.addEventListener("click",()=>{var re;(re=A==null?void 0:A.createGroupFromSelection)==null||re.call(A)}),x.addEventListener("click",()=>{var re;(re=A==null?void 0:A.insertRuleFromSelection)==null||re.call(A)});const C=Z("div","cp-pane-splitter",{title:"Resize File and Settings panes"}),N=Z("div","cp-pane-splitter",{title:"Resize Settings and Rules panes"});d.append(v.pane,C,p.pane,N,h.pane);const w="seesound_panel_file_height_v1",b="seesound_panel_settings_height_v1",P=120;let $=(()=>{try{const re=Number(localStorage.getItem(w));if(Number.isFinite(re)&&re>=P)return re}catch{}return 138})(),X=(()=>{try{const re=Number(localStorage.getItem(b));if(Number.isFinite(re)&&re>=P)return re}catch{}return 320})();const J=()=>{var Rt,D;const re=[v,p,h],O=re.filter(it=>!u[it.id]).map(it=>it.id);O.length===0&&(u.rules=!1,O.push("rules"));for(const it of re){const He=!!u[it.id];it.pane.classList.toggle("cp-pane-collapsed",He),it.paneBody.style.display=He?"none":"",it.paneToggle.textContent=He?"▸":"▾",it.paneToggle.title=He?`Expand ${((Rt=it.paneHeader.textContent)==null?void 0:Rt.trim())||"pane"}`:`Collapse ${((D=it.paneHeader.textContent)==null?void 0:D.trim())||"pane"}`}const ie=!u.file&&!u.settings,de=!u.settings&&!u.rules;C.style.display=ie?"":"none",N.style.display=de?"":"none";const ae=(ie?C.offsetHeight:0)+(de?N.offsetHeight:0),be=re.filter(it=>u[it.id]).reduce((it,He)=>it+He.paneHeader.offsetHeight,0),qe=Math.max(P,d.clientHeight-ae-be),Ve=O.includes("rules")?"rules":O[O.length-1],yt=O.filter(it=>it!==Ve),ct=Math.max(P,qe-P);$=Math.max(P,Math.min(ct,Math.floor($))),X=Math.max(P,Math.min(ct,Math.floor(X))),yt.includes("file")&&yt.includes("settings")&&$+X>qe-P&&(X=Math.max(P,qe-P-$)),v.pane.style.flex=u.file?"0 0 auto":Ve==="file"?"1 1 auto":`0 0 ${$}px`,p.pane.style.flex=u.settings?"0 0 auto":Ve==="settings"?"1 1 auto":`0 0 ${X}px`,h.pane.style.flex=u.rules?"0 0 auto":Ve==="rules"?"1 1 auto":`0 0 ${P}px`};let V=null;const H=(re,O)=>{le||re==="file"&&(u.file||u.settings)||re==="settings"&&(u.settings||u.rules)||(V={type:re,startY:O.clientY,fileStart:$,settingsStart:X},O.preventDefault())};C.addEventListener("mousedown",re=>H("file",re)),N.addEventListener("mousedown",re=>H("settings",re));for(const re of[v,p,h])re.paneToggle.addEventListener("click",O=>{O.preventDefault(),O.stopPropagation(),!(!u[re.id]&&[v,p,h].filter(de=>!u[de.id]).length<=1)&&(u[re.id]=!u[re.id],m(),J())});const se=re=>{if(!V||le)return;const O=re.clientY-V.startY;V.type==="file"?$=V.fileStart+O:X=V.settingsStart+O,J()},q=()=>{if(V){V=null;try{localStorage.setItem(w,String(Math.floor($))),localStorage.setItem(b,String(Math.floor(X)))}catch{}}};n.append(a,s,d);let le=!1;o.addEventListener("click",()=>{le=!le,n.classList.toggle("cp-collapsed",le),le?(i=t(n.getBoundingClientRect().width||i),n.style.width="28px",r(i,!0)):(n.style.width=`${i}px`,r(i,!1)),o.textContent=le?"«":"»",l.style.display=le?"none":"",c.style.display=le?"none":"",d.style.display=le?"none":"",le||J()});const ve=window.__seesoundPanelResizeAbort;ve&&typeof ve.abort=="function"&&ve.abort();const Ee=new AbortController;window.__seesoundPanelResizeAbort=Ee;let Ze=null;a.addEventListener("mousedown",re=>{le||(Ze={startX:re.clientX,startWidth:n.getBoundingClientRect().width},re.preventDefault())},{signal:Ee.signal}),window.addEventListener("mousemove",re=>{if(!Ze||le)return;const O=Ze.startX-re.clientX,ie=t(Ze.startWidth+O);i=ie,n.style.width=`${ie}px`,r(ie,!1)},{signal:Ee.signal}),window.addEventListener("mousemove",se,{signal:Ee.signal}),window.addEventListener("mouseup",()=>{if(Ze){Ze=null;try{localStorage.setItem(e,String(i))}catch{}}},{signal:Ee.signal}),window.addEventListener("mouseup",q,{signal:Ee.signal}),window.addEventListener("resize",()=>{le||(i=t(i),n.style.width=`${i}px`,r(i,!1),J())},{signal:Ee.signal}),J(),c.addEventListener("click",()=>{var re;if(confirm("Reset all parameters to factory defaults?")){xd();for(const O of Yi)(re=gn.get(O.key))==null||re(oe[O.key])}}),Ji((re,O)=>{var ie,de;if(O!=="ruleBlocks"){if(O==="*"||O==="disabled"){for(const ae of Yi)(ie=gn.get(ae.key))==null||ie(oe[ae.key]);return}(de=gn.get(O))==null||de(oe[O])}})}const Nd=()=>{},aa=()=>{};function _n(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function vt(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?_n(e/255):_n(e):0}function Ld(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,s=parseInt(t.slice(4,6),16)/255;return[_n(i),_n(r),_n(s)]}function R0(n){if(Array.isArray(n))return n.length<3?null:[vt(n[0]),vt(n[1]),vt(n[2])];if(typeof n=="string"){const e=Ld(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[vt(t[0]),vt(t[1]),vt(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[vt(n.r),vt(n.g),vt(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[vt(n.h),vt(n.s),vt(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[vt(n.hue),vt(n.saturation),vt(n.brightness)]}return null}function C0(n,e,t){const i=Number(n),s=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,a=_n(e),o=_n(t),l=Math.floor(s*6),c=s*6-l,d=o*(1-a),f=o*(1-c*a),u=o*(1-(1-c)*a);switch(l%6){case 0:return[o,u,d];case 1:return[f,o,d];case 2:return[d,o,u];case 3:return[d,f,o];case 4:return[u,d,o];default:return[o,d,f]}}function P0(n,e,t){const i=_n(n),r=_n(e),s=_n(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const d=a<=1e-6?0:l/a;return[c,d,a]}function oa(n){return Array.isArray(n)?n.length<3?null:[vt(n[0]),vt(n[1]),vt(n[2])]:typeof n=="string"?Ld(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[vt(n.rgb[0]),vt(n.rgb[1]),vt(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[vt(n.r),vt(n.g),vt(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[vt(n.h),vt(n.s),vt(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[vt(n.hue),vt(n.saturation),vt(n.brightness)]:null}function Fd(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function N0(n,e,t){const i=Fd(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,a=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return oa(i.colors[a])}function L0(n,e,t){const i=Fd(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return oa(i.colors[0]);const s=_n(t)*(i.colors.length-1),a=Math.floor(s),o=Math.min(i.colors.length-1,a+1),l=s-a,c=oa(i.colors[a]),d=oa(i.colors[o]);return!c&&!d?null:c?d?[_n(c[0]+(d[0]-c[0])*l),_n(c[1]+(d[1]-c[1])*l),_n(c[2]+(d[2]-c[2])*l)]:c:d}const F0=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[vt(n),vt(e),vt(t)],hsv:(n,e,t)=>[vt(n),vt(e),vt(t)],palette:(n,e,t)=>N0(n,e,t),gradient:(n,e,t)=>L0(n,e,t),matchLuma:(n,e,t,i)=>{const[r,s,a]=Md(n,e,t,i);return[r/255,s/255,a/255]},hsvToRgbColor:(n,e,t)=>C0(n,e,t),rgbToHsvColor:(n,e,t)=>P0(n,e,t),toColorVector:n=>R0(n)});function Ua(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function Xs(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function pu(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const D0=new Set([">",">=","<","<=","==","!="]);let $s={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:Nd,applyLivingRules:aa}};function mu(n,e){const t=Ua(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)e.has(s)&&i.add(s);return[...i]}function qs(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of mu(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of mu(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Hl(n){return JSON.stringify(n)}function Dd(n){const e=Ua(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Hl(n.value)}function I0(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let s=0;s<n.length;s++){const a=n[s],o=s>0?n[s-1]:"";if(!r&&a==="'"&&o!=="\\"){i=!i;continue}if(!i&&a==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(a==="(")e++;else if(a===")")e=Math.max(0,e-1);else if(a==="[")t++;else if(a==="]")t=Math.max(0,t-1);else if(a===","&&e===0&&t===0)return!0}}return!1}function U0(n){const e=Ua(n.expression);return e?I0(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Hl(n.value)}function gu(n,e){const t=U0(n),[i,r,s]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${s} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${s} = (target.${s} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${s} = (target.${s} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${s} = (target.${s} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${s} = (target.${s} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${s} = clamp((target.${s} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function O0(n){const e=Dd(n),t=["const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);","const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (__hasRgb) {","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) __baseRgb = [0, 0, 0];","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function k0(n){if(!n||n.operator==="always")return"true";const e=Ua(n.expression);if(e)return`(${e})`;if(!D0.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Hl(n.value??0);return`((${t}) ${n.operator} (${i}))`}function B0(n){const e=n.output;if(e==="rgb")return gu(n,["red","green","blue"]);if(e==="hsv")return gu(n,["hue","saturation","brightness"]);if(e==="luma")return O0(n);const t=Dd(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function ba(n,e,t,i){const r=[],s=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const a of t)a==="deltaTime"||a==="time"||r.push(`  const ${a} = Number.isFinite(i.${a}) ? i.${a} : 0;`);return e.forEach(a=>{if(!a.enabled)return;const o=k0(a.condition);r.push(`  // rule ${a.id}`),r.push(`  if (${o}) {`),s.push({ruleId:a.id,functionName:n,sourceLine:r.length+1});for(const l of a.actions??[])r.push(`    ${B0(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:s}}function z0(n,e){return ba("applySpawnRules",n,e,!1)}function H0(n,e){return ba("applyLivingRules",n,e,!0)}function G0(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function _u(n,e){const t=performance.now(),i=md(n,e),s=[...i.ruleBlocks].sort((x,R)=>(x.order??0)-(R.order??0)),a=s.filter(x=>x.target==="spawnedParticles"),o=s.filter(x=>x.target==="allParticles"),l=s.filter(x=>x.target==="background"),c=s.filter(x=>x.target==="camera"),d=G0(s);if($s.hash===d)return $s.result;const f=fd().entries.map(x=>x.id),u=new Set(f),m={spawnedParticles:qs(a,u),allParticles:qs(o,u),background:qs(l,u),camera:qs(c,u)},g=[...new Set([...m.spawnedParticles,...m.allParticles,...m.background,...m.camera])],v=z0(a,f),p=H0(o,f),h=ba("applyBackgroundRules",l,f,!0),T=ba("applyCameraRules",c,f,!0),y=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",v.source,p.source,h.source,T.source,"return { applySpawnRules, applyLivingRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const R=new Function("helpers",y)(F0),A={hash:d,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:Xs([...a,...o]),usesBackgroundHsb:Xs(l),usesLivingShapeType:pu(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:m,requiredInputs:g,lineMap:[...v.lineMap,...p.lineMap,...h.lineMap,...T.lineMap],source:y,applySpawnRules:typeof R.applySpawnRules=="function"?R.applySpawnRules:Nd,applyLivingRules:typeof R.applyLivingRules=="function"?R.applyLivingRules:aa,applyBackgroundRules:typeof R.applyBackgroundRules=="function"?R.applyBackgroundRules:aa,applyCameraRules:typeof R.applyCameraRules=="function"?R.applyCameraRules:aa};return $s={hash:d,result:A},A}catch(x){const R=Number.isFinite(x==null?void 0:x.lineNumber)?Number(x.lineNumber):null;return{...$s.result,hash:d,compileStatus:"error",compileError:(x==null?void 0:x.message)||String(x),compileLine:R,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:Xs([...a,...o]),usesBackgroundHsb:Xs(l),usesLivingShapeType:pu(o,"shapeType"),requiredInputsByTarget:m,requiredInputs:g,lineMap:[...v.lineMap,...p.lineMap,...h.lineMap,...T.lineMap],source:y,rejected:i.rejected}}}const Gl=16,pl=2e4,vu=Math.log2(Gl),V0=Math.log2(pl),W0=100,X0=5e3;function xo(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Gl))-vu)/(V0-vu)))}function en(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return Number.isFinite(s)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?st(s):st((s-i)/(r-i)):0}function xu(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function st(n){return Math.max(0,Math.min(1,n))}function la(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function Id(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function $0(n){const e=Id(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function q0(n){const e=Id(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function Ys(n,e,t){const i=st(n),r=st(e),s=st(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const d=a<=1e-6?0:l/a;return{h:c,s:d,v:a}}function bo(n,e,t){const i=la(n)??0,r=st(e),s=st(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),d=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:d,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:d};case 3:return{r:l,g:c,b:s};case 4:return{r:d,g:l,b:s};default:return{r:s,g:l,b:c}}}const Y0=`
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
`,j0=`
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
`;class Z0{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0;const i=new Gn;this._geo=i,this._allocateBuffers(this._N);const r=new mi({vertexShader:Y0,fragmentShader:j0,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:_r});this._mesh=new Df(i,r),this._mesh.frustumCulled=!1,e.add(this._mesh),this._mat=r,this._lastBlending=r.blending,this._background=new At(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null},this._compiledRules=_u([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._binRms=new Float32Array(this._N),this._aPos=new hn(this._pos,3),this._aCol=new hn(this._col,3),this._aSz=new hn(this._sz,1),this._aAlpha=new hn(this._alpha,1),this._aShape=new hn(this._shape,1);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape])t.setUsage(kh);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s),binRms:this._binRms.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c],this._binRms[l]=this._binRms[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0,this._binRms[r+l]=a.binRms?a.binRms[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const d=l+c;this._pos[(i-r-o+c)*3]=a.pos[d*3],this._pos[(i-r-o+c)*3+1]=a.pos[d*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[d*3+2],this._col[(i-r-o+c)*3]=a.col[d*3],this._col[(i-r-o+c)*3+1]=a.col[d*3+1],this._col[(i-r-o+c)*3+2]=a.col[d*3+2],this._sz[i-r-o+c]=a.sz[d],this._alpha[i-r-o+c]=a.alpha[d],this._shape[i-r-o+c]=a.shape[d],this._pan[i-r-o+c]=a.pan?a.pan[d]:0,this._binRms[i-r-o+c]=a.binRms?a.binRms[d]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let s=0;s<r;s++)i.sz[s]=Math.max(0,i.sz[s]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=_u(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=$0(i),s=q0(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number.isFinite(Number(t.deltaTime))&&Number(t.deltaTime)>0?Number(t.deltaTime):1/60,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?st(t.binMagnitude):0,binFreq:Number.isFinite(t.binFreq)?Number(t.binFreq):Number(t.frequencyHz)||0,binPhase:Number.isFinite(t.binPhase)?st(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?st(t.binPhaseDeviation):0,binPhasedeviation:Number.isFinite(t.binPhasedeviation)?st(t.binPhasedeviation):Number.isFinite(t.binPhaseDeviation)?st(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?st(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?st(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?st(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,audioLengthSec:Number(t.audioLengthSec)||0,binEnergy:Number.isFinite(t.binEnergy)?st(Number(t.binEnergy)):Number.isFinite(t.binMagnitude)?st(Number(t.binMagnitude)):0,frequencyHz:i,notePitchClass:r,octave:s,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new z,max:new z,center:new z,size:new z};const t=new z(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new z(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let a=0;a<e;a++){const o=this._pos[a*3],l=this._pos[a*3+1],c=this._pos[a*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),s=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:s}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0,o.binRMSEnergy=Number.isFinite(this._binRms[c])?this._binRms[c]:0;const d={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],r:this._col[c*3],g:this._col[c*3+1],b:this._col[c*3+2],a:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,d),this._pos[c*3]=Number.isFinite(d.x)?d.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(d.y)?d.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(d.z)?d.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(d.size)?Math.max(0,d.size):this._sz[c];const f=Number.isFinite(d.red)?d.red:d.r,u=Number.isFinite(d.green)?d.green:d.g,m=Number.isFinite(d.blue)?d.blue:d.b,g=Number.isFinite(d.opacity)?d.opacity:d.a;let v=Number.isFinite(f)?st(f):this._col[c*3],p=Number.isFinite(u)?st(u):this._col[c*3+1],h=Number.isFinite(m)?st(m):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const T=Ys(v,p,h),y=la(d.hue),x=Number.isFinite(d.saturation)?st(d.saturation):T.s,R=Number.isFinite(d.brightness)?st(d.brightness):T.v,A=bo(y??T.h,x,R);v=A.r,p=A.g,h=A.b}this._col[c*3]=v,this._col[c*3+1]=p,this._col[c*3+2]=h,this._alpha[c]=Number.isFinite(g)?Math.max(0,Math.min(1,g)):this._alpha[c],this._shape[c]=xu(d.shapeType),this._binRms[c]=Number.isFinite(o.binRMSEnergy)?st(o.binRMSEnergy):this._binRms[c],l++}return l}applyBackgroundRules(e){const t=this._background,i=Ys(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v,backgroundRed:t.r,backgroundGreen:t.g,backgroundBlue:t.b};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?st(r.red):t.r,a=Number.isFinite(r.green)?st(r.green):t.g,o=Number.isFinite(r.blue)?st(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=Ys(s,a,o),c=la(r.hue),d=Number.isFinite(r.saturation)?st(r.saturation):l.s,f=Number.isFinite(r.brightness)?st(r.brightness):l.v,u=bo(c??l.h,d,f);s=u.r,a=u.g,o=u.b}t.setRGB(s,a,o)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null}}update(e,t,i,r){var j,B,ne,ce,ye,Be,Ye,Ae,Mt,Et,Pt,Dt;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),d=(((j=e.ctx)==null?void 0:j.sampleRate)??44100)/2,f=t.persistMode??0,u=t.inputGain??1,m=t.amplitudeThreshold??-48,g=Math.max(0,Math.min(255,Math.round(Math.pow(10,m/20)*255))),v=t.defaultParticleSize??6,p=Math.max(Gl,Math.min(pl,Number(t.freqNormMin??40))),h=Math.max(p+1,Math.min(pl,Number(t.freqNormMax??12e3))),T=xo(p),y=xo(h),x=Number(t.binMagnitudeNormMin??-70),R=Number(t.binMagnitudeNormMax??0),A=Number(t.binFluxNormMin??0),C=Number(t.binFluxNormMax??.5),N=Number(t.binPhaseDeviationNormMin??0),w=Number(t.binPhaseDeviationNormMax??Math.PI),b=Number(t.binAttackTimeNormMin??5),P=Number(t.binAttackTimeNormMax??500),$=Number(t.globalRmsNormMin??-60),X=Number(t.globalRmsNormMax??0),J=Number(t.spectralCentroidNormMin??150),V=Number(t.spectralCentroidNormMax??8e3),H=Number(t.globalSpectralFluxNormMin??0),se=Number(t.globalSpectralFluxNormMax??100),q=Number(t.spectralFlatnessNormMin??0),le=Number(t.spectralFlatnessNormMax??1),ve=Number(t.particleRenderPercent),Ee=Number.isFinite(ve)?Math.max(1,Math.min(100,Math.floor(ve))):100,Ze=Number(t.fftSize),re=Number.isFinite(Ze)?Math.max(1024,Math.min(16384,Ze)):2048,O=en(re,1024,16384),ie=Number(t.particlesByFrame),de=Number.isFinite(ie)?Math.max(W0,Math.min(X0,Math.round(ie))):1e3,ae=Math.max(1,de),be=Math.pow(h/Math.max(p,1e-6),1/ae),qe=Number.isFinite(be)&&be>1?be:1,Ve=t.blendMode??"screen",yt=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,ct=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,Rt=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,D=!!(e.analyserL&&e.analyserR&&e.getBinPan),it=((B=e.getBinMagnitude)==null?void 0:B.call(e))||null,He=((ne=e.getBinFlux)==null?void 0:ne.call(e))||null,Qe=((ce=e.getBinPhaseDeviation)==null?void 0:ce.call(e))||null,Ce=((ye=e.getBinPhase)==null?void 0:ye.call(e))||null,dt=((Be=e.getBinEnvelope)==null?void 0:Be.call(e))||null,Ie=((Ye=e.getBinAttackTime)==null?void 0:Ye.call(e))||null;new Set(((Mt=(Ae=this._compiledRules)==null?void 0:Ae.requiredInputsByTarget)==null?void 0:Mt.spawnedParticles)||[]);const S=new Set(((Et=this._compiledRules)==null?void 0:Et.requiredInputs)||[]),_=S.has("binMagnitude")||S.has("binEnergy"),L=S.has("binFreq"),G=S.has("binPhase"),K=S.has("binFlux"),te=S.has("binPhaseDeviation")||S.has("binPhasedeviation"),we=S.has("binAttackTime"),ge=S.has("binEnvelope")||S.has("binEnvelopeState"),Pe=(me,je)=>{const ht=Ee;if(me*ht%100>=ht)return!1;const Vt=je>1?me/(je-1):0,rt=O*Math.pow(Vt,1.35)*.75,M=Math.max(5,Math.min(100,ht*(1-rt)));return me*97%100<M};if(Ve==="alpha"){const me=this._mat;(me.blending!==Eo||me.blendSrc!==ns||me.blendDst!==is||me.blendEquation!==oi)&&(me.blending=Eo,me.blendSrc=ns,me.blendDst=is,me.blendEquation=oi,me.needsUpdate=!0,this._lastBlending=me.blending),me.depthWrite&&(me.depthWrite=!1,me.needsUpdate=!0)}else{const je={screen:_r,lighter:_r,"source-over":Ci,multiply:Ci}[Ve]??_r;je!==this._lastBlending&&(this._mat.blending=je,this._mat.needsUpdate=!0,this._lastBlending=je);const ht=Ve==="source-over";this._mat.depthWrite!==ht&&(this._mat.depthWrite=ht,this._mat.needsUpdate=!0)}const ut=Number(t.cameraCanvasWidthUnits),fe=Number(t.cameraCanvasHeightUnits),Le=Number.isFinite(ut)&&ut>0?ut:i,We=Number.isFinite(fe)&&fe>0?fe:r,et=(yt%360+360)%360;this._background.setHSL(et/360,st(ct/100),st(Rt/100));const Fe=We/2,Ke=((Pt=e.audioEl)==null?void 0:Pt.currentTime)??0,tt=((Dt=e.audioEl)==null?void 0:Dt.duration)??0,Ge={binMagnitude:0,binFreq:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binPhasedeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:en(e.rmsDbfs,$,X),binRMSEnergy:en(e.rmsDbfs,$,X),spectralCentroid:en(e.spectralCentroidHz,J,V),spectralFlux:en(e.spectralFluxAU,H,se),spectralFlatness:en(e.spectralFlatnessRatio,q,le),inharmonicity:st(e.inharmonicity),peakAmplitude:st(e.peakAmplitude),zeroCrossingRate:st(e.zeroCrossingRate),spectralRolloff:st(e.spectralRolloff),spectralSpread:st(e.spectralSpread),spectralSkewness:st(e.spectralSkewness),chromagram:st(e.chromagram)};if(Ge.amplitude=Ge.globalRmsEnergy,_&&it&&it.length>0){let me=0;for(let je=0;je<it.length;je++)me+=en(it[je],x,R);Ge.binMagnitude=me/it.length}if(K&&He&&He.length>0){let me=0;for(let je=0;je<He.length;je++)me+=en(He[je],A,C);Ge.binFlux=me/He.length}if(te&&Qe&&Qe.length>0){let me=0;for(let ht=0;ht<Qe.length;ht++)me+=en(Qe[ht],N,w);const je=me/Qe.length;Ge.binPhaseDeviation=je,Ge.binPhasedeviation=je}if(we&&Ie&&Ie.length>0){let me=0;for(let je=0;je<Ie.length;je++)me+=en(Ie[je],b,P);Ge.binAttackTime=me/Ie.length}if(ge&&dt&&dt.length>0){let me=0;for(let je=0;je<dt.length;je++)me+=dt[je];Ge.binEnvelope=me/dt.length,Ge.binEnvelopeState=Ge.binEnvelope}if(L&&(Ge.binFreq=e.peakFreq??0),G&&Ce&&Ce.length>0){let me=0;for(let je=0;je<Ce.length;je++)me+=en(Ce[je],-Math.PI,Math.PI);Ge.binPhase=me/Ce.length}let I=0;for(let me=0;me<l;me++)o[me]>I&&(I=o[me]);const xe=Math.max(1,Math.round(I*.55)),ee=Math.min(g,xe);let Q=f===1?this._paintCount:0;const Me=(me,je=1)=>{if(Q>=this._N&&f===1){const Wt=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),gt=this._archiveAndCompactOldest(Wt,Q,t,Ke);Q=Math.max(0,Q-gt)}if(Q>=this._N)return;const ht=me.hz,Vt=xo(ht),rt=en(Vt,T,y),M=Number.isFinite(me.binPan)?me.binPan:e.pan??0;Number.isFinite(me.byte)&&me.byte;const F=Number.isFinite(me.energy)?me.energy:0,W=Number.isFinite(me.binMagnitude)?me.binMagnitude:void 0,Y=L?ht:void 0,U=Number.isFinite(me.binPhase)?me.binPhase:void 0,he=Number.isFinite(me.binFlux)?me.binFlux:void 0,_e=Number.isFinite(me.binPhaseDeviation)?me.binPhaseDeviation:void 0,Ne=Number.isFinite(me.binAttackTime)?me.binAttackTime:void 0,De=Number.isFinite(me.binEnvelope)?me.binEnvelope:void 0,ue=Number.isFinite(me.binRMSEnergy)?me.binRMSEnergy:void 0,Je=(rt*2-1)*Fe,Oe=0,ot=0,ze=st(F),$e={x:Oe,y:Je,z:ot,size:Math.max(1,v*(.5+F*1.5)),red:ze,green:ze,blue:ze,opacity:Math.min(1,(.08+F*1.9)*je),r:ze,g:ze,b:ze,a:Math.min(1,(.08+F*1.9)*je),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({params:t,inputs:this._buildRuleInputs(e,{binEnergy:F,frequencyHz:ht,normFreq:rt,pan:M,spectralCentroid:Ge.spectralCentroid,spectralFlux:Ge.spectralFlux,spectralFlatness:Ge.spectralFlatness,inharmonicity:Ge.inharmonicity,peakAmplitude:Ge.peakAmplitude,zeroCrossingRate:Ge.zeroCrossingRate,spectralRolloff:Ge.spectralRolloff,spectralSpread:Ge.spectralSpread,spectralSkewness:Ge.spectralSkewness,chromagram:Ge.chromagram,binMagnitude:W,binFreq:Y,binPhase:U,binFlux:he,binPhaseDeviation:_e,binAttackTime:Ne,binEnvelope:De,binEnvelopeState:De,binRMSEnergy:ue,globalRmsEnergy:Ge.globalRmsEnergy,amplitude:Ge.amplitude,time:Ke,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:Le,canvasHeightUnits:We,audioLengthSec:tt}),particle:$e});const lt=Number.isFinite($e.particleCount)?st($e.particleCount):1;if(lt<=0||lt<1&&Math.random()>lt)return;this._pos[Q*3]=Number.isFinite($e.x)?$e.x:Oe,this._pos[Q*3+1]=Number.isFinite($e.y)?$e.y:Je,this._pos[Q*3+2]=Number.isFinite($e.z)?$e.z:ot,this._sz[Q]=Number.isFinite($e.size)?Math.max(0,$e.size):Math.max(2,v);const mt=Number.isFinite($e.red)?$e.red:$e.r,Xe=Number.isFinite($e.green)?$e.green:$e.g,Bt=Number.isFinite($e.blue)?$e.blue:$e.b,bt=Number.isFinite($e.opacity)?$e.opacity:$e.a;let jt=Number.isFinite(mt)?st(mt):ze,bn=Number.isFinite(Xe)?st(Xe):ze,Ut=Number.isFinite(Bt)?st(Bt):ze;if(this._compiledRules.usesParticleHsb){const Wt=Ys(jt,bn,Ut),gt=la($e.hue),Jt=Number.isFinite($e.saturation)?st($e.saturation):Wt.s,nn=Number.isFinite($e.brightness)?st($e.brightness):Wt.v,zt=bo(gt??Wt.h,Jt,nn);jt=zt.r,bn=zt.g,Ut=zt.b}this._col[Q*3]=jt,this._col[Q*3+1]=bn,this._col[Q*3+2]=Ut,this._alpha[Q]=Number.isFinite(bt)?Math.max(0,Math.min(1,bt)):Math.min(1,(.08+F*1.9)*je),this._shape[Q]=xu($e.shapeType),this._pan[Q]=Number.isFinite(M)?Math.max(-1,Math.min(1,M)):0,this._binRms[Q]=Number.isFinite(ue)?st(ue):0,Q++},Se=o.length/Math.max(1e-6,d),ke=me=>{const je=Math.floor(me*Se);return Math.max(0,Math.min(l-1,je))},St=new Float32Array(ae),Ct=new Uint8Array(ae),E=new Float32Array(ae);let k=p;for(let me=0;me<ae;me++){const je=me===ae-1?h:Math.min(h,k*qe);if(!Pe(me,ae)){k=je;continue}const ht=Math.sqrt(Math.max(p,k)*Math.max(p,je)),Vt=ke(k),rt=ke(je);if(rt<Vt){k=je;continue}let M=0,F=0,W=0,Y=0,U=0,he=0,_e=0,Ne=0,De=0,ue=0,Je=0;for(let ze=Vt;ze<=rt;ze++){const $e=o[ze],lt=it&&ze<it.length?en(it[ze],x,R):$e/255;W+=lt,_&&(he+=lt),G&&Ce&&ze<Ce.length&&(_e+=en(Ce[ze],-Math.PI,Math.PI)),K&&He&&ze<He.length&&(Ne+=en(He[ze],A,C)),te&&Qe&&ze<Qe.length&&(De+=en(Qe[ze],N,w)),we&&Ie&&ze<Ie.length&&(ue+=en(Ie[ze],b,P)),ge&&dt&&ze<dt.length&&(Je+=en(dt[ze]/3,0,1));const mt=D?e.getBinPan(ze):e.pan??0,Xe=Math.max(1,$e);Y+=mt*Xe,U+=Xe,$e>F&&(F=$e),M++}if(M<=0||F<=ee)continue;const Oe=W/M,ot=Oe*u;if(St[me]=ot,Ct[me]=F,E[me]=ht,Me({hz:ht,byte:F,energy:ot,binPan:U>0?Y/U:0,binRMSEnergy:st(Oe),binMagnitude:_?he/M:void 0,binPhase:G?_e/M:void 0,binFlux:K?Ne/M:void 0,binPhaseDeviation:te?De/M:void 0,binAttackTime:we?ue/M:void 0,binEnvelope:ge?Je/M:void 0}),k=je,Q>=this._N)break}if(Q===0&&I>0){const me=[];for(let ht=0;ht<ae;ht++)Pe(ht,ae)&&E[ht]>=p&&E[ht]<=h&&Ct[ht]>0&&me.push(ht);me.sort((ht,Vt)=>Ct[Vt]-Ct[ht]);const je=Math.min(96,me.length);for(let ht=0;ht<je&&Q<this._N;ht++){const Vt=me[ht],rt=Ct[Vt],M=St[Vt],F=Math.max(.08,M);Me({hz:E[Vt],byte:rt,energy:F,binPan:e.pan??0,binRMSEnergy:st(M)},.85)}}f===1?(this._paintCount=Q,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._pruneArchive(t,Ke)):(this._paintCount=0,this._visibleCount=Q,this._geo.setDrawRange(0,Q)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...Ge,time:Ke,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:Le,canvasHeightUnits:We,audioLengthSec:tt})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...Ge,time:Ke,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:Le,canvasHeightUnits:We,audioLengthSec:tt})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...Ge,time:Ke,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:Le,canvasHeightUnits:We,audioLengthSec:tt})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;this._aPos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose()}}const K0="http://localhost:8000",J0="audio/wav",Q0=new Set(["m4a","aac","flac","alac","aiff"]);function ex(n){const e=String(n||"").lastIndexOf(".");return e<0?"":n.slice(e+1).toLowerCase()}function tx(n,e){const t=String(n).replace(/[\\/:*?"<>|]+/g,"_"),i=t.lastIndexOf(".");return i<0?`${t}.${e}`:`${t.slice(0,i)}.${e}`}function nx(n){const e=ex(n==null?void 0:n.name);return e?Q0.has(e):!1}async function ix(n){const e=new FormData;e.append("file",n);const t=await fetch(`${K0}/api/audio/convert`,{method:"POST",body:e});if(!t.ok){const s=await t.text().catch(()=>"");throw new Error(s||`Audio conversion failed (${t.status}).`)}const i=await t.blob();if(!i||i.size===0)throw new Error("Converted audio is empty.");const r=tx((n==null?void 0:n.name)||"audio","wav");return new File([i],r,{type:J0})}function pr(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Xt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function rx(n){if(!n){console.warn("[AudioPlayer] No container element.");const V=new Audio;return V.crossOrigin="anonymous",{audioEl:V,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Xt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=Xt("div","audio-player__body"),a=Xt("div","audio-player__file-row"),o=Xt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});o.style.display="none";const l=Xt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});l.textContent="♫";const c=Xt("span","audio-player__file-name",{text:"No file loaded"});a.append(o,l);const d=Xt("div","audio-player__transport"),f=Xt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});f.textContent="▶";const u=Xt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});u.textContent="■";const m=Xt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});m.textContent="<<";const g=Xt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});g.textContent=">>";const v=Xt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});v.textContent="⎙";const p=Xt("button","audio-player__btn",{id:"btn-record","aria-label":"Record video",disabled:"true",title:"Record canvas and audio"});p.textContent="⏺";const h=Xt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});h.textContent="🖌";const T=Xt("div","audio-player__speed-wrap"),y=Xt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),x=Xt("span","audio-player__speed-suffix",{text:"x"});T.append(y,x),d.append(m,f,u,g,v,p,h,T);const R=Xt("div","audio-player__progress-row"),A=Xt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function C(V){A.style.background=`linear-gradient(90deg, var(--color-accent) ${V}%, var(--color-border) ${V}%)`}C(0);const N=Xt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),w=Xt("div","audio-player__progress-meta");w.append(c,N),R.append(A,w),s.append(a,d,R),n.append(r,s);function b(V,H=""){o.disabled=V,f.disabled=V||!e.src,u.disabled=V||!e.src,m.disabled=V||!e.src,g.disabled=V||!e.src,p.disabled=V||!e.src,h.disabled=V||!e.src,y.disabled=V||!e.src,V&&H&&(c.textContent=H)}function P(V){const H=Math.max(.1,Math.min(16,Number(V)));Number.isFinite(H)&&(e.playbackRate=H,y.value=String(Number(H.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:H},bubbles:!0})))}function $(V,H=(V==null?void 0:V.name)||"Audio loaded"){V&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(V),e.load(),c.textContent=H,t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),A.value="0",C(0),N.textContent="0:00 / –:––",X(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:V,audioEl:e},bubbles:!0})))}function X(){f.disabled=!1,u.disabled=!1,m.disabled=!1,g.disabled=!1,p.disabled=!1,h.disabled=!1,y.disabled=!1}o.addEventListener("change",async V=>{const H=V.target.files[0];if(H){b(!0,`Loading ${H.name}...`);try{const se=nx(H)?await(async()=>(c.textContent=`Converting ${H.name}...`,ix(H)))():H;$(se,se.name)}catch(se){console.warn("[AudioPlayer] conversion failed, using original file:",se),$(H,H.name)}finally{b(!1),o.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(V){console.warn("[AudioPlayer] play() failed:",V.message)}}),e.addEventListener("play",()=>{t=!0,f.textContent="⏸︎",f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active")}),u.addEventListener("click",()=>{e.pause(),e.currentTime=0,A.value="0",C(0),N.textContent=`0:00 / ${pr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),m.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),g.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),v.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),p.addEventListener("click",()=>{p.disabled||n.dispatchEvent(new CustomEvent("player:recordvideo-toggle",{detail:{audioEl:e},bubbles:!0}))}),h.addEventListener("click",()=>{h.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",V=>{var se;const H=!!((se=V==null?void 0:V.detail)!=null&&se.running);h.disabled=H||!e.src,p.disabled=H||!e.src,y.disabled=H||!e.src,h.textContent=H?"PAINTING...":"🖌"}),n.addEventListener("player:recordvideo-state",V=>{var se;const H=!!((se=V==null?void 0:V.detail)!=null&&se.running);p.textContent=H?"⏹":"⏺",p.classList.toggle("audio-player__btn--active",H),h.disabled=H||!e.src,!H&&!h.disabled&&e.src&&(p.disabled=!1),y.disabled=H||!e.src}),y.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),P(y.value),y.blur())});let J=!1;return A.addEventListener("mousedown",()=>{J=!0}),A.addEventListener("touchstart",()=>{J=!0},{passive:!0}),A.addEventListener("input",()=>{const V=parseFloat(A.value);C(V),e.duration&&(N.textContent=`${pr(e.duration*V/100)} / ${pr(e.duration)}`)}),A.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(A.value)/100*e.duration),J=!1}),e.addEventListener("timeupdate",()=>{if(J)return;const V=e.currentTime,H=e.duration;if(!isFinite(H)||H===0)return;const se=V/H*100;A.value=String(se),C(se),N.textContent=`${pr(V)} / ${pr(H)}`}),e.addEventListener("loadedmetadata",()=>{N.textContent=`0:00 / ${pr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),r.textContent=i?"»":"«",r.title=i?"Expand player":"Collapse player"}),{audioEl:e,getIsPlaying:()=>t}}function yo(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function sx({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=yo("div","canvas-wrapper__resize-handle-right"),a=yo("div","canvas-wrapper__resize-handle-bottom"),o=yo("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(u,m,g){u.preventDefault();const v=u.touches?u.touches[0].clientX:u.clientX,p=u.touches?u.touches[0].clientY:u.clientY;l={type:m,startX:v,startY:p,startW:n.clientWidth,startH:n.clientHeight,handle:g},g.classList.add("dragging"),document.body.style.cursor=m==="right"?"ew-resize":m==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function d(u){if(!l)return;const m=u.touches?u.touches[0].clientX:u.clientX,g=u.touches?u.touches[0].clientY:u.clientY,v=m-l.startX,p=g-l.startY,h=160,T=120,y=e.getBoundingClientRect();let x=l.startW,R=l.startH;(l.type==="right"||l.type==="corner")&&(x=Math.max(h,Math.min(l.startW+v,y.width-4))),(l.type==="bottom"||l.type==="corner")&&(R=Math.max(T,Math.min(l.startH+p,window.innerHeight-4)));const A=i>0?x/i:1,C=r>0?R/r:1;i=x,r=R,n.style.width=`${x}px`,n.style.height=`${R}px`,t(x,R,A,C)}function f(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",u=>c(u,"right",s)),a.addEventListener("mousedown",u=>c(u,"bottom",a)),o.addEventListener("mousedown",u=>c(u,"corner",o)),s.addEventListener("touchstart",u=>c(u,"right",s),{passive:!1}),a.addEventListener("touchstart",u=>c(u,"bottom",a),{passive:!1}),o.addEventListener("touchstart",u=>c(u,"corner",o),{passive:!1}),document.addEventListener("mousemove",d),document.addEventListener("mouseup",f),document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",f),window.addEventListener("resize",()=>{if(!n.style.width){const u=e.clientWidth,m=e.clientHeight,g=i>0?u/i:1,v=r>0?m/r:1;i=u,r=m,t(u,m,g,v)}}),{setSize(u,m){const g=i>0?u/i:1,v=r>0?m/r:1;i=u,r=m,n.style.width=`${u}px`,n.style.height=`${m}px`,t(u,m,g,v)},getSize(){return{w:i,h:r}}}}function jn(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Vl(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function ax(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return jn(i/t)}function ox(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return jn(r/Math.max(s,e))}function lx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let d=1;d<t-1;d++){const f=n[d];if(!(f<r)&&f>=n[d-1]&&f>=n[d+1]){const u=d/Math.max(1,t-1)*i;s.push({i:d,hz:u,mag:f/255})}}if(s.length<2)return 0;s.sort((d,f)=>f.mag-d.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let d=1;d<a.length;d++){const f=a[d],m=Math.max(1,Math.round(f.hz/o))*o,g=Math.abs(f.hz-m)/Math.max(m,1e-9);l+=g*f.mag,c+=f.mag}return c<=1e-9?0:jn(l/c*2)}function cx(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return jn(e/255)}function ux(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return jn(e/Math.max(1,n.length-1))}function dx(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let a=0;for(let c=0;c<i;c++)a+=Math.max(0,n[c]/255);if(a<=1e-9)return 0;const o=a*s;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const d=c/Math.max(1,i-1)*r;return jn(d/Math.max(1,r))}return 1}function Ud(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Number.isFinite(t)?t:Vl(n,e);let a=0,o=0;for(let c=0;c<i;c++){const d=Math.max(0,n[c]/255),u=c/Math.max(1,i-1)*r-s;o+=u*u*d,a+=d}if(a<=1e-9)return 0;const l=Math.sqrt(o/a);return jn(l/Math.max(1,r))}function hx(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,s=e/2,a=Number.isFinite(t)?t:Vl(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*s):Math.max(1e-6,Ud(n,e,a)*s);let l=0,c=0;for(let f=0;f<r;f++){const u=Math.max(0,n[f]/255),g=(f/Math.max(1,r-1)*s-a)/o;c+=g*g*g*u,l+=u}if(l<=1e-9)return 0;const d=c/l;return jn((d+2)/4)}function fx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let s=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const d=69+12*Math.log2(c/440),f=(Math.round(d)%12+12)%12;r[f]+=l,s+=l}if(s<=1e-9)return 0;let a=0;for(let o=0;o<12;o++)r[o]>a&&(a=r[o]);return jn(a/s)}function px(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return jn((Number.isFinite(n)?n:0)/t)}const Pr=document.getElementById("three-canvas"),cs=document.getElementById("canvas-wrapper"),Yn=document.getElementById("canvas-col"),kt=new cd({canvas:Pr,antialias:!0});kt.setPixelRatio(window.devicePixelRatio);kt.setClearColor(0,1);kt.autoClear=!0;const us=new Rf,Wl=250,Xl=new kf(Wl);let xr=!0;Xl.userData.excludeFromPng=!0;us.add(Xl);function Od(){window.dispatchEvent(new CustomEvent("seesound:origin-sign-state",{detail:{enabled:xr,size:Wl}}))}window.addEventListener("seesound:origin-sign-toggle",n=>{var t;const e=(t=n==null?void 0:n.detail)==null?void 0:t.enabled;typeof e=="boolean"?xr=e:xr=!xr,Xl.visible=xr,Od()});Od();const tn=new id(-1,1,1,-1,.001,5e3),Cn=new Pn(55,1,.001,5e3);let Ue=tn;const Yt=new z(0,0,0),$l=new z(0,0,420),bu=$l.length();for(const n of[tn,Cn])n.position.copy($l),n.up.set(0,1,0),n.lookAt(Yt);function ql(){const e=oe.cameraProjection==="perspective"?Cn:tn;e!==Ue&&(e.position.copy(Ue.position),e.quaternion.copy(Ue.quaternion),e.up.copy(Ue.up),e.zoom=Ue.zoom,e.lookAt(Yt),e.updateProjectionMatrix(),Ue=e,gi())}const Ot={radius:420,azimuth:0,elevation:0};function gi(){const n=Ue.position.x-Yt.x,e=Ue.position.y-Yt.y,t=Ue.position.z-Yt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);Ot.radius=i,Ot.azimuth=Math.atan2(n,t),Ot.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function ya(){const n=Math.cos(Ot.elevation);Ue.position.set(Yt.x+Ot.radius*n*Math.sin(Ot.azimuth),Yt.y+Ot.radius*Math.sin(Ot.elevation),Yt.z+Ot.radius*n*Math.cos(Ot.azimuth)),Ue.lookAt(Yt)}function kd(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Bd(){Yt.set(0,0,0);const n=Math.max(1,kt.domElement.clientWidth||Yn.clientWidth||window.innerWidth),e=Math.max(1,kt.domElement.clientHeight||Yn.clientHeight||window.innerHeight);jl(n,e);for(const t of[tn,Cn])t.position.copy($l),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(Yt),t.updateProjectionMatrix();ql(),Yl(!0),gi()}function Yl(n=!1){if(oe.cameraProjection==="perspective")return;const e=String(oe.cameraAxoPreset||"orthoXY"),t=n?bu:Math.max(40,Number(Ot.radius)||bu),{azimuth:i,elevation:r}=kd(e);Ot.radius=t,Ot.azimuth=i,Ot.elevation=r,ya(),gi()}gi();const mn={active:!1,button:-1,lastX:0,lastY:0};Pr.addEventListener("contextmenu",n=>n.preventDefault());Pr.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(mn.active=!0,mn.button=n.button,mn.lastX=n.clientX,mn.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{mn.active=!1,mn.button=-1});window.addEventListener("mousemove",n=>{if(!mn.active)return;const e=n.clientX-mn.lastX,t=n.clientY-mn.lastY;if(mn.lastX=n.clientX,mn.lastY=n.clientY,mn.button===0)Ot.azimuth-=e*.006,Ot.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,Ot.elevation-t*.005)),ya();else if(mn.button===1){const i=Math.max(1,kt.domElement.clientHeight||Yn.clientHeight||window.innerHeight),r=new z,s=new z,a=new z;Ue.updateMatrixWorld();const o=Ue.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Ue.isOrthographicCamera)l=(Ue.top-Ue.bottom)/(Math.max(.01,Ue.zoom)*i);else{const c=Math.max(.001,Ue.position.distanceTo(Yt)),d=Al.degToRad(Ue.fov);l=2*Math.tan(d*.5)*c/i,l/=Math.max(.01,Ue.zoom)}a.copy(r).multiplyScalar(-e*l),a.addScaledVector(s,t*l),Ue.position.add(a),Yt.add(a),gi()}else if(mn.button===2){const i=-e*.004,r=-t*.004;Ue.rotateOnWorldAxis(new z(0,1,0),i),Ue.rotateX(r)}});Pr.addEventListener("wheel",n=>{if(n.preventDefault(),Ue.isPerspectiveCamera){const e=new z;Ue.getWorldDirection(e);const t=Math.max(2,Ot.radius*.08),i=(n.deltaY>0?1:-1)*t;Ue.position.addScaledVector(e,i),gi()}else{const e=n.deltaY>0?.92:1.08;Ue.zoom=Math.max(.05,Math.min(64,Ue.zoom*e)),Ue.updateProjectionMatrix()}},{passive:!1});function zd(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Ue.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Ue.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Ue.position.z=n.z,e=!0),e&&(Ue.lookAt(Yt),gi()),Number.isFinite(n.zoom)&&(Ue.zoom=Math.max(.05,Math.min(64,n.zoom)),Ue.updateProjectionMatrix())}function mx(){const n=It.getVisibleBounds();if(n.empty){Bd();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=kt.domElement.width/t,r=kt.domElement.height/t,s=Math.max(1,i||Number(oe.canvasWidth)||kt.domElement.clientWidth||Yn.clientWidth||window.innerWidth),a=Math.max(1,r||Number(oe.canvasHeight)||kt.domElement.clientHeight||Yn.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,d=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(Yt.copy(c),Ue.isOrthographicCamera){const{azimuth:f,elevation:u}=kd(oe.cameraAxoPreset);Ot.azimuth=f,Ot.elevation=u,Ot.radius=Math.max(d*2.2,60),ya(),Ue.updateMatrixWorld(!0);const m=Ue.matrixWorld.elements,g=new z(m[0],m[1],m[2]).normalize(),v=new z(m[4],m[5],m[6]).normalize(),p=[new z(n.min.x,n.min.y,n.min.z),new z(n.min.x,n.min.y,n.max.z),new z(n.min.x,n.max.y,n.min.z),new z(n.min.x,n.max.y,n.max.z),new z(n.max.x,n.min.y,n.min.z),new z(n.max.x,n.min.y,n.max.z),new z(n.max.x,n.max.y,n.min.z),new z(n.max.x,n.max.y,n.max.z)];let h=0,T=0;const y=new z;for(const A of p)y.copy(A).sub(c),h=Math.max(h,Math.abs(y.dot(g))),T=Math.max(T,Math.abs(y.dot(v)));const x=Math.max(h,T*o,d*.35),R=Math.max(T,h/Math.max(.001,o),d*.35);tn.left=-x*e,tn.right=x*e,tn.top=R*e,tn.bottom=-R*e,tn.zoom=1,tn.near=-Math.max(5e3,d*6),tn.far=Math.max(5e3,d*6),tn.updateProjectionMatrix()}else{Cn.lookAt(c),gi();const f=Al.degToRad(Cn.fov),u=d*e/Math.max(.001,Math.tan(f*.5)),m=2*Math.atan(Math.tan(f*.5)*(Cn.aspect||o)),g=d*e/Math.max(.001,Math.tan(m*.5));Ot.radius=Math.max(g,u,40),ya(),Cn.near=Math.max(.001,Ot.radius-d*3),Cn.far=Math.max(Cn.near+1,Ot.radius+d*6),Cn.updateProjectionMatrix()}gi()}function jl(n,e){tn.left=-n/2,tn.right=n/2,tn.top=e/2,tn.bottom=-e/2,tn.updateProjectionMatrix(),Cn.aspect=n/Math.max(1,e),Cn.updateProjectionMatrix(),kt.setSize(n,e,!1)}const gx=Yn.clientWidth||window.innerWidth,_x=Yn.clientHeight||window.innerHeight;jl(gx,_x);ql();Yl();const It=new Z0(us,{maxParticles:oe.maxParticles??262144}),qn=It.onRulesChanged(oe.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:qn}));function vx(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function Zl(n=null){const e=vx(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","canvasWidthUnits","canvasHeightUnits","audioLengthSec","binEnergy"]),i=e.has("binMagnitude")||e.has("binEnergy")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),s=e.has("binPhaseDeviation")||e.has("binPhasedeviation"),a=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),d=e.has("spectralCentroid"),f=e.has("spectralFlux"),u=e.has("spectralFlatness"),m=e.has("inharmonicity"),g=e.has("peakAmplitude"),v=e.has("zeroCrossingRate"),p=e.has("spectralRolloff"),h=e.has("spectralSpread"),T=e.has("spectralSkewness"),y=e.has("chromagram"),x=new Set(t);return c&&x.add("globalRmsEnergy"),d&&x.add("spectralCentroid"),f&&x.add("spectralFlux"),u&&x.add("spectralFlatness"),m&&x.add("inharmonicity"),g&&x.add("peakAmplitude"),v&&x.add("zeroCrossingRate"),p&&x.add("spectralRolloff"),h&&x.add("spectralSpread"),T&&x.add("spectralSkewness"),y&&x.add("chromagram"),i&&x.add("binMagnitude"),r&&x.add("binFlux"),s&&x.add("binPhaseDeviation"),o&&x.add("binPhase"),a&&x.add("binEnvelope"),a&&x.add("binEnvelopeState"),l&&x.add("binAttackTime"),c&&x.add("binRMSEnergy"),e.has("binFreq")&&x.add("binFreq"),{used:e,calculatedInputs:x,worklet:{enabled:i||r||s||a||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:s,needPhase:o,needEnvelope:a,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:d,needGlobalSpectralFlux:f,needSpectralFlatness:u,needInharmonicity:m,needPeakAmplitude:g,needZeroCrossingRate:v,needSpectralRolloff:p,needSpectralSpread:h,needSpectralSkewness:T,needChromagram:y},backend:{calc_fft:!0,calc_magnitude:i||r||d||u||f,calc_magnitude_dbfs:i||c,calc_phase:s||o,calc_phase_deviation:s,calc_local_spectral_flux:r||a,calc_envelope_state:a,calc_rms_energy:c,calc_peak_amplitude:g,calc_zero_crossing_rate:v,calc_spectral_centroid:d,calc_global_spectral_flux:f,calc_spectral_flatness:u,calc_spectral_rolloff:p,calc_spectral_spread:h,calc_spectral_skewness:T,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:y}}}function xx(n={}){const e=t=>Math.pow(10,Number(t)/20);return{scalar:{center_frequency_hz:{min_value:Number(n.freqNormMin??40),max_value:Number(n.freqNormMax??12e3)},magnitude_dbfs:{min_value:Number(n.binMagnitudeNormMin??-70),max_value:Number(n.binMagnitudeNormMax??0)},magnitude_linear:{min_value:e(Number(n.binMagnitudeNormMin??-70)),max_value:e(Number(n.binMagnitudeNormMax??0))},phase_deviation:{min_value:Number(n.binPhaseDeviationNormMin??0),max_value:Number(n.binPhaseDeviationNormMax??Math.PI)},spectral_flux:{min_value:Number(n.binFluxNormMin??0),max_value:Number(n.binFluxNormMax??.5)},rms_energy:{min_value:e(Number(n.globalRmsNormMin??-60)),max_value:e(Number(n.globalRmsNormMax??0))},spectral_centroid_hz:{min_value:Number(n.spectralCentroidNormMin??150),max_value:Number(n.spectralCentroidNormMax??8e3)},global_spectral_flux:{min_value:Number(n.globalSpectralFluxNormMin??0),max_value:Number(n.globalSpectralFluxNormMax??100)},spectral_flatness:{min_value:Number(n.spectralFlatnessNormMin??0),max_value:Number(n.spectralFlatnessNormMax??1)}},vector:{}}}function Wn(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return!Number.isFinite(s)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(s-i)/(r-i)))}const Mo=Object.freeze([1024,2048,4096,8192,16384]);function Ma(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=Mo[0],i=Math.abs(e-t);for(let r=1;r<Mo.length;r++){const s=Mo[r],a=Math.abs(e-s);a<i&&(t=s,i=a)}return t}function bx(n={},e=null){const t=Zl(e),i=Ma(n.fftSize);return{sample_rate:44100,fft_size:i,hop_size:Math.max(64,Math.floor(i/4)),rolloff_percent:.85,n_mfcc:13,...t.backend,normalize_features:!0,normalization_bounds:xx(n)}}function Kl(n=null){const e=Zl(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}Kl(qn==null?void 0:qn.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||It.scaleAllParticleSizes(t/e)});class Hd{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=Ma(oe.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none"}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-vHr3ONaJ.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=Zl(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=Ma(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const d of[this.analyserL,this.analyserR])d.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var v,p,h;if(!this.analyser)return;((v=this.ctx)==null?void 0:v.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((p=this.ctx)==null?void 0:p.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((h=this.ctx)==null?void 0:h.sampleRate)??44100,i=t/2,r=T=>T/e*i;let s=0,a=0,o=0,l=0,c=0,d=0,f=0,u=0;for(let T=0;T<e;T++){const y=this.frequencyData[T],x=r(T);x<250?(s+=y,a++):x<4e3?(o+=y,l++):(c+=y,d++),y>f&&(f=y,u=T)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=d?c/d/255:0,this.peakFreq=Math.round(r(u)),this.peakByte=f;const m=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const T=Vl(this.frequencyData,t);this.spectralCentroidHz+=(T-this.spectralCentroidHz)*m,this.spectralCentroid=px(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const y=ax(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(y-this.spectralFluxAU)*m,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const T=ox(this.frequencyData);this.spectralFlatnessRatio+=(T-this.spectralFlatnessRatio)*m,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const T=lx(this.frequencyData,t);this.inharmonicity+=(T-this.inharmonicity)*m}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(cx(this.frequencyData)-this.peakAmplitude)*m:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(ux(this.timeDomainData)-this.zeroCrossingRate)*m:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(dx(this.frequencyData,t,.85)-this.spectralRolloff)*m:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const T=Ud(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(T-this.spectralSpread)*m:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const y=hx(this.frequencyData,t,this.spectralCentroidHz,T);this.spectralSkewness+=(y-this.spectralSkewness)*m}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(fx(this.frequencyData,t)-this.chromagram)*m:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let g=0;for(const T of this.timeDomainData)g+=((T-128)/128)**2;if(this.amplitude=Math.sqrt(g/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let T=0,y=0;for(let x=0;x<this._freqL.length;x++)T+=this._freqL[x],y+=this._freqR[x];this.pan=(y-T)/(T+y+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const Te=new Hd;Te.setRuleInputUsage(qn==null?void 0:qn.requiredInputsByTarget);const yu=document.getElementById("status-dot"),Mu=document.getElementById("status-text");function So(n,e){yu&&(yu.className=n),Mu&&(Mu.textContent=e)}function Gd(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>So("open",""),n.onclose=()=>{So("closed","Backend offline"),setTimeout(Gd,3e3)},n.onerror=()=>So("closed","WS error"),n.onmessage=()=>{},Ji(e=>{var t;if(n.readyState===WebSocket.OPEN){const i=(t=It.getRuleCompileState)==null?void 0:t.call(It),r=(i==null?void 0:i.requiredInputsByTarget)||(qn==null?void 0:qn.requiredInputsByTarget)||null,s={...e,audio_analysis_config:bx(e,r)};n.send(JSON.stringify({type:"params_update",payload:s}))}})}Gd();const Zn=document.createElement("div");Zn.id="camera-hud";Zn.style.position="fixed";Zn.style.left="8px";Zn.style.bottom="8px";Zn.style.zIndex="220";Zn.style.display="flex";Zn.style.alignItems="center";Zn.style.gap="6px";const Nn=document.createElement("button");Nn.type="button";Nn.title="Reset camera";Nn.textContent="↺";Nn.style.width="22px";Nn.style.height="22px";Nn.style.border="1px solid var(--color-border, #444)";Nn.style.borderRadius="6px";Nn.style.background="rgba(0,0,0,0.55)";Nn.style.color="var(--color-text-muted, #bbb)";Nn.style.cursor="pointer";Nn.addEventListener("click",Bd);const Ln=document.createElement("button");Ln.type="button";Ln.title="Fit to visible particles";Ln.textContent="Fit";Ln.style.height="22px";Ln.style.padding="0 8px";Ln.style.border="1px solid var(--color-border, #444)";Ln.style.borderRadius="6px";Ln.style.background="rgba(0,0,0,0.55)";Ln.style.color="var(--color-text-muted, #bbb)";Ln.style.cursor="pointer";Ln.addEventListener("click",mx);const Fn=document.createElement("button");Fn.type="button";Fn.title="Clear canvas";Fn.textContent="Clean";Fn.style.height="22px";Fn.style.padding="0 8px";Fn.style.border="1px solid var(--color-border, #444)";Fn.style.borderRadius="6px";Fn.style.background="rgba(0,0,0,0.55)";Fn.style.color="var(--color-text-muted, #bbb)";Fn.style.cursor="pointer";Fn.addEventListener("click",()=>It.clear());const Vn=document.createElement("div");Vn.id="camera-readout";Vn.style.fontFamily="var(--font-mono, monospace)";Vn.style.fontSize="10px";Vn.style.color="var(--color-text-muted, #bbb)";Vn.style.background="rgba(0,0,0,0.35)";Vn.style.padding="4px 6px";Vn.style.borderRadius="4px";Vn.style.pointerEvents="none";Vn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";Zn.append(Nn,Ln,Fn,Vn);document.body.appendChild(Zn);let Su=0,qi=0,ml="",On=null,js=null,Zs=[],Ks=null,Yr=null;function Sa(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function gl(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function Jl(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Vd(){var e,t;if(ml)return gl(ml);const n=String(((e=Te==null?void 0:Te.audioEl)==null?void 0:e.currentSrc)||((t=Te==null?void 0:Te.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return gl(r)}catch{}return"audio"}async function yx(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function ni(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}${Zr}`}async function Mx(){var o;const n=Sa(Vd(),"audio"),e=Sa(Jl(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(oe.canvasWidth)||kt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(oe.canvasHeight)||kt.domElement.height/Math.max(1,window.devicePixelRatio))),s=document.createElement("canvas"),a=new cd({canvas:s,antialias:!0,preserveDrawingBuffer:!0});try{const l=a.capabilities.maxTextureSize||8192,c=Math.min(i,l),d=Math.min(r,l),f=Math.max(1,Number(((o=kt.getPixelRatio)==null?void 0:o.call(kt))||window.devicePixelRatio||1)),u=Math.max(1,Math.floor(c/f)),m=Math.max(1,Math.floor(d/f));a.setPixelRatio(f),a.setSize(u,m,!1);let g=Ue.clone();Ue===tn||g.isOrthographicCamera?(g=Ue.clone(),g.updateProjectionMatrix()):g.isPerspectiveCamera&&(g.aspect=c/Math.max(1,d),g.updateProjectionMatrix());const v=[];us.traverse(T=>{var y;(y=T==null?void 0:T.userData)!=null&&y.excludeFromPng&&T.visible&&(v.push(T),T.visible=!1)}),a.setClearColor(It.getBackgroundColor(),1),It.setViewportHeight(a.domElement.height),a.render(us,g);for(const T of v)T.visible=!0;const p=await new Promise(T=>s.toBlob(T,"image/png"));if(!p)throw new Error("PNG export failed (empty blob).");const h=document.createElement("a");h.href=URL.createObjectURL(p),h.download=t,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href),(c!==i||d!==r)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:i,h:r},exported:{w:c,h:d},maxTextureSize:l})}finally{It.setViewportHeight(kt.domElement.height),a.dispose()}}function Eu(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}function Ea(n,e){n.dispatchEvent(new CustomEvent("player:recordvideo-state",{detail:{running:e},bubbles:!1}))}async function Sx(n){var s;if(!n)return{track:null,cleanup:null};try{if(typeof n.captureStream=="function"){const o=n.captureStream().getAudioTracks()[0]||null;if(o)return{track:o,cleanup:null}}}catch{}Te.init(n),((s=Te.ctx)==null?void 0:s.state)==="suspended"&&await Te.ctx.resume();const e=Te.source||Te.streamSource;if(!e||!Te.ctx)return{track:null,cleanup:null};const t=Te.ctx.createMediaStreamDestination();return e.connect(t),{track:t.stream.getAudioTracks()[0]||null,cleanup:()=>{try{e.disconnect(t)}catch{}try{t.disconnect()}catch{}}}}async function Ex(n,e){if(On||!(e!=null&&e.src))return;if(typeof MediaRecorder>"u"||typeof Pr.captureStream!="function"){alert("Video recording is not supported in this browser.");return}const t=Pr.captureStream(60),i=new MediaStream;for(const c of t.getVideoTracks())i.addTrack(c);const{track:r,cleanup:s}=await Sx(e);Ks=s,r&&i.addTrack(r);const o=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(c=>{var d;return(d=MediaRecorder.isTypeSupported)==null?void 0:d.call(MediaRecorder,c)})||"",l=new MediaRecorder(i,o?{mimeType:o}:void 0);if(Zs=[],js=i,On=l,l.ondataavailable=c=>{c.data&&c.data.size>0&&Zs.push(c.data)},l.onstop=()=>{const c=Zs;Zs=[];const d=new Blob(c,{type:l.mimeType||"video/webm"});if(d.size>0){const f=Sa(Vd(),"audio"),u=Sa(Jl(),"preset"),m=document.createElement("a");m.href=URL.createObjectURL(d),m.download=`${f} - ${u}.webm`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(m.href)}if(js)for(const f of js.getTracks())try{f.stop()}catch{}if(js=null,typeof Ks=="function")try{Ks()}catch{}Ks=null,Yr&&(e.removeEventListener("ended",Yr),Yr=null),On=null,Ea(n,!1)},e.paused)try{await e.play()}catch{}Yr=()=>{On&&On.state!=="inactive"&&On.stop()},e.addEventListener("ended",Yr,{once:!0}),l.start(200),Ea(n,!0)}function wx(n){if(On)try{On.state!=="inactive"&&On.stop()}catch{On=null,Ea(n,!1)}}async function Tx(n,e){var l,c,d,f,u,m,g,v,p;if(!e||!(e.duration>0)&&(await new Promise(h=>{if(e.duration>0){h();return}const T=()=>{y(),h()},y=()=>{e.removeEventListener("loadedmetadata",T),e.removeEventListener("canplay",T),e.removeEventListener("error",T)};e.addEventListener("loadedmetadata",T,{once:!0}),e.addEventListener("canplay",T,{once:!0}),e.addEventListener("error",T,{once:!0})}),!(e.duration>0)))return;const t=!e.paused&&!e.ended;t&&e.pause();const i=++qi,r=await yx(e),s=r?URL.createObjectURL(r):e.currentSrc||e.src;if(!s)return;const a=new Audio;a.crossOrigin="anonymous",a.src=s,a.preload="auto",a.currentTime=0,a.muted=!0,a.volume=0,typeof a.preservesPitch=="boolean"&&(a.preservesPitch=!1),a.playbackRate=16,a.style.display="none",document.body.appendChild(a);const o=new Hd;o.setRuleInputUsage((l=It.getRuleCompileState())==null?void 0:l.requiredInputsByTarget),Eu(n,!0);try{It.clear(),await new Promise((A,C)=>{const N=()=>{b(),A()},w=()=>{b(),C(new Error("Paint-all audio metadata failed to load."))},b=()=>{a.removeEventListener("loadedmetadata",N),a.removeEventListener("canplay",N),a.removeEventListener("error",w)};a.addEventListener("loadedmetadata",N,{once:!0}),a.addEventListener("canplay",N,{once:!0}),a.addEventListener("error",w,{once:!0}),a.load()}),o.init(a),((c=o.ctx)==null?void 0:c.state)==="suspended"&&await o.ctx.resume(),await a.play();const h=performance.now(),T=3*60*1e3;let y=-1,x=0,R=0;for(;i===qi&&!a.ended;){if(performance.now()-h>T){console.warn("[PaintAll] Aborting due to timeout.");break}await new Promise(P=>requestAnimationFrame(P)),o.update();const A=kt.domElement.width/window.devicePixelRatio,C=kt.domElement.height/window.devicePixelRatio,N=_l(),w={...oe,persistMode:1,cameraState:{x:Ue.position.x,y:Ue.position.y,z:Ue.position.z,zoom:Ue.zoom},cameraCanvasWidthUnits:N.w,cameraCanvasHeightUnits:N.h};It.update(o,w,A,C),zd(It.getCameraOutput());const b=Number(a.currentTime)||0;if(b>y+1e-4?(y=b,x=0):x++,a.paused&&!a.ended)try{await a.play()}catch{break}if(x>120){const P=Number(a.duration)||0;if(P>0&&b>=Math.max(0,P-.25)){a.currentTime=P;break}if(P>0&&R<12){const $=Math.max(.15,P/240);a.currentTime=Math.min(P,b+$),R++,x=0;continue}console.warn("[PaintAll] Aborting due to persistent playback stall.");break}}}finally{a.pause(),a.src="",a.remove(),r&&URL.revokeObjectURL(s);try{(d=o.source)==null||d.disconnect()}catch{}try{(f=o.streamSource)==null||f.disconnect()}catch{}try{(u=o.splitter)==null||u.disconnect()}catch{}try{(m=o.analyserL)==null||m.disconnect()}catch{}try{(g=o.analyserR)==null||g.disconnect()}catch{}try{(v=o.analyser)==null||v.disconnect()}catch{}try{await((p=o.ctx)==null?void 0:p.close())}catch{}if(Eu(n,!1),t&&i===qi)try{await e.play()}catch{}}}function _l(){let n=0,e=0;if(Ue.isOrthographicCamera)n=Math.abs((Ue.right-Ue.left)/Math.max(.01,Ue.zoom)),e=Math.abs((Ue.top-Ue.bottom)/Math.max(.01,Ue.zoom));else{const r=Math.max(.001,Ue.position.distanceTo(Yt)),s=Al.degToRad(Ue.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,Ue.zoom),n=e*Ue.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:Yt.x-t,right:Yt.x+t,top:Yt.y+i,bottom:Yt.y-i}}function Wd(){var t,i,r,s,a,o,l,c,d;requestAnimationFrame(Wd),Su++,Te.update();const n=!!(Te.audioEl&&!Te.audioEl.paused&&!Te.audioEl.ended);if(n&&!Te.analyser&&Te.audioEl&&Te.init(Te.audioEl),n){const f=kt.domElement.width/window.devicePixelRatio,u=kt.domElement.height/window.devicePixelRatio,m=_l(),g={...oe,cameraState:{x:Ue.position.x,y:Ue.position.y,z:Ue.position.z,zoom:Ue.zoom},cameraCanvasWidthUnits:m.w,cameraCanvasHeightUnits:m.h};It.update(Te,g,f,u),zd(It.getCameraOutput());const v=((t=Te.getBinMagnitude)==null?void 0:t.call(Te))||null,p=((i=Te.getBinFlux)==null?void 0:i.call(Te))||null,h=((r=Te.getBinPhaseDeviation)==null?void 0:r.call(Te))||null,T=((s=Te.getBinPhase)==null?void 0:s.call(Te))||null,y=((a=Te.getBinAttackTime)==null?void 0:a.call(Te))||null,x=((o=Te.getBinEnvelope)==null?void 0:o.call(Te))||null,R=Te.peakFreq??0,A=(l=Te.ctx)!=null&&l.sampleRate?Te.ctx.sampleRate*.5:22050,C=Wn(Te.rmsDbfs,oe.globalRmsNormMin??-60,oe.globalRmsNormMax??0),N=Wn(Te.spectralCentroidHz,oe.spectralCentroidNormMin??150,oe.spectralCentroidNormMax??8e3),w=Wn(Te.spectralFluxAU,oe.globalSpectralFluxNormMin??0,oe.globalSpectralFluxNormMax??100),b=Wn(Te.spectralFlatnessRatio,oe.spectralFlatnessNormMin??0,oe.spectralFlatnessNormMax??1),P=(q,le)=>{if(!q||!q.length)return 0;let ve=0;for(let Ee=0;Ee<q.length;Ee++)ve+=le(q[Ee]);return ve/q.length},$=P(v,q=>Wn(q,oe.binMagnitudeNormMin??-70,oe.binMagnitudeNormMax??0)),X=P(p,q=>Wn(q,oe.binFluxNormMin??0,oe.binFluxNormMax??.5)),J=P(h,q=>Wn(q,oe.binPhaseDeviationNormMin??0,oe.binPhaseDeviationNormMax??Math.PI)),V=P(T,q=>Wn(q,-Math.PI,Math.PI)),H=P(y,q=>Wn(q,oe.binAttackTimeNormMin??5,oe.binAttackTimeNormMax??500)),se=P(x,q=>Wn(q,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:C,globalRmsEnergy:C,binEnergy:$,frequencyHz:R,normFreq:Math.max(0,Math.min(1,R/Math.max(1e-6,A))),bass:Te.bass??0,mid:Te.mid??0,high:Te.high??0,peakFreq:R,pan:Te.pan??0,spectralCentroid:N,spectralFlux:w,spectralFlatness:b,inharmonicity:Te.inharmonicity??0,peakAmplitude:Te.peakAmplitude??0,zeroCrossingRate:Te.zeroCrossingRate??0,spectralRolloff:Te.spectralRolloff??0,spectralSpread:Te.spectralSpread??0,spectralSkewness:Te.spectralSkewness??0,chromagram:Te.chromagram??0,binMagnitude:$,binFreq:R,binPhase:V,binFlux:X,binPhaseDeviation:J,binAttackTime:H,binEnvelope:se,binEnvelopeState:se,binRMSEnergy:C,time:((c=Te.audioEl)==null?void 0:c.currentTime)??0,deltaTime:1/60,canvasWidthPx:f,canvasHeightPx:u,canvasWidthUnits:m.w,canvasHeightUnits:m.h,audioLengthSec:((d=Te.audioEl)==null?void 0:d.duration)??0}}}))}const e=It.getBackgroundColor();if(kt.setClearColor(e,1),It.setViewportHeight(kt.domElement.height),kt.render(us,Ue),Su%6===0){const f=(Ue.rotation.x*180/Math.PI).toFixed(2),u=(Ue.rotation.y*180/Math.PI).toFixed(2),m=(Ue.rotation.z*180/Math.PI).toFixed(2),g=Ue.position.x.toFixed(2),v=Ue.position.y.toFixed(2),p=Ue.position.z.toFixed(2),h=_l(),T=h.w,y=h.h;Vn.textContent=`cam p(${g},${v},${p}) r(${f},${u},${m}) pts ${It.getVisibleCount()} fft ${Te.peakByte} amp ${Te.amplitude.toFixed(3)} sc ${Te.spectralCentroid.toFixed(3)} sf ${Te.spectralFlux.toFixed(3)} sfl ${Te.spectralFlatness.toFixed(3)} inh ${Te.inharmonicity.toFixed(3)} canv ${T.toFixed(2)} × ${y.toFixed(2)} origin ${Wl}u ${xr?"on":"off"}`}}Wd();{const n=document.getElementById("audio-player"),{audioEl:e}=rx(n);Te.audioEl=e;let t=null;e.addEventListener("play",async()=>{var y;Te.init(e),((y=Te.ctx)==null?void 0:y.state)==="suspended"&&await Te.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var y;qi++,Te.init(e),((y=Te.ctx)==null?void 0:y.state)==="suspended"&&await Te.ctx.resume()}),n.addEventListener("player:play",()=>{qi++}),n.addEventListener("player:pause",()=>{qi++}),n.addEventListener("player:stop",()=>{qi++}),n.addEventListener("player:savepng",async()=>{await Mx()}),n.addEventListener("player:paintall",async()=>{try{await Tx(n,e)}catch(y){console.warn("[PaintAll] failed:",y),alert("Paint-all failed before completion. Check console for details.")}}),n.addEventListener("player:recordvideo-toggle",async()=>{if(On){wx(n);return}try{await Ex(n,e)}catch(y){console.warn("[Recorder] start failed:",y),alert("Failed to start recording."),Ea(n,!1)}}),n.addEventListener("player:playbackrate",y=>{var R;const x=Number((R=y==null?void 0:y.detail)==null?void 0:R.rate);Number.isFinite(x)&&(e.playbackRate=Math.max(.1,Math.min(16,x)))}),n.addEventListener("player:fileloaded",y=>{var R;const x=(R=y==null?void 0:y.detail)==null?void 0:R.file;t=x instanceof File?x:null,ml=(t==null?void 0:t.name)||""});let i=null,r="",s=null,a=!1;const o=()=>{window.dispatchEvent(new CustomEvent("seesound:project-file-state",{detail:{fileName:String(r||"").trim()}}))},l=async()=>{const y=await ga(),x=[];for(const R of y){const A=await Ul(R);!(A!=null&&A.params)||typeof A.params!="object"||x.push({name:String(R||""),params:A.params})}return x},c=async()=>{(await ga()).filter(R=>!String(R||"").startsWith("rule__")).length>0||(await _a("default",ma()),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))},d=async y=>{if(Array.isArray(y)){for(const x of y){const R=String((x==null?void 0:x.name)||"").trim(),A=x==null?void 0:x.params;!R||!A||typeof A!="object"||await _a(R,A)}window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}},f=async(y,x)=>{const R=await y.createWritable();await R.write(JSON.stringify(x,null,2)),await R.close()},u=async()=>{const y=ma(),x=await l(),R=Jl();return r0({params:y,presetName:R,presetLibrary:x,projectName:gl(r||ni())})},m=async({forceDownload:y=!1}={})=>{try{const x=await u();if(!y&&i){await f(i,x),window.dispatchEvent(new CustomEvent("seesound:project-autosaved",{detail:{fileName:r||ni()}})),o();return}s0(x,ni())}catch(x){console.warn("[Project] save failed:",x)}},g=()=>{!i||a||(s&&clearTimeout(s),s=setTimeout(async()=>{s=null,await m({forceDownload:!1})},450))},v=async y=>{try{a=!0,y.params&&typeof y.params=="object"&&Da(y.params),Array.isArray(y.presetLibrary)&&await d(y.presetLibrary),await c(),window.dispatchEvent(new CustomEvent("seesound:project-loaded",{detail:{fileName:r,presetName:String((y==null?void 0:y.presetName)||"")}}))}catch(x){console.warn("[Project] load failed:",x)}finally{a=!1}},p=async()=>{if(typeof window.showOpenFilePicker!="function")return!1;try{const[y]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Project",accept:{"application/json":[Zr,".json"]}}]});if(!y)return!1;const x=await y.getFile(),R=await x.text(),A=Td(R);return i=y,r=String(x.name||"").trim(),await v(A),o(),!0}catch{return!1}},h=async(y="",x=!0)=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const R=String(y||"").trim()||ni(),A=await window.showSaveFilePicker({suggestedName:R,types:[{description:"SEESOUND Project",accept:{"application/json":[Zr,".json"]}}]});return A?(x&&(xd(),await c()),i=A,r=String(A.name||R).trim(),await m({forceDownload:!1}),o(),!0):!1}catch{return!1}},T=async(y="")=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const x=String(y||"").trim()||ni(),R=await window.showSaveFilePicker({suggestedName:x,types:[{description:"SEESOUND Project",accept:{"application/json":[Zr,".json"]}}]});return R?(i=R,r=String(R.name||x).trim(),await m({forceDownload:!1}),o(),!0):!1}catch{return!1}};n.addEventListener("player:saveproject",async()=>{if(i){await m({forceDownload:!1});return}await T(ni())||await m({forceDownload:!0})}),n.addEventListener("player:loadproject",async y=>{var x;await v(((x=y==null?void 0:y.detail)==null?void 0:x.payload)||{})}),window.addEventListener("seesound:project-save-request",async()=>{if(i){await m({forceDownload:!1});return}await T(ni())||await m({forceDownload:!0})}),window.addEventListener("seesound:project-save-as-request",async()=>{const y=r?`${r}${Zr}`:ni();await T(y)||await m({forceDownload:!0})}),window.addEventListener("seesound:project-load-request",async y=>{const x=(y==null?void 0:y.detail)||{},R=String(x.fileName||"").trim();R&&(r=R,o()),await v(x.payload||{}),!i&&typeof window.showSaveFilePicker=="function"&&window.confirm("Attach this project to an autosave file now?")&&await h(String(x.fileName||ni()),!1)}),window.addEventListener("seesound:project-open-request",async()=>{await p()}),window.addEventListener("seesound:project-new-request",async()=>{await h()}),window.addEventListener("seesound:preset-library-changed",()=>{g()}),Ji((y,x)=>{!x||x==="*"||a||g()}),o()}let Ai=null,vl=!1;Ai=sx({wrapper:cs,column:Yn,onResize(n,e){if(jl(n,e),Ql(n,e),!vl){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(oe.canvasWidth)!==t||Number(oe.canvasHeight)!==i)&&Da({canvasWidth:t,canvasHeight:i})}}});function Ql(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(oe.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Ax(n){const e=n instanceof Element?n:null;return e?!!e.closest('input,textarea,select,[contenteditable="true"]'):!1}window.addEventListener("keydown",n=>{if(n.defaultPrevented||!(n.ctrlKey||n.metaKey)||n.altKey||Ax(n.target))return;const e=String(n.key||"").toLowerCase();if(e==="z"&&!n.shiftKey){if(!Hv())return;n.preventDefault(),n.stopPropagation();return}if(e==="y"||e==="z"&&n.shiftKey){if(!Gv())return;n.preventDefault(),n.stopPropagation()}});function Xd(){const e=Math.max(5,Math.min(400,Math.floor(Number(oe.canvasScale)||100)))/100;cs.style.transformOrigin="center center",cs.style.transform=`scale(${e})`}function $d(){var i;const n=((i=Ai==null?void 0:Ai.getSize)==null?void 0:i.call(Ai))||{},e=Math.max(160,Math.floor(n.w||cs.clientWidth||Yn.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||cs.clientHeight||Yn.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function qd(){if(!Ai)return;const n=$d(),e=Math.max(160,Math.floor(Number(oe.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(oe.canvasHeight)||n.h));if(e===n.w&&t===n.h){Ql(n.w,n.h);return}vl=!0,Ai.setSize(e,t),vl=!1}qd();Xd();{const n=$d();(Number(oe.canvasWidth)!==n.w||Number(oe.canvasHeight)!==n.h)&&Da({canvasWidth:n.w,canvasHeight:n.h}),Ql(n.w,n.h)}Ji((n,e)=>{if(e==="cameraProjection"&&ql(),(e==="cameraProjection"||e==="cameraAxoPreset")&&Yl(),(e==="canvasWidth"||e==="canvasHeight")&&qd(),e==="canvasScale"&&Xd(),e==="maxParticles"){const t=Math.max(4096,Math.floor(oe.maxParticles||4096));oe.maxParticles!==t&&(oe.maxParticles=t),It.setMaxParticles(t)}if(e==="fftSize"){const t=Ma(oe.fftSize);if(oe.fftSize!==t){set("fftSize",t);return}Te.setFftSize(t)}if(e==="ruleBlocks"){const t=It.onRulesChanged(oe.ruleBlocks??[]);Te.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),Kl(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});A0(document.getElementById("control-panel"));var Au,Ru;Kl((Ru=(Au=It.getRuleCompileState)==null?void 0:Au.call(It))==null?void 0:Ru.requiredInputsByTarget);const wu=Array.isArray(oe.ruleBlocks)?oe.ruleBlocks.length:0,si=It.getRuleCompileState(),Tu=(si==null?void 0:si.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${pa} compile=${Tu} rules=${wu}`,{schemaVersion:pa,compileStatus:Tu,compileTimeMs:(si==null?void 0:si.compileTimeMs)??0,compileError:(si==null?void 0:si.compileError)??null,ruleCount:wu,debug:Dv});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
