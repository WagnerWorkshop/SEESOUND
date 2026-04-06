(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="171",Uh=0,uc=1,Oh=2,id=1,Bh=2,ui=3,Ui=0,wn=1,$n=2,Jn=0,Fi=1,Ri=2,dc=3,hc=4,So=5,pi=100,kh=101,zh=102,Vh=103,Hh=104,Gh=200,Wh=201,Xh=202,qh=203,fs=204,ms=205,jh=206,Yh=207,$h=208,Zh=209,Kh=210,Jh=211,Qh=212,ep=213,tp=214,Eo=0,wo=1,Co=2,Dr=3,To=4,Ao=5,Ro=6,Po=7,rd=0,np=1,ip=2,Ii=0,rp=1,sp=2,ap=3,op=4,lp=5,cp=6,up=7,sd=300,Fr=301,Ir=302,No=303,Lo=304,Ra=306,Do=1e3,Zi=1001,Fo=1002,bn=1003,dp=1004,As=1005,Zn=1006,Va=1007,Ki=1008,gi=1009,ad=1010,od=1011,gs=1012,Sl=1013,tr=1014,Kn=1015,Qn=1016,El=1017,wl=1018,Ur=1020,ld=35902,cd=1021,ud=1022,Hn=1023,dd=1024,hd=1025,Pr=1026,Or=1027,Cl=1028,Tl=1029,pd=1030,Al=1031,Rl=1033,la=33776,ca=33777,ua=33778,da=33779,Io=35840,Uo=35841,Oo=35842,Bo=35843,ko=36196,zo=37492,Vo=37496,Ho=37808,Go=37809,Wo=37810,Xo=37811,qo=37812,jo=37813,Yo=37814,$o=37815,Zo=37816,Ko=37817,Jo=37818,Qo=37819,el=37820,tl=37821,ha=36492,nl=36494,il=36495,fd=36283,rl=36284,sl=36285,al=36286,hp=3200,md=3201,gd=0,pp=1,Pi="",Nn="srgb",Br="srgb-linear",ga="linear",At="srgb",or=7680,pc=519,fp=512,mp=513,gp=514,vd=515,vp=516,_p=517,bp=518,xp=519,fc=35044,yp=35048,mc="300 es",fi=2e3,va=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const ds=Math.PI/180,vs=180/Math.PI;function Xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Pl(n,e){return(n%e+e)%e}function Mp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Sp(n,e,t){return n!==e?(t-n)/(e-n):0}function hs(n,e,t){return(1-t)*n+t*e}function Ep(n,e,t,i){return hs(n,e,1-Math.exp(-t*i))}function wp(n,e=1){return e-Math.abs(Pl(n,e*2)-e)}function Cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ap(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Rp(n,e){return n+Math.random()*(e-n)}function Pp(n){return n*(.5-Math.random())}function Np(n){n!==void 0&&(gc=n);let e=gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(n){return n*ds}function Dp(n){return n*vs}function Fp(n){return(n&n-1)===0&&n!==0}function Ip(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Up(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Op(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nl={DEG2RAD:ds,RAD2DEG:vs,generateUUID:Xr,clamp:bt,euclideanModulo:Pl,mapLinear:Mp,inverseLerp:Sp,lerp:hs,damp:Ep,pingpong:wp,smoothstep:Cp,smootherstep:Tp,randInt:Ap,randFloat:Rp,randFloatSpread:Pp,seededRandom:Np,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Fp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Op,normalize:mn,denormalize:Er};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,r,s,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],y=r[1],M=r[4],b=r[7],P=r[2],R=r[5],L=r[8];return s[0]=a*v+o*y+l*P,s[3]=a*m+o*M+l*R,s[6]=a*p+o*b+l*L,s[1]=c*v+u*y+d*P,s[4]=c*m+u*M+d*R,s[7]=c*p+u*b+d*L,s[2]=h*v+f*y+g*P,s[5]=h*m+f*M+g*R,s[8]=h*p+f*b+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new at;function _d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bp(){const n=_a("canvas");return n.style.display="block",n}const vc={};function wr(n){n in vc||(vc[n]=!0,console.warn(n))}function kp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function zp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _c=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){const n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===At&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?ga:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:_c,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:At,toXYZ:_c,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),n}const wt=Hp();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let lr;class Gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=_a("canvas")),lr.width=e.width,lr.height=e.height;const i=lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wp=0;class bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ga(r[a].image)):s.push(Ga(r[a]))}else s=Ga(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xp=0;class xn extends Wr{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=Zi,r=Zi,s=Zn,a=Ki,o=Hn,l=gi,c=xn.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Xr(),this.name="",this.source=new bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=sd;xn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(f+1)/2,P=(p+1)/2,R=(u+h)/4,L=(d+v)/4,B=(g+m)/4;return M>b&&M>P?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=L/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=B/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=B/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends Wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends qp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xd extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jp extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),R=Math.atan2(P,p*y);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const b=o*y;if(l=l*m+h*b,c=c*m+f*b,u=u*m+g*b,d=d*m+v*b,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new G,xc=new Es;class rr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ps.subVectors(this.max,Qr),cr.subVectors(e.a,Qr),ur.subVectors(e.b,Qr),dr.subVectors(e.c,Qr),bi.subVectors(ur,cr),xi.subVectors(dr,ur),zi.subVectors(cr,dr);let t=[0,-bi.z,bi.y,0,-xi.z,xi.y,0,-zi.z,zi.y,bi.z,0,-bi.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-bi.y,bi.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!Xa(t,cr,ur,dr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,cr,ur,dr,Ps))?!1:(Ns.crossVectors(bi,xi),t=[Ns.x,Ns.y,Ns.z],Xa(t,cr,ur,dr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new G,new G,new G,new G,new G,new G,new G,new G],Un=new G,Rs=new rr,cr=new G,ur=new G,dr=new G,bi=new G,xi=new G,zi=new G,Qr=new G,Ps=new G,Ns=new G,Vi=new G;function Xa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yp=new rr,es=new G,qa=new G;class sr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(qa)),this.expandByPoint(es.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new G,ja=new G,Ls=new G,yi=new G,Ya=new G,Ds=new G,$a=new G;class Ll{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=yi.dot(this.direction),l=-yi.dot(Ls),c=yi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(Ls,h),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,r,s){Ya.subVectors(t,e),Ds.subVectors(i,e),$a.crossVectors(Ya,Ds);let a=this.direction.dot($a),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(yi,Ds));if(l<0)return null;const c=o*this.direction.dot(Ya.cross(yi));if(c<0||l+c>a)return null;const u=-o*yi.dot($a);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,r,s,a,o,l,c,u,d,h,f,g,v,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,f,g,v,m)}set(e,t,i,r,s,a,o,l,c,u,d,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Zp)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Mi.crossVectors(i,Tn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Mi.crossVectors(i,Tn)),Mi.normalize(),Fs.crossVectors(Tn,Mi),r[0]=Mi.x,r[4]=Fs.x,r[8]=Tn.x,r[1]=Mi.y,r[5]=Fs.y,r[9]=Tn.y,r[2]=Mi.z,r[6]=Fs.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],M=i[7],b=i[11],P=i[15],R=r[0],L=r[4],B=r[8],w=r[12],S=r[1],D=r[5],K=r[9],j=r[13],ee=r[2],Z=r[6],Y=r[10],O=r[14],x=r[3],A=r[7],N=r[11],k=r[15];return s[0]=a*R+o*S+l*ee+c*x,s[4]=a*L+o*D+l*Z+c*A,s[8]=a*B+o*K+l*Y+c*N,s[12]=a*w+o*j+l*O+c*k,s[1]=u*R+d*S+h*ee+f*x,s[5]=u*L+d*D+h*Z+f*A,s[9]=u*B+d*K+h*Y+f*N,s[13]=u*w+d*j+h*O+f*k,s[2]=g*R+v*S+m*ee+p*x,s[6]=g*L+v*D+m*Z+p*A,s[10]=g*B+v*K+m*Y+p*N,s[14]=g*w+v*j+m*O+p*k,s[3]=y*R+M*S+b*ee+P*x,s[7]=y*L+M*D+b*Z+P*A,s[11]=y*B+M*K+b*Y+P*N,s[15]=y*w+M*j+b*O+P*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*f-i*l*f)+v*(+t*l*f-t*c*h+s*a*h-r*a*f+r*c*u-s*l*u)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=d*m*c-v*h*c+v*l*f-o*m*f-d*l*p+o*h*p,M=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,b=u*v*c-g*d*c+g*o*f-a*v*f-u*o*p+a*d*p,P=g*d*l-u*v*l-g*o*h+a*v*h+u*o*m-a*d*m,R=t*y+i*M+r*b+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=y*L,e[1]=(v*h*s-d*m*s-v*r*f+i*m*f+d*r*p-i*h*p)*L,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*L,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*f-i*l*f)*L,e[4]=M*L,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*L,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*L,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*f+t*l*f)*L,e[8]=b*L,e[9]=(g*d*s-u*v*s-g*i*f+t*v*f+u*i*p-t*d*p)*L,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*p+t*o*p)*L,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*f-t*o*f)*L,e[12]=P*L,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*L,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*m-t*o*m)*L,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,v=a*u,m=a*d,p=o*d,y=l*c,M=l*u,b=l*d,P=i.x,R=i.y,L=i.z;return r[0]=(1-(v+p))*P,r[1]=(f+b)*P,r[2]=(g-M)*P,r[3]=0,r[4]=(f-b)*R,r[5]=(1-(h+p))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(g+M)*L,r[9]=(m-y)*L,r[10]=(1-(h+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=hr.set(r[0],r[1],r[2]).length();const a=hr.set(r[4],r[5],r[6]).length(),o=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/a,d=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=fi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,g;if(o===fi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===va)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=fi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),h=(t+e)*c,f=(i+r)*u;let g,v;if(o===fi)g=(a+s)*d,v=-2*d;else if(o===va)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hr=new G,On=new Pt,$p=new G(0,0,0),Zp=new G(1,1,1),Mi=new G,Fs=new G,Tn=new G,yc=new Pt,Mc=new Es;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kp=0;const Sc=new G,pr=new Es,oi=new Pt,Is=new G,ts=new G,Jp=new G,Qp=new Es,Ec=new G(1,0,0),wc=new G(0,1,0),Cc=new G(0,0,1),Tc={type:"added"},ef={type:"removed"},fr={type:"childadded",child:null},Za={type:"childremoved",child:null};class Xt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new G,t=new ei,i=new Es,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new at}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Is.copy(e):Is.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ts,Is,this.up):oi.lookAt(Is,ts,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(oi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new G(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new G,li=new G,Ka=new G,ci=new G,mr=new G,gr=new G,Ac=new G,Ja=new G,Qa=new G,eo=new G,to=new Bt,no=new Bt,io=new Bt;class Vn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),li.subVectors(i,t),Ka.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(li),l=Bn.dot(Ka),c=li.dot(li),u=li.dot(Ka),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,i),io.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(to,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),li.subVectors(e,t),Bn.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Bn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;mr.subVectors(r,i),gr.subVectors(s,i),Ja.subVectors(e,i);const l=mr.dot(Ja),c=gr.dot(Ja);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,r);const u=mr.dot(Qa),d=gr.dot(Qa);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(mr,a);eo.subVectors(e,s);const f=mr.dot(eo),g=gr.dot(eo);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(gr,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Ac.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Ac,o);const p=1/(m+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(mr,a).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=Pl(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const i=Md[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return wt.fromWorkingColorSpace(un.copy(this),e),Math.round(bt(un.r*255,0,255))*65536+Math.round(bt(un.g*255,0,255))*256+Math.round(bt(un.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Nn){wt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Us);const i=hs(Si.h,Us.h,t),r=hs(Si.s,Us.s,t),s=hs(Si.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new st;st.NAMES=Md;let tf=0;class ar extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Fi,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=ms,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fs&&(i.blendSrc=this.blendSrc),this.blendDst!==ms&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dl extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new G,Os=new ot;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class Sd extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ed extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nf=0;const Rn=new Pt,so=new Xt,vr=new G,An=new rr,ns=new rr,Zt=new G;class Cn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Ed:Sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(An.min,ns.min),An.expandByPoint(Zt),Zt.addVectors(An.max,ns.max),An.expandByPoint(Zt)):(An.expandByPoint(ns.min),An.expandByPoint(ns.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Zt.fromBufferAttribute(o,c),l&&(vr.fromBufferAttribute(e,c),Zt.add(vr)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new G,l[B]=new G;const c=new G,u=new G,d=new G,h=new ot,f=new ot,g=new ot,v=new G,m=new G;function p(B,w,S){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,B),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[B].add(v),o[w].add(v),o[S].add(v),l[B].add(m),l[w].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let B=0,w=y.length;B<w;++B){const S=y[B],D=S.start,K=S.count;for(let j=D,ee=D+K;j<ee;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const M=new G,b=new G,P=new G,R=new G;function L(B){P.fromBufferAttribute(r,B),R.copy(P);const w=o[B];M.copy(w),M.sub(P.multiplyScalar(P.dot(w))).normalize(),b.crossVectors(R,w);const D=b.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,D)}for(let B=0,w=y.length;B<w;++B){const S=y[B],D=S.start,K=S.count;for(let j=D,ee=D+K;j<ee;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new Pt,Hi=new Ll,Bs=new sr,Pc=new G,ks=new G,zs=new G,Vs=new G,ao=new G,Hs=new G,Nc=new G,Gs=new G;class Dn extends Xt{constructor(e=new Cn,t=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ao.fromBufferAttribute(d,e),a?Hs.addScaledVector(ao,u):Hs.addScaledVector(ao.sub(t),u))}t.add(Hs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(Bs.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Bs,Pc)===null||Hi.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Rc.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,P=M;b<P;b+=3){const R=o.getX(b),L=o.getX(b+1),B=o.getX(b+2);r=Ws(this,p,e,i,c,u,d,R,L,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);r=Ws(this,a,e,i,c,u,d,y,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,P=M;b<P;b+=3){const R=b,L=b+1,B=b+2;r=Ws(this,p,e,i,c,u,d,R,L,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,M=m+1,b=m+2;r=Ws(this,a,e,i,c,u,d,y,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rf(n,e,t,i,r,s,a,o){let l;if(e.side===wn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ui,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:n}}function Ws(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ks),n.getVertexPosition(l,zs),n.getVertexPosition(c,Vs);const u=rf(n,e,t,i,ks,zs,Vs,Nc);if(u){const d=new G;Vn.getBarycoord(Nc,ks,zs,Vs,d),r&&(u.uv=Vn.getInterpolatedAttribute(r,o,l,c,d,new ot)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,o,l,c,d,new ot)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Vn.getNormal(ks,zs,Vs,h.normal),u.face=h,u.barycoord=d}return u}class ws extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(d,2));function g(v,m,p,y,M,b,P,R,L,B,w){const S=b/L,D=P/B,K=b/2,j=P/2,ee=R/2,Z=L+1,Y=B+1;let O=0,x=0;const A=new G;for(let N=0;N<Y;N++){const k=N*D-j;for(let ne=0;ne<Z;ne++){const Ce=ne*S-K;A[v]=Ce*y,A[m]=k*M,A[p]=ee,c.push(A.x,A.y,A.z),A[v]=0,A[m]=0,A[p]=R>0?1:-1,u.push(A.x,A.y,A.z),d.push(ne/L),d.push(1-N/B),O+=1}}for(let N=0;N<B;N++)for(let k=0;k<L;k++){const ne=h+k+Z*N,Ce=h+k+Z*(N+1),te=h+(k+1)+Z*(N+1),oe=h+(k+1)+Z*N;l.push(ne,Ce,oe),l.push(Ce,te,oe),x+=6}o.addGroup(f,x,w),f+=x,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=kr(n[t]);for(const r in i)e[r]=i[r]}return e}function sf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const _s={clone:kr,merge:gn};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cd extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new G,Lc=new ot,Dc=new ot;class Ln extends Cd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Dc),t.subVectors(Dc,Lc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,br=1;class lf extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(_r,br,e,t);r.layers=this.layers,this.add(r);const s=new Ln(_r,br,e,t);s.layers=this.layers,this.add(s);const a=new Ln(_r,br,e,t);a.layers=this.layers,this.add(a);const o=new Ln(_r,br,e,t);o.layers=this.layers,this.add(o);const l=new Ln(_r,br,e,t);l.layers=this.layers,this.add(l);const c=new Ln(_r,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Td extends xn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cf extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Td(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Jn});s.uniforms.tEquirect.value=t;const a=new Dn(r,s),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Zn),new lf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class uf extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class df extends xn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=bn,u=bn,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fc extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xr=new Pt,Ic=new Pt,Xs=[],Uc=new rr,hf=new Pt,is=new Dn,rs=new sr;class Oc extends Dn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,hf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),Uc.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(Uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),rs.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(i),e.ray.intersectsSphere(rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xr),Ic.multiplyMatrices(i,xr),is.matrixWorld=Ic,is.raycast(e,Xs);for(let a=0,o=Xs.length;a<o;a++){const l=Xs[a];l.instanceId=s,l.object=this,t.push(l)}Xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new df(new Float32Array(r*this.count),r,this.count,Cl,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const oo=new G,pf=new G,ff=new at;class ji{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oo.subVectors(i,t).cross(pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ff.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new sr,qs=new G;class Fl{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,a=new ji){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],y=r[13],M=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,m-f,b-p).normalize(),i[1].setComponents(l+s,h+c,m+f,b+p).normalize(),i[2].setComponents(l+a,h+u,m+g,b+y).normalize(),i[3].setComponents(l-a,h-u,m-g,b-y).normalize(),i[4].setComponents(l-o,h-d,m-v,b-M).normalize(),t===fi)i[5].setComponents(l+o,h+d,m+v,b+M).normalize();else if(t===va)i[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new G,xa=new G,Bc=new Pt,ss=new Ll,js=new sr,lo=new G,kc=new G;class mf extends Xt{constructor(e=new Cn,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ba.fromBufferAttribute(t,r-1),xa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ba.distanceTo(xa);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;Bc.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=u.getX(v),y=u.getX(v+1),M=Ys(this,e,ss,l,p,y);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Ys(this,e,ss,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Ys(this,e,ss,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ys(this,e,ss,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ys(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(ba.fromBufferAttribute(a,r),xa.fromBufferAttribute(a,s),t.distanceSqToSegment(ba,xa,lo,kc)>i)return;lo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(lo);if(!(l<e.near||l>e.far))return{distance:l,point:kc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const zc=new G,Vc=new G;class Ad extends mf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)zc.fromBufferAttribute(t,r),Vc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zc.distanceTo(Vc);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gf extends ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new Pt,ol=new Ll,$s=new sr,Zs=new G;class vf extends Xt{constructor(e=new Cn,t=new gf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;Hc.copy(r).invert(),ol.copy(e.ray).applyMatrix4(Hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){const m=c.getX(g);Zs.fromBufferAttribute(d,m),Gc(Zs,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,v=f;g<v;g++)Zs.fromBufferAttribute(d,g),Gc(Zs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gc(n,e,t,i,r,s,a){const o=ol.distanceSqToPoint(n);if(o<t){const l=new G;ol.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ks extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Rd extends xn{constructor(e,t,i,r,s,a,o,l,c,u=Pr){if(u!==Pr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=tr),i===void 0&&u===Or&&(i=Ur),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pa extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let M=0;M<c;M++){const b=M*d-s;g.push(b,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,b=y+c*(p+1),P=y+1+c*(p+1),R=y+1+c*p;f.push(M,b,R),f.push(b,P,R)}this.setIndex(f),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ul extends Cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new G,h=new G,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let b=0;p===0&&a===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const R=P/t;d.x=-e*Math.cos(r+R*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(R+b,1-M),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const M=u[p][y+1],b=u[p][y],P=u[p+1][y],R=u[p+1][y+1];(p!==0||a>0)&&f.push(M,b,R),(p!==i-1||l<Math.PI)&&f.push(b,P,R)}this.setIndex(f),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _f extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bf extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nd extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const co=new Pt,Wc=new G,Xc=new G;class xf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Na extends Cd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yf extends xf{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends Nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new yf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sf extends Nd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ef extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qc(){return performance.now()}class Cf extends Ad{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Cn;r.setAttribute("position",new fn(t,3)),r.setAttribute("color",new fn(i,3));const s=new Il({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new st,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function jc(n,e,t,i){const r=Tf(i);switch(t){case cd:return n*e;case dd:return n*e;case hd:return n*e*2;case Cl:return n*e/r.components*r.byteLength;case Tl:return n*e/r.components*r.byteLength;case pd:return n*e*2/r.components*r.byteLength;case Al:return n*e*2/r.components*r.byteLength;case ud:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case Rl:return n*e*4/r.components*r.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Bo:return Math.max(n,16)*Math.max(e,8)/4;case Io:case Oo:return Math.max(n,8)*Math.max(e,8)/2;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ha:case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fd:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tf(n){switch(n){case gi:case ad:return{byteLength:1,components:1};case gs:case od:case Qn:return{byteLength:2,components:1};case El:case wl:return{byteLength:2,components:4};case tr:case Sl:case Kn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ld(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Af(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jf=`#define PI 3.141592653589793
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
}`,Am=`
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Og=`#define DISTANCE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,$g=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,Qg=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,t0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,s0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Rf,alphahash_pars_fragment:Pf,alphamap_fragment:Nf,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Ff,aomap_fragment:If,aomap_pars_fragment:Uf,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:kf,beginnormal_vertex:zf,bsdfs:Vf,iridescence_fragment:Hf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:jf,color_fragment:Yf,color_pars_fragment:$f,color_pars_vertex:Zf,color_vertex:Kf,common:Jf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:rm,colorspace_fragment:sm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:um,envmap_physical_pars_fragment:ym,envmap_vertex:dm,fog_vertex:hm,fog_pars_vertex:pm,fog_fragment:fm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:vm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:bm,lights_pars_begin:xm,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Pm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Fm,map_fragment:Im,map_pars_fragment:Um,map_particle_fragment:Om,map_particle_pars_fragment:Bm,metalnessmap_fragment:km,metalnessmap_pars_fragment:zm,morphinstance_vertex:Vm,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:jm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:rg,project_vertex:sg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:hg,shadowmask_pars_fragment:pg,skinbase_vertex:fg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:_g,specularmap_pars_fragment:bg,tonemapping_fragment:xg,tonemapping_pars_fragment:yg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:Eg,uv_pars_vertex:wg,uv_vertex:Cg,worldpos_vertex:Tg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Ng,cube_vert:Lg,cube_frag:Dg,depth_vert:Fg,depth_frag:Ig,distanceRGBA_vert:Ug,distanceRGBA_frag:Og,equirect_vert:Bg,equirect_frag:kg,linedashed_vert:zg,linedashed_frag:Vg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:jg,meshnormal_vert:Yg,meshnormal_frag:$g,meshphong_vert:Zg,meshphong_frag:Kg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:e0,meshtoon_frag:t0,points_vert:n0,points_frag:i0,shadow_vert:r0,shadow_frag:s0,sprite_vert:a0,sprite_frag:o0},De={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Yn={basic:{uniforms:gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:gn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:gn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:gn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:gn([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:gn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:gn([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:gn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:gn([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:gn([De.common,De.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:gn([De.lights,De.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Yn.physical={uniforms:gn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Js={r:0,b:0,g:0},Wi=new ei,l0=new Pt;function c0(n,e,t,i,r,s,a){const o=new st(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function v(M){let b=!1;const P=g(M);P===null?p(o,l):P&&P.isColor&&(p(P,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,b){const P=g(b);P&&(P.isCubeTexture||P.mapping===Ra)?(u===void 0&&(u=new Dn(new ws(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:kr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wi.copy(b.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(Wi)),u.material.toneMapped=wt.getTransfer(P.colorSpace)!==At,(d!==P||h!==P.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,h=P.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Dn(new Pa(2,2),new pn({name:"BackgroundMaterial",uniforms:kr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=wt.getTransfer(P.colorSpace)!==At,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||h!==P.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=P,h=P.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,b){M.getRGB(Js,wd(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,b,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:m,dispose:y}}function u0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,D,K,j,ee){let Z=!1;const Y=d(j,K,D);s!==Y&&(s=Y,c(s.object)),Z=f(S,j,K,ee),Z&&g(S,j,K,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(S,D,K,j),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,D,K){const j=K.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let Z=ee[D.id];Z===void 0&&(Z={},ee[D.id]=Z);let Y=Z[j];return Y===void 0&&(Y=h(l()),Z[j]=Y),Y}function h(S){const D=[],K=[],j=[];for(let ee=0;ee<t;ee++)D[ee]=0,K[ee]=0,j[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:K,attributeDivisors:j,object:S,attributes:{},index:null}}function f(S,D,K,j){const ee=s.attributes,Z=D.attributes;let Y=0;const O=K.getAttributes();for(const x in O)if(O[x].location>=0){const N=ee[x];let k=Z[x];if(k===void 0&&(x==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),x==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),N===void 0||N.attribute!==k||k&&N.data!==k.data)return!0;Y++}return s.attributesNum!==Y||s.index!==j}function g(S,D,K,j){const ee={},Z=D.attributes;let Y=0;const O=K.getAttributes();for(const x in O)if(O[x].location>=0){let N=Z[x];N===void 0&&(x==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),x==="instanceColor"&&S.instanceColor&&(N=S.instanceColor));const k={};k.attribute=N,N&&N.data&&(k.data=N.data),ee[x]=k,Y++}s.attributes=ee,s.attributesNum=Y,s.index=j}function v(){const S=s.newAttributes;for(let D=0,K=S.length;D<K;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const K=s.newAttributes,j=s.enabledAttributes,ee=s.attributeDivisors;K[S]=1,j[S]===0&&(n.enableVertexAttribArray(S),j[S]=1),ee[S]!==D&&(n.vertexAttribDivisor(S,D),ee[S]=D)}function y(){const S=s.newAttributes,D=s.enabledAttributes;for(let K=0,j=D.length;K<j;K++)D[K]!==S[K]&&(n.disableVertexAttribArray(K),D[K]=0)}function M(S,D,K,j,ee,Z,Y){Y===!0?n.vertexAttribIPointer(S,D,K,ee,Z):n.vertexAttribPointer(S,D,K,j,ee,Z)}function b(S,D,K,j){v();const ee=j.attributes,Z=K.getAttributes(),Y=D.defaultAttributeValues;for(const O in Z){const x=Z[O];if(x.location>=0){let A=ee[O];if(A===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(A=S.instanceColor)),A!==void 0){const N=A.normalized,k=A.itemSize,ne=e.get(A);if(ne===void 0)continue;const Ce=ne.buffer,te=ne.type,oe=ne.bytesPerElement,Q=te===n.INT||te===n.UNSIGNED_INT||A.gpuType===Sl;if(A.isInterleavedBufferAttribute){const xe=A.data,me=xe.stride,Ve=A.offset;if(xe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<x.locationSize;Ge++)p(x.location+Ge,xe.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ge=0;Ge<x.locationSize;Ge++)m(x.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ge=0;Ge<x.locationSize;Ge++)M(x.location+Ge,k/x.locationSize,te,N,me*oe,(Ve+k/x.locationSize*Ge)*oe,Q)}else{if(A.isInstancedBufferAttribute){for(let xe=0;xe<x.locationSize;xe++)p(x.location+xe,A.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let xe=0;xe<x.locationSize;xe++)m(x.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let xe=0;xe<x.locationSize;xe++)M(x.location+xe,k/x.locationSize,te,N,k*oe,k/x.locationSize*xe*oe,Q)}}else if(Y!==void 0){const N=Y[O];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(x.location,N);break;case 3:n.vertexAttrib3fv(x.location,N);break;case 4:n.vertexAttrib4fv(x.location,N);break;default:n.vertexAttrib1fv(x.location,N)}}}}y()}function P(){B();for(const S in i){const D=i[S];for(const K in D){const j=D[K];for(const ee in j)u(j[ee].object),delete j[ee];delete D[K]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const K in D){const j=D[K];for(const ee in j)u(j[ee].object),delete j[ee];delete D[K]}delete i[S.id]}function L(S){for(const D in i){const K=i[D];if(K[S.id]===void 0)continue;const j=K[S.id];for(const ee in j)u(j[ee].object),delete j[ee];delete K[S.id]}}function B(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function d0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function h0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Hn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const B=L===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==gi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Kn&&!B)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function p0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ji,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,M=y*4;let b=p.clippingState||null;l.value=b,b=u(g,h,M,f);for(let P=0;P!==M;++P)b[P]=t[P];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==v;++M,b+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function f0(n){let e=new WeakMap;function t(a,o){return o===No?a.mapping=Fr:o===Lo&&(a.mapping=Ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===No||o===Lo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Cr=4,Yc=[.125,.215,.35,.446,.526,.582],$i=20,uo=new Na,$c=new st;let ho=null,po=0,fo=0,mo=!1;const Yi=(1+Math.sqrt(5))/2,yr=1/Yi,Zc=[new G(-Yi,yr,0),new G(Yi,yr,0),new G(-yr,0,Yi),new G(yr,0,Yi),new G(0,Yi,-yr),new G(0,Yi,yr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ho=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,po,fo),this._renderer.xr.enabled=mo,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Qn,format:Hn,colorSpace:Br,depthBuffer:!1},r=Jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=g0(s,e,t)}return r}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,r){const o=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor($c),u.toneMapping=Ii,u.autoClear=!1;const f=new Dl({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new Dn(new ws,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy($c),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Qs(r,y*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,uo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zc[(r-s-1)%Zc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Dn(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$i-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let y=0;for(let L=0;L<$i;++L){const B=L/v,w=Math.exp(-B*B/2);p.push(w),L===0?y+=w:L<m&&(y+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const b=this._sizeLods[r],P=3*b*(r>M-Cr?r-M+Cr:0),R=4*(this._cubeSize-b);Qs(t,P,R,3*b,2*b),l.setRenderTarget(t),l.render(d,uo)}}function m0(n){const e=[],t=[],i=[];let r=n;const s=n-Cr+1+Yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Cr?l=Yc[a-n+Cr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let R=0;R<f;R++){const L=R%3*2/3-1,B=R>2?0:-1,w=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];y.set(w,v*g*R),M.set(h,m*g*R);const S=[R,R,R,R,R,R];b.set(S,p*g*R)}const P=new Cn;P.setAttribute("position",new Qt(y,v)),P.setAttribute("uv",new Qt(M,m)),P.setAttribute("faceIndex",new Qt(b,p)),e.push(P),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jc(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function g0(n,e,t){const i=new Float32Array($i),r=new G(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ol(),fragmentShader:`

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
	`}function v0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Lo,u=l===Fr||l===Ir;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Kc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Kc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function _0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&wr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b0(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let M=0,b=y.length;M<b;M+=3){const P=y[M+0],R=y[M+1],L=y[M+2];h.push(P,R,R,L,L,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const P=M+0,R=M+1,L=M+2;h.push(P,R,R,L,L,P)}}else return;const m=new(_d(h)?Ed:Sd)(h,1);m.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function x0(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*a,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function y0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M0(n,e,t){const i=new WeakMap,r=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*P*4*d),L=new xd(R,b,P,d);L.type=Kn,L.needsUpdate=!0;const B=M*4;for(let S=0;S<d;S++){const D=m[S],K=p[S],j=y[S],ee=b*P*4*S;for(let Z=0;Z<D.count;Z++){const Y=Z*B;f===!0&&(r.fromBufferAttribute(D,Z),R[ee+Y+0]=r.x,R[ee+Y+1]=r.y,R[ee+Y+2]=r.z,R[ee+Y+3]=0),g===!0&&(r.fromBufferAttribute(K,Z),R[ee+Y+4]=r.x,R[ee+Y+5]=r.y,R[ee+Y+6]=r.z,R[ee+Y+7]=0),v===!0&&(r.fromBufferAttribute(j,Z),R[ee+Y+8]=r.x,R[ee+Y+9]=r.y,R[ee+Y+10]=r.z,R[ee+Y+11]=j.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new ot(b,P)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function S0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Dd=new xn,tu=new Rd(1,1),Fd=new xd,Id=new jp,Ud=new Td,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),au=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function La(n,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function T0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function A0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),jt(t,i)}}function R0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;su.set(i),n.uniformMatrix3fv(this.addr,!1,su),jt(t,i)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),jt(t,i)}}function N0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function I0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function k0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=vd,s=tu):s=Dd,t.setTexture2D(e||s,r)}function z0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Id,r)}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ud,r)}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fd,r)}function G0(n){switch(n){case 5126:return E0;case 35664:return w0;case 35665:return C0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return P0;case 5124:case 35670:return N0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return F0;case 5125:return I0;case 36294:return U0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return H0}}function W0(n,e){n.uniform1fv(this.addr,e)}function X0(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function q0(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function j0(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function Y0(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $0(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z0(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K0(n,e){n.uniform1iv(this.addr,e)}function J0(n,e){n.uniform2iv(this.addr,e)}function Q0(n,e){n.uniform3iv(this.addr,e)}function e1(n,e){n.uniform4iv(this.addr,e)}function t1(n,e){n.uniform1uiv(this.addr,e)}function n1(n,e){n.uniform2uiv(this.addr,e)}function i1(n,e){n.uniform3uiv(this.addr,e)}function r1(n,e){n.uniform4uiv(this.addr,e)}function s1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dd,s[a])}function a1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Id,s[a])}function o1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ud,s[a])}function l1(n,e,t){const i=this.cache,r=e.length,s=La(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fd,s[a])}function c1(n){switch(n){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return j0;case 35674:return Y0;case 35675:return $0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=G0(t.type)}}class d1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const go=/(\w+)(\])?(\[|\.)?/g;function ou(n,e){n.seq.push(e),n.map[e.id]=e}function p1(n,e,t){const i=n.name,r=i.length;for(go.lastIndex=0;;){const s=go.exec(i),a=go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ou(t,c===void 0?new u1(o,n,e):new d1(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new h1(o),ou(t,d)),t=d}}}class pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);p1(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const f1=37297;let m1=0;function g1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const cu=new at;function v1(n){wt._getMatrix(cu,wt.workingColorSpace,n);const e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+g1(n.getShaderSource(e),a)}else return r}function _1(n,e){const t=v1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b1(n,e){let t;switch(e){case rp:t="Linear";break;case sp:t="Reinhard";break;case ap:t="Cineon";break;case op:t="ACESFilmic";break;case cp:t="AgX";break;case up:t="Neutral";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new G;function x1(){wt.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function M1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ls(n){return n!==""}function du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(n){return n.replace(E1,C1)}const w1=new Map;function C1(n,e){let t=ct[e];if(t===void 0){const i=w1.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(T1,A1)}function A1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function R1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function P1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function L1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case np:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function D1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F1(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=R1(t),c=P1(t),u=N1(t),d=L1(t),h=D1(t),f=y1(t),g=M1(s),v=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ii?b1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),x1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=ll(a),a=du(a,t),a=hu(a,t),o=ll(o),o=du(o,t),o=hu(o,t),a=pu(a),o=pu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,b=y+p+o,P=lu(r,r.VERTEX_SHADER,M),R=lu(r,r.FRAGMENT_SHADER,b);r.attachShader(v,P),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(v).trim(),j=r.getShaderInfoLog(P).trim(),ee=r.getShaderInfoLog(R).trim();let Z=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,R);else{const O=uu(r,P,"vertex"),x=uu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+K+`
`+O+`
`+x)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(j===""||ee==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Z,programLog:K,vertexShader:{log:j,prefix:m},fragmentShader:{log:ee,prefix:p}})}r.deleteShader(P),r.deleteShader(R),B=new pa(r,v),w=S1(r,v)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,f1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let I1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new O1(e),t.set(e,i)),i}}class O1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function B1(n,e,t,i,r,s,a){const o=new yd,l=new U1,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,K,j){const ee=K.fog,Z=j.geometry,Y=w.isMeshStandardMaterial?K.environment:null,O=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),x=O&&O.mapping===Ra?O.image.height:null,A=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const N=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,k=N!==void 0?N.length:0;let ne=0;Z.morphAttributes.position!==void 0&&(ne=1),Z.morphAttributes.normal!==void 0&&(ne=2),Z.morphAttributes.color!==void 0&&(ne=3);let Ce,te,oe,Q;if(A){const ae=Yn[A];Ce=ae.vertexShader,te=ae.fragmentShader}else Ce=w.vertexShader,te=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),Q=l.getFragmentShaderID(w);const xe=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ve=j.isInstancedMesh===!0,Ge=j.isBatchedMesh===!0,ze=!!w.map,qe=!!w.matcap,it=!!O,I=!!w.aoMap,yt=!!w.lightMap,je=!!w.bumpMap,Ze=!!w.normalMap,Be=!!w.displacementMap,rt=!!w.emissiveMap,Ue=!!w.metalnessMap,C=!!w.roughnessMap,_=w.anisotropy>0,W=w.clearcoat>0,ce=w.dispersion>0,ue=w.iridescence>0,se=w.sheen>0,Te=w.transmission>0,ye=_&&!!w.anisotropyMap,Pe=W&&!!w.clearcoatMap,Je=W&&!!w.clearcoatNormalMap,ge=W&&!!w.clearcoatRoughnessMap,fe=ue&&!!w.iridescenceMap,Ae=ue&&!!w.iridescenceThicknessMap,Xe=se&&!!w.sheenColorMap,Ie=se&&!!w.sheenRoughnessMap,tt=!!w.specularMap,nt=!!w.specularColorMap,Mt=!!w.specularIntensityMap,H=Te&&!!w.transmissionMap,Se=Te&&!!w.thicknessMap,ie=!!w.gradientMap,pe=!!w.alphaMap,Re=w.alphaTest>0,we=!!w.alphaHash,T=!!w.extensions;let z=Ii;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(z=n.toneMapping);const q={shaderID:A,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:te,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&j._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&j.instanceColor!==null,instancingMorph:Ve&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Br,alphaToCoverage:!!w.alphaToCoverage,map:ze,matcap:qe,envMap:it,envMapMode:it&&O.mapping,envMapCubeUVHeight:x,aoMap:I,lightMap:yt,bumpMap:je,normalMap:Ze,displacementMap:h&&Be,emissiveMap:rt,normalMapObjectSpace:Ze&&w.normalMapType===pp,normalMapTangentSpace:Ze&&w.normalMapType===gd,metalnessMap:Ue,roughnessMap:C,anisotropy:_,anisotropyMap:ye,clearcoat:W,clearcoatMap:Pe,clearcoatNormalMap:Je,clearcoatRoughnessMap:ge,dispersion:ce,iridescence:ue,iridescenceMap:fe,iridescenceThicknessMap:Ae,sheen:se,sheenColorMap:Xe,sheenRoughnessMap:Ie,specularMap:tt,specularColorMap:nt,specularIntensityMap:Mt,transmission:Te,transmissionMap:H,thicknessMap:Se,gradientMap:ie,opaque:w.transparent===!1&&w.blending===Fi&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:Re,alphaHash:we,combine:w.combine,mapUv:ze&&v(w.map.channel),aoMapUv:I&&v(w.aoMap.channel),lightMapUv:yt&&v(w.lightMap.channel),bumpMapUv:je&&v(w.bumpMap.channel),normalMapUv:Ze&&v(w.normalMap.channel),displacementMapUv:Be&&v(w.displacementMap.channel),emissiveMapUv:rt&&v(w.emissiveMap.channel),metalnessMapUv:Ue&&v(w.metalnessMap.channel),roughnessMapUv:C&&v(w.roughnessMap.channel),anisotropyMapUv:ye&&v(w.anisotropyMap.channel),clearcoatMapUv:Pe&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(w.sheenRoughnessMap.channel),specularMapUv:tt&&v(w.specularMap.channel),specularColorMapUv:nt&&v(w.specularColorMap.channel),specularIntensityMapUv:Mt&&v(w.specularIntensityMap.channel),transmissionMapUv:H&&v(w.transmissionMap.channel),thicknessMapUv:Se&&v(w.thicknessMap.channel),alphaMapUv:pe&&v(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ze||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(ze||pe),fog:!!ee,useFog:w.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:me,skinning:j.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:z,decodeVideoTexture:ze&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===At,decodeVideoTextureEmissive:rt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===At,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$n,flipSided:w.side===wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:T&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(T&&w.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return q.vertexUv1s=c.has(1),q.vertexUv2s=c.has(2),q.vertexUv3s=c.has(3),c.clear(),q}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(S,w),M(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function M(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function b(w){const S=g[w.type];let D;if(S){const K=Yn[S];D=_s.clone(K.uniforms)}else D=w.uniforms;return D}function P(w,S){let D;for(let K=0,j=u.length;K<j;K++){const ee=u[K];if(ee.cacheKey===S){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new F1(n,S,w,s),u.push(D)),D}function R(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:B}}function k1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function z1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,h,f,g,v,m){const p=a(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,h,f,g,v,m){const p=a(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||z1),i.length>1&&i.sort(h||mu),r.length>1&&r.sort(h||mu)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function V1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gu,n.set(i,[a])):r>=s.length?(a=new gu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function H1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function G1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W1=0;function X1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q1(n){const e=new H1,t=G1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new Pt,a=new Pt;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,M=0,b=0,P=0,R=0,L=0;c.sort(X1);for(let w=0,S=c.length;w<S;w++){const D=c[w],K=D.color,j=D.intensity,ee=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=K.r*j,d+=K.g*j,h+=K.b*j;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],j);L++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,x=t.get(D);x.shadowIntensity=O.intensity,x.shadowBias=O.bias,x.shadowNormalBias=O.normalBias,x.shadowRadius=O.radius,x.shadowMapSize=O.mapSize,i.directionalShadow[f]=x,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=D.shadow.matrix,y++}i.directional[f]=Y,f++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(K).multiplyScalar(j),Y.distance=ee,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[v]=Y;const O=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,O.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[v]=O.matrix,D.castShadow){const x=t.get(D);x.shadowIntensity=O.intensity,x.shadowBias=O.bias,x.shadowNormalBias=O.normalBias,x.shadowRadius=O.radius,x.shadowMapSize=O.mapSize,i.spotShadow[v]=x,i.spotShadowMap[v]=Z,b++}v++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(K).multiplyScalar(j),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const O=D.shadow,x=t.get(D);x.shadowIntensity=O.intensity,x.shadowBias=O.bias,x.shadowNormalBias=O.normalBias,x.shadowRadius=O.radius,x.shadowMapSize=O.mapSize,x.shadowCameraNear=O.camera.near,x.shadowCameraFar=O.camera.far,i.pointShadow[g]=x,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(j),Y.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==f||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==y||B.numPointShadows!==M||B.numSpotShadows!==b||B.numSpotMaps!==P||B.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,B.directionalLength=f,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=y,B.numPointShadows=M,B.numSpotShadows=b,B.numSpotMaps=P,B.numLightProbes=L,i.version=W1++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(M.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function vu(n){const e=new q1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function j1(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vu(n),e.set(r,[o])):s>=a.length?(o=new vu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function Z1(n,e,t){let i=new Fl;const r=new ot,s=new ot,a=new Bt,o=new Pd({depthPacking:md}),l=new bf,c={},u=t.maxTextureSize,d={[Ui]:wn,[wn]:Ui,[$n]:$n},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let p=this.type;this.render=function(R,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Jn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const j=p!==ui&&this.type===ui,ee=p===ui&&this.type!==ui;for(let Z=0,Y=R.length;Z<Y;Z++){const O=R[Z],x=O.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;r.copy(x.mapSize);const A=x.getFrameExtents();if(r.multiply(A),s.copy(x.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/A.x),r.x=s.x*A.x,x.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/A.y),r.y=s.y*A.y,x.mapSize.y=s.y)),x.map===null||j===!0||ee===!0){const k=this.type!==ui?{minFilter:bn,magFilter:bn}:{};x.map!==null&&x.map.dispose(),x.map=new Fn(r.x,r.y,k),x.map.texture.name=O.name+".shadowMap",x.camera.updateProjectionMatrix()}n.setRenderTarget(x.map),n.clear();const N=x.getViewportCount();for(let k=0;k<N;k++){const ne=x.getViewport(k);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),K.viewport(a),x.updateMatrices(O,k),i=x.getFrustum(),b(L,B,x.camera,O,this.type)}x.isPointLightShadow!==!0&&this.type===ui&&y(x,B),x.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,S,D)};function y(R,L){const B=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fn(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,B,h,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,B,f,v,null)}function M(R,L,B,w){let S=null;const D=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=B.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const K=S.uuid,j=L.uuid;let ee=c[K];ee===void 0&&(ee={},c[K]=ee);let Z=ee[j];Z===void 0&&(Z=S.clone(),ee[j]=Z,L.addEventListener("dispose",P)),S=Z}if(S.visible=L.visible,S.wireframe=L.wireframe,w===ui?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=B}return S}function b(R,L,B,w,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ui)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const j=e.update(R),ee=R.material;if(Array.isArray(ee)){const Z=j.groups;for(let Y=0,O=Z.length;Y<O;Y++){const x=Z[Y],A=ee[x.materialIndex];if(A&&A.visible){const N=M(R,A,w,S);R.onBeforeShadow(n,R,L,B,j,N,x),n.renderBufferDirect(B,null,j,N,R,x),R.onAfterShadow(n,R,L,B,j,N,x)}}}else if(ee.visible){const Z=M(R,ee,w,S);R.onBeforeShadow(n,R,L,B,j,Z,null),n.renderBufferDirect(B,null,j,Z,R,null),R.onAfterShadow(n,R,L,B,j,Z,null)}}const K=R.children;for(let j=0,ee=K.length;j<ee;j++)b(K[j],L,B,w,S)}function P(R){R.target.removeEventListener("dispose",P);for(const B in c){const w=c[B],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const K1={[Eo]:wo,[Co]:Ro,[To]:Po,[Dr]:Ao,[wo]:Eo,[Ro]:Co,[Po]:To,[Ao]:Dr};function J1(n,e){function t(){let H=!1;const Se=new Bt;let ie=null;const pe=new Bt(0,0,0,0);return{setMask:function(Re){ie!==Re&&!H&&(n.colorMask(Re,Re,Re,Re),ie=Re)},setLocked:function(Re){H=Re},setClear:function(Re,we,T,z,q){q===!0&&(Re*=z,we*=z,T*=z),Se.set(Re,we,T,z),pe.equals(Se)===!1&&(n.clearColor(Re,we,T,z),pe.copy(Se))},reset:function(){H=!1,ie=null,pe.set(-1,0,0,0)}}}function i(){let H=!1,Se=!1,ie=null,pe=null,Re=null;return{setReversed:function(we){if(Se!==we){const T=e.get("EXT_clip_control");Se?T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT):T.clipControlEXT(T.LOWER_LEFT_EXT,T.NEGATIVE_ONE_TO_ONE_EXT);const z=Re;Re=null,this.setClear(z)}Se=we},getReversed:function(){return Se},setTest:function(we){we?xe(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(we){ie!==we&&!H&&(n.depthMask(we),ie=we)},setFunc:function(we){if(Se&&(we=K1[we]),pe!==we){switch(we){case Eo:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case Ao:n.depthFunc(n.GEQUAL);break;case Ro:n.depthFunc(n.GREATER);break;case Po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=we}},setLocked:function(we){H=we},setClear:function(we){Re!==we&&(Se&&(we=1-we),n.clearDepth(we),Re=we)},reset:function(){H=!1,ie=null,pe=null,Re=null,Se=!1}}}function r(){let H=!1,Se=null,ie=null,pe=null,Re=null,we=null,T=null,z=null,q=null;return{setTest:function(ae){H||(ae?xe(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(ae){Se!==ae&&!H&&(n.stencilMask(ae),Se=ae)},setFunc:function(ae,_e,be){(ie!==ae||pe!==_e||Re!==be)&&(n.stencilFunc(ae,_e,be),ie=ae,pe=_e,Re=be)},setOp:function(ae,_e,be){(we!==ae||T!==_e||z!==be)&&(n.stencilOp(ae,_e,be),we=ae,T=_e,z=be)},setLocked:function(ae){H=ae},setClear:function(ae){q!==ae&&(n.clearStencil(ae),q=ae)},reset:function(){H=!1,Se=null,ie=null,pe=null,Re=null,we=null,T=null,z=null,q=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,M=null,b=null,P=null,R=null,L=new st(0,0,0),B=0,w=!1,S=null,D=null,K=null,j=null,ee=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,O=0;const x=n.getParameter(n.VERSION);x.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(x)[1]),Y=O>=1):x.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),Y=O>=2);let A=null,N={};const k=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Ce=new Bt().fromArray(k),te=new Bt().fromArray(ne);function oe(H,Se,ie,pe){const Re=new Uint8Array(4),we=n.createTexture();n.bindTexture(H,we),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let T=0;T<ie;T++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Se+T,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return we}const Q={};Q[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),a.setFunc(Dr),je(!1),Ze(uc),xe(n.CULL_FACE),I(Jn);function xe(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function me(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Ve(H,Se){return d[H]!==Se?(n.bindFramebuffer(H,Se),d[H]=Se,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ge(H,Se){let ie=f,pe=!1;if(H){ie=h.get(Se),ie===void 0&&(ie=[],h.set(Se,ie));const Re=H.textures;if(ie.length!==Re.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let we=0,T=Re.length;we<T;we++)ie[we]=n.COLOR_ATTACHMENT0+we;ie.length=Re.length,pe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ie)}function ze(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const qe={[pi]:n.FUNC_ADD,[kh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};qe[Vh]=n.MIN,qe[Hh]=n.MAX;const it={[Gh]:n.ZERO,[Wh]:n.ONE,[Xh]:n.SRC_COLOR,[fs]:n.SRC_ALPHA,[Kh]:n.SRC_ALPHA_SATURATE,[$h]:n.DST_COLOR,[jh]:n.DST_ALPHA,[qh]:n.ONE_MINUS_SRC_COLOR,[ms]:n.ONE_MINUS_SRC_ALPHA,[Zh]:n.ONE_MINUS_DST_COLOR,[Yh]:n.ONE_MINUS_DST_ALPHA,[Jh]:n.CONSTANT_COLOR,[Qh]:n.ONE_MINUS_CONSTANT_COLOR,[ep]:n.CONSTANT_ALPHA,[tp]:n.ONE_MINUS_CONSTANT_ALPHA};function I(H,Se,ie,pe,Re,we,T,z,q,ae){if(H===Jn){v===!0&&(me(n.BLEND),v=!1);return}if(v===!1&&(xe(n.BLEND),v=!0),H!==So){if(H!==m||ae!==w){if((p!==pi||b!==pi)&&(n.blendEquation(n.FUNC_ADD),p=pi,b=pi),ae)switch(H){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ri:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ri:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,M=null,P=null,R=null,L.set(0,0,0),B=0,m=H,w=ae}return}Re=Re||Se,we=we||ie,T=T||pe,(Se!==p||Re!==b)&&(n.blendEquationSeparate(qe[Se],qe[Re]),p=Se,b=Re),(ie!==y||pe!==M||we!==P||T!==R)&&(n.blendFuncSeparate(it[ie],it[pe],it[we],it[T]),y=ie,M=pe,P=we,R=T),(z.equals(L)===!1||q!==B)&&(n.blendColor(z.r,z.g,z.b,q),L.copy(z),B=q),m=H,w=!1}function yt(H,Se){H.side===$n?me(n.CULL_FACE):xe(n.CULL_FACE);let ie=H.side===wn;Se&&(ie=!ie),je(ie),H.blending===Fi&&H.transparent===!1?I(Jn):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const pe=H.stencilWrite;o.setTest(pe),pe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(H){S!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),S=H)}function Ze(H){H!==Uh?(xe(n.CULL_FACE),H!==D&&(H===uc?n.cullFace(n.BACK):H===Oh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),D=H}function Be(H){H!==K&&(Y&&n.lineWidth(H),K=H)}function rt(H,Se,ie){H?(xe(n.POLYGON_OFFSET_FILL),(j!==Se||ee!==ie)&&(n.polygonOffset(Se,ie),j=Se,ee=ie)):me(n.POLYGON_OFFSET_FILL)}function Ue(H){H?xe(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function C(H){H===void 0&&(H=n.TEXTURE0+Z-1),A!==H&&(n.activeTexture(H),A=H)}function _(H,Se,ie){ie===void 0&&(A===null?ie=n.TEXTURE0+Z-1:ie=A);let pe=N[ie];pe===void 0&&(pe={type:void 0,texture:void 0},N[ie]=pe),(pe.type!==H||pe.texture!==Se)&&(A!==ie&&(n.activeTexture(ie),A=ie),n.bindTexture(H,Se||Q[H]),pe.type=H,pe.texture=Se)}function W(){const H=N[A];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(H){Ce.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ce.copy(H))}function Ie(H){te.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),te.copy(H))}function tt(H,Se){let ie=c.get(Se);ie===void 0&&(ie=new WeakMap,c.set(Se,ie));let pe=ie.get(H);pe===void 0&&(pe=n.getUniformBlockIndex(Se,H.name),ie.set(H,pe))}function nt(H,Se){const pe=c.get(Se).get(H);l.get(Se)!==pe&&(n.uniformBlockBinding(Se,pe,H.__bindingPointIndex),l.set(Se,pe))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},A=null,N={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,M=null,b=null,P=null,R=null,L=new st(0,0,0),B=0,w=!1,S=null,D=null,K=null,j=null,ee=null,Ce.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xe,disable:me,bindFramebuffer:Ve,drawBuffers:Ge,useProgram:ze,setBlending:I,setMaterial:yt,setFlipSided:je,setCullFace:Ze,setLineWidth:Be,setPolygonOffset:rt,setScissorTest:Ue,activeTexture:C,bindTexture:_,unbindTexture:W,compressedTexImage2D:ce,compressedTexImage3D:ue,texImage2D:fe,texImage3D:Ae,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:Je,texStorage3D:ge,texSubImage2D:se,texSubImage3D:Te,compressedTexSubImage2D:ye,compressedTexSubImage3D:Pe,scissor:Xe,viewport:Ie,reset:Mt}}function Q1(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return f?new OffscreenCanvas(C,_):_a("canvas")}function v(C,_,W){let ce=1;const ue=Ue(C);if((ue.width>W||ue.height>W)&&(ce=W/Math.max(ue.width,ue.height)),ce<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(ce*ue.width),Te=Math.floor(ce*ue.height);d===void 0&&(d=g(se,Te));const ye=_?g(se,Te):d;return ye.width=se,ye.height=Te,ye.getContext("2d").drawImage(C,0,0,se,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+se+"x"+Te+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,_,W,ce,ue=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=_;if(_===n.RED&&(W===n.FLOAT&&(se=n.R32F),W===n.HALF_FLOAT&&(se=n.R16F),W===n.UNSIGNED_BYTE&&(se=n.R8)),_===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.R8UI),W===n.UNSIGNED_SHORT&&(se=n.R16UI),W===n.UNSIGNED_INT&&(se=n.R32UI),W===n.BYTE&&(se=n.R8I),W===n.SHORT&&(se=n.R16I),W===n.INT&&(se=n.R32I)),_===n.RG&&(W===n.FLOAT&&(se=n.RG32F),W===n.HALF_FLOAT&&(se=n.RG16F),W===n.UNSIGNED_BYTE&&(se=n.RG8)),_===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RG8UI),W===n.UNSIGNED_SHORT&&(se=n.RG16UI),W===n.UNSIGNED_INT&&(se=n.RG32UI),W===n.BYTE&&(se=n.RG8I),W===n.SHORT&&(se=n.RG16I),W===n.INT&&(se=n.RG32I)),_===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RGB8UI),W===n.UNSIGNED_SHORT&&(se=n.RGB16UI),W===n.UNSIGNED_INT&&(se=n.RGB32UI),W===n.BYTE&&(se=n.RGB8I),W===n.SHORT&&(se=n.RGB16I),W===n.INT&&(se=n.RGB32I)),_===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),W===n.UNSIGNED_INT&&(se=n.RGBA32UI),W===n.BYTE&&(se=n.RGBA8I),W===n.SHORT&&(se=n.RGBA16I),W===n.INT&&(se=n.RGBA32I)),_===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),_===n.RGBA){const Te=ue?ga:wt.getTransfer(ce);W===n.FLOAT&&(se=n.RGBA32F),W===n.HALF_FLOAT&&(se=n.RGBA16F),W===n.UNSIGNED_BYTE&&(se=Te===At?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function b(C,_){let W;return C?_===null||_===tr||_===Ur?W=n.DEPTH24_STENCIL8:_===Kn?W=n.DEPTH32F_STENCIL8:_===gs&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===tr||_===Ur?W=n.DEPTH_COMPONENT24:_===Kn?W=n.DEPTH_COMPONENT32F:_===gs&&(W=n.DEPTH_COMPONENT16),W}function P(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Zn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){const _=C.target;_.removeEventListener("dispose",R),B(_),_.isVideoTexture&&u.delete(_)}function L(C){const _=C.target;_.removeEventListener("dispose",L),S(_)}function B(C){const _=i.get(C);if(_.__webglInit===void 0)return;const W=C.source,ce=h.get(W);if(ce){const ue=ce[_.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&w(C),Object.keys(ce).length===0&&h.delete(W)}i.remove(C)}function w(C){const _=i.get(C);n.deleteTexture(_.__webglTexture);const W=C.source,ce=h.get(W);delete ce[_.__cacheKey],a.memory.textures--}function S(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(_.__webglFramebuffer[ce]))for(let ue=0;ue<_.__webglFramebuffer[ce].length;ue++)n.deleteFramebuffer(_.__webglFramebuffer[ce][ue]);else n.deleteFramebuffer(_.__webglFramebuffer[ce]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[ce])}else{if(Array.isArray(_.__webglFramebuffer))for(let ce=0;ce<_.__webglFramebuffer.length;ce++)n.deleteFramebuffer(_.__webglFramebuffer[ce]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ce=0;ce<_.__webglColorRenderbuffer.length;ce++)_.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[ce]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const W=C.textures;for(let ce=0,ue=W.length;ce<ue;ce++){const se=i.get(W[ce]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(W[ce])}i.remove(C)}let D=0;function K(){D=0}function j(){const C=D;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function ee(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function Z(C,_){const W=i.get(C);if(C.isVideoTexture&&Be(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,C,_);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+_)}function Y(C,_){const W=i.get(C);if(C.version>0&&W.__version!==C.version){te(W,C,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+_)}function O(C,_){const W=i.get(C);if(C.version>0&&W.__version!==C.version){te(W,C,_);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+_)}function x(C,_){const W=i.get(C);if(C.version>0&&W.__version!==C.version){oe(W,C,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+_)}const A={[Do]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},N={[bn]:n.NEAREST,[dp]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},k={[fp]:n.NEVER,[xp]:n.ALWAYS,[mp]:n.LESS,[vd]:n.LEQUAL,[gp]:n.EQUAL,[bp]:n.GEQUAL,[vp]:n.GREATER,[_p]:n.NOTEQUAL};function ne(C,_){if(_.type===Kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zn||_.magFilter===Va||_.magFilter===As||_.magFilter===Ki||_.minFilter===Zn||_.minFilter===Va||_.minFilter===As||_.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,A[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,A[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,A[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,N[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,N[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,k[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bn||_.minFilter!==As&&_.minFilter!==Ki||_.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(C,_){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));const ce=_.source;let ue=h.get(ce);ue===void 0&&(ue={},h.set(ce,ue));const se=ee(_);if(se!==C.__cacheKey){ue[se]===void 0&&(ue[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ue[se].usedTimes++;const Te=ue[C.__cacheKey];Te!==void 0&&(ue[C.__cacheKey].usedTimes--,Te.usedTimes===0&&w(_)),C.__cacheKey=se,C.__webglTexture=ue[se].texture}return W}function te(C,_,W){let ce=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ce=n.TEXTURE_3D);const ue=Ce(C,_),se=_.source;t.bindTexture(ce,C.__webglTexture,n.TEXTURE0+W);const Te=i.get(se);if(se.version!==Te.__version||ue===!0){t.activeTexture(n.TEXTURE0+W);const ye=wt.getPrimaries(wt.workingColorSpace),Pe=_.colorSpace===Pi?null:wt.getPrimaries(_.colorSpace),Je=_.colorSpace===Pi||ye===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ge=v(_.image,!1,r.maxTextureSize);ge=rt(_,ge);const fe=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type);let Xe=M(_.internalFormat,fe,Ae,_.colorSpace,_.isVideoTexture);ne(ce,_);let Ie;const tt=_.mipmaps,nt=_.isVideoTexture!==!0,Mt=Te.__version===void 0||ue===!0,H=se.dataReady,Se=P(_,ge);if(_.isDepthTexture)Xe=b(_.format===Or,_.type),Mt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Xe,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Xe,ge.width,ge.height,0,fe,Ae,null));else if(_.isDataTexture)if(tt.length>0){nt&&Mt&&t.texStorage2D(n.TEXTURE_2D,Se,Xe,tt[0].width,tt[0].height);for(let ie=0,pe=tt.length;ie<pe;ie++)Ie=tt[ie],nt?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ie.width,Ie.height,fe,Ae,Ie.data):t.texImage2D(n.TEXTURE_2D,ie,Xe,Ie.width,Ie.height,0,fe,Ae,Ie.data);_.generateMipmaps=!1}else nt?(Mt&&t.texStorage2D(n.TEXTURE_2D,Se,Xe,ge.width,ge.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge.width,ge.height,fe,Ae,ge.data)):t.texImage2D(n.TEXTURE_2D,0,Xe,ge.width,ge.height,0,fe,Ae,ge.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){nt&&Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Xe,tt[0].width,tt[0].height,ge.depth);for(let ie=0,pe=tt.length;ie<pe;ie++)if(Ie=tt[ie],_.format!==Hn)if(fe!==null)if(nt){if(H)if(_.layerUpdates.size>0){const Re=jc(Ie.width,Ie.height,_.format,_.type);for(const we of _.layerUpdates){const T=Ie.data.subarray(we*Re/Ie.data.BYTES_PER_ELEMENT,(we+1)*Re/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,we,Ie.width,Ie.height,1,fe,T)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Ie.width,Ie.height,ge.depth,fe,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Xe,Ie.width,Ie.height,ge.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Ie.width,Ie.height,ge.depth,fe,Ae,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Xe,Ie.width,Ie.height,ge.depth,0,fe,Ae,Ie.data)}else{nt&&Mt&&t.texStorage2D(n.TEXTURE_2D,Se,Xe,tt[0].width,tt[0].height);for(let ie=0,pe=tt.length;ie<pe;ie++)Ie=tt[ie],_.format!==Hn?fe!==null?nt?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Ie.width,Ie.height,fe,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Xe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ie.width,Ie.height,fe,Ae,Ie.data):t.texImage2D(n.TEXTURE_2D,ie,Xe,Ie.width,Ie.height,0,fe,Ae,Ie.data)}else if(_.isDataArrayTexture)if(nt){if(Mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Xe,ge.width,ge.height,ge.depth),H)if(_.layerUpdates.size>0){const ie=jc(ge.width,ge.height,_.format,_.type);for(const pe of _.layerUpdates){const Re=ge.data.subarray(pe*ie/ge.data.BYTES_PER_ELEMENT,(pe+1)*ie/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ge.width,ge.height,1,fe,Ae,Re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,fe,Ae,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,ge.width,ge.height,ge.depth,0,fe,Ae,ge.data);else if(_.isData3DTexture)nt?(Mt&&t.texStorage3D(n.TEXTURE_3D,Se,Xe,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,fe,Ae,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,ge.width,ge.height,ge.depth,0,fe,Ae,ge.data);else if(_.isFramebufferTexture){if(Mt)if(nt)t.texStorage2D(n.TEXTURE_2D,Se,Xe,ge.width,ge.height);else{let ie=ge.width,pe=ge.height;for(let Re=0;Re<Se;Re++)t.texImage2D(n.TEXTURE_2D,Re,Xe,ie,pe,0,fe,Ae,null),ie>>=1,pe>>=1}}else if(tt.length>0){if(nt&&Mt){const ie=Ue(tt[0]);t.texStorage2D(n.TEXTURE_2D,Se,Xe,ie.width,ie.height)}for(let ie=0,pe=tt.length;ie<pe;ie++)Ie=tt[ie],nt?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe,Ae,Ie):t.texImage2D(n.TEXTURE_2D,ie,Xe,fe,Ae,Ie);_.generateMipmaps=!1}else if(nt){if(Mt){const ie=Ue(ge);t.texStorage2D(n.TEXTURE_2D,Se,Xe,ie.width,ie.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ae,ge)}else t.texImage2D(n.TEXTURE_2D,0,Xe,fe,Ae,ge);m(_)&&p(ce),Te.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function oe(C,_,W){if(_.image.length!==6)return;const ce=Ce(C,_),ue=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);const se=i.get(ue);if(ue.version!==se.__version||ce===!0){t.activeTexture(n.TEXTURE0+W);const Te=wt.getPrimaries(wt.workingColorSpace),ye=_.colorSpace===Pi?null:wt.getPrimaries(_.colorSpace),Pe=_.colorSpace===Pi||Te===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Je=_.isCompressedTexture||_.image[0].isCompressedTexture,ge=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let pe=0;pe<6;pe++)!Je&&!ge?fe[pe]=v(_.image[pe],!0,r.maxCubemapSize):fe[pe]=ge?_.image[pe].image:_.image[pe],fe[pe]=rt(_,fe[pe]);const Ae=fe[0],Xe=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type),tt=M(_.internalFormat,Xe,Ie,_.colorSpace),nt=_.isVideoTexture!==!0,Mt=se.__version===void 0||ce===!0,H=ue.dataReady;let Se=P(_,Ae);ne(n.TEXTURE_CUBE_MAP,_);let ie;if(Je){nt&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,tt,Ae.width,Ae.height);for(let pe=0;pe<6;pe++){ie=fe[pe].mipmaps;for(let Re=0;Re<ie.length;Re++){const we=ie[Re];_.format!==Hn?Xe!==null?nt?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,we.width,we.height,Xe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,tt,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,we.width,we.height,Xe,Ie,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,tt,we.width,we.height,0,Xe,Ie,we.data)}}}else{if(ie=_.mipmaps,nt&&Mt){ie.length>0&&Se++;const pe=Ue(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,tt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ge){nt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,fe[pe].width,fe[pe].height,Xe,Ie,fe[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,fe[pe].width,fe[pe].height,0,Xe,Ie,fe[pe].data);for(let Re=0;Re<ie.length;Re++){const T=ie[Re].image[pe].image;nt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,T.width,T.height,Xe,Ie,T.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,tt,T.width,T.height,0,Xe,Ie,T.data)}}else{nt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,Ie,fe[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,Xe,Ie,fe[pe]);for(let Re=0;Re<ie.length;Re++){const we=ie[Re];nt?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,Xe,Ie,we.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,tt,Xe,Ie,we.image[pe])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),se.__version=ue.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Q(C,_,W,ce,ue,se){const Te=s.convert(W.format,W.colorSpace),ye=s.convert(W.type),Pe=M(W.internalFormat,Te,ye,W.colorSpace),Je=i.get(_),ge=i.get(W);if(ge.__renderTarget=_,!Je.__hasExternalTextures){const fe=Math.max(1,_.width>>se),Ae=Math.max(1,_.height>>se);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,se,Pe,fe,Ae,_.depth,0,Te,ye,null):t.texImage2D(ue,se,Pe,fe,Ae,0,Te,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ze(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ue,ge.__webglTexture,0,je(_)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,ue,ge.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(C,_,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){const ce=_.depthTexture,ue=ce&&ce.isDepthTexture?ce.type:null,se=b(_.stencilBuffer,ue),Te=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=je(_);Ze(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,se,_.width,_.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,se,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const ce=_.textures;for(let ue=0;ue<ce.length;ue++){const se=ce[ue],Te=s.convert(se.format,se.colorSpace),ye=s.convert(se.type),Pe=M(se.internalFormat,Te,ye,se.colorSpace),Je=je(_);W&&Ze(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Pe,_.width,_.height):Ze(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,Pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(_.depthTexture);ce.__renderTarget=_,(!ce.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const ue=ce.__webglTexture,se=je(_);if(_.depthTexture.format===Pr)Ze(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(_.depthTexture.format===Or)Ze(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const _=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const ce=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ce){const ue=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ce.removeEventListener("dispose",ue)};ce.addEventListener("dispose",ue),_.__depthDisposeCallback=ue}_.__boundDepthTexture=ce}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");me(_.__webglFramebuffer,C)}else if(W){_.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ce]),_.__webglDepthbuffer[ce]===void 0)_.__webglDepthbuffer[ce]=n.createRenderbuffer(),xe(_.__webglDepthbuffer[ce],C,!1);else{const ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),xe(_.__webglDepthbuffer,C,!1);else{const ce=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(C,_,W){const ce=i.get(C);_!==void 0&&Q(ce.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ve(C)}function ze(C){const _=C.texture,W=i.get(C),ce=i.get(_);C.addEventListener("dispose",L);const ue=C.textures,se=C.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=_.version,a.memory.textures++),se){W.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[ye]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)W.__webglFramebuffer[ye][Pe]=n.createFramebuffer()}else W.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let ye=0;ye<_.mipmaps.length;ye++)W.__webglFramebuffer[ye]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ye=0,Pe=ue.length;ye<Pe;ye++){const Je=i.get(ue[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ze(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ye=0;ye<ue.length;ye++){const Pe=ue[ye];W.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ye]);const Je=s.convert(Pe.format,Pe.colorSpace),ge=s.convert(Pe.type),fe=M(Pe.internalFormat,Je,ge,Pe.colorSpace,C.isXRRenderTarget===!0),Ae=je(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,W.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),ne(n.TEXTURE_CUBE_MAP,_);for(let ye=0;ye<6;ye++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)Q(W.__webglFramebuffer[ye][Pe],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe);else Q(W.__webglFramebuffer[ye],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ye=0,Pe=ue.length;ye<Pe;ye++){const Je=ue[ye],ge=i.get(Je);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),ne(n.TEXTURE_2D,Je),Q(W.__webglFramebuffer,C,Je,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),m(Je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),ne(ye,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)Q(W.__webglFramebuffer[Pe],C,_,n.COLOR_ATTACHMENT0,ye,Pe);else Q(W.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,ye,0);m(_)&&p(ye),t.unbindTexture()}C.depthBuffer&&Ve(C)}function qe(C){const _=C.textures;for(let W=0,ce=_.length;W<ce;W++){const ue=_[W];if(m(ue)){const se=y(C),Te=i.get(ue).__webglTexture;t.bindTexture(se,Te),p(se),t.unbindTexture()}}}const it=[],I=[];function yt(C){if(C.samples>0){if(Ze(C)===!1){const _=C.textures,W=C.width,ce=C.height;let ue=n.COLOR_BUFFER_BIT;const se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),ye=_.length>1;if(ye)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Pe]);const Je=i.get(_[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,W,ce,0,0,W,ce,ue,n.NEAREST),l===!0&&(it.length=0,I.length=0,it.push(n.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(se),I.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Pe]);const Je=i.get(_[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function je(C){return Math.min(r.maxSamples,C.samples)}function Ze(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(C){const _=a.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function rt(C,_){const W=C.colorSpace,ce=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Br&&W!==Pi&&(wt.getTransfer(W)===At?(ce!==Hn||ue!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),_}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=O,this.setTextureCube=x,this.rebindTextures=Ge,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ze}function ev(n,e){function t(i,r=Pi){let s;const a=wt.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ad)return n.BYTE;if(i===od)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===Hn)return n.RGBA;if(i===dd)return n.LUMINANCE;if(i===hd)return n.LUMINANCE_ALPHA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Cl)return n.RED;if(i===Tl)return n.RED_INTEGER;if(i===pd)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===da)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Uo||i===Oo||i===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===zo||i===Vo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ko||i===zo)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ho||i===Go||i===Wo||i===Xo||i===qo||i===jo||i===Yo||i===$o||i===Zo||i===Ko||i===Jo||i===Qo||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ho)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ko)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===nl||i===il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ha)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fd||i===rl||i===sl||i===al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const tv={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`;class rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pn({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sv extends Wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const v=new rv,m=t.getContextAttributes();let p=null,y=null;const M=[],b=[],P=new ot;let R=null;const L=new Ln;L.viewport=new Bt;const B=new Ln;B.viewport=new Bt;const w=[L,B],S=new Ef;let D=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=M[te];return oe===void 0&&(oe=new vo,M[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=M[te];return oe===void 0&&(oe=new vo,M[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=M[te];return oe===void 0&&(oe=new vo,M[te]=oe),oe.getHandSpace()};function j(te){const oe=b.indexOf(te.inputSource);if(oe===-1)return;const Q=M[oe];Q!==void 0&&(Q.update(te.inputSource,te.frame,c||a),Q.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<M.length;te++){const oe=b[te];oe!==null&&(b[te]=null,M[te].disconnect(oe))}D=null,K=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,Q=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Or:Pr,Q=m.stencil?Ur:tr);const me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Fn(h.textureWidth,h.textureHeight,{format:Hn,type:gi,depthTexture:new Rd(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(te){for(let oe=0;oe<te.removed.length;oe++){const Q=te.removed[oe],xe=b.indexOf(Q);xe>=0&&(b[xe]=null,M[xe].disconnect(Q))}for(let oe=0;oe<te.added.length;oe++){const Q=te.added[oe];let xe=b.indexOf(Q);if(xe===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=b.length){b.push(Q),xe=Ve;break}else if(b[Ve]===null){b[Ve]=Q,xe=Ve;break}if(xe===-1)break}const me=M[xe];me&&me.connect(Q)}}const Y=new G,O=new G;function x(te,oe,Q){Y.setFromMatrixPosition(oe.matrixWorld),O.setFromMatrixPosition(Q.matrixWorld);const xe=Y.distanceTo(O),me=oe.projectionMatrix.elements,Ve=Q.projectionMatrix.elements,Ge=me[14]/(me[10]-1),ze=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],it=(me[9]-1)/me[5],I=(me[8]-1)/me[0],yt=(Ve[8]+1)/Ve[0],je=Ge*I,Ze=Ge*yt,Be=xe/(-I+yt),rt=Be*-I;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(rt),te.translateZ(Be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),me[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ue=Ge+Be,C=ze+Be,_=je-rt,W=Ze+(xe-rt),ce=qe*ze/C*Ue,ue=it*ze/C*Ue;te.projectionMatrix.makePerspective(_,W,ce,ue,Ue,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function A(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let oe=te.near,Q=te.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),S.near=B.near=L.near=oe,S.far=B.far=L.far=Q,(D!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,K=S.far),L.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,S.layers.mask=L.layers.mask|B.layers.mask;const xe=te.parent,me=S.cameras;A(S,xe);for(let Ve=0;Ve<me.length;Ve++)A(me[Ve],xe);me.length===2?x(S,L,B):S.projectionMatrix.copy(L.projectionMatrix),N(te,S,xe)};function N(te,oe,Q){Q===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(Q.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let k=null;function ne(te,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const Q=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let xe=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,xe=!0);for(let Ve=0;Ve<Q.length;Ve++){const Ge=Q[Ve];let ze=null;if(f!==null)ze=f.getViewport(Ge);else{const it=d.getViewSubImage(h,Ge);ze=it.viewport,Ve===0&&(e.setRenderTargetTextures(y,it.colorTexture,h.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(y))}let qe=w[Ve];qe===void 0&&(qe=new Ln,qe.layers.enable(Ve),qe.viewport=new Bt,w[Ve]=qe),qe.matrix.fromArray(Ge.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ge.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ze.x,ze.y,ze.width,ze.height),Ve===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xe===!0&&S.cameras.push(qe)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){const Ve=d.getDepthInformation(Q[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,r.renderState)}}for(let Q=0;Q<M.length;Q++){const xe=b[Q],me=M[Q];xe!==null&&me!==void 0&&me.update(xe,oe,c||a)}k&&k(te,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ce=new Ld;Ce.setAnimationLoop(ne),this.setAnimationLoop=function(te){k=te},this.dispose=function(){}}}const Xi=new ei,av=new Pt;function ov(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,b=y.envMapRotation;M&&(m.envMap.value=M,Xi.copy(b),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(Xi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const b=M.program;i.uniformBlockBinding(y,b)}function c(y,M){let b=r[y.id];b===void 0&&(g(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",m));const P=M.program;i.updateUBOMapping(y,P);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const M=d();y.__bindingPointIndex=M;const b=n.createBuffer(),P=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],b=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,L=b.length;R<L;R++){const B=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,S=B.length;w<S;w++){const D=B[w];if(f(D,R,w,P)===!0){const K=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let Z=0;Z<j.length;Z++){const Y=j[Z],O=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,K+ee,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,ee),ee+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,M,b,P){const R=y.value,L=M+"_"+b;if(P[L]===void 0)return typeof R=="number"||typeof R=="boolean"?P[L]=R:P[L]=R.clone(),!0;{const B=P[L];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return P[L]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(y){const M=y.uniforms;let b=0;const P=16;for(let L=0,B=M.length;L<B;L++){const w=Array.isArray(M[L])?M[L]:[M[L]];for(let S=0,D=w.length;S<D;S++){const K=w[S],j=Array.isArray(K.value)?K.value:[K.value];for(let ee=0,Z=j.length;ee<Z;ee++){const Y=j[ee],O=v(Y),x=b%P,A=x%O.boundary,N=x+A;b+=A,N!==0&&P-N<O.storage&&(b+=P-N),K.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=O.storage}}}const R=b%P;return R>0&&(b+=P-R),y.__size=b,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Od{constructor(e={}){const{canvas:t=Bp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=Ii,this.toneMappingExposure=1;const b=this;let P=!1,R=0,L=0,B=null,w=-1,S=null;const D=new Bt,K=new Bt;let j=null;const ee=new st(0);let Z=0,Y=t.width,O=t.height,x=1,A=null,N=null;const k=new Bt(0,0,Y,O),ne=new Bt(0,0,Y,O);let Ce=!1;const te=new Fl;let oe=!1,Q=!1;const xe=new Pt,me=new Pt,Ve=new G,Ge=new Bt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function it(){return B===null?x:1}let I=i;function yt(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",we,!1),I===null){const V="webgl2";if(I=yt(V,E),I===null)throw yt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,Ze,Be,rt,Ue,C,_,W,ce,ue,se,Te,ye,Pe,Je,ge,fe,Ae,Xe,Ie,tt,nt,Mt,H;function Se(){je=new _0(I),je.init(),nt=new ev(I,je),Ze=new h0(I,je,e,nt),Be=new J1(I,je),Ze.reverseDepthBuffer&&h&&Be.buffers.depth.setReversed(!0),rt=new y0(I),Ue=new k1,C=new Q1(I,je,Be,Ue,Ze,nt,rt),_=new f0(b),W=new v0(b),ce=new Af(I),Mt=new u0(I,ce),ue=new b0(I,ce,rt,Mt),se=new S0(I,ue,ce,rt),Xe=new M0(I,Ze,C),ge=new p0(Ue),Te=new B1(b,_,W,je,Ze,Mt,ge),ye=new ov(b,Ue),Pe=new V1,Je=new j1(je),Ae=new c0(b,_,W,Be,se,f,l),fe=new Z1(b,se,Ze),H=new lv(I,rt,Ze,Be),Ie=new d0(I,je,rt),tt=new x0(I,je,rt),rt.programs=Te.programs,b.capabilities=Ze,b.extensions=je,b.properties=Ue,b.renderLists=Pe,b.shadowMap=fe,b.state=Be,b.info=rt}Se();const ie=new sv(b,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return x},this.setPixelRatio=function(E){E!==void 0&&(x=E,this.setSize(Y,O,!1))},this.getSize=function(E){return E.set(Y,O)},this.setSize=function(E,V,U=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,O=V,t.width=Math.floor(E*x),t.height=Math.floor(V*x),U===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Y*x,O*x).floor()},this.setDrawingBufferSize=function(E,V,U){Y=E,O=V,x=U,t.width=Math.floor(E*U),t.height=Math.floor(V*U),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,V,U,$){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,V,U,$),Be.viewport(D.copy(k).multiplyScalar(x).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,V,U,$){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,V,U,$),Be.scissor(K.copy(ne).multiplyScalar(x).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){Be.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){A=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,V=!0,U=!0){let $=0;if(E){let X=!1;if(B!==null){const ve=B.texture.format;X=ve===Rl||ve===Al||ve===Tl}if(X){const ve=B.texture.type,Ee=ve===gi||ve===tr||ve===gs||ve===Ur||ve===El||ve===wl,Ne=Ae.getClearColor(),Oe=Ae.getClearAlpha(),Qe=Ne.r,et=Ne.g,He=Ne.b;Ee?(g[0]=Qe,g[1]=et,g[2]=He,g[3]=Oe,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Qe,v[1]=et,v[2]=He,v[3]=Oe,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}V&&($|=I.DEPTH_BUFFER_BIT),U&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ae.dispose(),Pe.dispose(),Je.dispose(),Ue.dispose(),_.dispose(),W.dispose(),se.dispose(),Mt.dispose(),H.dispose(),Te.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",J),ie.removeEventListener("sessionend",de),Ke.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=rt.autoReset,V=fe.enabled,U=fe.autoUpdate,$=fe.needsUpdate,X=fe.type;Se(),rt.autoReset=E,fe.enabled=V,fe.autoUpdate=U,fe.needsUpdate=$,fe.type=X}function we(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function T(E){const V=E.target;V.removeEventListener("dispose",T),z(V)}function z(E){q(E),Ue.remove(E)}function q(E){const V=Ue.get(E).programs;V!==void 0&&(V.forEach(function(U){Te.releaseProgram(U)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,U,$,X,ve){V===null&&(V=ze);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,Ne=Nt(E,V,U,$,X);Be.setMaterial($,Ee);let Oe=U.index,Qe=1;if($.wireframe===!0){if(Oe=ue.getWireframeAttribute(U),Oe===void 0)return;Qe=2}const et=U.drawRange,He=U.attributes.position;let dt=et.start*Qe,xt=(et.start+et.count)*Qe;ve!==null&&(dt=Math.max(dt,ve.start*Qe),xt=Math.min(xt,(ve.start+ve.count)*Qe)),Oe!==null?(dt=Math.max(dt,0),xt=Math.min(xt,Oe.count)):He!=null&&(dt=Math.max(dt,0),xt=Math.min(xt,He.count));const kt=xt-dt;if(kt<0||kt===1/0)return;Mt.setup(X,$,Ne,U,Oe);let Tt,ft=Ie;if(Oe!==null&&(Tt=ce.get(Oe),ft=tt,ft.setIndex(Tt)),X.isMesh)$.wireframe===!0?(Be.setLineWidth($.wireframeLinewidth*it()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(X.isLine){let $e=$.linewidth;$e===void 0&&($e=1),Be.setLineWidth($e*it()),X.isLineSegments?ft.setMode(I.LINES):X.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else X.isPoints?ft.setMode(I.POINTS):X.isSprite&&ft.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,zt=X._multiDrawCounts,St=X._multiDrawCount,yn=Oe?ce.get(Oe).bytesPerElement:1,ri=Ue.get($).currentProgram.getUniforms();for(let an=0;an<St;an++)ri.setValue(I,"_gl_DrawID",an),ft.render($e[an]/yn,zt[an])}else if(X.isInstancedMesh)ft.renderInstances(dt,kt,X.count);else if(U.isInstancedBufferGeometry){const $e=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,zt=Math.min(U.instanceCount,$e);ft.renderInstances(dt,kt,zt)}else ft.render(dt,kt)};function ae(E,V,U){E.transparent===!0&&E.side===$n&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,gt(E,V,U),E.side=Ui,E.needsUpdate=!0,gt(E,V,U),E.side=$n):gt(E,V,U)}this.compile=function(E,V,U=null){U===null&&(U=E),p=Je.get(U),p.init(V),M.push(p),U.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),E!==U&&E.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const $=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ve=X.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const Ne=ve[Ee];ae(Ne,U,X),$.add(Ne)}else ae(ve,U,X),$.add(ve)}),M.pop(),p=null,$},this.compileAsync=function(E,V,U=null){const $=this.compile(E,V,U);return new Promise(X=>{function ve(){if($.forEach(function(Ee){Ue.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){X(E);return}setTimeout(ve,10)}je.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let _e=null;function be(E){_e&&_e(E)}function J(){Ke.stop()}function de(){Ke.start()}const Ke=new Ld;Ke.setAnimationLoop(be),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(E){_e=E,ie.setAnimationLoop(E),E===null?Ke.stop():Ke.start()},ie.addEventListener("sessionstart",J),ie.addEventListener("sessionend",de),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,V,B),p=Je.get(E,M.length),p.init(V),M.push(p),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(me),Q=this.localClippingEnabled,oe=ge.init(this.clippingPlanes,Q),m=Pe.get(E,y.length),m.init(),y.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ve=b.xr.getDepthSensingMesh();ve!==null&&le(ve,V,-1/0,b.sortObjects)}le(E,V,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(A,N),qe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,qe&&Ae.addToRenderList(m,E),this.info.render.frame++,oe===!0&&ge.beginShadows();const U=p.state.shadowsArray;fe.render(U,E,V),oe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,X=m.transmissive;if(p.setupLights(),V.isArrayCamera){const ve=V.cameras;if(X.length>0)for(let Ee=0,Ne=ve.length;Ee<Ne;Ee++){const Oe=ve[Ee];Me($,X,E,Oe)}qe&&Ae.render(E);for(let Ee=0,Ne=ve.length;Ee<Ne;Ee++){const Oe=ve[Ee];ke(m,E,Oe,Oe.viewport)}}else X.length>0&&Me($,X,E,V),qe&&Ae.render(E),ke(m,E,V);B!==null&&(C.updateMultisampleRenderTarget(B),C.updateRenderTargetMipmap(B)),E.isScene===!0&&E.onAfterRender(b,E,V),Mt.resetDefaultState(),w=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],oe===!0&&ge.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function le(E,V,U,$){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)U=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){$&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const Ee=se.update(E),Ne=E.material;Ne.visible&&m.push(E,Ee,Ne,U,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const Ee=se.update(E),Ne=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ge.copy(Ee.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Ne)){const Oe=Ee.groups;for(let Qe=0,et=Oe.length;Qe<et;Qe++){const He=Oe[Qe],dt=Ne[He.materialIndex];dt&&dt.visible&&m.push(E,Ee,dt,U,Ge.z,He)}}else Ne.visible&&m.push(E,Ee,Ne,U,Ge.z,null)}}const ve=E.children;for(let Ee=0,Ne=ve.length;Ee<Ne;Ee++)le(ve[Ee],V,U,$)}function ke(E,V,U,$){const X=E.opaque,ve=E.transmissive,Ee=E.transparent;p.setupLightsView(U),oe===!0&&ge.setGlobalState(b.clippingPlanes,U),$&&Be.viewport(D.copy($)),X.length>0&&We(X,V,U),ve.length>0&&We(ve,V,U),Ee.length>0&&We(Ee,V,U),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Me(E,V,U,$){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Fn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Qn:gi,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ve=p.state.transmissionRenderTarget[$.id],Ee=$.viewport||D;ve.setSize(Ee.z,Ee.w);const Ne=b.getRenderTarget();b.setRenderTarget(ve),b.getClearColor(ee),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),qe&&Ae.render(U);const Oe=b.toneMapping;b.toneMapping=Ii;const Qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),oe===!0&&ge.setGlobalState(b.clippingPlanes,$),We(E,U,$),C.updateMultisampleRenderTarget(ve),C.updateRenderTargetMipmap(ve),je.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let He=0,dt=V.length;He<dt;He++){const xt=V[He],kt=xt.object,Tt=xt.geometry,ft=xt.material,$e=xt.group;if(ft.side===$n&&kt.layers.test($.layers)){const zt=ft.side;ft.side=wn,ft.needsUpdate=!0,ht(kt,U,$,Tt,ft,$e),ft.side=zt,ft.needsUpdate=!0,et=!0}}et===!0&&(C.updateMultisampleRenderTarget(ve),C.updateRenderTargetMipmap(ve))}b.setRenderTarget(Ne),b.setClearColor(ee,Z),Qe!==void 0&&($.viewport=Qe),b.toneMapping=Oe}function We(E,V,U){const $=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ve=E.length;X<ve;X++){const Ee=E[X],Ne=Ee.object,Oe=Ee.geometry,Qe=$===null?Ee.material:$,et=Ee.group;Ne.layers.test(U.layers)&&ht(Ne,V,U,Oe,Qe,et)}}function ht(E,V,U,$,X,ve){E.onBeforeRender(b,V,U,$,X,ve),E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(b,V,U,$,E,ve),X.transparent===!0&&X.side===$n&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,b.renderBufferDirect(U,V,$,X,E,ve),X.side=Ui,X.needsUpdate=!0,b.renderBufferDirect(U,V,$,X,E,ve),X.side=$n):b.renderBufferDirect(U,V,$,X,E,ve),E.onAfterRender(b,V,U,$,X,ve)}function gt(E,V,U){V.isScene!==!0&&(V=ze);const $=Ue.get(E),X=p.state.lights,ve=p.state.shadowsArray,Ee=X.state.version,Ne=Te.getParameters(E,X.state,ve,V,U),Oe=Te.getProgramCacheKey(Ne);let Qe=$.programs;$.environment=E.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(E.isMeshStandardMaterial?W:_).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Qe===void 0&&(E.addEventListener("dispose",T),Qe=new Map,$.programs=Qe);let et=Qe.get(Oe);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Ee)return pt(E,Ne),et}else Ne.uniforms=Te.getUniforms(E),E.onBeforeCompile(Ne,b),et=Te.acquireProgram(Ne,Oe),Qe.set(Oe,et),$.uniforms=Ne.uniforms;const He=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ge.uniform),pt(E,Ne),$.needsLights=Yt(E),$.lightsStateVersion=Ee,$.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function lt(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=pa.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function pt(E,V){const U=Ue.get(E);U.outputColorSpace=V.outputColorSpace,U.batching=V.batching,U.batchingColor=V.batchingColor,U.instancing=V.instancing,U.instancingColor=V.instancingColor,U.instancingMorph=V.instancingMorph,U.skinning=V.skinning,U.morphTargets=V.morphTargets,U.morphNormals=V.morphNormals,U.morphColors=V.morphColors,U.morphTargetsCount=V.morphTargetsCount,U.numClippingPlanes=V.numClippingPlanes,U.numIntersection=V.numClipIntersection,U.vertexAlphas=V.vertexAlphas,U.vertexTangents=V.vertexTangents,U.toneMapping=V.toneMapping}function Nt(E,V,U,$,X){V.isScene!==!0&&(V=ze),C.resetTextureUnits();const ve=V.fog,Ee=$.isMeshStandardMaterial?V.environment:null,Ne=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Br,Oe=($.isMeshStandardMaterial?W:_).get($.envMap||Ee),Qe=$.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,et=!!U.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!U.morphAttributes.position,dt=!!U.morphAttributes.normal,xt=!!U.morphAttributes.color;let kt=Ii;$.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(kt=b.toneMapping);const Tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ft=Tt!==void 0?Tt.length:0,$e=Ue.get($),zt=p.state.lights;if(oe===!0&&(Q===!0||E!==S)){const nn=E===S&&$.id===w;ge.setState($,E,nn)}let St=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==zt.state.version||$e.outputColorSpace!==Ne||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==Oe||$.fog===!0&&$e.fog!==ve||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ge.numPlanes||$e.numIntersection!==ge.numIntersection)||$e.vertexAlphas!==Qe||$e.vertexTangents!==et||$e.morphTargets!==He||$e.morphNormals!==dt||$e.morphColors!==xt||$e.toneMapping!==kt||$e.morphTargetsCount!==ft)&&(St=!0):(St=!0,$e.__version=$.version);let yn=$e.currentProgram;St===!0&&(yn=gt($,V,X));let ri=!1,an=!1,_i=!1;const mt=yn.getUniforms(),on=$e.uniforms;if(Be.useProgram(yn.program)&&(ri=!0,an=!0,_i=!0),$.id!==w&&(w=$.id,an=!0),ri||S!==E){Be.buffers.depth.getReversed()?(xe.copy(E.projectionMatrix),zp(xe),Vp(xe),mt.setValue(I,"projectionMatrix",xe)):mt.setValue(I,"projectionMatrix",E.projectionMatrix),mt.setValue(I,"viewMatrix",E.matrixWorldInverse);const ln=mt.map.cameraPosition;ln!==void 0&&ln.setValue(I,Ve.setFromMatrixPosition(E.matrixWorld)),Ze.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,an=!0,_i=!0)}if(X.isSkinnedMesh){mt.setOptional(I,X,"bindMatrix"),mt.setOptional(I,X,"bindMatrixInverse");const nn=X.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),mt.setValue(I,"boneTexture",nn.boneTexture,C))}X.isBatchedMesh&&(mt.setOptional(I,X,"batchingTexture"),mt.setValue(I,"batchingTexture",X._matricesTexture,C),mt.setOptional(I,X,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",X._indirectTexture,C),mt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",X._colorsTexture,C));const Mn=U.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Xe.update(X,U,yn),(an||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,mt.setValue(I,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(on.envMap.value=Oe,on.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(on.envMapIntensity.value=V.environmentIntensity),an&&(mt.setValue(I,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&It(on,_i),ve&&$.fog===!0&&ye.refreshFogUniforms(on,ve),ye.refreshMaterialUniforms(on,$,x,O,p.state.transmissionRenderTarget[E.id]),pa.upload(I,lt($e),on,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pa.upload(I,lt($e),on,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(I,"center",X.center),mt.setValue(I,"modelViewMatrix",X.modelViewMatrix),mt.setValue(I,"normalMatrix",X.normalMatrix),mt.setValue(I,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const nn=$.uniformsGroups;for(let ln=0,Bi=nn.length;ln<Bi;ln++){const ki=nn[ln];H.update(ki,yn),H.bind(ki,yn)}}return yn}function It(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Yt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,V,U){Ue.get(E.texture).__webglTexture=V,Ue.get(E.depthTexture).__webglTexture=U;const $=Ue.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=U===void 0,$.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,V){const U=Ue.get(E);U.__webglFramebuffer=V,U.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,U=0){B=E,R=V,L=U;let $=!0,X=null,ve=!1,Ee=!1;if(E){const Oe=Ue.get(E);if(Oe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Oe.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Oe.__hasExternalTextures)C.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Oe.__boundDepthTexture!==He){if(He!==null&&Ue.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Qe=E.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ee=!0);const et=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(et[V])?X=et[V][U]:X=et[V],ve=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?X=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(et)?X=et[U]:X=et,D.copy(E.viewport),K.copy(E.scissor),j=E.scissorTest}else D.copy(k).multiplyScalar(x).floor(),K.copy(ne).multiplyScalar(x).floor(),j=Ce;if(Be.bindFramebuffer(I.FRAMEBUFFER,X)&&$&&Be.drawBuffers(E,X),Be.viewport(D),Be.scissor(K),Be.setScissorTest(j),ve){const Oe=Ue.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe.__webglTexture,U)}else if(Ee){const Oe=Ue.get(E.texture),Qe=V||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,U||0,Qe)}w=-1},this.readRenderTargetPixels=function(E,V,U,$,X,ve,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){Be.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const Oe=E.texture,Qe=Oe.format,et=Oe.type;if(!Ze.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-$&&U>=0&&U<=E.height-X&&I.readPixels(V,U,$,X,nt.convert(Qe),nt.convert(et),ve)}finally{const Oe=B!==null?Ue.get(B).__webglFramebuffer:null;Be.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,V,U,$,X,ve,Ee){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){const Oe=E.texture,Qe=Oe.format,et=Oe.type;if(!Ze.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=E.width-$&&U>=0&&U<=E.height-X){Be.bindFramebuffer(I.FRAMEBUFFER,Ne);const He=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(V,U,$,X,nt.convert(Qe),nt.convert(et),0);const dt=B!==null?Ue.get(B).__webglFramebuffer:null;Be.bindFramebuffer(I.FRAMEBUFFER,dt);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await kp(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(He),I.deleteSync(xt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,V=null,U=0){E.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-U),X=Math.floor(E.image.width*$),ve=Math.floor(E.image.height*$),Ee=V!==null?V.x:0,Ne=V!==null?V.y:0;C.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,U,0,0,Ee,Ne,X,ve),Be.unbindTexture()};const tn=I.createFramebuffer(),$t=I.createFramebuffer();this.copyTextureToTexture=function(E,V,U=null,$=null,X=0,ve=null){E.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],V=arguments[2],ve=arguments[3]||0,U=null),ve===null&&(X!==0?(wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=X,X=0):ve=0);let Ee,Ne,Oe,Qe,et,He,dt,xt,kt;const Tt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(U!==null)Ee=U.max.x-U.min.x,Ne=U.max.y-U.min.y,Oe=U.isBox3?U.max.z-U.min.z:1,Qe=U.min.x,et=U.min.y,He=U.isBox3?U.min.z:0;else{const Mn=Math.pow(2,-X);Ee=Math.floor(Tt.width*Mn),Ne=Math.floor(Tt.height*Mn),E.isDataArrayTexture?Oe=Tt.depth:E.isData3DTexture?Oe=Math.floor(Tt.depth*Mn):Oe=1,Qe=0,et=0,He=0}$!==null?(dt=$.x,xt=$.y,kt=$.z):(dt=0,xt=0,kt=0);const ft=nt.convert(V.format),$e=nt.convert(V.type);let zt;V.isData3DTexture?(C.setTexture3D(V,0),zt=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),zt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),zt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const St=I.getParameter(I.UNPACK_ROW_LENGTH),yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ri=I.getParameter(I.UNPACK_SKIP_PIXELS),an=I.getParameter(I.UNPACK_SKIP_ROWS),_i=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const mt=E.isDataArrayTexture||E.isData3DTexture,on=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Mn=Ue.get(E),nn=Ue.get(V),ln=Ue.get(Mn.__renderTarget),Bi=Ue.get(nn.__renderTarget);Be.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let ki=0;ki<Oe;ki++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.get(E).__webglTexture,X,He+ki),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.get(V).__webglTexture,ve,kt+ki)),I.blitFramebuffer(Qe,et,Ee,Ne,dt,xt,Ee,Ne,I.DEPTH_BUFFER_BIT,I.NEAREST);Be.bindFramebuffer(I.READ_FRAMEBUFFER,null),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Ue.has(E)){const Mn=Ue.get(E),nn=Ue.get(V);Be.bindFramebuffer(I.READ_FRAMEBUFFER,tn),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,$t);for(let ln=0;ln<Oe;ln++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mn.__webglTexture,X,He+ln):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mn.__webglTexture,X),on?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,ve,kt+ln):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,ve),X!==0?I.blitFramebuffer(Qe,et,Ee,Ne,dt,xt,Ee,Ne,I.COLOR_BUFFER_BIT,I.NEAREST):on?I.copyTexSubImage3D(zt,ve,dt,xt,kt+ln,Qe,et,Ee,Ne):I.copyTexSubImage2D(zt,ve,dt,xt,Qe,et,Ee,Ne);Be.bindFramebuffer(I.READ_FRAMEBUFFER,null),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else on?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(zt,ve,dt,xt,kt,Ee,Ne,Oe,ft,$e,Tt.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(zt,ve,dt,xt,kt,Ee,Ne,Oe,ft,Tt.data):I.texSubImage3D(zt,ve,dt,xt,kt,Ee,Ne,Oe,ft,$e,Tt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,dt,xt,Ee,Ne,ft,$e,Tt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,dt,xt,Tt.width,Tt.height,ft,Tt.data):I.texSubImage2D(I.TEXTURE_2D,ve,dt,xt,Ee,Ne,ft,$e,Tt);I.pixelStorei(I.UNPACK_ROW_LENGTH,St),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ri),I.pixelStorei(I.UNPACK_SKIP_ROWS,an),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_i),ve===0&&V.generateMipmaps&&I.generateMipmap(zt),Be.unbindTexture()},this.copyTextureToTexture3D=function(E,V,U=null,$=null,X=0){return E.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,$=arguments[1]||null,E=arguments[2],V=arguments[3],X=arguments[4]||0),wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,V,U,$,X)},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Be.unbindTexture()},this.resetState=function(){R=0,L=0,B=null,Be.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Bd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cv=new Na(-1,1,1,-1,0,1);class uv extends Cn{constructor(){super(),this.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fn([0,2,0,0,2,0],2))}}const dv=new uv;class Bl{constructor(e){this._mesh=new Dn(dv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hv extends jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _u extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class pv extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ot);this._width=i.width,this._height=i.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hv(Bd),this.copyPass.material.blending=Jn,this.clock=new wf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_u!==void 0&&(a instanceof _u?i=!0:a instanceof pv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mv extends jr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const gv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zr extends jr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(s,a,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Fn(s,a,{type:Qn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Fn(s,a,{type:Qn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=gv;this.highPassUniforms=_s.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ot(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Bd;this.copyUniforms=_s.clone(u.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Dl,this.fsQuad=new Bl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=zr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}zr.BlurDirectionX=new ot(1,0);zr.BlurDirectionY=new ot(0,1);const vv={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class _v extends jr{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Fn(1,1,{minFilter:bn,magFilter:bn,type:Qn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Pd,this.materialDepth.depthPacking=md,this.materialDepth.blending=Jn;const o=vv,l=_s.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new pn({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new Bl(this.materialBokeh),this._oldClearColor=new st}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const bv="linear basic scriabin colors",xv={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"rule-16",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:1},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:2},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:3},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:4},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:5},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:6},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:7},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:8},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:9},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:10},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:11},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:12},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:13},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:14},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:15}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],_disabled:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},yv={name:bv,params:xv},Mv="linear basic",Sv={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:0},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:1},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:2},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:3},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:4},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:5},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:6},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:7},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:8},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:9},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:10},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:11},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:12},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:13},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:14}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Ev={name:Mv,params:Sv},wv="linear colors",Cv={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"hsv pitch",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING / x coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(time/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"y-set-norm-frequency",group:"SPACING / y coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:2},{id:"amplitude brightness",group:"Appearance / brightness",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*2"}],order:3},{id:"thinning",group:"Appearance / brightness",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:4},{id:"background saturation",group:"Default / background color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:5},{id:"soft",group:"Appearance / size",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:6},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:7},{id:"luma",group:"",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",expression:"normFreq*255"}],order:8}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Tv={name:wv,params:Cv},Av="textured timbre colors",Rv={inputGain:.91,freqNormMin:16,freqNormMax:2e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"y-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time+10*binMagnitude)/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"z coordinate",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"normFreq-1-time"}],order:2},{id:"hue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"binPhaseDeviation"}],order:3},{id:"red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:4},{id:"green",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:5},{id:"blue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:6},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:7},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:8},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*1.5"}],order:10},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*0.5"}],order:11},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"1-spectralRolloff"}],order:12}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::Appearance"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"color",selectedGroupName:"color",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Pv={name:Av,params:Rv},Nv="linear timbre colors",Lv={inputGain:1.37,freqNormMin:16,freqNormMax:1e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:70,binAttackTimeNormMax:748,globalRmsNormMin:-63,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:2751488,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"topXZ",persistMode:1,ruleBlocks:[{id:"z-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"-(normFreq*1.4-0.9)*canvasHeightPx"}],order:0},{id:"bass z norm freq",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"z",expression:"(normFreq*3.5-0.5)*canvasHeightPx"}],order:1},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time)/audioLengthSec-0.5)*canvasWidthPx"}],order:2},{id:"y magnitude",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"binMagnitude*canvasHeightPx*0.5"}],order:3},{id:"bass z norm freq-2",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"y",expression:"-binMagnitude*canvasHeightPx*0.5"}],order:4},{id:"hue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"red",expression:"binAttackTime*10"}],order:5},{id:"hue-3",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"binFlux*10"}],order:6},{id:"hue-2",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",input:"binPhaseDeviation"}],order:7},{id:"bass red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"hue",input:"binFlux"}],order:8},{id:"red",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:9},{id:"green",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:10},{id:"blue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:11},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:12},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:13},{id:"bass bigger",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"size",expression:"pow((binMagnitude+1), 6)"}],order:14},{id:"bass transparent",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"opacity",expression:"pow(binMagnitude, 3)"}],order:15},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:16},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy)*(1+binPhaseDeviation*3)"}],order:17},{id:"brightness bass",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy)*(1+binPhaseDeviation*3)*0.25"}],order:18},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"0.2*binMagnitude"}],order:19},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"pow((binPhaseDeviation+1-spectralRolloff)*0.5, 1.4)"}],order:20}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::count","spawnedParticles::Appearance","spawnedParticles::SPACING"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Dv={name:Nv,params:Lv},Fv={menu:{file:"File",view:"View",settings:"Settings",rules:"Rules",collapse:"Collapse"},file:{project:"Project",projectNew:"New Project",projectLoad:"Load",projectSave:"Save",projectSaveAs:"Save As",presets:"Presets",presetLoad:"Load",presetUpload:"Upload",presetSave:"Save",presetSaveProject:"Save",presetSaveLocal:"Save Local",presetRemove:"Remove",presetSelectPlaceholder:"Select preset",presetNamePlaceholder:"Preset name",export:"Export",exportImage:"PNG",exportImageNoBg:"PNG transparent",exportVideo:"Video",exportObj:"OBJ"},view:{canvasSize:"Canvas Size",width:"Width",height:"Height",canvasZoom:"Canvas Zoom %",backgroundColor:"Background Color",cameraPosition:"Camera Position",cameraTarget:"Camera Target",cameraReset:"Reset Camera",cameraFit:"Fit",cameraClean:"Clean",projection:"Projection",projectionAxo:"Axonometry",projectionPerspective:"Perspective",axoPreset:"Axo Preset",axoIsometric:"Isometry",axoOrthoXY:"Orthogonal XY",axoOrthoXZ:"Orthogonal XZ",axoOrthoYZ:"Orthogonal YZ",angleOfView:"Angle Of View",blending:"Blending",postProcessing:"Post-Processing",postProcessingEnabled:"Enable Post-Processing",bloomEnabled:"Bloom Enabled",bloomStrength:"Bloom Strength",bloomRadius:"Bloom Radius",bloomThreshold:"Bloom Threshold",bokehEnabled:"Bokeh Enabled",bokehFocus:"Bokeh Focus",bokehAperture:"Bokeh Aperture",bokehMaxBlur:"Bokeh Max Blur",guides:"Guides",guideAxes:"Origin Axes",guideCoordinates:"Coordinate Guides",cameraHud:"Camera HUD"},settings:{sensitivity:"Sensitivity",audioResolution:"Audio Resolution",particleDefaultSize:"Default Size",particleCapacity:"Capacity",spawnRate:"Spawn Rate",activityInterval:"Activity Interval",frequencyRange:"Frequency Range",volume:"Volume",instability:"Instability",attackSharpness:"Attack Sharpness",energy:"Energy",sharpness:"Sharpness",activity:"Activity",noisiness:"Noisiness",sliders:"Sliders",normalizationRanges:"Normalization Ranges",resetDefaults:"Reset Defaults"},rules:{title:"Rules",condition:"Condition",addCondition:"If",when:"When",selectValue:"Select value",removeCondition:"Remove condition",always:"always",expression:"Expression",detailVariable:"Detail Variable",overallVariable:"Overall Variable",targetParticles:"Particles",targetLines:"Lines",targetBackground:"Background",targetCamera:"Camera",undefined:"undefined",insertVariable:"Insert variable...",detailVariables:"Detail Variables",overallVariables:"Overall Variables",mathPlaceholder:"Type math or number and add",addMath:"Add Math",clearTokens:"Clear",tokenEditorPlaceholder:"Build expression with variables and math actions",insertHere:"Insert",insertToken:"Insert token...",number:"Number",mathActions:"Math Actions",mathValue:"Value",mathAdd:"Add",mathSubtract:"Subtract",mathMultiply:"Multiply",mathDivide:"Divide",mathParentheses:"Parentheses"}},Iv=[{id:"binMagnitude",group:"detail",label:"Detail Volume",legacyName:"binMagnitude",description:"Per-frequency volume of the current bin."},{id:"binRMSEnergy",group:"detail",label:"Detail Energy",legacyName:"binRMSEnergy",description:"Per-frequency RMS energy for the current bin."},{id:"frequencyHz",group:"detail",label:"Frequency Hz",legacyName:"frequencyHz",description:"Physical frequency measured in Hz."},{id:"normFreq",group:"detail",label:"Frequency Normalized",legacyName:"normFreq",description:"Physical frequency normalized into a 0-1 range."},{id:"notePitchClass",group:"detail",label:"Musical Note",legacyName:"notePitchClass",description:"High value means a higher note within the chromatic scale."},{id:"pan",group:"detail",label:"Pan",legacyName:"pan",description:"Left-to-right stereo value."},{id:"octave",group:"detail",label:"Octave",legacyName:"octave",description:"High value means a higher register."},{id:"binAttackTime",group:"detail",label:"Attack Sharpness",legacyName:"binAttackTime",description:"High value means a very fast, snappy start to the sound."},{id:"binEnvelope",group:"detail",label:"Envelope",legacyName:"binEnvelope",description:"High value means the sound is currently at its loudest point in its cycle."},{id:"binEnvelopeState",group:"detail",label:"Envelope State",legacyName:"binEnvelopeState",description:"Current ADSR phase of a specific frequency bin."},{id:"binFlux",group:"detail",label:"Activity",legacyName:"binFlux",description:"High value means the sound or tone is changing rapidly."},{id:"binPhase",group:"detail",label:"Phase",legacyName:"binPhase",description:"High value means the wave is at the top of its cycle."},{id:"binPhaseDeviation",group:"detail",label:"Instability",legacyName:"binPhaseDeviation",description:"High value means phase is shifting unpredictably."},{id:"amplitude",group:"overall",label:"Volume",legacyName:"amplitude",description:"Volume of the current frame."},{id:"high",group:"overall",label:"High Tones",legacyName:"high",description:"Volume of the high frequency range."},{id:"mid",group:"overall",label:"Mid Tones",legacyName:"mid",description:"Volume of the mid frequency range."},{id:"bass",group:"overall",label:"Low Tones",legacyName:"bass",description:"Volume of the low frequency range."},{id:"deltaTime",group:"overall",label:"Delta Time",legacyName:"deltaTime",description:"Elapsed time between current frame and previous frame."},{id:"peakFreq",group:"overall",label:"Peak Frequency",legacyName:"peakFreq",description:"How high the loudest detected frequency is."},{id:"time",group:"overall",label:"Current Time",legacyName:"time",description:"Timestamp of the audio file."},{id:"chromagram",group:"overall",label:"Complexity",legacyName:"chromagram",description:"High value means a rich multi-note harmonic profile."},{id:"globalRmsEnergy",group:"overall",label:"Energy",legacyName:"globalRmsEnergy",description:"Average volume of the current frame."},{id:"inharmonicity",group:"overall",label:"Dissonance",legacyName:"inharmonicity",description:"High value means overtones are out of tune with the fundamental."},{id:"peakAmplitude",group:"overall",label:"Peak Volume",legacyName:"peakAmplitude",description:"High value means the loudest point is near maximum."},{id:"spectralCentroid",group:"overall",label:"Sharpness",legacyName:"spectralCentroid",description:"High value means a high-frequency dominant sound."},{id:"spectralFlatness",group:"overall",label:"Noisiness",legacyName:"spectralFlatness",description:"High value means noisy; low value means pure tone."},{id:"spectralFlux",group:"overall",label:"Activity",legacyName:"spectralFlux",description:"High value means sound is changing rapidly."},{id:"spectralRolloff",group:"overall",label:"Brightness",legacyName:"spectralRolloff",description:"High value means the sound includes many high frequencies."},{id:"spectralSkewness",group:"overall",label:"Imbalance",legacyName:"spectralSkewness",description:"High value means energy is weighted toward one end of the spectrum."},{id:"spectralSpread",group:"overall",label:"Spread",legacyName:"spectralSpread",description:"High value means the sound covers a wide frequency spread."},{id:"zeroCrossingRate",group:"overall",label:"Rattle",legacyName:"zeroCrossingRate",description:"High value means sharp high-frequency clatter."},{id:"canvasHeightPx",group:"overall",label:"Canvas Height",legacyName:"canvasHeightPx",description:"Canvas height measured in pixels."},{id:"canvasWidthPx",group:"overall",label:"Canvas Width",legacyName:"canvasWidthPx",description:"Canvas width measured in pixels."},{id:"audioLengthSec",group:"overall",label:"Audio Length",legacyName:"audioLengthSec",description:"Audio file length measured in seconds."}],Uv={uiText:Fv,ruleVariables:Iv},kd=Uv,Yr=Object.freeze(kd.ruleVariables||[]),he=Object.freeze(kd.uiText||{});function Vr(n){return Yr.filter(e=>e.group===n)}function cl(n){return Yr.find(e=>e.id===n)||null}const Ov=Object.freeze({binMagnitude:[0,1],binPhase:[0,1],binFlux:[-1,1],binPhaseDeviation:[0,1],binAttackTime:[0,1],binEnvelope:[0,3],binEnvelopeState:[0,3],binRMSEnergy:[0,1],frequencyHz:[0,22050],notePitchClass:[0,11],octave:[-2,12],normFreq:[0,1],pan:[-1,1],amplitude:[0,1],bass:[0,1],mid:[0,1],high:[0,1],peakFreq:[0,22050],globalRmsEnergy:[0,1],peakAmplitude:[0,1],zeroCrossingRate:[0,1],spectralCentroid:[0,1],spectralFlux:[0,1],spectralFlatness:[0,1],spectralRolloff:[0,1],spectralSpread:[0,1],spectralSkewness:[0,1],chromagram:[0,1],inharmonicity:[0,1],time:[0,Number.POSITIVE_INFINITY],deltaTime:[0,1],canvasWidthPx:[0,Number.POSITIVE_INFINITY],canvasHeightPx:[0,Number.POSITIVE_INFINITY],canvasWidthUnits:[0,Number.POSITIVE_INFINITY],canvasHeightUnits:[0,Number.POSITIVE_INFINITY],canvasWidth:[0,Number.POSITIVE_INFINITY],canvasHeight:[0,Number.POSITIVE_INFINITY],audioLengthSec:[0,Number.POSITIVE_INFINITY]}),Bv=[{id:"canvasWidth",group:"overall",label:"Canvas Width",legacyName:"canvasWidth",description:"Legacy alias of canvasWidthPx."},{id:"canvasHeight",group:"overall",label:"Canvas Height",legacyName:"canvasHeight",description:"Legacy alias of canvasHeightPx."}],kv=Yr.concat(Bv).map(n=>({id:n.id,type:"number",range:Ov[n.id]||[0,1],category:n.group,label:n.label,legacyName:n.legacyName,description:n.description})),zv=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","lines","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","lines","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","lines","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"targetX",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetY",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetZ",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"angleOfView",type:"number",range:[20,120],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","lines","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]},{id:"length",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"direction",type:"enum",values:["x","y","z"],targets:["lines"]},{id:"thickness",type:"number",range:[0,64],targets:["lines"]},{id:"lineCount",type:"number",range:[0,1],targets:["lines"]}],kl=Object.freeze(["spawnedParticles","allParticles","lines","background","camera"]),zd=Object.freeze(["spawnedOnly","allLivingFrame"]),Vd=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),Hd=Object.freeze(["always",">",">=","<","<=","==","!="]),Da=Object.freeze({version:1,entries:Object.freeze(kv.map(n=>Object.freeze({...n})))}),zl=Object.freeze({version:1,entries:Object.freeze(zv.map(n=>Object.freeze({...n})))});new Map(Da.entries.map(n=>[n.id,n]));new Map(zl.entries.map(n=>[n.id,n]));function Vv(){return Da}function Hv(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Gv(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function bu(n,e){if(typeof n!="string")return null;const t=Gv(n);if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!Hv(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),s=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of s)if(!i.has(a))return`Expression references unknown identifier: ${a}`;return null}function Gd(n){return(n==null?void 0:n.target)==="physicalParticles"?"__legacy_physical_particles__":kl.includes(n==null?void 0:n.target)?n.target:String((n==null?void 0:n.context)||"").toLowerCase().includes("line")?"lines":(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Wv(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:kl).includes(e)}function Xv(n,e={input:Da,output:zl}){var d,h,f,g,v;const t=[],i=[],r=[],s=new Map((((d=e.input)==null?void 0:d.entries)??[]).map(m=>[m.id,m])),a=new Map((((h=e.output)==null?void 0:h.entries)??[]).map(m=>[m.id,m]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};zd.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=Gd(n);if(kl.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(f=n.condition)!=null&&f.operator&&!Hd.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((g=n.condition)==null?void 0:g.expression)!==void 0){const m=bu(n.condition.expression,s);m&&t.push(`Condition expression invalid: ${m}`)}const l=(v=n.condition)==null?void 0:v.input;l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((m,p)=>{const y=m==null?void 0:m.output;if(!y||!a.has(y)){t.push(`Unknown action output at index ${p}: ${String(y)}`);return}const M=a.get(y);if(Wv(M,o)||t.push(`Output ${y} is not valid for target ${o} at index ${p}`),m!=null&&m.operator&&!Vd.includes(m.operator)&&t.push(`Unknown action operator at index ${p}: ${String(m.operator)}`),M.type==="enum"&&(m==null?void 0:m.value)!==void 0&&!M.values.includes(m.value)&&t.push(`Invalid enum value for ${y} at index ${p}: ${String(m.value)}. Allowed: ${M.values.join("|")}`),(m==null?void 0:m.operator)==="set"){const P=u.get(y);P!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:y,overriddenActionIndex:P,winningActionIndex:P,resolution:"first-executes"}),i.push(`Contradiction on ${y}: action ${P} takes precedence; later action ${p} is ignored.`)),u.set(y,p)}const b=m==null?void 0:m.input;if(b&&!s.has(b)&&t.push(`Unknown action input at index ${p}: ${b}`),(m==null?void 0:m.expression)!==void 0){const P=bu(m.expression,s);P&&t.push(`Action expression invalid at index ${p}: ${P}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function Wd(n,e={input:Da,output:zl}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{var c,u,d;const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,sectionDisabled:(s==null?void 0:s.sectionDisabled)===!0,target:Gd(s),scope:zd.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(h=>({...h})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),Hd.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=String(o.condition.input)),(u=o.condition)!=null&&u.valueInput&&(o.condition.valueInput=String(o.condition.valueInput)),typeof((d=o.condition)==null?void 0:d.expression)=="string"&&(o.condition.expression=o.condition.expression),o.scope=o.target==="spawnedParticles"||o.target==="lines"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(h=>h&&typeof h=="object").map(h=>({operator:Vd.includes(h.operator)?h.operator:"set",output:h.output,value:h.value,input:h.input,expression:h.expression}));const l=Xv(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const qv="seesound_user_defaults_v4",Xd="seesound_disabled_v4",qd="seesound_user_presets_v1",jd="seesound_hidden_root_presets_v1",jv=Object.assign({"../../../presets/linear basic scriabin colors.json":yv,"../../../presets/linear basic.json":Ev,"../../../presets/linear colors.json":Tv,"../../../presets/linear textured.json":Pv,"../../../presets/linear timbre colors.json":Dv}),ya=1,Yv={logCompilerStatus:!1,logCompilerTiming:!1},bs=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:ya,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],standaloneGroups:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""}});function Fa(n){const e=n&&typeof n=="object"?n:{};return{collapsedGroups:Array.isArray(e.collapsedGroups)?e.collapsedGroups.map(t=>String(t||"").trim()).filter(Boolean):[],collapsedSubgroups:[],collapsedRules:Array.isArray(e.collapsedRules)?e.collapsedRules.map(t=>String(t||"").trim()).filter(Boolean):[],selectedContextGroup:String(e.selectedContextGroup||"spawnedParticles"),selectedGroupPath:String(e.selectedGroupPath||e.selectedGroupName||""),selectedGroupName:String(e.selectedGroupPath||e.selectedGroupName||""),selectedSubgroup:"",standaloneGroups:Array.isArray(e.standaloneGroups)?e.standaloneGroups.map(t=>String(t||"").trim()).filter(Boolean):[]}}function Vl(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",s=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:s}}).filter(Boolean):[]}function dn({key:n,label:e,min:t,max:i,step:r,def:s,unit:a,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:s,unit:a,desc:o,canDisable:!1}}const Hl=[{key:"inputGain",group:"inputGain",label:"Sensitivity",min:0,max:3,step:.01,default:1,unit:"×",desc:"Global input gain scaler applied before analysis and spawning.",canDisable:!1},{key:"freqNormMin",group:"inputProcessing",label:"Frequency Range Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for frequency normalization.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Frequency Range Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for frequency normalization.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"Audio Resolution",default:2048,unit:"",desc:"FFT analysis size. Higher values increase frequency detail.",isDropdown:!0,dropdownOptions:[{label:"512",value:512},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},{key:"fluxWindowFrames",group:"inputProcessing",label:"Activity Interval",min:1,max:64,step:1,default:10,unit:"frames",desc:"Rolling frame window used to smooth activity detection.",canDisable:!1},dn({key:"binMagnitudeNormMin",label:"Volume Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalization lower bound for per-bin volume."}),dn({key:"binMagnitudeNormMax",label:"Volume Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for per-bin volume."}),dn({key:"binFluxNormMin",label:"Activity Detail Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalization lower bound for per-frequency activity."}),dn({key:"binFluxNormMax",label:"Activity Detail Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalization upper bound for per-frequency activity."}),dn({key:"binPhaseDeviationNormMin",label:"Instability Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalization lower bound for per-bin instability."}),dn({key:"binPhaseDeviationNormMax",label:"Instability Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalization upper bound for per-bin instability."}),dn({key:"binAttackTimeNormMin",label:"Attack Sharpness Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalization lower bound for per-bin attack sharpness."}),dn({key:"binAttackTimeNormMax",label:"Attack Sharpness Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalization upper bound for per-bin attack sharpness."}),dn({key:"globalRmsNormMin",label:"Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalization lower bound for frame energy."}),dn({key:"globalRmsNormMax",label:"Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for frame energy."}),dn({key:"spectralCentroidNormMin",label:"Sharpness Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalization lower bound for spectral sharpness."}),dn({key:"spectralCentroidNormMax",label:"Sharpness Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalization upper bound for spectral sharpness."}),dn({key:"globalSpectralFluxNormMin",label:"Activity Global Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalization lower bound for frame-level activity."}),dn({key:"globalSpectralFluxNormMax",label:"Activity Global Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalization upper bound for frame-level activity."}),dn({key:"spectralFlatnessNormMin",label:"Noisiness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalization lower bound for spectral noisiness."}),dn({key:"spectralFlatnessNormMax",label:"Noisiness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalization upper bound for spectral noisiness."}),{key:"defaultParticleSize",group:"geometry",label:"Default Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Capacity",min:1e5,max:5e6,step:1e3,default:1e6,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particlesByFrame",group:"geometry",label:"Spawn Rate",min:100,max:5e3,step:1,default:1e3,unit:"N",desc:"Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"cameraPosX",group:"mixing",label:"Camera Position X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position X in world units.",canDisable:!1},{key:"cameraPosY",group:"mixing",label:"Camera Position Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position Y in world units.",canDisable:!1},{key:"cameraPosZ",group:"mixing",label:"Camera Position Z",min:-5e3,max:5e3,step:1,default:420,unit:"u",desc:"Camera position Z in world units.",canDisable:!1},{key:"cameraTargetX",group:"mixing",label:"Camera Target X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target X in world units.",canDisable:!1},{key:"cameraTargetY",group:"mixing",label:"Camera Target Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Y in world units.",canDisable:!1},{key:"cameraTargetZ",group:"mixing",label:"Camera Target Z",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Z in world units.",canDisable:!1},{key:"cameraAngleOfView",group:"mixing",label:"Angle Of View",min:20,max:120,step:1,default:55,unit:"deg",desc:"Perspective camera field of view in degrees.",canDisable:!1},{key:"postProcessEnabled",group:"mixing",label:"Post-Processing",min:0,max:1,step:1,default:0,unit:"",desc:"Master switch for all post-processing effects.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomEnabled",group:"mixing",label:"Bloom Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Unreal Bloom pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomStrength",group:"mixing",label:"Bloom Strength",min:0,max:4,step:.01,default:1.15,unit:"",desc:"Bloom intensity multiplier.",canDisable:!1},{key:"bloomRadius",group:"mixing",label:"Bloom Radius",min:0,max:2,step:.01,default:.7,unit:"",desc:"Bloom spread radius.",canDisable:!1},{key:"bloomThreshold",group:"mixing",label:"Bloom Threshold",min:0,max:1,step:.01,default:.18,unit:"",desc:"Luminance threshold before bloom is applied.",canDisable:!1},{key:"bokehEnabled",group:"mixing",label:"Bokeh Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Bokeh depth-of-field pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bokehFocus",group:"mixing",label:"Bokeh Focus",min:1,max:5e3,step:1,default:380,unit:"u",desc:"Bokeh focus distance.",canDisable:!1},{key:"bokehAperture",group:"mixing",label:"Bokeh Aperture",min:0,max:.001,step:1e-5,default:12e-5,unit:"",desc:"Bokeh aperture value.",canDisable:!1},{key:"bokehMaxBlur",group:"mixing",label:"Bokeh Max Blur",min:0,max:.1,step:5e-4,default:.01,unit:"",desc:"Maximum blur amount for bokeh pass.",canDisable:!1},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]},{key:"originSignEnabled",group:"mixing",label:"Origin Axes",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide origin axes guide.",isToggle:!0,toggleLabels:["Off","On"]},{key:"coordinateGuidesEnabled",group:"mixing",label:"Coordinate Guides",min:0,max:1,step:1,default:0,unit:"",desc:"Show/hide coordinate guide grids.",isToggle:!0,toggleLabels:["Off","On"]}];function $v(){try{return JSON.parse(localStorage.getItem(qv)||"{}")}catch{return{}}}function Zv(){try{return new Set(JSON.parse(localStorage.getItem(Xd)||"[]"))}catch{return new Set}}function nr(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=Wd(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:bs.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):bs.ruleSchemaVersion,t.palettes=Vl(e.palettes),t.ruleUiState=Fa(e.ruleUiState),r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Kv(){const n=nr($v()),e={};for(const t of Hl)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=Vl(n.palettes),e.ruleUiState=Fa(n.ruleUiState),e}const re=Kv(),ps=Zv(),di=[],Ia=[],xu=300;let xs=!1;function Jv(n){return JSON.parse(JSON.stringify(n))}function Gl(){return{params:Jv(re),disabled:[...ps]}}function Qv(n,e){if(!n||!e||JSON.stringify(n.params)!==JSON.stringify(e.params))return!1;const t=Array.isArray(n.disabled)?[...n.disabled].sort():[],i=Array.isArray(e.disabled)?[...e.disabled].sort():[];return JSON.stringify(t)===JSON.stringify(i)}function Yd(n){const e=nr((n&&typeof n=="object"?n.params:{})||{});for(const i of Object.keys(re))delete re[i];for(const[i,r]of Object.entries(e))re[i]=r,Qi(i,r);const t=new Set(Array.isArray(n==null?void 0:n.disabled)?n.disabled:[]);ps.clear();for(const i of t)ps.add(i);try{localStorage.setItem(Xd,JSON.stringify([...ps]))}catch{}Qi("disabled",null),Qi("*",e)}function Wl(){if(xs)return;const n=Gl(),e=di[di.length-1];e&&Qv(e,n)||(di.push(n),di.length>xu&&di.splice(0,di.length-xu),Ia.length=0)}function e_(){return di.length>0}function t_(){return Ia.length>0}function n_(){if(!e_())return!1;const n=di.pop(),e=Gl();Ia.push(e),xs=!0;try{Yd(n)}finally{xs=!1}return!0}function i_(){if(!t_())return!1;const n=Ia.pop(),e=Gl();di.push(e),xs=!0;try{Yd(n)}finally{xs=!1}return!0}const ul=new Set;function Xl(n){return ul.add(n),()=>ul.delete(n)}function Qi(n,e){for(const t of ul)try{t(re,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function Lt(n,e){Wl(),re[n]=e,Qi(n,e)}function rn(n){Wl();const e=n&&typeof n=="object"?n:{},t=nr({...re,...e}),i=Object.create(null),r=Object.keys(e);for(const l of r){const c=t[l];Object.is(re[l],c)||(re[l]=c,i[l]=c)}const s=["ruleBlocks","ruleEngineEnabled","ruleSchemaVersion","palettes","ruleUiState"];if(s.some(l=>Object.prototype.hasOwnProperty.call(e,l)))for(const l of s){const c=t[l];Object.is(re[l],c)||(re[l]=c,i[l]=c)}const o=Object.entries(i);if(o.length!==0){for(const[l,c]of o)Qi(l,c);Qi("*",i)}}function r_(){Wl();for(const n of Hl)re[n.key]=n.default;re.ruleBlocks=[],re.ruleEngineEnabled=!0,re.ruleSchemaVersion=ya,re.palettes=[],re.ruleUiState=Fa(bs.ruleUiState),Qi("*",null)}function ys(){const n=nr(re);return{...re,...n,_disabled:[...ps]}}function s_(n){const e=String(n||"").replace(/\\/g,"/");return e.slice(e.lastIndexOf("/")+1).replace(/\.json$/i,"")}function Ua(){try{const n=JSON.parse(localStorage.getItem(jd)||"[]");return Array.isArray(n)?new Set(n.map(e=>String(e||"").trim()).filter(Boolean)):new Set}catch{return new Set}}function $d(n){try{localStorage.setItem(jd,JSON.stringify([...n]))}catch{}}function Oa(){try{const n=JSON.parse(localStorage.getItem(qd)||"[]");if(!Array.isArray(n))return new Map;const e=new Map;for(const t of n){const i=String((t==null?void 0:t.name)||"").trim();i&&e.set(i,{name:i,params:Hr(t==null?void 0:t.params)})}return e}catch{return new Map}}function Zd(n){try{const e=[...n.values()].map(t=>({name:t.name,params:Hr(t.params)}));localStorage.setItem(qd,JSON.stringify(e))}catch{}}let ta=null;function ql(){if(ta)return ta;const n=new Map;for(const[e,t]of Object.entries(jv)){const i=t&&typeof t=="object"?t:{},r=String(i.name||s_(e)).trim();r&&n.set(r,{name:r,params:Hr(i.params)})}return ta=n,ta}function a_(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function o_(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function l_(n,e){if(e==null)return;if(n!=null&&n.isToggle)return o_(e,n.default);if(n!=null&&n.isDropdown){const r=a_(n).find(s=>String(s)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function Hr(n){try{const e=n&&typeof n=="object"?n:{},t={...e};for(const i of Hl){if(!Object.prototype.hasOwnProperty.call(e,i.key)||e[i.key]===void 0||e[i.key]===null){t[i.key]=i.default;continue}t[i.key]=l_(i,e[i.key])}return Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=bs.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=bs.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=Vl(e.palettes),t.ruleUiState=Fa(e.ruleUiState),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),nr(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),nr(n&&typeof n=="object"?n:{})}}async function dl(){const n=Ua(),e=[...ql().keys()].filter(i=>!n.has(i)),t=[...Oa().keys()];return[...new Set([...e,...t])].sort((i,r)=>i.localeCompare(r))}async function Ma(n,e){const t=String(n||"").trim();if(!t)return{ok:!1,error:"Preset name is required."};const i=Hr(e),r=Oa();r.set(t,{name:t,params:i}),Zd(r);const s=Ua();return s.delete(t)&&$d(s),{ok:!0,name:t,source:"localStorage"}}async function Kd(n){const e=String(n||"").trim();if(!e)return null;const t=Oa();if(t.has(e)){const a=t.get(e);return{name:a.name,params:Hr(a.params)}}if(Ua().has(e))return null;const r=ql();if(!r.has(e))return null;const s=r.get(e);try{return{name:s.name,params:Hr(s.params)}}catch(a){return console.warn("[Preset] load normalization failed, applying raw params:",a),{name:s.name,params:nr(s.params)}}}async function c_(n){const e=String(n||"").trim();if(!e)return{ok:!1,deleted:!1};const t=Oa();if(t.delete(e))return Zd(t),{ok:!0,deleted:!0,source:"localStorage"};if(ql().has(e)){const i=Ua();return i.add(e),$d(i),{ok:!0,deleted:!0,source:"hidden-root"}}return{ok:!1,deleted:!1}}var Ai;(function(n){n.Range="range",n.Steps="steps",n.Positions="positions",n.Count="count",n.Values="values"})(Ai||(Ai={}));var vn;(function(n){n[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue"})(vn||(vn={}));function u_(n){return Sa(n)&&typeof n.from=="function"}function Sa(n){return typeof n=="object"&&typeof n.to=="function"}function yu(n){n.parentElement.removeChild(n)}function hl(n){return n!=null}function Mu(n){n.preventDefault()}function d_(n){return n.filter(function(e){return this[e]?!1:this[e]=!0},{})}function h_(n,e){return Math.round(n/e)*e}function p_(n,e){var t=n.getBoundingClientRect(),i=n.ownerDocument,r=i.documentElement,s=Jd(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),e?t.top+s.y-r.clientTop:t.left+s.x-r.clientLeft}function Gn(n){return typeof n=="number"&&!isNaN(n)&&isFinite(n)}function Su(n,e,t){t>0&&(hn(n,e),setTimeout(function(){fa(n,e)},t))}function Eu(n){return Math.max(Math.min(n,100),0)}function Ba(n){return Array.isArray(n)?n:[n]}function f_(n){n=String(n);var e=n.split(".");return e.length>1?e[1].length:0}function hn(n,e){n.classList&&!/\s/.test(e)?n.classList.add(e):n.className+=" "+e}function fa(n,e){n.classList&&!/\s/.test(e)?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function m_(n,e){return n.classList?n.classList.contains(e):new RegExp("\\b"+e+"\\b").test(n.className)}function Jd(n){var e=window.pageXOffset!==void 0,t=(n.compatMode||"")==="CSS1Compat",i=e?window.pageXOffset:t?n.documentElement.scrollLeft:n.body.scrollLeft,r=e?window.pageYOffset:t?n.documentElement.scrollTop:n.body.scrollTop;return{x:i,y:r}}function g_(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function v_(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch{}return n}function __(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function jl(n,e){return 100/(e-n)}function pl(n,e,t){return e*100/(n[t+1]-n[t])}function b_(n,e){return pl(n,n[0]<0?e+Math.abs(n[0]):e-n[0],0)}function x_(n,e){return e*(n[1]-n[0])/100+n[0]}function Ms(n,e){for(var t=1;n>=e[t];)t+=1;return t}function y_(n,e,t){if(t>=n.slice(-1)[0])return 100;var i=Ms(t,n),r=n[i-1],s=n[i],a=e[i-1],o=e[i];return a+b_([r,s],t)/jl(a,o)}function M_(n,e,t){if(t>=100)return n.slice(-1)[0];var i=Ms(t,e),r=n[i-1],s=n[i],a=e[i-1],o=e[i];return x_([r,s],(t-a)*jl(a,o))}function S_(n,e,t,i){if(i===100)return i;var r=Ms(i,n),s=n[r-1],a=n[r];return t?i-s>(a-s)/2?a:s:e[r-1]?n[r-1]+h_(i-n[r-1],e[r-1]):i}var Qd=function(){function n(e,t,i){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=t;var r,s=[];for(Object.keys(e).forEach(function(a){s.push([Ba(e[a]),a])}),s.sort(function(a,o){return a[0][0]-o[0][0]}),r=0;r<s.length;r++)this.handleEntryPoint(s[r][1],s[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return n.prototype.getDistance=function(e){for(var t=[],i=0;i<this.xNumSteps.length-1;i++)t[i]=pl(this.xVal,e,i);return t},n.prototype.getAbsoluteDistance=function(e,t,i){var r=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[r+1];)r++;else e===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);!i&&e===this.xPct[r+1]&&r++,t===null&&(t=[]);var s,a=1,o=t[r],l=0,c=0,u=0,d=0;for(i?s=(e-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):s=(this.xPct[r+1]-e)/(this.xPct[r+1]-this.xPct[r]);o>0;)l=this.xPct[r+1+d]-this.xPct[r+d],t[r+d]*a+100-s*100>100?(c=l*s,a=(o-100*s)/t[r+d],s=1):(c=t[r+d]*l/100*a,a=0),i?(u=u-c,this.xPct.length+d>=1&&d--):(u=u+c,this.xPct.length-d>=1&&d++),o=t[r+d]*a;return e+u},n.prototype.toStepping=function(e){return e=y_(this.xVal,this.xPct,e),e},n.prototype.fromStepping=function(e){return M_(this.xVal,this.xPct,e)},n.prototype.getStep=function(e){return e=S_(this.xPct,this.xSteps,this.snap,e),e},n.prototype.getDefaultStep=function(e,t,i){var r=Ms(e,this.xPct);return(e===100||t&&e===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/i},n.prototype.getNearbySteps=function(e){var t=Ms(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},n.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(f_);return Math.max.apply(null,e)},n.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},n.prototype.convert=function(e){return this.getStep(this.toStepping(e))},n.prototype.handleEntryPoint=function(e,t){var i;if(e==="min"?i=0:e==="max"?i=100:i=parseFloat(e),!Gn(i)||!Gn(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(t[0]);var r=Number(t[1]);i?this.xSteps.push(isNaN(r)?!1:r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},n.prototype.handleStepPoint=function(e,t){if(t){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=pl([this.xVal[e],this.xVal[e+1]],t,0)/jl(this.xPct[e],this.xPct[e+1]);var i=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],r=Math.ceil(Number(i.toFixed(3))-1),s=this.xVal[e]+this.xNumSteps[e]*r;this.xHighestCompleteStep[e]=s}},n}(),wu={to:function(n){return n===void 0?"":n.toFixed(2)},from:Number},eh={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},wi={tooltips:".__tooltips",aria:".__aria"};function E_(n,e){if(!Gn(e))throw new Error("noUiSlider: 'step' is not numeric.");n.singleStep=e}function w_(n,e){if(!Gn(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");n.keyboardPageMultiplier=e}function C_(n,e){if(!Gn(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");n.keyboardMultiplier=e}function T_(n,e){if(!Gn(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");n.keyboardDefaultStep=e}function A_(n,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");n.spectrum=new Qd(e,n.snap||!1,n.singleStep)}function R_(n,e){if(e=Ba(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");n.handles=e.length,n.start=e}function P_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");n.snap=e}function N_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");n.animate=e}function L_(n,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");n.animationDuration=e}function th(n,e){var t=[!1],i;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(i=1;i<n.handles;i++)t.push(e);t.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==n.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t=e}n.connect=t}function D_(n,e){switch(e){case"horizontal":n.ort=0;break;case"vertical":n.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function nh(n,e){if(!Gn(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(n.margin=n.spectrum.getDistance(e))}function F_(n,e){if(!Gn(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(n.limit=n.spectrum.getDistance(e),!n.limit||n.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function I_(n,e){var t;if(!Gn(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||Gn(e[0])||Gn(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),n.padding=[n.spectrum.getDistance(e[0]),n.spectrum.getDistance(e[1])],t=0;t<n.spectrum.xNumSteps.length-1;t++)if(n.padding[0][t]<0||n.padding[1][t]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=n.spectrum.xVal[0],s=n.spectrum.xVal[n.spectrum.xVal.length-1];if(i/(s-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function U_(n,e){switch(e){case"ltr":n.dir=0;break;case"rtl":n.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function O_(n,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var t=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,s=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,l=e.indexOf("invert-connects")>=0,c=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(n.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");nh(n,n.start[1]-n.start[0])}if(l&&n.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(n.margin||n.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");n.events={tap:t||s,drag:i,dragAll:c,smoothSteps:u,fixed:r,snap:s,hover:a,unconstrained:o,invertConnects:l}}function B_(n,e){if(e!==!1)if(e===!0||Sa(e)){n.tooltips=[];for(var t=0;t<n.handles;t++)n.tooltips.push(e)}else{if(e=Ba(e),e.length!==n.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(i){if(typeof i!="boolean"&&!Sa(i))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),n.tooltips=e}}function k_(n,e){if(e.length!==n.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");n.handleAttributes=e}function z_(n,e){if(!Sa(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");n.ariaFormat=e}function V_(n,e){if(!u_(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");n.format=e}function H_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");n.keyboardSupport=e}function G_(n,e){n.documentElement=e}function W_(n,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");n.cssPrefix=e}function X_(n,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof n.cssPrefix=="string"?(n.cssClasses={},Object.keys(e).forEach(function(t){n.cssClasses[t]=n.cssPrefix+e[t]})):n.cssClasses=e}function ih(n){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:wu,format:wu},t={step:{r:!1,t:E_},keyboardPageMultiplier:{r:!1,t:w_},keyboardMultiplier:{r:!1,t:C_},keyboardDefaultStep:{r:!1,t:T_},start:{r:!0,t:R_},connect:{r:!0,t:th},direction:{r:!0,t:U_},snap:{r:!1,t:P_},animate:{r:!1,t:N_},animationDuration:{r:!1,t:L_},range:{r:!0,t:A_},orientation:{r:!1,t:D_},margin:{r:!1,t:nh},limit:{r:!1,t:F_},padding:{r:!1,t:I_},behaviour:{r:!0,t:O_},ariaFormat:{r:!1,t:z_},format:{r:!1,t:V_},tooltips:{r:!1,t:B_},keyboardSupport:{r:!0,t:H_},documentElement:{r:!1,t:G_},cssPrefix:{r:!0,t:W_},cssClasses:{r:!0,t:X_},handleAttributes:{r:!1,t:k_}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:eh,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};n.format&&!n.ariaFormat&&(n.ariaFormat=n.format),Object.keys(t).forEach(function(l){if(!hl(n[l])&&i[l]===void 0){if(t[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}t[l].t(e,hl(n[l])?n[l]:i[l])}),e.pips=n.pips;var r=document.createElement("div"),s=r.style.msTransform!==void 0,a=r.style.transform!==void 0;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function q_(n,e,t){var i=g_(),r=__(),s=r&&v_(),a=n,o,l,c,u,d,h,f=e.spectrum,g=[],v=[],m=[],p=0,y={},M=!1,b=n.ownerDocument,P=e.documentElement||b.documentElement,R=b.body,L=b.dir==="rtl"||e.ort===1?0:100;function B(T,z){var q=b.createElement("div");return z&&hn(q,z),T.appendChild(q),q}function w(T,z){var q=B(T,e.cssClasses.origin),ae=B(q,e.cssClasses.handle);if(B(ae,e.cssClasses.touchArea),ae.setAttribute("data-handle",String(z)),e.keyboardSupport&&(ae.setAttribute("tabindex","0"),ae.addEventListener("keydown",function(be){return Be(be,z)})),e.handleAttributes!==void 0){var _e=e.handleAttributes[z];Object.keys(_e).forEach(function(be){ae.setAttribute(be,_e[be])})}return ae.setAttribute("role","slider"),ae.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),z===0?hn(ae,e.cssClasses.handleLower):z===e.handles-1&&hn(ae,e.cssClasses.handleUpper),q.handle=ae,q}function S(T,z){return z?B(T,e.cssClasses.connect):!1}function D(T,z){l=B(z,e.cssClasses.connects),c=[],u=[],u.push(S(l,T[0]));for(var q=0;q<e.handles;q++)c.push(w(z,q)),m[q]=q,u.push(S(l,T[q+1]))}function K(T){hn(T,e.cssClasses.target),e.dir===0?hn(T,e.cssClasses.ltr):hn(T,e.cssClasses.rtl),e.ort===0?hn(T,e.cssClasses.horizontal):hn(T,e.cssClasses.vertical);var z=getComputedStyle(T).direction;return z==="rtl"?hn(T,e.cssClasses.textDirectionRtl):hn(T,e.cssClasses.textDirectionLtr),B(T,e.cssClasses.base)}function j(T,z){return!e.tooltips||!e.tooltips[z]?!1:B(T.firstChild,e.cssClasses.tooltip)}function ee(){return a.hasAttribute("disabled")}function Z(T){var z=c[T];return z.hasAttribute("disabled")}function Y(T){T!=null?(c[T].setAttribute("disabled",""),c[T].handle.removeAttribute("tabindex")):(a.setAttribute("disabled",""),c.forEach(function(z){z.handle.removeAttribute("tabindex")}))}function O(T){T!=null?(c[T].removeAttribute("disabled"),c[T].handle.setAttribute("tabindex","0")):(a.removeAttribute("disabled"),c.forEach(function(z){z.removeAttribute("disabled"),z.handle.setAttribute("tabindex","0")}))}function x(){h&&(_("update"+wi.tooltips),h.forEach(function(T){T&&yu(T)}),h=null)}function A(){x(),h=c.map(j),Ue("update"+wi.tooltips,function(T,z,q){if(!(!h||!e.tooltips)&&h[z]!==!1){var ae=T[z];e.tooltips[z]!==!0&&(ae=e.tooltips[z].to(q[z])),h[z].innerHTML=ae}})}function N(){_("update"+wi.aria),Ue("update"+wi.aria,function(T,z,q,ae,_e){m.forEach(function(be){var J=c[be],de=ce(v,be,0,!0,!0,!0),Ke=ce(v,be,100,!0,!0,!0),le=_e[be],ke=String(e.ariaFormat.to(q[be]));de=f.fromStepping(de).toFixed(1),Ke=f.fromStepping(Ke).toFixed(1),le=f.fromStepping(le).toFixed(1),J.children[0].setAttribute("aria-valuemin",de),J.children[0].setAttribute("aria-valuemax",Ke),J.children[0].setAttribute("aria-valuenow",le),J.children[0].setAttribute("aria-valuetext",ke)})})}function k(T){if(T.mode===Ai.Range||T.mode===Ai.Steps)return f.xVal;if(T.mode===Ai.Count){if(T.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var z=T.values-1,q=100/z,ae=[];z--;)ae[z]=z*q;return ae.push(100),ne(ae,T.stepped)}return T.mode===Ai.Positions?ne(T.values,T.stepped):T.mode===Ai.Values?T.stepped?T.values.map(function(_e){return f.fromStepping(f.getStep(f.toStepping(_e)))}):T.values:[]}function ne(T,z){return T.map(function(q){return f.fromStepping(z?f.getStep(q):q)})}function Ce(T){function z(le,ke){return Number((le+ke).toFixed(7))}var q=k(T),ae={},_e=f.xVal[0],be=f.xVal[f.xVal.length-1],J=!1,de=!1,Ke=0;return q=d_(q.slice().sort(function(le,ke){return le-ke})),q[0]!==_e&&(q.unshift(_e),J=!0),q[q.length-1]!==be&&(q.push(be),de=!0),q.forEach(function(le,ke){var Me,We,ht,gt=le,lt=q[ke+1],pt,Nt,It,Yt,tn,$t,E,V=T.mode===Ai.Steps;for(V&&(Me=f.xNumSteps[ke]),Me||(Me=lt-gt),lt===void 0&&(lt=gt),Me=Math.max(Me,1e-7),We=gt;We<=lt;We=z(We,Me)){for(pt=f.toStepping(We),Nt=pt-Ke,tn=Nt/(T.density||1),$t=Math.round(tn),E=Nt/$t,ht=1;ht<=$t;ht+=1)It=Ke+ht*E,ae[It.toFixed(5)]=[f.fromStepping(It),0];Yt=q.indexOf(We)>-1?vn.LargeValue:V?vn.SmallValue:vn.NoValue,!ke&&J&&We!==lt&&(Yt=0),We===lt&&de||(ae[pt.toFixed(5)]=[We,Yt]),Ke=pt}}),ae}function te(T,z,q){var ae,_e,be=b.createElement("div"),J=(ae={},ae[vn.None]="",ae[vn.NoValue]=e.cssClasses.valueNormal,ae[vn.LargeValue]=e.cssClasses.valueLarge,ae[vn.SmallValue]=e.cssClasses.valueSub,ae),de=(_e={},_e[vn.None]="",_e[vn.NoValue]=e.cssClasses.markerNormal,_e[vn.LargeValue]=e.cssClasses.markerLarge,_e[vn.SmallValue]=e.cssClasses.markerSub,_e),Ke=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],le=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];hn(be,e.cssClasses.pips),hn(be,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function ke(We,ht){var gt=ht===e.cssClasses.value,lt=gt?Ke:le,pt=gt?J:de;return ht+" "+lt[e.ort]+" "+pt[We]}function Me(We,ht,gt){if(gt=z?z(ht,gt):gt,gt!==vn.None){var lt=B(be,!1);lt.className=ke(gt,e.cssClasses.marker),lt.style[e.style]=We+"%",gt>vn.NoValue&&(lt=B(be,!1),lt.className=ke(gt,e.cssClasses.value),lt.setAttribute("data-value",String(ht)),lt.style[e.style]=We+"%",lt.innerHTML=String(q.to(ht)))}}return Object.keys(T).forEach(function(We){Me(We,T[We][0],T[We][1])}),be}function oe(){d&&(yu(d),d=null)}function Q(T){oe();var z=Ce(T),q=T.filter,ae=T.format||{to:function(_e){return String(Math.round(_e))}};return d=a.appendChild(te(z,q,ae)),d}function xe(){var T=o.getBoundingClientRect(),z="offset"+["Width","Height"][e.ort];return e.ort===0?T.width||o[z]:T.height||o[z]}function me(T,z,q,ae){var _e=function(J){var de=Ve(J,ae.pageOffset,ae.target||z);if(!de||ee()&&!ae.doNotReject||m_(a,e.cssClasses.tap)&&!ae.doNotReject||T===i.start&&de.buttons!==void 0&&de.buttons>1||ae.hover&&de.buttons)return!1;s||de.preventDefault(),de.calcPoint=de.points[e.ort],q(de,ae)},be=[];return T.split(" ").forEach(function(J){z.addEventListener(J,_e,s?{passive:!0}:!1),be.push([J,_e])}),be}function Ve(T,z,q){var ae=T.type.indexOf("touch")===0,_e=T.type.indexOf("mouse")===0,be=T.type.indexOf("pointer")===0,J=0,de=0;if(T.type.indexOf("MSPointer")===0&&(be=!0),T.type==="mousedown"&&!T.buttons&&!T.touches)return!1;if(ae){var Ke=function(Me){var We=Me.target;return We===q||q.contains(We)||T.composed&&T.composedPath().shift()===q};if(T.type==="touchstart"){var le=Array.prototype.filter.call(T.touches,Ke);if(le.length>1)return!1;J=le[0].pageX,de=le[0].pageY}else{var ke=Array.prototype.find.call(T.changedTouches,Ke);if(!ke)return!1;J=ke.pageX,de=ke.pageY}}return z=z||Jd(b),(_e||be)&&(J=T.clientX+z.x,de=T.clientY+z.y),T.pageOffset=z,T.points=[J,de],T.cursor=_e||be,T}function Ge(T){var z=T-p_(o,e.ort),q=z*100/xe();return q=Eu(q),e.dir?100-q:q}function ze(T){var z=100,q=!1;return c.forEach(function(ae,_e){if(!Z(_e)){var be=v[_e],J=Math.abs(be-T),de=J===100&&z===100,Ke=J<z,le=J<=z&&T>be;(Ke||le||de)&&(q=_e,z=J)}}),q}function qe(T,z){T.type==="mouseout"&&T.target.nodeName==="HTML"&&T.relatedTarget===null&&I(T,z)}function it(T,z){if(navigator.appVersion.indexOf("MSIE 9")===-1&&T.buttons===0&&z.buttonsProperty!==0)return I(T,z);var q=(e.dir?-1:1)*(T.calcPoint-z.startCalcPoint),ae=q*100/z.baseSize;se(q>0,ae,z.locations,z.handleNumbers,z.connect)}function I(T,z){z.handle&&(fa(z.handle,e.cssClasses.active),p-=1),z.listeners.forEach(function(q){P.removeEventListener(q[0],q[1])}),p===0&&(fa(a,e.cssClasses.drag),Pe(),T.cursor&&(R.style.cursor="",R.removeEventListener("selectstart",Mu))),e.events.smoothSteps&&(z.handleNumbers.forEach(function(q){Je(q,v[q],!0,!0,!1,!1)}),z.handleNumbers.forEach(function(q){W("update",q)})),z.handleNumbers.forEach(function(q){W("change",q),W("set",q),W("end",q)})}function yt(T,z){if(!z.handleNumbers.some(Z)){var q;if(z.handleNumbers.length===1){var ae=c[z.handleNumbers[0]];q=ae.children[0],p+=1,hn(q,e.cssClasses.active)}T.stopPropagation();var _e=[],be=me(i.move,P,it,{target:T.target,handle:q,connect:z.connect,listeners:_e,startCalcPoint:T.calcPoint,baseSize:xe(),pageOffset:T.pageOffset,handleNumbers:z.handleNumbers,buttonsProperty:T.buttons,locations:v.slice()}),J=me(i.end,P,I,{target:T.target,handle:q,listeners:_e,doNotReject:!0,handleNumbers:z.handleNumbers}),de=me("mouseout",P,qe,{target:T.target,handle:q,listeners:_e,doNotReject:!0,handleNumbers:z.handleNumbers});_e.push.apply(_e,be.concat(J,de)),T.cursor&&(R.style.cursor=getComputedStyle(T.target).cursor,c.length>1&&hn(a,e.cssClasses.drag),R.addEventListener("selectstart",Mu,!1)),z.handleNumbers.forEach(function(Ke){W("start",Ke)})}}function je(T){T.stopPropagation();var z=Ge(T.calcPoint),q=ze(z);q!==!1&&(e.events.snap||Su(a,e.cssClasses.tap,e.animationDuration),Je(q,z,!0,!0),Pe(),W("slide",q,!0),W("update",q,!0),e.events.snap?yt(T,{handleNumbers:[q]}):(W("change",q,!0),W("set",q,!0)))}function Ze(T){var z=Ge(T.calcPoint),q=f.getStep(z),ae=f.fromStepping(q);Object.keys(y).forEach(function(_e){_e.split(".")[0]==="hover"&&y[_e].forEach(function(be){be.call(we,ae)})})}function Be(T,z){if(ee()||Z(z))return!1;var q=["Left","Right"],ae=["Down","Up"],_e=["PageDown","PageUp"],be=["Home","End"];e.dir&&!e.ort?q.reverse():e.ort&&!e.dir&&(ae.reverse(),_e.reverse());var J=T.key.replace("Arrow",""),de=J===_e[0],Ke=J===_e[1],le=J===ae[0]||J===q[0]||de,ke=J===ae[1]||J===q[1]||Ke,Me=J===be[0],We=J===be[1];if(!le&&!ke&&!Me&&!We)return!0;T.preventDefault();var ht;if(ke||le){var gt=le?0:1,lt=Mt(z),pt=lt[gt];if(pt===null)return!1;pt===!1&&(pt=f.getDefaultStep(v[z],le,e.keyboardDefaultStep)),Ke||de?pt*=e.keyboardPageMultiplier:pt*=e.keyboardMultiplier,pt=Math.max(pt,1e-7),pt=(le?-1:1)*pt,ht=g[z]+pt}else We?ht=e.spectrum.xVal[e.spectrum.xVal.length-1]:ht=e.spectrum.xVal[0];return Je(z,f.toStepping(ht),!0,!0),W("slide",z),W("update",z),W("change",z),W("set",z),!1}function rt(T){T.fixed||c.forEach(function(z,q){me(i.start,z.children[0],yt,{handleNumbers:[q]})}),T.tap&&me(i.start,o,je,{}),T.hover&&me(i.move,o,Ze,{hover:!0}),T.drag&&u.forEach(function(z,q){if(!(z===!1||q===0||q===u.length-1)){var ae=c[q-1],_e=c[q],be=[z],J=[ae,_e],de=[q-1,q];hn(z,e.cssClasses.draggable),T.fixed&&(be.push(ae.children[0]),be.push(_e.children[0])),T.dragAll&&(J=c,de=m),be.forEach(function(Ke){me(i.start,Ke,yt,{handles:J,handleNumbers:de,connect:z})})}})}function Ue(T,z){y[T]=y[T]||[],y[T].push(z),T.split(".")[0]==="update"&&c.forEach(function(q,ae){W("update",ae)})}function C(T){return T===wi.aria||T===wi.tooltips}function _(T){var z=T&&T.split(".")[0],q=z?T.substring(z.length):T;Object.keys(y).forEach(function(ae){var _e=ae.split(".")[0],be=ae.substring(_e.length);(!z||z===_e)&&(!q||q===be)&&(!C(be)||q===be)&&delete y[ae]})}function W(T,z,q){Object.keys(y).forEach(function(ae){var _e=ae.split(".")[0];T===_e&&y[ae].forEach(function(be){be.call(we,g.map(e.format.to),z,g.slice(),q||!1,v.slice(),we)})})}function ce(T,z,q,ae,_e,be,J){var de;return c.length>1&&!e.events.unconstrained&&(ae&&z>0&&(de=f.getAbsoluteDistance(T[z-1],e.margin,!1),q=Math.max(q,de)),_e&&z<c.length-1&&(de=f.getAbsoluteDistance(T[z+1],e.margin,!0),q=Math.min(q,de))),c.length>1&&e.limit&&(ae&&z>0&&(de=f.getAbsoluteDistance(T[z-1],e.limit,!1),q=Math.min(q,de)),_e&&z<c.length-1&&(de=f.getAbsoluteDistance(T[z+1],e.limit,!0),q=Math.max(q,de))),e.padding&&(z===0&&(de=f.getAbsoluteDistance(0,e.padding[0],!1),q=Math.max(q,de)),z===c.length-1&&(de=f.getAbsoluteDistance(100,e.padding[1],!0),q=Math.min(q,de))),J||(q=f.getStep(q)),q=Eu(q),q===T[z]&&!be?!1:q}function ue(T,z){var q=e.ort;return(q?z:T)+", "+(q?T:z)}function se(T,z,q,ae,_e){var be=q.slice(),J=ae[0],de=e.events.smoothSteps,Ke=[!T,T],le=[T,!T];ae=ae.slice(),T&&ae.reverse(),ae.length>1?ae.forEach(function(Me,We){var ht=ce(be,Me,be[Me]+z,Ke[We],le[We],!1,de);ht===!1?z=0:(z=ht-be[Me],be[Me]=ht)}):Ke=le=[!0];var ke=!1;ae.forEach(function(Me,We){ke=Je(Me,q[Me]+z,Ke[We],le[We],!1,de)||ke}),ke&&(ae.forEach(function(Me){W("update",Me),W("slide",Me)}),_e!=null&&W("drag",J))}function Te(T,z){return e.dir?100-T-z:T}function ye(T,z){v[T]=z,g[T]=f.fromStepping(z);var q=Te(z,0)-L,ae="translate("+ue(q+"%","0")+")";if(c[T].style[e.transformRule]=ae,e.events.invertConnects&&v.length>1){var _e=v.every(function(be,J,de){return J===0||be>=de[J-1]});if(M!==!_e){pe();return}}ge(T),ge(T+1),M&&(ge(T-1),ge(T+2))}function Pe(){m.forEach(function(T){var z=v[T]>50?-1:1,q=3+(c.length+z*T);c[T].style.zIndex=String(q)})}function Je(T,z,q,ae,_e,be){return _e||(z=ce(v,T,z,q,ae,!1,be)),z===!1?!1:(ye(T,z),!0)}function ge(T){if(u[T]){var z=v.slice();M&&z.sort(function(de,Ke){return de-Ke});var q=0,ae=100;T!==0&&(q=z[T-1]),T!==u.length-1&&(ae=z[T]);var _e=ae-q,be="translate("+ue(Te(q,_e)+"%","0")+")",J="scale("+ue(_e/100,"1")+")";u[T].style[e.transformRule]=be+" "+J}}function fe(T,z){return T===null||T===!1||T===void 0||(typeof T=="number"&&(T=String(T)),T=e.format.from(T),T!==!1&&(T=f.toStepping(T)),T===!1||isNaN(T))?v[z]:T}function Ae(T,z,q){var ae=Ba(T),_e=v[0]===void 0;z=z===void 0?!0:z,e.animate&&!_e&&Su(a,e.cssClasses.tap,e.animationDuration),m.forEach(function(de){Je(de,fe(ae[de],de),!0,!1,q)});var be=m.length===1?0:1;if(_e&&f.hasNoSize()&&(q=!0,v[0]=0,m.length>1)){var J=100/(m.length-1);m.forEach(function(de){v[de]=de*J})}for(;be<m.length;++be)m.forEach(function(de){Je(de,v[de],!0,!0,q)});Pe(),m.forEach(function(de){W("update",de),ae[de]!==null&&z&&W("set",de)})}function Xe(T){Ae(e.start,T)}function Ie(T,z,q,ae){if(T=Number(T),!(T>=0&&T<m.length))throw new Error("noUiSlider: invalid handle number, got: "+T);Je(T,fe(z,T),!0,!0,ae),W("update",T),q&&W("set",T)}function tt(T){if(T===void 0&&(T=!1),T)return g.length===1?g[0]:g.slice(0);var z=g.map(e.format.to);return z.length===1?z[0]:z}function nt(){for(_(wi.aria),_(wi.tooltips),Object.keys(e.cssClasses).forEach(function(T){fa(a,e.cssClasses[T])});a.firstChild;)a.removeChild(a.firstChild);delete a.noUiSlider}function Mt(T){var z=v[T],q=f.getNearbySteps(z),ae=g[T],_e=q.thisStep.step,be=null;if(e.snap)return[ae-q.stepBefore.startValue||null,q.stepAfter.startValue-ae||null];_e!==!1&&ae+_e>q.stepAfter.startValue&&(_e=q.stepAfter.startValue-ae),ae>q.thisStep.startValue?be=q.thisStep.step:q.stepBefore.step===!1?be=!1:be=ae-q.stepBefore.highestStep,z===100?_e=null:z===0&&(be=null);var J=f.countStepDecimals();return _e!==null&&_e!==!1&&(_e=Number(_e.toFixed(J))),be!==null&&be!==!1&&(be=Number(be.toFixed(J))),[be,_e]}function H(){return m.map(Mt)}function Se(T,z){var q=tt(),ae=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];ae.forEach(function(be){T[be]!==void 0&&(t[be]=T[be])});var _e=ih(t);ae.forEach(function(be){T[be]!==void 0&&(e[be]=_e[be])}),f=_e.spectrum,e.margin=_e.margin,e.limit=_e.limit,e.padding=_e.padding,e.pips?Q(e.pips):oe(),e.tooltips?A():x(),v=[],Ae(hl(T.start)?T.start:q,z),T.connect&&ie()}function ie(){for(;l.firstChild;)l.removeChild(l.firstChild);for(var T=0;T<=e.handles;T++)u[T]=S(l,e.connect[T]),ge(T);rt({drag:e.events.drag,fixed:!0})}function pe(){M=!M,th(e,e.connect.map(function(T){return!T})),ie()}function Re(){o=K(a),D(e.connect,o),rt(e.events),Ae(e.start),e.pips&&Q(e.pips),e.tooltips&&A(),N()}Re();var we={destroy:nt,steps:H,on:Ue,off:_,get:tt,set:Ae,setHandle:Ie,reset:Xe,disable:Y,enable:O,__moveHandles:function(T,z,q){se(T,z,v,q)},options:t,updateOptions:Se,target:a,removePips:oe,removeTooltips:x,getPositions:function(){return v.slice()},getTooltips:function(){return h},getOrigins:function(){return c},pips:Q};return we}function j_(n,e){if(!n||!n.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+n);if(n.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var t=ih(e),i=q_(n,t,e);return n.noUiSlider=i,i}const Y_={__spectrum:Qd,cssClasses:eh,create:j_},$_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
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
</svg>`,eb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22Z" fill="#1C274C"/>\r
<path d="M9.01296 19.0472C8.72446 19.3176 8.27554 19.3176 7.98705 19.0472L5.98705 17.1722C5.68486 16.8889 5.66955 16.4142 5.95285 16.112C6.23615 15.8099 6.71077 15.7945 7.01296 16.0778L7.75 16.7688V13.5C7.75 13.0858 8.08579 12.75 8.5 12.75C8.91422 12.75 9.25 13.0858 9.25 13.5L9.25 16.7688L9.98705 16.0778C10.2892 15.7945 10.7639 15.8099 11.0472 16.112C11.3305 16.4142 11.3151 16.8889 11.013 17.1722L9.01296 19.0472Z" fill="#1C274C"/>\r
<path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#1C274C"/>\r
</svg>`,tb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22Z" fill="#1C274C"/>\r
<path d="M10.7022 14.2635C10.8477 13.8757 10.6512 13.4434 10.2633 13.298C9.8755 13.1525 9.44319 13.349 9.29775 13.7369L7.79775 17.7369C7.65231 18.1247 7.84882 18.557 8.23666 18.7024C8.6245 18.8479 9.05681 18.6514 9.20225 18.2635L10.7022 14.2635Z" fill="#1C274C"/>\r
<path d="M7.53033 14.5305C7.82322 14.2376 7.82322 13.7628 7.53033 13.4699C7.23744 13.177 6.76256 13.177 6.46967 13.4699L5.46967 14.4699C5.17678 14.7628 5.17678 15.2376 5.46967 15.5305L6.46967 16.5305C6.76256 16.8234 7.23744 16.8234 7.53033 16.5305C7.82322 16.2376 7.82322 15.7628 7.53033 15.4699L7.06066 15.0002L7.53033 14.5305Z" fill="#1C274C"/>\r
<path d="M12.0303 15.4699C11.7374 15.177 11.2626 15.177 10.9697 15.4699C10.6768 15.7628 10.6768 16.2376 10.9697 16.5305L11.4393 17.0002L10.9697 17.4699C10.6768 17.7628 10.6768 18.2376 10.9697 18.5305C11.2626 18.8234 11.7374 18.8234 12.0303 18.5305L13.0303 17.5305C13.3232 17.2376 13.3232 16.7628 13.0303 16.4699L12.0303 15.4699Z" fill="#1C274C"/>\r
<path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#1C274C"/>\r
</svg>`,nb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M11.9993 2C16.7133 2 19.0704 2 20.5348 3.46447C21.2923 4.22195 21.658 5.21824 21.8345 6.65598V10H2.16406V6.65598C2.3406 5.21824 2.70628 4.22195 3.46377 3.46447C4.92823 2 7.28525 2 11.9993 2Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14ZM12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V15.1893L10.0303 13.9697C9.73744 13.6768 9.26256 13.6768 8.96967 13.9697C8.67678 14.2626 8.67678 14.7374 8.96967 15.0303L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697C14.7374 13.6768 14.2626 13.6768 13.9697 13.9697L12.75 15.1893V11Z" fill="#1C274C"/>\r
</svg>`,ib=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M22 15.9998V14.9998C22 12.1714 21.9998 10.7576 21.1211 9.87891C20.2424 9.00023 18.8282 9.00023 15.9998 9.00023H7.99977C5.17135 9.00023 3.75713 9.00023 2.87845 9.87891C2 10.7574 2 12.1706 2 14.9976V14.9998V15.9998C2 18.8282 2 20.2424 2.87868 21.1211C3.75736 21.9998 5.17157 21.9998 8 21.9998H16H16C18.8284 21.9998 20.2426 21.9998 21.1213 21.1211C22 20.2424 22 18.8282 22 15.9998Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 4.02744L14.4306 5.98809C14.7001 6.30259 15.1736 6.33901 15.4881 6.06944C15.8026 5.79988 15.839 5.3264 15.5695 5.01191L12.5695 1.51191C12.427 1.34567 12.219 1.25 12 1.25C11.7811 1.25 11.5731 1.34567 11.4306 1.51191L8.43057 5.01191C8.161 5.3264 8.19743 5.79988 8.51192 6.06944C8.82641 6.33901 9.29989 6.30259 9.56946 5.98809L11.25 4.02744L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z" fill="#1C274C"/>\r
</svg>`,rb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#1C274C"/>\r
</svg>`,rh=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z" fill="#1C274C"/>\r
<path d="M8.50397 13.1766C7.91991 12.5566 6.94501 12.5241 6.32092 13.1038L5.51041 13.8566C5.20691 14.1385 4.73236 14.1209 4.45047 13.8174C4.16858 13.5139 4.1861 13.0394 4.4896 12.7575L5.3001 12.0047C6.52816 10.8641 8.44651 10.9281 9.59579 12.1481L12.2433 14.9584C12.5202 15.2523 12.9735 15.2919 13.2972 15.0504C14.4971 14.1553 16.1679 14.257 17.2503 15.2911L19.5181 17.4577C19.8176 17.7438 19.8284 18.2186 19.5423 18.5181C19.2562 18.8176 18.7814 18.8284 18.4819 18.5423L16.2141 16.3757C15.661 15.8473 14.8073 15.7953 14.1941 16.2527C13.2596 16.9499 11.9509 16.8356 11.1515 15.9869L8.50397 13.1766Z" fill="#1C274C"/>\r
<path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill="#1C274C"/>\r
</svg>`,sb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>\r
<circle cx="16" cy="8" r="2" stroke="#1C274C" stroke-width="1.5"/>\r
<path d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>`,ab=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z" fill="#1C274C"/>\r
<path d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z" fill="#1C274C"/>\r
</svg>`,ob=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.42229 20.6181C10.1779 21.5395 11.0557 22.0001 12 22.0001V12.0001L2.63802 7.07275C2.62423 7.09491 2.6107 7.11727 2.5974 7.13986C2 8.15436 2 9.41678 2 11.9416V12.0586C2 14.5834 2 15.8459 2.5974 16.8604C3.19479 17.8749 4.27063 18.4395 6.42229 19.5686L8.42229 20.6181Z" fill="#1C274C"/>\r
<path opacity="0.7" d="M17.5774 4.43152L15.5774 3.38197C13.8218 2.46066 12.944 2 11.9997 2C11.0554 2 10.1776 2.46066 8.42197 3.38197L6.42197 4.43152C4.31821 5.53552 3.24291 6.09982 2.6377 7.07264L11.9997 12L21.3617 7.07264C20.7564 6.09982 19.6811 5.53552 17.5774 4.43152Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M21.4026 7.13986C21.3893 7.11727 21.3758 7.09491 21.362 7.07275L12 12.0001V22.0001C12.9443 22.0001 13.8221 21.5395 15.5777 20.6181L17.5777 19.5686C19.7294 18.4395 20.8052 17.8749 21.4026 16.8604C22 15.8459 22 14.5834 22 12.0586V11.9416C22 9.41678 22 8.15436 21.4026 7.13986Z" fill="#1C274C"/>\r
</svg>`,lb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
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
</svg>`,cb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" fill="#1C274C"/>\r
</svg>`,vt="__none__",Cu=Object.freeze(["always",">",">=","<","<=","==","!="]),Tu=Object.freeze([{id:"file",label:he.menu.file},{id:"view",label:he.menu.view},{id:"settings",label:he.menu.settings},{id:"rules",label:he.menu.rules}]),ub=Object.freeze([512,1024,2048,4096,8192,16384]),db=Object.freeze([{key:"inputGain",label:he.settings.sensitivity,min:0,max:3,step:.01,tooltip:"Technical term: Input Gain. Scales all amplitude before analysis."},{key:"defaultParticleSize",label:he.settings.particleDefaultSize,min:1,max:40,step:.5,tooltip:"Technical term: Default Size. Base object size before rule outputs."},{key:"maxParticles",label:he.settings.particleCapacity,min:1e5,max:5e6,step:5e4,tooltip:"Technical term: Capacity. Total GPU object slots."},{key:"particlesByFrame",label:he.settings.spawnRate,min:100,max:5e3,step:1,tooltip:"Technical term: Objects By Frame. Number of log-frequency spawn buckets shared by light particles and lines."},{key:"fluxWindowFrames",label:he.settings.activityInterval,min:1,max:64,step:1,tooltip:"Technical term: Flux Window Frames. Rolling frame window for activity averaging."}]),hb=Object.freeze([{id:"frequencyRange",syncKeys:["freqNormMin","freqNormMax"],label:he.settings.frequencyRange,min:16,max:2e4,step:1,unit:"Hz",tooltip:"Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.",get:()=>({min:Number(re.freqNormMin??40),max:Number(re.freqNormMax??12e3)}),set:(n,e)=>rn({freqNormMin:n,freqNormMax:e})},{id:"volumeRange",syncKeys:["binMagnitudeNormMin","binMagnitudeNormMax"],label:he.settings.volume,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.",get:()=>({min:Number(re.binMagnitudeNormMin??-70),max:Number(re.binMagnitudeNormMax??0)}),set:(n,e)=>rn({binMagnitudeNormMin:n,binMagnitudeNormMax:e})},{id:"instabilityRange",syncKeys:["binPhaseDeviationNormMin","binPhaseDeviationNormMax"],label:he.settings.instability,min:0,max:Math.PI,step:.001,unit:"rad",tooltip:"Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.",get:()=>({min:Number(re.binPhaseDeviationNormMin??0),max:Number(re.binPhaseDeviationNormMax??Math.PI)}),set:(n,e)=>rn({binPhaseDeviationNormMin:n,binPhaseDeviationNormMax:e})},{id:"attackSharpnessRange",syncKeys:["binAttackTimeNormMin","binAttackTimeNormMax"],label:he.settings.attackSharpness,min:0,max:2e3,step:1,unit:"ms",tooltip:"Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.",get:()=>({min:Number(re.binAttackTimeNormMin??5),max:Number(re.binAttackTimeNormMax??500)}),set:(n,e)=>rn({binAttackTimeNormMin:n,binAttackTimeNormMax:e})},{id:"energyRange",syncKeys:["globalRmsNormMin","globalRmsNormMax"],label:he.settings.energy,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.",get:()=>({min:Number(re.globalRmsNormMin??-60),max:Number(re.globalRmsNormMax??0)}),set:(n,e)=>rn({globalRmsNormMin:n,globalRmsNormMax:e})},{id:"sharpnessRange",syncKeys:["spectralCentroidNormMin","spectralCentroidNormMax"],label:he.settings.sharpness,min:16,max:22050,step:1,unit:"Hz",tooltip:"Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.",get:()=>({min:Number(re.spectralCentroidNormMin??150),max:Number(re.spectralCentroidNormMax??8e3)}),set:(n,e)=>rn({spectralCentroidNormMin:n,spectralCentroidNormMax:e})},{id:"activityRange",syncKeys:["globalSpectralFluxNormMin","globalSpectralFluxNormMax","binFluxNormMin","binFluxNormMax"],label:he.settings.activity,min:0,max:200,step:.1,unit:"AU",tooltip:"Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.",get:()=>({min:Number(re.globalSpectralFluxNormMin??0),max:Number(re.globalSpectralFluxNormMax??100)}),set:(n,e)=>{rn({globalSpectralFluxNormMin:n,globalSpectralFluxNormMax:e,binFluxNormMin:n/100,binFluxNormMax:e/100})}},{id:"noisinessRange",syncKeys:["spectralFlatnessNormMin","spectralFlatnessNormMax"],label:he.settings.noisiness,min:0,max:1,step:.001,unit:"ratio",tooltip:"Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.",get:()=>({min:Number(re.spectralFlatnessNormMin??0),max:Number(re.spectralFlatnessNormMax??1)}),set:(n,e)=>rn({spectralFlatnessNormMin:n,spectralFlatnessNormMax:e})}]),Au=Object.freeze([{target:"spawnedParticles",section:"Light Particles",subgroup:"Position",output:"x",label:"X"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Position",output:"y",label:"Y"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Position",output:"z",label:"Z"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"size",label:"Size"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"shapeType",label:"Shape",type:"enum",options:["circle","square"]},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"particleCount",label:"Particle Count"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"red",label:"Red"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"green",label:"Green"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"spawnedParticles",section:"Light Particles",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"lines",section:"Lines",subgroup:"Position",output:"x",label:"X"},{target:"lines",section:"Lines",subgroup:"Position",output:"y",label:"Y"},{target:"lines",section:"Lines",subgroup:"Position",output:"z",label:"Z"},{target:"lines",section:"Lines",subgroup:"Position",output:"length",label:"Length"},{target:"lines",section:"Lines",subgroup:"Position",output:"direction",label:"Direction",type:"enum",options:["x","y","z"]},{target:"lines",section:"Lines",subgroup:"Appearance",output:"thickness",label:"Thickness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"lineCount",label:"Line Count"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"red",label:"Red"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"green",label:"Green"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"background",section:"Background",subgroup:"Appearance",output:"red",label:"Red"},{target:"background",section:"Background",subgroup:"Appearance",output:"green",label:"Green"},{target:"background",section:"Background",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"background",section:"Background",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"background",section:"Background",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"background",section:"Background",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"camera",section:"Camera",subgroup:"Position",output:"x",label:"Position X"},{target:"camera",section:"Camera",subgroup:"Position",output:"y",label:"Position Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"z",label:"Position Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetX",label:"Target X"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetY",label:"Target Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetZ",label:"Target Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"angleOfView",label:"Angle Of View"}]),oh=new Set(Yr.map(n=>n.id));new RegExp(`\\b(${Yr.map(n=>n.id.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")).sort((n,e)=>e.length-n.length).join("|")})\\b`,"g");const Ru=Object.freeze({file:$_,view:Z_,settings:K_,rules:J_}),Dt=Object.freeze({load:Q_,save:eb,savePreset:tb,saveAs:nb,upload:ib,remove:rb,exportImage:rh,exportImageNoBg:sb,exportVideo:ab,exportObj:ob,reset:sh,fit:ah,add:lb,duplicate:cb,clear:ml,clean:ml,close:fl}),lh=Object.freeze([{value:"math:add",label:"+"},{value:"math:subtract",label:"-"},{value:"math:multiply",label:"x"},{value:"math:divide",label:"÷"},{value:"math:openParen",label:"("},{value:"math:closeParen",label:")"},{value:"math:parentheses",label:"()"},{value:"math:power",label:"power"},{value:"math:clamp",label:"clamp"},{value:"math:average",label:"average"}]);function pb(){return{all:[],byKey:new Map}}function Wt(n,e,t=null){if(!(!n||typeof e!="function")){if(!Array.isArray(t)||t.length===0){n.all.push(e);return}for(const i of t){const r=String(i||"").trim();r&&(n.byKey.has(r)||n.byKey.set(r,[]),n.byKey.get(r).push(e))}}}function Pu(n){for(const e of n)try{e()}catch{}}function Nu(n,e=[],t=!1){var r;const i=new Set(t?(n==null?void 0:n.all)||[]:[]);for(const s of Array.isArray(e)?e:[]){const a=String(s||"").trim();if(!a)continue;const o=(r=n==null?void 0:n.byKey)==null?void 0:r.get(a);if(o)for(const l of o)i.add(l)}return[...i]}function F(n,e="",t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:s!=null&&i.setAttribute(r,String(s));return i}function Sn(n,e,t){const i=Number(n);return Number.isFinite(i)?Math.max(e,Math.min(t,i)):e}function fb(n,e,t){const i=Sn(Math.round(n),0,255).toString(16).padStart(2,"0"),r=Sn(Math.round(e),0,255).toString(16).padStart(2,"0"),s=Sn(Math.round(t),0,255).toString(16).padStart(2,"0");return`#${i}${r}${s}`}function mb(n,e,t){const i=(Number(n)%360+360)%360,r=Sn(Number(e)/100,0,1),s=Sn(Number(t)/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a/2;let c=0,u=0,d=0;return i<60?(c=a,u=o,d=0):i<120?(c=o,u=a,d=0):i<180?(c=0,u=a,d=o):i<240?(c=0,u=o,d=a):i<300?(c=o,u=0,d=a):(c=a,u=0,d=o),{r:Math.round((c+l)*255),g:Math.round((u+l)*255),b:Math.round((d+l)*255)}}function gb(n){const e=String(n||"").trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{6}$/.test(e))return{h:0,s:0,l:0};const t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,s=Math.max(t,i,r),a=Math.min(t,i,r),o=s-a;let l=0;o>0&&(s===t?l=60*((i-r)/o%6):s===i?l=60*((r-t)/o+2):l=60*((t-i)/o+4)),l<0&&(l+=360);const c=(s+a)/2,u=o===0?0:o/(1-Math.abs(2*c-1));return{h:l,s:u*100,l:c*100}}function Ht(n,e,t){if(!n||!e)return;const i=String(t||n.textContent||"").trim();n.textContent="",n.append(F("span","cp-btn-icon",{html:e}),F("span","cp-btn-label",{text:i})),n.setAttribute("aria-label",i)}function Yl(n){const e=String(n||""),t=cl(e);return{type:"pill",label:(t==null?void 0:t.label)||e,code:e}}function $l(n=0){const e=Number(n);return{type:"number",value:Number.isFinite(e)?e:0}}function Ot(n){return{type:"op",code:String(n||"")}}function kn(){return{type:"slot"}}function vb(n){return n==="math:add"?[Ot(" + ")]:n==="math:subtract"?[Ot(" - ")]:n==="math:multiply"?[Ot(" * ")]:n==="math:divide"?[Ot(" / ")]:n==="math:openParen"?[Ot("(")]:n==="math:closeParen"?[Ot(")")]:n==="math:parentheses"?[Ot("("),kn(),Ot(")")]:n==="math:power"?[Ot("pow("),kn(),Ot(", "),kn(),Ot(")")]:n==="math:clamp"?[Ot("clamp("),kn(),Ot(", "),kn(),Ot(", "),kn(),Ot(")")]:n==="math:average"?[Ot("avg("),kn(),Ot(", "),kn(),Ot(")")]:[kn()]}function Lu(n){return!n||typeof n!="object"?null:n.type==="pill"?Yl(n.code):n.type==="number"?$l(n.value):n.type==="op"?Ot(n.code):n.type==="slot"?kn():null}function ch(n){const e=[];for(const t of Array.isArray(n)?n:[])if(!(!t||typeof t!="object")){if(t.type==="pill"){e.push(String(t.code||""));continue}if(t.type==="number"){const i=Number(t.value);e.push(Number.isFinite(i)?String(i):"0");continue}t.type==="op"&&e.push(String(t.code||""))}return e.join("")}function _b(n){const e=String(n||"");if(!e.trim())return[];const t=new Set(Yr.map(a=>a.id)),i=/([A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[()+\-*/])/g,r=[];let s=0;for(const a of e.matchAll(i)){const o=Number(a.index);if(o>s){const c=e.slice(s,o);c.trim()&&r.push(Ot(c))}const l=String(a[0]||"");t.has(l)?r.push(Yl(l)):/^\d+(?:\.\d+)?$/.test(l)?r.push($l(Number(l))):r.push(Ot(["+","-","*","/"].includes(l)?` ${l} `:l)),s=o+l.length}if(s<e.length){const a=e.slice(s);a.trim()&&r.push(Ot(a))}return r.length||r.push(kn()),r}function bb(n=""){const e=F("select","cp-input-select cp-rule-token-insert-select");e.appendChild(F("option","",{value:"",text:he.rules.insertToken}));const t=document.createElement("optgroup");t.label=he.rules.detailVariables;for(const a of Vr("detail"))t.appendChild(F("option","",{value:`var:${a.id}`,text:a.label}));const i=document.createElement("optgroup");i.label=he.rules.overallVariables;for(const a of Vr("overall"))i.appendChild(F("option","",{value:`var:${a.id}`,text:a.label}));const r=document.createElement("optgroup");r.label=he.rules.number,r.appendChild(F("option","",{value:"number",text:he.rules.number}));const s=document.createElement("optgroup");s.label=he.rules.mathActions;for(const a of lh)s.appendChild(F("option","",{value:a.value,text:a.label}));return e.append(t,i,r,s),n&&(e.value=n),e}function xb(n=""){const e=F("select","cp-input-select cp-rule-token-action-select cp-rule-token-value-select");e.appendChild(F("option","",{value:"",text:he.rules.insertVariable}));const t=document.createElement("optgroup");t.label=he.rules.detailVariables;for(const s of Vr("detail"))t.appendChild(F("option","",{value:`var:${s.id}`,text:s.label}));const i=document.createElement("optgroup");i.label=he.rules.overallVariables;for(const s of Vr("overall"))i.appendChild(F("option","",{value:`var:${s.id}`,text:s.label}));const r=document.createElement("optgroup");return r.label=he.rules.number,r.appendChild(F("option","",{value:"number",text:he.rules.number})),e.append(r,t,i),n&&(e.value=n),e}function yb(n=""){const e=F("select","cp-input-select cp-rule-token-action-select cp-rule-token-math-select");e.appendChild(F("option","",{value:"",text:he.rules.mathActions}));for(const t of lh)e.appendChild(F("option","",{value:t.value,text:t.label}));return n&&(e.value=n),e}function uh(n){const e=String(n||"");return e?e.startsWith("var:")?[Yl(e.slice(4))]:e==="number"?[$l(0)]:e.startsWith("math:")?vb(e):[]:[]}function Mb(n){return(Array.isArray(n)?n:[]).some(e=>(e==null?void 0:e.type)==="slot")}function jn(n){var s,a;if(!(n!=null&&n.tokenEditor))return;const e=n.tokenEditor;e.innerHTML="";const t=Array.isArray(n.tokens)?n.tokens:[];(!Number.isInteger(n.pendingInsertIndex)||n.pendingInsertIndex<0||n.pendingInsertIndex>t.length)&&(n.pendingInsertIndex=null);const i=(o,l)=>{var f;const c=Number(o),u=Number(l);if(!Number.isInteger(c)||!Number.isInteger(u)||c<0||c>=n.tokens.length||u<0||u>n.tokens.length)return;const[d]=n.tokens.splice(c,1);let h=u;c<u&&(h-=1),n.tokens.splice(h,0,d),n.dragTokenIndex=null,jn(n),(f=n.onExpressionChanged)==null||f.call(n)},r=o=>{const l=F("div","cp-rule-token-gap"),c=F("button","cp-rule-token-gap-btn",{type:"button"});Ht(c,Dt.add,he.rules.insertHere),c.classList.toggle("is-armed",n.pendingInsertIndex===o),c.addEventListener("click",()=>{n.pendingInsertIndex=o,jn(n)}),l.addEventListener("dragover",u=>{Number.isInteger(n.dragTokenIndex)&&u.preventDefault()}),l.addEventListener("drop",u=>{Number.isInteger(n.dragTokenIndex)&&(u.preventDefault(),i(n.dragTokenIndex,o))}),l.appendChild(c),e.appendChild(l)};r(0),t.length===0&&e.appendChild(F("span","cp-rule-token-placeholder",{text:he.rules.tokenEditorPlaceholder}));for(let o=0;o<t.length;o++){const l=Lu(t[o]);if(!l)continue;if(n.tokens[o]=l,l.type==="slot"){const u=F("button","cp-rule-token-slot",{type:"button",text:he.rules.selectValue});if(u.draggable=!0,u.addEventListener("dragstart",d=>{var h;n.dragTokenIndex=o,(h=d.dataTransfer)==null||h.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.addEventListener("click",()=>{n.insertContext={mode:"replace",index:o},jn(n)}),e.appendChild(u),((s=n.insertContext)==null?void 0:s.mode)==="replace"&&((a=n.insertContext)==null?void 0:a.index)===o){const d=bb();d.classList.add("cp-rule-token-picker"),d.addEventListener("change",()=>{var f;const h=uh(d.value).map(Lu).filter(Boolean);h.length&&(n.tokens.splice(o,1,...h),n.insertContext=null,jn(n),(f=n.onExpressionChanged)==null||f.call(n))}),e.appendChild(d),requestAnimationFrame(()=>d.focus())}r(o+1);continue}if(l.type==="pill"){const u=F("button","cp-rule-token-pill",{type:"button",title:l.code});u.draggable=!0,u.addEventListener("dragstart",d=>{var h;n.dragTokenIndex=o,(h=d.dataTransfer)==null||h.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.append(F("span","cp-rule-token-pill-label",{text:l.label}),F("span","cp-rule-token-pill-remove",{html:fl})),u.addEventListener("click",()=>{var d;n.tokens.splice(o,1),jn(n),(d=n.onExpressionChanged)==null||d.call(n)}),e.appendChild(u),r(o+1);continue}if(l.type==="number"){const u=F("div","cp-rule-token-number-wrap");u.draggable=!0,u.addEventListener("dragstart",f=>{var g;n.dragTokenIndex=o,(g=f.dataTransfer)==null||g.setData("text/plain",String(o)),f.dataTransfer&&(f.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null});const d=F("input","cp-input-number cp-rule-token-number",{type:"number",step:.001,value:String(l.value??0)});d.addEventListener("change",()=>{var f;l.value=Number(d.value),(f=n.onExpressionChanged)==null||f.call(n)});const h=F("button","cp-rule-token-number-remove",{type:"button",title:"Remove token"});h.appendChild(F("span","cp-rule-token-pill-remove",{html:fl})),h.addEventListener("click",f=>{var g;f.preventDefault(),f.stopPropagation(),n.tokens.splice(o,1),jn(n),(g=n.onExpressionChanged)==null||g.call(n)}),u.append(d,h),e.appendChild(u),r(o+1);continue}const c=F("button","cp-rule-token-math",{type:"button",text:l.code.trim()||l.code});c.draggable=!0,c.addEventListener("dragstart",u=>{var d;n.dragTokenIndex=o,(d=u.dataTransfer)==null||d.setData("text/plain",String(o)),u.dataTransfer&&(u.dataTransfer.effectAllowed="move")}),c.addEventListener("dragend",()=>{n.dragTokenIndex=null}),c.addEventListener("click",()=>{var u;n.tokens.splice(o,1),jn(n),(u=n.onExpressionChanged)==null||u.call(n)}),e.appendChild(c),r(o+1)}}function Sb(n){return Ru[n]||Ru.rules}function Eb(n,e){const t=F("div","cp-setting-row cp-setting-range"),i=F("div","cp-setting-label-wrap"),r=F("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const s=F("div","cp-setting-range-controls"),a=F("div","cp-range-container cp-range-slider"),o=F("input","cp-input-number",{type:"number",step:n.step}),l=F("input","cp-input-number",{type:"number",step:n.step});Y_.create(a,{start:[n.min,n.max],connect:!0,range:{min:n.min,max:n.max},step:n.step,behaviour:"tap-drag"});const c=a.noUiSlider;let u=!0,d=!1;const h=(v,m)=>{o.value=String(v),l.value=String(m)};c.on("update",v=>{const m=Number(v[0]),p=Number(v[1]);d||h(m,p),!u&&n.set(m,p)});const f=()=>{let v=Number(o.value),m=Number(l.value);if(Number.isFinite(v)||(v=n.min),Number.isFinite(m)||(m=n.max),v>m){const b=v;v=m,m=b}const p=Sn(v,n.min,n.max),y=Sn(m,n.min,n.max),M=p!==v||y!==m;u=!0,d=M,c.set([p,y]),d=!1,u=!1,h(v,m),n.set(v,m)};o.addEventListener("input",f),l.addEventListener("input",f),o.addEventListener("change",f),l.addEventListener("change",f);const g=()=>{const v=n.get(),m=Number(v.min),p=Number(v.max),y=Number.isFinite(m)?m:n.min,M=Number.isFinite(p)?p:n.max,b=Sn(y,n.min,n.max),P=Sn(M,n.min,n.max),R=b!==y||P!==M;u=!0,d=R,c.set([b,P]),d=!1,u=!1,h(y,M)};return s.append(a,o,l),t.append(i,s),Wt(e,g,n.syncKeys),g(),u=!1,t}function wb(n,e){const t=F("div","cp-setting-row"),i=F("div","cp-setting-label-wrap"),r=F("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const s=F("div","cp-setting-controls"),a=F("input","cp-input-range",{type:"range",min:n.min,max:n.max,step:n.step}),o=F("input","cp-input-number",{type:"number",step:n.step,min:n.min,max:n.max}),l=d=>{const h=Sn(d,n.min,n.max);Lt(n.key,h)},c=d=>{const h=Number(d);Number.isFinite(h)&&Lt(n.key,h)};a.addEventListener("input",()=>l(Number(a.value))),o.addEventListener("change",()=>c(o.value));const u=()=>{const d=Number(re[n.key]),h=Number.isFinite(d)?d:n.min;a.value=String(Sn(h,n.min,n.max)),o.value=String(h)};return s.append(a,o),t.append(i,s),Wt(e,u,[n.key]),u(),t}function Lr(n,e){const t=document.createDocumentFragment();for(const i of n){const r=F("option","",{value:i.value,text:i.label});i.title&&(r.title=i.title),String(i.value)===String(e)&&(r.selected=!0),t.appendChild(r)}return t}function Du(n=vt){const e=F("select","cp-input-select");e.appendChild(F("option","",{value:vt,text:he.rules.selectValue}));const t=document.createElement("optgroup");t.label=he.rules.detailVariables;for(const r of Vr("detail"))t.appendChild(F("option","",{value:r.id,text:r.label}));const i=document.createElement("optgroup");i.label=he.rules.overallVariables;for(const r of Vr("overall"))i.appendChild(F("option","",{value:r.id,text:r.label}));return e.append(t,i),n&&n!==vt&&(e.value=n),e}function Cb(n){const e=F("div","cp-menu-pane-inner"),t=".ssp-preset.json",i=(A="")=>{const N=String(A||"").trim();return N?/\.ssp-preset\.json$/i.test(N)?N.replace(/\.ssp-preset\.json$/i,""):N.replace(/\.[^./\\]+$/g,""):""},r=(A,N)=>({schemaVersion:1,name:String(A||"").trim(),params:N&&typeof N=="object"?N:{},updatedAt:new Date().toISOString()}),s=(A,N="")=>{const k=JSON.parse(String(A||"{}"));if(!k||typeof k!="object")throw new Error("Preset file is invalid.");const ne=String((k==null?void 0:k.name)||"").trim()||i(N);return k!=null&&k.params&&typeof k.params=="object"?{name:ne,params:k.params}:{name:ne,params:k}},a=async(A,N)=>{const k=String(A||"").trim(),ne=`${k||"seesound-preset"}${t}`,Ce=r(k,N);if(typeof window.showSaveFilePicker=="function")try{const xe=await window.showSaveFilePicker({suggestedName:ne,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!xe)return!1;const me=await xe.createWritable();return await me.write(JSON.stringify(Ce,null,2)),await me.close(),!0}catch{return!1}const te=new Blob([JSON.stringify(Ce,null,2)],{type:"application/json"}),oe=URL.createObjectURL(te),Q=document.createElement("a");return Q.href=oe,Q.download=ne,document.body.appendChild(Q),Q.click(),Q.remove(),URL.revokeObjectURL(oe),!0},o=async()=>{if(typeof window.showOpenFilePicker=="function")try{const[A]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!A)return null;const N=await A.getFile(),k=await N.text();return s(k,N.name)}catch{return null}return new Promise(A=>{const N=document.createElement("input");N.type="file",N.accept=`${t},.json`,N.style.display="none",N.addEventListener("change",async()=>{var k;try{const ne=(k=N.files)==null?void 0:k[0];if(!ne){A(null);return}const Ce=await ne.text();A(s(Ce,ne.name))}catch{A(null)}finally{N.remove()}},{once:!0}),document.body.appendChild(N),N.click()})},l=(A="")=>{const N=String(A||"").trim();return N?/\.ssp\.json$/i.test(N)?N.replace(/\.ssp\.json$/i,""):N.replace(/\.[^./\\]+$/g,""):""},c=F("section","cp-section"),u=F("div","cp-section-title-row"),d=F("h3","cp-section-title",{text:he.file.project}),h=F("span","cp-project-name"),f=he.file.projectNew||"New Project",g=(A={})=>{const N=String((A==null?void 0:A.projectName)||"").trim(),k=String((A==null?void 0:A.fileName)||"").trim(),ne=N||l(k)||f;h.textContent=ne,h.title=ne};g(),u.append(d,h),c.appendChild(u);const v=F("div","cp-button-grid"),m=F("button","cp-btn",{text:he.file.projectLoad}),p=F("button","cp-btn",{text:he.file.projectSave}),y=F("button","cp-btn",{text:he.file.projectSaveAs});Ht(m,Dt.load,he.file.projectLoad),Ht(p,Dt.save,he.file.projectSave),Ht(y,Dt.saveAs,he.file.projectSaveAs),v.append(m,p,y),c.appendChild(v),m.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-open-request"))),p.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-request"))),y.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-as-request"))),window.addEventListener("seesound:project-file-state",A=>{g((A==null?void 0:A.detail)||{})}),window.addEventListener("seesound:project-loaded",A=>{g((A==null?void 0:A.detail)||{})}),window.addEventListener("seesound:project-autosaved",A=>{g((A==null?void 0:A.detail)||{})});const M=F("section","cp-section cp-preset-bar");M.appendChild(F("h3","cp-section-title",{text:he.file.presets}));const b=F("div","cp-preset-row"),P=F("select","cp-input-select cp-preset-sel"),R=F("input","cp-input-text cp-preset-name",{type:"text",placeholder:he.file.presetNamePlaceholder}),L=F("button","cp-btn",{text:he.file.presetLoad}),B=F("button","cp-btn",{text:he.file.presetUpload||"Upload"}),w=F("button","cp-btn",{text:he.file.presetSaveProject||he.file.presetSave}),S=F("button","cp-btn",{text:he.file.presetSaveLocal||"Save Local"}),D=F("button","cp-btn cp-btn-danger",{text:he.file.presetRemove});Ht(L,Dt.load,he.file.presetLoad),Ht(B,Dt.upload,he.file.presetUpload||"Upload"),Ht(w,Dt.save,he.file.presetSaveProject||he.file.presetSave),Ht(S,Dt.saveAs,he.file.presetSaveLocal||"Save Local"),Ht(D,Dt.remove,he.file.presetRemove),b.append(P,L,B,D,R,w,S),M.appendChild(b);async function K(){const A=await dl(),N=String(P.value||"");P.innerHTML="",P.appendChild(F("option","",{value:"",text:he.file.presetSelectPlaceholder}));for(const k of A)P.appendChild(F("option","",{value:k,text:k}));N&&A.includes(N)&&(P.value=N)}P.addEventListener("change",()=>{P.value&&(R.value=P.value)}),L.addEventListener("click",async()=>{const A=String(P.value||"").trim();if(!A)return;const N=await Kd(A);N!=null&&N.params&&rn(N.params)}),B.addEventListener("click",async()=>{const A=await o();if(!(A!=null&&A.params)||typeof A.params!="object")return;const N=String(A.name||"").trim();rn(A.params),N&&(await Ma(N,A.params),await K(),P.value=N,R.value=N,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),w.addEventListener("click",async()=>{const A=String(R.value||"").trim(),N=String(P.value||"").trim(),k=A||N;if(!k)return;const ne=ys();window.dispatchEvent(new CustomEvent("seesound:project-preset-save-request",{detail:{name:k,params:ne}})),await Ma(k,ne),await K(),P.value=k,R.value=k,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}),S.addEventListener("click",async()=>{const A=String(R.value||"").trim(),N=String(P.value||"").trim(),k=A||N;!k||!await a(k,ys())||(R.value=k)}),D.addEventListener("click",async()=>{const A=String(P.value||"").trim();A&&(await c_(A),R.value="",await K(),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),window.addEventListener("seesound:preset-library-changed",()=>{K()});const j=F("section","cp-section");j.appendChild(F("h3","cp-section-title",{text:he.file.export}));const ee=F("div","cp-button-grid"),Z=F("button","cp-btn",{text:he.file.exportImage}),Y=F("button","cp-btn",{text:he.file.exportImageNoBg}),O=F("button","cp-btn",{text:he.file.exportVideo}),x=F("button","cp-btn",{text:he.file.exportObj});Ht(Z,Dt.exportImage,he.file.exportImage),Ht(Y,Dt.exportImageNoBg,he.file.exportImageNoBg),Ht(O,Dt.exportVideo,he.file.exportVideo),Ht(x,Dt.exportObj,he.file.exportObj),ee.append(Z,Y,O,x),j.appendChild(ee),Z.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image"))),Y.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image-no-bg"))),O.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-video-toggle"))),x.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-obj"))),e.append(c,M,j),n.appendChild(e),K()}function Tb(n,e){const t=F("div","cp-menu-pane-inner"),i=F("section","cp-section");i.appendChild(F("h3","cp-section-title",{text:he.view.canvasSize}));const r=F("input","cp-input-number",{type:"number",min:160,step:1}),s=F("input","cp-input-number",{type:"number",min:120,step:1}),a=F("div","cp-inline-pair");a.append(F("label","cp-setting-label",{text:he.view.width}),r,F("label","cp-setting-label",{text:he.view.height}),s),i.appendChild(a);const o=F("input","cp-input-range",{type:"range",min:5,max:400,step:1}),l=F("input","cp-input-number",{type:"number",min:5,max:400,step:1}),c=F("div","cp-setting-row"),u=F("div","cp-setting-label-wrap");u.appendChild(F("label","cp-setting-label",{text:he.view.canvasZoom}));const d=F("div","cp-setting-controls");d.append(o,l),c.append(u,d),i.appendChild(c);const h=F("section","cp-section");h.appendChild(F("h3","cp-section-title",{text:he.view.backgroundColor}));const f=F("input","cp-input-color",{type:"color"});h.appendChild(f);const g=F("section","cp-section");g.appendChild(F("h3","cp-section-title",{text:he.view.cameraPosition}));const v=F("input","cp-input-number",{type:"number",step:1}),m=F("input","cp-input-number",{type:"number",step:1}),p=F("input","cp-input-number",{type:"number",step:1}),y=F("div","cp-inline-triplet");y.append(v,m,p),g.appendChild(y),g.appendChild(F("h3","cp-section-title",{text:he.view.cameraTarget}));const M=F("input","cp-input-number",{type:"number",step:1}),b=F("input","cp-input-number",{type:"number",step:1}),P=F("input","cp-input-number",{type:"number",step:1}),R=F("div","cp-inline-triplet");R.append(M,b,P),g.appendChild(R);const L=F("div","cp-button-grid"),B=F("button","cp-btn",{text:he.view.cameraReset}),w=F("button","cp-btn",{text:he.view.cameraFit}),S=F("button","cp-btn",{text:he.view.cameraClean});Ht(B,Dt.reset,he.view.cameraReset),Ht(w,Dt.fit,he.view.cameraFit),Ht(S,Dt.clean,he.view.cameraClean),L.append(B,w,S),g.appendChild(L);const D=F("section","cp-section");D.appendChild(F("h3","cp-section-title",{text:he.view.projection}));const K=F("select","cp-input-select");K.appendChild(Lr([{value:"axonometric",label:he.view.projectionAxo},{value:"perspective",label:he.view.projectionPerspective}],re.cameraProjection));const j=F("select","cp-input-select");j.appendChild(Lr([{value:"orthoXY",label:he.view.axoOrthoXY},{value:"topXZ",label:he.view.axoOrthoXZ},{value:"orthoYZ",label:he.view.axoOrthoYZ},{value:"isometric",label:he.view.axoIsometric}],re.cameraAxoPreset)),D.append(K,j);const ee=F("section","cp-section");ee.appendChild(F("h3","cp-section-title",{text:he.view.angleOfView}));const Z=F("input","cp-input-range",{type:"range",min:20,max:120,step:1}),Y=F("input","cp-input-number",{type:"number",min:20,max:120,step:1}),O=F("div","cp-setting-controls");O.append(Z,Y),ee.appendChild(O);const x=F("section","cp-section");x.appendChild(F("h3","cp-section-title",{text:he.view.blending}));const A=F("select","cp-input-select");A.appendChild(Lr([{value:"source-over",label:"Normal"},{value:"screen",label:"Screen"},{value:"alpha",label:"Alpha"},{value:"multiply",label:"Multiply"}],re.blendMode)),x.appendChild(A);const N=F("section","cp-section");N.appendChild(F("h3","cp-section-title",{text:he.view.postProcessing}));const k=F("input","cp-input-toggle",{type:"checkbox"}),ne=F("input","cp-input-toggle",{type:"checkbox"}),Ce=F("input","cp-input-toggle",{type:"checkbox"}),te=F("label","cp-toggle-row");te.append(k,F("span","cp-setting-label",{text:he.view.postProcessingEnabled}));const oe=F("label","cp-toggle-row");oe.append(ne,F("span","cp-setting-label",{text:he.view.bloomEnabled}));const Q=F("label","cp-toggle-row");Q.append(Ce,F("span","cp-setting-label",{text:he.view.bokehEnabled}));const xe=F("input","cp-input-range",{type:"range",min:0,max:4,step:.01}),me=F("input","cp-input-number",{type:"number",min:0,max:4,step:.01}),Ve=F("div","cp-setting-row");Ve.append(F("label","cp-setting-label",{text:he.view.bloomStrength}),(()=>{const le=F("div","cp-setting-controls");return le.append(xe,me),le})());const Ge=F("input","cp-input-range",{type:"range",min:0,max:2,step:.01}),ze=F("input","cp-input-number",{type:"number",min:0,max:2,step:.01}),qe=F("div","cp-setting-row");qe.append(F("label","cp-setting-label",{text:he.view.bloomRadius}),(()=>{const le=F("div","cp-setting-controls");return le.append(Ge,ze),le})());const it=F("input","cp-input-range",{type:"range",min:0,max:1,step:.01}),I=F("input","cp-input-number",{type:"number",min:0,max:1,step:.01}),yt=F("div","cp-setting-row");yt.append(F("label","cp-setting-label",{text:he.view.bloomThreshold}),(()=>{const le=F("div","cp-setting-controls");return le.append(it,I),le})());const je=F("input","cp-input-range",{type:"range",min:1,max:5e3,step:1}),Ze=F("input","cp-input-number",{type:"number",min:1,max:5e3,step:1}),Be=F("div","cp-setting-row");Be.append(F("label","cp-setting-label",{text:he.view.bokehFocus}),(()=>{const le=F("div","cp-setting-controls");return le.append(je,Ze),le})());const rt=F("input","cp-input-range",{type:"range",min:0,max:.001,step:1e-5}),Ue=F("input","cp-input-number",{type:"number",min:0,max:.001,step:1e-5}),C=F("div","cp-setting-row");C.append(F("label","cp-setting-label",{text:he.view.bokehAperture}),(()=>{const le=F("div","cp-setting-controls");return le.append(rt,Ue),le})());const _=F("input","cp-input-range",{type:"range",min:0,max:.1,step:5e-4}),W=F("input","cp-input-number",{type:"number",min:0,max:.1,step:5e-4}),ce=F("div","cp-setting-row");ce.append(F("label","cp-setting-label",{text:he.view.bokehMaxBlur}),(()=>{const le=F("div","cp-setting-controls");return le.append(_,W),le})()),N.append(te,oe,Ve,qe,yt,Q,Be,C,ce);const ue=F("section","cp-section");ue.appendChild(F("h3","cp-section-title",{text:he.view.guides}));const se=F("input","cp-input-toggle",{type:"checkbox"}),Te=F("input","cp-input-toggle",{type:"checkbox"}),ye=F("input","cp-input-toggle",{type:"checkbox"}),Pe=F("label","cp-inline-pair");Pe.append(se,F("span","cp-setting-label",{text:he.view.guideAxes}));const Je=F("label","cp-inline-pair");Je.append(Te,F("span","cp-setting-label",{text:he.view.guideCoordinates}));const ge=F("label","cp-inline-pair");ge.append(ye,F("span","cp-setting-label",{text:he.view.cameraHud})),ue.append(Pe,Je,ge),r.addEventListener("change",()=>{const le=Math.max(160,Math.floor(Number(r.value)||160));Lt("canvasWidth",le)}),s.addEventListener("change",()=>{const le=Math.max(120,Math.floor(Number(s.value)||120));Lt("canvasHeight",le)});const fe=le=>{const ke=Sn(le,5,400);Lt("canvasScale",Math.floor(ke))},Ae=le=>{const ke=Number(le);Number.isFinite(ke)&&Lt("canvasScale",Math.floor(ke))};o.addEventListener("input",()=>fe(Number(o.value))),l.addEventListener("change",()=>Ae(l.value)),f.addEventListener("input",()=>{const le=gb(f.value);rn({defaultBackgroundHue:Math.round(le.h),defaultBackgroundSaturation:Math.round(le.s),defaultBackgroundLightness:Math.round(le.l)})});const Xe=()=>{v.value=String(Number(re.cameraPosX??0)),m.value=String(Number(re.cameraPosY??0)),p.value=String(Number(re.cameraPosZ??420)),M.value=String(Number(re.cameraTargetX??0)),b.value=String(Number(re.cameraTargetY??0)),P.value=String(Number(re.cameraTargetZ??0))},Ie=()=>{rn({cameraPosX:Number(v.value)||0,cameraPosY:Number(m.value)||0,cameraPosZ:Number(p.value)||0,cameraTargetX:Number(M.value)||0,cameraTargetY:Number(b.value)||0,cameraTargetZ:Number(P.value)||0})};for(const le of[v,m,p,M,b,P])le.addEventListener("change",Ie);B.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-reset-camera"))}),w.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-fit-camera"))}),S.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-clean-canvas"))}),K.addEventListener("change",()=>Lt("cameraProjection",K.value)),j.addEventListener("change",()=>Lt("cameraAxoPreset",j.value)),A.addEventListener("change",()=>Lt("blendMode",A.value)),k.addEventListener("change",()=>Lt("postProcessEnabled",k.checked?1:0)),ne.addEventListener("change",()=>Lt("bloomEnabled",ne.checked?1:0)),Ce.addEventListener("change",()=>Lt("bokehEnabled",Ce.checked?1:0));const tt=({slider:le,number:ke,key:Me,min:We,max:ht})=>{const gt=pt=>{const Nt=Sn(pt,We,ht);Lt(Me,Nt)},lt=pt=>{const Nt=Number(pt);Number.isFinite(Nt)&&Lt(Me,Nt)};le.addEventListener("input",()=>gt(Number(le.value))),ke.addEventListener("change",()=>lt(ke.value))};tt({slider:xe,number:me,key:"bloomStrength",min:0,max:4}),tt({slider:Ge,number:ze,key:"bloomRadius",min:0,max:2}),tt({slider:it,number:I,key:"bloomThreshold",min:0,max:1}),tt({slider:je,number:Ze,key:"bokehFocus",min:1,max:5e3}),tt({slider:rt,number:Ue,key:"bokehAperture",min:0,max:.001}),tt({slider:_,number:W,key:"bokehMaxBlur",min:0,max:.1});const nt=le=>{Lt("cameraAngleOfView",Sn(le,20,120))},Mt=le=>{const ke=Number(le);Number.isFinite(ke)&&Lt("cameraAngleOfView",ke)};Z.addEventListener("input",()=>nt(Number(Z.value))),Y.addEventListener("change",()=>Mt(Y.value)),se.addEventListener("change",()=>{Lt("originSignEnabled",se.checked?1:0)}),Te.addEventListener("change",()=>{Lt("coordinateGuidesEnabled",Te.checked?1:0)}),ye.addEventListener("change",()=>{window.dispatchEvent(new CustomEvent("seesound:camera-hud-toggle",{detail:{enabled:ye.checked}}))}),window.addEventListener("seesound:origin-sign-state",le=>{var Me;const ke=(Me=le==null?void 0:le.detail)==null?void 0:Me.enabled;typeof ke=="boolean"&&(se.checked=ke)}),window.addEventListener("seesound:coordinate-guide-state",le=>{var Me;const ke=(Me=le==null?void 0:le.detail)==null?void 0:Me.enabled;typeof ke=="boolean"&&(Te.checked=ke)}),window.addEventListener("seesound:camera-hud-state",le=>{var Me;const ke=(Me=le==null?void 0:le.detail)==null?void 0:Me.enabled;typeof ke=="boolean"&&(ye.checked=ke)});const H=()=>{r.value=String(Number(re.canvasWidth??0)||0),s.value=String(Number(re.canvasHeight??0)||0)},Se=()=>{const le=Math.max(5,Math.min(400,Math.floor(Number(re.canvasScale)||100)));o.value=String(le),l.value=String(le)},ie=()=>{const le=mb(Number(re.defaultBackgroundHue??0),Number(re.defaultBackgroundSaturation??0),Number(re.defaultBackgroundLightness??0));f.value=fb(le.r,le.g,le.b)},pe=()=>{K.value=String(re.cameraProjection||"axonometric"),j.value=String(re.cameraAxoPreset||"orthoXY");const le=K.value==="perspective";ee.style.display=le?"":"none"},Re=()=>{A.value=String(re.blendMode||"screen")},we=()=>{const le=Number(re.cameraAngleOfView??55);Z.value=String(le),Y.value=String(le)},T=()=>{k.checked=Number(re.postProcessEnabled??0)>=.5,ne.checked=Number(re.bloomEnabled??1)>=.5,Ce.checked=Number(re.bokehEnabled??1)>=.5},z=()=>{se.checked=Number(re.originSignEnabled??1)>=.5,Te.checked=Number(re.coordinateGuidesEnabled??0)>=.5},q=()=>{const le=Number(re.bloomStrength??1.15);xe.value=String(le),me.value=String(le)},ae=()=>{const le=Number(re.bloomRadius??.7);Ge.value=String(le),ze.value=String(le)},_e=()=>{const le=Number(re.bloomThreshold??.18);it.value=String(le),I.value=String(le)},be=()=>{const le=Number(re.bokehFocus??380);je.value=String(le),Ze.value=String(le)},J=()=>{const le=Number(re.bokehAperture??12e-5);rt.value=String(le),Ue.value=String(le)},de=()=>{const le=Number(re.bokehMaxBlur??.01);_.value=String(le),W.value=String(le)},Ke=()=>{Xe()};Wt(e,H,["canvasWidth","canvasHeight"]),Wt(e,Se,["canvasScale"]),Wt(e,ie,["defaultBackgroundHue","defaultBackgroundSaturation","defaultBackgroundLightness"]),Wt(e,pe,["cameraProjection","cameraAxoPreset"]),Wt(e,Re,["blendMode"]),Wt(e,we,["cameraAngleOfView"]),Wt(e,T,["postProcessEnabled","bloomEnabled","bokehEnabled"]),Wt(e,z,["originSignEnabled","coordinateGuidesEnabled"]),Wt(e,q,["bloomStrength"]),Wt(e,ae,["bloomRadius"]),Wt(e,_e,["bloomThreshold"]),Wt(e,be,["bokehFocus"]),Wt(e,J,["bokehAperture"]),Wt(e,de,["bokehMaxBlur"]),Wt(e,Ke,["cameraPosX","cameraPosY","cameraPosZ","cameraTargetX","cameraTargetY","cameraTargetZ"]),window.addEventListener("seesound:camera-state",le=>{var Yt,tn,$t,E,V,U;const ke=(le==null?void 0:le.detail)||{},Me=Number((Yt=ke.position)==null?void 0:Yt.x),We=Number((tn=ke.position)==null?void 0:tn.y),ht=Number(($t=ke.position)==null?void 0:$t.z),gt=Number((E=ke.target)==null?void 0:E.x),lt=Number((V=ke.target)==null?void 0:V.y),pt=Number((U=ke.target)==null?void 0:U.z),Nt=Number(ke.fov),It=String(ke.projection||"");Number.isFinite(Me)&&(v.value=String(Me)),Number.isFinite(We)&&(m.value=String(We)),Number.isFinite(ht)&&(p.value=String(ht)),Number.isFinite(gt)&&(M.value=String(gt)),Number.isFinite(lt)&&(b.value=String(lt)),Number.isFinite(pt)&&(P.value=String(pt)),Number.isFinite(Nt)&&(Z.value=String(Nt),Y.value=String(Nt)),(It==="perspective"||It==="axonometric")&&(K.value=It,ee.style.display=It==="perspective"?"":"none")}),H(),Se(),ie(),pe(),Re(),we(),T(),z(),q(),ae(),_e(),be(),J(),de(),Ke(),ye.checked=!1,t.append(i,h,g,D,ee,x,N,ue),n.appendChild(t)}function Ab(n,e){const t=F("div","cp-menu-pane-inner"),i=F("section","cp-section");i.appendChild(F("h3","cp-section-title",{text:he.settings.sliders}));const r=F("div","cp-setting-row"),s=F("div","cp-setting-label-wrap");s.appendChild(F("label","cp-setting-label",{text:he.settings.audioResolution,title:"Technical term: FFT Size. Frequency-domain analysis resolution."}));const a=F("select","cp-input-select");a.appendChild(Lr(ub.map(u=>({value:u,label:String(u)})),re.fftSize)),a.addEventListener("change",()=>{Lt("fftSize",Number(a.value))}),r.append(s,a),i.appendChild(r);for(const u of db)i.appendChild(wb(u,e));const o=F("button","cp-btn cp-btn-wide",{text:he.settings.resetDefaults});Ht(o,Dt.reset,he.settings.resetDefaults),o.addEventListener("click",()=>{r_()}),i.appendChild(o);const l=F("section","cp-section");l.appendChild(F("h3","cp-section-title",{text:he.settings.normalizationRanges}));for(const u of hb)l.appendChild(Eb(u,e));const c=()=>{a.value=String(re.fftSize||2048)};Wt(e,c,["fftSize"]),c(),t.append(i,l),n.appendChild(t)}function _o(n){var s;const e=n.definition.output;if(n.definition.type==="enum")return{operator:"set",output:e,value:n.enumValue||((s=n.definition.options)==null?void 0:s[0])||"square"};const t=n.definition.type==="enum"?"":ch(n.tokens);if(n.definition.type!=="enum"&&Mb(n.tokens))return null;n.expression=t;const i=String(t||"").trim();if(!i)return null;const r=Number(i);return Number.isFinite(r)&&/^[-+]?\d+(\.\d+)?$/.test(i)?{operator:"set",output:e,value:r}:oh.has(i)?{operator:"set",output:e,input:i}:{operator:"set",output:e,expression:i}}function Rb(n,e){var Z,Y;const t=F("div","cp-menu-pane-inner"),i=F("div","cp-rules-wrapper");t.appendChild(i);const r=new Map,s=[],a=new Map,o=new Map,l=new Map;let c=0;function u(O,x){return`${O}:${x}`}function d(O,x=!1){const A=`${O.target}-${O.output}`;return x?(c+=1,`${A}-dup-${c}`):`${A}-base`}function h(O){const x=M(O);return JSON.stringify(x||{operator:"always"})}function f(){var A;const O=new Map,x=new Set;for(const N of s){if(!(N!=null&&N.enabled)||!_o(N))continue;const ne=`${N.definition.target}|${N.definition.output}|${h(N)}`,Ce=O.get(ne);if(Ce){x.add(Ce.instanceId),x.add(N.instanceId);continue}O.set(ne,N),Array.isArray(N.duplicateIds)&&N.duplicateIds.length>0&&x.add(N.instanceId)}for(const N of s)(A=N.card)==null||A.classList.toggle("is-danger",x.has(N.instanceId)),typeof N.renderDuplicateCards=="function"&&N.renderDuplicateCards()}const g=O=>R.get(O)!==!1,v=O=>{if(!(O!=null&&O.card))return;const x=g(O.definition.section);O.card.classList.toggle("is-disabled",!O.enabled||!x),O.card.classList.toggle("is-collapsed",!!O.collapsed);const A=Array.isArray(O.duplicateIds)?O.duplicateIds.length:0;O.removeBtn&&(O.removeBtn.style.display=A>0?"":"none"),O.duplicateBtn&&(O.duplicateBtn.title=A>0?`Duplicate rule (${A} duplicate${A>1?"s":""})`:"Duplicate rule"),O.collapseBtn&&(O.collapseBtn.textContent=O.collapsed?"▸":"▾"),typeof O.renderDuplicateCards=="function"&&O.renderDuplicateCards()};function m(O,x,A){const N=F("article","cp-rule-card cp-rule-card--duplicate");N.dataset.duplicateId=x;const k=F("div","cp-rule-card-header"),ne=F("div","cp-rule-card-title",{text:`${O.definition.label} (Duplicate ${A+1})`}),Ce=F("div","cp-rule-card-tools"),te=F("button","cp-btn cp-btn-icon cp-rule-card-duplicate",{type:"button",title:"Duplicate rule","aria-label":"Duplicate rule"});te.innerHTML=Dt.duplicate;const oe=F("button","cp-btn cp-btn-icon cp-btn-danger cp-rule-card-remove",{type:"button",title:"Remove duplicate rule","aria-label":"Remove duplicate rule"});oe.innerHTML=Dt.remove;const Q=F("button","cp-btn cp-btn-icon cp-rule-card-collapse",{type:"button",title:"Collapse rule","aria-label":"Collapse rule",text:O.collapsed?"▸":"▾"});return Ce.append(te,oe,Q),k.append(ne,Ce),N.appendChild(k),O.card.classList.contains("is-danger")&&N.classList.add("is-danger"),(O.collapsed||!O.enabled)&&N.classList.add("is-collapsed"),te.addEventListener("click",()=>{O.duplicateIds.push(d(O.definition,!0)),v(O),B()}),oe.addEventListener("click",()=>{const xe=O.duplicateIds.indexOf(x);xe<0||(O.duplicateIds.splice(xe,1),v(O),B())}),Q.addEventListener("click",()=>{O.collapsed=!O.collapsed,v(O)}),N}function p(O){const x=O==null?void 0:O.duplicateContainer;if(!x)return;x.innerHTML="";const A=Array.isArray(O.duplicateIds)?O.duplicateIds:[];for(let N=0;N<A.length;N++)x.appendChild(m(O,A[N],N))}function y(O,x=""){const A=oe=>s.filter(Q=>Q.definition.target===O&&Q.definition.output===oe),N=[...A("red"),...A("green"),...A("blue")],ne=A("hue")[0]||null;if(!ne||N.length===0)return;if(x==="red"||x==="green"||x==="blue"){const oe=r.get(u(O,x));if(oe){for(const Q of N)Q.enabled=!!oe.enabled;oe.enabled&&String(oe.expression||"").trim()&&(ne.enabled=!1)}}if(x==="hue"&&ne.enabled&&String(ne.expression||"").trim())for(const oe of N)oe.enabled=!1;const Ce=N.some(oe=>oe.enabled&&String(oe.expression||"").trim()),te=ne.enabled&&String(ne.expression||"").trim();if(Ce&&te)if(x==="hue")for(const oe of N)oe.enabled=!1;else ne.enabled=!1;for(const oe of N)oe.toggle&&(oe.toggle.checked=oe.enabled),v(oe);ne.toggle&&(ne.toggle.checked=ne.enabled),v(ne)}function M(O){if(!O.conditionEnabled||O.conditionOperator==="always")return{operator:"always"};const x=String(O.conditionDetail||vt),A=String(O.conditionOverall||vt),N=x!==vt?x:A!==vt?A:"";if(!N)return{operator:"always"};const k=String(O.conditionValueInput||vt);return k&&k!==vt?{operator:O.conditionOperator,input:N,valueInput:k}:{operator:O.conditionOperator,input:N,value:Number(O.conditionValue)||0}}let b=!1,P=!1;const R=new Map;function L(O,x=!1){if(!O||!x&&!O.enabled||!x&&O.conditionEnabled&&!(O.conditionDetail!==vt||O.conditionOverall!==vt))return;const A=_o(O);!x&&O.enabled&&!A||B()}function B(){if(b)return;y("spawnedParticles"),y("physicalParticles"),y("lines"),y("background"),f();const O=[];for(let x=0;x<s.length;x++){const A=s[x],N=_o(A);if(!N)continue;O.push({id:A.instanceId||`${A.definition.target}-${A.definition.output}`,group:`${A.definition.section}/${A.definition.subgroup}`,subgroup:"",enabled:!!A.enabled,sectionDisabled:!g(A.definition.section),target:A.definition.target,condition:M(A),actions:[N],order:x});const k=Array.isArray(A.duplicateIds)?A.duplicateIds:[];for(const ne of k)O.push({id:ne,group:`${A.definition.section}/${A.definition.subgroup}`,subgroup:"",enabled:!!A.enabled,sectionDisabled:!g(A.definition.section),target:A.definition.target,condition:M(A),actions:[N],order:x})}P=!0,Lt("ruleBlocks",O)}function w(O){var x,A,N,k,ne,Ce;b=!0;try{for(const Q of s)Q.enabled=!1,Q.collapsed=!1,Q.duplicateIds=[],Q.conditionEnabled=!1,Q.conditionOperator="always",Q.conditionDetail=vt,Q.conditionOverall=vt,Q.conditionValue=0,Q.conditionValueInput=vt,Q.expression="",Q.tokens=[],Q.insertContext=null,Q.pendingInsertIndex=null,Q.enumValue=((x=Q.definition.options)==null?void 0:x[0])||"square";R.clear();for(const Q of Au)R.has(Q.section)||R.set(Q.section,!0);const te=Array.isArray(O)?O:[],oe=new Map;for(const Q of te){const xe=String((Q==null?void 0:Q.target)||""),me=Array.isArray(Q==null?void 0:Q.actions)?Q.actions[0]:null,Ve=String((me==null?void 0:me.output)||""),Ge=u(xe,Ve),ze=r.get(Ge);if(!ze)continue;const qe=oe.get(Ge)||0;if(qe>0){ze.duplicateIds.push(String((Q==null?void 0:Q.id)||d(ze.definition,!0))),oe.set(Ge,qe+1);continue}oe.set(Ge,1),(Q==null?void 0:Q.sectionDisabled)===!0&&R.set(ze.definition.section,!1),ze.enabled=Q.enabled!==!1;const it=String(((A=Q==null?void 0:Q.condition)==null?void 0:A.operator)||"always");ze.conditionOperator=Cu.includes(it)?it:"always",ze.conditionValue=Number(((N=Q==null?void 0:Q.condition)==null?void 0:N.value)??0);const I=String(((k=Q==null?void 0:Q.condition)==null?void 0:k.valueInput)||"");ze.conditionValueInput=oh.has(I)?I:vt;const yt=String(((ne=Q==null?void 0:Q.condition)==null?void 0:ne.input)||""),je=cl(yt);(je==null?void 0:je.group)==="detail"?(ze.conditionDetail=yt,ze.conditionOverall=vt):(je==null?void 0:je.group)==="overall"&&(ze.conditionOverall=yt,ze.conditionDetail=vt),ze.conditionEnabled=ze.conditionOperator!=="always"&&!!yt,ze.definition.type==="enum"?ze.enumValue=String((me==null?void 0:me.value)||ze.enumValue):typeof(me==null?void 0:me.expression)=="string"?ze.expression=me.expression:typeof(me==null?void 0:me.input)=="string"?ze.expression=me.input:(me==null?void 0:me.value)!==void 0&&(me==null?void 0:me.value)!==null&&(ze.expression=String(me.value)),ze.tokens=_b(ze.expression)}y("spawnedParticles"),y("physicalParticles"),y("lines"),y("background");for(const Q of s)Q.toggle&&(Q.toggle.checked=Q.enabled),v(Q),(Ce=Q.syncConditionUi)==null||Ce.call(Q),Q.enumSelect&&(Q.enumSelect.value=Q.enumValue),jn(Q);for(const[Q,xe]of a.entries()){const me=g(Q);xe.checked=me;const Ve=o.get(Q);Ve&&Ve.classList.toggle("is-section-disabled",!me)}f()}finally{b=!1}}let S="",D="",K=null;const j=new Map;for(const O of Au){if(O.section!==S){S=O.section;const C=S;D="";const _=F("section","cp-rule-section"),W=F("div","cp-rule-section-header"),ce=F("button","cp-rule-section-title cp-rule-section-toggle",{type:"button",text:C,"aria-expanded":"true"}),ue=F("input","cp-input-toggle cp-rule-section-enable",{type:"checkbox"});ue.checked=!0;const se=F("div","cp-rule-section-body");a.set(C,ue),o.set(C,_),l.set(C,[]),ce.addEventListener("click",()=>{const ye=!(j.get(C)!==!1);j.set(C,ye),_.classList.toggle("is-collapsed",!ye),ce.setAttribute("aria-expanded",ye?"true":"false")}),ue.addEventListener("change",()=>{R.set(C,!!ue.checked),_.classList.toggle("is-section-disabled",!ue.checked);const Te=l.get(C)||[];for(const ye of Te)v(ye);B()}),W.append(ce,ue),_.append(W,se),i.appendChild(_),K=se}O.subgroup!==D&&(D=O.subgroup,K.appendChild(F("h4","cp-rule-subgroup-title",{text:D})));const x={definition:O,instanceId:d(O,!1),isDuplicate:!1,enabled:!1,collapsed:!1,duplicateIds:[],conditionEnabled:!1,conditionOperator:"always",conditionDetail:vt,conditionOverall:vt,conditionValue:0,conditionValueInput:vt,expression:"",tokens:[],insertContext:null,pendingInsertIndex:null,dragTokenIndex:null,enumValue:((Z=O.options)==null?void 0:Z[0])||"square",toggle:null,card:null,conditionRow:null,syncConditionUi:null,tokenEditor:null,onExpressionChanged:null,enumSelect:null,actionSelect:null},A=F("article","cp-rule-card"),N=F("div","cp-rule-card-header"),k=F("div","cp-rule-card-tools"),ne=F("button","cp-btn cp-btn-icon cp-rule-card-duplicate",{type:"button",title:"Duplicate rule","aria-label":"Duplicate rule"});ne.innerHTML=Dt.duplicate;const Ce=F("button","cp-btn cp-btn-icon cp-btn-danger cp-rule-card-remove",{type:"button",title:"Remove duplicate rule","aria-label":"Remove duplicate rule"});Ce.innerHTML=Dt.remove,Ce.style.display="none";const te=F("button","cp-btn cp-btn-icon cp-rule-card-collapse",{type:"button",title:"Collapse rule","aria-label":"Collapse rule",text:"▾"});k.append(ne,Ce,te);const oe=F("input","cp-input-toggle",{type:"checkbox"}),Q=F("div","cp-rule-card-title",{text:O.label});N.append(oe,Q,k);const xe=F("div","cp-rule-card-condition-builder"),me=F("button","cp-btn cp-rule-condition-add",{type:"button",text:he.rules.addCondition});Ht(me,Dt.add,he.rules.addCondition);const Ve=F("div","cp-rule-condition-sentence"),Ge=F("span","cp-rule-condition-when",{text:he.rules.when}),ze=Du(vt),qe=F("select","cp-input-select cp-rule-condition-operator");qe.appendChild(Lr(Cu.filter(C=>C!=="always").map(C=>({value:C,label:C})),">"));const it=F("input","cp-input-number",{type:"number",step:.001,value:"0"}),I=Du(vt);I.classList.add("cp-rule-condition-value-input");const yt=F("button","cp-btn cp-btn-danger cp-rule-condition-remove",{type:"button",text:he.rules.removeCondition});Ht(yt,Dt.clear,he.rules.removeCondition),Ve.append(Ge,ze,qe,it,I,yt),xe.append(me,Ve);const je=F("div","cp-rule-card-expression");let Ze=null,Be=null,rt=null;if(O.type==="enum")Ze=F("select","cp-input-select"),Ze.appendChild(Lr(O.options.map(C=>({value:C,label:C})),x.enumValue)),je.appendChild(Ze);else{const C=F("div","cp-rule-token-row"),_=xb("");rt=yb(""),Be=F("div","cp-rule-token-editor",{role:"list",tabindex:"0"}),C.append(_,rt),je.append(C,Be);const W=()=>{if(x.expression=ch(x.tokens),(O.output==="red"||O.output==="green"||O.output==="blue")&&y(O.target,O.output),O.output==="hue"&&y(O.target,"hue"),x.enabled&&!String(x.expression||"").trim()){x.enabled=!1,x.toggle&&(x.toggle.checked=!1),v(x),B();return}L(x)};x.onExpressionChanged=W;const ce=(ue,se)=>{const Te=uh(ue);if(!Te.length)return;const ye=Number.isInteger(x.pendingInsertIndex)?x.pendingInsertIndex:x.tokens.length;x.tokens.splice(ye,0,...Te),x.pendingInsertIndex=null,se&&(se.value=""),jn(x),W()};_.addEventListener("change",()=>{ce(String(_.value||""),_)}),rt.addEventListener("change",()=>{ce(String(rt.value||""),rt)})}const Ue=F("div","cp-rule-duplicates");A.append(N,xe,je),K.appendChild(A),K.appendChild(Ue),x.toggle=oe,x.card=A,x.duplicateContainer=Ue,x.renderDuplicateCards=()=>p(x),x.duplicateBtn=ne,x.removeBtn=Ce,x.collapseBtn=te,x.conditionRow=xe,x.tokenEditor=Be,x.enumSelect=Ze,x.actionSelect=rt,v(x),x.syncConditionUi=()=>{if(me.style.display=x.conditionEnabled?"none":"",Ve.style.display=x.conditionEnabled?"":"none",!x.conditionEnabled)return;qe.value=x.conditionOperator==="always"?">":x.conditionOperator;const C=x.conditionDetail!==vt?x.conditionDetail:x.conditionOverall;ze.value=C||vt,it.value=String(Number(x.conditionValue||0)),I.value=x.conditionValueInput||vt},x.syncConditionUi(),r.set(u(O.target,O.output),x),s.push(x),(Y=l.get(O.section))==null||Y.push(x),ne.addEventListener("click",()=>{Array.isArray(x.duplicateIds)||(x.duplicateIds=[]),x.duplicateIds.push(d(O,!0)),v(x),B()}),Ce.addEventListener("click",()=>{!Array.isArray(x.duplicateIds)||x.duplicateIds.length===0||(x.duplicateIds.pop(),v(x),B())}),te.addEventListener("click",()=>{x.collapsed=!x.collapsed,v(x)}),oe.addEventListener("change",()=>{if(x.enabled=oe.checked,v(x),(O.output==="red"||O.output==="green"||O.output==="blue")&&y(O.target,O.output),O.output==="hue"&&y(O.target,"hue"),!x.enabled){B();return}L(x)}),me.addEventListener("click",()=>{var C;x.conditionEnabled=!0,x.conditionOperator==="always"&&(x.conditionOperator=">"),(C=x.syncConditionUi)==null||C.call(x),L(x)}),qe.addEventListener("change",()=>{x.conditionEnabled=!0,x.conditionOperator=qe.value,L(x)}),ze.addEventListener("change",()=>{const C=String(ze.value||vt);if(x.conditionEnabled=!0,x.conditionDetail=vt,x.conditionOverall=vt,C!==vt){const _=cl(C);(_==null?void 0:_.group)==="detail"?x.conditionDetail=C:(_==null?void 0:_.group)==="overall"&&(x.conditionOverall=C)}L(x)}),it.addEventListener("change",()=>{x.conditionEnabled=!0,x.conditionValue=Number(it.value)||0,x.conditionValueInput=vt,L(x)}),I.addEventListener("change",()=>{x.conditionEnabled=!0;const C=String(I.value||vt);x.conditionValueInput=C!==vt?C:vt,L(x)}),yt.addEventListener("click",()=>{var C;x.conditionEnabled=!1,x.conditionOperator="always",x.conditionDetail=vt,x.conditionOverall=vt,x.conditionValue=0,x.conditionValueInput=vt,(C=x.syncConditionUi)==null||C.call(x),L(x,!0)}),Ze&&Ze.addEventListener("change",()=>{x.enumValue=Ze.value,L(x)}),O.type!=="enum"&&jn(x)}const ee=()=>{if(P){P=!1;return}w(Array.isArray(re.ruleBlocks)?re.ruleBlocks:[])};Wt(e,ee,["ruleBlocks"]),ee(),n.appendChild(t)}function Pb(n){const e=F("button","cp-menu-button",{type:"button","data-menu-id":n.id,"aria-label":n.label,title:n.label}),t=F("span","cp-menu-icon",{html:Sb(n.id)}),i=F("span","cp-menu-label",{text:n.label});return e.append(t,i),e}function Nb(n){const e=F("section","cp-menu-pane",{"data-menu-id":n.id}),t=F("div","cp-menu-pane-header");t.appendChild(F("h2","cp-menu-pane-title",{text:n.label}));const i=F("button","cp-btn cp-menu-collapse",{type:"button",text:he.menu.collapse});Ht(i,Dt.close,he.menu.collapse),t.appendChild(i);const r=F("div","cp-menu-pane-body");return e.append(t,r),{pane:e,body:r,closeButton:i}}function Lb(n){if(!n)return;n.innerHTML="",n.className="",n.classList.add("cp-shell");const e=F("div","cp-shell-root"),t=F("nav","cp-menu-rail"),i=F("div","cp-menu-stack"),r=pb(),s=new Map,a=new Map;for(const y of Tu){const M=Pb(y);s.set(y.id,M),t.appendChild(M);const b=Nb(y);a.set(y.id,b),i.appendChild(b.pane)}e.append(t,i),n.appendChild(e),Cb(a.get("file").body),Tb(a.get("view").body,r),Ab(a.get("settings").body,r),Rb(a.get("rules").body,r);let o=null,l="settings",c=!1,u=!1,d=null;const h=()=>{d!==null&&(window.clearTimeout(d),d=null)},f=()=>{h(),!(o||c||u)&&(d=window.setTimeout(()=>{d=null,!(o||c||u)&&(l=null,v())},100))};function g(){return o||(c||u?l:null)}function v(){const y=g();for(const[M,b]of s.entries()){const P=y===M,R=o===M;b.classList.toggle("is-active",P),b.classList.toggle("is-pinned",R),b.setAttribute("aria-expanded",P?"true":"false")}for(const[M,b]of a.entries()){const P=y===M;b.pane.classList.toggle("is-active",P)}n.classList.toggle("is-open",!!y)}t.addEventListener("mouseenter",()=>{h(),c=!0,v()}),t.addEventListener("mouseleave",()=>{c=!1,f()});for(const y of Tu){const M=s.get(y.id),b=a.get(y.id);M.addEventListener("mouseenter",()=>{h(),l=y.id,v()}),M.addEventListener("click",()=>{o===y.id?(o=null,l=null):(o=y.id,l=y.id),v()}),b.pane.addEventListener("mouseenter",()=>{h(),u=!0,l=y.id,v()}),b.pane.addEventListener("mouseleave",()=>{u=!1,f()}),b.closeButton.addEventListener("click",()=>{o=null,l=null,v()})}const m=()=>{Pu(Nu(r,[],!0))},p=y=>{const M=Nu(r,y,!1);M.length&&Pu(M)};Xl((y,M,b)=>{if(!M){m();return}if(M==="*"){if(b&&typeof b=="object"&&!Array.isArray(b))return;m();return}p([M])}),l="settings",v(),m()}function Db(n,e,t){return Math.min(t,Math.max(e,n))}function qi(n){const e=Number(n);return Number.isFinite(e)?Math.round(Db(e,0,255)):0}function Fb(n,e,t,i){const r=qi(n),s=qi(e),a=qi(t),o=qi(i),l=.299*r+.587*s+.114*a;if(l<=1e-9)return[o,o,o];const c=o/l;let u=r*c,d=s*c,h=a*c;const f=Math.max(u,d,h);if(f>255){const g=(255-o)/Math.max(1e-9,f-o);u=o+g*(u-o),d=o+g*(d-o),h=o+g*(h-o)}return[qi(u),qi(d),qi(h)]}const dh=()=>{},Ni=()=>{};function En(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function _t(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?En(e/255):En(e):0}function hh(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,s=parseInt(t.slice(4,6),16)/255;return[En(i),En(r),En(s)]}function Ib(n){if(Array.isArray(n))return n.length<3?null:[_t(n[0]),_t(n[1]),_t(n[2])];if(typeof n=="string"){const e=hh(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[_t(t[0]),_t(t[1]),_t(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[_t(n.r),_t(n.g),_t(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[_t(n.h),_t(n.s),_t(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[_t(n.hue),_t(n.saturation),_t(n.brightness)]}return null}function Ub(n,e,t){const i=Number(n),s=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,a=En(e),o=En(t),l=Math.floor(s*6),c=s*6-l,u=o*(1-a),d=o*(1-c*a),h=o*(1-(1-c)*a);switch(l%6){case 0:return[o,h,u];case 1:return[d,o,u];case 2:return[u,o,h];case 3:return[u,d,o];case 4:return[h,u,o];default:return[o,u,d]}}function Ob(n,e,t){const i=En(n),r=En(e),s=En(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return[c,u,a]}function ma(n){return Array.isArray(n)?n.length<3?null:[_t(n[0]),_t(n[1]),_t(n[2])]:typeof n=="string"?hh(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[_t(n.rgb[0]),_t(n.rgb[1]),_t(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[_t(n.r),_t(n.g),_t(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[_t(n.h),_t(n.s),_t(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[_t(n.hue),_t(n.saturation),_t(n.brightness)]:null}function ph(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function Bb(n,e,t){const i=ph(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,a=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return ma(i.colors[a])}function kb(n,e,t){const i=ph(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return ma(i.colors[0]);const s=En(t)*(i.colors.length-1),a=Math.floor(s),o=Math.min(i.colors.length-1,a+1),l=s-a,c=ma(i.colors[a]),u=ma(i.colors[o]);return!c&&!u?null:c?u?[En(c[0]+(u[0]-c[0])*l),En(c[1]+(u[1]-c[1])*l),En(c[2]+(u[2]-c[2])*l)]:c:u}const zb=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[_t(n),_t(e),_t(t)],hsv:(n,e,t)=>[_t(n),_t(e),_t(t)],palette:(n,e,t)=>Bb(n,e,t),gradient:(n,e,t)=>kb(n,e,t),matchLuma:(n,e,t,i)=>{const[r,s,a]=Fb(n,e,t,i);return[r/255,s/255,a/255]},hsvToRgbColor:(n,e,t)=>Ub(n,e,t),rgbToHsvColor:(n,e,t)=>Ob(n,e,t),toColorVector:n=>Ib(n)});function ka(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function Ci(n){for(const e of n||[]){if((e==null?void 0:e.enabled)===!1||(e==null?void 0:e.sectionDisabled)===!0)continue;const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function Fu(n,e){for(const t of n||[]){if((t==null?void 0:t.enabled)===!1||(t==null?void 0:t.sectionDisabled)===!0)continue;const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const Vb=new Set([">",">=","<","<=","==","!="]);let na={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],physicalParticles:[],lines:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:dh,applyLivingRules:Ni,applyPhysicalRules:Ni,applyLineRules:Ni}};function Iu(n,e){const t=ka(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)e.has(s)&&i.add(s);return[...i]}function Mr(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled)||(i==null?void 0:i.sectionDisabled)===!0)continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of Iu(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of Iu(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Zl(n){return JSON.stringify(n)}function fh(n){const e=ka(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Zl(n.value)}function Hb(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let s=0;s<n.length;s++){const a=n[s],o=s>0?n[s-1]:"";if(!r&&a==="'"&&o!=="\\"){i=!i;continue}if(!i&&a==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(a==="(")e++;else if(a===")")e=Math.max(0,e-1);else if(a==="[")t++;else if(a==="]")t=Math.max(0,t-1);else if(a===","&&e===0&&t===0)return!0}}return!1}function Gb(n){const e=ka(n.expression);return e?Hb(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Zl(n.value)}function Uu(n,e){const t=Gb(n),[i,r,s]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${s} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${s} = (target.${s} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${s} = (target.${s} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${s} = (target.${s} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${s} = (target.${s} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${s} = clamp((target.${s} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function Wb(n){const e=fh(n),t=["const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);","const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (__hasRgb) {","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) __baseRgb = [0, 0, 0];","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function Xb(n){if(!n||n.operator==="always")return"true";const e=ka(n.expression);if(e)return`(${e})`;if(!Vb.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Zl(n.value??0);return`((${t}) ${n.operator} (${i}))`}function qb(n){const e=n.output;if(e==="rgb")return Uu(n,["red","green","blue"]);if(e==="hsv")return Uu(n,["hue","saturation","brightness"]);if(e==="luma")return Wb(n);const t=fh(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Tr(n,e,t,i){const r=[],s=[],a=new Set;r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const o of t)o==="deltaTime"||o==="time"||r.push(`  const ${o} = Number.isFinite(i.${o}) ? i.${o} : 0;`);return e.forEach(o=>{if(!o.enabled||o.sectionDisabled===!0)return;const l=Xb(o.condition),c=Array.isArray(o.actions)?o.actions:[],u=[];for(const d of c){const h=String((d==null?void 0:d.output)||"");if(!h)continue;const f=`${l}::${h}`;a.has(f)||(a.add(f),u.push(d))}if(u.length!==0){r.push(`  // rule ${o.id}`),r.push(`  if (${l}) {`),s.push({ruleId:o.id,functionName:n,sourceLine:r.length+1});for(const d of u)r.push(`    ${qb(d)}`);r.push("  }")}}),r.push("}"),{source:r.join(`
`),lineMap:s}}function jb(n,e){return Tr("applySpawnRules",n,e,!1)}function Yb(n,e){return Tr("applyLivingRules",n,e,!0)}function $b(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function Ou(n,e){const t=performance.now(),i=Wd(n,e),s=[...i.ruleBlocks].sort((Z,Y)=>(Z.order??0)-(Y.order??0)),a=s.filter(Z=>Z.target==="spawnedParticles"),o=s.filter(Z=>Z.target==="allParticles"),l=[],c=s.filter(Z=>Z.target==="lines"),u=s.filter(Z=>Z.target==="background"),d=s.filter(Z=>Z.target==="camera"),h=Z=>!Z||Z.enabled===!1||Z.sectionDisabled===!0?!1:Array.isArray(Z.actions)&&Z.actions.length>0,f=a.filter(h).length,g=o.filter(h).length,v=l.filter(h).length,m=c.filter(h).length,p=u.filter(h).length,y=d.filter(h).length,M=$b(s);if(na.hash===M)return na.result;const b=Vv().entries.map(Z=>Z.id),P=new Set(b),R={spawnedParticles:Mr(a,P),allParticles:Mr(o,P),physicalParticles:Mr(l,P),lines:Mr(c,P),background:Mr(u,P),camera:Mr(d,P)},L=[...new Set([...R.spawnedParticles,...R.allParticles,...R.physicalParticles,...R.lines,...R.background,...R.camera])],B=jb(a,b),w=Yb(o,b),S=Tr("applyPhysicalRules",l,b,!0),D=Tr("applyLineRules",c,b,!0),K=Tr("applyBackgroundRules",u,b,!0),j=Tr("applyCameraRules",d,b,!0),ee=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",B.source,w.source,S.source,D.source,K.source,j.source,"return { applySpawnRules, applyLivingRules, applyPhysicalRules, applyLineRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const Y=new Function("helpers",ee)(zb),O={hash:M,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:f,livingRuleCount:g,physicalRuleCount:v,lineRuleCount:m,backgroundRuleCount:p,cameraRuleCount:y,usesParticleHsb:Ci([...a,...o]),usesPhysicalHsb:Ci(l),usesLineHsb:Ci(c),usesBackgroundHsb:Ci(u),usesLivingShapeType:Fu(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:R,requiredInputs:L,lineMap:[...B.lineMap,...w.lineMap,...S.lineMap,...D.lineMap,...K.lineMap,...j.lineMap],source:ee,applySpawnRules:typeof Y.applySpawnRules=="function"?Y.applySpawnRules:dh,applyLivingRules:typeof Y.applyLivingRules=="function"?Y.applyLivingRules:Ni,applyPhysicalRules:typeof Y.applyPhysicalRules=="function"?Y.applyPhysicalRules:Ni,applyLineRules:typeof Y.applyLineRules=="function"?Y.applyLineRules:Ni,applyBackgroundRules:typeof Y.applyBackgroundRules=="function"?Y.applyBackgroundRules:Ni,applyCameraRules:typeof Y.applyCameraRules=="function"?Y.applyCameraRules:Ni};return na={hash:M,result:O},O}catch(Z){const Y=Number.isFinite(Z==null?void 0:Z.lineNumber)?Number(Z.lineNumber):null;return{...na.result,hash:M,compileStatus:"error",compileError:(Z==null?void 0:Z.message)||String(Z),compileLine:Y,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:f,livingRuleCount:g,physicalRuleCount:v,lineRuleCount:m,backgroundRuleCount:p,cameraRuleCount:y,usesParticleHsb:Ci([...a,...o]),usesPhysicalHsb:Ci(l),usesLineHsb:Ci(c),usesBackgroundHsb:Ci(u),usesLivingShapeType:Fu(o,"shapeType"),requiredInputsByTarget:R,requiredInputs:L,lineMap:[...B.lineMap,...w.lineMap,...S.lineMap,...D.lineMap,...K.lineMap,...j.lineMap],source:ee,rejected:i.rejected}}}const Kl=16,gl=2e4,Bu=Math.log2(Kl),Zb=Math.log2(gl),Kb=100,Jb=5e3;function ia(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Kl))-Bu)/(Zb-Bu)))}function Kt(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return Number.isFinite(s)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?Ye(s):Ye((s-i)/(r-i)):0}function ku(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function Ye(n){return Math.max(0,Math.min(1,n))}function cs(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function mh(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function Qb(n){const e=mh(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function ex(n){const e=mh(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function as(n,e,t){const i=Ye(n),r=Ye(e),s=Ye(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function ra(n,e,t){const i=cs(n)??0,r=Ye(e),s=Ye(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const tx=`
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
`,nx=`
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
`;class ix{constructor(e,t={}){this._scene=e,this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0,this._lineVisibleCount=0,this._physicalVisibleCount=0,this._physicalPaintCount=0;const i=new Cn,r=new Cn;this._geo=i,this._lineGeo=r,this._allocateBuffers(this._N);const s=new pn({vertexShader:tx,fragmentShader:nx,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:Ri});this._mesh=new vf(i,s),this._mesh.frustumCulled=!1;const a=new Il({vertexColors:!0,transparent:!0,opacity:.9,blending:Ri,depthWrite:!1});this._lineMesh=new Ad(r,a),this._lineMesh.frustumCulled=!1,e.add(this._mesh),e.add(this._lineMesh),this._physicalGeometry=new Ul(.5,16,12),this._physicalMaterial=new _f({color:new st(1,1,1),side:$n,transparent:!0,opacity:1,roughness:.7,metalness:.1,emissive:new st(0,0,0),emissiveIntensity:0}),this._physicalMesh=new Oc(this._physicalGeometry,this._physicalMaterial,this._N),this._physicalMesh.count=0,this._physicalMesh.frustumCulled=!1,e.add(this._physicalMesh),this._physicalAmbientLight=new Sf(16777215,.45),this._physicalKeyLight=new Mf(16777215,.95),this._physicalKeyLight.position.set(.5,.8,1.2),e.add(this._physicalAmbientLight),e.add(this._physicalKeyLight),this._physicalDummy=new Xt,this._tmpInstanceColor=new st,this._mat=s,this._lineMat=a,this._lastBlending=s.blending,this._background=new st(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._compiledRules=Ou([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._binRms=new Float32Array(this._N),this._linePos=new Float32Array(this._N*2*3),this._lineCol=new Float32Array(this._N*2*3),this._lineThickness=new Float32Array(this._N),this._lineAlpha=new Float32Array(this._N),this._physicalPos=new Float32Array(this._N*3),this._physicalSize=new Float32Array(this._N),this._physicalCol=new Float32Array(this._N*3),this._physicalOpacity=new Float32Array(this._N),this._physicalRoughness=new Float32Array(this._N),this._physicalMetalness=new Float32Array(this._N),this._physicalLuminosity=new Float32Array(this._N),this._aPos=new Qt(this._pos,3),this._aCol=new Qt(this._col,3),this._aSz=new Qt(this._sz,1),this._aAlpha=new Qt(this._alpha,1),this._aShape=new Qt(this._shape,1),this._aLinePos=new Qt(this._linePos,3),this._aLineCol=new Qt(this._lineCol,3);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape,this._aLinePos,this._aLineCol])t.setUsage(yp);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this._lineGeo.setAttribute("position",this._aLinePos),this._lineGeo.setAttribute("color",this._aLineCol),this._physicalMesh&&(this._scene.remove(this._physicalMesh),this._physicalMesh=new Oc(this._physicalGeometry,this._physicalMaterial,this._N),this._physicalMesh.count=0,this._physicalMesh.frustumCulled=!1,this._scene.add(this._physicalMesh)),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s),binRms:this._binRms.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c],this._binRms[l]=this._binRms[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0,this._binRms[r+l]=a.binRms?a.binRms[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u],this._pan[i-r-o+c]=a.pan?a.pan[u]:0,this._binRms[i-r-o+c]=a.binRms?a.binRms[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._lineVisibleCount=0,this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._lineVisibleCount=0,this._physicalPaintCount=0,this._physicalVisibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._lineGeo.setDrawRange(0,0),this._physicalMesh&&(this._physicalMesh.count=0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let s=0;s<r;s++)i.sz[s]=Math.max(0,i.sz[s]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=Ou(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=Qb(i),s=ex(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number.isFinite(Number(t.deltaTime))&&Number(t.deltaTime)>0?Number(t.deltaTime):1/60,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?Ye(t.binMagnitude):0,binPhase:Number.isFinite(t.binPhase)?Ye(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?Ye(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?Ye(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?Ye(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?Ye(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,canvasWidth:Number(t.canvasWidthPx)||0,canvasHeight:Number(t.canvasHeightPx)||0,audioLengthSec:Number(t.audioLengthSec)||0,frequencyHz:i,notePitchClass:r,octave:s,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount),t=Math.max(0,this._physicalVisibleCount);if(e===0&&t===0)return{empty:!0,min:new G,max:new G,center:new G,size:new G};const i=new G(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),r=new G(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let o=0;o<e;o++){const l=this._pos[o*3],c=this._pos[o*3+1],u=this._pos[o*3+2];l<i.x&&(i.x=l),c<i.y&&(i.y=c),u<i.z&&(i.z=u),l>r.x&&(r.x=l),c>r.y&&(r.y=c),u>r.z&&(r.z=u)}for(let o=0;o<t;o++){const c=Math.max(0,this._physicalSize[o])*.5,u=this._physicalPos[o*3],d=this._physicalPos[o*3+1],h=this._physicalPos[o*3+2];u-c<i.x&&(i.x=u-c),d-c<i.y&&(i.y=d-c),h-c<i.z&&(i.z=h-c),u+c>r.x&&(r.x=u+c),d+c>r.y&&(r.y=d+c),h+c>r.z&&(r.z=h+c)}const s=i.clone().add(r).multiplyScalar(.5),a=r.clone().sub(i);return{empty:!1,min:i,max:r,center:s,size:a}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0,o.binRMSEnergy=Number.isFinite(this._binRms[c])?this._binRms[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];let d=Number.isFinite(u.red)?Ye(u.red):this._col[c*3],h=Number.isFinite(u.green)?Ye(u.green):this._col[c*3+1],f=Number.isFinite(u.blue)?Ye(u.blue):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const g=as(d,h,f),v=cs(u.hue),m=Number.isFinite(u.saturation)?Ye(u.saturation):g.s,p=Number.isFinite(u.brightness)?Ye(u.brightness):g.v,y=ra(v??g.h,m,p);d=y.r,h=y.g,f=y.b}this._col[c*3]=d,this._col[c*3+1]=h,this._col[c*3+2]=f,this._alpha[c]=Number.isFinite(u.opacity)?Math.max(0,Math.min(1,u.opacity)):this._alpha[c],this._shape[c]=ku(u.shapeType),this._binRms[c]=Number.isFinite(o.binRMSEnergy)?Ye(o.binRMSEnergy):this._binRms[c],l++}return l}applyBackgroundRules(e){const t=this._background,i=as(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?Ye(r.red):t.r,a=Number.isFinite(r.green)?Ye(r.green):t.g,o=Number.isFinite(r.blue)?Ye(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=as(s,a,o),c=cs(r.hue),u=Number.isFinite(r.saturation)?Ye(r.saturation):l.s,d=Number.isFinite(r.brightness)?Ye(r.brightness):l.v,h=ra(c??l.h,u,d);s=h.r,a=h.g,o=h.b}t.setRGB(s,a,o)}applyLineRules(e,t){this._compiledRules.applyLineRules(e,t)}applyPhysicalRules(e,t){}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1,targetX:(t==null?void 0:t.targetX)??0,targetY:(t==null?void 0:t.targetY)??0,targetZ:(t==null?void 0:t.targetZ)??0,angleOfView:(t==null?void 0:t.angleOfView)??55};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null,targetX:Number.isFinite(i.targetX)?i.targetX:null,targetY:Number.isFinite(i.targetY)?i.targetY:null,targetZ:Number.isFinite(i.targetZ)?i.targetZ:null,angleOfView:Number.isFinite(i.angleOfView)?i.angleOfView:null}}update(e,t,i,r){var ie,pe,Re,we,T,z,q,ae,_e,be;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((ie=e.ctx)==null?void 0:ie.sampleRate)??44100)/2,d=t.persistMode??0,h=t.inputGain??1,f=t.defaultParticleSize??6,g=Math.max(Kl,Math.min(gl,Number(t.freqNormMin??40))),v=Math.max(g+1,Math.min(gl,Number(t.freqNormMax??12e3))),m=ia(g),p=ia(v),y=Number(t.binMagnitudeNormMin??-70),M=Number(t.binMagnitudeNormMax??0),b=Number(t.binFluxNormMin??0),P=Number(t.binFluxNormMax??.5),R=Number(t.binPhaseDeviationNormMin??0),L=Number(t.binPhaseDeviationNormMax??Math.PI),B=Number(t.binAttackTimeNormMin??5),w=Number(t.binAttackTimeNormMax??500),S=Number(t.globalRmsNormMin??-60),D=Number(t.globalRmsNormMax??0),K=Number(t.spectralCentroidNormMin??150),j=Number(t.spectralCentroidNormMax??8e3),ee=Number(t.globalSpectralFluxNormMin??0),Z=Number(t.globalSpectralFluxNormMax??100),Y=Number(t.spectralFlatnessNormMin??0),O=Number(t.spectralFlatnessNormMax??1),x=Number(t.particlesByFrame),A=Number.isFinite(x)?Math.max(Kb,Math.min(Jb,Math.round(x))):1e3,N=Math.max(1,A),k=Math.pow(v/Math.max(g,1e-6),1/N),ne=Number.isFinite(k)&&k>1?k:1,Ce=t.blendMode??"screen",te=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,oe=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,Q=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,xe=!!(e.analyserL&&e.analyserR&&e.getBinPan),me=((pe=e.getBinMagnitude)==null?void 0:pe.call(e))||null,Ve=((Re=e.getBinFlux)==null?void 0:Re.call(e))||null,Ge=((we=e.getBinPhaseDeviation)==null?void 0:we.call(e))||null,ze=((T=e.getBinPhase)==null?void 0:T.call(e))||null,qe=((z=e.getBinEnvelope)==null?void 0:z.call(e))||null,it=((q=e.getBinAttackTime)==null?void 0:q.call(e))||null,I=new Set(((ae=this._compiledRules)==null?void 0:ae.requiredInputs)||[]),yt=I.has("binMagnitude"),je=I.has("binPhase"),Ze=I.has("binFlux"),Be=I.has("binPhaseDeviation"),rt=I.has("binAttackTime"),Ue=I.has("binEnvelope")||I.has("binEnvelopeState"),C=t.ruleEngineEnabled!==!1,_=C&&this._compiledRules.spawnRuleCount>0,W=C&&this._compiledRules.lineRuleCount>0;if(Ce==="alpha"){const J=this._mat;(J.blending!==So||J.blendSrc!==fs||J.blendDst!==ms||J.blendEquation!==pi)&&(J.blending=So,J.blendSrc=fs,J.blendDst=ms,J.blendEquation=pi,J.needsUpdate=!0,this._lastBlending=J.blending),J.depthWrite&&(J.depthWrite=!1,J.needsUpdate=!0)}else{const de={screen:Ri,lighter:Ri,"source-over":Fi,multiply:Fi}[Ce]??Ri;de!==this._lastBlending&&(this._mat.blending=de,this._mat.needsUpdate=!0,this._lastBlending=de);const Ke=Ce==="source-over";this._mat.depthWrite!==Ke&&(this._mat.depthWrite=Ke,this._mat.needsUpdate=!0)}this._lineMat.blending!==this._mat.blending&&(this._lineMat.blending=this._mat.blending,this._lineMat.needsUpdate=!0),this._lineMat.depthWrite&&(this._lineMat.depthWrite=!1,this._lineMat.needsUpdate=!0);const ce=Number(t.cameraCanvasWidthUnits),ue=Number(t.cameraCanvasHeightUnits),se=Number.isFinite(ce)&&ce>0?ce:i,Te=Number.isFinite(ue)&&ue>0?ue:r,ye=(te%360+360)%360;this._background.setHSL(ye/360,Ye(oe/100),Ye(Q/100));const Pe=Te/2,Je=((_e=e.audioEl)==null?void 0:_e.currentTime)??0,ge=((be=e.audioEl)==null?void 0:be.duration)??0,fe={binMagnitude:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:Kt(e.rmsDbfs,S,D),binRMSEnergy:Kt(e.rmsDbfs,S,D),spectralCentroid:Kt(e.spectralCentroidHz,K,j),spectralFlux:Kt(e.spectralFluxAU,ee,Z),spectralFlatness:Kt(e.spectralFlatnessRatio,Y,O),inharmonicity:Ye(e.inharmonicity),peakAmplitude:Ye(e.peakAmplitude),zeroCrossingRate:Ye(e.zeroCrossingRate),spectralRolloff:Ye(e.spectralRolloff),spectralSpread:Ye(e.spectralSpread),spectralSkewness:Ye(e.spectralSkewness),chromagram:Ye(e.chromagram)};if(fe.amplitude=fe.globalRmsEnergy,yt&&me&&me.length>0){let J=0;for(let de=0;de<me.length;de++)J+=Kt(me[de],y,M);fe.binMagnitude=J/me.length}if(Ze&&Ve&&Ve.length>0){let J=0;for(let de=0;de<Ve.length;de++)J+=Kt(Ve[de],b,P);fe.binFlux=J/Ve.length}if(Be&&Ge&&Ge.length>0){let J=0;for(let de=0;de<Ge.length;de++)J+=Kt(Ge[de],R,L);fe.binPhaseDeviation=J/Ge.length}if(rt&&it&&it.length>0){let J=0;for(let de=0;de<it.length;de++)J+=Kt(it[de],B,w);fe.binAttackTime=J/it.length}if(Ue&&qe&&qe.length>0){let J=0;for(let de=0;de<qe.length;de++)J+=qe[de];fe.binEnvelope=J/qe.length,fe.binEnvelopeState=fe.binEnvelope}if(je&&ze&&ze.length>0){let J=0;for(let de=0;de<ze.length;de++)J+=Kt(ze[de],-Math.PI,Math.PI);fe.binPhase=J/ze.length}let Ae=d===1&&_?this._paintCount:0,Xe=d===1&&W?this._lineVisibleCount:0,Ie=0;const tt=(J,de=1)=>{if(!_)return;if(Ae>=this._N&&d===1){const Ne=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),Oe=this._archiveAndCompactOldest(Ne,Ae,t,Je);Ae=Math.max(0,Ae-Oe)}if(Ae>=this._N)return;const Ke=J.hz,le=ia(Ke),ke=Kt(le,m,p),Me=Number.isFinite(J.binPan)?J.binPan:e.pan??0;Number.isFinite(J.byte)&&J.byte;const We=Number.isFinite(J.energy)?J.energy:0,ht=Number.isFinite(J.binMagnitude)?J.binMagnitude:void 0,gt=Number.isFinite(J.binPhase)?J.binPhase:void 0,lt=Number.isFinite(J.binFlux)?J.binFlux:void 0,pt=Number.isFinite(J.binPhaseDeviation)?J.binPhaseDeviation:void 0,Nt=Number.isFinite(J.binAttackTime)?J.binAttackTime:void 0,It=Number.isFinite(J.binEnvelope)?J.binEnvelope:void 0,Yt=Number.isFinite(J.binRMSEnergy)?J.binRMSEnergy:void 0,tn=(ke*2-1)*Pe,$t=0,E=0,V=Ye(We),U={x:$t,y:tn,z:E,size:Math.max(1,f*(.5+We*1.5)),red:V,green:V,blue:V,opacity:Math.min(1,(.08+We*1.9)*de),particleCount:1,shapeType:"square"};_&&this.applySpawnRulesToParticle({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:Ke,normFreq:ke,pan:Me,spectralCentroid:fe.spectralCentroid,spectralFlux:fe.spectralFlux,spectralFlatness:fe.spectralFlatness,inharmonicity:fe.inharmonicity,peakAmplitude:fe.peakAmplitude,zeroCrossingRate:fe.zeroCrossingRate,spectralRolloff:fe.spectralRolloff,spectralSpread:fe.spectralSpread,spectralSkewness:fe.spectralSkewness,chromagram:fe.chromagram,binMagnitude:ht,binPhase:gt,binFlux:lt,binPhaseDeviation:pt,binAttackTime:Nt,binEnvelope:It,binEnvelopeState:It,binRMSEnergy:Yt,globalRmsEnergy:fe.globalRmsEnergy,amplitude:fe.amplitude,time:Je,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:se,canvasHeightUnits:Te,audioLengthSec:ge}),particle:U});const $=Number.isFinite(U.particleCount)?Ye(U.particleCount):1;if($<=0||$<1&&Math.random()>$)return;this._pos[Ae*3]=Number.isFinite(U.x)?U.x:$t,this._pos[Ae*3+1]=Number.isFinite(U.y)?U.y:tn,this._pos[Ae*3+2]=Number.isFinite(U.z)?U.z:E,this._sz[Ae]=Number.isFinite(U.size)?Math.max(0,U.size):Math.max(2,f);let X=Number.isFinite(U.red)?Ye(U.red):V,ve=Number.isFinite(U.green)?Ye(U.green):V,Ee=Number.isFinite(U.blue)?Ye(U.blue):V;if(this._compiledRules.usesParticleHsb){const Ne=as(X,ve,Ee),Oe=cs(U.hue),Qe=Number.isFinite(U.saturation)?Ye(U.saturation):Ne.s,et=Number.isFinite(U.brightness)?Ye(U.brightness):Ne.v,He=ra(Oe??Ne.h,Qe,et);X=He.r,ve=He.g,Ee=He.b}this._col[Ae*3]=X,this._col[Ae*3+1]=ve,this._col[Ae*3+2]=Ee,this._alpha[Ae]=Number.isFinite(U.opacity)?Math.max(0,Math.min(1,U.opacity)):Math.min(1,(.08+We*1.9)*de),this._shape[Ae]=ku(U.shapeType),this._pan[Ae]=Number.isFinite(Me)?Math.max(-1,Math.min(1,Me)):0,this._binRms[Ae]=Number.isFinite(Yt)?Ye(Yt):0,Ae++},nt=(J,de=1)=>{if(!W||Xe>=this._N)return;const Ke=J.hz,le=ia(Ke),ke=Kt(le,m,p),Me=Number.isFinite(J.binPan)?J.binPan:e.pan??0,We=Number.isFinite(J.energy)?J.energy:0,ht=Number.isFinite(J.binMagnitude)?J.binMagnitude:void 0,gt=Number.isFinite(J.binPhase)?J.binPhase:void 0,lt=Number.isFinite(J.binFlux)?J.binFlux:void 0,pt=Number.isFinite(J.binPhaseDeviation)?J.binPhaseDeviation:void 0,Nt=Number.isFinite(J.binAttackTime)?J.binAttackTime:void 0,It=Number.isFinite(J.binEnvelope)?J.binEnvelope:void 0,Yt=Number.isFinite(J.binRMSEnergy)?J.binRMSEnergy:void 0,tn=(ke*2-1)*Pe,$t=0,E=0,V=Ye(We),U={x:$t,y:tn,z:E,length:Math.max(1,Pe*.12*We),direction:"y",thickness:1,lineCount:1,red:V,green:V,blue:V,opacity:Math.min(1,(.08+We*1.4)*de)};W&&this.applyLineRules({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:Ke,normFreq:ke,pan:Me,spectralCentroid:fe.spectralCentroid,spectralFlux:fe.spectralFlux,spectralFlatness:fe.spectralFlatness,inharmonicity:fe.inharmonicity,peakAmplitude:fe.peakAmplitude,zeroCrossingRate:fe.zeroCrossingRate,spectralRolloff:fe.spectralRolloff,spectralSpread:fe.spectralSpread,spectralSkewness:fe.spectralSkewness,chromagram:fe.chromagram,binMagnitude:ht,binPhase:gt,binFlux:lt,binPhaseDeviation:pt,binAttackTime:Nt,binEnvelope:It,binEnvelopeState:It,binRMSEnergy:Yt,globalRmsEnergy:fe.globalRmsEnergy,amplitude:fe.amplitude,time:Je,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:se,canvasHeightUnits:Te,audioLengthSec:ge})},U);const $=Number.isFinite(U.lineCount)?Ye(U.lineCount):1;if($<=0||$<1&&Math.random()>$)return;let X=Number.isFinite(U.red)?Ye(U.red):V,ve=Number.isFinite(U.green)?Ye(U.green):V,Ee=Number.isFinite(U.blue)?Ye(U.blue):V;if(this._compiledRules.usesLineHsb){const on=as(X,ve,Ee),Mn=cs(U.hue),nn=Number.isFinite(U.saturation)?Ye(U.saturation):on.s,ln=Number.isFinite(U.brightness)?Ye(U.brightness):on.v,Bi=ra(Mn??on.h,nn,ln);X=Bi.r,ve=Bi.g,Ee=Bi.b}const Ne=Number.isFinite(U.opacity)?Math.max(0,Math.min(1,U.opacity)):.4,Oe=X*Ne,Qe=ve*Ne,et=Ee*Ne,He=Number.isFinite(U.x)?U.x:$t,dt=Number.isFinite(U.y)?U.y:tn,xt=Number.isFinite(U.z)?U.z:E,Tt=(Number.isFinite(U.length)?Math.max(0,U.length):Math.max(1,Pe*.12*We))*.5,ft=typeof U.direction=="string"?U.direction.trim().toLowerCase():"",$e=ft==="x"||ft==="y"||ft==="z"?ft:"y";let zt=He,St=dt,yn=xt,ri=He,an=dt,_i=xt;$e==="x"?(zt=He-Tt,ri=He+Tt):$e==="z"?(yn=xt-Tt,_i=xt+Tt):(St=dt-Tt,an=dt+Tt);const mt=Xe*6;this._linePos[mt]=zt,this._linePos[mt+1]=St,this._linePos[mt+2]=yn,this._linePos[mt+3]=ri,this._linePos[mt+4]=an,this._linePos[mt+5]=_i,this._lineCol[mt]=Oe,this._lineCol[mt+1]=Qe,this._lineCol[mt+2]=et,this._lineCol[mt+3]=Oe,this._lineCol[mt+4]=Qe,this._lineCol[mt+5]=et,this._lineThickness[Xe]=Number.isFinite(U.thickness)?Math.max(0,U.thickness):1,this._lineAlpha[Xe]=Ne,Xe++},Mt=o.length/Math.max(1e-6,u),H=J=>{const de=Math.floor(J*Mt);return Math.max(0,Math.min(l-1,de))};let Se=g;for(let J=0;J<N;J++){const de=J===N-1?v:Math.min(v,Se*ne),Ke=Math.sqrt(Math.max(g,Se)*Math.max(g,de)),le=H(Se),ke=H(de);if(ke<le){Se=de;continue}let Me=0,We=0,ht=0,gt=0,lt=0,pt=0,Nt=0,It=0,Yt=0,tn=0,$t=0;for(let U=le;U<=ke;U++){const $=o[U],X=me&&U<me.length?Kt(me[U],y,M):$/255;ht+=X,yt&&(pt+=X),je&&ze&&U<ze.length&&(Nt+=Kt(ze[U],-Math.PI,Math.PI)),Ze&&Ve&&U<Ve.length&&(It+=Kt(Ve[U],b,P)),Be&&Ge&&U<Ge.length&&(Yt+=Kt(Ge[U],R,L)),rt&&it&&U<it.length&&(tn+=Kt(it[U],B,w)),Ue&&qe&&U<qe.length&&($t+=Kt(qe[U]/3,0,1));const ve=xe?e.getBinPan(U):e.pan??0,Ee=Math.max(1,$);gt+=ve*Ee,lt+=Ee,$>We&&(We=$),Me++}if(Me<=0||We<=1)continue;const E=ht/Me,V=E*h;if(tt({hz:Ke,byte:We,energy:V,binPan:lt>0?gt/lt:0,binRMSEnergy:Ye(E),binMagnitude:yt?pt/Me:void 0,binPhase:je?Nt/Me:void 0,binFlux:Ze?It/Me:void 0,binPhaseDeviation:Be?Yt/Me:void 0,binAttackTime:rt?tn/Me:void 0,binEnvelope:Ue?$t/Me:void 0}),nt({hz:Ke,energy:V,binPan:lt>0?gt/lt:0,binRMSEnergy:Ye(E),binMagnitude:yt?pt/Me:void 0,binPhase:je?Nt/Me:void 0,binFlux:Ze?It/Me:void 0,binPhaseDeviation:Be?Yt/Me:void 0,binAttackTime:rt?tn/Me:void 0,binEnvelope:Ue?$t/Me:void 0}),Se=de,Ae>=this._N)break}if(d===1?(this._paintCount=Ae,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._lineVisibleCount=Xe,this._lineGeo.setDrawRange(0,this._lineVisibleCount*2),this._physicalPaintCount=Ie,this._physicalVisibleCount=this._physicalPaintCount,this._pruneArchive(t,Je)):(this._paintCount=0,this._visibleCount=Ae,this._geo.setDrawRange(0,Ae),this._lineVisibleCount=Xe,this._lineGeo.setDrawRange(0,Xe*2),this._physicalPaintCount=0,this._physicalVisibleCount=Ie),this._physicalMesh){const J=Math.max(0,Math.min(this._N,this._physicalVisibleCount));let de=0,Ke=0,le=0,ke=0;for(let Me=0;Me<J;Me++){const We=this._physicalPos[Me*3],ht=this._physicalPos[Me*3+1],gt=this._physicalPos[Me*3+2],lt=Math.max(0,this._physicalSize[Me]);this._physicalDummy.position.set(We,ht,gt),this._physicalDummy.scale.set(lt,lt,lt),this._physicalDummy.rotation.set(0,0,0),this._physicalDummy.updateMatrix(),this._physicalMesh.setMatrixAt(Me,this._physicalDummy.matrix);const pt=Ye(this._physicalCol[Me*3]),Nt=Ye(this._physicalCol[Me*3+1]),It=Ye(this._physicalCol[Me*3+2]);this._tmpInstanceColor.setRGB(pt,Nt,It),this._physicalMesh.setColorAt(Me,this._tmpInstanceColor),de+=this._physicalRoughness[Me],Ke+=this._physicalMetalness[Me],le+=this._physicalLuminosity[Me],ke+=this._physicalOpacity[Me]}if(this._physicalMesh.count=J,this._physicalMesh.instanceMatrix.needsUpdate=!0,this._physicalMesh.instanceColor&&(this._physicalMesh.instanceColor.needsUpdate=!0),J>0){const Me=1/J;this._physicalMaterial.roughness=Ye(de*Me),this._physicalMaterial.metalness=Ye(Ke*Me),this._physicalMaterial.opacity=Ye(ke*Me),this._physicalMaterial.transparent=this._physicalMaterial.opacity<.999;const We=Math.max(0,le*Me);this._physicalMaterial.emissiveIntensity=We,this._physicalMaterial.emissive.setScalar(Math.min(1,We))}this._physicalMaterial.needsUpdate=!0}t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...fe,time:Je,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:se,canvasHeightUnits:Te,audioLengthSec:ge})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...fe,time:Je,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:se,canvasHeightUnits:Te,audioLengthSec:ge})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...fe,time:Je,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:se,canvasHeightUnits:Te,audioLengthSec:ge})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0,this._lineMat.blending=e,this._lineMat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}getLineVisibleCount(){return this._lineVisibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;for(let i=0;i<this._N;i++){const r=i*6;this._linePos[r]*=e,this._linePos[r+1]*=t,this._linePos[r+3]*=e,this._linePos[r+4]*=t}this._aPos.needsUpdate=!0,this._aLinePos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose(),this._lineMesh.geometry.dispose(),this._lineMat.dispose()}}function rx(){return window.AudioContext||window.webkitAudioContext}async function sx(n){if(!n)throw new Error("No file provided for decoding.");const e=rx();if(!e)throw new Error("Web Audio API is not supported in this browser.");const t=new e;try{const i=await n.arrayBuffer(),r=await t.decodeAudioData(i.slice(0));if(!r||!Number.isFinite(r.duration)||r.duration<=0)throw new Error("Audio decode produced no playable data.");return n}finally{try{await t.close()}catch{}}}const zu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#1C274C"/>\r
<path opacity="0.5" d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#1C274C"/>\r
</svg>`,Vu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"/>\r
</svg>`,ax=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#1C274C"/>\r
<path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#1C274C"/>\r
</svg>`,Hu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/>\r
</svg>`,ox=`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316V8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632Z" fill="#1C274C"/> <path d="M11 7.12303L11 8.76844V15.2316V16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0786 13.8532C22.3071 13.0455 22.3071 10.9545 21.0786 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z" fill="#1C274C"/> </g>

</svg>`,lx=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316V8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632Z" fill="#1C274C"/>\r
<path d="M11 7.12303L11 8.76844V15.2316V16.877C11 18.4934 12.4673 19.5152 13.6612 18.7302L21.0786 13.8532C22.3071 13.0455 22.3071 10.9545 21.0786 10.1468L13.6612 5.26983C12.4673 4.48482 11 5.50658 11 7.12303Z" fill="#1C274C"/>\r
</svg>`,Gu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path opacity="0.5" d="M2 11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C17 6.56878 17 8.21252 17 11.5V12.5C17 15.7875 17 17.4312 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5V11.5Z" fill="#1C274C"/>\r
<path d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z" fill="#1C274C"/>\r
</svg>`,Wu='<svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M6 4.5C6 3.56538 6 3.09808 6.20096 2.75C6.33261 2.52197 6.52197 2.33261 6.75 2.20096C7.09808 2 7.56538 2 8.5 2H15.5C16.4346 2 16.9019 2 17.25 2.20096C17.478 2.33261 17.6674 2.52197 17.799 2.75C18 3.09808 18 3.56538 18 4.5C18 5.43462 18 5.90192 17.799 6.25C17.6674 6.47803 17.478 6.66739 17.25 6.79904C16.9019 7 16.4346 7 15.5 7H8.5C7.56538 7 7.09808 7 6.75 6.79904C6.52197 6.66739 6.33261 6.47803 6.20096 6.25C6 5.90192 6 5.43462 6 4.5Z" fill="#1C274C"></path> <path d="M10 16V20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20V16C14 15.0572 14 14.5858 13.7071 14.2929C13.4142 14 12.9428 14 12 14C11.0572 14 10.5858 14 10.2929 14.2929C10 14.5858 10 15.0572 10 16Z" fill="#1C274C"></path> <path opacity="0.5" d="M19.0451 5.25C19.4997 5.25 19.8049 5.25037 20.0414 5.26579C20.2716 5.2808 20.3841 5.30776 20.4581 5.3369C20.7808 5.46395 21.0362 5.71937 21.1633 6.04208C21.1924 6.11609 21.2194 6.22858 21.2344 6.45878C21.2498 6.6953 21.2502 7.00044 21.2502 7.4551C21.2502 8.29243 21.2396 8.52185 21.1788 8.69392C21.0745 8.98918 20.8632 9.23455 20.5867 9.38148C20.4256 9.4671 20.2002 9.5116 19.3722 9.63581L15.2488 10.2543C14.4761 10.3702 13.8275 10.4675 13.315 10.6116C12.772 10.7643 12.2915 10.9923 11.9164 11.4278C11.3356 12.1023 11.2719 12.9787 11.255 13.9875C11.2549 13.9945 11.2549 14.0015 11.2549 14.0085C11.4643 14 11.7098 14 12 14C12.2947 14 12.5433 14 12.7548 14.0089C12.7728 12.9462 12.8717 12.6172 13.053 12.4067C13.1625 12.2796 13.3305 12.1654 13.7211 12.0556C14.132 11.94 14.6863 11.8555 15.5181 11.7307L19.7139 11.1014C20.3646 11.0044 20.8715 10.9288 21.2905 10.7061C21.8989 10.3829 22.3638 9.84304 22.5932 9.19346C22.7512 8.74599 22.7508 8.23353 22.7503 7.57559L22.7502 7.43099C22.7502 7.00662 22.7502 6.65233 22.7312 6.3612C22.7115 6.05823 22.6689 5.77171 22.559 5.49258C22.2795 4.78261 21.7176 4.22069 21.0076 3.94117C20.7285 3.83128 20.442 3.78872 20.139 3.76897C19.8478 3.74999 19.4936 3.74999 19.0692 3.75H18.0002V5.25H19.0451Z" fill="#1C274C"></path> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M4.75 4.5C4.75 4.08579 5.08579 3.75 5.5 3.75H6V5.25H5.5C5.08579 5.25 4.75 4.91421 4.75 4.5Z" fill="#1C274C"></path> </g></svg>';function Sr(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Ut(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function Pn(n,e,t){!n||!e||(n.innerHTML="",n.append(Ut("span","audio-player__icon",{html:e})),t&&n.setAttribute("aria-label",t))}function cx(n){if(!n){console.warn("[AudioPlayer] No container element.");const k=new Audio;return k.crossOrigin="anonymous",{audioEl:k,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Ut("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=document.getElementById("app");function a(k){r.classList.toggle("audio-player__collapse-btn--icon",k),k?(Pn(r,zu,"Expand player"),r.title="Expand player"):(r.textContent="«",r.setAttribute("aria-label","Collapse audio player"),r.title="Collapse player"),s&&s.classList.toggle("audio-player-collapsed",k)}a(!1);const o=Ut("div","audio-player__body"),l=Ut("div","audio-player__file-row"),c=Ut("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});c.style.display="none";const u=Ut("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});Pn(u,zu,"Open audio file");const d=Ut("span","audio-player__file-name",{text:"No file loaded"});l.append(c,u);const h=Ut("div","audio-player__transport"),f=Ut("button","audio-player__btn audio-player__btn--play cp-btn cp-btn-icon",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});Pn(f,Vu,"Play");const g=Ut("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});Pn(g,Hu,"Stop");const v=Ut("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});Pn(v,ox,"−10 seconds");const m=Ut("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});Pn(m,lx,"+10 seconds");const p=Ut("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});Pn(p,rh,"Save PNG");const y=Ut("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-record","aria-label":"Record video",disabled:"true",title:"Record canvas and audio"});Pn(y,Gu,"Record video");const M=Ut("button","audio-player__btn cp-btn cp-btn-icon",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});Pn(M,Wu,"Paint all");const b=Ut("div","audio-player__speed-wrap"),P=Ut("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),R=Ut("span","audio-player__speed-suffix",{text:"x"});b.append(P,R),h.append(v,f,g,m,p,y,M,b);const L=Ut("div","audio-player__progress-row"),B=Ut("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function w(k){B.style.background=`linear-gradient(90deg, var(--color-accent) ${k}%, var(--color-border) ${k}%)`}w(0);const S=Ut("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),D=Ut("div","audio-player__progress-meta");D.append(d,S),L.append(B,D),o.append(l,h,L),n.append(r,o);function K(k){Pn(f,k?ax:Vu,k?"Pause":"Play")}function j(k){Pn(y,k?Hu:Gu,k?"Stop recording":"Record video")}function ee(){Pn(M,Wu,"Paint all")}function Z(k,ne=""){c.disabled=k,f.disabled=k||!e.src,g.disabled=k||!e.src,v.disabled=k||!e.src,m.disabled=k||!e.src,y.disabled=k||!e.src,M.disabled=k||!e.src,P.disabled=k||!e.src,k&&ne&&(d.textContent=ne)}function Y(k){const ne=Math.max(.1,Math.min(16,Number(k)));Number.isFinite(ne)&&(e.playbackRate=ne,P.value=String(Number(ne.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:ne},bubbles:!0})))}function O(k,ne=(k==null?void 0:k.name)||"Audio loaded"){k&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(k),e.load(),d.textContent=ne,t=!1,K(!1),f.classList.remove("audio-player__btn--active"),B.value="0",w(0),S.textContent="0:00 / –:––",x(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:k,audioEl:e},bubbles:!0})))}function x(){f.disabled=!1,g.disabled=!1,v.disabled=!1,m.disabled=!1,y.disabled=!1,M.disabled=!1,P.disabled=!1}c.addEventListener("change",async k=>{const ne=k.target.files[0];if(ne){Z(!0,`Loading ${ne.name}...`);try{d.textContent=`Decoding ${ne.name}...`;const Ce=await sx(ne);O(Ce,Ce.name)}catch(Ce){console.warn("[AudioPlayer] decode failed:",Ce),d.textContent="Decode failed. Try another file."}finally{Z(!1),c.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(k){console.warn("[AudioPlayer] play() failed:",k.message)}}),e.addEventListener("play",()=>{t=!0,K(!0),f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,K(!1),f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,K(!1),f.classList.remove("audio-player__btn--active")}),g.addEventListener("click",()=>{e.pause(),e.currentTime=0,B.value="0",w(0),S.textContent=`0:00 / ${Sr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),v.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),m.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),p.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),y.addEventListener("click",()=>{y.disabled||n.dispatchEvent(new CustomEvent("player:recordvideo-toggle",{detail:{audioEl:e},bubbles:!0}))}),M.addEventListener("click",()=>{M.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",k=>{var Ce;const ne=!!((Ce=k==null?void 0:k.detail)!=null&&Ce.running);M.disabled=ne||!e.src,y.disabled=ne||!e.src,P.disabled=ne||!e.src,ee(),M.classList.toggle("audio-player__btn--active",ne)}),n.addEventListener("player:recordvideo-state",k=>{var Ce;const ne=!!((Ce=k==null?void 0:k.detail)!=null&&Ce.running);j(ne),y.classList.toggle("audio-player__btn--active",ne),M.disabled=ne||!e.src,!ne&&!M.disabled&&e.src&&(y.disabled=!1),P.disabled=ne||!e.src}),P.addEventListener("keydown",k=>{k.key==="Enter"&&(k.preventDefault(),Y(P.value),P.blur())});let A=!1;B.addEventListener("mousedown",()=>{A=!0}),B.addEventListener("touchstart",()=>{A=!0},{passive:!0}),B.addEventListener("input",()=>{const k=parseFloat(B.value);w(k),e.duration&&(S.textContent=`${Sr(e.duration*k/100)} / ${Sr(e.duration)}`)}),B.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(B.value)/100*e.duration),A=!1}),e.addEventListener("timeupdate",()=>{if(A)return;const k=e.currentTime,ne=e.duration;if(!isFinite(ne)||ne===0)return;const Ce=k/ne*100;B.value=String(Ce),w(Ce),S.textContent=`${Sr(k)} / ${Sr(ne)}`}),e.addEventListener("loadedmetadata",()=>{S.textContent=`0:00 / ${Sr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),a(i)});function N(k,ne=(k==null?void 0:k.name)||"Audio loaded"){return k instanceof File?(O(k,ne),!0):!1}return{audioEl:e,getIsPlaying:()=>t,loadFile:N}}function bo(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function ux({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=bo("div","canvas-wrapper__resize-handle-right"),a=bo("div","canvas-wrapper__resize-handle-bottom"),o=bo("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(h,f,g){h.preventDefault();const v=h.touches?h.touches[0].clientX:h.clientX,m=h.touches?h.touches[0].clientY:h.clientY;l={type:f,startX:v,startY:m,startW:n.clientWidth,startH:n.clientHeight,handle:g},g.classList.add("dragging"),document.body.style.cursor=f==="right"?"ew-resize":f==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(h){if(!l)return;const f=h.touches?h.touches[0].clientX:h.clientX,g=h.touches?h.touches[0].clientY:h.clientY,v=f-l.startX,m=g-l.startY,p=160,y=120,M=e.getBoundingClientRect();let b=l.startW,P=l.startH;(l.type==="right"||l.type==="corner")&&(b=Math.max(p,Math.min(l.startW+v,M.width-4))),(l.type==="bottom"||l.type==="corner")&&(P=Math.max(y,Math.min(l.startH+m,window.innerHeight-4)));const R=i>0?b/i:1,L=r>0?P/r:1;i=b,r=P,n.style.width=`${b}px`,n.style.height=`${P}px`,t(b,P,R,L)}function d(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",h=>c(h,"right",s)),a.addEventListener("mousedown",h=>c(h,"bottom",a)),o.addEventListener("mousedown",h=>c(h,"corner",o)),s.addEventListener("touchstart",h=>c(h,"right",s),{passive:!1}),a.addEventListener("touchstart",h=>c(h,"bottom",a),{passive:!1}),o.addEventListener("touchstart",h=>c(h,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),window.addEventListener("resize",()=>{if(!n.style.width){const h=e.clientWidth,f=e.clientHeight,g=i>0?h/i:1,v=r>0?f/r:1;i=h,r=f,t(h,f,g,v)}}),{setSize(h,f){const g=i>0?h/i:1,v=r>0?f/r:1;i=h,r=f,n.style.width=`${h}px`,n.style.height=`${f}px`,t(h,f,g,v)},getSize(){return{w:i,h:r}}}}const gh=1,us=".ssp.json";function Xu({params:n,presetName:e="",presetLibrary:t=[],projectName:i=""}){return{schemaVersion:gh,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),projectName:String(i||""),presetName:String(e||""),params:n&&typeof n=="object"?n:{},presetLibrary:Array.isArray(t)?t:[]}}function dx(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return{schemaVersion:Number.isFinite(Number(e.schemaVersion))?Number(e.schemaVersion):gh,createdAt:e.createdAt||null,updatedAt:e.updatedAt||null,projectName:String(e.projectName||""),presetName:String(e.presetName||""),params:e.params,presetLibrary:Array.isArray(e.presetLibrary)?e.presetLibrary:[]}}function hx(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function ii(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Jl(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function px(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return ii(i/t)}function fx(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return ii(r/Math.max(s,e))}function mx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const d=n[u];if(!(d<r)&&d>=n[u-1]&&d>=n[u+1]){const h=u/Math.max(1,t-1)*i;s.push({i:u,hz:h,mag:d/255})}}if(s.length<2)return 0;s.sort((u,d)=>d.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const d=a[u],f=Math.max(1,Math.round(d.hz/o))*o,g=Math.abs(d.hz-f)/Math.max(f,1e-9);l+=g*d.mag,c+=d.mag}return c<=1e-9?0:ii(l/c*2)}function gx(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return ii(e/255)}function vx(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return ii(e/Math.max(1,n.length-1))}function _x(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let a=0;for(let c=0;c<i;c++)a+=Math.max(0,n[c]/255);if(a<=1e-9)return 0;const o=a*s;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const u=c/Math.max(1,i-1)*r;return ii(u/Math.max(1,r))}return 1}function vh(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Number.isFinite(t)?t:Jl(n,e);let a=0,o=0;for(let c=0;c<i;c++){const u=Math.max(0,n[c]/255),h=c/Math.max(1,i-1)*r-s;o+=h*h*u,a+=u}if(a<=1e-9)return 0;const l=Math.sqrt(o/a);return ii(l/Math.max(1,r))}function bx(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,s=e/2,a=Number.isFinite(t)?t:Jl(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*s):Math.max(1e-6,vh(n,e,a)*s);let l=0,c=0;for(let d=0;d<r;d++){const h=Math.max(0,n[d]/255),g=(d/Math.max(1,r-1)*s-a)/o;c+=g*g*g*h,l+=h}if(l<=1e-9)return 0;const u=c/l;return ii((u+2)/4)}function xx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let s=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const u=69+12*Math.log2(c/440),d=(Math.round(u)%12+12)%12;r[d]+=l,s+=l}if(s<=1e-9)return 0;let a=0;for(let o=0;o<12;o++)r[o]>a&&(a=r[o]);return ii(a/s)}function yx(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return ii((Number.isFinite(n)?n:0)/t)}const Mx=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g opacity="0.5">\r
<path d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z" fill="#1C274C"/>\r
</g>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1565 8.02441C11.5557 8.02441 11.8793 8.34806 11.8793 8.74731V10.4341H13.5661C13.9653 10.4341 14.289 10.7577 14.289 11.1569C14.289 11.5562 13.9653 11.8798 13.5661 11.8798H11.8793V13.5666C11.8793 13.9658 11.5557 14.2895 11.1565 14.2895C10.7572 14.2895 10.4336 13.9658 10.4336 13.5666V11.8798H8.74682C8.34758 11.8798 8.02393 11.5562 8.02393 11.1569C8.02393 10.7577 8.34758 10.4341 8.74682 10.4341H10.4336V8.74731C10.4336 8.34806 10.7572 8.02441 11.1565 8.02441Z" fill="#1C274C"/>\r
<path d="M17.1001 18.1219L20.7664 21.7882C21.0487 22.0705 21.5064 22.0705 21.7887 21.7882C22.071 21.5059 22.071 21.0482 21.7887 20.7659L18.1224 17.0996C17.809 17.4666 17.4671 17.8085 17.1001 18.1219Z" fill="#1C274C"/>\r
</svg>`,Sx=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g opacity="0.5">\r
<path d="M11.1566 20.3133C16.2137 20.3133 20.3133 16.2137 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133Z" fill="#1C274C"/>\r
</g>\r
<path d="M17.0996 18.1219C17.4666 17.8085 17.8085 17.4666 18.1219 17.0996L21.7882 20.7659C22.0705 21.0482 22.0705 21.5059 21.7882 21.7882C21.5059 22.0705 21.0482 22.0705 20.7659 21.7882L17.0996 18.1219Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.02344 11.1565C8.02344 10.7572 8.34709 10.4336 8.74633 10.4336H13.5656C13.9648 10.4336 14.2885 10.7572 14.2885 11.1565C14.2885 11.5557 13.9648 11.8794 13.5656 11.8794H8.74633C8.34709 11.8794 8.02344 11.5557 8.02344 11.1565Z" fill="#1C274C"/>\r
</svg>`,ti=document.getElementById("three-canvas"),ni=document.getElementById("canvas-wrapper"),en=document.getElementById("canvas-col"),Rt=new Od({canvas:ti,antialias:!0});Rt.setPixelRatio(window.devicePixelRatio);Rt.setClearColor(0,1);Rt.autoClear=!0;const Cs=new fv(Rt),ir=new uf,Ql=250,ec=new Cf(Ql);let Ar=!0;ec.userData.excludeFromPng=!0;ir.add(ec);function _h(){window.dispatchEvent(new CustomEvent("seesound:origin-sign-state",{detail:{enabled:Ar,size:Ql}}))}window.addEventListener("seesound:origin-sign-toggle",n=>{var t;const e=(t=n==null?void 0:n.detail)==null?void 0:t.enabled;typeof e=="boolean"?Ar=e:Ar=!Ar,ec.visible=Ar,_h()});_h();const Jt=new Na(-1,1,1,-1,.001,5e3),_n=new Ln(55,1,.001,5e3);let Fe=Jt;const Gt=new G(0,0,0),tc=new G(0,0,420),qu=tc.length(),bh=new mv(ir,Fe),Rr=new zr(new ot(1,1),Number(re.bloomStrength??1.15),Number(re.bloomRadius??.7),Number(re.bloomThreshold??.18)),sn=new _v(ir,Fe,{focus:Number(re.bokehFocus??380),aperture:Number(re.bokehAperture??12e-5),maxblur:Number(re.bokehMaxBlur??.01)});Cs.addPass(bh);Cs.addPass(Rr);Cs.addPass(sn);for(const n of[Jt,_n])n.position.copy(tc),n.up.set(0,1,0),n.lookAt(Gt);function nc(){const e=re.cameraProjection==="perspective"?_n:Jt;if(e===Fe)return;e.position.copy(Fe.position),e.quaternion.copy(Fe.quaternion),e.up.copy(Fe.up),e.zoom=Fe.zoom,e.lookAt(Gt),e.updateProjectionMatrix(),Fe=e,bh.camera=Fe,sn.camera=Fe;const t=Fe.isPerspectiveCamera?1:0;sn.materialBokeh.defines.PERSPECTIVE_CAMERA!==t&&(sn.materialBokeh.defines.PERSPECTIVE_CAMERA=t,sn.materialBokeh.needsUpdate=!0),vi()}function xo(n,e){var i,r,s;const t=Number(e);if(Number.isFinite(t)){if((i=sn==null?void 0:sn.uniforms)!=null&&i[n]){sn.uniforms[n].value=t;return}(s=(r=sn==null?void 0:sn.materialBokeh)==null?void 0:r.uniforms)!=null&&s[n]&&(sn.materialBokeh.uniforms[n].value=t)}}function xh(){const n=Number(re.postProcessEnabled??0)>=.5,e=Number(re.bloomEnabled??1)>=.5,t=Number(re.bokehEnabled??1)>=.5;Rr.enabled=n&&e,sn.enabled=n&&t,Rr.strength=Math.max(0,Number(re.bloomStrength??1.15)||0),Rr.radius=Math.max(0,Number(re.bloomRadius??.7)||0),Rr.threshold=Math.max(0,Math.min(1,Number(re.bloomThreshold??.18)||0)),xo("focus",Math.max(1,Number(re.bokehFocus??380)||380)),xo("aperture",Math.max(0,Number(re.bokehAperture??12e-5)||0)),xo("maxblur",Math.max(0,Number(re.bokehMaxBlur??.01)||0))}function Ex(){if(!(Number(re.postProcessEnabled??0)>=.5))return!1;const e=Number(re.bloomEnabled??1)>=.5,t=Number(re.bokehEnabled??1)>=.5;return e||t}const Ft={radius:420,azimuth:0,elevation:0};function vi(){const n=Fe.position.x-Gt.x,e=Fe.position.y-Gt.y,t=Fe.position.z-Gt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);Ft.radius=i,Ft.azimuth=Math.atan2(n,t),Ft.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function Ea(){const n=Math.cos(Ft.elevation);Fe.position.set(Gt.x+Ft.radius*n*Math.sin(Ft.azimuth),Gt.y+Ft.radius*Math.sin(Ft.elevation),Gt.z+Ft.radius*n*Math.cos(Ft.azimuth)),Fe.lookAt(Gt)}function yh(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Mh(){Gt.set(0,0,0);const n=Math.max(1,Rt.domElement.clientWidth||en.clientWidth||window.innerWidth),e=Math.max(1,Rt.domElement.clientHeight||en.clientHeight||window.innerHeight);ac(n,e);for(const t of[Jt,_n])t.position.copy(tc),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(Gt),t.updateProjectionMatrix();nc(),ic(!0),vi()}function ic(n=!1){if(re.cameraProjection==="perspective")return;const e=String(re.cameraAxoPreset||"orthoXY"),t=n?qu:Math.max(40,Number(Ft.radius)||qu),{azimuth:i,elevation:r}=yh(e);Ft.radius=t,Ft.azimuth=i,Ft.elevation=r,Ea(),vi()}vi();const ut={active:!1,button:-1,lastX:0,lastY:0,pinchDistance:0},Et={active:!1,offsetX:0,offsetY:0,scale:1,lastX:0,lastY:0,pinchDistance:0};function Sh(n){const e=Math.max(5,Math.min(2e3,Math.floor(Number(re.canvasScale)||100))),t=Math.max(5,Math.min(2e3,e+n));t!==e&&Lt("canvasScale",t)}function Eh(){Mh()}function wh(){wx()}function Ch(){Ct.clear()}function Ts(n,e,t){if(!n||!e)return;const i=String(t||"").trim();n.textContent="",n.append(Object.assign(document.createElement("span"),{className:"canvas-nav-actions__icon cp-btn-icon",innerHTML:e}),Object.assign(document.createElement("span"),{className:"canvas-nav-actions__label",textContent:i})),i&&n.setAttribute("aria-label",i)}const rc=document.createElement("div");rc.className="canvas-nav-actions";const $r=document.createElement("button");$r.type="button";$r.className="canvas-nav-actions__btn cp-btn";$r.title="Reset camera";Ts($r,sh,"Reset Camera");$r.addEventListener("click",Eh);const Zr=document.createElement("button");Zr.type="button";Zr.className="canvas-nav-actions__btn cp-btn";Zr.title="Fit image to canvas bounds";Ts(Zr,ah,"Fit");Zr.addEventListener("click",wh);const Kr=document.createElement("button");Kr.type="button";Kr.className="canvas-nav-actions__btn cp-btn";Kr.title="Clear particles and scene elements";Ts(Kr,ml,"Clear");Kr.addEventListener("click",Ch);const Jr=document.createElement("button");Jr.type="button";Jr.className="canvas-nav-actions__btn cp-btn";Jr.title="Increase canvas zoom";Ts(Jr,Mx,"Zoom In");Jr.addEventListener("click",()=>Sh(10));const Oi=document.createElement("button");Oi.type="button";Oi.className="canvas-nav-actions__btn canvas-nav-actions__btn--conditional cp-btn";Oi.title="Decrease canvas zoom";Ts(Oi,Sx,"Zoom Out");Oi.addEventListener("click",()=>Sh(-10));rc.append($r,Zr,Kr,Jr,Oi);const ju=document.getElementById("app")||document.body;ju&&ju.appendChild(rc);function Gr(){const n=ni.clientWidth,e=ni.clientHeight,t=en.clientWidth,i=en.clientHeight,r=n>=t*.95&&e>=i*.95;Oi.classList.toggle("is-visible",r),Oi.disabled=!r}window.addEventListener("resize",Gr);Gr();function sc(){ni.style.transform=`translate(${Et.offsetX}px, ${Et.offsetY}px) scale(${Et.scale})`}ti.addEventListener("contextmenu",n=>n.preventDefault());function vl(n,e,t){if(t===0)Ft.azimuth-=n*.006,Ft.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,Ft.elevation-e*.005)),Ea();else if(t===1){const i=Math.max(1,Rt.domElement.clientHeight||en.clientHeight||window.innerHeight),r=new G,s=new G,a=new G;Fe.updateMatrixWorld();const o=Fe.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Fe.isOrthographicCamera)l=(Fe.top-Fe.bottom)/(Math.max(.01,Fe.zoom)*i);else{const c=Math.max(.001,Fe.position.distanceTo(Gt)),u=Nl.degToRad(Fe.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Fe.zoom)}a.copy(r).multiplyScalar(-n*l),a.addScaledVector(s,e*l),Fe.position.add(a),Gt.add(a),vi()}else if(t===2){const i=-n*.004,r=-e*.004;Fe.rotateOnWorldAxis(new G(0,1,0),i),Fe.rotateX(r)}}function Th(n){if(Fe.isPerspectiveCamera){const e=new G;Fe.getWorldDirection(e);const t=Math.max(2,Ft.radius*.08),i=(n>0?1:-1)*t;Fe.position.addScaledVector(e,i),vi()}else{const e=n>0?.92:1.08;Fe.zoom=Math.max(.05,Math.min(64,Fe.zoom*e)),Fe.updateProjectionMatrix()}}en.addEventListener("mousedown",n=>{n.target===ti||ni.contains(n.target)&&n.target!==en||n.button===0&&(Et.active=!0,Et.lastX=n.clientX,Et.lastY=n.clientY,n.preventDefault())});en.addEventListener("touchstart",n=>{if(!(n.target===ti||ni.contains(n.target)&&n.target!==en)){if(n.touches.length===1)Et.active=!0,Et.lastX=n.touches[0].clientX,Et.lastY=n.touches[0].clientY;else if(n.touches.length===2){Et.active=!0;const e=n.touches[0].clientX-n.touches[1].clientX,t=n.touches[0].clientY-n.touches[1].clientY;Et.pinchDistance=Math.sqrt(e*e+t*t)}}},{passive:!1});ti.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(ut.active=!0,ut.button=n.button,ut.lastX=n.clientX,ut.lastY=n.clientY,n.preventDefault())});ti.addEventListener("touchstart",n=>{if(n.touches.length===1)ut.active=!0,ut.button=0,ut.lastX=n.touches[0].clientX,ut.lastY=n.touches[0].clientY;else if(n.touches.length===2){ut.active=!0,ut.button=1,ut.lastX=(n.touches[0].clientX+n.touches[1].clientX)/2,ut.lastY=(n.touches[0].clientY+n.touches[1].clientY)/2;const e=n.touches[0].clientX-n.touches[1].clientX,t=n.touches[0].clientY-n.touches[1].clientY;ut.pinchDistance=Math.sqrt(e*e+t*t)}n.cancelable&&n.preventDefault()},{passive:!1});window.addEventListener("mouseup",()=>{ut.active=!1,ut.button=-1,Et.active=!1});window.addEventListener("touchend",n=>{n.touches.length===0?(ut.active=!1,ut.button=-1,Et.active=!1):n.touches.length===1&&(ut.button=0,ut.lastX=n.touches[0].clientX,ut.lastY=n.touches[0].clientY)});window.addEventListener("mousemove",n=>{if(Et.active){const i=n.clientX-Et.lastX,r=n.clientY-Et.lastY;Et.lastX=n.clientX,Et.lastY=n.clientY,Et.offsetX+=i,Et.offsetY+=r,sc();return}if(!ut.active)return;const e=n.clientX-ut.lastX,t=n.clientY-ut.lastY;ut.lastX=n.clientX,ut.lastY=n.clientY,vl(e,t,ut.button)});window.addEventListener("touchmove",n=>{if(Et.active){if(n.cancelable&&n.preventDefault(),n.touches.length===1){const e=n.touches[0].clientX-Et.lastX,t=n.touches[0].clientY-Et.lastY;Et.lastX=n.touches[0].clientX,Et.lastY=n.touches[0].clientY,Et.offsetX+=e,Et.offsetY+=t,sc()}else if(n.touches.length===2){const e=n.touches[0].clientX-n.touches[1].clientX,t=n.touches[0].clientY-n.touches[1].clientY,i=Math.sqrt(e*e+t*t);if(Et.pinchDistance>0){const r=(i-Et.pinchDistance)*.005,s=Math.max(.05,Math.min(20,Et.scale+r));Lt("canvasScale",Math.round(s*100))}Et.pinchDistance=i}return}if(ut.active){if(n.cancelable&&n.preventDefault(),n.touches.length===1&&ut.button===0){const e=n.touches[0].clientX-ut.lastX,t=n.touches[0].clientY-ut.lastY;ut.lastX=n.touches[0].clientX,ut.lastY=n.touches[0].clientY,vl(e,t,0)}else if(n.touches.length===2&&ut.button===1){const e=(n.touches[0].clientX+n.touches[1].clientX)/2,t=(n.touches[0].clientY+n.touches[1].clientY)/2,i=n.touches[0].clientX-n.touches[1].clientX,r=n.touches[0].clientY-n.touches[1].clientY,s=Math.sqrt(i*i+r*r),a=e-ut.lastX,o=t-ut.lastY;vl(a,o,1);const l=ut.pinchDistance-s;Math.abs(l)>1&&(Th(l*.75),ut.pinchDistance=s),ut.lastX=e,ut.lastY=t}}},{passive:!1});ti.addEventListener("wheel",n=>{n.preventDefault(),Th(n.deltaY)},{passive:!1});en.addEventListener("wheel",n=>{if(n.target===ti||ni.contains(n.target)&&n.target!==en)return;n.preventDefault();const t=-n.deltaY*.001,i=Math.max(.05,Math.min(20,Et.scale+t));Lt("canvasScale",Math.round(i*100))},{passive:!1});function Ah(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Fe.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Fe.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Fe.position.z=n.z,e=!0),e&&(Fe.lookAt(Gt),vi()),Number.isFinite(n.zoom)&&(Fe.zoom=Math.max(.05,Math.min(64,n.zoom)),Fe.updateProjectionMatrix())}function wx(){const n=Ct.getVisibleBounds();if(n.empty){Mh();return}const e=1e-6,t=Math.max(1,Number(window.devicePixelRatio)||1),i=Rt.domElement.width/t,r=Rt.domElement.height/t,s=Math.max(1,i||Number(re.canvasWidth)||Rt.domElement.clientWidth||en.clientWidth||window.innerWidth),a=Math.max(1,r||Number(re.canvasHeight)||Rt.domElement.clientHeight||en.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(Gt.copy(c),Fe.isOrthographicCamera){const{azimuth:d,elevation:h}=yh(re.cameraAxoPreset);Ft.azimuth=d,Ft.elevation=h,Ft.radius=Math.max(u*2.2,60),Ea(),Fe.updateMatrixWorld(!0);const f=Fe.matrixWorld.elements,g=new G(f[0],f[1],f[2]).normalize(),v=new G(f[4],f[5],f[6]).normalize(),m=[new G(n.min.x,n.min.y,n.min.z),new G(n.min.x,n.min.y,n.max.z),new G(n.min.x,n.max.y,n.min.z),new G(n.min.x,n.max.y,n.max.z),new G(n.max.x,n.min.y,n.min.z),new G(n.max.x,n.min.y,n.max.z),new G(n.max.x,n.max.y,n.min.z),new G(n.max.x,n.max.y,n.max.z)];let p=0,y=0;const M=new G;for(const R of m)M.copy(R).sub(c),p=Math.max(p,Math.abs(M.dot(g))),y=Math.max(y,Math.abs(M.dot(v)));const b=Math.max(p,y*o,e),P=Math.max(y,p/Math.max(e,o),e);Jt.left=-b,Jt.right=b,Jt.top=P,Jt.bottom=-P,Jt.zoom=1,Jt.near=-Math.max(5e3,u*6),Jt.far=Math.max(5e3,u*6),Jt.updateProjectionMatrix()}else{_n.lookAt(c),vi(),_n.updateMatrixWorld(!0);const d=_n.matrixWorld.elements,h=new G(d[0],d[1],d[2]).normalize(),f=new G(d[4],d[5],d[6]).normalize(),g=new G;_n.getWorldDirection(g);const v=[new G(n.min.x,n.min.y,n.min.z),new G(n.min.x,n.min.y,n.max.z),new G(n.min.x,n.max.y,n.min.z),new G(n.min.x,n.max.y,n.max.z),new G(n.max.x,n.min.y,n.min.z),new G(n.max.x,n.min.y,n.max.z),new G(n.max.x,n.max.y,n.min.z),new G(n.max.x,n.max.y,n.max.z)],m=Nl.degToRad(_n.fov),p=Math.max(e,Math.tan(m*.5)),y=2*Math.atan(Math.tan(m*.5)*(_n.aspect||o)),M=Math.max(e,Math.tan(y*.5));let b=e,P=0;const R=new G;for(const L of v){R.copy(L).sub(c);const B=Math.abs(R.dot(h)),w=Math.abs(R.dot(f)),S=R.dot(g);P=Math.max(P,S);const D=S+Math.max(B/M,w/p);b=Math.max(b,D)}Ft.radius=Math.max(b+e,P+e),Ea(),_n.near=Math.max(.001,Ft.radius-u*3),_n.far=Math.max(_n.near+1,Ft.radius+u*6),_n.updateProjectionMatrix()}vi()}function ac(n,e){Jt.left=-n/2,Jt.right=n/2,Jt.top=e/2,Jt.bottom=-e/2,Jt.updateProjectionMatrix(),_n.aspect=n/Math.max(1,e),_n.updateProjectionMatrix(),Rt.setSize(n,e,!1),Cs.setSize(n,e),Rr.setSize(n,e)}const Cx=en.clientWidth||window.innerWidth,Tx=en.clientHeight||window.innerHeight;ac(Cx,Tx);nc();ic();{const n=Fe.isPerspectiveCamera?1:0;sn.materialBokeh.defines.PERSPECTIVE_CAMERA!==n&&(sn.materialBokeh.defines.PERSPECTIVE_CAMERA=n,sn.materialBokeh.needsUpdate=!0)}xh();const Ct=new ix(ir,{maxParticles:re.maxParticles??262144}),er=Ct.onRulesChanged(re.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:er}));function Ax(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.physicalParticles)?n.physicalParticles:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function Rh(n=null){const e=Ax(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","canvasWidthUnits","canvasHeightUnits","audioLengthSec","binEnergy"]),i=e.has("binMagnitude")||e.has("binEnergy")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),s=e.has("binPhaseDeviation")||e.has("binPhasedeviation"),a=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),u=e.has("spectralCentroid"),d=e.has("spectralFlux"),h=e.has("spectralFlatness"),f=e.has("inharmonicity"),g=e.has("peakAmplitude"),v=e.has("zeroCrossingRate"),m=e.has("spectralRolloff"),p=e.has("spectralSpread"),y=e.has("spectralSkewness"),M=e.has("chromagram"),b=new Set(t);return c&&b.add("globalRmsEnergy"),u&&b.add("spectralCentroid"),d&&b.add("spectralFlux"),h&&b.add("spectralFlatness"),f&&b.add("inharmonicity"),g&&b.add("peakAmplitude"),v&&b.add("zeroCrossingRate"),m&&b.add("spectralRolloff"),p&&b.add("spectralSpread"),y&&b.add("spectralSkewness"),M&&b.add("chromagram"),i&&b.add("binMagnitude"),r&&b.add("binFlux"),s&&b.add("binPhaseDeviation"),o&&b.add("binPhase"),a&&b.add("binEnvelope"),a&&b.add("binEnvelopeState"),l&&b.add("binAttackTime"),c&&b.add("binRMSEnergy"),e.has("binFreq")&&b.add("binFreq"),{used:e,calculatedInputs:b,worklet:{enabled:i||r||s||a||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:s,needPhase:o,needEnvelope:a,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:u,needGlobalSpectralFlux:d,needSpectralFlatness:h,needInharmonicity:f,needPeakAmplitude:g,needZeroCrossingRate:v,needSpectralRolloff:m,needSpectralSpread:p,needSpectralSkewness:y,needChromagram:M},backend:{calc_fft:!0,calc_magnitude:i||r||u||h||d,calc_magnitude_dbfs:i||c,calc_phase:s||o,calc_phase_deviation:s,calc_local_spectral_flux:r||a,calc_envelope_state:a,calc_rms_energy:c,calc_peak_amplitude:g,calc_zero_crossing_rate:v,calc_spectral_centroid:u,calc_global_spectral_flux:d,calc_spectral_flatness:h,calc_spectral_rolloff:m,calc_spectral_spread:p,calc_spectral_skewness:y,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:M}}}function Xn(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return!Number.isFinite(s)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(s-i)/(r-i)))}const yo=Object.freeze([1024,2048,4096,8192,16384]);function _l(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=yo[0],i=Math.abs(e-t);for(let r=1;r<yo.length;r++){const s=yo[r],a=Math.abs(e-s);a<i&&(t=s,i=a)}return t}function oc(n=null){const e=Rh(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}oc(er==null?void 0:er.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||Ct.scaleAllParticleSizes(t/e)});class Ph{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=_l(re.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none"}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-C6EfNb8V.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=Rh(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=_l(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var v,m,p;if(!this.analyser)return;((v=this.ctx)==null?void 0:v.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((m=this.ctx)==null?void 0:m.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((p=this.ctx)==null?void 0:p.sampleRate)??44100,i=t/2,r=y=>y/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,d=0,h=0;for(let y=0;y<e;y++){const M=this.frequencyData[y],b=r(y);b<250?(s+=M,a++):b<4e3?(o+=M,l++):(c+=M,u++),M>d&&(d=M,h=y)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(h)),this.peakByte=d;const f=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const y=Jl(this.frequencyData,t);this.spectralCentroidHz+=(y-this.spectralCentroidHz)*f,this.spectralCentroid=yx(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const M=px(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(M-this.spectralFluxAU)*f,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const y=fx(this.frequencyData);this.spectralFlatnessRatio+=(y-this.spectralFlatnessRatio)*f,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const y=mx(this.frequencyData,t);this.inharmonicity+=(y-this.inharmonicity)*f}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(gx(this.frequencyData)-this.peakAmplitude)*f:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(vx(this.timeDomainData)-this.zeroCrossingRate)*f:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(_x(this.frequencyData,t,.85)-this.spectralRolloff)*f:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const y=vh(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(y-this.spectralSpread)*f:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const M=bx(this.frequencyData,t,this.spectralCentroidHz,y);this.spectralSkewness+=(M-this.spectralSkewness)*f}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(xx(this.frequencyData,t)-this.chromagram)*f:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let g=0;for(const y of this.timeDomainData)g+=((y-128)/128)**2;if(this.amplitude=Math.sqrt(g/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let y=0,M=0;for(let b=0;b<this._freqL.length;b++)y+=this._freqL[b],M+=this._freqR[b];this.pan=(M-y)/(y+M+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const Le=new Ph;Le.setRuleInputUsage(er==null?void 0:er.requiredInputsByTarget);const Yu=document.getElementById("status-dot"),$u=document.getElementById("status-text");function Rx(n,e){Yu&&(Yu.className=n),$u&&($u.textContent=e)}Rx("open","Browser mode");const In=document.createElement("div");In.id="camera-hud";In.style.position="fixed";In.style.top="8px";In.style.left="50%";In.style.transform="translateX(-50%)";In.style.zIndex="220";In.style.display="none";In.style.alignItems="center";In.style.gap="6px";const Wn=document.createElement("div");Wn.id="camera-readout";Wn.style.fontFamily="var(--font-mono, monospace)";Wn.style.fontSize="10px";Wn.style.color="var(--color-text-muted, #bbb)";Wn.style.background="rgba(0,0,0,0.35)";Wn.style.padding="4px 6px";Wn.style.borderRadius="4px";Wn.style.pointerEvents="none";Wn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";let Ss=!1;function Px(){window.dispatchEvent(new CustomEvent("seesound:camera-hud-state",{detail:{enabled:Ss}}))}function bl(n){Ss=!!n,In.style.display=Ss?"flex":"none",Px()}window.addEventListener("seesound:camera-hud-toggle",n=>{var t;const e=(t=n==null?void 0:n.detail)==null?void 0:t.enabled;bl(typeof e=="boolean"?e:!Ss)});In.append(Wn);const Zu=document.getElementById("app")||document.body;Zu&&Zu.appendChild(In);bl(!1);let Mo=0,Ji=0,wa="",zn=null,sa=null,aa=[],oa=null,os=null,Ku=0;const Li={tier:"free",maxExportResolution:Number.POSITIVE_INFINITY,canExportObj:!1,canCloudRender:!1};function za(n,e={}){try{window.parent&&window.parent!==window&&window.parent.postMessage({source:"seesound-engine",type:n,payload:e},"*")}catch{}}function Nx(n){const e=n&&typeof n=="object"?n:{};Li.tier=String(e.tier||Li.tier)==="pro"?"pro":"free";const t=Number(e.maxExportResolution);Li.maxExportResolution=Number.isFinite(t)&&t>0?Math.floor(t):Number.POSITIVE_INFINITY,Li.canExportObj=!!e.canExportObj,Li.canCloudRender=!!e.canCloudRender}window.addEventListener("message",n=>{const e=n==null?void 0:n.data;!e||typeof e!="object"||e.source!=="seesound-platform"||e.type!=="platform:config"||Nx(e.payload)});za("engine:ready");function Ca(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function Ta(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function lc(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Nh(){var e,t;if(wa)return Ta(wa);const n=String(((e=Le==null?void 0:Le.audioEl)==null?void 0:e.currentSrc)||((t=Le==null?void 0:Le.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return Ta(r)}catch{}return"audio"}async function Lx(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function qn(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}${us}`}function Ti(){return{fileName:"New Project.ssp.json",presetName:"default",params:ys(),presetLibrary:[]}}async function Dx(){var h;const n=Ca(Nh(),"audio"),e=Ca(lc(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(re.canvasWidth)||Rt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(re.canvasHeight)||Rt.domElement.height/Math.max(1,window.devicePixelRatio))),s=Number(Li.maxExportResolution),a=Math.max(i,r),o=Number.isFinite(s)&&s>0&&a>s?s/a:1,l=Math.max(1,Math.floor(i*o)),c=Math.max(1,Math.floor(r*o));o<1&&za("engine:export-blocked",{reason:"resolution_limit",requestedWidth:i,requestedHeight:r,allowedMaxRes:s});const u=document.createElement("canvas"),d=new Od({canvas:u,antialias:!0,preserveDrawingBuffer:!0});try{const f=d.capabilities.maxTextureSize||8192,g=Math.min(l,f),v=Math.min(c,f),m=Math.max(1,Number(((h=Rt.getPixelRatio)==null?void 0:h.call(Rt))||window.devicePixelRatio||1)),p=Math.max(1,Math.floor(g/m)),y=Math.max(1,Math.floor(v/m));d.setPixelRatio(m),d.setSize(p,y,!1);let M=Fe.clone();Fe===Jt||M.isOrthographicCamera?(M=Fe.clone(),M.updateProjectionMatrix()):M.isPerspectiveCamera&&(M.aspect=g/Math.max(1,v),M.updateProjectionMatrix());const b=[];ir.traverse(L=>{var B;(B=L==null?void 0:L.userData)!=null&&B.excludeFromPng&&L.visible&&(b.push(L),L.visible=!1)}),d.setClearColor(Ct.getBackgroundColor(),1),Ct.setViewportHeight(d.domElement.height),d.render(ir,M);for(const L of b)L.visible=!0;const P=await new Promise(L=>u.toBlob(L,"image/png"));if(!P)throw new Error("PNG export failed (empty blob).");const R=document.createElement("a");R.href=URL.createObjectURL(P),R.download=t,document.body.appendChild(R),R.click(),R.remove(),URL.revokeObjectURL(R.href),(g!==l||v!==c)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:l,h:c},exported:{w:g,h:v},maxTextureSize:f})}finally{Ct.setViewportHeight(Rt.domElement.height),d.dispose()}}function Ju(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}function Aa(n,e){n.dispatchEvent(new CustomEvent("player:recordvideo-state",{detail:{running:e},bubbles:!1}))}async function Fx(n){var s;if(!n)return{track:null,cleanup:null};try{if(typeof n.captureStream=="function"){const o=n.captureStream().getAudioTracks()[0]||null;if(o)return{track:o,cleanup:null}}}catch{}Le.init(n),((s=Le.ctx)==null?void 0:s.state)==="suspended"&&await Le.ctx.resume();const e=Le.source||Le.streamSource;if(!e||!Le.ctx)return{track:null,cleanup:null};const t=Le.ctx.createMediaStreamDestination();return e.connect(t),{track:t.stream.getAudioTracks()[0]||null,cleanup:()=>{try{e.disconnect(t)}catch{}try{t.disconnect()}catch{}}}}async function Ix(n,e){if(zn||!(e!=null&&e.src))return;if(typeof MediaRecorder>"u"||typeof ti.captureStream!="function"){alert("Video recording is not supported in this browser.");return}const t=Math.max(1,Math.floor(Rt.domElement.width/Math.max(1,window.devicePixelRatio))),i=Math.max(1,Math.floor(Rt.domElement.height/Math.max(1,window.devicePixelRatio))),r=Number(Li.maxExportResolution);if(Number.isFinite(r)&&r>0&&Math.max(t,i)>r){za("engine:export-blocked",{reason:"resolution_limit",requestedWidth:t,requestedHeight:i,allowedMaxRes:r}),alert(`Free plan export limit is ${Math.floor(r)}p. Reduce canvas size or upgrade to Pro.`);return}const s=ti.captureStream(60),a=new MediaStream;for(const h of s.getVideoTracks())a.addTrack(h);const{track:o,cleanup:l}=await Fx(e);oa=l,o&&a.addTrack(o);const u=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(h=>{var f;return(f=MediaRecorder.isTypeSupported)==null?void 0:f.call(MediaRecorder,h)})||"",d=new MediaRecorder(a,u?{mimeType:u}:void 0);if(aa=[],sa=a,zn=d,d.ondataavailable=h=>{h.data&&h.data.size>0&&aa.push(h.data)},d.onstop=()=>{const h=aa;aa=[];const f=new Blob(h,{type:d.mimeType||"video/webm"});if(f.size>0){const g=Ca(Nh(),"audio"),v=Ca(lc(),"preset"),m=document.createElement("a");m.href=URL.createObjectURL(f),m.download=`${g} - ${v}.webm`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(m.href)}if(sa)for(const g of sa.getTracks())try{g.stop()}catch{}if(sa=null,typeof oa=="function")try{oa()}catch{}oa=null,os&&(e.removeEventListener("ended",os),os=null),zn=null,Aa(n,!1)},e.paused)try{await e.play()}catch{}os=()=>{zn&&zn.state!=="inactive"&&zn.stop()},e.addEventListener("ended",os,{once:!0}),d.start(200),Aa(n,!0)}function Ux(n){if(zn)try{zn.state!=="inactive"&&zn.stop()}catch{zn=null,Aa(n,!1)}}async function Ox(n,e){var l,c,u,d,h,f,g,v,m;if(!e||!(e.duration>0)&&(await new Promise(p=>{if(e.duration>0){p();return}const y=()=>{M(),p()},M=()=>{e.removeEventListener("loadedmetadata",y),e.removeEventListener("canplay",y),e.removeEventListener("error",y)};e.addEventListener("loadedmetadata",y,{once:!0}),e.addEventListener("canplay",y,{once:!0}),e.addEventListener("error",y,{once:!0})}),!(e.duration>0)))return;const t=!e.paused&&!e.ended;t&&e.pause();const i=++Ji,r=await Lx(e),s=r?URL.createObjectURL(r):e.currentSrc||e.src;if(!s)return;const a=new Audio;a.crossOrigin="anonymous",a.src=s,a.preload="auto",a.currentTime=0,a.muted=!0,a.volume=0,typeof a.preservesPitch=="boolean"&&(a.preservesPitch=!1),a.playbackRate=16,a.style.display="none",document.body.appendChild(a);const o=new Ph;o.setRuleInputUsage((l=Ct.getRuleCompileState())==null?void 0:l.requiredInputsByTarget),Ju(n,!0);try{Ct.clear(),await new Promise((R,L)=>{const B=()=>{S(),R()},w=()=>{S(),L(new Error("Paint-all audio metadata failed to load."))},S=()=>{a.removeEventListener("loadedmetadata",B),a.removeEventListener("canplay",B),a.removeEventListener("error",w)};a.addEventListener("loadedmetadata",B,{once:!0}),a.addEventListener("canplay",B,{once:!0}),a.addEventListener("error",w,{once:!0}),a.load()}),o.init(a),((c=o.ctx)==null?void 0:c.state)==="suspended"&&await o.ctx.resume(),await a.play();const p=performance.now(),y=3*60*1e3;let M=-1,b=0,P=0;for(;i===Ji&&!a.ended;){if(performance.now()-p>y){console.warn("[PaintAll] Aborting due to timeout.");break}await new Promise(D=>requestAnimationFrame(D)),o.update();const R=Rt.domElement.width/window.devicePixelRatio,L=Rt.domElement.height/window.devicePixelRatio,B=xl(),w={...re,persistMode:1,cameraState:{x:Fe.position.x,y:Fe.position.y,z:Fe.position.z,zoom:Fe.zoom},cameraCanvasWidthUnits:B.w,cameraCanvasHeightUnits:B.h};Ct.update(o,w,R,L),Ah(Ct.getCameraOutput());const S=Number(a.currentTime)||0;if(S>M+1e-4?(M=S,b=0):b++,a.paused&&!a.ended)try{await a.play()}catch{break}if(b>120){const D=Number(a.duration)||0;if(D>0&&S>=Math.max(0,D-.25)){a.currentTime=D;break}if(D>0&&P<12){const K=Math.max(.15,D/240);a.currentTime=Math.min(D,S+K),P++,b=0;continue}console.warn("[PaintAll] Aborting due to persistent playback stall.");break}}}finally{a.pause(),a.src="",a.remove(),r&&URL.revokeObjectURL(s);try{(u=o.source)==null||u.disconnect()}catch{}try{(d=o.streamSource)==null||d.disconnect()}catch{}try{(h=o.splitter)==null||h.disconnect()}catch{}try{(f=o.analyserL)==null||f.disconnect()}catch{}try{(g=o.analyserR)==null||g.disconnect()}catch{}try{(v=o.analyser)==null||v.disconnect()}catch{}try{await((m=o.ctx)==null?void 0:m.close())}catch{}if(Ju(n,!1),t&&i===Ji)try{await e.play()}catch{}}}function xl(){let n=0,e=0;if(Fe.isOrthographicCamera)n=Math.abs((Fe.right-Fe.left)/Math.max(.01,Fe.zoom)),e=Math.abs((Fe.top-Fe.bottom)/Math.max(.01,Fe.zoom));else{const r=Math.max(.001,Fe.position.distanceTo(Gt)),s=Nl.degToRad(Fe.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,Fe.zoom),n=e*Fe.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:Gt.x-t,right:Gt.x+t,top:Gt.y+i,bottom:Gt.y-i}}function Lh(){var t,i,r,s,a,o,l,c,u,d,h;if(requestAnimationFrame(Lh),Mo++,Mo%120===0){const f=Number(((t=Ct==null?void 0:Ct.getApproxFps)==null?void 0:t.call(Ct))||0);if(f>0&&f<24){const g=performance.now();g-Ku>15e3&&(Ku=g,za("engine:performance-drop",{fps:f,canCloudRender:!!Li.canCloudRender}))}}Le.update();const n=!!(Le.audioEl&&!Le.audioEl.paused&&!Le.audioEl.ended);if(n&&!Le.analyser&&Le.audioEl&&Le.init(Le.audioEl),n){const f=Rt.domElement.width/window.devicePixelRatio,g=Rt.domElement.height/window.devicePixelRatio,v=xl(),m={...re,cameraState:{x:Fe.position.x,y:Fe.position.y,z:Fe.position.z,zoom:Fe.zoom},cameraCanvasWidthUnits:v.w,cameraCanvasHeightUnits:v.h};Ct.update(Le,m,f,g),Ah(Ct.getCameraOutput());const p=((i=Le.getBinMagnitude)==null?void 0:i.call(Le))||null,y=((r=Le.getBinFlux)==null?void 0:r.call(Le))||null,M=((s=Le.getBinPhaseDeviation)==null?void 0:s.call(Le))||null,b=((a=Le.getBinPhase)==null?void 0:a.call(Le))||null,P=((o=Le.getBinAttackTime)==null?void 0:o.call(Le))||null,R=((l=Le.getBinEnvelope)==null?void 0:l.call(Le))||null,L=Le.peakFreq??0,B=(c=Le.ctx)!=null&&c.sampleRate?Le.ctx.sampleRate*.5:22050,w=Xn(Le.rmsDbfs,re.globalRmsNormMin??-60,re.globalRmsNormMax??0),S=Xn(Le.spectralCentroidHz,re.spectralCentroidNormMin??150,re.spectralCentroidNormMax??8e3),D=Xn(Le.spectralFluxAU,re.globalSpectralFluxNormMin??0,re.globalSpectralFluxNormMax??100),K=Xn(Le.spectralFlatnessRatio,re.spectralFlatnessNormMin??0,re.spectralFlatnessNormMax??1),j=(N,k)=>{if(!N||!N.length)return 0;let ne=0;for(let Ce=0;Ce<N.length;Ce++)ne+=k(N[Ce]);return ne/N.length},ee=j(p,N=>Xn(N,re.binMagnitudeNormMin??-70,re.binMagnitudeNormMax??0)),Z=j(y,N=>Xn(N,re.binFluxNormMin??0,re.binFluxNormMax??.5)),Y=j(M,N=>Xn(N,re.binPhaseDeviationNormMin??0,re.binPhaseDeviationNormMax??Math.PI)),O=j(b,N=>Xn(N,-Math.PI,Math.PI)),x=j(P,N=>Xn(N,re.binAttackTimeNormMin??5,re.binAttackTimeNormMax??500)),A=j(R,N=>Xn(N,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:w,globalRmsEnergy:w,binEnergy:ee,frequencyHz:L,normFreq:Math.max(0,Math.min(1,L/Math.max(1e-6,B))),bass:Le.bass??0,mid:Le.mid??0,high:Le.high??0,peakFreq:L,pan:Le.pan??0,spectralCentroid:S,spectralFlux:D,spectralFlatness:K,inharmonicity:Le.inharmonicity??0,peakAmplitude:Le.peakAmplitude??0,zeroCrossingRate:Le.zeroCrossingRate??0,spectralRolloff:Le.spectralRolloff??0,spectralSpread:Le.spectralSpread??0,spectralSkewness:Le.spectralSkewness??0,chromagram:Le.chromagram??0,binMagnitude:ee,binFreq:L,binPhase:O,binFlux:Z,binPhaseDeviation:Y,binAttackTime:x,binEnvelope:A,binEnvelopeState:A,binRMSEnergy:w,time:((u=Le.audioEl)==null?void 0:u.currentTime)??0,deltaTime:1/60,canvasWidthPx:f,canvasHeightPx:g,canvasWidthUnits:v.w,canvasHeightUnits:v.h,audioLengthSec:((d=Le.audioEl)==null?void 0:d.duration)??0}}}))}const e=Ct.getBackgroundColor();if(Rt.setClearColor(e,1),Ct.setViewportHeight(Rt.domElement.height),Ex()?Cs.render():Rt.render(ir,Fe),Ss&&Mo%6===0){const f=(Fe.rotation.x*180/Math.PI).toFixed(2),g=(Fe.rotation.y*180/Math.PI).toFixed(2),v=(Fe.rotation.z*180/Math.PI).toFixed(2),m=Fe.position.x.toFixed(2),p=Fe.position.y.toFixed(2),y=Fe.position.z.toFixed(2),M=Math.max(0,Number(((h=Ct.getLineVisibleCount)==null?void 0:h.call(Ct))??0)),b=M>0?` lines ${M}`:"",P=xl(),R=P.w,L=P.h;Wn.textContent=`cam p(${m},${p},${y}) r(${f},${g},${v}) pts ${Ct.getVisibleCount()}${b} fft ${Le.peakByte} amp ${Le.amplitude.toFixed(3)} sc ${Le.spectralCentroid.toFixed(3)} sf ${Le.spectralFlux.toFixed(3)} sfl ${Le.spectralFlatness.toFixed(3)} inh ${Le.inharmonicity.toFixed(3)} canv ${R.toFixed(2)} × ${L.toFixed(2)} origin ${Ql}u ${Ar?"on":"off"}`}}Lh();{const n=document.getElementById("audio-player"),{audioEl:e,loadFile:t}=cx(n);Le.audioEl=e;let i=null;e.addEventListener("play",async()=>{var x;Le.init(e),((x=Le.ctx)==null?void 0:x.state)==="suspended"&&await Le.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var x;Ji++,Le.init(e),((x=Le.ctx)==null?void 0:x.state)==="suspended"&&await Le.ctx.resume()}),n.addEventListener("player:play",()=>{Ji++}),n.addEventListener("player:pause",()=>{Ji++}),n.addEventListener("player:stop",()=>{Ji++}),n.addEventListener("player:savepng",async()=>{await Dx()}),n.addEventListener("player:paintall",async()=>{try{await Ox(n,e)}catch(x){console.warn("[PaintAll] failed:",x),alert("Paint-all failed before completion. Check console for details.")}}),n.addEventListener("player:recordvideo-toggle",async()=>{if(zn){Ux(n);return}try{await Ix(n,e)}catch(x){console.warn("[Recorder] start failed:",x),alert("Failed to start recording."),Aa(n,!1)}}),n.addEventListener("player:playbackrate",x=>{var N;const A=Number((N=x==null?void 0:x.detail)==null?void 0:N.rate);Number.isFinite(A)&&(e.playbackRate=Math.max(.1,Math.min(16,A)))}),n.addEventListener("player:fileloaded",x=>{var N;const A=(N=x==null?void 0:x.detail)==null?void 0:N.file;i=A instanceof File?A:null,wa=(i==null?void 0:i.name)||"",i&&g(i),w()});let r=null,s="",a=null,o=!1,l=null;const c="seesound_project_draft_v1",u="seesound_local_audio_v1",d="files",h="last-audio",f=()=>new Promise((x,A)=>{try{const N=indexedDB.open(u,1);N.onupgradeneeded=()=>{const k=N.result;k.objectStoreNames.contains(d)||k.createObjectStore(d)},N.onsuccess=()=>x(N.result),N.onerror=()=>A(N.error)}catch(N){A(N)}}),g=async x=>{if(!(x instanceof File))return;const A=await f();await new Promise((N,k)=>{const ne=A.transaction(d,"readwrite");ne.objectStore(d).put({blob:x,name:x.name,type:x.type||"audio/*",updatedAt:Date.now()},h),ne.oncomplete=()=>N(),ne.onerror=()=>k(ne.error)}),A.close()},v=async()=>{const x=await f(),A=await new Promise((N,k)=>{const te=x.transaction(d,"readonly").objectStore(d).get(h);te.onsuccess=()=>N(te.result||null),te.onerror=()=>k(te.error)});return x.close(),!A||!(A.blob instanceof Blob)?null:new File([A.blob],String(A.name||"restored-audio.wav"),{type:String(A.type||"audio/*"),lastModified:Number(A.updatedAt||Date.now())})},m=()=>{const x=Ti();return Xu({params:x.params,presetName:x.presetName,presetLibrary:x.presetLibrary,projectName:Ta(x.fileName)})},p=()=>{window.dispatchEvent(new CustomEvent("seesound:project-file-state",{detail:{fileName:String(s||"").trim()}}))},y=async()=>{const x=await dl(),A=[];for(const N of x){const k=await Kd(N);!(k!=null&&k.params)||typeof k.params!="object"||A.push({name:String(N||""),params:k.params})}return A},M=async()=>{if((await dl()).filter(k=>!String(k||"").startsWith("rule__")).length>0)return;const N=Ti();if(N.presetLibrary.length>0){await b(N.presetLibrary);return}await Ma("default",ys()),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))},b=async x=>{if(Array.isArray(x)){for(const A of x){const N=String((A==null?void 0:A.name)||"").trim(),k=A==null?void 0:A.params;!N||!k||typeof k!="object"||await Ma(N,k)}window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}},P=async x=>{await b(x)},R=async(x,A)=>{const N=await x.createWritable();await N.write(JSON.stringify(A,null,2)),await N.close()},L=async()=>{const x=ys(),A=await y(),N=lc();return Xu({params:x,presetName:N,presetLibrary:A,projectName:Ta(s||qn())})},B=async()=>{if(!o)try{const A={payload:await L(),fileName:String(s||"").trim(),hasBoundFile:!!r,updatedAt:Date.now(),hasAudio:i instanceof File};localStorage.setItem(c,JSON.stringify(A))}catch(x){console.warn("[Project] local draft save failed:",x)}},w=()=>{o||(l&&clearTimeout(l),l=setTimeout(async()=>{l=null,await B()},500))},S=async()=>{try{const x=localStorage.getItem(c);if(!x)return!1;const A=JSON.parse(x),N=A==null?void 0:A.payload;if(!N||typeof N!="object")return!1;if(r=null,s=String((A==null?void 0:A.fileName)||Ti().fileName||"").trim(),p(),await j(N),A!=null&&A.hasAudio){const k=await v();k&&(t(k,k.name),i=k,wa=k.name||"")}return!0}catch(x){return console.warn("[Project] local draft restore failed:",x),!1}},D=async({forceDownload:x=!1}={})=>{try{const A=await L();if(!x&&r){await R(r,A),window.dispatchEvent(new CustomEvent("seesound:project-autosaved",{detail:{fileName:s||qn()}})),p(),w();return}hx(A,qn()),w()}catch(A){console.warn("[Project] save failed:",A)}},K=()=>{!r||o||(a&&clearTimeout(a),a=setTimeout(async()=>{a=null,await D({forceDownload:!1})},450))},j=async x=>{try{o=!0,x.params&&typeof x.params=="object"&&rn(x.params),Array.isArray(x.presetLibrary)&&await P(x.presetLibrary),await M(),window.dispatchEvent(new CustomEvent("seesound:project-loaded",{detail:{fileName:s,presetName:String((x==null?void 0:x.presetName)||"")}}))}catch(A){console.warn("[Project] load failed:",A)}finally{o=!1,w()}},ee=async()=>{if(typeof window.showOpenFilePicker!="function")return!1;try{const[x]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Project",accept:{"application/json":[us,".json"]}}]});if(!x)return!1;const A=await x.getFile(),N=await A.text(),k=dx(N);return r=x,s=String(A.name||"").trim(),await j(k),p(),!0}catch{return!1}},Z=async(x="",A=!0)=>{if(typeof window.showSaveFilePicker!="function"){if(A){const N=Ti();rn(N.params),await P(N.presetLibrary)}return r=null,s=String(x||Ti().fileName).trim()||qn(),p(),w(),!0}try{const N=String(x||"").trim()||qn(),k=await window.showSaveFilePicker({suggestedName:N,types:[{description:"SEESOUND Project",accept:{"application/json":[us,".json"]}}]});if(!k)return!1;if(A){const ne=Ti();rn(ne.params),await P(ne.presetLibrary)}return r=k,s=String(k.name||N).trim(),await D({forceDownload:!1}),p(),w(),!0}catch{return!1}},Y=async(x="")=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const A=String(x||"").trim()||qn(),N=await window.showSaveFilePicker({suggestedName:A,types:[{description:"SEESOUND Project",accept:{"application/json":[us,".json"]}}]});return N?(r=N,s=String(N.name||A).trim(),await D({forceDownload:!1}),p(),!0):!1}catch{return!1}};n.addEventListener("player:saveproject",async()=>{if(r){await D({forceDownload:!1});return}await Y(qn())||await D({forceDownload:!0})}),n.addEventListener("player:loadproject",async x=>{var A;await j(((A=x==null?void 0:x.detail)==null?void 0:A.payload)||{})}),window.addEventListener("seesound:project-save-request",async()=>{if(r){await D({forceDownload:!1});return}await Y(qn())||await D({forceDownload:!0})}),window.addEventListener("seesound:project-save-as-request",async()=>{const x=s?`${s}${us}`:qn();await Y(x)||await D({forceDownload:!0})}),window.addEventListener("seesound:project-load-request",async x=>{const A=(x==null?void 0:x.detail)||{},N=String(A.fileName||"").trim();N&&(s=N,p()),await j(A.payload||{}),!r&&typeof window.showSaveFilePicker=="function"&&window.confirm("Attach this project to an autosave file now?")&&await Z(String(A.fileName||qn()),!1)}),window.addEventListener("seesound:project-open-request",async()=>{await ee()}),window.addEventListener("seesound:project-new-request",async()=>{await Z(Ti().fileName,!0)}),window.addEventListener("seesound:preset-library-changed",()=>{K(),w()}),Xl((x,A)=>{!A||A==="*"||o||(K(),w())});const O=async()=>{if(await S())return;s=Ti().fileName,p(),await j(m())};p(),O()}let Di=null,yl=!1;Di=ux({wrapper:ni,column:en,onResize(n,e){if(ac(n,e),cc(n,e),Gr(),!yl){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(re.canvasWidth)!==t||Number(re.canvasHeight)!==i)&&rn({canvasWidth:t,canvasHeight:i})}}});function cc(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(re.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Bx(n){const e=n instanceof Element?n:null;return e?!!e.closest('input,textarea,select,[contenteditable="true"]'):!1}window.addEventListener("keydown",n=>{if(n.defaultPrevented||!(n.ctrlKey||n.metaKey)||n.altKey||Bx(n.target))return;const e=String(n.key||"").toLowerCase();if(e==="z"&&!n.shiftKey){if(!n_())return;n.preventDefault(),n.stopPropagation();return}if(e==="y"||e==="z"&&n.shiftKey){if(!i_())return;n.preventDefault(),n.stopPropagation()}});function Dh(){const e=Math.max(5,Math.min(2e3,Math.floor(Number(re.canvasScale)||100)))/100;Et.scale=e,ni.style.transformOrigin="center center",sc(),Gr()}function Fh(){var i;const n=((i=Di==null?void 0:Di.getSize)==null?void 0:i.call(Di))||{},e=Math.max(160,Math.floor(n.w||ni.clientWidth||en.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||ni.clientHeight||en.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function Ih(){if(!Di)return;const n=Fh(),e=Math.max(160,Math.floor(Number(re.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(re.canvasHeight)||n.h));if(e===n.w&&t===n.h){cc(n.w,n.h),Gr();return}yl=!0,Di.setSize(e,t),yl=!1,Gr()}Ih();Dh();{const n=Fh();(Number(re.canvasWidth)!==n.w||Number(re.canvasHeight)!==n.h)&&rn({canvasWidth:n.w,canvasHeight:n.h}),cc(n.w,n.h)}Xl((n,e)=>{if(e==="cameraProjection"&&nc(),(e==="cameraProjection"||e==="cameraAxoPreset")&&ic(),(e==="postProcessEnabled"||e==="bloomEnabled"||e==="bokehEnabled"||e==="bloomStrength"||e==="bloomRadius"||e==="bloomThreshold"||e==="bokehFocus"||e==="bokehAperture"||e==="bokehMaxBlur")&&xh(),(e==="canvasWidth"||e==="canvasHeight")&&Ih(),e==="canvasScale"&&Dh(),e==="maxParticles"){const t=Math.max(4096,Math.floor(re.maxParticles||4096));re.maxParticles!==t&&(re.maxParticles=t),Ct.setMaxParticles(t)}if(e==="fftSize"){const t=_l(re.fftSize);if(re.fftSize!==t){Lt("fftSize",t);return}Le.setFftSize(t)}if(e==="ruleBlocks"){const t=Ct.onRulesChanged(re.ruleBlocks??[]);Le.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),oc(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});window.addEventListener("seesound:view-reset-camera",Eh);window.addEventListener("seesound:view-fit-camera",wh);window.addEventListener("seesound:view-clean-canvas",Ch);Lb(document.getElementById("control-panel"));var td,nd;oc((nd=(td=Ct.getRuleCompileState)==null?void 0:td.call(Ct))==null?void 0:nd.requiredInputsByTarget);const Qu=Array.isArray(re.ruleBlocks)?re.ruleBlocks.length:0,hi=Ct.getRuleCompileState(),ed=(hi==null?void 0:hi.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${ya} compile=${ed} rules=${Qu}`,{schemaVersion:ya,compileStatus:ed,compileTimeMs:(hi==null?void 0:hi.compileTimeMs)??0,compileError:(hi==null?void 0:hi.compileError)??null,ruleCount:Qu,debug:Yv});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
