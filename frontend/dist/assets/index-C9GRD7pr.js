(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="171",Vd=0,Il=1,Hd=2,vu=1,Gd=2,Qn=3,Ai=0,pn=1,ni=2,wi=0,Ci=1,Bi=2,Dl=3,Ul=4,no=5,ii=100,Wd=101,Xd=102,qd=103,jd=104,Yd=200,$d=201,Zd=202,Kd=203,Kr=204,Jr=205,Jd=206,Qd=207,ep=208,tp=209,np=210,ip=211,rp=212,ap=213,sp=214,io=0,ro=1,ao=2,xr=3,so=4,oo=5,lo=6,co=7,bu=0,op=1,lp=2,Ti=0,cp=1,up=2,dp=3,pp=4,hp=5,fp=6,mp=7,xu=300,yr=301,Mr=302,uo=303,po=304,ps=306,ho=1e3,Vi=1001,fo=1002,Un=1003,gp=1004,pa=1005,Xn=1006,Es=1007,Hi=1008,li=1009,yu=1010,Mu=1011,Qr=1012,el=1013,qi=1014,ri=1015,oa=1016,tl=1017,nl=1018,Sr=1020,Su=35902,Eu=1021,wu=1022,Dn=1023,Cu=1024,Tu=1025,_r=1026,Er=1027,Au=1028,il=1029,Ru=1030,rl=1031,al=1033,Xa=33776,qa=33777,ja=33778,Ya=33779,mo=35840,go=35841,_o=35842,vo=35843,bo=36196,xo=37492,yo=37496,Mo=37808,So=37809,Eo=37810,wo=37811,Co=37812,To=37813,Ao=37814,Ro=37815,Po=37816,No=37817,Lo=37818,Fo=37819,Io=37820,Do=37821,$a=36492,Uo=36494,Oo=36495,Pu=36283,ko=36284,Bo=36285,zo=36286,_p=3200,vp=3201,bp=0,xp=1,Mi="",yn="srgb",wr="srgb-linear",Qa="linear",Mt="srgb",Zi=7680,Ol=519,yp=512,Mp=513,Sp=514,Nu=515,Ep=516,wp=517,Cp=518,Tp=519,kl=35044,Ap=35048,Bl="300 es",ai=2e3,es=2001;class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const jr=Math.PI/180,ea=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function sl(n,e){return(n%e+e)%e}function Rp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Pp(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function Np(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function Lp(n,e=1){return e-Math.abs(sl(n,e*2)-e)}function Fp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Up(n,e){return n+Math.random()*(e-n)}function Op(n){return n*(.5-Math.random())}function kp(n){n!==void 0&&(zl=n);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(n){return n*jr}function zp(n){return n*ea}function Vp(n){return(n&n-1)===0&&n!==0}function Hp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wp(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),u=s((e+i)/2),d=a((e-i)/2),p=s((e-i)/2),f=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*p,o*c);break;case"YZY":n.set(l*p,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*p,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ol={DEG2RAD:jr,RAD2DEG:ea,generateUUID:Nr,clamp:ht,euclideanModulo:sl,mapLinear:Rp,inverseLerp:Pp,lerp:Yr,damp:Np,pingpong:Lp,smoothstep:Fp,smootherstep:Ip,randInt:Dp,randFloat:Up,randFloatSpread:Op,seededRandom:kp,degToRad:Bp,radToDeg:zp,isPowerOfTwo:Vp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:an,denormalize:pr};class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,a,s,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],v=r[0],m=r[3],h=r[6],y=r[1],_=r[4],x=r[7],A=r[2],T=r[5],L=r[8];return a[0]=s*v+o*y+l*A,a[3]=s*m+o*_+l*T,a[6]=s*h+o*x+l*L,a[1]=c*v+u*y+d*A,a[4]=c*m+u*_+d*T,a[7]=c*h+u*x+d*L,a[2]=p*v+f*y+g*A,a[5]=p*m+f*_+g*T,a[8]=p*h+f*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,p=o*l-u*a,f=c*a-s*l,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*s)*v,e[3]=p*v,e[4]=(u*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ws.makeScale(e,t)),this}rotate(e){return this.premultiply(ws.makeRotation(-e)),this}translate(e,t){return this.premultiply(ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new tt;function Lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xp(){const n=ts("canvas");return n.style.display="block",n}const Vl={};function hr(n){n in Vl||(Vl[n]=!0,console.warn(n))}function qp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function jp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hl=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Mt&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},fromWorkingColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},toWorkingColorSpace:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?Qa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Qa,toXYZ:Hl,fromXYZ:Gl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Hl,fromXYZ:Gl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const vt=$p();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class Zp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=ts("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=oi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kp=0;class Fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Cs(r[s].image)):a.push(Cs(r[s]))}else a=Cs(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Cs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class hn extends Pr{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Vi,r=Vi,a=Xn,s=Hi,o=Dn,l=li,c=hn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Nr(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=xu;hn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,A=(h+1)/2,T=(u+p)/4,L=(d+v)/4,F=(g+m)/4;return _>x&&_>A?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=T/i,a=L/i):x>A?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=T/r,a=F/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=L/a,r=F/a),this.set(i,r,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(p-u)/y,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qp extends Pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Qp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Iu extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eh extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=a[s+0],f=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==f||u!==g){let m=1-o;const h=l*p+c*f+u*g+d*v,y=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,h*y);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const x=o*y;if(l=l*m+p*x,c=c*m+f*x,u=u*m+g*x,d=d*m+v*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[s],p=a[s+1],f=a[s+2],g=a[s+3];return e[t]=o*g+u*d+l*f-c*p,e[t+1]=l*g+u*p+c*d-o*f,e[t+2]=c*g+u*f+o*p-l*d,e[t+3]=u*g-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(a/2),p=l(i/2),f=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d+p*f*g;break;case"YZX":this._x=p*u*d+c*f*g,this._y=c*f*d+p*u*g,this._z=c*u*g-p*f*d,this._w=c*u*d-p*f*g;break;case"XZY":this._x=p*u*d-c*f*g,this._y=c*f*d-p*u*g,this._z=c*u*g+p*f*d,this._w=c*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(s-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(s-r)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=s*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=a*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-a*d,this.z=r+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new q,Wl=new la;class ca{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Rn):Rn.fromBufferAttribute(a,s),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),fa.subVectors(this.max,Ur),Ji.subVectors(e.a,Ur),Qi.subVectors(e.b,Ur),er.subVectors(e.c,Ur),hi.subVectors(Qi,Ji),fi.subVectors(er,Qi),Pi.subVectors(Ji,er);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Pi.z,Pi.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Pi.z,0,-Pi.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Pi.y,Pi.x,0];return!As(t,Ji,Qi,er,fa)||(t=[1,0,0,0,1,0,0,0,1],!As(t,Ji,Qi,er,fa))?!1:(ma.crossVectors(hi,fi),t=[ma.x,ma.y,ma.z],As(t,Ji,Qi,er,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new q,new q,new q,new q,new q,new q,new q,new q],Rn=new q,ha=new ca,Ji=new q,Qi=new q,er=new q,hi=new q,fi=new q,Pi=new q,Ur=new q,fa=new q,ma=new q,Ni=new q;function As(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Ni.fromArray(n,a);const o=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const th=new ca,Or=new q,Rs=new q;class ua{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):th.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Rs)),this.expandByPoint(Or.copy(e.center).sub(Rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new q,Ps=new q,ga=new q,mi=new q,Ns=new q,_a=new q,Ls=new q;class ll{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ps.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ps);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ga),o=mi.dot(this.direction),l=-mi.dot(ga),c=mi.lengthSq(),u=Math.abs(1-s*s);let d,p,f,g;if(u>0)if(d=s*l-o,p=s*o-l,g=a*u,d>=0)if(p>=-g)if(p<=g){const v=1/u;d*=v,p*=v,f=d*(d+s*p+2*o)+p*(s*d+p+2*l)+c}else p=a,d=Math.max(0,-(s*p+o)),f=-d*d+p*(p+2*l)+c;else p=-a,d=Math.max(0,-(s*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-s*a+o)),p=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-a,-l),a),f=p*(p+2*l)+c):(d=Math.max(0,-(s*a+o)),p=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+p*(p+2*l)+c);else p=s>0?-a:a,d=Math.max(0,-(s*p+o)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ps).addScaledVector(ga,p),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,a){Ns.subVectors(t,e),_a.subVectors(i,e),Ls.crossVectors(Ns,_a);let s=this.direction.dot(Ls),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(_a.crossVectors(mi,_a));if(l<0)return null;const c=o*this.direction.dot(Ns.cross(mi));if(c<0||l+c>s)return null;const u=-o*mi.dot(Ls);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,i,r,a,s,o,l,c,u,d,p,f,g,v,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,d,p,f,g,v,m)}set(e,t,i,r,a,s,o,l,c,u,d,p,f,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),a=1/tr.setFromMatrixColumn(e,1).length(),s=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const p=s*u,f=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*u,f=l*d,g=c*u,v=c*d;t[0]=p+v*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=v+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*u,f=l*d,g=c*u,v=c*d;t[0]=p-v*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=v-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*u,f=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,f=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-p*d,t[8]=g*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=s*l,f=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+v,t[5]=s*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nh,e,ih)}lookAt(e,t,i){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(i,mn),gi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(i,mn)),gi.normalize(),va.crossVectors(mn,gi),r[0]=gi.x,r[4]=va.x,r[8]=mn.x,r[1]=gi.y,r[5]=va.y,r[9]=mn.y,r[2]=gi.z,r[6]=va.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],v=i[6],m=i[10],h=i[14],y=i[3],_=i[7],x=i[11],A=i[15],T=r[0],L=r[4],F=r[8],w=r[12],b=r[1],D=r[5],X=r[9],j=r[13],J=r[2],Z=r[6],K=r[10],ce=r[14],N=r[3],P=r[7],H=r[11],I=r[15];return a[0]=s*T+o*b+l*J+c*N,a[4]=s*L+o*D+l*Z+c*P,a[8]=s*F+o*X+l*K+c*H,a[12]=s*w+o*j+l*ce+c*I,a[1]=u*T+d*b+p*J+f*N,a[5]=u*L+d*D+p*Z+f*P,a[9]=u*F+d*X+p*K+f*H,a[13]=u*w+d*j+p*ce+f*I,a[2]=g*T+v*b+m*J+h*N,a[6]=g*L+v*D+m*Z+h*P,a[10]=g*F+v*X+m*K+h*H,a[14]=g*w+v*j+m*ce+h*I,a[3]=y*T+_*b+x*J+A*N,a[7]=y*L+_*D+x*Z+A*P,a[11]=y*F+_*X+x*K+A*H,a[15]=y*w+_*j+x*ce+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+a*l*d-r*c*d-a*o*p+i*c*p+r*o*f-i*l*f)+v*(+t*l*f-t*c*p+a*s*p-r*s*f+r*c*u-a*l*u)+m*(+t*c*d-t*o*f-a*s*d+i*s*f+a*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*p+r*s*d-i*s*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],v=e[13],m=e[14],h=e[15],y=d*m*c-v*p*c+v*l*f-o*m*f-d*l*h+o*p*h,_=g*p*c-u*m*c-g*l*f+s*m*f+u*l*h-s*p*h,x=u*v*c-g*d*c+g*o*f-s*v*f-u*o*h+s*d*h,A=g*d*l-u*v*l-g*o*p+s*v*p+u*o*m-s*d*m,T=t*y+i*_+r*x+a*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=y*L,e[1]=(v*p*a-d*m*a-v*r*f+i*m*f+d*r*h-i*p*h)*L,e[2]=(o*m*a-v*l*a+v*r*c-i*m*c-o*r*h+i*l*h)*L,e[3]=(d*l*a-o*p*a-d*r*c+i*p*c+o*r*f-i*l*f)*L,e[4]=_*L,e[5]=(u*m*a-g*p*a+g*r*f-t*m*f-u*r*h+t*p*h)*L,e[6]=(g*l*a-s*m*a-g*r*c+t*m*c+s*r*h-t*l*h)*L,e[7]=(s*p*a-u*l*a+u*r*c-t*p*c-s*r*f+t*l*f)*L,e[8]=x*L,e[9]=(g*d*a-u*v*a-g*i*f+t*v*f+u*i*h-t*d*h)*L,e[10]=(s*v*a-g*o*a+g*i*c-t*v*c-s*i*h+t*o*h)*L,e[11]=(u*o*a-s*d*a-u*i*c+t*d*c+s*i*f-t*o*f)*L,e[12]=A*L,e[13]=(u*v*r-g*d*r+g*i*p-t*v*p-u*i*m+t*d*m)*L,e[14]=(g*o*r-s*v*r-g*i*l+t*v*l+s*i*m-t*o*m)*L,e[15]=(s*d*r-u*o*r+u*i*l-t*d*l-s*i*p+t*o*p)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,p=a*c,f=a*u,g=a*d,v=s*u,m=s*d,h=o*d,y=l*c,_=l*u,x=l*d,A=i.x,T=i.y,L=i.z;return r[0]=(1-(v+h))*A,r[1]=(f+x)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(f-x)*T,r[5]=(1-(p+h))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+_)*L,r[9]=(m-y)*L,r[10]=(1-(p+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=tr.set(r[0],r[1],r[2]).length();const s=tr.set(r[4],r[5],r[6]).length(),o=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/a,u=1/s,d=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,t.setFromRotationMatrix(Pn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=ai){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let f,g;if(o===ai)f=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===es)f=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ai){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(s-a),p=(t+e)*c,f=(i+r)*u;let g,v;if(o===ai)g=(s+a)*d,v=-2*d;else if(o===es)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new q,Pn=new Ft,nh=new q(0,0,0),ih=new q(1,1,1),gi=new q,va=new q,mn=new q,Xl=new Ft,ql=new la;class ci{constructor(e=0,t=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rh=0;const jl=new q,nr=new la,Zn=new Ft,ba=new q,kr=new q,ah=new q,sh=new la,Yl=new q(1,0,0),$l=new q(0,1,0),Zl=new q(0,0,1),Kl={type:"added"},oh={type:"removed"},ir={type:"childadded",child:null},Fs={type:"childremoved",child:null};class ln extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new q,t=new ci,i=new la,r=new q(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new tt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(kr,ba,this.up):Zn.lookAt(ba,kr,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Zn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new q(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new q,Kn=new q,Is=new q,Jn=new q,rr=new q,ar=new q,Jl=new q,Ds=new q,Us=new q,Os=new q,ks=new Dt,Bs=new Dt,zs=new Dt;class In{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Nn.subVectors(e,t),r.cross(Nn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Nn.subVectors(r,t),Kn.subVectors(i,t),Is.subVectors(e,t);const s=Nn.dot(Nn),o=Nn.dot(Kn),l=Nn.dot(Is),c=Kn.dot(Kn),u=Kn.dot(Is),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const p=1/d,f=(c*l-o*u)*p,g=(s*u-o*l)*p;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Jn.x),l.addScaledVector(s,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return ks.setScalar(0),Bs.setScalar(0),zs.setScalar(0),ks.fromBufferAttribute(e,t),Bs.fromBufferAttribute(e,i),zs.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ks,a.x),s.addScaledVector(Bs,a.y),s.addScaledVector(zs,a.z),s}static isFrontFacing(e,t,i,r){return Nn.subVectors(i,t),Kn.subVectors(e,t),Nn.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Nn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;rr.subVectors(r,i),ar.subVectors(a,i),Ds.subVectors(e,i);const l=rr.dot(Ds),c=ar.dot(Ds);if(l<=0&&c<=0)return t.copy(i);Us.subVectors(e,r);const u=rr.dot(Us),d=ar.dot(Us);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(rr,s);Os.subVectors(e,a);const f=rr.dot(Os),g=ar.dot(Os);if(g>=0&&f<=g)return t.copy(a);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ar,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Jl.subVectors(a,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Jl,o);const h=1/(m+v+p);return s=v*h,o=p*h,t.copy(i).addScaledVector(rr,s).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Vs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=sl(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Vs(s,a,e+1/3),this.g=Vs(s,a,e),this.b=Vs(s,a,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=Uu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return vt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(ht(Jt.r*255,0,255))*65536+Math.round(ht(Jt.g*255,0,255))*256+Math.round(ht(Jt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,a=Jt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=yn){vt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(xa);const i=Yr(_i.h,xa.h,t),r=Yr(_i.s,xa.s,t),a=Yr(_i.l,xa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new bt;bt.NAMES=Uu;let lh=0;class Lr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Ci,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=Jr,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kr&&(i.blendSrc=this.blendSrc),this.blendDst!==Jr&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ou extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new q,ya=new Et;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class ku extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bu extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class On extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ch=0;const bn=new Ft,Hs=new ln,sr=new q,gn=new ca,Br=new ca,Xt=new q;class En extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Bu:ku)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new tt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new On(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];gn.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(gn.min,Br.min),gn.expandByPoint(Xt),Xt.addVectors(gn.max,Br.max),gn.expandByPoint(Xt)):(gn.expandByPoint(Br.min),gn.expandByPoint(Br.max))}gn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Xt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(e,c),Xt.add(sr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new q,l[F]=new q;const c=new q,u=new q,d=new q,p=new Et,f=new Et,g=new Et,v=new q,m=new q;function h(F,w,b){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),p.fromBufferAttribute(a,F),f.fromBufferAttribute(a,w),g.fromBufferAttribute(a,b),u.sub(c),d.sub(c),f.sub(p),g.sub(p);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[F].add(v),o[w].add(v),o[b].add(v),l[F].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,w=y.length;F<w;++F){const b=y[F],D=b.start,X=b.count;for(let j=D,J=D+X;j<J;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new q,x=new q,A=new q,T=new q;function L(F){A.fromBufferAttribute(r,F),T.copy(A);const w=o[F];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(T,w);const D=x.dot(l[F])<0?-1:1;s.setXYZW(F,_.x,_.y,_.z,D)}for(let F=0,w=y.length;F<w;++F){const b=y[F],D=b.start,X=b.count;for(let j=D,J=D+X;j<J;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new q,a=new q,s=new q,o=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let h=0;h<u;h++)p[g++]=c[f++]}return new Zt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],f=e(p,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new Ft,Li=new ll,Ma=new ua,ec=new q,Sa=new q,Ea=new q,wa=new q,Gs=new q,Ca=new q,tc=new q,Ta=new q;class si extends ln{constructor(e=new En,t=new Ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ca.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(Gs.fromBufferAttribute(d,e),s?Ca.addScaledVector(Gs,u):Ca.addScaledVector(Gs.sub(t),u))}t.add(Ca)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(a),Li.copy(e.ray).recast(e.near),!(Ma.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ma,ec)===null||Li.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(a).invert(),Li.copy(e.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,p=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const m=p[g],h=s[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=_;x<A;x+=3){const T=o.getX(x),L=o.getX(x+1),F=o.getX(x+2);r=Aa(this,h,e,i,c,u,d,T,L,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Aa(this,s,e,i,c,u,d,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=p.length;g<v;g++){const m=p[g],h=s[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=_;x<A;x+=3){const T=x,L=x+1,F=x+2;r=Aa(this,h,e,i,c,u,d,T,L,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,h=v;m<h;m+=3){const y=m,_=m+1,x=m+2;r=Aa(this,s,e,i,c,u,d,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function uh(n,e,t,i,r,a,s,o){let l;if(e.side===pn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ai,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:n}}function Aa(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Sa),n.getVertexPosition(l,Ea),n.getVertexPosition(c,wa);const u=uh(n,e,t,i,Sa,Ea,wa,tc);if(u){const d=new q;In.getBarycoord(tc,Sa,Ea,wa,d),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,d,new Et)),a&&(u.uv1=In.getInterpolatedAttribute(a,o,l,c,d,new Et)),s&&(u.normal=In.getInterpolatedAttribute(s,o,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new q,materialIndex:0};In.getNormal(Sa,Ea,wa,p.normal),u.face=p,u.barycoord=d}return u}class da extends En{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(u,3)),this.setAttribute("uv",new On(d,2));function g(v,m,h,y,_,x,A,T,L,F,w){const b=x/L,D=A/F,X=x/2,j=A/2,J=T/2,Z=L+1,K=F+1;let ce=0,N=0;const P=new q;for(let H=0;H<K;H++){const I=H*D-j;for(let ie=0;ie<Z;ie++){const Oe=ie*b-X;P[v]=Oe*y,P[m]=I*_,P[h]=J,c.push(P.x,P.y,P.z),P[v]=0,P[m]=0,P[h]=T>0?1:-1,u.push(P.x,P.y,P.z),d.push(ie/L),d.push(1-H/F),ce+=1}}for(let H=0;H<F;H++)for(let I=0;I<L;I++){const ie=p+I+Z*H,Oe=p+I+Z*(H+1),te=p+(I+1)+Z*(H+1),fe=p+(I+1)+Z*H;l.push(ie,Oe,fe),l.push(Oe,te,fe),N+=6}o.addGroup(f,N,w),f+=N,p+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const r in i)e[r]=i[r]}return e}function dh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const ph={clone:Cr,merge:sn};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vu extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new q,nc=new Et,ic=new Et;class Sn extends Vu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,nc,ic),t.subVectors(ic,nc)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,lr=1;class mh extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(or,lr,e,t);r.layers=this.layers,this.add(r);const a=new Sn(or,lr,e,t);a.layers=this.layers,this.add(a);const s=new Sn(or,lr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(or,lr,e,t);o.layers=this.layers,this.add(o);const l=new Sn(or,lr,e,t);l.layers=this.layers,this.add(l);const c=new Sn(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hu extends hn{constructor(e,t,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gh extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new da(5,5,5),a=new ui({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:wi});a.uniforms.tEquirect.value=t;const s=new si(r,a),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Xn),new mh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class _h extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ws=new q,vh=new q,bh=new tt;class Oi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ws.subVectors(i,t).cross(vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ws),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bh.getNormalMatrix(e),r=this.coplanarPoint(Ws).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new ua,Ra=new q;class Gu{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,a=new Oi,s=new Oi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],f=r[8],g=r[9],v=r[10],m=r[11],h=r[12],y=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-a,p-c,m-f,x-h).normalize(),i[1].setComponents(l+a,p+c,m+f,x+h).normalize(),i[2].setComponents(l+s,p+u,m+g,x+y).normalize(),i[3].setComponents(l-s,p-u,m-g,x-y).normalize(),i[4].setComponents(l-o,p-d,m-v,x-_).normalize(),t===ai)i[5].setComponents(l+o,p+d,m+v,x+_).normalize();else if(t===es)i[5].setComponents(o,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cl extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ns=new q,is=new q,rc=new Ft,zr=new ll,Pa=new ua,Xs=new q,ac=new q;class xh extends ln{constructor(e=new En,t=new cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ns.fromBufferAttribute(t,r-1),is.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ns.distanceTo(is);e.setAttribute("lineDistance",new On(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=a,e.ray.intersectsSphere(Pa)===!1)return;rc.copy(r).invert(),zr.copy(e.ray).applyMatrix4(rc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let v=f,m=g-1;v<m;v+=c){const h=u.getX(v),y=u.getX(v+1),_=Na(this,e,zr,l,h,y);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),h=Na(this,e,zr,l,v,m);h&&t.push(h)}}else{const f=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let v=f,m=g-1;v<m;v+=c){const h=Na(this,e,zr,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=Na(this,e,zr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Na(n,e,t,i,r,a){const s=n.geometry.attributes.position;if(ns.fromBufferAttribute(s,r),is.fromBufferAttribute(s,a),t.distanceSqToSegment(ns,is,Xs,ac)>i)return;Xs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Xs);if(!(l<e.near||l>e.far))return{distance:l,point:ac.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const sc=new q,oc=new q;class Wu extends xh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)sc.fromBufferAttribute(t,r),oc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sc.distanceTo(oc);e.setAttribute("lineDistance",new On(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yh extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lc=new Ft,Vo=new ll,La=new ua,Fa=new q;class Mh extends ln{constructor(e=new En,t=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=a,e.ray.intersectsSphere(La)===!1)return;lc.copy(r).invert(),Vo.copy(e.ray).applyMatrix4(lc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let g=p,v=f;g<v;g++){const m=c.getX(g);Fa.fromBufferAttribute(d,m),cc(Fa,m,l,r,e,t,this)}}else{const p=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let g=p,v=f;g<v;g++)Fa.fromBufferAttribute(d,g),cc(Fa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function cc(n,e,t,i,r,a,s){const o=Vo.distanceSqToPoint(n);if(o<t){const l=new q;Vo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ia extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Xu extends hn{constructor(e,t,i,r,a,s,o,l,c,u=_r){if(u!==_r&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_r&&(i=qi),i===void 0&&u===Er&&(i=Sr),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hs extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,f=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const y=h*p-s;for(let _=0;_<c;_++){const x=_*d-a;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const _=y+c*h,x=y+c*(h+1),A=y+1+c*(h+1),T=y+1+c*h;f.push(_,x,T),f.push(x,A,T)}this.setIndex(f),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(v,3)),this.setAttribute("uv",new On(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sh extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eh extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qu extends Vu{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wh extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ch extends Wu{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new En;r.setAttribute("position",new On(t,3)),r.setAttribute("color",new On(i,3));const a=new cl({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,i){const r=new bt,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function uc(n,e,t,i){const r=Th(i);switch(t){case Eu:return n*e;case Cu:return n*e;case Tu:return n*e*2;case Au:return n*e/r.components*r.byteLength;case il:return n*e/r.components*r.byteLength;case Ru:return n*e*2/r.components*r.byteLength;case rl:return n*e*2/r.components*r.byteLength;case wu:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case al:return n*e*4/r.components*r.byteLength;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(n,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(n,8)*Math.max(e,8)/2;case bo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $a:case Uo:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pu:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bo:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Th(n){switch(n){case li:case yu:return{byteLength:1,components:1};case Qr:case Mu:case oa:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case qi:case el:case ri:return{byteLength:4,components:1};case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ju(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ah(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var Rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ph=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dh=`#ifdef USE_AOMAP
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
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh=`#ifdef USE_BATCHING
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
#endif`,kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
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
#endif`,Gh=`#ifdef USE_BUMPMAP
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jh=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,Af=`struct PhysicalMaterial {
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
}`,Rf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
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
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jf=`#ifdef USE_NORMALMAP
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
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Om=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Rh,alphahash_pars_fragment:Ph,alphamap_fragment:Nh,alphamap_pars_fragment:Lh,alphatest_fragment:Fh,alphatest_pars_fragment:Ih,aomap_fragment:Dh,aomap_pars_fragment:Uh,batching_pars_vertex:Oh,batching_vertex:kh,begin_vertex:Bh,beginnormal_vertex:zh,bsdfs:Vh,iridescence_fragment:Hh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Wh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:jh,color_fragment:Yh,color_pars_fragment:$h,color_pars_vertex:Zh,color_vertex:Kh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:sf,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Mf,envmap_vertex:pf,fog_vertex:hf,fog_pars_vertex:ff,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:vf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:xf,lights_pars_begin:yf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Ef,lights_phong_fragment:wf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Pf,lights_fragment_end:Nf,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Df,map_fragment:Uf,map_pars_fragment:Of,map_particle_fragment:kf,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Hf,morphcolor_vertex:Gf,morphnormal_vertex:Wf,morphtarget_pars_vertex:Xf,morphtarget_vertex:qf,normal_fragment_begin:jf,normal_fragment_maps:Yf,normal_pars_fragment:$f,normal_pars_vertex:Zf,normal_vertex:Kf,normalmap_pars_fragment:Jf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:nm,opaque_fragment:im,packing:rm,premultiplied_alpha_fragment:am,project_vertex:sm,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:pm,shadowmap_vertex:hm,shadowmask_pars_fragment:fm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:bm,specularmap_pars_fragment:xm,tonemapping_fragment:ym,tonemapping_pars_fragment:Mm,transmission_fragment:Sm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Cm,uv_vertex:Tm,worldpos_vertex:Am,background_vert:Rm,background_frag:Pm,backgroundCube_vert:Nm,backgroundCube_frag:Lm,cube_vert:Fm,cube_frag:Im,depth_vert:Dm,depth_frag:Um,distanceRGBA_vert:Om,distanceRGBA_frag:km,equirect_vert:Bm,equirect_frag:zm,linedashed_vert:Vm,linedashed_frag:Hm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:jm,meshmatcap_frag:Ym,meshnormal_vert:$m,meshnormal_frag:Zm,meshphong_vert:Km,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:eg,meshtoon_vert:tg,meshtoon_frag:ng,points_vert:ig,points_frag:rg,shadow_vert:ag,shadow_frag:sg,sprite_vert:og,sprite_frag:lg},Te={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Wn={basic:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new bt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new bt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:sn([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:sn([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:sn([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:sn([Te.common,Te.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:sn([Te.lights,Te.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Wn.physical={uniforms:sn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Da={r:0,b:0,g:0},Ii=new ci,cg=new Ft;function ug(n,e,t,i,r,a,s){const o=new bt(0);let l=a===!0?0:1,c,u,d=null,p=0,f=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const A=g(_);A===null?h(o,l):A&&A.isColor&&(h(A,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===ps)?(u===void 0&&(u=new si(new da(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Cr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ii.copy(x.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Ii)),u.material.toneMapped=vt.getTransfer(A.colorSpace)!==Mt,(d!==A||p!==A.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,p=A.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new si(new hs(2,2),new ui({name:"BackgroundMaterial",uniforms:Cr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=vt.getTransfer(A.colorSpace)!==Mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||p!==A.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,p=A.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,x){_.getRGB(Da,zu(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,x,s)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(o,l)},render:v,addToRenderList:m,dispose:y}}function dg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let a=r,s=!1;function o(b,D,X,j,J){let Z=!1;const K=d(j,X,D);a!==K&&(a=K,c(a.object)),Z=f(b,j,X,J),Z&&g(b,j,X,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,x(b,D,X,j),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,D,X){const j=X.wireframe===!0;let J=i[b.id];J===void 0&&(J={},i[b.id]=J);let Z=J[D.id];Z===void 0&&(Z={},J[D.id]=Z);let K=Z[j];return K===void 0&&(K=p(l()),Z[j]=K),K}function p(b){const D=[],X=[],j=[];for(let J=0;J<t;J++)D[J]=0,X[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:j,object:b,attributes:{},index:null}}function f(b,D,X,j){const J=a.attributes,Z=D.attributes;let K=0;const ce=X.getAttributes();for(const N in ce)if(ce[N].location>=0){const H=J[N];let I=Z[N];if(I===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(I=b.instanceColor)),H===void 0||H.attribute!==I||I&&H.data!==I.data)return!0;K++}return a.attributesNum!==K||a.index!==j}function g(b,D,X,j){const J={},Z=D.attributes;let K=0;const ce=X.getAttributes();for(const N in ce)if(ce[N].location>=0){let H=Z[N];H===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(H=b.instanceColor));const I={};I.attribute=H,H&&H.data&&(I.data=H.data),J[N]=I,K++}a.attributes=J,a.attributesNum=K,a.index=j}function v(){const b=a.newAttributes;for(let D=0,X=b.length;D<X;D++)b[D]=0}function m(b){h(b,0)}function h(b,D){const X=a.newAttributes,j=a.enabledAttributes,J=a.attributeDivisors;X[b]=1,j[b]===0&&(n.enableVertexAttribArray(b),j[b]=1),J[b]!==D&&(n.vertexAttribDivisor(b,D),J[b]=D)}function y(){const b=a.newAttributes,D=a.enabledAttributes;for(let X=0,j=D.length;X<j;X++)D[X]!==b[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function _(b,D,X,j,J,Z,K){K===!0?n.vertexAttribIPointer(b,D,X,J,Z):n.vertexAttribPointer(b,D,X,j,J,Z)}function x(b,D,X,j){v();const J=j.attributes,Z=X.getAttributes(),K=D.defaultAttributeValues;for(const ce in Z){const N=Z[ce];if(N.location>=0){let P=J[ce];if(P===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(P=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(P=b.instanceColor)),P!==void 0){const H=P.normalized,I=P.itemSize,ie=e.get(P);if(ie===void 0)continue;const Oe=ie.buffer,te=ie.type,fe=ie.bytesPerElement,Ce=te===n.INT||te===n.UNSIGNED_INT||P.gpuType===el;if(P.isInterleavedBufferAttribute){const ve=P.data,Ae=ve.stride,ke=P.offset;if(ve.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)h(N.location+ze,ve.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ze=0;ze<N.locationSize;ze++)m(N.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ze=0;ze<N.locationSize;ze++)_(N.location+ze,I/N.locationSize,te,H,Ae*fe,(ke+I/N.locationSize*ze)*fe,Ce)}else{if(P.isInstancedBufferAttribute){for(let ve=0;ve<N.locationSize;ve++)h(N.location+ve,P.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ve=0;ve<N.locationSize;ve++)m(N.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ve=0;ve<N.locationSize;ve++)_(N.location+ve,I/N.locationSize,te,H,I*fe,I/N.locationSize*ve*fe,Ce)}}else if(K!==void 0){const H=K[ce];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(N.location,H);break;case 3:n.vertexAttrib3fv(N.location,H);break;case 4:n.vertexAttrib4fv(N.location,H);break;default:n.vertexAttrib1fv(N.location,H)}}}}y()}function A(){F();for(const b in i){const D=i[b];for(const X in D){const j=D[X];for(const J in j)u(j[J].object),delete j[J];delete D[X]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const D=i[b.id];for(const X in D){const j=D[X];for(const J in j)u(j[J].object),delete j[J];delete D[X]}delete i[b.id]}function L(b){for(const D in i){const X=i[D];if(X[b.id]===void 0)continue;const j=X[b.id];for(const J in j)u(j[J].object),delete j[J];delete X[b.id]}}function F(){w(),s=!0,a!==r&&(a=r,c(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function pg(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function l(c,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)s(c[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*p[v];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(L){return!(L!==Dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const F=L===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==li&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ri&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:A,maxSamples:T}}function fg(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Oi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||a&&!m)a?u(null):c();else{const y=a?0:i,_=y*4;let x=h.clippingState||null;l.value=x,x=u(g,p,_,f);for(let A=0;A!==_;++A)x[A]=t[A];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=f+v*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,x=f;_!==v;++_,x+=4)s.copy(d[_]).applyMatrix4(y,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function mg(n){let e=new WeakMap;function t(s,o){return o===uo?s.mapping=yr:o===po&&(s.mapping=Mr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===uo||o===po)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new gh(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const fr=4,dc=[.125,.215,.35,.446,.526,.582],zi=20,qs=new qu,pc=new bt;let js=null,Ys=0,$s=0,Zs=!1;const ki=(1+Math.sqrt(5))/2,cr=1/ki,hc=[new q(-ki,cr,0),new q(ki,cr,0),new q(-cr,0,ki),new q(cr,0,ki),new q(0,ki,-cr),new q(0,ki,cr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){js=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(js,Ys,$s),this._renderer.xr.enabled=Zs,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),js=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:oa,format:Dn,colorSpace:wr,depthBuffer:!1},r=mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(a)),this._blurMaterial=_g(a,e,t)}return r}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,i,r){const o=new Sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(pc),u.toneMapping=Ti,u.autoClear=!1;const f=new Ou({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new si(new da,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(pc),v=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const _=this._cubeSize;Ua(r,y*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yr||e.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new si(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=hc[(r-a-1)%hc.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new si(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*zi-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const h=[];let y=0;for(let L=0;L<zi;++L){const F=L/v,w=Math.exp(-F*F/2);h.push(w),L===0?y+=w:L<m&&(y+=2*w)}for(let L=0;L<h.length;L++)h[L]=h[L]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const x=this._sizeLods[r],A=3*x*(r>_-fr?r-_+fr:0),T=4*(this._cubeSize-x);Ua(t,A,T,3*x,2*x),l.setRenderTarget(t),l.render(d,qs)}}function gg(n){const e=[],t=[],i=[];let r=n;const a=n-fr+1+dc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-fr?l=dc[s-n+fr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,h=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(h*g*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,F=T>2?0:-1,w=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];y.set(w,v*g*T),_.set(p,m*g*T);const b=[T,T,T,T,T,T];x.set(b,h*g*T)}const A=new En;A.setAttribute("position",new Zt(y,v)),A.setAttribute("uv",new Zt(_,m)),A.setAttribute("faceIndex",new Zt(x,h)),e.push(A),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mc(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _g(n,e,t){const i=new Float32Array(zi),r=new q(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function gc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function _c(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function vg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===uo||l===po,u=l===yr||l===Mr;if(c||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new fc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new fc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function bg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xg(n,e,t,i){const r={},a=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete r[p.id];const f=a.get(p);f&&(e.remove(f),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const A=y[_+0],T=y[_+1],L=y[_+2];p.push(A,T,T,L,L,A)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const A=_+0,T=_+1,L=_+2;p.push(A,T,T,L,L,A)}}else return;const m=new(Lu(p)?Bu:ku)(p,1);m.version=v;const h=a.get(d);h&&e.remove(h),a.set(d,m)}function u(d){const p=a.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function yg(n,e,t){let i;function r(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,f){n.drawElements(i,f,a,p*s),t.update(f,i,1)}function c(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,a,p*s,g),t.update(f,i,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,p,0,g);let m=0;for(let h=0;h<g;h++)m+=f[h];t.update(m,i,1)}function d(p,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/s,f[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,a,p,0,v,0,g);let h=0;for(let y=0;y<g;y++)h+=f[y]*v[y];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Mg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sg(n,e,t){const i=new WeakMap,r=new Dt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*A*4*d),L=new Iu(T,x,A,d);L.type=ri,L.needsUpdate=!0;const F=_*4;for(let b=0;b<d;b++){const D=m[b],X=h[b],j=y[b],J=x*A*4*b;for(let Z=0;Z<D.count;Z++){const K=Z*F;f===!0&&(r.fromBufferAttribute(D,Z),T[J+K+0]=r.x,T[J+K+1]=r.y,T[J+K+2]=r.z,T[J+K+3]=0),g===!0&&(r.fromBufferAttribute(X,Z),T[J+K+4]=r.x,T[J+K+5]=r.y,T[J+K+6]=r.z,T[J+K+7]=0),v===!0&&(r.fromBufferAttribute(j,Z),T[J+K+8]=r.x,T[J+K+9]=r.y,T[J+K+10]=r.z,T[J+K+11]=j.itemSize===4?r.w:1)}}p={count:d,texture:L,size:new Et(x,A)},i.set(o,p),o.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function Eg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Yu=new hn,vc=new Xu(1,1),$u=new Iu,Zu=new eh,Ku=new Hu,bc=[],xc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=bc[r];if(a===void 0&&(a=new Float32Array(r),bc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fs(n,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),Gt(t,i)}}function Pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),Gt(t,i)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;yc.set(i),n.uniformMatrix4fv(this.addr,!1,yc),Gt(t,i)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function Ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(vc.compareFunction=Nu,a=vc):a=Yu,t.setTexture2D(e||a,r)}function Vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zu,r)}function Hg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ku,r)}function Gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$u,r)}function Wg(n){switch(n){case 5126:return wg;case 35664:return Cg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Pg;case 35676:return Ng;case 5124:case 35670:return Lg;case 35667:case 35671:return Fg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Og;case 36295:return kg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Xg(n,e){n.uniform1fv(this.addr,e)}function qg(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function jg(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function Yg(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function $g(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zg(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kg(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jg(n,e){n.uniform1iv(this.addr,e)}function Qg(n,e){n.uniform2iv(this.addr,e)}function e0(n,e){n.uniform3iv(this.addr,e)}function t0(n,e){n.uniform4iv(this.addr,e)}function n0(n,e){n.uniform1uiv(this.addr,e)}function i0(n,e){n.uniform2uiv(this.addr,e)}function r0(n,e){n.uniform3uiv(this.addr,e)}function a0(n,e){n.uniform4uiv(this.addr,e)}function s0(n,e,t){const i=this.cache,r=e.length,a=fs(t,r);Ht(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Yu,a[s])}function o0(n,e,t){const i=this.cache,r=e.length,a=fs(t,r);Ht(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Zu,a[s])}function l0(n,e,t){const i=this.cache,r=e.length,a=fs(t,r);Ht(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ku,a[s])}function c0(n,e,t){const i=this.cache,r=e.length,a=fs(t,r);Ht(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||$u,a[s])}function u0(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return jg;case 35666:return Yg;case 35674:return $g;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class d0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wg(t.type)}}class p0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Ec(n,e){n.seq.push(e),n.map[e.id]=e}function f0(n,e,t){const i=n.name,r=i.length;for(Ks.lastIndex=0;;){const a=Ks.exec(i),s=Ks.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Ec(t,c===void 0?new d0(o,n,e):new p0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new h0(o),Ec(t,d)),t=d}}}class Za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);f0(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function wc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const m0=37297;let g0=0;function _0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Cc=new tt;function v0(n){vt._getMatrix(Cc,vt.workingColorSpace,n);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Qa:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Tc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_0(n.getShaderSource(e),s)}else return r}function b0(n,e){const t=v0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x0(n,e){let t;switch(e){case cp:t="Linear";break;case up:t="Reinhard";break;case dp:t="Cineon";break;case pp:t="ACESFilmic";break;case fp:t="AgX";break;case mp:t="Neutral";break;case hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oa=new q;function y0(){vt.getLuminanceCoefficients(Oa);const n=Oa.x.toFixed(4),e=Oa.y.toFixed(4),t=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function S0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Wr(n){return n!==""}function Ac(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(n){return n.replace(w0,T0)}const C0=new Map;function T0(n,e){let t=it[e];if(t===void 0){const i=C0.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(n){return n.replace(A0,R0)}function R0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Nc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function P0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function N0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function F0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bu:e="ENVMAP_BLENDING_MULTIPLY";break;case op:e="ENVMAP_BLENDING_MIX";break;case lp:e="ENVMAP_BLENDING_ADD";break}return e}function I0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function D0(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=P0(t),c=N0(t),u=L0(t),d=F0(t),p=I0(t),f=M0(t),g=S0(a),v=r.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),h.length>0&&(h+=`
`)):(m=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),h=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?it.tonemapping_pars_fragment:"",t.toneMapping!==Ti?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,b0("linearToOutputTexel",t.outputColorSpace),y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),s=Ho(s),s=Ac(s,t),s=Rc(s,t),o=Ho(o),o=Ac(o,t),o=Rc(o,t),s=Pc(s),o=Pc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=y+m+s,x=y+h+o,A=wc(r,r.VERTEX_SHADER,_),T=wc(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(v).trim(),j=r.getShaderInfoLog(A).trim(),J=r.getShaderInfoLog(T).trim();let Z=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,T);else{const ce=Tc(r,A,"vertex"),N=Tc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ce+`
`+N)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(j===""||J==="")&&(K=!1);K&&(D.diagnostics={runnable:Z,programLog:X,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:h}})}r.deleteShader(A),r.deleteShader(T),F=new Za(r,v),w=E0(r,v)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,m0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let U0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k0(e),t.set(e,i)),i}}class k0{constructor(e){this.id=U0++,this.code=e,this.usedTimes=0}}function B0(n,e,t,i,r,a,s){const o=new Du,l=new O0,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,D,X,j){const J=X.fog,Z=j.geometry,K=w.isMeshStandardMaterial?X.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),N=ce&&ce.mapping===ps?ce.image.height:null,P=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const H=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,I=H!==void 0?H.length:0;let ie=0;Z.morphAttributes.position!==void 0&&(ie=1),Z.morphAttributes.normal!==void 0&&(ie=2),Z.morphAttributes.color!==void 0&&(ie=3);let Oe,te,fe,Ce;if(P){const Q=Wn[P];Oe=Q.vertexShader,te=Q.fragmentShader}else Oe=w.vertexShader,te=w.fragmentShader,l.update(w),fe=l.getVertexShaderID(w),Ce=l.getFragmentShaderID(w);const ve=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),ke=j.isInstancedMesh===!0,ze=j.isBatchedMesh===!0,at=!!w.map,Ye=!!w.matcap,ct=!!ce,U=!!w.aoMap,Tt=!!w.lightMap,Je=!!w.bumpMap,Qe=!!w.normalMap,De=!!w.displacementMap,ot=!!w.emissiveMap,Fe=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,G=w.clearcoat>0,re=w.dispersion>0,se=w.iridescence>0,ne=w.sheen>0,pe=w.transmission>0,he=S&&!!w.anisotropyMap,ye=G&&!!w.clearcoatMap,Ze=G&&!!w.clearcoatNormalMap,me=G&&!!w.clearcoatRoughnessMap,Pe=se&&!!w.iridescenceMap,Ie=se&&!!w.iridescenceThicknessMap,Be=ne&&!!w.sheenColorMap,Re=ne&&!!w.sheenRoughnessMap,et=!!w.specularMap,Xe=!!w.specularColorMap,ft=!!w.specularIntensityMap,B=pe&&!!w.transmissionMap,Me=pe&&!!w.thicknessMap,ee=!!w.gradientMap,oe=!!w.alphaMap,Se=w.alphaTest>0,xe=!!w.alphaHash,M=!!w.extensions;let R=Ti;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(R=n.toneMapping);const z={shaderID:P,shaderType:w.type,shaderName:w.name,vertexShader:Oe,fragmentShader:te,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ze,batchingColor:ze&&j._colorsTexture!==null,instancing:ke,instancingColor:ke&&j.instanceColor!==null,instancingMorph:ke&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:wr,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:Ye,envMap:ct,envMapMode:ct&&ce.mapping,envMapCubeUVHeight:N,aoMap:U,lightMap:Tt,bumpMap:Je,normalMap:Qe,displacementMap:p&&De,emissiveMap:ot,normalMapObjectSpace:Qe&&w.normalMapType===xp,normalMapTangentSpace:Qe&&w.normalMapType===bp,metalnessMap:Fe,roughnessMap:C,anisotropy:S,anisotropyMap:he,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:Ze,clearcoatRoughnessMap:me,dispersion:re,iridescence:se,iridescenceMap:Pe,iridescenceThicknessMap:Ie,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:Re,specularMap:et,specularColorMap:Xe,specularIntensityMap:ft,transmission:pe,transmissionMap:B,thicknessMap:Me,gradientMap:ee,opaque:w.transparent===!1&&w.blending===Ci&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:Se,alphaHash:xe,combine:w.combine,mapUv:at&&v(w.map.channel),aoMapUv:U&&v(w.aoMap.channel),lightMapUv:Tt&&v(w.lightMap.channel),bumpMapUv:Je&&v(w.bumpMap.channel),normalMapUv:Qe&&v(w.normalMap.channel),displacementMapUv:De&&v(w.displacementMap.channel),emissiveMapUv:ot&&v(w.emissiveMap.channel),metalnessMapUv:Fe&&v(w.metalnessMap.channel),roughnessMapUv:C&&v(w.roughnessMap.channel),anisotropyMapUv:he&&v(w.anisotropyMap.channel),clearcoatMapUv:ye&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(w.sheenRoughnessMap.channel),specularMapUv:et&&v(w.specularMap.channel),specularColorMapUv:Xe&&v(w.specularColorMap.channel),specularIntensityMapUv:ft&&v(w.specularIntensityMap.channel),transmissionMapUv:B&&v(w.transmissionMap.channel),thicknessMapUv:Me&&v(w.thicknessMap.channel),alphaMapUv:oe&&v(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qe||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(at||oe),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:j.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:R,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&vt.getTransfer(w.map.colorSpace)===Mt,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&vt.getTransfer(w.emissiveMap.colorSpace)===Mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ni,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:M&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return z.vertexUv1s=c.has(1),z.vertexUv2s=c.has(2),z.vertexUv3s=c.has(3),c.clear(),z}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const b=g[w.type];let D;if(b){const X=Wn[b];D=ph.clone(X.uniforms)}else D=w.uniforms;return D}function A(w,b){let D;for(let X=0,j=u.length;X<j;X++){const J=u[X];if(J.cacheKey===b){D=J,++D.usedTimes;break}}return D===void 0&&(D=new D0(n,b,w,a),u.push(D)),D}function T(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:A,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:F}}function z0(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function V0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,p,f,g,v,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function o(d,p,f,g,v,m){const h=s(d,p,f,g,v,m);f.transmission>0?i.push(h):f.transparent===!0?r.push(h):t.push(h)}function l(d,p,f,g,v,m){const h=s(d,p,f,g,v,m);f.transmission>0?i.unshift(h):f.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||V0),i.length>1&&i.sort(p||Lc),r.length>1&&r.sort(p||Lc)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function H0(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Fc,n.set(i,[s])):r>=a.length?(s=new Fc,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new bt};break;case"SpotLight":t={position:new q,direction:new q,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function W0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let X0=0;function q0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j0(n){const e=new G0,t=W0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,a=new Ft,s=new Ft;function o(c){let u=0,d=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,h=0,y=0,_=0,x=0,A=0,T=0,L=0;c.sort(q0);for(let w=0,b=c.length;w<b;w++){const D=c[w],X=D.color,j=D.intensity,J=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*j,d+=X.g*j,p+=X.b*j;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],j);L++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ce=D.shadow,N=t.get(D);N.shadowIntensity=ce.intensity,N.shadowBias=ce.bias,N.shadowNormalBias=ce.normalBias,N.shadowRadius=ce.radius,N.shadowMapSize=ce.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=D.shadow.matrix,y++}i.directional[f]=K,f++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(X).multiplyScalar(j),K.distance=J,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[v]=K;const ce=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,ce.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=ce.matrix,D.castShadow){const N=t.get(D);N.shadowIntensity=ce.intensity,N.shadowBias=ce.bias,N.shadowNormalBias=ce.normalBias,N.shadowRadius=ce.radius,N.shadowMapSize=ce.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=Z,x++}v++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(X).multiplyScalar(j),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ce=D.shadow,N=t.get(D);N.shadowIntensity=ce.intensity,N.shadowBias=ce.bias,N.shadowNormalBias=ce.normalBias,N.shadowRadius=ce.radius,N.shadowMapSize=ce.mapSize,N.shadowCameraNear=ce.camera.near,N.shadowCameraFar=ce.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=K,g++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(j),K.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[h]=K,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==y||F.numPointShadows!==_||F.numSpotShadows!==x||F.numSpotMaps!==A||F.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,F.directionalLength=f,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=y,F.numPointShadows=_,F.numSpotShadows=x,F.numSpotMaps=A,F.numLightProbes=L,i.version=X0++)}function l(c,u){let d=0,p=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const _=c[h];if(_.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(_.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),s.identity(),a.copy(_.matrixWorld),a.premultiply(m),s.extractRotation(a),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(_.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Ic(n){const e=new j0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function Y0(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Ic(n),e.set(r,[o])):a>=s.length?(o=new Ic(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function K0(n,e,t){let i=new Gu;const r=new Et,a=new Et,s=new Dt,o=new Sh({depthPacking:vp}),l=new Eh,c={},u=t.maxTextureSize,d={[Ai]:pn,[pn]:Ai,[ni]:ni},p=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:$0,fragmentShader:Z0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new si(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let h=this.type;this.render=function(T,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(wi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=h!==Qn&&this.type===Qn,J=h===Qn&&this.type!==Qn;for(let Z=0,K=T.length;Z<K;Z++){const ce=T[Z],N=ce.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const P=N.getFrameExtents();if(r.multiply(P),a.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/P.x),r.x=a.x*P.x,N.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/P.y),r.y=a.y*P.y,N.mapSize.y=a.y)),N.map===null||j===!0||J===!0){const I=this.type!==Qn?{minFilter:Un,magFilter:Un}:{};N.map!==null&&N.map.dispose(),N.map=new ji(r.x,r.y,I),N.map.texture.name=ce.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const H=N.getViewportCount();for(let I=0;I<H;I++){const ie=N.getViewport(I);s.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),X.viewport(s),N.updateMatrices(ce,I),i=N.getFrustum(),x(L,F,N.camera,ce,this.type)}N.isPointLightShadow!==!0&&this.type===Qn&&y(N,F),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,D)};function y(T,L){const F=e.update(v);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ji(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,F,p,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,F,f,v,null)}function _(T,L,F,w){let b=null;const D=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=F.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const X=b.uuid,j=L.uuid;let J=c[X];J===void 0&&(J={},c[X]=J);let Z=J[j];Z===void 0&&(Z=b.clone(),J[j]=Z,L.addEventListener("dispose",A)),b=Z}if(b.visible=L.visible,b.wireframe=L.wireframe,w===Qn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=n.properties.get(b);X.light=F}return b}function x(T,L,F,w,b){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const j=e.update(T),J=T.material;if(Array.isArray(J)){const Z=j.groups;for(let K=0,ce=Z.length;K<ce;K++){const N=Z[K],P=J[N.materialIndex];if(P&&P.visible){const H=_(T,P,w,b);T.onBeforeShadow(n,T,L,F,j,H,N),n.renderBufferDirect(F,null,j,H,T,N),T.onAfterShadow(n,T,L,F,j,H,N)}}}else if(J.visible){const Z=_(T,J,w,b);T.onBeforeShadow(n,T,L,F,j,Z,null),n.renderBufferDirect(F,null,j,Z,T,null),T.onAfterShadow(n,T,L,F,j,Z,null)}}const X=T.children;for(let j=0,J=X.length;j<J;j++)x(X[j],L,F,w,b)}function A(T){T.target.removeEventListener("dispose",A);for(const F in c){const w=c[F],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const J0={[io]:ro,[ao]:lo,[so]:co,[xr]:oo,[ro]:io,[lo]:ao,[co]:so,[oo]:xr};function Q0(n,e){function t(){let B=!1;const Me=new Dt;let ee=null;const oe=new Dt(0,0,0,0);return{setMask:function(Se){ee!==Se&&!B&&(n.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){B=Se},setClear:function(Se,xe,M,R,z){z===!0&&(Se*=R,xe*=R,M*=R),Me.set(Se,xe,M,R),oe.equals(Me)===!1&&(n.clearColor(Se,xe,M,R),oe.copy(Me))},reset:function(){B=!1,ee=null,oe.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,ee=null,oe=null,Se=null;return{setReversed:function(xe){if(Me!==xe){const M=e.get("EXT_clip_control");Me?M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT):M.clipControlEXT(M.LOWER_LEFT_EXT,M.NEGATIVE_ONE_TO_ONE_EXT);const R=Se;Se=null,this.setClear(R)}Me=xe},getReversed:function(){return Me},setTest:function(xe){xe?ve(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(xe){ee!==xe&&!B&&(n.depthMask(xe),ee=xe)},setFunc:function(xe){if(Me&&(xe=J0[xe]),oe!==xe){switch(xe){case io:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case ao:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case so:n.depthFunc(n.EQUAL);break;case oo:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=xe}},setLocked:function(xe){B=xe},setClear:function(xe){Se!==xe&&(Me&&(xe=1-xe),n.clearDepth(xe),Se=xe)},reset:function(){B=!1,ee=null,oe=null,Se=null,Me=!1}}}function r(){let B=!1,Me=null,ee=null,oe=null,Se=null,xe=null,M=null,R=null,z=null;return{setTest:function(Q){B||(Q?ve(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Q){Me!==Q&&!B&&(n.stencilMask(Q),Me=Q)},setFunc:function(Q,de,V){(ee!==Q||oe!==de||Se!==V)&&(n.stencilFunc(Q,de,V),ee=Q,oe=de,Se=V)},setOp:function(Q,de,V){(xe!==Q||M!==de||R!==V)&&(n.stencilOp(Q,de,V),xe=Q,M=de,R=V)},setLocked:function(Q){B=Q},setClear:function(Q){z!==Q&&(n.clearStencil(Q),z=Q)},reset:function(){B=!1,Me=null,ee=null,oe=null,Se=null,xe=null,M=null,R=null,z=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,h=null,y=null,_=null,x=null,A=null,T=null,L=new bt(0,0,0),F=0,w=!1,b=null,D=null,X=null,j=null,J=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ce=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(N)[1]),K=ce>=1):N.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),K=ce>=2);let P=null,H={};const I=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Oe=new Dt().fromArray(I),te=new Dt().fromArray(ie);function fe(B,Me,ee,oe){const Se=new Uint8Array(4),xe=n.createTexture();n.bindTexture(B,xe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let M=0;M<ee;M++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Me+M,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return xe}const Ce={};Ce[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),s.setFunc(xr),Je(!1),Qe(Il),ve(n.CULL_FACE),U(wi);function ve(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ae(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ke(B,Me){return d[B]!==Me?(n.bindFramebuffer(B,Me),d[B]=Me,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ze(B,Me){let ee=f,oe=!1;if(B){ee=p.get(Me),ee===void 0&&(ee=[],p.set(Me,ee));const Se=B.textures;if(ee.length!==Se.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,M=Se.length;xe<M;xe++)ee[xe]=n.COLOR_ATTACHMENT0+xe;ee.length=Se.length,oe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ee)}function at(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const Ye={[ii]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};Ye[qd]=n.MIN,Ye[jd]=n.MAX;const ct={[Yd]:n.ZERO,[$d]:n.ONE,[Zd]:n.SRC_COLOR,[Kr]:n.SRC_ALPHA,[np]:n.SRC_ALPHA_SATURATE,[ep]:n.DST_COLOR,[Jd]:n.DST_ALPHA,[Kd]:n.ONE_MINUS_SRC_COLOR,[Jr]:n.ONE_MINUS_SRC_ALPHA,[tp]:n.ONE_MINUS_DST_COLOR,[Qd]:n.ONE_MINUS_DST_ALPHA,[ip]:n.CONSTANT_COLOR,[rp]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[sp]:n.ONE_MINUS_CONSTANT_ALPHA};function U(B,Me,ee,oe,Se,xe,M,R,z,Q){if(B===wi){v===!0&&(Ae(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),B!==no){if(B!==m||Q!==w){if((h!==ii||x!==ii)&&(n.blendEquation(n.FUNC_ADD),h=ii,x=ii),Q)switch(B){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,_=null,A=null,T=null,L.set(0,0,0),F=0,m=B,w=Q}return}Se=Se||Me,xe=xe||ee,M=M||oe,(Me!==h||Se!==x)&&(n.blendEquationSeparate(Ye[Me],Ye[Se]),h=Me,x=Se),(ee!==y||oe!==_||xe!==A||M!==T)&&(n.blendFuncSeparate(ct[ee],ct[oe],ct[xe],ct[M]),y=ee,_=oe,A=xe,T=M),(R.equals(L)===!1||z!==F)&&(n.blendColor(R.r,R.g,R.b,z),L.copy(R),F=z),m=B,w=!1}function Tt(B,Me){B.side===ni?Ae(n.CULL_FACE):ve(n.CULL_FACE);let ee=B.side===pn;Me&&(ee=!ee),Je(ee),B.blending===Ci&&B.transparent===!1?U(wi):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),a.setMask(B.colorWrite);const oe=B.stencilWrite;o.setTest(oe),oe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ot(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function Qe(B){B!==Vd?(ve(n.CULL_FACE),B!==D&&(B===Il?n.cullFace(n.BACK):B===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=B}function De(B){B!==X&&(K&&n.lineWidth(B),X=B)}function ot(B,Me,ee){B?(ve(n.POLYGON_OFFSET_FILL),(j!==Me||J!==ee)&&(n.polygonOffset(Me,ee),j=Me,J=ee)):Ae(n.POLYGON_OFFSET_FILL)}function Fe(B){B?ve(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+Z-1),P!==B&&(n.activeTexture(B),P=B)}function S(B,Me,ee){ee===void 0&&(P===null?ee=n.TEXTURE0+Z-1:ee=P);let oe=H[ee];oe===void 0&&(oe={type:void 0,texture:void 0},H[ee]=oe),(oe.type!==B||oe.texture!==Me)&&(P!==ee&&(n.activeTexture(ee),P=ee),n.bindTexture(B,Me||Ce[B]),oe.type=B,oe.texture=Me)}function G(){const B=H[P];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){Oe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Oe.copy(B))}function Re(B){te.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function et(B,Me){let ee=c.get(Me);ee===void 0&&(ee=new WeakMap,c.set(Me,ee));let oe=ee.get(B);oe===void 0&&(oe=n.getUniformBlockIndex(Me,B.name),ee.set(B,oe))}function Xe(B,Me){const oe=c.get(Me).get(B);l.get(Me)!==oe&&(n.uniformBlockBinding(Me,oe,B.__bindingPointIndex),l.set(Me,oe))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},P=null,H={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,h=null,y=null,_=null,x=null,A=null,T=null,L=new bt(0,0,0),F=0,w=!1,b=null,D=null,X=null,j=null,J=null,Oe.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ve,disable:Ae,bindFramebuffer:ke,drawBuffers:ze,useProgram:at,setBlending:U,setMaterial:Tt,setFlipSided:Je,setCullFace:Qe,setLineWidth:De,setPolygonOffset:ot,setScissorTest:Fe,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:se,texImage2D:Pe,texImage3D:Ie,updateUBOMapping:et,uniformBlockBinding:Xe,texStorage2D:Ze,texStorage3D:me,texSubImage2D:ne,texSubImage3D:pe,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Be,viewport:Re,reset:ft}}function e_(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):ts("canvas")}function v(C,S,G){let re=1;const se=Fe(C);if((se.width>G||se.height>G)&&(re=G/Math.max(se.width,se.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(re*se.width),pe=Math.floor(re*se.height);d===void 0&&(d=g(ne,pe));const he=S?g(ne,pe):d;return he.width=ne,he.height=pe,he.getContext("2d").drawImage(C,0,0,ne,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ne+"x"+pe+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,S,G,re,se=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===n.RED&&(G===n.FLOAT&&(ne=n.R32F),G===n.HALF_FLOAT&&(ne=n.R16F),G===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.R8UI),G===n.UNSIGNED_SHORT&&(ne=n.R16UI),G===n.UNSIGNED_INT&&(ne=n.R32UI),G===n.BYTE&&(ne=n.R8I),G===n.SHORT&&(ne=n.R16I),G===n.INT&&(ne=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ne=n.RG32F),G===n.HALF_FLOAT&&(ne=n.RG16F),G===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RG8UI),G===n.UNSIGNED_SHORT&&(ne=n.RG16UI),G===n.UNSIGNED_INT&&(ne=n.RG32UI),G===n.BYTE&&(ne=n.RG8I),G===n.SHORT&&(ne=n.RG16I),G===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),G===n.UNSIGNED_INT&&(ne=n.RGB32UI),G===n.BYTE&&(ne=n.RGB8I),G===n.SHORT&&(ne=n.RGB16I),G===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),G===n.UNSIGNED_INT&&(ne=n.RGBA32UI),G===n.BYTE&&(ne=n.RGBA8I),G===n.SHORT&&(ne=n.RGBA16I),G===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),S===n.RGBA){const pe=se?Qa:vt.getTransfer(re);G===n.FLOAT&&(ne=n.RGBA32F),G===n.HALF_FLOAT&&(ne=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ne=pe===Mt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(C,S){let G;return C?S===null||S===qi||S===Sr?G=n.DEPTH24_STENCIL8:S===ri?G=n.DEPTH32F_STENCIL8:S===Qr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===Sr?G=n.DEPTH_COMPONENT24:S===ri?G=n.DEPTH_COMPONENT32F:S===Qr&&(G=n.DEPTH_COMPONENT16),G}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),F(S),S.isVideoTexture&&u.delete(S)}function L(C){const S=C.target;S.removeEventListener("dispose",L),b(S)}function F(C){const S=i.get(C);if(S.__webglInit===void 0)return;const G=C.source,re=p.get(G);if(re){const se=re[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(C),Object.keys(re).length===0&&p.delete(G)}i.remove(C)}function w(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const G=C.source,re=p.get(G);delete re[S.__cacheKey],s.memory.textures--}function b(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let se=0;se<S.__webglFramebuffer[re].length;se++)n.deleteFramebuffer(S.__webglFramebuffer[re][se]);else n.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)n.deleteFramebuffer(S.__webglFramebuffer[re]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let re=0,se=G.length;re<se;re++){const ne=i.get(G[re]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),s.memory.textures--),i.remove(G[re])}i.remove(C)}let D=0;function X(){D=0}function j(){const C=D;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function J(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){const G=i.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(G,C,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function K(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){te(G,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function ce(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){te(G,C,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function N(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){fe(G,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const P={[ho]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[fo]:n.MIRRORED_REPEAT},H={[Un]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[pa]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[Es]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},I={[yp]:n.NEVER,[Tp]:n.ALWAYS,[Mp]:n.LESS,[Nu]:n.LEQUAL,[Sp]:n.EQUAL,[Cp]:n.GEQUAL,[Ep]:n.GREATER,[wp]:n.NOTEQUAL};function ie(C,S){if(S.type===ri&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xn||S.magFilter===Es||S.magFilter===pa||S.magFilter===Hi||S.minFilter===Xn||S.minFilter===Es||S.minFilter===pa||S.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,P[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,P[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,P[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,H[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,H[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,I[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==pa&&S.minFilter!==Hi||S.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const re=S.source;let se=p.get(re);se===void 0&&(se={},p.set(re,se));const ne=J(S);if(ne!==C.__cacheKey){se[ne]===void 0&&(se[ne]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,G=!0),se[ne].usedTimes++;const pe=se[C.__cacheKey];pe!==void 0&&(se[C.__cacheKey].usedTimes--,pe.usedTimes===0&&w(S)),C.__cacheKey=ne,C.__webglTexture=se[ne].texture}return G}function te(C,S,G){let re=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=n.TEXTURE_3D);const se=Oe(C,S),ne=S.source;t.bindTexture(re,C.__webglTexture,n.TEXTURE0+G);const pe=i.get(ne);if(ne.version!==pe.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const he=vt.getPrimaries(vt.workingColorSpace),ye=S.colorSpace===Mi?null:vt.getPrimaries(S.colorSpace),Ze=S.colorSpace===Mi||he===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let me=v(S.image,!1,r.maxTextureSize);me=ot(S,me);const Pe=a.convert(S.format,S.colorSpace),Ie=a.convert(S.type);let Be=_(S.internalFormat,Pe,Ie,S.colorSpace,S.isVideoTexture);ie(re,S);let Re;const et=S.mipmaps,Xe=S.isVideoTexture!==!0,ft=pe.__version===void 0||se===!0,B=ne.dataReady,Me=A(S,me);if(S.isDepthTexture)Be=x(S.format===Er,S.type),ft&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Be,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Be,me.width,me.height,0,Pe,Ie,null));else if(S.isDataTexture)if(et.length>0){Xe&&ft&&t.texStorage2D(n.TEXTURE_2D,Me,Be,et[0].width,et[0].height);for(let ee=0,oe=et.length;ee<oe;ee++)Re=et[ee],Xe?B&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Re.width,Re.height,Pe,Ie,Re.data):t.texImage2D(n.TEXTURE_2D,ee,Be,Re.width,Re.height,0,Pe,Ie,Re.data);S.generateMipmaps=!1}else Xe?(ft&&t.texStorage2D(n.TEXTURE_2D,Me,Be,me.width,me.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,Pe,Ie,me.data)):t.texImage2D(n.TEXTURE_2D,0,Be,me.width,me.height,0,Pe,Ie,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,et[0].width,et[0].height,me.depth);for(let ee=0,oe=et.length;ee<oe;ee++)if(Re=et[ee],S.format!==Dn)if(Pe!==null)if(Xe){if(B)if(S.layerUpdates.size>0){const Se=uc(Re.width,Re.height,S.format,S.type);for(const xe of S.layerUpdates){const M=Re.data.subarray(xe*Se/Re.data.BYTES_PER_ELEMENT,(xe+1)*Se/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,xe,Re.width,Re.height,1,Pe,M)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Re.width,Re.height,me.depth,Pe,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Be,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Re.width,Re.height,me.depth,Pe,Ie,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Be,Re.width,Re.height,me.depth,0,Pe,Ie,Re.data)}else{Xe&&ft&&t.texStorage2D(n.TEXTURE_2D,Me,Be,et[0].width,et[0].height);for(let ee=0,oe=et.length;ee<oe;ee++)Re=et[ee],S.format!==Dn?Pe!==null?Xe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?B&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Re.width,Re.height,Pe,Ie,Re.data):t.texImage2D(n.TEXTURE_2D,ee,Be,Re.width,Re.height,0,Pe,Ie,Re.data)}else if(S.isDataArrayTexture)if(Xe){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,me.width,me.height,me.depth),B)if(S.layerUpdates.size>0){const ee=uc(me.width,me.height,S.format,S.type);for(const oe of S.layerUpdates){const Se=me.data.subarray(oe*ee/me.data.BYTES_PER_ELEMENT,(oe+1)*ee/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,Pe,Ie,Se)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Pe,Ie,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Pe,Ie,me.data);else if(S.isData3DTexture)Xe?(ft&&t.texStorage3D(n.TEXTURE_3D,Me,Be,me.width,me.height,me.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Pe,Ie,me.data)):t.texImage3D(n.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Pe,Ie,me.data);else if(S.isFramebufferTexture){if(ft)if(Xe)t.texStorage2D(n.TEXTURE_2D,Me,Be,me.width,me.height);else{let ee=me.width,oe=me.height;for(let Se=0;Se<Me;Se++)t.texImage2D(n.TEXTURE_2D,Se,Be,ee,oe,0,Pe,Ie,null),ee>>=1,oe>>=1}}else if(et.length>0){if(Xe&&ft){const ee=Fe(et[0]);t.texStorage2D(n.TEXTURE_2D,Me,Be,ee.width,ee.height)}for(let ee=0,oe=et.length;ee<oe;ee++)Re=et[ee],Xe?B&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Pe,Ie,Re):t.texImage2D(n.TEXTURE_2D,ee,Be,Pe,Ie,Re);S.generateMipmaps=!1}else if(Xe){if(ft){const ee=Fe(me);t.texStorage2D(n.TEXTURE_2D,Me,Be,ee.width,ee.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ie,me)}else t.texImage2D(n.TEXTURE_2D,0,Be,Pe,Ie,me);m(S)&&h(re),pe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function fe(C,S,G){if(S.image.length!==6)return;const re=Oe(C,S),se=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const ne=i.get(se);if(se.version!==ne.__version||re===!0){t.activeTexture(n.TEXTURE0+G);const pe=vt.getPrimaries(vt.workingColorSpace),he=S.colorSpace===Mi?null:vt.getPrimaries(S.colorSpace),ye=S.colorSpace===Mi||pe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ze=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let oe=0;oe<6;oe++)!Ze&&!me?Pe[oe]=v(S.image[oe],!0,r.maxCubemapSize):Pe[oe]=me?S.image[oe].image:S.image[oe],Pe[oe]=ot(S,Pe[oe]);const Ie=Pe[0],Be=a.convert(S.format,S.colorSpace),Re=a.convert(S.type),et=_(S.internalFormat,Be,Re,S.colorSpace),Xe=S.isVideoTexture!==!0,ft=ne.__version===void 0||re===!0,B=se.dataReady;let Me=A(S,Ie);ie(n.TEXTURE_CUBE_MAP,S);let ee;if(Ze){Xe&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,et,Ie.width,Ie.height);for(let oe=0;oe<6;oe++){ee=Pe[oe].mipmaps;for(let Se=0;Se<ee.length;Se++){const xe=ee[Se];S.format!==Dn?Be!==null?Xe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,xe.width,xe.height,Be,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,et,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,xe.width,xe.height,Be,Re,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,et,xe.width,xe.height,0,Be,Re,xe.data)}}}else{if(ee=S.mipmaps,Xe&&ft){ee.length>0&&Me++;const oe=Fe(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,et,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){Xe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe[oe].width,Pe[oe].height,Be,Re,Pe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,et,Pe[oe].width,Pe[oe].height,0,Be,Re,Pe[oe].data);for(let Se=0;Se<ee.length;Se++){const M=ee[Se].image[oe].image;Xe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,M.width,M.height,Be,Re,M.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,et,M.width,M.height,0,Be,Re,M.data)}}else{Xe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,Re,Pe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,et,Be,Re,Pe[oe]);for(let Se=0;Se<ee.length;Se++){const xe=ee[Se];Xe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Be,Re,xe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,et,Be,Re,xe.image[oe])}}}m(S)&&h(n.TEXTURE_CUBE_MAP),ne.__version=se.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ce(C,S,G,re,se,ne){const pe=a.convert(G.format,G.colorSpace),he=a.convert(G.type),ye=_(G.internalFormat,pe,he,G.colorSpace),Ze=i.get(S),me=i.get(G);if(me.__renderTarget=S,!Ze.__hasExternalTextures){const Pe=Math.max(1,S.width>>ne),Ie=Math.max(1,S.height>>ne);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ne,ye,Pe,Ie,S.depth,0,pe,he,null):t.texImage2D(se,ne,ye,Pe,Ie,0,pe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Qe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,se,me.__webglTexture,0,Je(S)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,se,me.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const re=S.depthTexture,se=re&&re.isDepthTexture?re.type:null,ne=x(S.stencilBuffer,se),pe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Je(S);Qe(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ne,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,C)}else{const re=S.textures;for(let se=0;se<re.length;se++){const ne=re[se],pe=a.convert(ne.format,ne.colorSpace),he=a.convert(ne.type),ye=_(ne.internalFormat,pe,he,ne.colorSpace),Ze=Je(S);G&&Qe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,ye,S.width,S.height):Qe(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,ye,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ye,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const se=re.__webglTexture,ne=Je(S);if(S.depthTexture.format===_r)Qe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===Er)Qe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ke(C){const S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const re=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",se)};re.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=re}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[re],C,!1);else{const se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(C,S,G){const re=i.get(C);S!==void 0&&Ce(re.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ke(C)}function at(C){const S=C.texture,G=i.get(C),re=i.get(S);C.addEventListener("dispose",L);const se=C.textures,ne=C.isWebGLCubeRenderTarget===!0,pe=se.length>1;if(pe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=S.version,s.memory.textures++),ne){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let ye=0;ye<S.mipmaps.length;ye++)G.__webglFramebuffer[he][ye]=n.createFramebuffer()}else G.__webglFramebuffer[he]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)G.__webglFramebuffer[he]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(pe)for(let he=0,ye=se.length;he<ye;he++){const Ze=i.get(se[he]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&Qe(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const ye=se[he];G.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Ze=a.convert(ye.format,ye.colorSpace),me=a.convert(ye.type),Pe=_(ye.internalFormat,Ze,me,ye.colorSpace,C.isXRRenderTarget===!0),Ie=Je(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Pe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,G.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ie(n.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Ce(G.__webglFramebuffer[he][ye],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else Ce(G.__webglFramebuffer[he],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let he=0,ye=se.length;he<ye;he++){const Ze=se[he],me=i.get(Ze);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),ie(n.TEXTURE_2D,Ze),Ce(G.__webglFramebuffer,C,Ze,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Ze)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),ie(he,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Ce(G.__webglFramebuffer[ye],C,S,n.COLOR_ATTACHMENT0,he,ye);else Ce(G.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,he,0);m(S)&&h(he),t.unbindTexture()}C.depthBuffer&&ke(C)}function Ye(C){const S=C.textures;for(let G=0,re=S.length;G<re;G++){const se=S[G];if(m(se)){const ne=y(C),pe=i.get(se).__webglTexture;t.bindTexture(ne,pe),h(ne),t.unbindTexture()}}}const ct=[],U=[];function Tt(C){if(C.samples>0){if(Qe(C)===!1){const S=C.textures,G=C.width,re=C.height;let se=n.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(C),he=S.length>1;if(he)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Ze=i.get(S[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,G,re,0,0,G,re,se,n.NEAREST),l===!0&&(ct.length=0,U.length=0,ct.push(n.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(ne),U.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Ze=i.get(S[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Je(C){return Math.min(r.maxSamples,C.samples)}function Qe(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(C){const S=s.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ot(C,S){const G=C.colorSpace,re=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==wr&&G!==Mi&&(vt.getTransfer(G)===Mt?(re!==Dn||se!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=N,this.rebindTextures=ze,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Qe}function t_(n,e){function t(i,r=Mi){let a;const s=vt.getTransfer(r);if(i===li)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Su)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yu)return n.BYTE;if(i===Mu)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===oa)return n.HALF_FLOAT;if(i===Eu)return n.ALPHA;if(i===wu)return n.RGB;if(i===Dn)return n.RGBA;if(i===Cu)return n.LUMINANCE;if(i===Tu)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Er)return n.DEPTH_STENCIL;if(i===Au)return n.RED;if(i===il)return n.RED_INTEGER;if(i===Ru)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===al)return n.RGBA_INTEGER;if(i===Xa||i===qa||i===ja||i===Ya)if(s===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===_o||i===vo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===mo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bo||i===xo||i===yo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===bo||i===xo)return s===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===yo)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mo||i===So||i===Eo||i===wo||i===Co||i===To||i===Ao||i===Ro||i===Po||i===No||i===Lo||i===Fo||i===Io||i===Do)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Mo)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===So)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eo)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Co)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===To)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ao)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ro)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===No)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lo)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fo)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Io)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Do)return s===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Uo||i===Oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===$a)return s===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===ko||i===Bo||i===zo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===$a)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ko)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const n_={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`;class a_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new hn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:i_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends Pr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,g=null;const v=new a_,m=t.getContextAttributes();let h=null,y=null;const _=[],x=[],A=new Et;let T=null;const L=new Sn;L.viewport=new Dt;const F=new Sn;F.viewport=new Dt;const w=[L,F],b=new wh;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=_[te];return fe===void 0&&(fe=new Js,_[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=_[te];return fe===void 0&&(fe=new Js,_[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=_[te];return fe===void 0&&(fe=new Js,_[te]=fe),fe.getHandSpace()};function j(te){const fe=x.indexOf(te.inputSource);if(fe===-1)return;const Ce=_[fe];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,c||s),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<_.length;te++){const fe=x[te];fe!==null&&(x[te]=null,_[te].disconnect(fe))}D=null,X=null,v.reset(),e.setRenderTarget(h),f=null,p=null,d=null,r=null,y=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ji(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Ce=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Er:_r,Ce=m.stencil?Sr:qi);const Ae={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(Ae),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new ji(p.textureWidth,p.textureHeight,{format:Dn,type:li,depthTexture:new Xu(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(te){for(let fe=0;fe<te.removed.length;fe++){const Ce=te.removed[fe],ve=x.indexOf(Ce);ve>=0&&(x[ve]=null,_[ve].disconnect(Ce))}for(let fe=0;fe<te.added.length;fe++){const Ce=te.added[fe];let ve=x.indexOf(Ce);if(ve===-1){for(let ke=0;ke<_.length;ke++)if(ke>=x.length){x.push(Ce),ve=ke;break}else if(x[ke]===null){x[ke]=Ce,ve=ke;break}if(ve===-1)break}const Ae=_[ve];Ae&&Ae.connect(Ce)}}const K=new q,ce=new q;function N(te,fe,Ce){K.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Ce.matrixWorld);const ve=K.distanceTo(ce),Ae=fe.projectionMatrix.elements,ke=Ce.projectionMatrix.elements,ze=Ae[14]/(Ae[10]-1),at=Ae[14]/(Ae[10]+1),Ye=(Ae[9]+1)/Ae[5],ct=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],Tt=(ke[8]+1)/ke[0],Je=ze*U,Qe=ze*Tt,De=ve/(-U+Tt),ot=De*-U;if(fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ot),te.translateZ(De),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Fe=ze+De,C=at+De,S=Je-ot,G=Qe+(ve-ot),re=Ye*at/C*Fe,se=ct*at/C*Fe;te.projectionMatrix.makePerspective(S,G,re,se,Fe,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let fe=te.near,Ce=te.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),b.near=F.near=L.near=fe,b.far=F.far=L.far=Ce,(D!==b.near||X!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,X=b.far),L.layers.mask=te.layers.mask|2,F.layers.mask=te.layers.mask|4,b.layers.mask=L.layers.mask|F.layers.mask;const ve=te.parent,Ae=b.cameras;P(b,ve);for(let ke=0;ke<Ae.length;ke++)P(Ae[ke],ve);Ae.length===2?N(b,L,F):b.projectionMatrix.copy(L.projectionMatrix),H(te,b,ve)};function H(te,fe,Ce){Ce===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ea*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(te){l=te,p!==null&&(p.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let I=null;function ie(te,fe){if(u=fe.getViewerPose(c||s),g=fe,u!==null){const Ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ve=!1;Ce.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let ke=0;ke<Ce.length;ke++){const ze=Ce[ke];let at=null;if(f!==null)at=f.getViewport(ze);else{const ct=d.getViewSubImage(p,ze);at=ct.viewport,ke===0&&(e.setRenderTargetTextures(y,ct.colorTexture,p.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(y))}let Ye=w[ke];Ye===void 0&&(Ye=new Sn,Ye.layers.enable(ke),Ye.viewport=new Dt,w[ke]=Ye),Ye.matrix.fromArray(ze.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ze.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(at.x,at.y,at.width,at.height),ke===0&&(b.matrix.copy(Ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(Ye)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ke=d.getDepthInformation(Ce[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,r.renderState)}}for(let Ce=0;Ce<_.length;Ce++){const ve=x[Ce],Ae=_[Ce];ve!==null&&Ae!==void 0&&Ae.update(ve,fe,c||s)}I&&I(te,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Oe=new ju;Oe.setAnimationLoop(ie),this.setAnimationLoop=function(te){I=te},this.dispose=function(){}}}const Di=new ci,o_=new Ft;function l_(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,zu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),d(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,x)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===pn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===pn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Di.copy(x),Di.x*=-1,Di.y*=-1,Di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Di)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function c_(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(y,A);const T=e.render.frame;a[y.id]!==T&&(p(y),a[y.id]=T)}function u(y){const _=d();y.__bindingPointIndex=_;const x=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function d(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const _=r[y.id],x=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,L=x.length;T<L;T++){const F=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,b=F.length;w<b;w++){const D=F[w];if(f(D,T,w,A)===!0){const X=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let Z=0;Z<j.length;Z++){const K=j[Z],ce=v(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,X+J,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,J),J+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,_,x,A){const T=y.value,L=_+"_"+x;if(A[L]===void 0)return typeof T=="number"||typeof T=="boolean"?A[L]=T:A[L]=T.clone(),!0;{const F=A[L];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[L]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(y){const _=y.uniforms;let x=0;const A=16;for(let L=0,F=_.length;L<F;L++){const w=Array.isArray(_[L])?_[L]:[_[L]];for(let b=0,D=w.length;b<D;b++){const X=w[b],j=Array.isArray(X.value)?X.value:[X.value];for(let J=0,Z=j.length;J<Z;J++){const K=j[J],ce=v(K),N=x%A,P=N%ce.boundary,H=N+P;x+=P,H!==0&&A-H<ce.storage&&(x+=A-H),X.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=ce.storage}}}const T=x%A;return T>0&&(x+=A-T),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Ju{constructor(e={}){const{canvas:t=Xp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Ti,this.toneMappingExposure=1;const x=this;let A=!1,T=0,L=0,F=null,w=-1,b=null;const D=new Dt,X=new Dt;let j=null;const J=new bt(0);let Z=0,K=t.width,ce=t.height,N=1,P=null,H=null;const I=new Dt(0,0,K,ce),ie=new Dt(0,0,K,ce);let Oe=!1;const te=new Gu;let fe=!1,Ce=!1;const ve=new Ft,Ae=new Ft,ke=new q,ze=new Dt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function ct(){return F===null?N:1}let U=i;function Tt(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",xe,!1),U===null){const k="webgl2";if(U=Tt(k,E),U===null)throw Tt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Je,Qe,De,ot,Fe,C,S,G,re,se,ne,pe,he,ye,Ze,me,Pe,Ie,Be,Re,et,Xe,ft,B;function Me(){Je=new bg(U),Je.init(),Xe=new t_(U,Je),Qe=new hg(U,Je,e,Xe),De=new Q0(U,Je),Qe.reverseDepthBuffer&&p&&De.buffers.depth.setReversed(!0),ot=new Mg(U),Fe=new z0,C=new e_(U,Je,De,Fe,Qe,Xe,ot),S=new mg(x),G=new vg(x),re=new Ah(U),ft=new dg(U,re),se=new xg(U,re,ot,ft),ne=new Eg(U,se,re,ot),Be=new Sg(U,Qe,C),me=new fg(Fe),pe=new B0(x,S,G,Je,Qe,ft,me),he=new l_(x,Fe),ye=new H0,Ze=new Y0(Je),Ie=new ug(x,S,G,De,ne,f,l),Pe=new K0(x,ne,Qe),B=new c_(U,ot,Qe,De),Re=new pg(U,Je,ot),et=new yg(U,Je,ot),ot.programs=pe.programs,x.capabilities=Qe,x.extensions=Je,x.properties=Fe,x.renderLists=ye,x.shadowMap=Pe,x.state=De,x.info=ot}Me();const ee=new s_(x,U);this.xr=ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(K,ce,!1))},this.getSize=function(E){return E.set(K,ce)},this.setSize=function(E,k,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,ce=k,t.width=Math.floor(E*N),t.height=Math.floor(k*N),Y===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(K*N,ce*N).floor()},this.setDrawingBufferSize=function(E,k,Y){K=E,ce=k,N=Y,t.width=Math.floor(E*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,k,Y,$){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,k,Y,$),De.viewport(D.copy(I).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,k,Y,$){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,k,Y,$),De.scissor(X.copy(ie).multiplyScalar(N).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){De.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){P=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,k=!0,Y=!0){let $=0;if(E){let W=!1;if(F!==null){const ue=F.texture.format;W=ue===al||ue===rl||ue===il}if(W){const ue=F.texture.type,Ee=ue===li||ue===qi||ue===Qr||ue===Sr||ue===tl||ue===nl,Ne=Ie.getClearColor(),Ue=Ie.getClearAlpha(),$e=Ne.r,je=Ne.g,Ve=Ne.b;Ee?(g[0]=$e,g[1]=je,g[2]=Ve,g[3]=Ue,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=$e,v[1]=je,v[2]=Ve,v[3]=Ue,U.clearBufferiv(U.COLOR,0,v))}else $|=U.COLOR_BUFFER_BIT}k&&($|=U.DEPTH_BUFFER_BIT),Y&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ie.dispose(),ye.dispose(),Ze.dispose(),Fe.dispose(),S.dispose(),G.dispose(),ne.dispose(),ft.dispose(),B.dispose(),pe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ge),ee.removeEventListener("sessionend",_e),qe.stop()};function oe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=ot.autoReset,k=Pe.enabled,Y=Pe.autoUpdate,$=Pe.needsUpdate,W=Pe.type;Me(),ot.autoReset=E,Pe.enabled=k,Pe.autoUpdate=Y,Pe.needsUpdate=$,Pe.type=W}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function M(E){const k=E.target;k.removeEventListener("dispose",M),R(k)}function R(E){z(E),Fe.remove(E)}function z(E){const k=Fe.get(E).programs;k!==void 0&&(k.forEach(function(Y){pe.releaseProgram(Y)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Y,$,W,ue){k===null&&(k=at);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Ct(E,k,Y,$,W);De.setMaterial($,Ee);let Ue=Y.index,$e=1;if($.wireframe===!0){if(Ue=se.getWireframeAttribute(Y),Ue===void 0)return;$e=2}const je=Y.drawRange,Ve=Y.attributes.position;let gt=je.start*$e,xt=(je.start+je.count)*$e;ue!==null&&(gt=Math.max(gt,ue.start*$e),xt=Math.min(xt,(ue.start+ue.count)*$e)),Ue!==null?(gt=Math.max(gt,0),xt=Math.min(xt,Ue.count)):Ve!=null&&(gt=Math.max(gt,0),xt=Math.min(xt,Ve.count));const Ut=xt-gt;if(Ut<0||Ut===1/0)return;ft.setup(W,$,Ne,Y,Ue);let Pt,_t=Re;if(Ue!==null&&(Pt=re.get(Ue),_t=et,_t.setIndex(Pt)),W.isMesh)$.wireframe===!0?(De.setLineWidth($.wireframeLinewidth*ct()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(W.isLine){let He=$.linewidth;He===void 0&&(He=1),De.setLineWidth(He*ct()),W.isLineSegments?_t.setMode(U.LINES):W.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else W.isPoints?_t.setMode(U.POINTS):W.isSprite&&_t.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const He=W._multiDrawStarts,Yt=W._multiDrawCounts,yt=W._multiDrawCount,An=Ue?re.get(Ue).bytesPerElement:1,$i=Fe.get($).currentProgram.getUniforms();for(let fn=0;fn<yt;fn++)$i.setValue(U,"_gl_DrawID",fn),_t.render(He[fn]/An,Yt[fn])}else if(W.isInstancedMesh)_t.renderInstances(gt,Ut,W.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Yt=Math.min(Y.instanceCount,He);_t.renderInstances(gt,Ut,Yt)}else _t.render(gt,Ut)};function Q(E,k,Y){E.transparent===!0&&E.side===ni&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,st(E,k,Y),E.side=Ai,E.needsUpdate=!0,st(E,k,Y),E.side=ni):st(E,k,Y)}this.compile=function(E,k,Y=null){Y===null&&(Y=E),h=Ze.get(Y),h.init(k),_.push(h),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights();const $=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ue=W.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){const Ne=ue[Ee];Q(Ne,Y,W),$.add(Ne)}else Q(ue,Y,W),$.add(ue)}),_.pop(),h=null,$},this.compileAsync=function(E,k,Y=null){const $=this.compile(E,k,Y);return new Promise(W=>{function ue(){if($.forEach(function(Ee){Fe.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){W(E);return}setTimeout(ue,10)}Je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let de=null;function V(E){de&&de(E)}function ge(){qe.stop()}function _e(){qe.start()}const qe=new ju;qe.setAnimationLoop(V),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){de=E,ee.setAnimationLoop(E),E===null?qe.stop():qe.start()},ee.addEventListener("sessionstart",ge),ee.addEventListener("sessionend",_e),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,F),h=Ze.get(E,_.length),h.init(k),_.push(h),Ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(Ae),Ce=this.localClippingEnabled,fe=me.init(this.clippingPlanes,Ce),m=ye.get(E,y.length),m.init(),y.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Ke(ue,k,-1/0,x.sortObjects)}Ke(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(P,H),Ye=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ye&&Ie.addToRenderList(m,E),this.info.render.frame++,fe===!0&&me.beginShadows();const Y=h.state.shadowsArray;Pe.render(Y,E,k),fe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,W=m.transmissive;if(h.setupLights(),k.isArrayCamera){const ue=k.cameras;if(W.length>0)for(let Ee=0,Ne=ue.length;Ee<Ne;Ee++){const Ue=ue[Ee];rt($,W,E,Ue)}Ye&&Ie.render(E);for(let Ee=0,Ne=ue.length;Ee<Ne;Ee++){const Ue=ue[Ee];nt(m,E,Ue,Ue.viewport)}}else W.length>0&&rt($,W,E,k),Ye&&Ie.render(E),nt(m,E,k);F!==null&&(C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(x,E,k),ft.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(h=_[_.length-1],fe===!0&&me.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ke(E,k,Y,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){$&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const Ee=ne.update(E),Ne=E.material;Ne.visible&&m.push(E,Ee,Ne,Y,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const Ee=ne.update(E),Ne=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ze.copy(Ee.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ne)){const Ue=Ee.groups;for(let $e=0,je=Ue.length;$e<je;$e++){const Ve=Ue[$e],gt=Ne[Ve.materialIndex];gt&&gt.visible&&m.push(E,Ee,gt,Y,ze.z,Ve)}}else Ne.visible&&m.push(E,Ee,Ne,Y,ze.z,null)}}const ue=E.children;for(let Ee=0,Ne=ue.length;Ee<Ne;Ee++)Ke(ue[Ee],k,Y,$)}function nt(E,k,Y,$){const W=E.opaque,ue=E.transmissive,Ee=E.transparent;h.setupLightsView(Y),fe===!0&&me.setGlobalState(x.clippingPlanes,Y),$&&De.viewport(D.copy($)),W.length>0&&Ge(W,k,Y),ue.length>0&&Ge(ue,k,Y),Ee.length>0&&Ge(Ee,k,Y),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function rt(E,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new ji(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?oa:li,minFilter:Hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ue=h.state.transmissionRenderTarget[$.id],Ee=$.viewport||D;ue.setSize(Ee.z,Ee.w);const Ne=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(J),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&Ie.render(Y);const Ue=x.toneMapping;x.toneMapping=Ti;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),fe===!0&&me.setGlobalState(x.clippingPlanes,$),Ge(E,Y,$),C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ve=0,gt=k.length;Ve<gt;Ve++){const xt=k[Ve],Ut=xt.object,Pt=xt.geometry,_t=xt.material,He=xt.group;if(_t.side===ni&&Ut.layers.test($.layers)){const Yt=_t.side;_t.side=pn,_t.needsUpdate=!0,lt(Ut,Y,$,Pt,_t,He),_t.side=Yt,_t.needsUpdate=!0,je=!0}}je===!0&&(C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue))}x.setRenderTarget(Ne),x.setClearColor(J,Z),$e!==void 0&&($.viewport=$e),x.toneMapping=Ue}function Ge(E,k,Y){const $=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ue=E.length;W<ue;W++){const Ee=E[W],Ne=Ee.object,Ue=Ee.geometry,$e=$===null?Ee.material:$,je=Ee.group;Ne.layers.test(Y.layers)&&lt(Ne,k,Y,Ue,$e,je)}}function lt(E,k,Y,$,W,ue){E.onBeforeRender(x,k,Y,$,W,ue),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(x,k,Y,$,E,ue),W.transparent===!0&&W.side===ni&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,x.renderBufferDirect(Y,k,$,W,E,ue),W.side=Ai,W.needsUpdate=!0,x.renderBufferDirect(Y,k,$,W,E,ue),W.side=ni):x.renderBufferDirect(Y,k,$,W,E,ue),E.onAfterRender(x,k,Y,$,W,ue)}function st(E,k,Y){k.isScene!==!0&&(k=at);const $=Fe.get(E),W=h.state.lights,ue=h.state.shadowsArray,Ee=W.state.version,Ne=pe.getParameters(E,W.state,ue,k,Y),Ue=pe.getProgramCacheKey(Ne);let $e=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,$e===void 0&&(E.addEventListener("dispose",M),$e=new Map,$.programs=$e);let je=$e.get(Ue);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Ee)return mt(E,Ne),je}else Ne.uniforms=pe.getUniforms(E),E.onBeforeCompile(Ne,x),je=pe.acquireProgram(Ne,Ue),$e.set(Ue,je),$.uniforms=Ne.uniforms;const Ve=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=me.uniform),mt(E,Ne),$.needsLights=It(E),$.lightsStateVersion=Ee,$.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function ut(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Za.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function mt(E,k){const Y=Fe.get(E);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Ct(E,k,Y,$,W){k.isScene!==!0&&(k=at),C.resetTextureUnits();const ue=k.fog,Ee=$.isMeshStandardMaterial?k.environment:null,Ne=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wr,Ue=($.isMeshStandardMaterial?G:S).get($.envMap||Ee),$e=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let Ut=Ti;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=Pt!==void 0?Pt.length:0,He=Fe.get($),Yt=h.state.lights;if(fe===!0&&(Ce===!0||E!==b)){const rn=E===b&&$.id===w;me.setState($,E,rn)}let yt=!1;$.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Yt.state.version||He.outputColorSpace!==Ne||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Ue||$.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==je||He.morphTargets!==Ve||He.morphNormals!==gt||He.morphColors!==xt||He.toneMapping!==Ut||He.morphTargetsCount!==_t)&&(yt=!0):(yt=!0,He.__version=$.version);let An=He.currentProgram;yt===!0&&(An=st($,k,W));let $i=!1,fn=!1,Dr=!1;const At=An.getUniforms(),_n=He.uniforms;if(De.useProgram(An.program)&&($i=!0,fn=!0,Dr=!0),$.id!==w&&(w=$.id,fn=!0),$i||b!==E){De.buffers.depth.getReversed()?(ve.copy(E.projectionMatrix),jp(ve),Yp(ve),At.setValue(U,"projectionMatrix",ve)):At.setValue(U,"projectionMatrix",E.projectionMatrix),At.setValue(U,"viewMatrix",E.matrixWorldInverse);const cn=At.map.cameraPosition;cn!==void 0&&cn.setValue(U,ke.setFromMatrixPosition(E.matrixWorld)),Qe.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,fn=!0,Dr=!0)}if(W.isSkinnedMesh){At.setOptional(U,W,"bindMatrix"),At.setOptional(U,W,"bindMatrixInverse");const rn=W.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),At.setValue(U,"boneTexture",rn.boneTexture,C))}W.isBatchedMesh&&(At.setOptional(U,W,"batchingTexture"),At.setValue(U,"batchingTexture",W._matricesTexture,C),At.setOptional(U,W,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",W._indirectTexture,C),At.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",W._colorsTexture,C));const vn=Y.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Be.update(W,Y,An),(fn||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,At.setValue(U,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_n.envMap.value=Ue,_n.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),fn&&(At.setValue(U,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&be(_n,Dr),ue&&$.fog===!0&&he.refreshFogUniforms(_n,ue),he.refreshMaterialUniforms(_n,$,N,ce,h.state.transmissionRenderTarget[E.id]),Za.upload(U,ut(He),_n,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Za.upload(U,ut(He),_n,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(U,"center",W.center),At.setValue(U,"modelViewMatrix",W.modelViewMatrix),At.setValue(U,"normalMatrix",W.normalMatrix),At.setValue(U,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let cn=0,Ss=rn.length;cn<Ss;cn++){const Ri=rn[cn];B.update(Ri,An),B.bind(Ri,An)}}return An}function be(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function It(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,k,Y){Fe.get(E.texture).__webglTexture=k,Fe.get(E.depthTexture).__webglTexture=Y;const $=Fe.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const Y=Fe.get(E);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Y=0){F=E,T=k,L=Y;let $=!0,W=null,ue=!1,Ee=!1;if(E){const Ue=Fe.get(E);if(Ue.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Ue.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Ue.__hasExternalTextures)C.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(Ue.__boundDepthTexture!==Ve){if(Ve!==null&&Fe.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ee=!0);const je=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[k])?W=je[k][Y]:W=je[k],ue=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?W=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?W=je[Y]:W=je,D.copy(E.viewport),X.copy(E.scissor),j=E.scissorTest}else D.copy(I).multiplyScalar(N).floor(),X.copy(ie).multiplyScalar(N).floor(),j=Oe;if(De.bindFramebuffer(U.FRAMEBUFFER,W)&&$&&De.drawBuffers(E,W),De.viewport(D),De.scissor(X),De.setScissorTest(j),ue){const Ue=Fe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,Y)}else if(Ee){const Ue=Fe.get(E.texture),$e=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,$e)}w=-1},this.readRenderTargetPixels=function(E,k,Y,$,W,ue,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){De.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const Ue=E.texture,$e=Ue.format,je=Ue.type;if(!Qe.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&Y>=0&&Y<=E.height-W&&U.readPixels(k,Y,$,W,Xe.convert($e),Xe.convert(je),ue)}finally{const Ue=F!==null?Fe.get(F).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,k,Y,$,W,ue,Ee){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){const Ue=E.texture,$e=Ue.format,je=Ue.type;if(!Qe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-$&&Y>=0&&Y<=E.height-W){De.bindFramebuffer(U.FRAMEBUFFER,Ne);const Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(k,Y,$,W,Xe.convert($e),Xe.convert(je),0);const gt=F!==null?Fe.get(F).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,gt);const xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qp(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(Ve),U.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,Y=0){E.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-Y),W=Math.floor(E.image.width*$),ue=Math.floor(E.image.height*$),Ee=k!==null?k.x:0,Ne=k!==null?k.y:0;C.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ee,Ne,W,ue),De.unbindTexture()};const Wt=U.createFramebuffer(),nn=U.createFramebuffer();this.copyTextureToTexture=function(E,k,Y=null,$=null,W=0,ue=null){E.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],k=arguments[2],ue=arguments[3]||0,Y=null),ue===null&&(W!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=W,W=0):ue=0);let Ee,Ne,Ue,$e,je,Ve,gt,xt,Ut;const Pt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(Y!==null)Ee=Y.max.x-Y.min.x,Ne=Y.max.y-Y.min.y,Ue=Y.isBox3?Y.max.z-Y.min.z:1,$e=Y.min.x,je=Y.min.y,Ve=Y.isBox3?Y.min.z:0;else{const vn=Math.pow(2,-W);Ee=Math.floor(Pt.width*vn),Ne=Math.floor(Pt.height*vn),E.isDataArrayTexture?Ue=Pt.depth:E.isData3DTexture?Ue=Math.floor(Pt.depth*vn):Ue=1,$e=0,je=0,Ve=0}$!==null?(gt=$.x,xt=$.y,Ut=$.z):(gt=0,xt=0,Ut=0);const _t=Xe.convert(k.format),He=Xe.convert(k.type);let Yt;k.isData3DTexture?(C.setTexture3D(k,0),Yt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Yt=U.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),An=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$i=U.getParameter(U.UNPACK_SKIP_PIXELS),fn=U.getParameter(U.UNPACK_SKIP_ROWS),Dr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const At=E.isDataArrayTexture||E.isData3DTexture,_n=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const vn=Fe.get(E),rn=Fe.get(k),cn=Fe.get(vn.__renderTarget),Ss=Fe.get(rn.__renderTarget);De.bindFramebuffer(U.READ_FRAMEBUFFER,cn.__webglFramebuffer),De.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let Ri=0;Ri<Ue;Ri++)At&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.get(E).__webglTexture,W,Ve+Ri),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.get(k).__webglTexture,ue,Ut+Ri)),U.blitFramebuffer($e,je,Ee,Ne,gt,xt,Ee,Ne,U.DEPTH_BUFFER_BIT,U.NEAREST);De.bindFramebuffer(U.READ_FRAMEBUFFER,null),De.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Fe.has(E)){const vn=Fe.get(E),rn=Fe.get(k);De.bindFramebuffer(U.READ_FRAMEBUFFER,Wt),De.bindFramebuffer(U.DRAW_FRAMEBUFFER,nn);for(let cn=0;cn<Ue;cn++)At?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,W,Ve+cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,W),_n?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rn.__webglTexture,ue,Ut+cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rn.__webglTexture,ue),W!==0?U.blitFramebuffer($e,je,Ee,Ne,gt,xt,Ee,Ne,U.COLOR_BUFFER_BIT,U.NEAREST):_n?U.copyTexSubImage3D(Yt,ue,gt,xt,Ut+cn,$e,je,Ee,Ne):U.copyTexSubImage2D(Yt,ue,gt,xt,$e,je,Ee,Ne);De.bindFramebuffer(U.READ_FRAMEBUFFER,null),De.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _n?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Yt,ue,gt,xt,Ut,Ee,Ne,Ue,_t,He,Pt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Yt,ue,gt,xt,Ut,Ee,Ne,Ue,_t,Pt.data):U.texSubImage3D(Yt,ue,gt,xt,Ut,Ee,Ne,Ue,_t,He,Pt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,gt,xt,Ee,Ne,_t,He,Pt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,gt,xt,Pt.width,Pt.height,_t,Pt.data):U.texSubImage2D(U.TEXTURE_2D,ue,gt,xt,Ee,Ne,_t,He,Pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,An),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$i),U.pixelStorei(U.UNPACK_SKIP_ROWS,fn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Dr),ue===0&&k.generateMipmaps&&U.generateMipmap(Yt),De.unbindTexture()},this.copyTextureToTexture3D=function(E,k,Y=null,$=null,W=0){return E.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,E=arguments[2],k=arguments[3],W=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,Y,$,W)},this.initRenderTarget=function(E){Fe.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),De.unbindTexture()},this.resetState=function(){T=0,L=0,F=null,De.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const u_="linear basic scriabin colors",d_={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"rule-16",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:1},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:2},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:3},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:4},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:5},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:6},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:7},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:8},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:9},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:10},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:11},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:12},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:13},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:14},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:15}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],_disabled:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},p_={name:u_,params:d_},h_="linear basic",f_={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:0},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:1},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:2},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:3},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:4},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:5},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:6},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:7},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:8},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:9},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:10},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:11},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:12},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:13},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:14}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},m_={name:h_,params:f_},g_="linear colors",__={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"hsv pitch",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING / x coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(time/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"y-set-norm-frequency",group:"SPACING / y coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:2},{id:"amplitude brightness",group:"Appearance / brightness",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*2"}],order:3},{id:"thinning",group:"Appearance / brightness",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:4},{id:"background saturation",group:"Default / background color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:5},{id:"soft",group:"Appearance / size",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:6},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:7},{id:"luma",group:"",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",expression:"normFreq*255"}],order:8}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},v_={name:g_,params:__},b_="textured timbre colors",x_={inputGain:.91,freqNormMin:16,freqNormMax:2e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"y-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time+10*binMagnitude)/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"z coordinate",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"normFreq-1-time"}],order:2},{id:"hue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"binPhaseDeviation"}],order:3},{id:"red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:4},{id:"green",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:5},{id:"blue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:6},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:7},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:8},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*1.5"}],order:10},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*0.5"}],order:11},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"1-spectralRolloff"}],order:12}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::Appearance"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"color",selectedGroupName:"color",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},y_={name:b_,params:x_},M_="linear timbre colors",S_={inputGain:1.37,freqNormMin:16,freqNormMax:1e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:70,binAttackTimeNormMax:748,globalRmsNormMin:-63,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:2751488,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"topXZ",persistMode:1,ruleBlocks:[{id:"z-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"-(normFreq*1.4-0.9)*canvasHeightPx"}],order:0},{id:"bass z norm freq",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"z",expression:"(normFreq*3.5-0.5)*canvasHeightPx"}],order:1},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time)/audioLengthSec-0.5)*canvasWidthPx"}],order:2},{id:"y magnitude",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"binMagnitude*canvasHeightPx*0.5"}],order:3},{id:"bass z norm freq-2",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"y",expression:"-binMagnitude*canvasHeightPx*0.5"}],order:4},{id:"hue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"red",expression:"binAttackTime*10"}],order:5},{id:"hue-3",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"binFlux*10"}],order:6},{id:"hue-2",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",input:"binPhaseDeviation"}],order:7},{id:"bass red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"hue",input:"binFlux"}],order:8},{id:"red",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:9},{id:"green",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:10},{id:"blue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:11},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:12},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:13},{id:"bass bigger",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"size",expression:"pow((binMagnitude+1), 6)"}],order:14},{id:"bass transparent",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"opacity",expression:"pow(binMagnitude, 3)"}],order:15},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:16},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy)*(1+binPhaseDeviation*3)"}],order:17},{id:"brightness bass",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy)*(1+binPhaseDeviation*3)*0.25"}],order:18},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"0.2*binMagnitude"}],order:19},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"pow((binPhaseDeviation+1-spectralRolloff)*0.5, 1.4)"}],order:20}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::count","spawnedParticles::Appearance","spawnedParticles::SPACING"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},E_={name:M_,params:S_},w_={menu:{file:"File",view:"View",settings:"Settings",rules:"Rules",collapse:"Collapse"},file:{project:"Project",projectNew:"New Project",projectLoad:"Load",projectSave:"Save",projectSaveAs:"Save As",presets:"Presets",presetLoad:"Load",presetUpload:"Upload",presetSave:"Save",presetSaveProject:"Save",presetSaveLocal:"Save Local",presetRemove:"Remove",presetSelectPlaceholder:"Select preset",presetNamePlaceholder:"Preset name",export:"Export",exportImage:"PNG",exportImageNoBg:"PNG transparent",exportVideo:"Video",exportObj:"OBJ"},view:{canvasSize:"Canvas Size",width:"Width",height:"Height",canvasZoom:"Canvas Zoom %",backgroundColor:"Background Color",cameraPosition:"Camera Position",cameraTarget:"Camera Target",cameraReset:"Reset Camera",cameraFit:"Fit",cameraClean:"Clean",projection:"Projection",projectionAxo:"Axonometry",projectionPerspective:"Perspective",axoPreset:"Axo Preset",axoIsometric:"Isometry",axoOrthoXY:"Orthogonal XY",axoOrthoXZ:"Orthogonal XZ",axoOrthoYZ:"Orthogonal YZ",angleOfView:"Angle Of View",blending:"Blending",postProcessing:"Post-Processing",postProcessingEnabled:"Enable Post-Processing",bloomEnabled:"Bloom Enabled",bloomStrength:"Bloom Strength",bloomRadius:"Bloom Radius",bloomThreshold:"Bloom Threshold",bokehEnabled:"Bokeh Enabled",bokehFocus:"Bokeh Focus",bokehAperture:"Bokeh Aperture",bokehMaxBlur:"Bokeh Max Blur",guides:"Guides",guideAxes:"Origin Axes",guideCoordinates:"Coordinate Guides"},settings:{sensitivity:"Sensitivity",audioResolution:"Audio Resolution",particleDefaultSize:"Particle Default Size",particleCapacity:"Particle Capacity",spawnRate:"Spawn Rate",activityInterval:"Activity Interval",frequencyRange:"Frequency Range",volume:"Volume",instability:"Instability",attackSharpness:"Attack Sharpness",energy:"Energy",sharpness:"Sharpness",activity:"Activity",noisiness:"Noisiness",sliders:"Sliders",normalizationRanges:"Normalization Ranges",resetDefaults:"Reset Defaults"},rules:{title:"Rules",condition:"Condition",addCondition:"If",when:"When",selectValue:"Select value",removeCondition:"Remove condition",always:"always",expression:"Expression",detailVariable:"Detail Variable",overallVariable:"Overall Variable",targetParticles:"Particles",targetLines:"Lines",targetBackground:"Background",targetCamera:"Camera",undefined:"undefined",insertVariable:"Insert variable...",detailVariables:"Detail Variables",overallVariables:"Overall Variables",mathPlaceholder:"Type math or number and add",addMath:"Add Math",clearTokens:"Clear",tokenEditorPlaceholder:"Build expression with variables and math actions",insertHere:"Insert",insertToken:"Insert token...",number:"Number",mathActions:"Math Actions",mathValue:"Value",mathAdd:"Add",mathSubtract:"Subtract",mathMultiply:"Multiply",mathDivide:"Divide",mathParentheses:"Parentheses"}},C_=[{id:"binMagnitude",group:"detail",label:"Detail Volume",legacyName:"binMagnitude",description:"Per-frequency volume of the current bin."},{id:"binRMSEnergy",group:"detail",label:"Detail Energy",legacyName:"binRMSEnergy",description:"Per-frequency RMS energy for the current bin."},{id:"frequencyHz",group:"detail",label:"Frequency Hz",legacyName:"frequencyHz",description:"Physical frequency measured in Hz."},{id:"normFreq",group:"detail",label:"Frequency Normalized",legacyName:"normFreq",description:"Physical frequency normalized into a 0-1 range."},{id:"notePitchClass",group:"detail",label:"Musical Note",legacyName:"notePitchClass",description:"High value means a higher note within the chromatic scale."},{id:"pan",group:"detail",label:"Pan",legacyName:"pan",description:"Left-to-right stereo value."},{id:"octave",group:"detail",label:"Octave",legacyName:"octave",description:"High value means a higher register."},{id:"binAttackTime",group:"detail",label:"Attack Sharpness",legacyName:"binAttackTime",description:"High value means a very fast, snappy start to the sound."},{id:"binEnvelope",group:"detail",label:"Envelope",legacyName:"binEnvelope",description:"High value means the sound is currently at its loudest point in its cycle."},{id:"binEnvelopeState",group:"detail",label:"Envelope State",legacyName:"binEnvelopeState",description:"Current ADSR phase of a specific frequency bin."},{id:"binFlux",group:"detail",label:"Activity",legacyName:"binFlux",description:"High value means the sound or tone is changing rapidly."},{id:"binPhase",group:"detail",label:"Phase",legacyName:"binPhase",description:"High value means the wave is at the top of its cycle."},{id:"binPhaseDeviation",group:"detail",label:"Instability",legacyName:"binPhaseDeviation",description:"High value means phase is shifting unpredictably."},{id:"amplitude",group:"overall",label:"Volume",legacyName:"amplitude",description:"Volume of the current frame."},{id:"high",group:"overall",label:"High Tones",legacyName:"high",description:"Volume of the high frequency range."},{id:"mid",group:"overall",label:"Mid Tones",legacyName:"mid",description:"Volume of the mid frequency range."},{id:"bass",group:"overall",label:"Low Tones",legacyName:"bass",description:"Volume of the low frequency range."},{id:"deltaTime",group:"overall",label:"Delta Time",legacyName:"deltaTime",description:"Elapsed time between current frame and previous frame."},{id:"peakFreq",group:"overall",label:"Peak Frequency",legacyName:"peakFreq",description:"How high the loudest detected frequency is."},{id:"time",group:"overall",label:"Current Time",legacyName:"time",description:"Timestamp of the audio file."},{id:"chromagram",group:"overall",label:"Complexity",legacyName:"chromagram",description:"High value means a rich multi-note harmonic profile."},{id:"globalRmsEnergy",group:"overall",label:"Energy",legacyName:"globalRmsEnergy",description:"Average volume of the current frame."},{id:"inharmonicity",group:"overall",label:"Dissonance",legacyName:"inharmonicity",description:"High value means overtones are out of tune with the fundamental."},{id:"peakAmplitude",group:"overall",label:"Peak Volume",legacyName:"peakAmplitude",description:"High value means the loudest point is near maximum."},{id:"spectralCentroid",group:"overall",label:"Sharpness",legacyName:"spectralCentroid",description:"High value means a high-frequency dominant sound."},{id:"spectralFlatness",group:"overall",label:"Noisiness",legacyName:"spectralFlatness",description:"High value means noisy; low value means pure tone."},{id:"spectralFlux",group:"overall",label:"Activity",legacyName:"spectralFlux",description:"High value means sound is changing rapidly."},{id:"spectralRolloff",group:"overall",label:"Brightness",legacyName:"spectralRolloff",description:"High value means the sound includes many high frequencies."},{id:"spectralSkewness",group:"overall",label:"Imbalance",legacyName:"spectralSkewness",description:"High value means energy is weighted toward one end of the spectrum."},{id:"spectralSpread",group:"overall",label:"Spread",legacyName:"spectralSpread",description:"High value means the sound covers a wide frequency spread."},{id:"zeroCrossingRate",group:"overall",label:"Rattle",legacyName:"zeroCrossingRate",description:"High value means sharp high-frequency clatter."},{id:"canvasHeightPx",group:"overall",label:"Canvas Height",legacyName:"canvasHeightPx",description:"Canvas height measured in pixels."},{id:"canvasWidthPx",group:"overall",label:"Canvas Width",legacyName:"canvasWidthPx",description:"Canvas width measured in pixels."},{id:"audioLengthSec",group:"overall",label:"Audio Length",legacyName:"audioLengthSec",description:"Audio file length measured in seconds."}],T_={uiText:w_,ruleVariables:C_},Qu=T_,Ir=Object.freeze(Qu.ruleVariables||[]),le=Object.freeze(Qu.uiText||{});function Tr(n){return Ir.filter(e=>e.group===n)}function Go(n){return Ir.find(e=>e.id===n)||null}const A_=Object.freeze({binMagnitude:[0,1],binPhase:[0,1],binFlux:[-1,1],binPhaseDeviation:[0,1],binAttackTime:[0,1],binEnvelope:[0,3],binEnvelopeState:[0,3],binRMSEnergy:[0,1],frequencyHz:[0,22050],notePitchClass:[0,11],octave:[-2,12],normFreq:[0,1],pan:[-1,1],amplitude:[0,1],bass:[0,1],mid:[0,1],high:[0,1],peakFreq:[0,22050],globalRmsEnergy:[0,1],peakAmplitude:[0,1],zeroCrossingRate:[0,1],spectralCentroid:[0,1],spectralFlux:[0,1],spectralFlatness:[0,1],spectralRolloff:[0,1],spectralSpread:[0,1],spectralSkewness:[0,1],chromagram:[0,1],inharmonicity:[0,1],time:[0,Number.POSITIVE_INFINITY],deltaTime:[0,1],canvasWidthPx:[0,Number.POSITIVE_INFINITY],canvasHeightPx:[0,Number.POSITIVE_INFINITY],audioLengthSec:[0,Number.POSITIVE_INFINITY]}),R_=Ir.map(n=>({id:n.id,type:"number",range:A_[n.id]||[0,1],category:n.group,label:n.label,legacyName:n.legacyName,description:n.description})),P_=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"targetX",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetY",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetZ",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"angleOfView",type:"number",range:[20,120],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","lines","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]},{id:"xStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"xEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"yStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"yEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"zStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"zEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"thickness",type:"number",range:[0,64],targets:["lines"]},{id:"lineCount",type:"number",range:[0,1],targets:["lines"]}],dl=Object.freeze(["spawnedParticles","allParticles","lines","background","camera"]),ed=Object.freeze(["spawnedOnly","allLivingFrame"]),td=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),nd=Object.freeze(["always",">",">=","<","<=","==","!="]),ms=Object.freeze({version:1,entries:Object.freeze(R_.map(n=>Object.freeze({...n})))}),pl=Object.freeze({version:1,entries:Object.freeze(P_.map(n=>Object.freeze({...n})))});new Map(ms.entries.map(n=>[n.id,n]));new Map(pl.entries.map(n=>[n.id,n]));function N_(){return ms}function L_(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function F_(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function Dc(n,e){if(typeof n!="string")return null;const t=F_(n);if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!L_(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),a=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of a)if(!i.has(s))return`Expression references unknown identifier: ${s}`;return null}function id(n){return dl.includes(n==null?void 0:n.target)?n.target:String((n==null?void 0:n.context)||"").toLowerCase().includes("line")?"lines":(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function I_(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:dl).includes(e)}function D_(n,e={input:ms,output:pl}){var d,p,f,g,v;const t=[],i=[],r=[],a=new Map((((d=e.input)==null?void 0:d.entries)??[]).map(m=>[m.id,m])),s=new Map((((p=e.output)==null?void 0:p.entries)??[]).map(m=>[m.id,m]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};ed.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=id(n);if(dl.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(f=n.condition)!=null&&f.operator&&!nd.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((g=n.condition)==null?void 0:g.expression)!==void 0){const m=Dc(n.condition.expression,a);m&&t.push(`Condition expression invalid: ${m}`)}const l=(v=n.condition)==null?void 0:v.input;l&&!a.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((m,h)=>{const y=m==null?void 0:m.output;if(!y||!s.has(y)){t.push(`Unknown action output at index ${h}: ${String(y)}`);return}const _=s.get(y);if(I_(_,o)||t.push(`Output ${y} is not valid for target ${o} at index ${h}`),m!=null&&m.operator&&!td.includes(m.operator)&&t.push(`Unknown action operator at index ${h}: ${String(m.operator)}`),_.type==="enum"&&(m==null?void 0:m.value)!==void 0&&!_.values.includes(m.value)&&t.push(`Invalid enum value for ${y} at index ${h}: ${String(m.value)}. Allowed: ${_.values.join("|")}`),(m==null?void 0:m.operator)==="set"){const A=u.get(y);A!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:y,overriddenActionIndex:A,winningActionIndex:h,resolution:"latter-executes"}),i.push(`Contradiction on ${y}: action ${h} overrides action ${A}.`)),u.set(y,h)}const x=m==null?void 0:m.input;if(x&&!a.has(x)&&t.push(`Unknown action input at index ${h}: ${x}`),(m==null?void 0:m.expression)!==void 0){const A=Dc(m.expression,a);A&&t.push(`Action expression invalid at index ${h}: ${A}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function rd(n,e={input:ms,output:pl}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((a,s)=>{var c,u,d;const o={id:typeof(a==null?void 0:a.id)=="string"&&a.id.trim()?a.id.trim():`rule-${s}`,group:typeof(a==null?void 0:a.group)=="string"?a.group:"",subgroup:typeof(a==null?void 0:a.subgroup)=="string"?a.subgroup:"",enabled:(a==null?void 0:a.enabled)!==!1,target:id(a),scope:ed.includes(a==null?void 0:a.scope)?a.scope:"spawnedOnly",condition:a!=null&&a.condition&&typeof a.condition=="object"?{...a.condition}:{operator:"always"},actions:Array.isArray(a==null?void 0:a.actions)?a.actions.map(p=>({...p})):[],order:Number.isFinite(a==null?void 0:a.order)?Number(a.order):s};o.condition.operator||(o.condition.operator="always"),nd.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=String(o.condition.input)),(u=o.condition)!=null&&u.valueInput&&(o.condition.valueInput=String(o.condition.valueInput)),typeof((d=o.condition)==null?void 0:d.expression)=="string"&&(o.condition.expression=o.condition.expression),o.scope=o.target==="spawnedParticles"||o.target==="lines"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(p=>p&&typeof p=="object").map(p=>({operator:td.includes(p.operator)?p.operator:"set",output:p.output,value:p.value,input:p.input,expression:p.expression}));const l=D_(o,e);l.ok?i.push(o):r.push({id:o.id,index:s,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const U_="seesound_user_defaults_v4",ad="seesound_disabled_v4",sd="seesound_user_presets_v1",od="seesound_hidden_root_presets_v1",O_=Object.assign({"../../../presets/linear basic scriabin colors.json":p_,"../../../presets/linear basic.json":m_,"../../../presets/linear colors.json":v_,"../../../presets/linear textured.json":y_,"../../../presets/linear timbre colors.json":E_}),rs=1,k_={logCompilerStatus:!1,logCompilerTiming:!1},ta=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:rs,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],standaloneGroups:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""}});function gs(n){const e=n&&typeof n=="object"?n:{};return{collapsedGroups:Array.isArray(e.collapsedGroups)?e.collapsedGroups.map(t=>String(t||"").trim()).filter(Boolean):[],collapsedSubgroups:[],collapsedRules:Array.isArray(e.collapsedRules)?e.collapsedRules.map(t=>String(t||"").trim()).filter(Boolean):[],selectedContextGroup:String(e.selectedContextGroup||"spawnedParticles"),selectedGroupPath:String(e.selectedGroupPath||e.selectedGroupName||""),selectedGroupName:String(e.selectedGroupPath||e.selectedGroupName||""),selectedSubgroup:"",standaloneGroups:Array.isArray(e.standaloneGroups)?e.standaloneGroups.map(t=>String(t||"").trim()).filter(Boolean):[]}}function hl(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",a=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:a}}).filter(Boolean):[]}function Qt({key:n,label:e,min:t,max:i,step:r,def:a,unit:s,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:a,unit:s,desc:o,canDisable:!1}}const fl=[{key:"inputGain",group:"inputGain",label:"Sensitivity",min:0,max:3,step:.01,default:1,unit:"×",desc:"Global input gain scaler applied before analysis and spawning.",canDisable:!1},{key:"freqNormMin",group:"inputProcessing",label:"Frequency Range Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for frequency normalization.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Frequency Range Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for frequency normalization.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"Audio Resolution",default:2048,unit:"",desc:"FFT analysis size. Higher values increase frequency detail.",isDropdown:!0,dropdownOptions:[{label:"512",value:512},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},{key:"fluxWindowFrames",group:"inputProcessing",label:"Activity Interval",min:1,max:64,step:1,default:10,unit:"frames",desc:"Rolling frame window used to smooth activity detection.",canDisable:!1},Qt({key:"binMagnitudeNormMin",label:"Volume Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalization lower bound for per-bin volume."}),Qt({key:"binMagnitudeNormMax",label:"Volume Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for per-bin volume."}),Qt({key:"binFluxNormMin",label:"Activity Detail Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalization lower bound for per-frequency activity."}),Qt({key:"binFluxNormMax",label:"Activity Detail Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalization upper bound for per-frequency activity."}),Qt({key:"binPhaseDeviationNormMin",label:"Instability Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalization lower bound for per-bin instability."}),Qt({key:"binPhaseDeviationNormMax",label:"Instability Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalization upper bound for per-bin instability."}),Qt({key:"binAttackTimeNormMin",label:"Attack Sharpness Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalization lower bound for per-bin attack sharpness."}),Qt({key:"binAttackTimeNormMax",label:"Attack Sharpness Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalization upper bound for per-bin attack sharpness."}),Qt({key:"globalRmsNormMin",label:"Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalization lower bound for frame energy."}),Qt({key:"globalRmsNormMax",label:"Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for frame energy."}),Qt({key:"spectralCentroidNormMin",label:"Sharpness Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalization lower bound for spectral sharpness."}),Qt({key:"spectralCentroidNormMax",label:"Sharpness Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalization upper bound for spectral sharpness."}),Qt({key:"globalSpectralFluxNormMin",label:"Activity Global Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalization lower bound for frame-level activity."}),Qt({key:"globalSpectralFluxNormMax",label:"Activity Global Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalization upper bound for frame-level activity."}),Qt({key:"spectralFlatnessNormMin",label:"Noisiness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalization lower bound for spectral noisiness."}),Qt({key:"spectralFlatnessNormMax",label:"Noisiness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalization upper bound for spectral noisiness."}),{key:"defaultParticleSize",group:"geometry",label:"Particle Default Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Particle Capacity",min:1e5,max:5e6,step:1e3,default:1e6,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particlesByFrame",group:"geometry",label:"Spawn Rate",min:100,max:5e3,step:1,default:1e3,unit:"N",desc:"Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"cameraPosX",group:"mixing",label:"Camera Position X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position X in world units.",canDisable:!1},{key:"cameraPosY",group:"mixing",label:"Camera Position Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position Y in world units.",canDisable:!1},{key:"cameraPosZ",group:"mixing",label:"Camera Position Z",min:-5e3,max:5e3,step:1,default:420,unit:"u",desc:"Camera position Z in world units.",canDisable:!1},{key:"cameraTargetX",group:"mixing",label:"Camera Target X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target X in world units.",canDisable:!1},{key:"cameraTargetY",group:"mixing",label:"Camera Target Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Y in world units.",canDisable:!1},{key:"cameraTargetZ",group:"mixing",label:"Camera Target Z",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Z in world units.",canDisable:!1},{key:"cameraAngleOfView",group:"mixing",label:"Angle Of View",min:20,max:120,step:1,default:55,unit:"deg",desc:"Perspective camera field of view in degrees.",canDisable:!1},{key:"postProcessEnabled",group:"mixing",label:"Post-Processing",min:0,max:1,step:1,default:0,unit:"",desc:"Master switch for all post-processing effects.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomEnabled",group:"mixing",label:"Bloom Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Unreal Bloom pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomStrength",group:"mixing",label:"Bloom Strength",min:0,max:4,step:.01,default:1.15,unit:"",desc:"Bloom intensity multiplier.",canDisable:!1},{key:"bloomRadius",group:"mixing",label:"Bloom Radius",min:0,max:2,step:.01,default:.7,unit:"",desc:"Bloom spread radius.",canDisable:!1},{key:"bloomThreshold",group:"mixing",label:"Bloom Threshold",min:0,max:1,step:.01,default:.18,unit:"",desc:"Luminance threshold before bloom is applied.",canDisable:!1},{key:"bokehEnabled",group:"mixing",label:"Bokeh Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Bokeh depth-of-field pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bokehFocus",group:"mixing",label:"Bokeh Focus",min:1,max:5e3,step:1,default:380,unit:"u",desc:"Bokeh focus distance.",canDisable:!1},{key:"bokehAperture",group:"mixing",label:"Bokeh Aperture",min:0,max:.001,step:1e-5,default:12e-5,unit:"",desc:"Bokeh aperture value.",canDisable:!1},{key:"bokehMaxBlur",group:"mixing",label:"Bokeh Max Blur",min:0,max:.1,step:5e-4,default:.01,unit:"",desc:"Maximum blur amount for bokeh pass.",canDisable:!1},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]},{key:"originSignEnabled",group:"mixing",label:"Origin Axes",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide origin axes guide.",isToggle:!0,toggleLabels:["Off","On"]},{key:"coordinateGuidesEnabled",group:"mixing",label:"Coordinate Guides",min:0,max:1,step:1,default:0,unit:"",desc:"Show/hide coordinate guide grids.",isToggle:!0,toggleLabels:["Off","On"]}];function B_(){try{return JSON.parse(localStorage.getItem(U_)||"{}")}catch{return{}}}function z_(){try{return new Set(JSON.parse(localStorage.getItem(ad)||"[]"))}catch{return new Set}}function Yi(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=rd(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:ta.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):ta.ruleSchemaVersion,t.palettes=hl(e.palettes),t.ruleUiState=gs(e.ruleUiState),r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function V_(){const n=Yi(B_()),e={};for(const t of fl)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=hl(n.palettes),e.ruleUiState=gs(n.ruleUiState),e}const ae=V_(),$r=z_(),ei=[],_s=[],Uc=300;let na=!1;function H_(n){return JSON.parse(JSON.stringify(n))}function ml(){return{params:H_(ae),disabled:[...$r]}}function G_(n,e){if(!n||!e||JSON.stringify(n.params)!==JSON.stringify(e.params))return!1;const t=Array.isArray(n.disabled)?[...n.disabled].sort():[],i=Array.isArray(e.disabled)?[...e.disabled].sort():[];return JSON.stringify(t)===JSON.stringify(i)}function ld(n){const e=Yi((n&&typeof n=="object"?n.params:{})||{});for(const i of Object.keys(ae))delete ae[i];for(const[i,r]of Object.entries(e))ae[i]=r,Wi(i,r);const t=new Set(Array.isArray(n==null?void 0:n.disabled)?n.disabled:[]);$r.clear();for(const i of t)$r.add(i);try{localStorage.setItem(ad,JSON.stringify([...$r]))}catch{}Wi("disabled",null),Wi("*",e)}function gl(){if(na)return;const n=ml(),e=ei[ei.length-1];e&&G_(e,n)||(ei.push(n),ei.length>Uc&&ei.splice(0,ei.length-Uc),_s.length=0)}function W_(){return ei.length>0}function X_(){return _s.length>0}function q_(){if(!W_())return!1;const n=ei.pop(),e=ml();_s.push(e),na=!0;try{ld(n)}finally{na=!1}return!0}function j_(){if(!X_())return!1;const n=_s.pop(),e=ml();ei.push(e),na=!0;try{ld(n)}finally{na=!1}return!0}const Wo=new Set;function _l(n){return Wo.add(n),()=>Wo.delete(n)}function Wi(n,e){for(const t of Wo)try{t(ae,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function tn(n,e){gl(),ae[n]=e,Wi(n,e)}function $t(n){gl();const e=n&&typeof n=="object"?n:{},t=Yi({...ae,...e}),i=Object.create(null),r=Object.keys(e);for(const l of r){const c=t[l];Object.is(ae[l],c)||(ae[l]=c,i[l]=c)}const a=["ruleBlocks","ruleEngineEnabled","ruleSchemaVersion","palettes","ruleUiState"];if(a.some(l=>Object.prototype.hasOwnProperty.call(e,l)))for(const l of a){const c=t[l];Object.is(ae[l],c)||(ae[l]=c,i[l]=c)}const o=Object.entries(i);if(o.length!==0){for(const[l,c]of o)Wi(l,c);Wi("*",i)}}function Y_(){gl();for(const n of fl)ae[n.key]=n.default;ae.ruleBlocks=[],ae.ruleEngineEnabled=!0,ae.ruleSchemaVersion=rs,ae.palettes=[],ae.ruleUiState=gs(ta.ruleUiState),Wi("*",null)}function ia(){const n=Yi(ae);return{...ae,...n,_disabled:[...$r]}}function $_(n){const e=String(n||"").replace(/\\/g,"/");return e.slice(e.lastIndexOf("/")+1).replace(/\.json$/i,"")}function vs(){try{const n=JSON.parse(localStorage.getItem(od)||"[]");return Array.isArray(n)?new Set(n.map(e=>String(e||"").trim()).filter(Boolean)):new Set}catch{return new Set}}function cd(n){try{localStorage.setItem(od,JSON.stringify([...n]))}catch{}}function bs(){try{const n=JSON.parse(localStorage.getItem(sd)||"[]");if(!Array.isArray(n))return new Map;const e=new Map;for(const t of n){const i=String((t==null?void 0:t.name)||"").trim();i&&e.set(i,{name:i,params:Ar(t==null?void 0:t.params)})}return e}catch{return new Map}}function ud(n){try{const e=[...n.values()].map(t=>({name:t.name,params:Ar(t.params)}));localStorage.setItem(sd,JSON.stringify(e))}catch{}}let ka=null;function vl(){if(ka)return ka;const n=new Map;for(const[e,t]of Object.entries(O_)){const i=t&&typeof t=="object"?t:{},r=String(i.name||$_(e)).trim();r&&n.set(r,{name:r,params:Ar(i.params)})}return ka=n,ka}function Z_(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function K_(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function J_(n,e){if(e==null)return;if(n!=null&&n.isToggle)return K_(e,n.default);if(n!=null&&n.isDropdown){const r=Z_(n).find(a=>String(a)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function Ar(n){try{const e=n&&typeof n=="object"?n:{},t={...e};for(const i of fl){if(!Object.prototype.hasOwnProperty.call(e,i.key)||e[i.key]===void 0||e[i.key]===null){t[i.key]=i.default;continue}t[i.key]=J_(i,e[i.key])}return Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=ta.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=ta.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=hl(e.palettes),t.ruleUiState=gs(e.ruleUiState),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),Yi(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),Yi(n&&typeof n=="object"?n:{})}}async function Xo(){const n=vs(),e=[...vl().keys()].filter(i=>!n.has(i)),t=[...bs().keys()];return[...new Set([...e,...t])].sort((i,r)=>i.localeCompare(r))}async function as(n,e){const t=String(n||"").trim();if(!t)return{ok:!1,error:"Preset name is required."};const i=Ar(e),r=bs();r.set(t,{name:t,params:i}),ud(r);const a=vs();return a.delete(t)&&cd(a),{ok:!0,name:t,source:"localStorage"}}async function dd(n){const e=String(n||"").trim();if(!e)return null;const t=bs();if(t.has(e)){const s=t.get(e);return{name:s.name,params:Ar(s.params)}}if(vs().has(e))return null;const r=vl();if(!r.has(e))return null;const a=r.get(e);try{return{name:a.name,params:Ar(a.params)}}catch(s){return console.warn("[Preset] load normalization failed, applying raw params:",s),{name:a.name,params:Yi(a.params)}}}async function Q_(n){const e=String(n||"").trim();if(!e)return{ok:!1,deleted:!1};const t=bs();if(t.delete(e))return ud(t),{ok:!0,deleted:!0,source:"localStorage"};if(vl().has(e)){const i=vs();return i.add(e),cd(i),{ok:!0,deleted:!0,source:"hidden-root"}}return{ok:!1,deleted:!1}}var yi;(function(n){n.Range="range",n.Steps="steps",n.Positions="positions",n.Count="count",n.Values="values"})(yi||(yi={}));var on;(function(n){n[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue"})(on||(on={}));function ev(n){return ss(n)&&typeof n.from=="function"}function ss(n){return typeof n=="object"&&typeof n.to=="function"}function Oc(n){n.parentElement.removeChild(n)}function qo(n){return n!=null}function kc(n){n.preventDefault()}function tv(n){return n.filter(function(e){return this[e]?!1:this[e]=!0},{})}function nv(n,e){return Math.round(n/e)*e}function iv(n,e){var t=n.getBoundingClientRect(),i=n.ownerDocument,r=i.documentElement,a=pd(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),e?t.top+a.y-r.clientTop:t.left+a.x-r.clientLeft}function kn(n){return typeof n=="number"&&!isNaN(n)&&isFinite(n)}function Bc(n,e,t){t>0&&(en(n,e),setTimeout(function(){Ka(n,e)},t))}function zc(n){return Math.max(Math.min(n,100),0)}function xs(n){return Array.isArray(n)?n:[n]}function rv(n){n=String(n);var e=n.split(".");return e.length>1?e[1].length:0}function en(n,e){n.classList&&!/\s/.test(e)?n.classList.add(e):n.className+=" "+e}function Ka(n,e){n.classList&&!/\s/.test(e)?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function av(n,e){return n.classList?n.classList.contains(e):new RegExp("\\b"+e+"\\b").test(n.className)}function pd(n){var e=window.pageXOffset!==void 0,t=(n.compatMode||"")==="CSS1Compat",i=e?window.pageXOffset:t?n.documentElement.scrollLeft:n.body.scrollLeft,r=e?window.pageYOffset:t?n.documentElement.scrollTop:n.body.scrollTop;return{x:i,y:r}}function sv(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function ov(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch{}return n}function lv(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function bl(n,e){return 100/(e-n)}function jo(n,e,t){return e*100/(n[t+1]-n[t])}function cv(n,e){return jo(n,n[0]<0?e+Math.abs(n[0]):e-n[0],0)}function uv(n,e){return e*(n[1]-n[0])/100+n[0]}function ra(n,e){for(var t=1;n>=e[t];)t+=1;return t}function dv(n,e,t){if(t>=n.slice(-1)[0])return 100;var i=ra(t,n),r=n[i-1],a=n[i],s=e[i-1],o=e[i];return s+cv([r,a],t)/bl(s,o)}function pv(n,e,t){if(t>=100)return n.slice(-1)[0];var i=ra(t,e),r=n[i-1],a=n[i],s=e[i-1],o=e[i];return uv([r,a],(t-s)*bl(s,o))}function hv(n,e,t,i){if(i===100)return i;var r=ra(i,n),a=n[r-1],s=n[r];return t?i-a>(s-a)/2?s:a:e[r-1]?n[r-1]+nv(i-n[r-1],e[r-1]):i}var hd=function(){function n(e,t,i){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=t;var r,a=[];for(Object.keys(e).forEach(function(s){a.push([xs(e[s]),s])}),a.sort(function(s,o){return s[0][0]-o[0][0]}),r=0;r<a.length;r++)this.handleEntryPoint(a[r][1],a[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return n.prototype.getDistance=function(e){for(var t=[],i=0;i<this.xNumSteps.length-1;i++)t[i]=jo(this.xVal,e,i);return t},n.prototype.getAbsoluteDistance=function(e,t,i){var r=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[r+1];)r++;else e===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);!i&&e===this.xPct[r+1]&&r++,t===null&&(t=[]);var a,s=1,o=t[r],l=0,c=0,u=0,d=0;for(i?a=(e-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):a=(this.xPct[r+1]-e)/(this.xPct[r+1]-this.xPct[r]);o>0;)l=this.xPct[r+1+d]-this.xPct[r+d],t[r+d]*s+100-a*100>100?(c=l*a,s=(o-100*a)/t[r+d],a=1):(c=t[r+d]*l/100*s,s=0),i?(u=u-c,this.xPct.length+d>=1&&d--):(u=u+c,this.xPct.length-d>=1&&d++),o=t[r+d]*s;return e+u},n.prototype.toStepping=function(e){return e=dv(this.xVal,this.xPct,e),e},n.prototype.fromStepping=function(e){return pv(this.xVal,this.xPct,e)},n.prototype.getStep=function(e){return e=hv(this.xPct,this.xSteps,this.snap,e),e},n.prototype.getDefaultStep=function(e,t,i){var r=ra(e,this.xPct);return(e===100||t&&e===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/i},n.prototype.getNearbySteps=function(e){var t=ra(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},n.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(rv);return Math.max.apply(null,e)},n.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},n.prototype.convert=function(e){return this.getStep(this.toStepping(e))},n.prototype.handleEntryPoint=function(e,t){var i;if(e==="min"?i=0:e==="max"?i=100:i=parseFloat(e),!kn(i)||!kn(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(t[0]);var r=Number(t[1]);i?this.xSteps.push(isNaN(r)?!1:r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},n.prototype.handleStepPoint=function(e,t){if(t){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=jo([this.xVal[e],this.xVal[e+1]],t,0)/bl(this.xPct[e],this.xPct[e+1]);var i=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],r=Math.ceil(Number(i.toFixed(3))-1),a=this.xVal[e]+this.xNumSteps[e]*r;this.xHighestCompleteStep[e]=a}},n}(),Vc={to:function(n){return n===void 0?"":n.toFixed(2)},from:Number},fd={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},bi={tooltips:".__tooltips",aria:".__aria"};function fv(n,e){if(!kn(e))throw new Error("noUiSlider: 'step' is not numeric.");n.singleStep=e}function mv(n,e){if(!kn(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");n.keyboardPageMultiplier=e}function gv(n,e){if(!kn(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");n.keyboardMultiplier=e}function _v(n,e){if(!kn(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");n.keyboardDefaultStep=e}function vv(n,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");n.spectrum=new hd(e,n.snap||!1,n.singleStep)}function bv(n,e){if(e=xs(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");n.handles=e.length,n.start=e}function xv(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");n.snap=e}function yv(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");n.animate=e}function Mv(n,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");n.animationDuration=e}function md(n,e){var t=[!1],i;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(i=1;i<n.handles;i++)t.push(e);t.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==n.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t=e}n.connect=t}function Sv(n,e){switch(e){case"horizontal":n.ort=0;break;case"vertical":n.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function gd(n,e){if(!kn(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(n.margin=n.spectrum.getDistance(e))}function Ev(n,e){if(!kn(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(n.limit=n.spectrum.getDistance(e),!n.limit||n.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function wv(n,e){var t;if(!kn(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||kn(e[0])||kn(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),n.padding=[n.spectrum.getDistance(e[0]),n.spectrum.getDistance(e[1])],t=0;t<n.spectrum.xNumSteps.length-1;t++)if(n.padding[0][t]<0||n.padding[1][t]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=n.spectrum.xVal[0],a=n.spectrum.xVal[n.spectrum.xVal.length-1];if(i/(a-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Cv(n,e){switch(e){case"ltr":n.dir=0;break;case"rtl":n.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Tv(n,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var t=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,a=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,l=e.indexOf("invert-connects")>=0,c=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(n.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");gd(n,n.start[1]-n.start[0])}if(l&&n.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(n.margin||n.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");n.events={tap:t||a,drag:i,dragAll:c,smoothSteps:u,fixed:r,snap:a,hover:s,unconstrained:o,invertConnects:l}}function Av(n,e){if(e!==!1)if(e===!0||ss(e)){n.tooltips=[];for(var t=0;t<n.handles;t++)n.tooltips.push(e)}else{if(e=xs(e),e.length!==n.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(i){if(typeof i!="boolean"&&!ss(i))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),n.tooltips=e}}function Rv(n,e){if(e.length!==n.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");n.handleAttributes=e}function Pv(n,e){if(!ss(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");n.ariaFormat=e}function Nv(n,e){if(!ev(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");n.format=e}function Lv(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");n.keyboardSupport=e}function Fv(n,e){n.documentElement=e}function Iv(n,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");n.cssPrefix=e}function Dv(n,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof n.cssPrefix=="string"?(n.cssClasses={},Object.keys(e).forEach(function(t){n.cssClasses[t]=n.cssPrefix+e[t]})):n.cssClasses=e}function _d(n){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Vc,format:Vc},t={step:{r:!1,t:fv},keyboardPageMultiplier:{r:!1,t:mv},keyboardMultiplier:{r:!1,t:gv},keyboardDefaultStep:{r:!1,t:_v},start:{r:!0,t:bv},connect:{r:!0,t:md},direction:{r:!0,t:Cv},snap:{r:!1,t:xv},animate:{r:!1,t:yv},animationDuration:{r:!1,t:Mv},range:{r:!0,t:vv},orientation:{r:!1,t:Sv},margin:{r:!1,t:gd},limit:{r:!1,t:Ev},padding:{r:!1,t:wv},behaviour:{r:!0,t:Tv},ariaFormat:{r:!1,t:Pv},format:{r:!1,t:Nv},tooltips:{r:!1,t:Av},keyboardSupport:{r:!0,t:Lv},documentElement:{r:!1,t:Fv},cssPrefix:{r:!0,t:Iv},cssClasses:{r:!0,t:Dv},handleAttributes:{r:!1,t:Rv}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:fd,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};n.format&&!n.ariaFormat&&(n.ariaFormat=n.format),Object.keys(t).forEach(function(l){if(!qo(n[l])&&i[l]===void 0){if(t[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}t[l].t(e,qo(n[l])?n[l]:i[l])}),e.pips=n.pips;var r=document.createElement("div"),a=r.style.msTransform!==void 0,s=r.style.transform!==void 0;e.transformRule=s?"transform":a?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function Uv(n,e,t){var i=sv(),r=lv(),a=r&&ov(),s=n,o,l,c,u,d,p,f=e.spectrum,g=[],v=[],m=[],h=0,y={},_=!1,x=n.ownerDocument,A=e.documentElement||x.documentElement,T=x.body,L=x.dir==="rtl"||e.ort===1?0:100;function F(M,R){var z=x.createElement("div");return R&&en(z,R),M.appendChild(z),z}function w(M,R){var z=F(M,e.cssClasses.origin),Q=F(z,e.cssClasses.handle);if(F(Q,e.cssClasses.touchArea),Q.setAttribute("data-handle",String(R)),e.keyboardSupport&&(Q.setAttribute("tabindex","0"),Q.addEventListener("keydown",function(V){return De(V,R)})),e.handleAttributes!==void 0){var de=e.handleAttributes[R];Object.keys(de).forEach(function(V){Q.setAttribute(V,de[V])})}return Q.setAttribute("role","slider"),Q.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),R===0?en(Q,e.cssClasses.handleLower):R===e.handles-1&&en(Q,e.cssClasses.handleUpper),z.handle=Q,z}function b(M,R){return R?F(M,e.cssClasses.connect):!1}function D(M,R){l=F(R,e.cssClasses.connects),c=[],u=[],u.push(b(l,M[0]));for(var z=0;z<e.handles;z++)c.push(w(R,z)),m[z]=z,u.push(b(l,M[z+1]))}function X(M){en(M,e.cssClasses.target),e.dir===0?en(M,e.cssClasses.ltr):en(M,e.cssClasses.rtl),e.ort===0?en(M,e.cssClasses.horizontal):en(M,e.cssClasses.vertical);var R=getComputedStyle(M).direction;return R==="rtl"?en(M,e.cssClasses.textDirectionRtl):en(M,e.cssClasses.textDirectionLtr),F(M,e.cssClasses.base)}function j(M,R){return!e.tooltips||!e.tooltips[R]?!1:F(M.firstChild,e.cssClasses.tooltip)}function J(){return s.hasAttribute("disabled")}function Z(M){var R=c[M];return R.hasAttribute("disabled")}function K(M){M!=null?(c[M].setAttribute("disabled",""),c[M].handle.removeAttribute("tabindex")):(s.setAttribute("disabled",""),c.forEach(function(R){R.handle.removeAttribute("tabindex")}))}function ce(M){M!=null?(c[M].removeAttribute("disabled"),c[M].handle.setAttribute("tabindex","0")):(s.removeAttribute("disabled"),c.forEach(function(R){R.removeAttribute("disabled"),R.handle.setAttribute("tabindex","0")}))}function N(){p&&(S("update"+bi.tooltips),p.forEach(function(M){M&&Oc(M)}),p=null)}function P(){N(),p=c.map(j),Fe("update"+bi.tooltips,function(M,R,z){if(!(!p||!e.tooltips)&&p[R]!==!1){var Q=M[R];e.tooltips[R]!==!0&&(Q=e.tooltips[R].to(z[R])),p[R].innerHTML=Q}})}function H(){S("update"+bi.aria),Fe("update"+bi.aria,function(M,R,z,Q,de){m.forEach(function(V){var ge=c[V],_e=re(v,V,0,!0,!0,!0),qe=re(v,V,100,!0,!0,!0),Ke=de[V],nt=String(e.ariaFormat.to(z[V]));_e=f.fromStepping(_e).toFixed(1),qe=f.fromStepping(qe).toFixed(1),Ke=f.fromStepping(Ke).toFixed(1),ge.children[0].setAttribute("aria-valuemin",_e),ge.children[0].setAttribute("aria-valuemax",qe),ge.children[0].setAttribute("aria-valuenow",Ke),ge.children[0].setAttribute("aria-valuetext",nt)})})}function I(M){if(M.mode===yi.Range||M.mode===yi.Steps)return f.xVal;if(M.mode===yi.Count){if(M.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var R=M.values-1,z=100/R,Q=[];R--;)Q[R]=R*z;return Q.push(100),ie(Q,M.stepped)}return M.mode===yi.Positions?ie(M.values,M.stepped):M.mode===yi.Values?M.stepped?M.values.map(function(de){return f.fromStepping(f.getStep(f.toStepping(de)))}):M.values:[]}function ie(M,R){return M.map(function(z){return f.fromStepping(R?f.getStep(z):z)})}function Oe(M){function R(Ke,nt){return Number((Ke+nt).toFixed(7))}var z=I(M),Q={},de=f.xVal[0],V=f.xVal[f.xVal.length-1],ge=!1,_e=!1,qe=0;return z=tv(z.slice().sort(function(Ke,nt){return Ke-nt})),z[0]!==de&&(z.unshift(de),ge=!0),z[z.length-1]!==V&&(z.push(V),_e=!0),z.forEach(function(Ke,nt){var rt,Ge,lt,st=Ke,ut=z[nt+1],mt,Ct,be,It,Wt,nn,E,k=M.mode===yi.Steps;for(k&&(rt=f.xNumSteps[nt]),rt||(rt=ut-st),ut===void 0&&(ut=st),rt=Math.max(rt,1e-7),Ge=st;Ge<=ut;Ge=R(Ge,rt)){for(mt=f.toStepping(Ge),Ct=mt-qe,Wt=Ct/(M.density||1),nn=Math.round(Wt),E=Ct/nn,lt=1;lt<=nn;lt+=1)be=qe+lt*E,Q[be.toFixed(5)]=[f.fromStepping(be),0];It=z.indexOf(Ge)>-1?on.LargeValue:k?on.SmallValue:on.NoValue,!nt&&ge&&Ge!==ut&&(It=0),Ge===ut&&_e||(Q[mt.toFixed(5)]=[Ge,It]),qe=mt}}),Q}function te(M,R,z){var Q,de,V=x.createElement("div"),ge=(Q={},Q[on.None]="",Q[on.NoValue]=e.cssClasses.valueNormal,Q[on.LargeValue]=e.cssClasses.valueLarge,Q[on.SmallValue]=e.cssClasses.valueSub,Q),_e=(de={},de[on.None]="",de[on.NoValue]=e.cssClasses.markerNormal,de[on.LargeValue]=e.cssClasses.markerLarge,de[on.SmallValue]=e.cssClasses.markerSub,de),qe=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],Ke=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];en(V,e.cssClasses.pips),en(V,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function nt(Ge,lt){var st=lt===e.cssClasses.value,ut=st?qe:Ke,mt=st?ge:_e;return lt+" "+ut[e.ort]+" "+mt[Ge]}function rt(Ge,lt,st){if(st=R?R(lt,st):st,st!==on.None){var ut=F(V,!1);ut.className=nt(st,e.cssClasses.marker),ut.style[e.style]=Ge+"%",st>on.NoValue&&(ut=F(V,!1),ut.className=nt(st,e.cssClasses.value),ut.setAttribute("data-value",String(lt)),ut.style[e.style]=Ge+"%",ut.innerHTML=String(z.to(lt)))}}return Object.keys(M).forEach(function(Ge){rt(Ge,M[Ge][0],M[Ge][1])}),V}function fe(){d&&(Oc(d),d=null)}function Ce(M){fe();var R=Oe(M),z=M.filter,Q=M.format||{to:function(de){return String(Math.round(de))}};return d=s.appendChild(te(R,z,Q)),d}function ve(){var M=o.getBoundingClientRect(),R="offset"+["Width","Height"][e.ort];return e.ort===0?M.width||o[R]:M.height||o[R]}function Ae(M,R,z,Q){var de=function(ge){var _e=ke(ge,Q.pageOffset,Q.target||R);if(!_e||J()&&!Q.doNotReject||av(s,e.cssClasses.tap)&&!Q.doNotReject||M===i.start&&_e.buttons!==void 0&&_e.buttons>1||Q.hover&&_e.buttons)return!1;a||_e.preventDefault(),_e.calcPoint=_e.points[e.ort],z(_e,Q)},V=[];return M.split(" ").forEach(function(ge){R.addEventListener(ge,de,a?{passive:!0}:!1),V.push([ge,de])}),V}function ke(M,R,z){var Q=M.type.indexOf("touch")===0,de=M.type.indexOf("mouse")===0,V=M.type.indexOf("pointer")===0,ge=0,_e=0;if(M.type.indexOf("MSPointer")===0&&(V=!0),M.type==="mousedown"&&!M.buttons&&!M.touches)return!1;if(Q){var qe=function(rt){var Ge=rt.target;return Ge===z||z.contains(Ge)||M.composed&&M.composedPath().shift()===z};if(M.type==="touchstart"){var Ke=Array.prototype.filter.call(M.touches,qe);if(Ke.length>1)return!1;ge=Ke[0].pageX,_e=Ke[0].pageY}else{var nt=Array.prototype.find.call(M.changedTouches,qe);if(!nt)return!1;ge=nt.pageX,_e=nt.pageY}}return R=R||pd(x),(de||V)&&(ge=M.clientX+R.x,_e=M.clientY+R.y),M.pageOffset=R,M.points=[ge,_e],M.cursor=de||V,M}function ze(M){var R=M-iv(o,e.ort),z=R*100/ve();return z=zc(z),e.dir?100-z:z}function at(M){var R=100,z=!1;return c.forEach(function(Q,de){if(!Z(de)){var V=v[de],ge=Math.abs(V-M),_e=ge===100&&R===100,qe=ge<R,Ke=ge<=R&&M>V;(qe||Ke||_e)&&(z=de,R=ge)}}),z}function Ye(M,R){M.type==="mouseout"&&M.target.nodeName==="HTML"&&M.relatedTarget===null&&U(M,R)}function ct(M,R){if(navigator.appVersion.indexOf("MSIE 9")===-1&&M.buttons===0&&R.buttonsProperty!==0)return U(M,R);var z=(e.dir?-1:1)*(M.calcPoint-R.startCalcPoint),Q=z*100/R.baseSize;ne(z>0,Q,R.locations,R.handleNumbers,R.connect)}function U(M,R){R.handle&&(Ka(R.handle,e.cssClasses.active),h-=1),R.listeners.forEach(function(z){A.removeEventListener(z[0],z[1])}),h===0&&(Ka(s,e.cssClasses.drag),ye(),M.cursor&&(T.style.cursor="",T.removeEventListener("selectstart",kc))),e.events.smoothSteps&&(R.handleNumbers.forEach(function(z){Ze(z,v[z],!0,!0,!1,!1)}),R.handleNumbers.forEach(function(z){G("update",z)})),R.handleNumbers.forEach(function(z){G("change",z),G("set",z),G("end",z)})}function Tt(M,R){if(!R.handleNumbers.some(Z)){var z;if(R.handleNumbers.length===1){var Q=c[R.handleNumbers[0]];z=Q.children[0],h+=1,en(z,e.cssClasses.active)}M.stopPropagation();var de=[],V=Ae(i.move,A,ct,{target:M.target,handle:z,connect:R.connect,listeners:de,startCalcPoint:M.calcPoint,baseSize:ve(),pageOffset:M.pageOffset,handleNumbers:R.handleNumbers,buttonsProperty:M.buttons,locations:v.slice()}),ge=Ae(i.end,A,U,{target:M.target,handle:z,listeners:de,doNotReject:!0,handleNumbers:R.handleNumbers}),_e=Ae("mouseout",A,Ye,{target:M.target,handle:z,listeners:de,doNotReject:!0,handleNumbers:R.handleNumbers});de.push.apply(de,V.concat(ge,_e)),M.cursor&&(T.style.cursor=getComputedStyle(M.target).cursor,c.length>1&&en(s,e.cssClasses.drag),T.addEventListener("selectstart",kc,!1)),R.handleNumbers.forEach(function(qe){G("start",qe)})}}function Je(M){M.stopPropagation();var R=ze(M.calcPoint),z=at(R);z!==!1&&(e.events.snap||Bc(s,e.cssClasses.tap,e.animationDuration),Ze(z,R,!0,!0),ye(),G("slide",z,!0),G("update",z,!0),e.events.snap?Tt(M,{handleNumbers:[z]}):(G("change",z,!0),G("set",z,!0)))}function Qe(M){var R=ze(M.calcPoint),z=f.getStep(R),Q=f.fromStepping(z);Object.keys(y).forEach(function(de){de.split(".")[0]==="hover"&&y[de].forEach(function(V){V.call(xe,Q)})})}function De(M,R){if(J()||Z(R))return!1;var z=["Left","Right"],Q=["Down","Up"],de=["PageDown","PageUp"],V=["Home","End"];e.dir&&!e.ort?z.reverse():e.ort&&!e.dir&&(Q.reverse(),de.reverse());var ge=M.key.replace("Arrow",""),_e=ge===de[0],qe=ge===de[1],Ke=ge===Q[0]||ge===z[0]||_e,nt=ge===Q[1]||ge===z[1]||qe,rt=ge===V[0],Ge=ge===V[1];if(!Ke&&!nt&&!rt&&!Ge)return!0;M.preventDefault();var lt;if(nt||Ke){var st=Ke?0:1,ut=ft(R),mt=ut[st];if(mt===null)return!1;mt===!1&&(mt=f.getDefaultStep(v[R],Ke,e.keyboardDefaultStep)),qe||_e?mt*=e.keyboardPageMultiplier:mt*=e.keyboardMultiplier,mt=Math.max(mt,1e-7),mt=(Ke?-1:1)*mt,lt=g[R]+mt}else Ge?lt=e.spectrum.xVal[e.spectrum.xVal.length-1]:lt=e.spectrum.xVal[0];return Ze(R,f.toStepping(lt),!0,!0),G("slide",R),G("update",R),G("change",R),G("set",R),!1}function ot(M){M.fixed||c.forEach(function(R,z){Ae(i.start,R.children[0],Tt,{handleNumbers:[z]})}),M.tap&&Ae(i.start,o,Je,{}),M.hover&&Ae(i.move,o,Qe,{hover:!0}),M.drag&&u.forEach(function(R,z){if(!(R===!1||z===0||z===u.length-1)){var Q=c[z-1],de=c[z],V=[R],ge=[Q,de],_e=[z-1,z];en(R,e.cssClasses.draggable),M.fixed&&(V.push(Q.children[0]),V.push(de.children[0])),M.dragAll&&(ge=c,_e=m),V.forEach(function(qe){Ae(i.start,qe,Tt,{handles:ge,handleNumbers:_e,connect:R})})}})}function Fe(M,R){y[M]=y[M]||[],y[M].push(R),M.split(".")[0]==="update"&&c.forEach(function(z,Q){G("update",Q)})}function C(M){return M===bi.aria||M===bi.tooltips}function S(M){var R=M&&M.split(".")[0],z=R?M.substring(R.length):M;Object.keys(y).forEach(function(Q){var de=Q.split(".")[0],V=Q.substring(de.length);(!R||R===de)&&(!z||z===V)&&(!C(V)||z===V)&&delete y[Q]})}function G(M,R,z){Object.keys(y).forEach(function(Q){var de=Q.split(".")[0];M===de&&y[Q].forEach(function(V){V.call(xe,g.map(e.format.to),R,g.slice(),z||!1,v.slice(),xe)})})}function re(M,R,z,Q,de,V,ge){var _e;return c.length>1&&!e.events.unconstrained&&(Q&&R>0&&(_e=f.getAbsoluteDistance(M[R-1],e.margin,!1),z=Math.max(z,_e)),de&&R<c.length-1&&(_e=f.getAbsoluteDistance(M[R+1],e.margin,!0),z=Math.min(z,_e))),c.length>1&&e.limit&&(Q&&R>0&&(_e=f.getAbsoluteDistance(M[R-1],e.limit,!1),z=Math.min(z,_e)),de&&R<c.length-1&&(_e=f.getAbsoluteDistance(M[R+1],e.limit,!0),z=Math.max(z,_e))),e.padding&&(R===0&&(_e=f.getAbsoluteDistance(0,e.padding[0],!1),z=Math.max(z,_e)),R===c.length-1&&(_e=f.getAbsoluteDistance(100,e.padding[1],!0),z=Math.min(z,_e))),ge||(z=f.getStep(z)),z=zc(z),z===M[R]&&!V?!1:z}function se(M,R){var z=e.ort;return(z?R:M)+", "+(z?M:R)}function ne(M,R,z,Q,de){var V=z.slice(),ge=Q[0],_e=e.events.smoothSteps,qe=[!M,M],Ke=[M,!M];Q=Q.slice(),M&&Q.reverse(),Q.length>1?Q.forEach(function(rt,Ge){var lt=re(V,rt,V[rt]+R,qe[Ge],Ke[Ge],!1,_e);lt===!1?R=0:(R=lt-V[rt],V[rt]=lt)}):qe=Ke=[!0];var nt=!1;Q.forEach(function(rt,Ge){nt=Ze(rt,z[rt]+R,qe[Ge],Ke[Ge],!1,_e)||nt}),nt&&(Q.forEach(function(rt){G("update",rt),G("slide",rt)}),de!=null&&G("drag",ge))}function pe(M,R){return e.dir?100-M-R:M}function he(M,R){v[M]=R,g[M]=f.fromStepping(R);var z=pe(R,0)-L,Q="translate("+se(z+"%","0")+")";if(c[M].style[e.transformRule]=Q,e.events.invertConnects&&v.length>1){var de=v.every(function(V,ge,_e){return ge===0||V>=_e[ge-1]});if(_!==!de){oe();return}}me(M),me(M+1),_&&(me(M-1),me(M+2))}function ye(){m.forEach(function(M){var R=v[M]>50?-1:1,z=3+(c.length+R*M);c[M].style.zIndex=String(z)})}function Ze(M,R,z,Q,de,V){return de||(R=re(v,M,R,z,Q,!1,V)),R===!1?!1:(he(M,R),!0)}function me(M){if(u[M]){var R=v.slice();_&&R.sort(function(_e,qe){return _e-qe});var z=0,Q=100;M!==0&&(z=R[M-1]),M!==u.length-1&&(Q=R[M]);var de=Q-z,V="translate("+se(pe(z,de)+"%","0")+")",ge="scale("+se(de/100,"1")+")";u[M].style[e.transformRule]=V+" "+ge}}function Pe(M,R){return M===null||M===!1||M===void 0||(typeof M=="number"&&(M=String(M)),M=e.format.from(M),M!==!1&&(M=f.toStepping(M)),M===!1||isNaN(M))?v[R]:M}function Ie(M,R,z){var Q=xs(M),de=v[0]===void 0;R=R===void 0?!0:R,e.animate&&!de&&Bc(s,e.cssClasses.tap,e.animationDuration),m.forEach(function(_e){Ze(_e,Pe(Q[_e],_e),!0,!1,z)});var V=m.length===1?0:1;if(de&&f.hasNoSize()&&(z=!0,v[0]=0,m.length>1)){var ge=100/(m.length-1);m.forEach(function(_e){v[_e]=_e*ge})}for(;V<m.length;++V)m.forEach(function(_e){Ze(_e,v[_e],!0,!0,z)});ye(),m.forEach(function(_e){G("update",_e),Q[_e]!==null&&R&&G("set",_e)})}function Be(M){Ie(e.start,M)}function Re(M,R,z,Q){if(M=Number(M),!(M>=0&&M<m.length))throw new Error("noUiSlider: invalid handle number, got: "+M);Ze(M,Pe(R,M),!0,!0,Q),G("update",M),z&&G("set",M)}function et(M){if(M===void 0&&(M=!1),M)return g.length===1?g[0]:g.slice(0);var R=g.map(e.format.to);return R.length===1?R[0]:R}function Xe(){for(S(bi.aria),S(bi.tooltips),Object.keys(e.cssClasses).forEach(function(M){Ka(s,e.cssClasses[M])});s.firstChild;)s.removeChild(s.firstChild);delete s.noUiSlider}function ft(M){var R=v[M],z=f.getNearbySteps(R),Q=g[M],de=z.thisStep.step,V=null;if(e.snap)return[Q-z.stepBefore.startValue||null,z.stepAfter.startValue-Q||null];de!==!1&&Q+de>z.stepAfter.startValue&&(de=z.stepAfter.startValue-Q),Q>z.thisStep.startValue?V=z.thisStep.step:z.stepBefore.step===!1?V=!1:V=Q-z.stepBefore.highestStep,R===100?de=null:R===0&&(V=null);var ge=f.countStepDecimals();return de!==null&&de!==!1&&(de=Number(de.toFixed(ge))),V!==null&&V!==!1&&(V=Number(V.toFixed(ge))),[V,de]}function B(){return m.map(ft)}function Me(M,R){var z=et(),Q=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];Q.forEach(function(V){M[V]!==void 0&&(t[V]=M[V])});var de=_d(t);Q.forEach(function(V){M[V]!==void 0&&(e[V]=de[V])}),f=de.spectrum,e.margin=de.margin,e.limit=de.limit,e.padding=de.padding,e.pips?Ce(e.pips):fe(),e.tooltips?P():N(),v=[],Ie(qo(M.start)?M.start:z,R),M.connect&&ee()}function ee(){for(;l.firstChild;)l.removeChild(l.firstChild);for(var M=0;M<=e.handles;M++)u[M]=b(l,e.connect[M]),me(M);ot({drag:e.events.drag,fixed:!0})}function oe(){_=!_,md(e,e.connect.map(function(M){return!M})),ee()}function Se(){o=X(s),D(e.connect,o),ot(e.events),Ie(e.start),e.pips&&Ce(e.pips),e.tooltips&&P(),H()}Se();var xe={destroy:Xe,steps:B,on:Fe,off:S,get:et,set:Ie,setHandle:Re,reset:Be,disable:K,enable:ce,__moveHandles:function(M,R,z){ne(M,R,v,z)},options:t,updateOptions:Me,target:s,removePips:fe,removeTooltips:N,getPositions:function(){return v.slice()},getTooltips:function(){return p},getOrigins:function(){return c},pips:Ce};return xe}function Ov(n,e){if(!n||!n.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+n);if(n.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var t=_d(e),i=Uv(n,t,e);return n.noUiSlider=i,i}const kv={__spectrum:hd,cssClasses:fd,create:Ov},Bv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V9.25H21.9531C21.8809 8.20117 21.6973 7.51276 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM21.9978 10.75H2V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 11.4227 21.9978 10.75 21.9978 10.75Z" fill="#1C274C"/>\r
</svg>`,zv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#1C274C"/>\r
</svg>`,Vv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#1C274C"/>\r
</svg>`,Hv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4277 2C11.3139 2 10.2995 2.6007 8.27081 3.80211L7.58466 4.20846C5.55594 5.40987 4.54158 6.01057 3.98466 7C3.42773 7.98943 3.42773 9.19084 3.42773 11.5937V12.4063C3.42773 14.8092 3.42773 16.0106 3.98466 17C4.54158 17.9894 5.55594 18.5901 7.58466 19.7915L8.27081 20.1979C10.2995 21.3993 11.3139 22 12.4277 22C13.5416 22 14.5559 21.3993 16.5847 20.1979L17.2708 19.7915C19.2995 18.5901 20.3139 17.9894 20.8708 17C21.4277 16.0106 21.4277 14.8092 21.4277 12.4063V11.5937C21.4277 9.19084 21.4277 7.98943 20.8708 7C20.3139 6.01057 19.2995 5.40987 17.2708 4.20846L16.5847 3.80211C14.5559 2.6007 13.5416 2 12.4277 2ZM8.67773 12C8.67773 9.92893 10.3567 8.25 12.4277 8.25C14.4988 8.25 16.1777 9.92893 16.1777 12C16.1777 14.0711 14.4988 15.75 12.4277 15.75C10.3567 15.75 8.67773 14.0711 8.67773 12Z" fill="#1C274C"/>\r
</svg>`,Yo=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g id="Menu / Close_LG">\r
<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
</g>\r
</svg>`,Gv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7713 22 14 22H10C6.22878 22 4.34315 22 3.17157 20.8284C2.19725 19.8541 2.03321 18.3859 2.00559 15.7501H10.6937L8.43392 17.3935C8.09893 17.6371 8.02487 18.1062 8.26849 18.4412C8.51212 18.7762 8.98118 18.8502 9.31617 18.6066L13.4412 15.6066C13.6352 15.4655 13.75 15.24 13.75 15.0001C13.75 14.7601 13.6352 14.5346 13.4412 14.3935L9.31617 11.3935C8.98118 11.1499 8.51212 11.2239 8.26849 11.5589C8.02487 11.8939 8.09893 12.363 8.43392 12.6066L10.6937 14.2501H2.00001L2 14L2.00003 6.94975C2.00003 6.06725 2.00003 5.62594 2.06938 5.25839C2.37467 3.64031 3.64033 2.37464 5.25841 2.06935C5.62597 2 6.06724 2 6.94977 2C7.33644 2 7.52978 2 7.71559 2.01738C8.51667 2.09229 9.27654 2.40704 9.89596 2.92051C10.0396 3.03961 10.1763 3.17633 10.4498 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9805 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6748 6 15.8284 6H16.2021C18.8345 6 20.1507 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2306 6.99383C22 7.84935 22 9.16554 22 11.7979Z" fill="#1C274C"/>\r
</svg>`,Wv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.75C16.9926 12.75 18 13.7574 18 15V21H18.25C19.7688 21 21 19.7688 21 18.25V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z" fill="#212121"/>\r
<path d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z" fill="#212121"/>\r
<path d="M16.5 21V15C16.5 14.5858 16.1642 14.25 15.75 14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15V21H16.5Z" fill="#212121"/>\r
</svg>`,Xv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z" fill="#1C274D"/>\r
</svg>`,qv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.6031L17.3907 10.9624C18.0317 10.3214 18.8742 10.0004 19.713 10H19.7151C20.1521 10.0002 20.59 10.0874 21 10.2615V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z" fill="#212121"/>\r
<path d="M14.1031 14.25L11.4883 16.8648C11.016 17.3371 10.681 17.9288 10.519 18.5768L10.0613 20.4075C10.011 20.6088 9.99129 20.8075 9.99852 21H7.5V15C7.5 14.5858 7.83579 14.25 8.25 14.25H14.1031Z" fill="#212121"/>\r
<path d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z" fill="#212121"/>\r
<path d="M19.7152 11H19.7131C19.1285 11.0003 18.5439 11.2234 18.0979 11.6695L12.1955 17.5719C11.8513 17.916 11.6072 18.3472 11.4892 18.8194L11.0315 20.6501C10.8325 21.4462 11.5536 22.1674 12.3497 21.9683L14.1804 21.5106C14.6526 21.3926 15.0838 21.1485 15.4279 20.8043L21.3303 14.9019C22.223 14.0093 22.223 12.5621 21.3303 11.6695C20.8843 11.2234 20.2998 11.0003 19.7152 11Z" fill="#212121"/>\r
</svg>`,jv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="#1C274C"/>\r
<path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#1C274C"/>\r
</svg>`,Yv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#1C274C"/>\r
<path d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#1C274C"/>\r
</svg>`,vd=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10ZM6.32092 13.1038C6.94501 12.5241 7.91991 12.5566 8.50397 13.1766L11.1515 15.9869C11.9509 16.8356 13.2596 16.9499 14.1941 16.2527C14.8073 15.7953 15.661 15.8473 16.2141 16.3757L18.4819 18.5423C18.7814 18.8284 19.2562 18.8176 19.5423 18.5181C19.8284 18.2186 19.8176 17.7438 19.5181 17.4577L17.2503 15.2911C16.1679 14.257 14.4971 14.1553 13.2972 15.0504C12.9735 15.2919 12.5202 15.2523 12.2433 14.9584L9.59579 12.1481C8.44651 10.9281 6.52816 10.8641 5.3001 12.0047L4.4896 12.7575C4.1861 13.0394 4.16858 13.5139 4.45047 13.8174C4.73236 14.1209 5.20691 14.1385 5.51041 13.8566L6.32092 13.1038Z" fill="#1C274C"/>\r
</svg>`,$v=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>\r
<circle cx="16" cy="8" r="2" stroke="#1C274C" stroke-width="1.5"/>\r
<path d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>`,Zv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z" fill="#1C274C"/>\r
<path d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z" fill="#1C274C"/>\r
</svg>`,Kv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.64855 5.36234 3.6059 5.9095 2.95969 6.64132L12 11.1615L21.0403 6.64132C20.3941 5.9095 19.3515 5.36234 17.5777 4.43152Z" fill="#1C274C"/>\r
<path d="M21.7484 7.96435L12.75 12.4635V21.904C13.4679 21.7252 14.2848 21.2965 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C22 15.8458 22 14.5833 22 12.0585V11.9415C22 10.0489 22 8.86558 21.7484 7.96435Z" fill="#1C274C"/>\r
<path d="M11.25 21.904V12.4635L2.25164 7.96434C2 8.86557 2 10.0489 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C9.71524 21.2965 10.5321 21.7252 11.25 21.904Z" fill="#1C274C"/>\r
</svg>`,Jv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">\r
  <path fill="#000000" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>\r
</svg>`,Hc=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M11.4096 5.50506C13.0796 3.83502 13.9146 3 14.9522 3C15.9899 3 16.8249 3.83502 18.4949 5.50506C20.165 7.1751 21 8.01013 21 9.04776C21 10.0854 20.165 10.9204 18.4949 12.5904L14.3017 16.7837L7.21634 9.69828L11.4096 5.50506Z" fill="#1C274C"/>\r
<path d="M6.1557 10.759L13.2411 17.8443L12.5904 18.4949C12.2127 18.8727 11.8777 19.2077 11.5734 19.5H21C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9C7.98423 20.9747 7.1494 20.1393 5.50506 18.4949C3.83502 16.8249 3 15.9899 3 14.9522C3 13.9146 3.83502 13.0796 5.50506 11.4096L6.1557 10.759Z" fill="#1C274C"/>\r
</svg>`,Qv=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\r
  <path\r
    fill-rule="evenodd"\r
    clip-rule="evenodd"\r
    d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"\r
    fill="#000000"\r
  />\r
</svg>`,e1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M18.25 4C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25ZM18.25 5.5H5.75C4.50736 5.5 3.5 6.50736 3.5 7.75V16.25C3.5 17.4926 4.50736 18.5 5.75 18.5H18.25C19.4926 18.5 20.5 17.4926 20.5 16.25V7.75C20.5 6.50736 19.4926 5.5 18.25 5.5ZM18.25 13C18.6642 13 19 13.3358 19 13.75V15C19 16.1046 18.1046 17 17 17H15.75C15.3358 17 15 16.6642 15 16.25C15 15.8358 15.3358 15.5 15.75 15.5H17C17.2761 15.5 17.5 15.2761 17.5 15V13.75C17.5 13.3358 17.8358 13 18.25 13ZM5.75 13C6.16421 13 6.5 13.3358 6.5 13.75V15C6.5 15.2761 6.72386 15.5 7 15.5H8.25C8.66421 15.5 9 15.8358 9 16.25C9 16.6642 8.66421 17 8.25 17H7C5.89543 17 5 16.1046 5 15V13.75C5 13.3358 5.33579 13 5.75 13ZM7 7H8.25C8.66421 7 9 7.33579 9 7.75C9 8.1297 8.71785 8.44349 8.35177 8.49315L8.25 8.5H7C6.75454 8.5 6.55039 8.67688 6.50806 8.91012L6.5 9V10.25C6.5 10.6642 6.16421 11 5.75 11C5.3703 11 5.05651 10.7178 5.00685 10.3518L5 10.25V9C5 7.94564 5.81588 7.08183 6.85074 7.00549L7 7ZM17 7C18.1046 7 19 7.89543 19 9V10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25V9C17.5 8.72386 17.2761 8.5 17 8.5H15.75C15.3358 8.5 15 8.16421 15 7.75C15 7.33579 15.3358 7 15.75 7H17Z" fill="#212121"/>\r
</svg>`,dt="__none__",Gc=Object.freeze(["always",">",">=","<","<=","==","!="]),Wc=Object.freeze([{id:"file",label:le.menu.file},{id:"view",label:le.menu.view},{id:"settings",label:le.menu.settings},{id:"rules",label:le.menu.rules}]),t1=Object.freeze([512,1024,2048,4096,8192,16384]),n1=Object.freeze([{key:"inputGain",label:le.settings.sensitivity,min:0,max:3,step:.01,tooltip:"Technical term: Input Gain. Scales all amplitude before analysis."},{key:"defaultParticleSize",label:le.settings.particleDefaultSize,min:1,max:40,step:.5,tooltip:"Technical term: Particle Size. Base sprite diameter in pixels."},{key:"maxParticles",label:le.settings.particleCapacity,min:1e5,max:5e6,step:5e4,tooltip:"Technical term: Max Particle Capacity. Total GPU particle slots."},{key:"particlesByFrame",label:le.settings.spawnRate,min:100,max:5e3,step:1,tooltip:"Technical term: Particles By Frame. Number of log-frequency spawn buckets per frame."},{key:"fluxWindowFrames",label:le.settings.activityInterval,min:1,max:64,step:1,tooltip:"Technical term: Flux Window Frames. Rolling frame window for activity averaging."}]),i1=Object.freeze([{id:"frequencyRange",syncKeys:["freqNormMin","freqNormMax"],label:le.settings.frequencyRange,min:16,max:2e4,step:1,unit:"Hz",tooltip:"Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.",get:()=>({min:Number(ae.freqNormMin??40),max:Number(ae.freqNormMax??12e3)}),set:(n,e)=>$t({freqNormMin:n,freqNormMax:e})},{id:"volumeRange",syncKeys:["binMagnitudeNormMin","binMagnitudeNormMax"],label:le.settings.volume,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.",get:()=>({min:Number(ae.binMagnitudeNormMin??-70),max:Number(ae.binMagnitudeNormMax??0)}),set:(n,e)=>$t({binMagnitudeNormMin:n,binMagnitudeNormMax:e})},{id:"instabilityRange",syncKeys:["binPhaseDeviationNormMin","binPhaseDeviationNormMax"],label:le.settings.instability,min:0,max:Math.PI,step:.001,unit:"rad",tooltip:"Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.",get:()=>({min:Number(ae.binPhaseDeviationNormMin??0),max:Number(ae.binPhaseDeviationNormMax??Math.PI)}),set:(n,e)=>$t({binPhaseDeviationNormMin:n,binPhaseDeviationNormMax:e})},{id:"attackSharpnessRange",syncKeys:["binAttackTimeNormMin","binAttackTimeNormMax"],label:le.settings.attackSharpness,min:0,max:2e3,step:1,unit:"ms",tooltip:"Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.",get:()=>({min:Number(ae.binAttackTimeNormMin??5),max:Number(ae.binAttackTimeNormMax??500)}),set:(n,e)=>$t({binAttackTimeNormMin:n,binAttackTimeNormMax:e})},{id:"energyRange",syncKeys:["globalRmsNormMin","globalRmsNormMax"],label:le.settings.energy,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.",get:()=>({min:Number(ae.globalRmsNormMin??-60),max:Number(ae.globalRmsNormMax??0)}),set:(n,e)=>$t({globalRmsNormMin:n,globalRmsNormMax:e})},{id:"sharpnessRange",syncKeys:["spectralCentroidNormMin","spectralCentroidNormMax"],label:le.settings.sharpness,min:16,max:22050,step:1,unit:"Hz",tooltip:"Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.",get:()=>({min:Number(ae.spectralCentroidNormMin??150),max:Number(ae.spectralCentroidNormMax??8e3)}),set:(n,e)=>$t({spectralCentroidNormMin:n,spectralCentroidNormMax:e})},{id:"activityRange",syncKeys:["globalSpectralFluxNormMin","globalSpectralFluxNormMax","binFluxNormMin","binFluxNormMax"],label:le.settings.activity,min:0,max:200,step:.1,unit:"AU",tooltip:"Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.",get:()=>({min:Number(ae.globalSpectralFluxNormMin??0),max:Number(ae.globalSpectralFluxNormMax??100)}),set:(n,e)=>{$t({globalSpectralFluxNormMin:n,globalSpectralFluxNormMax:e,binFluxNormMin:n/100,binFluxNormMax:e/100})}},{id:"noisinessRange",syncKeys:["spectralFlatnessNormMin","spectralFlatnessNormMax"],label:le.settings.noisiness,min:0,max:1,step:.001,unit:"ratio",tooltip:"Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.",get:()=>({min:Number(ae.spectralFlatnessNormMin??0),max:Number(ae.spectralFlatnessNormMax??1)}),set:(n,e)=>$t({spectralFlatnessNormMin:n,spectralFlatnessNormMax:e})}]),r1=Object.freeze([{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"x",label:"X"},{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"y",label:"Y"},{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"z",label:"Z"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"size",label:"Size"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"shapeType",label:"Shape",type:"enum",options:["circle","square"]},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"particleCount",label:"Particle Count"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"red",label:"Red"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"green",label:"Green"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"lines",section:"Lines",subgroup:"Position",output:"xStart",label:"X Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"xEnd",label:"X End"},{target:"lines",section:"Lines",subgroup:"Position",output:"yStart",label:"Y Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"yEnd",label:"Y End"},{target:"lines",section:"Lines",subgroup:"Position",output:"zStart",label:"Z Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"zEnd",label:"Z End"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"thickness",label:"Thickness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"lineCount",label:"Line Count"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"red",label:"Red"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"green",label:"Green"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"background",section:"Background",subgroup:"Appearance",output:"red",label:"Red"},{target:"background",section:"Background",subgroup:"Appearance",output:"green",label:"Green"},{target:"background",section:"Background",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"background",section:"Background",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"background",section:"Background",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"background",section:"Background",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"camera",section:"Camera",subgroup:"Position",output:"x",label:"Position X"},{target:"camera",section:"Camera",subgroup:"Position",output:"y",label:"Position Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"z",label:"Position Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetX",label:"Target X"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetY",label:"Target Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetZ",label:"Target Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"angleOfView",label:"Angle Of View"}]),bd=new Set(Ir.map(n=>n.id));new RegExp(`\\b(${Ir.map(n=>n.id.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")).sort((n,e)=>e.length-n.length).join("|")})\\b`,"g");const Xc=Object.freeze({file:Bv,view:zv,settings:Vv,rules:Hv}),kt=Object.freeze({load:Gv,save:Wv,savePreset:Xv,saveAs:qv,upload:jv,remove:Yv,exportImage:vd,exportImageNoBg:$v,exportVideo:Zv,exportObj:Kv,reset:Qv,fit:e1,add:Jv,clear:Hc,clean:Hc,close:Yo}),xd=Object.freeze([{value:"math:add",label:"+"},{value:"math:subtract",label:"-"},{value:"math:multiply",label:"x"},{value:"math:divide",label:"÷"},{value:"math:openParen",label:"("},{value:"math:closeParen",label:")"},{value:"math:parentheses",label:"()"},{value:"math:power",label:"power"},{value:"math:clamp",label:"clamp"},{value:"math:average",label:"average"}]);function a1(){return{all:[],byKey:new Map}}function Vt(n,e,t=null){if(!(!n||typeof e!="function")){if(!Array.isArray(t)||t.length===0){n.all.push(e);return}for(const i of t){const r=String(i||"").trim();r&&(n.byKey.has(r)||n.byKey.set(r,[]),n.byKey.get(r).push(e))}}}function qc(n){for(const e of n)try{e()}catch{}}function jc(n,e=[],t=!1){var r;const i=new Set(t?(n==null?void 0:n.all)||[]:[]);for(const a of Array.isArray(e)?e:[]){const s=String(a||"").trim();if(!s)continue;const o=(r=n==null?void 0:n.byKey)==null?void 0:r.get(s);if(o)for(const l of o)i.add(l)}return[...i]}function O(n,e="",t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,a]of Object.entries(t))r==="text"?i.textContent=a:r==="html"?i.innerHTML=a:a!=null&&i.setAttribute(r,String(a));return i}function Bn(n,e,t){const i=Number(n);return Number.isFinite(i)?Math.max(e,Math.min(t,i)):e}function s1(n,e,t){const i=Bn(Math.round(n),0,255).toString(16).padStart(2,"0"),r=Bn(Math.round(e),0,255).toString(16).padStart(2,"0"),a=Bn(Math.round(t),0,255).toString(16).padStart(2,"0");return`#${i}${r}${a}`}function o1(n,e,t){const i=(Number(n)%360+360)%360,r=Bn(Number(e)/100,0,1),a=Bn(Number(t)/100,0,1),s=(1-Math.abs(2*a-1))*r,o=s*(1-Math.abs(i/60%2-1)),l=a-s/2;let c=0,u=0,d=0;return i<60?(c=s,u=o,d=0):i<120?(c=o,u=s,d=0):i<180?(c=0,u=s,d=o):i<240?(c=0,u=o,d=s):i<300?(c=o,u=0,d=s):(c=s,u=0,d=o),{r:Math.round((c+l)*255),g:Math.round((u+l)*255),b:Math.round((d+l)*255)}}function l1(n){const e=String(n||"").trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{6}$/.test(e))return{h:0,s:0,l:0};const t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,a=Math.max(t,i,r),s=Math.min(t,i,r),o=a-s;let l=0;o>0&&(a===t?l=60*((i-r)/o%6):a===i?l=60*((r-t)/o+2):l=60*((t-i)/o+4)),l<0&&(l+=360);const c=(a+s)/2,u=o===0?0:o/(1-Math.abs(2*c-1));return{h:l,s:u*100,l:c*100}}function Bt(n,e,t){if(!n||!e)return;const i=String(t||n.textContent||"").trim();n.textContent="",n.append(O("span","cp-btn-icon",{html:e}),O("span","cp-btn-label",{text:i})),n.setAttribute("aria-label",i)}function xl(n){const e=String(n||""),t=Go(e);return{type:"pill",label:(t==null?void 0:t.label)||e,code:e}}function yl(n=0){const e=Number(n);return{type:"number",value:Number.isFinite(e)?e:0}}function Lt(n){return{type:"op",code:String(n||"")}}function Ln(){return{type:"slot"}}function c1(n){return n==="math:add"?[Lt(" + ")]:n==="math:subtract"?[Lt(" - ")]:n==="math:multiply"?[Lt(" * ")]:n==="math:divide"?[Lt(" / ")]:n==="math:openParen"?[Lt("(")]:n==="math:closeParen"?[Lt(")")]:n==="math:parentheses"?[Lt("("),Ln(),Lt(")")]:n==="math:power"?[Lt("pow("),Ln(),Lt(", "),Ln(),Lt(")")]:n==="math:clamp"?[Lt("clamp("),Ln(),Lt(", "),Ln(),Lt(", "),Ln(),Lt(")")]:n==="math:average"?[Lt("avg("),Ln(),Lt(", "),Ln(),Lt(")")]:[Ln()]}function Yc(n){return!n||typeof n!="object"?null:n.type==="pill"?xl(n.code):n.type==="number"?yl(n.value):n.type==="op"?Lt(n.code):n.type==="slot"?Ln():null}function yd(n){const e=[];for(const t of Array.isArray(n)?n:[])if(!(!t||typeof t!="object")){if(t.type==="pill"){e.push(String(t.code||""));continue}if(t.type==="number"){const i=Number(t.value);e.push(Number.isFinite(i)?String(i):"0");continue}t.type==="op"&&e.push(String(t.code||""))}return e.join("")}function u1(n){const e=String(n||"");if(!e.trim())return[];const t=new Set(Ir.map(s=>s.id)),i=/([A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[()+\-*/])/g,r=[];let a=0;for(const s of e.matchAll(i)){const o=Number(s.index);if(o>a){const c=e.slice(a,o);c.trim()&&r.push(Lt(c))}const l=String(s[0]||"");t.has(l)?r.push(xl(l)):/^\d+(?:\.\d+)?$/.test(l)?r.push(yl(Number(l))):r.push(Lt(["+","-","*","/"].includes(l)?` ${l} `:l)),a=o+l.length}if(a<e.length){const s=e.slice(a);s.trim()&&r.push(Lt(s))}return r.length||r.push(Ln()),r}function d1(n=""){const e=O("select","cp-input-select cp-rule-token-insert-select");e.appendChild(O("option","",{value:"",text:le.rules.insertToken}));const t=document.createElement("optgroup");t.label=le.rules.detailVariables;for(const s of Tr("detail"))t.appendChild(O("option","",{value:`var:${s.id}`,text:s.label}));const i=document.createElement("optgroup");i.label=le.rules.overallVariables;for(const s of Tr("overall"))i.appendChild(O("option","",{value:`var:${s.id}`,text:s.label}));const r=document.createElement("optgroup");r.label=le.rules.number,r.appendChild(O("option","",{value:"number",text:le.rules.number}));const a=document.createElement("optgroup");a.label=le.rules.mathActions;for(const s of xd)a.appendChild(O("option","",{value:s.value,text:s.label}));return e.append(t,i,r,a),n&&(e.value=n),e}function p1(n=""){const e=O("select","cp-input-select cp-rule-token-action-select cp-rule-token-value-select");e.appendChild(O("option","",{value:"",text:le.rules.insertVariable}));const t=document.createElement("optgroup");t.label=le.rules.detailVariables;for(const a of Tr("detail"))t.appendChild(O("option","",{value:`var:${a.id}`,text:a.label}));const i=document.createElement("optgroup");i.label=le.rules.overallVariables;for(const a of Tr("overall"))i.appendChild(O("option","",{value:`var:${a.id}`,text:a.label}));const r=document.createElement("optgroup");return r.label=le.rules.number,r.appendChild(O("option","",{value:"number",text:le.rules.number})),e.append(r,t,i),n&&(e.value=n),e}function h1(n=""){const e=O("select","cp-input-select cp-rule-token-action-select cp-rule-token-math-select");e.appendChild(O("option","",{value:"",text:le.rules.mathActions}));for(const t of xd)e.appendChild(O("option","",{value:t.value,text:t.label}));return n&&(e.value=n),e}function Md(n){const e=String(n||"");return e?e.startsWith("var:")?[xl(e.slice(4))]:e==="number"?[yl(0)]:e.startsWith("math:")?c1(e):[]:[]}function f1(n){return(Array.isArray(n)?n:[]).some(e=>(e==null?void 0:e.type)==="slot")}function Gn(n){var a,s;if(!(n!=null&&n.tokenEditor))return;const e=n.tokenEditor;e.innerHTML="";const t=Array.isArray(n.tokens)?n.tokens:[];(!Number.isInteger(n.pendingInsertIndex)||n.pendingInsertIndex<0||n.pendingInsertIndex>t.length)&&(n.pendingInsertIndex=null);const i=(o,l)=>{var f;const c=Number(o),u=Number(l);if(!Number.isInteger(c)||!Number.isInteger(u)||c<0||c>=n.tokens.length||u<0||u>n.tokens.length)return;const[d]=n.tokens.splice(c,1);let p=u;c<u&&(p-=1),n.tokens.splice(p,0,d),n.dragTokenIndex=null,Gn(n),(f=n.onExpressionChanged)==null||f.call(n)},r=o=>{const l=O("div","cp-rule-token-gap"),c=O("button","cp-rule-token-gap-btn",{type:"button"});Bt(c,kt.add,le.rules.insertHere),c.classList.toggle("is-armed",n.pendingInsertIndex===o),c.addEventListener("click",()=>{n.pendingInsertIndex=o,Gn(n)}),l.addEventListener("dragover",u=>{Number.isInteger(n.dragTokenIndex)&&u.preventDefault()}),l.addEventListener("drop",u=>{Number.isInteger(n.dragTokenIndex)&&(u.preventDefault(),i(n.dragTokenIndex,o))}),l.appendChild(c),e.appendChild(l)};r(0),t.length===0&&e.appendChild(O("span","cp-rule-token-placeholder",{text:le.rules.tokenEditorPlaceholder}));for(let o=0;o<t.length;o++){const l=Yc(t[o]);if(!l)continue;if(n.tokens[o]=l,l.type==="slot"){const u=O("button","cp-rule-token-slot",{type:"button",text:le.rules.selectValue});if(u.draggable=!0,u.addEventListener("dragstart",d=>{var p;n.dragTokenIndex=o,(p=d.dataTransfer)==null||p.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.addEventListener("click",()=>{n.insertContext={mode:"replace",index:o},Gn(n)}),e.appendChild(u),((a=n.insertContext)==null?void 0:a.mode)==="replace"&&((s=n.insertContext)==null?void 0:s.index)===o){const d=d1();d.classList.add("cp-rule-token-picker"),d.addEventListener("change",()=>{var f;const p=Md(d.value).map(Yc).filter(Boolean);p.length&&(n.tokens.splice(o,1,...p),n.insertContext=null,Gn(n),(f=n.onExpressionChanged)==null||f.call(n))}),e.appendChild(d),requestAnimationFrame(()=>d.focus())}r(o+1);continue}if(l.type==="pill"){const u=O("button","cp-rule-token-pill",{type:"button",title:l.code});u.draggable=!0,u.addEventListener("dragstart",d=>{var p;n.dragTokenIndex=o,(p=d.dataTransfer)==null||p.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.append(O("span","cp-rule-token-pill-label",{text:l.label}),O("span","cp-rule-token-pill-remove",{html:Yo})),u.addEventListener("click",()=>{var d;n.tokens.splice(o,1),Gn(n),(d=n.onExpressionChanged)==null||d.call(n)}),e.appendChild(u),r(o+1);continue}if(l.type==="number"){const u=O("div","cp-rule-token-number-wrap");u.draggable=!0,u.addEventListener("dragstart",f=>{var g;n.dragTokenIndex=o,(g=f.dataTransfer)==null||g.setData("text/plain",String(o)),f.dataTransfer&&(f.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null});const d=O("input","cp-input-number cp-rule-token-number",{type:"number",step:.001,value:String(l.value??0)});d.addEventListener("change",()=>{var f;l.value=Number(d.value),(f=n.onExpressionChanged)==null||f.call(n)});const p=O("button","cp-rule-token-number-remove",{type:"button",title:"Remove token"});p.appendChild(O("span","cp-rule-token-pill-remove",{html:Yo})),p.addEventListener("click",f=>{var g;f.preventDefault(),f.stopPropagation(),n.tokens.splice(o,1),Gn(n),(g=n.onExpressionChanged)==null||g.call(n)}),u.append(d,p),e.appendChild(u),r(o+1);continue}const c=O("button","cp-rule-token-math",{type:"button",text:l.code.trim()||l.code});c.draggable=!0,c.addEventListener("dragstart",u=>{var d;n.dragTokenIndex=o,(d=u.dataTransfer)==null||d.setData("text/plain",String(o)),u.dataTransfer&&(u.dataTransfer.effectAllowed="move")}),c.addEventListener("dragend",()=>{n.dragTokenIndex=null}),c.addEventListener("click",()=>{var u;n.tokens.splice(o,1),Gn(n),(u=n.onExpressionChanged)==null||u.call(n)}),e.appendChild(c),r(o+1)}}function m1(n){return Xc[n]||Xc.rules}function g1(n,e){const t=O("div","cp-setting-row cp-setting-range"),i=O("div","cp-setting-label-wrap"),r=O("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const a=O("div","cp-setting-range-controls"),s=O("div","cp-range-container cp-range-slider"),o=O("input","cp-input-number",{type:"number",step:n.step}),l=O("input","cp-input-number",{type:"number",step:n.step});kv.create(s,{start:[n.min,n.max],connect:!0,range:{min:n.min,max:n.max},step:n.step,behaviour:"tap-drag"});const c=s.noUiSlider;let u=!0;const d=(g,v)=>{o.value=String(g),l.value=String(v)};c.on("update",g=>{const v=Number(g[0]),m=Number(g[1]);d(v,m),!u&&n.set(v,m)});const p=()=>{let g=Number(o.value),v=Number(l.value);if(Number.isFinite(g)||(g=n.min),Number.isFinite(v)||(v=n.max),g=Bn(g,n.min,n.max),v=Bn(v,n.min,n.max),g>v){const m=g;g=v,v=m}u=!0,c.set([g,v]),u=!1,d(g,v),n.set(g,v)};o.addEventListener("input",p),l.addEventListener("input",p),o.addEventListener("change",p),l.addEventListener("change",p);const f=()=>{const g=n.get();u=!0,c.set([g.min,g.max]),u=!1,d(g.min,g.max)};return a.append(s,o,l),t.append(i,a),Vt(e,f,n.syncKeys),f(),u=!1,t}function _1(n,e){const t=O("div","cp-setting-row"),i=O("div","cp-setting-label-wrap"),r=O("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const a=O("div","cp-setting-controls"),s=O("input","cp-input-range",{type:"range",min:n.min,max:n.max,step:n.step}),o=O("input","cp-input-number",{type:"number",step:n.step,min:n.min,max:n.max}),l=u=>{const d=Bn(u,n.min,n.max);tn(n.key,d)};s.addEventListener("input",()=>l(Number(s.value))),o.addEventListener("change",()=>l(Number(o.value)));const c=()=>{const u=Number(ae[n.key]);s.value=String(Number.isFinite(u)?u:n.min),o.value=String(Number.isFinite(u)?u:n.min)};return a.append(s,o),t.append(i,a),Vt(e,c,[n.key]),c(),t}function br(n,e){const t=document.createDocumentFragment();for(const i of n){const r=O("option","",{value:i.value,text:i.label});i.title&&(r.title=i.title),String(i.value)===String(e)&&(r.selected=!0),t.appendChild(r)}return t}function $c(n=dt){const e=O("select","cp-input-select");e.appendChild(O("option","",{value:dt,text:le.rules.selectValue}));const t=document.createElement("optgroup");t.label=le.rules.detailVariables;for(const r of Tr("detail"))t.appendChild(O("option","",{value:r.id,text:r.label}));const i=document.createElement("optgroup");i.label=le.rules.overallVariables;for(const r of Tr("overall"))i.appendChild(O("option","",{value:r.id,text:r.label}));return e.append(t,i),n&&n!==dt&&(e.value=n),e}function v1(n){const e=O("div","cp-menu-pane-inner"),t=".ssp-preset.json",i=(P="")=>{const H=String(P||"").trim();return H?/\.ssp-preset\.json$/i.test(H)?H.replace(/\.ssp-preset\.json$/i,""):H.replace(/\.[^./\\]+$/g,""):""},r=(P,H)=>({schemaVersion:1,name:String(P||"").trim(),params:H&&typeof H=="object"?H:{},updatedAt:new Date().toISOString()}),a=(P,H="")=>{const I=JSON.parse(String(P||"{}"));if(!I||typeof I!="object")throw new Error("Preset file is invalid.");const ie=String((I==null?void 0:I.name)||"").trim()||i(H);return I!=null&&I.params&&typeof I.params=="object"?{name:ie,params:I.params}:{name:ie,params:I}},s=async(P,H)=>{const I=String(P||"").trim(),ie=`${I||"seesound-preset"}${t}`,Oe=r(I,H);if(typeof window.showSaveFilePicker=="function")try{const ve=await window.showSaveFilePicker({suggestedName:ie,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!ve)return!1;const Ae=await ve.createWritable();return await Ae.write(JSON.stringify(Oe,null,2)),await Ae.close(),!0}catch{return!1}const te=new Blob([JSON.stringify(Oe,null,2)],{type:"application/json"}),fe=URL.createObjectURL(te),Ce=document.createElement("a");return Ce.href=fe,Ce.download=ie,document.body.appendChild(Ce),Ce.click(),Ce.remove(),URL.revokeObjectURL(fe),!0},o=async()=>{if(typeof window.showOpenFilePicker=="function")try{const[P]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!P)return null;const H=await P.getFile(),I=await H.text();return a(I,H.name)}catch{return null}return new Promise(P=>{const H=document.createElement("input");H.type="file",H.accept=`${t},.json`,H.style.display="none",H.addEventListener("change",async()=>{var I;try{const ie=(I=H.files)==null?void 0:I[0];if(!ie){P(null);return}const Oe=await ie.text();P(a(Oe,ie.name))}catch{P(null)}finally{H.remove()}},{once:!0}),document.body.appendChild(H),H.click()})},l=(P="")=>{const H=String(P||"").trim();return H?/\.ssp\.json$/i.test(H)?H.replace(/\.ssp\.json$/i,""):H.replace(/\.[^./\\]+$/g,""):""},c=O("section","cp-section"),u=O("div","cp-section-title-row"),d=O("h3","cp-section-title",{text:le.file.project}),p=O("span","cp-project-name"),f=le.file.projectNew||"New Project",g=(P={})=>{const H=String((P==null?void 0:P.projectName)||"").trim(),I=String((P==null?void 0:P.fileName)||"").trim(),ie=H||l(I)||f;p.textContent=ie,p.title=ie};g(),u.append(d,p),c.appendChild(u);const v=O("div","cp-button-grid"),m=O("button","cp-btn",{text:le.file.projectLoad}),h=O("button","cp-btn",{text:le.file.projectSave}),y=O("button","cp-btn",{text:le.file.projectSaveAs});Bt(m,kt.load,le.file.projectLoad),Bt(h,kt.save,le.file.projectSave),Bt(y,kt.saveAs,le.file.projectSaveAs),v.append(m,h,y),c.appendChild(v),m.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-open-request"))),h.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-request"))),y.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-as-request"))),window.addEventListener("seesound:project-file-state",P=>{g((P==null?void 0:P.detail)||{})}),window.addEventListener("seesound:project-loaded",P=>{g((P==null?void 0:P.detail)||{})}),window.addEventListener("seesound:project-autosaved",P=>{g((P==null?void 0:P.detail)||{})});const _=O("section","cp-section cp-preset-bar");_.appendChild(O("h3","cp-section-title",{text:le.file.presets}));const x=O("div","cp-preset-row"),A=O("select","cp-input-select cp-preset-sel"),T=O("input","cp-input-text cp-preset-name",{type:"text",placeholder:le.file.presetNamePlaceholder}),L=O("button","cp-btn",{text:le.file.presetLoad}),F=O("button","cp-btn",{text:le.file.presetUpload||"Upload"}),w=O("button","cp-btn",{text:le.file.presetSaveProject||le.file.presetSave}),b=O("button","cp-btn",{text:le.file.presetSaveLocal||"Save Local"}),D=O("button","cp-btn cp-btn-danger",{text:le.file.presetRemove});Bt(L,kt.load,le.file.presetLoad),Bt(F,kt.upload,le.file.presetUpload||"Upload"),Bt(w,kt.save,le.file.presetSaveProject||le.file.presetSave),Bt(b,kt.saveAs,le.file.presetSaveLocal||"Save Local"),Bt(D,kt.remove,le.file.presetRemove),x.append(A,L,F,D,T,w,b),_.appendChild(x);async function X(){const P=await Xo(),H=String(A.value||"");A.innerHTML="",A.appendChild(O("option","",{value:"",text:le.file.presetSelectPlaceholder}));for(const I of P)A.appendChild(O("option","",{value:I,text:I}));H&&P.includes(H)&&(A.value=H)}A.addEventListener("change",()=>{A.value&&(T.value=A.value)}),L.addEventListener("click",async()=>{const P=String(A.value||"").trim();if(!P)return;const H=await dd(P);H!=null&&H.params&&$t(H.params)}),F.addEventListener("click",async()=>{const P=await o();if(!(P!=null&&P.params)||typeof P.params!="object")return;const H=String(P.name||"").trim();$t(P.params),H&&(await as(H,P.params),await X(),A.value=H,T.value=H,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),w.addEventListener("click",async()=>{const P=String(T.value||"").trim(),H=String(A.value||"").trim(),I=P||H;if(!I)return;const ie=ia();window.dispatchEvent(new CustomEvent("seesound:project-preset-save-request",{detail:{name:I,params:ie}})),await as(I,ie),await X(),A.value=I,T.value=I,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}),b.addEventListener("click",async()=>{const P=String(T.value||"").trim(),H=String(A.value||"").trim(),I=P||H;!I||!await s(I,ia())||(T.value=I)}),D.addEventListener("click",async()=>{const P=String(A.value||"").trim();P&&(await Q_(P),T.value="",await X(),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),window.addEventListener("seesound:preset-library-changed",()=>{X()});const j=O("section","cp-section");j.appendChild(O("h3","cp-section-title",{text:le.file.export}));const J=O("div","cp-button-grid"),Z=O("button","cp-btn",{text:le.file.exportImage}),K=O("button","cp-btn",{text:le.file.exportImageNoBg}),ce=O("button","cp-btn",{text:le.file.exportVideo}),N=O("button","cp-btn",{text:le.file.exportObj});Bt(Z,kt.exportImage,le.file.exportImage),Bt(K,kt.exportImageNoBg,le.file.exportImageNoBg),Bt(ce,kt.exportVideo,le.file.exportVideo),Bt(N,kt.exportObj,le.file.exportObj),J.append(Z,K,ce,N),j.appendChild(J),Z.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image"))),K.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image-no-bg"))),ce.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-video-toggle"))),N.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-obj"))),e.append(c,_,j),n.appendChild(e),X()}function b1(n,e){const t=O("div","cp-menu-pane-inner"),i=O("section","cp-section");i.appendChild(O("h3","cp-section-title",{text:le.view.canvasSize}));const r=O("input","cp-input-number",{type:"number",min:160,step:1}),a=O("input","cp-input-number",{type:"number",min:120,step:1}),s=O("div","cp-inline-pair");s.append(O("label","cp-setting-label",{text:le.view.width}),r,O("label","cp-setting-label",{text:le.view.height}),a),i.appendChild(s);const o=O("input","cp-input-range",{type:"range",min:5,max:400,step:1}),l=O("input","cp-input-number",{type:"number",min:5,max:400,step:1}),c=O("div","cp-setting-row"),u=O("div","cp-setting-label-wrap");u.appendChild(O("label","cp-setting-label",{text:le.view.canvasZoom}));const d=O("div","cp-setting-controls");d.append(o,l),c.append(u,d),i.appendChild(c);const p=O("section","cp-section");p.appendChild(O("h3","cp-section-title",{text:le.view.backgroundColor}));const f=O("input","cp-input-color",{type:"color"});p.appendChild(f);const g=O("section","cp-section");g.appendChild(O("h3","cp-section-title",{text:le.view.cameraPosition}));const v=O("input","cp-input-number",{type:"number",step:1}),m=O("input","cp-input-number",{type:"number",step:1}),h=O("input","cp-input-number",{type:"number",step:1}),y=O("div","cp-inline-triplet");y.append(v,m,h),g.appendChild(y),g.appendChild(O("h3","cp-section-title",{text:le.view.cameraTarget}));const _=O("input","cp-input-number",{type:"number",step:1}),x=O("input","cp-input-number",{type:"number",step:1}),A=O("input","cp-input-number",{type:"number",step:1}),T=O("div","cp-inline-triplet");T.append(_,x,A),g.appendChild(T);const L=O("div","cp-button-grid"),F=O("button","cp-btn",{text:le.view.cameraReset}),w=O("button","cp-btn",{text:le.view.cameraFit}),b=O("button","cp-btn",{text:le.view.cameraClean});Bt(F,kt.reset,le.view.cameraReset),Bt(w,kt.fit,le.view.cameraFit),Bt(b,kt.clean,le.view.cameraClean),L.append(F,w,b),g.appendChild(L);const D=O("section","cp-section");D.appendChild(O("h3","cp-section-title",{text:le.view.projection}));const X=O("select","cp-input-select");X.appendChild(br([{value:"axonometric",label:le.view.projectionAxo},{value:"perspective",label:le.view.projectionPerspective}],ae.cameraProjection));const j=O("select","cp-input-select");j.appendChild(br([{value:"orthoXY",label:le.view.axoOrthoXY},{value:"topXZ",label:le.view.axoOrthoXZ},{value:"orthoYZ",label:le.view.axoOrthoYZ},{value:"isometric",label:le.view.axoIsometric}],ae.cameraAxoPreset)),D.append(X,j);const J=O("section","cp-section");J.appendChild(O("h3","cp-section-title",{text:le.view.angleOfView}));const Z=O("input","cp-input-range",{type:"range",min:20,max:120,step:1}),K=O("input","cp-input-number",{type:"number",min:20,max:120,step:1}),ce=O("div","cp-setting-controls");ce.append(Z,K),J.appendChild(ce);const N=O("section","cp-section");N.appendChild(O("h3","cp-section-title",{text:le.view.blending}));const P=O("select","cp-input-select");P.appendChild(br([{value:"source-over",label:"Normal"},{value:"screen",label:"Screen"},{value:"alpha",label:"Alpha"},{value:"multiply",label:"Multiply"}],ae.blendMode)),N.appendChild(P);const H=O("section","cp-section");H.appendChild(O("h3","cp-section-title",{text:le.view.postProcessing}));const I=O("input","cp-input-toggle",{type:"checkbox"}),ie=O("input","cp-input-toggle",{type:"checkbox"}),Oe=O("input","cp-input-toggle",{type:"checkbox"}),te=O("label","cp-toggle-row");te.append(I,O("span","cp-setting-label",{text:le.view.postProcessingEnabled}));const fe=O("label","cp-toggle-row");fe.append(ie,O("span","cp-setting-label",{text:le.view.bloomEnabled}));const Ce=O("label","cp-toggle-row");Ce.append(Oe,O("span","cp-setting-label",{text:le.view.bokehEnabled}));const ve=O("input","cp-input-range",{type:"range",min:0,max:4,step:.01}),Ae=O("input","cp-input-number",{type:"number",min:0,max:4,step:.01}),ke=O("div","cp-setting-row");ke.append(O("label","cp-setting-label",{text:le.view.bloomStrength}),(()=>{const V=O("div","cp-setting-controls");return V.append(ve,Ae),V})());const ze=O("input","cp-input-range",{type:"range",min:0,max:2,step:.01}),at=O("input","cp-input-number",{type:"number",min:0,max:2,step:.01}),Ye=O("div","cp-setting-row");Ye.append(O("label","cp-setting-label",{text:le.view.bloomRadius}),(()=>{const V=O("div","cp-setting-controls");return V.append(ze,at),V})());const ct=O("input","cp-input-range",{type:"range",min:0,max:1,step:.01}),U=O("input","cp-input-number",{type:"number",min:0,max:1,step:.01}),Tt=O("div","cp-setting-row");Tt.append(O("label","cp-setting-label",{text:le.view.bloomThreshold}),(()=>{const V=O("div","cp-setting-controls");return V.append(ct,U),V})());const Je=O("input","cp-input-range",{type:"range",min:1,max:5e3,step:1}),Qe=O("input","cp-input-number",{type:"number",min:1,max:5e3,step:1}),De=O("div","cp-setting-row");De.append(O("label","cp-setting-label",{text:le.view.bokehFocus}),(()=>{const V=O("div","cp-setting-controls");return V.append(Je,Qe),V})());const ot=O("input","cp-input-range",{type:"range",min:0,max:.001,step:1e-5}),Fe=O("input","cp-input-number",{type:"number",min:0,max:.001,step:1e-5}),C=O("div","cp-setting-row");C.append(O("label","cp-setting-label",{text:le.view.bokehAperture}),(()=>{const V=O("div","cp-setting-controls");return V.append(ot,Fe),V})());const S=O("input","cp-input-range",{type:"range",min:0,max:.1,step:5e-4}),G=O("input","cp-input-number",{type:"number",min:0,max:.1,step:5e-4}),re=O("div","cp-setting-row");re.append(O("label","cp-setting-label",{text:le.view.bokehMaxBlur}),(()=>{const V=O("div","cp-setting-controls");return V.append(S,G),V})()),H.append(te,fe,ke,Ye,Tt,Ce,De,C,re);const se=O("section","cp-section");se.appendChild(O("h3","cp-section-title",{text:le.view.guides}));const ne=O("input","cp-input-toggle",{type:"checkbox"}),pe=O("input","cp-input-toggle",{type:"checkbox"}),he=O("label","cp-inline-pair");he.append(ne,O("span","cp-setting-label",{text:le.view.guideAxes}));const ye=O("label","cp-inline-pair");ye.append(pe,O("span","cp-setting-label",{text:le.view.guideCoordinates})),se.append(he,ye),r.addEventListener("change",()=>{const V=Math.max(160,Math.floor(Number(r.value)||160));tn("canvasWidth",V)}),a.addEventListener("change",()=>{const V=Math.max(120,Math.floor(Number(a.value)||120));tn("canvasHeight",V)});const Ze=V=>{const ge=Bn(V,5,400);tn("canvasScale",Math.floor(ge))};o.addEventListener("input",()=>Ze(Number(o.value))),l.addEventListener("change",()=>Ze(Number(l.value))),f.addEventListener("input",()=>{const V=l1(f.value);$t({defaultBackgroundHue:Math.round(V.h),defaultBackgroundSaturation:Math.round(V.s),defaultBackgroundLightness:Math.round(V.l)})});const me=()=>{v.value=String(Number(ae.cameraPosX??0)),m.value=String(Number(ae.cameraPosY??0)),h.value=String(Number(ae.cameraPosZ??420)),_.value=String(Number(ae.cameraTargetX??0)),x.value=String(Number(ae.cameraTargetY??0)),A.value=String(Number(ae.cameraTargetZ??0))},Pe=()=>{$t({cameraPosX:Number(v.value)||0,cameraPosY:Number(m.value)||0,cameraPosZ:Number(h.value)||0,cameraTargetX:Number(_.value)||0,cameraTargetY:Number(x.value)||0,cameraTargetZ:Number(A.value)||0})};for(const V of[v,m,h,_,x,A])V.addEventListener("change",Pe);F.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-reset-camera"))}),w.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-fit-camera"))}),b.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-clean-canvas"))}),X.addEventListener("change",()=>tn("cameraProjection",X.value)),j.addEventListener("change",()=>tn("cameraAxoPreset",j.value)),P.addEventListener("change",()=>tn("blendMode",P.value)),I.addEventListener("change",()=>tn("postProcessEnabled",I.checked?1:0)),ie.addEventListener("change",()=>tn("bloomEnabled",ie.checked?1:0)),Oe.addEventListener("change",()=>tn("bokehEnabled",Oe.checked?1:0));const Ie=({slider:V,number:ge,key:_e,min:qe,max:Ke})=>{const nt=rt=>{const Ge=Bn(rt,qe,Ke);tn(_e,Ge)};V.addEventListener("input",()=>nt(Number(V.value))),ge.addEventListener("change",()=>nt(Number(ge.value)))};Ie({slider:ve,number:Ae,key:"bloomStrength",min:0,max:4}),Ie({slider:ze,number:at,key:"bloomRadius",min:0,max:2}),Ie({slider:ct,number:U,key:"bloomThreshold",min:0,max:1}),Ie({slider:Je,number:Qe,key:"bokehFocus",min:1,max:5e3}),Ie({slider:ot,number:Fe,key:"bokehAperture",min:0,max:.001}),Ie({slider:S,number:G,key:"bokehMaxBlur",min:0,max:.1});const Be=V=>{tn("cameraAngleOfView",Bn(V,20,120))};Z.addEventListener("input",()=>Be(Number(Z.value))),K.addEventListener("change",()=>Be(Number(K.value))),ne.addEventListener("change",()=>{tn("originSignEnabled",ne.checked?1:0)}),pe.addEventListener("change",()=>{tn("coordinateGuidesEnabled",pe.checked?1:0)}),window.addEventListener("seesound:origin-sign-state",V=>{var _e;const ge=(_e=V==null?void 0:V.detail)==null?void 0:_e.enabled;typeof ge=="boolean"&&(ne.checked=ge)}),window.addEventListener("seesound:coordinate-guide-state",V=>{var _e;const ge=(_e=V==null?void 0:V.detail)==null?void 0:_e.enabled;typeof ge=="boolean"&&(pe.checked=ge)});const Re=()=>{r.value=String(Number(ae.canvasWidth??0)||0),a.value=String(Number(ae.canvasHeight??0)||0)},et=()=>{const V=Math.max(5,Math.min(400,Math.floor(Number(ae.canvasScale)||100)));o.value=String(V),l.value=String(V)},Xe=()=>{const V=o1(Number(ae.defaultBackgroundHue??0),Number(ae.defaultBackgroundSaturation??0),Number(ae.defaultBackgroundLightness??0));f.value=s1(V.r,V.g,V.b)},ft=()=>{X.value=String(ae.cameraProjection||"axonometric"),j.value=String(ae.cameraAxoPreset||"orthoXY");const V=X.value==="perspective";J.style.display=V?"":"none"},B=()=>{P.value=String(ae.blendMode||"screen")},Me=()=>{const V=Number(ae.cameraAngleOfView??55);Z.value=String(V),K.value=String(V)},ee=()=>{I.checked=Number(ae.postProcessEnabled??0)>=.5,ie.checked=Number(ae.bloomEnabled??1)>=.5,Oe.checked=Number(ae.bokehEnabled??1)>=.5},oe=()=>{ne.checked=Number(ae.originSignEnabled??1)>=.5,pe.checked=Number(ae.coordinateGuidesEnabled??0)>=.5},Se=()=>{const V=Number(ae.bloomStrength??1.15);ve.value=String(V),Ae.value=String(V)},xe=()=>{const V=Number(ae.bloomRadius??.7);ze.value=String(V),at.value=String(V)},M=()=>{const V=Number(ae.bloomThreshold??.18);ct.value=String(V),U.value=String(V)},R=()=>{const V=Number(ae.bokehFocus??380);Je.value=String(V),Qe.value=String(V)},z=()=>{const V=Number(ae.bokehAperture??12e-5);ot.value=String(V),Fe.value=String(V)},Q=()=>{const V=Number(ae.bokehMaxBlur??.01);S.value=String(V),G.value=String(V)},de=()=>{me()};Vt(e,Re,["canvasWidth","canvasHeight"]),Vt(e,et,["canvasScale"]),Vt(e,Xe,["defaultBackgroundHue","defaultBackgroundSaturation","defaultBackgroundLightness"]),Vt(e,ft,["cameraProjection","cameraAxoPreset"]),Vt(e,B,["blendMode"]),Vt(e,Me,["cameraAngleOfView"]),Vt(e,ee,["postProcessEnabled","bloomEnabled","bokehEnabled"]),Vt(e,oe,["originSignEnabled","coordinateGuidesEnabled"]),Vt(e,Se,["bloomStrength"]),Vt(e,xe,["bloomRadius"]),Vt(e,M,["bloomThreshold"]),Vt(e,R,["bokehFocus"]),Vt(e,z,["bokehAperture"]),Vt(e,Q,["bokehMaxBlur"]),Vt(e,de,["cameraPosX","cameraPosY","cameraPosZ","cameraTargetX","cameraTargetY","cameraTargetZ"]),window.addEventListener("seesound:camera-state",V=>{var ut,mt,Ct,be,It,Wt;const ge=(V==null?void 0:V.detail)||{},_e=Number((ut=ge.position)==null?void 0:ut.x),qe=Number((mt=ge.position)==null?void 0:mt.y),Ke=Number((Ct=ge.position)==null?void 0:Ct.z),nt=Number((be=ge.target)==null?void 0:be.x),rt=Number((It=ge.target)==null?void 0:It.y),Ge=Number((Wt=ge.target)==null?void 0:Wt.z),lt=Number(ge.fov),st=String(ge.projection||"");Number.isFinite(_e)&&(v.value=String(_e)),Number.isFinite(qe)&&(m.value=String(qe)),Number.isFinite(Ke)&&(h.value=String(Ke)),Number.isFinite(nt)&&(_.value=String(nt)),Number.isFinite(rt)&&(x.value=String(rt)),Number.isFinite(Ge)&&(A.value=String(Ge)),Number.isFinite(lt)&&(Z.value=String(lt),K.value=String(lt)),(st==="perspective"||st==="axonometric")&&(X.value=st,J.style.display=st==="perspective"?"":"none")}),Re(),et(),Xe(),ft(),B(),Me(),ee(),oe(),Se(),xe(),M(),R(),z(),Q(),de(),t.append(i,p,g,D,J,N,H,se),n.appendChild(t)}function x1(n,e){const t=O("div","cp-menu-pane-inner"),i=O("section","cp-section");i.appendChild(O("h3","cp-section-title",{text:le.settings.sliders}));const r=O("div","cp-setting-row"),a=O("div","cp-setting-label-wrap");a.appendChild(O("label","cp-setting-label",{text:le.settings.audioResolution,title:"Technical term: FFT Size. Frequency-domain analysis resolution."}));const s=O("select","cp-input-select");s.appendChild(br(t1.map(u=>({value:u,label:String(u)})),ae.fftSize)),s.addEventListener("change",()=>{tn("fftSize",Number(s.value))}),r.append(a,s),i.appendChild(r);for(const u of n1)i.appendChild(_1(u,e));const o=O("button","cp-btn cp-btn-wide",{text:le.settings.resetDefaults});Bt(o,kt.reset,le.settings.resetDefaults),o.addEventListener("click",()=>{Y_()}),i.appendChild(o);const l=O("section","cp-section");l.appendChild(O("h3","cp-section-title",{text:le.settings.normalizationRanges}));for(const u of i1)l.appendChild(g1(u,e));const c=()=>{s.value=String(ae.fftSize||2048)};Vt(e,c,["fftSize"]),c(),t.append(i,l),n.appendChild(t)}function Zc(n){var a;const e=n.definition.output;if(n.definition.type==="enum")return{operator:"set",output:e,value:n.enumValue||((a=n.definition.options)==null?void 0:a[0])||"square"};const t=n.definition.type==="enum"?"":yd(n.tokens);if(n.definition.type!=="enum"&&f1(n.tokens))return null;n.expression=t;const i=String(t||"").trim();if(!i)return null;const r=Number(i);return Number.isFinite(r)&&/^[-+]?\d+(\.\d+)?$/.test(i)?{operator:"set",output:e,value:r}:bd.has(i)?{operator:"set",output:e,input:i}:{operator:"set",output:e,expression:i}}function y1(n,e){var h;const t=O("div","cp-menu-pane-inner"),i=O("div","cp-rules-wrapper");t.appendChild(i);const r=new Map,a=[];function s(y,_){return`${y}:${_}`}function o(y,_=""){const x=[r.get(s(y,"red")),r.get(s(y,"green")),r.get(s(y,"blue"))].filter(Boolean),A=r.get(s(y,"hue"));if(!A||x.length===0)return;if(_==="red"||_==="green"||_==="blue"){const F=r.get(s(y,_));if(F){for(const w of x)w.enabled=!!F.enabled;F.enabled&&String(F.expression||"").trim()&&(A.enabled=!1)}}if(_==="hue"&&A.enabled&&String(A.expression||"").trim())for(const F of x)F.enabled=!1;const T=x.some(F=>F.enabled&&String(F.expression||"").trim()),L=A.enabled&&String(A.expression||"").trim();if(T&&L)if(_==="hue")for(const F of x)F.enabled=!1;else A.enabled=!1;for(const F of x)F.toggle&&(F.toggle.checked=F.enabled),F.card&&F.card.classList.toggle("is-disabled",!F.enabled);A.toggle&&(A.toggle.checked=A.enabled),A.card&&A.card.classList.toggle("is-disabled",!A.enabled)}function l(y){if(!y.conditionEnabled||y.conditionOperator==="always")return{operator:"always"};const _=String(y.conditionDetail||dt),x=String(y.conditionOverall||dt),A=_!==dt?_:x!==dt?x:"";if(!A)return{operator:"always"};const T=String(y.conditionValueInput||dt);return T&&T!==dt?{operator:y.conditionOperator,input:A,valueInput:T}:{operator:y.conditionOperator,input:A,value:Number(y.conditionValue)||0}}let c=!1,u=!1;function d(y,_=!1){if(!y||!_&&!y.enabled||!_&&y.conditionEnabled&&!(y.conditionDetail!==dt||y.conditionOverall!==dt))return;const x=Zc(y);!_&&y.enabled&&!x||p()}function p(){if(c)return;o("spawnedParticles"),o("lines"),o("background");const y=[];for(let _=0;_<a.length;_++){const x=a[_],A=Zc(x);A&&y.push({id:`${x.definition.target}-${x.definition.output}`,group:`${x.definition.section}/${x.definition.subgroup}`,subgroup:"",enabled:!!x.enabled,target:x.definition.target,condition:l(x),actions:[A],order:_})}u=!0,tn("ruleBlocks",y)}function f(y){var _,x,A,T,L,F;c=!0;try{for(const b of a)b.enabled=!1,b.conditionEnabled=!1,b.conditionOperator="always",b.conditionDetail=dt,b.conditionOverall=dt,b.conditionValue=0,b.conditionValueInput=dt,b.expression="",b.tokens=[],b.insertContext=null,b.pendingInsertIndex=null,b.enumValue=((_=b.definition.options)==null?void 0:_[0])||"square";const w=Array.isArray(y)?y:[];for(const b of w){const D=String((b==null?void 0:b.target)||""),X=Array.isArray(b==null?void 0:b.actions)?b.actions[0]:null,j=String((X==null?void 0:X.output)||""),J=s(D,j),Z=r.get(J);if(!Z)continue;Z.enabled=b.enabled!==!1;const K=String(((x=b==null?void 0:b.condition)==null?void 0:x.operator)||"always");Z.conditionOperator=Gc.includes(K)?K:"always",Z.conditionValue=Number(((A=b==null?void 0:b.condition)==null?void 0:A.value)??0);const ce=String(((T=b==null?void 0:b.condition)==null?void 0:T.valueInput)||"");Z.conditionValueInput=bd.has(ce)?ce:dt;const N=String(((L=b==null?void 0:b.condition)==null?void 0:L.input)||""),P=Go(N);(P==null?void 0:P.group)==="detail"?(Z.conditionDetail=N,Z.conditionOverall=dt):(P==null?void 0:P.group)==="overall"&&(Z.conditionOverall=N,Z.conditionDetail=dt),Z.conditionEnabled=Z.conditionOperator!=="always"&&!!N,Z.definition.type==="enum"?Z.enumValue=String((X==null?void 0:X.value)||Z.enumValue):typeof(X==null?void 0:X.expression)=="string"?Z.expression=X.expression:typeof(X==null?void 0:X.input)=="string"?Z.expression=X.input:(X==null?void 0:X.value)!==void 0&&(X==null?void 0:X.value)!==null&&(Z.expression=String(X.value)),Z.tokens=u1(Z.expression)}o("spawnedParticles"),o("lines"),o("background");for(const b of a)b.toggle&&(b.toggle.checked=b.enabled),b.card&&b.card.classList.toggle("is-disabled",!b.enabled),(F=b.syncConditionUi)==null||F.call(b),b.enumSelect&&(b.enumSelect.value=b.enumValue),Gn(b)}finally{c=!1}}let g="",v="";for(const y of r1){y.section!==g&&(g=y.section,v="",i.appendChild(O("h3","cp-section-title cp-rule-section-title",{text:g}))),y.subgroup!==v&&(v=y.subgroup,i.appendChild(O("h4","cp-rule-subgroup-title",{text:v})));const _={definition:y,enabled:!1,conditionEnabled:!1,conditionOperator:"always",conditionDetail:dt,conditionOverall:dt,conditionValue:0,conditionValueInput:dt,expression:"",tokens:[],insertContext:null,pendingInsertIndex:null,dragTokenIndex:null,enumValue:((h=y.options)==null?void 0:h[0])||"square",toggle:null,card:null,conditionRow:null,syncConditionUi:null,tokenEditor:null,onExpressionChanged:null,enumSelect:null,actionSelect:null},x=O("article","cp-rule-card"),A=O("div","cp-rule-card-header"),T=O("input","cp-input-toggle",{type:"checkbox"}),L=O("div","cp-rule-card-title",{text:y.label});A.append(T,L);const F=O("div","cp-rule-card-condition-builder"),w=O("button","cp-btn cp-rule-condition-add",{type:"button",text:le.rules.addCondition});Bt(w,kt.add,le.rules.addCondition);const b=O("div","cp-rule-condition-sentence"),D=O("span","cp-rule-condition-when",{text:le.rules.when}),X=$c(dt),j=O("select","cp-input-select cp-rule-condition-operator");j.appendChild(br(Gc.filter(I=>I!=="always").map(I=>({value:I,label:I})),">"));const J=O("input","cp-input-number",{type:"number",step:.001,value:"0"}),Z=$c(dt);Z.classList.add("cp-rule-condition-value-input");const K=O("button","cp-btn cp-btn-danger cp-rule-condition-remove",{type:"button",text:le.rules.removeCondition});Bt(K,kt.clear,le.rules.removeCondition),b.append(D,X,j,J,Z,K),F.append(w,b);const ce=O("div","cp-rule-card-expression");let N=null,P=null,H=null;if(y.type==="enum")N=O("select","cp-input-select"),N.appendChild(br(y.options.map(I=>({value:I,label:I})),_.enumValue)),ce.appendChild(N);else{const I=O("div","cp-rule-token-row"),ie=p1("");H=h1(""),P=O("div","cp-rule-token-editor",{role:"list",tabindex:"0"}),I.append(ie,H),ce.append(I,P);const Oe=()=>{if(_.expression=yd(_.tokens),(y.output==="red"||y.output==="green"||y.output==="blue")&&o(y.target,y.output),y.output==="hue"&&o(y.target,"hue"),_.enabled&&!String(_.expression||"").trim()){_.enabled=!1,_.toggle&&(_.toggle.checked=!1),_.card&&_.card.classList.toggle("is-disabled",!_.enabled),p();return}d(_)};_.onExpressionChanged=Oe;const te=(fe,Ce)=>{const ve=Md(fe);if(!ve.length)return;const Ae=Number.isInteger(_.pendingInsertIndex)?_.pendingInsertIndex:_.tokens.length;_.tokens.splice(Ae,0,...ve),_.pendingInsertIndex=null,Ce&&(Ce.value=""),Gn(_),Oe()};ie.addEventListener("change",()=>{te(String(ie.value||""),ie)}),H.addEventListener("change",()=>{te(String(H.value||""),H)})}x.append(A,F,ce),i.appendChild(x),_.toggle=T,_.card=x,_.conditionRow=F,_.tokenEditor=P,_.enumSelect=N,_.actionSelect=H,x.classList.toggle("is-disabled",!_.enabled),_.syncConditionUi=()=>{if(w.style.display=_.conditionEnabled?"none":"",b.style.display=_.conditionEnabled?"":"none",!_.conditionEnabled)return;j.value=_.conditionOperator==="always"?">":_.conditionOperator;const I=_.conditionDetail!==dt?_.conditionDetail:_.conditionOverall;X.value=I||dt,J.value=String(Number(_.conditionValue||0)),Z.value=_.conditionValueInput||dt},_.syncConditionUi(),r.set(s(y.target,y.output),_),a.push(_),T.addEventListener("change",()=>{if(_.enabled=T.checked,_.card&&_.card.classList.toggle("is-disabled",!_.enabled),(y.output==="red"||y.output==="green"||y.output==="blue")&&o(y.target,y.output),y.output==="hue"&&o(y.target,"hue"),!_.enabled){p();return}d(_)}),w.addEventListener("click",()=>{var I;_.conditionEnabled=!0,_.conditionOperator==="always"&&(_.conditionOperator=">"),(I=_.syncConditionUi)==null||I.call(_),d(_)}),j.addEventListener("change",()=>{_.conditionEnabled=!0,_.conditionOperator=j.value,d(_)}),X.addEventListener("change",()=>{const I=String(X.value||dt);if(_.conditionEnabled=!0,_.conditionDetail=dt,_.conditionOverall=dt,I!==dt){const ie=Go(I);(ie==null?void 0:ie.group)==="detail"?_.conditionDetail=I:(ie==null?void 0:ie.group)==="overall"&&(_.conditionOverall=I)}d(_)}),J.addEventListener("change",()=>{_.conditionEnabled=!0,_.conditionValue=Number(J.value)||0,_.conditionValueInput=dt,d(_)}),Z.addEventListener("change",()=>{_.conditionEnabled=!0;const I=String(Z.value||dt);_.conditionValueInput=I!==dt?I:dt,d(_)}),K.addEventListener("click",()=>{var I;_.conditionEnabled=!1,_.conditionOperator="always",_.conditionDetail=dt,_.conditionOverall=dt,_.conditionValue=0,_.conditionValueInput=dt,(I=_.syncConditionUi)==null||I.call(_),d(_,!0)}),N&&N.addEventListener("change",()=>{_.enumValue=N.value,d(_)}),y.type!=="enum"&&Gn(_)}const m=()=>{if(u){u=!1;return}f(Array.isArray(ae.ruleBlocks)?ae.ruleBlocks:[])};Vt(e,m,["ruleBlocks"]),m(),n.appendChild(t)}function M1(n){const e=O("button","cp-menu-button",{type:"button","data-menu-id":n.id,"aria-label":n.label,title:n.label}),t=O("span","cp-menu-icon",{html:m1(n.id)}),i=O("span","cp-menu-label",{text:n.label});return e.append(t,i),e}function S1(n){const e=O("section","cp-menu-pane",{"data-menu-id":n.id}),t=O("div","cp-menu-pane-header");t.appendChild(O("h2","cp-menu-pane-title",{text:n.label}));const i=O("button","cp-btn cp-menu-collapse",{type:"button",text:le.menu.collapse});Bt(i,kt.close,le.menu.collapse),t.appendChild(i);const r=O("div","cp-menu-pane-body");return e.append(t,r),{pane:e,body:r,closeButton:i}}function E1(n){if(!n)return;n.innerHTML="",n.className="",n.classList.add("cp-shell");const e=O("div","cp-shell-root"),t=O("nav","cp-menu-rail"),i=O("div","cp-menu-stack"),r=a1(),a=new Map,s=new Map;for(const y of Wc){const _=M1(y);a.set(y.id,_),t.appendChild(_);const x=S1(y);s.set(y.id,x),i.appendChild(x.pane)}e.append(t,i),n.appendChild(e),v1(s.get("file").body),b1(s.get("view").body,r),x1(s.get("settings").body,r),y1(s.get("rules").body,r);let o=null,l="settings",c=!1,u=!1,d=null;const p=()=>{d!==null&&(window.clearTimeout(d),d=null)},f=()=>{p(),!(o||c||u)&&(d=window.setTimeout(()=>{d=null,!(o||c||u)&&(l=null,v())},100))};function g(){return o||(c||u?l:null)}function v(){const y=g();for(const[_,x]of a.entries()){const A=y===_,T=o===_;x.classList.toggle("is-active",A),x.classList.toggle("is-pinned",T),x.setAttribute("aria-expanded",A?"true":"false")}for(const[_,x]of s.entries()){const A=y===_;x.pane.classList.toggle("is-active",A)}n.classList.toggle("is-open",!!y)}t.addEventListener("mouseenter",()=>{p(),c=!0,v()}),t.addEventListener("mouseleave",()=>{c=!1,f()});for(const y of Wc){const _=a.get(y.id),x=s.get(y.id);_.addEventListener("mouseenter",()=>{p(),l=y.id,v()}),_.addEventListener("click",()=>{o===y.id?(o=null,l=c?y.id:null):(o=y.id,l=y.id),v()}),x.pane.addEventListener("mouseenter",()=>{p(),u=!0,l=y.id,v()}),x.pane.addEventListener("mouseleave",()=>{u=!1,f()}),x.closeButton.addEventListener("click",()=>{o=null,l=null,v()})}const m=()=>{qc(jc(r,[],!0))},h=y=>{const _=jc(r,y,!1);_.length&&qc(_)};_l((y,_,x)=>{if(!_){m();return}if(_==="*"){if(x&&typeof x=="object"&&!Array.isArray(x))return;m();return}h([_])}),l="settings",v(),m()}function w1(n,e,t){return Math.min(t,Math.max(e,n))}function Ui(n){const e=Number(n);return Number.isFinite(e)?Math.round(w1(e,0,255)):0}function C1(n,e,t,i){const r=Ui(n),a=Ui(e),s=Ui(t),o=Ui(i),l=.299*r+.587*a+.114*s;if(l<=1e-9)return[o,o,o];const c=o/l;let u=r*c,d=a*c,p=s*c;const f=Math.max(u,d,p);if(f>255){const g=(255-o)/Math.max(1e-9,f-o);u=o+g*(u-o),d=o+g*(d-o),p=o+g*(p-o)}return[Ui(u),Ui(d),Ui(p)]}const Sd=()=>{},mr=()=>{};function dn(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function pt(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?dn(e/255):dn(e):0}function Ed(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,a=parseInt(t.slice(4,6),16)/255;return[dn(i),dn(r),dn(a)]}function T1(n){if(Array.isArray(n))return n.length<3?null:[pt(n[0]),pt(n[1]),pt(n[2])];if(typeof n=="string"){const e=Ed(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[pt(t[0]),pt(t[1]),pt(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[pt(n.r),pt(n.g),pt(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[pt(n.h),pt(n.s),pt(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[pt(n.hue),pt(n.saturation),pt(n.brightness)]}return null}function A1(n,e,t){const i=Number(n),a=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,s=dn(e),o=dn(t),l=Math.floor(a*6),c=a*6-l,u=o*(1-s),d=o*(1-c*s),p=o*(1-(1-c)*s);switch(l%6){case 0:return[o,p,u];case 1:return[d,o,u];case 2:return[u,o,p];case 3:return[u,d,o];case 4:return[p,u,o];default:return[o,u,d]}}function R1(n,e,t){const i=dn(n),r=dn(e),a=dn(t),s=Math.max(i,r,a),o=Math.min(i,r,a),l=s-o;let c=0;l>1e-6&&(s===i?c=(r-a)/l%6:s===r?c=(a-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=s<=1e-6?0:l/s;return[c,u,s]}function Ja(n){return Array.isArray(n)?n.length<3?null:[pt(n[0]),pt(n[1]),pt(n[2])]:typeof n=="string"?Ed(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[pt(n.rgb[0]),pt(n.rgb[1]),pt(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[pt(n.r),pt(n.g),pt(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[pt(n.h),pt(n.s),pt(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[pt(n.hue),pt(n.saturation),pt(n.brightness)]:null}function wd(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function P1(n,e,t){const i=wd(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,s=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return Ja(i.colors[s])}function N1(n,e,t){const i=wd(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return Ja(i.colors[0]);const a=dn(t)*(i.colors.length-1),s=Math.floor(a),o=Math.min(i.colors.length-1,s+1),l=a-s,c=Ja(i.colors[s]),u=Ja(i.colors[o]);return!c&&!u?null:c?u?[dn(c[0]+(u[0]-c[0])*l),dn(c[1]+(u[1]-c[1])*l),dn(c[2]+(u[2]-c[2])*l)]:c:u}const L1=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[pt(n),pt(e),pt(t)],hsv:(n,e,t)=>[pt(n),pt(e),pt(t)],palette:(n,e,t)=>P1(n,e,t),gradient:(n,e,t)=>N1(n,e,t),matchLuma:(n,e,t,i)=>{const[r,a,s]=C1(n,e,t,i);return[r/255,a/255,s/255]},hsvToRgbColor:(n,e,t)=>A1(n,e,t),rgbToHsvColor:(n,e,t)=>R1(n,e,t),toColorVector:n=>T1(n)});function ys(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function ur(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function Kc(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const F1=new Set([">",">=","<","<=","==","!="]);let Ba={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],lines:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:Sd,applyLivingRules:mr,applyLineRules:mr}};function Jc(n,e){const t=ys(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of r)e.has(a)&&i.add(a);return[...i]}function Vr(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const s of Jc(r.expression,e))t.add(s);const a=Array.isArray(i.actions)?i.actions:[];for(const s of a){typeof(s==null?void 0:s.input)=="string"&&e.has(s.input)&&t.add(s.input);for(const o of Jc(s==null?void 0:s.expression,e))t.add(o)}}return[...t]}function Ml(n){return JSON.stringify(n)}function Cd(n){const e=ys(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Ml(n.value)}function I1(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let a=0;a<n.length;a++){const s=n[a],o=a>0?n[a-1]:"";if(!r&&s==="'"&&o!=="\\"){i=!i;continue}if(!i&&s==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(s==="(")e++;else if(s===")")e=Math.max(0,e-1);else if(s==="[")t++;else if(s==="]")t=Math.max(0,t-1);else if(s===","&&e===0&&t===0)return!0}}return!1}function D1(n){const e=ys(n.expression);return e?I1(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Ml(n.value)}function Qc(n,e){const t=D1(n),[i,r,a]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${a} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${a} = (target.${a} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${a} = (target.${a} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${a} = (target.${a} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${a} = (target.${a} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${a} = clamp((target.${a} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function U1(n){const e=Cd(n),t=["const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);","const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (__hasRgb) {","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) __baseRgb = [0, 0, 0];","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function O1(n){if(!n||n.operator==="always")return"true";const e=ys(n.expression);if(e)return`(${e})`;if(!F1.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Ml(n.value??0);return`((${t}) ${n.operator} (${i}))`}function k1(n){const e=n.output;if(e==="rgb")return Qc(n,["red","green","blue"]);if(e==="hsv")return Qc(n,["hue","saturation","brightness"]);if(e==="luma")return U1(n);const t=Cd(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Zr(n,e,t,i){const r=[],a=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const s of t)s==="deltaTime"||s==="time"||r.push(`  const ${s} = Number.isFinite(i.${s}) ? i.${s} : 0;`);return e.forEach(s=>{if(!s.enabled)return;const o=O1(s.condition);r.push(`  // rule ${s.id}`),r.push(`  if (${o}) {`),a.push({ruleId:s.id,functionName:n,sourceLine:r.length+1});for(const l of s.actions??[])r.push(`    ${k1(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:a}}function B1(n,e){return Zr("applySpawnRules",n,e,!1)}function z1(n,e){return Zr("applyLivingRules",n,e,!0)}function V1(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function eu(n,e){const t=performance.now(),i=rd(n,e),a=[...i.ruleBlocks].sort((T,L)=>(T.order??0)-(L.order??0)),s=a.filter(T=>T.target==="spawnedParticles"),o=a.filter(T=>T.target==="allParticles"),l=a.filter(T=>T.target==="lines"),c=a.filter(T=>T.target==="background"),u=a.filter(T=>T.target==="camera"),d=V1(a);if(Ba.hash===d)return Ba.result;const p=N_().entries.map(T=>T.id),f=new Set(p),g={spawnedParticles:Vr(s,f),allParticles:Vr(o,f),lines:Vr(l,f),background:Vr(c,f),camera:Vr(u,f)},v=[...new Set([...g.spawnedParticles,...g.allParticles,...g.lines,...g.background,...g.camera])],m=B1(s,p),h=z1(o,p),y=Zr("applyLineRules",l,p,!0),_=Zr("applyBackgroundRules",c,p,!0),x=Zr("applyCameraRules",u,p,!0),A=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",m.source,h.source,y.source,_.source,x.source,"return { applySpawnRules, applyLivingRules, applyLineRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const L=new Function("helpers",A)(L1),F={hash:d,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:s.length,livingRuleCount:o.length,lineRuleCount:l.length,backgroundRuleCount:c.length,cameraRuleCount:u.length,usesParticleHsb:ur([...s,...o]),usesLineHsb:ur(l),usesBackgroundHsb:ur(c),usesLivingShapeType:Kc(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:g,requiredInputs:v,lineMap:[...m.lineMap,...h.lineMap,...y.lineMap,..._.lineMap,...x.lineMap],source:A,applySpawnRules:typeof L.applySpawnRules=="function"?L.applySpawnRules:Sd,applyLivingRules:typeof L.applyLivingRules=="function"?L.applyLivingRules:mr,applyLineRules:typeof L.applyLineRules=="function"?L.applyLineRules:mr,applyBackgroundRules:typeof L.applyBackgroundRules=="function"?L.applyBackgroundRules:mr,applyCameraRules:typeof L.applyCameraRules=="function"?L.applyCameraRules:mr};return Ba={hash:d,result:F},F}catch(T){const L=Number.isFinite(T==null?void 0:T.lineNumber)?Number(T.lineNumber):null;return{...Ba.result,hash:d,compileStatus:"error",compileError:(T==null?void 0:T.message)||String(T),compileLine:L,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:s.length,livingRuleCount:o.length,lineRuleCount:l.length,backgroundRuleCount:c.length,cameraRuleCount:u.length,usesParticleHsb:ur([...s,...o]),usesLineHsb:ur(l),usesBackgroundHsb:ur(c),usesLivingShapeType:Kc(o,"shapeType"),requiredInputsByTarget:g,requiredInputs:v,lineMap:[...m.lineMap,...h.lineMap,...y.lineMap,..._.lineMap,...x.lineMap],source:A,rejected:i.rejected}}}const Sl=16,$o=2e4,tu=Math.log2(Sl),H1=Math.log2($o),G1=100,W1=5e3;function za(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Sl))-tu)/(H1-tu)))}function qt(n,e,t){const i=Number(e),r=Number(t),a=Number(n);return Number.isFinite(a)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?We(a):We((a-i)/(r-i)):0}function nu(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function We(n){return Math.max(0,Math.min(1,n))}function Xr(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function Td(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function X1(n){const e=Td(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function q1(n){const e=Td(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function Hr(n,e,t){const i=We(n),r=We(e),a=We(t),s=Math.max(i,r,a),o=Math.min(i,r,a),l=s-o;let c=0;l>1e-6&&(s===i?c=(r-a)/l%6:s===r?c=(a-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=s<=1e-6?0:l/s;return{h:c,s:u,v:s}}function Va(n,e,t){const i=Xr(n)??0,r=We(e),a=We(t),s=Math.floor(i*6),o=i*6-s,l=a*(1-r),c=a*(1-o*r),u=a*(1-(1-o)*r);switch(s%6){case 0:return{r:a,g:u,b:l};case 1:return{r:c,g:a,b:l};case 2:return{r:l,g:a,b:u};case 3:return{r:l,g:c,b:a};case 4:return{r:u,g:l,b:a};default:return{r:a,g:l,b:c}}}const j1=`
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
`,Y1=`
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
`;class $1{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0,this._lineVisibleCount=0;const i=new En,r=new En;this._geo=i,this._lineGeo=r,this._allocateBuffers(this._N);const a=new ui({vertexShader:j1,fragmentShader:Y1,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:Bi});this._mesh=new Mh(i,a),this._mesh.frustumCulled=!1;const s=new cl({vertexColors:!0,transparent:!0,opacity:.9,blending:Bi,depthWrite:!1});this._lineMesh=new Wu(r,s),this._lineMesh.frustumCulled=!1,e.add(this._mesh),e.add(this._lineMesh),this._mat=a,this._lineMat=s,this._lastBlending=a.blending,this._background=new bt(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._compiledRules=eu([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._binRms=new Float32Array(this._N),this._linePos=new Float32Array(this._N*2*3),this._lineCol=new Float32Array(this._N*2*3),this._lineThickness=new Float32Array(this._N),this._lineAlpha=new Float32Array(this._N),this._aPos=new Zt(this._pos,3),this._aCol=new Zt(this._col,3),this._aSz=new Zt(this._sz,1),this._aAlpha=new Zt(this._alpha,1),this._aShape=new Zt(this._shape,1),this._aLinePos=new Zt(this._linePos,3),this._aLineCol=new Zt(this._lineCol,3);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape,this._aLinePos,this._aLineCol])t.setUsage(Ap);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this._lineGeo.setAttribute("position",this._aLinePos),this._lineGeo.setAttribute("color",this._aLineCol),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const a=Math.max(0,Math.min(e,t));if(a<=0)return 0;const s={count:a,timestampSec:r,pos:this._pos.slice(0,a*3),col:this._col.slice(0,a*3),sz:this._sz.slice(0,a),alpha:this._alpha.slice(0,a),shape:this._shape.slice(0,a),pan:this._pan.slice(0,a),binRms:this._binRms.slice(0,a)};this._archiveChunks.push(s),this._archivePointCount+=a,this._pruneArchive(i,r);const o=t-a;for(let l=0;l<o;l++){const c=l+a;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c],this._binRms[l]=this._binRms[c]}return a}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let a=0;a<this._archiveChunks.length&&r<i;a++){const s=this._archiveChunks[a],o=Math.min(s.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=s.pos[l*3],this._pos[(r+l)*3+1]=s.pos[l*3+1],this._pos[(r+l)*3+2]=s.pos[l*3+2],this._col[(r+l)*3]=s.col[l*3],this._col[(r+l)*3+1]=s.col[l*3+1],this._col[(r+l)*3+2]=s.col[l*3+2],this._sz[r+l]=s.sz[l],this._alpha[r+l]=s.alpha[l],this._shape[r+l]=s.shape[l],this._pan[r+l]=s.pan?s.pan[l]:0,this._binRms[r+l]=s.binRms?s.binRms[l]:0;r+=o}else for(let a=this._archiveChunks.length-1;a>=0&&r<i;a--){const s=this._archiveChunks[a],o=Math.min(s.count,i-r),l=s.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=s.pos[u*3],this._pos[(i-r-o+c)*3+1]=s.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=s.pos[u*3+2],this._col[(i-r-o+c)*3]=s.col[u*3],this._col[(i-r-o+c)*3+1]=s.col[u*3+1],this._col[(i-r-o+c)*3+2]=s.col[u*3+2],this._sz[i-r-o+c]=s.sz[u],this._alpha[i-r-o+c]=s.alpha[u],this._shape[i-r-o+c]=s.shape[u],this._pan[i-r-o+c]=s.pan?s.pan[u]:0,this._binRms[i-r-o+c]=s.binRms?s.binRms[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._lineVisibleCount=0,this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._lineVisibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let a=0;a<r;a++)i.sz[a]=Math.max(0,i.sz[a]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=eu(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=X1(i),a=q1(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number.isFinite(Number(t.deltaTime))&&Number(t.deltaTime)>0?Number(t.deltaTime):1/60,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?We(t.binMagnitude):0,binPhase:Number.isFinite(t.binPhase)?We(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?We(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?We(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?We(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?We(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,audioLengthSec:Number(t.audioLengthSec)||0,frequencyHz:i,notePitchClass:r,octave:a,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new q,max:new q,center:new q,size:new q};const t=new q(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new q(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let s=0;s<e;s++){const o=this._pos[s*3],l=this._pos[s*3+1],c=this._pos[s*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),a=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:a}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),a=1,s=e||{},o=s.inputs||(s.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=a){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0,o.binRMSEnergy=Number.isFinite(this._binRms[c])?this._binRms[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(s,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];let d=Number.isFinite(u.red)?We(u.red):this._col[c*3],p=Number.isFinite(u.green)?We(u.green):this._col[c*3+1],f=Number.isFinite(u.blue)?We(u.blue):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const g=Hr(d,p,f),v=Xr(u.hue),m=Number.isFinite(u.saturation)?We(u.saturation):g.s,h=Number.isFinite(u.brightness)?We(u.brightness):g.v,y=Va(v??g.h,m,h);d=y.r,p=y.g,f=y.b}this._col[c*3]=d,this._col[c*3+1]=p,this._col[c*3+2]=f,this._alpha[c]=Number.isFinite(u.opacity)?Math.max(0,Math.min(1,u.opacity)):this._alpha[c],this._shape[c]=nu(u.shapeType),this._binRms[c]=Number.isFinite(o.binRMSEnergy)?We(o.binRMSEnergy):this._binRms[c],l++}return l}applyBackgroundRules(e){const t=this._background,i=Hr(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v};this._compiledRules.applyBackgroundRules(e,r);let a=Number.isFinite(r.red)?We(r.red):t.r,s=Number.isFinite(r.green)?We(r.green):t.g,o=Number.isFinite(r.blue)?We(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=Hr(a,s,o),c=Xr(r.hue),u=Number.isFinite(r.saturation)?We(r.saturation):l.s,d=Number.isFinite(r.brightness)?We(r.brightness):l.v,p=Va(c??l.h,u,d);a=p.r,s=p.g,o=p.b}t.setRGB(a,s,o)}applyLineRules(e,t){this._compiledRules.applyLineRules(e,t)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1,targetX:(t==null?void 0:t.targetX)??0,targetY:(t==null?void 0:t.targetY)??0,targetZ:(t==null?void 0:t.targetZ)??0,angleOfView:(t==null?void 0:t.angleOfView)??55};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null,targetX:Number.isFinite(i.targetX)?i.targetX:null,targetY:Number.isFinite(i.targetY)?i.targetY:null,targetZ:Number.isFinite(i.targetZ)?i.targetZ:null,angleOfView:Number.isFinite(i.angleOfView)?i.angleOfView:null}}update(e,t,i,r){var Re,et,Xe,ft,B,Me,ee,oe,Se,xe;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const a=performance.now(),s=Math.max(0,Math.min(1,(a-this._lastUpdateT)/1e3));this._lastUpdateT=a;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((Re=e.ctx)==null?void 0:Re.sampleRate)??44100)/2,d=t.persistMode??0,p=t.inputGain??1,f=t.defaultParticleSize??6,g=Math.max(Sl,Math.min($o,Number(t.freqNormMin??40))),v=Math.max(g+1,Math.min($o,Number(t.freqNormMax??12e3))),m=za(g),h=za(v),y=Number(t.binMagnitudeNormMin??-70),_=Number(t.binMagnitudeNormMax??0),x=Number(t.binFluxNormMin??0),A=Number(t.binFluxNormMax??.5),T=Number(t.binPhaseDeviationNormMin??0),L=Number(t.binPhaseDeviationNormMax??Math.PI),F=Number(t.binAttackTimeNormMin??5),w=Number(t.binAttackTimeNormMax??500),b=Number(t.globalRmsNormMin??-60),D=Number(t.globalRmsNormMax??0),X=Number(t.spectralCentroidNormMin??150),j=Number(t.spectralCentroidNormMax??8e3),J=Number(t.globalSpectralFluxNormMin??0),Z=Number(t.globalSpectralFluxNormMax??100),K=Number(t.spectralFlatnessNormMin??0),ce=Number(t.spectralFlatnessNormMax??1),N=Number(t.particlesByFrame),P=Number.isFinite(N)?Math.max(G1,Math.min(W1,Math.round(N))):1e3,H=Math.max(1,P),I=Math.pow(v/Math.max(g,1e-6),1/H),ie=Number.isFinite(I)&&I>1?I:1,Oe=t.blendMode??"screen",te=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,fe=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,Ce=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,ve=!!(e.analyserL&&e.analyserR&&e.getBinPan),Ae=((et=e.getBinMagnitude)==null?void 0:et.call(e))||null,ke=((Xe=e.getBinFlux)==null?void 0:Xe.call(e))||null,ze=((ft=e.getBinPhaseDeviation)==null?void 0:ft.call(e))||null,at=((B=e.getBinPhase)==null?void 0:B.call(e))||null,Ye=((Me=e.getBinEnvelope)==null?void 0:Me.call(e))||null,ct=((ee=e.getBinAttackTime)==null?void 0:ee.call(e))||null,U=new Set(((oe=this._compiledRules)==null?void 0:oe.requiredInputs)||[]),Tt=U.has("binMagnitude"),Je=U.has("binPhase"),Qe=U.has("binFlux"),De=U.has("binPhaseDeviation"),ot=U.has("binAttackTime"),Fe=U.has("binEnvelope")||U.has("binEnvelopeState");if(Oe==="alpha"){const M=this._mat;(M.blending!==no||M.blendSrc!==Kr||M.blendDst!==Jr||M.blendEquation!==ii)&&(M.blending=no,M.blendSrc=Kr,M.blendDst=Jr,M.blendEquation=ii,M.needsUpdate=!0,this._lastBlending=M.blending),M.depthWrite&&(M.depthWrite=!1,M.needsUpdate=!0)}else{const R={screen:Bi,lighter:Bi,"source-over":Ci,multiply:Ci}[Oe]??Bi;R!==this._lastBlending&&(this._mat.blending=R,this._mat.needsUpdate=!0,this._lastBlending=R);const z=Oe==="source-over";this._mat.depthWrite!==z&&(this._mat.depthWrite=z,this._mat.needsUpdate=!0)}this._lineMat.blending!==this._mat.blending&&(this._lineMat.blending=this._mat.blending,this._lineMat.needsUpdate=!0),this._lineMat.depthWrite&&(this._lineMat.depthWrite=!1,this._lineMat.needsUpdate=!0),Number(t.cameraCanvasWidthUnits);const C=Number(t.cameraCanvasHeightUnits),S=Number.isFinite(C)&&C>0?C:r,G=(te%360+360)%360;this._background.setHSL(G/360,We(fe/100),We(Ce/100));const re=S/2,se=((Se=e.audioEl)==null?void 0:Se.currentTime)??0,ne=((xe=e.audioEl)==null?void 0:xe.duration)??0,pe={binMagnitude:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:qt(e.rmsDbfs,b,D),binRMSEnergy:qt(e.rmsDbfs,b,D),spectralCentroid:qt(e.spectralCentroidHz,X,j),spectralFlux:qt(e.spectralFluxAU,J,Z),spectralFlatness:qt(e.spectralFlatnessRatio,K,ce),inharmonicity:We(e.inharmonicity),peakAmplitude:We(e.peakAmplitude),zeroCrossingRate:We(e.zeroCrossingRate),spectralRolloff:We(e.spectralRolloff),spectralSpread:We(e.spectralSpread),spectralSkewness:We(e.spectralSkewness),chromagram:We(e.chromagram)};if(pe.amplitude=pe.globalRmsEnergy,Tt&&Ae&&Ae.length>0){let M=0;for(let R=0;R<Ae.length;R++)M+=qt(Ae[R],y,_);pe.binMagnitude=M/Ae.length}if(Qe&&ke&&ke.length>0){let M=0;for(let R=0;R<ke.length;R++)M+=qt(ke[R],x,A);pe.binFlux=M/ke.length}if(De&&ze&&ze.length>0){let M=0;for(let R=0;R<ze.length;R++)M+=qt(ze[R],T,L);pe.binPhaseDeviation=M/ze.length}if(ot&&ct&&ct.length>0){let M=0;for(let R=0;R<ct.length;R++)M+=qt(ct[R],F,w);pe.binAttackTime=M/ct.length}if(Fe&&Ye&&Ye.length>0){let M=0;for(let R=0;R<Ye.length;R++)M+=Ye[R];pe.binEnvelope=M/Ye.length,pe.binEnvelopeState=pe.binEnvelope}if(Je&&at&&at.length>0){let M=0;for(let R=0;R<at.length;R++)M+=qt(at[R],-Math.PI,Math.PI);pe.binPhase=M/at.length}let he=d===1?this._paintCount:0,ye=d===1?this._lineVisibleCount:0;const Ze=(M,R=1)=>{if(he>=this._N&&d===1){const k=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),Y=this._archiveAndCompactOldest(k,he,t,se);he=Math.max(0,he-Y)}if(he>=this._N)return;const z=M.hz,Q=za(z),de=qt(Q,m,h),V=Number.isFinite(M.binPan)?M.binPan:e.pan??0;Number.isFinite(M.byte)&&M.byte;const ge=Number.isFinite(M.energy)?M.energy:0,_e=Number.isFinite(M.binMagnitude)?M.binMagnitude:void 0,qe=Number.isFinite(M.binPhase)?M.binPhase:void 0,Ke=Number.isFinite(M.binFlux)?M.binFlux:void 0,nt=Number.isFinite(M.binPhaseDeviation)?M.binPhaseDeviation:void 0,rt=Number.isFinite(M.binAttackTime)?M.binAttackTime:void 0,Ge=Number.isFinite(M.binEnvelope)?M.binEnvelope:void 0,lt=Number.isFinite(M.binRMSEnergy)?M.binRMSEnergy:void 0,st=(de*2-1)*re,ut=0,mt=0,Ct=We(ge),be={x:ut,y:st,z:mt,size:Math.max(1,f*(.5+ge*1.5)),red:Ct,green:Ct,blue:Ct,opacity:Math.min(1,(.08+ge*1.9)*R),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:z,normFreq:de,pan:V,spectralCentroid:pe.spectralCentroid,spectralFlux:pe.spectralFlux,spectralFlatness:pe.spectralFlatness,inharmonicity:pe.inharmonicity,peakAmplitude:pe.peakAmplitude,zeroCrossingRate:pe.zeroCrossingRate,spectralRolloff:pe.spectralRolloff,spectralSpread:pe.spectralSpread,spectralSkewness:pe.spectralSkewness,chromagram:pe.chromagram,binMagnitude:_e,binPhase:qe,binFlux:Ke,binPhaseDeviation:nt,binAttackTime:rt,binEnvelope:Ge,binEnvelopeState:Ge,binRMSEnergy:lt,globalRmsEnergy:pe.globalRmsEnergy,amplitude:pe.amplitude,time:se,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne}),particle:be});const It=Number.isFinite(be.particleCount)?We(be.particleCount):1;if(It<=0||It<1&&Math.random()>It)return;this._pos[he*3]=Number.isFinite(be.x)?be.x:ut,this._pos[he*3+1]=Number.isFinite(be.y)?be.y:st,this._pos[he*3+2]=Number.isFinite(be.z)?be.z:mt,this._sz[he]=Number.isFinite(be.size)?Math.max(0,be.size):Math.max(2,f);let Wt=Number.isFinite(be.red)?We(be.red):Ct,nn=Number.isFinite(be.green)?We(be.green):Ct,E=Number.isFinite(be.blue)?We(be.blue):Ct;if(this._compiledRules.usesParticleHsb){const k=Hr(Wt,nn,E),Y=Xr(be.hue),$=Number.isFinite(be.saturation)?We(be.saturation):k.s,W=Number.isFinite(be.brightness)?We(be.brightness):k.v,ue=Va(Y??k.h,$,W);Wt=ue.r,nn=ue.g,E=ue.b}this._col[he*3]=Wt,this._col[he*3+1]=nn,this._col[he*3+2]=E,this._alpha[he]=Number.isFinite(be.opacity)?Math.max(0,Math.min(1,be.opacity)):Math.min(1,(.08+ge*1.9)*R),this._shape[he]=nu(be.shapeType),this._pan[he]=Number.isFinite(V)?Math.max(-1,Math.min(1,V)):0,this._binRms[he]=Number.isFinite(lt)?We(lt):0,he++},me=(M,R=1)=>{if(ye>=this._N)return;const z=M.hz,Q=za(z),de=qt(Q,m,h),V=Number.isFinite(M.binPan)?M.binPan:e.pan??0,ge=Number.isFinite(M.energy)?M.energy:0,_e=Number.isFinite(M.binMagnitude)?M.binMagnitude:void 0,qe=Number.isFinite(M.binPhase)?M.binPhase:void 0,Ke=Number.isFinite(M.binFlux)?M.binFlux:void 0,nt=Number.isFinite(M.binPhaseDeviation)?M.binPhaseDeviation:void 0,rt=Number.isFinite(M.binAttackTime)?M.binAttackTime:void 0,Ge=Number.isFinite(M.binEnvelope)?M.binEnvelope:void 0,lt=Number.isFinite(M.binRMSEnergy)?M.binRMSEnergy:void 0,st=(de*2-1)*re,ut=0,mt=0,Ct=We(ge),be={xStart:ut,yStart:st,zStart:mt,xEnd:ut,yEnd:st+Math.max(1,re*.12*ge),zEnd:mt,thickness:1,lineCount:0,red:Ct,green:Ct,blue:Ct,opacity:Math.min(1,(.08+ge*1.4)*R)};t.ruleEngineEnabled!==!1&&this._compiledRules.lineRuleCount>0&&this.applyLineRules({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:z,normFreq:de,pan:V,spectralCentroid:pe.spectralCentroid,spectralFlux:pe.spectralFlux,spectralFlatness:pe.spectralFlatness,inharmonicity:pe.inharmonicity,peakAmplitude:pe.peakAmplitude,zeroCrossingRate:pe.zeroCrossingRate,spectralRolloff:pe.spectralRolloff,spectralSpread:pe.spectralSpread,spectralSkewness:pe.spectralSkewness,chromagram:pe.chromagram,binMagnitude:_e,binPhase:qe,binFlux:Ke,binPhaseDeviation:nt,binAttackTime:rt,binEnvelope:Ge,binEnvelopeState:Ge,binRMSEnergy:lt,globalRmsEnergy:pe.globalRmsEnergy,amplitude:pe.amplitude,time:se,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})},be);const It=Number.isFinite(be.lineCount)?We(be.lineCount):0;if(It<=0||It<1&&Math.random()>It)return;let Wt=Number.isFinite(be.red)?We(be.red):Ct,nn=Number.isFinite(be.green)?We(be.green):Ct,E=Number.isFinite(be.blue)?We(be.blue):Ct;if(this._compiledRules.usesLineHsb){const Ee=Hr(Wt,nn,E),Ne=Xr(be.hue),Ue=Number.isFinite(be.saturation)?We(be.saturation):Ee.s,$e=Number.isFinite(be.brightness)?We(be.brightness):Ee.v,je=Va(Ne??Ee.h,Ue,$e);Wt=je.r,nn=je.g,E=je.b}const k=Number.isFinite(be.opacity)?Math.max(0,Math.min(1,be.opacity)):.4,Y=Wt*k,$=nn*k,W=E*k,ue=ye*6;this._linePos[ue]=Number.isFinite(be.xStart)?be.xStart:ut,this._linePos[ue+1]=Number.isFinite(be.yStart)?be.yStart:st,this._linePos[ue+2]=Number.isFinite(be.zStart)?be.zStart:mt,this._linePos[ue+3]=Number.isFinite(be.xEnd)?be.xEnd:ut,this._linePos[ue+4]=Number.isFinite(be.yEnd)?be.yEnd:st,this._linePos[ue+5]=Number.isFinite(be.zEnd)?be.zEnd:mt,this._lineCol[ue]=Y,this._lineCol[ue+1]=$,this._lineCol[ue+2]=W,this._lineCol[ue+3]=Y,this._lineCol[ue+4]=$,this._lineCol[ue+5]=W,this._lineThickness[ye]=Number.isFinite(be.thickness)?Math.max(0,be.thickness):1,this._lineAlpha[ye]=k,ye++},Pe=o.length/Math.max(1e-6,u),Ie=M=>{const R=Math.floor(M*Pe);return Math.max(0,Math.min(l-1,R))};let Be=g;for(let M=0;M<H;M++){const R=M===H-1?v:Math.min(v,Be*ie),z=Math.sqrt(Math.max(g,Be)*Math.max(g,R)),Q=Ie(Be),de=Ie(R);if(de<Q){Be=R;continue}let V=0,ge=0,_e=0,qe=0,Ke=0,nt=0,rt=0,Ge=0,lt=0,st=0,ut=0;for(let be=Q;be<=de;be++){const It=o[be],Wt=Ae&&be<Ae.length?qt(Ae[be],y,_):It/255;_e+=Wt,Tt&&(nt+=Wt),Je&&at&&be<at.length&&(rt+=qt(at[be],-Math.PI,Math.PI)),Qe&&ke&&be<ke.length&&(Ge+=qt(ke[be],x,A)),De&&ze&&be<ze.length&&(lt+=qt(ze[be],T,L)),ot&&ct&&be<ct.length&&(st+=qt(ct[be],F,w)),Fe&&Ye&&be<Ye.length&&(ut+=qt(Ye[be]/3,0,1));const nn=ve?e.getBinPan(be):e.pan??0,E=Math.max(1,It);qe+=nn*E,Ke+=E,It>ge&&(ge=It),V++}if(V<=0||ge<=1)continue;const mt=_e/V,Ct=mt*p;if(Ze({hz:z,byte:ge,energy:Ct,binPan:Ke>0?qe/Ke:0,binRMSEnergy:We(mt),binMagnitude:Tt?nt/V:void 0,binPhase:Je?rt/V:void 0,binFlux:Qe?Ge/V:void 0,binPhaseDeviation:De?lt/V:void 0,binAttackTime:ot?st/V:void 0,binEnvelope:Fe?ut/V:void 0}),me({hz:z,energy:Ct,binPan:Ke>0?qe/Ke:0,binRMSEnergy:We(mt),binMagnitude:Tt?nt/V:void 0,binPhase:Je?rt/V:void 0,binFlux:Qe?Ge/V:void 0,binPhaseDeviation:De?lt/V:void 0,binAttackTime:ot?st/V:void 0,binEnvelope:Fe?ut/V:void 0}),Be=R,he>=this._N)break}d===1?(this._paintCount=he,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._lineVisibleCount=ye,this._lineGeo.setDrawRange(0,this._lineVisibleCount*2),this._pruneArchive(t,se)):(this._paintCount=0,this._visibleCount=he,this._geo.setDrawRange(0,he),this._lineVisibleCount=ye,this._lineGeo.setDrawRange(0,ye*2)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...pe,time:se,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...pe,time:se,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...pe,time:se,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0,this._lineMat.blending=e,this._lineMat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}getLineVisibleCount(){return this._lineVisibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;for(let i=0;i<this._N;i++){const r=i*6;this._linePos[r]*=e,this._linePos[r+1]*=t,this._linePos[r+3]*=e,this._linePos[r+4]*=t}this._aPos.needsUpdate=!0,this._aLinePos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose(),this._lineMesh.geometry.dispose(),this._lineMat.dispose()}}function Z1(){return window.AudioContext||window.webkitAudioContext}async function K1(n){if(!n)throw new Error("No file provided for decoding.");const e=Z1();if(!e)throw new Error("Web Audio API is not supported in this browser.");const t=new e;try{const i=await n.arrayBuffer(),r=await t.decodeAudioData(i.slice(0));if(!r||!Number.isFinite(r.duration)||r.duration<=0)throw new Error("Audio decode produced no playable data.");return n}finally{try{await t.close()}catch{}}}const iu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#1C274C"/>\r
<path d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#1C274C"/>\r
</svg>`,ru=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"/>\r
</svg>`,J1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#1C274C"/>\r
<path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#1C274C"/>\r
</svg>`,au=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/>\r
</svg>`,Q1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.9998 17.5737L21.9998 6.42632C21.9998 4.57895 20.3991 3.41122 19.0966 4.30838L13 8.76844L13 7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V15.2316L19.0966 19.6916C20.3991 20.5888 21.9998 19.4211 21.9998 17.5737Z" fill="#1C274C"/>\r
</svg>`,eb=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 17.5737L2 6.42632C2 4.57895 3.60064 3.41122 4.90312 4.30838L10.9998 8.76844L10.9998 7.12303C10.9998 5.50658 12.467 4.48482 13.661 5.26983L21.0784 10.1468C22.3069 10.9545 22.3069 13.0455 21.0784 13.8532L13.661 18.7302C12.467 19.5152 10.9998 18.4934 10.9998 16.877V15.2316L4.90313 19.6916C3.60065 20.5888 2 19.4211 2 17.5737Z" fill="#1C274C"/>\r
</svg>`,su=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5V11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C16.7936 6.3173 16.9531 7.49303 16.9893 9.50002L17.6584 9.17082C19.6042 8.19788 20.5772 7.7114 21.2886 8.15107C22 8.59075 22 9.67853 22 11.8541V12.1459C22 14.3215 22 15.4093 21.2886 15.8489C20.5772 16.2886 19.6042 15.8021 17.6584 14.8292L16.9893 14.5C16.9531 16.507 16.7936 17.6827 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5ZM13.5607 9.56066C14.1464 8.97487 14.1464 8.02513 13.5607 7.43934C12.9749 6.85355 12.0251 6.85355 11.4393 7.43934C10.8536 8.02513 10.8536 8.97487 11.4393 9.56066C12.0251 10.1464 12.9749 10.1464 13.5607 9.56066Z" fill="#1C274C"/>\r
</svg>`,ou=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 4.5C6 3.56538 6 3.09808 6.20096 2.75C6.33261 2.52197 6.52197 2.33261 6.75 2.20096C7.09808 2 7.56538 2 8.5 2H15.5C16.4346 2 16.9019 2 17.25 2.20096C17.478 2.33261 17.6674 2.52197 17.799 2.75C18 3.09808 18 3.56538 18 4.5C18 5.43462 18 5.90192 17.799 6.25C17.6674 6.47803 17.478 6.66739 17.25 6.79904C16.9019 7 16.4346 7 15.5 7H8.5C7.56538 7 7.09808 7 6.75 6.79904C6.52197 6.66739 6.33261 6.47803 6.20096 6.25C6 5.90192 6 5.43462 6 4.5Z" fill="#1C274C"/>\r
<path d="M5.00214 3.93909C4.84746 4.07647 4.75 4.27687 4.75 4.50002C4.75 4.72318 4.84746 4.92357 5.00214 5.06095C4.99998 4.89619 4.99999 4.72205 5 4.54025V4.4598C4.99999 4.278 4.99998 4.10385 5.00214 3.93909Z" fill="#1C274C"/>\r
<path d="M10 16V20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20V16C14 15.0572 14 14.5858 13.7071 14.2929C13.4142 14 12.9428 14 12 14C11.0572 14 10.5858 14 10.2929 14.2929C10 14.5858 10 15.0572 10 16Z" fill="#1C274C"/>\r
<path d="M18.9944 5.25H19.0453C19.4999 5.25 19.8051 5.25037 20.0416 5.26579C20.2718 5.2808 20.3843 5.30776 20.4583 5.3369C20.781 5.46395 21.0364 5.71937 21.1635 6.04208C21.1926 6.11609 21.2196 6.22858 21.2346 6.45878C21.25 6.6953 21.2504 7.00044 21.2504 7.4551C21.2504 8.29243 21.2398 8.52185 21.179 8.69392C21.0747 8.98918 20.8634 9.23455 20.5869 9.38148C20.4257 9.4671 20.2004 9.5116 19.3724 9.63581L15.249 10.2543C14.4763 10.3702 13.8277 10.4675 13.3152 10.6116C12.7721 10.7643 12.2916 10.9923 11.9166 11.4278C11.5334 11.8727 11.3753 12.4055 11.3071 13.0062C11.5113 12.9999 11.727 13 11.9458 13H12.0546C12.3196 13 12.5799 12.9999 12.8208 13.011C12.8708 12.6902 12.9482 12.5286 13.0532 12.4067C13.1626 12.2796 13.3307 12.1654 13.7212 12.0556C14.1321 11.94 14.6865 11.8555 15.5182 11.7307L19.714 11.1014C20.3648 11.0044 20.8716 10.9288 21.2907 10.7061C21.8991 10.3829 22.3639 9.84304 22.5934 9.19346C22.7514 8.74599 22.751 8.23353 22.7504 7.57559L22.7504 7.43098C22.7504 7.00661 22.7504 6.65233 22.7314 6.3612C22.7116 6.05823 22.6691 5.77171 22.5592 5.49258C22.2797 4.78261 21.7177 4.22069 21.0078 3.94117C20.7286 3.83128 20.4421 3.78872 20.1392 3.76897C19.848 3.74999 19.4937 3.74999 19.0694 3.75H18.9944C19.0002 3.96867 19.0002 4.20681 19.0002 4.45976V4.54024C19.0002 4.7932 19.0002 5.03133 18.9944 5.25Z" fill="#1C274C"/>\r
</svg>`;function dr(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Nt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,a]of Object.entries(t))r==="text"?i.textContent=a:r==="html"?i.innerHTML=a:i.setAttribute(r,a);return i}function xn(n,e,t){!n||!e||(n.innerHTML="",n.append(Nt("span","audio-player__icon",{html:e})),t&&n.setAttribute("aria-label",t))}function tb(n){if(!n){console.warn("[AudioPlayer] No container element.");const I=new Audio;return I.crossOrigin="anonymous",{audioEl:I,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Nt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const a=document.getElementById("app");function s(I){r.classList.toggle("audio-player__collapse-btn--icon",I),I?(xn(r,iu,"Expand player"),r.title="Expand player"):(r.textContent="«",r.setAttribute("aria-label","Collapse audio player"),r.title="Collapse player"),a&&a.classList.toggle("audio-player-collapsed",I)}s(!1);const o=Nt("div","audio-player__body"),l=Nt("div","audio-player__file-row"),c=Nt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});c.style.display="none";const u=Nt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});xn(u,iu,"Open audio file");const d=Nt("span","audio-player__file-name",{text:"No file loaded"});l.append(c,u);const p=Nt("div","audio-player__transport"),f=Nt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});xn(f,ru,"Play");const g=Nt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});xn(g,au,"Stop");const v=Nt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});xn(v,Q1,"−10 seconds");const m=Nt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});xn(m,eb,"+10 seconds");const h=Nt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});xn(h,vd,"Save PNG");const y=Nt("button","audio-player__btn",{id:"btn-record","aria-label":"Record video",disabled:"true",title:"Record canvas and audio"});xn(y,su,"Record video");const _=Nt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});xn(_,ou,"Paint all");const x=Nt("div","audio-player__speed-wrap"),A=Nt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),T=Nt("span","audio-player__speed-suffix",{text:"x"});x.append(A,T),p.append(v,f,g,m,h,y,_,x);const L=Nt("div","audio-player__progress-row"),F=Nt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function w(I){F.style.background=`linear-gradient(90deg, var(--color-accent) ${I}%, var(--color-border) ${I}%)`}w(0);const b=Nt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),D=Nt("div","audio-player__progress-meta");D.append(d,b),L.append(F,D),o.append(l,p,L),n.append(r,o);function X(I){xn(f,I?J1:ru,I?"Pause":"Play")}function j(I){xn(y,I?au:su,I?"Stop recording":"Record video")}function J(){xn(_,ou,"Paint all")}function Z(I,ie=""){c.disabled=I,f.disabled=I||!e.src,g.disabled=I||!e.src,v.disabled=I||!e.src,m.disabled=I||!e.src,y.disabled=I||!e.src,_.disabled=I||!e.src,A.disabled=I||!e.src,I&&ie&&(d.textContent=ie)}function K(I){const ie=Math.max(.1,Math.min(16,Number(I)));Number.isFinite(ie)&&(e.playbackRate=ie,A.value=String(Number(ie.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:ie},bubbles:!0})))}function ce(I,ie=(I==null?void 0:I.name)||"Audio loaded"){I&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(I),e.load(),d.textContent=ie,t=!1,X(!1),f.classList.remove("audio-player__btn--active"),F.value="0",w(0),b.textContent="0:00 / –:––",N(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:I,audioEl:e},bubbles:!0})))}function N(){f.disabled=!1,g.disabled=!1,v.disabled=!1,m.disabled=!1,y.disabled=!1,_.disabled=!1,A.disabled=!1}c.addEventListener("change",async I=>{const ie=I.target.files[0];if(ie){Z(!0,`Loading ${ie.name}...`);try{d.textContent=`Decoding ${ie.name}...`;const Oe=await K1(ie);ce(Oe,Oe.name)}catch(Oe){console.warn("[AudioPlayer] decode failed:",Oe),d.textContent="Decode failed. Try another file."}finally{Z(!1),c.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(I){console.warn("[AudioPlayer] play() failed:",I.message)}}),e.addEventListener("play",()=>{t=!0,X(!0),f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,X(!1),f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,X(!1),f.classList.remove("audio-player__btn--active")}),g.addEventListener("click",()=>{e.pause(),e.currentTime=0,F.value="0",w(0),b.textContent=`0:00 / ${dr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),v.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),m.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),h.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),y.addEventListener("click",()=>{y.disabled||n.dispatchEvent(new CustomEvent("player:recordvideo-toggle",{detail:{audioEl:e},bubbles:!0}))}),_.addEventListener("click",()=>{_.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",I=>{var Oe;const ie=!!((Oe=I==null?void 0:I.detail)!=null&&Oe.running);_.disabled=ie||!e.src,y.disabled=ie||!e.src,A.disabled=ie||!e.src,J(),_.classList.toggle("audio-player__btn--active",ie)}),n.addEventListener("player:recordvideo-state",I=>{var Oe;const ie=!!((Oe=I==null?void 0:I.detail)!=null&&Oe.running);j(ie),y.classList.toggle("audio-player__btn--active",ie),_.disabled=ie||!e.src,!ie&&!_.disabled&&e.src&&(y.disabled=!1),A.disabled=ie||!e.src}),A.addEventListener("keydown",I=>{I.key==="Enter"&&(I.preventDefault(),K(A.value),A.blur())});let P=!1;F.addEventListener("mousedown",()=>{P=!0}),F.addEventListener("touchstart",()=>{P=!0},{passive:!0}),F.addEventListener("input",()=>{const I=parseFloat(F.value);w(I),e.duration&&(b.textContent=`${dr(e.duration*I/100)} / ${dr(e.duration)}`)}),F.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(F.value)/100*e.duration),P=!1}),e.addEventListener("timeupdate",()=>{if(P)return;const I=e.currentTime,ie=e.duration;if(!isFinite(ie)||ie===0)return;const Oe=I/ie*100;F.value=String(Oe),w(Oe),b.textContent=`${dr(I)} / ${dr(ie)}`}),e.addEventListener("loadedmetadata",()=>{b.textContent=`0:00 / ${dr(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),s(i)});function H(I,ie=(I==null?void 0:I.name)||"Audio loaded"){return I instanceof File?(ce(I,ie),!0):!1}return{audioEl:e,getIsPlaying:()=>t,loadFile:H}}function Qs(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function nb({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const a=Qs("div","canvas-wrapper__resize-handle-right"),s=Qs("div","canvas-wrapper__resize-handle-bottom"),o=Qs("div","canvas-wrapper__resize-handle-corner");n.append(a,s,o);let l=null;function c(p,f,g){p.preventDefault();const v=p.touches?p.touches[0].clientX:p.clientX,m=p.touches?p.touches[0].clientY:p.clientY;l={type:f,startX:v,startY:m,startW:n.clientWidth,startH:n.clientHeight,handle:g},g.classList.add("dragging"),document.body.style.cursor=f==="right"?"ew-resize":f==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(p){if(!l)return;const f=p.touches?p.touches[0].clientX:p.clientX,g=p.touches?p.touches[0].clientY:p.clientY,v=f-l.startX,m=g-l.startY,h=160,y=120,_=e.getBoundingClientRect();let x=l.startW,A=l.startH;(l.type==="right"||l.type==="corner")&&(x=Math.max(h,Math.min(l.startW+v,_.width-4))),(l.type==="bottom"||l.type==="corner")&&(A=Math.max(y,Math.min(l.startH+m,window.innerHeight-4)));const T=i>0?x/i:1,L=r>0?A/r:1;i=x,r=A,n.style.width=`${x}px`,n.style.height=`${A}px`,t(x,A,T,L)}function d(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return a.addEventListener("mousedown",p=>c(p,"right",a)),s.addEventListener("mousedown",p=>c(p,"bottom",s)),o.addEventListener("mousedown",p=>c(p,"corner",o)),a.addEventListener("touchstart",p=>c(p,"right",a),{passive:!1}),s.addEventListener("touchstart",p=>c(p,"bottom",s),{passive:!1}),o.addEventListener("touchstart",p=>c(p,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),window.addEventListener("resize",()=>{if(!n.style.width){const p=e.clientWidth,f=e.clientHeight,g=i>0?p/i:1,v=r>0?f/r:1;i=p,r=f,t(p,f,g,v)}}),{setSize(p,f){const g=i>0?p/i:1,v=r>0?f/r:1;i=p,r=f,n.style.width=`${p}px`,n.style.height=`${f}px`,t(p,f,g,v)},getSize(){return{w:i,h:r}}}}const Ad=1,qr=".ssp.json";function lu({params:n,presetName:e="",presetLibrary:t=[],projectName:i=""}){return{schemaVersion:Ad,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),projectName:String(i||""),presetName:String(e||""),params:n&&typeof n=="object"?n:{},presetLibrary:Array.isArray(t)?t:[]}}function ib(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return{schemaVersion:Number.isFinite(Number(e.schemaVersion))?Number(e.schemaVersion):Ad,createdAt:e.createdAt||null,updatedAt:e.updatedAt||null,projectName:String(e.projectName||""),presetName:String(e.presetName||""),params:e.params,presetLibrary:Array.isArray(e.presetLibrary)?e.presetLibrary:[]}}function rb(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function jn(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function El(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,a=0;for(let s=0;s<t;s++){const o=Math.max(0,n[s]/255),l=s/Math.max(1,t-1)*i;r+=l*o,a+=o}return a<=1e-9?0:r/a}function ab(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const a=Math.max(0,n[r]/255),s=Math.max(0,e[r]/255),o=a-s;o>0&&(i+=o)}return jn(i/t)}function sb(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let s=0;s<n.length;s++){const o=Math.max(0,n[s]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),a=i/n.length;return jn(r/Math.max(a,e))}function ob(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,a=[];for(let u=1;u<t-1;u++){const d=n[u];if(!(d<r)&&d>=n[u-1]&&d>=n[u+1]){const p=u/Math.max(1,t-1)*i;a.push({i:u,hz:p,mag:d/255})}}if(a.length<2)return 0;a.sort((u,d)=>d.mag-u.mag);const s=a.slice(0,6),o=Math.max(20,s[0].hz);let l=0,c=0;for(let u=1;u<s.length;u++){const d=s[u],f=Math.max(1,Math.round(d.hz/o))*o,g=Math.abs(d.hz-f)/Math.max(f,1e-9);l+=g*d.mag,c+=d.mag}return c<=1e-9?0:jn(l/c*2)}function lb(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return jn(e/255)}function cb(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return jn(e/Math.max(1,n.length-1))}function ub(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,a=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let s=0;for(let c=0;c<i;c++)s+=Math.max(0,n[c]/255);if(s<=1e-9)return 0;const o=s*a;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const u=c/Math.max(1,i-1)*r;return jn(u/Math.max(1,r))}return 1}function Rd(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,a=Number.isFinite(t)?t:El(n,e);let s=0,o=0;for(let c=0;c<i;c++){const u=Math.max(0,n[c]/255),p=c/Math.max(1,i-1)*r-a;o+=p*p*u,s+=u}if(s<=1e-9)return 0;const l=Math.sqrt(o/s);return jn(l/Math.max(1,r))}function db(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,a=e/2,s=Number.isFinite(t)?t:El(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*a):Math.max(1e-6,Rd(n,e,s)*a);let l=0,c=0;for(let d=0;d<r;d++){const p=Math.max(0,n[d]/255),g=(d/Math.max(1,r-1)*a-s)/o;c+=g*g*g*p,l+=p}if(l<=1e-9)return 0;const u=c/l;return jn((u+2)/4)}function pb(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let a=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const u=69+12*Math.log2(c/440),d=(Math.round(u)%12+12)%12;r[d]+=l,a+=l}if(a<=1e-9)return 0;let s=0;for(let o=0;o<12;o++)r[o]>s&&(s=r[o]);return jn(s/a)}function hb(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return jn((Number.isFinite(n)?n:0)/t)}const Rr=document.getElementById("three-canvas"),aa=document.getElementById("canvas-wrapper"),qn=document.getElementById("canvas-col"),wt=new Ju({canvas:Rr,antialias:!0});wt.setPixelRatio(window.devicePixelRatio);wt.setClearColor(0,1);wt.autoClear=!0;const sa=new _h,wl=250,Cl=new Ch(wl);let gr=!0;Cl.userData.excludeFromPng=!0;sa.add(Cl);function Pd(){window.dispatchEvent(new CustomEvent("seesound:origin-sign-state",{detail:{enabled:gr,size:wl}}))}window.addEventListener("seesound:origin-sign-toggle",n=>{var t;const e=(t=n==null?void 0:n.detail)==null?void 0:t.enabled;typeof e=="boolean"?gr=e:gr=!gr,Cl.visible=gr,Pd()});Pd();const jt=new qu(-1,1,1,-1,.001,5e3),Mn=new Sn(55,1,.001,5e3);let Le=jt;const zt=new q(0,0,0),Tl=new q(0,0,420),cu=Tl.length();for(const n of[jt,Mn])n.position.copy(Tl),n.up.set(0,1,0),n.lookAt(zt);function Al(){const e=ae.cameraProjection==="perspective"?Mn:jt;e!==Le&&(e.position.copy(Le.position),e.quaternion.copy(Le.quaternion),e.up.copy(Le.up),e.zoom=Le.zoom,e.lookAt(zt),e.updateProjectionMatrix(),Le=e,di())}const Rt={radius:420,azimuth:0,elevation:0};function di(){const n=Le.position.x-zt.x,e=Le.position.y-zt.y,t=Le.position.z-zt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);Rt.radius=i,Rt.azimuth=Math.atan2(n,t),Rt.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function os(){const n=Math.cos(Rt.elevation);Le.position.set(zt.x+Rt.radius*n*Math.sin(Rt.azimuth),zt.y+Rt.radius*Math.sin(Rt.elevation),zt.z+Rt.radius*n*Math.cos(Rt.azimuth)),Le.lookAt(zt)}function Nd(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Ld(){zt.set(0,0,0);const n=Math.max(1,wt.domElement.clientWidth||qn.clientWidth||window.innerWidth),e=Math.max(1,wt.domElement.clientHeight||qn.clientHeight||window.innerHeight);Pl(n,e);for(const t of[jt,Mn])t.position.copy(Tl),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(zt),t.updateProjectionMatrix();Al(),Rl(!0),di()}function Rl(n=!1){if(ae.cameraProjection==="perspective")return;const e=String(ae.cameraAxoPreset||"orthoXY"),t=n?cu:Math.max(40,Number(Rt.radius)||cu),{azimuth:i,elevation:r}=Nd(e);Rt.radius=t,Rt.azimuth=i,Rt.elevation=r,os(),di()}di();const un={active:!1,button:-1,lastX:0,lastY:0};Rr.addEventListener("contextmenu",n=>n.preventDefault());Rr.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(un.active=!0,un.button=n.button,un.lastX=n.clientX,un.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{un.active=!1,un.button=-1});window.addEventListener("mousemove",n=>{if(!un.active)return;const e=n.clientX-un.lastX,t=n.clientY-un.lastY;if(un.lastX=n.clientX,un.lastY=n.clientY,un.button===0)Rt.azimuth-=e*.006,Rt.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,Rt.elevation-t*.005)),os();else if(un.button===1){const i=Math.max(1,wt.domElement.clientHeight||qn.clientHeight||window.innerHeight),r=new q,a=new q,s=new q;Le.updateMatrixWorld();const o=Le.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),a.set(o[4],o[5],o[6]).normalize();let l=.01;if(Le.isOrthographicCamera)l=(Le.top-Le.bottom)/(Math.max(.01,Le.zoom)*i);else{const c=Math.max(.001,Le.position.distanceTo(zt)),u=ol.degToRad(Le.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Le.zoom)}s.copy(r).multiplyScalar(-e*l),s.addScaledVector(a,t*l),Le.position.add(s),zt.add(s),di()}else if(un.button===2){const i=-e*.004,r=-t*.004;Le.rotateOnWorldAxis(new q(0,1,0),i),Le.rotateX(r)}});Rr.addEventListener("wheel",n=>{if(n.preventDefault(),Le.isPerspectiveCamera){const e=new q;Le.getWorldDirection(e);const t=Math.max(2,Rt.radius*.08),i=(n.deltaY>0?1:-1)*t;Le.position.addScaledVector(e,i),di()}else{const e=n.deltaY>0?.92:1.08;Le.zoom=Math.max(.05,Math.min(64,Le.zoom*e)),Le.updateProjectionMatrix()}},{passive:!1});function Fd(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Le.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Le.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Le.position.z=n.z,e=!0),e&&(Le.lookAt(zt),di()),Number.isFinite(n.zoom)&&(Le.zoom=Math.max(.05,Math.min(64,n.zoom)),Le.updateProjectionMatrix())}function fb(){const n=St.getVisibleBounds();if(n.empty){Ld();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=wt.domElement.width/t,r=wt.domElement.height/t,a=Math.max(1,i||Number(ae.canvasWidth)||wt.domElement.clientWidth||qn.clientWidth||window.innerWidth),s=Math.max(1,r||Number(ae.canvasHeight)||wt.domElement.clientHeight||qn.clientHeight||window.innerHeight),o=a/s,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(zt.copy(c),Le.isOrthographicCamera){const{azimuth:d,elevation:p}=Nd(ae.cameraAxoPreset);Rt.azimuth=d,Rt.elevation=p,Rt.radius=Math.max(u*2.2,60),os(),Le.updateMatrixWorld(!0);const f=Le.matrixWorld.elements,g=new q(f[0],f[1],f[2]).normalize(),v=new q(f[4],f[5],f[6]).normalize(),m=[new q(n.min.x,n.min.y,n.min.z),new q(n.min.x,n.min.y,n.max.z),new q(n.min.x,n.max.y,n.min.z),new q(n.min.x,n.max.y,n.max.z),new q(n.max.x,n.min.y,n.min.z),new q(n.max.x,n.min.y,n.max.z),new q(n.max.x,n.max.y,n.min.z),new q(n.max.x,n.max.y,n.max.z)];let h=0,y=0;const _=new q;for(const T of m)_.copy(T).sub(c),h=Math.max(h,Math.abs(_.dot(g))),y=Math.max(y,Math.abs(_.dot(v)));const x=Math.max(h,y*o,u*.35),A=Math.max(y,h/Math.max(.001,o),u*.35);jt.left=-x*e,jt.right=x*e,jt.top=A*e,jt.bottom=-A*e,jt.zoom=1,jt.near=-Math.max(5e3,u*6),jt.far=Math.max(5e3,u*6),jt.updateProjectionMatrix()}else{Mn.lookAt(c),di();const d=ol.degToRad(Mn.fov),p=u*e/Math.max(.001,Math.tan(d*.5)),f=2*Math.atan(Math.tan(d*.5)*(Mn.aspect||o)),g=u*e/Math.max(.001,Math.tan(f*.5));Rt.radius=Math.max(g,p,40),os(),Mn.near=Math.max(.001,Rt.radius-u*3),Mn.far=Math.max(Mn.near+1,Rt.radius+u*6),Mn.updateProjectionMatrix()}di()}function Pl(n,e){jt.left=-n/2,jt.right=n/2,jt.top=e/2,jt.bottom=-e/2,jt.updateProjectionMatrix(),Mn.aspect=n/Math.max(1,e),Mn.updateProjectionMatrix(),wt.setSize(n,e,!1)}const mb=qn.clientWidth||window.innerWidth,gb=qn.clientHeight||window.innerHeight;Pl(mb,gb);Al();Rl();const St=new $1(sa,{maxParticles:ae.maxParticles??262144}),Xi=St.onRulesChanged(ae.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:Xi}));function _b(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function Id(n=null){const e=_b(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","canvasWidthUnits","canvasHeightUnits","audioLengthSec","binEnergy"]),i=e.has("binMagnitude")||e.has("binEnergy")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),a=e.has("binPhaseDeviation")||e.has("binPhasedeviation"),s=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),u=e.has("spectralCentroid"),d=e.has("spectralFlux"),p=e.has("spectralFlatness"),f=e.has("inharmonicity"),g=e.has("peakAmplitude"),v=e.has("zeroCrossingRate"),m=e.has("spectralRolloff"),h=e.has("spectralSpread"),y=e.has("spectralSkewness"),_=e.has("chromagram"),x=new Set(t);return c&&x.add("globalRmsEnergy"),u&&x.add("spectralCentroid"),d&&x.add("spectralFlux"),p&&x.add("spectralFlatness"),f&&x.add("inharmonicity"),g&&x.add("peakAmplitude"),v&&x.add("zeroCrossingRate"),m&&x.add("spectralRolloff"),h&&x.add("spectralSpread"),y&&x.add("spectralSkewness"),_&&x.add("chromagram"),i&&x.add("binMagnitude"),r&&x.add("binFlux"),a&&x.add("binPhaseDeviation"),o&&x.add("binPhase"),s&&x.add("binEnvelope"),s&&x.add("binEnvelopeState"),l&&x.add("binAttackTime"),c&&x.add("binRMSEnergy"),e.has("binFreq")&&x.add("binFreq"),{used:e,calculatedInputs:x,worklet:{enabled:i||r||a||s||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:a,needPhase:o,needEnvelope:s,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:u,needGlobalSpectralFlux:d,needSpectralFlatness:p,needInharmonicity:f,needPeakAmplitude:g,needZeroCrossingRate:v,needSpectralRolloff:m,needSpectralSpread:h,needSpectralSkewness:y,needChromagram:_},backend:{calc_fft:!0,calc_magnitude:i||r||u||p||d,calc_magnitude_dbfs:i||c,calc_phase:a||o,calc_phase_deviation:a,calc_local_spectral_flux:r||s,calc_envelope_state:s,calc_rms_energy:c,calc_peak_amplitude:g,calc_zero_crossing_rate:v,calc_spectral_centroid:u,calc_global_spectral_flux:d,calc_spectral_flatness:p,calc_spectral_rolloff:m,calc_spectral_spread:h,calc_spectral_skewness:y,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:_}}}function Vn(n,e,t){const i=Number(e),r=Number(t),a=Number(n);return!Number.isFinite(a)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(a-i)/(r-i)))}const eo=Object.freeze([1024,2048,4096,8192,16384]);function Zo(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=eo[0],i=Math.abs(e-t);for(let r=1;r<eo.length;r++){const a=eo[r],s=Math.abs(e-a);s<i&&(t=a,i=s)}return t}function Nl(n=null){const e=Id(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}Nl(Xi==null?void 0:Xi.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||St.scaleAllParticleSizes(t/e)});class Dd{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=Zo(ae.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none"}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-C6EfNb8V.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=Id(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=Zo(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}init(e){var t,i,r,a,s,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(a=this.analyserL)==null||a.disconnect(),(s=this.analyserR)==null||s.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var v,m,h;if(!this.analyser)return;((v=this.ctx)==null?void 0:v.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((m=this.ctx)==null?void 0:m.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((h=this.ctx)==null?void 0:h.sampleRate)??44100,i=t/2,r=y=>y/e*i;let a=0,s=0,o=0,l=0,c=0,u=0,d=0,p=0;for(let y=0;y<e;y++){const _=this.frequencyData[y],x=r(y);x<250?(a+=_,s++):x<4e3?(o+=_,l++):(c+=_,u++),_>d&&(d=_,p=y)}this.bass=s?a/s/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(p)),this.peakByte=d;const f=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const y=El(this.frequencyData,t);this.spectralCentroidHz+=(y-this.spectralCentroidHz)*f,this.spectralCentroid=hb(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const _=ab(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(_-this.spectralFluxAU)*f,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const y=sb(this.frequencyData);this.spectralFlatnessRatio+=(y-this.spectralFlatnessRatio)*f,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const y=ob(this.frequencyData,t);this.inharmonicity+=(y-this.inharmonicity)*f}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(lb(this.frequencyData)-this.peakAmplitude)*f:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(cb(this.timeDomainData)-this.zeroCrossingRate)*f:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(ub(this.frequencyData,t,.85)-this.spectralRolloff)*f:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const y=Rd(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(y-this.spectralSpread)*f:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const _=db(this.frequencyData,t,this.spectralCentroidHz,y);this.spectralSkewness+=(_-this.spectralSkewness)*f}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(pb(this.frequencyData,t)-this.chromagram)*f:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let g=0;for(const y of this.timeDomainData)g+=((y-128)/128)**2;if(this.amplitude=Math.sqrt(g/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let y=0,_=0;for(let x=0;x<this._freqL.length;x++)y+=this._freqL[x],_+=this._freqR[x];this.pan=(_-y)/(y+_+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const we=new Dd;we.setRuleInputUsage(Xi==null?void 0:Xi.requiredInputsByTarget);const uu=document.getElementById("status-dot"),du=document.getElementById("status-text");function vb(n,e){uu&&(uu.className=n),du&&(du.textContent=e)}vb("open","Browser mode");const pi=document.createElement("div");pi.id="camera-hud";pi.style.position="fixed";pi.style.left="8px";pi.style.bottom="8px";pi.style.zIndex="220";pi.style.display="flex";pi.style.alignItems="center";pi.style.gap="6px";const wn=document.createElement("button");wn.type="button";wn.title="Reset camera";wn.textContent="↺";wn.style.width="22px";wn.style.height="22px";wn.style.border="1px solid var(--color-border, #444)";wn.style.borderRadius="6px";wn.style.background="rgba(0,0,0,0.55)";wn.style.color="var(--color-text-muted, #bbb)";wn.style.cursor="pointer";wn.addEventListener("click",Ld);const Cn=document.createElement("button");Cn.type="button";Cn.title="Fit to visible particles";Cn.textContent="Fit";Cn.style.height="22px";Cn.style.padding="0 8px";Cn.style.border="1px solid var(--color-border, #444)";Cn.style.borderRadius="6px";Cn.style.background="rgba(0,0,0,0.55)";Cn.style.color="var(--color-text-muted, #bbb)";Cn.style.cursor="pointer";Cn.addEventListener("click",fb);const Tn=document.createElement("button");Tn.type="button";Tn.title="Clear canvas";Tn.textContent="Clean";Tn.style.height="22px";Tn.style.padding="0 8px";Tn.style.border="1px solid var(--color-border, #444)";Tn.style.borderRadius="6px";Tn.style.background="rgba(0,0,0,0.55)";Tn.style.color="var(--color-text-muted, #bbb)";Tn.style.cursor="pointer";Tn.addEventListener("click",()=>St.clear());const zn=document.createElement("div");zn.id="camera-readout";zn.style.fontFamily="var(--font-mono, monospace)";zn.style.fontSize="10px";zn.style.color="var(--color-text-muted, #bbb)";zn.style.background="rgba(0,0,0,0.35)";zn.style.padding="4px 6px";zn.style.borderRadius="4px";zn.style.pointerEvents="none";zn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";pi.append(wn,Cn,Tn,zn);let to=0,Gi=0,ls="",Fn=null,Ha=null,Ga=[],Wa=null,Gr=null,pu=0;const Si={tier:"free",maxExportResolution:Number.POSITIVE_INFINITY,canExportObj:!1,canCloudRender:!1};function Ms(n,e={}){try{window.parent&&window.parent!==window&&window.parent.postMessage({source:"seesound-engine",type:n,payload:e},"*")}catch{}}function bb(n){const e=n&&typeof n=="object"?n:{};Si.tier=String(e.tier||Si.tier)==="pro"?"pro":"free";const t=Number(e.maxExportResolution);Si.maxExportResolution=Number.isFinite(t)&&t>0?Math.floor(t):Number.POSITIVE_INFINITY,Si.canExportObj=!!e.canExportObj,Si.canCloudRender=!!e.canCloudRender}window.addEventListener("message",n=>{const e=n==null?void 0:n.data;!e||typeof e!="object"||e.source!=="seesound-platform"||e.type!=="platform:config"||bb(e.payload)});Ms("engine:ready");function cs(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function us(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function Ll(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Ud(){var e,t;if(ls)return us(ls);const n=String(((e=we==null?void 0:we.audioEl)==null?void 0:e.currentSrc)||((t=we==null?void 0:we.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return us(r)}catch{}return"audio"}async function xb(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function Hn(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}${qr}`}function xi(){return{fileName:"New Project.ssp.json",presetName:"default",params:ia(),presetLibrary:[]}}async function yb(){var p;const n=cs(Ud(),"audio"),e=cs(Ll(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(ae.canvasWidth)||wt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(ae.canvasHeight)||wt.domElement.height/Math.max(1,window.devicePixelRatio))),a=Number(Si.maxExportResolution),s=Math.max(i,r),o=Number.isFinite(a)&&a>0&&s>a?a/s:1,l=Math.max(1,Math.floor(i*o)),c=Math.max(1,Math.floor(r*o));o<1&&Ms("engine:export-blocked",{reason:"resolution_limit",requestedWidth:i,requestedHeight:r,allowedMaxRes:a});const u=document.createElement("canvas"),d=new Ju({canvas:u,antialias:!0,preserveDrawingBuffer:!0});try{const f=d.capabilities.maxTextureSize||8192,g=Math.min(l,f),v=Math.min(c,f),m=Math.max(1,Number(((p=wt.getPixelRatio)==null?void 0:p.call(wt))||window.devicePixelRatio||1)),h=Math.max(1,Math.floor(g/m)),y=Math.max(1,Math.floor(v/m));d.setPixelRatio(m),d.setSize(h,y,!1);let _=Le.clone();Le===jt||_.isOrthographicCamera?(_=Le.clone(),_.updateProjectionMatrix()):_.isPerspectiveCamera&&(_.aspect=g/Math.max(1,v),_.updateProjectionMatrix());const x=[];sa.traverse(L=>{var F;(F=L==null?void 0:L.userData)!=null&&F.excludeFromPng&&L.visible&&(x.push(L),L.visible=!1)}),d.setClearColor(St.getBackgroundColor(),1),St.setViewportHeight(d.domElement.height),d.render(sa,_);for(const L of x)L.visible=!0;const A=await new Promise(L=>u.toBlob(L,"image/png"));if(!A)throw new Error("PNG export failed (empty blob).");const T=document.createElement("a");T.href=URL.createObjectURL(A),T.download=t,document.body.appendChild(T),T.click(),T.remove(),URL.revokeObjectURL(T.href),(g!==l||v!==c)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:l,h:c},exported:{w:g,h:v},maxTextureSize:f})}finally{St.setViewportHeight(wt.domElement.height),d.dispose()}}function hu(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}function ds(n,e){n.dispatchEvent(new CustomEvent("player:recordvideo-state",{detail:{running:e},bubbles:!1}))}async function Mb(n){var a;if(!n)return{track:null,cleanup:null};try{if(typeof n.captureStream=="function"){const o=n.captureStream().getAudioTracks()[0]||null;if(o)return{track:o,cleanup:null}}}catch{}we.init(n),((a=we.ctx)==null?void 0:a.state)==="suspended"&&await we.ctx.resume();const e=we.source||we.streamSource;if(!e||!we.ctx)return{track:null,cleanup:null};const t=we.ctx.createMediaStreamDestination();return e.connect(t),{track:t.stream.getAudioTracks()[0]||null,cleanup:()=>{try{e.disconnect(t)}catch{}try{t.disconnect()}catch{}}}}async function Sb(n,e){if(Fn||!(e!=null&&e.src))return;if(typeof MediaRecorder>"u"||typeof Rr.captureStream!="function"){alert("Video recording is not supported in this browser.");return}const t=Math.max(1,Math.floor(wt.domElement.width/Math.max(1,window.devicePixelRatio))),i=Math.max(1,Math.floor(wt.domElement.height/Math.max(1,window.devicePixelRatio))),r=Number(Si.maxExportResolution);if(Number.isFinite(r)&&r>0&&Math.max(t,i)>r){Ms("engine:export-blocked",{reason:"resolution_limit",requestedWidth:t,requestedHeight:i,allowedMaxRes:r}),alert(`Free plan export limit is ${Math.floor(r)}p. Reduce canvas size or upgrade to Pro.`);return}const a=Rr.captureStream(60),s=new MediaStream;for(const p of a.getVideoTracks())s.addTrack(p);const{track:o,cleanup:l}=await Mb(e);Wa=l,o&&s.addTrack(o);const u=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(p=>{var f;return(f=MediaRecorder.isTypeSupported)==null?void 0:f.call(MediaRecorder,p)})||"",d=new MediaRecorder(s,u?{mimeType:u}:void 0);if(Ga=[],Ha=s,Fn=d,d.ondataavailable=p=>{p.data&&p.data.size>0&&Ga.push(p.data)},d.onstop=()=>{const p=Ga;Ga=[];const f=new Blob(p,{type:d.mimeType||"video/webm"});if(f.size>0){const g=cs(Ud(),"audio"),v=cs(Ll(),"preset"),m=document.createElement("a");m.href=URL.createObjectURL(f),m.download=`${g} - ${v}.webm`,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL(m.href)}if(Ha)for(const g of Ha.getTracks())try{g.stop()}catch{}if(Ha=null,typeof Wa=="function")try{Wa()}catch{}Wa=null,Gr&&(e.removeEventListener("ended",Gr),Gr=null),Fn=null,ds(n,!1)},e.paused)try{await e.play()}catch{}Gr=()=>{Fn&&Fn.state!=="inactive"&&Fn.stop()},e.addEventListener("ended",Gr,{once:!0}),d.start(200),ds(n,!0)}function Eb(n){if(Fn)try{Fn.state!=="inactive"&&Fn.stop()}catch{Fn=null,ds(n,!1)}}async function wb(n,e){var l,c,u,d,p,f,g,v,m;if(!e||!(e.duration>0)&&(await new Promise(h=>{if(e.duration>0){h();return}const y=()=>{_(),h()},_=()=>{e.removeEventListener("loadedmetadata",y),e.removeEventListener("canplay",y),e.removeEventListener("error",y)};e.addEventListener("loadedmetadata",y,{once:!0}),e.addEventListener("canplay",y,{once:!0}),e.addEventListener("error",y,{once:!0})}),!(e.duration>0)))return;const t=!e.paused&&!e.ended;t&&e.pause();const i=++Gi,r=await xb(e),a=r?URL.createObjectURL(r):e.currentSrc||e.src;if(!a)return;const s=new Audio;s.crossOrigin="anonymous",s.src=a,s.preload="auto",s.currentTime=0,s.muted=!0,s.volume=0,typeof s.preservesPitch=="boolean"&&(s.preservesPitch=!1),s.playbackRate=16,s.style.display="none",document.body.appendChild(s);const o=new Dd;o.setRuleInputUsage((l=St.getRuleCompileState())==null?void 0:l.requiredInputsByTarget),hu(n,!0);try{St.clear(),await new Promise((T,L)=>{const F=()=>{b(),T()},w=()=>{b(),L(new Error("Paint-all audio metadata failed to load."))},b=()=>{s.removeEventListener("loadedmetadata",F),s.removeEventListener("canplay",F),s.removeEventListener("error",w)};s.addEventListener("loadedmetadata",F,{once:!0}),s.addEventListener("canplay",F,{once:!0}),s.addEventListener("error",w,{once:!0}),s.load()}),o.init(s),((c=o.ctx)==null?void 0:c.state)==="suspended"&&await o.ctx.resume(),await s.play();const h=performance.now(),y=3*60*1e3;let _=-1,x=0,A=0;for(;i===Gi&&!s.ended;){if(performance.now()-h>y){console.warn("[PaintAll] Aborting due to timeout.");break}await new Promise(D=>requestAnimationFrame(D)),o.update();const T=wt.domElement.width/window.devicePixelRatio,L=wt.domElement.height/window.devicePixelRatio,F=Ko(),w={...ae,persistMode:1,cameraState:{x:Le.position.x,y:Le.position.y,z:Le.position.z,zoom:Le.zoom},cameraCanvasWidthUnits:F.w,cameraCanvasHeightUnits:F.h};St.update(o,w,T,L),Fd(St.getCameraOutput());const b=Number(s.currentTime)||0;if(b>_+1e-4?(_=b,x=0):x++,s.paused&&!s.ended)try{await s.play()}catch{break}if(x>120){const D=Number(s.duration)||0;if(D>0&&b>=Math.max(0,D-.25)){s.currentTime=D;break}if(D>0&&A<12){const X=Math.max(.15,D/240);s.currentTime=Math.min(D,b+X),A++,x=0;continue}console.warn("[PaintAll] Aborting due to persistent playback stall.");break}}}finally{s.pause(),s.src="",s.remove(),r&&URL.revokeObjectURL(a);try{(u=o.source)==null||u.disconnect()}catch{}try{(d=o.streamSource)==null||d.disconnect()}catch{}try{(p=o.splitter)==null||p.disconnect()}catch{}try{(f=o.analyserL)==null||f.disconnect()}catch{}try{(g=o.analyserR)==null||g.disconnect()}catch{}try{(v=o.analyser)==null||v.disconnect()}catch{}try{await((m=o.ctx)==null?void 0:m.close())}catch{}if(hu(n,!1),t&&i===Gi)try{await e.play()}catch{}}}function Ko(){let n=0,e=0;if(Le.isOrthographicCamera)n=Math.abs((Le.right-Le.left)/Math.max(.01,Le.zoom)),e=Math.abs((Le.top-Le.bottom)/Math.max(.01,Le.zoom));else{const r=Math.max(.001,Le.position.distanceTo(zt)),a=ol.degToRad(Le.fov);e=2*Math.tan(a*.5)*r/Math.max(.01,Le.zoom),n=e*Le.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:zt.x-t,right:zt.x+t,top:zt.y+i,bottom:zt.y-i}}function Od(){var t,i,r,a,s,o,l,c,u,d;if(requestAnimationFrame(Od),to++,to%120===0){const p=Number(((t=St==null?void 0:St.getApproxFps)==null?void 0:t.call(St))||0);if(p>0&&p<24){const f=performance.now();f-pu>15e3&&(pu=f,Ms("engine:performance-drop",{fps:p,canCloudRender:!!Si.canCloudRender}))}}we.update();const n=!!(we.audioEl&&!we.audioEl.paused&&!we.audioEl.ended);if(n&&!we.analyser&&we.audioEl&&we.init(we.audioEl),n){const p=wt.domElement.width/window.devicePixelRatio,f=wt.domElement.height/window.devicePixelRatio,g=Ko(),v={...ae,cameraState:{x:Le.position.x,y:Le.position.y,z:Le.position.z,zoom:Le.zoom},cameraCanvasWidthUnits:g.w,cameraCanvasHeightUnits:g.h};St.update(we,v,p,f),Fd(St.getCameraOutput());const m=((i=we.getBinMagnitude)==null?void 0:i.call(we))||null,h=((r=we.getBinFlux)==null?void 0:r.call(we))||null,y=((a=we.getBinPhaseDeviation)==null?void 0:a.call(we))||null,_=((s=we.getBinPhase)==null?void 0:s.call(we))||null,x=((o=we.getBinAttackTime)==null?void 0:o.call(we))||null,A=((l=we.getBinEnvelope)==null?void 0:l.call(we))||null,T=we.peakFreq??0,L=(c=we.ctx)!=null&&c.sampleRate?we.ctx.sampleRate*.5:22050,F=Vn(we.rmsDbfs,ae.globalRmsNormMin??-60,ae.globalRmsNormMax??0),w=Vn(we.spectralCentroidHz,ae.spectralCentroidNormMin??150,ae.spectralCentroidNormMax??8e3),b=Vn(we.spectralFluxAU,ae.globalSpectralFluxNormMin??0,ae.globalSpectralFluxNormMax??100),D=Vn(we.spectralFlatnessRatio,ae.spectralFlatnessNormMin??0,ae.spectralFlatnessNormMax??1),X=(P,H)=>{if(!P||!P.length)return 0;let I=0;for(let ie=0;ie<P.length;ie++)I+=H(P[ie]);return I/P.length},j=X(m,P=>Vn(P,ae.binMagnitudeNormMin??-70,ae.binMagnitudeNormMax??0)),J=X(h,P=>Vn(P,ae.binFluxNormMin??0,ae.binFluxNormMax??.5)),Z=X(y,P=>Vn(P,ae.binPhaseDeviationNormMin??0,ae.binPhaseDeviationNormMax??Math.PI)),K=X(_,P=>Vn(P,-Math.PI,Math.PI)),ce=X(x,P=>Vn(P,ae.binAttackTimeNormMin??5,ae.binAttackTimeNormMax??500)),N=X(A,P=>Vn(P,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:F,globalRmsEnergy:F,binEnergy:j,frequencyHz:T,normFreq:Math.max(0,Math.min(1,T/Math.max(1e-6,L))),bass:we.bass??0,mid:we.mid??0,high:we.high??0,peakFreq:T,pan:we.pan??0,spectralCentroid:w,spectralFlux:b,spectralFlatness:D,inharmonicity:we.inharmonicity??0,peakAmplitude:we.peakAmplitude??0,zeroCrossingRate:we.zeroCrossingRate??0,spectralRolloff:we.spectralRolloff??0,spectralSpread:we.spectralSpread??0,spectralSkewness:we.spectralSkewness??0,chromagram:we.chromagram??0,binMagnitude:j,binFreq:T,binPhase:K,binFlux:J,binPhaseDeviation:Z,binAttackTime:ce,binEnvelope:N,binEnvelopeState:N,binRMSEnergy:F,time:((u=we.audioEl)==null?void 0:u.currentTime)??0,deltaTime:1/60,canvasWidthPx:p,canvasHeightPx:f,canvasWidthUnits:g.w,canvasHeightUnits:g.h,audioLengthSec:((d=we.audioEl)==null?void 0:d.duration)??0}}}))}const e=St.getBackgroundColor();if(wt.setClearColor(e,1),St.setViewportHeight(wt.domElement.height),wt.render(sa,Le),to%6===0){const p=(Le.rotation.x*180/Math.PI).toFixed(2),f=(Le.rotation.y*180/Math.PI).toFixed(2),g=(Le.rotation.z*180/Math.PI).toFixed(2),v=Le.position.x.toFixed(2),m=Le.position.y.toFixed(2),h=Le.position.z.toFixed(2),y=Ko(),_=y.w,x=y.h;zn.textContent=`cam p(${v},${m},${h}) r(${p},${f},${g}) pts ${St.getVisibleCount()} fft ${we.peakByte} amp ${we.amplitude.toFixed(3)} sc ${we.spectralCentroid.toFixed(3)} sf ${we.spectralFlux.toFixed(3)} sfl ${we.spectralFlatness.toFixed(3)} inh ${we.inharmonicity.toFixed(3)} canv ${_.toFixed(2)} × ${x.toFixed(2)} origin ${wl}u ${gr?"on":"off"}`}}Od();{const n=document.getElementById("audio-player"),{audioEl:e,loadFile:t}=tb(n);we.audioEl=e;let i=null;e.addEventListener("play",async()=>{var N;we.init(e),((N=we.ctx)==null?void 0:N.state)==="suspended"&&await we.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var N;Gi++,we.init(e),((N=we.ctx)==null?void 0:N.state)==="suspended"&&await we.ctx.resume()}),n.addEventListener("player:play",()=>{Gi++}),n.addEventListener("player:pause",()=>{Gi++}),n.addEventListener("player:stop",()=>{Gi++}),n.addEventListener("player:savepng",async()=>{await yb()}),n.addEventListener("player:paintall",async()=>{try{await wb(n,e)}catch(N){console.warn("[PaintAll] failed:",N),alert("Paint-all failed before completion. Check console for details.")}}),n.addEventListener("player:recordvideo-toggle",async()=>{if(Fn){Eb(n);return}try{await Sb(n,e)}catch(N){console.warn("[Recorder] start failed:",N),alert("Failed to start recording."),ds(n,!1)}}),n.addEventListener("player:playbackrate",N=>{var H;const P=Number((H=N==null?void 0:N.detail)==null?void 0:H.rate);Number.isFinite(P)&&(e.playbackRate=Math.max(.1,Math.min(16,P)))}),n.addEventListener("player:fileloaded",N=>{var H;const P=(H=N==null?void 0:N.detail)==null?void 0:H.file;i=P instanceof File?P:null,ls=(i==null?void 0:i.name)||"",i&&g(i),w()});let r=null,a="",s=null,o=!1,l=null;const c="seesound_project_draft_v1",u="seesound_local_audio_v1",d="files",p="last-audio",f=()=>new Promise((N,P)=>{try{const H=indexedDB.open(u,1);H.onupgradeneeded=()=>{const I=H.result;I.objectStoreNames.contains(d)||I.createObjectStore(d)},H.onsuccess=()=>N(H.result),H.onerror=()=>P(H.error)}catch(H){P(H)}}),g=async N=>{if(!(N instanceof File))return;const P=await f();await new Promise((H,I)=>{const ie=P.transaction(d,"readwrite");ie.objectStore(d).put({blob:N,name:N.name,type:N.type||"audio/*",updatedAt:Date.now()},p),ie.oncomplete=()=>H(),ie.onerror=()=>I(ie.error)}),P.close()},v=async()=>{const N=await f(),P=await new Promise((H,I)=>{const te=N.transaction(d,"readonly").objectStore(d).get(p);te.onsuccess=()=>H(te.result||null),te.onerror=()=>I(te.error)});return N.close(),!P||!(P.blob instanceof Blob)?null:new File([P.blob],String(P.name||"restored-audio.wav"),{type:String(P.type||"audio/*"),lastModified:Number(P.updatedAt||Date.now())})},m=()=>{const N=xi();return lu({params:N.params,presetName:N.presetName,presetLibrary:N.presetLibrary,projectName:us(N.fileName)})},h=()=>{window.dispatchEvent(new CustomEvent("seesound:project-file-state",{detail:{fileName:String(a||"").trim()}}))},y=async()=>{const N=await Xo(),P=[];for(const H of N){const I=await dd(H);!(I!=null&&I.params)||typeof I.params!="object"||P.push({name:String(H||""),params:I.params})}return P},_=async()=>{if((await Xo()).filter(I=>!String(I||"").startsWith("rule__")).length>0)return;const H=xi();if(H.presetLibrary.length>0){await x(H.presetLibrary);return}await as("default",ia()),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))},x=async N=>{if(Array.isArray(N)){for(const P of N){const H=String((P==null?void 0:P.name)||"").trim(),I=P==null?void 0:P.params;!H||!I||typeof I!="object"||await as(H,I)}window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}},A=async N=>{await x(N)},T=async(N,P)=>{const H=await N.createWritable();await H.write(JSON.stringify(P,null,2)),await H.close()},L=async()=>{const N=ia(),P=await y(),H=Ll();return lu({params:N,presetName:H,presetLibrary:P,projectName:us(a||Hn())})},F=async()=>{if(!o)try{const P={payload:await L(),fileName:String(a||"").trim(),hasBoundFile:!!r,updatedAt:Date.now(),hasAudio:i instanceof File};localStorage.setItem(c,JSON.stringify(P))}catch(N){console.warn("[Project] local draft save failed:",N)}},w=()=>{o||(l&&clearTimeout(l),l=setTimeout(async()=>{l=null,await F()},500))},b=async()=>{try{const N=localStorage.getItem(c);if(!N)return!1;const P=JSON.parse(N),H=P==null?void 0:P.payload;if(!H||typeof H!="object")return!1;if(r=null,a=String((P==null?void 0:P.fileName)||xi().fileName||"").trim(),h(),await j(H),P!=null&&P.hasAudio){const I=await v();I&&(t(I,I.name),i=I,ls=I.name||"")}return!0}catch(N){return console.warn("[Project] local draft restore failed:",N),!1}},D=async({forceDownload:N=!1}={})=>{try{const P=await L();if(!N&&r){await T(r,P),window.dispatchEvent(new CustomEvent("seesound:project-autosaved",{detail:{fileName:a||Hn()}})),h(),w();return}rb(P,Hn()),w()}catch(P){console.warn("[Project] save failed:",P)}},X=()=>{!r||o||(s&&clearTimeout(s),s=setTimeout(async()=>{s=null,await D({forceDownload:!1})},450))},j=async N=>{try{o=!0,N.params&&typeof N.params=="object"&&$t(N.params),Array.isArray(N.presetLibrary)&&await A(N.presetLibrary),await _(),window.dispatchEvent(new CustomEvent("seesound:project-loaded",{detail:{fileName:a,presetName:String((N==null?void 0:N.presetName)||"")}}))}catch(P){console.warn("[Project] load failed:",P)}finally{o=!1,w()}},J=async()=>{if(typeof window.showOpenFilePicker!="function")return!1;try{const[N]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Project",accept:{"application/json":[qr,".json"]}}]});if(!N)return!1;const P=await N.getFile(),H=await P.text(),I=ib(H);return r=N,a=String(P.name||"").trim(),await j(I),h(),!0}catch{return!1}},Z=async(N="",P=!0)=>{if(typeof window.showSaveFilePicker!="function"){if(P){const H=xi();$t(H.params),await A(H.presetLibrary)}return r=null,a=String(N||xi().fileName).trim()||Hn(),h(),w(),!0}try{const H=String(N||"").trim()||Hn(),I=await window.showSaveFilePicker({suggestedName:H,types:[{description:"SEESOUND Project",accept:{"application/json":[qr,".json"]}}]});if(!I)return!1;if(P){const ie=xi();$t(ie.params),await A(ie.presetLibrary)}return r=I,a=String(I.name||H).trim(),await D({forceDownload:!1}),h(),w(),!0}catch{return!1}},K=async(N="")=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const P=String(N||"").trim()||Hn(),H=await window.showSaveFilePicker({suggestedName:P,types:[{description:"SEESOUND Project",accept:{"application/json":[qr,".json"]}}]});return H?(r=H,a=String(H.name||P).trim(),await D({forceDownload:!1}),h(),!0):!1}catch{return!1}};n.addEventListener("player:saveproject",async()=>{if(r){await D({forceDownload:!1});return}await K(Hn())||await D({forceDownload:!0})}),n.addEventListener("player:loadproject",async N=>{var P;await j(((P=N==null?void 0:N.detail)==null?void 0:P.payload)||{})}),window.addEventListener("seesound:project-save-request",async()=>{if(r){await D({forceDownload:!1});return}await K(Hn())||await D({forceDownload:!0})}),window.addEventListener("seesound:project-save-as-request",async()=>{const N=a?`${a}${qr}`:Hn();await K(N)||await D({forceDownload:!0})}),window.addEventListener("seesound:project-load-request",async N=>{const P=(N==null?void 0:N.detail)||{},H=String(P.fileName||"").trim();H&&(a=H,h()),await j(P.payload||{}),!r&&typeof window.showSaveFilePicker=="function"&&window.confirm("Attach this project to an autosave file now?")&&await Z(String(P.fileName||Hn()),!1)}),window.addEventListener("seesound:project-open-request",async()=>{await J()}),window.addEventListener("seesound:project-new-request",async()=>{await Z(xi().fileName,!0)}),window.addEventListener("seesound:preset-library-changed",()=>{X(),w()}),_l((N,P)=>{!P||P==="*"||o||(X(),w())});const ce=async()=>{if(await b())return;a=xi().fileName,h(),await j(m())};h(),ce()}let Ei=null,Jo=!1;Ei=nb({wrapper:aa,column:qn,onResize(n,e){if(Pl(n,e),Fl(n,e),!Jo){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(ae.canvasWidth)!==t||Number(ae.canvasHeight)!==i)&&$t({canvasWidth:t,canvasHeight:i})}}});function Fl(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(ae.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Cb(n){const e=n instanceof Element?n:null;return e?!!e.closest('input,textarea,select,[contenteditable="true"]'):!1}window.addEventListener("keydown",n=>{if(n.defaultPrevented||!(n.ctrlKey||n.metaKey)||n.altKey||Cb(n.target))return;const e=String(n.key||"").toLowerCase();if(e==="z"&&!n.shiftKey){if(!q_())return;n.preventDefault(),n.stopPropagation();return}if(e==="y"||e==="z"&&n.shiftKey){if(!j_())return;n.preventDefault(),n.stopPropagation()}});function kd(){const e=Math.max(5,Math.min(400,Math.floor(Number(ae.canvasScale)||100)))/100;aa.style.transformOrigin="center center",aa.style.transform=`scale(${e})`}function Bd(){var i;const n=((i=Ei==null?void 0:Ei.getSize)==null?void 0:i.call(Ei))||{},e=Math.max(160,Math.floor(n.w||aa.clientWidth||qn.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||aa.clientHeight||qn.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function zd(){if(!Ei)return;const n=Bd(),e=Math.max(160,Math.floor(Number(ae.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(ae.canvasHeight)||n.h));if(e===n.w&&t===n.h){Fl(n.w,n.h);return}Jo=!0,Ei.setSize(e,t),Jo=!1}zd();kd();{const n=Bd();(Number(ae.canvasWidth)!==n.w||Number(ae.canvasHeight)!==n.h)&&$t({canvasWidth:n.w,canvasHeight:n.h}),Fl(n.w,n.h)}_l((n,e)=>{if(e==="cameraProjection"&&Al(),(e==="cameraProjection"||e==="cameraAxoPreset")&&Rl(),(e==="canvasWidth"||e==="canvasHeight")&&zd(),e==="canvasScale"&&kd(),e==="maxParticles"){const t=Math.max(4096,Math.floor(ae.maxParticles||4096));ae.maxParticles!==t&&(ae.maxParticles=t),St.setMaxParticles(t)}if(e==="fftSize"){const t=Zo(ae.fftSize);if(ae.fftSize!==t){set("fftSize",t);return}we.setFftSize(t)}if(e==="ruleBlocks"){const t=St.onRulesChanged(ae.ruleBlocks??[]);we.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),Nl(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});E1(document.getElementById("control-panel"));var gu,_u;Nl((_u=(gu=St.getRuleCompileState)==null?void 0:gu.call(St))==null?void 0:_u.requiredInputsByTarget);const fu=Array.isArray(ae.ruleBlocks)?ae.ruleBlocks.length:0,ti=St.getRuleCompileState(),mu=(ti==null?void 0:ti.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${rs} compile=${mu} rules=${fu}`,{schemaVersion:rs,compileStatus:mu,compileTimeMs:(ti==null?void 0:ti.compileTimeMs)??0,compileError:(ti==null?void 0:ti.compileError)??null,ruleCount:fu,debug:k_});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
