(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="171",eu=0,wo=1,tu=2,Vl=1,nu=2,Cn=3,ti=0,Gt=1,Ln=2,Zn=0,Kn=1,ki=2,Ro=3,Co=4,iu=5,mi=100,ru=101,su=102,au=103,ou=104,lu=200,cu=201,uu=202,du=203,ga=204,_a=205,hu=206,fu=207,pu=208,mu=209,gu=210,_u=211,vu=212,xu=213,Mu=214,va=0,xa=1,Ma=2,Xi=3,ya=4,Sa=5,ba=6,Ea=7,Wl=0,yu=1,Su=2,Jn=0,bu=1,Eu=2,Tu=3,Au=4,wu=5,Ru=6,Cu=7,Xl=300,qi=301,$i=302,Ta=303,Aa=304,Es=306,wa=1e3,_i=1001,Ra=1002,mn=1003,Pu=1004,Rr=1005,yn=1006,Ns=1007,vi=1008,Bn=1009,ql=1010,$l=1011,gr=1012,oo=1013,xi=1014,Dn=1015,Sr=1016,lo=1017,co=1018,Yi=1020,Yl=35902,jl=1021,Zl=1022,pn=1023,Kl=1024,Jl=1025,Vi=1026,ji=1027,Ql=1028,uo=1029,ec=1030,ho=1031,fo=1033,ss=33776,as=33777,os=33778,ls=33779,Ca=35840,Pa=35841,La=35842,Da=35843,Ia=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,qa=37818,$a=37819,Ya=37820,ja=37821,cs=36492,Za=36494,Ka=36495,tc=36283,Ja=36284,Qa=36285,eo=36286,Lu=3200,Du=3201,Iu=0,Uu=1,Yn="",rn="srgb",Zi="srgb-linear",ps="linear",rt="srgb",Si=7680,Po=519,Nu=512,Fu=513,Ou=514,nc=515,Bu=516,zu=517,ku=518,Hu=519,Lo=35044,Gu=35048,Do="300 es",In=2e3,ms=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const hr=Math.PI/180,_r=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function po(n,e){return(n%e+e)%e}function Vu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Wu(n,e,t){return n!==e?(t-n)/(e-n):0}function fr(n,e,t){return(1-t)*n+t*e}function Xu(n,e,t,i){return fr(n,e,1-Math.exp(-t*i))}function qu(n,e=1){return e-Math.abs(po(n,e*2)-e)}function $u(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ju(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zu(n,e){return n+Math.random()*(e-n)}function Ku(n){return n*(.5-Math.random())}function Ju(n){n!==void 0&&(Io=n);let e=Io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(n){return n*hr}function ed(n){return n*_r}function td(n){return(n&n-1)===0&&n!==0}function nd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function id(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rd(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mo={DEG2RAD:hr,RAD2DEG:_r,generateUUID:er,clamp:Ye,euclideanModulo:po,mapLinear:Vu,inverseLerp:Wu,lerp:fr,damp:Xu,pingpong:qu,smoothstep:$u,smootherstep:Yu,randInt:ju,randFloat:Zu,randFloatSpread:Ku,seededRandom:Ju,degToRad:Qu,radToDeg:ed,isPowerOfTwo:td,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:rd,normalize:Nt,denormalize:Bi};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],g=r[0],p=r[3],d=r[6],T=r[1],A=r[4],y=r[7],L=r[2],R=r[5],P=r[8];return s[0]=a*g+o*T+l*L,s[3]=a*p+o*A+l*R,s[6]=a*d+o*y+l*P,s[1]=c*g+u*T+f*L,s[4]=c*p+u*A+f*R,s[7]=c*d+u*y+f*P,s[2]=h*g+m*T+_*L,s[5]=h*p+m*A+_*R,s[8]=h*d+m*y+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fs.makeScale(e,t)),this}rotate(e){return this.premultiply(Fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new We;function ic(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sd(){const n=gs("canvas");return n.style.display="block",n}const Uo={};function zi(n){n in Uo||(Uo[n]=!0,console.warn(n))}function ad(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function od(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ld(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const No=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){const n={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?ps:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zi]:{primaries:e,whitePoint:i,transfer:ps,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:No,fromXYZ:Fo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const Ke=cd();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bi;class ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=gs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nn(t[i]/255)*255):t[i]=Nn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Os(r[a].image)):s.push(Os(r[a]))}else s=Os(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ud.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class Vt extends Qi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=_i,r=_i,s=yn,a=vi,o=pn,l=Bn,c=Vt.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=er(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Xl;Vt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(m+1)/2,L=(d+1)/2,R=(u+h)/4,P=(f+g)/4,U=(_+p)/4;return A>y&&A>L?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=P/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=U/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(f-g)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends fd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sc extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==m||u!==_){let p=1-o;const d=l*h+c*m+u*_+f*g,T=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const L=Math.sqrt(A),R=Math.atan2(L,d*T);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}const y=o*T;if(l=l*p+h*y,c=c*p+m*y,u=u*p+_*y,f=f*p+g*y,p===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new k,Oo=new br;class Er{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Pr.subVectors(this.max,sr),Ei.subVectors(e.a,sr),Ti.subVectors(e.b,sr),Ai.subVectors(e.c,sr),Gn.subVectors(Ti,Ei),Vn.subVectors(Ai,Ti),ai.subVectors(Ei,Ai);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!zs(t,Ei,Ti,Ai,Pr)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,Ei,Ti,Ai,Pr))?!1:(Lr.crossVectors(Gn,Vn),t=[Lr.x,Lr.y,Lr.z],zs(t,Ei,Ti,Ai,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new k,new k,new k,new k,new k,new k,new k,new k],un=new k,Cr=new Er,Ei=new k,Ti=new k,Ai=new k,Gn=new k,Vn=new k,ai=new k,sr=new k,Pr=new k,Lr=new k,oi=new k;function zs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const md=new Er,ar=new k,ks=new k;class Tr{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):md.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(ks)),this.expandByPoint(ar.copy(e.center).sub(ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new k,Hs=new k,Dr=new k,Wn=new k,Gs=new k,Ir=new k,Vs=new k;class go{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hs.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Hs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Wn.dot(this.direction),l=-Wn.dot(Dr),c=Wn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hs).addScaledVector(Dr,h),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){Gs.subVectors(t,e),Ir.subVectors(i,e),Vs.crossVectors(Gs,Ir);let a=this.direction.dot(Vs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(Ir.crossVectors(Wn,Ir));if(l<0)return null;const c=o*this.direction.dot(Gs.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(Vs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,_,g,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,g,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,g=c*f;t[0]=h+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Xn.crossVectors(i,Yt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Xn.crossVectors(i,Yt)),Xn.normalize(),Ur.crossVectors(Yt,Xn),r[0]=Xn.x,r[4]=Ur.x,r[8]=Yt.x,r[1]=Xn.y,r[5]=Ur.y,r[9]=Yt.y,r[2]=Xn.z,r[6]=Ur.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],T=i[3],A=i[7],y=i[11],L=i[15],R=r[0],P=r[4],U=r[8],b=r[12],x=r[1],I=r[5],Y=r[9],X=r[13],H=r[2],j=r[6],Z=r[10],se=r[14],q=r[3],ae=r[7],ce=r[11],ue=r[15];return s[0]=a*R+o*x+l*H+c*q,s[4]=a*P+o*I+l*j+c*ae,s[8]=a*U+o*Y+l*Z+c*ce,s[12]=a*b+o*X+l*se+c*ue,s[1]=u*R+f*x+h*H+m*q,s[5]=u*P+f*I+h*j+m*ae,s[9]=u*U+f*Y+h*Z+m*ce,s[13]=u*b+f*X+h*se+m*ue,s[2]=_*R+g*x+p*H+d*q,s[6]=_*P+g*I+p*j+d*ae,s[10]=_*U+g*Y+p*Z+d*ce,s[14]=_*b+g*X+p*se+d*ue,s[3]=T*R+A*x+y*H+L*q,s[7]=T*P+A*I+y*j+L*ae,s[11]=T*U+A*Y+y*Z+L*ce,s[15]=T*b+A*X+y*se+L*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+g*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],T=f*p*c-g*h*c+g*l*m-o*p*m-f*l*d+o*h*d,A=_*h*c-u*p*c-_*l*m+a*p*m+u*l*d-a*h*d,y=u*g*c-_*f*c+_*o*m-a*g*m-u*o*d+a*f*d,L=_*f*l-u*g*l-_*o*h+a*g*h+u*o*p-a*f*p,R=t*T+i*A+r*y+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(g*h*s-f*p*s-g*r*m+i*p*m+f*r*d-i*h*d)*P,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*d+i*l*d)*P,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*P,e[4]=A*P,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*d+t*h*d)*P,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*d-t*l*d)*P,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*P,e[8]=y*P,e[9]=(_*f*s-u*g*s-_*i*m+t*g*m+u*i*d-t*f*d)*P,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*d+t*o*d)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=L*P,e[13]=(u*g*r-_*f*r+_*i*h-t*g*h-u*i*p+t*f*p)*P,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,g=a*u,p=a*f,d=o*f,T=l*c,A=l*u,y=l*f,L=i.x,R=i.y,P=i.z;return r[0]=(1-(g+d))*L,r[1]=(m+y)*L,r[2]=(_-A)*L,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+d))*R,r[6]=(p+T)*R,r[7]=0,r[8]=(_+A)*P,r[9]=(p-T)*P,r[10]=(1-(h+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);const c=1/s,u=1/a,f=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,t.setFromRotationMatrix(dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=In){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(o===In)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ms)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=In){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,m=(i+r)*u;let _,g;if(o===In)_=(a+s)*f,g=-2*f;else if(o===ms)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new k,dn=new dt,gd=new k(0,0,0),_d=new k(1,1,1),Xn=new k,Ur=new k,Yt=new k,Bo=new dt,zo=new br;class zn{constructor(e=0,t=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const ko=new k,Ri=new br,An=new dt,Nr=new k,or=new k,xd=new k,Md=new br,Ho=new k(1,0,0),Go=new k(0,1,0),Vo=new k(0,0,1),Wo={type:"added"},yd={type:"removed"},Ci={type:"childadded",child:null},Ws={type:"childremoved",child:null};class Bt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new k,t=new zn,i=new br,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Go,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Go,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nr.copy(e):Nr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(or,Nr,this.up):An.lookAt(Nr,or,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(An),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wo),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wo),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new k(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new k,wn=new k,Xs=new k,Rn=new k,Pi=new k,Li=new k,Xo=new k,qs=new k,$s=new k,Ys=new k,js=new ft,Zs=new ft,Ks=new ft;class fn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),wn.subVectors(i,t),Xs.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(wn),l=hn.dot(Xs),c=wn.dot(wn),u=wn.dot(Xs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return js.setScalar(0),Zs.setScalar(0),Ks.setScalar(0),js.fromBufferAttribute(e,t),Zs.fromBufferAttribute(e,i),Ks.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(js,s.x),a.addScaledVector(Zs,s.y),a.addScaledVector(Ks,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),wn.subVectors(e,t),hn.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),hn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Li.subVectors(s,i),qs.subVectors(e,i);const l=Pi.dot(qs),c=Li.dot(qs);if(l<=0&&c<=0)return t.copy(i);$s.subVectors(e,r);const u=Pi.dot($s),f=Li.dot($s);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Pi,a);Ys.subVectors(e,s);const m=Pi.dot(Ys),_=Li.dot(Ys);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Li,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Xo.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(Xo,o);const d=1/(p+g+h);return a=g*d,o=h*d,t.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Js(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=po(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Js(a,s,e+1/3),this.g=Js(a,s,e),this.b=Js(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=oc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ke.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Ye(Ct.r*255,0,255))*65536+Math.round(Ye(Ct.g*255,0,255))*256+Math.round(Ye(Ct.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=rn){Ke.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Fr);const i=fr(qn.h,Fr.h,t),r=fr(qn.s,Fr.s,t),s=fr(qn.l,Fr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Je;Je.NAMES=oc;let Sd=0;class tr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Kn,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ga&&(i.blendSrc=this.blendSrc),this.blendDst!==_a&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lc extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new k,Or=new st;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lo,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class cc extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uc extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bd=0;const nn=new dt,Qs=new Bt,Di=new k,jt=new Er,lr=new Er,bt=new k;class _n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?uc:cc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(jt.min,lr.min),jt.expandByPoint(bt),bt.addVectors(jt.max,lr.max),jt.expandByPoint(bt)):(jt.expandByPoint(lr.min),jt.expandByPoint(lr.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(e,c),bt.add(Di)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new k,l[U]=new k;const c=new k,u=new k,f=new k,h=new st,m=new st,_=new st,g=new k,p=new k;function d(U,b,x){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,U),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,x),u.sub(c),f.sub(c),m.sub(h),_.sub(h);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(I),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(I),o[U].add(g),o[b].add(g),o[x].add(g),l[U].add(p),l[b].add(p),l[x].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,b=T.length;U<b;++U){const x=T[U],I=x.start,Y=x.count;for(let X=I,H=I+Y;X<H;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const A=new k,y=new k,L=new k,R=new k;function P(U){L.fromBufferAttribute(r,U),R.copy(L);const b=o[U];A.copy(b),A.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(R,b);const I=y.dot(l[U])<0?-1:1;a.setXYZW(U,A.x,A.y,A.z,I)}for(let U=0,b=T.length;U<b;++U){const x=T[U],I=x.start,Y=x.count;for(let X=I,H=I+Y;X<H;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new Ot(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new dt,li=new go,Br=new Tr,$o=new k,zr=new k,kr=new k,Hr=new k,ea=new k,Gr=new k,Yo=new k,Vr=new k;class Un extends Bt{constructor(e=new _n,t=new lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ea.fromBufferAttribute(f,e),a?Gr.addScaledVector(ea,u):Gr.addScaledVector(ea.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(Br.containsPoint(li.origin)===!1&&(li.intersectSphere(Br,$o)===null||li.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(qo.copy(s).invert(),li.copy(e.ray).applyMatrix4(qo),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],d=a[p.materialIndex],T=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,L=A;y<L;y+=3){const R=o.getX(y),P=o.getX(y+1),U=o.getX(y+2);r=Wr(this,d,e,i,c,u,f,R,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const T=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);r=Wr(this,a,e,i,c,u,f,T,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],d=a[p.materialIndex],T=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=T,L=A;y<L;y+=3){const R=y,P=y+1,U=y+2;r=Wr(this,d,e,i,c,u,f,R,P,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const T=p,A=p+1,y=p+2;r=Wr(this,a,e,i,c,u,f,T,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ed(n,e,t,i,r,s,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ti,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:n}}function Wr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,zr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Hr);const u=Ed(n,e,t,i,zr,kr,Hr,Yo);if(u){const f=new k;fn.getBarycoord(Yo,zr,kr,Hr,f),r&&(u.uv=fn.getInterpolatedAttribute(r,o,l,c,f,new st)),s&&(u.uv1=fn.getInterpolatedAttribute(s,o,l,c,f,new st)),a&&(u.normal=fn.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};fn.getNormal(zr,kr,Hr,h.normal),u.face=h,u.barycoord=f}return u}class Ar extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function _(g,p,d,T,A,y,L,R,P,U,b){const x=y/P,I=L/U,Y=y/2,X=L/2,H=R/2,j=P+1,Z=U+1;let se=0,q=0;const ae=new k;for(let ce=0;ce<Z;ce++){const ue=ce*I-X;for(let Fe=0;Fe<j;Fe++){const qe=Fe*x-Y;ae[g]=qe*T,ae[p]=ue*A,ae[d]=H,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[p]=0,ae[d]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(Fe/P),f.push(1-ce/U),se+=1}}for(let ce=0;ce<U;ce++)for(let ue=0;ue<P;ue++){const Fe=h+ue+j*ce,qe=h+ue+j*(ce+1),ee=h+(ue+1)+j*(ce+1),le=h+(ue+1)+j*ce;l.push(Fe,qe,le),l.push(qe,ee,le),q+=6}o.addGroup(m,q,b),m+=q,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Ki(n[t]);for(const r in i)e[r]=i[r]}return e}function Td(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Ad={clone:Ki,merge:Ft};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hc extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new k,jo=new st,Zo=new st;class sn extends hc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,jo,Zo),t.subVectors(Zo,jo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ui=1;class Cd extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Ii,Ui,e,t);r.layers=this.layers,this.add(r);const s=new sn(Ii,Ui,e,t);s.layers=this.layers,this.add(s);const a=new sn(Ii,Ui,e,t);a.layers=this.layers,this.add(a);const o=new sn(Ii,Ui,e,t);o.layers=this.layers,this.add(o);const l=new sn(Ii,Ui,e,t);l.layers=this.layers,this.add(l);const c=new sn(Ii,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fc extends Vt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pd extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Zn});s.uniforms.tEquirect.value=t;const a=new Un(r,s),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=yn),new Cd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ld extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ta=new k,Dd=new k,Id=new We;class fi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ta.subVectors(i,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ta),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Id.getNormalMatrix(e),r=this.coplanarPoint(ta).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Tr,Xr=new k;class pc{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],_=r[9],g=r[10],p=r[11],d=r[12],T=r[13],A=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-d).normalize(),i[1].setComponents(l+s,h+c,p+m,y+d).normalize(),i[2].setComponents(l+a,h+u,p+_,y+T).normalize(),i[3].setComponents(l-a,h-u,p-_,y-T).normalize(),i[4].setComponents(l-o,h-f,p-g,y-A).normalize(),t===In)i[5].setComponents(l+o,h+f,p+g,y+A).normalize();else if(t===ms)i[5].setComponents(o,f,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mc extends tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _s=new k,vs=new k,Ko=new dt,cr=new go,qr=new Tr,na=new k,Jo=new k;class Ud extends Bt{constructor(e=new _n,t=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)_s.fromBufferAttribute(t,r-1),vs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=_s.distanceTo(vs);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(r),qr.radius+=s,e.ray.intersectsSphere(qr)===!1)return;Ko.copy(r).invert(),cr.copy(e.ray).applyMatrix4(Ko);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const d=u.getX(g),T=u.getX(g+1),A=$r(this,e,cr,l,d,T);A&&t.push(A)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(m),d=$r(this,e,cr,l,g,p);d&&t.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const d=$r(this,e,cr,l,g,g+1);d&&t.push(d)}if(this.isLineLoop){const g=$r(this,e,cr,l,_-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $r(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(_s.fromBufferAttribute(a,r),vs.fromBufferAttribute(a,s),t.distanceSqToSegment(_s,vs,na,Jo)>i)return;na.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(na);if(!(l<e.near||l>e.far))return{distance:l,point:Jo.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Qo=new k,el=new k;class Nd extends Ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Qo.fromBufferAttribute(t,r),el.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Qo.distanceTo(el);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fd extends tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tl=new dt,to=new go,Yr=new Tr,jr=new k;class Od extends Bt{constructor(e=new _n,t=new Fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;tl.copy(r).invert(),to.copy(e.ray).applyMatrix4(tl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,g=m;_<g;_++){const p=c.getX(_);jr.fromBufferAttribute(f,p),nl(jr,p,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,g=m;_<g;_++)jr.fromBufferAttribute(f,_),nl(jr,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nl(n,e,t,i,r,s,a){const o=to.distanceSqToPoint(n);if(o<t){const l=new k;to.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gc extends Vt{constructor(e,t,i,r,s,a,o,l,c,u=Vi){if(u!==Vi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vi&&(i=xi),i===void 0&&u===ji&&(i=Yi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ts extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const T=d*h-a;for(let A=0;A<c;A++){const y=A*f-s;_.push(y,-T,0),g.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const A=T+c*d,y=T+c*(d+1),L=T+1+c*(d+1),R=T+1+c*d;m.push(A,y,R),m.push(y,L,R)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bd extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zd extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _c extends hc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kd extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hd extends Nd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new _n;r.setAttribute("position",new gn(t,3)),r.setAttribute("color",new gn(i,3));const s=new mc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Je,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function il(n,e,t,i){const r=Gd(i);switch(t){case jl:return n*e;case Kl:return n*e;case Jl:return n*e*2;case Ql:return n*e/r.components*r.byteLength;case uo:return n*e/r.components*r.byteLength;case ec:return n*e*2/r.components*r.byteLength;case ho:return n*e*2/r.components*r.byteLength;case Zl:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case fo:return n*e*4/r.components*r.byteLength;case ss:case as:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case os:case ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Da:return Math.max(n,16)*Math.max(e,8)/4;case Ca:case La:return Math.max(n,8)*Math.max(e,8)/2;case Ia:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cs:case Za:case Ka:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tc:case Ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qa:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gd(n){switch(n){case Bn:case ql:return{byteLength:1,components:1};case gr:case $l:case Sr:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case xi:case oo:case Dn:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ih=`#ifdef USE_IRIDESCENCE
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
#endif`,rh=`#ifdef USE_BUMPMAP
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fh=`#define PI 3.141592653589793
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
} // validated`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mh=`vec3 transformedNormal = objectNormal;
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
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lh=`#ifdef USE_GRADIENTMAP
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
}`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
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
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hh=`PhysicalMaterial material;
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
#endif`,Gh=`struct PhysicalMaterial {
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
}`,Vh=`
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qh=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
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
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
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
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cf=`float getShadowMask() {
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
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,Df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
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
}`,Kf=`#if DEPTH_PACKING == 3200
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
}`,Jf=`#define DISTANCE
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
}`,Qf=`#define DISTANCE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
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
}`,ip=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,sp=`uniform vec3 diffuse;
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
}`,ap=`#define LAMBERT
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
}`,op=`#define LAMBERT
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
}`,lp=`#define MATCAP
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
}`,cp=`#define MATCAP
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
}`,up=`#define NORMAL
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
}`,dp=`#define NORMAL
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
}`,hp=`#define PHONG
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
}`,fp=`#define PHONG
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
}`,pp=`#define STANDARD
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
}`,mp=`#define STANDARD
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
}`,gp=`#define TOON
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
}`,_p=`#define TOON
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
}`,vp=`uniform float size;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,yp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:$d,alphatest_fragment:Yd,alphatest_pars_fragment:jd,aomap_fragment:Zd,aomap_pars_fragment:Kd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:eh,beginnormal_vertex:th,bsdfs:nh,iridescence_fragment:ih,bumpmap_pars_fragment:rh,clipping_planes_fragment:sh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:oh,clipping_planes_vertex:lh,color_fragment:ch,color_pars_fragment:uh,color_pars_vertex:dh,color_vertex:hh,common:fh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:_h,emissivemap_fragment:vh,emissivemap_pars_fragment:xh,colorspace_fragment:Mh,colorspace_pars_fragment:yh,envmap_fragment:Sh,envmap_common_pars_fragment:bh,envmap_pars_fragment:Eh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Fh,envmap_vertex:Ah,fog_vertex:wh,fog_pars_vertex:Rh,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Lh,lightmap_pars_fragment:Dh,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:Uh,lights_pars_begin:Nh,lights_toon_fragment:Oh,lights_toon_pars_fragment:Bh,lights_phong_fragment:zh,lights_phong_pars_fragment:kh,lights_physical_fragment:Hh,lights_physical_pars_fragment:Gh,lights_fragment_begin:Vh,lights_fragment_maps:Wh,lights_fragment_end:Xh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:jh,map_fragment:Zh,map_pars_fragment:Kh,map_particle_fragment:Jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:ef,metalnessmap_pars_fragment:tf,morphinstance_vertex:nf,morphcolor_vertex:rf,morphnormal_vertex:sf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:uf,normal_pars_vertex:df,normal_vertex:hf,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:xf,premultiplied_alpha_fragment:Mf,project_vertex:yf,dithering_fragment:Sf,dithering_pars_fragment:bf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:wf,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:Df,skinnormal_vertex:If,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Hf,uv_vertex:Gf,worldpos_vertex:Vf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:$f,cube_vert:Yf,cube_frag:jf,depth_vert:Zf,depth_frag:Kf,distanceRGBA_vert:Jf,distanceRGBA_frag:Qf,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:rp,meshbasic_frag:sp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:up,meshnormal_frag:dp,meshphong_vert:hp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:vp,points_frag:xp,shadow_vert:Mp,shadow_frag:yp,sprite_vert:Sp,sprite_frag:bp},ge={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Mn={basic:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ft([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ft([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ft([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ft([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ft([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ft([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ft([ge.common,ge.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ft([ge.lights,ge.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Mn.physical={uniforms:Ft([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Kr={r:0,b:0,g:0},ui=new zn,Ep=new dt;function Tp(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function g(A){let y=!1;const L=_(A);L===null?d(o,l):L&&L.isColor&&(d(L,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,y){const L=_(y);L&&(L.isCubeTexture||L.mapping===Es)?(u===void 0&&(u=new Un(new Ar(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ki(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ui.copy(y.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(ui)),u.material.toneMapped=Ke.getTransfer(L.colorSpace)!==rt,(f!==L||h!==L.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Un(new Ts(2,2),new kn({name:"BackgroundMaterial",uniforms:Ki(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(L.colorSpace)!==rt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,y){A.getRGB(Kr,dc(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:g,addToRenderList:p,dispose:T}}function Ap(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(x,I,Y,X,H){let j=!1;const Z=f(X,Y,I);s!==Z&&(s=Z,c(s.object)),j=m(x,X,Y,H),j&&_(x,X,Y,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(x,I,Y,X),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,I,Y){const X=Y.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);let j=H[I.id];j===void 0&&(j={},H[I.id]=j);let Z=j[X];return Z===void 0&&(Z=h(l()),j[X]=Z),Z}function h(x){const I=[],Y=[],X=[];for(let H=0;H<t;H++)I[H]=0,Y[H]=0,X[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:X,object:x,attributes:{},index:null}}function m(x,I,Y,X){const H=s.attributes,j=I.attributes;let Z=0;const se=Y.getAttributes();for(const q in se)if(se[q].location>=0){const ce=H[q];let ue=j[q];if(ue===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;Z++}return s.attributesNum!==Z||s.index!==X}function _(x,I,Y,X){const H={},j=I.attributes;let Z=0;const se=Y.getAttributes();for(const q in se)if(se[q].location>=0){let ce=j[q];ce===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),H[q]=ue,Z++}s.attributes=H,s.attributesNum=Z,s.index=X}function g(){const x=s.newAttributes;for(let I=0,Y=x.length;I<Y;I++)x[I]=0}function p(x){d(x,0)}function d(x,I){const Y=s.newAttributes,X=s.enabledAttributes,H=s.attributeDivisors;Y[x]=1,X[x]===0&&(n.enableVertexAttribArray(x),X[x]=1),H[x]!==I&&(n.vertexAttribDivisor(x,I),H[x]=I)}function T(){const x=s.newAttributes,I=s.enabledAttributes;for(let Y=0,X=I.length;Y<X;Y++)I[Y]!==x[Y]&&(n.disableVertexAttribArray(Y),I[Y]=0)}function A(x,I,Y,X,H,j,Z){Z===!0?n.vertexAttribIPointer(x,I,Y,H,j):n.vertexAttribPointer(x,I,Y,X,H,j)}function y(x,I,Y,X){g();const H=X.attributes,j=Y.getAttributes(),Z=I.defaultAttributeValues;for(const se in j){const q=j[se];if(q.location>=0){let ae=H[se];if(ae===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const ce=ae.normalized,ue=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const qe=Fe.buffer,ee=Fe.type,le=Fe.bytesPerElement,he=ee===n.INT||ee===n.UNSIGNED_INT||ae.gpuType===oo;if(ae.isInterleavedBufferAttribute){const pe=ae.data,Ce=pe.stride,Ue=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let ke=0;ke<q.locationSize;ke++)d(q.location+ke,pe.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ke=0;ke<q.locationSize;ke++)p(q.location+ke);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ke=0;ke<q.locationSize;ke++)A(q.location+ke,ue/q.locationSize,ee,ce,Ce*le,(Ue+ue/q.locationSize*ke)*le,he)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)d(q.location+pe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let pe=0;pe<q.locationSize;pe++)A(q.location+pe,ue/q.locationSize,ee,ce,ue*le,ue/q.locationSize*pe*le,he)}}else if(Z!==void 0){const ce=Z[se];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(q.location,ce);break;case 3:n.vertexAttrib3fv(q.location,ce);break;case 4:n.vertexAttrib4fv(q.location,ce);break;default:n.vertexAttrib1fv(q.location,ce)}}}}T()}function L(){U();for(const x in i){const I=i[x];for(const Y in I){const X=I[Y];for(const H in X)u(X[H].object),delete X[H];delete I[Y]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const I=i[x.id];for(const Y in I){const X=I[Y];for(const H in X)u(X[H].object),delete X[H];delete I[Y]}delete i[x.id]}function P(x){for(const I in i){const Y=i[I];if(Y[x.id]===void 0)continue;const X=Y[x.id];for(const H in X)u(X[H].object),delete X[H];delete Y[x.id]}}function U(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function wp(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==pn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Bn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Dn&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function Cp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new fi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,A=T*4;let y=d.clippingState||null;l.value=y,y=u(_,h,A,m);for(let L=0;L!==A;++L)y[L]=t[L];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,y=m;A!==g;++A,y+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Pp(n){let e=new WeakMap;function t(a,o){return o===Ta?a.mapping=qi:o===Aa&&(a.mapping=$i),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ta||o===Aa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hi=4,rl=[.125,.215,.35,.446,.526,.582],gi=20,ia=new _c,sl=new Je;let ra=null,sa=0,aa=0,oa=!1;const pi=(1+Math.sqrt(5))/2,Ni=1/pi,al=[new k(-pi,Ni,0),new k(pi,Ni,0),new k(-Ni,0,pi),new k(Ni,0,pi),new k(0,pi,-Ni),new k(0,pi,Ni),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra,sa,aa),this._renderer.xr.enabled=oa,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Sr,format:pn,colorSpace:Zi,depthBuffer:!1},r=ll(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(s)),this._blurMaterial=Dp(s,e,t)}return r}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,i,r){const o=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(sl),u.toneMapping=Jn,u.autoClear=!1;const m=new lc({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),_=new Un(new Ar,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(sl),g=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const A=this._cubeSize;Jr(r,T*A,d>2?A:0,A,A),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ia)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=al[(r-s-1)%al.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Un(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gi-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):gi;p>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const d=[];let T=0;for(let P=0;P<gi;++P){const U=P/g,b=Math.exp(-U*U/2);d.push(b),P===0?T+=b:P<p&&(T+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const y=this._sizeLods[r],L=3*y*(r>A-Hi?r-A+Hi:0),R=4*(this._cubeSize-y);Jr(t,L,R,3*y,2*y),l.setRenderTarget(t),l.render(f,ia)}}function Lp(n){const e=[],t=[],i=[];let r=n;const s=n-Hi+1+rl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Hi?l=rl[a-n+Hi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,d=1,T=new Float32Array(g*_*m),A=new Float32Array(p*_*m),y=new Float32Array(d*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,U=R>2?0:-1,b=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];T.set(b,g*_*R),A.set(h,p*_*R);const x=[R,R,R,R,R,R];y.set(x,d*_*R)}const L=new _n;L.setAttribute("position",new Ot(T,g)),L.setAttribute("uv",new Ot(A,p)),L.setAttribute("faceIndex",new Ot(y,d)),e.push(L),r>Hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ll(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dp(n,e,t){const i=new Float32Array(gi),r=new k(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function cl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ul(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Ip(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ta||l===Aa,u=l===qi||l===$i;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new ol(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new ol(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Up(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Np(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const T=m.array;g=m.version;for(let A=0,y=T.length;A<y;A+=3){const L=T[A+0],R=T[A+1],P=T[A+2];h.push(L,R,R,P,P,L)}}else if(_!==void 0){const T=_.array;g=_.version;for(let A=0,y=T.length/3-1;A<y;A+=3){const L=A+0,R=A+1,P=A+2;h.push(L,R,R,P,P,L)}}else return;const p=new(ic(h)?uc:cc)(h,1);p.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Fp(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function c(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*a,_),t.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function f(h,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,g,0,_);let d=0;for(let T=0;T<_;T++)d+=m[T]*g[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Op(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bp(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let x=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let L=o.attributes.position.count*y,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*R*4*f),U=new sc(P,L,R,f);U.type=Dn,U.needsUpdate=!0;const b=y*4;for(let I=0;I<f;I++){const Y=d[I],X=T[I],H=A[I],j=L*R*4*I;for(let Z=0;Z<Y.count;Z++){const se=Z*b;_===!0&&(r.fromBufferAttribute(Y,Z),P[j+se+0]=r.x,P[j+se+1]=r.y,P[j+se+2]=r.z,P[j+se+3]=0),g===!0&&(r.fromBufferAttribute(X,Z),P[j+se+4]=r.x,P[j+se+5]=r.y,P[j+se+6]=r.z,P[j+se+7]=0),p===!0&&(r.fromBufferAttribute(H,Z),P[j+se+8]=r.x,P[j+se+9]=r.y,P[j+se+10]=r.z,P[j+se+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new st(L,R)},i.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function zp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const xc=new Vt,dl=new gc(1,1),Mc=new sc,yc=new pd,Sc=new fc,hl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hl[r];if(s===void 0&&(s=new Float32Array(r),hl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function As(n,e){let t=fl[e];t===void 0&&(t=new Int32Array(e),fl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;gl.set(i),n.uniformMatrix2fv(this.addr,!1,gl),yt(t,i)}}function Xp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;ml.set(i),n.uniformMatrix3fv(this.addr,!1,ml),yt(t,i)}}function qp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;pl.set(i),n.uniformMatrix4fv(this.addr,!1,pl),yt(t,i)}}function $p(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Kp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function tm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dl.compareFunction=nc,s=dl):s=xc,t.setTexture2D(e||s,r)}function nm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yc,r)}function im(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sc,r)}function rm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mc,r)}function sm(n){switch(n){case 5126:return kp;case 35664:return Hp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return $p;case 35667:case 35671:return Yp;case 35668:case 35672:return jp;case 35669:case 35673:return Zp;case 5125:return Kp;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}function am(n,e){n.uniform1fv(this.addr,e)}function om(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function lm(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function cm(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function um(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dm(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hm(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fm(n,e){n.uniform1iv(this.addr,e)}function pm(n,e){n.uniform2iv(this.addr,e)}function mm(n,e){n.uniform3iv(this.addr,e)}function gm(n,e){n.uniform4iv(this.addr,e)}function _m(n,e){n.uniform1uiv(this.addr,e)}function vm(n,e){n.uniform2uiv(this.addr,e)}function xm(n,e){n.uniform3uiv(this.addr,e)}function Mm(n,e){n.uniform4uiv(this.addr,e)}function ym(n,e,t){const i=this.cache,r=e.length,s=As(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xc,s[a])}function Sm(n,e,t){const i=this.cache,r=e.length,s=As(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yc,s[a])}function bm(n,e,t){const i=this.cache,r=e.length,s=As(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Sc,s[a])}function Em(n,e,t){const i=this.cache,r=e.length,s=As(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Mc,s[a])}function Tm(n){switch(n){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return um;case 35675:return dm;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return vm;case 36295:return xm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Em}}class Am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sm(t.type)}}class wm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function _l(n,e){n.seq.push(e),n.map[e.id]=e}function Cm(n,e,t){const i=n.name,r=i.length;for(la.lastIndex=0;;){const s=la.exec(i),a=la.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_l(t,c===void 0?new Am(o,n,e):new wm(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Rm(o),_l(t,f)),t=f}}}class us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Cm(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function vl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Pm=37297;let Lm=0;function Dm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const xl=new We;function Im(n){Ke._getMatrix(xl,Ke.workingColorSpace,n);const e=`mat3( ${xl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ps:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ml(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dm(n.getShaderSource(e),a)}else return r}function Um(n,e){const t=Im(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(n,e){let t;switch(e){case bu:t="Linear";break;case Eu:t="Reinhard";break;case Tu:t="Cineon";break;case Au:t="ACESFilmic";break;case Ru:t="AgX";break;case Cu:t="Neutral";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new k;function Fm(){Ke.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Bm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function yl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(n){return n.replace(km,Gm)}const Hm=new Map;function Gm(n,e){let t=Xe[e];if(t===void 0){const i=Hm.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return no(t)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(n){return n.replace(Vm,Wm)}function Wm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function El(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Xm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function qm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case $i:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $m(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function Ym(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Su:e="ENVMAP_BLENDING_ADD";break}return e}function jm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Zm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xm(t),c=qm(t),u=$m(t),f=Ym(t),h=jm(t),m=Om(t),_=Bm(s),g=r.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(p=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),Fm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=no(a),a=yl(a,t),a=Sl(a,t),o=no(o),o=yl(o,t),o=Sl(o,t),a=bl(a),o=bl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+p+a,y=T+d+o,L=vl(r,r.VERTEX_SHADER,A),R=vl(r,r.FRAGMENT_SHADER,y);r.attachShader(g,L),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(I){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(g).trim(),X=r.getShaderInfoLog(L).trim(),H=r.getShaderInfoLog(R).trim();let j=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,L,R);else{const se=Ml(r,L,"vertex"),q=Ml(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+se+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||H==="")&&(Z=!1);Z&&(I.diagnostics={runnable:j,programLog:Y,vertexShader:{log:X,prefix:p},fragmentShader:{log:H,prefix:d}})}r.deleteShader(L),r.deleteShader(R),U=new us(r,g),b=zm(r,g)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,Pm)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=R,this}let Km=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qm(e),t.set(e,i)),i}}class Qm{constructor(e){this.id=Km++,this.code=e,this.usedTimes=0}}function eg(n,e,t,i,r,s,a){const o=new ac,l=new Jm,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,x,I,Y,X){const H=Y.fog,j=X.geometry,Z=b.isMeshStandardMaterial?Y.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),q=se&&se.mapping===Es?se.image.height:null,ae=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ue=ce!==void 0?ce.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let qe,ee,le,he;if(ae){const $e=Mn[ae];qe=$e.vertexShader,ee=$e.fragmentShader}else qe=b.vertexShader,ee=b.fragmentShader,l.update(b),le=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const pe=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ue=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,Ie=!!b.map,He=!!b.matcap,Ne=!!se,D=!!b.aoMap,at=!!b.lightMap,Ve=!!b.bumpMap,Ge=!!b.normalMap,Ee=!!b.displacementMap,Qe=!!b.emissiveMap,Te=!!b.metalnessMap,E=!!b.roughnessMap,v=b.anisotropy>0,N=b.clearcoat>0,ie=b.dispersion>0,re=b.iridescence>0,J=b.sheen>0,ye=b.transmission>0,fe=v&&!!b.anisotropyMap,ve=N&&!!b.clearcoatMap,Re=N&&!!b.clearcoatNormalMap,oe=N&&!!b.clearcoatRoughnessMap,_e=re&&!!b.iridescenceMap,Ae=re&&!!b.iridescenceThicknessMap,De=J&&!!b.sheenColorMap,S=J&&!!b.sheenRoughnessMap,O=!!b.specularMap,G=!!b.specularColorMap,K=!!b.specularIntensityMap,w=ye&&!!b.transmissionMap,z=ye&&!!b.thicknessMap,B=!!b.gradientMap,$=!!b.alphaMap,de=b.alphaTest>0,Q=!!b.alphaHash,we=!!b.extensions;let et=Jn;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(et=n.toneMapping);const lt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:ee,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ke,batchingColor:ke&&X._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&X.instanceColor!==null,instancingMorph:Ue&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:He,envMap:Ne,envMapMode:Ne&&se.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:at,bumpMap:Ve,normalMap:Ge,displacementMap:h&&Ee,emissiveMap:Qe,normalMapObjectSpace:Ge&&b.normalMapType===Uu,normalMapTangentSpace:Ge&&b.normalMapType===Iu,metalnessMap:Te,roughnessMap:E,anisotropy:v,anisotropyMap:fe,clearcoat:N,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:oe,dispersion:ie,iridescence:re,iridescenceMap:_e,iridescenceThicknessMap:Ae,sheen:J,sheenColorMap:De,sheenRoughnessMap:S,specularMap:O,specularColorMap:G,specularIntensityMap:K,transmission:ye,transmissionMap:w,thicknessMap:z,gradientMap:B,opaque:b.transparent===!1&&b.blending===Kn&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:Q,combine:b.combine,mapUv:Ie&&g(b.map.channel),aoMapUv:D&&g(b.aoMap.channel),lightMapUv:at&&g(b.lightMap.channel),bumpMapUv:Ve&&g(b.bumpMap.channel),normalMapUv:Ge&&g(b.normalMap.channel),displacementMapUv:Ee&&g(b.displacementMap.channel),emissiveMapUv:Qe&&g(b.emissiveMap.channel),metalnessMapUv:Te&&g(b.metalnessMap.channel),roughnessMapUv:E&&g(b.roughnessMap.channel),anisotropyMapUv:fe&&g(b.anisotropyMap.channel),clearcoatMapUv:ve&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:S&&g(b.sheenRoughnessMap.channel),specularMapUv:O&&g(b.specularMap.channel),specularColorMapUv:G&&g(b.specularColorMap.channel),specularIntensityMapUv:K&&g(b.specularIntensityMap.channel),transmissionMapUv:w&&g(b.transmissionMap.channel),thicknessMapUv:z&&g(b.thicknessMap.channel),alphaMapUv:$&&g(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ge||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!j.attributes.uv&&(Ie||$),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:X.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:Qe&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:we&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&b.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function d(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)x.push(I),x.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(T(x,b),A(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function T(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function A(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const x=_[b.type];let I;if(x){const Y=Mn[x];I=Ad.clone(Y.uniforms)}else I=b.uniforms;return I}function L(b,x){let I;for(let Y=0,X=u.length;Y<X;Y++){const H=u[Y];if(H.cacheKey===x){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Zm(n,x,b,s),u.push(I)),I}function R(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:U}}function tg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ng(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Al(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,g,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=p),e++,d}function o(f,h,m,_,g,p){const d=a(f,h,m,_,g,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,_,g,p){const d=a(f,h,m,_,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||ng),i.length>1&&i.sort(h||Tl),r.length>1&&r.sort(h||Tl)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ig(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Al,n.set(i,[a])):r>=s.length?(a=new Al,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Je};break;case"SpotLight":t={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function sg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ag=0;function og(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lg(n){const e=new rg,t=sg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new dt,a=new dt;function o(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,_=0,g=0,p=0,d=0,T=0,A=0,y=0,L=0,R=0,P=0;c.sort(og);for(let b=0,x=c.length;b<x;b++){const I=c[b],Y=I.color,X=I.intensity,H=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=Y.r*X,f+=Y.g*X,h+=Y.b*X;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],X);P++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,q=t.get(I);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=Z,m++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(Y).multiplyScalar(X),Z.distance=H,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[g]=Z;const se=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,se.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[g]=se.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=j,y++}g++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(Y).multiplyScalar(X),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=Z,p++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const se=I.shadow,q=t.get(I);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=I.shadow.matrix,A++}i.point[_]=Z,_++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(X),Z.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[d]=Z,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==g||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,U.directionalLength=m,U.pointLength=_,U.spotLength=g,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=P,i.version=ag++)}function l(c,u){let f=0,h=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const A=c[d];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(A.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function wl(n){const e=new lg(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function cg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wl(n),e.set(r,[o])):s>=a.length?(o=new wl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function hg(n,e,t){let i=new pc;const r=new st,s=new st,a=new ft,o=new Bd({depthPacking:Du}),l=new zd,c={},u=t.maxTextureSize,f={[ti]:Gt,[Gt]:ti,[Ln]:Ln},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Un(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let d=this.type;this.render=function(R,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Zn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=d!==Cn&&this.type===Cn,H=d===Cn&&this.type!==Cn;for(let j=0,Z=R.length;j<Z;j++){const se=R[j],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ae=q.getFrameExtents();if(r.multiply(ae),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,q.mapSize.y=s.y)),q.map===null||X===!0||H===!0){const ue=this.type!==Cn?{minFilter:mn,magFilter:mn}:{};q.map!==null&&q.map.dispose(),q.map=new Mi(r.x,r.y,ue),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ce=q.getViewportCount();for(let ue=0;ue<ce;ue++){const Fe=q.getViewport(ue);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),Y.viewport(a),q.updateMatrices(se,ue),i=q.getFrustum(),y(P,U,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Cn&&T(q,U),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(b,x,I)};function T(R,P){const U=e.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,U,h,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,U,m,g,null)}function A(R,P,U,b){let x=null;const I=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)x=I;else if(x=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=x.uuid,X=P.uuid;let H=c[Y];H===void 0&&(H={},c[Y]=H);let j=H[X];j===void 0&&(j=x.clone(),H[X]=j,P.addEventListener("dispose",L)),x=j}if(x.visible=P.visible,x.wireframe=P.wireframe,b===Cn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:f[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=n.properties.get(x);Y.light=U}return x}function y(R,P,U,b,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Cn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const X=e.update(R),H=R.material;if(Array.isArray(H)){const j=X.groups;for(let Z=0,se=j.length;Z<se;Z++){const q=j[Z],ae=H[q.materialIndex];if(ae&&ae.visible){const ce=A(R,ae,b,x);R.onBeforeShadow(n,R,P,U,X,ce,q),n.renderBufferDirect(U,null,X,ce,R,q),R.onAfterShadow(n,R,P,U,X,ce,q)}}}else if(H.visible){const j=A(R,H,b,x);R.onBeforeShadow(n,R,P,U,X,j,null),n.renderBufferDirect(U,null,X,j,R,null),R.onAfterShadow(n,R,P,U,X,j,null)}}const Y=R.children;for(let X=0,H=Y.length;X<H;X++)y(Y[X],P,U,b,x)}function L(R){R.target.removeEventListener("dispose",L);for(const U in c){const b=c[U],x=R.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const fg={[va]:xa,[Ma]:ba,[ya]:Ea,[Xi]:Sa,[xa]:va,[ba]:Ma,[Ea]:ya,[Sa]:Xi};function pg(n,e){function t(){let w=!1;const z=new ft;let B=null;const $=new ft(0,0,0,0);return{setMask:function(de){B!==de&&!w&&(n.colorMask(de,de,de,de),B=de)},setLocked:function(de){w=de},setClear:function(de,Q,we,et,lt){lt===!0&&(de*=et,Q*=et,we*=et),z.set(de,Q,we,et),$.equals(z)===!1&&(n.clearColor(de,Q,we,et),$.copy(z))},reset:function(){w=!1,B=null,$.set(-1,0,0,0)}}}function i(){let w=!1,z=!1,B=null,$=null,de=null;return{setReversed:function(Q){if(z!==Q){const we=e.get("EXT_clip_control");z?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);const et=de;de=null,this.setClear(et)}z=Q},getReversed:function(){return z},setTest:function(Q){Q?pe(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Q){B!==Q&&!w&&(n.depthMask(Q),B=Q)},setFunc:function(Q){if(z&&(Q=fg[Q]),$!==Q){switch(Q){case va:n.depthFunc(n.NEVER);break;case xa:n.depthFunc(n.ALWAYS);break;case Ma:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case ya:n.depthFunc(n.EQUAL);break;case Sa:n.depthFunc(n.GEQUAL);break;case ba:n.depthFunc(n.GREATER);break;case Ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=Q}},setLocked:function(Q){w=Q},setClear:function(Q){de!==Q&&(z&&(Q=1-Q),n.clearDepth(Q),de=Q)},reset:function(){w=!1,B=null,$=null,de=null,z=!1}}}function r(){let w=!1,z=null,B=null,$=null,de=null,Q=null,we=null,et=null,lt=null;return{setTest:function($e){w||($e?pe(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function($e){z!==$e&&!w&&(n.stencilMask($e),z=$e)},setFunc:function($e,xt,At){(B!==$e||$!==xt||de!==At)&&(n.stencilFunc($e,xt,At),B=$e,$=xt,de=At)},setOp:function($e,xt,At){(Q!==$e||we!==xt||et!==At)&&(n.stencilOp($e,xt,At),Q=$e,we=xt,et=At)},setLocked:function($e){w=$e},setClear:function($e){lt!==$e&&(n.clearStencil($e),lt=$e)},reset:function(){w=!1,z=null,B=null,$=null,de=null,Q=null,we=null,et=null,lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,d=null,T=null,A=null,y=null,L=null,R=null,P=new Je(0,0,0),U=0,b=!1,x=null,I=null,Y=null,X=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=se>=2);let ae=null,ce={};const ue=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),qe=new ft().fromArray(ue),ee=new ft().fromArray(Fe);function le(w,z,B,$){const de=new Uint8Array(4),Q=n.createTexture();n.bindTexture(w,Q),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<B;we++)w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?n.texImage3D(z,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(z+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Q}const he={};he[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),a.setFunc(Xi),Ve(!1),Ge(wo),pe(n.CULL_FACE),D(Zn);function pe(w){u[w]!==!0&&(n.enable(w),u[w]=!0)}function Ce(w){u[w]!==!1&&(n.disable(w),u[w]=!1)}function Ue(w,z){return f[w]!==z?(n.bindFramebuffer(w,z),f[w]=z,w===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=z),w===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=z),!0):!1}function ke(w,z){let B=m,$=!1;if(w){B=h.get(z),B===void 0&&(B=[],h.set(z,B));const de=w.textures;if(B.length!==de.length||B[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,we=de.length;Q<we;Q++)B[Q]=n.COLOR_ATTACHMENT0+Q;B.length=de.length,$=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,$=!0);$&&n.drawBuffers(B)}function Ie(w){return _!==w?(n.useProgram(w),_=w,!0):!1}const He={[mi]:n.FUNC_ADD,[ru]:n.FUNC_SUBTRACT,[su]:n.FUNC_REVERSE_SUBTRACT};He[au]=n.MIN,He[ou]=n.MAX;const Ne={[lu]:n.ZERO,[cu]:n.ONE,[uu]:n.SRC_COLOR,[ga]:n.SRC_ALPHA,[gu]:n.SRC_ALPHA_SATURATE,[pu]:n.DST_COLOR,[hu]:n.DST_ALPHA,[du]:n.ONE_MINUS_SRC_COLOR,[_a]:n.ONE_MINUS_SRC_ALPHA,[mu]:n.ONE_MINUS_DST_COLOR,[fu]:n.ONE_MINUS_DST_ALPHA,[_u]:n.CONSTANT_COLOR,[vu]:n.ONE_MINUS_CONSTANT_COLOR,[xu]:n.CONSTANT_ALPHA,[Mu]:n.ONE_MINUS_CONSTANT_ALPHA};function D(w,z,B,$,de,Q,we,et,lt,$e){if(w===Zn){g===!0&&(Ce(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),w!==iu){if(w!==p||$e!==b){if((d!==mi||y!==mi)&&(n.blendEquation(n.FUNC_ADD),d=mi,y=mi),$e)switch(w){case Kn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFunc(n.ONE,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ki:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,A=null,L=null,R=null,P.set(0,0,0),U=0,p=w,b=$e}return}de=de||z,Q=Q||B,we=we||$,(z!==d||de!==y)&&(n.blendEquationSeparate(He[z],He[de]),d=z,y=de),(B!==T||$!==A||Q!==L||we!==R)&&(n.blendFuncSeparate(Ne[B],Ne[$],Ne[Q],Ne[we]),T=B,A=$,L=Q,R=we),(et.equals(P)===!1||lt!==U)&&(n.blendColor(et.r,et.g,et.b,lt),P.copy(et),U=lt),p=w,b=!1}function at(w,z){w.side===Ln?Ce(n.CULL_FACE):pe(n.CULL_FACE);let B=w.side===Gt;z&&(B=!B),Ve(B),w.blending===Kn&&w.transparent===!1?D(Zn):D(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const $=w.stencilWrite;o.setTest($),$&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Qe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(w){x!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),x=w)}function Ge(w){w!==eu?(pe(n.CULL_FACE),w!==I&&(w===wo?n.cullFace(n.BACK):w===tu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),I=w}function Ee(w){w!==Y&&(Z&&n.lineWidth(w),Y=w)}function Qe(w,z,B){w?(pe(n.POLYGON_OFFSET_FILL),(X!==z||H!==B)&&(n.polygonOffset(z,B),X=z,H=B)):Ce(n.POLYGON_OFFSET_FILL)}function Te(w){w?pe(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function E(w){w===void 0&&(w=n.TEXTURE0+j-1),ae!==w&&(n.activeTexture(w),ae=w)}function v(w,z,B){B===void 0&&(ae===null?B=n.TEXTURE0+j-1:B=ae);let $=ce[B];$===void 0&&($={type:void 0,texture:void 0},ce[B]=$),($.type!==w||$.texture!==z)&&(ae!==B&&(n.activeTexture(B),ae=B),n.bindTexture(w,z||he[w]),$.type=w,$.texture=z)}function N(){const w=ce[ae];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(w){qe.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),qe.copy(w))}function S(w){ee.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),ee.copy(w))}function O(w,z){let B=c.get(z);B===void 0&&(B=new WeakMap,c.set(z,B));let $=B.get(w);$===void 0&&($=n.getUniformBlockIndex(z,w.name),B.set(w,$))}function G(w,z){const $=c.get(z).get(w);l.get(z)!==$&&(n.uniformBlockBinding(z,$,w.__bindingPointIndex),l.set(z,$))}function K(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ce={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,d=null,T=null,A=null,y=null,L=null,R=null,P=new Je(0,0,0),U=0,b=!1,x=null,I=null,Y=null,X=null,H=null,qe.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ce,bindFramebuffer:Ue,drawBuffers:ke,useProgram:Ie,setBlending:D,setMaterial:at,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Ee,setPolygonOffset:Qe,setScissorTest:Te,activeTexture:E,bindTexture:v,unbindTexture:N,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:_e,texImage3D:Ae,updateUBOMapping:O,uniformBlockBinding:G,texStorage2D:Re,texStorage3D:oe,texSubImage2D:J,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:De,viewport:S,reset:K}}function mg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):gs("canvas")}function g(E,v,N){let ie=1;const re=Te(E);if((re.width>N||re.height>N)&&(ie=N/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(ie*re.width),ye=Math.floor(ie*re.height);f===void 0&&(f=_(J,ye));const fe=v?_(J,ye):f;return fe.width=J,fe.height=ye,fe.getContext("2d").drawImage(E,0,0,J,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+ye+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),E;return E}function p(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,v,N,ie,re=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=v;if(v===n.RED&&(N===n.FLOAT&&(J=n.R32F),N===n.HALF_FLOAT&&(J=n.R16F),N===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.R8UI),N===n.UNSIGNED_SHORT&&(J=n.R16UI),N===n.UNSIGNED_INT&&(J=n.R32UI),N===n.BYTE&&(J=n.R8I),N===n.SHORT&&(J=n.R16I),N===n.INT&&(J=n.R32I)),v===n.RG&&(N===n.FLOAT&&(J=n.RG32F),N===n.HALF_FLOAT&&(J=n.RG16F),N===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RG8UI),N===n.UNSIGNED_SHORT&&(J=n.RG16UI),N===n.UNSIGNED_INT&&(J=n.RG32UI),N===n.BYTE&&(J=n.RG8I),N===n.SHORT&&(J=n.RG16I),N===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RGB8UI),N===n.UNSIGNED_SHORT&&(J=n.RGB16UI),N===n.UNSIGNED_INT&&(J=n.RGB32UI),N===n.BYTE&&(J=n.RGB8I),N===n.SHORT&&(J=n.RGB16I),N===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),N===n.UNSIGNED_INT&&(J=n.RGBA32UI),N===n.BYTE&&(J=n.RGBA8I),N===n.SHORT&&(J=n.RGBA16I),N===n.INT&&(J=n.RGBA32I)),v===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),v===n.RGBA){const ye=re?ps:Ke.getTransfer(ie);N===n.FLOAT&&(J=n.RGBA32F),N===n.HALF_FLOAT&&(J=n.RGBA16F),N===n.UNSIGNED_BYTE&&(J=ye===rt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(E,v){let N;return E?v===null||v===xi||v===Yi?N=n.DEPTH24_STENCIL8:v===Dn?N=n.DEPTH32F_STENCIL8:v===gr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===Yi?N=n.DEPTH_COMPONENT24:v===Dn?N=n.DEPTH_COMPONENT32F:v===gr&&(N=n.DEPTH_COMPONENT16),N}function L(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==mn&&E.minFilter!==yn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),U(v),v.isVideoTexture&&u.delete(v)}function P(E){const v=E.target;v.removeEventListener("dispose",P),x(v)}function U(E){const v=i.get(E);if(v.__webglInit===void 0)return;const N=E.source,ie=h.get(N);if(ie){const re=ie[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(E),Object.keys(ie).length===0&&h.delete(N)}i.remove(E)}function b(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const N=E.source,ie=h.get(N);delete ie[v.__cacheKey],a.memory.textures--}function x(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let re=0;re<v.__webglFramebuffer[ie].length;re++)n.deleteFramebuffer(v.__webglFramebuffer[ie][re]);else n.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)n.deleteFramebuffer(v.__webglFramebuffer[ie]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=E.textures;for(let ie=0,re=N.length;ie<re;ie++){const J=i.get(N[ie]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(N[ie])}i.remove(E)}let I=0;function Y(){I=0}function X(){const E=I;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function H(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function j(E,v){const N=i.get(E);if(E.isVideoTexture&&Ee(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,E,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function Z(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ee(N,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function se(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ee(N,E,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function q(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){le(N,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const ae={[wa]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Ra]:n.MIRRORED_REPEAT},ce={[mn]:n.NEAREST,[Pu]:n.NEAREST_MIPMAP_NEAREST,[Rr]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Ns]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},ue={[Nu]:n.NEVER,[Hu]:n.ALWAYS,[Fu]:n.LESS,[nc]:n.LEQUAL,[Ou]:n.EQUAL,[ku]:n.GEQUAL,[Bu]:n.GREATER,[zu]:n.NOTEQUAL};function Fe(E,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===yn||v.magFilter===Ns||v.magFilter===Rr||v.magFilter===vi||v.minFilter===yn||v.minFilter===Ns||v.minFilter===Rr||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ae[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ae[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ae[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ce[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===mn||v.minFilter!==Rr&&v.minFilter!==vi||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function qe(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const ie=v.source;let re=h.get(ie);re===void 0&&(re={},h.set(ie,re));const J=H(v);if(J!==E.__cacheKey){re[J]===void 0&&(re[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),re[J].usedTimes++;const ye=re[E.__cacheKey];ye!==void 0&&(re[E.__cacheKey].usedTimes--,ye.usedTimes===0&&b(v)),E.__cacheKey=J,E.__webglTexture=re[J].texture}return N}function ee(E,v,N){let ie=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=n.TEXTURE_3D);const re=qe(E,v),J=v.source;t.bindTexture(ie,E.__webglTexture,n.TEXTURE0+N);const ye=i.get(J);if(J.version!==ye.__version||re===!0){t.activeTexture(n.TEXTURE0+N);const fe=Ke.getPrimaries(Ke.workingColorSpace),ve=v.colorSpace===Yn?null:Ke.getPrimaries(v.colorSpace),Re=v.colorSpace===Yn||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=g(v.image,!1,r.maxTextureSize);oe=Qe(v,oe);const _e=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type);let De=A(v.internalFormat,_e,Ae,v.colorSpace,v.isVideoTexture);Fe(ie,v);let S;const O=v.mipmaps,G=v.isVideoTexture!==!0,K=ye.__version===void 0||re===!0,w=J.dataReady,z=L(v,oe);if(v.isDepthTexture)De=y(v.format===ji,v.type),K&&(G?t.texStorage2D(n.TEXTURE_2D,1,De,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,De,oe.width,oe.height,0,_e,Ae,null));else if(v.isDataTexture)if(O.length>0){G&&K&&t.texStorage2D(n.TEXTURE_2D,z,De,O[0].width,O[0].height);for(let B=0,$=O.length;B<$;B++)S=O[B],G?w&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,S.width,S.height,_e,Ae,S.data):t.texImage2D(n.TEXTURE_2D,B,De,S.width,S.height,0,_e,Ae,S.data);v.generateMipmaps=!1}else G?(K&&t.texStorage2D(n.TEXTURE_2D,z,De,oe.width,oe.height),w&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,Ae,oe.data)):t.texImage2D(n.TEXTURE_2D,0,De,oe.width,oe.height,0,_e,Ae,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&K&&t.texStorage3D(n.TEXTURE_2D_ARRAY,z,De,O[0].width,O[0].height,oe.depth);for(let B=0,$=O.length;B<$;B++)if(S=O[B],v.format!==pn)if(_e!==null)if(G){if(w)if(v.layerUpdates.size>0){const de=il(S.width,S.height,v.format,v.type);for(const Q of v.layerUpdates){const we=S.data.subarray(Q*de/S.data.BYTES_PER_ELEMENT,(Q+1)*de/S.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,Q,S.width,S.height,1,_e,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,S.width,S.height,oe.depth,_e,S.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,De,S.width,S.height,oe.depth,0,S.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?w&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,S.width,S.height,oe.depth,_e,Ae,S.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,De,S.width,S.height,oe.depth,0,_e,Ae,S.data)}else{G&&K&&t.texStorage2D(n.TEXTURE_2D,z,De,O[0].width,O[0].height);for(let B=0,$=O.length;B<$;B++)S=O[B],v.format!==pn?_e!==null?G?w&&t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,S.width,S.height,_e,S.data):t.compressedTexImage2D(n.TEXTURE_2D,B,De,S.width,S.height,0,S.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?w&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,S.width,S.height,_e,Ae,S.data):t.texImage2D(n.TEXTURE_2D,B,De,S.width,S.height,0,_e,Ae,S.data)}else if(v.isDataArrayTexture)if(G){if(K&&t.texStorage3D(n.TEXTURE_2D_ARRAY,z,De,oe.width,oe.height,oe.depth),w)if(v.layerUpdates.size>0){const B=il(oe.width,oe.height,v.format,v.type);for(const $ of v.layerUpdates){const de=oe.data.subarray($*B/oe.data.BYTES_PER_ELEMENT,($+1)*B/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,oe.width,oe.height,1,_e,Ae,de)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,Ae,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,_e,Ae,oe.data);else if(v.isData3DTexture)G?(K&&t.texStorage3D(n.TEXTURE_3D,z,De,oe.width,oe.height,oe.depth),w&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,Ae,oe.data)):t.texImage3D(n.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,_e,Ae,oe.data);else if(v.isFramebufferTexture){if(K)if(G)t.texStorage2D(n.TEXTURE_2D,z,De,oe.width,oe.height);else{let B=oe.width,$=oe.height;for(let de=0;de<z;de++)t.texImage2D(n.TEXTURE_2D,de,De,B,$,0,_e,Ae,null),B>>=1,$>>=1}}else if(O.length>0){if(G&&K){const B=Te(O[0]);t.texStorage2D(n.TEXTURE_2D,z,De,B.width,B.height)}for(let B=0,$=O.length;B<$;B++)S=O[B],G?w&&t.texSubImage2D(n.TEXTURE_2D,B,0,0,_e,Ae,S):t.texImage2D(n.TEXTURE_2D,B,De,_e,Ae,S);v.generateMipmaps=!1}else if(G){if(K){const B=Te(oe);t.texStorage2D(n.TEXTURE_2D,z,De,B.width,B.height)}w&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ae,oe)}else t.texImage2D(n.TEXTURE_2D,0,De,_e,Ae,oe);p(v)&&d(ie),ye.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function le(E,v,N){if(v.image.length!==6)return;const ie=qe(E,v),re=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const J=i.get(re);if(re.version!==J.__version||ie===!0){t.activeTexture(n.TEXTURE0+N);const ye=Ke.getPrimaries(Ke.workingColorSpace),fe=v.colorSpace===Yn?null:Ke.getPrimaries(v.colorSpace),ve=v.colorSpace===Yn||ye===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let $=0;$<6;$++)!Re&&!oe?_e[$]=g(v.image[$],!0,r.maxCubemapSize):_e[$]=oe?v.image[$].image:v.image[$],_e[$]=Qe(v,_e[$]);const Ae=_e[0],De=s.convert(v.format,v.colorSpace),S=s.convert(v.type),O=A(v.internalFormat,De,S,v.colorSpace),G=v.isVideoTexture!==!0,K=J.__version===void 0||ie===!0,w=re.dataReady;let z=L(v,Ae);Fe(n.TEXTURE_CUBE_MAP,v);let B;if(Re){G&&K&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z,O,Ae.width,Ae.height);for(let $=0;$<6;$++){B=_e[$].mipmaps;for(let de=0;de<B.length;de++){const Q=B[de];v.format!==pn?De!==null?G?w&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,Q.width,Q.height,De,Q.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,O,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,Q.width,Q.height,De,S,Q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,O,Q.width,Q.height,0,De,S,Q.data)}}}else{if(B=v.mipmaps,G&&K){B.length>0&&z++;const $=Te(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,z,O,$.width,$.height)}for(let $=0;$<6;$++)if(oe){G?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e[$].width,_e[$].height,De,S,_e[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,O,_e[$].width,_e[$].height,0,De,S,_e[$].data);for(let de=0;de<B.length;de++){const we=B[de].image[$].image;G?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,we.width,we.height,De,S,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,O,we.width,we.height,0,De,S,we.data)}}else{G?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,S,_e[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,O,De,S,_e[$]);for(let de=0;de<B.length;de++){const Q=B[de];G?w&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,De,S,Q.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,O,De,S,Q.image[$])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),J.__version=re.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function he(E,v,N,ie,re,J){const ye=s.convert(N.format,N.colorSpace),fe=s.convert(N.type),ve=A(N.internalFormat,ye,fe,N.colorSpace),Re=i.get(v),oe=i.get(N);if(oe.__renderTarget=v,!Re.__hasExternalTextures){const _e=Math.max(1,v.width>>J),Ae=Math.max(1,v.height>>J);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,J,ve,_e,Ae,v.depth,0,ye,fe,null):t.texImage2D(re,J,ve,_e,Ae,0,ye,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ge(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,re,oe.__webglTexture,0,Ve(v)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,re,oe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(E,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const ie=v.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,J=y(v.stencilBuffer,re),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Ve(v);Ge(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,J,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,E)}else{const ie=v.textures;for(let re=0;re<ie.length;re++){const J=ie[re],ye=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),ve=A(J.internalFormat,ye,fe,J.colorSpace),Re=Ve(v);N&&Ge(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ve,v.width,v.height):Ge(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(v.depthTexture);ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const re=ie.__webglTexture,J=Ve(v);if(v.depthTexture.format===Vi)Ge(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(v.depthTexture.format===ji)Ge(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ue(E){const v=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const ie=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){const re=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",re)};ie.addEventListener("dispose",re),v.__depthDisposeCallback=re}v.__boundDepthTexture=ie}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=n.createRenderbuffer(),pe(v.__webglDepthbuffer[ie],E,!1);else{const re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),pe(v.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(E,v,N){const ie=i.get(E);v!==void 0&&he(ie.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ue(E)}function Ie(E){const v=E.texture,N=i.get(E),ie=i.get(v);E.addEventListener("dispose",P);const re=E.textures,J=E.isWebGLCubeRenderTarget===!0,ye=re.length>1;if(ye||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=v.version,a.memory.textures++),J){N.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[fe]=[];for(let ve=0;ve<v.mipmaps.length;ve++)N.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else N.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)N.__webglFramebuffer[fe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ye)for(let fe=0,ve=re.length;fe<ve;fe++){const Re=i.get(re[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ge(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ve=re[fe];N.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[fe]);const Re=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),_e=A(ve.internalFormat,Re,oe,ve.colorSpace,E.isXRRenderTarget===!0),Ae=Ve(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,N.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)he(N.__webglFramebuffer[fe][ve],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else he(N.__webglFramebuffer[fe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,ve=re.length;fe<ve;fe++){const Re=re[fe],oe=i.get(Re);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Fe(n.TEXTURE_2D,Re),he(N.__webglFramebuffer,E,Re,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),p(Re)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),Fe(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)he(N.__webglFramebuffer[ve],E,v,n.COLOR_ATTACHMENT0,fe,ve);else he(N.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,fe,0);p(v)&&d(fe),t.unbindTexture()}E.depthBuffer&&Ue(E)}function He(E){const v=E.textures;for(let N=0,ie=v.length;N<ie;N++){const re=v[N];if(p(re)){const J=T(E),ye=i.get(re).__webglTexture;t.bindTexture(J,ye),d(J),t.unbindTexture()}}}const Ne=[],D=[];function at(E){if(E.samples>0){if(Ge(E)===!1){const v=E.textures,N=E.width,ie=E.height;let re=n.COLOR_BUFFER_BIT;const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),fe=v.length>1;if(fe)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const Re=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,N,ie,0,0,N,ie,re,n.NEAREST),l===!0&&(Ne.length=0,D.length=0,Ne.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ne.push(J),D.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ve]);const Re=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ve(E){return Math.min(r.maxSamples,E.samples)}function Ge(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(E){const v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Qe(E,v){const N=E.colorSpace,ie=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Zi&&N!==Yn&&(Ke.getTransfer(N)===rt?(ie!==pn||re!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=ke,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ge}function gg(n,e){function t(i,r=Yn){let s;const a=Ke.getTransfer(r);if(i===Bn)return n.UNSIGNED_BYTE;if(i===lo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===co)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ql)return n.BYTE;if(i===$l)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===oo)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Sr)return n.HALF_FLOAT;if(i===jl)return n.ALPHA;if(i===Zl)return n.RGB;if(i===pn)return n.RGBA;if(i===Kl)return n.LUMINANCE;if(i===Jl)return n.LUMINANCE_ALPHA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===Ql)return n.RED;if(i===uo)return n.RED_INTEGER;if(i===ec)return n.RG;if(i===ho)return n.RG_INTEGER;if(i===fo)return n.RGBA_INTEGER;if(i===ss||i===as||i===os||i===ls)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===as)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Pa||i===La||i===Da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===La)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ia||i===Ua||i===Na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ia||i===Ua)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Na)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ha||i===Ga||i===Va||i===Wa||i===Xa||i===qa||i===$a||i===Ya||i===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===za)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ka)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Va)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ya)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ja)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cs||i===Za||i===Ka)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cs)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===Ja||i===Qa||i===eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _g={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:vg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Qi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const g=new Mg,p=t.getContextAttributes();let d=null,T=null;const A=[],y=[],L=new st;let R=null;const P=new sn;P.viewport=new ft;const U=new sn;U.viewport=new ft;const b=[P,U],x=new kd;let I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=A[ee];return le===void 0&&(le=new ca,A[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=A[ee];return le===void 0&&(le=new ca,A[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=A[ee];return le===void 0&&(le=new ca,A[ee]=le),le.getHandSpace()};function X(ee){const le=y.indexOf(ee.inputSource);if(le===-1)return;const he=A[le];he!==void 0&&(he.update(ee.inputSource,ee.frame,c||a),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}function H(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let ee=0;ee<A.length;ee++){const le=y[ee];le!==null&&(y[ee]=null,A[ee].disconnect(le))}I=null,Y=null,g.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,T=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Mi(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,he=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?ji:Vi,he=p.stencil?Yi:xi);const Ce={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Mi(h.textureWidth,h.textureHeight,{format:pn,type:Bn,depthTexture:new gc(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(ee){for(let le=0;le<ee.removed.length;le++){const he=ee.removed[le],pe=y.indexOf(he);pe>=0&&(y[pe]=null,A[pe].disconnect(he))}for(let le=0;le<ee.added.length;le++){const he=ee.added[le];let pe=y.indexOf(he);if(pe===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=y.length){y.push(he),pe=Ue;break}else if(y[Ue]===null){y[Ue]=he,pe=Ue;break}if(pe===-1)break}const Ce=A[pe];Ce&&Ce.connect(he)}}const Z=new k,se=new k;function q(ee,le,he){Z.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(he.matrixWorld);const pe=Z.distanceTo(se),Ce=le.projectionMatrix.elements,Ue=he.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),Ie=Ce[14]/(Ce[10]+1),He=(Ce[9]+1)/Ce[5],Ne=(Ce[9]-1)/Ce[5],D=(Ce[8]-1)/Ce[0],at=(Ue[8]+1)/Ue[0],Ve=ke*D,Ge=ke*at,Ee=pe/(-D+at),Qe=Ee*-D;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Qe),ee.translateZ(Ee),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ce[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Te=ke+Ee,E=Ie+Ee,v=Ve-Qe,N=Ge+(pe-Qe),ie=He*Ie/E*Te,re=Ne*Ie/E*Te;ee.projectionMatrix.makePerspective(v,N,ie,re,Te,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let le=ee.near,he=ee.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(he=g.depthFar)),x.near=U.near=P.near=le,x.far=U.far=P.far=he,(I!==x.near||Y!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,Y=x.far),P.layers.mask=ee.layers.mask|2,U.layers.mask=ee.layers.mask|4,x.layers.mask=P.layers.mask|U.layers.mask;const pe=ee.parent,Ce=x.cameras;ae(x,pe);for(let Ue=0;Ue<Ce.length;Ue++)ae(Ce[Ue],pe);Ce.length===2?q(x,P,U):x.projectionMatrix.copy(P.projectionMatrix),ce(ee,x,pe)};function ce(ee,le,he){he===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_r*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ue=null;function Fe(ee,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let pe=!1;he.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let Ue=0;Ue<he.length;Ue++){const ke=he[Ue];let Ie=null;if(m!==null)Ie=m.getViewport(ke);else{const Ne=f.getViewSubImage(h,ke);Ie=Ne.viewport,Ue===0&&(e.setRenderTargetTextures(T,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(T))}let He=b[Ue];He===void 0&&(He=new sn,He.layers.enable(Ue),He.viewport=new ft,b[Ue]=He),He.matrix.fromArray(ke.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ke.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ue===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(He)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=f.getDepthInformation(he[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(e,Ue,r.renderState)}}for(let he=0;he<A.length;he++){const pe=y[he],Ce=A[he];pe!==null&&Ce!==void 0&&Ce.update(pe,le,c||a)}ue&&ue(ee,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const qe=new vc;qe.setAnimationLoop(Fe),this.setAnimationLoop=function(ee){ue=ee},this.dispose=function(){}}}const di=new zn,Sg=new dt;function bg(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,dc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d),A=T.envMap,y=T.envMapRotation;A&&(p.envMap.value=A,di.copy(y),di.x*=-1,di.y*=-1,di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),p.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(di)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Eg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const y=A.program;i.uniformBlockBinding(T,y)}function c(T,A){let y=r[T.id];y===void 0&&(_(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",p));const L=A.program;i.updateUBOMapping(T,L);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function u(T){const A=f();T.__bindingPointIndex=A;const y=n.createBuffer(),L=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=r[T.id],y=T.uniforms,L=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,P=y.length;R<P;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,x=U.length;b<x;b++){const I=U[b];if(m(I,R,b,L)===!0){const Y=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let j=0;j<X.length;j++){const Z=X[j],se=g(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Y+H,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,H),H+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,A,y,L){const R=T.value,P=A+"_"+y;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{const U=L[P];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return L[P]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(T){const A=T.uniforms;let y=0;const L=16;for(let P=0,U=A.length;P<U;P++){const b=Array.isArray(A[P])?A[P]:[A[P]];for(let x=0,I=b.length;x<I;x++){const Y=b[x],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let H=0,j=X.length;H<j;H++){const Z=X[H],se=g(Z),q=y%L,ae=q%se.boundary,ce=q+ae;y+=ae,ce!==0&&L-ce<se.storage&&(y+=L-ce),Y.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=se.storage}}}const R=y%L;return R>0&&(y+=L-R),T.__size=y,T.__cache={},this}function g(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function p(T){const A=T.target;A.removeEventListener("dispose",p);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class bc{constructor(e={}){const{canvas:t=sd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,d=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Jn,this.toneMappingExposure=1;const y=this;let L=!1,R=0,P=0,U=null,b=-1,x=null;const I=new ft,Y=new ft;let X=null;const H=new Je(0);let j=0,Z=t.width,se=t.height,q=1,ae=null,ce=null;const ue=new ft(0,0,Z,se),Fe=new ft(0,0,Z,se);let qe=!1;const ee=new pc;let le=!1,he=!1;const pe=new dt,Ce=new dt,Ue=new k,ke=new ft,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Ne(){return U===null?q:1}let D=i;function at(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ao}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Q,!1),D===null){const F="webgl2";if(D=at(F,M),D===null)throw at(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,Ge,Ee,Qe,Te,E,v,N,ie,re,J,ye,fe,ve,Re,oe,_e,Ae,De,S,O,G,K,w;function z(){Ve=new Up(D),Ve.init(),G=new gg(D,Ve),Ge=new Rp(D,Ve,e,G),Ee=new pg(D,Ve),Ge.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),Qe=new Op(D),Te=new tg,E=new mg(D,Ve,Ee,Te,Ge,G,Qe),v=new Pp(y),N=new Ip(y),ie=new Vd(D),K=new Ap(D,ie),re=new Np(D,ie,Qe,K),J=new zp(D,re,ie,Qe),De=new Bp(D,Ge,E),oe=new Cp(Te),ye=new eg(y,v,N,Ve,Ge,K,oe),fe=new bg(y,Te),ve=new ig,Re=new cg(Ve),Ae=new Tp(y,v,N,Ee,J,m,l),_e=new hg(y,J,Ge),w=new Eg(D,Qe,Ge,Ee),S=new wp(D,Ve,Qe),O=new Fp(D,Ve,Qe),Qe.programs=ye.programs,y.capabilities=Ge,y.extensions=Ve,y.properties=Te,y.renderLists=ve,y.shadowMap=_e,y.state=Ee,y.info=Qe}z();const B=new yg(y,D);this.xr=B,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(Z,se,!1))},this.getSize=function(M){return M.set(Z,se)},this.setSize=function(M,F,W=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,se=F,t.width=Math.floor(M*q),t.height=Math.floor(F*q),W===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Z*q,se*q).floor()},this.setDrawingBufferSize=function(M,F,W){Z=M,se=F,q=W,t.width=Math.floor(M*W),t.height=Math.floor(F*W),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(ue)},this.setViewport=function(M,F,W,V){M.isVector4?ue.set(M.x,M.y,M.z,M.w):ue.set(M,F,W,V),Ee.viewport(I.copy(ue).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,F,W,V){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,F,W,V),Ee.scissor(Y.copy(Fe).multiplyScalar(q).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){Ee.setScissorTest(qe=M)},this.setOpaqueSort=function(M){ae=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,F=!0,W=!0){let V=0;if(M){let C=!1;if(U!==null){const ne=U.texture.format;C=ne===fo||ne===ho||ne===uo}if(C){const ne=U.texture.type,me=ne===Bn||ne===xi||ne===gr||ne===Yi||ne===lo||ne===co,xe=Ae.getClearColor(),be=Ae.getClearAlpha(),Be=xe.r,ze=xe.g,Pe=xe.b;me?(_[0]=Be,_[1]=ze,_[2]=Pe,_[3]=be,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Be,g[1]=ze,g[2]=Pe,g[3]=be,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT),W&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ae.dispose(),ve.dispose(),Re.dispose(),Te.dispose(),v.dispose(),N.dispose(),J.dispose(),K.dispose(),w.dispose(),ye.dispose(),B.dispose(),B.removeEventListener("sessionstart",Wt),B.removeEventListener("sessionend",bn),Et.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=Qe.autoReset,F=_e.enabled,W=_e.autoUpdate,V=_e.needsUpdate,C=_e.type;z(),Qe.autoReset=M,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=V,_e.type=C}function Q(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function we(M){const F=M.target;F.removeEventListener("dispose",we),et(F)}function et(M){lt(M),Te.remove(M)}function lt(M){const F=Te.get(M).programs;F!==void 0&&(F.forEach(function(W){ye.releaseProgram(W)}),M.isShaderMaterial&&ye.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,W,V,C,ne){F===null&&(F=Ie);const me=C.isMesh&&C.matrixWorld.determinant()<0,xe=Hn(M,F,W,V,C);Ee.setMaterial(V,me);let be=W.index,Be=1;if(V.wireframe===!0){if(be=re.getWireframeAttribute(W),be===void 0)return;Be=2}const ze=W.drawRange,Pe=W.attributes.position;let je=ze.start*Be,tt=(ze.start+ze.count)*Be;ne!==null&&(je=Math.max(je,ne.start*Be),tt=Math.min(tt,(ne.start+ne.count)*Be)),be!==null?(je=Math.max(je,0),tt=Math.min(tt,be.count)):Pe!=null&&(je=Math.max(je,0),tt=Math.min(tt,Pe.count));const pt=tt-je;if(pt<0||pt===1/0)return;K.setup(C,V,xe,W,be);let ut,Ze=S;if(be!==null&&(ut=ie.get(be),Ze=O,Ze.setIndex(ut)),C.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*Ne()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(C.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*Ne()),C.isLineSegments?Ze.setMode(D.LINES):C.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else C.isPoints?Ze.setMode(D.POINTS):C.isSprite&&Ze.setMode(D.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)Ze.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const Le=C._multiDrawStarts,Tt=C._multiDrawCounts,nt=C._multiDrawCount,cn=be?ie.get(be).bytesPerElement:1,yi=Te.get(V).currentProgram.getUniforms();for(let $t=0;$t<nt;$t++)yi.setValue(D,"_gl_DrawID",$t),Ze.render(Le[$t]/cn,Tt[$t])}else if(C.isInstancedMesh)Ze.renderInstances(je,pt,C.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,Le);Ze.renderInstances(je,pt,Tt)}else Ze.render(je,pt)};function $e(M,F,W){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,qt(M,F,W),M.side=ti,M.needsUpdate=!0,qt(M,F,W),M.side=Ln):qt(M,F,W)}this.compile=function(M,F,W=null){W===null&&(W=M),d=Re.get(W),d.init(F),A.push(d),W.traverseVisible(function(C){C.isLight&&C.layers.test(F.layers)&&(d.pushLight(C),C.castShadow&&d.pushShadow(C))}),M!==W&&M.traverseVisible(function(C){C.isLight&&C.layers.test(F.layers)&&(d.pushLight(C),C.castShadow&&d.pushShadow(C))}),d.setupLights();const V=new Set;return M.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const ne=C.material;if(ne)if(Array.isArray(ne))for(let me=0;me<ne.length;me++){const xe=ne[me];$e(xe,W,C),V.add(xe)}else $e(ne,W,C),V.add(ne)}),A.pop(),d=null,V},this.compileAsync=function(M,F,W=null){const V=this.compile(M,F,W);return new Promise(C=>{function ne(){if(V.forEach(function(me){Te.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){C(M);return}setTimeout(ne,10)}Ve.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let xt=null;function At(M){xt&&xt(M)}function Wt(){Et.stop()}function bn(){Et.start()}const Et=new vc;Et.setAnimationLoop(At),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(M){xt=M,B.setAnimationLoop(M),M===null?Et.stop():Et.start()},B.addEventListener("sessionstart",Wt),B.addEventListener("sessionend",bn),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(F),F=B.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,U),d=Re.get(M,A.length),d.init(F),A.push(d),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ee.setFromProjectionMatrix(Ce),he=this.localClippingEnabled,le=oe.init(this.clippingPlanes,he),p=ve.get(M,T.length),p.init(),T.push(p),B.enabled===!0&&B.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Oe(ne,F,-1/0,y.sortObjects)}Oe(M,F,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ae,ce),He=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,He&&Ae.addToRenderList(p,M),this.info.render.frame++,le===!0&&oe.beginShadows();const W=d.state.shadowsArray;_e.render(W,M,F),le===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,C=p.transmissive;if(d.setupLights(),F.isArrayCamera){const ne=F.cameras;if(C.length>0)for(let me=0,xe=ne.length;me<xe;me++){const be=ne[me];Dt(V,C,M,be)}He&&Ae.render(M);for(let me=0,xe=ne.length;me<xe;me++){const be=ne[me];St(p,M,be,be.viewport)}}else C.length>0&&Dt(V,C,M,F),He&&Ae.render(M),St(p,M,F);U!==null&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(y,M,F),K.resetDefaultState(),b=-1,x=null,A.pop(),A.length>0?(d=A[A.length-1],le===!0&&oe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Oe(M,F,W,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){V&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);const me=J.update(M),xe=M.material;xe.visible&&p.push(M,me,xe,W,ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){const me=J.update(M),xe=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ke.copy(me.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(xe)){const be=me.groups;for(let Be=0,ze=be.length;Be<ze;Be++){const Pe=be[Be],je=xe[Pe.materialIndex];je&&je.visible&&p.push(M,me,je,W,ke.z,Pe)}}else xe.visible&&p.push(M,me,xe,W,ke.z,null)}}const ne=M.children;for(let me=0,xe=ne.length;me<xe;me++)Oe(ne[me],F,W,V)}function St(M,F,W,V){const C=M.opaque,ne=M.transmissive,me=M.transparent;d.setupLightsView(W),le===!0&&oe.setGlobalState(y.clippingPlanes,W),V&&Ee.viewport(I.copy(V)),C.length>0&&Xt(C,F,W),ne.length>0&&Xt(ne,F,W),me.length>0&&Xt(me,F,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Dt(M,F,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Mi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Sr:Bn,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=d.state.transmissionRenderTarget[V.id],me=V.viewport||I;ne.setSize(me.z,me.w);const xe=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(H),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),He&&Ae.render(W);const be=y.toneMapping;y.toneMapping=Jn;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),le===!0&&oe.setGlobalState(y.clippingPlanes,V),Xt(M,W,V),E.updateMultisampleRenderTarget(ne),E.updateRenderTargetMipmap(ne),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Pe=0,je=F.length;Pe<je;Pe++){const tt=F[Pe],pt=tt.object,ut=tt.geometry,Ze=tt.material,Le=tt.group;if(Ze.side===Ln&&pt.layers.test(V.layers)){const Tt=Ze.side;Ze.side=Gt,Ze.needsUpdate=!0,ct(pt,W,V,ut,Ze,Le),Ze.side=Tt,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(E.updateMultisampleRenderTarget(ne),E.updateRenderTargetMipmap(ne))}y.setRenderTarget(xe),y.setClearColor(H,j),Be!==void 0&&(V.viewport=Be),y.toneMapping=be}function Xt(M,F,W){const V=F.isScene===!0?F.overrideMaterial:null;for(let C=0,ne=M.length;C<ne;C++){const me=M[C],xe=me.object,be=me.geometry,Be=V===null?me.material:V,ze=me.group;xe.layers.test(W.layers)&&ct(xe,F,W,be,Be,ze)}}function ct(M,F,W,V,C,ne){M.onBeforeRender(y,F,W,V,C,ne),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),C.onBeforeRender(y,F,W,V,M,ne),C.transparent===!0&&C.side===Ln&&C.forceSinglePass===!1?(C.side=Gt,C.needsUpdate=!0,y.renderBufferDirect(W,F,V,C,M,ne),C.side=ti,C.needsUpdate=!0,y.renderBufferDirect(W,F,V,C,M,ne),C.side=Ln):y.renderBufferDirect(W,F,V,C,M,ne),M.onAfterRender(y,F,W,V,C,ne)}function qt(M,F,W){F.isScene!==!0&&(F=Ie);const V=Te.get(M),C=d.state.lights,ne=d.state.shadowsArray,me=C.state.version,xe=ye.getParameters(M,C.state,ne,F,W),be=ye.getProgramCacheKey(xe);let Be=V.programs;V.environment=M.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",we),Be=new Map,V.programs=Be);let ze=Be.get(be);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===me)return Jt(M,xe),ze}else xe.uniforms=ye.getUniforms(M),M.onBeforeCompile(xe,y),ze=ye.acquireProgram(xe,be),Be.set(be,ze),V.uniforms=xe.uniforms;const Pe=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Jt(M,xe),V.needsLights=It(M),V.lightsStateVersion=me,V.needsLights&&(Pe.ambientLightColor.value=C.state.ambient,Pe.lightProbe.value=C.state.probe,Pe.directionalLights.value=C.state.directional,Pe.directionalLightShadows.value=C.state.directionalShadow,Pe.spotLights.value=C.state.spot,Pe.spotLightShadows.value=C.state.spotShadow,Pe.rectAreaLights.value=C.state.rectArea,Pe.ltc_1.value=C.state.rectAreaLTC1,Pe.ltc_2.value=C.state.rectAreaLTC2,Pe.pointLights.value=C.state.point,Pe.pointLightShadows.value=C.state.pointShadow,Pe.hemisphereLights.value=C.state.hemi,Pe.directionalShadowMap.value=C.state.directionalShadowMap,Pe.directionalShadowMatrix.value=C.state.directionalShadowMatrix,Pe.spotShadowMap.value=C.state.spotShadowMap,Pe.spotLightMatrix.value=C.state.spotLightMatrix,Pe.spotLightMap.value=C.state.spotLightMap,Pe.pointShadowMap.value=C.state.pointShadowMap,Pe.pointShadowMatrix.value=C.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function wt(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=us.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Jt(M,F){const W=Te.get(M);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Hn(M,F,W,V,C){F.isScene!==!0&&(F=Ie),E.resetTextureUnits();const ne=F.fog,me=V.isMeshStandardMaterial?F.environment:null,xe=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Zi,be=(V.isMeshStandardMaterial?N:v).get(V.envMap||me),Be=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let pt=Jn;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=y.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=ut!==void 0?ut.length:0,Le=Te.get(V),Tt=d.state.lights;if(le===!0&&(he===!0||M!==x)){const Ut=M===x&&V.id===b;oe.setState(V,M,Ut)}let nt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Tt.state.version||Le.outputColorSpace!==xe||C.isBatchedMesh&&Le.batching===!1||!C.isBatchedMesh&&Le.batching===!0||C.isBatchedMesh&&Le.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Le.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Le.instancing===!1||!C.isInstancedMesh&&Le.instancing===!0||C.isSkinnedMesh&&Le.skinning===!1||!C.isSkinnedMesh&&Le.skinning===!0||C.isInstancedMesh&&Le.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Le.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Le.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Le.instancingMorph===!1&&C.morphTexture!==null||Le.envMap!==be||V.fog===!0&&Le.fog!==ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==ze||Le.morphTargets!==Pe||Le.morphNormals!==je||Le.morphColors!==tt||Le.toneMapping!==pt||Le.morphTargetsCount!==Ze)&&(nt=!0):(nt=!0,Le.__version=V.version);let cn=Le.currentProgram;nt===!0&&(cn=qt(V,F,C));let yi=!1,$t=!1,rr=!1;const ot=cn.getUniforms(),en=Le.uniforms;if(Ee.useProgram(cn.program)&&(yi=!0,$t=!0,rr=!0),V.id!==b&&(b=V.id,$t=!0),yi||x!==M){Ee.buffers.depth.getReversed()?(pe.copy(M.projectionMatrix),od(pe),ld(pe),ot.setValue(D,"projectionMatrix",pe)):ot.setValue(D,"projectionMatrix",M.projectionMatrix),ot.setValue(D,"viewMatrix",M.matrixWorldInverse);const zt=ot.map.cameraPosition;zt!==void 0&&zt.setValue(D,Ue.setFromMatrixPosition(M.matrixWorld)),Ge.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,$t=!0,rr=!0)}if(C.isSkinnedMesh){ot.setOptional(D,C,"bindMatrix"),ot.setOptional(D,C,"bindMatrixInverse");const Ut=C.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ot.setValue(D,"boneTexture",Ut.boneTexture,E))}C.isBatchedMesh&&(ot.setOptional(D,C,"batchingTexture"),ot.setValue(D,"batchingTexture",C._matricesTexture,E),ot.setOptional(D,C,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",C._indirectTexture,E),ot.setOptional(D,C,"batchingColorTexture"),C._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",C._colorsTexture,E));const tn=W.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&De.update(C,W,cn),($t||Le.receiveShadow!==C.receiveShadow)&&(Le.receiveShadow=C.receiveShadow,ot.setValue(D,"receiveShadow",C.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=be,en.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),$t&&(ot.setValue(D,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&Qt(en,rr),ne&&V.fog===!0&&fe.refreshFogUniforms(en,ne),fe.refreshMaterialUniforms(en,V,q,se,d.state.transmissionRenderTarget[M.id]),us.upload(D,wt(Le),en,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(us.upload(D,wt(Le),en,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(D,"center",C.center),ot.setValue(D,"modelViewMatrix",C.modelViewMatrix),ot.setValue(D,"normalMatrix",C.normalMatrix),ot.setValue(D,"modelMatrix",C.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ut=V.uniformsGroups;for(let zt=0,Us=Ut.length;zt<Us;zt++){const si=Ut[zt];w.update(si,cn),w.bind(si,cn)}}return cn}function Qt(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function It(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,F,W){Te.get(M.texture).__webglTexture=F,Te.get(M.depthTexture).__webglTexture=W;const V=Te.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const W=Te.get(M);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,W=0){U=M,R=F,P=W;let V=!0,C=null,ne=!1,me=!1;if(M){const be=Te.get(M);if(be.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(be.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(be.__hasExternalTextures)E.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Pe=M.depthTexture;if(be.__boundDepthTexture!==Pe){if(Pe!==null&&Te.has(Pe)&&(M.width!==Pe.image.width||M.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const ze=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?C=ze[F][W]:C=ze[F],ne=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?C=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?C=ze[W]:C=ze,I.copy(M.viewport),Y.copy(M.scissor),X=M.scissorTest}else I.copy(ue).multiplyScalar(q).floor(),Y.copy(Fe).multiplyScalar(q).floor(),X=qe;if(Ee.bindFramebuffer(D.FRAMEBUFFER,C)&&V&&Ee.drawBuffers(M,C),Ee.viewport(I),Ee.scissor(Y),Ee.setScissorTest(X),ne){const be=Te.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,W)}else if(me){const be=Te.get(M.texture),Be=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,W||0,Be)}b=-1},this.readRenderTargetPixels=function(M,F,W,V,C,ne,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Ee.bindFramebuffer(D.FRAMEBUFFER,xe);try{const be=M.texture,Be=be.format,ze=be.type;if(!Ge.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&W>=0&&W<=M.height-C&&D.readPixels(F,W,V,C,G.convert(Be),G.convert(ze),ne)}finally{const be=U!==null?Te.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(M,F,W,V,C,ne,me){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){const be=M.texture,Be=be.format,ze=be.type;if(!Ge.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-V&&W>=0&&W<=M.height-C){Ee.bindFramebuffer(D.FRAMEBUFFER,xe);const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),D.readPixels(F,W,V,C,G.convert(Be),G.convert(ze),0);const je=U!==null?Te.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,je);const tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ad(D,tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(Pe),D.deleteSync(tt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,W=0){M.isTexture!==!0&&(zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-W),C=Math.floor(M.image.width*V),ne=Math.floor(M.image.height*V),me=F!==null?F.x:0,xe=F!==null?F.y:0;E.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,me,xe,C,ne),Ee.unbindTexture()};const ri=D.createFramebuffer(),ir=D.createFramebuffer();this.copyTextureToTexture=function(M,F,W=null,V=null,C=0,ne=null){M.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],F=arguments[2],ne=arguments[3]||0,W=null),ne===null&&(C!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=C,C=0):ne=0);let me,xe,be,Be,ze,Pe,je,tt,pt;const ut=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(W!==null)me=W.max.x-W.min.x,xe=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,ze=W.min.y,Pe=W.isBox3?W.min.z:0;else{const tn=Math.pow(2,-C);me=Math.floor(ut.width*tn),xe=Math.floor(ut.height*tn),M.isDataArrayTexture?be=ut.depth:M.isData3DTexture?be=Math.floor(ut.depth*tn):be=1,Be=0,ze=0,Pe=0}V!==null?(je=V.x,tt=V.y,pt=V.z):(je=0,tt=0,pt=0);const Ze=G.convert(F.format),Le=G.convert(F.type);let Tt;F.isData3DTexture?(E.setTexture3D(F,0),Tt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),Tt=D.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),$t=D.getParameter(D.UNPACK_SKIP_ROWS),rr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe);const ot=M.isDataArrayTexture||M.isData3DTexture,en=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const tn=Te.get(M),Ut=Te.get(F),zt=Te.get(tn.__renderTarget),Us=Te.get(Ut.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let si=0;si<be;si++)ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,C,Pe+si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,ne,pt+si)),D.blitFramebuffer(Be,ze,me,xe,je,tt,me,xe,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(C!==0||M.isRenderTargetTexture||Te.has(M)){const tn=Te.get(M),Ut=Te.get(F);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,ri),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,ir);for(let zt=0;zt<be;zt++)ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,C,Pe+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,C),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,ne,pt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,ne),C!==0?D.blitFramebuffer(Be,ze,me,xe,je,tt,me,xe,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(Tt,ne,je,tt,pt+zt,Be,ze,me,xe):D.copyTexSubImage2D(Tt,ne,je,tt,Be,ze,me,xe);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Tt,ne,je,tt,pt,me,xe,be,Ze,Le,ut.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,ne,je,tt,pt,me,xe,be,Ze,ut.data):D.texSubImage3D(Tt,ne,je,tt,pt,me,xe,be,Ze,Le,ut):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,je,tt,me,xe,Ze,Le,ut.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,je,tt,ut.width,ut.height,Ze,ut.data):D.texSubImage2D(D.TEXTURE_2D,ne,je,tt,me,xe,Ze,Le,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rr),ne===0&&F.generateMipmaps&&D.generateMipmap(Tt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,F,W=null,V=null,C=0){return M.isTexture!==!0&&(zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,V=arguments[1]||null,M=arguments[2],F=arguments[3],C=arguments[4]||0),zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,W,V,C)},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){R=0,P=0,U=null,Ee.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Tg=[{id:"amplitude",type:"number",range:[0,1],category:"base"},{id:"binEnergy",type:"number",range:[0,1],category:"base"},{id:"frequencyHz",type:"number",range:[0,22050],category:"base"},{id:"normFreq",type:"number",range:[0,1],category:"base"},{id:"bass",type:"number",range:[0,1],category:"base"},{id:"mid",type:"number",range:[0,1],category:"base"},{id:"high",type:"number",range:[0,1],category:"base"},{id:"peakFreq",type:"number",range:[0,22050],category:"base"},{id:"pan",type:"number",range:[-1,1],category:"base"},{id:"time",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"base"},{id:"deltaTime",type:"number",range:[0,1],category:"base"},{id:"spectralCentroid",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlux",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlatness",type:"number",range:[0,1],category:"advanced"},{id:"inharmonicity",type:"number",range:[0,1],category:"advanced"},{id:"canvasWidthPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasWidthUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"audioLengthSec",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"}],Ag=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]}],wg=Object.freeze({r:"red",g:"green",b:"blue",a:"opacity",backgroundRed:"red",backgroundGreen:"green",backgroundBlue:"blue"}),Rg=Object.freeze(new Set(["backgroundRed","backgroundGreen","backgroundBlue"])),ws=Object.freeze(["spawnedParticles","allParticles","background","camera"]),Ec=Object.freeze(["spawnedOnly","allLivingFrame"]),vo=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),Tc=Object.freeze(["always",">",">=","<","<=","==","!="]),Rs=Object.freeze({version:1,entries:Object.freeze(Tg.map(n=>Object.freeze({...n})))}),Cs=Object.freeze({version:1,entries:Object.freeze(Ag.map(n=>Object.freeze({...n})))});new Map(Rs.entries.map(n=>[n.id,n]));const Cg=new Map(Cs.entries.map(n=>[n.id,n]));function Ac(){return Rs}function Pg(){return Cs}function Lg(n){return!n||n.type==="always"||n.operator==="always"}function Dg(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Rl(n,e){if(typeof n!="string")return null;const t=n.trim();if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(t))return"Expression contains unsupported characters.";if(!Dg(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","PI","E","true","false"]),r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)if(!i.has(s))return`Expression references unknown identifier: ${s}`;return null}function wc(n){return typeof n!="string"?n:wg[n]||n}function xo(n){return ws.includes(n==null?void 0:n.target)?n.target:(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Ig(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:ws).includes(e)}function Ug(n,e={input:Rs,output:Cs}){var f,h,m,_,g;const t=[],i=[],r=[],s=new Map((((f=e.input)==null?void 0:f.entries)??[]).map(p=>[p.id,p])),a=new Map((((h=e.output)==null?void 0:h.entries)??[]).map(p=>[p.id,p]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};Ec.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=xo(n);if(ws.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(m=n.condition)!=null&&m.operator&&!Tc.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((_=n.condition)==null?void 0:_.expression)!==void 0){const p=Rl(n.condition.expression,s);p&&t.push(`Condition expression invalid: ${p}`)}const l=(g=n.condition)==null?void 0:g.input;l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((p,d)=>{const T=wc(p==null?void 0:p.output);if(!T||!a.has(T)){t.push(`Unknown action output at index ${d}: ${String(T)}`);return}const A=a.get(T);if(Ig(A,o)||t.push(`Output ${T} is not valid for target ${o} at index ${d}`),p!=null&&p.operator&&!vo.includes(p.operator)&&t.push(`Unknown action operator at index ${d}: ${String(p.operator)}`),A.type==="enum"&&(p==null?void 0:p.value)!==void 0&&!A.values.includes(p.value)&&t.push(`Invalid enum value for ${T} at index ${d}: ${String(p.value)}. Allowed: ${A.values.join("|")}`),(p==null?void 0:p.operator)==="set"){const y=u.get(T);y!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:T,overriddenActionIndex:y,winningActionIndex:d,resolution:"latter-executes"}),i.push(`Contradiction on ${T}: action ${d} overrides action ${y}.`)),u.set(T,d)}if(p!=null&&p.input&&!s.has(p.input)&&t.push(`Unknown action input at index ${d}: ${p.input}`),(p==null?void 0:p.expression)!==void 0){const y=Rl(p.expression,s);y&&t.push(`Action expression invalid at index ${d}: ${y}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function Ng(n){const e=Array.isArray(n)?n:[],t=new Map,i=new Set,r=[];return e.forEach((a,o)=>{if(!(a!=null&&a.enabled))return;const l=a.scope||"spawnedOnly",c=a.id||`rule-${o}`,u=Array.isArray(a.actions)?a.actions:[];Lg(a.condition)&&u.forEach(h=>{if((h==null?void 0:h.operator)!=="set"||!Cg.has(h==null?void 0:h.output))return;const m=xo(a),_=`${m}:${l}:${h.output}`,g=t.get(_);g&&(i.add(g.ruleId),i.add(c),r.push({color:"red",type:"crossRuleConflict",scope:l,target:m,output:h.output,overriddenRuleId:g.ruleId,winningRuleId:c,resolution:"latter-executes"})),t.set(_,{ruleId:c,index:o})})}),{rules:e.map((a,o)=>{const l=(a==null?void 0:a.id)||`rule-${o}`;return{...a,uiState:i.has(l)?"red":"normal"}}),notes:r,redRuleIds:[...i]}}function Rc(n,e={input:Rs,output:Cs}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,target:xo(s),scope:Ec.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(c=>({...c})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),Tc.includes(o.condition.operator)||(o.condition.operator="always"),o.scope=o.target==="spawnedParticles"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(c=>c&&typeof c=="object").map(c=>{const u=c.output;return Rg.has(u)&&!(s!=null&&s.target)&&(o.target="background",o.scope="allLivingFrame"),{operator:vo.includes(c.operator)?c.operator:"set",output:wc(u),value:c.value,input:c.input,expression:c.expression}});const l=Ug(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Ps="http://localhost:8000",Cc="seesound_user_defaults_v4",Pc="seesound_disabled_v4",xs=1,Fg={logCompilerStatus:!1,logCompilerTiming:!1},Cl=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:xs}),Pl=[{id:"inputGain",label:"Input"},{id:"geometry",label:"Geometry"},{id:"mixing",label:"Mixing"}],vr=[{key:"inputGain",group:"inputGain",label:"Input Gain",min:0,max:3,step:.01,default:1,unit:"×",desc:"Scales every amplitude value before processing. 1× = unchanged.",canDisable:!1},{key:"amplitudeThreshold",group:"inputGain",label:"Amplitude Threshold",min:-96,max:0,step:1,default:-48,unit:"dB",desc:"Hard noise gate: any bin quieter than this level is hidden.",canDisable:!0},{key:"brightnessFloor",group:"inputGain",label:"Brightness Floor",min:0,max:1,step:.01,default:.2,unit:"",desc:"Minimum particle brightness when signal is present.",canDisable:!1},{key:"amplitudeToBrightness",group:"inputGain",label:"Amp→Brightness",min:0,max:4,step:.01,default:1.25,unit:"×",desc:"How strongly audio amplitude increases particle brightness.",canDisable:!1},{key:"defaultParticleSize",group:"geometry",label:"Particle Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"freqDepthEffect",group:"geometry",label:"Bass→Larger",min:0,max:100,step:1,default:100,unit:"%",desc:"Bass frequencies draw as larger particles. 0% = all bins same size.",canDisable:!0,neutralValue:0},{key:"zDepth",group:"geometry",label:"Z-Axis Depth",min:0,max:100,step:1,default:0,unit:"%",desc:"Recedes higher-frequency particles into the depth axis.",canDisable:!0},{key:"frequencySpread",group:"geometry",label:"Frequency Spread",min:.6,max:2.4,step:.01,default:1.35,unit:"γ",desc:"Vertical remap exponent on log₂ frequency: >1 compresses bass spacing and opens treble spacing.",canDisable:!1},{key:"lowFrequencyCutoff",group:"geometry",label:"Low Freq Cutoff",min:16,max:2e4,step:1,default:16,unit:"Hz",desc:"Only process bins at or above this frequency. This does not alter any other mapping behavior.",canDisable:!1},{key:"highFrequencyCutoff",group:"geometry",label:"High Freq Cutoff",min:16,max:2e4,step:1,default:2e4,unit:"Hz",desc:"Only process bins at or below this frequency. This does not alter any other mapping behavior.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Max Particle Capacity",min:4096,max:8e6,step:1024,default:262144,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particleRenderPercent",group:"geometry",label:"Particle Render %",min:1,max:100,step:1,default:100,unit:"%",desc:"Bin thinning: only this percentage of FFT bins can spawn particles each frame (evenly distributed by bin index).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]}];function Lc(){try{return JSON.parse(localStorage.getItem(Cc)||"{}")}catch{return{}}}function Og(){try{return new Set(JSON.parse(localStorage.getItem(Pc)||"[]"))}catch{return new Set}}function wr(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=Rc(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:Cl.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):Cl.ruleSchemaVersion,r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Bg(){const n=wr(Lc()),e={};for(const t of vr)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.tonicHz=n.tonicHz??261.63,e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e}const Se=Bg(),Kt=Og(),io=new Set;function Ls(n){return io.add(n),()=>io.delete(n)}function xr(n,e){for(const t of io)t(Se,n,e)}function Qn(n,e){Se[n]=e,xr(n,e)}function Ds(n){const e=wr(n);for(const[t,i]of Object.entries(e))Se[t]=i,xr(t,i);xr("*",e)}function zg(){for(const n of vr)Se[n.key]=n.default;Se.tonicHz=261.63,Se.ruleBlocks=[],Se.ruleEngineEnabled=!0,Se.ruleSchemaVersion=xs,xr("*",null)}function Ms(n,e){try{const t=Lc();t[n]=e,localStorage.setItem(Cc,JSON.stringify(t))}catch{}}function kg(n){Kt.has(n)?Kt.delete(n):Kt.add(n);try{localStorage.setItem(Pc,JSON.stringify([...Kt]))}catch{}xr("disabled",n)}function Mo(){const n=wr(Se);return{...Se,...n,_disabled:[...Kt]}}async function Dc(){try{const n=await fetch(`${Ps}/api/presets`,{cache:"no-store"});return n.ok?(await n.json()).presets??[]:[]}catch{return[]}}async function Ic(n,e){const t=wr(e);return fetch(`${Ps}/api/presets`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,params:t})}).then(i=>i.json())}async function Uc(n){const e=await fetch(`${Ps}/api/presets/${encodeURIComponent(n)}`,{cache:"no-store"});if(!e.ok)return null;const t=await e.json();return t!=null&&t.params?{...t,params:wr(t.params)}:t}async function Nc(n){return fetch(`${Ps}/api/presets/${encodeURIComponent(n)}`,{method:"DELETE"}).then(e=>e.json())}const Hg=1;function Gg(n){let e="";for(let i=0;i<n.length;i+=32768){const r=n.subarray(i,i+32768);e+=String.fromCharCode(...r)}return btoa(e)}function Vg(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}async function Wg(n){const e=new Uint8Array(await n.arrayBuffer());return`data:${n.type||"application/octet-stream"};base64,${Gg(e)}`}function Xg(n,e="audio.bin"){if(typeof n!="string"||!n.startsWith("data:"))throw new Error("Invalid embedded audio payload.");const t=n.indexOf(",");if(t<0)throw new Error("Malformed data URL.");const i=n.slice(0,t),r=n.slice(t+1),s=i.match(/^data:([^;]+);base64$/),a=(s==null?void 0:s[1])||"application/octet-stream",o=Vg(r);return new File([o],e,{type:a})}function qg({params:n,presetName:e="",audioDataUrl:t="",audioFileName:i=""}){return{schemaVersion:Hg,createdAt:new Date().toISOString(),presetName:String(e||""),params:n&&typeof n=="object"?n:{},audio:t?{fileName:i||"audio.bin",dataUrl:t}:null}}function $g(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return e}function Yg(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function te(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:r==="title"?i.title=s:i.setAttribute(r,s);return i}function hi(n,e){return n.isDropdown||n.isToggle||Number.isInteger(n.step)?String(e):Number(e).toFixed(2)}let ur=null;function yo(n){const e=te("button","cp-info-btn",{text:"ⓘ","aria-label":`Info: ${n.label}`});let t;return n.isDropdown?t=n.dropdownGroups?n.dropdownGroups.flatMap(i=>i.options.map(r=>r.label)).join(", "):(n.dropdownOptions??[]).map(i=>i.label).join(", "):n.isToggle?t=(n.toggleLabels??["Off","On"]).join(" / "):t=`${n.min}–${n.max}${n.unit?" "+n.unit:""}`,e.addEventListener("click",i=>{if(i.stopPropagation(),ur&&(ur.remove(),ur=null),e.classList.contains("active")){e.classList.remove("active");return}const r=te("div","cp-info-popup");r.innerHTML=`
      <div class="cp-info-title">${n.label}</div>
      <div class="cp-info-desc">${n.desc}</div>
      <div class="cp-info-meta">
        ${n.isToggle?"Options":"Range"}: ${t}
        ${!n.isToggle&&n.neutralValue!==void 0?` · Neutral: ${n.neutralValue}`:""}
        ${n.isToggle?"":` · Default: ${n.default}${n.unit?" "+n.unit:""}`}
      </div>`;const s=e.getBoundingClientRect();r.style.top=`${s.bottom+6}px`,r.style.left=`${Math.min(s.left,window.innerWidth-280)}px`,document.body.appendChild(r),e.classList.add("active"),ur=r,r.addEventListener("click",a=>a.stopPropagation()),requestAnimationFrame(()=>{const a=()=>{r.remove(),e.classList.remove("active"),ur=null,document.removeEventListener("click",a),document.removeEventListener("keydown",o)},o=l=>{l.key==="Escape"&&a()};document.addEventListener("click",a),document.addEventListener("keydown",o)})}),e}function So(n,e){const t=te("button","cp-bypass-btn"),i=()=>{const r=Kt.has(n.key);t.textContent=r?"○":"●",t.title=r?`${n.label} is bypassed — click to enable`:`Click to bypass ${n.label}`,e.classList.toggle("cp-row-disabled",r)};return i(),t.addEventListener("click",()=>{kg(n.key),i(),jg(n)}),t}const Fn=new Map;function jg(n,e){var t;(t=Fn.get(n.key))==null||t(Se[n.key])}function Zg(n){const e=te("div","cp-row");e.classList.toggle("cp-row-disabled",Kt.has(n.key)),n.canDisable&&e.appendChild(So(n,e));const t=te("label","cp-label",{text:n.label,title:n.desc});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=te("div","cp-slider-wrap"),r=te("input","cp-slider",{id:`cp-${n.key}`,type:"range",min:n.min,max:n.max,step:n.step,value:Se[n.key]}),s=te("input","cp-val-input",{type:"number",step:n.step,value:hi(n,Se[n.key]),title:`Current value${n.unit?" ("+n.unit+")":""}`}),a=(()=>{try{return JSON.parse(localStorage.getItem("seesound_user_defaults_v3")||"{}")}catch{return{}}})(),o=te("input","cp-def-input",{type:"number",step:n.step,value:hi(n,a[n.key]??n.default),title:"Saved default — press Enter to save"}),l=te("button","cp-star-btn",{text:"★",title:"Save current value as session default"});return r.addEventListener("input",()=>{const c=parseFloat(r.value);Qn(n.key,c),s.value=hi(n,c),updateTrack(c)}),s.addEventListener("change",()=>{const c=parseFloat(s.value);isNaN(c)||(Qn(n.key,c),r.value=String(Math.min(n.max,Math.max(n.min,c))),updateTrack(c))}),s.addEventListener("keydown",c=>{c.key==="Escape"&&(s.value=hi(n,Se[n.key]))}),o.addEventListener("keydown",c=>{if(c.key==="Enter"){const u=parseFloat(o.value);isNaN(u)||Ms(n.key,u),o.blur()}c.key==="Escape"&&o.blur()}),o.addEventListener("blur",()=>{o.value=hi(n,parseFloat(o.value)||(a[n.key]??n.default))}),l.addEventListener("click",()=>{Ms(n.key,Se[n.key]),o.value=hi(n,Se[n.key])}),Fn.set(n.key,c=>{r.value=String(Math.min(n.max,Math.max(n.min,c))),s.value=hi(n,c),updateTrack(c),e.classList.toggle("cp-row-disabled",Kt.has(n.key))}),i.append(r,s,o,l,yo(n)),e.appendChild(i),e}function Kg(n){const e=te("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",Kt.has(n.key)),n.canDisable&&e.appendChild(So(n,e));const t=te("label","cp-label",{text:n.label});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=te("select","cp-dropdown",{id:`cp-${n.key}`});if(n.dropdownGroups)for(const s of n.dropdownGroups){const a=te("optgroup","",{label:s.label});for(const o of s.options){const l=te("option","",{value:o.value,text:o.label});String(o.value)===String(Se[n.key])&&(l.selected=!0),a.appendChild(l)}i.appendChild(a)}else for(const s of n.dropdownOptions??[]){const a=te("option","",{value:s.value,text:s.label});String(s.value)===String(Se[n.key])&&(a.selected=!0),i.appendChild(a)}i.addEventListener("change",()=>{const s=i.value,a=Number(s);Qn(n.key,s!==""&&!isNaN(a)?a:s)});const r=te("button","cp-star-btn",{text:"★",title:"Save as default"});return r.addEventListener("click",()=>Ms(n.key,Se[n.key])),Fn.set(n.key,s=>{i.value=String(s),e.classList.toggle("cp-row-disabled",Kt.has(n.key))}),e.append(i,r,yo(n)),e}function Jg(n){const e=te("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",Kt.has(n.key)),n.canDisable&&e.appendChild(So(n,e));const t=te("label","cp-label",{text:n.label,title:n.desc});e.appendChild(t);const i=n.toggleLabels??["Off","On"],r=te("div","cp-seg-group"),s=i.map((o,l)=>{const c=te("button","cp-seg-btn",{text:o});return Se[n.key]===l&&c.classList.add("active"),c.addEventListener("click",()=>{Kt.has(n.key)||(Qn(n.key,l),s.forEach((u,f)=>u.classList.toggle("active",f===l)))}),c});r.append(...s);const a=te("button","cp-star-btn",{text:"★",title:"Save as default"});return a.addEventListener("click",()=>Ms(n.key,Se[n.key])),Fn.set(n.key,o=>{s.forEach((l,c)=>l.classList.toggle("active",c===o)),e.classList.toggle("cp-row-disabled",Kt.has(n.key))}),e.append(r,a,yo(n)),e}function Qg(){const n=te("div","cp-preset-bar"),e="rule__";function t(){const y=document.activeElement;y instanceof HTMLElement&&y.closest(".cp-body")&&y.blur()}const i=te("div","cp-preset-row"),r=te("span","cp-preset-label",{text:"PROJECT"}),s=te("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save project (Ctrl+S / Ctrl+Shift+S)"}),a=te("button","cp-preset-btn",{text:"🗁",title:"Load project"}),o=te("input","",{type:"file",accept:".json,.seesound-project,.seesound-project.json"});o.style.display="none",i.append(r,s,a);const l=te("div","cp-preset-row");te("span","cp-preset-label",{text:"Preset"});const c=te("select","cp-preset-sel"),u=te("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset"}),f=te("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});l.append(c,u,f);const h=te("div","cp-preset-row"),m=te("input","cp-preset-name",{type:"text",placeholder:"preset_title"}),_=te("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save current rule preset (Ctrl+P)"});h.append(m,_),n.append(i,l,h,o);let g=[];async function p(){var b;t();const y=m.value.trim(),L=String(c.value||"").trim(),R=y||L;if(!R)return alert("Enter or select a preset name first."),m.focus(),!1;if(!y&&L&&(m.value=L),g.includes(R)&&!confirm(`Overwrite preset "${R}"?`))return!1;const P=((b=Zt==null?void 0:Zt.serialize)==null?void 0:b.call(Zt))??(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[]),U=Mo();return U.ruleBlocks=P,await Ic(R,U),await d(),c.value=R,!0}async function d(){g=(await Dc()).filter(R=>!String(R||"").startsWith(e));const L=c.value;c.innerHTML='<option value="">select preset</option>';for(const R of g){const P=te("option","",{value:R,text:R});c.appendChild(P)}L&&g.includes(L)&&(c.value=L)}c.addEventListener("change",()=>{c.value&&(m.value=c.value)}),u.addEventListener("click",async()=>{var L;if(!c.value)return;const y=await Uc(c.value);if(y!=null&&y.params){Ds(y.params);for(const R of vr)(L=Fn.get(R.key))==null||L(Se[R.key]);Zt==null||Zt.replaceFromRuleBlocks(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[])}}),f.addEventListener("click",async()=>{c.value&&confirm(`Delete preset "${c.value}"?`)&&(await Nc(c.value),await d(),m.value="")}),_.addEventListener("click",async()=>{await p()}),s.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-save-request"))}),a.addEventListener("click",()=>{o.click()}),o.addEventListener("change",async y=>{var R;const L=(R=y.target.files)==null?void 0:R[0];if(L)try{const P=await L.text(),U=$g(P);window.dispatchEvent(new CustomEvent("seesound:project-load-request",{detail:{payload:U,fileName:L.name}}))}catch(P){console.warn("[Project] load parse failed:",P),alert("Failed to load project file.")}finally{o.value=""}}),m.addEventListener("keydown",y=>{y.key==="Enter"&&_.click()});const T=window.__seesoundShortcutAbort;T&&typeof T.abort=="function"&&T.abort();const A=new AbortController;return window.__seesoundShortcutAbort=A,document.addEventListener("keydown",async y=>{if(y.defaultPrevented||y.altKey||!(y.ctrlKey||y.metaKey))return;const L=String(y.key||"").toLowerCase();if(L==="s"){y.preventDefault(),y.stopPropagation(),window.dispatchEvent(new CustomEvent("seesound:project-save-request"));return}L==="p"&&!y.shiftKey&&(y.preventDefault(),y.stopPropagation(),await p())},{signal:A.signal}),d(),n}function e_(){const n=te("div","cp-canvas-size"),e=te("div","cp-canvas-size-title",{text:"Canvas Size"}),t=te("div","cp-canvas-size-row"),i=te("label","cp-canvas-size-label",{text:"↔"}),r=te("input","cp-canvas-size-input",{type:"number",step:"1",min:"160",value:String(Math.max(160,Number(Se.canvasWidth??0)||160))}),s=te("label","cp-canvas-size-label",{text:"↕"}),a=te("input","cp-canvas-size-input",{type:"number",step:"1",min:"120",value:String(Math.max(120,Number(Se.canvasHeight??0)||120))}),o=te("label","cp-canvas-size-label",{text:"%"}),l=te("input","cp-canvas-size-input",{type:"number",step:"1",min:"5",max:"400",value:String(Math.max(5,Math.min(400,Math.floor(Number(Se.canvasScale??100)||100))))}),c=te("button","cp-preset-btn cp-rule-mini",{text:"Apply"}),u={w:0,h:0,s:100};function f(){document.activeElement!==r&&(r.value=String(Math.max(160,Math.floor(u.w||Number(Se.canvasWidth)||160)))),document.activeElement!==a&&(a.value=String(Math.max(120,Math.floor(u.h||Number(Se.canvasHeight)||120)))),document.activeElement!==l&&(l.value=String(Math.max(5,Math.min(400,Math.floor(u.s||Number(Se.canvasScale)||100)))))}function h(){const m=Math.max(160,Math.floor(Number(r.value)||160)),_=Math.max(120,Math.floor(Number(a.value)||120)),g=Math.max(5,Math.min(400,Math.floor(Number(l.value)||100)));Qn("canvasWidth",m),Qn("canvasHeight",_),Qn("canvasScale",g)}return r.addEventListener("change",h),a.addEventListener("change",h),r.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),h(),r.blur())}),a.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),h(),a.blur())}),l.addEventListener("change",h),l.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),h(),l.blur())}),c.addEventListener("click",h),Fn.set("canvasWidth",()=>f()),Fn.set("canvasHeight",()=>f()),Fn.set("canvasScale",()=>f()),Ls((m,_)=>{(_==="canvasWidth"||_==="canvasHeight"||_==="canvasScale")&&f()}),window.addEventListener("seesound:canvas-size",m=>{var _,g,p;u.w=Number((_=m==null?void 0:m.detail)==null?void 0:_.w)||u.w,u.h=Number((g=m==null?void 0:m.detail)==null?void 0:g.h)||u.h,u.s=Number((p=m==null?void 0:m.detail)==null?void 0:p.s)||u.s,f()}),t.append(i,r,s,a,o,l,c),n.append(e,t),f(),n}function t_(n,e,t){const i=te("div",`cp-group${t?" cp-open":""}`),r=te("button","cp-group-header");r.innerHTML=`<span class="cp-group-chevron">${t?"▾":"▸"}</span><span>${n.label}</span><span class="cp-group-count">${e.length}</span>`;const s=te("div","cp-group-body");s.style.display=t?"":"none";for(const o of e)o.isDropdown?s.appendChild(Kg(o)):o.isToggle?s.appendChild(Jg(o)):s.appendChild(Zg(o));let a=t;return r.setAttribute("aria-expanded",String(a)),r.addEventListener("click",()=>{a=!a,i.classList.toggle("cp-open",a),s.style.display=a?"":"none",r.setAttribute("aria-expanded",String(a));const o=r.querySelector(".cp-group-chevron");o&&(o.textContent=a?"▾":"▸")}),i.append(r,s),i}const On=Ac().entries.map(n=>n.id),Fc=Pg().entries,n_=Fc.map(n=>n.id),i_=["always",">",">=","<","<=","==","!="],Oc=[...ws],Bc=[...vo],r_={spawnedParticles:"spawned particles",allParticles:"all particles",background:"background",camera:"camera"};let Zt=null;function pr(n=0){return`rule-${Math.max(1,Math.floor(n)+1)}`}function zc(){return`rule-ui-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function ua(n=0){return{id:pr(n),group:"",subgroup:"",enabled:!0,target:"spawnedParticles",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",value:1}],strength:1,invert:!1,order:n}}function kc(n){return n==="shapeType"}function s_(n){const e=typeof(n==null?void 0:n.target)=="string"?n.target:"";return Oc.includes(e)?e:(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function ro(n){return Fc.filter(e=>!Array.isArray(e.targets)||e.targets.includes(n)).map(e=>e.id)}function es(n){const e=ro(n.target);if(e.length===0){n.actionOutput="opacity";return}e.includes(n.actionOutput)||(n.actionOutput=e[0])}function a_(n){const e=typeof n=="string"?n.trim():"";if(!e)return null;const t=e.match(/^\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s*\*\s*(-?\d+(?:\.\d+)?)$/);if(t){const s=t[1],a=Number(t[2]);if(On.includes(s)&&Number.isFinite(a))return{input:s,strength:Math.abs(a),invert:a<0}}const i=e.match(/^\(?\s*(-?\d+(?:\.\d+)?)\s*\)?\s*\/\s*max\(\s*1e-6\s*,\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s*\)$/);if(i){const s=Number(i[1]),a=i[2];if(On.includes(a)&&Number.isFinite(s))return{input:a,strength:Math.abs(s),invert:!0}}const r=e.match(/^\(?\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)?$/);if(r){const s=r[1];if(On.includes(s))return{input:s,strength:1,invert:!1}}return null}function o_(n,e,t){n.innerHTML="";for(const i of e){const r=te("option","",{value:i.value,text:i.label});String(i.value)===String(t)&&(r.selected=!0),n.appendChild(r)}}function da(n,e){const t={operator:n.conditionOp};n.conditionOp!=="always"&&(t.input=n.conditionInput,n.conditionRhsMode==="input"?t.valueInput=n.conditionRhsInput:t.value=Number(n.conditionRhsLiteral));const i={operator:n.actionOp,output:n.actionOutput},r=Number.isFinite(Number(n.strength))?Number(n.strength):1;if(kc(n.actionOutput))i.value=n.actionLiteralShape==="circle"?"circle":"square";else if(n.actionValueMode==="expression")i.expression=n.actionExpression||"0";else if(n.actionValueMode==="input"){const s=n.actionInput||"amplitude";!n.invert&&r===1&&n.actionOp==="set"?i.input=s:n.invert?i.expression=`${r} / max(1e-6, (${s}))`:i.expression=`(${s}) * ${r}`}else{const s=Number(n.actionLiteral);Number.isFinite(s)?i.value=s:i.value=0}return{id:n.id,group:n.group,subgroup:n.subgroup,enabled:!!n.enabled,target:n.target,condition:t,actions:[i],strength:r,invert:!!n.invert,order:e}}function Fi(n,e){var u,f,h,m,_;const t=Array.isArray(n.actions)&&n.actions[0]?n.actions[0]:{operator:"set",output:"opacity",value:1},i=kc(t.output),r=typeof t.expression=="string"&&t.expression.trim().length>0,s=typeof t.input=="string"&&t.input.trim().length>0,a=r?a_(t.expression):null,o=(a==null?void 0:a.input)||(On.includes(t.input)?t.input:"amplitude"),l=a?a.strength:Number.isFinite(Number(n.strength))?Number(n.strength):1,c=a?a.invert:!!n.invert;return{_uid:typeof n._uid=="string"&&n._uid?n._uid:zc(),id:typeof n.id=="string"&&n.id.trim()?n.id.trim():pr(e),group:typeof n.group=="string"?n.group:"",subgroup:typeof n.subgroup=="string"?n.subgroup:"",enabled:n.enabled!==!1,target:s_(n),conditionOp:((u=n.condition)==null?void 0:u.operator)||"always",conditionInput:On.includes((f=n.condition)==null?void 0:f.input)?n.condition.input:"amplitude",conditionRhsMode:(h=n.condition)!=null&&h.valueInput?"input":"literal",conditionRhsInput:On.includes((m=n.condition)==null?void 0:m.valueInput)?n.condition.valueInput:"amplitude",conditionRhsLiteral:Number.isFinite(Number((_=n.condition)==null?void 0:_.value))?Number(n.condition.value):.5,actionOutput:n_.includes(t.output)?t.output:"opacity",actionOp:Bc.includes(t.operator)?t.operator:"set",actionValueMode:i?"shape":a?"input":r?"expression":s?"input":"literal",actionInput:o,actionLiteral:Number.isFinite(Number(t.value))?Number(t.value):1,actionLiteralShape:t.value==="circle"?"circle":"square",actionExpression:r?t.expression:"",strength:l,invert:c,uiState:n.uiState||"normal",order:Number.isFinite(n.order)?Number(n.order):e}}function l_(n){const e=n.conditionOp==="always"?"always":`${n.conditionInput} ${n.conditionOp} ${n.conditionRhsMode==="input"?n.conditionRhsInput:Number(n.conditionRhsLiteral).toFixed(2)}`;let t;return n.actionOutput==="shapeType"?t=n.actionLiteralShape:n.actionValueMode==="expression"?t=n.actionExpression||"0":n.actionValueMode==="input"?n.invert?t=`${Number(n.strength).toFixed(2)} / ${n.actionInput}`:t=`${n.actionInput} × ${Number(n.strength).toFixed(2)}`:t=`${Number(n.actionLiteral).toFixed(2)}`,`When ${e}, ${n.actionOp} ${n.actionOutput} using ${t}`}function xn(n,e,t="cp-rule-input"){const i=te("select",t);for(const r of n){const s=te("option","",{value:r.value,text:r.label});String(r.value)===String(e)&&(s.selected=!0),i.appendChild(s)}return i}function ha(n,e="0.01",t="cp-rule-input cp-rule-num"){return te("input",t,{type:"number",value:String(n),step:e})}function c_(n){if(!n)return null;const e=te("div","cp-rule-section"),t=te("div","cp-rule-header"),i=te("span","cp-rule-title",{text:"Rule Builder"}),r=te("span","cp-rule-status cp-rule-status-stale",{text:"stale"});t.append(i,r);const s=te("div","cp-rule-error"),a=te("div","cp-rule-rows"),o=te("div","cp-rule-preset"),l=te("select","cp-preset-sel"),c=te("input","cp-preset-name",{type:"text",placeholder:"single_rule_preset"}),u=te("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save selected rule as preset"}),f=te("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset (append)"}),h=te("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});o.append(l,f,h,c,u);const m=te("div","cp-rule-actions"),_=te("button","cp-preset-btn cp-rule-add",{text:"+"});m.appendChild(_),e.append(t,s,o,a,m),n.appendChild(e);let g=(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[]).map(Fi),p=!1,d=-1,T=[],A="",y=-1;const L=new Map,R=[],P=new Set,U=new Set,b=new Set,x=new Set;let I="",Y=null;const X="rule__";let H=[];function j(){const S=document.activeElement;S instanceof HTMLElement&&S.closest(".cp-rule-section")&&S.blur()}function Z(S){const O=new Set(g.map(w=>String(w.id||"").trim()).filter(Boolean)),G=String(S||"").trim()||pr(g.length);if(!O.has(G))return G;let K=2;for(;O.has(`${G}-${K}`);)K++;return`${G}-${K}`}function se(S){if(S<0||S>=g.length)return;const O=g[S],G={...O,_uid:zc(),id:Z(O.id||pr(g.length)),uiState:"normal"};g.splice(S+1,0,G),ae()}function q(S){const O=(S==null?void 0:S.compileStatus)||"stale";r.textContent=O,r.className=`cp-rule-status cp-rule-status-${O.replace(/[^a-z0-9-]/gi,"-")}`,s.textContent=S!=null&&S.compileError?`Compile error: ${S.compileError}${S.compileLine?` (line ${S.compileLine})`:""}`:Array.isArray(S==null?void 0:S.rejected)&&S.rejected.length>0?`Rejected rules: ${S.rejected.map(G=>G.id).join(", ")}`:""}function ae(){const S=new Set(g.map(w=>w._uid));for(const w of[...x])S.has(w)||x.delete(w);for(const w of[...b])S.has(w)||b.delete(w);for(const w of g)es(w);const O=g.map((w,z)=>da(w,z)),G=Ng(O),K=new Set(G.redRuleIds);g=g.map(w=>({...w,uiState:K.has(w.id)?"red":"normal"})),p=!0,Qn("ruleBlocks",G.rules),p=!1,q({compileStatus:"stale",compileError:null}),Re()}function ce(S){return O=>{S(O)!==!1&&ae()}}function ue(S){return String(S||"").trim()}function Fe(S,O){return`${ue(S)}::${ue(O)}`}function qe(S,O=""){const G=ue(S);G&&(L.has(G)||L.set(G,new Set),O!==void 0&&L.get(G).add(ue(O)))}function ee(){for(const S of g){const O=ue(S.group);O&&(qe(O,ue(S.subgroup)),R.includes(O)||R.push(O))}}function le(S){const O=S instanceof Element?S:null;return O?!!O.closest("input,select,button,textarea,label,.cp-rule-slot-add"):!1}function he(S){S<0||S>=g.length||(x.clear(),x.add(g[S]._uid),y=S,I="",Y=null)}function pe(S){if(S<0||S>=g.length)return;if(y<0||y>=g.length){he(S);return}const O=Math.min(y,S),G=Math.max(y,S);x.clear();for(let K=O;K<=G;K++)x.add(g[K]._uid);I="",Y=null}function Ce(S){if(S<0||S>=g.length)return;const O=g[S]._uid;x.has(O)?x.delete(O):x.add(O),y=S,I="",Y=null}function Ue(S,O){if(S<0||S>=g.length)return;const G=!!(O.ctrlKey||O.metaKey);O.shiftKey?pe(S):G?Ce(S):he(S),Re()}function ke(S,O){const G=[...new Set((S||[]).filter(w=>w>=0&&w<g.length))].sort((w,z)=>w-z);if(G.length===0)return;const K=!!(O!=null&&O.ctrlKey||O!=null&&O.metaKey);if(O!=null&&O.shiftKey&&y>=0&&y<g.length){const w=G[G.length-1],z=Math.min(y,w),B=Math.max(y,w);x.clear();for(let $=z;$<=B;$++)x.add(g[$]._uid);Re();return}if(K)for(const w of G){const z=g[w]._uid;x.has(z)?x.delete(z):x.add(z)}else{x.clear();for(const w of G)x.add(g[w]._uid)}y=G[G.length-1],Re()}function Ie(S){const O=S instanceof Element?S:null;return O?!!O.closest('input,textarea,select,[contenteditable="true"]'):!1}function He(S){const O=[...new Set((S||[]).filter(G=>G>=0&&G<g.length))].sort((G,K)=>G-K);if(O.length===0)return!1;for(let G=O.length-1;G>=0;G--)g.splice(O[G],1);return x.clear(),I="",Y=null,!0}function Ne(){const S=D();if(S.length>0)return He(S),ae(),!0;if(Y&&Y.group){const O=Y.group,G=Y.subgroup,K=Fe(O,G),w=[];for(let B=0;B<g.length;B++)ue(g[B].group)===O&&ue(g[B].subgroup)===G&&w.push(B);const z=He(w);if(L.has(O)){const B=L.get(O);B.delete(G),B.size===0&&L.delete(O)}return U.delete(K),Y=null,I="",z?ae():Re(),!0}if(I){const O=I,G=[];for(let z=0;z<g.length;z++)ue(g[z].group)===O&&G.push(z);const K=He(G);L.delete(O);const w=R.indexOf(O);w>=0&&R.splice(w,1),P.delete(O);for(const z of[...U])z.startsWith(`${O}::`)&&U.delete(z);return I="",Y=null,K?ae():Re(),!0}return!1}function D(){const S=[];for(let O=0;O<g.length;O++)x.has(g[O]._uid)&&S.push(O);return S}function at(S){return S.startsWith(X)?S.slice(X.length):S}async function Ve(){H=(await Dc()).filter(G=>String(G||"").startsWith(X));const O=String(l.value||"");l.innerHTML='<option value="">rule presets</option>';for(const G of H){const K=te("option","",{value:G,text:at(G)});l.appendChild(K)}O&&H.includes(O)&&(l.value=O)}async function Ge(){j();const S=D();if(S.length<1){alert("Select one or more rules to save as a rule preset.");return}const O=String(c.value||at(String(l.value||""))).trim();if(!O){alert("Enter a single-rule preset name first."),c.focus();return}const G=`${X}${O}`;if(H.includes(G)&&!confirm(`Overwrite single-rule preset "${O}"?`))return;const K=S.map((z,B)=>da(g[z],B)),w=Mo();w.ruleBlocks=K,await Ic(G,w),await Ve(),l.value=G,c.value=O}async function Ee(S){var K;if(!S)return;const O=await Uc(S),G=Array.isArray((K=O==null?void 0:O.params)==null?void 0:K.ruleBlocks)?O.params.ruleBlocks:[];if(G.length===0){alert("Selected rule preset has no rule block.");return}for(const w of G)g.push(Fi(w,g.length));ae()}function Qe(S,O="",G=""){let K=T.map(Q=>g.findIndex(we=>we._uid===Q)).filter(Q=>Q>=0).sort((Q,we)=>Q-we);if(K.length===0&&(K=D()),K.length===0&&d>=0&&d<g.length&&(K=[d]),K.length===0)return;const w=new Set(K);if(S>=0&&S<=g.length){const Q=S-1;if(w.has(S)||Q>=0&&w.has(Q)){d=-1,T=[];return}}const z=K.map(Q=>g[Q]);for(let Q=K.length-1;Q>=0;Q--)g.splice(K[Q],1);let B=Math.max(0,Math.min(g.length,S));for(const Q of K)Q<B&&B--;const $=ue(O),de=ue(G);for(const Q of z)Q.group=$,Q.subgroup=de;g.splice(B,0,...z),qe($,de),x.clear();for(const Q of z)x.add(Q._uid);y=g.findIndex(Q=>Q._uid===z[z.length-1]._uid),d=-1,T=[],ae()}function Te(S){const O=[...S.keys()];for(const G of O)R.includes(G)||R.push(G);for(let G=R.length-1;G>=0;G--)O.includes(R[G])||R.splice(G,1)}function E(){const S=new Map(R.map((O,G)=>[O,G+1]));g=g.map((O,G)=>({row:O,idx:G})).sort((O,G)=>{const K=S.get(ue(O.row.group))??0,w=S.get(ue(G.row.group))??0;return K!==w?K-w:O.idx-G.idx}).map(O=>O.row)}function v(S,O){const G=ue(S),K=ue(O);if(!G||!K||G===K)return;const w=R.indexOf(G),z=R.indexOf(K);if(w<0||z<0)return;R.splice(w,1);const B=R.indexOf(K);R.splice(B<0?R.length:B,0,G),E(),ae()}function N(S,O="",G=""){Qe(S,O,G)}function ie(S,O="",G=""){const K=Fi(ua(g.length),g.length);K.group=ue(O),K.subgroup=ue(G);const w=Math.max(0,Math.min(g.length,S));g.splice(w,0,K),qe(K.group,K.subgroup),ae()}function re(S,O){if(S<0||S>=g.length)return;const G=ue(g[S].group),K=[];for(let $=0;$<g.length;$++)ue(g[$].group)===G&&K.push($);const w=K.indexOf(S);if(w<0)return;const z=w+O;if(z<0||z>=K.length)return;const B=K[z];[g[S],g[B]]=[g[B],g[S]],ae()}function J(S,O){const G=x.has(S._uid),K=te("div",`cp-rule-row${S.uiState==="red"?" cp-rule-row-red":""}${G?" cp-rule-row-selected":""}`);K.draggable=!0,K.dataset.ruleIndex=String(O),K.dataset.ruleUid=S._uid,K.addEventListener("click",C=>{if(le(C.target))return;const ne=C.target instanceof Element?C.target:null;!ne||!(ne===K||ne.classList.contains("cp-rule-row-top")||ne.classList.contains("cp-rule-body")||ne.classList.contains("cp-rule-line"))||Ue(O,C)}),K.addEventListener("dragstart",C=>{x.has(S._uid)||he(O),T=D().map(ne=>g[ne]._uid),d=O,C.dataTransfer&&(C.dataTransfer.effectAllowed="move",C.dataTransfer.setData("text/plain",S._uid)),K.classList.add("cp-rule-row-dragging")}),K.addEventListener("dragend",()=>{d=-1,T=[],K.classList.remove("cp-rule-row-dragging")});const w=te("div","cp-rule-row-top"),z=b.has(S._uid),B=te("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:z?"▸":"▾",title:z?"Expand rule":"Collapse rule"});B.addEventListener("click",C=>{C.preventDefault(),C.stopPropagation(),b.has(S._uid)?b.delete(S._uid):b.add(S._uid),Re()});const $=te("span","cp-rule-index",{text:`#${O+1}`}),de=te("input","cp-rule-input cp-rule-name",{type:"text",value:S.id,placeholder:"rule name"}),Q=te("input","cp-rule-toggle",{type:"checkbox"});Q.checked=!!S.enabled,Q.addEventListener("change",ce(()=>(S.enabled=Q.checked,!0))),de.addEventListener("keydown",ce(C=>{if(C.key!=="Enter")return!1;C.preventDefault();const ne=String(de.value||"").trim();return S.id=ne||pr(O),de.value=S.id,de.blur(),!0}));const we=xn(Oc.map(C=>({value:C,label:r_[C]||C})),S.target),et=te("button","cp-preset-btn cp-rule-mini",{text:"Move Up"}),lt=te("button","cp-preset-btn cp-rule-mini",{text:"↓"}),$e=te("button","cp-preset-btn cp-rule-mini",{text:"⧉"});$e.title="Duplicate rule";const xt=te("button","cp-preset-btn cp-rule-mini cp-preset-del",{text:"🗙"});et.textContent="↑",et.addEventListener("click",()=>re(O,-1)),lt.addEventListener("click",()=>re(O,1)),$e.addEventListener("click",()=>se(O)),xt.addEventListener("click",()=>{const C=D();if(C.length>1&&x.has(S._uid)){for(let ne=C.length-1;ne>=0;ne--)g.splice(C[ne],1);x.clear(),ae();return}g.splice(O,1),x.delete(S._uid),b.delete(S._uid),ae()}),w.append(B,$,de,Q,we,et,lt,$e,xt);const At=te("div","cp-rule-line");At.appendChild(te("span","cp-rule-k",{text:"Condition"}));const Wt=xn(i_.map(C=>({value:C,label:C})),S.conditionOp),bn=xn(On.map(C=>({value:C,label:C})),S.conditionInput),Et=xn([{value:"literal",label:"literal"},{value:"input",label:"input"}],S.conditionRhsMode),Oe=ha(S.conditionRhsLiteral),St=xn(On.map(C=>({value:C,label:C})),S.conditionRhsInput),Dt=()=>{const C=Wt.value==="always";bn.style.display=C?"none":"",Et.style.display=C?"none":"",Oe.style.display=!C&&Et.value==="literal"?"":"none",St.style.display=!C&&Et.value==="input"?"":"none"};Wt.addEventListener("change",ce(()=>(S.conditionOp=Wt.value,Dt(),!0))),bn.addEventListener("change",ce(()=>(S.conditionInput=bn.value,!0))),Et.addEventListener("change",ce(()=>(S.conditionRhsMode=Et.value,Dt(),!0))),Oe.addEventListener("keydown",ce(C=>C.key!=="Enter"?!1:(C.preventDefault(),S.conditionRhsLiteral=Number(Oe.value),Oe.blur(),!0))),St.addEventListener("change",ce(()=>(S.conditionRhsInput=St.value,!0))),At.append(Wt,bn,Et,Oe,St),Dt();const Xt=te("div","cp-rule-line");Xt.appendChild(te("span","cp-rule-k",{text:"Action"})),es(S);const ct=xn(ro(S.target).map(C=>({value:C,label:C})),S.actionOutput),qt=xn(Bc.map(C=>({value:C,label:C})),S.actionOp),wt=xn([{value:"literal",label:"literal"},{value:"input",label:"input"},{value:"expression",label:"expression"},{value:"shape",label:"shape type"}],S.actionValueMode),Jt=ha(S.actionLiteral),Hn=xn(On.map(C=>({value:C,label:C})),S.actionInput),Qt=te("input","cp-rule-input cp-rule-expr",{type:"text",value:S.actionExpression,placeholder:"amplitude * 0.8"}),It=xn([{value:"square",label:"square"},{value:"circle",label:"circle"}],S.actionLiteralShape),ri=ha(S.strength,"0.1"),ir=te("label","cp-rule-invert"),M=te("input","",{type:"checkbox"});M.checked=!!S.invert,ir.append(M,te("span","",{text:"⇄ invert"}));const F=()=>{es(S);const C=ro(S.target).map(xe=>({value:xe,label:xe}));o_(ct,C,S.actionOutput);const ne=ct.value==="shapeType";ne&&(wt.value="shape"),wt.style.display=ne?"none":"",Jt.style.display=!ne&&wt.value==="literal"?"":"none",Hn.style.display=!ne&&wt.value==="input"?"":"none",Qt.style.display=!ne&&wt.value==="expression"?"":"none",It.style.display=ne?"":"none";const me=!ne&&wt.value==="input";ri.style.display=me?"":"none",ir.style.display=me?"":"none"};ct.addEventListener("change",ce(()=>(S.actionOutput=ct.value,F(),!0))),we.addEventListener("change",ce(()=>(S.target=we.value,es(S),F(),!0))),qt.addEventListener("change",ce(()=>(S.actionOp=qt.value,!0))),wt.addEventListener("change",ce(()=>(S.actionValueMode=wt.value,F(),!0))),Jt.addEventListener("keydown",ce(C=>C.key!=="Enter"?!1:(C.preventDefault(),S.actionLiteral=Number(Jt.value),Jt.blur(),!0))),Hn.addEventListener("change",ce(()=>(S.actionInput=Hn.value,!0))),Qt.addEventListener("keydown",ce(C=>C.key!=="Enter"?!1:(C.preventDefault(),S.actionExpression=Qt.value,Qt.blur(),!0))),It.addEventListener("change",ce(()=>(S.actionLiteralShape=It.value,!0))),ri.addEventListener("keydown",ce(C=>C.key!=="Enter"?!1:(C.preventDefault(),S.strength=Number(ri.value),ri.blur(),!0))),M.addEventListener("change",ce(()=>(S.invert=M.checked,!0))),Xt.append(ct,qt,wt,Jt,Hn,Qt,It,ri,ir),F();const W=te("div","cp-rule-summary",{text:l_(S)}),V=te("div","cp-rule-body");return V.append(At,Xt,W),z&&(V.style.display="none"),K.append(w,V),K}function ye(S,O="",G=""){const K=te("div","cp-rule-slot"),w=te("button","cp-rule-slot-add",{type:"button",text:"+"});return w.title="Add rule here",w.addEventListener("click",z=>{z.preventDefault(),z.stopPropagation(),ie(S,O,G)}),K.addEventListener("dragover",z=>{z.preventDefault(),K.classList.add("cp-rule-slot-active")}),K.addEventListener("dragleave",()=>{K.classList.remove("cp-rule-slot-active")}),K.addEventListener("drop",z=>{z.preventDefault(),z.stopPropagation(),K.classList.remove("cp-rule-slot-active"),N(S,O,G)}),K.appendChild(w),K}function fe(S,O="",G=""){const K=te("div","cp-rule-lane");if(S.length===0)return K.appendChild(ye(g.length,O,G)),K;K.appendChild(ye(S[0],O,G));for(const w of S)K.appendChild(J(g[w],w)),K.appendChild(ye(w+1,O,G));return K}function ve(S,O="",G=""){S.addEventListener("dragover",K=>{K.preventDefault(),S.classList.add("cp-rule-dropzone-active")}),S.addEventListener("dragleave",()=>{S.classList.remove("cp-rule-dropzone-active")}),S.addEventListener("drop",K=>{K.preventDefault(),K.stopPropagation(),S.classList.remove("cp-rule-dropzone-active"),N(g.length,O,G)})}function Re(){a.innerHTML="",ee();const S=new Map,O=[];for(let z=0;z<g.length;z++){const B=g[z],$=ue(B.group),de=ue(B.subgroup);if(!$){O.push(z);continue}S.has($)||S.set($,new Map);const Q=S.get($);Q.has(de)||Q.set(de,[]),Q.get(de).push(z)}for(const[z,B]of L.entries()){S.has(z)||S.set(z,new Map);const $=S.get(z);for(const de of B)$.has(de)||$.set(de,[])}Te(S);const G=te("div","cp-rule-groups"),K=te("div","cp-rule-group cp-rule-ungrouped"),w=te("div","cp-rule-group-header");w.appendChild(te("div","cp-rule-group-title",{text:"Ungrouped"})),K.append(w,fe(O,"","")),G.appendChild(K);for(const z of R){const B=S.get(z);if(!B)continue;const $=[];for(const Oe of B.values())$.push(...Oe);const de=I===z||$.length>0&&$.every(Oe=>x.has(g[Oe]._uid)),Q=te("div","cp-rule-group");Q.draggable=!0;const we=te("div",`cp-rule-group-header${de?" cp-rule-group-header-selected":""}`),et=!P.has(z),lt=te("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:et?"▾":"▸"}),$e=te("div","cp-rule-group-title",{text:z}),xt=te("button","cp-preset-btn cp-rule-mini",{type:"button",text:"+ Sub"});lt.title=et?"Collapse group":"Expand group",lt.addEventListener("click",Oe=>{Oe.preventDefault(),Oe.stopPropagation(),P.has(z)?P.delete(z):P.add(z),Re()}),we.addEventListener("click",Oe=>{le(Oe.target)||Oe.target===we&&(I=z,Y=null,$.length>0?ke($,Oe):(x.clear(),y=-1,Re()))}),xt.addEventListener("click",()=>{const Oe=prompt(`Create subgroup inside "${z}"`,"subgroup"),St=String(Oe||"").trim();St&&(qe(z,St),Re())}),xt.addEventListener("click",Oe=>Oe.stopPropagation()),xt.addEventListener("dblclick",Oe=>Oe.stopPropagation()),$e.title="Double-click to rename group",$e.addEventListener("dblclick",Oe=>{Oe.preventDefault(),Oe.stopPropagation();const St=prompt("Rename group",z),Dt=ue(St);if(!Dt||Dt===z)return;for(const ct of g)ue(ct.group)===z&&(ct.group=Dt);if(L.has(z)){const ct=L.get(z);L.delete(z),L.set(Dt,ct)}P.delete(z)&&P.add(Dt);const Xt=[...U].filter(ct=>ct.startsWith(`${z}::`));for(const ct of Xt)U.delete(ct),U.add(ct.replace(`${z}::`,`${Dt}::`));ae()}),Q.addEventListener("dragstart",Oe=>{A=z,Oe.dataTransfer&&(Oe.dataTransfer.effectAllowed="move",Oe.dataTransfer.setData("text/plain",`group:${z}`)),Q.classList.add("cp-rule-group-dragging")}),Q.addEventListener("dragend",()=>{A="",Q.classList.remove("cp-rule-group-dragging")}),Q.addEventListener("dragover",Oe=>{A&&(Oe.preventDefault(),Q.classList.add("cp-rule-group-drop-target"))}),Q.addEventListener("dragleave",()=>{Q.classList.remove("cp-rule-group-drop-target")}),Q.addEventListener("drop",Oe=>{A&&(Oe.preventDefault(),Q.classList.remove("cp-rule-group-drop-target"),v(A,z))});const At=te("span","cp-rule-group-actions");At.appendChild(xt),we.append(lt,$e,At);const Wt=te("div","cp-rule-group-body");et||(Wt.style.display="none"),ve(Wt,z,"");const bn=B.get("")||[];Wt.appendChild(fe(bn,z,""));const Et=te("div","cp-rule-subgroups");for(const[Oe,St]of B.entries()){if(ue(Oe)==="")continue;const Dt=Y&&Y.group===z&&Y.subgroup===Oe||St.length>0&&St.every(It=>x.has(g[It]._uid)),Xt=te("div","cp-rule-subgroup"),ct=te("div",`cp-rule-subgroup-title${Dt?" cp-rule-subgroup-title-selected":""}`),qt=Fe(z,Oe),wt=!U.has(qt),Jt=te("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:wt?"▾":"▸"}),Hn=te("span","",{text:Oe});Jt.title=wt?"Collapse subgroup":"Expand subgroup",ct.append(Jt,Hn),Jt.addEventListener("click",It=>{It.preventDefault(),It.stopPropagation(),U.has(qt)?U.delete(qt):U.add(qt),Re()}),ct.addEventListener("click",It=>{le(It.target)||It.target===ct&&(Y={group:z,subgroup:Oe},I="",St.length>0?ke(St,It):(x.clear(),y=-1,Re()))});const Qt=te("div","cp-rule-subgroup-body");wt||(Qt.style.display="none"),ve(Qt,z,Oe),Qt.appendChild(fe(St,z,Oe)),Xt.append(ct,Qt),Et.appendChild(Xt)}Wt.appendChild(Et),Q.append(we,Wt),G.appendChild(Q)}a.appendChild(G)}_.addEventListener("click",()=>{g.push(Fi(ua(g.length),g.length)),ae()}),l.addEventListener("change",()=>{const S=String(l.value||"");S&&(c.value=at(S))}),u.addEventListener("click",async()=>{await Ge()}),f.addEventListener("click",async()=>{await Ee(String(l.value||""))}),h.addEventListener("click",async()=>{const S=String(l.value||"");if(!S)return;const O=at(S);confirm(`Delete single-rule preset "${O}"?`)&&(await Nc(S),await Ve(),c.value="")});const oe=te("button","cp-preset-btn cp-rule-add-group",{text:"New Group"});oe.addEventListener("click",()=>{const S=prompt("New group name","group"),O=ue(S);O&&(qe(O,""),Re())}),m.appendChild(oe);const _e=te("button","cp-preset-btn cp-rule-add-group",{text:"Group Selection"});_e.addEventListener("click",()=>{const S=D();if(S.length===0){alert("Select one or more rules first.");return}const O=prompt("New group name for selected rules","group"),G=ue(O);if(G){for(const K of S)g[K].group=G,g[K].subgroup="";qe(G,""),R.includes(G)||R.push(G),ae()}}),m.appendChild(_e);const Ae=window.__seesoundRuleDeleteAbort;Ae&&typeof Ae.abort=="function"&&Ae.abort();const De=new AbortController;return window.__seesoundRuleDeleteAbort=De,document.addEventListener("keydown",S=>{S.defaultPrevented||(S.key==="Delete"||S.key==="Backspace")&&(Ie(S.target)||Ne()&&(S.preventDefault(),S.stopPropagation()))},{signal:De.signal}),Zt={serialize:()=>g.map((S,O)=>da(S,O)),addRow:S=>{g.push(Fi(S||ua(g.length),g.length)),ae()},replaceFromRuleBlocks:S=>{g=(Array.isArray(S)?S:[]).map(Fi),L.clear(),R.length=0,P.clear(),U.clear(),b.clear(),x.clear(),I="",Y=null,y=-1,d=-1,T=[],A="",ee(),Re(),q({compileStatus:"stale",compileError:null})},renderCompileStatus:q},Ls((S,O)=>{O!=="ruleBlocks"||p||Zt==null||Zt.replaceFromRuleBlocks(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[])}),Re(),Ve(),ae(),window.addEventListener("seesound:rule-compile-state",S=>q(S.detail||{})),Zt}function u_(n){if(!n){console.warn("[ControlPanel] No container element found.");return}const e=te("div","cp-header"),t=te("button","cp-collapse-btn",{text:"»",title:"Collapse panel"}),i=te("span","cp-title",{text:"Parameters"}),r=te("button","cp-reset-btn",{text:"↺",title:"Reset all to factory defaults"});e.append(t,i,r);const s=te("div","cp-body");s.appendChild(Qg()),s.appendChild(e_());for(let o=0;o<Pl.length;o++){const l=Pl[o],c=vr.filter(u=>u.group===l.id&&u.key!=="canvasWidth"&&u.key!=="canvasHeight"&&u.key!=="canvasScale");c.length!==0&&s.appendChild(t_(l,c,o<3))}c_(s),n.append(e,s);let a=!1;t.addEventListener("click",()=>{a=!a,n.classList.toggle("cp-collapsed",a),t.textContent=a?"«":"»",i.style.display=a?"none":"",r.style.display=a?"none":"",s.style.display=a?"none":""}),r.addEventListener("click",()=>{var o;if(confirm("Reset all parameters to factory defaults?")){zg();for(const l of vr)(o=Fn.get(l.key))==null||o(Se[l.key])}})}const Hc=()=>{},ds=()=>{},d_=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs});function ts(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness")return!0}return!1}function Ll(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const h_=new Set([">",">=","<","<=","==","!="]);let ns={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",applySpawnRules:Hc,applyLivingRules:ds}};function Gc(n){return JSON.stringify(n)}function f_(n){return typeof n.expression=="string"&&n.expression.trim()?`(${n.expression})`:typeof n.input=="string"&&n.input.trim()?n.input:Gc(n.value)}function p_(n){if(!n||n.operator==="always")return"true";if(typeof n.expression=="string"&&n.expression.trim())return`(${n.expression})`;if(!h_.has(n.operator))return"false";const e=typeof n.input=="string"?n.input:"0",t=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Gc(n.value??0);return`((${e}) ${n.operator} (${t}))`}function m_(n){const e=n.output,t=f_(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function ys(n,e,t,i){const r=[],s=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const a of t)a==="deltaTime"||a==="time"||r.push(`  const ${a} = Number.isFinite(i.${a}) ? i.${a} : 0;`);return e.forEach(a=>{if(!a.enabled)return;const o=p_(a.condition);r.push(`  // rule ${a.id}`),r.push(`  if (${o}) {`),s.push({ruleId:a.id,functionName:n,sourceLine:r.length+1});for(const l of a.actions??[])r.push(`    ${m_(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:s}}function g_(n,e){return ys("applySpawnRules",n,e,!1)}function __(n,e){return ys("applyLivingRules",n,e,!0)}function v_(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function Dl(n,e){const t=performance.now(),i=Rc(n,e),s=[...i.ruleBlocks].sort((d,T)=>(d.order??0)-(T.order??0)),a=s.filter(d=>d.target==="spawnedParticles"),o=s.filter(d=>d.target==="allParticles"),l=s.filter(d=>d.target==="background"),c=s.filter(d=>d.target==="camera"),u=v_(s);if(ns.hash===u)return ns.result;const f=Ac().entries.map(d=>d.id),h=g_(a,f),m=__(o,f),_=ys("applyBackgroundRules",l,f,!0),g=ys("applyCameraRules",c,f,!0),p=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",h.source,m.source,_.source,g.source,"return { applySpawnRules, applyLivingRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const T=new Function("helpers",p)(d_),A={hash:u,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:ts([...a,...o]),usesBackgroundHsb:ts(l),usesLivingShapeType:Ll(o,"shapeType"),rejected:i.rejected,lineMap:[...h.lineMap,...m.lineMap,..._.lineMap,...g.lineMap],source:p,applySpawnRules:typeof T.applySpawnRules=="function"?T.applySpawnRules:Hc,applyLivingRules:typeof T.applyLivingRules=="function"?T.applyLivingRules:ds,applyBackgroundRules:typeof T.applyBackgroundRules=="function"?T.applyBackgroundRules:ds,applyCameraRules:typeof T.applyCameraRules=="function"?T.applyCameraRules:ds};return ns={hash:u,result:A},A}catch(d){const T=Number.isFinite(d==null?void 0:d.lineNumber)?Number(d.lineNumber):null;return{...ns.result,hash:u,compileStatus:"error",compileError:(d==null?void 0:d.message)||String(d),compileLine:T,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:ts([...a,...o]),usesBackgroundHsb:ts(l),usesLivingShapeType:Ll(o,"shapeType"),lineMap:[...h.lineMap,...m.lineMap,..._.lineMap,...g.lineMap],source:p,rejected:i.rejected}}}const mr=16,hs=2e4,Il=Math.log2(mr),x_=Math.log2(hs);function M_(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,mr))-Il)/(x_-Il)))}function Ul(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function ht(n){return Math.max(0,Math.min(1,n))}function fs(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function is(n,e,t){const i=ht(n),r=ht(e),s=ht(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function fa(n,e,t){const i=fs(n)??0,r=ht(e),s=ht(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const y_=`
attribute float psize;
attribute vec3 color;
attribute float valpha;
attribute float shapeType;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;

void main() {
    vColor = color;
    vAlpha = valpha;
    vShapeType = shapeType;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.0, psize);
    gl_Position = projectionMatrix * mvPosition;
}
`,S_=`
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
`;class b_{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0;const i=new _n;this._geo=i,this._allocateBuffers(this._N);const r=new kn({vertexShader:y_,fragmentShader:S_,transparent:!0,depthWrite:!1,blending:ki});this._mesh=new Od(i,r),this._mesh.frustumCulled=!1,e.add(this._mesh),this._mat=r,this._lastBlending=r.blending,this._background=new Je(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null},this._compiledRules=Dl([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._aPos=new Ot(this._pos,3),this._aCol=new Ot(this._col,3),this._aSz=new Ot(this._sz,1),this._aAlpha=new Ot(this._alpha,1),this._aShape=new Ot(this._shape,1);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape])t.setUsage(Gu);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l];r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u]}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}clearCanvas(){this.clear()}onRulesChanged(e){const t=Dl(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){return{amplitude:e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:e.pan??0,time:Number(t.time)||0,deltaTime:Number(t.deltaTime)||0,spectralCentroid:e.spectralCentroid??0,spectralFlux:e.spectralFlux??0,spectralFlatness:e.spectralFlatness??0,inharmonicity:e.inharmonicity??0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,canvasBoundaryLeft:Number(t.canvasBoundaryLeft)||0,canvasBoundaryRight:Number(t.canvasBoundaryRight)||0,canvasBoundaryTop:Number(t.canvasBoundaryTop)||0,canvasBoundaryBottom:Number(t.canvasBoundaryBottom)||0,audioLengthSec:Number(t.audioLengthSec)||0,binEnergy:Number(t.binEnergy)||0,frequencyHz:Number(t.frequencyHz)||0,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new k,max:new k,center:new k,size:new k};const t=new k(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new k(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let a=0;a<e;a++){const o=this._pos[a*3],l=this._pos[a*3+1],c=this._pos[a*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),s=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:s}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1;let a=0;for(let o=t;o<i&&!(a>=r);o+=s){const l={x:this._pos[o*3],y:this._pos[o*3+1],z:this._pos[o*3+2],size:this._sz[o],red:this._col[o*3],green:this._col[o*3+1],blue:this._col[o*3+2],opacity:this._alpha[o],r:this._col[o*3],g:this._col[o*3+1],b:this._col[o*3+2],a:this._alpha[o],shapeType:this._shape[o]>.5?"circle":"square"};this._compiledRules.applyLivingRules(e,l),this._pos[o*3]=Number.isFinite(l.x)?l.x:this._pos[o*3],this._pos[o*3+1]=Number.isFinite(l.y)?l.y:this._pos[o*3+1],this._pos[o*3+2]=Number.isFinite(l.z)?l.z:this._pos[o*3+2],this._sz[o]=Number.isFinite(l.size)?Math.max(0,l.size):this._sz[o];const c=Number.isFinite(l.red)?l.red:l.r,u=Number.isFinite(l.green)?l.green:l.g,f=Number.isFinite(l.blue)?l.blue:l.b,h=Number.isFinite(l.opacity)?l.opacity:l.a;let m=Number.isFinite(c)?ht(c):this._col[o*3],_=Number.isFinite(u)?ht(u):this._col[o*3+1],g=Number.isFinite(f)?ht(f):this._col[o*3+2];if(this._compiledRules.usesParticleHsb){const p=is(m,_,g),d=fs(l.hue),T=Number.isFinite(l.saturation)?ht(l.saturation):p.s,A=Number.isFinite(l.brightness)?ht(l.brightness):p.v,y=fa(d??p.h,T,A);m=y.r,_=y.g,g=y.b}this._col[o*3]=m,this._col[o*3+1]=_,this._col[o*3+2]=g,this._alpha[o]=Number.isFinite(h)?Math.max(0,Math.min(1,h)):this._alpha[o],this._shape[o]=Ul(l.shapeType),a++}return a}applyBackgroundRules(e){const t=this._background,i=is(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v,backgroundRed:t.r,backgroundGreen:t.g,backgroundBlue:t.b};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?ht(r.red):t.r,a=Number.isFinite(r.green)?ht(r.green):t.g,o=Number.isFinite(r.blue)?ht(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=is(s,a,o),c=fs(r.hue),u=Number.isFinite(r.saturation)?ht(r.saturation):l.s,f=Number.isFinite(r.brightness)?ht(r.brightness):l.v,h=fa(c??l.h,u,f);s=h.r,a=h.g,o=h.b}t.setRGB(s,a,o)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null}}update(e,t,i,r){var Ce,Ue,ke;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((Ce=e.ctx)==null?void 0:Ce.sampleRate)??44100)/2,f=Ie=>Ie/o.length*u,h=t.persistMode??0,m=t.inputGain??1,_=t.amplitudeThreshold??-48,g=Math.max(0,Math.min(255,Math.round(Math.pow(10,_/20)*255))),p=t.defaultParticleSize??6,d=(t.freqDepthEffect??100)/100,T=(t.zDepth??0)/100,A=Math.max(.2,t.frequencySpread??1),y=Math.max(mr,Math.min(hs,Number(t.lowFrequencyCutoff??mr))),L=Math.max(mr,Math.min(hs,Number(t.highFrequencyCutoff??hs))),R=Math.max(y,L),P=Number(t.particleRenderPercent),U=Number.isFinite(P)?Math.max(1,Math.min(100,Math.floor(P))):100,b=Math.max(0,Math.min(1,t.brightnessFloor??.2)),x=Math.max(0,t.amplitudeToBrightness??1.25),I=t.blendMode??"screen";e.analyserL&&e.analyserR&&e.getBinPan;const Y=U>=100?()=>!0:Ie=>Ie*U%100<U,H={screen:ki,lighter:ki,"source-over":Kn,multiply:Kn}[I]??ki;H!==this._lastBlending&&(this._mat.blending=H,this._mat.needsUpdate=!0,this._lastBlending=H);const j=i/2,Z=r/2,se=-j,q=j,ae=Z,ce=-Z,ue=((Ue=e.audioEl)==null?void 0:Ue.currentTime)??0,Fe=((ke=e.audioEl)==null?void 0:ke.duration)??0;e.pan;let qe=0;for(let Ie=0;Ie<l;Ie++)o[Ie]>qe&&(qe=o[Ie]);const ee=Math.max(1,Math.round(qe*.55)),le=Math.min(g,ee);let he=h===1?this._paintCount:0;const pe=(Ie,He,Ne,D=1)=>{if(he>=this._N&&h===1){const _e=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),Ae=this._archiveAndCompactOldest(_e,he,t,ue);he=Math.max(0,he-Ae)}if(he>=this._N)return;const at=f(Ie),Ve=M_(at),Ge=Math.pow(Ve,A),Ee=(Ge*2-1)*Z,Qe=0,Te=d>0?-Ge*T*50:0,E=1+(1-Ge)*d*2,v=Math.min(1,b+Ne*x),N={x:Qe,y:Ee,z:Te,size:Math.max(2,p*E*(.35+Ne*1.35)),red:v,green:v,blue:v,opacity:Math.min(1,(.08+Ne*1.9)*D),r:v,g:v,b:v,a:Math.min(1,(.08+Ne*1.9)*D),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({inputs:this._buildRuleInputs(e,{binEnergy:Ne,frequencyHz:at,normFreq:Ge,time:ue,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:i,canvasHeightUnits:r,canvasBoundaryLeft:se,canvasBoundaryRight:q,canvasBoundaryTop:ae,canvasBoundaryBottom:ce,audioLengthSec:Fe}),particle:N});const ie=Number.isFinite(N.particleCount)?ht(N.particleCount):1;if(ie<=0||ie<1&&Math.random()>ie)return;this._pos[he*3]=Number.isFinite(N.x)?N.x:Qe,this._pos[he*3+1]=Number.isFinite(N.y)?N.y:Ee,this._pos[he*3+2]=Number.isFinite(N.z)?N.z:Te,this._sz[he]=Number.isFinite(N.size)?Math.max(0,N.size):Math.max(2,p);const re=Number.isFinite(N.red)?N.red:N.r,J=Number.isFinite(N.green)?N.green:N.g,ye=Number.isFinite(N.blue)?N.blue:N.b,fe=Number.isFinite(N.opacity)?N.opacity:N.a;let ve=Number.isFinite(re)?ht(re):v,Re=Number.isFinite(J)?ht(J):v,oe=Number.isFinite(ye)?ht(ye):v;if(this._compiledRules.usesParticleHsb){const _e=is(ve,Re,oe),Ae=fs(N.hue),De=Number.isFinite(N.saturation)?ht(N.saturation):_e.s,S=Number.isFinite(N.brightness)?ht(N.brightness):_e.v,O=fa(Ae??_e.h,De,S);ve=O.r,Re=O.g,oe=O.b}this._col[he*3]=ve,this._col[he*3+1]=Re,this._col[he*3+2]=oe,this._alpha[he]=Number.isFinite(fe)?Math.max(0,Math.min(1,fe)):Math.min(1,(.08+Ne*1.9)*D),this._shape[he]=Ul(N.shapeType),he++};for(let Ie=0;Ie<l;Ie++){const He=f(Ie);if(He<y||He>R||!Y(Ie))continue;const Ne=o[Ie],at=Ne/255*m;if(!(Ne<=le)&&(pe(Ie,Ne,at),he>=this._N))break}if(he===0&&qe>0){const Ie=[];for(let Ne=0;Ne<l;Ne++){const D=f(Ne);D>=y&&D<=R&&o[Ne]>0&&Y(Ne)&&Ie.push(Ne)}Ie.sort((Ne,D)=>o[D]-o[Ne]);const He=Math.min(96,Ie.length);for(let Ne=0;Ne<He&&he<this._N;Ne++){const D=Ie[Ne],at=o[D],Ve=at/255,Ge=Math.max(.08,Ve*m);pe(D,at,Ge,.85)}}h===1?(this._paintCount=he,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._pruneArchive(t,ue)):(this._paintCount=0,this._visibleCount=he,this._geo.setDrawRange(0,he)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{time:ue,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:i,canvasHeightUnits:r,canvasBoundaryLeft:se,canvasBoundaryRight:q,canvasBoundaryTop:ae,canvasBoundaryBottom:ce,audioLengthSec:Fe})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{time:ue,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:i,canvasHeightUnits:r,canvasBoundaryLeft:se,canvasBoundaryRight:q,canvasBoundaryTop:ae,canvasBoundaryBottom:ce,audioLengthSec:Fe})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{time:ue,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:i,canvasHeightUnits:r,canvasBoundaryLeft:se,canvasBoundaryRight:q,canvasBoundaryTop:ae,canvasBoundaryBottom:ce,audioLengthSec:Fe})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;this._aPos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose()}}const E_="http://localhost:8000",T_="audio/wav",A_=new Set(["m4a","aac","flac","alac","aiff"]);function w_(n){const e=String(n||"").lastIndexOf(".");return e<0?"":n.slice(e+1).toLowerCase()}function R_(n,e){const t=String(n).replace(/[\\/:*?"<>|]+/g,"_"),i=t.lastIndexOf(".");return i<0?`${t}.${e}`:`${t.slice(0,i)}.${e}`}function C_(n){const e=w_(n==null?void 0:n.name);return e?A_.has(e):!1}async function P_(n){const e=new FormData;e.append("file",n);const t=await fetch(`${E_}/api/audio/convert`,{method:"POST",body:e});if(!t.ok){const s=await t.text().catch(()=>"");throw new Error(s||`Audio conversion failed (${t.status}).`)}const i=await t.blob();if(!i||i.size===0)throw new Error("Converted audio is empty.");const r=R_((n==null?void 0:n.name)||"audio","wav");return new File([i],r,{type:T_})}function Oi(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function gt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function L_(n){if(!n){console.warn("[AudioPlayer] No container element.");const H=new Audio;return H.crossOrigin="anonymous",{audioEl:H,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=gt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=gt("div","audio-player__body"),a=gt("div","audio-player__file-row"),o=gt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});o.style.display="none";const l=gt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});l.textContent="♫";const c=gt("span","audio-player__file-name",{text:"No file loaded"});a.append(o,l);const u=gt("div","audio-player__transport"),f=gt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});f.textContent="▶";const h=gt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});h.textContent="■";const m=gt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});m.textContent="<<";const _=gt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});_.textContent=">>";const g=gt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});g.textContent="PNG";const p=gt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});p.textContent="PAINT ALL";const d=gt("div","audio-player__speed-wrap"),T=gt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),A=gt("span","audio-player__speed-suffix",{text:"x"});d.append(T,A),u.append(f,h,m,_,g,p,d);const y=gt("div","audio-player__progress-row"),L=gt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function R(H){L.style.background=`linear-gradient(90deg, var(--color-accent) ${H}%, var(--color-border) ${H}%)`}R(0);const P=gt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),U=gt("div","audio-player__progress-meta");U.append(c,P),y.append(L,U),s.append(a,u,y),n.append(s,r);function b(H,j=""){o.disabled=H,f.disabled=H||!e.src,h.disabled=H||!e.src,m.disabled=H||!e.src,_.disabled=H||!e.src,p.disabled=H||!e.src,T.disabled=H||!e.src,H&&j&&(c.textContent=j)}function x(H){const j=Math.max(.1,Math.min(16,Number(H)));Number.isFinite(j)&&(e.playbackRate=j,T.value=String(Number(j.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:j},bubbles:!0})))}function I(H,j=(H==null?void 0:H.name)||"Audio loaded"){H&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(H),e.load(),c.textContent=j,t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),L.value="0",R(0),P.textContent="0:00 / –:––",Y(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:H,audioEl:e},bubbles:!0})))}function Y(){f.disabled=!1,h.disabled=!1,m.disabled=!1,_.disabled=!1,p.disabled=!1,T.disabled=!1}o.addEventListener("change",async H=>{const j=H.target.files[0];if(j){b(!0,`Loading ${j.name}...`);try{const Z=C_(j)?await(async()=>(c.textContent=`Converting ${j.name}...`,P_(j)))():j;I(Z,Z.name)}catch(Z){console.warn("[AudioPlayer] conversion failed, using original file:",Z),I(j,j.name)}finally{b(!1),o.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(H){console.warn("[AudioPlayer] play() failed:",H.message)}}),e.addEventListener("play",()=>{t=!0,f.textContent="⏸︎",f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active")}),h.addEventListener("click",()=>{e.pause(),e.currentTime=0,L.value="0",R(0),P.textContent=`0:00 / ${Oi(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),m.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),_.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),g.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),p.addEventListener("click",()=>{p.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",H=>{var Z;const j=!!((Z=H==null?void 0:H.detail)!=null&&Z.running);p.disabled=j||!e.src,T.disabled=j||!e.src,p.textContent=j?"PAINTING...":"PAINT ALL"}),T.addEventListener("keydown",H=>{H.key==="Enter"&&(H.preventDefault(),x(T.value),T.blur())});let X=!1;return L.addEventListener("mousedown",()=>{X=!0}),L.addEventListener("touchstart",()=>{X=!0},{passive:!0}),L.addEventListener("input",()=>{const H=parseFloat(L.value);R(H),e.duration&&(P.textContent=`${Oi(e.duration*H/100)} / ${Oi(e.duration)}`)}),L.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(L.value)/100*e.duration),X=!1}),e.addEventListener("timeupdate",()=>{if(X)return;const H=e.currentTime,j=e.duration;if(!isFinite(j)||j===0)return;const Z=H/j*100;L.value=String(Z),R(Z),P.textContent=`${Oi(H)} / ${Oi(j)}`}),e.addEventListener("loadedmetadata",()=>{P.textContent=`0:00 / ${Oi(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),r.textContent=i?"»":"«",r.title=i?"Expand player":"Collapse player"}),{audioEl:e,getIsPlaying:()=>t}}function pa(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function D_({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=pa("div","canvas-wrapper__resize-handle-right"),a=pa("div","canvas-wrapper__resize-handle-bottom"),o=pa("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(h,m,_){h.preventDefault();const g=h.touches?h.touches[0].clientX:h.clientX,p=h.touches?h.touches[0].clientY:h.clientY;l={type:m,startX:g,startY:p,startW:n.clientWidth,startH:n.clientHeight,handle:_},_.classList.add("dragging"),document.body.style.cursor=m==="right"?"ew-resize":m==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(h){if(!l)return;const m=h.touches?h.touches[0].clientX:h.clientX,_=h.touches?h.touches[0].clientY:h.clientY,g=m-l.startX,p=_-l.startY,d=160,T=120,A=e.getBoundingClientRect();let y=l.startW,L=l.startH;(l.type==="right"||l.type==="corner")&&(y=Math.max(d,Math.min(l.startW+g,A.width-4))),(l.type==="bottom"||l.type==="corner")&&(L=Math.max(T,Math.min(l.startH+p,window.innerHeight-4)));const R=i>0?y/i:1,P=r>0?L/r:1;i=y,r=L,n.style.width=`${y}px`,n.style.height=`${L}px`,t(y,L,R,P)}function f(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",h=>c(h,"right",s)),a.addEventListener("mousedown",h=>c(h,"bottom",a)),o.addEventListener("mousedown",h=>c(h,"corner",o)),s.addEventListener("touchstart",h=>c(h,"right",s),{passive:!1}),a.addEventListener("touchstart",h=>c(h,"bottom",a),{passive:!1}),o.addEventListener("touchstart",h=>c(h,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",f),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",f),window.addEventListener("resize",()=>{if(!n.style.width){const h=e.clientWidth,m=e.clientHeight,_=i>0?h/i:1,g=r>0?m/r:1;i=h,r=m,t(h,m,_,g)}}),{setSize(h,m){const _=i>0?h/i:1,g=r>0?m/r:1;i=h,r=m,n.style.width=`${h}px`,n.style.height=`${m}px`,t(h,m,_,g)},getSize(){return{w:i,h:r}}}}function Ji(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function I_(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function U_(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return Ji(i/t)}function N_(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return Ji(r/Math.max(s,e))}function F_(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const f=n[u];if(!(f<r)&&f>=n[u-1]&&f>=n[u+1]){const h=u/Math.max(1,t-1)*i;s.push({i:u,hz:h,mag:f/255})}}if(s.length<2)return 0;s.sort((u,f)=>f.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const f=a[u],m=Math.max(1,Math.round(f.hz/o))*o,_=Math.abs(f.hz-m)/Math.max(m,1e-9);l+=_*f.mag,c+=f.mag}return c<=1e-9?0:Ji(l/c*2)}function rs(n,e,t=.2){const i=Ji(t),r=Number.isFinite(n)?n:0,s=Ji(e);return r+(s-r)*i}function O_(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return Ji((Number.isFinite(n)?n:0)/t)}const Is=document.getElementById("three-canvas"),Mr=document.getElementById("canvas-wrapper"),ni=document.getElementById("canvas-col"),vt=new bc({canvas:Is,antialias:!0});vt.setPixelRatio(window.devicePixelRatio);vt.setClearColor(0,1);vt.autoClear=!0;const yr=new Ld,Vc=new Hd(180);Vc.userData.excludeFromPng=!0;yr.add(Vc);const Pt=new _c(-1,1,1,-1,.001,5e3),ei=new sn(55,1,.001,5e3);let Me=Pt;const Lt=new k(0,0,0),bo=new k(0,0,420);for(const n of[Pt,ei])n.position.copy(bo),n.up.set(0,1,0),n.lookAt(Lt);function Eo(){const e=Se.cameraProjection==="perspective"?ei:Pt;e!==Me&&(e.position.copy(Me.position),e.quaternion.copy(Me.quaternion),e.up.copy(Me.up),e.zoom=Me.zoom,e.lookAt(Lt),e.updateProjectionMatrix(),Me=e,ii())}const _t={radius:420,azimuth:0,elevation:0};function ii(){const n=Me.position.x-Lt.x,e=Me.position.y-Lt.y,t=Me.position.z-Lt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);_t.radius=i,_t.azimuth=Math.atan2(n,t),_t.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function Ss(){const n=Math.cos(_t.elevation);Me.position.set(Lt.x+_t.radius*n*Math.sin(_t.azimuth),Lt.y+_t.radius*Math.sin(_t.elevation),Lt.z+_t.radius*n*Math.cos(_t.azimuth)),Me.lookAt(Lt)}function Wc(){Lt.set(0,0,0);for(const n of[Pt,ei])n.position.copy(bo),n.up.set(0,1,0),n.rotation.set(0,0,0),n.zoom=1,n.lookAt(Lt),n.updateProjectionMatrix();Eo(),To(),ii()}function To(){if(Se.cameraProjection==="perspective")return;const n=String(Se.cameraAxoPreset||"orthoXY"),e=Math.max(40,Number(_t.radius)||bo.length());let t=0,i=0;n==="isometric"?(t=Math.PI/4,i=Math.asin(1/Math.sqrt(3))):n==="fortyFive"?(t=Math.PI/4,i=Math.PI/4):n==="topXZ"&&(t=0,i=Math.PI/2-.001),_t.radius=e,_t.azimuth=t,_t.elevation=i,Ss(),ii()}ii();const kt={active:!1,button:-1,lastX:0,lastY:0};Is.addEventListener("contextmenu",n=>n.preventDefault());Is.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(kt.active=!0,kt.button=n.button,kt.lastX=n.clientX,kt.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{kt.active=!1,kt.button=-1});window.addEventListener("mousemove",n=>{if(!kt.active)return;const e=n.clientX-kt.lastX,t=n.clientY-kt.lastY;if(kt.lastX=n.clientX,kt.lastY=n.clientY,kt.button===0)_t.azimuth-=e*.006,_t.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,_t.elevation-t*.005)),Ss();else if(kt.button===1){const i=Math.max(1,vt.domElement.clientHeight||ni.clientHeight||window.innerHeight),r=new k,s=new k,a=new k;Me.updateMatrixWorld();const o=Me.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Me.isOrthographicCamera)l=(Me.top-Me.bottom)/(Math.max(.01,Me.zoom)*i);else{const c=Math.max(.001,Me.position.distanceTo(Lt)),u=mo.degToRad(Me.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Me.zoom)}a.copy(r).multiplyScalar(-e*l),a.addScaledVector(s,t*l),Me.position.add(a),Lt.add(a),ii()}else if(kt.button===2){const i=-e*.004,r=-t*.004;Me.rotateOnWorldAxis(new k(0,1,0),i),Me.rotateX(r)}});Is.addEventListener("wheel",n=>{if(n.preventDefault(),Me.isPerspectiveCamera){const e=new k;Me.getWorldDirection(e);const t=Math.max(2,_t.radius*.08),i=(n.deltaY>0?1:-1)*t;Me.position.addScaledVector(e,i),ii()}else{const e=n.deltaY>0?.92:1.08;Me.zoom=Math.max(.05,Math.min(64,Me.zoom*e)),Me.updateProjectionMatrix()}},{passive:!1});function Xc(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Me.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Me.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Me.position.z=n.z,e=!0),e&&(Me.lookAt(Lt),ii()),Number.isFinite(n.zoom)&&(Me.zoom=Math.max(.05,Math.min(64,n.zoom)),Me.updateProjectionMatrix())}function B_(){const n=Ht.getVisibleBounds();if(n.empty){Wc();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=vt.domElement.width/t,r=vt.domElement.height/t,s=Math.max(1,i||Number(Se.canvasWidth)||vt.domElement.clientWidth||ni.clientWidth||window.innerWidth),a=Math.max(1,r||Number(Se.canvasHeight)||vt.domElement.clientHeight||ni.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(Lt.copy(c),Me.isOrthographicCamera){const f=Math.max(l.x*.5,l.y*.5*o,u*.65),h=Math.max(l.y*.5,l.x*.5/Math.max(.001,o),u*.65);Pt.left=-f*e,Pt.right=f*e,Pt.top=h*e,Pt.bottom=-h*e,Pt.zoom=1,Pt.updateProjectionMatrix(),_t.radius=Math.max(u*2.2,60),Ss()}else{const f=mo.degToRad(ei.fov),h=2*Math.atan(Math.tan(f*.5)*ei.aspect),m=l.y*.5*e/Math.max(.001,Math.tan(f*.5)),_=l.x*.5*e/Math.max(.001,Math.tan(h*.5));_t.radius=Math.max(u*1.35,_,m,40),Ss(),ei.updateProjectionMatrix()}ii()}function qc(n,e){Pt.left=-n/2,Pt.right=n/2,Pt.top=e/2,Pt.bottom=-e/2,Pt.updateProjectionMatrix(),ei.aspect=n/Math.max(1,e),ei.updateProjectionMatrix(),vt.setSize(n,e,!1)}const z_=ni.clientWidth||window.innerWidth,k_=ni.clientHeight||window.innerHeight;qc(z_,k_);Eo();To();const Ht=new b_(yr,{maxParticles:Se.maxParticles??262144}),H_=Ht.onRulesChanged(Se.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:H_}));class $c{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.FFT_SIZE=2048,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.ctxState="none"}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination)),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1)}catch{}}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var A,y,L;if(!this.analyser)return;((A=this.ctx)==null?void 0:A.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((y=this.ctx)==null?void 0:y.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((L=this.ctx)==null?void 0:L.sampleRate)??44100,i=t/2,r=R=>R/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,f=0,h=0;for(let R=0;R<e;R++){const P=this.frequencyData[R],U=r(R);U<250?(s+=P,a++):U<4e3?(o+=P,l++):(c+=P,u++),P>f&&(f=P,h=R)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(h)),this.peakByte=f;const m=I_(this.frequencyData,t),_=O_(m,t),g=U_(this.frequencyData,this._prevFrequencyData),p=N_(this.frequencyData),d=F_(this.frequencyData,t);this.spectralCentroid=rs(this.spectralCentroid,_,this.featureSmoothingAlpha),this.spectralFlux=rs(this.spectralFlux,g,this.featureSmoothingAlpha),this.spectralFlatness=rs(this.spectralFlatness,p,this.featureSmoothingAlpha),this.inharmonicity=rs(this.inharmonicity,d,this.featureSmoothingAlpha),this._prevFrequencyData.set(this.frequencyData);let T=0;for(const R of this.timeDomainData)T+=((R-128)/128)**2;if(this.amplitude=Math.sqrt(T/this.timeDomainData.length),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let R=0,P=0;for(let U=0;U<this._freqL.length;U++)R+=this._freqL[U],P+=this._freqR[U];this.pan=(P-R)/(R+P+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}}const it=new $c,Nl=document.getElementById("status-dot"),Fl=document.getElementById("status-text");function ma(n,e){Nl&&(Nl.className=n),Fl&&(Fl.textContent=e)}function Yc(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>ma("open","Backend connected"),n.onclose=()=>{ma("closed","Backend offline"),setTimeout(Yc,3e3)},n.onerror=()=>ma("closed","WS error"),n.onmessage=()=>{},Ls(e=>{n.readyState===WebSocket.OPEN&&n.send(JSON.stringify({type:"params_update",payload:e}))})}Yc();const Sn=document.createElement("div");Sn.id="camera-hud";Sn.style.position="fixed";Sn.style.left="8px";Sn.style.bottom="8px";Sn.style.zIndex="220";Sn.style.display="flex";Sn.style.alignItems="center";Sn.style.gap="6px";const an=document.createElement("button");an.type="button";an.title="Reset camera";an.textContent="↺";an.style.width="22px";an.style.height="22px";an.style.border="1px solid var(--color-border, #444)";an.style.borderRadius="6px";an.style.background="rgba(0,0,0,0.55)";an.style.color="var(--color-text-muted, #bbb)";an.style.cursor="pointer";an.addEventListener("click",Wc);const on=document.createElement("button");on.type="button";on.title="Fit to visible particles";on.textContent="Fit";on.style.height="22px";on.style.padding="0 8px";on.style.border="1px solid var(--color-border, #444)";on.style.borderRadius="6px";on.style.background="rgba(0,0,0,0.55)";on.style.color="var(--color-text-muted, #bbb)";on.style.cursor="pointer";on.addEventListener("click",B_);const ln=document.createElement("button");ln.type="button";ln.title="Clear canvas";ln.textContent="Clean";ln.style.height="22px";ln.style.padding="0 8px";ln.style.border="1px solid var(--color-border, #444)";ln.style.borderRadius="6px";ln.style.background="rgba(0,0,0,0.55)";ln.style.color="var(--color-text-muted, #bbb)";ln.style.cursor="pointer";ln.addEventListener("click",()=>Ht.clear());const vn=document.createElement("div");vn.id="camera-readout";vn.style.fontFamily="var(--font-mono, monospace)";vn.style.fontSize="10px";vn.style.color="var(--color-text-muted, #bbb)";vn.style.background="rgba(0,0,0,0.35)";vn.style.padding="4px 6px";vn.style.borderRadius="4px";vn.style.pointerEvents="none";vn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";Sn.append(an,on,ln,vn);document.body.appendChild(Sn);let Ol=0,Gi=0,bs="";function Bl(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function zl(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function G_(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function V_(){var e,t;if(bs)return zl(bs);const n=String(((e=it==null?void 0:it.audioEl)==null?void 0:e.currentSrc)||((t=it==null?void 0:it.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return zl(r)}catch{}return"audio"}async function jc(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function W_(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.json`}async function X_(){var o;const n=Bl(V_(),"audio"),e=Bl(G_(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(Se.canvasWidth)||vt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(Se.canvasHeight)||vt.domElement.height/Math.max(1,window.devicePixelRatio))),s=document.createElement("canvas"),a=new bc({canvas:s,antialias:!0,preserveDrawingBuffer:!0});try{const l=a.capabilities.maxTextureSize||8192,c=Math.min(i,l),u=Math.min(r,l),f=Math.max(1,Number(((o=vt.getPixelRatio)==null?void 0:o.call(vt))||window.devicePixelRatio||1)),h=Math.max(1,Math.floor(c/f)),m=Math.max(1,Math.floor(u/f));a.setPixelRatio(f),a.setSize(h,m,!1);let _=Me.clone();Me===Pt||_.isOrthographicCamera?(_=Me.clone(),_.updateProjectionMatrix()):_.isPerspectiveCamera&&(_.aspect=c/Math.max(1,u),_.updateProjectionMatrix());const g=[];yr.traverse(T=>{var A;(A=T==null?void 0:T.userData)!=null&&A.excludeFromPng&&T.visible&&(g.push(T),T.visible=!1)}),a.setClearColor(Ht.getBackgroundColor(),1),a.render(yr,_);for(const T of g)T.visible=!0;const p=await new Promise(T=>s.toBlob(T,"image/png"));if(!p)throw new Error("PNG export failed (empty blob).");const d=document.createElement("a");d.href=URL.createObjectURL(p),d.download=t,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(d.href),(c!==i||u!==r)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:i,h:r},exported:{w:c,h:u},maxTextureSize:l})}finally{a.dispose()}}function kl(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}async function q_(n,e){var o,l,c,u,f,h,m,_;if(!((e==null?void 0:e.duration)>0))return;const t=++Gi,i=await jc(e),r=i?URL.createObjectURL(i):e.currentSrc||e.src;if(!r)return;const s=new Audio;s.crossOrigin="anonymous",s.src=r,s.preload="auto",s.currentTime=0,s.muted=!0,s.volume=0,typeof s.preservesPitch=="boolean"&&(s.preservesPitch=!1),s.playbackRate=16,s.style.display="none",document.body.appendChild(s);const a=new $c;kl(n,!0);try{Ht.clear(),await new Promise((d,T)=>{const A=()=>{L(),d()},y=()=>{L(),T(new Error("Paint-all audio metadata failed to load."))},L=()=>{s.removeEventListener("loadedmetadata",A),s.removeEventListener("canplay",A),s.removeEventListener("error",y)};s.addEventListener("loadedmetadata",A,{once:!0}),s.addEventListener("canplay",A,{once:!0}),s.addEventListener("error",y,{once:!0}),s.load()}),a.init(s),((o=a.ctx)==null?void 0:o.state)==="suspended"&&await a.ctx.resume(),await s.play();let g=-1,p=0;for(;t===Gi&&!s.ended;){await new Promise(L=>requestAnimationFrame(L)),a.update();const d=vt.domElement.width/window.devicePixelRatio,T=vt.domElement.height/window.devicePixelRatio,A={...Se,persistMode:1,cameraState:{x:Me.position.x,y:Me.position.y,z:Me.position.z,zoom:Me.zoom}};Ht.update(a,A,d,T),Xc(Ht.getCameraOutput());const y=Number(s.currentTime)||0;if(y>g+1e-4?(g=y,p=0):p++,s.paused&&!s.ended)try{await s.play()}catch{break}if(p>120&&y>=Math.max(0,(s.duration||0)-.25)){s.currentTime=s.duration||y;break}}}finally{s.pause(),s.src="",s.remove(),i&&URL.revokeObjectURL(r);try{(l=a.source)==null||l.disconnect()}catch{}try{(c=a.streamSource)==null||c.disconnect()}catch{}try{(u=a.splitter)==null||u.disconnect()}catch{}try{(f=a.analyserL)==null||f.disconnect()}catch{}try{(h=a.analyserR)==null||h.disconnect()}catch{}try{(m=a.analyser)==null||m.disconnect()}catch{}try{await((_=a.ctx)==null?void 0:_.close())}catch{}kl(n,!1)}}function Zc(){requestAnimationFrame(Zc),Ol++,it.update();const n=!!(it.audioEl&&!it.audioEl.paused&&!it.audioEl.ended);if(n&&!it.analyser&&it.audioEl&&it.init(it.audioEl),n){const t=vt.domElement.width/window.devicePixelRatio,i=vt.domElement.height/window.devicePixelRatio,r={...Se,cameraState:{x:Me.position.x,y:Me.position.y,z:Me.position.z,zoom:Me.zoom}};Ht.update(it,r,t,i),Xc(Ht.getCameraOutput())}const e=Ht.getBackgroundColor();if(vt.setClearColor(e,1),vt.render(yr,Me),Ol%6===0){const t=(Me.rotation.x*180/Math.PI).toFixed(2),i=(Me.rotation.y*180/Math.PI).toFixed(2),r=(Me.rotation.z*180/Math.PI).toFixed(2),s=Me.position.x.toFixed(2),a=Me.position.y.toFixed(2),o=Me.position.z.toFixed(2);let l=0,c=0;if(Me.isOrthographicCamera)l=Math.abs((Me.right-Me.left)/Math.max(.01,Me.zoom)),c=Math.abs((Me.top-Me.bottom)/Math.max(.01,Me.zoom));else{const u=Math.max(.001,Me.position.distanceTo(Lt)),f=mo.degToRad(Me.fov);c=2*Math.tan(f*.5)*u/Math.max(.01,Me.zoom),l=c*Me.aspect}vn.textContent=`cam p(${s},${a},${o}) r(${t},${i},${r}) pts ${Ht.getVisibleCount()} fft ${it.peakByte} amp ${it.amplitude.toFixed(3)} sc ${it.spectralCentroid.toFixed(3)} sf ${it.spectralFlux.toFixed(3)} sfl ${it.spectralFlatness.toFixed(3)} inh ${it.inharmonicity.toFixed(3)} canv ${l.toFixed(2)} × ${c.toFixed(2)}`}}Zc();{const n=document.getElementById("audio-player"),{audioEl:e}=L_(n);it.audioEl=e;let t=null;e.addEventListener("play",async()=>{var s;it.init(e),((s=it.ctx)==null?void 0:s.state)==="suspended"&&await it.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var s;Gi++,it.init(e),((s=it.ctx)==null?void 0:s.state)==="suspended"&&await it.ctx.resume()}),n.addEventListener("player:play",()=>{Gi++}),n.addEventListener("player:pause",()=>{Gi++}),n.addEventListener("player:stop",()=>{Gi++}),n.addEventListener("player:savepng",async()=>{await X_()}),n.addEventListener("player:paintall",async()=>{await q_(n,e)}),n.addEventListener("player:playbackrate",s=>{var o;const a=Number((o=s==null?void 0:s.detail)==null?void 0:o.rate);Number.isFinite(a)&&(e.playbackRate=Math.max(.1,Math.min(16,a)))}),n.addEventListener("player:fileloaded",s=>{var o;const a=(o=s==null?void 0:s.detail)==null?void 0:o.file;t=a instanceof File?a:null,bs=(t==null?void 0:t.name)||""});const i=async()=>{try{const s=Mo(),a=t||await jc(e),o=a?await Wg(a):"",l=qg({params:s,presetName:"",audioDataUrl:o,audioFileName:(t==null?void 0:t.name)||"project-audio.wav"});Yg(l,W_())}catch(s){console.warn("[Project] save failed:",s)}},r=async s=>{var a,o,l;try{s.params&&typeof s.params=="object"&&Ds(s.params);const c=(a=s==null?void 0:s.audio)==null?void 0:a.dataUrl;if(typeof c=="string"&&c.startsWith("data:")){const u=((o=s==null?void 0:s.audio)==null?void 0:o.fileName)||"project-audio.wav",f=Xg(c,u);t=f,bs=(f==null?void 0:f.name)||"",(l=e.src)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(f),e.load(),it.audioEl=e}}catch(c){console.warn("[Project] load failed:",c)}};n.addEventListener("player:saveproject",i),n.addEventListener("player:loadproject",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})}),window.addEventListener("seesound:project-save-request",i),window.addEventListener("seesound:project-load-request",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})})}let jn=null,so=!1;jn=D_({wrapper:Mr,column:ni,onResize(n,e){if(qc(n,e),Ao(n,e),!so){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(Se.canvasWidth)!==t||Number(Se.canvasHeight)!==i)&&Ds({canvasWidth:t,canvasHeight:i})}}});function Ao(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(Se.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Kc(){const e=Math.max(5,Math.min(400,Math.floor(Number(Se.canvasScale)||100)))/100;Mr.style.transformOrigin="center center",Mr.style.transform=`scale(${e})`}function Jc(){var i;const n=((i=jn==null?void 0:jn.getSize)==null?void 0:i.call(jn))||{},e=Math.max(160,Math.floor(n.w||Mr.clientWidth||ni.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||Mr.clientHeight||ni.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function Qc(){if(!jn)return;const n=Jc(),e=Math.max(160,Math.floor(Number(Se.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(Se.canvasHeight)||n.h));if(e===n.w&&t===n.h){Ao(n.w,n.h);return}so=!0,jn.setSize(e,t),so=!1}Qc();Kc();{const n=Jc();(Number(Se.canvasWidth)!==n.w||Number(Se.canvasHeight)!==n.h)&&Ds({canvasWidth:n.w,canvasHeight:n.h}),Ao(n.w,n.h)}Ls((n,e)=>{if(e==="cameraProjection"&&Eo(),(e==="cameraProjection"||e==="cameraAxoPreset")&&To(),(e==="canvasWidth"||e==="canvasHeight")&&Qc(),e==="canvasScale"&&Kc(),e==="maxParticles"){const t=Math.max(4096,Math.floor(Se.maxParticles||4096));Se.maxParticles!==t&&(Se.maxParticles=t),Ht.setMaxParticles(t)}if(e==="ruleBlocks"){const t=Ht.onRulesChanged(Se.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});u_(document.getElementById("control-panel"));const Hl=Array.isArray(Se.ruleBlocks)?Se.ruleBlocks.length:0,Pn=Ht.getRuleCompileState(),Gl=(Pn==null?void 0:Pn.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${xs} compile=${Gl} rules=${Hl}`,{schemaVersion:xs,compileStatus:Gl,compileTimeMs:(Pn==null?void 0:Pn.compileTimeMs)??0,compileError:(Pn==null?void 0:Pn.compileError)??null,ruleCount:Hl,debug:Fg});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
