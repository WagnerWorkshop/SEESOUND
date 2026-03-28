(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="171",ed=0,cl=1,td=2,Uc=1,nd=2,Wn=3,gi=0,nn=1,$n=2,fi=0,pi=1,er=2,ul=3,dl=4,za=5,qn=100,id=101,rd=102,sd=103,ad=104,od=200,ld=201,cd=202,ud=203,Pr=204,Nr=205,dd=206,hd=207,fd=208,pd=209,md=210,gd=211,_d=212,vd=213,xd=214,Ha=0,Va=1,Ga=2,sr=3,Wa=4,Xa=5,$a=6,qa=7,Oc=0,bd=1,yd=2,mi=0,Md=1,Sd=2,Ed=3,Td=4,Ad=5,wd=6,Rd=7,Bc=300,ar=301,or=302,Ya=303,ja=304,Xs=306,Za=1e3,Pi=1001,Ka=1002,An=1003,Cd=1004,Vr=1005,Dn=1006,na=1007,Ni=1008,Qn=1009,kc=1010,zc=1011,Lr=1012,Io=1013,Fi=1014,Yn=1015,Or=1016,Uo=1017,Oo=1018,lr=1020,Hc=35902,Vc=1021,Gc=1022,Tn=1023,Wc=1024,Xc=1025,ir=1026,cr=1027,$c=1028,Bo=1029,qc=1030,ko=1031,zo=1033,bs=33776,ys=33777,Ms=33778,Ss=33779,Ja=35840,Qa=35841,eo=35842,to=35843,no=36196,io=37492,ro=37496,so=37808,ao=37809,oo=37810,lo=37811,co=37812,uo=37813,ho=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,vo=37820,xo=37821,Es=36492,bo=36494,yo=36495,Yc=36283,Mo=36284,So=36285,Eo=36286,Pd=3200,Nd=3201,Ld=0,Fd=1,di="",hn="srgb",ur="srgb-linear",Ns="linear",vt="srgb",Oi=7680,hl=519,Dd=512,Id=513,Ud=514,jc=515,Od=516,Bd=517,kd=518,zd=519,fl=35044,Hd=35048,pl="300 es",jn=2e3,Ls=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const Ar=Math.PI/180,Fr=180/Math.PI;function pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function Ho(n,e){return(n%e+e)%e}function Vd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gd(n,e,t){return n!==e?(t-n)/(e-n):0}function wr(n,e,t){return(1-t)*n+t*e}function Wd(n,e,t,i){return wr(n,e,1-Math.exp(-t*i))}function Xd(n,e=1){return e-Math.abs(Ho(n,e*2)-e)}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jd(n,e){return n+Math.random()*(e-n)}function Zd(n){return n*(.5-Math.random())}function Kd(n){n!==void 0&&(ml=n);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(n){return n*Ar}function Qd(n){return n*Fr}function eh(n){return(n&n-1)===0&&n!==0}function th(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ih(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vo={DEG2RAD:Ar,RAD2DEG:Fr,generateUUID:pr,clamp:ut,euclideanModulo:Ho,mapLinear:Vd,inverseLerp:Gd,lerp:wr,damp:Wd,pingpong:Xd,smoothstep:$d,smootherstep:qd,randInt:Yd,randFloat:jd,randFloatSpread:Zd,seededRandom:Kd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:eh,ceilPowerOfTwo:th,floorPowerOfTwo:nh,setQuaternionFromProperEuler:ih,normalize:Xt,denormalize:Ji};class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],g=r[0],p=r[3],h=r[6],S=r[1],T=r[4],x=r[7],w=r[2],R=r[5],C=r[8];return s[0]=a*g+o*S+l*w,s[3]=a*p+o*T+l*R,s[6]=a*h+o*x+l*C,s[1]=c*g+u*S+f*w,s[4]=c*p+u*T+f*R,s[7]=c*h+u*x+f*C,s[2]=d*g+m*S+_*w,s[5]=d*p+m*T+_*R,s[8]=d*h+m*x+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=t*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new tt;function Zc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rh(){const n=Fs("canvas");return n.style.display="block",n}const gl={};function Qi(n){n in gl||(gl[n]=!0,console.warn(n))}function sh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ah(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _l=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Ns:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:e,whitePoint:i,transfer:Ns,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const ft=lh();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class ch{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Fs("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ra(r[a].image)):s.push(ra(r[a]))}else s=ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ch.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class rn extends fr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=Pi,r=Pi,s=Dn,a=Ni,o=Tn,l=Qn,c=rn.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=pr(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Bc;rn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(m+1)/2,w=(h+1)/2,R=(u+d)/4,C=(f+g)/4,U=(_+p)/4;return T>x&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=C/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=U/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hh extends fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends hh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jc extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fh extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-o;const h=l*d+c*m+u*_+f*g,S=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const w=Math.sqrt(T),R=Math.atan2(w,h*S);p=Math.sin(p*R)/w,o=Math.sin(o*R)/w}const x=o*S;if(l=l*p+d*x,c=c*p+m*x,u=u*p+_*x,f=f*p+g*x,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-o*m,e[t+2]=c*_+u*m+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new k,xl=new Br;class kr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),Wr.subVectors(this.max,vr),ki.subVectors(e.a,vr),zi.subVectors(e.b,vr),Hi.subVectors(e.c,vr),si.subVectors(zi,ki),ai.subVectors(Hi,zi),_i.subVectors(ki,Hi);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-_i.z,_i.y,si.z,0,-si.x,ai.z,0,-ai.x,_i.z,0,-_i.x,-si.y,si.x,0,-ai.y,ai.x,0,-_i.y,_i.x,0];return!aa(t,ki,zi,Hi,Wr)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,ki,zi,Hi,Wr))?!1:(Xr.crossVectors(si,ai),t=[Xr.x,Xr.y,Xr.z],aa(t,ki,zi,Hi,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new k,new k,new k,new k,new k,new k,new k,new k],yn=new k,Gr=new kr,ki=new k,zi=new k,Hi=new k,si=new k,ai=new k,_i=new k,vr=new k,Wr=new k,Xr=new k,vi=new k;function aa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vi.fromArray(n,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ph=new kr,xr=new k,oa=new k;class zr{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ph.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(oa)),this.expandByPoint(xr.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new k,la=new k,$r=new k,oi=new k,ca=new k,qr=new k,ua=new k;class Go{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){la.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(la);const s=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=oi.dot(this.direction),l=-oi.dot($r),c=oi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(la).addScaledVector($r,d),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){ca.subVectors(t,e),qr.subVectors(i,e),ua.crossVectors(ca,qr);let a=this.direction.dot(ua),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(qr.crossVectors(oi,qr));if(l<0)return null;const c=o*this.direction.dot(ca.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(ua);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,_,g,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,_,g,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vi.setFromMatrixColumn(e,0).length(),s=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d-g*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,gh)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),li.crossVectors(i,on),li.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),li.crossVectors(i,on)),li.normalize(),Yr.crossVectors(on,li),r[0]=li.x,r[4]=Yr.x,r[8]=on.x,r[1]=li.y,r[5]=Yr.y,r[9]=on.y,r[2]=li.z,r[6]=Yr.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],S=i[3],T=i[7],x=i[11],w=i[15],R=r[0],C=r[4],U=r[8],E=r[12],M=r[1],P=r[5],J=r[9],$=r[13],z=r[2],j=r[6],Z=r[10],ue=r[14],W=r[3],de=r[7],fe=r[11],Se=r[15];return s[0]=a*R+o*M+l*z+c*W,s[4]=a*C+o*P+l*j+c*de,s[8]=a*U+o*J+l*Z+c*fe,s[12]=a*E+o*$+l*ue+c*Se,s[1]=u*R+f*M+d*z+m*W,s[5]=u*C+f*P+d*j+m*de,s[9]=u*U+f*J+d*Z+m*fe,s[13]=u*E+f*$+d*ue+m*Se,s[2]=_*R+g*M+p*z+h*W,s[6]=_*C+g*P+p*j+h*de,s[10]=_*U+g*J+p*Z+h*fe,s[14]=_*E+g*$+p*ue+h*Se,s[3]=S*R+T*M+x*z+w*W,s[7]=S*C+T*P+x*j+w*de,s[11]=S*U+T*J+x*Z+w*fe,s[15]=S*E+T*$+x*ue+w*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+g*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],S=f*p*c-g*d*c+g*l*m-o*p*m-f*l*h+o*d*h,T=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,x=u*g*c-_*f*c+_*o*m-a*g*m-u*o*h+a*f*h,w=_*f*l-u*g*l-_*o*d+a*g*d+u*o*p-a*f*p,R=t*S+i*T+r*x+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=S*C,e[1]=(g*d*s-f*p*s-g*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*h+i*l*h)*C,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*C,e[4]=T*C,e[5]=(u*p*s-_*d*s+_*r*m-t*p*m-u*r*h+t*d*h)*C,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*h-t*l*h)*C,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*C,e[8]=x*C,e[9]=(_*f*s-u*g*s-_*i*m+t*g*m+u*i*h-t*f*h)*C,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*h+t*o*h)*C,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*C,e[12]=w*C,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*p+t*f*p)*C,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*p-t*o*p)*C,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,_=s*f,g=a*u,p=a*f,h=o*f,S=l*c,T=l*u,x=l*f,w=i.x,R=i.y,C=i.z;return r[0]=(1-(g+h))*w,r[1]=(m+x)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(d+h))*R,r[6]=(p+S)*R,r[7]=0,r[8]=(_+T)*C,r[9]=(p-S)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const a=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/a,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=jn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,_;if(o===jn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ls)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=jn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let _,g;if(o===jn)_=(a+s)*f,g=-2*f;else if(o===Ls)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vi=new k,Mn=new Tt,mh=new k(0,0,0),gh=new k(1,1,1),li=new k,Yr=new k,on=new k,bl=new Tt,yl=new Br;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const Ml=new k,Gi=new Br,Hn=new Tt,jr=new k,br=new k,vh=new k,xh=new Br,Sl=new k(1,0,0),El=new k(0,1,0),Tl=new k(0,0,1),Al={type:"added"},bh={type:"removed"},Wi={type:"childadded",child:null},da={type:"childremoved",child:null};class Yt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new k,t=new ei,i=new Br,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new tt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(br,jr,this.up):Hn.lookAt(jr,br,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new k(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new k,Vn=new k,ha=new k,Gn=new k,Xi=new k,$i=new k,wl=new k,fa=new k,pa=new k,ma=new k,ga=new wt,_a=new wt,va=new wt;class En{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),Vn.subVectors(i,t),ha.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Vn),l=Sn.dot(ha),c=Vn.dot(Vn),u=Vn.dot(ha),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,i),va.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ga,s.x),a.addScaledVector(_a,s.y),a.addScaledVector(va,s.z),a}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Vn.subVectors(e,t),Sn.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Sn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Xi.subVectors(r,i),$i.subVectors(s,i),fa.subVectors(e,i);const l=Xi.dot(fa),c=$i.dot(fa);if(l<=0&&c<=0)return t.copy(i);pa.subVectors(e,r);const u=Xi.dot(pa),f=$i.dot(pa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Xi,a);ma.subVectors(e,s);const m=Xi.dot(ma),_=$i.dot(ma);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector($i,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return wl.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(wl,o);const h=1/(p+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(Xi,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=Ho(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xa(a,s,e+1/3),this.g=xa(a,s,e),this.b=xa(a,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return ft.fromWorkingColorSpace(Vt.copy(this),e),Math.round(ut(Vt.r*255,0,255))*65536+Math.round(ut(Vt.g*255,0,255))*256+Math.round(ut(Vt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=hn){ft.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Zr);const i=wr(ci.h,Zr.h,t),r=wr(ci.s,Zr.s,t),s=wr(ci.l,Zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new pt;pt.NAMES=eu;let yh=0;class mr extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=pi,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Nr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pr&&(i.blendSrc=this.blendSrc),this.blendDst!==Nr&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tu extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new k,Kr=new xt;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fl,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}}class nu extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iu extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wn extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mh=0;const dn=new Tt,ba=new Yt,qi=new k,ln=new kr,yr=new kr,Ot=new k;class Rn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?iu:nu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(ln.min,yr.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,yr.max),ln.expandByPoint(Ot)):(ln.expandByPoint(yr.min),ln.expandByPoint(yr.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),Ot.add(qi)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new k,l[U]=new k;const c=new k,u=new k,f=new k,d=new xt,m=new xt,_=new xt,g=new k,p=new k;function h(U,E,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,U),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),o[U].add(g),o[E].add(g),o[M].add(g),l[U].add(p),l[E].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,E=S.length;U<E;++U){const M=S[U],P=M.start,J=M.count;for(let $=P,z=P+J;$<z;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new k,x=new k,w=new k,R=new k;function C(U){w.fromBufferAttribute(r,U),R.copy(w);const E=o[U];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(R,E);const P=x.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,P)}for(let U=0,E=S.length;U<E;++U){const M=S[U],P=M.start,J=M.count;for(let $=P,z=P+J;$<z;$+=3)C(e.getX($+0)),C(e.getX($+1)),C(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new qt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new Tt,xi=new Go,Jr=new zr,Cl=new k,Qr=new k,es=new k,ts=new k,ya=new k,ns=new k,Pl=new k,is=new k;class Zn extends Yt{constructor(e=new Rn,t=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ya.fromBufferAttribute(f,e),a?ns.addScaledVector(ya,u):ns.addScaledVector(ya.sub(t),u))}t.add(ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Jr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Jr,Cl)===null||xi.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Rl.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=S,w=T;x<w;x+=3){const R=o.getX(x),C=o.getX(x+1),U=o.getX(x+2);r=rs(this,h,e,i,c,u,f,R,C,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const S=o.getX(p),T=o.getX(p+1),x=o.getX(p+2);r=rs(this,a,e,i,c,u,f,S,T,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=S,w=T;x<w;x+=3){const R=x,C=x+1,U=x+2;r=rs(this,h,e,i,c,u,f,R,C,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const S=p,T=p+1,x=p+2;r=rs(this,a,e,i,c,u,f,S,T,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Sh(n,e,t,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gi,o),l===null)return null;is.copy(o),is.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:n}}function rs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Qr),n.getVertexPosition(l,es),n.getVertexPosition(c,ts);const u=Sh(n,e,t,i,Qr,es,ts,Pl);if(u){const f=new k;En.getBarycoord(Pl,Qr,es,ts,f),r&&(u.uv=En.getInterpolatedAttribute(r,o,l,c,f,new xt)),s&&(u.uv1=En.getInterpolatedAttribute(s,o,l,c,f,new xt)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};En.getNormal(Qr,es,ts,d.normal),u.face=d,u.barycoord=f}return u}class Hr extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(f,2));function _(g,p,h,S,T,x,w,R,C,U,E){const M=x/C,P=w/U,J=x/2,$=w/2,z=R/2,j=C+1,Z=U+1;let ue=0,W=0;const de=new k;for(let fe=0;fe<Z;fe++){const Se=fe*P-$;for(let Xe=0;Xe<j;Xe++){const dt=Xe*M-J;de[g]=dt*S,de[p]=Se*T,de[h]=z,c.push(de.x,de.y,de.z),de[g]=0,de[p]=0,de[h]=R>0?1:-1,u.push(de.x,de.y,de.z),f.push(Xe/C),f.push(1-fe/U),ue+=1}}for(let fe=0;fe<U;fe++)for(let Se=0;Se<C;Se++){const Xe=d+Se+j*fe,dt=d+Se+j*(fe+1),ne=d+(Se+1)+j*(fe+1),le=d+(Se+1)+j*fe;l.push(Xe,dt,le),l.push(dt,ne,le),W+=6}o.addGroup(m,W,E),m+=W,d+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=dr(n[t]);for(const r in i)e[r]=i[r]}return e}function Eh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ru(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Th={clone:dr,merge:$t};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class su extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new k,Nl=new xt,Ll=new xt;class pn extends su{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ll),t.subVectors(Ll,Nl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,ji=1;class Rh extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Yi,ji,e,t);r.layers=this.layers,this.add(r);const s=new pn(Yi,ji,e,t);s.layers=this.layers,this.add(s);const a=new pn(Yi,ji,e,t);a.layers=this.layers,this.add(a);const o=new pn(Yi,ji,e,t);o.layers=this.layers,this.add(o);const l=new pn(Yi,ji,e,t);l.layers=this.layers,this.add(l);const c=new pn(Yi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class au extends rn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ch extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new au(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:fi});s.uniforms.tEquirect.value=t;const a=new Zn(r,s),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Dn),new Rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ph extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ma=new k,Nh=new k,Lh=new tt;class Ti{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ma.subVectors(i,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lh.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new zr,ss=new k;class ou{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],h=r[12],S=r[13],T=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,p-m,x-h).normalize(),i[1].setComponents(l+s,d+c,p+m,x+h).normalize(),i[2].setComponents(l+a,d+u,p+_,x+S).normalize(),i[3].setComponents(l-a,d-u,p-_,x-S).normalize(),i[4].setComponents(l-o,d-f,p-g,x-T).normalize(),t===jn)i[5].setComponents(l+o,d+f,p+g,x+T).normalize();else if(t===Ls)i[5].setComponents(o,f,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ss.x=r.normal.x>0?e.max.x:e.min.x,ss.y=r.normal.y>0?e.max.y:e.min.y,ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ds=new k,Is=new k,Fl=new Tt,Mr=new Go,as=new zr,Sa=new k,Dl=new k;class Fh extends Yt{constructor(e=new Rn,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ds.fromBufferAttribute(t,r-1),Is.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ds.distanceTo(Is);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(r),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;Fl.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Fl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=u.getX(g),S=u.getX(g+1),T=os(this,e,Mr,l,h,S);T&&t.push(T)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(m),h=os(this,e,Mr,l,g,p);h&&t.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=os(this,e,Mr,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=os(this,e,Mr,l,_-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function os(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ds.fromBufferAttribute(a,r),Is.fromBufferAttribute(a,s),t.distanceSqToSegment(Ds,Is,Sa,Dl)>i)return;Sa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Sa);if(!(l<e.near||l>e.far))return{distance:l,point:Dl.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Il=new k,Ul=new k;class Dh extends Fh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Il.fromBufferAttribute(t,r),Ul.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Il.distanceTo(Ul);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ih extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ol=new Tt,To=new Go,ls=new zr,cs=new k;class Uh extends Yt{constructor(e=new Rn,t=new Ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(r),ls.radius+=s,e.ray.intersectsSphere(ls)===!1)return;Ol.copy(r).invert(),To.copy(e.ray).applyMatrix4(Ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,g=m;_<g;_++){const p=c.getX(_);cs.fromBufferAttribute(f,p),Bl(cs,p,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,g=m;_<g;_++)cs.fromBufferAttribute(f,_),Bl(cs,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bl(n,e,t,i,r,s,a){const o=To.distanceSqToPoint(n);if(o<t){const l=new k;To.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class us extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class cu extends rn{constructor(e,t,i,r,s,a,o,l,c,u=ir){if(u!==ir&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ir&&(i=Fi),i===void 0&&u===cr&&(i=lr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $s extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const S=h*d-a;for(let T=0;T<c;T++){const x=T*f-s;_.push(x,-S,0),g.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const T=S+c*h,x=S+c*(h+1),w=S+1+c*(h+1),R=S+1+c*h;m.push(T,x,R),m.push(x,w,R)}this.setIndex(m),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oh extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bh extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uu extends su{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kh extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zh extends Dh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Rn;r.setAttribute("position",new wn(t,3)),r.setAttribute("color",new wn(i,3));const s=new lu({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new pt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function kl(n,e,t,i){const r=Hh(i);switch(t){case Vc:return n*e;case Wc:return n*e;case Xc:return n*e*2;case $c:return n*e/r.components*r.byteLength;case Bo:return n*e/r.components*r.byteLength;case qc:return n*e*2/r.components*r.byteLength;case ko:return n*e*2/r.components*r.byteLength;case Gc:return n*e*3/r.components*r.byteLength;case Tn:return n*e*4/r.components*r.byteLength;case zo:return n*e*4/r.components*r.byteLength;case bs:case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case to:return Math.max(n,16)*Math.max(e,8)/4;case Ja:case eo:return Math.max(n,8)*Math.max(e,8)/2;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case po:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Es:case bo:case yo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yc:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case So:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hh(n){switch(n){case Qn:case kc:return{byteLength:1,components:1};case Lr:case zc:case Or:return{byteLength:2,components:1};case Uo:case Oo:return{byteLength:2,components:4};case Fi:case Io:case Yn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function du(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vh(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
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
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
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
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Kp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,hm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,bm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Gh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:$h,alphatest_fragment:qh,alphatest_pars_fragment:Yh,aomap_fragment:jh,aomap_pars_fragment:Zh,batching_pars_vertex:Kh,batching_vertex:Jh,begin_vertex:Qh,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:hf,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:vf,emissivemap_pars_fragment:xf,colorspace_fragment:bf,colorspace_pars_fragment:yf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:Ef,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Uf,envmap_vertex:Af,fog_vertex:wf,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Df,lights_pars_begin:If,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:kf,lights_phong_pars_fragment:zf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:jf,map_fragment:Zf,map_pars_fragment:Kf,map_particle_fragment:Jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:rp,morphtarget_pars_vertex:sp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:vp,premultiplied_alpha_fragment:xp,project_vertex:bp,dithering_fragment:yp,dithering_pars_fragment:Mp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:wp,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Np,skinnormal_vertex:Lp,specularmap_fragment:Fp,specularmap_pars_fragment:Dp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Up,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:kp,uv_pars_vertex:zp,uv_vertex:Hp,worldpos_vertex:Vp,background_vert:Gp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:$p,cube_vert:qp,cube_frag:Yp,depth_vert:jp,depth_frag:Zp,distanceRGBA_vert:Kp,distanceRGBA_frag:Jp,equirect_vert:Qp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:rm,meshlambert_vert:sm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:hm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:_m,points_frag:vm,shadow_vert:xm,shadow_frag:bm,sprite_vert:ym,sprite_frag:Mm},Ee={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new pt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ds={r:0,b:0,g:0},yi=new ei,Sm=new Tt;function Em(n,e,t,i,r,s,a){const o=new pt(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function g(T){let x=!1;const w=_(T);w===null?h(o,l):w&&w.isColor&&(h(w,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,x){const w=_(x);w&&(w.isCubeTexture||w.mapping===Xs)?(u===void 0&&(u=new Zn(new Hr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:dr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(yi)),u.material.toneMapped=ft.getTransfer(w.colorSpace)!==vt,(f!==w||d!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Zn(new $s(2,2),new ti({name:"BackgroundMaterial",uniforms:dr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(w.colorSpace)!==vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,x){T.getRGB(ds,ru(n)),i.buffers.color.setClear(ds.r,ds.g,ds.b,x,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,x=1){o.set(T),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:g,addToRenderList:p,dispose:S}}function Tm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,P,J,$,z){let j=!1;const Z=f($,J,P);s!==Z&&(s=Z,c(s.object)),j=m(M,$,J,z),j&&_(M,$,J,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(M,P,J,$),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,P,J){const $=J.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let j=z[P.id];j===void 0&&(j={},z[P.id]=j);let Z=j[$];return Z===void 0&&(Z=d(l()),j[$]=Z),Z}function d(M){const P=[],J=[],$=[];for(let z=0;z<t;z++)P[z]=0,J[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:J,attributeDivisors:$,object:M,attributes:{},index:null}}function m(M,P,J,$){const z=s.attributes,j=P.attributes;let Z=0;const ue=J.getAttributes();for(const W in ue)if(ue[W].location>=0){const fe=z[W];let Se=j[W];if(Se===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;Z++}return s.attributesNum!==Z||s.index!==$}function _(M,P,J,$){const z={},j=P.attributes;let Z=0;const ue=J.getAttributes();for(const W in ue)if(ue[W].location>=0){let fe=j[W];fe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),z[W]=Se,Z++}s.attributes=z,s.attributesNum=Z,s.index=$}function g(){const M=s.newAttributes;for(let P=0,J=M.length;P<J;P++)M[P]=0}function p(M){h(M,0)}function h(M,P){const J=s.newAttributes,$=s.enabledAttributes,z=s.attributeDivisors;J[M]=1,$[M]===0&&(n.enableVertexAttribArray(M),$[M]=1),z[M]!==P&&(n.vertexAttribDivisor(M,P),z[M]=P)}function S(){const M=s.newAttributes,P=s.enabledAttributes;for(let J=0,$=P.length;J<$;J++)P[J]!==M[J]&&(n.disableVertexAttribArray(J),P[J]=0)}function T(M,P,J,$,z,j,Z){Z===!0?n.vertexAttribIPointer(M,P,J,z,j):n.vertexAttribPointer(M,P,J,$,z,j)}function x(M,P,J,$){g();const z=$.attributes,j=J.getAttributes(),Z=P.defaultAttributeValues;for(const ue in j){const W=j[ue];if(W.location>=0){let de=z[ue];if(de===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const fe=de.normalized,Se=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const dt=Xe.buffer,ne=Xe.type,le=Xe.bytesPerElement,Fe=ne===n.INT||ne===n.UNSIGNED_INT||de.gpuType===Io;if(de.isInterleavedBufferAttribute){const he=de.data,De=he.stride,$e=de.offset;if(he.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)h(W.location+We,he.meshPerAttribute);M.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let We=0;We<W.locationSize;We++)p(W.location+We);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let We=0;We<W.locationSize;We++)T(W.location+We,Se/W.locationSize,ne,fe,De*le,($e+Se/W.locationSize*We)*le,Fe)}else{if(de.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)h(W.location+he,de.meshPerAttribute);M.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let he=0;he<W.locationSize;he++)p(W.location+he);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let he=0;he<W.locationSize;he++)T(W.location+he,Se/W.locationSize,ne,fe,Se*le,Se/W.locationSize*he*le,Fe)}}else if(Z!==void 0){const fe=Z[ue];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}S()}function w(){U();for(const M in i){const P=i[M];for(const J in P){const $=P[J];for(const z in $)u($[z].object),delete $[z];delete P[J]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const J in P){const $=P[J];for(const z in $)u($[z].object),delete $[z];delete P[J]}delete i[M.id]}function C(M){for(const P in i){const J=i[P];if(J[M.id]===void 0)continue;const $=J[M.id];for(const z in $)u($[z].object),delete $[z];delete J[M.id]}}function U(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function Am(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*d[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Tn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yn&&!U)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:w,maxSamples:R}}function Rm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,T=S*4;let x=h.clippingState||null;l.value=x,x=u(_,d,T,m);for(let w=0;w!==T;++w)x[w]=t[w];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,x=m;T!==g;++T,x+=4)a.copy(f[T]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Cm(n){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=ar:o===ja&&(a.mapping=or),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ch(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tr=4,zl=[.125,.215,.35,.446,.526,.582],Ci=20,Ea=new uu,Hl=new pt;let Ta=null,Aa=0,wa=0,Ra=!1;const Ai=(1+Math.sqrt(5))/2,Zi=1/Ai,Vl=[new k(-Ai,Zi,0),new k(Ai,Zi,0),new k(-Zi,0,Ai),new k(Zi,0,Ai),new k(0,Ai,-Zi),new k(0,Ai,Zi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,wa),this._renderer.xr.enabled=Ra,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Or,format:Tn,colorSpace:ur,depthBuffer:!1},r=Wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(s)),this._blurMaterial=Nm(s,e,t)}return r}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,i,r){const o=new pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Hl),u.toneMapping=mi,u.autoClear=!1;const m=new tu({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Zn(new Hr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Hl),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;hs(r,S*T,h>2?T:0,T,T),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ar||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ea)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vl[(r-s-1)%Vl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ci-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ci;p>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ci}`);const h=[];let S=0;for(let C=0;C<Ci;++C){const U=C/g,E=Math.exp(-U*U/2);h.push(E),C===0?S+=E:C<p&&(S+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const x=this._sizeLods[r],w=3*x*(r>T-tr?r-T+tr:0),R=4*(this._cubeSize-x);hs(t,w,R,3*x,2*x),l.setRenderTarget(t),l.render(f,Ea)}}function Pm(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-tr?l=zl[a-n+tr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,S=new Float32Array(g*_*m),T=new Float32Array(p*_*m),x=new Float32Array(h*_*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,U=R>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];S.set(E,g*_*R),T.set(d,p*_*R);const M=[R,R,R,R,R,R];x.set(M,h*_*R)}const w=new Rn;w.setAttribute("position",new qt(S,g)),w.setAttribute("uv",new qt(T,p)),w.setAttribute("faceIndex",new qt(x,h)),e.push(w),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wl(n,e,t){const i=new Di(n,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Nm(n,e,t){const i=new Float32Array(Ci),r=new k(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Xl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $l(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function Lm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===ja,u=l===ar||l===or;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Gl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Gl(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Fm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dm(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let T=0,x=S.length;T<x;T+=3){const w=S[T+0],R=S[T+1],C=S[T+2];d.push(w,R,R,C,C,w)}}else if(_!==void 0){const S=_.array;g=_.version;for(let T=0,x=S.length/3-1;T<x;T+=3){const w=T+0,R=T+1,C=T+2;d.push(w,R,R,C,C,w)}}else return;const p=new(Zc(d)?iu:nu)(d,1);p.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Im(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,d*a,_),t.update(m,i,_))}function u(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,i,1)}function f(d,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,g,0,_);let h=0;for(let S=0;S<_;S++)h+=m[S]*g[S];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Um(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Om(n,e,t){const i=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),g===!0&&(T=3);let x=o.attributes.position.count*T,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*w*4*f),C=new Jc(R,x,w,f);C.type=Yn,C.needsUpdate=!0;const U=T*4;for(let M=0;M<f;M++){const P=p[M],J=h[M],$=S[M],z=x*w*4*M;for(let j=0;j<P.count;j++){const Z=j*U;m===!0&&(r.fromBufferAttribute(P,j),R[z+Z+0]=r.x,R[z+Z+1]=r.y,R[z+Z+2]=r.z,R[z+Z+3]=0),_===!0&&(r.fromBufferAttribute(J,j),R[z+Z+4]=r.x,R[z+Z+5]=r.y,R[z+Z+6]=r.z,R[z+Z+7]=0),g===!0&&(r.fromBufferAttribute($,j),R[z+Z+8]=r.x,R[z+Z+9]=r.y,R[z+Z+10]=r.z,R[z+Z+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new xt(x,w)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Bm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const hu=new rn,ql=new cu(1,1),fu=new Jc,pu=new fh,mu=new au,Yl=[],jl=[],Zl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yl[r];if(s===void 0&&(s=new Float32Array(r),Yl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qs(n,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Gm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),It(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),It(t,i)}}function Xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),It(t,i)}}function $m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function Zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ql.compareFunction=jc,s=ql):s=hu,t.setTexture2D(e||s,r)}function tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pu,r)}function ng(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mu,r)}function ig(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fu,r)}function rg(n){switch(n){case 5126:return km;case 35664:return zm;case 35665:return Hm;case 35666:return Vm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return $m;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return jm;case 5125:return Zm;case 36294:return Km;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function sg(n,e){n.uniform1fv(this.addr,e)}function ag(n,e){const t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function og(n,e){const t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function lg(n,e){const t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function cg(n,e){const t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ug(n,e){const t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dg(n,e){const t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hg(n,e){n.uniform1iv(this.addr,e)}function fg(n,e){n.uniform2iv(this.addr,e)}function pg(n,e){n.uniform3iv(this.addr,e)}function mg(n,e){n.uniform4iv(this.addr,e)}function gg(n,e){n.uniform1uiv(this.addr,e)}function _g(n,e){n.uniform2uiv(this.addr,e)}function vg(n,e){n.uniform3uiv(this.addr,e)}function xg(n,e){n.uniform4uiv(this.addr,e)}function bg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||hu,s[a])}function yg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pu,s[a])}function Mg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mu,s[a])}function Sg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fu,s[a])}function Eg(n){switch(n){case 5126:return sg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Tg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rg(t.type)}}class Ag{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eg(t.type)}}class wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Ql(n,e){n.seq.push(e),n.map[e.id]=e}function Rg(n,e,t){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),a=Ca.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ql(t,c===void 0?new Tg(o,n,e):new Ag(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new wg(o),Ql(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Rg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ec(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cg=37297;let Pg=0;function Ng(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const tc=new tt;function Lg(n){ft._getMatrix(tc,ft.workingColorSpace,n);const e=`mat3( ${tc.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Ns:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ng(n.getShaderSource(e),a)}else return r}function Fg(n,e){const t=Lg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dg(n,e){let t;switch(e){case Md:t="Linear";break;case Sd:t="Reinhard";break;case Ed:t="Cineon";break;case Td:t="ACESFilmic";break;case wd:t="AgX";break;case Rd:t="Neutral";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new k;function Ig(){ft.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Og(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function ic(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(kg,Hg)}const zg=new Map;function Hg(n,e){let t=nt[e];if(t===void 0){const i=zg.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(n){return n.replace(Vg,Gg)}function Gg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ac(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Wg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $g(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function qg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case yd:e="ENVMAP_BLENDING_ADD";break}return e}function Yg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wg(t),c=Xg(t),u=$g(t),f=qg(t),d=Yg(t),m=Ug(t),_=Og(s),g=r.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Tr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Tr).join(`
`),h.length>0&&(h+=`
`)):(p=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),h=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?nt.tonemapping_pars_fragment:"",t.toneMapping!==mi?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Ao(a),a=ic(a,t),a=rc(a,t),o=Ao(o),o=ic(o,t),o=rc(o,t),a=sc(a),o=sc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=S+p+a,x=S+h+o,w=ec(r,r.VERTEX_SHADER,T),R=ec(r,r.FRAGMENT_SHADER,x);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(g).trim(),$=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(R).trim();let j=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,R);else{const ue=nc(r,w,"vertex"),W=nc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+J+`
`+ue+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):($===""||z==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:J,vertexShader:{log:$,prefix:p},fragmentShader:{log:z,prefix:h}})}r.deleteShader(w),r.deleteShader(R),U=new Ts(r,g),E=Bg(r,g)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,Cg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let Zg=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jg(e),t.set(e,i)),i}}class Jg{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}}function Qg(n,e,t,i,r,s,a){const o=new Qc,l=new Kg,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,P,J,$){const z=J.fog,j=$.geometry,Z=E.isMeshStandardMaterial?J.environment:null,ue=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),W=ue&&ue.mapping===Xs?ue.image.height:null,de=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=fe!==void 0?fe.length:0;let Xe=0;j.morphAttributes.position!==void 0&&(Xe=1),j.morphAttributes.normal!==void 0&&(Xe=2),j.morphAttributes.color!==void 0&&(Xe=3);let dt,ne,le,Fe;if(de){const it=Fn[de];dt=it.vertexShader,ne=it.fragmentShader}else dt=E.vertexShader,ne=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),Fe=l.getFragmentShaderID(E);const he=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),$e=$.isInstancedMesh===!0,We=$.isBatchedMesh===!0,_t=!!E.map,Ze=!!E.matcap,lt=!!ue,N=!!E.aoMap,mt=!!E.lightMap,Be=!!E.bumpMap,Ve=!!E.normalMap,Pe=!!E.displacementMap,Je=!!E.emissiveMap,q=!!E.metalnessMap,y=!!E.roughnessMap,v=E.anisotropy>0,L=E.clearcoat>0,X=E.dispersion>0,Q=E.iridescence>0,K=E.sheen>0,Ae=E.transmission>0,A=v&&!!E.anisotropyMap,O=L&&!!E.clearcoatMap,te=L&&!!E.clearcoatNormalMap,B=L&&!!E.clearcoatRoughnessMap,Y=Q&&!!E.iridescenceMap,ce=Q&&!!E.iridescenceThicknessMap,xe=K&&!!E.sheenColorMap,oe=K&&!!E.sheenRoughnessMap,ke=!!E.specularMap,me=!!E.specularColorMap,Ke=!!E.specularIntensityMap,D=Ae&&!!E.transmissionMap,pe=Ae&&!!E.thicknessMap,H=!!E.gradientMap,ie=!!E.alphaMap,ye=E.alphaTest>0,ge=!!E.alphaHash,we=!!E.extensions;let at=mi;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=n.toneMapping);const ot={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:dt,fragmentShader:ne,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:Fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:We,batchingColor:We&&$._colorsTexture!==null,instancing:$e,instancingColor:$e&&$.instanceColor!==null,instancingMorph:$e&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ur,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:Ze,envMap:lt,envMapMode:lt&&ue.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:mt,bumpMap:Be,normalMap:Ve,displacementMap:d&&Pe,emissiveMap:Je,normalMapObjectSpace:Ve&&E.normalMapType===Fd,normalMapTangentSpace:Ve&&E.normalMapType===Ld,metalnessMap:q,roughnessMap:y,anisotropy:v,anisotropyMap:A,clearcoat:L,clearcoatMap:O,clearcoatNormalMap:te,clearcoatRoughnessMap:B,dispersion:X,iridescence:Q,iridescenceMap:Y,iridescenceThicknessMap:ce,sheen:K,sheenColorMap:xe,sheenRoughnessMap:oe,specularMap:ke,specularColorMap:me,specularIntensityMap:Ke,transmission:Ae,transmissionMap:D,thicknessMap:pe,gradientMap:H,opaque:E.transparent===!1&&E.blending===pi&&E.alphaToCoverage===!1,alphaMap:ie,alphaTest:ye,alphaHash:ge,combine:E.combine,mapUv:_t&&g(E.map.channel),aoMapUv:N&&g(E.aoMap.channel),lightMapUv:mt&&g(E.lightMap.channel),bumpMapUv:Be&&g(E.bumpMap.channel),normalMapUv:Ve&&g(E.normalMap.channel),displacementMapUv:Pe&&g(E.displacementMap.channel),emissiveMapUv:Je&&g(E.emissiveMap.channel),metalnessMapUv:q&&g(E.metalnessMap.channel),roughnessMapUv:y&&g(E.roughnessMap.channel),anisotropyMapUv:A&&g(E.anisotropyMap.channel),clearcoatMapUv:O&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(E.sheenRoughnessMap.channel),specularMapUv:ke&&g(E.specularMap.channel),specularColorMapUv:me&&g(E.specularColorMap.channel),specularIntensityMapUv:Ke&&g(E.specularIntensityMap.channel),transmissionMapUv:D&&g(E.transmissionMap.channel),thicknessMapUv:pe&&g(E.thicknessMap.channel),alphaMapUv:ie&&g(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ve||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!j.attributes.uv&&(_t||ie),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===vt,decodeVideoTextureEmissive:Je&&E.emissiveMap.isVideoTexture===!0&&ft.getTransfer(E.emissiveMap.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$n,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:we&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&E.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(S(M,E),T(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function T(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const M=_[E.type];let P;if(M){const J=Fn[M];P=Th.clone(J.uniforms)}else P=E.uniforms;return P}function w(E,M){let P;for(let J=0,$=u.length;J<$;J++){const z=u[J];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new jg(n,M,E,s),u.push(P)),P}function R(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:U}}function e_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function t_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function oc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,_,g,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function o(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||t_),i.length>1&&i.sort(d||oc),r.length>1&&r.sort(d||oc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function n_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new lc,n.set(i,[a])):r>=s.length?(a=new lc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function i_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new pt};break;case"SpotLight":t={position:new k,direction:new k,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function r_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let s_=0;function a_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function o_(n){const e=new i_,t=r_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Tt,a=new Tt;function o(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,S=0,T=0,x=0,w=0,R=0,C=0;c.sort(a_);for(let E=0,M=c.length;E<M;E++){const P=c[E],J=P.color,$=P.intensity,z=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=J.r*$,f+=J.g*$,d+=J.b*$;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],$);C++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ue=P.shadow,W=t.get(P);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=P.shadow.matrix,S++}i.directional[m]=Z,m++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(J).multiplyScalar($),Z.distance=z,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[g]=Z;const ue=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,ue.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[g]=ue.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=j,x++}g++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(J).multiplyScalar($),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=Z,p++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const ue=P.shadow,W=t.get(P);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,W.shadowCameraNear=ue.camera.near,W.shadowCameraFar=ue.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=P.shadow.matrix,T++}i.point[_]=Z,_++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar($),Z.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[h]=Z,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==g||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==S||U.numPointShadows!==T||U.numSpotShadows!==x||U.numSpotMaps!==w||U.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,U.directionalLength=m,U.pointLength=_,U.spotLength=g,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=S,U.numPointShadows=T,U.numSpotShadows=x,U.numSpotMaps=w,U.numLightProbes=C,i.version=s_++)}function l(c,u){let f=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const T=c[h];if(T.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),f++}else if(T.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function cc(n){const e=new o_(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function l_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new cc(n),e.set(r,[o])):s>=a.length?(o=new cc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function d_(n,e,t){let i=new ou;const r=new xt,s=new xt,a=new wt,o=new Oh({depthPacking:Nd}),l=new Bh,c={},u=t.maxTextureSize,f={[gi]:nn,[nn]:gi,[$n]:$n},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:c_,fragmentShader:u_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Zn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let h=this.type;this.render=function(R,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),J=n.state;J.setBlending(fi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=h!==Wn&&this.type===Wn,z=h===Wn&&this.type!==Wn;for(let j=0,Z=R.length;j<Z;j++){const ue=R[j],W=ue.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||$===!0||z===!0){const Se=this.type!==Wn?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new Di(r.x,r.y,Se),W.map.texture.name=ue.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const fe=W.getViewportCount();for(let Se=0;Se<fe;Se++){const Xe=W.getViewport(Se);a.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),J.viewport(a),W.updateMatrices(ue,Se),i=W.getFrustum(),x(C,U,W.camera,ue,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&S(W,U),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,P)};function S(R,C){const U=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Di(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,U,d,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,U,m,g,null)}function T(R,C,U,E){let M=null;const P=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=U.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const J=M.uuid,$=C.uuid;let z=c[J];z===void 0&&(z={},c[J]=z);let j=z[$];j===void 0&&(j=M.clone(),z[$]=j,C.addEventListener("dispose",w)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const J=n.properties.get(M);J.light=U}return M}function x(R,C,U,E,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Wn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const $=e.update(R),z=R.material;if(Array.isArray(z)){const j=$.groups;for(let Z=0,ue=j.length;Z<ue;Z++){const W=j[Z],de=z[W.materialIndex];if(de&&de.visible){const fe=T(R,de,E,M);R.onBeforeShadow(n,R,C,U,$,fe,W),n.renderBufferDirect(U,null,$,fe,R,W),R.onAfterShadow(n,R,C,U,$,fe,W)}}}else if(z.visible){const j=T(R,z,E,M);R.onBeforeShadow(n,R,C,U,$,j,null),n.renderBufferDirect(U,null,$,j,R,null),R.onAfterShadow(n,R,C,U,$,j,null)}}const J=R.children;for(let $=0,z=J.length;$<z;$++)x(J[$],C,U,E,M)}function w(R){R.target.removeEventListener("dispose",w);for(const U in c){const E=c[U],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const h_={[Ha]:Va,[Ga]:$a,[Wa]:qa,[sr]:Xa,[Va]:Ha,[$a]:Ga,[qa]:Wa,[Xa]:sr};function f_(n,e){function t(){let D=!1;const pe=new wt;let H=null;const ie=new wt(0,0,0,0);return{setMask:function(ye){H!==ye&&!D&&(n.colorMask(ye,ye,ye,ye),H=ye)},setLocked:function(ye){D=ye},setClear:function(ye,ge,we,at,ot){ot===!0&&(ye*=at,ge*=at,we*=at),pe.set(ye,ge,we,at),ie.equals(pe)===!1&&(n.clearColor(ye,ge,we,at),ie.copy(pe))},reset:function(){D=!1,H=null,ie.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,H=null,ie=null,ye=null;return{setReversed:function(ge){if(pe!==ge){const we=e.get("EXT_clip_control");pe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);const at=ye;ye=null,this.setClear(at)}pe=ge},getReversed:function(){return pe},setTest:function(ge){ge?he(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ge){H!==ge&&!D&&(n.depthMask(ge),H=ge)},setFunc:function(ge){if(pe&&(ge=h_[ge]),ie!==ge){switch(ge){case Ha:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case $a:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ye!==ge&&(pe&&(ge=1-ge),n.clearDepth(ge),ye=ge)},reset:function(){D=!1,H=null,ie=null,ye=null,pe=!1}}}function r(){let D=!1,pe=null,H=null,ie=null,ye=null,ge=null,we=null,at=null,ot=null;return{setTest:function(it){D||(it?he(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(it){pe!==it&&!D&&(n.stencilMask(it),pe=it)},setFunc:function(it,Rt,zt){(H!==it||ie!==Rt||ye!==zt)&&(n.stencilFunc(it,Rt,zt),H=it,ie=Rt,ye=zt)},setOp:function(it,Rt,zt){(ge!==it||we!==Rt||at!==zt)&&(n.stencilOp(it,Rt,zt),ge=it,we=Rt,at=zt)},setLocked:function(it){D=it},setClear:function(it){ot!==it&&(n.clearStencil(it),ot=it)},reset:function(){D=!1,pe=null,H=null,ie=null,ye=null,ge=null,we=null,at=null,ot=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,h=null,S=null,T=null,x=null,w=null,R=null,C=new pt(0,0,0),U=0,E=!1,M=null,P=null,J=null,$=null,z=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ue=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=ue>=1):W.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=ue>=2);let de=null,fe={};const Se=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),dt=new wt().fromArray(Se),ne=new wt().fromArray(Xe);function le(D,pe,H,ie){const ye=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<H;we++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(pe+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ge}const Fe={};Fe[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(sr),Be(!1),Ve(cl),he(n.CULL_FACE),N(fi);function he(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function De(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function $e(D,pe){return f[D]!==pe?(n.bindFramebuffer(D,pe),f[D]=pe,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function We(D,pe){let H=m,ie=!1;if(D){H=d.get(pe),H===void 0&&(H=[],d.set(pe,H));const ye=D.textures;if(H.length!==ye.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,we=ye.length;ge<we;ge++)H[ge]=n.COLOR_ATTACHMENT0+ge;H.length=ye.length,ie=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,ie=!0);ie&&n.drawBuffers(H)}function _t(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const Ze={[qn]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[rd]:n.FUNC_REVERSE_SUBTRACT};Ze[sd]=n.MIN,Ze[ad]=n.MAX;const lt={[od]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[Pr]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[dd]:n.DST_ALPHA,[ud]:n.ONE_MINUS_SRC_COLOR,[Nr]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[hd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[_d]:n.ONE_MINUS_CONSTANT_COLOR,[vd]:n.CONSTANT_ALPHA,[xd]:n.ONE_MINUS_CONSTANT_ALPHA};function N(D,pe,H,ie,ye,ge,we,at,ot,it){if(D===fi){g===!0&&(De(n.BLEND),g=!1);return}if(g===!1&&(he(n.BLEND),g=!0),D!==za){if(D!==p||it!==E){if((h!==qn||x!==qn)&&(n.blendEquation(n.FUNC_ADD),h=qn,x=qn),it)switch(D){case pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFunc(n.ONE,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,T=null,w=null,R=null,C.set(0,0,0),U=0,p=D,E=it}return}ye=ye||pe,ge=ge||H,we=we||ie,(pe!==h||ye!==x)&&(n.blendEquationSeparate(Ze[pe],Ze[ye]),h=pe,x=ye),(H!==S||ie!==T||ge!==w||we!==R)&&(n.blendFuncSeparate(lt[H],lt[ie],lt[ge],lt[we]),S=H,T=ie,w=ge,R=we),(at.equals(C)===!1||ot!==U)&&(n.blendColor(at.r,at.g,at.b,ot),C.copy(at),U=ot),p=D,E=!1}function mt(D,pe){D.side===$n?De(n.CULL_FACE):he(n.CULL_FACE);let H=D.side===nn;pe&&(H=!H),Be(H),D.blending===pi&&D.transparent===!1?N(fi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ie=D.stencilWrite;o.setTest(ie),ie&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function Ve(D){D!==ed?(he(n.CULL_FACE),D!==P&&(D===cl?n.cullFace(n.BACK):D===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),P=D}function Pe(D){D!==J&&(Z&&n.lineWidth(D),J=D)}function Je(D,pe,H){D?(he(n.POLYGON_OFFSET_FILL),($!==pe||z!==H)&&(n.polygonOffset(pe,H),$=pe,z=H)):De(n.POLYGON_OFFSET_FILL)}function q(D){D?he(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function y(D){D===void 0&&(D=n.TEXTURE0+j-1),de!==D&&(n.activeTexture(D),de=D)}function v(D,pe,H){H===void 0&&(de===null?H=n.TEXTURE0+j-1:H=de);let ie=fe[H];ie===void 0&&(ie={type:void 0,texture:void 0},fe[H]=ie),(ie.type!==D||ie.texture!==pe)&&(de!==H&&(n.activeTexture(H),de=H),n.bindTexture(D,pe||Fe[D]),ie.type=D,ie.texture=pe)}function L(){const D=fe[de];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(D){dt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),dt.copy(D))}function oe(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function ke(D,pe){let H=c.get(pe);H===void 0&&(H=new WeakMap,c.set(pe,H));let ie=H.get(D);ie===void 0&&(ie=n.getUniformBlockIndex(pe,D.name),H.set(D,ie))}function me(D,pe){const ie=c.get(pe).get(D);l.get(pe)!==ie&&(n.uniformBlockBinding(pe,ie,D.__bindingPointIndex),l.set(pe,ie))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,fe={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,h=null,S=null,T=null,x=null,w=null,R=null,C=new pt(0,0,0),U=0,E=!1,M=null,P=null,J=null,$=null,z=null,dt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:De,bindFramebuffer:$e,drawBuffers:We,useProgram:_t,setBlending:N,setMaterial:mt,setFlipSided:Be,setCullFace:Ve,setLineWidth:Pe,setPolygonOffset:Je,setScissorTest:q,activeTexture:y,bindTexture:v,unbindTexture:L,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Y,texImage3D:ce,updateUBOMapping:ke,uniformBlockBinding:me,texStorage2D:te,texStorage3D:B,texSubImage2D:K,texSubImage3D:Ae,compressedTexSubImage2D:A,compressedTexSubImage3D:O,scissor:xe,viewport:oe,reset:Ke}}function p_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):Fs("canvas")}function g(y,v,L){let X=1;const Q=q(y);if((Q.width>L||Q.height>L)&&(X=L/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const K=Math.floor(X*Q.width),Ae=Math.floor(X*Q.height);f===void 0&&(f=_(K,Ae));const A=v?_(K,Ae):f;return A.width=K,A.height=Ae,A.getContext("2d").drawImage(y,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Ae+")."),A}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function S(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,v,L,X,Q=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=v;if(v===n.RED&&(L===n.FLOAT&&(K=n.R32F),L===n.HALF_FLOAT&&(K=n.R16F),L===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(K=n.R8UI),L===n.UNSIGNED_SHORT&&(K=n.R16UI),L===n.UNSIGNED_INT&&(K=n.R32UI),L===n.BYTE&&(K=n.R8I),L===n.SHORT&&(K=n.R16I),L===n.INT&&(K=n.R32I)),v===n.RG&&(L===n.FLOAT&&(K=n.RG32F),L===n.HALF_FLOAT&&(K=n.RG16F),L===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(K=n.RG8UI),L===n.UNSIGNED_SHORT&&(K=n.RG16UI),L===n.UNSIGNED_INT&&(K=n.RG32UI),L===n.BYTE&&(K=n.RG8I),L===n.SHORT&&(K=n.RG16I),L===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(K=n.RGB8UI),L===n.UNSIGNED_SHORT&&(K=n.RGB16UI),L===n.UNSIGNED_INT&&(K=n.RGB32UI),L===n.BYTE&&(K=n.RGB8I),L===n.SHORT&&(K=n.RGB16I),L===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),L===n.UNSIGNED_INT&&(K=n.RGBA32UI),L===n.BYTE&&(K=n.RGBA8I),L===n.SHORT&&(K=n.RGBA16I),L===n.INT&&(K=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),v===n.RGBA){const Ae=Q?Ns:ft.getTransfer(X);L===n.FLOAT&&(K=n.RGBA32F),L===n.HALF_FLOAT&&(K=n.RGBA16F),L===n.UNSIGNED_BYTE&&(K=Ae===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(y,v){let L;return y?v===null||v===Fi||v===lr?L=n.DEPTH24_STENCIL8:v===Yn?L=n.DEPTH32F_STENCIL8:v===Lr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fi||v===lr?L=n.DEPTH_COMPONENT24:v===Yn?L=n.DEPTH_COMPONENT32F:v===Lr&&(L=n.DEPTH_COMPONENT16),L}function w(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==An&&y.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){const v=y.target;v.removeEventListener("dispose",R),U(v),v.isVideoTexture&&u.delete(v)}function C(y){const v=y.target;v.removeEventListener("dispose",C),M(v)}function U(y){const v=i.get(y);if(v.__webglInit===void 0)return;const L=y.source,X=d.get(L);if(X){const Q=X[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(y),Object.keys(X).length===0&&d.delete(L)}i.remove(y)}function E(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const L=y.source,X=d.get(L);delete X[v.__cacheKey],a.memory.textures--}function M(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Q=0;Q<v.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=y.textures;for(let X=0,Q=L.length;X<Q;X++){const K=i.get(L[X]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(L[X])}i.remove(y)}let P=0;function J(){P=0}function $(){const y=P;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),P+=1,y}function z(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function j(y,v){const L=i.get(y);if(y.isVideoTexture&&Pe(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(L,y,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function Z(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ne(L,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function ue(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ne(L,y,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function W(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){le(L,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const de={[Za]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},fe={[An]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Se={[Dd]:n.NEVER,[zd]:n.ALWAYS,[Id]:n.LESS,[jc]:n.LEQUAL,[Ud]:n.EQUAL,[kd]:n.GEQUAL,[Od]:n.GREATER,[Bd]:n.NOTEQUAL};function Xe(y,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===na||v.magFilter===Vr||v.magFilter===Ni||v.minFilter===Dn||v.minFilter===na||v.minFilter===Vr||v.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,de[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,de[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,de[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,fe[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==Vr&&v.minFilter!==Ni||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function dt(y,v){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));const X=v.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const K=z(v);if(K!==y.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),Q[K].usedTimes++;const Ae=Q[y.__cacheKey];Ae!==void 0&&(Q[y.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(v)),y.__cacheKey=K,y.__webglTexture=Q[K].texture}return L}function ne(y,v,L){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const Q=dt(y,v),K=v.source;t.bindTexture(X,y.__webglTexture,n.TEXTURE0+L);const Ae=i.get(K);if(K.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+L);const A=ft.getPrimaries(ft.workingColorSpace),O=v.colorSpace===di?null:ft.getPrimaries(v.colorSpace),te=v.colorSpace===di||A===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let B=g(v.image,!1,r.maxTextureSize);B=Je(v,B);const Y=s.convert(v.format,v.colorSpace),ce=s.convert(v.type);let xe=T(v.internalFormat,Y,ce,v.colorSpace,v.isVideoTexture);Xe(X,v);let oe;const ke=v.mipmaps,me=v.isVideoTexture!==!0,Ke=Ae.__version===void 0||Q===!0,D=K.dataReady,pe=w(v,B);if(v.isDepthTexture)xe=x(v.format===cr,v.type),Ke&&(me?t.texStorage2D(n.TEXTURE_2D,1,xe,B.width,B.height):t.texImage2D(n.TEXTURE_2D,0,xe,B.width,B.height,0,Y,ce,null));else if(v.isDataTexture)if(ke.length>0){me&&Ke&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ke[0].width,ke[0].height);for(let H=0,ie=ke.length;H<ie;H++)oe=ke[H],me?D&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,oe.width,oe.height,Y,ce,oe.data):t.texImage2D(n.TEXTURE_2D,H,xe,oe.width,oe.height,0,Y,ce,oe.data);v.generateMipmaps=!1}else me?(Ke&&t.texStorage2D(n.TEXTURE_2D,pe,xe,B.width,B.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,B.width,B.height,Y,ce,B.data)):t.texImage2D(n.TEXTURE_2D,0,xe,B.width,B.height,0,Y,ce,B.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){me&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,ke[0].width,ke[0].height,B.depth);for(let H=0,ie=ke.length;H<ie;H++)if(oe=ke[H],v.format!==Tn)if(Y!==null)if(me){if(D)if(v.layerUpdates.size>0){const ye=kl(oe.width,oe.height,v.format,v.type);for(const ge of v.layerUpdates){const we=oe.data.subarray(ge*ye/oe.data.BYTES_PER_ELEMENT,(ge+1)*ye/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ge,oe.width,oe.height,1,Y,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,oe.width,oe.height,B.depth,Y,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,xe,oe.width,oe.height,B.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,oe.width,oe.height,B.depth,Y,ce,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,xe,oe.width,oe.height,B.depth,0,Y,ce,oe.data)}else{me&&Ke&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ke[0].width,ke[0].height);for(let H=0,ie=ke.length;H<ie;H++)oe=ke[H],v.format!==Tn?Y!==null?me?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,oe.width,oe.height,Y,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,H,xe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?D&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,oe.width,oe.height,Y,ce,oe.data):t.texImage2D(n.TEXTURE_2D,H,xe,oe.width,oe.height,0,Y,ce,oe.data)}else if(v.isDataArrayTexture)if(me){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,B.width,B.height,B.depth),D)if(v.layerUpdates.size>0){const H=kl(B.width,B.height,v.format,v.type);for(const ie of v.layerUpdates){const ye=B.data.subarray(ie*H/B.data.BYTES_PER_ELEMENT,(ie+1)*H/B.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,B.width,B.height,1,Y,ce,ye)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,Y,ce,B.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,B.width,B.height,B.depth,0,Y,ce,B.data);else if(v.isData3DTexture)me?(Ke&&t.texStorage3D(n.TEXTURE_3D,pe,xe,B.width,B.height,B.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,Y,ce,B.data)):t.texImage3D(n.TEXTURE_3D,0,xe,B.width,B.height,B.depth,0,Y,ce,B.data);else if(v.isFramebufferTexture){if(Ke)if(me)t.texStorage2D(n.TEXTURE_2D,pe,xe,B.width,B.height);else{let H=B.width,ie=B.height;for(let ye=0;ye<pe;ye++)t.texImage2D(n.TEXTURE_2D,ye,xe,H,ie,0,Y,ce,null),H>>=1,ie>>=1}}else if(ke.length>0){if(me&&Ke){const H=q(ke[0]);t.texStorage2D(n.TEXTURE_2D,pe,xe,H.width,H.height)}for(let H=0,ie=ke.length;H<ie;H++)oe=ke[H],me?D&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,Y,ce,oe):t.texImage2D(n.TEXTURE_2D,H,xe,Y,ce,oe);v.generateMipmaps=!1}else if(me){if(Ke){const H=q(B);t.texStorage2D(n.TEXTURE_2D,pe,xe,H.width,H.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y,ce,B)}else t.texImage2D(n.TEXTURE_2D,0,xe,Y,ce,B);p(v)&&h(X),Ae.__version=K.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function le(y,v,L){if(v.image.length!==6)return;const X=dt(y,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const K=i.get(Q);if(Q.version!==K.__version||X===!0){t.activeTexture(n.TEXTURE0+L);const Ae=ft.getPrimaries(ft.workingColorSpace),A=v.colorSpace===di?null:ft.getPrimaries(v.colorSpace),O=v.colorSpace===di||Ae===A?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const te=v.isCompressedTexture||v.image[0].isCompressedTexture,B=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let ie=0;ie<6;ie++)!te&&!B?Y[ie]=g(v.image[ie],!0,r.maxCubemapSize):Y[ie]=B?v.image[ie].image:v.image[ie],Y[ie]=Je(v,Y[ie]);const ce=Y[0],xe=s.convert(v.format,v.colorSpace),oe=s.convert(v.type),ke=T(v.internalFormat,xe,oe,v.colorSpace),me=v.isVideoTexture!==!0,Ke=K.__version===void 0||X===!0,D=Q.dataReady;let pe=w(v,ce);Xe(n.TEXTURE_CUBE_MAP,v);let H;if(te){me&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,ce.width,ce.height);for(let ie=0;ie<6;ie++){H=Y[ie].mipmaps;for(let ye=0;ye<H.length;ye++){const ge=H[ye];v.format!==Tn?xe!==null?me?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,ke,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,0,0,ge.width,ge.height,xe,oe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye,ke,ge.width,ge.height,0,xe,oe,ge.data)}}}else{if(H=v.mipmaps,me&&Ke){H.length>0&&pe++;const ie=q(Y[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(B){me?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Y[ie].width,Y[ie].height,xe,oe,Y[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,Y[ie].width,Y[ie].height,0,xe,oe,Y[ie].data);for(let ye=0;ye<H.length;ye++){const we=H[ye].image[ie].image;me?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,we.width,we.height,xe,oe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,ke,we.width,we.height,0,xe,oe,we.data)}}else{me?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe,oe,Y[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,xe,oe,Y[ie]);for(let ye=0;ye<H.length;ye++){const ge=H[ye];me?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,0,0,xe,oe,ge.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye+1,ke,xe,oe,ge.image[ie])}}}p(v)&&h(n.TEXTURE_CUBE_MAP),K.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Fe(y,v,L,X,Q,K){const Ae=s.convert(L.format,L.colorSpace),A=s.convert(L.type),O=T(L.internalFormat,Ae,A,L.colorSpace),te=i.get(v),B=i.get(L);if(B.__renderTarget=v,!te.__hasExternalTextures){const Y=Math.max(1,v.width>>K),ce=Math.max(1,v.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,O,Y,ce,v.depth,0,Ae,A,null):t.texImage2D(Q,K,O,Y,ce,0,Ae,A,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,B.__webglTexture,0,Be(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,B.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(y,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const X=v.depthTexture,Q=X&&X.isDepthTexture?X.type:null,K=x(v.stencilBuffer,Q),Ae=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,A=Be(v);Ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A,K,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,A,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,y)}else{const X=v.textures;for(let Q=0;Q<X.length;Q++){const K=X[Q],Ae=s.convert(K.format,K.colorSpace),A=s.convert(K.type),O=T(K.internalFormat,Ae,A,K.colorSpace),te=Be(v);L&&Ve(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,O,v.width,v.height):Ve(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,O,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,O,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Q=X.__webglTexture,K=Be(v);if(v.depthTexture.format===ir)Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===cr)Ve(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function $e(y){const v=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=X}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,y)}else if(L){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),he(v.__webglDepthbuffer[X],y,!1);else{const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,y,!1);else{const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(y,v,L){const X=i.get(y);v!==void 0&&Fe(X.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&$e(y)}function _t(y){const v=y.texture,L=i.get(y),X=i.get(v);y.addEventListener("dispose",C);const Q=y.textures,K=y.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),K){L.__webglFramebuffer=[];for(let A=0;A<6;A++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[A]=[];for(let O=0;O<v.mipmaps.length;O++)L.__webglFramebuffer[A][O]=n.createFramebuffer()}else L.__webglFramebuffer[A]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let A=0;A<v.mipmaps.length;A++)L.__webglFramebuffer[A]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let A=0,O=Q.length;A<O;A++){const te=i.get(Q[A]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&Ve(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let A=0;A<Q.length;A++){const O=Q[A];L.__webglColorRenderbuffer[A]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[A]);const te=s.convert(O.format,O.colorSpace),B=s.convert(O.type),Y=T(O.internalFormat,te,B,O.colorSpace,y.isXRRenderTarget===!0),ce=Be(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,L.__webglColorRenderbuffer[A])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),he(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,v);for(let A=0;A<6;A++)if(v.mipmaps&&v.mipmaps.length>0)for(let O=0;O<v.mipmaps.length;O++)Fe(L.__webglFramebuffer[A][O],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,O);else Fe(L.__webglFramebuffer[A],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0);p(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let A=0,O=Q.length;A<O;A++){const te=Q[A],B=i.get(te);t.bindTexture(n.TEXTURE_2D,B.__webglTexture),Xe(n.TEXTURE_2D,te),Fe(L.__webglFramebuffer,y,te,n.COLOR_ATTACHMENT0+A,n.TEXTURE_2D,0),p(te)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let A=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(A=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(A,X.__webglTexture),Xe(A,v),v.mipmaps&&v.mipmaps.length>0)for(let O=0;O<v.mipmaps.length;O++)Fe(L.__webglFramebuffer[O],y,v,n.COLOR_ATTACHMENT0,A,O);else Fe(L.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,A,0);p(v)&&h(A),t.unbindTexture()}y.depthBuffer&&$e(y)}function Ze(y){const v=y.textures;for(let L=0,X=v.length;L<X;L++){const Q=v[L];if(p(Q)){const K=S(y),Ae=i.get(Q).__webglTexture;t.bindTexture(K,Ae),h(K),t.unbindTexture()}}}const lt=[],N=[];function mt(y){if(y.samples>0){if(Ve(y)===!1){const v=y.textures,L=y.width,X=y.height;let Q=n.COLOR_BUFFER_BIT;const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(y),A=v.length>1;if(A)for(let O=0;O<v.length;O++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let O=0;O<v.length;O++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),A){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[O]);const te=i.get(v[O]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,L,X,0,0,L,X,Q,n.NEAREST),l===!0&&(lt.length=0,N.length=0,lt.push(n.COLOR_ATTACHMENT0+O),y.depthBuffer&&y.resolveDepthBuffer===!1&&(lt.push(K),N.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),A)for(let O=0;O<v.length;O++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[O]);const te=i.get(v[O]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Be(y){return Math.min(r.maxSamples,y.samples)}function Ve(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pe(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function Je(y,v){const L=y.colorSpace,X=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==ur&&L!==di&&(ft.getTransfer(L)===vt?(X!==Tn||Q!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function q(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=ue,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ve}function m_(n,e){function t(i,r=di){let s;const a=ft.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===Uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.BYTE;if(i===zc)return n.SHORT;if(i===Lr)return n.UNSIGNED_SHORT;if(i===Io)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===Vc)return n.ALPHA;if(i===Gc)return n.RGB;if(i===Tn)return n.RGBA;if(i===Wc)return n.LUMINANCE;if(i===Xc)return n.LUMINANCE_ALPHA;if(i===ir)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===$c)return n.RED;if(i===Bo)return n.RED_INTEGER;if(i===qc)return n.RG;if(i===ko)return n.RG_INTEGER;if(i===zo)return n.RGBA_INTEGER;if(i===bs||i===ys||i===Ms||i===Ss)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===eo||i===to)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===ro)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===no||i===io)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ro)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===so||i===ao||i===oo||i===lo||i===co||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===so)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ao)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===co)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===po)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===go)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_o)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Es||i===bo||i===yo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Es)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===Mo||i===So||i===Eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Es)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const g_={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const __=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v_=`
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

}`;class x_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ti({vertexShader:__,fragmentShader:v_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends fr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=new x_,p=t.getContextAttributes();let h=null,S=null;const T=[],x=[],w=new xt;let R=null;const C=new pn;C.viewport=new wt;const U=new pn;U.viewport=new wt;const E=[C,U],M=new kh;let P=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=T[ne];return le===void 0&&(le=new Pa,T[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=T[ne];return le===void 0&&(le=new Pa,T[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=T[ne];return le===void 0&&(le=new Pa,T[ne]=le),le.getHandSpace()};function $(ne){const le=x.indexOf(ne.inputSource);if(le===-1)return;const Fe=T[le];Fe!==void 0&&(Fe.update(ne.inputSource,ne.frame,c||a),Fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let ne=0;ne<T.length;ne++){const le=x[ne];le!==null&&(x[ne]=null,T[ne].disconnect(le))}P=null,J=null,g.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,S=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Di(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Fe=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?cr:ir,Fe=p.stencil?lr:Fi);const De={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Di(d.textureWidth,d.textureHeight,{format:Tn,type:Qn,depthTexture:new cu(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(ne){for(let le=0;le<ne.removed.length;le++){const Fe=ne.removed[le],he=x.indexOf(Fe);he>=0&&(x[he]=null,T[he].disconnect(Fe))}for(let le=0;le<ne.added.length;le++){const Fe=ne.added[le];let he=x.indexOf(Fe);if(he===-1){for(let $e=0;$e<T.length;$e++)if($e>=x.length){x.push(Fe),he=$e;break}else if(x[$e]===null){x[$e]=Fe,he=$e;break}if(he===-1)break}const De=T[he];De&&De.connect(Fe)}}const Z=new k,ue=new k;function W(ne,le,Fe){Z.setFromMatrixPosition(le.matrixWorld),ue.setFromMatrixPosition(Fe.matrixWorld);const he=Z.distanceTo(ue),De=le.projectionMatrix.elements,$e=Fe.projectionMatrix.elements,We=De[14]/(De[10]-1),_t=De[14]/(De[10]+1),Ze=(De[9]+1)/De[5],lt=(De[9]-1)/De[5],N=(De[8]-1)/De[0],mt=($e[8]+1)/$e[0],Be=We*N,Ve=We*mt,Pe=he/(-N+mt),Je=Pe*-N;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Je),ne.translateZ(Pe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),De[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const q=We+Pe,y=_t+Pe,v=Be-Je,L=Ve+(he-Je),X=Ze*_t/y*q,Q=lt*_t/y*q;ne.projectionMatrix.makePerspective(v,L,X,Q,q,y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let le=ne.near,Fe=ne.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),M.near=U.near=C.near=le,M.far=U.far=C.far=Fe,(P!==M.near||J!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,J=M.far),C.layers.mask=ne.layers.mask|2,U.layers.mask=ne.layers.mask|4,M.layers.mask=C.layers.mask|U.layers.mask;const he=ne.parent,De=M.cameras;de(M,he);for(let $e=0;$e<De.length;$e++)de(De[$e],he);De.length===2?W(M,C,U):M.projectionMatrix.copy(C.projectionMatrix),fe(ne,M,he)};function fe(ne,le,Fe){Fe===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(Fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Fr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Se=null;function Xe(ne,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const Fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let he=!1;Fe.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let $e=0;$e<Fe.length;$e++){const We=Fe[$e];let _t=null;if(m!==null)_t=m.getViewport(We);else{const lt=f.getViewSubImage(d,We);_t=lt.viewport,$e===0&&(e.setRenderTargetTextures(S,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(S))}let Ze=E[$e];Ze===void 0&&(Ze=new pn,Ze.layers.enable($e),Ze.viewport=new wt,E[$e]=Ze),Ze.matrix.fromArray(We.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(We.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(_t.x,_t.y,_t.width,_t.height),$e===0&&(M.matrix.copy(Ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Ze)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const $e=f.getDepthInformation(Fe[0]);$e&&$e.isValid&&$e.texture&&g.init(e,$e,r.renderState)}}for(let Fe=0;Fe<T.length;Fe++){const he=x[Fe],De=T[Fe];he!==null&&De!==void 0&&De.update(he,le,c||a)}Se&&Se(ne,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const dt=new du;dt.setAnimationLoop(Xe),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const Mi=new ei,y_=new Tt;function M_(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,ru(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,S,T,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,x)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,S,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===nn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===nn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),T=S.envMap,x=S.envMapRotation;T&&(p.envMap.value=T,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(Mi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function S_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const x=T.program;i.uniformBlockBinding(S,x)}function c(S,T){let x=r[S.id];x===void 0&&(_(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",p));const w=T.program;i.updateUBOMapping(S,w);const R=e.render.frame;s[S.id]!==R&&(d(S),s[S.id]=R)}function u(S){const T=f();S.__bindingPointIndex=T;const x=n.createBuffer(),w=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,x),x}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],x=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,C=x.length;R<C;R++){const U=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,M=U.length;E<M;E++){const P=U[E];if(m(P,R,E,w)===!0){const J=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let j=0;j<$.length;j++){const Z=$[j],ue=g(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,J+z,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,z),z+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,T,x,w){const R=S.value,C=T+"_"+x;if(w[C]===void 0)return typeof R=="number"||typeof R=="boolean"?w[C]=R:w[C]=R.clone(),!0;{const U=w[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return w[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(S){const T=S.uniforms;let x=0;const w=16;for(let C=0,U=T.length;C<U;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,P=E.length;M<P;M++){const J=E[M],$=Array.isArray(J.value)?J.value:[J.value];for(let z=0,j=$.length;z<j;z++){const Z=$[z],ue=g(Z),W=x%w,de=W%ue.boundary,fe=W+de;x+=de,fe!==0&&w-fe<ue.storage&&(x+=w-fe),J.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=x,x+=ue.storage}}}const R=x%w;return R>0&&(x+=w-R),S.__size=x,S.__cache={},this}function g(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function p(S){const T=S.target;T.removeEventListener("dispose",p);const x=a.indexOf(T.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class gu{constructor(e={}){const{canvas:t=rh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,h=null;const S=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=mi,this.toneMappingExposure=1;const x=this;let w=!1,R=0,C=0,U=null,E=-1,M=null;const P=new wt,J=new wt;let $=null;const z=new pt(0);let j=0,Z=t.width,ue=t.height,W=1,de=null,fe=null;const Se=new wt(0,0,Z,ue),Xe=new wt(0,0,Z,ue);let dt=!1;const ne=new ou;let le=!1,Fe=!1;const he=new Tt,De=new Tt,$e=new k,We=new wt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function lt(){return U===null?W:1}let N=i;function mt(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){const I="webgl2";if(N=mt(I,b),N===null)throw mt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Be,Ve,Pe,Je,q,y,v,L,X,Q,K,Ae,A,O,te,B,Y,ce,xe,oe,ke,me,Ke,D;function pe(){Be=new Fm(N),Be.init(),me=new m_(N,Be),Ve=new wm(N,Be,e,me),Pe=new f_(N,Be),Ve.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),Je=new Um(N),q=new e_,y=new p_(N,Be,Pe,q,Ve,me,Je),v=new Cm(x),L=new Lm(x),X=new Vh(N),Ke=new Tm(N,X),Q=new Dm(N,X,Je,Ke),K=new Bm(N,Q,X,Je),xe=new Om(N,Ve,y),B=new Rm(q),Ae=new Qg(x,v,L,Be,Ve,Ke,B),A=new M_(x,q),O=new n_,te=new l_(Be),ce=new Em(x,v,L,Pe,K,m,l),Y=new d_(x,K,Ve),D=new S_(N,Je,Ve,Pe),oe=new Am(N,Be,Je),ke=new Im(N,Be,Je),Je.programs=Ae.programs,x.capabilities=Ve,x.extensions=Be,x.properties=q,x.renderLists=O,x.shadowMap=Y,x.state=Pe,x.info=Je}pe();const H=new b_(x,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(Z,ue,!1))},this.getSize=function(b){return b.set(Z,ue)},this.setSize=function(b,I,G=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,ue=I,t.width=Math.floor(b*W),t.height=Math.floor(I*W),G===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Z*W,ue*W).floor()},this.setDrawingBufferSize=function(b,I,G){Z=b,ue=I,W=G,t.width=Math.floor(b*G),t.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,I,G,V){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,I,G,V),Pe.viewport(P.copy(Se).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Xe)},this.setScissor=function(b,I,G,V){b.isVector4?Xe.set(b.x,b.y,b.z,b.w):Xe.set(b,I,G,V),Pe.scissor(J.copy(Xe).multiplyScalar(W).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){Pe.setScissorTest(dt=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(b=!0,I=!0,G=!0){let V=0;if(b){let F=!1;if(U!==null){const re=U.texture.format;F=re===zo||re===ko||re===Bo}if(F){const re=U.texture.type,ve=re===Qn||re===Fi||re===Lr||re===lr||re===Uo||re===Oo,Te=ce.getClearColor(),Re=ce.getClearAlpha(),Ue=Te.r,Oe=Te.g,Ie=Te.b;ve?(_[0]=Ue,_[1]=Oe,_[2]=Ie,_[3]=Re,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Ue,g[1]=Oe,g[2]=Ie,g[3]=Re,N.clearBufferiv(N.COLOR,0,g))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT),G&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ce.dispose(),O.dispose(),te.dispose(),q.dispose(),v.dispose(),L.dispose(),K.dispose(),Ke.dispose(),D.dispose(),Ae.dispose(),H.dispose(),H.removeEventListener("sessionstart",jt),H.removeEventListener("sessionend",xn),Ct.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=Je.autoReset,I=Y.enabled,G=Y.autoUpdate,V=Y.needsUpdate,F=Y.type;pe(),Je.autoReset=b,Y.enabled=I,Y.autoUpdate=G,Y.needsUpdate=V,Y.type=F}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function we(b){const I=b.target;I.removeEventListener("dispose",we),at(I)}function at(b){ot(b),q.remove(b)}function ot(b){const I=q.get(b).programs;I!==void 0&&(I.forEach(function(G){Ae.releaseProgram(G)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,V,F,re){I===null&&(I=_t);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Te=Pt(b,I,G,V,F);Pe.setMaterial(V,ve);let Re=G.index,Ue=1;if(V.wireframe===!0){if(Re=Q.getWireframeAttribute(G),Re===void 0)return;Ue=2}const Oe=G.drawRange,Ie=G.attributes.position;let et=Oe.start*Ue,rt=(Oe.start+Oe.count)*Ue;re!==null&&(et=Math.max(et,re.start*Ue),rt=Math.min(rt,(re.start+re.count)*Ue)),Re!==null?(et=Math.max(et,0),rt=Math.min(rt,Re.count)):Ie!=null&&(et=Math.max(et,0),rt=Math.min(rt,Ie.count));const ht=rt-et;if(ht<0||ht===1/0)return;Ke.setup(F,V,Te,G,Re);let st,Ne=oe;if(Re!==null&&(st=X.get(Re),Ne=ke,Ne.setIndex(st)),F.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*lt()),Ne.setMode(N.LINES)):Ne.setMode(N.TRIANGLES);else if(F.isLine){let Me=V.linewidth;Me===void 0&&(Me=1),Pe.setLineWidth(Me*lt()),F.isLineSegments?Ne.setMode(N.LINES):F.isLineLoop?Ne.setMode(N.LINE_LOOP):Ne.setMode(N.LINE_STRIP)}else F.isPoints?Ne.setMode(N.POINTS):F.isSprite&&Ne.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Me=F._multiDrawStarts,gt=F._multiDrawCounts,qe=F._multiDrawCount,Ut=Re?X.get(Re).bytesPerElement:1,Zt=q.get(V).currentProgram.getUniforms();for(let At=0;At<qe;At++)Zt.setValue(N,"_gl_DrawID",At),Ne.render(Me[At]/Ut,gt[At])}else if(F.isInstancedMesh)Ne.renderInstances(et,ht,F.count);else if(G.isInstancedBufferGeometry){const Me=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Me);Ne.renderInstances(et,ht,gt)}else Ne.render(et,ht)};function it(b,I,G){b.transparent===!0&&b.side===$n&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,an(b,I,G),b.side=gi,b.needsUpdate=!0,an(b,I,G),b.side=$n):an(b,I,G)}this.compile=function(b,I,G=null){G===null&&(G=b),h=te.get(G),h.init(I),T.push(h),G.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),b!==G&&b.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const V=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let ve=0;ve<re.length;ve++){const Te=re[ve];it(Te,G,F),V.add(Te)}else it(re,G,F),V.add(re)}),T.pop(),h=null,V},this.compileAsync=function(b,I,G=null){const V=this.compile(b,I,G);return new Promise(F=>{function re(){if(V.forEach(function(ve){q.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){F(b);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Rt=null;function zt(b){Rt&&Rt(b)}function jt(){Ct.stop()}function xn(){Ct.start()}const Ct=new du;Ct.setAnimationLoop(zt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(b){Rt=b,H.setAnimationLoop(b),b===null?Ct.stop():Ct.start()},H.addEventListener("sessionstart",jt),H.addEventListener("sessionend",xn),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,U),h=te.get(b,T.length),h.init(I),T.push(h),De.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ne.setFromProjectionMatrix(De),Fe=this.localClippingEnabled,le=B.init(this.clippingPlanes,Fe),p=O.get(b,S.length),p.init(),S.push(p),H.enabled===!0&&H.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Pn(re,I,-1/0,x.sortObjects)}Pn(b,I,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(de,fe),Ze=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ze&&ce.addToRenderList(p,b),this.info.render.frame++,le===!0&&B.beginShadows();const G=h.state.shadowsArray;Y.render(G,b,I),le===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,F=p.transmissive;if(h.setupLights(),I.isArrayCamera){const re=I.cameras;if(F.length>0)for(let ve=0,Te=re.length;ve<Te;ve++){const Re=re[ve];ze(V,F,b,Re)}Ze&&ce.render(b);for(let ve=0,Te=re.length;ve<Te;ve++){const Re=re[ve];ii(p,b,Re,Re.viewport)}}else F.length>0&&ze(V,F,b,I),Ze&&ce.render(b),ii(p,b,I);U!==null&&(y.updateMultisampleRenderTarget(U),y.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(x,b,I),Ke.resetDefaultState(),E=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],le===!0&&B.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Pn(b,I,G,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){V&&We.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);const ve=K.update(b),Te=b.material;Te.visible&&p.push(b,ve,Te,G,We.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){const ve=K.update(b),Te=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),We.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),We.copy(ve.boundingSphere.center)),We.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(Te)){const Re=ve.groups;for(let Ue=0,Oe=Re.length;Ue<Oe;Ue++){const Ie=Re[Ue],et=Te[Ie.materialIndex];et&&et.visible&&p.push(b,ve,et,G,We.z,Ie)}}else Te.visible&&p.push(b,ve,Te,G,We.z,null)}}const re=b.children;for(let ve=0,Te=re.length;ve<Te;ve++)Pn(re[ve],I,G,V)}function ii(b,I,G,V){const F=b.opaque,re=b.transmissive,ve=b.transparent;h.setupLightsView(G),le===!0&&B.setGlobalState(x.clippingPlanes,G),V&&Pe.viewport(P.copy(V)),F.length>0&&Nn(F,I,G),re.length>0&&Nn(re,I,G),ve.length>0&&Nn(ve,I,G),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ze(b,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new Di(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Or:Qn,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const re=h.state.transmissionRenderTarget[V.id],ve=V.viewport||P;re.setSize(ve.z,ve.w);const Te=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(z),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Ze&&ce.render(G);const Re=x.toneMapping;x.toneMapping=mi;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),le===!0&&B.setGlobalState(x.clippingPlanes,V),Nn(b,G,V),y.updateMultisampleRenderTarget(re),y.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ie=0,et=I.length;Ie<et;Ie++){const rt=I[Ie],ht=rt.object,st=rt.geometry,Ne=rt.material,Me=rt.group;if(Ne.side===$n&&ht.layers.test(V.layers)){const gt=Ne.side;Ne.side=nn,Ne.needsUpdate=!0,sn(ht,G,V,st,Ne,Me),Ne.side=gt,Ne.needsUpdate=!0,Oe=!0}}Oe===!0&&(y.updateMultisampleRenderTarget(re),y.updateRenderTargetMipmap(re))}x.setRenderTarget(Te),x.setClearColor(z,j),Ue!==void 0&&(V.viewport=Ue),x.toneMapping=Re}function Nn(b,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let F=0,re=b.length;F<re;F++){const ve=b[F],Te=ve.object,Re=ve.geometry,Ue=V===null?ve.material:V,Oe=ve.group;Te.layers.test(G.layers)&&sn(Te,I,G,Re,Ue,Oe)}}function sn(b,I,G,V,F,re){b.onBeforeRender(x,I,G,V,F,re),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,I,G,V,b,re),F.transparent===!0&&F.side===$n&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,x.renderBufferDirect(G,I,V,F,b,re),F.side=gi,F.needsUpdate=!0,x.renderBufferDirect(G,I,V,F,b,re),F.side=$n):x.renderBufferDirect(G,I,V,F,b,re),b.onAfterRender(x,I,G,V,F,re)}function an(b,I,G){I.isScene!==!0&&(I=_t);const V=q.get(b),F=h.state.lights,re=h.state.shadowsArray,ve=F.state.version,Te=Ae.getParameters(b,F.state,re,I,G),Re=Ae.getProgramCacheKey(Te);let Ue=V.programs;V.environment=b.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(b.isMeshStandardMaterial?L:v).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",we),Ue=new Map,V.programs=Ue);let Oe=Ue.get(Re);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===ve)return ri(b,Te),Oe}else Te.uniforms=Ae.getUniforms(b),b.onBeforeCompile(Te,x),Oe=Ae.acquireProgram(Te,Re),Ue.set(Re,Oe),V.uniforms=Te.uniforms;const Ie=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=B.uniform),ri(b,Te),V.needsLights=Ui(b),V.lightsStateVersion=ve,V.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function un(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function ri(b,I){const G=q.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Pt(b,I,G,V,F){I.isScene!==!0&&(I=_t),y.resetTextureUnits();const re=I.fog,ve=V.isMeshStandardMaterial?I.environment:null,Te=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ur,Re=(V.isMeshStandardMaterial?L:v).get(V.envMap||ve),Ue=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color;let ht=mi;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=x.toneMapping);const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ne=st!==void 0?st.length:0,Me=q.get(V),gt=h.state.lights;if(le===!0&&(Fe===!0||b!==M)){const bt=b===M&&V.id===E;B.setState(V,b,bt)}let qe=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==gt.state.version||Me.outputColorSpace!==Te||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==Re||V.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==B.numPlanes||Me.numIntersection!==B.numIntersection)||Me.vertexAlphas!==Ue||Me.vertexTangents!==Oe||Me.morphTargets!==Ie||Me.morphNormals!==et||Me.morphColors!==rt||Me.toneMapping!==ht||Me.morphTargetsCount!==Ne)&&(qe=!0):(qe=!0,Me.__version=V.version);let Ut=Me.currentProgram;qe===!0&&(Ut=an(V,I,F));let Zt=!1,At=!1,ae=!1;const be=Ut.getUniforms(),Ge=Me.uniforms;if(Pe.useProgram(Ut.program)&&(Zt=!0,At=!0,ae=!0),V.id!==E&&(E=V.id,At=!0),Zt||M!==b){Pe.buffers.depth.getReversed()?(he.copy(b.projectionMatrix),ah(he),oh(he),be.setValue(N,"projectionMatrix",he)):be.setValue(N,"projectionMatrix",b.projectionMatrix),be.setValue(N,"viewMatrix",b.matrixWorldInverse);const yt=be.map.cameraPosition;yt!==void 0&&yt.setValue(N,$e.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&be.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,At=!0,ae=!0)}if(F.isSkinnedMesh){be.setOptional(N,F,"bindMatrix"),be.setOptional(N,F,"bindMatrixInverse");const bt=F.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),be.setValue(N,"boneTexture",bt.boneTexture,y))}F.isBatchedMesh&&(be.setOptional(N,F,"batchingTexture"),be.setValue(N,"batchingTexture",F._matricesTexture,y),be.setOptional(N,F,"batchingIdTexture"),be.setValue(N,"batchingIdTexture",F._indirectTexture,y),be.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(N,"batchingColorTexture",F._colorsTexture,y));const He=G.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&xe.update(F,G,Ut),(At||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,be.setValue(N,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ge.envMap.value=Re,Ge.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Ge.envMapIntensity.value=I.environmentIntensity),At&&(be.setValue(N,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Ii(Ge,ae),re&&V.fog===!0&&A.refreshFogUniforms(Ge,re),A.refreshMaterialUniforms(Ge,V,W,ue,h.state.transmissionRenderTarget[b.id]),Ts.upload(N,un(Me),Ge,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ts.upload(N,un(Me),Ge,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(N,"center",F.center),be.setValue(N,"modelViewMatrix",F.modelViewMatrix),be.setValue(N,"normalMatrix",F.normalMatrix),be.setValue(N,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bt=V.uniformsGroups;for(let yt=0,Kt=bt.length;yt<Kt;yt++){const bn=bt[yt];D.update(bn,Ut),D.bind(bn,Ut)}}return Ut}function Ii(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Ui(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,I,G){q.get(b.texture).__webglTexture=I,q.get(b.depthTexture).__webglTexture=G;const V=q.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const G=q.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,G=0){U=b,R=I,C=G;let V=!0,F=null,re=!1,ve=!1;if(b){const Re=q.get(b);if(Re.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(Re.__hasExternalTextures)y.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&q.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Oe=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?F=Oe[I][G]:F=Oe[I],re=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?F=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[G]:F=Oe,P.copy(b.viewport),J.copy(b.scissor),$=b.scissorTest}else P.copy(Se).multiplyScalar(W).floor(),J.copy(Xe).multiplyScalar(W).floor(),$=dt;if(Pe.bindFramebuffer(N.FRAMEBUFFER,F)&&V&&Pe.drawBuffers(b,F),Pe.viewport(P),Pe.scissor(J),Pe.setScissorTest($),re){const Re=q.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,G)}else if(ve){const Re=q.get(b.texture),Ue=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,G||0,Ue)}E=-1},this.readRenderTargetPixels=function(b,I,G,V,F,re,ve){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Pe.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Re=b.texture,Ue=Re.format,Oe=Re.type;if(!Ve.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&G>=0&&G<=b.height-F&&N.readPixels(I,G,V,F,me.convert(Ue),me.convert(Oe),re)}finally{const Re=U!==null?q.get(U).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,I,G,V,F,re,ve){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){const Re=b.texture,Ue=Re.format,Oe=Re.type;if(!Ve.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-V&&G>=0&&G<=b.height-F){Pe.bindFramebuffer(N.FRAMEBUFFER,Te);const Ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ie),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(I,G,V,F,me.convert(Ue),me.convert(Oe),0);const et=U!==null?q.get(U).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,et);const rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sh(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Ie),N.deleteSync(rt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,G=0){b.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(b.image.width*V),re=Math.floor(b.image.height*V),ve=I!==null?I.x:0,Te=I!==null?I.y:0;y.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ve,Te,F,re),Pe.unbindTexture()};const _e=N.createFramebuffer(),Ye=N.createFramebuffer();this.copyTextureToTexture=function(b,I,G=null,V=null,F=0,re=null){b.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],I=arguments[2],re=arguments[3]||0,G=null),re===null&&(F!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let ve,Te,Re,Ue,Oe,Ie,et,rt,ht;const st=b.isCompressedTexture?b.mipmaps[re]:b.image;if(G!==null)ve=G.max.x-G.min.x,Te=G.max.y-G.min.y,Re=G.isBox3?G.max.z-G.min.z:1,Ue=G.min.x,Oe=G.min.y,Ie=G.isBox3?G.min.z:0;else{const He=Math.pow(2,-F);ve=Math.floor(st.width*He),Te=Math.floor(st.height*He),b.isDataArrayTexture?Re=st.depth:b.isData3DTexture?Re=Math.floor(st.depth*He):Re=1,Ue=0,Oe=0,Ie=0}V!==null?(et=V.x,rt=V.y,ht=V.z):(et=0,rt=0,ht=0);const Ne=me.convert(I.format),Me=me.convert(I.type);let gt;I.isData3DTexture?(y.setTexture3D(I,0),gt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(y.setTexture2DArray(I,0),gt=N.TEXTURE_2D_ARRAY):(y.setTexture2D(I,0),gt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const qe=N.getParameter(N.UNPACK_ROW_LENGTH),Ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Zt=N.getParameter(N.UNPACK_SKIP_PIXELS),At=N.getParameter(N.UNPACK_SKIP_ROWS),ae=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);const be=b.isDataArrayTexture||b.isData3DTexture,Ge=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const He=q.get(b),bt=q.get(I),yt=q.get(He.__renderTarget),Kt=q.get(bt.__renderTarget);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,yt.__webglFramebuffer),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let bn=0;bn<Re;bn++)be&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(b).__webglTexture,F,Ie+bn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(I).__webglTexture,re,ht+bn)),N.blitFramebuffer(Ue,Oe,ve,Te,et,rt,ve,Te,N.DEPTH_BUFFER_BIT,N.NEAREST);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||q.has(b)){const He=q.get(b),bt=q.get(I);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,_e),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ye);for(let yt=0;yt<Re;yt++)be?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.__webglTexture,F,Ie+yt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,He.__webglTexture,F),Ge?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,re,ht+yt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,re),F!==0?N.blitFramebuffer(Ue,Oe,ve,Te,et,rt,ve,Te,N.COLOR_BUFFER_BIT,N.NEAREST):Ge?N.copyTexSubImage3D(gt,re,et,rt,ht+yt,Ue,Oe,ve,Te):N.copyTexSubImage2D(gt,re,et,rt,Ue,Oe,ve,Te);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ge?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(gt,re,et,rt,ht,ve,Te,Re,Ne,Me,st.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(gt,re,et,rt,ht,ve,Te,Re,Ne,st.data):N.texSubImage3D(gt,re,et,rt,ht,ve,Te,Re,Ne,Me,st):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,re,et,rt,ve,Te,Ne,Me,st.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,re,et,rt,st.width,st.height,Ne,st.data):N.texSubImage2D(N.TEXTURE_2D,re,et,rt,ve,Te,Ne,Me,st);N.pixelStorei(N.UNPACK_ROW_LENGTH,qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,At),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ae),re===0&&I.generateMipmaps&&N.generateMipmap(gt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(b,I,G=null,V=null,F=0){return b.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,b=arguments[2],I=arguments[3],F=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,G,V,F)},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){R=0,C=0,U=null,Pe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const E_=[{id:"binMagnitude",type:"number",range:[0,1],category:"advanced"},{id:"binEnergy",type:"number",range:[0,1],category:"advanced",hidden:!0},{id:"binPhase",type:"number",range:[0,1],category:"advanced"},{id:"binFlux",type:"number",range:[-1,1],category:"advanced"},{id:"binPhaseDeviation",type:"number",range:[0,1],category:"advanced"},{id:"binPhasedeviation",type:"number",range:[0,1],category:"advanced",hidden:!0},{id:"binAttackTime",type:"number",range:[0,1],category:"advanced"},{id:"binEnvelope",type:"number",range:[0,3],category:"advanced"},{id:"binEnvelopeState",type:"number",range:[0,3],category:"advanced"},{id:"binRMSEnergy",type:"number",range:[0,1],category:"advanced"},{id:"frequencyHz",type:"number",range:[0,22050],category:"base"},{id:"notePitchClass",type:"number",range:[0,11],category:"base"},{id:"octave",type:"number",range:[-2,12],category:"base"},{id:"binFreq",type:"number",range:[0,22050],category:"advanced",hidden:!0},{id:"normFreq",type:"number",range:[0,1],category:"base"},{id:"pan",type:"number",range:[-1,1],category:"base"},{id:"amplitude",type:"number",range:[0,1],category:"base"},{id:"bass",type:"number",range:[0,1],category:"base"},{id:"mid",type:"number",range:[0,1],category:"base"},{id:"high",type:"number",range:[0,1],category:"base"},{id:"peakFreq",type:"number",range:[0,22050],category:"base"},{id:"globalRmsEnergy",type:"number",range:[0,1],category:"advanced"},{id:"peakAmplitude",type:"number",range:[0,1],category:"advanced"},{id:"zeroCrossingRate",type:"number",range:[0,1],category:"advanced"},{id:"spectralCentroid",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlux",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlatness",type:"number",range:[0,1],category:"advanced"},{id:"spectralRolloff",type:"number",range:[0,1],category:"advanced"},{id:"spectralSpread",type:"number",range:[0,1],category:"advanced"},{id:"spectralSkewness",type:"number",range:[0,1],category:"advanced"},{id:"chromagram",type:"number",range:[0,1],category:"advanced"},{id:"inharmonicity",type:"number",range:[0,1],category:"advanced"},{id:"time",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"base"},{id:"deltaTime",type:"number",range:[0,1],category:"base"},{id:"canvasWidthPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasWidthUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasBoundaryLeft",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasBoundaryRight",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasBoundaryTop",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasBoundaryBottom",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],category:"context"},{id:"audioLengthSec",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"}],T_=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]}],A_=Object.freeze({r:"red",g:"green",b:"blue",a:"opacity",backgroundRed:"red",backgroundGreen:"green",backgroundBlue:"blue"}),w_=Object.freeze(new Set(["backgroundRed","backgroundGreen","backgroundBlue"])),_u=Object.freeze({binEnergy:"binMagnitude",binFreq:"frequencyHz"}),Ys=Object.freeze(["spawnedParticles","allParticles","background","camera"]),vu=Object.freeze(["spawnedOnly","allLivingFrame"]),Xo=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),xu=Object.freeze(["always",">",">=","<","<=","==","!="]),js=Object.freeze({version:1,entries:Object.freeze(E_.map(n=>Object.freeze({...n})))}),Zs=Object.freeze({version:1,entries:Object.freeze(T_.map(n=>Object.freeze({...n})))});new Map(js.entries.map(n=>[n.id,n]));const R_=new Map(Zs.entries.map(n=>[n.id,n]));function bu(){return js}function C_(){return Zs}function P_(n){return!n||n.type==="always"||n.operator==="always"}function N_(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function L_(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function uc(n,e){if(typeof n!="string")return null;const t=L_(wo(n));if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!N_(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),s=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of s)if(!i.has(a))return`Expression references unknown identifier: ${a}`;return null}function yu(n){return typeof n!="string"?n:A_[n]||n}function Rr(n){return typeof n!="string"?n:_u[n]||n}function F_(n){return String(n).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function wo(n){if(typeof n!="string"||!n)return n;let e=n;for(const[t,i]of Object.entries(_u)){const r=new RegExp(`\\b${F_(t)}\\b`,"g");e=e.replace(r,i)}return e}function $o(n){return Ys.includes(n==null?void 0:n.target)?n.target:(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function D_(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:Ys).includes(e)}function I_(n,e={input:js,output:Zs}){var f,d,m,_,g;const t=[],i=[],r=[],s=new Map((((f=e.input)==null?void 0:f.entries)??[]).map(p=>[p.id,p])),a=new Map((((d=e.output)==null?void 0:d.entries)??[]).map(p=>[p.id,p]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};vu.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=$o(n);if(Ys.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(m=n.condition)!=null&&m.operator&&!xu.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((_=n.condition)==null?void 0:_.expression)!==void 0){const p=uc(n.condition.expression,s);p&&t.push(`Condition expression invalid: ${p}`)}const l=Rr((g=n.condition)==null?void 0:g.input);l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((p,h)=>{const S=yu(p==null?void 0:p.output);if(!S||!a.has(S)){t.push(`Unknown action output at index ${h}: ${String(S)}`);return}const T=a.get(S);if(D_(T,o)||t.push(`Output ${S} is not valid for target ${o} at index ${h}`),p!=null&&p.operator&&!Xo.includes(p.operator)&&t.push(`Unknown action operator at index ${h}: ${String(p.operator)}`),T.type==="enum"&&(p==null?void 0:p.value)!==void 0&&!T.values.includes(p.value)&&t.push(`Invalid enum value for ${S} at index ${h}: ${String(p.value)}. Allowed: ${T.values.join("|")}`),(p==null?void 0:p.operator)==="set"){const w=u.get(S);w!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:S,overriddenActionIndex:w,winningActionIndex:h,resolution:"latter-executes"}),i.push(`Contradiction on ${S}: action ${h} overrides action ${w}.`)),u.set(S,h)}const x=Rr(p==null?void 0:p.input);if(x&&!s.has(x)&&t.push(`Unknown action input at index ${h}: ${x}`),(p==null?void 0:p.expression)!==void 0){const w=uc(p.expression,s);w&&t.push(`Action expression invalid at index ${h}: ${w}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function U_(n){const e=Array.isArray(n)?n:[],t=new Map,i=new Set,r=[];return e.forEach((a,o)=>{if(!(a!=null&&a.enabled))return;const l=a.scope||"spawnedOnly",c=a.id||`rule-${o}`,u=Array.isArray(a.actions)?a.actions:[];P_(a.condition)&&u.forEach(d=>{if((d==null?void 0:d.operator)!=="set"||!R_.has(d==null?void 0:d.output))return;const m=$o(a),_=`${m}:${l}:${d.output}`,g=t.get(_);g&&(i.add(g.ruleId),i.add(c),r.push({color:"red",type:"crossRuleConflict",scope:l,target:m,output:d.output,overriddenRuleId:g.ruleId,winningRuleId:c,resolution:"latter-executes"})),t.set(_,{ruleId:c,index:o})})}),{rules:e.map((a,o)=>{const l=(a==null?void 0:a.id)||`rule-${o}`;return{...a,uiState:i.has(l)?"red":"normal"}}),notes:r,redRuleIds:[...i]}}function Mu(n,e={input:js,output:Zs}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{var c,u,f;const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,target:$o(s),scope:vu.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(d=>({...d})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),xu.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=Rr(o.condition.input)),(u=o.condition)!=null&&u.valueInput&&(o.condition.valueInput=Rr(o.condition.valueInput)),typeof((f=o.condition)==null?void 0:f.expression)=="string"&&(o.condition.expression=wo(o.condition.expression)),o.scope=o.target==="spawnedParticles"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(d=>d&&typeof d=="object").map(d=>{const m=d.output;return w_.has(m)&&!(s!=null&&s.target)&&(o.target="background",o.scope="allLivingFrame"),{operator:Xo.includes(d.operator)?d.operator:"set",output:yu(m),value:d.value,input:Rr(d.input),expression:wo(d.expression)}});const l=I_(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Ks="http://localhost:8000",Su="seesound_user_defaults_v4",Eu="seesound_disabled_v4",Us=1,O_={logCompilerStatus:!1,logCompilerTiming:!1},Os=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:Us,palettes:[]});function qo(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",s=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:s}}).filter(Boolean):[]}const dc=[{id:"inputGain",label:"Input"},{id:"inputProcessing",label:"Input Processing"},{id:"geometry",label:"Geometry"},{id:"mixing",label:"Mixing"}];function Gt({key:n,label:e,min:t,max:i,step:r,def:s,unit:a,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:s,unit:a,desc:o,canDisable:!1}}const Li=[{key:"inputGain",group:"inputGain",label:"Input Gain",min:0,max:3,step:.01,default:1,unit:"×",desc:"Scales every amplitude value before processing. 1× = unchanged.",canDisable:!1},{key:"amplitudeThreshold",group:"inputGain",label:"Amplitude Threshold",min:-96,max:0,step:1,default:-48,unit:"dB",desc:"Hard noise gate: any bin quieter than this level is hidden.",canDisable:!0},{key:"freqNormMin",group:"inputProcessing",label:"Freq Norm Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for log2-based frequency normalization into normFreq.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Freq Norm Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for log2-based frequency normalization into normFreq.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"FFT Size",default:2048,unit:"",desc:"FFT analysis size. Discrete power-of-two choices; larger sizes increase frequency detail and then progressively thin high-frequency buckets.",isDropdown:!0,dropdownOptions:[{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},Gt({key:"binMagnitudeNormMin",label:"Per-Bin Magnitude Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS)."}),Gt({key:"binMagnitudeNormMax",label:"Per-Bin Magnitude Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS)."}),Gt({key:"binFluxNormMin",label:"Per-Bin Spectral Flux Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame."}),Gt({key:"binFluxNormMax",label:"Per-Bin Spectral Flux Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame."}),Gt({key:"binPhaseDeviationNormMin",label:"Per-Bin Phase Deviation Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians."}),Gt({key:"binPhaseDeviationNormMax",label:"Per-Bin Phase Deviation Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians."}),Gt({key:"binAttackTimeNormMin",label:"Per-Bin Attack Time Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms)."}),Gt({key:"binAttackTimeNormMax",label:"Per-Bin Attack Time Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms)."}),Gt({key:"globalRmsNormMin",label:"Global RMS Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS)."}),Gt({key:"globalRmsNormMax",label:"Global RMS Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS)."}),Gt({key:"spectralCentroidNormMin",label:"Spectral Centroid Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz)."}),Gt({key:"spectralCentroidNormMax",label:"Spectral Centroid Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz)."}),Gt({key:"globalSpectralFluxNormMin",label:"Global Spectral Flux Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units)."}),Gt({key:"globalSpectralFluxNormMax",label:"Global Spectral Flux Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units)."}),Gt({key:"spectralFlatnessNormMin",label:"Spectral Flatness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0)."}),Gt({key:"spectralFlatnessNormMax",label:"Spectral Flatness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0)."}),{key:"defaultParticleSize",group:"geometry",label:"Particle Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Max Particle Capacity",min:4096,max:8e6,step:1024,default:262144,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particleRenderPercent",group:"geometry",label:"Particle Render %",min:1,max:100,step:1,default:100,unit:"%",desc:"Bucket thinning: only this percentage of log-frequency buckets can spawn particles each frame (evenly distributed by bucket index).",canDisable:!1},{key:"particlesPerOctave",group:"geometry",label:"Particles Per Octave",min:10,max:500,step:1,default:100,unit:"bins/oct",desc:"Controls log-bucket density. Total buckets = 10 octaves × this value (16 Hz to 16 kHz).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]}];function Tu(){try{return JSON.parse(localStorage.getItem(Su)||"{}")}catch{return{}}}function B_(){try{return new Set(JSON.parse(localStorage.getItem(Eu)||"[]"))}catch{return new Set}}function hr(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=Mu(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:Os.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):Os.ruleSchemaVersion,t.palettes=qo(e.palettes),r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function k_(){const n=hr(Tu()),e={};for(const t of Li)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.tonicHz=n.tonicHz??261.63,e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=qo(n.palettes),e}const se=k_(),cn=B_(),Ro=new Set;function _r(n){return Ro.add(n),()=>Ro.delete(n)}function Dr(n,e){for(const t of Ro)try{t(se,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function mn(n,e){se[n]=e,Dr(n,e)}function Js(n){const e=hr(n);for(const[t,i]of Object.entries(e))se[t]=i,Dr(t,i);Dr("*",e)}function z_(){for(const n of Li)se[n.key]=n.default;se.tonicHz=261.63,se.ruleBlocks=[],se.ruleEngineEnabled=!0,se.ruleSchemaVersion=Us,se.palettes=[],Dr("*",null)}function Bs(n,e){try{const t=Tu();t[n]=e,localStorage.setItem(Su,JSON.stringify(t))}catch{}}function H_(n){cn.has(n)?cn.delete(n):cn.add(n);try{localStorage.setItem(Eu,JSON.stringify([...cn]))}catch{}Dr("disabled",n)}function Yo(){const n=hr(se);return{...se,...n,_disabled:[...cn]}}function V_(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function G_(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function W_(n,e){if(e==null)return;if(n!=null&&n.isToggle)return G_(e,n.default);if(n!=null&&n.isDropdown){const r=V_(n).find(s=>String(s)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function Au(n){try{const e=n&&typeof n=="object"?n:{},t={...e};for(const i of Li){if(!Object.prototype.hasOwnProperty.call(e,i.key)||e[i.key]===void 0||e[i.key]===null){t[i.key]=i.default;continue}t[i.key]=W_(i,e[i.key])}return!Object.prototype.hasOwnProperty.call(e,"tonicHz")||!Number.isFinite(Number(e.tonicHz))?t.tonicHz=261.63:t.tonicHz=Number(e.tonicHz),Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=Os.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=Os.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=qo(e.palettes),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),hr(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),hr(n&&typeof n=="object"?n:{})}}async function wu(){try{const n=await fetch(`${Ks}/api/presets`,{cache:"no-store"});return n.ok?(await n.json()).presets??[]:[]}catch{return[]}}async function Ru(n,e){const t=Au(e);return fetch(`${Ks}/api/presets`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,params:t})}).then(i=>i.json())}async function Cu(n){const e=await fetch(`${Ks}/api/presets/${encodeURIComponent(n)}`,{cache:"no-store"});if(!e.ok)return null;const t=await e.json();if(!(t!=null&&t.params))return t;try{return{...t,params:Au(t.params)}}catch(i){return console.warn("[Preset] load normalization failed, applying raw params:",i),{...t,params:hr(t.params)}}}async function Pu(n){return fetch(`${Ks}/api/presets/${encodeURIComponent(n)}`,{method:"DELETE"}).then(e=>e.json())}function X_(n,e,t){return Math.min(t,Math.max(e,n))}function Si(n){const e=Number(n);return Number.isFinite(e)?Math.round(X_(e,0,255)):0}function Nu(n,e,t,i){const r=Si(n),s=Si(e),a=Si(t),o=Si(i),l=.299*r+.587*s+.114*a;if(l<=1e-9)return[o,o,o];const c=o/l;let u=r*c,f=s*c,d=a*c;const m=Math.max(u,f,d);if(m>255){const _=(255-o)/Math.max(1e-9,m-o);u=o+_*(u-o),f=o+_*(f-o),d=o+_*(d-o)}return[Si(u),Si(f),Si(d)]}const hc="cde-styles-v2",Lu=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function $_(){if(document.getElementById(hc))return;const n=document.createElement("style");n.id=hc,n.textContent=`
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
`,document.head.appendChild(n)}function q_(n,e,t){return Math.min(t,Math.max(e,n))}function je(n){const e=Number(n);return Number.isFinite(e)?Math.round(q_(e,0,255)):0}function wi(n,e,t){const i=r=>je(r).toString(16).padStart(2,"0");return`#${i(n)}${i(e)}${i(t)}`}function Fu(n){const e=String(n||"").trim(),t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return[128,128,128];const i=t[1];return[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16)]}function Qs(n,e="palette"){return String(n||"").trim().toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||e}function Y_(n,e,t){return[je(n[0]+(e[0]-n[0])*t),je(n[1]+(e[1]-n[1])*t),je(n[2]+(e[2]-n[2])*t)]}function Na(n,e=48){const t=Array.isArray(n)?n:[];if(t.length<=1)return t.slice(0,1);const i=Math.max(2,Math.floor(e)),r=[];for(let s=0;s<i;s++){const o=s/(i-1)*(t.length-1),l=Math.floor(o),c=Math.min(t.length-1,l+1),u=o-l;r.push(Y_(t[l],t[c],u))}return r}function Ri(n,e=0){const t=n&&typeof n=="object"?n:{},i=typeof t.name=="string"&&t.name.trim()?t.name.trim():`Palette ${e+1}`,r=typeof t.id=="string"&&t.id.trim()?t.id.trim():Qs(i,`palette-${e+1}`),s=t.type==="continuous"?"continuous":"discrete",a=Array.isArray(t.colors)?t.colors.map(o=>{if(Array.isArray(o)&&o.length>=3)return[je(o[0]),je(o[1]),je(o[2])];if(typeof o=="string")return Fu(o);if(o&&typeof o=="object"){if(Array.isArray(o.rgb)&&o.rgb.length>=3)return[je(o.rgb[0]),je(o.rgb[1]),je(o.rgb[2])];if(Number.isFinite(o.r)||Number.isFinite(o.g)||Number.isFinite(o.b))return[je(o.r),je(o.g),je(o.b)]}return[128,128,128]}):[];return{id:r,name:i,type:s,colors:a}}function As(n){const e=Array.isArray(n==null?void 0:n.colors)?n.colors:[];return e.length===0?[{note:0,luma:64,input:[220,60,40]},{note:1,luma:128,input:[220,60,40]},{note:2,luma:192,input:[220,60,40]}]:e.map((t,i)=>{const r=je(t==null?void 0:t[0]),s=je(t==null?void 0:t[1]),a=je(t==null?void 0:t[2]),o=Math.round(.299*r+.587*s+.114*a);return{note:i,luma:o,input:[r,s,a]}})}function ws(n){return n.map(e=>{const t=je(e.luma),[i,r,s]=e.input;return Nu(je(i),je(r),je(s),t)})}function j_(n,e){const i=[["index","note","luma","input_r","input_g","input_b","output_r","output_g","output_b"].join(",")],r=ws(e);for(let s=0;s<e.length;s++){const a=e[s],o=r[s];i.push([s,Lu[s%12],je(a.luma),je(a.input[0]),je(a.input[1]),je(a.input[2]),je(o[0]),je(o[1]),je(o[2])].join(","))}return i.join(`
`)}function Z_(n){const t=String(n||"").replace(/\r/g,`
`).split(`
`).map(u=>u.trim()).filter(Boolean);if(t.length===0)return[];const i=(()=>{const u=t[0],f=(u.match(/,/g)||[]).length,d=(u.match(/;/g)||[]).length,m=(u.match(/\t/g)||[]).length;return m>=f&&m>=d?"	":d>f?";":","})(),r=u=>u.split(i).map(f=>f.trim()),s=r(t[0]).map(u=>u.toLowerCase()),a=s.some(u=>/luma|input_r|output_r|r|red/.test(u)),o={luma:s.indexOf("luma"),inR:s.indexOf("input_r"),inG:s.indexOf("input_g"),inB:s.indexOf("input_b"),outR:s.indexOf("output_r"),outG:s.indexOf("output_g"),outB:s.indexOf("output_b"),r:s.indexOf("r"),g:s.indexOf("g"),b:s.indexOf("b")},l=a?1:0,c=[];for(let u=l;u<t.length;u++){const d=r(t[u]).map(h=>Number(h));let m=128,_=null,g=null,p=null;if(a)o.luma>=0&&Number.isFinite(d[o.luma])&&(m=d[o.luma]),o.inR>=0&&Number.isFinite(d[o.inR])&&(_=d[o.inR]),o.inG>=0&&Number.isFinite(d[o.inG])&&(g=d[o.inG]),o.inB>=0&&Number.isFinite(d[o.inB])&&(p=d[o.inB]),(_===null||g===null||p===null)&&o.r>=0&&o.g>=0&&o.b>=0&&Number.isFinite(d[o.r])&&Number.isFinite(d[o.g])&&Number.isFinite(d[o.b])&&(_=d[o.r],g=d[o.g],p=d[o.b]),(_===null||g===null||p===null)&&o.outR>=0&&o.outG>=0&&o.outB>=0&&Number.isFinite(d[o.outR])&&Number.isFinite(d[o.outG])&&Number.isFinite(d[o.outB])&&(_=d[o.outR],g=d[o.outG],p=d[o.outB]);else{const h=d.filter(S=>Number.isFinite(S));h.length>=4?(m=h[0],_=h[1],g=h[2],p=h[3]):h.length>=3&&(_=h[0],g=h[1],p=h[2],m=Math.round(.299*_+.587*g+.114*p))}!Number.isFinite(_)||!Number.isFinite(g)||!Number.isFinite(p)||c.push({note:c.length,luma:je(m),input:[je(_),je(g),je(p)]})}return c}function fc(n,e,t){const i=new Blob([t],{type:e}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=n,document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(r)}function K_(n){const e=Array.isArray(n==null?void 0:n.colors)&&n.colors.length>0?n.colors[0]:[128,128,128];return wi(e[0],e[1],e[2])}function La(n=0){const e=`Palette ${n+1}`;return{id:Qs(e,`palette-${n+1}`),name:e,type:"discrete",colors:[[255,0,0],[255,120,0],[255,220,0],[150,255,0],[0,255,80],[0,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[255,0,150],[255,0,60]]}}const J_=Object.freeze({spectrum:{id:"spectrum",name:"Spectrum",type:"discrete",colors:[[255,0,0],[255,96,0],[255,180,0],[235,255,0],[140,255,0],[35,255,0],[0,255,120],[0,255,235],[0,160,255],[25,80,255],[120,40,255],[220,0,255]]},scriabin:{id:"scriabin",name:"Scriabin",type:"discrete",colors:[[220,20,40],[160,0,200],[245,235,70],[160,180,170],[50,90,220],[130,0,170],[35,95,210],[230,90,0],[200,40,120],[30,150,60],[140,150,175],[85,30,165]]},circleOfFifths:{id:"circle-of-fifths",name:"Circle of Fifths",type:"discrete",colors:[[225,65,65],[225,135,65],[225,195,65],[180,225,65],[110,225,65],[65,225,105],[65,225,185],[65,190,225],[65,120,225],[120,90,225],[185,70,225],[225,65,160]]}});function pc(n){const e=Array.isArray(n)?n:[];return e.length===0?As({colors:[]}):e.map((t,i)=>{const r=je(t==null?void 0:t[0]),s=je(t==null?void 0:t[1]),a=je(t==null?void 0:t[2]);return{note:i,luma:Math.round(.299*r+.587*s+.114*a),input:[r,s,a]}})}function Q_(n,e){const t=new Set((Array.isArray(n)?n:[]).map(s=>String((s==null?void 0:s.id)||"").trim()).filter(Boolean)),i=Qs(e||"palette","palette");if(!t.has(i))return i;let r=2;for(;t.has(`${i}-${r}`);)r++;return`${i}-${r}`}function ev(n,e){const t=J_[n];if(!t)return null;const i=Ri(t,Array.isArray(e)?e.length:0);return i.id=Q_(e,i.id),i.id!==t.id&&(i.name=`${t.name} ${i.id.split("-").slice(-1)[0]}`),i}function tv(){if($_(),document.querySelector(".cde-overlay"))return;const n=(()=>{const q=Array.isArray(se.palettes)?se.palettes:[];return q.length>0?q.map((y,v)=>Ri(y,v)):[La(0)]})(),e={palettes:n,selectedIndex:0,rows:As(n[0]),dirty:!1,unsubscribe:null},t=document.createElement("div");t.className="cde-overlay";const i=document.createElement("div");i.className="cde-popup";const r=document.createElement("div");r.className="cde-header";const s=document.createElement("div");s.className="cde-header-title",s.textContent="Color Design — Palette Manager";const a=document.createElement("button");a.className="cde-btn cde-btn-primary",a.textContent="Apply to Engine";const o=document.createElement("button");o.className="cde-btn",o.textContent="Close",r.append(s,a,o);const l=document.createElement("div");l.className="cde-main";const c=document.createElement("div");c.className="cde-sidebar";const u=document.createElement("div");u.className="cde-editor";const f=document.createElement("div");f.className="cde-section-title",f.textContent="Palettes";const d=document.createElement("div");d.className="cde-list";const m=document.createElement("div");m.className="cde-row";const _=document.createElement("button");_.className="cde-btn cde-btn-primary",_.textContent="+ New";const g=document.createElement("button");g.className="cde-btn",g.textContent="Duplicate";const p=document.createElement("button");p.className="cde-btn cde-btn-danger",p.textContent="Delete",m.append(_,g,p);const h=document.createElement("div");h.className="cde-row";const S=document.createElement("select");S.className="cde-select",S.innerHTML=['<option value="spectrum">Spectrum</option>','<option value="scriabin">Scriabin</option>','<option value="circleOfFifths">Circle of Fifths</option>'].join("");const T=document.createElement("button");T.className="cde-btn",T.textContent="Add Template",h.append(S,T);const x=document.createElement("div");x.className="cde-section-title",x.textContent="Selected Palette";const w=document.createElement("div");w.className="cde-row";const R=document.createElement("input");R.className="cde-input",R.placeholder="Palette Name",w.appendChild(R);const C=document.createElement("div");C.className="cde-row";const U=document.createElement("select");U.className="cde-select",U.innerHTML=['<option value="discrete">Discrete (step lookup)</option>','<option value="continuous">Continuous (gradient)</option>'].join(""),C.appendChild(U);const E=document.createElement("div");E.className="cde-preview";const M=document.createElement("div");M.className="cde-section-title",M.textContent="Import / Export";const P=document.createElement("div");P.className="cde-row";const J=document.createElement("button");J.className="cde-btn",J.textContent="Import CSV/JSON";const $=document.createElement("button");$.className="cde-btn",$.textContent="Export CSV";const z=document.createElement("button");z.className="cde-btn",z.textContent="Export JSON",P.append(J,$,z);const j=document.createElement("input");j.type="file",j.accept=".csv,.json,text/csv,application/json",j.style.display="none",c.append(f,d,m,h,x,w,C,E,M,P,j);const Z=document.createElement("div");Z.className="cde-section-title",Z.textContent="Color Table Builder";const ue=document.createElement("div");ue.className="cde-row";const W=document.createElement("button");W.className="cde-btn cde-btn-primary",W.textContent="+ Add Row";const de=document.createElement("button");de.className="cde-btn",de.textContent="Fill 12 Notes";const fe=document.createElement("button");fe.className="cde-btn",fe.textContent="Sort by Luma",ue.append(W,de,fe);const Se=document.createElement("div");Se.className="cde-table-wrap";const Xe=document.createElement("table");Xe.className="cde-table",Xe.innerHTML=`
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
    `,Se.appendChild(Xe);const dt=document.createElement("div");dt.className="cde-footer";const ne=document.createElement("button");ne.className="cde-btn cde-btn-primary",ne.textContent="Use Output Colors";const le=document.createElement("button");le.className="cde-btn",le.textContent="Use Input Colors";const Fe=document.createElement("div");Fe.className="cde-note",Fe.textContent="Palettes are saved in params.palettes and included in preset JSON save/load.",dt.append(ne,le,Fe),u.append(Z,ue,Se,dt),l.append(c,u),i.append(r,l),t.appendChild(i),document.body.appendChild(t);function he(){return e.palettes[e.selectedIndex]||null}function De(q=!0){const y=he();if(!y)return;const v=q?ws(e.rows):e.rows.map(L=>[je(L.input[0]),je(L.input[1]),je(L.input[2])]);if(y.type==="continuous"){const L=Math.max(24,v.length*8);y.colors=Na(v,L)}else y.colors=v;e.dirty=!0}function $e(){const q=e.palettes.map((y,v)=>Ri(y,v));mn("palettes",q),e.dirty=!1}function We(q){e.selectedIndex=Math.max(0,Math.min(e.palettes.length-1,q));const y=he();e.rows=As(y),Ve()}function _t(q){const y=he();if(((y==null?void 0:y.type)==="continuous"?"continuous":"discrete")===q)return;const L=ws(e.rows);if(q==="continuous"){const X=Math.max(24,Math.min(96,Math.max(2,L.length)*4));e.rows=pc(Na(L,X))}else e.rows=pc(Na(L,12))}function Ze(){d.innerHTML="",e.palettes.forEach((q,y)=>{const v=document.createElement("div");v.className=`cde-list-item${y===e.selectedIndex?" active":""}`;const L=document.createElement("div");L.className="cde-color-dot",L.style.background=K_(q);const X=document.createElement("div");X.style.flex="1",X.style.minWidth="0",X.innerHTML=`<div>${q.name||q.id}</div><div class="cde-note">${q.id} · ${q.type} · ${q.colors.length} colors</div>`,v.append(L,X),v.addEventListener("click",()=>{De(!0),We(y)}),d.appendChild(v)})}function lt(){const q=he();if(!q)return;R.value=q.name||"",U.value=q.type||"discrete";const y=Array.isArray(q.colors)?q.colors:[];if(y.length===0){E.style.background="#2a2a2a";return}if(q.type==="continuous"){const v=y.map((L,X)=>`${wi(L[0],L[1],L[2])} ${X/Math.max(1,y.length-1)*100}%`).join(", ");E.style.background=`linear-gradient(90deg, ${v})`}else{const v=100/y.length,L=[];for(let X=0;X<y.length;X++){const Q=(X*v).toFixed(3),K=((X+1)*v).toFixed(3),Ae=wi(y[X][0],y[X][1],y[X][2]);L.push(`${Ae} ${Q}%`,`${Ae} ${K}%`)}E.style.background=`linear-gradient(90deg, ${L.join(", ")})`}}function N(q,y){const v=document.createElement("div");v.className="cde-swatch",v.style.background=wi(q[0],q[1],q[2]);const L=document.createElement("input");return L.type="color",L.value=wi(q[0],q[1],q[2]),L.addEventListener("input",()=>{const X=Fu(L.value);v.style.background=L.value,y(X)}),v.appendChild(L),v}function mt(q,y,v=0,L=255){const X=document.createElement("input");return X.className="cde-input cde-num",X.type="number",X.min=String(v),X.max=String(L),X.step="1",X.value=String(je(q)),X.addEventListener("change",()=>{y(je(X.value))}),X}function Be(){const q=Xe.querySelector("tbody");q.innerHTML="";const y=ws(e.rows);e.rows.forEach((v,L)=>{const X=document.createElement("tr"),Q=document.createElement("td");Q.textContent=String(L+1);const K=document.createElement("td");K.textContent=Lu[L%12];const Ae=document.createElement("td"),A=mt(v.luma,ot=>{v.luma=ot,e.dirty=!0,Be()});Ae.appendChild(A);const O=document.createElement("td"),te=document.createElement("div");te.className="cde-rgb";const B=N(v.input,ot=>{v.input=[je(ot[0]),je(ot[1]),je(ot[2])],e.dirty=!0,Be()}),Y=mt(v.input[0],ot=>{v.input[0]=ot,e.dirty=!0,Be()}),ce=mt(v.input[1],ot=>{v.input[1]=ot,e.dirty=!0,Be()}),xe=mt(v.input[2],ot=>{v.input[2]=ot,e.dirty=!0,Be()});te.append(B,Y,ce,xe),O.appendChild(te);const oe=y[L],ke=document.createElement("td"),me=document.createElement("div");me.className="cde-rgb";const Ke=document.createElement("div");Ke.className="cde-swatch",Ke.style.background=wi(oe[0],oe[1],oe[2]);const D=mt(oe[0],()=>{},0,255),pe=mt(oe[1],()=>{},0,255),H=mt(oe[2],()=>{},0,255);D.readOnly=!0,pe.readOnly=!0,H.readOnly=!0,D.style.opacity="0.8",pe.style.opacity="0.8",H.style.opacity="0.8",me.append(Ke,D,pe,H),ke.appendChild(me);const ie=document.createElement("td"),ye=wi(oe[0],oe[1],oe[2]),ge=document.createElement("input");ge.className="cde-input",ge.readOnly=!0,ge.value=ye,ge.addEventListener("click",()=>{var ot;(ot=navigator.clipboard)==null||ot.writeText(ye).catch(()=>{})}),ie.appendChild(ge);const we=document.createElement("td"),at=document.createElement("button");at.className="cde-btn cde-btn-danger",at.textContent="✕",at.addEventListener("click",()=>{e.rows.splice(L,1),e.rows.length===0&&e.rows.push({note:0,luma:128,input:[128,128,128]}),e.dirty=!0,Be()}),we.appendChild(at),X.append(Q,K,Ae,O,ke,ie,we),q.appendChild(X)})}function Ve(){Ze(),lt(),Be()}R.addEventListener("input",()=>{const q=he();if(!q)return;const y=R.value.trim()||`Palette ${e.selectedIndex+1}`;q.name=y,q.id=Qs(y,`palette-${e.selectedIndex+1}`),e.dirty=!0,Ve()}),U.addEventListener("change",()=>{const q=he();if(!q)return;const y=U.value==="continuous"?"continuous":"discrete";_t(y),q.type=y,e.dirty=!0,Ve()}),T.addEventListener("click",()=>{De(!0);const q=ev(S.value,e.palettes);q&&(e.palettes.push(q),We(e.palettes.length-1),e.dirty=!0)}),_.addEventListener("click",()=>{De(!0);const q=La(e.palettes.length);e.palettes.push(q),We(e.palettes.length-1),e.dirty=!0}),g.addEventListener("click",()=>{const q=he();if(!q)return;De(!0);const y=Ri(q,e.palettes.length);y.id=`${y.id}-copy`,y.name=`${y.name} copy`,e.palettes.push(y),We(e.palettes.length-1),e.dirty=!0}),p.addEventListener("click",()=>{if(e.palettes.length<=1){alert("At least one palette must remain.");return}e.palettes.splice(e.selectedIndex,1),We(Math.max(0,e.selectedIndex-1)),e.dirty=!0}),W.addEventListener("click",()=>{const q=e.rows[e.rows.length-1];e.rows.push({note:e.rows.length,luma:q?je(q.luma):128,input:q?[...q.input]:[200,100,50]}),e.dirty=!0,Be()}),de.addEventListener("click",()=>{const q=he();if(!q)return;const y=Array.isArray(q.colors)&&q.colors.length>0?q.colors:La(0).colors;e.rows=[];for(let v=0;v<12;v++){const L=y[v%y.length],X=Math.round(.299*L[0]+.587*L[1]+.114*L[2]);e.rows.push({note:v,luma:X,input:[je(L[0]),je(L[1]),je(L[2])]})}e.dirty=!0,Be()}),fe.addEventListener("click",()=>{e.rows.sort((q,y)=>Number(q.luma)-Number(y.luma)),e.dirty=!0,Be()}),ne.addEventListener("click",()=>{De(!0),Ze()}),le.addEventListener("click",()=>{De(!1),Ze()}),a.addEventListener("click",()=>{De(!0),$e()}),$.addEventListener("click",()=>{const q=he();if(!q)return;const y=(q.id||"palette").replace(/[^A-Za-z0-9_-]/g,"_"),v=j_(q,e.rows);fc(`${y}.csv`,"text/csv;charset=utf-8",v)}),z.addEventListener("click",()=>{const q=he();if(!q)return;De(!0);const y=(q.id||"palette").replace(/[^A-Za-z0-9_-]/g,"_"),v=JSON.stringify(q,null,2);fc(`${y}.json`,"application/json;charset=utf-8",v)}),J.addEventListener("click",()=>j.click()),j.addEventListener("change",async q=>{var v;const y=(v=q.target.files)==null?void 0:v[0];if(y)try{const L=await y.text();if(y.name.toLowerCase().endsWith(".json")){const Q=JSON.parse(L);if(Array.isArray(Q)){const K=Q.map((Ae,A)=>Ri(Ae,A));K.length>0&&(De(!0),e.palettes=K,We(0),e.dirty=!0)}else{const K=Ri(Q,e.palettes.length);De(!0),e.palettes.push(K),We(e.palettes.length-1),e.dirty=!0}}else{const Q=Z_(L);Q.length===0?alert("No valid palette rows found in CSV."):(e.rows=Q,De(!0),e.dirty=!0,Ve())}}catch(L){console.warn("[ColorDesignEditor] import failed:",L),alert("Failed to import palette file.")}finally{j.value=""}});function Pe(){if(De(!0),e.dirty&&$e(),typeof e.unsubscribe=="function"){try{e.unsubscribe()}catch{}e.unsubscribe=null}t.remove(),document.removeEventListener("keydown",Je)}function Je(q){q.key==="Escape"&&Pe()}o.addEventListener("click",Pe),t.addEventListener("pointerdown",q=>{q.target===t&&Pe()}),document.addEventListener("keydown",Je),e.unsubscribe=_r((q,y)=>{var Q;if(y!=="palettes"&&y!=="*")return;const v=Array.isArray(q==null?void 0:q.palettes)?q.palettes:[];if(v.length===0)return;const L=(Q=he())==null?void 0:Q.id;e.palettes=v.map((K,Ae)=>Ri(K,Ae));const X=L?e.palettes.findIndex(K=>K.id===L):0;e.selectedIndex=X>=0?X:0,e.rows=As(he()),Ve()}),Ve()}const nv=1;function iv(n){let e="";for(let i=0;i<n.length;i+=32768){const r=n.subarray(i,i+32768);e+=String.fromCharCode(...r)}return btoa(e)}function rv(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}async function sv(n){const e=new Uint8Array(await n.arrayBuffer());return`data:${n.type||"application/octet-stream"};base64,${iv(e)}`}function av(n,e="audio.bin"){if(typeof n!="string"||!n.startsWith("data:"))throw new Error("Invalid embedded audio payload.");const t=n.indexOf(",");if(t<0)throw new Error("Malformed data URL.");const i=n.slice(0,t),r=n.slice(t+1),s=i.match(/^data:([^;]+);base64$/),a=(s==null?void 0:s[1])||"application/octet-stream",o=rv(r);return new File([o],e,{type:a})}function ov({params:n,presetName:e="",audioDataUrl:t="",audioFileName:i=""}){return{schemaVersion:nv,createdAt:new Date().toISOString(),presetName:String(e||""),params:n&&typeof n=="object"?n:{},audio:t?{fileName:i||"audio.bin",dataUrl:t}:null}}function lv(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return e}function cv(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function ee(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:r==="title"?i.title=s:i.setAttribute(r,s);return i}function Ei(n,e){return n.isDropdown||n.isToggle||Number.isInteger(n.step)?String(e):Number(e).toFixed(2)}let Sr=null;function jo(n){const e=ee("button","cp-info-btn",{text:"ⓘ","aria-label":`Info: ${n.label}`});let t;return n.isDropdown?t=n.dropdownGroups?n.dropdownGroups.flatMap(i=>i.options.map(r=>r.label)).join(", "):(n.dropdownOptions??[]).map(i=>i.label).join(", "):n.isToggle?t=(n.toggleLabels??["Off","On"]).join(" / "):t=`${n.min}–${n.max}${n.unit?" "+n.unit:""}`,e.addEventListener("click",i=>{if(i.stopPropagation(),Sr&&(Sr.remove(),Sr=null),e.classList.contains("active")){e.classList.remove("active");return}const r=ee("div","cp-info-popup");r.innerHTML=`
      <div class="cp-info-title">${n.label}</div>
      <div class="cp-info-desc">${n.desc}</div>
      <div class="cp-info-meta">
        ${n.isToggle?"Options":"Range"}: ${t}
        ${!n.isToggle&&n.neutralValue!==void 0?` · Neutral: ${n.neutralValue}`:""}
        ${n.isToggle?"":` · Default: ${n.default}${n.unit?" "+n.unit:""}`}
      </div>`;const s=e.getBoundingClientRect();r.style.top=`${s.bottom+6}px`,r.style.left=`${Math.min(s.left,window.innerWidth-280)}px`,document.body.appendChild(r),e.classList.add("active"),Sr=r,r.addEventListener("click",a=>a.stopPropagation()),requestAnimationFrame(()=>{const a=()=>{r.remove(),e.classList.remove("active"),Sr=null,document.removeEventListener("click",a),document.removeEventListener("keydown",o)},o=l=>{l.key==="Escape"&&a()};document.addEventListener("click",a),document.addEventListener("keydown",o)})}),e}function Zo(n,e){const t=ee("button","cp-bypass-btn"),i=()=>{const r=cn.has(n.key);t.textContent=r?"○":"●",t.title=r?`${n.label} is bypassed — click to enable`:`Click to bypass ${n.label}`,e.classList.toggle("cp-row-disabled",r)};return i(),t.addEventListener("click",()=>{H_(n.key),i(),uv(n)}),t}const en=new Map;function uv(n,e){var t;(t=en.get(n.key))==null||t(se[n.key])}function dv(n){const e=ee("div","cp-row");e.classList.toggle("cp-row-disabled",cn.has(n.key)),n.canDisable&&e.appendChild(Zo(n,e));const t=ee("label","cp-label",{text:n.label,title:n.desc});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=ee("div","cp-slider-wrap"),r=ee("input","cp-slider",{id:`cp-${n.key}`,type:"range",min:n.min,max:n.max,step:n.step,value:se[n.key]}),s=ee("input","cp-val-input",{type:"number",step:n.step,value:Ei(n,se[n.key]),title:`Current value${n.unit?" ("+n.unit+")":""}`}),a=(()=>{try{return JSON.parse(localStorage.getItem("seesound_user_defaults_v4")||"{}")}catch{return{}}})(),o=ee("input","cp-def-input",{type:"number",step:n.step,value:Ei(n,a[n.key]??n.default),title:"Saved default — press Enter to save"}),l=ee("button","cp-star-btn",{text:"★",title:"Save current value as session default"});let c=Number(se[n.key]);r.addEventListener("input",()=>{const f=parseFloat(r.value);mn(n.key,f),s.value=Ei(n,f),updateTrack(f)}),s.addEventListener("change",()=>{const f=parseFloat(s.value);isNaN(f)||(mn(n.key,f),r.value=String(Math.min(n.max,Math.max(n.min,f))),updateTrack(f))}),s.addEventListener("keydown",f=>{f.key==="Escape"&&(s.value=Ei(n,se[n.key]))}),o.addEventListener("keydown",f=>{if(f.key==="Enter"){const d=parseFloat(o.value);isNaN(d)||Bs(n.key,d),o.blur()}f.key==="Escape"&&o.blur()}),o.addEventListener("blur",()=>{o.value=Ei(n,parseFloat(o.value)||(a[n.key]??n.default))}),l.addEventListener("click",()=>{Bs(n.key,se[n.key]),o.value=Ei(n,se[n.key])});let u=null;return n.key==="defaultParticleSize"&&(u=ee("button","cp-preset-btn cp-rule-mini",{text:"Apply All",title:"Scale all current particles by new/old default size"}),u.addEventListener("click",()=>{const f=Number(se[n.key]),d=Number(c);!Number.isFinite(f)||!Number.isFinite(d)||d<=0||f<=0||(window.dispatchEvent(new CustomEvent("seesound:particle-size-apply-all",{detail:{oldDefaultSize:d,newDefaultSize:f}})),c=f)})),en.set(n.key,f=>{r.value=String(Math.min(n.max,Math.max(n.min,f))),s.value=Ei(n,f),updateTrack(f),c=Number(f),e.classList.toggle("cp-row-disabled",cn.has(n.key))}),i.append(r,s,o,l,...u?[u]:[],jo(n)),e.appendChild(i),e}function hv(n){const e=ee("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",cn.has(n.key)),n.canDisable&&e.appendChild(Zo(n,e));const t=ee("label","cp-label",{text:n.label});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=ee("select","cp-dropdown",{id:`cp-${n.key}`});if(n.dropdownGroups)for(const s of n.dropdownGroups){const a=ee("optgroup","",{label:s.label});for(const o of s.options){const l=ee("option","",{value:o.value,text:o.label});String(o.value)===String(se[n.key])&&(l.selected=!0),a.appendChild(l)}i.appendChild(a)}else for(const s of n.dropdownOptions??[]){const a=ee("option","",{value:s.value,text:s.label});String(s.value)===String(se[n.key])&&(a.selected=!0),i.appendChild(a)}i.addEventListener("change",()=>{const s=i.value,a=Number(s);mn(n.key,s!==""&&!isNaN(a)?a:s)});const r=ee("button","cp-star-btn",{text:"★",title:"Save as default"});return r.addEventListener("click",()=>Bs(n.key,se[n.key])),en.set(n.key,s=>{i.value=String(s),e.classList.toggle("cp-row-disabled",cn.has(n.key))}),e.append(i,r,jo(n)),e}function fv(n){const e=ee("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",cn.has(n.key)),n.canDisable&&e.appendChild(Zo(n,e));const t=ee("label","cp-label",{text:n.label,title:n.desc});e.appendChild(t);const i=n.toggleLabels??["Off","On"],r=ee("div","cp-seg-group"),s=Number(se[n.key]),a=i.map((l,c)=>{const u=ee("button","cp-seg-btn",{text:l});return s===c&&u.classList.add("active"),u.addEventListener("click",()=>{cn.has(n.key)||(mn(n.key,c),a.forEach((f,d)=>f.classList.toggle("active",d===c)))}),u});r.append(...a);const o=ee("button","cp-star-btn",{text:"★",title:"Save as default"});return o.addEventListener("click",()=>Bs(n.key,se[n.key])),en.set(n.key,l=>{const c=Number(l);a.forEach((u,f)=>u.classList.toggle("active",f===c)),e.classList.toggle("cp-row-disabled",cn.has(n.key))}),e.append(r,o,jo(n)),e}function pv(){const n=ee("div","cp-preset-bar"),e="rule__";function t(){const w=document.activeElement;w instanceof HTMLElement&&w.closest(".cp-body")&&w.blur()}const i=ee("div","cp-preset-row"),r=ee("span","cp-preset-label",{text:"PROJECT"}),s=ee("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save project (Ctrl+S / Ctrl+Shift+S)"}),a=ee("button","cp-preset-btn",{text:"🗁",title:"Load project"}),o=ee("button","cp-preset-btn",{text:"🎨",title:"Open Palette Manager"}),l=ee("input","",{type:"file",accept:".json,.seesound-project,.seesound-project.json"});l.style.display="none",i.append(r,s,a,o);const c=ee("div","cp-preset-row");ee("span","cp-preset-label",{text:"Preset"});const u=ee("select","cp-preset-sel"),f=ee("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset"}),d=ee("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});c.append(u,f,d);const m=ee("div","cp-preset-row"),_=ee("input","cp-preset-name",{type:"text",placeholder:"preset_title"}),g=ee("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save current rule preset (Ctrl+P)"});m.append(_,g),n.append(i,c,m,l);let p=[];async function h(){var M;t();const w=_.value.trim(),R=String(u.value||"").trim(),C=w||R;if(!C)return alert("Enter or select a preset name first."),_.focus(),!1;if(!w&&R&&(_.value=R),p.includes(C)&&!confirm(`Overwrite preset "${C}"?`))return!1;const U=((M=Wt==null?void 0:Wt.serialize)==null?void 0:M.call(Wt))??(Array.isArray(se.ruleBlocks)?se.ruleBlocks:[]),E=Yo();return E.ruleBlocks=U,await Ru(C,E),await S(),u.value=C,!0}async function S(){p=(await wu()).filter(C=>!String(C||"").startsWith(e));const R=u.value;u.innerHTML='<option value="">select preset</option>';for(const C of p){const U=ee("option","",{value:C,text:C});u.appendChild(U)}R&&p.includes(R)&&(u.value=R)}u.addEventListener("change",()=>{u.value&&(_.value=u.value)}),f.addEventListener("click",async()=>{var R;if(!u.value)return;const w=await Cu(u.value);if(w!=null&&w.params){Js(w.params);for(const C of Li)(R=en.get(C.key))==null||R(se[C.key]);Wt==null||Wt.replaceFromRuleBlocks(Array.isArray(se.ruleBlocks)?se.ruleBlocks:[])}}),d.addEventListener("click",async()=>{u.value&&confirm(`Delete preset "${u.value}"?`)&&(await Pu(u.value),await S(),_.value="")}),g.addEventListener("click",async()=>{await h()}),s.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-save-request"))}),a.addEventListener("click",()=>{l.click()}),o.addEventListener("click",()=>{tv()}),l.addEventListener("change",async w=>{var C;const R=(C=w.target.files)==null?void 0:C[0];if(R)try{const U=await R.text(),E=lv(U);window.dispatchEvent(new CustomEvent("seesound:project-load-request",{detail:{payload:E,fileName:R.name}}))}catch(U){console.warn("[Project] load parse failed:",U),alert("Failed to load project file.")}finally{l.value=""}}),_.addEventListener("keydown",w=>{w.key==="Enter"&&g.click()});const T=window.__seesoundShortcutAbort;T&&typeof T.abort=="function"&&T.abort();const x=new AbortController;return window.__seesoundShortcutAbort=x,document.addEventListener("keydown",async w=>{if(w.defaultPrevented||w.altKey||!(w.ctrlKey||w.metaKey))return;const R=String(w.key||"").toLowerCase();if(R==="s"){w.preventDefault(),w.stopPropagation(),window.dispatchEvent(new CustomEvent("seesound:project-save-request"));return}R==="p"&&!w.shiftKey&&(w.preventDefault(),w.stopPropagation(),await h())},{signal:x.signal}),S(),n}function mv(){const n=ee("div","cp-canvas-size"),e=ee("div","cp-canvas-size-title",{text:"Canvas Size"}),t=ee("div","cp-canvas-size-row"),i=ee("div","cp-canvas-size-row"),r=ee("label","cp-canvas-size-label",{text:"↔"}),s=ee("input","cp-canvas-size-input",{type:"number",step:"1",min:"160",value:String(Math.max(160,Number(se.canvasWidth??0)||160))}),a=ee("label","cp-canvas-size-label",{text:"↕"}),o=ee("input","cp-canvas-size-input",{type:"number",step:"1",min:"120",value:String(Math.max(120,Number(se.canvasHeight??0)||120))}),l=ee("label","cp-canvas-size-label",{text:"%"}),c=ee("input","cp-canvas-size-input",{type:"number",step:"1",min:"5",max:"400",value:String(Math.max(5,Math.min(400,Math.floor(Number(se.canvasScale??100)||100))))}),u=ee("button","cp-preset-btn cp-rule-mini",{text:"Apply"}),f=ee("div","cp-canvas-size-label",{text:"BG HSL"}),d=ee("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"360",value:String(Math.max(0,Math.min(360,Math.floor(Number(se.defaultBackgroundHue??0)||0))))}),m=ee("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(se.defaultBackgroundSaturation??0)||0))))}),_=ee("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(se.defaultBackgroundLightness??0)||0))))}),g={w:0,h:0,s:100};function p(x,w,R,C){const U=Number(x);return Number.isFinite(U)?Math.max(w,Math.min(R,Math.floor(U))):C}function h(){const x=Number(se.canvasWidth),w=Number(se.canvasHeight),R=Number(se.canvasScale),C=Number.isFinite(x)&&x>0?x:g.w,U=Number.isFinite(w)&&w>0?w:g.h,E=Number.isFinite(R)&&R>0?R:g.s;document.activeElement!==s&&(s.value=String(Math.max(160,Math.floor(C||160)))),document.activeElement!==o&&(o.value=String(Math.max(120,Math.floor(U||120)))),document.activeElement!==c&&(c.value=String(Math.max(5,Math.min(400,Math.floor(E||100))))),document.activeElement!==d&&(d.value=String(p(se.defaultBackgroundHue,0,360,0))),document.activeElement!==m&&(m.value=String(p(se.defaultBackgroundSaturation,0,100,0))),document.activeElement!==_&&(_.value=String(p(se.defaultBackgroundLightness,0,100,0)))}function S(){const x=Math.max(160,Math.floor(Number(s.value)||160)),w=Math.max(120,Math.floor(Number(o.value)||120)),R=Math.max(5,Math.min(400,Math.floor(Number(c.value)||100)));mn("canvasWidth",x),mn("canvasHeight",w),mn("canvasScale",R)}function T(){mn("defaultBackgroundHue",p(d.value,0,360,0)),mn("defaultBackgroundSaturation",p(m.value,0,100,0)),mn("defaultBackgroundLightness",p(_.value,0,100,0))}return s.addEventListener("change",S),o.addEventListener("change",S),s.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),S(),s.blur())}),o.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),S(),o.blur())}),c.addEventListener("change",S),c.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),S(),c.blur())}),d.addEventListener("change",T),m.addEventListener("change",T),_.addEventListener("change",T),d.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),T(),d.blur())}),m.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),T(),m.blur())}),_.addEventListener("keydown",x=>{x.key==="Enter"&&(x.preventDefault(),T(),_.blur())}),u.addEventListener("click",S),en.set("canvasWidth",()=>h()),en.set("canvasHeight",()=>h()),en.set("canvasScale",()=>h()),en.set("defaultBackgroundHue",()=>h()),en.set("defaultBackgroundSaturation",()=>h()),en.set("defaultBackgroundLightness",()=>h()),_r((x,w)=>{(w==="canvasWidth"||w==="canvasHeight"||w==="canvasScale"||w==="defaultBackgroundHue"||w==="defaultBackgroundSaturation"||w==="defaultBackgroundLightness")&&h()}),window.addEventListener("seesound:canvas-size",x=>{var w,R,C;g.w=Number((w=x==null?void 0:x.detail)==null?void 0:w.w)||g.w,g.h=Number((R=x==null?void 0:x.detail)==null?void 0:R.h)||g.h,g.s=Number((C=x==null?void 0:x.detail)==null?void 0:C.s)||g.s,h()}),t.append(r,s,a,o,l,c,u),i.append(f,d,m,_),n.append(e,t,i),h(),n}function gv(n,e,t){const i=ee("div",`cp-group${t?" cp-open":""}`),r=ee("button","cp-group-header");r.innerHTML=`<span class="cp-group-chevron">${t?"▾":"▸"}</span><span>${n.label}</span><span class="cp-group-count">${e.length}</span>`;const s=ee("div","cp-group-body");s.style.display=t?"":"none";for(const o of e)o.isDropdown?s.appendChild(hv(o)):o.isToggle?s.appendChild(fv(o)):s.appendChild(dv(o));let a=t;return r.setAttribute("aria-expanded",String(a)),r.addEventListener("click",()=>{a=!a,i.classList.toggle("cp-open",a),s.style.display=a?"":"none",r.setAttribute("aria-expanded",String(a));const o=r.querySelector(".cp-group-chevron");o&&(o.textContent=a?"▾":"▸")}),i.append(r,s),i}const _v=bu().entries,ks=_v.filter(n=>!n.hidden).map(n=>n.id);let Kn=[...ks];const Ko=C_().entries,vv=Ko.map(n=>n.id),Du=new Map(Ko.map(n=>[n.id,n])),xv=["always",">",">=","<","<=","==","!="],Co=[...Ys],Iu=[...Xo];let Wt=null;function bv(n){const e=new Set(ks),t=Array.isArray(n)?[...new Set(n)].filter(i=>e.has(i)):[];Kn=[...new Set([...t,...ks])]}function Cr(n=0){return`rule-${Math.max(1,Math.floor(n)+1)}`}function Uu(){return`rule-ui-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function mc(n=0){return{id:Cr(n),group:"",subgroup:"",enabled:!0,target:"spawnedParticles",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",value:1}],order:n}}function Jo(n){return n==="shapeType"}function zs(n){const e=String((n==null?void 0:n.context)||"").toLowerCase();if(e.includes("background"))return"background";if(e.includes("camera"))return"camera";if(e.includes("particle"))return"spawnedParticles";const t=typeof(n==null?void 0:n.target)=="string"?n.target:"";return Co.includes(t)?t:(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Po(n){return Ko.filter(e=>!Array.isArray(e.targets)||e.targets.includes(n)).map(e=>e.id)}function yv(n){var i,r;if(!n||n.type!=="number")return!1;const e=Number((i=n==null?void 0:n.range)==null?void 0:i[0]),t=Number((r=n==null?void 0:n.range)==null?void 0:r[1]);return Number.isFinite(e)&&Number.isFinite(t)&&e===0&&t===1}function gc(n){if(n==="rgb"||n==="hsv")return n;const e=Du.get(n);return yv(e)?`${n} (norm)`:n}function Fa(n){const e=Po(n.target);if(e.length===0){n.actionOutput="opacity";return}e.includes(n.actionOutput)||(n.actionOutput=e[0])}function Mv(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function Sv(n,e){const t=Mv(n);if(!t||!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(t))return 0;const i={clamp:(r,s,a)=>Math.max(s,Math.min(a,r)),lerp:(r,s,a)=>r+(s-r)*a,smoothstep:(r,s,a)=>{const o=Math.max(0,Math.min(1,(a-r)/Math.max(1e-9,s-r)));return o*o*(3-2*o)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,PI:Math.PI,E:Math.E};for(const r of ks)i[r]=Number(e==null?void 0:e[r])||0;try{const r=Object.keys(i),s=r.map(c=>i[c]),o=new Function(...r,`return (${t});`)(...s);if(typeof o=="boolean")return o?1:0;const l=Number(o);return Number.isFinite(l)?l:0}catch{return 0}}function Ev(n){var a,o;const e=Du.get(n);if(!e)return 0;if(e.type==="enum")return n==="shapeType"?"square":Array.isArray(e.values)&&e.values.length>0?e.values[0]:0;const t=Number((a=e==null?void 0:e.range)==null?void 0:a[0]),i=Number((o=e==null?void 0:e.range)==null?void 0:o[1]),r=Number.isFinite(t),s=Number.isFinite(i);return r&&s?(t+i)*.5:r&&!s?t===0?1:t:!r&&s?i===0?-1:i:1}function Tv(n,e){if(!(n!=null&&n.conditionEnabled)||(n==null?void 0:n.conditionOp)==="always")return!0;const t=Number(e==null?void 0:e[n.conditionInput])||0,i=n.conditionRhsMode==="input"?Number(e==null?void 0:e[n.conditionRhsInput])||0:Number(n.conditionRhsLiteral)||0;switch(n.conditionOp){case">":return t>i;case">=":return t>=i;case"<":return t<i;case"<=":return t<=i;case"==":return t===i;case"!=":return t!==i;default:return!0}}function Av(n,e){const t=String((n==null?void 0:n.actionValueText)||"").trim();if(!t)return 0;if(Kn.includes(t))return Number(e==null?void 0:e[t])||0;if(Jo(n==null?void 0:n.actionOutput))return t==="circle"?"circle":"square";const i=Number(t);return Number.isFinite(i)?i:Sv(t,e)}function _c(n,e){const t=new Map,i=new Map,r=s=>(t.has(s)||t.set(s,Object.create(null)),t.get(s));for(const s of n){const a=zs(s),o=r(a),l=s.actionOutput;l in o||(o[l]=Ev(l));const c=o[l];let u=c;if(s.enabled!==!1&&Tv(s,e)){const f=Av(s,e);if(Jo(l))u=String(f)==="circle"?"circle":"square";else{const d=Number(c),m=Number(f),_=Number.isFinite(d)?d:0,g=Number.isFinite(m)?m:0;switch(s.actionOp){case"set":u=g;break;case"add":u=_+g;break;case"subtract":u=_-g;break;case"multiply":u=_*g;break;case"divide":u=Math.abs(g)>1e-6?_/g:_;break;case"clamp":u=Math.max(-Math.abs(g),Math.min(Math.abs(g),_));break;default:u=_;break}}o[l]=u}i.set(s._uid,{inKey:l,outKey:l,inValue:c,outValue:u})}return i}function ps(n,e,t){n.innerHTML="";for(const i of e){const r=ee("option","",{value:i.value,text:i.label});String(i.value)===String(t)&&(r.selected=!0),n.appendChild(r)}typeof n._autoSize=="function"&&n._autoSize()}function Da(n,e){const t={operator:n.conditionEnabled?n.conditionOp:"always"};n.conditionEnabled&&n.conditionOp!=="always"&&(t.input=n.conditionInput,n.conditionRhsMode==="input"?t.valueInput=n.conditionRhsInput:t.value=Number(n.conditionRhsLiteral));const i={operator:n.actionOp,output:n.actionOutput},r=String(n.actionValueText??"").trim();if(Jo(n.actionOutput))i.value=r==="circle"?"circle":"square";else{const s=Number(r);r&&Number.isFinite(s)?i.value=s:Kn.includes(r)?i.input=r:i.expression=r}return{id:n.id,group:n.group,subgroup:n.subgroup,enabled:!!n.enabled,target:n.target,condition:t,actions:[i],order:e}}function Er(n,e){var a,o,l,c,u;const t=Array.isArray(n.actions)&&n.actions[0]?n.actions[0]:{operator:"set",output:"opacity",value:1},i=((a=n.condition)==null?void 0:a.operator)||"always",r=i!=="always",s=typeof t.expression=="string"?t.expression:typeof t.input=="string"&&t.input.trim()?t.input.trim():t.value==="circle"||t.value==="square"?t.value:Number.isFinite(Number(t.value))?String(Number(t.value)):"1";return{_uid:typeof n._uid=="string"&&n._uid?n._uid:Uu(),id:typeof n.id=="string"&&n.id.trim()?n.id.trim():Cr(e),group:typeof n.group=="string"?n.group:"",subgroup:typeof n.subgroup=="string"?n.subgroup:"",enabled:n.enabled!==!1,target:zs(n),conditionEnabled:r,conditionOp:i,conditionInput:Kn.includes((o=n.condition)==null?void 0:o.input)?n.condition.input:"amplitude",conditionRhsMode:(l=n.condition)!=null&&l.valueInput?"input":"literal",conditionRhsInput:Kn.includes((c=n.condition)==null?void 0:c.valueInput)?n.condition.valueInput:"amplitude",conditionRhsLiteral:Number.isFinite(Number((u=n.condition)==null?void 0:u.value))?Number(n.condition.value):.5,actionOutput:vv.includes(t.output)?t.output:"opacity",actionOp:Iu.includes(t.operator)?t.operator:"set",actionValueText:s,uiState:n.uiState||"normal",order:Number.isFinite(n.order)?Number(n.order):e}}function ms(n){if(typeof n=="string")return n;const e=Number(n);return Number.isFinite(e)?e.toFixed(3):"0.000"}function wv(n){return`When ${!n.conditionEnabled||n.conditionOp==="always"?"always":`${n.conditionInput} ${n.conditionOp} ${n.conditionRhsMode==="input"?n.conditionRhsInput:Number(n.conditionRhsLiteral).toFixed(2)}`}, ${n.actionOp} ${n.actionOutput} using ${String(n.actionValueText||"0")}`}function Rv(n){const t=(()=>{const i=Array.isArray(se==null?void 0:se.palettes)?se.palettes:[],r=[];for(const s of i){const a=String((s==null?void 0:s.id)||"").trim();!a||r.includes(a)||r.push(a)}return r})().flatMap(i=>{const r=i.replace(/'/g,"\\'");return[{value:`expr:palette('${r}', notePitchClass)`,label:`Discrete palette by notePitchClass (${i})`},{value:`expr:gradient('${r}', normFreq)`,label:`Gradient palette by normFreq (${i})`}]});return n==="rgb"?[{value:"",label:"rgb templates..."},{value:"expr:rgb(amplitude*255, bass*255, treble*255)",label:"RGB from amp/bass/treble"},...t,{value:"expr:matchLuma(220,60,40, amplitude*255)",label:"Luma-matched tone"},...t.length===0?[{value:"",label:"save a palette to unlock palette templates"}]:[]]:n==="hsv"?[{value:"",label:"hsv templates..."},{value:"expr:hsv(normFreq*360, 85, 60 + amplitude*40)",label:"HSV musical ramp"},{value:"expr:hsv((notePitchClass/12)*360, 90, 65)",label:"HSV by pitch class"},{value:"expr:hsv((octave+1)*30, 80, 70)",label:"HSV by octave"},...t,...t.length===0?[{value:"",label:"save a palette to unlock palette templates"}]:[]]:[{value:"",label:"template..."}]}function Jt(n,e,t="cp-rule-input"){const i=ee("select",t);for(const s of n){const a=ee("option","",{value:s.value,text:s.label});String(s.value)===String(e)&&(a.selected=!0),i.appendChild(a)}const r=()=>{const s=i.options[i.selectedIndex],a=s?String(s.textContent||s.value||""):"",o=getComputedStyle(i).font||"10px sans-serif";Jt._canvas||(Jt._canvas=document.createElement("canvas"),Jt._ctx=Jt._canvas.getContext("2d"));const l=Jt._ctx;if(!l)return;l.font=o;const c=Math.ceil(l.measureText(a).width),u=Math.max(74,Math.min(280,c+28));i.style.width=`${u}px`};return i._autoSize=r,i.addEventListener("change",r),i.addEventListener("focus",r),requestAnimationFrame(r),i}function Cv(n,e="0.01",t="cp-rule-input cp-rule-num"){return ee("input",t,{type:"number",value:String(n),step:e})}function Pv(n){if(!n)return null;const e=ee("div","cp-rule-section"),t=ee("div","cp-rule-header"),i=ee("span","cp-rule-title",{text:"Rule Builder"}),r=ee("span","cp-rule-status cp-rule-status-stale",{text:"stale"});t.append(i,r);const s=ee("div","cp-rule-error"),a=ee("div","cp-rule-rows"),o=ee("div","cp-rule-preset"),l=ee("select","cp-preset-sel"),c=ee("input","cp-preset-name",{type:"text",placeholder:"single_rule_preset"}),u=ee("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save selected rule as preset"}),f=ee("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset (append)"}),d=ee("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});o.append(l,f,d,c,u);const m=ee("div","cp-rule-actions"),_=ee("button","cp-preset-btn cp-rule-add",{text:"+"});m.appendChild(_),e.append(t,s,o,a,m),n.appendChild(e);let g=(Array.isArray(se.ruleBlocks)?se.ruleBlocks:[]).map(Er),p=!1,h=-1,S=[],T=-1;const x=new Map,w=[],R=new Set,C=new Set,U=new Set,E=new Set;let M="",P="spawnedParticles";const J="rule__";let $=[],z=Object.create(null);function j(){const A=document.activeElement;A instanceof HTMLElement&&A.closest(".cp-rule-section")&&A.blur()}function Z(A){const O=new Set(g.map(Y=>String(Y.id||"").trim()).filter(Boolean)),te=String(A||"").trim()||Cr(g.length);if(!O.has(te))return te;let B=2;for(;O.has(`${te}-${B}`);)B++;return`${te}-${B}`}function ue(A){if(A<0||A>=g.length)return;const O=g[A],te={...O,_uid:Uu(),id:Z(O.id||Cr(g.length)),uiState:"normal"};g.splice(A+1,0,te),de()}function W(A){const O=(A==null?void 0:A.compileStatus)||"stale";r.textContent=O,r.className=`cp-rule-status cp-rule-status-${O.replace(/[^a-z0-9-]/gi,"-")}`,s.textContent=A!=null&&A.compileError?`Compile error: ${A.compileError}${A.compileLine?` (line ${A.compileLine})`:""}`:Array.isArray(A==null?void 0:A.rejected)&&A.rejected.length>0?`Rejected rules: ${A.rejected.map(te=>te.id).join(", ")}`:""}function de(){const A=new Set(g.map(Y=>Y._uid));for(const Y of[...E])A.has(Y)||E.delete(Y);for(const Y of[...U])A.has(Y)||U.delete(Y);for(const Y of g)Fa(Y);const O=g.map((Y,ce)=>Da(Y,ce)),te=U_(O),B=new Set(te.redRuleIds);g=g.map(Y=>({...Y,uiState:B.has(Y.id)?"red":"normal"})),p=!0,mn("ruleBlocks",te.rules),p=!1,W({compileStatus:"stale",compileError:null}),Q()}function fe(A){return O=>{A(O)!==!1&&de()}}function Se(A){return String(A||"").trim()}function Xe(A,O=""){const te=Se(A);te&&(x.has(te)||x.set(te,new Set),O!==void 0&&x.get(te).add(Se(O)))}function dt(){for(const A of g){const O=Se(A.group);O&&(Xe(O,Se(A.subgroup)),w.includes(O)||w.push(O))}}function ne(A){const O=A instanceof Element?A:null;return O?!!O.closest("input,select,button,textarea,label,.cp-rule-slot-add"):!1}function le(A){A<0||A>=g.length||(E.clear(),E.add(g[A]._uid),T=A,M="")}function Fe(A){if(A<0||A>=g.length)return;if(T<0||T>=g.length){le(A);return}const O=Math.min(T,A),te=Math.max(T,A);E.clear();for(let B=O;B<=te;B++)E.add(g[B]._uid);M=""}function he(A){if(A<0||A>=g.length)return;const O=g[A]._uid;E.has(O)?E.delete(O):E.add(O),T=A,M=""}function De(A,O){if(A<0||A>=g.length)return;const te=!!(O.ctrlKey||O.metaKey);O.shiftKey?Fe(A):te?he(A):le(A),Q()}function $e(A){const O=A instanceof Element?A:null;return O?!!O.closest('input,textarea,select,[contenteditable="true"]'):!1}function We(A){const O=[...new Set((A||[]).filter(te=>te>=0&&te<g.length))].sort((te,B)=>te-B);if(O.length===0)return!1;for(let te=O.length-1;te>=0;te--)g.splice(O[te],1);return E.clear(),M="",!0}function _t(){const A=Ze();ee("div","cp-rule-context-board");const O=[{key:"spawnedParticles",label:"Particles",includes:new Set(["spawnedParticles","allParticles"])},{key:"background",label:"Background",includes:new Set(["background"])},{key:"camera",label:"Camera",includes:new Set(["camera"])}];O.some(B=>B.key===P)||(P="spawnedParticles");for(const B of O){for(let Y=0;Y<g.length;Y++){const ce=zs(g[Y]);B.includes.has(ce)}We(A),ee("div","cp-group cp-rule-context-group")}P===group.key&&gHeader.classList.add("cp-rule-group-header-selected"),gHeader.addEventListener("click",()=>{P=group.key,Q()}),C.delete(key),M="",removedRules&&de();const te=ee("div","cp-group-body cp-rule-group-body");if(te.appendChild(L(indices,group.key,"")),X(te,group.key,""),M){const B=M,Y=[];for(let xe=0;xe<g.length;xe++)Se(g[xe].group)===B&&Y.push(xe);const ce=We(Y);Je(g.length,P,""),orderIdx>=0&&w.splice(orderIdx,1),R.delete(B);for(const xe of[...C])xe.startsWith(`${B}::`)&&C.delete(xe);return M="",ce?de():Q(),!0}return!1}function Ze(){const A=[];for(let O=0;O<g.length;O++)E.has(g[O]._uid)&&A.push(O);return A}function lt(A){return A.startsWith(J)?A.slice(J.length):A}async function N(){$=(await wu()).filter(te=>String(te||"").startsWith(J));const O=String(l.value||"");l.innerHTML='<option value="">rule presets</option>';for(const te of $){const B=ee("option","",{value:te,text:lt(te)});l.appendChild(B)}O&&$.includes(O)&&(l.value=O)}async function mt(){j();const A=Ze();if(A.length<1){alert("Select one or more rules to save as a rule preset.");return}const O=String(c.value||lt(String(l.value||""))).trim();if(!O){alert("Enter a single-rule preset name first."),c.focus();return}const te=`${J}${O}`;if($.includes(te)&&!confirm(`Overwrite single-rule preset "${O}"?`))return;const B=A.map((ce,xe)=>Da(g[ce],xe)),Y=Yo();Y.ruleBlocks=B,await Ru(te,Y),await N(),l.value=te,c.value=O}async function Be(A){var B;if(!A)return;const O=await Cu(A),te=Array.isArray((B=O==null?void 0:O.params)==null?void 0:B.ruleBlocks)?O.params.ruleBlocks:[];if(te.length===0){alert("Selected rule preset has no rule block.");return}for(const Y of te)g.push(Er(Y,g.length));de()}function Ve(A,O="",te=""){let B=S.map(me=>g.findIndex(Ke=>Ke._uid===me)).filter(me=>me>=0).sort((me,Ke)=>me-Ke);if(B.length===0&&(B=Ze()),B.length===0&&h>=0&&h<g.length&&(B=[h]),B.length===0)return;const Y=new Set(B);if(A>=0&&A<=g.length){const me=A-1;if(Y.has(A)||me>=0&&Y.has(me)){h=-1,S=[];return}}const ce=B.map(me=>g[me]);for(let me=B.length-1;me>=0;me--)g.splice(B[me],1);let xe=Math.max(0,Math.min(g.length,A));for(const me of B)me<xe&&xe--;const oe=Se(O),ke=Se(te);for(const me of ce)Co.includes(oe)?(me.target=oe,me.group="",me.subgroup=""):(me.group=oe,me.subgroup=ke);g.splice(xe,0,...ce),Xe(oe,ke),E.clear();for(const me of ce)E.add(me._uid);T=g.findIndex(me=>me._uid===ce[ce.length-1]._uid),h=-1,S=[],de()}function Pe(A,O="",te=""){Ve(A,O,te)}function Je(A,O="",te=""){const B=Er(mc(g.length),g.length),Y=Se(O);Co.includes(Y)?(B.target=Y,B.group="",B.subgroup=""):(B.group=Y,B.subgroup=Se(te));const ce=Math.max(0,Math.min(g.length,A));g.splice(ce,0,B),Xe(B.group,B.subgroup),de()}function q(A,O){if(A<0||A>=g.length)return;const te=Se(g[A].group),B=[];for(let oe=0;oe<g.length;oe++)Se(g[oe].group)===te&&B.push(oe);const Y=B.indexOf(A);if(Y<0)return;const ce=Y+O;if(ce<0||ce>=B.length)return;const xe=B[ce];[g[A],g[xe]]=[g[xe],g[A]],de()}function y(A,O,te){const B=E.has(A._uid),Y=ee("div",`cp-rule-row${A.uiState==="red"?" cp-rule-row-red":""}${B?" cp-rule-row-selected":""}`);Y.draggable=!0,Y.dataset.ruleIndex=String(O),Y.dataset.ruleUid=A._uid,Y.addEventListener("click",ae=>{if(ne(ae.target))return;const be=ae.target instanceof Element?ae.target:null;!be||!(be===Y||be.classList.contains("cp-rule-row-top")||be.classList.contains("cp-rule-body")||be.classList.contains("cp-rule-line"))||De(O,ae)}),Y.addEventListener("dragstart",ae=>{if(ne(ae.target)){ae.preventDefault();return}E.has(A._uid)||le(O),S=Ze().map(be=>g[be]._uid),h=O,ae.dataTransfer&&(ae.dataTransfer.effectAllowed="move",ae.dataTransfer.setData("text/plain",A._uid)),Y.classList.add("cp-rule-row-dragging")}),Y.addEventListener("dragend",()=>{h=-1,S=[],Y.classList.remove("cp-rule-row-dragging")});const ce=ee("div","cp-rule-row-top"),xe=U.has(A._uid),oe=ee("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:xe?"▸":"▾",title:xe?"Expand rule":"Collapse rule"});oe.addEventListener("click",ae=>{ae.preventDefault(),ae.stopPropagation(),U.has(A._uid)?U.delete(A._uid):U.add(A._uid),Q()});const ke=ee("span","cp-rule-index",{text:`#${O+1}`}),me=ee("input","cp-rule-input cp-rule-name",{type:"text",value:A.id,placeholder:"rule name"}),Ke=ee("input","cp-rule-toggle",{type:"checkbox"});Ke.checked=!!A.enabled,Ke.addEventListener("change",fe(()=>(A.enabled=Ke.checked,!0))),me.addEventListener("keydown",fe(ae=>{if(ae.key!=="Enter")return!1;ae.preventDefault();const be=String(me.value||"").trim();return A.id=be||Cr(O),me.value=A.id,me.blur(),!0}));const D=ee("button","cp-preset-btn cp-rule-mini",{text:"Move Up"}),pe=ee("button","cp-preset-btn cp-rule-mini",{text:"↓"}),H=ee("button","cp-preset-btn cp-rule-mini",{text:"⧉"});H.title="Duplicate rule";const ie=ee("button","cp-preset-btn cp-rule-mini cp-preset-del",{text:"🗙"});D.textContent="↑",D.addEventListener("click",()=>q(O,-1)),pe.addEventListener("click",()=>q(O,1)),H.addEventListener("click",()=>ue(O)),ie.addEventListener("click",()=>{const ae=Ze();if(ae.length>1&&E.has(A._uid)){for(let be=ae.length-1;be>=0;be--)g.splice(ae[be],1);E.clear(),de();return}g.splice(O,1),E.delete(A._uid),U.delete(A._uid),de()}),ce.append(oe,ke,me,Ke,D,pe,H,ie);const ye=ee("div","cp-rule-line");ye.appendChild(ee("span","cp-rule-k",{text:"Condition"}));const ge=ee("button","cp-preset-btn cp-rule-mini",{type:"button",text:"+ Condition"}),we=ee("button","cp-preset-btn cp-rule-mini cp-preset-del",{type:"button",text:"Remove"}),at=Jt(xv.map(ae=>({value:ae,label:ae})),A.conditionOp),ot=Jt(Kn.map(ae=>({value:ae,label:ae})),A.conditionInput),it=Jt([{value:"literal",label:"literal"},{value:"input",label:"input"}],A.conditionRhsMode),Rt=Cv(A.conditionRhsLiteral),zt=Jt(Kn.map(ae=>({value:ae,label:ae})),A.conditionRhsInput),jt=()=>{const ae=!!A.conditionEnabled;ge.style.display=ae?"none":"",we.style.display=ae?"":"none",at.style.display=ae?"":"none";const be=at.value==="always";ot.style.display=ae&&!be?"":"none",it.style.display=ae&&!be?"":"none",Rt.style.display=ae&&!be&&it.value==="literal"?"":"none",zt.style.display=ae&&!be&&it.value==="input"?"":"none",ae||(A.conditionOp="always")};ge.addEventListener("click",fe(()=>(A.conditionEnabled=!0,(!A.conditionOp||A.conditionOp==="always")&&(A.conditionOp=">"),at.value=A.conditionOp,jt(),!0))),we.addEventListener("click",fe(()=>(A.conditionEnabled=!1,A.conditionOp="always",at.value="always",jt(),!0))),at.addEventListener("change",fe(()=>(A.conditionOp=at.value,jt(),!0))),ot.addEventListener("change",fe(()=>(A.conditionInput=ot.value,!0))),it.addEventListener("change",fe(()=>(A.conditionRhsMode=it.value,jt(),!0))),Rt.addEventListener("keydown",fe(ae=>ae.key!=="Enter"?!1:(ae.preventDefault(),A.conditionRhsLiteral=Number(Rt.value),Rt.blur(),!0))),zt.addEventListener("change",fe(()=>(A.conditionRhsInput=zt.value,!0))),ye.append(ge,we,at,ot,it,Rt,zt),jt();const xn=ee("div","cp-rule-line");xn.appendChild(ee("span","cp-rule-k",{text:"Action"})),Fa(A);const Ct=Jt(Po(A.target).map(ae=>({value:ae,label:gc(ae)})),A.actionOutput),Pn=Jt(Iu.map(ae=>({value:ae,label:ae})),A.actionOp),ii=ee("div","cp-rule-expr-wrap"),ze=ee("textarea","cp-rule-input cp-rule-expr",{placeholder:"value / formula / input id (e.g. bass*0.5 + 0.2)"});ze.value=A.actionValueText||"";const Nn=ee("div","cp-rule-expr-controls"),sn=Jt([],"","cp-rule-input cp-rule-tag"),an=Jt([],"","cp-rule-input cp-rule-tag"),un=Jt([],"","cp-rule-input cp-rule-tag"),ri=ee("button","cp-preset-btn cp-rule-mini",{type:"button",text:"Clear",title:"Clear expression"}),Pt=ee("div","cp-rule-expr-suggest");Nn.append(sn,an,un,ri),ii.append(ze,Nn,Pt);const Ii=["+","-","*","/","(",")","clamp(","min(","max(","abs(","pow(","PI","E","and","or","not"],Ui=["square","circle"],_e=()=>{Fa(A);const ae=Po(A.target).map(He=>({value:He,label:gc(He)}));ps(Ct,ae,A.actionOutput);const be=Ct.value==="rgb"||Ct.value==="hsv";be&&ps(sn,Rv(Ct.value),""),sn.style.display=be?"":"none";const Ge=Ct.value==="shapeType";ps(an,Ge?[{value:"",label:"insert shape..."},...Ui.map(He=>({value:He,label:He}))]:[{value:"",label:"insert input..."},...Kn.map(He=>({value:He,label:He}))],""),ps(un,[{value:"",label:"insert math..."},...Ii.map(He=>({value:He,label:He}))],""),un.style.display=Ge?"none":"",Ge?ze.placeholder!=="shape: square or circle"&&(ze.placeholder="shape: square or circle"):ze.placeholder!=="value / formula / input id (e.g. bass*0.5 + 0.2)"&&(ze.placeholder="value / formula / input id (e.g. bass*0.5 + 0.2)"),Ge&&(Pt.style.display="none",Pt.innerHTML="")},Ye=()=>[...new Set(Kn)];let b=0,I=0,G=[],V=-1;function F(){const ae=String(ze.value||""),be=Number.isFinite(ze.selectionStart)?ze.selectionStart:ae.length,Ge=Number.isFinite(ze.selectionEnd)?ze.selectionEnd:be;b=Math.max(0,Math.min(ae.length,be)),I=Math.max(b,Math.min(ae.length,Ge))}function re(ae){const be=Array.from(Pt.querySelectorAll(".cp-rule-expr-suggest-btn"));if(be.length===0){V=-1;return}const Ge=Math.max(0,Math.min(be.length-1,ae));V=Ge;for(let He=0;He<be.length;He++)be[He].classList.toggle("is-active",He===Ge)}function ve(){const ae=String(ze.value||""),be=Number.isFinite(ze.selectionStart)?ze.selectionStart:ae.length,He=ae.slice(0,be).match(/([A-Za-z_][A-Za-z0-9_]*)$/);return{token:He?He[1]:"",start:He?be-He[1].length:be,end:be}}function Te(ae){F();const be=String(ze.value||""),Ge=ve(),He=`${be.slice(0,Ge.start)}${ae}${be.slice(Ge.end)}`;ze.value=He,A.actionValueText=He;const bt=Ge.start+ae.length;ze.focus(),ze.setSelectionRange(bt,bt),F(),Oe(),Ue(!0)}function Re(ae){const be=String(ze.value||""),Ge=document.activeElement===ze&&Number.isFinite(ze.selectionStart),He=Ge?ze.selectionStart:b,bt=Ge?ze.selectionEnd:I,yt=`${be.slice(0,He)}${ae}${be.slice(bt)}`;ze.value=yt,A.actionValueText=yt;const Kt=He+ae.length;ze.focus(),ze.setSelectionRange(Kt,Kt),F(),Oe(),Ue(!0)}function Ue(ae=!1){if(Ct.value==="shapeType"){Pt.style.display="none",Pt.innerHTML="";return}const be=ve(),Ge=String(be.token||"").toLowerCase();if(!Ge&&!ae){Pt.style.display="none",Pt.innerHTML="";return}const He=Ye(),bt=Ge?He.filter(yt=>yt.toLowerCase().includes(Ge)&&yt.toLowerCase()!==Ge).slice(0,12):He.slice(0,12);if(G=bt,bt.length===0){V=-1,Pt.style.display="none",Pt.innerHTML="";return}Pt.innerHTML="";for(const yt of bt){const Kt=ee("button","cp-rule-expr-suggest-btn",{type:"button",text:yt});Kt.addEventListener("mousedown",bn=>{bn.preventDefault()}),Kt.addEventListener("click",bn=>{bn.preventDefault(),Te(yt)}),Pt.appendChild(Kt)}Pt.style.display="flex",re(0)}function Oe(){ze.style.height="auto",ze.style.height=`${Math.max(24,ze.scrollHeight)}px`}ze.addEventListener("pointerdown",()=>{Y.draggable=!1}),ze.addEventListener("pointerup",()=>{Y.draggable=!0}),ze.addEventListener("dragstart",ae=>{ae.preventDefault()}),Ct.addEventListener("change",fe(()=>(A.actionOutput=Ct.value,_e(),!0))),Pn.addEventListener("change",fe(()=>(A.actionOp=Pn.value,!0))),ze.addEventListener("input",()=>{F(),A.actionValueText=ze.value,Oe(),Ue(!0)}),an.addEventListener("change",fe(()=>{const ae=an.value;return ae?(Re(ae),an.value="",!0):!1})),sn.addEventListener("change",fe(()=>{const ae=String(sn.value||"");if(!ae)return!1;const be=ae.split(":"),Ge=String(be.length>1?be.slice(1).join(":"):be[0]).trim();if(!Ge)return sn.value="",!1;ze.value=Ge,A.actionValueText=Ge,Oe(),Ue(!0),ze.focus();const He=Ge.length;return ze.setSelectionRange(He,He),F(),sn.value="",!0})),un.addEventListener("change",fe(()=>{const ae=un.value;return ae?(Re(ae),un.value="",!0):!1})),ri.addEventListener("click",fe(()=>ze.value?(ze.value="",A.actionValueText="",Oe(),Ue(),ze.focus(),!0):!1)),ze.addEventListener("click",()=>Ue(!0)),ze.addEventListener("focus",()=>{F(),Oe(),Ue(!0)}),ze.addEventListener("keyup",()=>{F(),Ue(!0)}),ze.addEventListener("select",F),ze.addEventListener("keydown",fe(ae=>{const be=Pt.style.display!=="none"&&G.length>0;if(be&&ae.key==="ArrowDown")return ae.preventDefault(),re((V+1)%G.length),!1;if(be&&ae.key==="ArrowUp"){ae.preventDefault();const Ge=V<=0?G.length-1:V-1;return re(Ge),!1}if(be&&ae.key==="Enter"&&!ae.ctrlKey&&!ae.metaKey){ae.preventDefault();const Ge=V>=0?V:0,He=G[Ge];return He?(Te(He),!0):!1}return ae.key==="Enter"&&(ae.ctrlKey||ae.metaKey)?(ae.preventDefault(),A.actionValueText=ze.value,ze.blur(),!0):!1})),ze.addEventListener("blur",()=>{A.actionValueText=ze.value,F(),Y.draggable=!0,G=[],V=-1,setTimeout(()=>{Pt.style.display="none"},120),de()}),xn.append(Ct,Pn,ii),_e(),Oe();const Ie=ee("div","cp-rule-summary",{text:wv(A)}),et=ee("div","cp-rule-live"),rt=ee("span","cp-rule-live-chip cp-rule-live-chip-in"),ht=ee("span","cp-rule-live-key");ht.dataset.ruleUid=A._uid,ht.dataset.probeKind="in",ht.dataset.probeField="key";const st=ee("span","cp-rule-live-value");st.dataset.ruleUid=A._uid,st.dataset.probeKind="in",st.dataset.probeField="value",rt.append(ht,st);const Ne=ee("span","cp-rule-live-chip cp-rule-live-chip-out"),Me=ee("span","cp-rule-live-key");Me.dataset.ruleUid=A._uid,Me.dataset.probeKind="out",Me.dataset.probeField="key";const gt=ee("span","cp-rule-live-value");gt.dataset.ruleUid=A._uid,gt.dataset.probeKind="out",gt.dataset.probeField="value",Ne.append(Me,gt),et.append(rt,Ne);const qe=te==null?void 0:te.get(A._uid),Ut=(qe==null?void 0:qe.inKey)||A.actionOutput,Zt=(qe==null?void 0:qe.outKey)||A.actionOutput;ht.textContent=`${Ut} in`,Me.textContent=`${Zt} out`,st.textContent=ms(qe==null?void 0:qe.inValue),gt.textContent=ms(qe==null?void 0:qe.outValue);const At=ee("div","cp-rule-body");return At.append(ye,xn,et,Ie),xe&&(At.style.display="none"),Y.append(ce,At),Y}function v(A,O="",te=""){const B=ee("div","cp-rule-slot"),Y=ee("button","cp-rule-slot-add",{type:"button",text:"+"});return Y.title="Add rule here",Y.addEventListener("click",ce=>{ce.preventDefault(),ce.stopPropagation(),Je(A,O,te)}),B.addEventListener("dragover",ce=>{ce.preventDefault(),B.classList.add("cp-rule-slot-active")}),B.addEventListener("dragleave",()=>{B.classList.remove("cp-rule-slot-active")}),B.addEventListener("drop",ce=>{ce.preventDefault(),ce.stopPropagation(),B.classList.remove("cp-rule-slot-active"),Pe(A,O,te)}),B.appendChild(Y),B}function L(A,O="",te=""){const B=ee("div","cp-rule-lane"),Y=_c(g,z);if(A.length===0)return B.appendChild(v(g.length,O,te)),B;B.appendChild(v(A[0],O,te));for(const ce of A)B.appendChild(y(g[ce],ce,Y)),B.appendChild(v(ce+1,O,te));return B}function X(A,O="",te=""){A.addEventListener("dragover",B=>{B.preventDefault(),A.classList.add("cp-rule-dropzone-active")}),A.addEventListener("dragleave",()=>{A.classList.remove("cp-rule-dropzone-active")}),A.addEventListener("drop",B=>{B.preventDefault(),B.stopPropagation(),A.classList.remove("cp-rule-dropzone-active"),Pe(g.length,O,te)})}function Q(){a.innerHTML="";const A=ee("div","cp-rule-context-groups"),O=[{key:"spawnedParticles",label:"Particles",includes:new Set(["spawnedParticles","allParticles"])},{key:"background",label:"Background"},{key:"camera",label:"Camera"}];O.some(te=>te.key===P)||(P="spawnedParticles");for(const te of O){const B=[];for(let oe=0;oe<g.length;oe++){const ke=zs(g[oe]);(te.includes?te.includes.has(ke):ke===te.key)&&B.push(oe)}const Y=ee("div",`cp-group cp-open cp-rule-context-group${P===te.key?" cp-rule-group-selected":""}`),ce=ee("div","cp-group-header");ce.addEventListener("click",()=>{P=te.key,Q()}),ce.append(ee("span","cp-group-chevron",{text:"▾"}),ee("span","",{text:te.label}),ee("span","cp-group-count",{text:String(B.length)}));const xe=ee("div","cp-group-body cp-rule-group-body");xe.appendChild(L(B,te.key,"")),X(xe,te.key,""),Y.append(ce,xe),A.appendChild(Y)}a.appendChild(A)}_.addEventListener("click",()=>{Je(g.length,P,"")}),l.addEventListener("change",()=>{const A=String(l.value||"");A&&(c.value=lt(A))}),u.addEventListener("click",async()=>{await mt()}),f.addEventListener("click",async()=>{await Be(String(l.value||""))}),d.addEventListener("click",async()=>{const A=String(l.value||"");if(!A)return;const O=lt(A);confirm(`Delete single-rule preset "${O}"?`)&&(await Pu(A),await N(),c.value="")});const K=window.__seesoundRuleDeleteAbort;K&&typeof K.abort=="function"&&K.abort();const Ae=new AbortController;return window.__seesoundRuleDeleteAbort=Ae,document.addEventListener("keydown",A=>{A.defaultPrevented||(A.key==="Delete"||A.key==="Backspace")&&($e(A.target)||_t()&&(A.preventDefault(),A.stopPropagation()))},{signal:Ae.signal}),Wt={serialize:()=>g.map((A,O)=>Da(A,O)),addRow:A=>{g.push(Er(A||mc(g.length),g.length)),de()},replaceFromRuleBlocks:A=>{g=(Array.isArray(A)?A:[]).map(Er),x.clear(),w.length=0,R.clear(),C.clear(),U.clear(),E.clear(),M="",T=-1,h=-1,S=[],dt(),Q(),W({compileStatus:"stale",compileError:null})},renderCompileStatus:W},_r((A,O)=>{O!=="ruleBlocks"||p||Wt==null||Wt.replaceFromRuleBlocks(Array.isArray(se.ruleBlocks)?se.ruleBlocks:[])}),Q(),window.addEventListener("seesound:calculated-rule-inputs",A=>{var O;bv((O=A==null?void 0:A.detail)==null?void 0:O.calculatedInputs),Wt==null||Wt.replaceFromRuleBlocks(Array.isArray(se.ruleBlocks)?se.ruleBlocks:[])}),window.addEventListener("seesound:rule-probe",A=>{var B;z=((B=A==null?void 0:A.detail)==null?void 0:B.inputs)||Object.create(null);const O=_c(g,z),te=a.querySelectorAll("[data-rule-uid][data-probe-field]");for(const Y of te){const ce=Y.getAttribute("data-rule-uid"),xe=Y.getAttribute("data-probe-kind"),oe=Y.getAttribute("data-probe-field"),ke=O.get(ce);if(ke){if(oe==="key"){Y.textContent=xe==="out"?`${ke.outKey} out`:`${ke.inKey} in`;continue}Y.textContent=ms(xe==="out"?ke.outValue:ke.inValue)}}}),N(),de(),window.addEventListener("seesound:rule-compile-state",A=>W(A.detail||{})),Wt}function Nv(n){if(!n){console.warn("[ControlPanel] No container element found.");return}const e="seesound_settings_panel_width_v1";function t(g){const h=Math.max(220,Math.floor(window.innerWidth*.7));return Math.max(220,Math.min(h,Math.floor(Number(g)||220)))}let i=(()=>{try{const g=Number(localStorage.getItem(e));if(Number.isFinite(g)&&g>0)return t(g)}catch{}return t(n.getBoundingClientRect().width||280)})();function r(g,p=!1){const h=t(g),S=p?28:h;document.documentElement.style.setProperty("--panel-width",`${S}px`),window.dispatchEvent(new CustomEvent("seesound:panel-width",{detail:{width:S,expandedWidth:h,collapsed:!!p}}))}n.style.width=`${i}px`,r(i,!1);const s=ee("div","cp-header"),a=ee("div","cp-resize-handle",{title:"Drag to resize settings"}),o=ee("button","cp-collapse-btn",{text:"»",title:"Collapse panel"}),l=ee("span","cp-title",{text:"Parameters"}),c=ee("button","cp-reset-btn",{text:"↺",title:"Reset all to factory defaults"});s.append(l,c,o);const u=ee("div","cp-body");u.appendChild(pv()),u.appendChild(mv());for(let g=0;g<dc.length;g++){const p=dc[g],h=Li.filter(S=>S.group===p.id&&S.key!=="canvasWidth"&&S.key!=="canvasHeight"&&S.key!=="canvasScale"&&S.key!=="defaultBackgroundHue"&&S.key!=="defaultBackgroundSaturation"&&S.key!=="defaultBackgroundLightness");h.length!==0&&u.appendChild(gv(p,h,g<3))}Pv(u),n.append(a,s,u);let f=!1;o.addEventListener("click",()=>{f=!f,n.classList.toggle("cp-collapsed",f),f?(i=t(n.getBoundingClientRect().width||i),n.style.width="28px",r(i,!0)):(n.style.width=`${i}px`,r(i,!1)),o.textContent=f?"«":"»",l.style.display=f?"none":"",c.style.display=f?"none":"",u.style.display=f?"none":""});const d=window.__seesoundPanelResizeAbort;d&&typeof d.abort=="function"&&d.abort();const m=new AbortController;window.__seesoundPanelResizeAbort=m;let _=null;a.addEventListener("mousedown",g=>{f||(_={startX:g.clientX,startWidth:n.getBoundingClientRect().width},g.preventDefault())},{signal:m.signal}),window.addEventListener("mousemove",g=>{if(!_||f)return;const p=_.startX-g.clientX,h=t(_.startWidth+p);i=h,n.style.width=`${h}px`,r(h,!1)},{signal:m.signal}),window.addEventListener("mouseup",()=>{if(_){_=null;try{localStorage.setItem(e,String(i))}catch{}}},{signal:m.signal}),window.addEventListener("resize",()=>{f||(i=t(i),n.style.width=`${i}px`,r(i,!1))},{signal:m.signal}),c.addEventListener("click",()=>{var g;if(confirm("Reset all parameters to factory defaults?")){z_();for(const p of Li)(g=en.get(p.key))==null||g(se[p.key])}}),_r((g,p)=>{var h,S;if(p!=="ruleBlocks"){if(p==="*"||p==="disabled"){for(const T of Li)(h=en.get(T.key))==null||h(se[T.key]);return}(S=en.get(p))==null||S(se[p])}})}const Ou=()=>{},Rs=()=>{};function tn(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function ct(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?tn(e/255):tn(e):0}function Bu(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,s=parseInt(t.slice(4,6),16)/255;return[tn(i),tn(r),tn(s)]}function Lv(n){if(Array.isArray(n))return n.length<3?null:[ct(n[0]),ct(n[1]),ct(n[2])];if(typeof n=="string"){const e=Bu(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[ct(t[0]),ct(t[1]),ct(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[ct(n.r),ct(n.g),ct(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[ct(n.h),ct(n.s),ct(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[ct(n.hue),ct(n.saturation),ct(n.brightness)]}return null}function Fv(n,e,t){const i=Number(n),s=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,a=tn(e),o=tn(t),l=Math.floor(s*6),c=s*6-l,u=o*(1-a),f=o*(1-c*a),d=o*(1-(1-c)*a);switch(l%6){case 0:return[o,d,u];case 1:return[f,o,u];case 2:return[u,o,d];case 3:return[u,f,o];case 4:return[d,u,o];default:return[o,u,f]}}function Dv(n,e,t){const i=tn(n),r=tn(e),s=tn(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return[c,u,a]}function Cs(n){return Array.isArray(n)?n.length<3?null:[ct(n[0]),ct(n[1]),ct(n[2])]:typeof n=="string"?Bu(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[ct(n.rgb[0]),ct(n.rgb[1]),ct(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[ct(n.r),ct(n.g),ct(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[ct(n.h),ct(n.s),ct(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[ct(n.hue),ct(n.saturation),ct(n.brightness)]:null}function ku(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function Iv(n,e,t){const i=ku(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,a=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return Cs(i.colors[a])}function Uv(n,e,t){const i=ku(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return Cs(i.colors[0]);const s=tn(t)*(i.colors.length-1),a=Math.floor(s),o=Math.min(i.colors.length-1,a+1),l=s-a,c=Cs(i.colors[a]),u=Cs(i.colors[o]);return!c&&!u?null:c?u?[tn(c[0]+(u[0]-c[0])*l),tn(c[1]+(u[1]-c[1])*l),tn(c[2]+(u[2]-c[2])*l)]:c:u}const Ov=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[ct(n),ct(e),ct(t)],hsv:(n,e,t)=>[ct(n),ct(e),ct(t)],palette:(n,e,t)=>Iv(n,e,t),gradient:(n,e,t)=>Uv(n,e,t),matchLuma:(n,e,t,i)=>{const[r,s,a]=Nu(n,e,t,i);return[r/255,s/255,a/255]},hsvToRgbColor:(n,e,t)=>Fv(n,e,t),rgbToHsvColor:(n,e,t)=>Dv(n,e,t),toColorVector:n=>Lv(n)});function ea(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function gs(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function vc(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const Bv=new Set([">",">=","<","<=","==","!="]);let _s={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:Ou,applyLivingRules:Rs}};function xc(n,e){const t=ea(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)e.has(s)&&i.add(s);return[...i]}function vs(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of xc(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of xc(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Qo(n){return JSON.stringify(n)}function zu(n){const e=ea(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Qo(n.value)}function kv(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let s=0;s<n.length;s++){const a=n[s],o=s>0?n[s-1]:"";if(!r&&a==="'"&&o!=="\\"){i=!i;continue}if(!i&&a==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(a==="(")e++;else if(a===")")e=Math.max(0,e-1);else if(a==="[")t++;else if(a==="]")t=Math.max(0,t-1);else if(a===","&&e===0&&t===0)return!0}}return!1}function zv(n){const e=ea(n.expression);return e?kv(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Qo(n.value)}function bc(n,e){const t=zv(n),[i,r,s]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${s} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${s} = (target.${s} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${s} = (target.${s} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${s} = (target.${s} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${s} = (target.${s} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${s} = clamp((target.${s} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function Hv(n){const e=zu(n),t=["const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) {","const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","}","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function Vv(n){if(!n||n.operator==="always")return"true";const e=ea(n.expression);if(e)return`(${e})`;if(!Bv.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Qo(n.value??0);return`((${t}) ${n.operator} (${i}))`}function Gv(n){const e=n.output;if(e==="rgb")return bc(n,["red","green","blue"]);if(e==="hsv")return bc(n,["hue","saturation","brightness"]);if(e==="luma")return Hv(n);const t=zu(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Hs(n,e,t,i){const r=[],s=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const a of t)a==="deltaTime"||a==="time"||r.push(`  const ${a} = Number.isFinite(i.${a}) ? i.${a} : 0;`);return e.forEach(a=>{if(!a.enabled)return;const o=Vv(a.condition);r.push(`  // rule ${a.id}`),r.push(`  if (${o}) {`),s.push({ruleId:a.id,functionName:n,sourceLine:r.length+1});for(const l of a.actions??[])r.push(`    ${Gv(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:s}}function Wv(n,e){return Hs("applySpawnRules",n,e,!1)}function Xv(n,e){return Hs("applyLivingRules",n,e,!0)}function $v(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function yc(n,e){const t=performance.now(),i=Mu(n,e),s=[...i.ruleBlocks].sort((x,w)=>(x.order??0)-(w.order??0)),a=s.filter(x=>x.target==="spawnedParticles"),o=s.filter(x=>x.target==="allParticles"),l=s.filter(x=>x.target==="background"),c=s.filter(x=>x.target==="camera"),u=$v(s);if(_s.hash===u)return _s.result;const f=bu().entries.map(x=>x.id),d=new Set(f),m={spawnedParticles:vs(a,d),allParticles:vs(o,d),background:vs(l,d),camera:vs(c,d)},_=[...new Set([...m.spawnedParticles,...m.allParticles,...m.background,...m.camera])],g=Wv(a,f),p=Xv(o,f),h=Hs("applyBackgroundRules",l,f,!0),S=Hs("applyCameraRules",c,f,!0),T=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",g.source,p.source,h.source,S.source,"return { applySpawnRules, applyLivingRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const w=new Function("helpers",T)(Ov),R={hash:u,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:gs([...a,...o]),usesBackgroundHsb:gs(l),usesLivingShapeType:vc(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:m,requiredInputs:_,lineMap:[...g.lineMap,...p.lineMap,...h.lineMap,...S.lineMap],source:T,applySpawnRules:typeof w.applySpawnRules=="function"?w.applySpawnRules:Ou,applyLivingRules:typeof w.applyLivingRules=="function"?w.applyLivingRules:Rs,applyBackgroundRules:typeof w.applyBackgroundRules=="function"?w.applyBackgroundRules:Rs,applyCameraRules:typeof w.applyCameraRules=="function"?w.applyCameraRules:Rs};return _s={hash:u,result:R},R}catch(x){const w=Number.isFinite(x==null?void 0:x.lineNumber)?Number(x.lineNumber):null;return{..._s.result,hash:u,compileStatus:"error",compileError:(x==null?void 0:x.message)||String(x),compileLine:w,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:gs([...a,...o]),usesBackgroundHsb:gs(l),usesLivingShapeType:vc(o,"shapeType"),requiredInputsByTarget:m,requiredInputs:_,lineMap:[...g.lineMap,...p.lineMap,...h.lineMap,...S.lineMap],source:T,rejected:i.rejected}}}const el=16,No=2e4,Mc=Math.log2(el),qv=Math.log2(No),Yv=16,Sc=16e3,jv=10;function Ia(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,el))-Mc)/(qv-Mc)))}function Bt(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return Number.isFinite(s)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?Qe(s):Qe((s-i)/(r-i)):0}function Ec(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function Qe(n){return Math.max(0,Math.min(1,n))}function Ps(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function Hu(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function Zv(n){const e=Hu(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function Kv(n){const e=Hu(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function xs(n,e,t){const i=Qe(n),r=Qe(e),s=Qe(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function Ua(n,e,t){const i=Ps(n)??0,r=Qe(e),s=Qe(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const Jv=`
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
`,Qv=`
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
`;class e0{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0;const i=new Rn;this._geo=i,this._allocateBuffers(this._N);const r=new ti({vertexShader:Jv,fragmentShader:Qv,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:er});this._mesh=new Uh(i,r),this._mesh.frustumCulled=!1,e.add(this._mesh),this._mat=r,this._lastBlending=r.blending,this._background=new pt(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null},this._compiledRules=yc([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._aPos=new qt(this._pos,3),this._aCol=new qt(this._col,3),this._aSz=new qt(this._sz,1),this._aAlpha=new qt(this._alpha,1),this._aShape=new qt(this._shape,1);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape])t.setUsage(Hd);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u],this._pan[i-r-o+c]=a.pan?a.pan[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let s=0;s<r;s++)i.sz[s]=Math.max(0,i.sz[s]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=yc(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=Zv(i),s=Kv(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number(t.deltaTime)||0,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?Qe(t.binMagnitude):0,binFreq:Number.isFinite(t.binFreq)?Number(t.binFreq):Number(t.frequencyHz)||0,binPhase:Number.isFinite(t.binPhase)?Qe(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?Qe(t.binPhaseDeviation):0,binPhasedeviation:Number.isFinite(t.binPhasedeviation)?Qe(t.binPhasedeviation):Number.isFinite(t.binPhaseDeviation)?Qe(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?Qe(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?Qe(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?Qe(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,canvasBoundaryLeft:Number(t.canvasBoundaryLeft)||0,canvasBoundaryRight:Number(t.canvasBoundaryRight)||0,canvasBoundaryTop:Number(t.canvasBoundaryTop)||0,canvasBoundaryBottom:Number(t.canvasBoundaryBottom)||0,audioLengthSec:Number(t.audioLengthSec)||0,binEnergy:Number.isFinite(t.binEnergy)?Qe(Number(t.binEnergy)):Number.isFinite(t.binMagnitude)?Qe(Number(t.binMagnitude)):0,frequencyHz:i,notePitchClass:r,octave:s,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new k,max:new k,center:new k,size:new k};const t=new k(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new k(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let a=0;a<e;a++){const o=this._pos[a*3],l=this._pos[a*3+1],c=this._pos[a*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),s=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:s}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],r:this._col[c*3],g:this._col[c*3+1],b:this._col[c*3+2],a:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];const f=Number.isFinite(u.red)?u.red:u.r,d=Number.isFinite(u.green)?u.green:u.g,m=Number.isFinite(u.blue)?u.blue:u.b,_=Number.isFinite(u.opacity)?u.opacity:u.a;let g=Number.isFinite(f)?Qe(f):this._col[c*3],p=Number.isFinite(d)?Qe(d):this._col[c*3+1],h=Number.isFinite(m)?Qe(m):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const S=xs(g,p,h),T=Ps(u.hue),x=Number.isFinite(u.saturation)?Qe(u.saturation):S.s,w=Number.isFinite(u.brightness)?Qe(u.brightness):S.v,R=Ua(T??S.h,x,w);g=R.r,p=R.g,h=R.b}this._col[c*3]=g,this._col[c*3+1]=p,this._col[c*3+2]=h,this._alpha[c]=Number.isFinite(_)?Math.max(0,Math.min(1,_)):this._alpha[c],this._shape[c]=Ec(u.shapeType),l++}return l}applyBackgroundRules(e){const t=this._background,i=xs(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v,backgroundRed:t.r,backgroundGreen:t.g,backgroundBlue:t.b};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?Qe(r.red):t.r,a=Number.isFinite(r.green)?Qe(r.green):t.g,o=Number.isFinite(r.blue)?Qe(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=xs(s,a,o),c=Ps(r.hue),u=Number.isFinite(r.saturation)?Qe(r.saturation):l.s,f=Number.isFinite(r.brightness)?Qe(r.brightness):l.v,d=Ua(c??l.h,u,f);s=d.r,a=d.g,o=d.b}t.setRGB(s,a,o)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null}}update(e,t,i,r){var Ct,Pn,ii,ze,Nn,sn,an,un,ri,Pt,Ii,Ui;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((Ct=e.ctx)==null?void 0:Ct.sampleRate)??44100)/2,f=t.persistMode??0,d=t.inputGain??1,m=t.amplitudeThreshold??-48,_=Math.max(0,Math.min(255,Math.round(Math.pow(10,m/20)*255))),g=t.defaultParticleSize??6,p=Math.max(el,Math.min(No,Number(t.freqNormMin??40))),h=Math.max(p+1,Math.min(No,Number(t.freqNormMax??12e3))),S=Ia(p),T=Ia(h),x=Number(t.binMagnitudeNormMin??-70),w=Number(t.binMagnitudeNormMax??0),R=Number(t.binFluxNormMin??0),C=Number(t.binFluxNormMax??.5),U=Number(t.binPhaseDeviationNormMin??0),E=Number(t.binPhaseDeviationNormMax??Math.PI),M=Number(t.binAttackTimeNormMin??5),P=Number(t.binAttackTimeNormMax??500),J=Number(t.globalRmsNormMin??-60),$=Number(t.globalRmsNormMax??0),z=Number(t.spectralCentroidNormMin??150),j=Number(t.spectralCentroidNormMax??8e3),Z=Number(t.globalSpectralFluxNormMin??0),ue=Number(t.globalSpectralFluxNormMax??100),W=Number(t.spectralFlatnessNormMin??0),de=Number(t.spectralFlatnessNormMax??1),fe=Number(t.particleRenderPercent),Se=Number.isFinite(fe)?Math.max(1,Math.min(100,Math.floor(fe))):100,Xe=Number(t.fftSize),dt=Number.isFinite(Xe)?Math.max(1024,Math.min(16384,Xe)):2048,ne=Bt(dt,1024,16384),le=Number(t.particlesPerOctave),Fe=Number.isFinite(le)?Math.max(10,Math.min(500,Math.round(le))):100,he=Math.max(1,jv*Fe),De=t.blendMode??"screen",$e=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,We=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,_t=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,Ze=!!(e.analyserL&&e.analyserR&&e.getBinPan),lt=((Pn=e.getBinMagnitude)==null?void 0:Pn.call(e))||null,N=((ii=e.getBinFlux)==null?void 0:ii.call(e))||null,mt=((ze=e.getBinPhaseDeviation)==null?void 0:ze.call(e))||null,Be=((Nn=e.getBinPhase)==null?void 0:Nn.call(e))||null,Ve=((sn=e.getBinEnvelope)==null?void 0:sn.call(e))||null,Pe=((an=e.getBinAttackTime)==null?void 0:an.call(e))||null;new Set(((ri=(un=this._compiledRules)==null?void 0:un.requiredInputsByTarget)==null?void 0:ri.spawnedParticles)||[]);const Je=new Set(((Pt=this._compiledRules)==null?void 0:Pt.requiredInputs)||[]),q=Je.has("binMagnitude")||Je.has("binEnergy"),y=Je.has("binFreq"),v=Je.has("binPhase"),L=Je.has("binFlux"),X=Je.has("binPhaseDeviation")||Je.has("binPhasedeviation"),Q=Je.has("binAttackTime"),K=Je.has("binEnvelope")||Je.has("binEnvelopeState"),Ae=(_e,Ye)=>{const b=Se;if(_e*b%100>=b)return!1;const I=Ye>1?_e/(Ye-1):0,G=ne*Math.pow(I,1.35)*.75,V=Math.max(5,Math.min(100,b*(1-G)));return _e*97%100<V};if(De==="alpha"){const _e=this._mat;(_e.blending!==za||_e.blendSrc!==Pr||_e.blendDst!==Nr||_e.blendEquation!==qn)&&(_e.blending=za,_e.blendSrc=Pr,_e.blendDst=Nr,_e.blendEquation=qn,_e.needsUpdate=!0,this._lastBlending=_e.blending)}else{const Ye={screen:er,lighter:er,"source-over":pi,multiply:pi}[De]??er;Ye!==this._lastBlending&&(this._mat.blending=Ye,this._mat.needsUpdate=!0,this._lastBlending=Ye)}const A=Number(t.cameraCanvasWidthUnits),O=Number(t.cameraCanvasHeightUnits),te=Number.isFinite(A)&&A>0?A:i,B=Number.isFinite(O)&&O>0?O:r,Y=($e%360+360)%360;this._background.setHSL(Y/360,Qe(We/100),Qe(_t/100));const ce=te/2,xe=B/2,oe=Number.isFinite(Number(t.cameraCanvasBoundaryLeft))?Number(t.cameraCanvasBoundaryLeft):-ce,ke=Number.isFinite(Number(t.cameraCanvasBoundaryRight))?Number(t.cameraCanvasBoundaryRight):ce,me=Number.isFinite(Number(t.cameraCanvasBoundaryTop))?Number(t.cameraCanvasBoundaryTop):xe,Ke=Number.isFinite(Number(t.cameraCanvasBoundaryBottom))?Number(t.cameraCanvasBoundaryBottom):-xe,D=((Ii=e.audioEl)==null?void 0:Ii.currentTime)??0,pe=((Ui=e.audioEl)==null?void 0:Ui.duration)??0,H={binMagnitude:0,binFreq:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binPhasedeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:Bt(e.rmsDbfs,J,$),binRMSEnergy:Bt(e.rmsDbfs,J,$),spectralCentroid:Bt(e.spectralCentroidHz,z,j),spectralFlux:Bt(e.spectralFluxAU,Z,ue),spectralFlatness:Bt(e.spectralFlatnessRatio,W,de),inharmonicity:Qe(e.inharmonicity),peakAmplitude:Qe(e.peakAmplitude),zeroCrossingRate:Qe(e.zeroCrossingRate),spectralRolloff:Qe(e.spectralRolloff),spectralSpread:Qe(e.spectralSpread),spectralSkewness:Qe(e.spectralSkewness),chromagram:Qe(e.chromagram)};if(H.amplitude=H.globalRmsEnergy,q&&lt&&lt.length>0){let _e=0;for(let Ye=0;Ye<lt.length;Ye++)_e+=Bt(lt[Ye],x,w);H.binMagnitude=_e/lt.length}if(L&&N&&N.length>0){let _e=0;for(let Ye=0;Ye<N.length;Ye++)_e+=Bt(N[Ye],R,C);H.binFlux=_e/N.length}if(X&&mt&&mt.length>0){let _e=0;for(let b=0;b<mt.length;b++)_e+=Bt(mt[b],U,E);const Ye=_e/mt.length;H.binPhaseDeviation=Ye,H.binPhasedeviation=Ye}if(Q&&Pe&&Pe.length>0){let _e=0;for(let Ye=0;Ye<Pe.length;Ye++)_e+=Bt(Pe[Ye],M,P);H.binAttackTime=_e/Pe.length}if(K&&Ve&&Ve.length>0){let _e=0;for(let Ye=0;Ye<Ve.length;Ye++)_e+=Ve[Ye];H.binEnvelope=_e/Ve.length,H.binEnvelopeState=H.binEnvelope}if(y&&(H.binFreq=e.peakFreq??0),v&&Be&&Be.length>0){let _e=0;for(let Ye=0;Ye<Be.length;Ye++)_e+=Bt(Be[Ye],-Math.PI,Math.PI);H.binPhase=_e/Be.length}let ie=0;for(let _e=0;_e<l;_e++)o[_e]>ie&&(ie=o[_e]);const ye=Math.max(1,Math.round(ie*.55)),ge=Math.min(_,ye);let we=f===1?this._paintCount:0;const at=(_e,Ye=1)=>{if(we>=this._N&&f===1){const Ge=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),He=this._archiveAndCompactOldest(Ge,we,t,D);we=Math.max(0,we-He)}if(we>=this._N)return;const b=_e.hz,I=Ia(b),G=Bt(I,S,T),V=Number.isFinite(_e.binPan)?_e.binPan:e.pan??0;Number.isFinite(_e.byte)&&_e.byte;const F=Number.isFinite(_e.energy)?_e.energy:0,re=Number.isFinite(_e.binMagnitude)?_e.binMagnitude:void 0,ve=y?b:void 0,Te=Number.isFinite(_e.binPhase)?_e.binPhase:void 0,Re=Number.isFinite(_e.binFlux)?_e.binFlux:void 0,Ue=Number.isFinite(_e.binPhaseDeviation)?_e.binPhaseDeviation:void 0,Oe=Number.isFinite(_e.binAttackTime)?_e.binAttackTime:void 0,Ie=Number.isFinite(_e.binEnvelope)?_e.binEnvelope:void 0,et=(G*2-1)*xe,rt=0,ht=0,st=Qe(F),Ne={x:rt,y:et,z:ht,size:Math.max(1,g*(.5+F*1.5)),red:st,green:st,blue:st,opacity:Math.min(1,(.08+F*1.9)*Ye),r:st,g:st,b:st,a:Math.min(1,(.08+F*1.9)*Ye),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({inputs:this._buildRuleInputs(e,{binEnergy:F,frequencyHz:b,normFreq:G,pan:V,spectralCentroid:H.spectralCentroid,spectralFlux:H.spectralFlux,spectralFlatness:H.spectralFlatness,inharmonicity:H.inharmonicity,peakAmplitude:H.peakAmplitude,zeroCrossingRate:H.zeroCrossingRate,spectralRolloff:H.spectralRolloff,spectralSpread:H.spectralSpread,spectralSkewness:H.spectralSkewness,chromagram:H.chromagram,binMagnitude:re,binFreq:ve,binPhase:Te,binFlux:Re,binPhaseDeviation:Ue,binAttackTime:Oe,binEnvelope:Ie,binEnvelopeState:Ie,binRMSEnergy:H.binRMSEnergy,globalRmsEnergy:H.globalRmsEnergy,amplitude:H.amplitude,time:D,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:te,canvasHeightUnits:B,canvasBoundaryLeft:oe,canvasBoundaryRight:ke,canvasBoundaryTop:me,canvasBoundaryBottom:Ke,audioLengthSec:pe}),particle:Ne});const Me=Number.isFinite(Ne.particleCount)?Qe(Ne.particleCount):1;if(Me<=0||Me<1&&Math.random()>Me)return;this._pos[we*3]=Number.isFinite(Ne.x)?Ne.x:rt,this._pos[we*3+1]=Number.isFinite(Ne.y)?Ne.y:et,this._pos[we*3+2]=Number.isFinite(Ne.z)?Ne.z:ht,this._sz[we]=Number.isFinite(Ne.size)?Math.max(0,Ne.size):Math.max(2,g);const gt=Number.isFinite(Ne.red)?Ne.red:Ne.r,qe=Number.isFinite(Ne.green)?Ne.green:Ne.g,Ut=Number.isFinite(Ne.blue)?Ne.blue:Ne.b,Zt=Number.isFinite(Ne.opacity)?Ne.opacity:Ne.a;let At=Number.isFinite(gt)?Qe(gt):st,ae=Number.isFinite(qe)?Qe(qe):st,be=Number.isFinite(Ut)?Qe(Ut):st;if(this._compiledRules.usesParticleHsb){const Ge=xs(At,ae,be),He=Ps(Ne.hue),bt=Number.isFinite(Ne.saturation)?Qe(Ne.saturation):Ge.s,yt=Number.isFinite(Ne.brightness)?Qe(Ne.brightness):Ge.v,Kt=Ua(He??Ge.h,bt,yt);At=Kt.r,ae=Kt.g,be=Kt.b}this._col[we*3]=At,this._col[we*3+1]=ae,this._col[we*3+2]=be,this._alpha[we]=Number.isFinite(Zt)?Math.max(0,Math.min(1,Zt)):Math.min(1,(.08+F*1.9)*Ye),this._shape[we]=Ec(Ne.shapeType),this._pan[we]=Number.isFinite(V)?Math.max(-1,Math.min(1,V)):0,we++},ot=o.length/Math.max(1e-6,u),it=_e=>Yv*Math.pow(2,_e/Fe),Rt=_e=>{const Ye=Math.floor(_e*ot);return Math.max(0,Math.min(l-1,Ye))},zt=new Float32Array(he),jt=new Uint8Array(he),xn=new Float32Array(he);for(let _e=0;_e<he;_e++){if(!Ae(_e,he))continue;const Ye=it(_e);if(Ye>=Sc)continue;const b=Math.min(Sc,it(_e+1)),I=Math.sqrt(Ye*b);if(!(I>=p&&I<=h))continue;const G=Rt(Ye),V=Rt(b);if(V<G)continue;let F=0,re=0,ve=0,Te=0,Re=0,Ue=0,Oe=0,Ie=0,et=0,rt=0,ht=0;for(let Me=G;Me<=V;Me++){const gt=o[Me],qe=lt&&Me<lt.length?Bt(lt[Me],x,w):gt/255;ve+=qe,q&&(Ue+=qe),v&&Be&&Me<Be.length&&(Oe+=Bt(Be[Me],-Math.PI,Math.PI)),L&&N&&Me<N.length&&(Ie+=Bt(N[Me],R,C)),X&&mt&&Me<mt.length&&(et+=Bt(mt[Me],U,E)),Q&&Pe&&Me<Pe.length&&(rt+=Bt(Pe[Me],M,P)),K&&Ve&&Me<Ve.length&&(ht+=Bt(Ve[Me]/3,0,1));const Ut=Ze?e.getBinPan(Me):e.pan??0,Zt=Math.max(1,gt);Te+=Ut*Zt,Re+=Zt,gt>re&&(re=gt),F++}if(F<=0||re<=ge)continue;const Ne=ve/F*d;if(zt[_e]=Ne,jt[_e]=re,xn[_e]=I,at({hz:I,byte:re,energy:Ne,binPan:Re>0?Te/Re:0,binMagnitude:q?Ue/F:void 0,binPhase:v?Oe/F:void 0,binFlux:L?Ie/F:void 0,binPhaseDeviation:X?et/F:void 0,binAttackTime:Q?rt/F:void 0,binEnvelope:K?ht/F:void 0}),we>=this._N)break}if(we===0&&ie>0){const _e=[];for(let b=0;b<he;b++)Ae(b,he)&&xn[b]>=p&&xn[b]<=h&&jt[b]>0&&_e.push(b);_e.sort((b,I)=>jt[I]-jt[b]);const Ye=Math.min(96,_e.length);for(let b=0;b<Ye&&we<this._N;b++){const I=_e[b],G=jt[I],V=zt[I],F=Math.max(.08,V);at({hz:xn[I],byte:G,energy:F,binPan:e.pan??0},.85)}}f===1?(this._paintCount=we,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._pruneArchive(t,D)):(this._paintCount=0,this._visibleCount=we,this._geo.setDrawRange(0,we)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...H,time:D,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:te,canvasHeightUnits:B,canvasBoundaryLeft:oe,canvasBoundaryRight:ke,canvasBoundaryTop:me,canvasBoundaryBottom:Ke,audioLengthSec:pe})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...H,time:D,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:te,canvasHeightUnits:B,canvasBoundaryLeft:oe,canvasBoundaryRight:ke,canvasBoundaryTop:me,canvasBoundaryBottom:Ke,audioLengthSec:pe})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...H,time:D,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:te,canvasHeightUnits:B,canvasBoundaryLeft:oe,canvasBoundaryRight:ke,canvasBoundaryTop:me,canvasBoundaryBottom:Ke,audioLengthSec:pe})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;this._aPos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose()}}const t0="http://localhost:8000",n0="audio/wav",i0=new Set(["m4a","aac","flac","alac","aiff"]);function r0(n){const e=String(n||"").lastIndexOf(".");return e<0?"":n.slice(e+1).toLowerCase()}function s0(n,e){const t=String(n).replace(/[\\/:*?"<>|]+/g,"_"),i=t.lastIndexOf(".");return i<0?`${t}.${e}`:`${t.slice(0,i)}.${e}`}function a0(n){const e=r0(n==null?void 0:n.name);return e?i0.has(e):!1}async function o0(n){const e=new FormData;e.append("file",n);const t=await fetch(`${t0}/api/audio/convert`,{method:"POST",body:e});if(!t.ok){const s=await t.text().catch(()=>"");throw new Error(s||`Audio conversion failed (${t.status}).`)}const i=await t.blob();if(!i||i.size===0)throw new Error("Converted audio is empty.");const r=s0((n==null?void 0:n.name)||"audio","wav");return new File([i],r,{type:n0})}function Ki(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Lt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function l0(n){if(!n){console.warn("[AudioPlayer] No container element.");const z=new Audio;return z.crossOrigin="anonymous",{audioEl:z,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Lt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=Lt("div","audio-player__body"),a=Lt("div","audio-player__file-row"),o=Lt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});o.style.display="none";const l=Lt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});l.textContent="♫";const c=Lt("span","audio-player__file-name",{text:"No file loaded"});a.append(o,l);const u=Lt("div","audio-player__transport"),f=Lt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});f.textContent="▶";const d=Lt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});d.textContent="■";const m=Lt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});m.textContent="<<";const _=Lt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});_.textContent=">>";const g=Lt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});g.textContent="PNG";const p=Lt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});p.textContent="PAINT ALL";const h=Lt("div","audio-player__speed-wrap"),S=Lt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),T=Lt("span","audio-player__speed-suffix",{text:"x"});h.append(S,T),u.append(f,d,m,_,g,p,h);const x=Lt("div","audio-player__progress-row"),w=Lt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function R(z){w.style.background=`linear-gradient(90deg, var(--color-accent) ${z}%, var(--color-border) ${z}%)`}R(0);const C=Lt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),U=Lt("div","audio-player__progress-meta");U.append(c,C),x.append(w,U),s.append(a,u,x),n.append(r,s);function E(z,j=""){o.disabled=z,f.disabled=z||!e.src,d.disabled=z||!e.src,m.disabled=z||!e.src,_.disabled=z||!e.src,p.disabled=z||!e.src,S.disabled=z||!e.src,z&&j&&(c.textContent=j)}function M(z){const j=Math.max(.1,Math.min(16,Number(z)));Number.isFinite(j)&&(e.playbackRate=j,S.value=String(Number(j.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:j},bubbles:!0})))}function P(z,j=(z==null?void 0:z.name)||"Audio loaded"){z&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(z),e.load(),c.textContent=j,t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),w.value="0",R(0),C.textContent="0:00 / –:––",J(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:z,audioEl:e},bubbles:!0})))}function J(){f.disabled=!1,d.disabled=!1,m.disabled=!1,_.disabled=!1,p.disabled=!1,S.disabled=!1}o.addEventListener("change",async z=>{const j=z.target.files[0];if(j){E(!0,`Loading ${j.name}...`);try{const Z=a0(j)?await(async()=>(c.textContent=`Converting ${j.name}...`,o0(j)))():j;P(Z,Z.name)}catch(Z){console.warn("[AudioPlayer] conversion failed, using original file:",Z),P(j,j.name)}finally{E(!1),o.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(z){console.warn("[AudioPlayer] play() failed:",z.message)}}),e.addEventListener("play",()=>{t=!0,f.textContent="⏸︎",f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active")}),d.addEventListener("click",()=>{e.pause(),e.currentTime=0,w.value="0",R(0),C.textContent=`0:00 / ${Ki(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),m.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),_.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),g.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),p.addEventListener("click",()=>{p.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",z=>{var Z;const j=!!((Z=z==null?void 0:z.detail)!=null&&Z.running);p.disabled=j||!e.src,S.disabled=j||!e.src,p.textContent=j?"PAINTING...":"PAINT ALL"}),S.addEventListener("keydown",z=>{z.key==="Enter"&&(z.preventDefault(),M(S.value),S.blur())});let $=!1;return w.addEventListener("mousedown",()=>{$=!0}),w.addEventListener("touchstart",()=>{$=!0},{passive:!0}),w.addEventListener("input",()=>{const z=parseFloat(w.value);R(z),e.duration&&(C.textContent=`${Ki(e.duration*z/100)} / ${Ki(e.duration)}`)}),w.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(w.value)/100*e.duration),$=!1}),e.addEventListener("timeupdate",()=>{if($)return;const z=e.currentTime,j=e.duration;if(!isFinite(j)||j===0)return;const Z=z/j*100;w.value=String(Z),R(Z),C.textContent=`${Ki(z)} / ${Ki(j)}`}),e.addEventListener("loadedmetadata",()=>{C.textContent=`0:00 / ${Ki(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),r.textContent=i?"»":"«",r.title=i?"Expand player":"Collapse player"}),{audioEl:e,getIsPlaying:()=>t}}function Oa(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function c0({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=Oa("div","canvas-wrapper__resize-handle-right"),a=Oa("div","canvas-wrapper__resize-handle-bottom"),o=Oa("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(d,m,_){d.preventDefault();const g=d.touches?d.touches[0].clientX:d.clientX,p=d.touches?d.touches[0].clientY:d.clientY;l={type:m,startX:g,startY:p,startW:n.clientWidth,startH:n.clientHeight,handle:_},_.classList.add("dragging"),document.body.style.cursor=m==="right"?"ew-resize":m==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(d){if(!l)return;const m=d.touches?d.touches[0].clientX:d.clientX,_=d.touches?d.touches[0].clientY:d.clientY,g=m-l.startX,p=_-l.startY,h=160,S=120,T=e.getBoundingClientRect();let x=l.startW,w=l.startH;(l.type==="right"||l.type==="corner")&&(x=Math.max(h,Math.min(l.startW+g,T.width-4))),(l.type==="bottom"||l.type==="corner")&&(w=Math.max(S,Math.min(l.startH+p,window.innerHeight-4)));const R=i>0?x/i:1,C=r>0?w/r:1;i=x,r=w,n.style.width=`${x}px`,n.style.height=`${w}px`,t(x,w,R,C)}function f(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",d=>c(d,"right",s)),a.addEventListener("mousedown",d=>c(d,"bottom",a)),o.addEventListener("mousedown",d=>c(d,"corner",o)),s.addEventListener("touchstart",d=>c(d,"right",s),{passive:!1}),a.addEventListener("touchstart",d=>c(d,"bottom",a),{passive:!1}),o.addEventListener("touchstart",d=>c(d,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",f),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",f),window.addEventListener("resize",()=>{if(!n.style.width){const d=e.clientWidth,m=e.clientHeight,_=i>0?d/i:1,g=r>0?m/r:1;i=d,r=m,t(d,m,_,g)}}),{setSize(d,m){const _=i>0?d/i:1,g=r>0?m/r:1;i=d,r=m,n.style.width=`${d}px`,n.style.height=`${m}px`,t(d,m,_,g)},getSize(){return{w:i,h:r}}}}function On(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function tl(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function u0(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return On(i/t)}function d0(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return On(r/Math.max(s,e))}function h0(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const f=n[u];if(!(f<r)&&f>=n[u-1]&&f>=n[u+1]){const d=u/Math.max(1,t-1)*i;s.push({i:u,hz:d,mag:f/255})}}if(s.length<2)return 0;s.sort((u,f)=>f.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const f=a[u],m=Math.max(1,Math.round(f.hz/o))*o,_=Math.abs(f.hz-m)/Math.max(m,1e-9);l+=_*f.mag,c+=f.mag}return c<=1e-9?0:On(l/c*2)}function f0(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return On(e/255)}function p0(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return On(e/Math.max(1,n.length-1))}function m0(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let a=0;for(let c=0;c<i;c++)a+=Math.max(0,n[c]/255);if(a<=1e-9)return 0;const o=a*s;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const u=c/Math.max(1,i-1)*r;return On(u/Math.max(1,r))}return 1}function Vu(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Number.isFinite(t)?t:tl(n,e);let a=0,o=0;for(let c=0;c<i;c++){const u=Math.max(0,n[c]/255),d=c/Math.max(1,i-1)*r-s;o+=d*d*u,a+=u}if(a<=1e-9)return 0;const l=Math.sqrt(o/a);return On(l/Math.max(1,r))}function g0(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,s=e/2,a=Number.isFinite(t)?t:tl(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*s):Math.max(1e-6,Vu(n,e,a)*s);let l=0,c=0;for(let f=0;f<r;f++){const d=Math.max(0,n[f]/255),_=(f/Math.max(1,r-1)*s-a)/o;c+=_*_*_*d,l+=d}if(l<=1e-9)return 0;const u=c/l;return On((u+2)/4)}function _0(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let s=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const u=69+12*Math.log2(c/440),f=(Math.round(u)%12+12)%12;r[f]+=l,s+=l}if(s<=1e-9)return 0;let a=0;for(let o=0;o<12;o++)r[o]>a&&(a=r[o]);return On(a/s)}function v0(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return On((Number.isFinite(n)?n:0)/t)}const ta=document.getElementById("three-canvas"),Ir=document.getElementById("canvas-wrapper"),Un=document.getElementById("canvas-col"),Et=new gu({canvas:ta,antialias:!0});Et.setPixelRatio(window.devicePixelRatio);Et.setClearColor(0,1);Et.autoClear=!0;const Ur=new Ph,Gu=new zh(180);Gu.userData.excludeFromPng=!0;Ur.add(Gu);const kt=new uu(-1,1,1,-1,.001,5e3),fn=new pn(55,1,.001,5e3);let Le=kt;const Ft=new k(0,0,0),nl=new k(0,0,420),Tc=nl.length();for(const n of[kt,fn])n.position.copy(nl),n.up.set(0,1,0),n.lookAt(Ft);function il(){const e=se.cameraProjection==="perspective"?fn:kt;e!==Le&&(e.position.copy(Le.position),e.quaternion.copy(Le.quaternion),e.up.copy(Le.up),e.zoom=Le.zoom,e.lookAt(Ft),e.updateProjectionMatrix(),Le=e,ni())}const St={radius:420,azimuth:0,elevation:0};function ni(){const n=Le.position.x-Ft.x,e=Le.position.y-Ft.y,t=Le.position.z-Ft.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);St.radius=i,St.azimuth=Math.atan2(n,t),St.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function Vs(){const n=Math.cos(St.elevation);Le.position.set(Ft.x+St.radius*n*Math.sin(St.azimuth),Ft.y+St.radius*Math.sin(St.elevation),Ft.z+St.radius*n*Math.cos(St.azimuth)),Le.lookAt(Ft)}function Wu(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Xu(){Ft.set(0,0,0);const n=Math.max(1,Et.domElement.clientWidth||Un.clientWidth||window.innerWidth),e=Math.max(1,Et.domElement.clientHeight||Un.clientHeight||window.innerHeight);sl(n,e);for(const t of[kt,fn])t.position.copy(nl),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(Ft),t.updateProjectionMatrix();il(),rl(!0),ni()}function rl(n=!1){if(se.cameraProjection==="perspective")return;const e=String(se.cameraAxoPreset||"orthoXY"),t=n?Tc:Math.max(40,Number(St.radius)||Tc),{azimuth:i,elevation:r}=Wu(e);St.radius=t,St.azimuth=i,St.elevation=r,Vs(),ni()}ni();const Qt={active:!1,button:-1,lastX:0,lastY:0};ta.addEventListener("contextmenu",n=>n.preventDefault());ta.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(Qt.active=!0,Qt.button=n.button,Qt.lastX=n.clientX,Qt.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{Qt.active=!1,Qt.button=-1});window.addEventListener("mousemove",n=>{if(!Qt.active)return;const e=n.clientX-Qt.lastX,t=n.clientY-Qt.lastY;if(Qt.lastX=n.clientX,Qt.lastY=n.clientY,Qt.button===0)St.azimuth-=e*.006,St.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,St.elevation-t*.005)),Vs();else if(Qt.button===1){const i=Math.max(1,Et.domElement.clientHeight||Un.clientHeight||window.innerHeight),r=new k,s=new k,a=new k;Le.updateMatrixWorld();const o=Le.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Le.isOrthographicCamera)l=(Le.top-Le.bottom)/(Math.max(.01,Le.zoom)*i);else{const c=Math.max(.001,Le.position.distanceTo(Ft)),u=Vo.degToRad(Le.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Le.zoom)}a.copy(r).multiplyScalar(-e*l),a.addScaledVector(s,t*l),Le.position.add(a),Ft.add(a),ni()}else if(Qt.button===2){const i=-e*.004,r=-t*.004;Le.rotateOnWorldAxis(new k(0,1,0),i),Le.rotateX(r)}});ta.addEventListener("wheel",n=>{if(n.preventDefault(),Le.isPerspectiveCamera){const e=new k;Le.getWorldDirection(e);const t=Math.max(2,St.radius*.08),i=(n.deltaY>0?1:-1)*t;Le.position.addScaledVector(e,i),ni()}else{const e=n.deltaY>0?.92:1.08;Le.zoom=Math.max(.05,Math.min(64,Le.zoom*e)),Le.updateProjectionMatrix()}},{passive:!1});function $u(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Le.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Le.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Le.position.z=n.z,e=!0),e&&(Le.lookAt(Ft),ni()),Number.isFinite(n.zoom)&&(Le.zoom=Math.max(.05,Math.min(64,n.zoom)),Le.updateProjectionMatrix())}function x0(){const n=Mt.getVisibleBounds();if(n.empty){Xu();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=Et.domElement.width/t,r=Et.domElement.height/t,s=Math.max(1,i||Number(se.canvasWidth)||Et.domElement.clientWidth||Un.clientWidth||window.innerWidth),a=Math.max(1,r||Number(se.canvasHeight)||Et.domElement.clientHeight||Un.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(Ft.copy(c),Le.isOrthographicCamera){const{azimuth:f,elevation:d}=Wu(se.cameraAxoPreset);St.azimuth=f,St.elevation=d,St.radius=Math.max(u*2.2,60),Vs(),Le.updateMatrixWorld(!0);const m=Le.matrixWorld.elements,_=new k(m[0],m[1],m[2]).normalize(),g=new k(m[4],m[5],m[6]).normalize(),p=[new k(n.min.x,n.min.y,n.min.z),new k(n.min.x,n.min.y,n.max.z),new k(n.min.x,n.max.y,n.min.z),new k(n.min.x,n.max.y,n.max.z),new k(n.max.x,n.min.y,n.min.z),new k(n.max.x,n.min.y,n.max.z),new k(n.max.x,n.max.y,n.min.z),new k(n.max.x,n.max.y,n.max.z)];let h=0,S=0;const T=new k;for(const R of p)T.copy(R).sub(c),h=Math.max(h,Math.abs(T.dot(_))),S=Math.max(S,Math.abs(T.dot(g)));const x=Math.max(h,S*o,u*.35),w=Math.max(S,h/Math.max(.001,o),u*.35);kt.left=-x*e,kt.right=x*e,kt.top=w*e,kt.bottom=-w*e,kt.zoom=1,kt.near=-Math.max(5e3,u*6),kt.far=Math.max(5e3,u*6),kt.updateProjectionMatrix()}else{fn.lookAt(c),ni();const f=Vo.degToRad(fn.fov),d=u*e/Math.max(.001,Math.tan(f*.5)),m=2*Math.atan(Math.tan(f*.5)*(fn.aspect||o)),_=u*e/Math.max(.001,Math.tan(m*.5));St.radius=Math.max(_,d,40),Vs(),fn.near=Math.max(.001,St.radius-u*3),fn.far=Math.max(fn.near+1,St.radius+u*6),fn.updateProjectionMatrix()}ni()}function sl(n,e){kt.left=-n/2,kt.right=n/2,kt.top=e/2,kt.bottom=-e/2,kt.updateProjectionMatrix(),fn.aspect=n/Math.max(1,e),fn.updateProjectionMatrix(),Et.setSize(n,e,!1)}const b0=Un.clientWidth||window.innerWidth,y0=Un.clientHeight||window.innerHeight;sl(b0,y0);il();rl();const Mt=new e0(Ur,{maxParticles:se.maxParticles??262144}),In=Mt.onRulesChanged(se.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:In}));function M0(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function al(n=null){const e=M0(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","canvasWidthUnits","canvasHeightUnits","canvasBoundaryLeft","canvasBoundaryRight","canvasBoundaryTop","canvasBoundaryBottom","audioLengthSec","binEnergy"]),i=e.has("binMagnitude")||e.has("binEnergy")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),s=e.has("binPhaseDeviation")||e.has("binPhasedeviation"),a=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),u=e.has("spectralCentroid"),f=e.has("spectralFlux"),d=e.has("spectralFlatness"),m=e.has("inharmonicity"),_=e.has("peakAmplitude"),g=e.has("zeroCrossingRate"),p=e.has("spectralRolloff"),h=e.has("spectralSpread"),S=e.has("spectralSkewness"),T=e.has("chromagram"),x=new Set(t);return c&&x.add("globalRmsEnergy"),u&&x.add("spectralCentroid"),f&&x.add("spectralFlux"),d&&x.add("spectralFlatness"),m&&x.add("inharmonicity"),_&&x.add("peakAmplitude"),g&&x.add("zeroCrossingRate"),p&&x.add("spectralRolloff"),h&&x.add("spectralSpread"),S&&x.add("spectralSkewness"),T&&x.add("chromagram"),i&&x.add("binMagnitude"),r&&x.add("binFlux"),s&&x.add("binPhaseDeviation"),o&&x.add("binPhase"),a&&x.add("binEnvelope"),a&&x.add("binEnvelopeState"),l&&x.add("binAttackTime"),c&&x.add("binRMSEnergy"),e.has("binFreq")&&x.add("binFreq"),{used:e,calculatedInputs:x,worklet:{enabled:i||r||s||a||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:s,needPhase:o,needEnvelope:a,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:u,needGlobalSpectralFlux:f,needSpectralFlatness:d,needInharmonicity:m,needPeakAmplitude:_,needZeroCrossingRate:g,needSpectralRolloff:p,needSpectralSpread:h,needSpectralSkewness:S,needChromagram:T},backend:{calc_fft:!0,calc_magnitude:i||r||u||d||f,calc_magnitude_dbfs:i||c,calc_phase:s||o,calc_phase_deviation:s,calc_local_spectral_flux:r||a,calc_envelope_state:a,calc_rms_energy:c,calc_peak_amplitude:_,calc_zero_crossing_rate:g,calc_spectral_centroid:u,calc_global_spectral_flux:f,calc_spectral_flatness:d,calc_spectral_rolloff:p,calc_spectral_spread:h,calc_spectral_skewness:S,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:T}}}function S0(n={}){const e=t=>Math.pow(10,Number(t)/20);return{scalar:{center_frequency_hz:{min_value:Number(n.freqNormMin??40),max_value:Number(n.freqNormMax??12e3)},magnitude_dbfs:{min_value:Number(n.binMagnitudeNormMin??-70),max_value:Number(n.binMagnitudeNormMax??0)},magnitude_linear:{min_value:e(Number(n.binMagnitudeNormMin??-70)),max_value:e(Number(n.binMagnitudeNormMax??0))},phase_deviation:{min_value:Number(n.binPhaseDeviationNormMin??0),max_value:Number(n.binPhaseDeviationNormMax??Math.PI)},spectral_flux:{min_value:Number(n.binFluxNormMin??0),max_value:Number(n.binFluxNormMax??.5)},rms_energy:{min_value:e(Number(n.globalRmsNormMin??-60)),max_value:e(Number(n.globalRmsNormMax??0))},spectral_centroid_hz:{min_value:Number(n.spectralCentroidNormMin??150),max_value:Number(n.spectralCentroidNormMax??8e3)},global_spectral_flux:{min_value:Number(n.globalSpectralFluxNormMin??0),max_value:Number(n.globalSpectralFluxNormMax??100)},spectral_flatness:{min_value:Number(n.spectralFlatnessNormMin??0),max_value:Number(n.spectralFlatnessNormMax??1)}},vector:{}}}function Ln(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return!Number.isFinite(s)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(s-i)/(r-i)))}const Ba=Object.freeze([1024,2048,4096,8192,16384]);function Gs(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=Ba[0],i=Math.abs(e-t);for(let r=1;r<Ba.length;r++){const s=Ba[r],a=Math.abs(e-s);a<i&&(t=s,i=a)}return t}function E0(n={},e=null){const t=al(e),i=Gs(n.fftSize);return{sample_rate:44100,fft_size:i,hop_size:Math.max(64,Math.floor(i/4)),rolloff_percent:.85,n_mfcc:13,...t.backend,normalize_features:!0,normalization_bounds:S0(n)}}function ol(n=null){const e=al(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}ol(In==null?void 0:In.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||Mt.scaleAllParticleSizes(t/e)});class qu{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=Gs(se.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none"}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-vHr3ONaJ.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=al(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=Gs(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var g,p,h;if(!this.analyser)return;((g=this.ctx)==null?void 0:g.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((p=this.ctx)==null?void 0:p.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((h=this.ctx)==null?void 0:h.sampleRate)??44100,i=t/2,r=S=>S/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,f=0,d=0;for(let S=0;S<e;S++){const T=this.frequencyData[S],x=r(S);x<250?(s+=T,a++):x<4e3?(o+=T,l++):(c+=T,u++),T>f&&(f=T,d=S)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(d)),this.peakByte=f;const m=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const S=tl(this.frequencyData,t);this.spectralCentroidHz+=(S-this.spectralCentroidHz)*m,this.spectralCentroid=v0(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const T=u0(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(T-this.spectralFluxAU)*m,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const S=d0(this.frequencyData);this.spectralFlatnessRatio+=(S-this.spectralFlatnessRatio)*m,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const S=h0(this.frequencyData,t);this.inharmonicity+=(S-this.inharmonicity)*m}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(f0(this.frequencyData)-this.peakAmplitude)*m:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(p0(this.timeDomainData)-this.zeroCrossingRate)*m:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(m0(this.frequencyData,t,.85)-this.spectralRolloff)*m:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const S=Vu(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(S-this.spectralSpread)*m:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const T=g0(this.frequencyData,t,this.spectralCentroidHz,S);this.spectralSkewness+=(T-this.spectralSkewness)*m}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(_0(this.frequencyData,t)-this.chromagram)*m:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let _=0;for(const S of this.timeDomainData)_+=((S-128)/128)**2;if(this.amplitude=Math.sqrt(_/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let S=0,T=0;for(let x=0;x<this._freqL.length;x++)S+=this._freqL[x],T+=this._freqR[x];this.pan=(T-S)/(S+T+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const Ce=new qu;Ce.setRuleInputUsage(In==null?void 0:In.requiredInputsByTarget);const Ac=document.getElementById("status-dot"),wc=document.getElementById("status-text");function ka(n,e){Ac&&(Ac.className=n),wc&&(wc.textContent=e)}function Yu(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>ka("open",""),n.onclose=()=>{ka("closed","Backend offline"),setTimeout(Yu,3e3)},n.onerror=()=>ka("closed","WS error"),n.onmessage=()=>{},_r(e=>{var t;if(n.readyState===WebSocket.OPEN){const i=(t=Mt.getRuleCompileState)==null?void 0:t.call(Mt),r=(i==null?void 0:i.requiredInputsByTarget)||(In==null?void 0:In.requiredInputsByTarget)||null,s={...e,audio_analysis_config:E0(e,r)};n.send(JSON.stringify({type:"params_update",payload:s}))}})}Yu();const Bn=document.createElement("div");Bn.id="camera-hud";Bn.style.position="fixed";Bn.style.left="8px";Bn.style.bottom="8px";Bn.style.zIndex="220";Bn.style.display="flex";Bn.style.alignItems="center";Bn.style.gap="6px";const gn=document.createElement("button");gn.type="button";gn.title="Reset camera";gn.textContent="↺";gn.style.width="22px";gn.style.height="22px";gn.style.border="1px solid var(--color-border, #444)";gn.style.borderRadius="6px";gn.style.background="rgba(0,0,0,0.55)";gn.style.color="var(--color-text-muted, #bbb)";gn.style.cursor="pointer";gn.addEventListener("click",Xu);const _n=document.createElement("button");_n.type="button";_n.title="Fit to visible particles";_n.textContent="Fit";_n.style.height="22px";_n.style.padding="0 8px";_n.style.border="1px solid var(--color-border, #444)";_n.style.borderRadius="6px";_n.style.background="rgba(0,0,0,0.55)";_n.style.color="var(--color-text-muted, #bbb)";_n.style.cursor="pointer";_n.addEventListener("click",x0);const vn=document.createElement("button");vn.type="button";vn.title="Clear canvas";vn.textContent="Clean";vn.style.height="22px";vn.style.padding="0 8px";vn.style.border="1px solid var(--color-border, #444)";vn.style.borderRadius="6px";vn.style.background="rgba(0,0,0,0.55)";vn.style.color="var(--color-text-muted, #bbb)";vn.style.cursor="pointer";vn.addEventListener("click",()=>Mt.clear());const Cn=document.createElement("div");Cn.id="camera-readout";Cn.style.fontFamily="var(--font-mono, monospace)";Cn.style.fontSize="10px";Cn.style.color="var(--color-text-muted, #bbb)";Cn.style.background="rgba(0,0,0,0.35)";Cn.style.padding="4px 6px";Cn.style.borderRadius="4px";Cn.style.pointerEvents="none";Cn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";Bn.append(gn,_n,vn,Cn);document.body.appendChild(Bn);let Rc=0,nr=0,Ws="";function Cc(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function Pc(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function T0(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function A0(){var e,t;if(Ws)return Pc(Ws);const n=String(((e=Ce==null?void 0:Ce.audioEl)==null?void 0:e.currentSrc)||((t=Ce==null?void 0:Ce.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return Pc(r)}catch{}return"audio"}async function ju(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function w0(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.json`}async function R0(){var o;const n=Cc(A0(),"audio"),e=Cc(T0(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(se.canvasWidth)||Et.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(se.canvasHeight)||Et.domElement.height/Math.max(1,window.devicePixelRatio))),s=document.createElement("canvas"),a=new gu({canvas:s,antialias:!0,preserveDrawingBuffer:!0});try{const l=a.capabilities.maxTextureSize||8192,c=Math.min(i,l),u=Math.min(r,l),f=Math.max(1,Number(((o=Et.getPixelRatio)==null?void 0:o.call(Et))||window.devicePixelRatio||1)),d=Math.max(1,Math.floor(c/f)),m=Math.max(1,Math.floor(u/f));a.setPixelRatio(f),a.setSize(d,m,!1);let _=Le.clone();Le===kt||_.isOrthographicCamera?(_=Le.clone(),_.updateProjectionMatrix()):_.isPerspectiveCamera&&(_.aspect=c/Math.max(1,u),_.updateProjectionMatrix());const g=[];Ur.traverse(S=>{var T;(T=S==null?void 0:S.userData)!=null&&T.excludeFromPng&&S.visible&&(g.push(S),S.visible=!1)}),a.setClearColor(Mt.getBackgroundColor(),1),Mt.setViewportHeight(a.domElement.height),a.render(Ur,_);for(const S of g)S.visible=!0;const p=await new Promise(S=>s.toBlob(S,"image/png"));if(!p)throw new Error("PNG export failed (empty blob).");const h=document.createElement("a");h.href=URL.createObjectURL(p),h.download=t,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href),(c!==i||u!==r)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:i,h:r},exported:{w:c,h:u},maxTextureSize:l})}finally{Mt.setViewportHeight(Et.domElement.height),a.dispose()}}function Nc(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}async function C0(n,e){var o,l,c,u,f,d,m,_,g;if(!((e==null?void 0:e.duration)>0))return;const t=++nr,i=await ju(e),r=i?URL.createObjectURL(i):e.currentSrc||e.src;if(!r)return;const s=new Audio;s.crossOrigin="anonymous",s.src=r,s.preload="auto",s.currentTime=0,s.muted=!0,s.volume=0,typeof s.preservesPitch=="boolean"&&(s.preservesPitch=!1),s.playbackRate=16,s.style.display="none",document.body.appendChild(s);const a=new qu;a.setRuleInputUsage((o=Mt.getRuleCompileState())==null?void 0:o.requiredInputsByTarget),Nc(n,!0);try{Mt.clear(),await new Promise((S,T)=>{const x=()=>{R(),S()},w=()=>{R(),T(new Error("Paint-all audio metadata failed to load."))},R=()=>{s.removeEventListener("loadedmetadata",x),s.removeEventListener("canplay",x),s.removeEventListener("error",w)};s.addEventListener("loadedmetadata",x,{once:!0}),s.addEventListener("canplay",x,{once:!0}),s.addEventListener("error",w,{once:!0}),s.load()}),a.init(s),((l=a.ctx)==null?void 0:l.state)==="suspended"&&await a.ctx.resume(),await s.play();let p=-1,h=0;for(;t===nr&&!s.ended;){await new Promise(C=>requestAnimationFrame(C)),a.update();const S=Et.domElement.width/window.devicePixelRatio,T=Et.domElement.height/window.devicePixelRatio,x=Lo(),w={...se,persistMode:1,cameraState:{x:Le.position.x,y:Le.position.y,z:Le.position.z,zoom:Le.zoom},cameraCanvasWidthUnits:x.w,cameraCanvasHeightUnits:x.h,cameraCanvasBoundaryLeft:x.left,cameraCanvasBoundaryRight:x.right,cameraCanvasBoundaryTop:x.top,cameraCanvasBoundaryBottom:x.bottom};Mt.update(a,w,S,T),$u(Mt.getCameraOutput());const R=Number(s.currentTime)||0;if(R>p+1e-4?(p=R,h=0):h++,s.paused&&!s.ended)try{await s.play()}catch{break}if(h>120&&R>=Math.max(0,(s.duration||0)-.25)){s.currentTime=s.duration||R;break}}}finally{s.pause(),s.src="",s.remove(),i&&URL.revokeObjectURL(r);try{(c=a.source)==null||c.disconnect()}catch{}try{(u=a.streamSource)==null||u.disconnect()}catch{}try{(f=a.splitter)==null||f.disconnect()}catch{}try{(d=a.analyserL)==null||d.disconnect()}catch{}try{(m=a.analyserR)==null||m.disconnect()}catch{}try{(_=a.analyser)==null||_.disconnect()}catch{}try{await((g=a.ctx)==null?void 0:g.close())}catch{}Nc(n,!1)}}function Lo(){let n=0,e=0;if(Le.isOrthographicCamera)n=Math.abs((Le.right-Le.left)/Math.max(.01,Le.zoom)),e=Math.abs((Le.top-Le.bottom)/Math.max(.01,Le.zoom));else{const r=Math.max(.001,Le.position.distanceTo(Ft)),s=Vo.degToRad(Le.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,Le.zoom),n=e*Le.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:Ft.x-t,right:Ft.x+t,top:Ft.y+i,bottom:Ft.y-i}}function Zu(){var t,i,r,s,a,o,l,c,u;requestAnimationFrame(Zu),Rc++,Ce.update();const n=!!(Ce.audioEl&&!Ce.audioEl.paused&&!Ce.audioEl.ended);if(n&&!Ce.analyser&&Ce.audioEl&&Ce.init(Ce.audioEl),n){const f=Et.domElement.width/window.devicePixelRatio,d=Et.domElement.height/window.devicePixelRatio,m=Lo(),_={...se,cameraState:{x:Le.position.x,y:Le.position.y,z:Le.position.z,zoom:Le.zoom},cameraCanvasWidthUnits:m.w,cameraCanvasHeightUnits:m.h,cameraCanvasBoundaryLeft:m.left,cameraCanvasBoundaryRight:m.right,cameraCanvasBoundaryTop:m.top,cameraCanvasBoundaryBottom:m.bottom};Mt.update(Ce,_,f,d),$u(Mt.getCameraOutput());const g=((t=Ce.getBinMagnitude)==null?void 0:t.call(Ce))||null,p=((i=Ce.getBinFlux)==null?void 0:i.call(Ce))||null,h=((r=Ce.getBinPhaseDeviation)==null?void 0:r.call(Ce))||null,S=((s=Ce.getBinPhase)==null?void 0:s.call(Ce))||null,T=((a=Ce.getBinAttackTime)==null?void 0:a.call(Ce))||null,x=((o=Ce.getBinEnvelope)==null?void 0:o.call(Ce))||null,w=Ce.peakFreq??0,R=(l=Ce.ctx)!=null&&l.sampleRate?Ce.ctx.sampleRate*.5:22050,C=Ln(Ce.rmsDbfs,se.globalRmsNormMin??-60,se.globalRmsNormMax??0),U=Ln(Ce.spectralCentroidHz,se.spectralCentroidNormMin??150,se.spectralCentroidNormMax??8e3),E=Ln(Ce.spectralFluxAU,se.globalSpectralFluxNormMin??0,se.globalSpectralFluxNormMax??100),M=Ln(Ce.spectralFlatnessRatio,se.spectralFlatnessNormMin??0,se.spectralFlatnessNormMax??1),P=(W,de)=>{if(!W||!W.length)return 0;let fe=0;for(let Se=0;Se<W.length;Se++)fe+=de(W[Se]);return fe/W.length},J=P(g,W=>Ln(W,se.binMagnitudeNormMin??-70,se.binMagnitudeNormMax??0)),$=P(p,W=>Ln(W,se.binFluxNormMin??0,se.binFluxNormMax??.5)),z=P(h,W=>Ln(W,se.binPhaseDeviationNormMin??0,se.binPhaseDeviationNormMax??Math.PI)),j=P(S,W=>Ln(W,-Math.PI,Math.PI)),Z=P(T,W=>Ln(W,se.binAttackTimeNormMin??5,se.binAttackTimeNormMax??500)),ue=P(x,W=>Ln(W,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:C,globalRmsEnergy:C,binEnergy:J,frequencyHz:w,normFreq:Math.max(0,Math.min(1,w/Math.max(1e-6,R))),bass:Ce.bass??0,mid:Ce.mid??0,high:Ce.high??0,peakFreq:w,pan:Ce.pan??0,spectralCentroid:U,spectralFlux:E,spectralFlatness:M,inharmonicity:Ce.inharmonicity??0,peakAmplitude:Ce.peakAmplitude??0,zeroCrossingRate:Ce.zeroCrossingRate??0,spectralRolloff:Ce.spectralRolloff??0,spectralSpread:Ce.spectralSpread??0,spectralSkewness:Ce.spectralSkewness??0,chromagram:Ce.chromagram??0,binMagnitude:J,binFreq:w,binPhase:j,binFlux:$,binPhaseDeviation:z,binAttackTime:Z,binEnvelope:ue,binEnvelopeState:ue,binRMSEnergy:C,time:((c=Ce.audioEl)==null?void 0:c.currentTime)??0,deltaTime:1/60,canvasWidthPx:f,canvasHeightPx:d,canvasWidthUnits:m.w,canvasHeightUnits:m.h,audioLengthSec:((u=Ce.audioEl)==null?void 0:u.duration)??0}}}))}const e=Mt.getBackgroundColor();if(Et.setClearColor(e,1),Mt.setViewportHeight(Et.domElement.height),Et.render(Ur,Le),Rc%6===0){const f=(Le.rotation.x*180/Math.PI).toFixed(2),d=(Le.rotation.y*180/Math.PI).toFixed(2),m=(Le.rotation.z*180/Math.PI).toFixed(2),_=Le.position.x.toFixed(2),g=Le.position.y.toFixed(2),p=Le.position.z.toFixed(2),h=Lo(),S=h.w,T=h.h;Cn.textContent=`cam p(${_},${g},${p}) r(${f},${d},${m}) pts ${Mt.getVisibleCount()} fft ${Ce.peakByte} amp ${Ce.amplitude.toFixed(3)} sc ${Ce.spectralCentroid.toFixed(3)} sf ${Ce.spectralFlux.toFixed(3)} sfl ${Ce.spectralFlatness.toFixed(3)} inh ${Ce.inharmonicity.toFixed(3)} canv ${S.toFixed(2)} × ${T.toFixed(2)}`}}Zu();{const n=document.getElementById("audio-player"),{audioEl:e}=l0(n);Ce.audioEl=e;let t=null;e.addEventListener("play",async()=>{var s;Ce.init(e),((s=Ce.ctx)==null?void 0:s.state)==="suspended"&&await Ce.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var s;nr++,Ce.init(e),((s=Ce.ctx)==null?void 0:s.state)==="suspended"&&await Ce.ctx.resume()}),n.addEventListener("player:play",()=>{nr++}),n.addEventListener("player:pause",()=>{nr++}),n.addEventListener("player:stop",()=>{nr++}),n.addEventListener("player:savepng",async()=>{await R0()}),n.addEventListener("player:paintall",async()=>{await C0(n,e)}),n.addEventListener("player:playbackrate",s=>{var o;const a=Number((o=s==null?void 0:s.detail)==null?void 0:o.rate);Number.isFinite(a)&&(e.playbackRate=Math.max(.1,Math.min(16,a)))}),n.addEventListener("player:fileloaded",s=>{var o;const a=(o=s==null?void 0:s.detail)==null?void 0:o.file;t=a instanceof File?a:null,Ws=(t==null?void 0:t.name)||""});const i=async()=>{try{const s=Yo(),a=t||await ju(e),o=a?await sv(a):"",l=ov({params:s,presetName:"",audioDataUrl:o,audioFileName:(t==null?void 0:t.name)||"project-audio.wav"});cv(l,w0())}catch(s){console.warn("[Project] save failed:",s)}},r=async s=>{var a,o,l;try{s.params&&typeof s.params=="object"&&Js(s.params);const c=(a=s==null?void 0:s.audio)==null?void 0:a.dataUrl;if(typeof c=="string"&&c.startsWith("data:")){const u=((o=s==null?void 0:s.audio)==null?void 0:o.fileName)||"project-audio.wav",f=av(c,u);t=f,Ws=(f==null?void 0:f.name)||"",(l=e.src)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(f),e.load(),Ce.audioEl=e}}catch(c){console.warn("[Project] load failed:",c)}};n.addEventListener("player:saveproject",i),n.addEventListener("player:loadproject",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})}),window.addEventListener("seesound:project-save-request",i),window.addEventListener("seesound:project-load-request",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})})}let hi=null,Fo=!1;hi=c0({wrapper:Ir,column:Un,onResize(n,e){if(sl(n,e),ll(n,e),!Fo){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(se.canvasWidth)!==t||Number(se.canvasHeight)!==i)&&Js({canvasWidth:t,canvasHeight:i})}}});function ll(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(se.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Ku(){const e=Math.max(5,Math.min(400,Math.floor(Number(se.canvasScale)||100)))/100;Ir.style.transformOrigin="center center",Ir.style.transform=`scale(${e})`}function Ju(){var i;const n=((i=hi==null?void 0:hi.getSize)==null?void 0:i.call(hi))||{},e=Math.max(160,Math.floor(n.w||Ir.clientWidth||Un.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||Ir.clientHeight||Un.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function Qu(){if(!hi)return;const n=Ju(),e=Math.max(160,Math.floor(Number(se.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(se.canvasHeight)||n.h));if(e===n.w&&t===n.h){ll(n.w,n.h);return}Fo=!0,hi.setSize(e,t),Fo=!1}Qu();Ku();{const n=Ju();(Number(se.canvasWidth)!==n.w||Number(se.canvasHeight)!==n.h)&&Js({canvasWidth:n.w,canvasHeight:n.h}),ll(n.w,n.h)}_r((n,e)=>{if(e==="cameraProjection"&&il(),(e==="cameraProjection"||e==="cameraAxoPreset")&&rl(),(e==="canvasWidth"||e==="canvasHeight")&&Qu(),e==="canvasScale"&&Ku(),e==="maxParticles"){const t=Math.max(4096,Math.floor(se.maxParticles||4096));se.maxParticles!==t&&(se.maxParticles=t),Mt.setMaxParticles(t)}if(e==="fftSize"){const t=Gs(se.fftSize);if(se.fftSize!==t){set("fftSize",t);return}Ce.setFftSize(t)}if(e==="ruleBlocks"){const t=Mt.onRulesChanged(se.ruleBlocks??[]);Ce.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),ol(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});Nv(document.getElementById("control-panel"));var Dc,Ic;ol((Ic=(Dc=Mt.getRuleCompileState)==null?void 0:Dc.call(Mt))==null?void 0:Ic.requiredInputsByTarget);const Lc=Array.isArray(se.ruleBlocks)?se.ruleBlocks.length:0,Xn=Mt.getRuleCompileState(),Fc=(Xn==null?void 0:Xn.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${Us} compile=${Fc} rules=${Lc}`,{schemaVersion:Us,compileStatus:Fc,compileTimeMs:(Xn==null?void 0:Xn.compileTimeMs)??0,compileError:(Xn==null?void 0:Xn.compileError)??null,ruleCount:Lc,debug:O_});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
