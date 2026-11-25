(()=>{var Yh=i=>{throw TypeError(i)};var bl=(i,e,t)=>e.has(i)||Yh("Cannot "+t);var ni=(i,e,t)=>(bl(i,e,"read from private field"),t?t.call(i):e.get(i)),Ml=(i,e,t)=>e.has(i)?Yh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),$h=(i,e,t,n)=>(bl(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Vr=(i,e,t)=>(bl(i,e,"access private method"),t);var Au=0,tc=1,Ru=2;var hr=1,Cu=2,ys=3,Bn=0,Ht=1,It=2,On=0,bs=1,nc=2,ic=3,sc=4,Iu=5;var Ui=100,Pu=101,Lu=102,Du=103,Nu=104,Uu=200,Fu=201,Bu=202,Ou=203,rc=204,oc=205,zu=206,ku=207,Vu=208,Hu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,xo=0,vo=1,yo=2,os=3,bo=4,Mo=5,So=6,wo=7,Ko=0,$u=1,Zu=2,bn=0,ac=1,lc=2,cc=3,hc=4,uc=5,dc=6,fc=7;var pc=300,fi=301,Fi=302,jo=303,Qo=304,ur=306,as=1e3,In=1001,Eo=1002,Ut=1003,Ju=1004;var dr=1005;var zt=1006,ea=1007;var pi=1008;var nn=1009,mc=1010,gc=1011,Ms=1012,ta=1013,Mn=1014,Gt=1015,Sn=1016,na=1017,ia=1018,Ss=1020,_c=35902,xc=35899,vc=1021,yc=1022,sn=1023,Pn=1026,mi=1027,ws=1028,sa=1029,gi=1030,ra=1031;var oa=1033,fr=33776,pr=33777,mr=33778,gr=33779,aa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37488,ma=37489,_r=37490,ga=37491,_a=37808,xa=37809,va=37810,ya=37811,ba=37812,Ma=37813,Sa=37814,wa=37815,Ea=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Ia=37821,Pa=36492,La=36494,Da=36495,Na=36283,Ua=36284,xr=36285,Fa=36286;var Xs=2300,To=2301,go=2302,ql=2303,Yl=2400,$l=2401,Zl=2402;var Ku=3200;var Ba=0,ju=1,jn="",At="srgb",qs="srgb-linear",Ys="linear",et="srgb";var _o=7680;var bc=34055,Mc=34056;var Sc=517;var Qu=519,ed=512,td=513,nd=514,Oa=515,id=516,sd=517,za=518,rd=519,wc=35044,Ec=35048;var Tc="300 es",xn=2e3,ls=2001;function Bp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){let i=$s("canvas");return i.style.display="block",i}var Zh={},cs=null;function Zs(...i){let e="THREE."+i.shift();cs?cs("log",e,...i):console.log(e,...i)}function ad(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=ad(i);let e="THREE."+i.shift();if(cs)cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=ad(i);let e="THREE."+i.shift();if(cs)cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ai(...i){let e=i.join(" ");e in Zh||(Zh[e]=!0,De(...i))}function ld(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var cd={[xo]:vo,[yo]:So,[bo]:wo,[os]:Mo,[vo]:xo,[So]:yo,[wo]:bo,[Mo]:os},Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=1234567,ss=Math.PI/180,hs=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Ac(i,e){return(i%e+e)%e}function zp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kp(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function Vp(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function Hp(i,e=1){return e-Math.abs(Ac(i,e*2)-e)}function Gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qp(i,e){return i+Math.random()*(e-i)}function Yp(i){return i*(.5-Math.random())}function $p(i){i!==void 0&&(Jh=i);let e=Jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zp(i){return i*ss}function Jp(i){return i*hs}function Kp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function em(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ct={DEG2RAD:ss,RAD2DEG:hs,generateUUID:$n,clamp:$e,euclideanModulo:Ac,mapLinear:zp,inverseLerp:kp,lerp:Ws,damp:Vp,pingpong:Hp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:qp,randFloatSpread:Yp,seededRandom:$p,degToRad:Zp,radToDeg:Jp,isPowerOfTwo:Kp,ceilPowerOfTwo:jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:em,normalize:nt,denormalize:_n},Lc=class Lc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lc.prototype.isVector2=!0;var Ve=Lc,Ct=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);f=Math.sin(f*M)/E,a=Math.sin(a*M)/E,l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+_*a}else{l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dc=class Dc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dc.prototype.isVector3=!0;var I=Dc,Sl=new I,Kh=new Ct,Nc=class Nc{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],E=s[4],b=s[7],v=s[2],S=s[5],A=s[8];return r[0]=o*_+a*M+l*v,r[3]=o*m+a*E+l*S,r[6]=o*f+a*b+l*A,r[1]=c*_+h*M+d*v,r[4]=c*m+h*E+d*S,r[7]=c*f+h*b+d*A,r[2]=u*_+p*M+g*v,r[5]=u*m+p*E+g*S,r[8]=u*f+p*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(e,t)),this}rotate(e){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nc.prototype.isMatrix3=!0;var Oe=Nc,wl=new Oe,jh=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){let i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:et,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var Ye=tm();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,Ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=$s("canvas")),Wi.width=e.width,Wi.height=e.height;let s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nm=0,us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(El(s[o].image)):r.push(El(s[o]))}else r=El(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var im=0,Tl=new I,kt=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=zt,o=pi,a=sn,l=nn,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=$n(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=pc;kt.DEFAULT_ANISOTROPY=1;var Uc=class Uc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(p+1)/2,v=(f+1)/2,S=(h+u)/4,A=(d+_)/4,x=(g+m)/4;return E>b&&E>v?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uc.prototype.isVector4=!0;var at=Uc,Ro=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new kt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Js=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jo=class Jo{constructor(e,t,n,s,r,o,a,l,c,h,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),Hr.crossVectors(rn,ii),s[0]=ii.x,s[4]=Hr.x,s[8]=rn.x,s[1]=ii.y,s[5]=Hr.y,s[9]=rn.y,s[2]=ii.z,s[6]=Hr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],E=n[7],b=n[11],v=n[15],S=s[0],A=s[4],x=s[8],T=s[12],R=s[1],L=s[5],N=s[9],U=s[13],C=s[2],B=s[6],z=s[10],W=s[14],F=s[3],D=s[7],X=s[11],Z=s[15];return r[0]=o*S+a*R+l*C+c*F,r[4]=o*A+a*L+l*B+c*D,r[8]=o*x+a*N+l*z+c*X,r[12]=o*T+a*U+l*W+c*Z,r[1]=h*S+d*R+u*C+p*F,r[5]=h*A+d*L+u*B+p*D,r[9]=h*x+d*N+u*z+p*X,r[13]=h*T+d*U+u*W+p*Z,r[2]=g*S+_*R+m*C+f*F,r[6]=g*A+_*L+m*B+f*D,r[10]=g*x+_*N+m*z+f*X,r[14]=g*T+_*U+m*W+f*Z,r[3]=M*S+E*R+b*C+v*F,r[7]=M*A+E*L+b*B+v*D,r[11]=M*x+E*N+b*z+v*X,r[15]=M*T+E*U+b*W+v*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],M=l*p-c*u,E=a*p-c*d,b=a*u-l*d,v=o*p-c*h,S=o*u-l*h,A=o*d-a*h;return t*(_*M-m*E+f*b)-n*(g*M-m*v+f*S)+s*(g*E-_*v+f*A)-r*(g*b-_*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=t*a-n*o,E=t*l-s*o,b=t*c-r*o,v=n*l-s*a,S=n*c-r*a,A=s*c-r*l,x=h*_-d*g,T=h*m-u*g,R=h*f-p*g,L=d*m-u*_,N=d*f-p*_,U=u*f-p*m,C=M*U-E*N+b*L+v*R-S*T+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(a*U-l*N+c*L)*B,e[1]=(s*N-n*U-r*L)*B,e[2]=(_*A-m*S+f*v)*B,e[3]=(u*S-d*A-p*v)*B,e[4]=(l*R-o*U-c*T)*B,e[5]=(t*U-s*R+r*T)*B,e[6]=(m*b-g*A-f*E)*B,e[7]=(h*A-u*b+p*E)*B,e[8]=(o*N-a*R+c*x)*B,e[9]=(n*R-t*N-r*x)*B,e[10]=(g*S-_*b+f*M)*B,e[11]=(d*b-h*S-p*M)*B,e[12]=(a*T-o*L-l*x)*B,e[13]=(t*L-n*T+s*x)*B,e[14]=(_*E-g*v-m*M)*B,e[15]=(h*v-d*E+u*M)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,M=l*c,E=l*h,b=l*d,v=n.x,S=n.y,A=n.z;return s[0]=(1-(_+f))*v,s[1]=(p+b)*v,s[2]=(g-E)*v,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(u+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+E)*A,s[9]=(m-M)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Xi.set(s[0],s[1],s[2]).length(),a=Xi.set(s[4],s[5],s[6]).length(),l=Xi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),pn.copy(this);let c=1/o,h=1/a,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ls)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ls)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jo.prototype.isMatrix4=!0;var ke=Jo,Xi=new I,pn=new ke,sm=new I(0,0,0),rm=new I(1,1,1),ii=new I,Hr=new I,rn=new I,eu=new ke,tu=new Ct,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},om=0,nu=new I,qi=new Ct,Hn=new ke,Gr=new I,Bs=new I,am=new I,lm=new Ct,iu=new I(1,0,0),su=new I(0,1,0),ru=new I(0,0,1),ou={type:"added"},cm={type:"removed"},Yi={type:"childadded",child:null},Al={type:"childremoved",child:null},Bt=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Jn,n=new Ct,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Bs,Gr,this.up):Hn.lookAt(Gr,Bs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Hn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new I(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Ac(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rl(o,r,e+1/3),this.g=Rl(o,r,e),this.b=Rl(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ye.workingToColorSpace(Yt.copy(this),e),Math.round($e(Yt.r*255,0,255))*65536+Math.round($e(Yt.g*255,0,255))*256+Math.round($e(Yt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=At){Ye.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Wr);let n=Ws(si.h,Wr.h,t),s=Ws(si.s,Wr.s,t),r=Ws(si.l,Wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Fe;Fe.NAMES=hd;var Ri=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mn=new I,Gn=new I,Cl=new I,Wn=new I,$i=new I,Zi=new I,au=new I,Il=new I,Pl=new I,Ll=new I,Dl=new at,Nl=new at,Ul=new at,Yn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Gn.subVectors(n,t),Cl.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(Gn),l=mn.dot(Cl),c=Gn.dot(Gn),h=Gn.dot(Cl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Gn.subVectors(e,t),mn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),Zi.subVectors(r,n),Il.subVectors(e,n);let l=$i.dot(Il),c=Zi.dot(Il);if(l<=0&&c<=0)return t.copy(n);Pl.subVectors(e,s);let h=$i.dot(Pl),d=Zi.dot(Pl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector($i,o);Ll.subVectors(e,r);let p=$i.dot(Ll),g=Zi.dot(Ll);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return au.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(au,a);let f=1/(m+_+u);return o=_*f,a=u*f,t.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},it=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),qr.subVectors(this.max,Os),Ji.subVectors(e.a,Os),Ki.subVectors(e.b,Os),ji.subVectors(e.c,Os),ri.subVectors(Ki,Ji),oi.subVectors(ji,Ki),Si.subVectors(Ji,ji);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Si.z,Si.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Si.z,0,-Si.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Si.y,Si.x,0];return!Fl(t,Ji,Ki,ji,qr)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,Ji,Ki,ji,qr))?!1:(Yr.crossVectors(ri,oi),t=[Yr.x,Yr.y,Yr.z],Fl(t,Ji,Ki,ji,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,Xr=new it,Ji=new I,Ki=new I,ji=new I,ri=new I,oi=new I,Si=new I,Os=new I,qr=new I,Yr=new I,wi=new I;function Fl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Tt=new I,$r=new Ve,um=0,St=class extends Ln{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Gt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var js=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},dm=new it,zs=new I,Bl=new I,Ot=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Bl)),this.expandByPoint(zs.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fm=0,un=new ke,Ol=new Bt,Qi=new I,on=new it,ks=new it,Nt=new I,lt=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bp(e)?js:Ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(on.min,ks.min),on.expandByPoint(Nt),Nt.addVectors(on.max,ks.max),on.expandByPoint(Nt)):(on.expandByPoint(ks.min),on.expandByPoint(ks.max))}on.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Nt.add(Qi)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,u=new Ve,p=new Ve,g=new Ve,_=new I,m=new I;function f(x,T,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[x].add(_),a[T].add(_),a[R].add(_),l[x].add(m),l[T].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let R=M[x],L=R.start,N=R.count;for(let U=L,C=L+N;U<C;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new I,b=new I,v=new I,S=new I;function A(x){v.fromBufferAttribute(s,x),S.copy(v);let T=a[x];E.copy(T),E.sub(v.multiplyScalar(v.dot(T))).normalize(),b.crossVectors(S,T);let L=b.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,T=M.length;x<T;++x){let R=M[x],L=R.start,N=R.count;for(let U=L,C=L+N;U<C;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new St(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Qt=new I,ps=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zl=new I,pm=new I,mm=new Oe,_t=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zl.subVectors(n,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mm.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gm=0,Dn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=bs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _t().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qn=new I,kl=new I,Zr=new I,Jr=new I,Ci=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kl.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(kl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=Jr.dot(this.direction),l=-Jr.dot(Zr),c=Jr.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(kl).addScaledVector(Zr,u),p}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,f=n.x-o.x,M=n.y-o.y,E=n.z-o.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(h),A,x,T,R,L,N,U,C,B,z,W,F;if(b>=v&&b>=S?(T=l,N=d,B=g,F=f,l>=0?(A=c,x=h,R=u,L=p,U=_,C=m,z=M,W=E):(A=h,x=c,R=p,L=u,U=m,C=_,z=E,W=M)):v>=S?(T=c,N=u,B=_,F=M,c>=0?(A=h,x=l,R=p,L=d,U=m,C=g,z=E,W=f):(A=l,x=h,R=d,L=p,U=g,C=m,z=f,W=E)):(T=h,N=p,B=m,F=E,h>=0?(A=l,x=c,R=d,L=u,U=g,C=_,z=f,W=M):(A=c,x=l,R=u,L=d,U=_,C=g,z=M,W=f)),T===0)return null;let D=A/T,X=x/T,Z=1/T,G=R-D*N,Q=L-X*N,le=U-D*B,ce=C-X*B,te=z-D*F,H=W-X*F,j=te*ce-H*le,ue=G*H-Q*te,Le=le*Q-ce*G;if(s){if(j<0||ue<0||Le<0)return null}else if((j<0||ue<0||Le<0)&&(j>0||ue>0||Le>0))return null;let be=j+ue+Le;if(be===0)return null;let Be=Z*(j*N+ue*B+Le*F);return(be>0?Be<0:Be>0)?null:this.at(Be/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lu=new ke,Ei=new Ci,Kr=new Ot,cu=new I,jr=new I,Qr=new I,eo=new I,Vl=new I,to=new I,hu=new I,no=new I,xt=class extends Bt{constructor(e=new lt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Vl.fromBufferAttribute(d,e),o?to.addScaledVector(Vl,h):to.addScaledVector(Vl.sub(t),h))}t.add(to)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Kr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Kr,cu)===null||Ei.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,v=E;b<v;b+=3){let S=a.getX(b),A=a.getX(b+1),x=a.getX(b+2);s=io(this,f,e,n,c,h,d,S,A,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let M=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=io(this,o,e,n,c,h,d,M,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,v=E;b<v;b+=3){let S=b,A=b+1,x=b+2;s=io(this,f,e,n,c,h,d,S,A,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let M=m,E=m+1,b=m+2;s=io(this,o,e,n,c,h,d,M,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _m(i,e,t,n,s,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Bn,a),l===null)return null;no.copy(a),no.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:i}}function io(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,jr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,eo);let h=_m(i,e,t,n,jr,Qr,eo,hu);if(h){let d=new I;Yn.getBarycoord(hu,jr,Qr,eo,d),s&&(h.uv=Yn.getInterpolatedAttribute(s,a,l,c,d,new Ve)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,l,c,d,new Ve)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(jr,Qr,eo,u.normal),h.face=u,h.barycoord=d}return h}var Nn=class extends kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ut,h=Ut,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},es=new ke,uu=new ke,so=[],du=new it,xm=new ke,Vs=new xt,Hs=new Ot,ms=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new it),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),du.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Hs.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),uu.multiplyMatrices(n,es),Vs.matrixWorld=uu,Vs.raycast(e,so);for(let o=0,a=so.length;o<a;o++){let l=so[o];l.instanceId=r,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(s*this.count),s,this.count,ws,Gt));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Ot,vm=new Ve(.5,.5),ro=new I,Un=class{constructor(e=new _t,t=new _t,n=new _t,s=new _t,r=new _t,o=new _t){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],M=r[12],E=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-o,p-h,f-g,v-M).normalize(),s[1].setComponents(c+o,p+h,f+g,v+M).normalize(),s[2].setComponents(c+a,p+d,f+_,v+E).normalize(),s[3].setComponents(c-a,p-d,f-_,v-E).normalize(),n)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,p-u,f-m,v-b).normalize();else if(s[4].setComponents(c-l,p-u,f-m,v-b).normalize(),t===xn)s[5].setComponents(c+l,p+u,f+m,v+b).normalize();else if(t===ls)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=vm.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var an=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Po=new I,Lo=new I,fu=new ke,Gs=new Ci,oo=new Ot,Hl=new I,pu=new I,Ii=class extends Bt{constructor(e=new lt,t=new an){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Lo);e.setAttribute("lineDistance",new ft(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;fu.copy(s).invert(),Gs.copy(e.ray).applyMatrix4(fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),M=h.getX(_+1),E=ao(this,e,Gs,l,f,M,_);E&&t.push(E)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=ao(this,e,Gs,l,_,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=ao(this,e,Gs,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=ao(this,e,Gs,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ao(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Po.fromBufferAttribute(a,s),Lo.fromBufferAttribute(a,r),t.distanceSqToSegment(Po,Lo,Hl,pu)>n)return;Hl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hl);if(!(c<e.near||c>e.far))return{distance:c,point:pu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var mu=new I,gu=new I,vn=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)mu.fromBufferAttribute(t,s),gu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mu.distanceTo(gu);e.setAttribute("lineDistance",new ft(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qs=class extends Ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},li=class extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_u=new ke,Jl=new Ci,lo=new Ot,co=new I,Pi=class extends Bt{constructor(e=new lt,t=new li){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;_u.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(_u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);co.fromBufferAttribute(d,m),xu(co,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)co.fromBufferAttribute(d,g),xu(co,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xu(i,e,t,n,s,r,o){let a=Jl.distanceSqToPoint(i);if(a<t){let l=new I;Jl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var er=class extends kt{constructor(e=[],t=fi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tr=class extends kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends kt{constructor(e,t,n=Mn,s,r,o,a=Ut,l=Ut,c,h=Pn,d=1){if(h!==Pn&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Do=class extends ci{constructor(e,t=Mn,n=fi,s,r,o=Ut,a=Ut,l,c=Pn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nr=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dn=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(_,m,f,M,E,b,v,S,A,x,T){let R=b/A,L=v/x,N=b/2,U=v/2,C=S/2,B=A+1,z=x+1,W=0,F=0,D=new I;for(let X=0;X<z;X++){let Z=X*L-U;for(let G=0;G<B;G++){let Q=G*R-N;D[_]=Q*M,D[m]=Z*E,D[f]=C,c.push(D.x,D.y,D.z),D[_]=0,D[m]=0,D[f]=S>0?1:-1,h.push(D.x,D.y,D.z),d.push(G/A),d.push(1-X/x),W+=1}}for(let X=0;X<x;X++)for(let Z=0;Z<A;Z++){let G=u+Z+B*X,Q=u+Z+B*(X+1),le=u+(Z+1)+B*(X+1),ce=u+(Z+1)+B*X;l.push(G,Q,ce),l.push(Q,le,ce),F+=6}a.addGroup(p,F,T),p+=F,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Li=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,_=[],m=n/2,f=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(p,2));function M(){let b=new I,v=new I,S=0,A=(t-e)/n;for(let x=0;x<=r;x++){let T=[],R=x/r,L=R*(t-e)+e;for(let N=0;N<=s;N++){let U=N/s,C=U*l+a,B=Math.sin(C),z=Math.cos(C);v.x=L*B,v.y=-R*n+m,v.z=L*z,d.push(v.x,v.y,v.z),b.set(B,A,z).normalize(),u.push(b.x,b.y,b.z),p.push(U,1-R),T.push(g++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let R=_[T][x],L=_[T+1][x],N=_[T+1][x+1],U=_[T][x+1];(e>0||T!==0)&&(h.push(R,L,U),S+=3),(t>0||T!==r-1)&&(h.push(L,N,U),S+=3)}c.addGroup(f,S,0),f+=S}function E(b){let v=g,S=new Ve,A=new I,x=0,T=b===!0?e:t,R=b===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),p.push(.5,.5),g++;let L=g;for(let N=0;N<=s;N++){let C=N/s*l+a,B=Math.cos(C),z=Math.sin(C);A.x=T*z,A.y=m*R,A.z=T*B,d.push(A.x,A.y,A.z),u.push(0,R,0),S.x=B*.5+.5,S.y=z*.5*R+.5,p.push(S.x,S.y),g++}for(let N=0;N<s;N++){let U=v+N,C=L+N;b===!0?h.push(C,C+1,U):h.push(C+1,C,U),x+=3}c.addGroup(f,x,b===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class i extends Li{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ho=new I,uo=new I,Gl=new I,fo=new Yn,Di=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ss*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:f}=fo;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),fo.getNormal(Gl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let E=(M+1)%3,b=d[M],v=d[E],S=fo[h[M]],A=fo[h[E]],x=`${b}_${v}`,T=`${v}_${b}`;T in u&&u[T]?(Gl.dot(u[T].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(A.x,A.y,A.z)),u[T]=null):x in u||(u[x]={index0:c[M],index1:c[E],normal:Gl.clone()})}}for(let g in u)if(u[g]){let{index0:_,index1:m}=u[g];ho.fromBufferAttribute(a,_),uo.fromBufferAttribute(a,m),p.push(ho.x,ho.y,ho.z),p.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new ft(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var yn=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let M=f*u-o;for(let E=0;E<c;E++){let b=E*d-r;g.push(b,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let E=M+c*f,b=M+c*(f+1),v=M+1+c*(f+1),S=M+1+c*f;p.push(E,b,S),p.push(b,v,S)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var gs=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let M=[],E=f/n,b=o+E*a,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),A=0;f===0&&o===0?A=.5/t:f===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){let T=x/t,R=s+T*r;d.x=-S*Math.cos(R),d.y=v,d.z=S*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+A,1-E),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let E=h[f][M+1],b=h[f][M],v=h[f+1][M],S=h[f+1][M+1];(f!==0||o>0)&&p.push(E,b,S),(f!==n-1||l<Math.PI)&&p.push(b,v,S)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _s=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,p=new I,g=new I;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let f=0;f<=s;f++){let M=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let f=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,b=(s+1)*_+m;l.push(f,M,b),l.push(M,E,b)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(vu(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(vu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=Bi(i[t]);for(let s in n)e[s]=n[s]}return e}function vu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ym(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var ud={clone:Bi,merge:Zt},bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},No=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xs=class extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uo=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ts(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bo=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=e,a=2*t-n;break;case Zl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:o=e,l=2*n-t;break;case Zl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let v=0;v!==a;++v)r[v]=f*o[h+v]+M*o[c+v]+E*o[l+v]+b*o[d+v];return r}},Oo=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},zo=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ko=class extends hi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}let u=a*2,p=e-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],f=p*u+g*2,M=d[f],E=d[f+1],b=e*u+g*2,v=h[b],S=h[b+1],A=wm(n,t,M,v,s);r[g]=dd(A,_,E,S,m)}return r}};function dd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Sm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=dd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Sm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wl(e.settings)&&(n.settings={inTangents:ts(e.settings.inTangents,Array),outTangents:ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wl(this.settings)&&(yu(this.settings.inTangents,e),yu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ue("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Op(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=To;var ui=class extends ln{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Xs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="color";var Ho=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Ho.prototype.ValueTypeName="number";var Go=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ct.slerpFlat(r,0,o,c-a,o,c,l);return r}},sr=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends ln{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Xs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="vector";var Xo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fd=new Xo,qo=class{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},or=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xl=new ke,bu=new I,Mu=new I,Yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Un,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new I,mo=new Ct,Cn=new I,ar=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(po,mo,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new I,Su=new Ve,wu=new Ve,$t=class extends ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Su,wu),t.subVectors(wu,Su)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fn=class extends ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kl=class extends Yo{constructor(){super(new Fn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Kl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vs=class extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ns=-90,is=1,$o=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(ns,is,e,t);s.layers=this.layers,this.add(s);let r=new $t(ns,is,e,t);r.layers=this.layers,this.add(r);let o=new $t(ns,is,e,t);o.layers=this.layers,this.add(o);let a=new $t(ns,is,e,t);a.layers=this.layers,this.add(a);let l=new $t(ns,is,e,t);l.layers=this.layers,this.add(l);let c=new $t(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Cc="\\[\\]\\.:\\/",Em=new RegExp("["+Cc+"]","g"),Ic="[^"+Cc+"]",Tm="[^"+Cc.replace("\\.","")+"]",Am=/((?:WC+[\/:])*)/.source.replace("WC",Ic),Rm=/(WCOD+)?/.source.replace("WCOD",Tm),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),Pm=new RegExp("^"+Am+Rm+Cm+Im+"$"),Lm=["material","materials","bones","map"],jl=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(e){let t=Pm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=jl;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qy=new Float32Array(1);var cr=class extends Io{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Eu=new ke,Ni=class{constructor(e,t,n=0,s=1/0){this.ray=new Ci(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(e,t=!0,n=[]){return Ql(e,this,n,t),n.sort(Tu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ql(e[s],this,n,t);return n.sort(Tu),n}};function Tu(i,e){return i.distance-e.distance}function Ql(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ql(r[o],e,t,!0)}}var Fc=class Fc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Fc.prototype.isMatrix2=!0;var ec=Fc;function Pc(i,e,t,n){let s=Dm(n);switch(t){case vc:return i*e;case ws:return i*e/s.components*s.byteLength;case sa:return i*e/s.components*s.byteLength;case gi:return i*e*2/s.components*s.byteLength;case ra:return i*e*2/s.components*s.byteLength;case yc:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case oa:return i*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case la:case ha:return Math.max(i,16)*Math.max(e,8)/4;case aa:case ca:return Math.max(i,8)*Math.max(e,8)/2;case ua:case da:case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case _r:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case La:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Na:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xr:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dm(i){switch(i){case nn:case mc:return{byteLength:1,components:1};case Ms:case gc:case Sn:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case Mn:case ta:case Gt:return{byteLength:4,components:1};case _c:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ud(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Um(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ag=`vec3 transformedNormal = objectNormal;
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
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ng=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ug=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,b_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
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
}`,G_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,K_=`uniform vec3 diffuse;
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
}`,j_=`#define LAMBERT
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
}`,Q_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,e0=`#define MATCAP
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
}`,t0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,o0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Fm,alphahash_pars_fragment:Bm,alphamap_fragment:Om,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Vm,aomap_fragment:Hm,aomap_pars_fragment:Gm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:$m,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:eg,color_fragment:tg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Rg,envmap_vertex:xg,fog_vertex:vg,fog_pars_vertex:yg,fog_fragment:bg,fog_pars_fragment:Mg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:wg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Tg,lights_pars_begin:Ag,lights_toon_fragment:Cg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Pg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Ng,lights_fragment_begin:Ug,lights_fragment_maps:Fg,lights_fragment_end:Bg,lightprobes_pars_fragment:Og,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Hg,map_fragment:Gg,map_pars_fragment:Wg,map_particle_fragment:Xg,map_particle_pars_fragment:qg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:$g,morphinstance_vertex:Zg,morphcolor_vertex:Jg,morphnormal_vertex:Kg,morphtarget_pars_vertex:jg,morphtarget_vertex:Qg,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:h_,packing:u_,premultiplied_alpha_fragment:d_,project_vertex:f_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:v_,shadowmap_vertex:y_,shadowmask_pars_fragment:b_,skinbase_vertex:M_,skinning_pars_vertex:S_,skinning_vertex:w_,skinnormal_vertex:E_,specularmap_fragment:T_,specularmap_pars_fragment:A_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:I_,transmission_pars_fragment:P_,uv_pars_fragment:L_,uv_pars_vertex:D_,uv_vertex:N_,worldpos_vertex:U_,background_vert:F_,background_frag:B_,backgroundCube_vert:O_,backgroundCube_frag:z_,cube_vert:k_,cube_frag:V_,depth_vert:H_,depth_frag:G_,distance_vert:W_,distance_frag:X_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:$_,linedashed_frag:Z_,meshbasic_vert:J_,meshbasic_frag:K_,meshlambert_vert:j_,meshlambert_frag:Q_,meshmatcap_vert:e0,meshmatcap_frag:t0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:o0,meshphysical_frag:a0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},xe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},kn={basic:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Zt([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Zt([xe.lights,xe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};kn.physical={uniforms:Zt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var ka={r:0,b:0,g:0},g0=new ke,Fd=new Oe;Fd.set(-1,0,0,0,1,0,0,0,1);function _0(i,e,t,n,s,r){let o=new Fe(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let b=M.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(M){let E=!1,b=p(M);b===null?m(o,a):b&&b.isColor&&(m(b,1),E=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){let b=p(E);b&&(b.isCubeTexture||b.mapping===ur)?(c===void 0&&(c=new xt(new dn(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Bi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fd),c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==et,(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new xt(new yn(2,2),new Vt({name:"BackgroundMaterial",uniforms:Bi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==et,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(ka,Rc(i)),t.buffers.color.setClear(ka.r,ka.g,ka.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:_,dispose:f}}function x0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,N,U,C,B){let z=!1,W=d(L,C,U,N);r!==W&&(r=W,c(r.object)),z=p(L,C,U,B),z&&g(L,C,U,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(L,N,U,C),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,N,U,C){let B=C.wireframe===!0,z=n[N.id];z===void 0&&(z={},n[N.id]=z);let W=L.isInstancedMesh===!0?L.id:0,F=z[W];F===void 0&&(F={},z[W]=F);let D=F[U.id];D===void 0&&(D={},F[U.id]=D);let X=D[B];return X===void 0&&(X=u(l()),D[B]=X),X}function u(L){let N=[],U=[],C=[];for(let B=0;B<t;B++)N[B]=0,U[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:C,object:L,attributes:{},index:null}}function p(L,N,U,C){let B=r.attributes,z=N.attributes,W=0,F=U.getAttributes();for(let D in F)if(F[D].location>=0){let Z=B[D],G=z[D];if(G===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),Z===void 0||Z.attribute!==G||G&&Z.data!==G.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function g(L,N,U,C){let B={},z=N.attributes,W=0,F=U.getAttributes();for(let D in F)if(F[D].location>=0){let Z=z[D];Z===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let G={};G.attribute=Z,Z&&Z.data&&(G.data=Z.data),B[D]=G,W++}r.attributes=B,r.attributesNum=W,r.index=C}function _(){let L=r.newAttributes;for(let N=0,U=L.length;N<U;N++)L[N]=0}function m(L){f(L,0)}function f(L,N){let U=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;U[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),B[L]!==N&&(i.vertexAttribDivisor(L,N),B[L]=N)}function M(){let L=r.newAttributes,N=r.enabledAttributes;for(let U=0,C=N.length;U<C;U++)N[U]!==L[U]&&(i.disableVertexAttribArray(U),N[U]=0)}function E(L,N,U,C,B,z,W){W===!0?i.vertexAttribIPointer(L,N,U,B,z):i.vertexAttribPointer(L,N,U,C,B,z)}function b(L,N,U,C){_();let B=C.attributes,z=U.getAttributes(),W=N.defaultAttributeValues;for(let F in z){let D=z[F];if(D.location>=0){let X=B[F];if(X===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let Z=X.normalized,G=X.itemSize,Q=e.get(X);if(Q===void 0)continue;let le=Q.buffer,ce=Q.type,te=Q.bytesPerElement,H=ce===i.INT||ce===i.UNSIGNED_INT||X.gpuType===ta;if(X.isInterleavedBufferAttribute){let j=X.data,ue=j.stride,Le=X.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<D.locationSize;be++)f(D.location+be,j.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<D.locationSize;be++)m(D.location+be);i.bindBuffer(i.ARRAY_BUFFER,le);for(let be=0;be<D.locationSize;be++)E(D.location+be,G/D.locationSize,ce,Z,ue*te,(Le+G/D.locationSize*be)*te,H)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<D.locationSize;j++)f(D.location+j,X.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<D.locationSize;j++)m(D.location+j);i.bindBuffer(i.ARRAY_BUFFER,le);for(let j=0;j<D.locationSize;j++)E(D.location+j,G/D.locationSize,ce,Z,G*te,G/D.locationSize*j*te,H)}}else if(W!==void 0){let Z=W[F];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(D.location,Z);break;case 3:i.vertexAttrib3fv(D.location,Z);break;case 4:i.vertexAttrib4fv(D.location,Z);break;default:i.vertexAttrib1fv(D.location,Z)}}}}M()}function v(){T();for(let L in n){let N=n[L];for(let U in N){let C=N[U];for(let B in C){let z=C[B];for(let W in z)h(z[W].object),delete z[W];delete C[B]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let U in N){let C=N[U];for(let B in C){let z=C[B];for(let W in z)h(z[W].object),delete z[W];delete C[B]}}delete n[L.id]}function A(L){for(let N in n){let U=n[N];for(let C in U){let B=U[C];if(B[L.id]===void 0)continue;let z=B[L.id];for(let W in z)h(z[W].object),delete z[W];delete B[L.id]}}}function x(L){for(let N in n){let U=n[N],C=L.isInstancedMesh===!0?L.id:0,B=U[C];if(B!==void 0){for(let z in B){let W=B[z];for(let F in W)h(W[F].object),delete W[F];delete B[z]}delete U[C],Object.keys(U).length===0&&delete n[N]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function v0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function y0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==nn&&A!==Gt&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:b,maxSamples:v,samples:S}}function b0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new _t,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,b=f.clippingState||null;l.value=b,b=h(g,u,E,p);for(let v=0;v!==E;++v)b[v]=t[v];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=p;E!==_;++E,b+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ts=4,M0=6,S0=20,w0=256,vr=new Fn,pd=new Fe,Bc=null,Oc=0,zc=0,kc=!1,E0=new I,Oi=new I,Ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=E0}=r;Bc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,Oc,zc),this._renderer.xr.enabled=kc,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Sn,format:sn,colorSpace:qs,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=T0(r)),this._blurMaterial=R0(r,e,t),this._ggxMaterial=A0(r,e,t)}return s}_compileMaterial(e){let t=new xt(new lt,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,s,r){let l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(pd),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new dn,new tn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(pd),f=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let v=this._cubeSize;Es(s,b*v,E>2?v:0,v,v),d.setRenderTarget(s),f&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ts?n-g+Ts:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Es(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(a,vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Es(e,m,f,3*_,2*_),s.setRenderTarget(e),s.render(a,vr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),u=4*(this._cubeSize-h);Es(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,vr)}};function T0(i){let e=[],t=[],n=i,s=i-Ts+1+M0;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,E=f>2?0:-1,b=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(b,p*u*f);for(let v=0;v<u;v++){let S=h[v*2]*2-1,A=h[v*2+1]*2-1;f===0?Oi.set(1,A,S):f===1?Oi.set(-S,1,-A):f===2?Oi.set(-S,A,1):f===3?Oi.set(-1,A,-S):f===4?Oi.set(-S,-1,A):Oi.set(S,A,-1),Oi.toArray(_,(f*u+v)*p)}}let m=new lt;m.setAttribute("position",new St(g,p)),m.setAttribute("outputDirection",new St(_,p)),t.push(new xt(m,null)),n>Ts&&n--}return{lodMeshes:t,sizeLods:e}}function md(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function A0(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function R0(i,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:S0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function gd(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function _d(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ga=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:On});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=zt),new $o(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function C0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===jo||p===Qo)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Ga(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,g=p===jo||p===Qo,_=p===fi||p===Fi;if(g||_){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ha(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Ha(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===jo?u.mapping=fi:p===Qo&&(u.mapping=Fi),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function I0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let M=p.array;_=p.version;for(let E=0,b=M.length;E<b;E+=3){let v=M[E+0],S=M[E+1],A=M[E+2];u.push(v,S,S,A,A,v)}}else{let M=g.array;_=g.version;for(let E=0,b=M.length/3-1;E<b;E+=3){let v=E+0,S=E+1,A=E+2;u.push(v,S,S,A,A,v)}}let m=new(g.count>=65535?js:Ks)(u,1);m.version=_;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function L0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*o,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function D0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function N0(i,e,t){let n=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let b=a.attributes.position.count*E,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*d),A=new Js(S,b,v,d);A.type=Gt,A.needsUpdate=!0;let x=E*4;for(let R=0;R<d;R++){let L=m[R],N=f[R],U=M[R],C=b*v*4*R;for(let B=0;B<L.count;B++){let z=B*x;p===!0&&(s.fromBufferAttribute(L,B),S[C+z+0]=s.x,S[C+z+1]=s.y,S[C+z+2]=s.z,S[C+z+3]=0),g===!0&&(s.fromBufferAttribute(N,B),S[C+z+4]=s.x,S[C+z+5]=s.y,S[C+z+6]=s.z,S[C+z+7]=0),_===!0&&(s.fromBufferAttribute(U,B),S[C+z+8]=s.x,S[C+z+9]=s.y,S[C+z+10]=s.z,S[C+z+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Ve(b,v)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function U0(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var F0={[ac]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[hc]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[fc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function B0(i,e,t,n,s,r){let o=new Ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new lt;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let h=new No({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(c,h),u=new Fn(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,M=[],E=!1;this.setSize=function(b,v){o.setSize(b,v),a!==null&&a.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(b,v)}},this.setEffects=function(b){M=b,E=M.length>0&&M[0].isRenderPass===!0;let v=o.width,S=o.height;M.length>0&&a===null&&(a=new Ft(v,S,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(v,S,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(v,S)}},this.begin=function(b,v){if(_||b.toneMapping===bn&&M.length===0)return!1;if(f=v,v!==null){let S=v.width,A=v.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=bn,!0},this.hasRenderPass=function(){return E},this.end=function(b,v){b.toneMapping=m,_=!0;let S=o,A=a;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(b,A,S,v),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,h.defines={},Ye.getTransfer(p)===et&&(h.defines.SRGB_TRANSFER="");let x=F0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(f),b.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bd=new kt,Gc=new ci(1,1),Od=new Js,zd=new Co,kd=new er,xd=[],vd=[],yd=new Float32Array(16),bd=new Float32Array(9),Md=new Float32Array(4);function Cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xa(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function H0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Lt(t,n)}}function G0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),Lt(t,n)}}function W0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),Lt(t,n)}}function X0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Q0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=t.isReversedDepthBuffer()?za:Oa,r=Gc):r=Bd,t.setTexture2D(e||r,s)}function ex(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function tx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function nx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Od,s)}function ix(i){switch(i){case 5126:return O0;case 35664:return z0;case 35665:return k0;case 35666:return V0;case 35674:return H0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return $0;case 5125:return Z0;case 36294:return J0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(i,e){i.uniform1fv(this.addr,e)}function rx(i,e){let t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function ox(i,e){let t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function ax(i,e){let t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function lx(i,e){let t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cx(i,e){let t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hx(i,e){let t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ux(i,e){i.uniform1iv(this.addr,e)}function dx(i,e){i.uniform2iv(this.addr,e)}function fx(i,e){i.uniform3iv(this.addr,e)}function px(i,e){i.uniform4iv(this.addr,e)}function mx(i,e){i.uniform1uiv(this.addr,e)}function gx(i,e){i.uniform2uiv(this.addr,e)}function _x(i,e){i.uniform3uiv(this.addr,e)}function xx(i,e){i.uniform4uiv(this.addr,e)}function vx(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gc:o=Bd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function yx(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zd,r[o])}function bx(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kd,r[o])}function Mx(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Od,r[o])}function Sx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Mx}}var Wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ix(t.type)}},Xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sx(t.type)}},qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Sd(i,e){i.seq.push(e),i.map[e.id]=e}function wx(i,e,t){let n=i.name,s=n.length;for(Vc.lastIndex=0;;){let r=Vc.exec(n),o=Vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sd(t,c===void 0?new Wc(a,i,e):new Xc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new qc(a),Sd(t,d)),t=d}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ex=37297,Tx=0;function Ax(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ed=new Oe;function Rx(i){Ye._getMatrix(Ed,Ye.workingColorSpace,i);let e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Ys:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ax(i.getShaderSource(e),a)}else return r}function Cx(i,e){let t=Rx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ix={[ac]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[hc]:"ACESFilmic",[dc]:"AgX",[fc]:"Neutral",[uc]:"Custom"};function Px(i,e){let t=Ix[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Va=new I;function Lx(){Ye.getLuminanceCoefficients(Va);let i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Nx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function br(i){return i!==""}function Ad(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(Fx,Ox)}var Bx=new Map;function Ox(i,e){let t=We[e];if(t===void 0){let n=Bx.get(e);if(n!==void 0)t=We[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yc(t)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(zx,kx)}function kx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Vx={[hr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Hx(i){return Vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gx={[fi]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function Wx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xx={[Fi]:"ENVMAP_MODE_REFRACTION"};function qx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yx={[Ko]:"ENVMAP_BLENDING_MULTIPLY",[$u]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};function $x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[i.combine]||"ENVMAP_BLENDING_NONE"}function Zx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Hx(t),c=Wx(t),h=qx(t),d=$x(t),u=Zx(t),p=Dx(t),g=Nx(r),_=s.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),f.length>0&&(f+=`
`)):(m=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),f=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?We.tonemapping_pars_fragment:"",t.toneMapping!==bn?Px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Cx("linearToOutputTexel",t.outputColorSpace),Lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Yc(o),o=Ad(o,t),o=Rd(o,t),a=Yc(a),a=Ad(a,t),a=Rd(a,t),o=Cd(o),a=Cd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=M+m+o,b=M+f+a,v=wd(s,s.VERTEX_SHADER,E),S=wd(s,s.FRAGMENT_SHADER,b);s.attachShader(_,v),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(S)||"",B=N.trim(),z=U.trim(),W=C.trim(),F=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,S);else{let X=Td(s,v,"vertex"),Z=Td(s,S,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+X+`
`+Z)}else B!==""?De("WebGLProgram: Program Info Log:",B):(z===""||W==="")&&(D=!1);D&&(L.diagnostics={runnable:F,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(v),s.deleteShader(S),x=new As(s,_),T=Ux(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,Ex)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=S,this}var Kx=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}};function jx(i){return i===gi||i===_r||i===xr}function Qx(i,e,t,n,s,r){let o=new ds,a=new $c,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,L,N,U){let C=L.fog,B=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||z,W),D=F&&F.mapping===ur?F.image.height:null,X=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=Z!==void 0?Z.length:0,Q=0;B.morphAttributes.position!==void 0&&(Q=1),B.morphAttributes.normal!==void 0&&(Q=2),B.morphAttributes.color!==void 0&&(Q=3);let le,ce,te,H;if(X){let ut=kn[X];le=ut.vertexShader,ce=ut.fragmentShader}else{le=x.vertexShader,ce=x.fragmentShader;let ut=a.getVertexShaderStage(x),je=a.getFragmentShaderStage(x);a.update(x,ut,je),te=ut.id,H=je.id}let j=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,Be=!!x.map,vt=!!x.matcap,He=!!F,Je=!!x.aoMap,ht=!!x.lightMap,qe=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Dt=!!x.displacementMap,en=!!x.emissiveMap,bt=!!x.metalnessMap,wt=!!x.roughnessMap,V=x.anisotropy>0,Wt=x.clearcoat>0,tt=x.dispersion>0,P=x.retroreflectivity>0,y=x.iridescence>0,q=x.sheen>0,J=x.transmission>0,ne=V&&!!x.anisotropyMap,he=Wt&&!!x.clearcoatMap,de=Wt&&!!x.clearcoatNormalMap,ie=Wt&&!!x.clearcoatRoughnessMap,oe=y&&!!x.iridescenceMap,fe=y&&!!x.iridescenceThicknessMap,Ce=q&&!!x.sheenColorMap,_e=q&&!!x.sheenRoughnessMap,pe=!!x.specularMap,Ie=!!x.specularColorMap,Ne=!!x.specularIntensityMap,ze=J&&!!x.transmissionMap,k=J&&!!x.thicknessMap,me=!!x.gradientMap,re=!!x.alphaMap,ge=x.alphaTest>0,Me=!!x.alphaHash,ae=!!x.extensions,Pe=bn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let Ae={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:ce,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:vt,envMap:He,envMapMode:He&&F.mapping,envMapCubeUVHeight:D,aoMap:Je,lightMap:ht,bumpMap:qe,normalMap:yt,displacementMap:Dt,emissiveMap:en,normalMapObjectSpace:yt&&x.normalMapType===ju,normalMapTangentSpace:yt&&x.normalMapType===Ba,packedNormalMap:yt&&x.normalMapType===Ba&&jx(x.normalMap.format),metalnessMap:bt,roughnessMap:wt,anisotropy:V,anisotropyMap:ne,clearcoat:Wt,clearcoatMap:he,clearcoatNormalMap:de,clearcoatRoughnessMap:ie,dispersion:tt,retroreflection:P,iridescence:y,iridescenceMap:oe,iridescenceThicknessMap:fe,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:pe,specularColorMap:Ie,specularIntensityMap:Ne,transmission:J,transmissionMap:ze,thicknessMap:k,gradientMap:me,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:ge,alphaHash:Me,combine:x.combine,mapUv:Be&&g(x.map.channel),aoMapUv:Je&&g(x.aoMap.channel),lightMapUv:ht&&g(x.lightMap.channel),bumpMapUv:qe&&g(x.bumpMap.channel),normalMapUv:yt&&g(x.normalMap.channel),displacementMapUv:Dt&&g(x.displacementMap.channel),emissiveMapUv:en&&g(x.emissiveMap.channel),metalnessMapUv:bt&&g(x.metalnessMap.channel),roughnessMapUv:wt&&g(x.roughnessMap.channel),anisotropyMapUv:ne&&g(x.anisotropyMap.channel),clearcoatMapUv:he&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:pe&&g(x.specularMap.channel),specularColorMapUv:Ie&&g(x.specularColorMap.channel),specularIntensityMapUv:Ne&&g(x.specularIntensityMap.channel),transmissionMapUv:ze&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(yt||V),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Be||re),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:en&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===It,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){let T=p[x.type],R;if(T){let L=kn[T];R=ud.clone(L.uniforms)}else R=x.uniforms;return R}function b(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Jx(i,T,x,s),c.push(R),h.set(T,R)),R}function v(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:A}}function ev(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ld(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,_,m,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=f),e++,M}function l(u,p,g,_,m,f,M){M.reversedDepth===!0&&(m=-m);let E=a(u,p,g,_,m,f);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,p,g,_,m,f){let M=a(u,p,g,_,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||tv),n.length>1&&n.sort(p||Pd),s.length>1&&s.sort(p||Pd)}function d(){for(let u=e,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function nv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ld,i.set(n,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rv=0;function ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function av(i){let e=new iv,t=sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ke,o=new ke;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,E=0,b=0,v=0,S=0,A=0,x=0,T=0,R=0;c.sort(ov);for(let N=0,U=c.length;N<U;N++){let C=c[N],B=C.color,z=C.intensity,W=C.distance,F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gi?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*z,d+=B.g*z,u+=B.b*z;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],z);R++}else if(C.isSunLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,Z=t.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=F;let G=X.getViewportCount();for(let Q=0;Q<G;Q++)n.sunShadowMatrix[_+Q]=X.getMatrix(Q),n.sunShadowCascade[_+Q]=X._cascadeData[Q];_+=G,g++}n.sun[p]=D,p++}else if(C.isDirectionalLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,Z=t.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=C.shadow.matrix,v++}n.directional[m]=D,m++}else if(C.isSpotLight){let D=e.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(B).multiplyScalar(z),D.distance=W,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[M]=D;let X=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[M]=X.matrix,C.castShadow){let Z=t.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=F,A++}M++}else if(C.isRectAreaLight){let D=e.get(C);D.color.copy(B).multiplyScalar(z),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=D,E++}else if(C.isPointLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let X=C.shadow,Z=t.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=F,n.pointShadowMatrix[f]=C.shadow.matrix,S++}n.point[f]=D,f++}else if(C.isHemisphereLight){let D=e.get(C);D.skyColor.copy(C.color).multiplyScalar(z),D.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[b]=D,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==b||L.numSunShadows!==g||L.numDirectionalShadows!==v||L.numPointShadows!==S||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=f,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=b,L.numSunShadows=g,L.numDirectionalShadows=v,L.numPointShadows=S,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=rv++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0,m=0,f=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let b=c[M];if(b.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(f),d++}else if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),o.identity(),r.copy(b.matrixWorld),r.premultiply(f),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function Dd(i){let e=new av(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function lv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Dd(i),e.set(s,[a])):r>=o.length?(a=new Dd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],dv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Nd=new ke,yr=new I,Hc=new I;function fv(i,e,t){let n=new Un,s=new Ve,r=new Ve,o=new at,a=new Uo,l=new Fo,c={},h=t.maxTextureSize,d={[Bn]:Ht,[Ht]:Bn,[It]:It},u=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let f=this.type;this.render=function(S,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Cu&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(On),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=f!==this.type;U&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=S.length;C<B;C++){let z=S[C],W=z.shadow;if(W===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let F=W.getFrameExtents();s.multiply(F),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/F.x),s.x=r.x*F.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/F.y),s.y=r.y*F.y,W.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=D,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ys){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ft(s.x,s.y,{format:gi,type:Sn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new ci(s.x,s.y,Gt),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=Pn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut}else z.isPointLight?(W.map=new Ga(s.x),W.map.depthTexture=new Do(s.x,Mn)):(W.map=new Ft(s.x,s.y),W.map.depthTexture=new ci(s.x,s.y,Mn)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=Pn,this.type===hr?(W.map.depthTexture.compareFunction=D?za:Oa,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let X=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();z.isPointLight!==!0&&W.updateMatrices(z,x);for(let Z=0;Z<X;Z++){let G=W.getCamera(Z);if(z.isPointLight){let Q=W.camera,le=W.matrix,ce=z.distance||Q.far;ce!==Q.far&&(Q.far=ce,Q.updateProjectionMatrix()),yr.setFromMatrixPosition(z.matrixWorld),Q.position.copy(yr),Hc.copy(Q.position),Hc.add(uv[Z]),Q.up.copy(dv[Z]),Q.lookAt(Hc),Q.updateMatrixWorld(),le.makeTranslation(-yr.x,-yr.y,-yr.z),Nd.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Nd,Q.coordinateSystem,Q.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(W.map),i.clear());let Q=W.getViewport(Z);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),N.viewport(o)}n=W.getFrustum(Z),b(A,x,G,z,this.type)}W.isPointLightShadow!==!0&&this.type===ys&&M(W,x),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,L)};function M(S,A){let x=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ft(s.x,s.y,{format:gi,type:Sn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,x,p,_,null)}function E(S,A,x,T){let R=null,L=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,U=A.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let B=C[U];B===void 0&&(B=R.clone(),C[U]=B,A.addEventListener("dispose",v)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,T===ys?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=x}return R}function b(S,A,x,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ys)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let U=e.update(S),C=S.material;if(Array.isArray(C)){let B=U.groups;for(let z=0,W=B.length;z<W;z++){let F=B[z],D=C[F.materialIndex];if(D&&D.visible){let X=E(S,D,T,R);S.onBeforeShadow(i,S,A,x,U,X,F),i.renderBufferDirect(x,null,U,X,S,F),S.onAfterShadow(i,S,A,x,U,X,F)}}}else if(C.visible){let B=E(S,C,T,R);S.onBeforeShadow(i,S,A,x,U,B,null),i.renderBufferDirect(x,null,U,B,S,null),S.onAfterShadow(i,S,A,x,U,B,null)}}let N=S.children;for(let U=0,C=N.length;U<C;U++)b(N[U],A,x,T,R)}function v(S){S.target.removeEventListener("dispose",v);for(let x in c){let T=c[x],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function pv(i,e){function t(){let k=!1,me=new at,re=null,ge=new at(0,0,0,0);return{setMask:function(Me){re!==Me&&!k&&(i.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){k=Me},setClear:function(Me,ae,Pe,Ae,ut){ut===!0&&(Me*=Ae,ae*=Ae,Pe*=Ae),me.set(Me,ae,Pe,Ae),ge.equals(me)===!1&&(i.clearColor(Me,ae,Pe,Ae),ge.copy(me))},reset:function(){k=!1,re=null,ge.set(-1,0,0,0)}}}function n(){let k=!1,me=!1,re=null,ge=null,Me=null;return{setReversed:function(ae){if(me!==ae){let Pe=e.get("EXT_clip_control");ae?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),me=ae;let Ae=Me;Me=null,this.setClear(Ae)}},getReversed:function(){return me},setTest:function(ae){ae?j(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(ae){re!==ae&&!k&&(i.depthMask(ae),re=ae)},setFunc:function(ae){if(me&&(ae=cd[ae]),ge!==ae){switch(ae){case xo:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case So:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ae}},setLocked:function(ae){k=ae},setClear:function(ae){Me!==ae&&(Me=ae,me&&(ae=1-ae),i.clearDepth(ae))},reset:function(){k=!1,re=null,ge=null,Me=null,me=!1}}}function s(){let k=!1,me=null,re=null,ge=null,Me=null,ae=null,Pe=null,Ae=null,ut=null;return{setTest:function(je){k||(je?j(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(je){me!==je&&!k&&(i.stencilMask(je),me=je)},setFunc:function(je,fn,An){(re!==je||ge!==fn||Me!==An)&&(i.stencilFunc(je,fn,An),re=je,ge=fn,Me=An)},setOp:function(je,fn,An){(ae!==je||Pe!==fn||Ae!==An)&&(i.stencilOp(je,fn,An),ae=je,Pe=fn,Ae=An)},setLocked:function(je){k=je},setClear:function(je){ut!==je&&(i.clearStencil(je),ut=je)},reset:function(){k=!1,me=null,re=null,ge=null,Me=null,ae=null,Pe=null,Ae=null,ut=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,E=null,b=null,v=null,S=null,A=null,x=new Fe(0,0,0),T=0,R=!1,L=null,N=null,U=null,C=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,F=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(D)[1]),W=F>=1):D.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),W=F>=2);let X=null,Z={},G=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),le=new at().fromArray(G),ce=new at().fromArray(Q);function te(k,me,re,ge){let Me=new Uint8Array(4),ae=i.createTexture();i.bindTexture(k,ae),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<re;Pe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(me+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ae}let H={};H[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(os),qe(!1),yt(tc),j(i.CULL_FACE),Je(On);function j(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ue(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Le(k,me){return u[k]!==me?(i.bindFramebuffer(k,me),u[k]=me,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function be(k,me){let re=g,ge=!1;if(k){re=p.get(me),re===void 0&&(re=[],p.set(me,re));let Me=k.textures;if(re.length!==Me.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Pe=Me.length;ae<Pe;ae++)re[ae]=i.COLOR_ATTACHMENT0+ae;re.length=Me.length,ge=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ge=!0);ge&&i.drawBuffers(re)}function Be(k){return _!==k?(i.useProgram(k),_=k,!0):!1}let vt={[Ui]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};vt[Du]=i.MIN,vt[Nu]=i.MAX;let He={[Uu]:i.ZERO,[Fu]:i.ONE,[Bu]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(k,me,re,ge,Me,ae,Pe,Ae,ut,je){if(k===On){m===!0&&(ue(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),k!==Iu){if(k!==f||je!==R){if((M!==Ui||v!==Ui)&&(i.blendEquation(i.FUNC_ADD),M=Ui,v=Ui),je)switch(k){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",k);break}else switch(k){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ic:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",k);break}E=null,b=null,S=null,A=null,x.set(0,0,0),T=0,f=k,R=je}return}Me=Me||me,ae=ae||re,Pe=Pe||ge,(me!==M||Me!==v)&&(i.blendEquationSeparate(vt[me],vt[Me]),M=me,v=Me),(re!==E||ge!==b||ae!==S||Pe!==A)&&(i.blendFuncSeparate(He[re],He[ge],He[ae],He[Pe]),E=re,b=ge,S=ae,A=Pe),(Ae.equals(x)===!1||ut!==T)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ut),x.copy(Ae),T=ut),f=k,R=!1}function ht(k,me){k.side===It?ue(i.CULL_FACE):j(i.CULL_FACE);let re=k.side===Ht;me&&(re=!re),qe(re),k.blending===bs&&k.transparent===!1?Je(On):Je(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let ge=k.stencilWrite;a.setTest(ge),ge&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),en(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(k){L!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),L=k)}function yt(k){k!==Au?(j(i.CULL_FACE),k!==N&&(k===tc?i.cullFace(i.BACK):k===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),N=k}function Dt(k){k!==U&&(W&&i.lineWidth(k),U=k)}function en(k,me,re){k?(j(i.POLYGON_OFFSET_FILL),(C!==me||B!==re)&&(C=me,B=re,o.getReversed()&&(me=-me),i.polygonOffset(me,re))):ue(i.POLYGON_OFFSET_FILL)}function bt(k){k?j(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function wt(k){k===void 0&&(k=i.TEXTURE0+z-1),X!==k&&(i.activeTexture(k),X=k)}function V(k,me,re){re===void 0&&(X===null?re=i.TEXTURE0+z-1:re=X);let ge=Z[re];ge===void 0&&(ge={type:void 0,texture:void 0},Z[re]=ge),(ge.type!==k||ge.texture!==me)&&(X!==re&&(i.activeTexture(re),X=re),i.bindTexture(k,me||H[k]),ge.type=k,ge.texture=me)}function Wt(){let k=Z[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function y(){try{i.texSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function q(){try{i.texSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function he(){try{i.texStorage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function de(){try{i.texStorage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ie(){try{i.texImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function oe(){try{i.texImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function fe(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function Ce(k,me){d[k]!==me&&(i.pixelStorei(k,me),d[k]=me)}function _e(k){le.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),le.copy(k))}function pe(k){ce.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ce.copy(k))}function Ie(k,me){let re=c.get(me);re===void 0&&(re=new WeakMap,c.set(me,re));let ge=re.get(k);ge===void 0&&(ge=i.getUniformBlockIndex(me,k.name),re.set(k,ge))}function Ne(k,me){let ge=c.get(me).get(k);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,k.__bindingPointIndex),l.set(me,ge))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,Z={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,E=null,b=null,v=null,S=null,A=null,x=new Fe(0,0,0),T=0,R=!1,L=null,N=null,U=null,C=null,B=null,le.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:Le,drawBuffers:be,useProgram:Be,setBlending:Je,setMaterial:ht,setFlipSided:qe,setCullFace:yt,setLineWidth:Dt,setPolygonOffset:en,setScissorTest:bt,activeTexture:wt,bindTexture:V,unbindTexture:Wt,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:ie,texImage3D:oe,pixelStorei:Ce,getParameter:fe,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:he,texStorage3D:de,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:_e,viewport:pe,reset:ze}}function mv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return g?new OffscreenCanvas(P,y):$s("canvas")}function m(P,y,q){let J=1,ne=tt(P);if((ne.width>q||ne.height>q)&&(J=q/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(J*ne.width),de=Math.floor(J*ne.height);u===void 0&&(u=_(he,de));let ie=y?_(he,de):u;return ie.width=he,ie.height=de,ie.getContext("2d").drawImage(P,0,0,he,de),De("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+de+")."),ie}else return"data"in P&&De("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function f(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,y,q,J,ne,he=!1){if(P!==null){if(i[P]!==void 0)return i[P];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de;J&&(de=e.get("EXT_texture_norm16"),de||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=y;if(y===i.RED&&(q===i.FLOAT&&(ie=i.R32F),q===i.HALF_FLOAT&&(ie=i.R16F),q===i.UNSIGNED_BYTE&&(ie=i.R8),q===i.UNSIGNED_SHORT&&de&&(ie=de.R16_EXT),q===i.SHORT&&de&&(ie=de.R16_SNORM_EXT)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.R8UI),q===i.UNSIGNED_SHORT&&(ie=i.R16UI),q===i.UNSIGNED_INT&&(ie=i.R32UI),q===i.BYTE&&(ie=i.R8I),q===i.SHORT&&(ie=i.R16I),q===i.INT&&(ie=i.R32I)),y===i.RG&&(q===i.FLOAT&&(ie=i.RG32F),q===i.HALF_FLOAT&&(ie=i.RG16F),q===i.UNSIGNED_BYTE&&(ie=i.RG8),q===i.UNSIGNED_SHORT&&de&&(ie=de.RG16_EXT),q===i.SHORT&&de&&(ie=de.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RG8UI),q===i.UNSIGNED_SHORT&&(ie=i.RG16UI),q===i.UNSIGNED_INT&&(ie=i.RG32UI),q===i.BYTE&&(ie=i.RG8I),q===i.SHORT&&(ie=i.RG16I),q===i.INT&&(ie=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),q===i.UNSIGNED_INT&&(ie=i.RGB32UI),q===i.BYTE&&(ie=i.RGB8I),q===i.SHORT&&(ie=i.RGB16I),q===i.INT&&(ie=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),q===i.UNSIGNED_INT&&(ie=i.RGBA32UI),q===i.BYTE&&(ie=i.RGBA8I),q===i.SHORT&&(ie=i.RGBA16I),q===i.INT&&(ie=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_SHORT&&de&&(ie=de.RGB16_EXT),q===i.SHORT&&de&&(ie=de.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),y===i.RGBA){let oe=he?Ys:Ye.getTransfer(ne);q===i.FLOAT&&(ie=i.RGBA32F),q===i.HALF_FLOAT&&(ie=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ie=oe===et?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&de&&(ie=de.RGBA16_EXT),q===i.SHORT&&de&&(ie=de.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(P,y){let q;return P?y===null||y===Mn||y===Ss?q=i.DEPTH24_STENCIL8:y===Gt?q=i.DEPTH32F_STENCIL8:y===Ms&&(q=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mn||y===Ss?q=i.DEPTH_COMPONENT24:y===Gt?q=i.DEPTH_COMPONENT32F:y===Ms&&(q=i.DEPTH_COMPONENT16),q}function S(P,y){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ut&&P.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function A(P){let y=P.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),L(y)}function T(P){let y=n.get(P);if(y.__webglInit===void 0)return;let q=P.source,J=p.get(q);if(J){let ne=J[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(J).length===0&&p.delete(q)}n.remove(P)}function R(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let q=P.source,J=p.get(q);delete J[y.__cacheKey],o.memory.textures--}function L(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ne=0;ne<y.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(y.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=P.textures;for(let J=0,ne=q.length;J<ne;J++){let he=n.get(q[J]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(q[J])}n.remove(P)}let N=0;function U(){N=0}function C(){return N}function B(P){N=P}function z(){let P=N;return P>=s.maxTextures&&De("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function W(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function F(P,y){let q=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let J=P.image;if(J===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,P,y);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function D(P,y){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ue(q,P,y);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function X(P,y){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ue(q,P,y);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function Z(P,y){let q=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){Le(q,P,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let G={[as]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},Q={[Ut]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},le={[ed]:i.NEVER,[rd]:i.ALWAYS,[td]:i.LESS,[Oa]:i.LEQUAL,[nd]:i.EQUAL,[za]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function ce(P,y){if(y.type===Gt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===ea||y.magFilter===dr||y.magFilter===pi||y.minFilter===zt||y.minFilter===ea||y.minFilter===dr||y.minFilter===pi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,G[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==dr&&y.minFilter!==pi||y.type===Gt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function te(P,y){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",A));let J=y.source,ne=p.get(J);ne===void 0&&(ne={},p.set(J,ne));let he=W(y);if(he!==P.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[he].usedTimes++;let de=ne[P.__cacheKey];de!==void 0&&(ne[P.__cacheKey].usedTimes--,de.usedTimes===0&&R(y)),P.__cacheKey=he,P.__webglTexture=ne[he].texture}return q}function H(P,y,q){return Math.floor(Math.floor(P/q)/y)}function j(P,y,q,J){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,J,y.data);else{he.sort((Ce,_e)=>Ce.start-_e.start);let de=0;for(let Ce=1;Ce<he.length;Ce++){let _e=he[de],pe=he[Ce],Ie=_e.start+_e.count,Ne=H(pe.start,y.width,4),ze=H(_e.start,y.width,4);pe.start<=Ie+1&&Ne===ze&&H(pe.start+pe.count-1,y.width,4)===Ne?_e.count=Math.max(_e.count,pe.start+pe.count-_e.start):(++de,he[de]=pe)}he.length=de+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,_e=he.length;Ce<_e;Ce++){let pe=he[Ce],Ie=Math.floor(pe.start/4),Ne=Math.ceil(pe.count/4),ze=Ie%y.width,k=Math.floor(Ie/y.width),me=Ne,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,ze,k,me,re,q,J,y.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ue(P,y,q){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let ne=te(P,y),he=y.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+q);let de=n.get(he);if(he.version!==de.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let re=Ye.getPrimaries(Ye.workingColorSpace),ge=y.colorSpace===jn?null:Ye.getPrimaries(y.colorSpace),Me=y.colorSpace===jn||re===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=m(y.image,!1,s.maxTextureSize);oe=Wt(y,oe);let fe=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),_e=b(y.internalFormat,fe,Ce,y.normalized,y.colorSpace,y.isVideoTexture);ce(J,y);let pe,Ie=y.mipmaps,Ne=y.isVideoTexture!==!0,ze=de.__version===void 0||ne===!0,k=he.dataReady,me=S(y,oe);if(y.isDepthTexture)_e=v(y.format===mi,y.type),ze&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,_e,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,_e,oe.width,oe.height,0,fe,Ce,null));else if(y.isDataTexture)if(Ie.length>0){Ne&&ze&&t.texStorage2D(i.TEXTURE_2D,me,_e,Ie[0].width,Ie[0].height);for(let re=0,ge=Ie.length;re<ge;re++)pe=Ie[re],Ne?k&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,fe,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,re,_e,pe.width,pe.height,0,fe,Ce,pe.data);y.generateMipmaps=!1}else Ne?(ze&&t.texStorage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height),k&&j(y,oe,fe,Ce)):t.texImage2D(i.TEXTURE_2D,0,_e,oe.width,oe.height,0,fe,Ce,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,_e,Ie[0].width,Ie[0].height,oe.depth);for(let re=0,ge=Ie.length;re<ge;re++)if(pe=Ie[re],y.format!==sn)if(fe!==null)if(Ne){if(k)if(y.layerUpdates.size>0){let Me=Pc(pe.width,pe.height,y.format,y.type);for(let ae of y.layerUpdates){let Pe=pe.data.subarray(ae*Me/pe.data.BYTES_PER_ELEMENT,(ae+1)*Me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ae,pe.width,pe.height,1,fe,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,_e,pe.width,pe.height,oe.depth,0,pe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,oe.depth,fe,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,_e,pe.width,pe.height,oe.depth,0,fe,Ce,pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ne&&ze&&t.texStorage2D(i.TEXTURE_2D,me,_e,Ie[0].width,Ie[0].height);for(let re=0,ge=Ie.length;re<ge;re++)pe=Ie[re],y.format!==sn?fe!==null?Ne?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,_e,pe.width,pe.height,0,pe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?k&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,pe.width,pe.height,fe,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,re,_e,pe.width,pe.height,0,fe,Ce,pe.data)}else if(y.isDataArrayTexture)if(Ne){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,_e,oe.width,oe.height,oe.depth),k)if(y.layerUpdates.size>0){let re=Pc(oe.width,oe.height,y.format,y.type);for(let ge of y.layerUpdates){let Me=oe.data.subarray(ge*re/oe.data.BYTES_PER_ELEMENT,(ge+1)*re/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,oe.width,oe.height,1,fe,Ce,Me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,fe,Ce,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,oe.width,oe.height,oe.depth,0,fe,Ce,oe.data);else if(y.isData3DTexture)Ne?(ze&&t.texStorage3D(i.TEXTURE_3D,me,_e,oe.width,oe.height,oe.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,fe,Ce,oe.data)):t.texImage3D(i.TEXTURE_3D,0,_e,oe.width,oe.height,oe.depth,0,fe,Ce,oe.data);else if(y.isFramebufferTexture){if(ze)if(Ne)t.texStorage2D(i.TEXTURE_2D,me,_e,oe.width,oe.height);else{let re=oe.width,ge=oe.height;for(let Me=0;Me<me;Me++)t.texImage2D(i.TEXTURE_2D,Me,_e,re,ge,0,fe,Ce,null),re>>=1,ge>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),oe.parentNode!==re){re.appendChild(oe),d.add(y),re.onpaint=ge=>{let Me=ge.changedElements;for(let ae of d)Me.includes(ae.image)&&(ae.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Me=i.RGBA,ae=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,ae,Pe,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ne&&ze){let re=tt(Ie[0]);t.texStorage2D(i.TEXTURE_2D,me,_e,re.width,re.height)}for(let re=0,ge=Ie.length;re<ge;re++)pe=Ie[re],Ne?k&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe,Ce,pe):t.texImage2D(i.TEXTURE_2D,re,_e,fe,Ce,pe);y.generateMipmaps=!1}else if(Ne){if(ze){let re=tt(oe);t.texStorage2D(i.TEXTURE_2D,me,_e,re.width,re.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ce,oe)}else t.texImage2D(i.TEXTURE_2D,0,_e,fe,Ce,oe);f(y)&&M(J),de.__version=he.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Le(P,y,q){if(y.image.length!==6)return;let J=te(P,y),ne=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let he=n.get(ne);if(ne.version!==he.__version||J===!0){t.activeTexture(i.TEXTURE0+q);let de=Ye.getPrimaries(Ye.workingColorSpace),ie=y.colorSpace===jn?null:Ye.getPrimaries(y.colorSpace),oe=y.colorSpace===jn||de===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!fe&&!Ce?_e[ae]=m(y.image[ae],!0,s.maxCubemapSize):_e[ae]=Ce?y.image[ae].image:y.image[ae],_e[ae]=Wt(y,_e[ae]);let pe=_e[0],Ie=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),ze=b(y.internalFormat,Ie,Ne,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,me=he.__version===void 0||J===!0,re=ne.dataReady,ge=S(y,pe);ce(i.TEXTURE_CUBE_MAP,y);let Me;if(fe){k&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ze,pe.width,pe.height);for(let ae=0;ae<6;ae++){Me=_e[ae].mipmaps;for(let Pe=0;Pe<Me.length;Pe++){let Ae=Me[Pe];y.format!==sn?Ie!==null?k?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,ze,Ae.width,Ae.height,0,Ae.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Ae.width,Ae.height,Ie,Ne,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,ze,Ae.width,Ae.height,0,Ie,Ne,Ae.data)}}}else{if(Me=y.mipmaps,k&&me){Me.length>0&&ge++;let ae=tt(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ce){k?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Ie,Ne,_e[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,_e[ae].width,_e[ae].height,0,Ie,Ne,_e[ae].data);for(let Pe=0;Pe<Me.length;Pe++){let ut=Me[Pe].image[ae].image;k?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,ut.width,ut.height,Ie,Ne,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,ze,ut.width,ut.height,0,Ie,Ne,ut.data)}}else{k?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,Ne,_e[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Ie,Ne,_e[ae]);for(let Pe=0;Pe<Me.length;Pe++){let Ae=Me[Pe];k?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,Ie,Ne,Ae.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,ze,Ie,Ne,Ae.image[ae])}}}f(y)&&M(i.TEXTURE_CUBE_MAP),he.__version=ne.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function be(P,y,q,J,ne,he){let de=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),oe=b(q.internalFormat,de,ie,q.normalized,q.colorSpace),fe=n.get(y),Ce=n.get(q);if(Ce.__renderTarget=y,!fe.__hasExternalTextures){let _e=Math.max(1,y.width>>he),pe=Math.max(1,y.height>>he);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,oe,_e,pe,y.depth,0,de,ie,null):t.texImage2D(ne,he,oe,_e,pe,0,de,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),wt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,Ce.__webglTexture,0,bt(y)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,Ce.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(P,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let J=y.depthTexture,ne=J&&J.isDepthTexture?J.type:null,he=v(y.stencilBuffer,ne),de=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(y),he,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(y),he,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,he,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,P)}else{let J=y.textures;for(let ne=0;ne<J.length;ne++){let he=J[ne],de=r.convert(he.format,he.colorSpace),ie=r.convert(he.type),oe=b(he.internalFormat,de,ie,he.normalized,he.colorSpace);wt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(y),oe,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(y),oe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,oe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(P,y,q){let J=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y.depthTexture);let fe=r.convert(y.depthTexture.format),Ce=r.convert(y.depthTexture.type),_e;y.depthTexture.format===Pn?_e=i.DEPTH_COMPONENT24:y.depthTexture.format===mi&&(_e=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_e,y.width,y.height,0,fe,Ce,null)}}else F(y.depthTexture,0);let he=ne.__webglTexture,de=bt(y),ie=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,oe=y.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pn)wt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ie,he,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ie,he,0);else if(y.depthTexture.format===mi)wt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ie,he,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ie,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(P){let y=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=J}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let J=0;J<6;J++)vt(y.__webglFramebuffer[J],P,J);else{let J=P.texture.mipmaps;J&&J.length>0?vt(y.__webglFramebuffer[0],P,0):vt(y.__webglFramebuffer,P,0)}else if(q){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),Be(y.__webglDepthbuffer[J],P,!1);else{let ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Be(y.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(P,y,q){let J=n.get(P);y!==void 0&&be(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&He(P)}function ht(P){let y=P.texture,q=n.get(P),J=n.get(y);P.addEventListener("dispose",x);let ne=P.textures,he=P.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),he){q.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[ie]=[];for(let oe=0;oe<y.mipmaps.length;oe++)q.__webglFramebuffer[ie][oe]=i.createFramebuffer()}else q.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)q.__webglFramebuffer[ie]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(de)for(let ie=0,oe=ne.length;ie<oe;ie++){let fe=n.get(ne[ie]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&wt(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let oe=ne[ie];q.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ie]);let fe=r.convert(oe.format,oe.colorSpace),Ce=r.convert(oe.type),_e=b(oe.internalFormat,fe,Ce,oe.normalized,oe.colorSpace,P.isXRRenderTarget===!0),pe=bt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,_e,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,q.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)be(q.__webglFramebuffer[ie][oe],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else be(q.__webglFramebuffer[ie],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);f(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ie=0,oe=ne.length;ie<oe;ie++){let fe=ne[ie],Ce=n.get(fe),_e=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ce.__webglTexture),ce(_e,fe),be(q.__webglFramebuffer,P,fe,i.COLOR_ATTACHMENT0+ie,_e,0),f(fe)&&M(_e)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),ce(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)be(q.__webglFramebuffer[oe],P,y,i.COLOR_ATTACHMENT0,ie,oe);else be(q.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,ie,0);f(y)&&M(ie),t.unbindTexture()}P.depthBuffer&&He(P)}function qe(P){let y=P.textures;for(let q=0,J=y.length;q<J;q++){let ne=y[q];if(f(ne)){let he=E(P),de=n.get(ne).__webglTexture;t.bindTexture(he,de),M(he),t.unbindTexture()}}}let yt=[],Dt=[];function en(P){if(P.samples>0){if(wt(P)===!1){let y=P.textures,q=P.width,J=P.height,ne=i.COLOR_BUFFER_BIT,he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(P),ie=y.length>1;if(ie)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let oe=P.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let Ce=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,q,J,0,0,q,J,ne,i.NEAREST),l===!0&&(yt.length=0,Dt.length=0,yt.push(i.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(yt.push(he),Dt.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let Ce=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function bt(P){return Math.min(s.maxSamples,P.samples)}function wt(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Wt(P,y){let q=P.colorSpace,J=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==qs&&q!==jn&&(Ye.getTransfer(q)===et?(J!==sn||ne!==nn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",q)),y}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=D,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Je,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=be,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gv(i,e){function t(n,s=jn){let r,o=Ye.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===Gt)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===vc)return i.ALPHA;if(n===yc)return i.RGB;if(n===sn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===ws)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===oa)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===la||n===ca||n===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===_r||n===ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ua||n===da)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pa)return r.COMPRESSED_R11_EAC;if(n===ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_a||n===xa||n===va||n===ya||n===ba||n===Ma||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===La||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Na||n===Ua||n===xr||n===Fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _v=`
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

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:_v,fragmentShader:xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kc=class extends Ln{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Jc,f={},M=t.getContextAttributes(),E=null,b=null,v=[],S=[],A=new Ve,x=null,T=null,R=new $t;R.viewport=new at;let L=new $t;L.viewport=new at;let N=[R,L],U=new Zo,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=v[H];return j===void 0&&(j=new fs,v[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=v[H];return j===void 0&&(j=new fs,v[H]=j),j.getGripSpace()},this.getHand=function(H){let j=v[H];return j===void 0&&(j=new fs,v[H]=j),j.getHandSpace()};function z(H){let j=S.indexOf(H.inputSource);if(j===-1)return;let ue=v[j];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",F);for(let H=0;H<v.length;H++){let j=S[H];j!==null&&(S[H]=null,v[H].disconnect(j))}C=null,B=null,m.reset();for(let H in f)delete f[H];if(e.setRenderTarget(E),p=null,u=null,d=null,s=null,b=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),T!==null){let H=T.camera;H.fov=T.fov,H.zoom=T.zoom,H.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?mi:Pn,Le=M.stencil?Ss:Mn);let Be={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Ft(u.textureWidth,u.textureHeight,{format:sn,type:nn,depthTexture:new ci(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ft(p.framebufferWidth,p.framebufferHeight,{format:sn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(H){for(let j=0;j<H.removed.length;j++){let ue=H.removed[j],Le=S.indexOf(ue);Le>=0&&(S[Le]=null,v[Le].disconnect(ue))}for(let j=0;j<H.added.length;j++){let ue=H.added[j],Le=S.indexOf(ue);if(Le===-1){for(let Be=0;Be<v.length;Be++)if(Be>=S.length){S.push(ue),Le=Be;break}else if(S[Be]===null){S[Be]=ue,Le=Be;break}if(Le===-1)break}let be=v[Le];be&&be.connect(ue)}}let D=new I,X=new I;function Z(H,j,ue){D.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);let Le=D.distanceTo(X),be=j.projectionMatrix.elements,Be=ue.projectionMatrix.elements,vt=be[14]/(be[10]-1),He=be[14]/(be[10]+1),Je=(be[9]+1)/be[5],ht=(be[9]-1)/be[5],qe=(be[8]-1)/be[0],yt=(Be[8]+1)/Be[0],Dt=vt*qe,en=vt*yt,bt=Le/(-qe+yt),wt=bt*-qe;if(j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(wt),H.translateZ(bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),be[10]===-1)H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let V=vt+bt,Wt=He+bt,tt=Dt-wt,P=en+(Le-wt),y=Je*He/Wt*V,q=ht*He/Wt*V;H.projectionMatrix.makePerspective(tt,P,y,q,V,Wt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function G(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let j=H.near,ue=H.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),U.near=L.near=R.near=j,U.far=L.far=R.far=ue,(C!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,B=U.far),U.layers.mask=H.layers.mask|6,R.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Le=H.parent,be=U.cameras;G(U,Le);for(let Be=0;Be<be.length;Be++)G(be[Be],Le);be.length===2?Z(U,R,L):U.projectionMatrix.copy(R.projectionMatrix),T===null&&H.isPerspectiveCamera&&(T={camera:H,fov:H.fov,zoom:H.zoom}),Q(H,U,Le)};function Q(H,j,ue){ue===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=hs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(H){return f[H]};let le=null;function ce(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Le=!1;ue.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let He=0;He<ue.length;He++){let Je=ue[He],ht=null;if(p!==null)ht=p.getViewport(Je);else{let yt=d.getViewSubImage(u,Je);ht=yt.viewport,He===0&&(e.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(b))}let qe=N[He];qe===void 0&&(qe=new $t,qe.layers.enable(He),qe.viewport=new at,N[He]=qe),qe.matrix.fromArray(Je.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Je.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ht.x,ht.y,ht.width,ht.height),He===0&&(U.matrix.copy(qe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(qe)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let He=d.getDepthInformation(ue[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<ue.length;He++){let Je=ue[He].camera;if(Je){let ht=f[Je];ht||(ht=new nr,f[Je]=ht);let qe=d.getCameraImage(Je);ht.sourceTexture=qe}}}}for(let ue=0;ue<v.length;ue++){let Le=S[ue],be=v[ue];Le!==null&&be!==void 0&&be.update(Le,j,c||o)}le&&le(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let te=new Ud;te.setAnimationLoop(ce),this.setAnimationLoop=function(H){le=H},this.dispose=function(){}}},vv=new ke,Vd=new Oe;Vd.set(-1,0,0,0,1,0,0,0,1);function yv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Rc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,E,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),E=M.envMap,b=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=s[b.id];S===void 0&&(m(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",M));let A=v.program;n.updateUBOMapping(b,A);let x=e.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function h(b){let v=d();b.__bindingPointIndex=v;let S=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=s[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,T=S.length;x<T;x++){let R=S[x];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)p(R[L],x,L,A);else p(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,v,S,A){if(_(b,v,S,A)===!0){let x=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let N=T[L],U=f(N);g(N,b.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function g(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function _(b,v,S,A){let x=b.value,T=v+"_"+S;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(b){let v=b.uniforms,S=0,A=16;for(let T=0,R=v.length;T<R;T++){let L=Array.isArray(v[T])?v[T]:[v[T]];for(let N=0,U=L.length;N<U;N++){let C=L[N],B=Array.isArray(C.value)?C.value:[C.value];for(let z=0,W=B.length;z<W;z++){let F=B[z],D=f(F),X=S%A,Z=X%D.boundary,G=X+Z;S+=Z,G!==0&&A-G<D.storage&&(S+=A-G),C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=D.storage}}}let x=S%A;return x>0&&(S+=A-x),b.__size=S,b.__cache={},this}function f(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):De("WebGLRenderer: Unsupported uniform value type.",b),v}function M(b){let v=b.target;v.removeEventListener("dispose",M);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function E(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Mv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function Sv(){return zn===null&&(zn=new Nn(Mv,16,16,gi,Sn),zn.name="DFG_LUT",zn.minFilter=zt,zn.magFilter=zt,zn.wrapS=In,zn.wrapT=In,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var Rs=class{constructor(e={}){let{canvas:t=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=nn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=p,m=new Set([oa,ra,sa]),f=new Set([nn,Mn,Ms,Ss,na,ia]),M=new Uint32Array(4),E=new Int32Array(4),b=new I,v=null,S=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,N=null,U=null,C=null,B=null;this._outputColorSpace=At;let z=0,W=0,F=null,D=-1,X=null,Z=new at,G=new at,Q=null,le=new Fe(0),ce=0,te=t.width,H=t.height,j=1,ue=null,Le=null,be=new at(0,0,te,H),Be=new at(0,0,te,H),vt=!1,He=new Un,Je=!1,ht=!1,qe=new ke,yt=new I,Dt=new at,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function wt(){return F===null?j:1}let V=n;function Wt(w,O){return t.getContext(w,O)}let tt,P,y,q,J,ne,he,de,ie,oe,fe,Ce,_e,pe,Ie,Ne,ze,k,me,re,ge,Me,ae;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",fn,!1),V===null){let O="webgl2";if(V=Wt(O,w),V===null)throw Wt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(w){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Ue("WebGLRenderer: "+w.message),w}function Pe(){tt=new I0(V),tt.init(),ge=new gv(V,tt),P=new y0(V,tt,e,ge),y=new pv(V,tt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),U=V.createFramebuffer(),C=V.createFramebuffer(),B=V.createFramebuffer(),q=new D0(V),J=new ev,ne=new mv(V,tt,y,J,P,ge,q),he=new C0(R),de=new Um(V),Me=new x0(V,de),ie=new P0(V,de,q,Me),oe=new U0(V,ie,de,Me,q),k=new N0(V,P,ne),Ie=new b0(J),fe=new Qx(R,he,tt,P,Me,Ie),Ce=new yv(R,J),_e=new nv,pe=new lv(tt),ze=new _0(R,he,y,oe,g,l),Ne=new fv(R,oe,P),ae=new bv(V,q,P,y),me=new v0(V,tt,q),re=new L0(V,tt,q),q.programs=fe.programs,R.capabilities=P,R.extensions=tt,R.properties=J,R.renderLists=_e,R.shadowMap=Ne,R.state=y,R.info=q}_!==nn&&(T=new B0(_,t.width,t.height,a,s,r));let Ae=new Kc(R,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(te,H,!1))},this.getSize=function(w){return w.set(te,H)},this.setSize=function(w,O,K=!0){if(Ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,H=O,t.width=Math.floor(w*j),t.height=Math.floor(O*j),K===!0&&(t.style.width=w+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(te*j,H*j).floor()},this.setDrawingBufferSize=function(w,O,K){te=w,H=O,j=K,t.width=Math.floor(w*K),t.height=Math.floor(O*K),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===nn){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,O,K,Y){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,O,K,Y),y.viewport(Z.copy(be).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,O,K,Y){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,O,K,Y),y.scissor(G.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(w){y.setScissorTest(vt=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){Le=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,K=!0){let Y=0;if(w){let $=!1;if(F!==null){let ye=F.texture.format;$=m.has(ye)}if($){let ye=F.texture.type,we=f.has(ye),ve=ze.getClearColor(),Ee=ze.getClearAlpha(),Re=ve.r,Ge=ve.g,Xe=ve.b;we?(M[0]=Re,M[1]=Ge,M[2]=Xe,M[3]=Ee,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=Re,E[1]=Ge,E[2]=Xe,E[3]=Ee,V.clearBufferiv(V.COLOR,0,E))}else Y|=V.COLOR_BUFFER_BIT}O&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),ze.dispose(),_e.dispose(),pe.dispose(),J.dispose(),he.dispose(),oe.dispose(),Me.dispose(),ae.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Oh),Ae.removeEventListener("sessionend",zh),Mi.stop()};function ut(w){w.preventDefault(),Zs("WebGLRenderer: Context Lost."),L=!0}function je(){Zs("WebGLRenderer: Context Restored."),L=!1;let w=q.autoReset,O=Ne.enabled,K=Ne.autoUpdate,Y=Ne.needsUpdate,$=Ne.type;Pe(),q.autoReset=w,Ne.enabled=O,Ne.autoUpdate=K,Ne.needsUpdate=Y,Ne.type=$}function fn(w){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function An(w){let O=w.target;O.removeEventListener("dispose",An),Ip(O)}function Ip(w){Pp(w),J.remove(w)}function Pp(w){let O=J.get(w).programs;O!==void 0&&(O.forEach(function(K){fe.releaseProgram(K)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,K,Y,$,ye){O===null&&(O=en);let we=$.isMesh&&$.matrixWorld.determinantAffine()<0,ve=Np(w,O,K,Y,$);y.setMaterial(Y,we);let Ee=K.index,Re=1;if(Y.wireframe===!0){if(Ee=ie.getWireframeAttribute(K),Ee===void 0)return;Re=2}let Ge=K.drawRange,Xe=K.attributes.position,Te=Ge.start*Re,Qe=(Ge.start+Ge.count)*Re;ye!==null&&(Te=Math.max(Te,ye.start*Re),Qe=Math.min(Qe,(ye.start+ye.count)*Re)),Ee!==null?(Te=Math.max(Te,0),Qe=Math.min(Qe,Ee.count)):Xe!=null&&(Te=Math.max(Te,0),Qe=Math.min(Qe,Xe.count));let Et=Qe-Te;if(Et<0||Et===1/0)return;Me.setup($,Y,ve,K,Ee);let mt,ot=me;if(Ee!==null&&(mt=de.get(Ee),ot=re,ot.setIndex(mt)),$.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*wt()),ot.setMode(V.LINES)):ot.setMode(V.TRIANGLES);else if($.isLine){let Xt=Y.linewidth;Xt===void 0&&(Xt=1),y.setLineWidth(Xt*wt()),$.isLineSegments?ot.setMode(V.LINES):$.isLineLoop?ot.setMode(V.LINE_LOOP):ot.setMode(V.LINE_STRIP)}else $.isPoints?ot.setMode(V.POINTS):$.isSprite&&ot.setMode(V.TRIANGLES);if($.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Xt=$._multiDrawStarts,Se=$._multiDrawCounts,jt=$._multiDrawCount,Ke=Ee?de.get(Ee).bytesPerElement:1,hn=J.get(Y).currentProgram.getUniforms();for(let Rn=0;Rn<jt;Rn++)hn.setValue(V,"_gl_DrawID",Rn),ot.render(Xt[Rn]/Ke,Se[Rn])}else if($.isInstancedMesh)ot.renderInstances(Te,Et,$.count);else if(K.isInstancedBufferGeometry){let Xt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Se=Math.min(K.instanceCount,Xt);ot.renderInstances(Te,Et,Se)}else ot.render(Te,Et)};function Bh(w,O,K,Y){N!==null&&w.isNodeMaterial&&N.setObject(Y,w),Je===!0&&Ie.setState(w,K,!1),w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=Ht,w.needsUpdate=!0,kr(w,O,Y),w.side=Bn,w.needsUpdate=!0,kr(w,O,Y),w.side=It):kr(w,O,Y)}this.compile=function(w,O,K=null){K===null&&(K=w),N!==null&&N.renderStart(w,O,K),S=pe.get(K),S.init(O),x.push(S),K.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),w!==K&&w.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),ht=this.localClippingEnabled,Je=Ie.init(this.clippingPlanes,ht),Je===!0&&Ie.setGlobalState(this.clippingPlanes,O),N!==null&&Ne.render(S.state.shadowsArray,K,O);let Y=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ye=$.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){let ve=ye[we];Bh(ve,K,O,$),Y.add(ve)}else Bh(ye,K,O,$),Y.add(ye)}),S=x.pop(),N!==null&&N.renderEnd(),Y},this.compileAsync=function(w,O,K=null){let Y=this.compile(w,O,K);return new Promise($=>{function ye(){if(Y.forEach(function(we){let Ee=J.get(we).currentProgram;(Ee===void 0||Ee.isReady())&&Y.delete(we)}),Y.size===0){$(w);return}setTimeout(ye,10)}tt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vl=null;function Lp(w){vl&&vl(w)}function Oh(){Mi.stop()}function zh(){Mi.start()}let Mi=new Ud;Mi.setAnimationLoop(Lp),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){vl=w,Ae.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},Ae.addEventListener("sessionstart",Oh),Ae.addEventListener("sessionend",zh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(w,O);let K=Ae.enabled===!0&&Ae.isPresenting===!0,Y=T!==null&&(F===null||K)&&T.begin(R,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(O),O=Ae.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,O,F),S=pe.get(w,x.length),S.init(O),S.state.textureUnits=ne.getTextureUnits(),x.push(S),qe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),He.setFromProjectionMatrix(qe,xn,O.reversedDepth),ht=this.localClippingEnabled,Je=Ie.init(this.clippingPlanes,ht),v=_e.get(w,A.length),v.init(),A.push(v),Ae.enabled===!0&&Ae.isPresenting===!0){let we=R.xr.getDepthSensingMesh();we!==null&&yl(we,O,-1/0,R.sortObjects)}yl(w,O,0,R.sortObjects),v.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&v.sort(ue,Le),bt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,bt&&ze.addToRenderList(v,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ie.beginShadows();let $=S.state.shadowsArray;if(Ne.render($,w,O),Je===!0&&Ie.endShadows(),(Y&&T.hasRenderPass())===!1){let we=v.opaque,ve=v.transmissive;if(S.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(ve.length>0)for(let Re=0,Ge=Ee.length;Re<Ge;Re++){let Xe=Ee[Re];Vh(we,ve,w,Xe)}bt&&ze.render(w);for(let Re=0,Ge=Ee.length;Re<Ge;Re++){let Xe=Ee[Re];kh(v,w,Xe,Xe.viewport)}}else ve.length>0&&Vh(we,ve,w,O),bt&&ze.render(w),kh(v,w,O)}F!==null&&W===0&&(ne.updateMultisampleRenderTarget(F),ne.updateRenderTargetMipmap(F)),Y&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,O),Me.resetDefaultState(),D=-1,X=null,x.pop(),x.length>0?(S=x[x.length-1],ne.setTextureUnits(S.state.textureUnits),Je===!0&&Ie.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,N!==null&&N.renderEnd()};function yl(w,O,K,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(He)){Y&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qe);let we=oe.update(w),ve=w.material;ve.visible&&v.push(w,we,ve,K,Dt.z,null,O)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(He))){let we=oe.update(w),ve=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Dt.copy(we.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(qe)),Array.isArray(ve)){let Ee=we.groups;for(let Re=0,Ge=Ee.length;Re<Ge;Re++){let Xe=Ee[Re],Te=ve[Xe.materialIndex];Te&&Te.visible&&v.push(w,we,Te,K,Dt.z,Xe,O)}}else ve.visible&&v.push(w,we,ve,K,Dt.z,null,O)}}let ye=w.children;for(let we=0,ve=ye.length;we<ve;we++)yl(ye[we],O,K,Y)}function kh(w,O,K,Y){let{opaque:$,transmissive:ye,transparent:we}=w;S.setupLightsView(K),Je===!0&&Ie.setGlobalState(R.clippingPlanes,K),Y&&y.viewport(Z.copy(Y)),$.length>0&&zr($,O,K),ye.length>0&&zr(ye,O,K),we.length>0&&zr(we,O,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Vh(w,O,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let Te=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new Ft(1,1,{generateMipmaps:!0,type:Te?Sn:nn,minFilter:pi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let ye=S.state.transmissionRenderTarget[Y.id],we=Y.viewport||Z;ye.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);let ve=R.getRenderTarget(),Ee=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(le),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),bt&&ze.render(K);let Ge=R.toneMapping;R.toneMapping=bn;let Xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),Je===!0&&Ie.setGlobalState(R.clippingPlanes,Y),zr(w,K,Y),ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Qe=0,Et=O.length;Qe<Et;Qe++){let mt=O[Qe],{object:ot,geometry:Xt,material:Se,group:jt}=mt;if(Se.side===It&&ot.layers.test(Y.layers)){let Ke=Se.side;Se.side=Ht,Se.needsUpdate=!0,Hh(ot,K,Y,Xt,Se,jt),Se.side=Ke,Se.needsUpdate=!0,Te=!0}}Te===!0&&(ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye))}R.setRenderTarget(ve,Ee,Re),R.setClearColor(le,ce),Xe!==void 0&&(Y.viewport=Xe),R.toneMapping=Ge}function zr(w,O,K){let Y=O.isScene===!0?O.overrideMaterial:null;for(let $=0,ye=w.length;$<ye;$++){let we=w[$],{object:ve,geometry:Ee,group:Re}=we,Ge=we.material;Ge.allowOverride===!0&&Y!==null&&(Ge=Y),ve.layers.test(K.layers)&&Hh(ve,O,K,Ee,Ge,Re)}}function Hh(w,O,K,Y,$,ye){N!==null&&$.isNodeMaterial&&N.setObject(w,$),w.onBeforeRender(R,O,K,Y,$,ye),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(R,O,K,Y,w,ye),$.transparent===!0&&$.side===It&&$.forceSinglePass===!1?($.side=Ht,$.needsUpdate=!0,R.renderBufferDirect(K,O,Y,$,w,ye),$.side=Bn,$.needsUpdate=!0,R.renderBufferDirect(K,O,Y,$,w,ye),$.side=It):R.renderBufferDirect(K,O,Y,$,w,ye),w.onAfterRender(R,O,K,Y,$,ye)}function kr(w,O,K){O.isScene!==!0&&(O=en);let Y=J.get(w),$=S.state.lights,ye=S.state.shadowsArray,we=$.state.version,ve=fe.getParameters(w,$.state,ye,O,K,S.state.lightProbeGridArray),Ee=fe.getProgramCacheKey(ve),Re=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let Ge=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=he.get(w.envMap||Y.environment,Ge),Y.envMapRotation=Y.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",An),Re=new Map,Y.programs=Re);let Xe=Re.get(Ee);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===we)return Wh(w,ve),Xe}else ve.uniforms=fe.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,K,ve),w.onBeforeCompile(ve,R),Xe=fe.acquireProgram(ve,Ee),Re.set(Ee,Xe),Y.uniforms=ve.uniforms;let Te=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=Ie.uniform),Wh(w,ve),Y.needsLights=Fp(w),Y.lightsStateVersion=we,Y.needsLights&&(Te.ambientLightColor.value=$.state.ambient,Te.lightProbe.value=$.state.probe,Te.sunLights.value=$.state.sun,Te.sunLightShadows.value=$.state.sunShadow,Te.directionalLights.value=$.state.directional,Te.directionalLightShadows.value=$.state.directionalShadow,Te.spotLights.value=$.state.spot,Te.spotLightShadows.value=$.state.spotShadow,Te.rectAreaLights.value=$.state.rectArea,Te.ltc_1.value=$.state.rectAreaLTC1,Te.ltc_2.value=$.state.rectAreaLTC2,Te.pointLights.value=$.state.point,Te.pointLightShadows.value=$.state.pointShadow,Te.hemisphereLights.value=$.state.hemi,Te.sunShadowMatrix.value=$.state.sunShadowMatrix,Te.sunShadowCascade.value=$.state.sunShadowCascade,Te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Te.spotLightMatrix.value=$.state.spotLightMatrix,Te.spotLightMap.value=$.state.spotLightMap,Te.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Gh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=As.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Wh(w,O){let K=J.get(w);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Dp(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(O.matrixWorld);for(let K=0,Y=w.length;K<Y;K++){let $=w[K];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function Np(w,O,K,Y,$){O.isScene!==!0&&(O=en),ne.resetTextureUnits();let ye=O.fog,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,ve=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ye.workingColorSpace,Ee=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Re=he.get(Y.envMap||we,Ee),Ge=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Te=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,Et=!!K.morphAttributes.color,mt=bn;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(mt=R.toneMapping);let ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xt=ot!==void 0?ot.length:0,Se=J.get(Y),jt=S.state.lights;if(Je===!0&&(ht===!0||w!==X)){let dt=w===X&&Y.id===D;Ie.setState(Y,w,dt)}let Ke=!1;Y.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==jt.state.version||Se.outputColorSpace!==ve||$.isBatchedMesh&&Se.batching===!1||!$.isBatchedMesh&&Se.batching===!0||$.isBatchedMesh&&Se.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Se.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Se.instancing===!1||!$.isInstancedMesh&&Se.instancing===!0||$.isSkinnedMesh&&Se.skinning===!1||!$.isSkinnedMesh&&Se.skinning===!0||$.isInstancedMesh&&Se.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Se.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Se.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Se.instancingMorph===!1&&$.morphTexture!==null||Se.envMap!==Re||Y.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ie.numPlanes||Se.numIntersection!==Ie.numIntersection)||Se.vertexAlphas!==Ge||Se.vertexTangents!==Xe||Se.morphTargets!==Te||Se.morphNormals!==Qe||Se.morphColors!==Et||Se.toneMapping!==mt||Se.morphTargetsCount!==Xt||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Se.__version=Y.version);let hn=Se.currentProgram;Ke===!0&&(hn=kr(Y,O,$),N&&Y.isNodeMaterial&&N.onUpdateProgram(Y,hn,Se));let Rn=!1,Qn=!1,Hi=!1,st=hn.getUniforms(),Mt=Se.uniforms;if(y.useProgram(hn.program)&&(Rn=!0,Qn=!0,Hi=!0),Y.id!==D&&(D=Y.id,Qn=!0),Se.needsLights){let dt=Dp(S.state.lightProbeGridArray,$);Se.lightProbeGrid!==dt&&(Se.lightProbeGrid=dt,Qn=!0)}if(Rn||X!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),st.setValue(V,"projectionMatrix",w.projectionMatrix),st.setValue(V,"viewMatrix",w.matrixWorldInverse);let ti=st.map.cameraPosition;ti!==void 0&&ti.setValue(V,yt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&st.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&st.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Qn=!0,Hi=!0)}if(Se.needsLights&&(jt.state.sunShadowMap.length>0&&st.setValue(V,"sunShadowMap",jt.state.sunShadowMap,ne),jt.state.directionalShadowMap.length>0&&st.setValue(V,"directionalShadowMap",jt.state.directionalShadowMap,ne),jt.state.spotShadowMap.length>0&&st.setValue(V,"spotShadowMap",jt.state.spotShadowMap,ne),jt.state.pointShadowMap.length>0&&st.setValue(V,"pointShadowMap",jt.state.pointShadowMap,ne)),$.isSkinnedMesh){st.setOptional(V,$,"bindMatrix"),st.setOptional(V,$,"bindMatrixInverse");let dt=$.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),st.setValue(V,"boneTexture",dt.boneTexture,ne))}$.isBatchedMesh&&(st.setOptional(V,$,"batchingTexture"),st.setValue(V,"batchingTexture",$._matricesTexture,ne),st.setOptional(V,$,"batchingIdTexture"),st.setValue(V,"batchingIdTexture",$._indirectTexture,ne),st.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&st.setValue(V,"batchingColorTexture",$._colorsTexture,ne));let ei=K.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&k.update($,K,hn),(Qn||Se.receiveShadow!==$.receiveShadow)&&(Se.receiveShadow=$.receiveShadow,st.setValue(V,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Mt.envMapIntensity.value=O.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Sv()),Qn){if(st.setValue(V,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&Up(Mt,Hi),ye&&Y.fog===!0&&Ce.refreshFogUniforms(Mt,ye),Ce.refreshMaterialUniforms(Mt,Y,j,H,S.state.transmissionRenderTarget[w.id]),Se.needsLights&&Se.lightProbeGrid){let dt=Se.lightProbeGrid;Mt.probesSH.value=dt.texture,Mt.probesMin.value.copy(dt.boundingBox.min),Mt.probesMax.value.copy(dt.boundingBox.max),Mt.probesResolution.value.copy(dt.resolution)}As.upload(V,Gh(Se),Mt,ne)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(As.upload(V,Gh(Se),Mt,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&st.setValue(V,"center",$.center),st.setValue(V,"modelViewMatrix",$.modelViewMatrix),st.setValue(V,"normalMatrix",$.normalMatrix),st.setValue(V,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let dt=Y.uniformsGroups;for(let ti=0,Gi=dt.length;ti<Gi;ti++){let qh=dt[ti];ae.update(qh,hn),ae.bind(qh,hn)}}return hn}function Up(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Fp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,O,K){let Y=J.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=O,J.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let K=J.get(w);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,K=0){F=w,z=O,W=K;let Y=null,$=!1,ye=!1;if(w){let ve=J.get(w);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,ve.__webglFramebuffer),Z.copy(w.viewport),G.copy(w.scissor),Q=w.scissorTest,y.viewport(Z),y.scissor(G),y.setScissorTest(Q),D=-1;return}else if(ve.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(ve.__hasExternalTextures)ne.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ge=w.depthTexture;if(ve.__boundDepthTexture!==Ge){if(Ge!==null&&J.has(Ge)&&(w.width!==Ge.image.width||w.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Re=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?Y=Re[O][K]:Y=Re[O],$=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?Y=J.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?Y=Re[K]:Y=Re,Z.copy(w.viewport),G.copy(w.scissor),Q=w.scissorTest}else Z.copy(be).multiplyScalar(j).floor(),G.copy(Be).multiplyScalar(j).floor(),Q=vt;if(K!==0&&(Y=U),y.bindFramebuffer(V.FRAMEBUFFER,Y)&&y.drawBuffers(w,Y),y.viewport(Z),y.scissor(G),y.setScissorTest(Q),$){let ve=J.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,K)}else if(ye){let ve=O;for(let Ee=0;Ee<w.textures.length;Ee++){let Re=J.get(w.textures[Ee]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,K,ve)}}else if(w!==null&&K!==0){let ve=J.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ve.__webglTexture,K)}D=-1};function Xh(w){let O=J.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=P.textureFormatReadable(w.format),O.__typeReadable=P.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,K,Y,$,ye,we,ve=0){if(!(w&&w.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){y.bindFramebuffer(V.FRAMEBUFFER,Ee);try{let Re=w.textures[ve],Ge=Re.format,Xe=Re.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ve);let Te=Xh(Re);if(Te.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&K>=0&&K<=w.height-$&&V.readPixels(O,K,Y,$,ge.convert(Ge),ge.convert(Xe),ye)}finally{let Re=F!==null?J.get(F).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,O,K,Y,$,ye,we,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(O>=0&&O<=w.width-Y&&K>=0&&K<=w.height-$){y.bindFramebuffer(V.FRAMEBUFFER,Ee);let Re=w.textures[ve],Ge=Re.format,Xe=Re.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ve);let Te=Xh(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,ye.byteLength,V.STREAM_READ),V.readPixels(O,K,Y,$,ge.convert(Ge),ge.convert(Xe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Et=F!==null?J.get(F).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,Et);let mt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ld(V,mt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ye),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Qe),V.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,K=0){let Y=Math.pow(2,-K),$=Math.floor(w.image.width*Y),ye=Math.floor(w.image.height*Y),we=O!==null?O.x:0,ve=O!==null?O.y:0;ne.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,we,ve,$,ye),y.unbindTexture()},this.copyTextureToTexture=function(w,O,K=null,Y=null,$=0,ye=0){let we,ve,Ee,Re,Ge,Xe,Te,Qe,Et,mt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(K!==null)we=K.max.x-K.min.x,ve=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,Re=K.min.x,Ge=K.min.y,Xe=K.isBox3?K.min.z:0;else{let Mt=Math.pow(2,-$);we=Math.floor(mt.width*Mt),ve=Math.floor(mt.height*Mt),w.isDataArrayTexture?Ee=mt.depth:w.isData3DTexture?Ee=Math.floor(mt.depth*Mt):Ee=1,Re=0,Ge=0,Xe=0}Y!==null?(Te=Y.x,Qe=Y.y,Et=Y.z):(Te=0,Qe=0,Et=0);let ot=ge.convert(O.format),Xt=ge.convert(O.type),Se;O.isData3DTexture?(ne.setTexture3D(O,0),Se=V.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ne.setTexture2DArray(O,0),Se=V.TEXTURE_2D_ARRAY):(ne.setTexture2D(O,0),Se=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);let jt=y.getParameter(V.UNPACK_ROW_LENGTH),Ke=y.getParameter(V.UNPACK_IMAGE_HEIGHT),hn=y.getParameter(V.UNPACK_SKIP_PIXELS),Rn=y.getParameter(V.UNPACK_SKIP_ROWS),Qn=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,mt.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,Re),y.pixelStorei(V.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Xe);let Hi=w.isDataArrayTexture||w.isData3DTexture,st=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let Mt=J.get(w),ei=J.get(O),dt=J.get(Mt.__renderTarget),ti=J.get(ei.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,dt.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Gi=0;Gi<Ee;Gi++)Hi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(w).__webglTexture,$,Xe+Gi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(O).__webglTexture,ye,Et+Gi)),V.blitFramebuffer(Re,Ge,we,ve,Te,Qe,we,ve,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||J.has(w)){let Mt=J.get(w),ei=J.get(O);y.bindFramebuffer(V.READ_FRAMEBUFFER,C),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,B);for(let dt=0;dt<Ee;dt++)Hi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mt.__webglTexture,$,Xe+dt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mt.__webglTexture,$),st?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ei.__webglTexture,ye,Et+dt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ei.__webglTexture,ye),$!==0?V.blitFramebuffer(Re,Ge,we,ve,Te,Qe,we,ve,V.COLOR_BUFFER_BIT,V.NEAREST):st?V.copyTexSubImage3D(Se,ye,Te,Qe,Et+dt,Re,Ge,we,ve):V.copyTexSubImage2D(Se,ye,Te,Qe,Re,Ge,we,ve);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else st?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Se,ye,Te,Qe,Et,we,ve,Ee,ot,Xt,mt.data):O.isCompressedArrayTexture?V.compressedTexSubImage3D(Se,ye,Te,Qe,Et,we,ve,Ee,ot,mt.data):V.texSubImage3D(Se,ye,Te,Qe,Et,we,ve,Ee,ot,Xt,mt):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ye,Te,Qe,we,ve,ot,Xt,mt.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ye,Te,Qe,mt.width,mt.height,ot,mt.data):V.texSubImage2D(V.TEXTURE_2D,ye,Te,Qe,we,ve,ot,Xt,mt);y.pixelStorei(V.UNPACK_ROW_LENGTH,jt),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ke),y.pixelStorei(V.UNPACK_SKIP_PIXELS,hn),y.pixelStorei(V.UNPACK_SKIP_ROWS,Rn),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Qn),ye===0&&O.generateMipmaps&&V.generateMipmap(Se),y.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){z=0,W=0,F=null,y.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var wv={f32:Float32Array,u16:Uint16Array,i16:Int16Array,u32:Uint32Array,i32:Int32Array},Hd=4*1024*1024;function Mr(i){return i.points??[i.start,i.end]}function qd(i,e){let t=i.getElementById(e);if(!t)throw new rt(`Data block '${e}' is missing.`);return t.textContent}function Gd(i){let e=0;for(let a of i.childNodes)e+=a.length;let t=new Uint8Array(Math.ceil(e/4)*3),n=0,s=!0,r="";for(let a of i.childNodes)for(let l=0;l<a.length;l+=Hd){let c=a.substringData(l,Hd),h=c.trim(),d=r+h,u=d.length-d.length%4,p=d.slice(0,u),g=jc(t,n,p),_=p.endsWith("==")?2:p.endsWith("=")?1:0;s&&(s=c.length===h.length&&g-n===u*3/4-_),n=g,r=d.slice(u)}let o=jc(t,n,r);return s&&(s=o-n===Math.floor(r.length*3/4)),{bytes:t.subarray(0,o),canonical:s}}function Ev(i,e,t){let n=Math.floor(e/3),s=n*4,r=e-n*3,o=Math.ceil((r+t)/3)*4,a=[];for(let c of i.childNodes){if(s>=c.length){s-=c.length;continue}let h=Math.min(o,c.length-s);if(a.push(c.substringData(s,h)),o-=h,s=0,!o)break}let l=new Uint8Array(Math.ceil((r+t)/3)*3);if(jc(l,0,a.join(""))<r+t)throw new rt("The binary data is truncated.");return l.slice(r,r+t).buffer}function jc(i,e,t){if(i.setFromBase64)return e+i.subarray(e).setFromBase64(t).written;let n=atob(t);for(let s=0;s<n.length;s++)i[e++]=n.charCodeAt(s);return e}var rt=class extends Error{},Is=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),_i=i=>Array.isArray(i)&&i.every(Is),zi=i=>Array.isArray(i)&&i.length===3&&i.every(e=>typeof e=="number"),Yd=i=>Is(i)&&zi(i.min)&&zi(i.max),Wd=i=>i==null||Is(i)&&_i(i.planes)&&i.planes.every(e=>zi(e.normal)&&e.normal.every(Number.isFinite)&&e.normal.some(t=>t!==0)&&Number.isFinite(e.offset))&&(i.box==null||Yd(i.box)&&i.box.max.every(Number.isFinite)&&i.box.min.every((e,t)=>Number.isFinite(e)&&e<=i.box.max[t]));function Tv(i){if(!Is(i)||!_i(i.elements)||!_i(i.geometries)||!_i(i.materials)||!Is(i.instances))throw new rt("META must describe elements, geometries, materials and instances.");if(i.title!=null&&typeof i.title!="string")throw new rt("Invalid META title.");let{instances:e}=i;if(!Number.isSafeInteger(e.count)||e.count<0)throw new rt("Invalid META instance count.");for(let[t,n,s]of[["geometry","u32",e.count],["material","u32",e.count],["element","i32",e.count],["matrix","f32",e.count*12]])if(e[t]?.t!==n||e[t].n!==s)throw new rt(`Invalid META instance ${t} view.`);for(let t of i.geometries){let n=t.q;if(!Yd(t.bbox)||!["u16","u32"].includes(t.indices?.t)||t.positions?.t!==(n?"u16":"f32")||n&&(!zi(n.o)||typeof n.s!="number")||t.normals!=null&&!["f32","i16"].includes(t.normals.t)||t.uvs!=null&&t.uvs.t!=="f32")throw new rt("Invalid META geometry.")}Av(i);for(let t of i.materials){let n=t.texture;if(!zi(t.color)||typeof t.opacity!="number"||n!=null&&(!Number.isInteger(n)||n<0||n>=(i.textures?.length??0)))throw new rt("Invalid META material.")}}function Av(i){if(!Is(i)||!_i(i.elements)||i.title!=null&&typeof i.title!="string")throw new rt("Invalid review metadata.");for(let l of["textures","grids","viewpoints","bcfTopics","clashTests","linkedFiles","models"])if(i[l]!=null&&!_i(i[l]))throw new rt(`Invalid META ${l} list.`);if(i.models?.some(({id:l,name:c})=>!Number.isSafeInteger(l)||typeof c!="string")||i.elements.some(({modelId:l,levelId:c})=>l!=null&&!Number.isSafeInteger(l)||c!=null&&!Number.isSafeInteger(c)))throw new rt("Invalid META model or level identity.");let e=l=>l==null||Array.isArray(l)&&l.every(c=>Number.isInteger(c)&&c>=0&&c<i.elements.length),t=l=>zi(l)&&l.every(Number.isFinite),n=l=>l==null||typeof l=="string",s=l=>t(l.camera?.position)&&t(l.camera?.target)&&Wd(l.sections)&&e(l.hiddenElements)&&e(l.visibleElements)&&e(l.selectedElements)&&(l.hiddenElements==null||l.visibleElements==null)&&(l.hiddenModelKeys==null||Array.isArray(l.hiddenModelKeys)&&l.hiddenModelKeys.every(c=>typeof c=="string")),r=l=>Number.isSafeInteger(l)&&l>=0,o=l=>s(l)&&t(l.camera.up)&&l.camera.up.some(c=>c!==0)&&(l.camera.projection==="orthographic"?Number.isFinite(l.camera.orthographicHeight)&&l.camera.orthographicHeight>0:l.camera.projection==="perspective"&&Number.isFinite(l.camera.fov)&&l.camera.fov>0&&l.camera.fov<180)&&r(l.missingComponents)&&r(l.ambiguousComponents),a=l=>{let c=Mr(l);return Array.isArray(c)&&c.length>=2&&c.every(t)};if(i.grids?.some(l=>!a(l))||i.viewpoints?.some(l=>!s(l))||i.clashTests?.some(l=>!_i(l.clashes)||l.clashes.some(c=>!zi(c.point))))throw new rt("Invalid META grids, viewpoints or clashes.");if(i.bcfTopics?.some(l=>typeof l.title!="string"||!n(l.description)||!n(l.status)||!_i(l.viewpoints)||l.viewpoints.some(c=>!o(c))))throw new rt("Invalid META BCF topics.");if(i.linkedFiles?.some(l=>!e(l.members)))throw new rt("Invalid META linked file members.");if(!Wd(i.sections))throw new rt("Invalid META sections.")}function Rv(i){let e;try{e=JSON.parse(i)}catch(t){throw new rt(t.message,{cause:t})}return Tv(e),e}function Qc(i=document,e){e?.("metadataStart");let t;try{t=qd(i,"ioviewer-meta")}catch(s){throw s instanceof rt?s:new rt(s.message,{cause:s})}let n=Rv(t);return e?.("metadataEnd"),n}function Xd(i,e){let t=wv[i?.t];if(!t)throw new rt(`Unknown view type '${i?.t}'.`);let n=t.BYTES_PER_ELEMENT;if(!(Number.isSafeInteger(i.o)&&Number.isSafeInteger(i.n)&&i.o>=0&&i.n>=0&&i.o%n===0&&i.o+i.n*n<=e))throw new rt(`View ${JSON.stringify(i)} is outside the ${e} bytes of binary data.`);return t}function $d(i=document,e,t=Qc(i,e)){let n,s,r,o;try{if(e?.("binaryStart"),s=i.getElementById("ioviewer-bin"),!s)throw new Error("Data block 'ioviewer-bin' is missing.");({bytes:n,canonical:r}=Gd(s)),e?.("binaryEnd")}catch(c){throw new rt(c.message,{cause:c})}let a=n.length,l=null;return{meta:t,view(c){if(!n)throw new Error("The binary data has been released.");let h=Xd(c,a);return new h(n.buffer,c.o,c.n)},readView(c){let h=Xd(c,a);if(!c.n)return new h(0);!n&&!r&&(o??(o=Gd(s).bytes));let d=n??o;return d?new h(d.buffer,c.o,c.n):new h(Ev(s,c.o,c.n*h.BYTES_PER_ELEMENT))},releaseBinary(){n=null,o=null},props(c){return l??(l=JSON.parse(qd(i,"ioviewer-props"))),l[c]??null}}}var Zd=new ke,Jd=new Un,eh=32;function th(i,e=new Float64Array(24)){return Zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Jd.setFromProjectionMatrix(Zd,i.coordinateSystem,i.reversedDepth),Jd.planes.forEach(({normal:t,constant:n},s)=>e.set([t.x,t.y,t.z,n],s*4)),e}function nh(i,e,t,n,s){for(let r=0;r<24;r+=4)if(i[r]*e+i[r+1]*t+i[r+2]*n+i[r+3]<-s)return!0;return!1}function Kd(i,e,t,n,s){for(let r=0;r<24;r+=4)if(i[r]*e+i[r+1]*t+i[r+2]*n+i[r+3]<s)return!1;return!0}function ih(i,e,t=new Float64Array(8)){let n=i.matrixWorld.elements,s=new I(-n[8],-n[9],-n[10]).normalize();return t.set([n[12],n[13],n[14],s.x,s.y,s.z,i.projectionMatrix.elements[5]*e/2,i.isPerspectiveCamera?1:0]),t}function Ps(i){return 31-Math.clz32(Math.max(1,Math.min(i*i*256,2147483647)))}function jd(i,e,t){if(e<=t)return 0;let n=0,s=!0;for(let r=eh-1;r>=0;r--)if(i[r]!==0){if(n+=i[r],n>t)return s?r===0?0:2**(r/2-4):2**((r+1)/2-4);s=!1}return 0}var wn=.0009765625,sh=32767,Sr=i=>i<0?-1:1;function Qd(i){let e=Math.min(Math.max(i,-1),1)*sh;return Sr(e)*Math.round(Math.abs(e))}function wr(i,e,t,n,s){let r=Math.abs(t)+Math.abs(n)+Math.abs(s);if(!(r>0)){i[e]=i[e+1]=0;return}let o=t/r,a=n/r;s<0&&([o,a]=[(1-Math.abs(a))*Sr(o),(1-Math.abs(o))*Sr(a)]),i[e]=Qd(o),i[e+1]=Qd(a)}function ef(i,e,t,n){let s=Math.max(t/sh,-1),r=Math.max(n/sh,-1),o=1-Math.abs(s)-Math.abs(r);o<0&&([s,r]=[(1-Math.abs(r))*Sr(s),(1-Math.abs(s))*Sr(r)]);let a=Math.sqrt(s*s+r*r+o*o);i[e]=s/a,i[e+1]=r/a,i[e+2]=o/a}function Er(i,e){let t=i.view(e.positions);if(!e.q){if(!(t instanceof Float32Array))throw new Error(`Geometry positions of type '${e.positions.t}' need a "q" origin and step.`);return t}if(!(t instanceof Uint16Array))throw new Error(`Quantized geometry positions must be u16, got '${e.positions.t}'.`);return t}function tf(i,e){let t=Er(i,e);if(!e.q)return t;let[n,s,r]=e.q.o,o=e.q.s,a=new Float32Array(t.length);for(let l=0;l<t.length;l+=3)a[l]=n+t[l]*o,a[l+1]=s+t[l+1]*o,a[l+2]=r+t[l+2]*o;return a}function nf(i,e){if(!e.normals)return null;let t=i.view(e.normals);if(!(t instanceof Float32Array||t instanceof Int16Array))throw new Error(`Geometry normals must be i16 or f32, got '${e.normals.t}'.`);return t}var sf=32768,rf=0,Cv=1,Ls=2,of=65535;function af(i,e,t,n){let s=[],r=[Uint32Array.from(t)];for(;r.length;){let o=r.pop(),a=0;for(let c of o)a+=e[c];if(a<=n||o.length<=1){o.length&&s.push(o);continue}lf(o,i);let l=0;for(let c=0;l<o.length-1&&c+e[o[l]]<=a/2;l++)c+=e[o[l]];l=Math.max(l,1),r.push(o.subarray(l),o.subarray(0,l))}return s}function lf(i,e,t=-1){let n=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let h of i)for(let d=0;d<3;d++){let u=e[h*3+d];Number.isFinite(u)&&(u<n[d]&&(n[d]=u),u>s[d]&&(s[d]=u))}let r=0;for(let h=1;h<3;h++)s[h]-n[h]>s[r]-n[r]&&(r=h);let o=s[r]-n[r],a=2**20-1,l=new Float64Array(i.length);for(let h=0;h<i.length;h++){let d=i[h],u=e[d*3+r],p=o>0&&Number.isFinite(u)?Math.round((u-n[r])/o*a):0;l[h]=p*2**32+d}let c=0;t<0?l.sort():c=Iv(l,t);for(let h=0;h<i.length;h++)i[h]=l[h]%2**32;return c}function Iv(i,e){let t=0,n=i.length-1,s=2654435769,r=2*Math.ceil(Math.log2(i.length+1))+8,o=0,a=0;for(;t<n;){let l=n-t+1;if(++o>r)return i.subarray(t,n+1).sort(),a+l*Math.ceil(Math.log2(l));a+=l,s=Math.imul(s,1664525)+1013904223>>>0;let c=i[t+s%(n-t+1)],h=t,d=n;for(;h<=d;){for(;i[h]<c;)h++;for(;i[d]>c;)d--;if(h<=d){let u=i[h];i[h++]=i[d],i[d--]=u}}if(e<=d)n=d;else if(e>=h)t=h;else return a}return a}function cf(i,e,t,n=1/0){let s=[];s.scanned=0;let r=[Uint32Array.from(e)];for(;r.length;){let o=r.pop(),a=Math.ceil(o.length/t);if(o.length<=1||a<=1&&Pv(o,i)<=n){o.length&&s.push(o);continue}let l=a>1?Math.ceil(o.length*Math.floor(a/2)/a):Math.ceil(o.length/2);s.scanned+=lf(o,i,l),r.push(o.subarray(l),o.subarray(0,l))}return s}function Pv(i,e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l of i){let c=e[l*3],h=e[l*3+1],d=e[l*3+2];c<t&&(t=c),c>r&&(r=c),h<n&&(n=h),h>o&&(o=h),d<s&&(s=d),d>a&&(a=d)}return Math.hypot(r-t,o-n,a-s)/2}function hf(i,e){let t=new Float64Array(6).fill(-1/0),n=new Float64Array(6).fill(-1/0),s=new Int32Array(6);for(let o=0;o<e.length;o++)if(e[o]!==0)for(let a=0;a<6;a++){let l=i[o*6+a],c=a<3?-l:l;c>t[a]?(n[a]=t[a],t[a]=c,s[a]=o):c>n[a]&&(n[a]=c)}if(t[0]===-1/0)return 0;let r=Math.hypot(t[0]+t[3],t[1]+t[4],t[2]+t[5]);if(n[0]===-1/0)return r;for(let o of s){let a=c=>s[c]===o?n[c]:t[c],l=Math.hypot(a(0)+a(3),a(1)+a(4),a(2)+a(5));r=Math.min(r,2*l)}return r}var oh=384*2**20;function uf(i,{cap:e=oh,minRepeats:t=16,perCell:n=1024,maxDraws:s=1024}={}){let r=new Uint8Array(i.length),o=0;for(let h of i)o+=h.k*h.bytes;if(o<=e)return r;let a=h=>(i[h].k-1)*i[h].bytes,l=[...i.keys()].filter(h=>i[h].k>=t);l.sort((h,d)=>a(d)-a(h)||i[d].k-i[h].k||h-d);let c=0;for(let h of l){let d=i[h].cells??Math.ceil(i[h].k/n);c+d>s||(r[h]=1,c+=d)}return r}function qa(i,e){return i>65535?new Uint32Array(e):new Uint16Array(e)}function ah(i,e){return i.sort((t,n)=>e[n]-e[t]||t-n)}function df(i,e,t,n){for(;e<t;){let s=e+t>>>1;i[s]>=n?e=s+1:t=s}return e}function ff(i,e,t){let n=i[e];return[n,t>e?i[t]-n:0]}function pf(i,e,t,n){let s=i.subarray(e*12,e*12+12);if(s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===1&&s[5]===0&&s[6]===0&&s[7]===0&&s[8]===1&&t.q&&t.q.s===wn){for(let a=0;a<3;a++)n[a]=s[9+a]+t.q.o[a];return rf}let o=!0;for(let a=0;a<3;a++){let l=s[9+a],c=s[9+a];for(let h=0;h<3;h++){let d=s[h*3+a]*t.min[h],u=s[h*3+a]*t.max[h];l+=Math.min(d,u),c+=Math.max(d,u)}n[a]=Math.floor(l/wn)*wn,Math.ceil((c-n[a])/wn)<=of||(o=!1)}return o||n.fill(0),o?Cv:Ls}function mf(i,e){let t=i.length,n=0,s=0;for(let m of i){let f=e.source(e.geometryOf[m]);n+=f.vertices,s+=f.indices.length}let r=e.kind[i[0]]===Ls,o=r?new Float32Array(n*4):new Uint16Array(n*4),a=new Int16Array(n*2),l=e.textured?new Float32Array(n*2):null,c=qa(n,s),h=new Uint32Array(t+1),d=new Float32Array(t*3),u=new Float32Array(t),p=new Float64Array(3),g=0,_=0;for(let m=0;m<t;m++){let f=i[m],M=e.source(e.geometryOf[f]),E=e.kind[f];if(E===Ls!==r)throw new Error("A chunk mixes f32 and u16 slots.");let b=e.matrices.subarray(f*12,f*12+12);for(let S=0;S<3;S++)d[m*3+S]=e.origins[f*3+S];u[m]=r?1:wn,E===rf?Lv(M,o,a,g,m):Dv(M,b,E,e.origins.subarray(f*3,f*3+3),o,a,g,m,p),l&&M.uvs&&l.set(M.uvs,g*2),h[m]=_;let v=M.indices;if(e.mirrored[f])for(let S=0;S<v.length;S+=3)c[_++]=v[S]+g,c[_++]=v[S+2]+g,c[_++]=v[S+1]+g;else for(let S=0;S<v.length;S++)c[_++]=v[S]+g;g+=M.vertices}return h[t]=_,{q:o,o:a,uv:l,index:c,indexStart:h,origins:d,steps:u}}function Lv(i,e,t,n,s){let r=i.positions;for(let o=0;o<i.vertices;o++){let a=(n+o)*4;e[a]=r[o*3],e[a+1]=r[o*3+1],e[a+2]=r[o*3+2],e[a+3]=s}if(i.oct)t.set(i.oct,n*2);else{let o=Ya(i);for(let a=0;a<i.vertices;a++)wr(t,(n+a)*2,o[a*3],o[a*3+1],o[a*3+2])}}function Dv(i,e,t,n,s,r,o,a,l){let[c,h,d,u,p,g,_,m,f,M,E,b]=e,S=c*(p*f-g*m)-u*(h*f-d*m)+_*(h*g-d*p)<0?-1:1,A=(p*f-g*m)*S,x=(g*_-u*f)*S,T=(u*m-p*_)*S,R=(m*d-f*h)*S,L=(f*c-_*d)*S,N=(_*h-m*c)*S,U=(h*g-d*p)*S,C=(d*u-c*g)*S,B=(c*p-h*u)*S,z=i.positions,W=i.q?i.q.o:null,F=i.q?i.q.s:1,D=Ya(i);for(let X=0;X<i.vertices;X++){let Z=z[X*3],G=z[X*3+1],Q=z[X*3+2];W&&(Z=W[0]+Z*F,G=W[1]+G*F,Q=W[2]+Q*F);let le=c*Z+u*G+_*Q+M,ce=h*Z+p*G+m*Q+E,te=d*Z+g*G+f*Q+b,H=(o+X)*4;t===Ls?(s[H]=le,s[H+1]=ce,s[H+2]=te):(s[H]=rh(le-n[0]),s[H+1]=rh(ce-n[1]),s[H+2]=rh(te-n[2])),s[H+3]=a;let j=D[X*3],ue=D[X*3+1],Le=D[X*3+2];l[0]=A*j+R*ue+U*Le,l[1]=x*j+L*ue+C*Le,l[2]=T*j+N*ue+B*Le,wr(r,(o+X)*2,l[0],l[1],l[2])}}var rh=i=>Math.min(Math.max(Math.round(i/wn),0),of);function gf(i,e,t,n,s){let r=i.length/3,o=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let c=0;c<r;c++)for(let h=0;h<3;h++){let d=e?e.o[h]+i[c*3+h]*e.s:i[c*3+h];d<o[h]&&(o[h]=d),d>a[h]&&(a[h]=d)}let l=t instanceof Int16Array?t:null;return{positions:i,q:e,oct:l,normals:l?null:t,indices:n,uvs:s,vertices:r,min:o,max:a}}function Ya(i){if(!i.normals&&i.oct){i.normals=new Float32Array(i.vertices*3);for(let e=0;e<i.vertices;e++)ef(i.normals,e*3,i.oct[e*2],i.oct[e*2+1])}else i.normals||(i.normals=Nv(i.positions,i.q,i.indices));return i.normals}function Nv(i,e,t){let n=new Float32Array(i.length),s=e?.s??1;for(let r=0;r<t.length;r+=3){let o=t[r]*3,a=t[r+1]*3,l=t[r+2]*3,c=(i[a]-i[o])*s,h=(i[a+1]-i[o+1])*s,d=(i[a+2]-i[o+2])*s,u=(i[l]-i[o])*s,p=(i[l+1]-i[o+1])*s,g=(i[l+2]-i[o+2])*s,_=h*g-d*p,m=d*u-c*g,f=c*p-h*u;n[o]+=_,n[o+1]+=m,n[o+2]+=f,n[a]+=_,n[a+1]+=m,n[a+2]+=f,n[l]+=_,n[l+1]+=m,n[l+2]+=f}for(let r=0;r<n.length;r+=3){let o=Math.hypot(n[r],n[r+1],n[r+2])||1;n[r]/=o,n[r+1]/=o,n[r+2]/=o}return n}var Tr=`
attribute vec4 q;
attribute float slotBase;
uniform highp sampler2D slotInfo;
uniform highp sampler2D slotState;
varying vec3 vTint;
// Octahedral decode without a branch (z < 0 folds x, y to (1 - |y|, 1 - |x|) with their signs, as quantize.js), not
// normalized: three's normal_vertex normalizes after the normal matrix.
vec3 ioOct( vec2 e ) {
  vec3 n = vec3( e, 1.0 - abs( e.x ) - abs( e.y ) );
  float t = max( - n.z, 0.0 );
  n.xy += vec2( n.x >= 0.0 ? - t : t, n.y >= 0.0 ? - t : t );
  return n;
}`,Ar=`
int slot = int( slotBase ) + int( q.w );
ivec2 st = ivec2( slot & 2047, slot >> 11 );
vec4 info = texelFetch( slotInfo, st, 0 );
vec4 state = texelFetch( slotState, st, 0 );
vec3 slotPosition = info.xyz + q.xyz * info.w;`,lh=`
#ifndef IO_NO_HIDE_BRANCH
if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
#endif`,Uv=`
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
mat3 im = mat3( instanceMatrix );
transformedNormal = mat3( cross( im[ 1 ], im[ 2 ] ), cross( im[ 2 ], im[ 0 ] ), cross( im[ 0 ], im[ 1 ] ) ) * transformedNormal
  * ( dot( im[ 0 ], cross( im[ 1 ], im[ 2 ] ) ) < 0.0 ? -1.0 : 1.0 );
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif`;function xi(i,e,t){let n=i.indexOf(e);if(n<0||i.indexOf(e,n+1)>=0)throw new Error(`The shader must contain '${e}' exactly once.`);return i.slice(0,n)+t+i.slice(n+e.length)}function Fv(i){Object.assign(i.uniforms,this.userData.slotUniforms);let e=xi(i.vertexShader,"#include <common>",`#include <common>
${Tr}`);e=xi(e,"#include <color_vertex>",`${Ar}
vTint = state.rgb;`),e=xi(e,"#include <beginnormal_vertex>","vec3 objectNormal = ioOct( normal.xy );"),e=xi(e,"#include <defaultnormal_vertex>",Uv),e=xi(e,"#include <begin_vertex>","vec3 transformed = slotPosition;"),e=xi(e,"#include <clipping_planes_vertex>",`#include <clipping_planes_vertex>
${lh}`),i.vertexShader=e;let t=xi(i.fragmentShader,"#include <common>",`#include <common>
varying vec3 vTint;`);t=xi(t,"#include <color_fragment>","diffuseColor.rgb *= vTint;"),i.fragmentShader=t}function ch(i,e,t=!1){return i.userData.slotUniforms=e,i.onBeforeCompile=Fv,i.index0AttributeName="q",t&&(i.defines={IO_NO_HIDE_BRANCH:""}),i}var fh=["materials","textures","white","wireframe"],Bv=[245,158,11],Ov=[235,235,237],Rr=4294967295,ki=2048,hh=256,zv=16,uh=1024,kv=.1,Vv=8192,Hv=1.4,Za=2**-20,$a=17;function Gv(i,e){let[t,n,s,r,o,a,l,c,h]=i.subarray(e*12,e*12+9);return t*(o*h-a*c)-r*(n*h-s*c)+l*(n*a-s*o)<0}function Wv(){this.array=null}function En(i,e,t=!1,n=St){return new n(i,e,t).onUpload(Wv)}var Cr=class extends RangeError{constructor(e,t){super(`${e} drawable instances exceed the limit of ${t}.`),this.name="ModelTooLargeError",this.count=e,this.limit=t}},_f=(i,e)=>{for(let t=e*6;t<e*6+6;t++)if(!Number.isFinite(i[t]))return!1;return!0};function Xv(i,e,t,n){for(let s=0;s<24;s+=4){let r=i[s],o=i[s+1],a=i[s+2],l=i[s+3];if(r*e[t+(r>=0?3:0)]+o*e[t+(o>=0?4:1)]+a*e[t+(a>=0?5:2)]+l<-(n+Za*Math.abs(l)))return!0}return!1}function qv(i,e,{min:t,max:n},s){let r=e*12,o=e*6;if(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]){s.set(t,o),s.set(n,o+3);return}for(let a=0;a<3;a++){let l=i[r+a],c=i[r+a+3],h=i[r+a+6],d=i[r+a+9],u=l*t[0],p=l*n[0],g=c*t[1],_=c*n[1],m=h*t[2],f=h*n[2];s[o+a]=Math.min(u,p)+Math.min(g,_)+Math.min(m,f)+d,s[o+a+3]=Math.max(u,p)+Math.max(g,_)+Math.max(m,f)+d}}var Yv=i=>{let e=i.getHex(At);return[e>>16&255,e>>8&255,e&255]},Ir=class{constructor(e,t={}){let{meta:n}=e,s=n.instances,r=s.count,o=e.view(s.geometry),a=e.view(s.material),l=e.view(s.matrix);this.root=new Rt,this.elementCount=n.elements.length,this._elements=n.elements,this._meta=n,this._mode="materials",this._opacity=1,this._picking=!1,this._pickBounds=!0,this._instanceDetail=!0,this._pickFrustum=null,this._textures=new Map,this._elementOf=e.view(s.element).slice(),this._bucketOf=new Uint32Array(r),this._visible=new Uint8Array(r).fill(1),this._layers=new Map,this._layerHides=new Uint8Array(r),this._highlight=new Uint8Array(r),this._highlighted=[],this._tint=new Map,this._boxes=new Float32Array(r*6),this._minPixels=0,this._viewHeight=1,this.visibleCost=0;let c=!!t.noHideBranch;this.slotUniforms={slotInfo:{value:null},slotState:{value:null}},this._buckets=this._createBuckets(n,a,c),this._indexElements();for(let d=0;d<r;d++){let u=n.geometries[o[d]];if(!u)throw new rt(`Instance ${d} references missing geometry ${o[d]}.`);qv(l,d,u.bbox,this._boxes)}let h=Math.min(2**24-1,ki*(t.maxTextureSize??1/0),t.slotLimit??1/0);this._build(e,o,l,t,h);for(let d=0;d<r;d++)this._applyColor(d),this._draw(d);this._flush()}elementId(e){return this._checkElement(e),this._elements[e].id}setVisible(e,t){for(let n of e)for(let s of this.instancesOf(n))this._setInstanceVisible(s,t);this._changed("visibility")}showAll(){for(let e=0;e<this._visible.length;e++)this._setInstanceVisible(e,!0);this._changed("visibility")}setHiddenElements(e){let t=this._instanceMask(e);for(let n=0;n<t.length;n++){let s=t[n]===0;s!==(this._visible[n]===1)&&this._setInstanceVisible(n,s)}this._changed("visibility")}isolate(e){let t=this._instanceMask(e);for(let n=0;n<t.length;n++)this._setInstanceVisible(n,t[n]===1);this._changed("visibility")}setHighlighted(e){let t=this._highlighted;this._highlighted=[];for(let n of t)this._highlight[n]=0;for(let n of e)for(let s of this.instancesOf(n))this._highlight[s]=1,this._highlighted.push(s);for(let n of t)this._applyColor(n);for(let n of this._highlighted)this._applyColor(n);this._changed("appearance")}setTint(e,t){let n=t===null?null:Yv(new Fe(t));for(let s of e)for(let r of this.instancesOf(s))n?this._tint.set(r,n):this._tint.delete(r),this._applyColor(r);this._changed("appearance")}setLayerHidden(e,t,n){let s=this._layers.get(e);s||this._layers.set(e,s=new Uint8Array(this._visible.length));for(let r of t)for(let o of this.instancesOf(r))this._setLayerFlag(s,o,n);this._changed("visibility")}clearLayer(e){let t=this._layers.get(e);if(t){for(let n=0;n<t.length;n++)this._setLayerFlag(t,n,!1);this._layers.delete(e),this._changed("visibility")}}replaceLayerHidden(e,t){if(!t.length)return this.clearLayer(e);let n=this._instanceMask(t),s=this._layers.get(e);s||this._layers.set(e,s=new Uint8Array(this._visible.length));for(let r=0;r<n.length;r++)this._setLayerFlag(s,r,n[r]===1);this._changed("visibility")}_instanceMask(e){let t=new Uint8Array(this._visible.length);for(let n of e)for(let s of this.instancesOf(n))t[s]=1;return t}visibilityState(){return this._visible.map((e,t)=>this._shown(t)?1:0)}instancesOf(e){return this._checkElement(e),this._elementInstances.subarray(this._elementStart[e],this._elementStart[e+1])}isVisible(e){this._checkElement(e);for(let t=this._elementStart[e];t<this._elementStart[e+1];t++)if(this._shown(this._elementInstances[t]))return!0;return!1}get instanceCount(){return this._slotOf.length}get slotCount(){return this._slotInstance.length}instance(e){let t=this._slotOf[e];return t===Rr?{mesh:null,element:this._elementOf[e],slot:-1}:{mesh:this._units[this._slotUnit[t]].mesh,element:this._elementOf[e],slot:t}}instanceColor(e,t=new Fe){let n=this._slotOf[e],[s,r,o]=n===Rr?this._colorOf(e):this._state.image.data.subarray(n*4,n*4+3);return t.setRGB(s/255,r/255,o/255,At)}slotElement(e){return this._elementOf[this._slotInstance[e]]}slotInstance(e){return this._slotInstance[e]}withMaterial(e,t,{pickCamera:n=null,section:s=!1}={}){if(this._picking=!s,n&&this._pickBounds&&this._units.length>this._chunkCount){this._pickFrustum=th(n,this._planes);let{x:r,y:o,z:a}=n.position;this._pickViewPadding=Za*(Math.abs(r)+Math.abs(o)+Math.abs(a))}for(let r of this._units)r.mesh.material=e,s?(r.mesh.visible=(r.mesh.visible||!!r.lines?.visible)&&r.bucket.material.opacity>0,r.lines&&(r.lines.visible=!1)):this._showUnit(r);if(!s)for(let r of this._compactCells)this._cellAttributes(r,!1);try{return t()}finally{this._picking=!1,this._pickFrustum=null;for(let r of this._units)r.mesh.material=r.bucket.material,this._showUnit(r);for(let r of this._cut)r.mesh.visible=!1,r.lines&&(r.lines.visible=!1);if(!s)for(let r of this._compactCells)this._cellAttributes(r,!0)}}elementBox(e,t=new it){this._checkElement(e),t.makeEmpty();for(let n=this._elementStart[e];n<this._elementStart[e+1];n++)this._expandBox(t,this._elementInstances[n]);return t}visibleBox(){let e=new it;for(let t=0;t<this._visible.length;t++)this._shown(t)&&this._expandBox(e,t);return e}setDisplayMode(e){if(!fh.includes(e))throw new Error(`Unknown display mode '${e}'.`);let t=e==="white"!=(this._mode==="white");this._mode=e;for(let n of this._buckets){let s=e==="textures"&&n.texture!==null?this._texture(n.texture):null;for(let r of[n.material,n.wire])r.map!==s&&(r.map=s,r.needsUpdate=!0)}e==="wireframe"&&this._buildLines();for(let n of this._units)this._showUnit(n);if(t)for(let n=0;n<this._slotOf.length;n++)this._applyColor(n);this._changed("appearance")}setOpacity(e){if(!(e>=0&&e<=1))throw new RangeError(`Opacity must be within 0..1, got ${e}.`);this._opacity=e;for(let t of this._buckets)this._applyOpacity(t);this._changed("appearance")}get opacity(){return this._opacity}setDetail(e,t=1){this._minPixels=e,this._viewHeight=t;for(let s of this._cut)this._showUnit(s);this._cut.length=0;for(let s of this._detailCells)s.detailCount=null;this._detailCells.length=0;for(let s of this._compactCells)this._cellAttributes(s,!1);this._compactCells.length=0;let n=this._unitScale;this._unitScale=null,!(!(e>0)||!n)&&(this._cutInView=0,this._cutFrame=null,this._units.forEach((s,r)=>{if(!(!(n[r]>=0)||s.shown===0)){if(s.dirty&&this._span(s),s.cell&&this._detailUsesInstances){if(s.detailHigh>=e&&this._detailCell(s,e))return}else if(this._slotRadius[s.slotBase+s.first]*n[r]>=e)return;s.mesh.visible=!1,s.lines&&(s.lines.visible=!1),this._cut.push(s),this._cutInView+=dh(s,s.first,s.last+1)}}))}_detailCell(e,t){if(e.detailLow>=t)return e.detailCount=Math.min(e.detailEnd,e.last+1),this._detailCells.push(e),!0;let{slotBase:n,last:s}=e,r=this._detailIndices,o=0,a=!1,l=!1;for(let u=0;u<=s;u++){let p=this._pixels[n+u];p<0||(p<t?a=!0:(r[o++]=u,l||(l=a)))}if(!o)return!1;if(e.detailCount=l?o:r[o-1]+1,this._detailCells.push(e),!l)return!0;let c=e.compact??(e.compact=this._compactCell(e.n)),h=c.buffer.array,d=o>c.count;for(let u=0;u<o;u++){let p=u*$a,g=n+r[u];if(u<c.count&&h[p+16]===g)continue;let _=r[u]*12;for(let m=0;m<4;m++)for(let f=0;f<3;f++)h[p+m*4+f]=e.matrices[_+m*3+f];h[p+15]=1,h[p+16]=g,d=!0}return c.count=o,d&&(c.buffer.clearUpdateRanges(),c.buffer.addUpdateRange(0,o*$a),c.buffer.needsUpdate=!0),this._cellAttributes(e,!0),this._compactCells.push(e),!0}_compactCell(e){let t=new cr(new Float32Array(e*$a),$a);return t.setUsage(Ec),this._detailBytes+=t.array.byteLength,{buffer:t,count:0,matrix:new ps(t,16,0),slots:new ps(t,1,16)}}_cellAttributes(e,t){let n=t?e.compact.matrix:e.matrixAttribute;e.mesh.instanceMatrix=n,e.lines&&(e.lines.instanceMatrix=n),e.mesh.geometry.setAttribute("slotBase",t?e.compact.slots:e.slotAttribute)}get totalCost(){return this._totalCost}detailThreshold(e,t,n,s=!0){if(this.visibleCost=this._totalCost,this._detailUsesInstances=!1,this._totalCost<=n)return 0;this._detailUsesInstances=s&&this._instanceDetail&&this._chunkCount<this._units.length,e.updateMatrixWorld();let r=th(e,this._planes),o=ih(e,t,this._detailView),a=this._pixels,l=this._detailBins.fill(0),c=this._state.image.data,h=this._boxes,d=this._unitScale=new Float64Array(this._units.length).fill(-1),u=0;for(let p=0;p<this._units.length;p++){let g=this._units[p],_=g.sphere;if(g.shown===0||nh(r,_[0],_[1],_[2],_[3]))continue;let m=xf(o,_),f=o[7]?m>0?o[6]/m:1/0:o[6];d[p]=f;let M=g.cell&&this._detailUsesInstances,E=M&&!Kd(r,_[0],_[1],_[2],_[3]+g.pickPadding),b=g.slotBase+g.n,v=-1;if(M){let R=this._slotRadius[g.slotBase],L=this._slotRadius[b-1],N=m+_[3],U=Math.abs(o[3])*_[4]+Math.abs(o[4])*_[5]+Math.abs(o[5])*_[6],C=N-U-R,B=N+U-L,z=Math.fround(o[7]?C>0?R*o[6]/C:1/0:R*f),W=Math.fround(o[7]?B>0?L*o[6]/B:1/0:L*f);Ps(W)===Ps(z)&&(v=z)}if(v>=0&&!E){g.detailLow=g.detailHigh=v,g.detailEnd=g.n;let R=this._slotCost[g.slotBase]*g.shown;l[Ps(v)]+=R,u+=R;continue}let S=0,A=1/0,x=-1,T=0;for(let R=g.slotBase;R<b;R++){if(c[R*4+3]===0){M&&(a[R]=-1);continue}let L=this._slotRadius[R],N=f;if(M){let B=this._slotInstance[R]*6,z=(h[B]+h[B+3])*.5,W=(h[B+1]+h[B+4])*.5,F=(h[B+2]+h[B+5])*.5;if(E&&nh(r,z,W,F,L+g.pickPadding)){a[R]=-1;continue}if(T=R-g.slotBase+1,v>=0){S++;continue}let D=(z-o[0])*o[3]+(W-o[1])*o[4]+(F-o[2])*o[5]-L;N=o[7]?D>0?o[6]/D:1/0:o[6]}let U=N===1/0?1/0:Math.fround(L*N);M&&(a[R]=U,A=Math.min(A,U),x=Math.max(x,U));let C=this._slotCost[R];l[Ps(U)]+=C,u+=C}if(M){if(S){A=x=v;let R=S*this._slotCost[g.slotBase];l[Ps(v)]+=R,u+=R}g.detailLow=A,g.detailHigh=x,g.detailEnd=T}}return this.visibleCost=u,jd(l,u,n)}drawStats(){let e=-1/0;for(let r of this._units)e=Math.max(e,r.lastFrame);let t=0,n=this._cutFrame===e?this._cutInView:0,s=0;for(let r of this._units)r.lastFrame===e&&(n+=dh(r,r.first,Math.max(r.last+1,r.first)),t+=dh(r,r.first,Math.max(r.end,r.first)),s++);return{drawn:t,inView:n,draws:s}}drawnInstances(e){e.updateMatrixWorld();let t=new Un().setFromProjectionMatrix(new ke().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),n={info:{render:{frame:-1}}},s=new Ot,r=[];for(let o of this._units){let a=this._mode==="wireframe"&&!this._picking?o.lines:o.mesh;if(!(!a?.visible||!t.intersectsSphere(s.set(s.center.fromArray(o.sphere),o.sphere[3])))){a.onBeforeRender(n,null,e,a.geometry,a.material,null);for(let l=o.first;l<o.end;l++){let c=o.cell&&o.mesh.instanceMatrix===o.compact?.matrix?o.compact.slots.getX(l):o.slotBase+l;this._state.image.data[c*4+3]&&r.push(this._slotInstance[c])}}}return r.sort((o,a)=>o-a)}memory(){let e=this._units[this._chunkCount]?.slotBase??this._slotInstance.length;return{gpuBytes:this._mergedBytes+this._instancedBytes+this._lineBytes+this._stateBytes+this._detailBytes,mergedBytes:this._mergedBytes,instancedBytes:this._instancedBytes,stateBytes:this._stateBytes,lineBytes:this._lineBytes,detailBytes:this._detailBytes,detailSourceBytes:(this._slotInstance.length-e)*48,chunks:this._chunkCount,cells:this._units.length-this._chunkCount,mergedInstances:e,instancedInstances:this._slotInstance.length-e,triangles:this._triangles}}setClipping(e,t){for(let n of this._buckets)for(let s of[n.material,n.wire])s.clippingPlanes=e.length>0?e:null,s.clipIntersection=t,s.needsUpdate=!0;this._changed("clipping")}_build(e,t,n,s,r){let o=t.length,a=this._meta,l=new Map,c=F=>{let D=l.get(F);if(!D){let X=a.geometries[F],Z=e.view(X.indices),G=X.uvs?e.view(X.uvs):null;D=gf(Er(e,X),X.q??null,nf(e,X),Z,G),D.drawable=D.indices.length>=3&&D.min.every(Number.isFinite)&&D.max.every(Number.isFinite),l.set(F,D)}return D},h=new Uint8Array(o),d=new Float64Array(o*3),u=new Float32Array(o*3),p=new Uint32Array(o),g=new Float32Array(o),_=new Uint8Array(o),m=new Map,f=this._boxes;for(let F=0;F<o;F++){let D=c(t[F]);if(!D.drawable||!_f(f,F))continue;h[F]=pf(n,F,D,d.subarray(F*3,F*3+3)),_[F]=Gv(n,F)?1:0,p[F]=D.vertices;for(let G=0;G<3;G++)u[F*3+G]=(f[F*6+G]+f[F*6+3+G])/2;g[F]=Math.hypot(f[F*6+3]-f[F*6],f[F*6+4]-f[F*6+1],f[F*6+5]-f[F*6+2])/2;let X=(t[F]*2+_[F])*this._buckets.length+this._bucketOf[F],Z=m.get(X);Z||m.set(X,Z=[]),Z.push(F)}let E=[...m.keys()].sort((F,D)=>F-D).map(F=>{let D=m.get(F),X=c(t[D[0]]),Z=this._buckets[this._bucketOf[D[0]]].texture!==null,G=[0,1,2].every(le=>(X.max[le]-X.min[le])/wn<=65535),Q=X.vertices*((G?12:20)+(Z?8:0))+X.indices.length*(X.vertices>65535?4:2);return{k:D.length,bytes:Q,members:D,textured:Z}}),b=s.mergedCap??oh,v=s.minRepeats??zv;if(E.reduce((F,D)=>F+D.k*D.bytes,0)>b){let F=s.cellExtent==null?hf(f,p)*kv:this.visibleBox().getSize(new I).length()*s.cellExtent;for(let D of E)D.k<v||(D.leaves=cf(u,D.members,uh,F),D.cells=D.leaves.length)}let S=uf(E,{cap:b,minRepeats:v,perCell:uh,maxDraws:Vv}),A=new Map,x=new Uint32Array(a.geometries.length),T=[];E.forEach((F,D)=>{if(S[D]){for(let X of F.leaves)T.push({shape:F,members:ah(X,g)});return}for(let X of F.members){x[t[X]]++;let Z=this._bucketOf[X]*2+(h[X]===Ls?1:0),G=A.get(Z);G||A.set(Z,G=[]),G.push(X)}});let R=[];for(let F of[...A.keys()].sort((D,X)=>D-X))for(let D of af(u,p,A.get(F),s.chunkVertices??sf))R.push(ah(D,g));let L=[...R,...T.map(F=>F.members)].reduce((F,D)=>F+D.length,0);if(L>r)throw new Cr(L,r);let N=Math.max(1,Math.ceil(L/ki)),U=new Float32Array(ki*N*4);this._state=new Nn(new Uint8Array(ki*N*4),ki,N),this._state.colorSpace=At,this._state.onUpdate=()=>{this._fullPending=!1,this._pendingRanges=0},this._fullPending=!0,this._pendingRanges=0,this._dirty=new Uint32Array(hh),this._dirtyCount=0;let C=new Nn(U,ki,N,sn,Gt);C.needsUpdate=!0,C.onUpdate=()=>C.image.data=null,this.slotUniforms.slotInfo.value=C,this.slotUniforms.slotState.value=this._state,this._stateBytes=ki*N*20,this._slotOf=new Uint32Array(o).fill(Rr),this._slotInstance=new Uint32Array(L),this._slotUnit=new Uint32Array(L),this._slotRadius=new Float32Array(L),this._slotCost=new Float32Array(L),this._pixels=new Float32Array(L),this._planes=new Float64Array(24),this._detailView=new Float64Array(8),this._frameView=new Float64Array(8),this._frameViewAt=NaN,this._units=[],this._cut=[],this._detailCells=[],this._compactCells=[],this._detailIndices=new Uint16Array(uh),this._detailBins=new Float64Array(eh),this._detailBytes=0,this._unitScale=null,this._cutInView=0,this._cutFrame=-1,this._mergedBytes=0,this._instancedBytes=0,this._lineBytes=0;let B={matrices:n,geometryOf:t,mirrored:_,kind:h,origins:d,source:c,textured:!1};this._lineSources=new Map;let z=0;for(let F of R){let D=this._buckets[this._bucketOf[F[0]]];B.textured=D.texture!==null;let X=mf(F,B);for(let Z=0;Z<F.length;Z++){let G=F[Z],Q=z+Z;this._slotOf[G]=Q,this._slotInstance[Q]=G,this._slotUnit[Q]=this._units.length,this._slotRadius[Q]=g[G],this._slotCost[Q]=(X.indexStart[Z+1]-X.indexStart[Z])/3,U.set(X.origins.subarray(Z*3,Z*3+3),Q*4),U[Q*4+3]=X.steps[Z];let le=t[G];this._lineSources.has(le)||this._lineSources.set(le,c(le).indices.slice()),--x[le]===0&&l.delete(le)}this._units.push(this._chunk(D,F,z,X,_,t)),z+=F.length}this._lineMembers={mirrored:_,geometryOf:t.slice()},this._chunkCount=this._units.length,this._triangles=this._slotCost.reduce((F,D)=>F+D,0);let W=new Map;for(let{shape:F,members:D}of T){let X=D[0],Z=c(t[X]),G=W.get(F);if(!G){let Q=a.geometries[t[X]].bbox;G=this._shape(Z,_[X]===1,F.textured);let le=te=>Math.max(...te.map(Math.abs)),ce=Math.max(le(Z.min),le(Z.max));G.pickExtent=ce,G.pickPadding=Math.max(0,...Z.min.map((te,H)=>Q.min[H]-te),...Z.max.map((te,H)=>te-Q.max[H]))+(Z.q?Za*(le(Z.q.o)+65535*Math.abs(Z.q.s)):0),W.set(F,G)}for(let Q=0;Q<D.length;Q++){let le=D[Q],ce=z+Q;this._slotOf[le]=ce,this._slotInstance[ce]=le,this._slotUnit[ce]=this._units.length,this._slotRadius[ce]=g[le],this._slotCost[ce]=G.triangles*Hv,U.set(Z.q?Z.q.o:[0,0,0],ce*4),U[ce*4+3]=Z.q?Z.q.s:1}this._triangles+=G.triangles*D.length,this._units.push(this._cell(this._buckets[this._bucketOf[X]],D,z,G,n)),z+=D.length}this._totalCost=this._slotCost.reduce((F,D)=>F+D,0)}_shape(e,t,n){let s=e.vertices,r=e.q?new Uint16Array(s*4):new Float32Array(s*4);for(let h=0;h<s;h++)for(let d=0;d<3;d++)r[h*4+d]=e.positions[h*3+d];let o=e.oct?e.oct.slice():null;if(!o){let h=Ya(e);o=new Int16Array(s*2);for(let d=0;d<s;d++)wr(o,d*2,h[d*3],h[d*3+1],h[d*3+2])}let a=n?new Float32Array(s*2):null;a&&e.uvs&&a.set(e.uvs);let l=e.indices,c=qa(s,l.length);for(let h=0;h<l.length;h+=3)c[h]=l[h],c[h+1]=l[h+(t?2:1)],c[h+2]=l[h+(t?1:2)];return this._instancedBytes+=r.byteLength+o.byteLength+(a?.byteLength??0)+c.byteLength,{q:En(r,4),normal:En(o,2,!0),uv:a&&En(a,2),index:new St(c,1),triangles:l.length/3}}_cell(e,t,n,s,r){let o=t.length,a=new lt;a.setAttribute("q",s.q),a.setAttribute("position",s.q),a.setAttribute("normal",s.normal),s.uv&&a.setAttribute("uv",s.uv);let l=En(Float32Array.from({length:o},(m,f)=>n+f),1,!1,Kn);a.setAttribute("slotBase",l),a.setIndex(s.index);let c=vf(this._boxes,t),h=new Ot(new I(c[0],c[1],c[2]),c[3]);a.boundingSphere=h;let d=new ms(a,e.material,0),u=new Float32Array(o*16),p=new Float32Array(o*12),g=0;for(let m=0;m<o;m++){let f=t[m]*12;for(let M=0;M<4;M++)for(let E=0;E<3;E++){let b=r[f+M*3+E];u[m*16+M*4+E]=b,p[m*12+M*3+E]=b}u[m*16+15]=1;for(let M=f;M<f+3;M++){let E=Math.abs(r[M])+Math.abs(r[M+3])+Math.abs(r[M+6]),b=E*s.pickExtent+Math.abs(r[M+9]);g=Math.max(g,E*s.pickPadding+Za*b)}}d.instanceMatrix=En(u,16,!1,Kn),d.count=o,d.boundingSphere=h,this._instancedBytes+=o*68;let _={bucket:e,mesh:d,lines:null,slotBase:n,n:o,sphere:c,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!0,triangles:s.triangles,lastFrame:-1/0,pickPadding:Math.sqrt(3)*g,detailCount:null,detailLow:1/0,detailHigh:-1,detailEnd:0,compact:null,matrices:p,matrixAttribute:d.instanceMatrix,slotAttribute:l};return d.onBeforeRender=(m,f,M)=>this._range(_,m,M,d),d.visible=!1,this.root.add(d),_}_chunk(e,t,n,s,r,o){let a=new vs;a.instanceCount=1,a.setAttribute("q",En(s.q,4)),a.setAttribute("normal",En(s.o,2,!0)),s.uv&&a.setAttribute("uv",En(s.uv,2)),a.setAttribute("slotBase",En(new Float32Array([n]),1,!1,Kn)),a.setIndex(En(s.index,1));let l=vf(this._boxes,t);a.boundingSphere=new Ot(new I(l[0],l[1],l[2]),l[3]),this._mergedBytes+=s.q.byteLength+s.o.byteLength+(s.uv?.byteLength??0)+s.index.byteLength;let c=new xt(a,e.material),h={bucket:e,mesh:c,lines:null,slotBase:n,n:t.length,sphere:l,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!1,starts:s.indexStart,vertices:s.q.length/4,f32:s.q instanceof Float32Array,members:t.slice(),lastFrame:-1/0};return c.onBeforeRender=(d,u,p)=>this._range(h,d,p,c),c.visible=!1,this.root.add(c),h}_buildLines(){if(!this._lineSources)return;let{mirrored:e,geometryOf:t}=this._lineMembers;for(let n of this._units){if(n.cell){let h=n.mesh.geometry.index;n.lines=new ms(n.mesh.geometry,n.bucket.wire,0),n.lines.instanceMatrix=n.mesh.instanceMatrix,n.lines.boundingSphere=n.mesh.boundingSphere,n.lines.onBeforeRender=(d,u,p)=>this._range(n,d,p,n.lines),this._lineBytes+=h.count*2*h.array.BYTES_PER_ELEMENT,this.root.add(n.lines);continue}let s=n.starts[n.n],r=qa(n.vertices,s*2),o=0,a=0;for(let h of n.members){let d=this._lineSources.get(t[h]),u=e[h]===1;for(let p=0;p<d.length;p+=3){let g=d[p]+a,_=d[p+(u?2:1)]+a,m=d[p+(u?1:2)]+a;r[o++]=g,r[o++]=_,r[o++]=_,r[o++]=m,r[o++]=m,r[o++]=g}a+=this._meta.geometries[t[h]].positions.n/3}let l=n.mesh.geometry,c=new vs;c.instanceCount=1;for(let h of["q","normal","uv","slotBase"])l.attributes[h]&&c.setAttribute(h,l.attributes[h]);c.setIndex(En(r,1)),c.boundingSphere=l.boundingSphere,this._lineBytes+=r.byteLength,n.lines=new vn(c,n.bucket.material),n.lines.onBeforeRender=(h,d,u)=>this._range(n,h,u,n.lines),this.root.add(n.lines),n.members=null}this._lineSources=null,this._lineMembers=null}_range(e,t,n,s){e.dirty&&this._span(e);let r=e.last+1;if(this._picking){if(e.cell&&this._pickFrustum){let o=this._state.image.data,a=e.pickPadding+this._pickViewPadding;for(;r>0;){let l=e.slotBase+r-1;if(o[l*4+3]&&!Xv(this._pickFrustum,this._boxes,this._slotInstance[l]*6,a))break;r--}}}else if(e.cell&&e.detailCount!==null)r=e.detailCount;else if(this._minPixels>0&&r>e.first){let o=t.info.render.frame;o!==this._frameViewAt&&(ih(n,this._viewHeight,this._frameView),this._frameViewAt=o);let a=this._frameView,l=xf(a,e.sphere),c=a[7]?l>0?this._minPixels*l/a[6]:0:this._minPixels/a[6];r=Math.min(r,df(this._slotRadius,e.slotBase+e.first,e.slotBase+r,c)-e.slotBase)}if(e.cell)s.count=Math.max(r,0);else{let o=s.isLineSegments?2:1,[a,l]=ff(e.starts,e.first,r);s.geometry.setDrawRange(a*o,l*o)}this._picking||(e.end=r,e.lastFrame=t.info.render.frame,this._cutFrame===null&&this._minPixels>0&&(this._cutFrame=e.lastFrame))}_span(e){let t=this._state.image.data,n=0;for(;n<e.n&&t[(e.slotBase+n)*4+3]===0;)n++;let s=e.n-1;for(;s>=n&&t[(e.slotBase+s)*4+3]===0;)s--;e.first=n<e.n&&!e.cell?n:0,e.last=n<e.n?s:-1,e.dirty=!1}_showUnit(e){let t=this._mode==="wireframe"&&!this._picking;e.mesh.visible=e.shown>0&&!t,e.lines&&(e.lines.visible=e.shown>0&&t)}_createBuckets(e,t,n){let s=new Map,r=[];for(let o=0;o<t.length;o++){let a=t[o],l=s.get(a);if(!l){let c=e.materials[a];if(!c)throw new rt(`Instance ${o} references missing material ${a}.`);l={index:r.length,bytes:c.color.map(h=>Math.round(h*255)),opacity:c.opacity,texture:c.texture??null,material:ch(new xs({side:It}),this.slotUniforms,n),wire:ch(new xs({side:It,wireframe:!0}),this.slotUniforms,n)},this._applyOpacity(l),s.set(a,l),r.push(l)}this._bucketOf[o]=l.index}return r}_indexElements(){let e=new Uint32Array(this.elementCount+1);for(let s of this._elementOf)s>=0&&e[s+1]++;for(let s=0;s<this.elementCount;s++)e[s+1]+=e[s];let t=new Uint32Array(e[this.elementCount]),n=e.slice(0,this.elementCount);this._elementOf.forEach((s,r)=>{s>=0&&(t[n[s]++]=r)}),this._elementStart=e,this._elementInstances=t}_texture(e){let t=this._textures.get(e);if(!t){let n=this._meta.textures[e],s=new Image;t=new kt(s),t.colorSpace=At,t.wrapS=t.wrapT=as,t.repeat.set(1/n.sx,1/n.sy),s.onload=()=>{t.needsUpdate=!0,this._changed("appearance")},s.src=`data:${n.mime};base64,${n.data}`,this._textures.set(e,t)}return t}_applyOpacity(e){let t=e.opacity*this._opacity,n=t<1;for(let s of[e.material,e.wire])s.transparent!==n&&(s.needsUpdate=!0),s.opacity=t,s.transparent=n,s.depthWrite=!n}_colorOf(e){return this._highlight[e]?Bv:this._tint.get(e)??(this._mode==="white"?Ov:this._buckets[this._bucketOf[e]].bytes)}_applyColor(e){let t=this._slotOf[e];t!==Rr&&(this._state.image.data.set(this._colorOf(e),t*4),this._markDirty(t))}_setInstanceVisible(e,t){this._visible[e]=t?1:0,this._draw(e)}_setLayerFlag(e,t,n){e[t]!==(n?1:0)&&(e[t]=n?1:0,this._layerHides[t]+=n?1:-1,this._draw(t))}_shown(e){return this._visible[e]===1&&this._layerHides[e]===0}_draw(e){let t=this._slotOf[e];if(t===Rr)return;let n=this._shown(e)?255:0,s=this._state.image.data;if(s[t*4+3]===n)return;s[t*4+3]=n,this._markDirty(t);let r=this._units[this._slotUnit[t]];r.shown+=n?1:-1,r.dirty=!0,this._showUnit(r)}_markDirty(e){this._dirtyCount<hh&&(this._dirty[this._dirtyCount]=e),this._dirtyCount++}_flush(){let e=this._dirtyCount;if(e===0)return;this._dirtyCount=0;let t=this._state;if(this._fullPending||this._pendingRanges+e>hh)t.clearUpdateRanges(),this._fullPending=!0;else{for(let n=0;n<e;n++)t.addUpdateRange(this._dirty[n]*4,4);this._pendingRanges+=e}t.needsUpdate=!0}_checkElement(e){if(!Number.isInteger(e)||e<0||e>=this.elementCount)throw new RangeError(`Element index ${e} is out of range 0..${this.elementCount-1}.`)}_expandBox(e,t){if(!_f(this._boxes,t))return;let n=this._boxes,s=t*6;e.min.set(Math.min(e.min.x,n[s]),Math.min(e.min.y,n[s+1]),Math.min(e.min.z,n[s+2])),e.max.set(Math.max(e.max.x,n[s+3]),Math.max(e.max.y,n[s+4]),Math.max(e.max.z,n[s+5]))}_changed(e){this._flush(),this.root.dispatchEvent({type:"change",detail:{kind:e}})}};function dh(i,e,t){return t<=e?0:i.cell?(t-e)*i.triangles:(i.starts[t]-i.starts[e])/3}function xf(i,e){return(e[0]-i[0])*i[3]+(e[1]-i[1])*i[4]+(e[2]-i[2])*i[5]-e[3]}function vf(i,e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let a of e)for(let l=0;l<3;l++)t[l]=Math.min(t[l],i[a*6+l]),n[l]=Math.max(n[l],i[a*6+3+l]);let s=(n[0]-t[0])/2,r=(n[1]-t[1])/2,o=(n[2]-t[2])/2;return Float64Array.of((t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2,Math.hypot(s,r,o),s,r,o)}var ph=["en","ru","es","de","fr","pt","it","ja","ko","zh-Hans","zh-Hant"];function Ds(i){if(!(typeof i!="string"||!i))try{let e=new Intl.Locale(i),t=e.language==="zh"?`zh-${e.maximize().script}`:e.language;return ph.includes(t)?t:void 0}catch(e){if(!(e instanceof RangeError))throw e;return}}function yf(i=[]){return i.map(Ds).find(Boolean)??"en"}function bf(i){let e=new Intl.DisplayNames(i,{type:"language"}).of(i),t=new Option(e,i);return t.lang=i,t}function Mf(i){try{return globalThis.localStorage?.getItem(i)}catch(e){if(e.name!=="SecurityError")throw e;return null}}function Sf(i,e){try{globalThis.localStorage?.setItem(i,e)}catch(t){if(!["SecurityError","QuotaExceededError"].includes(t.name))throw t}}var wf={es:{elements:"Elementos",noGeometry:"Sin geometr\xEDa",contextLost:"Se perdi\xF3 el contexto gr\xE1fico. Recarga la p\xE1gina.",noWebGL:"Se requiere un navegador compatible con WebGL 2",badData:"No se pudieron leer los datos del modelo",tooLarge:"El modelo es demasiado grande: {count} objetos con geometr\xEDa, l\xEDmite de {limit}",selected:"Seleccionados",close:"Cerrar",elementGroup:"Elemento",id:"ID",category:"Categor\xEDa",type:"Tipo",level:"Nivel",sourceId:"ID de origen",link:"V\xEDnculo",panels:"Paneles","panel.model":"Modelo","panel.views":"Vistas","panel.sections":"Secciones","panel.clashes":"Interferencias","panel.bcf":"Temas BCF","bcf.noView":"No hay vistas disponibles","bcf.viewpoint":"Abrir vista {index}","bcf.components":"Componentes sin encontrar: {missing}; ambiguos: {ambiguous}","panel.timeliner":"Cronograma 4D","panel.links":"Archivos vinculados","group.navigation":"Navegaci\xF3n","group.sections":"Secciones","group.measure":"Medici\xF3n","group.display":"Visualizaci\xF3n","group.view":"Vista","tool.orbit":"Girar","tool.pan":"Desplazar","tool.fit":"Encuadrar todo","tool.projection":"Perspectiva / ortogr\xE1fica","tool.plane":"Plano de secci\xF3n","tool.box":"Caja de secci\xF3n","tool.resetSections":"Restablecer secciones","tool.distance":"Distancia","tool.displayMode":"Modo de visualizaci\xF3n","tool.grids":"Ejes de rejilla","tool.opacity":"Transparencia","tool.fullscreen":"Pantalla completa",contextMenu:"Men\xFA contextual","menu.properties":"Propiedades","menu.hide":"Ocultar","menu.isolate":"Aislar","menu.showAll":"Mostrar todo","menu.zoomTo":"Acercar al objeto","menu.sectionBox":"Caja de secci\xF3n alrededor del objeto","menu.copyId":"Copiar ID","menu.fitAll":"Encuadrar todo","menu.resetSections":"Restablecer secciones","menu.unavailable":"No disponible para este modelo",searchPlaceholder:"Buscar por nombre, tipo o ID\u2026",noCategory:"Sin categor\xEDa",noMatches:"Sin coincidencias","filters.title":"Filtros","filters.model":"Modelo de origen","filters.noLevel":"Sin nivel","filters.all":"Todos","filters.clear":"Borrar","filters.isolate":"Aislar coincidencias",idCopied:"ID copiado",copyFailed:"No se pudo copiar el ID",fullscreenUnavailable:"La pantalla completa no est\xE1 disponible","face.front":"Frontal","face.back":"Posterior","face.left":"Izquierda","face.right":"Derecha","face.top":"Superior","face.bottom":"Inferior","cube.title":"Cubo de vistas","cube.up":"Girar hacia arriba","cube.down":"Girar hacia abajo","cube.left":"Girar a la izquierda","cube.right":"Girar a la derecha","cube.home":"Vista inicial","sections.mode":"Modo de secci\xF3n","sections.planes":"Planos","sections.box":"Caja","sections.off":"Desactivado","sections.axis":"Eje","sections.addPlane":"A\xF1adir plano","sections.noPlanes":"Sin planos","sections.rotated":"girado","sections.custom":"Personalizado","sections.position":"Posici\xF3n del plano","sections.flip":"Invertir lado","sections.enabled":"Activado","sections.delete":"Eliminar plano","sections.keepInside":"Mostrar el interior","sections.cutInside":"Recortar el interior","sections.fitSelection":"Ajustar a la selecci\xF3n","sections.showGizmo":"Mostrar manipulador","sections.boxYaw":"Rotaci\xF3n alrededor de Z","sections.fill":"Rellenar caras cortadas","sections.fillUnavailable":"El relleno requiere un b\xFAfer de est\xE9ncil de WebGL","sections.maxPlanes":"M\xE1ximo 6 planos","unit.m":"m","display.materials":"Materiales","display.textures":"Texturas","display.white":"Blanco","display.wireframe":"Estructura al\xE1mbrica","display.background":"Color de fondo","display.backgroundReset":"Restablecer fondo","opacity.label":"Opacidad","opacity.value":"{value} %","views.tour":"Iniciar recorrido","views.stop":"Detener recorrido","clash.New":"Nueva","clash.Active":"Activa","clash.Reviewed":"Revisada","clash.Approved":"Aprobada","clash.Resolved":"Resuelta","task.construct":"Construcci\xF3n","task.demolish":"Demolici\xF3n","task.temporary":"Temporal","player.title":"Reproductor 4D","player.play":"Reproducir","player.pause":"Pausar","player.date":"Fecha del cronograma","player.speed":"Velocidad",truncated:"Se muestran {meshes} de {total} mallas. MaxMeshVertices ha recortado el modelo.",language:"Idioma",auto:"Autom\xE1tico",model3d:"Modelo 3D",retry:"Reintentar descargas",finding:"Buscando el elemento\u2026",streamLod:"{size} MiB \xB7 detalle completo {shown}/{total}",streamMesh:"{size} MiB \xB7 Grupos {visible} \xB7 Refinando {fallback}",streamTiles:"\xC1reas {areas} \xB7 Detalle {shown}/{total} \xB7 {size}/{limit} MiB"},de:{elements:"Elemente",noGeometry:"Keine Geometrie",contextLost:"Der Grafikkontext wurde verloren. Seite neu laden.",noWebGL:"Ein Browser mit WebGL 2 ist erforderlich",badData:"Die Modelldaten konnten nicht gelesen werden",tooLarge:"Das Modell ist zu gro\xDF: {count} Objekte mit Geometrie, maximal {limit}",selected:"Ausgew\xE4hlt",close:"Schlie\xDFen",elementGroup:"Element",id:"ID",category:"Kategorie",type:"Typ",level:"Ebene",sourceId:"Quell-ID",link:"Verkn\xFCpfung",panels:"Bedienfelder","panel.model":"Modell","panel.views":"Ansichten","panel.sections":"Schnitte","panel.clashes":"Kollisionen","panel.bcf":"BCF-Themen","bcf.noView":"Keine Ansicht verf\xFCgbar","bcf.viewpoint":"Ansicht {index} \xF6ffnen","bcf.components":"Fehlende Komponenten: {missing}, mehrdeutige: {ambiguous}","panel.timeliner":"4D-Terminplan","panel.links":"Verkn\xFCpfte Dateien","group.navigation":"Navigation","group.sections":"Schnitte","group.measure":"Messung","group.display":"Darstellung","group.view":"Ansicht","tool.orbit":"Drehen","tool.pan":"Verschieben","tool.fit":"Alles einpassen","tool.projection":"Perspektive / Orthogonal","tool.plane":"Schnittebene","tool.box":"Schnittbox","tool.resetSections":"Schnitte zur\xFCcksetzen","tool.distance":"Abstand","tool.displayMode":"Darstellungsmodus","tool.grids":"Rasterachsen","tool.opacity":"Transparenz","tool.fullscreen":"Vollbild",contextMenu:"Kontextmen\xFC","menu.properties":"Eigenschaften","menu.hide":"Ausblenden","menu.isolate":"Isolieren","menu.showAll":"Alles anzeigen","menu.zoomTo":"Auf Objekt zoomen","menu.sectionBox":"Schnittbox um das Objekt","menu.copyId":"ID kopieren","menu.fitAll":"Alles einpassen","menu.resetSections":"Schnitte zur\xFCcksetzen","menu.unavailable":"F\xFCr dieses Modell nicht verf\xFCgbar",searchPlaceholder:"Nach Name, Typ oder ID suchen\u2026",noCategory:"Ohne Kategorie",noMatches:"Keine Treffer","filters.title":"Filter","filters.model":"Quellmodell","filters.noLevel":"Ohne Ebene","filters.all":"Alle","filters.clear":"Zur\xFCcksetzen","filters.isolate":"Treffer isolieren",idCopied:"ID kopiert",copyFailed:"ID konnte nicht kopiert werden",fullscreenUnavailable:"Vollbild ist nicht verf\xFCgbar","face.front":"Vorne","face.back":"Hinten","face.left":"Links","face.right":"Rechts","face.top":"Oben","face.bottom":"Unten","cube.title":"Ansichtsw\xFCrfel","cube.up":"Nach oben drehen","cube.down":"Nach unten drehen","cube.left":"Nach links drehen","cube.right":"Nach rechts drehen","cube.home":"Ausgangsansicht","sections.mode":"Schnittmodus","sections.planes":"Ebenen","sections.box":"Box","sections.off":"Aus","sections.axis":"Achse","sections.addPlane":"Ebene hinzuf\xFCgen","sections.noPlanes":"Keine Schnittebenen","sections.rotated":"gedreht","sections.custom":"Benutzerdefiniert","sections.position":"Ebenenposition","sections.flip":"Seite wechseln","sections.enabled":"Ein","sections.delete":"Ebene l\xF6schen","sections.keepInside":"Innen anzeigen","sections.cutInside":"Innen ausschneiden","sections.fitSelection":"An Auswahl anpassen","sections.showGizmo":"Manipulator anzeigen","sections.boxYaw":"Drehung um Z","sections.fill":"Schnittfl\xE4chen f\xFCllen","sections.fillUnavailable":"Schnittf\xFCllung erfordert einen WebGL-Stencilpuffer","sections.maxPlanes":"Maximal 6 Ebenen","unit.m":"m","display.materials":"Materialien","display.textures":"Texturen","display.white":"Wei\xDF","display.wireframe":"Drahtmodell","display.background":"Hintergrundfarbe","display.backgroundReset":"Hintergrund zur\xFCcksetzen","opacity.label":"Deckkraft","opacity.value":"{value} %","views.tour":"Rundgang starten","views.stop":"Rundgang stoppen","clash.New":"Neu","clash.Active":"Aktiv","clash.Reviewed":"Gepr\xFCft","clash.Approved":"Genehmigt","clash.Resolved":"Behoben","task.construct":"Bau","task.demolish":"Abbruch","task.temporary":"Tempor\xE4r","player.title":"4D-Wiedergabe","player.play":"Abspielen","player.pause":"Pausieren","player.date":"Terminplandatum","player.speed":"Geschwindigkeit",truncated:"{meshes} von {total} Netzen werden angezeigt. MaxMeshVertices hat das Modell gek\xFCrzt.",language:"Sprache",auto:"Automatisch",model3d:"3D-Modell",retry:"Downloads wiederholen",finding:"Element wird gesucht\u2026",streamLod:"{size} MiB \xB7 volles Detail {shown}/{total}",streamMesh:"{size} MiB \xB7 Cluster {visible} \xB7 Verfeinerung {fallback}",streamTiles:"Bereiche {areas} \xB7 Detail {shown}/{total} \xB7 {size}/{limit} MiB"},fr:{elements:"\xC9l\xE9ments",noGeometry:"Aucune g\xE9om\xE9trie",contextLost:"Le contexte graphique a \xE9t\xE9 perdu. Rechargez la page.",noWebGL:"Un navigateur compatible avec WebGL 2 est n\xE9cessaire",badData:"Impossible de lire les donn\xE9es du mod\xE8le",tooLarge:"Le mod\xE8le est trop volumineux : {count} objets avec g\xE9om\xE9trie, limite de {limit}",selected:"S\xE9lectionn\xE9s",close:"Fermer",elementGroup:"\xC9l\xE9ment",id:"ID",category:"Cat\xE9gorie",type:"Type",level:"Niveau",sourceId:"ID source",link:"Lien",panels:"Panneaux","panel.model":"Mod\xE8le","panel.views":"Vues","panel.sections":"Coupes","panel.clashes":"Conflits","panel.bcf":"Sujets BCF","bcf.noView":"Aucune vue disponible","bcf.viewpoint":"Ouvrir le point de vue {index}","bcf.components":"Composants manquants : {missing}, ambigus : {ambiguous}","panel.timeliner":"Planning 4D","panel.links":"Fichiers li\xE9s","group.navigation":"Navigation","group.sections":"Coupes","group.measure":"Mesure","group.display":"Affichage","group.view":"Vue","tool.orbit":"Orbite","tool.pan":"Panoramique","tool.fit":"Cadrer tout","tool.projection":"Perspective / orthographique","tool.plane":"Plan de coupe","tool.box":"Zone de coupe","tool.resetSections":"R\xE9initialiser les coupes","tool.distance":"Distance","tool.displayMode":"Mode d\u2019affichage","tool.grids":"Axes de quadrillage","tool.opacity":"Transparence","tool.fullscreen":"Plein \xE9cran",contextMenu:"Menu contextuel","menu.properties":"Propri\xE9t\xE9s","menu.hide":"Masquer","menu.isolate":"Isoler","menu.showAll":"Tout afficher","menu.zoomTo":"Zoom sur l\u2019objet","menu.sectionBox":"Zone de coupe autour de l\u2019objet","menu.copyId":"Copier l\u2019ID","menu.fitAll":"Cadrer tout","menu.resetSections":"R\xE9initialiser les coupes","menu.unavailable":"Indisponible pour ce mod\xE8le",searchPlaceholder:"Rechercher par nom, type ou ID\u2026",noCategory:"Sans cat\xE9gorie",noMatches:"Aucun r\xE9sultat","filters.title":"Filtres","filters.model":"Mod\xE8le source","filters.noLevel":"Sans niveau","filters.all":"Tous","filters.clear":"Effacer","filters.isolate":"Isoler les r\xE9sultats",idCopied:"ID copi\xE9",copyFailed:"Impossible de copier l\u2019ID",fullscreenUnavailable:"Le plein \xE9cran est indisponible","face.front":"Avant","face.back":"Arri\xE8re","face.left":"Gauche","face.right":"Droite","face.top":"Dessus","face.bottom":"Dessous","cube.title":"Cube de navigation","cube.up":"Pivoter vers le haut","cube.down":"Pivoter vers le bas","cube.left":"Pivoter \xE0 gauche","cube.right":"Pivoter \xE0 droite","cube.home":"Vue initiale","sections.mode":"Mode de coupe","sections.planes":"Plans","sections.box":"Zone","sections.off":"D\xE9sactiv\xE9","sections.axis":"Axe","sections.addPlane":"Ajouter un plan","sections.noPlanes":"Aucun plan","sections.rotated":"pivot\xE9","sections.custom":"Personnalis\xE9","sections.position":"Position du plan","sections.flip":"Inverser le c\xF4t\xE9","sections.enabled":"Activ\xE9","sections.delete":"Supprimer le plan","sections.keepInside":"Afficher l\u2019int\xE9rieur","sections.cutInside":"D\xE9couper l\u2019int\xE9rieur","sections.fitSelection":"Ajuster \xE0 la s\xE9lection","sections.showGizmo":"Afficher le manipulateur","sections.boxYaw":"Rotation autour de Z","sections.fill":"Remplir les faces coup\xE9es","sections.fillUnavailable":"Le remplissage n\xE9cessite un tampon de stencil WebGL","sections.maxPlanes":"6 plans maximum","unit.m":"m","display.materials":"Mat\xE9riaux","display.textures":"Textures","display.white":"Blanc","display.wireframe":"Filaire","display.background":"Couleur de fond","display.backgroundReset":"R\xE9initialiser le fond","opacity.label":"Opacit\xE9","opacity.value":"{value} %","views.tour":"D\xE9marrer la visite","views.stop":"Arr\xEAter la visite","clash.New":"Nouveau","clash.Active":"Actif","clash.Reviewed":"Examin\xE9","clash.Approved":"Approuv\xE9","clash.Resolved":"R\xE9solu","task.construct":"Construction","task.demolish":"D\xE9molition","task.temporary":"Temporaire","player.title":"Lecteur 4D","player.play":"Lire","player.pause":"Mettre en pause","player.date":"Date du planning","player.speed":"Vitesse",truncated:"{meshes} maillages sur {total} sont affich\xE9s. MaxMeshVertices a tronqu\xE9 le mod\xE8le.",language:"Langue",auto:"Automatique",model3d:"Mod\xE8le 3D",retry:"Relancer les t\xE9l\xE9chargements",finding:"Recherche de l\u2019\xE9l\xE9ment\u2026",streamLod:"{size} Mio \xB7 d\xE9tail complet {shown}/{total}",streamMesh:"{size} Mio \xB7 Groupes {visible} \xB7 Affinage {fallback}",streamTiles:"Zones {areas} \xB7 D\xE9tail {shown}/{total} \xB7 {size}/{limit} Mio"},pt:{elements:"Elementos",noGeometry:"Sem geometria",contextLost:"O contexto gr\xE1fico foi perdido. Recarregue a p\xE1gina.",noWebGL:"\xC9 necess\xE1rio um navegador com WebGL 2",badData:"N\xE3o foi poss\xEDvel ler os dados do modelo",tooLarge:"O modelo \xE9 grande demais: {count} objetos com geometria, limite de {limit}",selected:"Selecionados",close:"Fechar",elementGroup:"Elemento",id:"ID",category:"Categoria",type:"Tipo",level:"N\xEDvel",sourceId:"ID de origem",link:"V\xEDnculo",panels:"Pain\xE9is","panel.model":"Modelo","panel.views":"Vistas","panel.sections":"Cortes","panel.clashes":"Interfer\xEAncias","panel.bcf":"T\xF3picos BCF","bcf.noView":"Nenhuma vista dispon\xEDvel","bcf.viewpoint":"Abrir vista {index}","bcf.components":"Componentes ausentes: {missing}, amb\xEDguos: {ambiguous}","panel.timeliner":"Cronograma 4D","panel.links":"Arquivos vinculados","group.navigation":"Navega\xE7\xE3o","group.sections":"Cortes","group.measure":"Medi\xE7\xE3o","group.display":"Exibi\xE7\xE3o","group.view":"Vista","tool.orbit":"Girar","tool.pan":"Deslocar","tool.fit":"Enquadrar tudo","tool.projection":"Perspectiva / ortogr\xE1fica","tool.plane":"Plano de corte","tool.box":"Caixa de corte","tool.resetSections":"Redefinir cortes","tool.distance":"Dist\xE2ncia","tool.displayMode":"Modo de exibi\xE7\xE3o","tool.grids":"Eixos","tool.opacity":"Transpar\xEAncia","tool.fullscreen":"Tela cheia",contextMenu:"Menu de contexto","menu.properties":"Propriedades","menu.hide":"Ocultar","menu.isolate":"Isolar","menu.showAll":"Mostrar tudo","menu.zoomTo":"Aproximar do objeto","menu.sectionBox":"Caixa de corte ao redor do objeto","menu.copyId":"Copiar ID","menu.fitAll":"Enquadrar tudo","menu.resetSections":"Redefinir cortes","menu.unavailable":"Indispon\xEDvel para este modelo",searchPlaceholder:"Buscar por nome, tipo ou ID\u2026",noCategory:"Sem categoria",noMatches:"Nenhum resultado","filters.title":"Filtros","filters.model":"Modelo de origem","filters.noLevel":"Sem n\xEDvel","filters.all":"Todos","filters.clear":"Limpar","filters.isolate":"Isolar resultados",idCopied:"ID copiado",copyFailed:"N\xE3o foi poss\xEDvel copiar o ID",fullscreenUnavailable:"A tela cheia est\xE1 indispon\xEDvel","face.front":"Frente","face.back":"Tr\xE1s","face.left":"Esquerda","face.right":"Direita","face.top":"Topo","face.bottom":"Base","cube.title":"Cubo de vistas","cube.up":"Girar para cima","cube.down":"Girar para baixo","cube.left":"Girar para a esquerda","cube.right":"Girar para a direita","cube.home":"Vista inicial","sections.mode":"Modo de corte","sections.planes":"Planos","sections.box":"Caixa","sections.off":"Desativado","sections.axis":"Eixo","sections.addPlane":"Adicionar plano","sections.noPlanes":"Sem planos","sections.rotated":"girado","sections.custom":"Personalizado","sections.position":"Posi\xE7\xE3o do plano","sections.flip":"Inverter lado","sections.enabled":"Ativado","sections.delete":"Excluir plano","sections.keepInside":"Mostrar interior","sections.cutInside":"Recortar interior","sections.fitSelection":"Ajustar \xE0 sele\xE7\xE3o","sections.showGizmo":"Mostrar manipulador","sections.boxYaw":"Rota\xE7\xE3o em torno de Z","sections.fill":"Preencher faces de corte","sections.fillUnavailable":"O preenchimento requer um buffer de stencil WebGL","sections.maxPlanes":"At\xE9 6 planos","unit.m":"m","display.materials":"Materiais","display.textures":"Texturas","display.white":"Branco","display.wireframe":"Aramado","display.background":"Cor de fundo","display.backgroundReset":"Redefinir fundo","opacity.label":"Opacidade","opacity.value":"{value}%","views.tour":"Iniciar percurso","views.stop":"Parar percurso","clash.New":"Nova","clash.Active":"Ativa","clash.Reviewed":"Revisada","clash.Approved":"Aprovada","clash.Resolved":"Resolvida","task.construct":"Constru\xE7\xE3o","task.demolish":"Demoli\xE7\xE3o","task.temporary":"Tempor\xE1ria","player.title":"Reprodutor 4D","player.play":"Reproduzir","player.pause":"Pausar","player.date":"Data do cronograma","player.speed":"Velocidade",truncated:"Exibindo {meshes} de {total} malhas. MaxMeshVertices limitou o modelo.",language:"Idioma",auto:"Autom\xE1tico",model3d:"Modelo 3D",retry:"Tentar baixar novamente",finding:"Buscando o elemento\u2026",streamLod:"{size} MiB \xB7 detalhe completo {shown}/{total}",streamMesh:"{size} MiB \xB7 Grupos {visible} \xB7 Refinando {fallback}",streamTiles:"\xC1reas {areas} \xB7 Detalhe {shown}/{total} \xB7 {size}/{limit} MiB"},it:{elements:"Elementi",noGeometry:"Nessuna geometria",contextLost:"Il contesto grafico \xE8 stato perso. Ricarica la pagina.",noWebGL:"\xC8 necessario un browser con WebGL 2",badData:"Impossibile leggere i dati del modello",tooLarge:"Il modello \xE8 troppo grande: {count} oggetti con geometria, limite di {limit}",selected:"Selezionati",close:"Chiudi",elementGroup:"Elemento",id:"ID",category:"Categoria",type:"Tipo",level:"Livello",sourceId:"ID origine",link:"Collegamento",panels:"Pannelli","panel.model":"Modello","panel.views":"Viste","panel.sections":"Sezioni","panel.clashes":"Interferenze","panel.bcf":"Argomenti BCF","bcf.noView":"Nessuna vista disponibile","bcf.viewpoint":"Apri punto di vista {index}","bcf.components":"Componenti mancanti: {missing}, ambigui: {ambiguous}","panel.timeliner":"Cronoprogramma 4D","panel.links":"File collegati","group.navigation":"Navigazione","group.sections":"Sezioni","group.measure":"Misura","group.display":"Visualizzazione","group.view":"Vista","tool.orbit":"Orbita","tool.pan":"Sposta vista","tool.fit":"Inquadra tutto","tool.projection":"Prospettiva / ortogonale","tool.plane":"Piano di sezione","tool.box":"Riquadro di sezione","tool.resetSections":"Ripristina sezioni","tool.distance":"Distanza","tool.displayMode":"Modalit\xE0 di visualizzazione","tool.grids":"Assi di griglia","tool.opacity":"Trasparenza","tool.fullscreen":"Schermo intero",contextMenu:"Menu contestuale","menu.properties":"Propriet\xE0","menu.hide":"Nascondi","menu.isolate":"Isola","menu.showAll":"Mostra tutto","menu.zoomTo":"Zoom sull\u2019oggetto","menu.sectionBox":"Riquadro di sezione attorno all\u2019oggetto","menu.copyId":"Copia ID","menu.fitAll":"Inquadra tutto","menu.resetSections":"Ripristina sezioni","menu.unavailable":"Non disponibile per questo modello",searchPlaceholder:"Cerca per nome, tipo o ID\u2026",noCategory:"Senza categoria",noMatches:"Nessun risultato","filters.title":"Filtri","filters.model":"Modello di origine","filters.noLevel":"Senza livello","filters.all":"Tutti","filters.clear":"Cancella","filters.isolate":"Isola risultati",idCopied:"ID copiato",copyFailed:"Impossibile copiare l\u2019ID",fullscreenUnavailable:"Lo schermo intero non \xE8 disponibile","face.front":"Fronte","face.back":"Retro","face.left":"Sinistra","face.right":"Destra","face.top":"Alto","face.bottom":"Basso","cube.title":"Cubo di navigazione","cube.up":"Ruota verso l\u2019alto","cube.down":"Ruota verso il basso","cube.left":"Ruota a sinistra","cube.right":"Ruota a destra","cube.home":"Vista iniziale","sections.mode":"Modalit\xE0 di sezione","sections.planes":"Piani","sections.box":"Riquadro","sections.off":"Disattivato","sections.axis":"Asse","sections.addPlane":"Aggiungi piano","sections.noPlanes":"Nessun piano","sections.rotated":"ruotato","sections.custom":"Personalizzato","sections.position":"Posizione del piano","sections.flip":"Inverti lato","sections.enabled":"Attivato","sections.delete":"Elimina piano","sections.keepInside":"Mostra interno","sections.cutInside":"Taglia interno","sections.fitSelection":"Adatta alla selezione","sections.showGizmo":"Mostra manipolatore","sections.boxYaw":"Rotazione attorno a Z","sections.fill":"Riempi facce tagliate","sections.fillUnavailable":"Il riempimento richiede uno stencil buffer WebGL","sections.maxPlanes":"Al massimo 6 piani","unit.m":"m","display.materials":"Materiali","display.textures":"Texture","display.white":"Bianco","display.wireframe":"Fil di ferro","display.background":"Colore di sfondo","display.backgroundReset":"Ripristina sfondo","opacity.label":"Opacit\xE0","opacity.value":"{value}%","views.tour":"Avvia percorso","views.stop":"Interrompi percorso","clash.New":"Nuova","clash.Active":"Attiva","clash.Reviewed":"Revisionata","clash.Approved":"Approvata","clash.Resolved":"Risolta","task.construct":"Costruzione","task.demolish":"Demolizione","task.temporary":"Temporanea","player.title":"Riproduttore 4D","player.play":"Riproduci","player.pause":"Pausa","player.date":"Data pianificata","player.speed":"Velocit\xE0",truncated:"Sono mostrate {meshes} mesh su {total}. MaxMeshVertices ha troncato il modello.",language:"Lingua",auto:"Automatico",model3d:"Modello 3D",retry:"Riprova download",finding:"Ricerca dell\u2019elemento\u2026",streamLod:"{size} MiB \xB7 dettaglio completo {shown}/{total}",streamMesh:"{size} MiB \xB7 Gruppi {visible} \xB7 In affinamento {fallback}",streamTiles:"Aree {areas} \xB7 Dettaglio {shown}/{total} \xB7 {size}/{limit} MiB"},ja:{elements:"\u8981\u7D20",noGeometry:"\u30B8\u30AA\u30E1\u30C8\u30EA\u304C\u3042\u308A\u307E\u305B\u3093",contextLost:"\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30B9\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u5931\u308F\u308C\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",noWebGL:"WebGL 2 \u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u30FC\u304C\u5FC5\u8981\u3067\u3059",badData:"\u30E2\u30C7\u30EB\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F",tooLarge:"\u30E2\u30C7\u30EB\u304C\u5927\u304D\u3059\u304E\u307E\u3059\u3002\u30B8\u30AA\u30E1\u30C8\u30EA\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F {count} \u500B\u3067\u3001\u4E0A\u9650\u306F {limit} \u500B\u3067\u3059",selected:"\u9078\u629E\u6E08\u307F",close:"\u9589\u3058\u308B",elementGroup:"\u8981\u7D20",id:"ID",category:"\u30AB\u30C6\u30B4\u30EA",type:"\u30BF\u30A4\u30D7",level:"\u30EC\u30D9\u30EB",sourceId:"\u30BD\u30FC\u30B9 ID",link:"\u30EA\u30F3\u30AF",panels:"\u30D1\u30CD\u30EB","panel.model":"\u30E2\u30C7\u30EB","panel.views":"\u30D3\u30E5\u30FC","panel.sections":"\u65AD\u9762","panel.clashes":"\u5E72\u6E09","panel.bcf":"BCF \u30C8\u30D4\u30C3\u30AF","bcf.noView":"\u5229\u7528\u53EF\u80FD\u306A\u30D3\u30E5\u30FC\u304C\u3042\u308A\u307E\u305B\u3093","bcf.viewpoint":"\u8996\u70B9 {index} \u3092\u958B\u304F","bcf.components":"\u672A\u691C\u51FA\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8: {missing}\u3001\u7279\u5B9A\u3067\u304D\u306A\u3044\u3082\u306E: {ambiguous}","panel.timeliner":"4D \u5DE5\u7A0B\u8868","panel.links":"\u30EA\u30F3\u30AF\u30D5\u30A1\u30A4\u30EB","group.navigation":"\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3","group.sections":"\u65AD\u9762","group.measure":"\u8A08\u6E2C","group.display":"\u8868\u793A","group.view":"\u30D3\u30E5\u30FC","tool.orbit":"\u30AA\u30FC\u30D3\u30C3\u30C8","tool.pan":"\u753B\u9762\u79FB\u52D5","tool.fit":"\u5168\u4F53\u8868\u793A","tool.projection":"\u900F\u8996\u6295\u5F71 / \u5E73\u884C\u6295\u5F71","tool.plane":"\u65AD\u9762\u5E73\u9762","tool.box":"\u65AD\u9762\u30DC\u30C3\u30AF\u30B9","tool.resetSections":"\u65AD\u9762\u3092\u30EA\u30BB\u30C3\u30C8","tool.distance":"\u8DDD\u96E2","tool.displayMode":"\u8868\u793A\u30E2\u30FC\u30C9","tool.grids":"\u901A\u308A\u82AF","tool.opacity":"\u900F\u660E\u5EA6","tool.fullscreen":"\u5168\u753B\u9762\u8868\u793A",contextMenu:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC","menu.properties":"\u30D7\u30ED\u30D1\u30C6\u30A3","menu.hide":"\u975E\u8868\u793A","menu.isolate":"\u5206\u96E2\u8868\u793A","menu.showAll":"\u3059\u3079\u3066\u8868\u793A","menu.zoomTo":"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30BA\u30FC\u30E0","menu.sectionBox":"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u56F2\u3080\u65AD\u9762\u30DC\u30C3\u30AF\u30B9","menu.copyId":"ID \u3092\u30B3\u30D4\u30FC","menu.fitAll":"\u5168\u4F53\u8868\u793A","menu.resetSections":"\u65AD\u9762\u3092\u30EA\u30BB\u30C3\u30C8","menu.unavailable":"\u3053\u306E\u30E2\u30C7\u30EB\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093",searchPlaceholder:"\u540D\u524D\u3001\u30BF\u30A4\u30D7\u3001ID \u3067\u691C\u7D22\u2026",noCategory:"\u30AB\u30C6\u30B4\u30EA\u306A\u3057",noMatches:"\u4E00\u81F4\u3059\u308B\u9805\u76EE\u304C\u3042\u308A\u307E\u305B\u3093","filters.title":"\u30D5\u30A3\u30EB\u30BF\u30FC","filters.model":"\u30BD\u30FC\u30B9\u30E2\u30C7\u30EB","filters.noLevel":"\u30EC\u30D9\u30EB\u306A\u3057","filters.all":"\u3059\u3079\u3066","filters.clear":"\u30AF\u30EA\u30A2","filters.isolate":"\u4E00\u81F4\u3057\u305F\u9805\u76EE\u3092\u5206\u96E2\u8868\u793A",idCopied:"ID \u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",copyFailed:"ID \u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",fullscreenUnavailable:"\u5168\u753B\u9762\u8868\u793A\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093","face.front":"\u6B63\u9762","face.back":"\u80CC\u9762","face.left":"\u5DE6","face.right":"\u53F3","face.top":"\u4E0A","face.bottom":"\u4E0B","cube.title":"\u30D3\u30E5\u30FC\u30AD\u30E5\u30FC\u30D6","cube.up":"\u4E0A\u306B\u56DE\u8EE2","cube.down":"\u4E0B\u306B\u56DE\u8EE2","cube.left":"\u5DE6\u306B\u56DE\u8EE2","cube.right":"\u53F3\u306B\u56DE\u8EE2","cube.home":"\u521D\u671F\u30D3\u30E5\u30FC","sections.mode":"\u65AD\u9762\u30E2\u30FC\u30C9","sections.planes":"\u5E73\u9762","sections.box":"\u30DC\u30C3\u30AF\u30B9","sections.off":"\u30AA\u30D5","sections.axis":"\u8EF8","sections.addPlane":"\u5E73\u9762\u3092\u8FFD\u52A0","sections.noPlanes":"\u5E73\u9762\u306A\u3057","sections.rotated":"\u56DE\u8EE2\u6E08\u307F","sections.custom":"\u30AB\u30B9\u30BF\u30E0","sections.position":"\u5E73\u9762\u306E\u4F4D\u7F6E","sections.flip":"\u53CD\u5BFE\u5074\u306B\u5207\u308A\u66FF\u3048","sections.enabled":"\u30AA\u30F3","sections.delete":"\u5E73\u9762\u3092\u524A\u9664","sections.keepInside":"\u5185\u5074\u3092\u8868\u793A","sections.cutInside":"\u5185\u5074\u3092\u5207\u308A\u53D6\u308B","sections.fitSelection":"\u9078\u629E\u7BC4\u56F2\u306B\u5408\u308F\u305B\u308B","sections.showGizmo":"\u64CD\u4F5C\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A","sections.boxYaw":"Z \u8EF8\u307E\u308F\u308A\u306E\u56DE\u8EE2","sections.fill":"\u5207\u65AD\u9762\u3092\u5857\u308A\u3064\u3076\u3059","sections.fillUnavailable":"\u5857\u308A\u3064\u3076\u3057\u306B\u306F WebGL \u306E\u30B9\u30C6\u30F3\u30B7\u30EB\u30D0\u30C3\u30D5\u30A1\u30FC\u304C\u5FC5\u8981\u3067\u3059","sections.maxPlanes":"\u6700\u5927 6 \u5E73\u9762","unit.m":"m","display.materials":"\u30DE\u30C6\u30EA\u30A2\u30EB","display.textures":"\u30C6\u30AF\u30B9\u30C1\u30E3","display.white":"\u767D","display.wireframe":"\u30EF\u30A4\u30E4\u30FC\u30D5\u30EC\u30FC\u30E0","display.background":"\u80CC\u666F\u8272","display.backgroundReset":"\u80CC\u666F\u3092\u30EA\u30BB\u30C3\u30C8","opacity.label":"\u4E0D\u900F\u660E\u5EA6","opacity.value":"{value}%","views.tour":"\u30D3\u30E5\u30FC\u5DE1\u56DE\u3092\u518D\u751F","views.stop":"\u30D3\u30E5\u30FC\u5DE1\u56DE\u3092\u505C\u6B62","clash.New":"\u65B0\u898F","clash.Active":"\u30A2\u30AF\u30C6\u30A3\u30D6","clash.Reviewed":"\u78BA\u8A8D\u6E08\u307F","clash.Approved":"\u627F\u8A8D\u6E08\u307F","clash.Resolved":"\u89E3\u6C7A\u6E08\u307F","task.construct":"\u5EFA\u8A2D","task.demolish":"\u89E3\u4F53","task.temporary":"\u4EEE\u8A2D","player.title":"4D \u30D7\u30EC\u30FC\u30E4\u30FC","player.play":"\u518D\u751F","player.pause":"\u4E00\u6642\u505C\u6B62","player.date":"\u5DE5\u7A0B\u65E5","player.speed":"\u901F\u5EA6",truncated:"{total} \u500B\u4E2D {meshes} \u500B\u306E\u30E1\u30C3\u30B7\u30E5\u3092\u8868\u793A\u3002MaxMeshVertices \u306E\u8A2D\u5B9A\u3067\u30E2\u30C7\u30EB\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u307E\u3059\u3002",language:"\u8A00\u8A9E",auto:"\u81EA\u52D5",model3d:"3D \u30E2\u30C7\u30EB",retry:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3092\u518D\u8A66\u884C",finding:"\u8981\u7D20\u3092\u691C\u7D22\u4E2D\u2026",streamLod:"{size} MiB \xB7 \u8A73\u7D30\u8868\u793A {shown}/{total}",streamMesh:"{size} MiB \xB7 \u30AF\u30E9\u30B9\u30BF\u30FC {visible} \xB7 \u8A73\u7D30\u5316\u4E2D {fallback}",streamTiles:"\u9818\u57DF {areas} \xB7 \u8A73\u7D30\u8868\u793A {shown}/{total} \xB7 {size}/{limit} MiB"},ko:{elements:"\uC694\uC18C",noGeometry:"\uD615\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",contextLost:"\uADF8\uB798\uD53D \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uC190\uC2E4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C \uACE0\uCE58\uC138\uC694.",noWebGL:"WebGL 2\uB97C \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4",badData:"\uBAA8\uB378 \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",tooLarge:"\uBAA8\uB378\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4. \uD615\uC0C1\uC774 \uC788\uB294 \uAC1D\uCCB4 {count}\uAC1C, \uCD5C\uB300 {limit}\uAC1C",selected:"\uC120\uD0DD\uB428",close:"\uB2EB\uAE30",elementGroup:"\uC694\uC18C",id:"ID",category:"\uCE74\uD14C\uACE0\uB9AC",type:"\uC720\uD615",level:"\uB808\uBCA8",sourceId:"\uC6D0\uBCF8 ID",link:"\uB9C1\uD06C",panels:"\uD328\uB110","panel.model":"\uBAA8\uB378","panel.views":"\uBDF0","panel.sections":"\uB2E8\uBA74","panel.clashes":"\uAC04\uC12D","panel.bcf":"BCF \uC8FC\uC81C","bcf.noView":"\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","bcf.viewpoint":"\uAD00\uCE21\uC810 {index} \uC5F4\uAE30","bcf.components":"\uB204\uB77D\uB41C \uAD6C\uC131\uC694\uC18C: {missing}, \uBAA8\uD638\uD55C \uAD6C\uC131\uC694\uC18C: {ambiguous}","panel.timeliner":"4D \uC77C\uC815","panel.links":"\uB9C1\uD06C\uB41C \uD30C\uC77C","group.navigation":"\uD0D0\uC0C9","group.sections":"\uB2E8\uBA74","group.measure":"\uCE21\uC815","group.display":"\uD45C\uC2DC","group.view":"\uBDF0","tool.orbit":"\uADA4\uB3C4 \uD68C\uC804","tool.pan":"\uD654\uBA74 \uC774\uB3D9","tool.fit":"\uC804\uCCB4 \uB9DE\uCDA4","tool.projection":"\uC6D0\uADFC / \uC9C1\uAD50 \uD22C\uC601","tool.plane":"\uB2E8\uBA74 \uD3C9\uBA74","tool.box":"\uB2E8\uBA74 \uC0C1\uC790","tool.resetSections":"\uB2E8\uBA74 \uC7AC\uC124\uC815","tool.distance":"\uAC70\uB9AC","tool.displayMode":"\uD45C\uC2DC \uBAA8\uB4DC","tool.grids":"\uADF8\uB9AC\uB4DC","tool.opacity":"\uD22C\uBA85\uB3C4","tool.fullscreen":"\uC804\uCCB4 \uD654\uBA74",contextMenu:"\uC0C1\uD669\uC5D0 \uB9DE\uB294 \uBA54\uB274","menu.properties":"\uC18D\uC131","menu.hide":"\uC228\uAE30\uAE30","menu.isolate":"\uBD84\uB9AC","menu.showAll":"\uBAA8\uB450 \uD45C\uC2DC","menu.zoomTo":"\uAC1D\uCCB4\uB85C \uD655\uB300","menu.sectionBox":"\uAC1D\uCCB4\uB97C \uB458\uB7EC\uC2FC \uB2E8\uBA74 \uC0C1\uC790","menu.copyId":"ID \uBCF5\uC0AC","menu.fitAll":"\uC804\uCCB4 \uB9DE\uCDA4","menu.resetSections":"\uB2E8\uBA74 \uC7AC\uC124\uC815","menu.unavailable":"\uC774 \uBAA8\uB378\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",searchPlaceholder:"\uC774\uB984, \uC720\uD615, ID\uB85C \uAC80\uC0C9\u2026",noCategory:"\uCE74\uD14C\uACE0\uB9AC \uC5C6\uC74C",noMatches:"\uC77C\uCE58\uD558\uB294 \uD56D\uBAA9 \uC5C6\uC74C","filters.title":"\uD544\uD130","filters.model":"\uC6D0\uBCF8 \uBAA8\uB378","filters.noLevel":"\uB808\uBCA8 \uC5C6\uC74C","filters.all":"\uBAA8\uB450","filters.clear":"\uC9C0\uC6B0\uAE30","filters.isolate":"\uC77C\uCE58 \uD56D\uBAA9 \uBD84\uB9AC",idCopied:"ID\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4",copyFailed:"ID\uB97C \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",fullscreenUnavailable:"\uC804\uCCB4 \uD654\uBA74\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","face.front":"\uC55E","face.back":"\uB4A4","face.left":"\uC67C\uCABD","face.right":"\uC624\uB978\uCABD","face.top":"\uC704","face.bottom":"\uC544\uB798","cube.title":"\uBDF0 \uD050\uBE0C","cube.up":"\uC704\uB85C \uD68C\uC804","cube.down":"\uC544\uB798\uB85C \uD68C\uC804","cube.left":"\uC67C\uCABD\uC73C\uB85C \uD68C\uC804","cube.right":"\uC624\uB978\uCABD\uC73C\uB85C \uD68C\uC804","cube.home":"\uD648 \uBDF0","sections.mode":"\uB2E8\uBA74 \uBAA8\uB4DC","sections.planes":"\uD3C9\uBA74","sections.box":"\uC0C1\uC790","sections.off":"\uB054","sections.axis":"\uCD95","sections.addPlane":"\uD3C9\uBA74 \uCD94\uAC00","sections.noPlanes":"\uD3C9\uBA74 \uC5C6\uC74C","sections.rotated":"\uD68C\uC804\uB428","sections.custom":"\uC0AC\uC6A9\uC790 \uC9C0\uC815","sections.position":"\uD3C9\uBA74 \uC704\uCE58","sections.flip":"\uBC18\uB300\uCABD\uC73C\uB85C \uC804\uD658","sections.enabled":"\uCF2C","sections.delete":"\uD3C9\uBA74 \uC0AD\uC81C","sections.keepInside":"\uB0B4\uBD80 \uD45C\uC2DC","sections.cutInside":"\uB0B4\uBD80 \uC798\uB77C\uB0B4\uAE30","sections.fitSelection":"\uC120\uD0DD \uC601\uC5ED\uC5D0 \uB9DE\uCDA4","sections.showGizmo":"\uC870\uC791 \uD578\uB4E4 \uD45C\uC2DC","sections.boxYaw":"Z\uCD95 \uAE30\uC900 \uD68C\uC804","sections.fill":"\uC808\uB2E8\uBA74 \uCC44\uC6B0\uAE30","sections.fillUnavailable":"\uCC44\uC6B0\uB824\uBA74 WebGL \uC2A4\uD150\uC2E4 \uBC84\uD37C\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4","sections.maxPlanes":"\uCD5C\uB300 \uD3C9\uBA74 6\uAC1C","unit.m":"m","display.materials":"\uC7AC\uC9C8","display.textures":"\uD14D\uC2A4\uCC98","display.white":"\uD770\uC0C9","display.wireframe":"\uC640\uC774\uC5B4\uD504\uB808\uC784","display.background":"\uBC30\uACBD\uC0C9","display.backgroundReset":"\uBC30\uACBD \uC7AC\uC124\uC815","opacity.label":"\uBD88\uD22C\uBA85\uB3C4","opacity.value":"{value}%","views.tour":"\uB458\uB7EC\uBCF4\uAE30 \uC7AC\uC0DD","views.stop":"\uB458\uB7EC\uBCF4\uAE30 \uC911\uC9C0","clash.New":"\uC0C8\uB85C \uCD94\uAC00\uB428","clash.Active":"\uD65C\uC131","clash.Reviewed":"\uAC80\uD1A0\uB428","clash.Approved":"\uC2B9\uC778\uB428","clash.Resolved":"\uD574\uACB0\uB428","task.construct":"\uC2DC\uACF5","task.demolish":"\uCCA0\uAC70","task.temporary":"\uC784\uC2DC","player.title":"4D \uD50C\uB808\uC774\uC5B4","player.play":"\uC7AC\uC0DD","player.pause":"\uC77C\uC2DC \uC815\uC9C0","player.date":"\uC77C\uC815 \uB0A0\uC9DC","player.speed":"\uC18D\uB3C4",truncated:"\uCD1D {total}\uAC1C \uC911 \uBA54\uC2DC {meshes}\uAC1C \uD45C\uC2DC. MaxMeshVertices \uC124\uC815\uC73C\uB85C \uBAA8\uB378\uC774 \uC798\uB838\uC2B5\uB2C8\uB2E4.",language:"\uC5B8\uC5B4",auto:"\uC790\uB3D9",model3d:"3D \uBAA8\uB378",retry:"\uB2E4\uC6B4\uB85C\uB4DC \uB2E4\uC2DC \uC2DC\uB3C4",finding:"\uC694\uC18C\uB97C \uCC3E\uB294 \uC911\u2026",streamLod:"{size} MiB \xB7 \uC804\uCCB4 \uC0C1\uC138 {shown}/{total}",streamMesh:"{size} MiB \xB7 \uD074\uB7EC\uC2A4\uD130 {visible} \xB7 \uC815\uBC00\uD654 \uC911 {fallback}",streamTiles:"\uC601\uC5ED {areas} \xB7 \uC0C1\uC138 {shown}/{total} \xB7 {size}/{limit} MiB"},"zh-Hans":{elements:"\u56FE\u5143",noGeometry:"\u6CA1\u6709\u51E0\u4F55\u56FE\u5F62",contextLost:"\u56FE\u5F62\u4E0A\u4E0B\u6587\u5DF2\u4E22\u5931\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002",noWebGL:"\u9700\u8981\u652F\u6301 WebGL 2 \u7684\u6D4F\u89C8\u5668",badData:"\u65E0\u6CD5\u8BFB\u53D6\u6A21\u578B\u6570\u636E",tooLarge:"\u6A21\u578B\u8FC7\u5927\uFF1A\u5171\u6709 {count} \u4E2A\u5E26\u51E0\u4F55\u56FE\u5F62\u7684\u5BF9\u8C61\uFF0C\u4E0A\u9650\u4E3A {limit}",selected:"\u5DF2\u9009",close:"\u5173\u95ED",elementGroup:"\u56FE\u5143",id:"ID",category:"\u7C7B\u522B",type:"\u7C7B\u578B",level:"\u6807\u9AD8",sourceId:"\u6E90 ID",link:"\u94FE\u63A5",panels:"\u9762\u677F","panel.model":"\u6A21\u578B","panel.views":"\u89C6\u56FE","panel.sections":"\u5256\u9762","panel.clashes":"\u78B0\u649E","panel.bcf":"BCF \u8BAE\u9898","bcf.noView":"\u6CA1\u6709\u53EF\u7528\u89C6\u56FE","bcf.viewpoint":"\u6253\u5F00\u89C6\u70B9 {index}","bcf.components":"\u7F3A\u5931\u6784\u4EF6\uFF1A{missing}\uFF0C\u5339\u914D\u4E0D\u660E\u786E\uFF1A{ambiguous}","panel.timeliner":"4D \u8FDB\u5EA6\u8BA1\u5212","panel.links":"\u94FE\u63A5\u6587\u4EF6","group.navigation":"\u5BFC\u822A","group.sections":"\u5256\u9762","group.measure":"\u6D4B\u91CF","group.display":"\u663E\u793A","group.view":"\u89C6\u56FE","tool.orbit":"\u73AF\u7ED5","tool.pan":"\u5E73\u79FB","tool.fit":"\u7F29\u653E\u81F3\u5168\u56FE","tool.projection":"\u900F\u89C6 / \u6B63\u4EA4","tool.plane":"\u5256\u5207\u5E73\u9762","tool.box":"\u5256\u9762\u6846","tool.resetSections":"\u91CD\u7F6E\u5256\u9762","tool.distance":"\u8DDD\u79BB","tool.displayMode":"\u663E\u793A\u6A21\u5F0F","tool.grids":"\u8F74\u7F51","tool.opacity":"\u900F\u660E\u5EA6","tool.fullscreen":"\u5168\u5C4F",contextMenu:"\u4E0A\u4E0B\u6587\u83DC\u5355","menu.properties":"\u5C5E\u6027","menu.hide":"\u9690\u85CF","menu.isolate":"\u9694\u79BB","menu.showAll":"\u663E\u793A\u5168\u90E8","menu.zoomTo":"\u7F29\u653E\u81F3\u5BF9\u8C61","menu.sectionBox":"\u56F4\u7ED5\u5BF9\u8C61\u521B\u5EFA\u5256\u9762\u6846","menu.copyId":"\u590D\u5236 ID","menu.fitAll":"\u7F29\u653E\u81F3\u5168\u56FE","menu.resetSections":"\u91CD\u7F6E\u5256\u9762","menu.unavailable":"\u6B64\u6A21\u578B\u4E0D\u652F\u6301\u6B64\u529F\u80FD",searchPlaceholder:"\u6309\u540D\u79F0\u3001\u7C7B\u578B\u6216 ID \u641C\u7D22\u2026",noCategory:"\u65E0\u7C7B\u522B",noMatches:"\u6CA1\u6709\u5339\u914D\u9879","filters.title":"\u7B5B\u9009\u5668","filters.model":"\u6E90\u6A21\u578B","filters.noLevel":"\u65E0\u6807\u9AD8","filters.all":"\u5168\u90E8","filters.clear":"\u6E05\u9664","filters.isolate":"\u9694\u79BB\u5339\u914D\u9879",idCopied:"\u5DF2\u590D\u5236 ID",copyFailed:"\u65E0\u6CD5\u590D\u5236 ID",fullscreenUnavailable:"\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F","face.front":"\u524D","face.back":"\u540E","face.left":"\u5DE6","face.right":"\u53F3","face.top":"\u4E0A","face.bottom":"\u4E0B","cube.title":"\u89C6\u56FE\u7ACB\u65B9\u4F53","cube.up":"\u5411\u4E0A\u65CB\u8F6C","cube.down":"\u5411\u4E0B\u65CB\u8F6C","cube.left":"\u5411\u5DE6\u65CB\u8F6C","cube.right":"\u5411\u53F3\u65CB\u8F6C","cube.home":"\u521D\u59CB\u89C6\u56FE","sections.mode":"\u5256\u9762\u6A21\u5F0F","sections.planes":"\u5E73\u9762","sections.box":"\u6846","sections.off":"\u5173","sections.axis":"\u8F74","sections.addPlane":"\u6DFB\u52A0\u5E73\u9762","sections.noPlanes":"\u65E0\u5E73\u9762","sections.rotated":"\u5DF2\u65CB\u8F6C","sections.custom":"\u81EA\u5B9A\u4E49","sections.position":"\u5E73\u9762\u4F4D\u7F6E","sections.flip":"\u53CD\u8F6C\u65B9\u5411","sections.enabled":"\u5F00","sections.delete":"\u5220\u9664\u5E73\u9762","sections.keepInside":"\u663E\u793A\u5185\u90E8","sections.cutInside":"\u88C1\u5207\u5185\u90E8","sections.fitSelection":"\u9002\u5E94\u9009\u533A","sections.showGizmo":"\u663E\u793A\u64CD\u7EB5\u5668","sections.boxYaw":"\u7ED5 Z \u8F74\u65CB\u8F6C","sections.fill":"\u586B\u5145\u5256\u5207\u9762","sections.fillUnavailable":"\u5256\u5207\u9762\u586B\u5145\u9700\u8981 WebGL \u6A21\u677F\u7F13\u51B2\u533A","sections.maxPlanes":"\u6700\u591A 6 \u4E2A\u5E73\u9762","unit.m":"\u7C73","display.materials":"\u6750\u8D28","display.textures":"\u7EB9\u7406","display.white":"\u767D\u8272","display.wireframe":"\u7EBF\u6846","display.background":"\u80CC\u666F\u989C\u8272","display.backgroundReset":"\u91CD\u7F6E\u80CC\u666F","opacity.label":"\u4E0D\u900F\u660E\u5EA6","opacity.value":"{value}%","views.tour":"\u64AD\u653E\u6F2B\u6E38","views.stop":"\u505C\u6B62\u6F2B\u6E38","clash.New":"\u65B0\u5EFA","clash.Active":"\u6D3B\u52A8","clash.Reviewed":"\u5DF2\u5BA1\u67E5","clash.Approved":"\u5DF2\u6279\u51C6","clash.Resolved":"\u5DF2\u89E3\u51B3","task.construct":"\u65BD\u5DE5","task.demolish":"\u62C6\u9664","task.temporary":"\u4E34\u65F6","player.title":"4D \u64AD\u653E\u5668","player.play":"\u64AD\u653E","player.pause":"\u6682\u505C","player.date":"\u8BA1\u5212\u65E5\u671F","player.speed":"\u901F\u5EA6",truncated:"\u663E\u793A {meshes}/{total} \u4E2A\u7F51\u683C\uFF0C\u6A21\u578B\u53D7 MaxMeshVertices \u8BBE\u7F6E\u9650\u5236\u3002",language:"\u8BED\u8A00",auto:"\u81EA\u52A8",model3d:"3D \u6A21\u578B",retry:"\u91CD\u8BD5\u4E0B\u8F7D",finding:"\u6B63\u5728\u67E5\u627E\u56FE\u5143\u2026",streamLod:"{size} MiB \xB7 \u5B8C\u6574\u7EC6\u8282 {shown}/{total}",streamMesh:"{size} MiB \xB7 \u7C07 {visible} \xB7 \u6B63\u5728\u7EC6\u5316 {fallback}",streamTiles:"\u533A\u57DF {areas} \xB7 \u7EC6\u8282 {shown}/{total} \xB7 {size}/{limit} MiB"},"zh-Hant":{elements:"\u5716\u5143",noGeometry:"\u6C92\u6709\u5E7E\u4F55\u5716\u5F62",contextLost:"\u5716\u5F62\u74B0\u5883\u5DF2\u907A\u5931\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u9801\u9762\u3002",noWebGL:"\u9700\u8981\u652F\u63F4 WebGL 2 \u7684\u700F\u89BD\u5668",badData:"\u7121\u6CD5\u8B80\u53D6\u6A21\u578B\u8CC7\u6599",tooLarge:"\u6A21\u578B\u904E\u5927\uFF1A\u5171\u6709 {count} \u500B\u5E36\u5E7E\u4F55\u5716\u5F62\u7684\u7269\u4EF6\uFF0C\u4E0A\u9650\u70BA {limit}",selected:"\u5DF2\u9078\u53D6",close:"\u95DC\u9589",elementGroup:"\u5716\u5143",id:"ID",category:"\u985E\u5225",type:"\u985E\u578B",level:"\u6A13\u5C64",sourceId:"\u4F86\u6E90 ID",link:"\u9023\u7D50",panels:"\u9762\u677F","panel.model":"\u6A21\u578B","panel.views":"\u8996\u5716","panel.sections":"\u5256\u9762","panel.clashes":"\u78B0\u649E","panel.bcf":"BCF \u8B70\u984C","bcf.noView":"\u6C92\u6709\u53EF\u7528\u8996\u5716","bcf.viewpoint":"\u958B\u555F\u8996\u9EDE {index}","bcf.components":"\u7F3A\u5C11\u5143\u4EF6\uFF1A{missing}\uFF0C\u7121\u6CD5\u78BA\u5B9A\uFF1A{ambiguous}","panel.timeliner":"4D \u6392\u7A0B","panel.links":"\u9023\u7D50\u6A94\u6848","group.navigation":"\u5C0E\u89BD","group.sections":"\u5256\u9762","group.measure":"\u6E2C\u91CF","group.display":"\u986F\u793A","group.view":"\u8996\u5716","tool.orbit":"\u74B0\u7E5E","tool.pan":"\u5E73\u79FB","tool.fit":"\u7E2E\u653E\u81F3\u5168\u5716","tool.projection":"\u900F\u8996 / \u6B63\u4EA4","tool.plane":"\u5256\u5207\u5E73\u9762","tool.box":"\u5256\u9762\u6846","tool.resetSections":"\u91CD\u8A2D\u5256\u9762","tool.distance":"\u8DDD\u96E2","tool.displayMode":"\u986F\u793A\u6A21\u5F0F","tool.grids":"\u8EF8\u7DB2","tool.opacity":"\u900F\u660E\u5EA6","tool.fullscreen":"\u5168\u87A2\u5E55",contextMenu:"\u5167\u5BB9\u9078\u55AE","menu.properties":"\u5C6C\u6027","menu.hide":"\u96B1\u85CF","menu.isolate":"\u9694\u96E2","menu.showAll":"\u986F\u793A\u5168\u90E8","menu.zoomTo":"\u7E2E\u653E\u81F3\u7269\u4EF6","menu.sectionBox":"\u74B0\u7E5E\u7269\u4EF6\u5EFA\u7ACB\u5256\u9762\u6846","menu.copyId":"\u8907\u88FD ID","menu.fitAll":"\u7E2E\u653E\u81F3\u5168\u5716","menu.resetSections":"\u91CD\u8A2D\u5256\u9762","menu.unavailable":"\u6B64\u6A21\u578B\u4E0D\u652F\u63F4\u6B64\u529F\u80FD",searchPlaceholder:"\u4F9D\u540D\u7A31\u3001\u985E\u578B\u6216 ID \u641C\u5C0B\u2026",noCategory:"\u7121\u985E\u5225",noMatches:"\u6C92\u6709\u7B26\u5408\u9805\u76EE","filters.title":"\u7BE9\u9078\u5668","filters.model":"\u4F86\u6E90\u6A21\u578B","filters.noLevel":"\u7121\u6A13\u5C64","filters.all":"\u5168\u90E8","filters.clear":"\u6E05\u9664","filters.isolate":"\u9694\u96E2\u7B26\u5408\u9805\u76EE",idCopied:"\u5DF2\u8907\u88FD ID",copyFailed:"\u7121\u6CD5\u8907\u88FD ID",fullscreenUnavailable:"\u7121\u6CD5\u9032\u5165\u5168\u87A2\u5E55","face.front":"\u524D","face.back":"\u5F8C","face.left":"\u5DE6","face.right":"\u53F3","face.top":"\u4E0A","face.bottom":"\u4E0B","cube.title":"\u8996\u5716\u7ACB\u65B9\u9AD4","cube.up":"\u5411\u4E0A\u65CB\u8F49","cube.down":"\u5411\u4E0B\u65CB\u8F49","cube.left":"\u5411\u5DE6\u65CB\u8F49","cube.right":"\u5411\u53F3\u65CB\u8F49","cube.home":"\u521D\u59CB\u8996\u5716","sections.mode":"\u5256\u9762\u6A21\u5F0F","sections.planes":"\u5E73\u9762","sections.box":"\u6846","sections.off":"\u95DC","sections.axis":"\u8EF8","sections.addPlane":"\u65B0\u589E\u5E73\u9762","sections.noPlanes":"\u7121\u5E73\u9762","sections.rotated":"\u5DF2\u65CB\u8F49","sections.custom":"\u81EA\u8A02","sections.position":"\u5E73\u9762\u4F4D\u7F6E","sections.flip":"\u53CD\u8F49\u65B9\u5411","sections.enabled":"\u958B","sections.delete":"\u522A\u9664\u5E73\u9762","sections.keepInside":"\u986F\u793A\u5167\u90E8","sections.cutInside":"\u88C1\u5207\u5167\u90E8","sections.fitSelection":"\u914D\u5408\u9078\u53D6\u7BC4\u570D","sections.showGizmo":"\u986F\u793A\u64CD\u63A7\u5668","sections.boxYaw":"\u7E5E Z \u8EF8\u65CB\u8F49","sections.fill":"\u586B\u6EFF\u5256\u5207\u9762","sections.fillUnavailable":"\u5256\u5207\u9762\u586B\u6EFF\u9700\u8981 WebGL \u6A21\u677F\u7DE9\u885D\u5340","sections.maxPlanes":"\u6700\u591A 6 \u500B\u5E73\u9762","unit.m":"\u516C\u5C3A","display.materials":"\u6750\u8CEA","display.textures":"\u7D0B\u7406","display.white":"\u767D\u8272","display.wireframe":"\u7DDA\u6846","display.background":"\u80CC\u666F\u8272\u5F69","display.backgroundReset":"\u91CD\u8A2D\u80CC\u666F","opacity.label":"\u4E0D\u900F\u660E\u5EA6","opacity.value":"{value}%","views.tour":"\u64AD\u653E\u6F2B\u904A","views.stop":"\u505C\u6B62\u6F2B\u904A","clash.New":"\u65B0\u589E","clash.Active":"\u555F\u7528","clash.Reviewed":"\u5DF2\u5BE9\u67E5","clash.Approved":"\u5DF2\u6838\u51C6","clash.Resolved":"\u5DF2\u89E3\u6C7A","task.construct":"\u65BD\u5DE5","task.demolish":"\u62C6\u9664","task.temporary":"\u81E8\u6642","player.title":"4D \u64AD\u653E\u5668","player.play":"\u64AD\u653E","player.pause":"\u66AB\u505C","player.date":"\u6392\u7A0B\u65E5\u671F","player.speed":"\u901F\u5EA6",truncated:"\u986F\u793A {total} \u500B\u7DB2\u683C\u4E2D\u7684 {meshes} \u500B\u3002\u6A21\u578B\u53D7 MaxMeshVertices \u8A2D\u5B9A\u9650\u5236\u3002",language:"\u8A9E\u8A00",auto:"\u81EA\u52D5",model3d:"3D \u6A21\u578B",retry:"\u91CD\u8A66\u4E0B\u8F09",finding:"\u6B63\u5728\u5C0B\u627E\u5716\u5143\u2026",streamLod:"{size} MiB \xB7 \u5B8C\u6574\u7D30\u7BC0 {shown}/{total}",streamMesh:"{size} MiB \xB7 \u53E2\u96C6 {visible} \xB7 \u6B63\u5728\u7D30\u5316 {fallback}",streamTiles:"\u5340\u57DF {areas} \xB7 \u7D30\u7BC0 {shown}/{total} \xB7 {size}/{limit} MiB"}};var $v={...wf,ru:{elements:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",noGeometry:"\u041D\u0435\u0442 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438",contextLost:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430 \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",noWebGL:"\u041D\u0443\u0436\u0435\u043D \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 WebGL 2",badData:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438",tooLarge:"\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0449\u0438\u043A\u0430: \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0441 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0435\u0439 \u2014 {count}, \u043F\u0440\u0435\u0434\u0435\u043B \u2014 {limit}",selected:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",elementGroup:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442",id:"Id",category:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",type:"\u0422\u0438\u043F",level:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",sourceId:"ID \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430",link:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B",panels:"\u041F\u0430\u043D\u0435\u043B\u0438","panel.model":"\u041C\u043E\u0434\u0435\u043B\u044C","panel.views":"\u0412\u0438\u0434\u044B","panel.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","panel.clashes":"\u041A\u043E\u043B\u043B\u0438\u0437\u0438\u0438","panel.bcf":"\u0422\u0435\u043C\u044B BCF","bcf.noView":"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0430","bcf.viewpoint":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u0434 {index}","bcf.components":"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u2014 {missing}, \u043D\u0435\u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u044B\u0445 \u2014 {ambiguous}","panel.timeliner":"4D-\u0433\u0440\u0430\u0444\u0438\u043A","panel.links":"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B","group.navigation":"\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F","group.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","group.measure":"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F","group.display":"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","group.view":"\u0412\u0438\u0434","tool.orbit":"\u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435","tool.pan":"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u0430","tool.fit":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","tool.projection":"\u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430 / \u043E\u0440\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F","tool.plane":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.box":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.distance":"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435","tool.displayMode":"\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","tool.grids":"\u041E\u0441\u0438","tool.opacity":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","tool.fullscreen":"\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",contextMenu:"\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E","menu.properties":"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430","menu.hide":"\u0421\u043A\u0440\u044B\u0442\u044C","menu.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C","menu.showAll":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0451","menu.zoomTo":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C \u043A \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.sectionBox":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.copyId":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id","menu.fitAll":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","menu.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","menu.unavailable":"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438",searchPlaceholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u0442\u0438\u043F\u0443, Id\u2026",noCategory:"\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",noMatches:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","filters.title":"\u0424\u0438\u043B\u044C\u0442\u0440\u044B","filters.model":"\u041C\u043E\u0434\u0435\u043B\u044C-\u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A","filters.noLevel":"\u0411\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F","filters.all":"\u0412\u0441\u0435","filters.clear":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C","filters.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F",idCopied:"Id \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D",copyFailed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id",fullscreenUnavailable:"\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D","face.front":"\u0421\u043F\u0435\u0440\u0435\u0434\u0438","face.back":"\u0421\u0437\u0430\u0434\u0438","face.left":"\u0421\u043B\u0435\u0432\u0430","face.right":"\u0421\u043F\u0440\u0430\u0432\u0430","face.top":"\u0421\u0432\u0435\u0440\u0445\u0443","face.bottom":"\u0421\u043D\u0438\u0437\u0443","cube.title":"\u041A\u0443\u0431 \u0432\u0438\u0434\u0430","cube.up":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0432\u0435\u0440\u0445","cube.down":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043D\u0438\u0437","cube.left":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043B\u0435\u0432\u043E","cube.right":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043F\u0440\u0430\u0432\u043E","cube.home":"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0438\u0434","sections.mode":"\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","sections.planes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.box":"\u0411\u043E\u043A\u0441","sections.off":"\u0412\u044B\u043A\u043B","sections.axis":"\u041E\u0441\u044C","sections.addPlane":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.noPlanes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442","sections.rotated":"\u043F\u043E\u0432\u0451\u0440\u043D\u0443\u0442\u0430","sections.custom":"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u0430\u044F","sections.position":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.flip":"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443","sections.enabled":"\u0412\u043A\u043B","sections.delete":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.keepInside":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.cutInside":"\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.fitSelection":"\u041F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443","sections.showGizmo":"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440","sections.boxYaw":"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0432\u043E\u043A\u0440\u0443\u0433 Z","sections.fill":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u0440\u0435\u0437\u043E\u0432","sections.fillUnavailable":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0431\u0435\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0442\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u0430 WebGL","sections.maxPlanes":"\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 6 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439","unit.m":"\u043C","display.materials":"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B","display.textures":"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B","display.white":"\u0411\u0435\u043B\u044B\u0439","display.wireframe":"\u041A\u0430\u0440\u043A\u0430\u0441","display.background":"\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430","display.backgroundReset":"\u0424\u043E\u043D \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E","opacity.label":"\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","opacity.value":"{value} %","views.tour":"\u0422\u0443\u0440 \u043F\u043E \u0432\u0438\u0434\u0430\u043C","views.stop":"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0443\u0440","clash.New":"\u041D\u043E\u0432\u0430\u044F","clash.Active":"\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F","clash.Reviewed":"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430","clash.Approved":"\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430","clash.Resolved":"\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430","task.construct":"\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E","task.demolish":"\u0421\u043D\u043E\u0441","task.temporary":"\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435","player.title":"4D-\u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C","player.play":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438","player.pause":"\u041F\u0430\u0443\u0437\u0430","player.date":"\u0414\u0430\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430","player.speed":"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",truncated:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {meshes} \u0438\u0437 {total} \u043C\u0435\u0448\u0435\u0439: \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u0440\u0435\u0437\u0430\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u043E\u0439 MaxMeshVertices",language:"\u042F\u0437\u044B\u043A",auto:"\u0410\u0432\u0442\u043E",model3d:"3D-\u043C\u043E\u0434\u0435\u043B\u044C",retry:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443",finding:"\u041F\u043E\u0438\u0441\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u2026",streamLod:"{size} \u041C\u0438\u0411 \xB7 \u0442\u043E\u0447\u043D\u0430\u044F \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044F {shown}/{total}",streamMesh:"{size} \u041C\u0438\u0411 \xB7 \u041A\u043B\u0430\u0441\u0442\u0435\u0440\u043E\u0432 {visible} \xB7 \u0423\u0442\u043E\u0447\u043D\u044F\u0435\u0442\u0441\u044F {fallback}",streamTiles:"\u0423\u0447\u0430\u0441\u0442\u043A\u043E\u0432 {areas} \xB7 \u0414\u0435\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F {shown}/{total} \xB7 {size}/{limit} \u041C\u0438\u0411"},en:{elements:"Elements",noGeometry:"No geometry",contextLost:"The graphics context was lost \u2014 reload the page",noWebGL:"This page needs a browser with WebGL 2",badData:"The model data could not be read",tooLarge:"The model is too large for this viewer: {count} objects with geometry, the limit is {limit}",selected:"Selected",close:"Close",elementGroup:"Element",id:"Id",category:"Category",type:"Type",level:"Level",sourceId:"Source ID",link:"Link",panels:"Panels","panel.model":"Model","panel.views":"Views","panel.sections":"Sections","panel.clashes":"Clashes","panel.bcf":"BCF topics","bcf.noView":"No view available","bcf.viewpoint":"Open viewpoint {index}","bcf.components":"Components missing \u2014 {missing}, ambiguous \u2014 {ambiguous}","panel.timeliner":"4D schedule","panel.links":"Linked files","group.navigation":"Navigation","group.sections":"Sections","group.measure":"Measure","group.display":"Display","group.view":"View","tool.orbit":"Orbit","tool.pan":"Pan","tool.fit":"Fit all","tool.projection":"Perspective / orthographic","tool.plane":"Section plane","tool.box":"Section box","tool.resetSections":"Reset sections","tool.distance":"Distance","tool.displayMode":"Display mode","tool.grids":"Grids","tool.opacity":"Transparency","tool.fullscreen":"Full screen",contextMenu:"Context menu","menu.properties":"Properties","menu.hide":"Hide","menu.isolate":"Isolate","menu.showAll":"Show all","menu.zoomTo":"Zoom to object","menu.sectionBox":"Section box around object","menu.copyId":"Copy Id","menu.fitAll":"Fit all","menu.resetSections":"Reset sections","menu.unavailable":"Unavailable for this model",searchPlaceholder:"Search by name, type, Id\u2026",noCategory:"No category",noMatches:"No matches","filters.title":"Filters","filters.model":"Source model","filters.noLevel":"No level","filters.all":"All","filters.clear":"Clear","filters.isolate":"Isolate matches",idCopied:"Id copied",copyFailed:"Could not copy Id",fullscreenUnavailable:"Fullscreen is not available","face.front":"Front","face.back":"Back","face.left":"Left","face.right":"Right","face.top":"Top","face.bottom":"Bottom","cube.title":"View cube","cube.up":"Rotate up","cube.down":"Rotate down","cube.left":"Rotate left","cube.right":"Rotate right","cube.home":"Home view","sections.mode":"Section mode","sections.planes":"Planes","sections.box":"Box","sections.off":"Off","sections.axis":"Axis","sections.addPlane":"Add plane","sections.noPlanes":"No planes","sections.rotated":"rotated","sections.custom":"Custom","sections.position":"Plane position","sections.flip":"Flip side","sections.enabled":"On","sections.delete":"Delete plane","sections.keepInside":"Show inside","sections.cutInside":"Cut inside","sections.fitSelection":"Fit to selection","sections.showGizmo":"Show gizmo","sections.boxYaw":"Rotation around Z","sections.fill":"Fill cut faces","sections.fillUnavailable":"Section fill requires a WebGL stencil buffer","sections.maxPlanes":"At most 6 planes","unit.m":"m","display.materials":"Materials","display.textures":"Textures","display.white":"White","display.wireframe":"Wireframe","display.background":"Background color","display.backgroundReset":"Reset background","opacity.label":"Opacity","opacity.value":"{value}%","views.tour":"Play tour","views.stop":"Stop tour","clash.New":"New","clash.Active":"Active","clash.Reviewed":"Reviewed","clash.Approved":"Approved","clash.Resolved":"Resolved","task.construct":"Construct","task.demolish":"Demolish","task.temporary":"Temporary","player.title":"4D player","player.play":"Play","player.pause":"Pause","player.date":"Schedule date","player.speed":"Speed",truncated:"Showing {meshes} of {total} meshes: the model was truncated by the MaxMeshVertices setting",language:"Language",auto:"Auto",model3d:"3D model",retry:"Retry downloads",finding:"Finding element\u2026",streamLod:"{size} MiB \xB7 full detail {shown}/{total}",streamMesh:"{size} MiB \xB7 Clusters {visible} \xB7 Refining {fallback}",streamTiles:"{areas} areas \xB7 Detail {shown}/{total} \xB7 {size}/{limit} MiB"}},Ef="ioviewer-language",Tf=globalThis.parent&&globalThis.parent!==globalThis&&Ds(new URLSearchParams(location.hash.slice(1)).get("ioextendLang")),mh=new URLSearchParams(globalThis.location?.search).get("lang"),Af=mh==="auto"?mh:Ds(mh)??Mf(Ef),vi=Tf||Ds(Af)||yf(globalThis.navigator?.languages?.length?navigator.languages:[globalThis.navigator?.language]),Pr=new Intl.NumberFormat(vi).format;function se(i,e=vi,t){let n=$v[e]?.[i];if(n===void 0)throw new Error(`Missing UI string '${i}'.`);return t?n.replace(/\{(\w+)\}/g,(s,r)=>t[r]):n}function Rf(){if(document.documentElement.lang=vi,document.querySelector("canvas").setAttribute("aria-label",se("model3d")),Tf)return;let i=document.createElement("select");i.id="ioviewer-language",i.className="ioviewer-floating",i.setAttribute("aria-label",se("language")),i.append(new Option(se("auto"),"auto"),...ph.map(bf)),i.value=Ds(Af)??"auto",i.addEventListener("change",()=>{Sf(Ef,i.value);let e=new URL(location.href);e.searchParams.set("lang",i.value),location.replace(e)}),document.querySelector("#ioviewer-ui").append(i)}var Cf=new I(0,0,1),Ja=Math.PI/2-.01;function Pf(i,e,t=4){return Math.hypot(e.x-i.x,e.y-i.y)<=t}function Lf(i,e,t,n,s,r){let o=i.clone().sub(t),a=e.clone().sub(t),l=d=>(o.applyQuaternion(d),a.applyQuaternion(d));l(new Ct().setFromAxisAngle(Cf,-n*r));let c=a.clone().sub(o).normalize(),h=c.clone().cross(Cf);if(h.lengthSq()>1e-12){let d=Math.asin(ct.clamp(c.z,-1,1)),u=ct.clamp(s*r,d-Ja,d+Ja);l(new Ct().setFromAxisAngle(h.normalize(),-u))}return{position:o.add(t),target:a.add(t)}}function Df(i,e,t,n){let s=r=>r.clone().sub(t).multiplyScalar(n).add(t);return{position:s(i),target:s(e)}}var Zv=.85,Jv=100/3;function Nf(i,e,t){let n=i*(e===1?Jv:e===2?t:1);return ct.clamp(Zv**(-n/100),.5,2)}var gh=(i,e)=>e>=i?"window":"crossing";function Uf(i,e,t){let n=If(i.position,i.target),s=If(e.position,e.target),r=n.azimuth??s.azimuth??0,o=s.azimuth??r,a=ct.euclideanModulo(o-r+Math.PI,2*Math.PI)-Math.PI,l=(_,m)=>_+(m-_)*t,c=r+a*t,h=ct.clamp(l(n.elevation,s.elevation),-Ja,Ja),d=l(n.distance,s.distance),u=i.target.clone().lerp(e.target,t),p=Math.cos(h)*d;return{position:u.clone().add(new I(p*Math.cos(c),p*Math.sin(c),Math.sin(h)*d)),target:u}}function Ff(i,e,t,n){let s=i.position.clone().sub(i.target),r=e.position.clone().sub(e.target),o=s.length(),a=r.length();s.normalize(),r.normalize();let l=new Ct().setFromUnitVectors(s,r),c=t.clone().applyQuaternion(l),h=new I().setFromMatrixColumn(new ke().lookAt(e.position,e.target,n),1),d=r.dot(new I().crossVectors(c,h)),u=Math.atan2(Math.abs(d)<1e-9?0:d,c.dot(h)),p=new Ct;return g=>{p.identity().slerp(l,g);let _=s.clone().applyQuaternion(p),m=i.target.clone().lerp(e.target,g),f=_.clone().multiplyScalar(ct.lerp(o,a,g)).add(m),M=t.clone().applyQuaternion(p).applyAxisAngle(_,u*g);return{position:f,target:m,up:M}}}function If(i,e){let t=i.clone().sub(e),n=t.length(),s=Math.hypot(t.x,t.y);return{distance:n,elevation:n>1e-12?Math.asin(ct.clamp(t.z/n,-1,1)):0,azimuth:s>1e-9*Math.max(n,1e-12)?Math.atan2(t.y,t.x):null}}var Kv=.005,jv=new I(1,-1,.8).normalize(),xh=.01,Bf=1e-6,Qv=64,Of=1.05,ey=5e3,_h=(i,e)=>new CustomEvent(i,{detail:e});function zf({bbox:i,grids:e}){let t=r=>Array.isArray(r)&&r.length===3&&r.every(Number.isFinite);if(!t(i?.min)||!t(i?.max))return!0;let n=new it(new I(...i.min),new I(...i.max));if(n.isEmpty())return!0;let s=new I;for(let r of e??[])for(let o of Mr(r)){if(!t(o))return!0;n.expandByPoint(s.fromArray(o))}return n.getSize(s).length()*Of>xh*ey}var Ka=class extends EventTarget{constructor(e,t,{pick:n=()=>null,visibleBox:s=()=>new it}={}){super(),this.dom=t,this.pick=n,this.visibleBox=s,this.target=new I,this.leftButtonMode="orbit",this._perspective=e,this._defaultFov=e.fov,this._orthographic=new Fn(-1,1,1,-1),this.camera=e,this._drag=null,this._wheelPick=null,this._animation=0,this._overlay=null,this._bounds=null,this._extraBounds=new Map,t.style.touchAction="none",t.addEventListener("pointerdown",r=>this._down(r)),t.addEventListener("pointermove",r=>this._move(r)),t.addEventListener("pointerup",r=>this._up(r)),t.addEventListener("pointercancel",()=>this._end()),t.addEventListener("lostpointercapture",r=>this._lostCapture(r)),window.addEventListener("blur",()=>this._end()),t.addEventListener("wheel",r=>this._wheel(r),{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault())}setLeftButtonMode(e){if(e!=="orbit"&&e!=="pan")throw new RangeError(`Unknown left button mode: ${e}`);this.leftButtonMode=e}setProjection(e){if(e!=="perspective"&&e!=="orthographic")throw new RangeError(`Unknown projection: ${e}`);let t=e==="perspective"?this._perspective:this._orthographic,n=this.camera;if(t!==n){this._stopAnimation(),t.position.copy(n.position),n.isOrthographicCamera&&t.position.sub(this.target).divideScalar(n.zoom).add(this.target),t.zoom=1,t.quaternion.copy(n.quaternion),t.up.copy(n.up),n.parent?.add(t),n.parent?.remove(n);for(let s of[...n.children])t.add(s);this.camera=t,this.resize()}}resize(){let e=this.camera,t=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),n=Math.max(e.position.distanceTo(this.target),1e-6);if(e.isPerspectiveCamera)e.aspect=t;else{let r=n*Math.tan(ct.degToRad(this._perspective.fov/2));Object.assign(e,{top:r,bottom:-r,left:-r*t,right:r*t})}let s=this._rangeSphere();if(s){let r=s.center.clone().sub(e.position),o=new I(0,0,-1).applyQuaternion(e.quaternion);e.far=Math.max(1e-6,(r.length()+s.radius)*Of);let a=r.dot(o)-s.radius;e.near=Math.max(a*.95,Math.min(xh,e.far/2))}e.updateProjectionMatrix(),this.dispatchEvent(new Event("change"))}setExtraBounds(e,t){t&&!t.isEmpty()?this._extraBounds.set(e,t.clone()):this._extraBounds.delete(e),this.resize()}_rangeSphere(){let e=this._visibleBounds()?.sphere??null;if(this._extraBounds.size===0)return e;let t=e?this._bounds.box.clone():new it;for(let n of this._extraBounds.values())t.union(n);return t.getBoundingSphere(new Ot)}invalidateBounds(){this._bounds=null}_visibleBounds(){if(!this._bounds){let e=this.visibleBox();this._bounds={box:e,sphere:e.isEmpty()?null:e.getBoundingSphere(new Ot)}}return this._bounds.sphere&&this._bounds}fitBox(e,t=!0){if(e.isEmpty())return;let n=e.getBoundingSphere(new Ot),s=Math.max(n.radius,.001),r=ct.degToRad(this._perspective.fov/2),o=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),a=s/Math.sin(Math.min(r,Math.atan(Math.tan(r)*o))),l=this.camera.position.clone().sub(this.target);l.lengthSq()<1e-12&&l.copy(jv);let c=l.normalize().multiplyScalar(a).add(n.center);t?this.animateTo({position:c,target:n.center}):(this.camera.zoom=1,this._set(c,n.center))}zoomToBox(e){this.fitBox(e,!0)}resetCameraStyle(){this._perspective.fov=this._defaultFov,this.camera.up.set(0,0,1)}restoreViewCamera({position:e,target:t,up:n,fov:s,orthographicHeight:r}){let o=new I(...e),a=new I(...t);if(this.resetCameraStyle(),!n){this.animateTo({position:o,target:a});return}this._stopAnimation(),this.camera.up.fromArray(n),this._perspective.fov=s??this._defaultFov;let l=Math.max(o.distanceTo(a),1e-6);this.camera.zoom=r==null?1:2*l*Math.tan(ct.degToRad(this._perspective.fov/2))/r,this._set(o,a)}animateTo({position:e,target:t,zoom:n=1,overPole:s=!1},r=400){this._stopAnimation();let o={position:this.camera.position.clone(),target:this.target.clone()},a={position:e??o.position,target:t??o.target},l=this.camera.zoom,c=s?Ff(o,a,new I(0,1,0).applyQuaternion(this.camera.quaternion),this.camera.up):u=>Uf(o,a,u),h=performance.now(),d=u=>{let p=Math.min((u-h)/r,1),g=p*p*(3-2*p),_=c(g);this.camera.isOrthographicCamera&&(this.camera.zoom=ct.lerp(l,n,g)),this._set(_.position,_.target,_.up),this._animation=p<1?requestAnimationFrame(d):0};this._animation=requestAnimationFrame(d)}get animating(){return this._animation!==0}_stopAnimation(){cancelAnimationFrame(this._animation),this._animation=0}_set(e,t,n){if(this.camera.position.copy(e),this.target.copy(t),n){let s=this.camera.up.clone();this.camera.up.copy(n),this.camera.lookAt(t),this.camera.up.copy(s)}else this.camera.lookAt(t);this.resize()}_down(e){this._end(),this._stopAnimation(),this.dom.setPointerCapture(e.pointerId),e.preventDefault();let t=e.button===0&&e.shiftKey?"box":e.button===0&&this.leftButtonMode==="orbit"?"orbit":"pan",n={x:e.clientX,y:e.clientY},s=null;t==="orbit"&&(s=this.pick(n.x,n.y),s||(s=this._visibleBounds()?.sphere.center.clone()??this.target.clone())),this._drag={id:e.pointerId,button:e.button,mode:t,pivot:s,down:n,last:n,moved:!1}}_anchor(e,t){let n=this.pick(e,t);if(n)return n;let s=this.dom.getBoundingClientRect(),r=s.left+s.width/2,o=s.top+s.height/2;return e===r&&t===o?null:this.pick(r,o)}_gestureDepth(e,t){let n=this.camera,s=e?e.clone().sub(n.position).dot(t):0;return Math.max(Bf,n.position.distanceTo(this.target),s)}_move(e){let t=this._drag;if(!t||e.pointerId!==t.id)return;if(e.buttons===0)return this._end();let n={x:e.clientX,y:e.clientY};if(!t.moved&&Pf(t.down,n))return;t.moved=!0;let s=n.x-t.last.x,r=n.y-t.last.y;if(t.last=n,t.mode==="box")this._drawRect(t.down,n);else if(t.mode==="orbit"){let o=Lf(this.camera.position,this.target,t.pivot,s,r,Kv);this._set(o.position,o.target)}else this._pan(s,r)}_pan(e,t){let n=this.camera,s=Math.max(this.dom.clientHeight,1);if(n.isPerspectiveCamera&&this._drag.depth===void 0){let{x:c,y:h}=this._drag.down;this._drag.depth=this._gestureDepth(this._anchor(c,h),n.getWorldDirection(new I))}let r=n.isPerspectiveCamera?2*this._drag.depth*Math.tan(ct.degToRad(n.fov/2))/(s*n.zoom):(n.top-n.bottom)/n.zoom/s,o=new I(1,0,0).applyQuaternion(n.quaternion),a=new I(0,1,0).applyQuaternion(n.quaternion),l=o.multiplyScalar(-e*r).addScaledVector(a,t*r);this._set(n.position.clone().add(l),this.target.clone().add(l))}_up(e){let t=this._drag;if(!t||e.pointerId!==t.id||e.button!==t.button)return;let n={x:e.clientX,y:e.clientY};if(this._end(),t.mode==="box"&&t.moved){let s={x:Math.min(t.down.x,n.x),y:Math.min(t.down.y,n.y),width:Math.abs(n.x-t.down.x),height:Math.abs(n.y-t.down.y)},r=gh(t.down.x,n.x);this.dispatchEvent(_h("boxselect",{rect:s,mode:r,ctrl:e.ctrlKey,shift:e.shiftKey}))}else!t.moved&&t.button===0?this.dispatchEvent(_h("click",{x:n.x,y:n.y,button:0,ctrl:e.ctrlKey,shift:e.shiftKey})):!t.moved&&t.button===2&&this.dispatchEvent(_h("contextmenu",{x:n.x,y:n.y}))}_lostCapture(e){this._drag&&e.buttons?this.dom.setPointerCapture(this._drag.id):this._end()}_end(){this._drag=null,this._overlay?.remove(),this._overlay=null}_drawRect(e,t){this._overlay||(this._overlay=document.createElement("div"),Object.assign(this._overlay.style,{position:"fixed",pointerEvents:"none",border:"1px solid #2563eb",background:"rgba(37,99,235,0.12)"}),(this.dom.parentElement??document.body).appendChild(this._overlay)),Object.assign(this._overlay.style,{borderStyle:gh(e.x,t.x)==="window"?"solid":"dashed",left:`${Math.min(e.x,t.x)}px`,top:`${Math.min(e.y,t.y)}px`,width:`${Math.abs(t.x-e.x)}px`,height:`${Math.abs(t.y-e.y)}px`})}_wheel(e){if(e.preventDefault(),e.deltaY===0)return;this._stopAnimation();let t=Nf(e.deltaY,e.deltaMode,this.dom.clientHeight),n=this.camera,s=n.position.distanceTo(this.target),r=this._visibleBounds()?.sphere.radius??0,o=Qv*Math.max(r,.001);if(n.isOrthographicCamera){let{left:_,top:m,width:f,height:M}=this.dom.getBoundingClientRect();if(!f||!M)return;let E=ct.clamp(n.zoom/t,Math.max(1e-6,Math.min(n.zoom,s/o)),1e6);if(E===n.zoom)return;let b=new I((2*(e.clientX-_)/f-1)*n.right,(1-2*(e.clientY-m)/M)*n.top,0).multiplyScalar(1/n.zoom-1/E).applyQuaternion(n.quaternion);n.zoom=E,this._set(n.position.clone().add(b),this.target.clone().add(b));return}this._wheelPick||(this._wheelPick={point:this._anchor(e.clientX,e.clientY)},requestAnimationFrame(()=>this._wheelPick=null));let a=n.getWorldDirection(new I),l=this._gestureDepth(this._wheelPick.point,a);if(!Number.isFinite(l))return;let c=Math.min(xh,Math.max(Bf,r)),h=ct.clamp(l*t,c,Math.max(l,o))/l;if(h===1)return;let d=n.position.clone().addScaledVector(a,l),u=this._wheelPick.point,p=u&&u.clone().sub(n.position).dot(a)>=c?u:d,g=Df(n.position,d,p,h);this._set(g.position,g.target)}};function ee(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function Kt(i,e,t){let n=ee("button",i);return n.type="button",n.innerHTML=e,n.title=t,n.setAttribute("aria-label",t),n}function Ns(i){i.preventDefault(),i.stopPropagation()}function ja(i){Ns(i);let e=i.button===2,t=()=>{window.removeEventListener("pointerup",n,!0),setTimeout(()=>{window.removeEventListener("click",Ns,!0),e&&window.removeEventListener("contextmenu",Ns,!0)})},n=s=>{Ns(s),t()};window.addEventListener("pointerup",n,!0),window.addEventListener("click",Ns,!0),e&&window.addEventListener("contextmenu",Ns,!0)}function Lr(i,e,t,n){let s=e.clone().applyMatrix4(t.matrixWorldInverse).z<0,r=e.clone().project(t);i.hidden=!(s&&Math.abs(r.x)<=1&&Math.abs(r.y)<=1),!i.hidden&&(i.style.left=`${n.left+(r.x+1)/2*n.width}px`,i.style.top=`${n.top+(1-r.y)/2*n.height}px`)}var pt=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,kf='<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',Ze={model:pt('<path d="M4 6h2M10 6h10M4 12h2M10 12h10M4 18h2M10 18h10"/>'),views:pt('<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>'),sections:pt('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),clashes:pt('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>'),bcf:pt('<path d="M4 4h16v13H9l-5 4z"/><path d="M8 8h8M8 12h5"/>'),timeliner:pt('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),links:pt('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),orbit:pt('<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>'),pan:pt('<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>'),fit:pt('<path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"/>'),projection:pt(kf),plane:pt('<path d="M3 17l5-6h13l-5 6z"/><path d="M12 14V4M9 7l3-3 3 3"/>'),box:pt(`<g stroke-dasharray="3 2.5">${kf}</g>`),resetSections:pt('<circle cx="12" cy="12" r="8"/><path d="M6.5 17.5l11-11"/>'),distance:pt('<path d="M3 16L16 3l5 5L8 21z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>'),displayMode:pt('<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>'),grids:pt('<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'),opacity:pt('<path d="M12 3l6 8a6 6 0 1 1-12 0z"/>'),fullscreen:pt('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),close:pt('<path d="M6 6l12 12M18 6L6 18"/>'),chevron:pt('<path d="M9 6l6 6-6 6"/>'),flip:pt('<path d="M4 12h16"/><path d="M9 8l3-4 3 4M9 16l3 4 3-4"/>'),remove:pt('<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13M9 7V4h6v3"/>'),play:pt('<path d="M7 4l13 8-13 8z"/>'),pause:pt('<path d="M8 4v16M16 4v16"/>'),home:pt('<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/>')};var Dr=new I(0,0,1),cn={right:new I(1,0,0),left:new I(-1,0,0),back:new I(0,1,0),front:new I(0,-1,0),top:new I(0,0,1),bottom:new I(0,0,-1)},ty={right:Dr,left:Dr,back:Dr,front:Dr,top:cn.back,bottom:cn.front},Vi=.7,ny=ct.degToRad(1),Vf=.01,Hf=96,Qa=1.75;function Gf(i){let e=i.split("-"),t=new I;for(let n of e){if(!Object.hasOwn(cn,n))throw new RangeError(`Unknown view cube region: ${i}`);t.add(cn[n])}if(new Set(e).size!==e.length||t.lengthSq()!==e.length)throw new RangeError(`Unknown view cube region: ${i}`);return t.normalize()}function iy(i){let e=[];return Math.abs(i.z)>=Vi&&e.push(i.z>0?"top":"bottom"),Math.abs(i.y)>=Vi&&e.push(i.y>0?"back":"front"),Math.abs(i.x)>=Vi&&e.push(i.x>0?"right":"left"),e.join("-")}function vh(i,e=ny){let t=i.clone().normalize(),n=Math.cos(e);return Object.keys(cn).find(s=>t.dot(cn[s])>=n)??null}function Wf(i){let e=new I(i.x,i.y,0);if(e.lengthSq()<1e-24)return"front";e.normalize();let t=["front","right","back","left"],n=Math.max(...t.map(s=>e.dot(cn[s])));return t.find(s=>e.dot(cn[s])>=n-1e-9)}function yh(i,e){return cn[Wf(e)].clone().multiplyScalar(Math.sin(Vf)).addScaledVector(cn[i],Math.cos(Vf))}function sy(i,e){let t=vh(i);if(!t)return null;let n=t==="top"||t==="bottom";if(e==="left"||e==="right")return(n?yh(t,i):Gf(t)).applyAxisAngle(Dr,e==="right"?Math.PI/2:-Math.PI/2);if(e!=="up"&&e!=="down")throw new RangeError(`Unknown arrow: ${e}`);if(!n)return yh(e==="up"?"top":"bottom",i);let s=cn[Wf(i)];return e==="up"==(t==="top")?s.clone().negate():s.clone()}function ry(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="#2a2f38",n.fillRect(0,0,128,128),n.fillStyle="#cbd5e1",n.textAlign="center",n.textBaseline="middle",n.font=`600 26px ${e}`;let s=n.measureText(i).width;s>112&&(n.font=`600 ${Math.floor(2912/s)}px ${e}`),n.fillText(i,64,64);let r=new tr(t);return r.colorSpace=At,r}var el=class{constructor(e,t,n){this.controls=n,this.home={position:t.position.clone(),target:n.target.clone()},this.element=ee("div","ioviewer-viewcube"),this.canvas=ee("canvas","ioviewer-viewcube-canvas"),this.canvas.title=se("cube.title"),this.canvas.setAttribute("aria-label",se("cube.title")),this.element.append(this.canvas),this.error=null,this.renderer=this._createRenderer(),this.scene=new Ri,this.camera=new Fn(-Qa,Qa,Qa,-Qa,.1,10),this.faces=new Rt;let s=getComputedStyle(e).fontFamily;for(let[l,c]of Object.entries(cn)){let h=se(`face.${l}`),d=new xt(new yn(2,2),new tn({map:ry(h,s)})),u=ty[l];d.quaternion.setFromRotationMatrix(new ke().makeBasis(u.clone().cross(c),u,c)),d.position.copy(c),d.name=l,d.userData.label=h,this.faces.add(d)}let r=new vn(new Di(new dn(2,2,2)),new an({color:"#5b6575"}));this.highlight=new xt(new dn(1,1,1),new tn({color:"#2563eb",transparent:!0,opacity:.6})),this.highlight.visible=!1,this.scene.add(this.faces,r,this.highlight),this._raycaster=new Ni,this.hovered=null,this._pointer=null,this.element.addEventListener("contextmenu",l=>l.preventDefault());let o=l=>{this._pointer=[l.clientX,l.clientY],this._hover(this.regionAtClient(...this._pointer))&&this._render()};this.canvas.addEventListener("pointerenter",o),this.canvas.addEventListener("pointermove",o),this.canvas.addEventListener("pointerleave",()=>{this._pointer=null,this._hover(null)&&this._render()}),this.canvas.addEventListener("click",l=>{let c=this.regionAtClient(l.clientX,l.clientY);if(!c)return;let h=c==="top"||c==="bottom";this._look(h?yh(c,n.camera.position.clone().sub(n.target)):Gf(c))}),this.arrows=["up","down","left","right"].map(l=>{let c=Kt("ioviewer-viewcube-arrow",Ze.chevron,se(`cube.${l}`));return c.dataset.arrow=l,c.addEventListener("click",h=>{h.detail&&c.blur(),this._arrow(l)}),c});let a=Kt("ioviewer-viewcube-home",Ze.home,se("cube.home"));a.addEventListener("click",l=>{l.detail&&a.blur(),n.resetCameraStyle(),n.animateTo({position:this.home.position.clone(),target:this.home.target.clone()})}),this.element.append(...this.arrows,a),e.append(this.element),this.update()}_createRenderer(){this.canvas.addEventListener("webglcontextlost",t=>{t.stopImmediatePropagation(),this._fail(new Error("The view cube lost its WebGL context."))});let e=this.canvas.getContext("webgl2",{alpha:!0,antialias:!0});if(!e)return this._fail(new Error("WebGL 2 is not available for the view cube."));try{let t=new Rs({canvas:this.canvas,context:e,alpha:!0,antialias:!0});return t.setPixelRatio(window.devicePixelRatio),t.setSize(Hf,Hf),t}catch(t){return this._fail(t)}}_fail(e){return this.error=e,this.renderer=null,this.element.hidden=!0,null}_render(){if(this.renderer)try{this.renderer.render(this.scene,this.camera)}catch(e){this._fail(e)}}update(){if(!this.renderer)return;let e=this.controls.camera,t=!this.camera.quaternion.equals(e.quaternion);this.camera.quaternion.copy(e.quaternion),this.camera.position.set(0,0,5).applyQuaternion(e.quaternion),this.camera.updateMatrixWorld();let n=vh(e.position.clone().sub(this.controls.target))!==null;for(let s of this.arrows)s.hidden=!n;t&&this._pointer&&this._hover(this.regionAtClient(...this._pointer)),this._render()}regionAtClient(e,t){let n=this.canvas.getBoundingClientRect(),s=new Ve((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2);this._raycaster.setFromCamera(s,this.camera);let r=this._raycaster.intersectObjects(this.faces.children)[0];return r?iy(r.point):null}_hover(e){if(e===this.hovered)return!1;if(this.hovered=e,this.highlight.visible=!!e,e){let t=e.split("-").reduce((a,l)=>a.add(cn[l]),new I),n=a=>a===0?[-Vi,Vi]:a>0?[Vi,1.02]:[-1.02,-Vi],[s,r,o]=t.toArray().map(n);this.highlight.scale.set(s[1]-s[0],r[1]-r[0],o[1]-o[0]),this.highlight.position.set((s[0]+s[1])/2,(r[0]+r[1])/2,(o[0]+o[1])/2)}return!0}_arrow(e){let n=this.controls.camera.position.clone().sub(this.controls.target),s=sy(n,e);if(!s)return;let r=vh(n),o=r==="top"&&e==="up"||r==="bottom"&&e==="down";this._look(s,o)}_look(e,t=!1){let{controls:n}=this,s=n.camera.position.distanceTo(n.target);n.animateTo({position:e.clone().multiplyScalar(s).add(n.target),target:n.target.clone(),zoom:n.camera.zoom,overPole:t})}};var oy=`
#include <common>
${Tr}
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
void main() {
  ${Ar}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #ifdef IO_PICK_DEPTH
  vViewDepth = -mvPosition.z;
  #endif
  vec4 wp = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  #endif
  vPos = ( modelMatrix * wp ).xyz;
  vSlot = vec2( float( slot >> 12 ), float( slot & 4095 ) );
  if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`,ay=`
#include <common>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec3 vPos;
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  float id = floor( vSlot.x + 0.5 ) * 4096.0 + floor( vSlot.y + 0.5 ) + 1.0;
  #if defined( IO_PICK_DEPTH )
  uint bits = floatBitsToUint( vViewDepth );
  uvec4 bytes = ( uvec4( bits ) >> uvec4( 0u, 8u, 16u, 24u ) ) & 255u;
  gl_FragColor = vec4( bytes ) / 255.0;
  #elif defined( IO_PICK_RGBA8 )
  gl_FragColor = vec4( mod( id, 256.0 ), mod( floor( id / 256.0 ), 256.0 ), mod( floor( id / 65536.0 ), 256.0 ), floor( id / 16777216.0 ) ) / 255.0;
  #else
  gl_FragColor = vec4( vPos, id );
  #endif
}`,Xf=i=>i&&{element:i.element,point:i.point.clone()};function bh(i,e){let t=new Vt({vertexShader:oy,fragmentShader:ay,uniforms:i,defines:e?{[e]:""}:{},side:It,clipping:!0});return t.index0AttributeName="q",t}var tl=class{constructor(e,t,n,s={}){this.renderer=e,this.scene=t,this.camera=n,this._lost=!1,e.domElement.addEventListener("webglcontextlost",()=>this._lost=!0),this._last=null,this._lastTile=null,this._key=new Float64Array(36),t.root.addEventListener("change",o=>{o.detail.kind!=="appearance"&&(this._last=this._lastTile=null)});let r=t.slotUniforms;this._float=s.pickFloat!==!1&&e.extensions.has("EXT_color_buffer_float"),this._float?(this._material=bh(r,null),this._target=new Ft(1,1,{type:Gt}),this._pixel=new Float32Array(4)):(this._material=bh(r,"IO_PICK_RGBA8"),this._depthMaterial=bh(r,"IO_PICK_DEPTH"),this._target=new Ft(1,1),this._pixel=new Uint8Array(4))}pick(e,t){let n=this.renderer.domElement.getBoundingClientRect(),s=Math.floor(e-n.left),r=Math.floor(t-n.top);if(this._lost||!(s>=0&&r>=0&&s<n.width&&r<n.height))return null;let o=this._sampleKey(s,r,n),a=this.camera,l=this._last;if(l&&l.camera===a&&l.key.every((h,d)=>h===o[d]))return Xf(l.hit);let c=this._pick(s,r,n);return this._last={camera:a,key:o.slice(),hit:c},Xf(c)}_sampleKey(e,t,n){this.camera.updateMatrixWorld();let s=this._key;return s.set([e,t,n.width,n.height]),s.set(this.camera.matrixWorld.elements,4),s.set(this.camera.projectionMatrix.elements,20),s}measureTile(e,t,n){let s=this.renderer.domElement.getBoundingClientRect(),r=Math.floor(e-s.left),o=Math.floor(t-s.top);if(this._lost||!(r>=0&&o>=0&&r<s.width&&o<s.height))return null;let a=this._sampleKey(r,o,s),l=this.camera,c=this._lastTile;if(c&&c.camera===l&&c.radius===n&&c.key.every((v,S)=>v===a[S]))return c.tile;let h=n*2+1;(!this._measure||this._measure.target.width!==h)&&(this._measure?.target.dispose(),this._measure={target:new Ft(h,h,this._float?{type:Gt}:{}),ids:this._float?new Float32Array(h*h*4):new Uint8Array(h*h*4),depths:this._float?null:new Uint8Array(h*h*4)});let{target:d,ids:u,depths:p}=this._measure,g=r-n,_=o-n;this._render(this._material,g,_,s,d,u);let m=(v,S)=>{let A=Math.floor(v)-g,x=Math.floor(S)-_;return A>=0&&A<h&&x>=0&&x<h?(h-1-x)*h+A:-1},f=this._float?null:new DataView(u.buffer),M=v=>(this._float?Math.round(u[v*4+3]):f.getUint32(v*4,!0))-1,E=M(m(r,o)),b=null;if(E>=0){p&&this._render(this._depthMaterial,g,_,s,d,p);let v=p&&new DataView(p.buffer),S=l.matrixWorldInverse.elements.slice(),A=U=>{if(v)return v.getFloat32(U*4,!0);let C=U*4;return-(S[2]*u[C]+S[6]*u[C+1]+S[10]*u[C+2]+S[14])},x=m(r,o),T=this._float?new I().fromArray(u,x*4):this._depthPoint(r,o,s,A(x)),R=new Set([E]),L=this.scene.slotElement(E);if(L>=0)for(let U=0;U<h*h;U++){let C=M(U);C>=0&&!R.has(C)&&this.scene.slotElement(C)===L&&R.add(C)}let N=l.isPerspectiveCamera;b={rect:s,point:T,element:L,slots:R,depthAt(U,C,B){let z=m(U,C),W=z<0?-1:M(z);if(W<0)return 1/0;if(W!==B)return A(z);let F=G=>N?1/A(G):A(G),D=F(z);function X(G,Q,le){let ce=Math.sign(le),te=m(U+ce*G,C+ce*Q);if(te>=0&&M(te)===W)return(F(te)-D)*Math.abs(le);let H=m(U-ce*G,C-ce*Q);return H>=0&&M(H)===W?(D-F(H))*Math.abs(le):0}let Z=D+X(1,0,U-Math.floor(U)-.5)+X(0,1,C-Math.floor(C)-.5);return Z>0?N?1/Z:Z:A(z)}}}return this._lastTile={camera:l,key:a.slice(),radius:n,tile:b},this._last={camera:l,key:this._lastTile.key,hit:b},b}_pick(e,t,n){let s=this._render(this._material,e,t,n),r=(this._float?Math.round(s[3]):new Uint32Array(s.buffer)[0])-1;if(r<0)return null;let o=this.scene.slotElement(r);if(this._float)return{element:o,point:new I(s[0],s[1],s[2])};let a=this._render(this._depthMaterial,e,t,n);return{element:o,point:this._depthPoint(e,t,n,new DataView(a.buffer).getFloat32(0,!0))}}_depthPoint(e,t,n,s){let r=this.camera,o=new I((e+.5)/n.width*2-1,1-(t+.5)/n.height*2,-1).applyMatrix4(r.projectionMatrixInverse);return r.isPerspectiveCamera?o.multiplyScalar(-s/o.z):o.z=-s,o.applyMatrix4(r.matrixWorld)}_render(e,t,n,s,r=this._target,o=this._pixel){let{renderer:a,camera:l}=this,c={target:a.getRenderTarget(),color:a.getClearColor(new Fe),alpha:a.getClearAlpha()},h=this.scene._buckets[0]?.material;e.clippingPlanes=h?.clippingPlanes??null,e.clipIntersection=h?.clipIntersection??!1,l.updateMatrixWorld(),l.setViewOffset(s.width,s.height,t,n,r.width,r.height);try{a.setRenderTarget(r),a.setClearColor(0,0),this.scene.withMaterial(e,()=>a.render(this.scene.root,l),{pickCamera:l}),a.readRenderTargetPixels(r,0,0,r.width,r.height,o)}finally{a.setRenderTarget(c.target),a.setClearColor(c.color,c.alpha),l.clearViewOffset()}return o}};var nl=33.333333333333336,ly=200,qf=1e6,cy=20,il=class{constructor(e,t,n=1e7){this.scene=e,this.budget=n,this.minPixels=0,this._requestRender=t,this._last=new Float64Array(32),this._seen=!1,this._requestedAt=null,this._frame=null,this._cost=0,this._fastFrames=0,this._refine=!1,this._settle=0}requested(e){this._requestedAt??(this._requestedAt=e)}begin(e,t,n){e.updateMatrixWorld();let s=this._requestedAt===null?0:Math.max(n-this._requestedAt,0);this._requestedAt=null;let r=this._moved(e);this._frame=r?{start:n,waited:s}:null,this.minPixels=r?this.scene.detailThreshold(e,t,this.budget,this._refine):0,r||(this._fastFrames=0),this.scene.setDetail(this.minPixels,t),r&&(clearTimeout(this._settle),this.minPixels>0&&(this._settle=setTimeout(this._requestRender,ly)))}end(e){this.scene.setDetail(0),this._frame&&this._adapt(this._frame.waited+(e-this._frame.start)),this._frame=null}_adapt(e){this._cost=this._cost?this._cost*.8+e*.2:e,e>nl*1.1?(this._refine=!1,this._fastFrames=0):this._refine||(this._fastFrames=this.minPixels>0&&e<nl*.7?this._fastFrames+1:0,this._refine=this._fastFrames>=cy),this._cost>nl*1.1?this.budget=Math.max(this.budget*.9,qf):this._cost<nl*.7&&this.minPixels>0&&(this.budget=Math.max(Math.min(this.budget*1.05,this.scene.visibleCost),qf))}_moved(e){let t=this._last,n=[...e.matrixWorld.elements,...e.projectionMatrix.elements],s=(o,a)=>a!==26&&a!==30&&Math.abs(o-t[a])>1e-9*Math.max(1,Math.abs(o)),r=this._seen&&n.some(s);return this._seen=!0,t.set(n),r}};var Tn,Us,sl,rl=class extends EventTarget{constructor(){super(...arguments);Ml(this,Us);Ml(this,Tn,new Set)}get size(){return ni(this,Tn).size}has(t){return ni(this,Tn).has(t)}values(){return ni(this,Tn).values()}set(t){$h(this,Tn,new Set(t)),Vr(this,Us,sl).call(this)}toggle(t){ni(this,Tn).delete(t)||ni(this,Tn).add(t),Vr(this,Us,sl).call(this)}clear(){ni(this,Tn).size!==0&&(ni(this,Tn).clear(),Vr(this,Us,sl).call(this))}};Tn=new WeakMap,Us=new WeakSet,sl=function(){this.dispatchEvent(new Event("change"))};function Yf(i,e,t){if(e!=="window"&&e!=="crossing")throw new RangeError(`Unknown box select mode: ${e}`);let n=i.x+i.width,s=i.y+i.height,r=e==="window"?o=>o.minX>=i.x&&o.maxX<=n&&o.minY>=i.y&&o.maxY<=s:o=>o.maxX>=i.x&&o.minX<=n&&o.maxY>=i.y&&o.minY<=s;return t.filter(r).map(o=>o.index)}function $f(i,e,t){let n=new ke().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).elements,{left:s,top:r,width:o,height:a}=t,l=new it,c=[];for(let h=0;h<i.elementCount;h++){if(!i.isVisible(h))continue;let{min:d,max:u}=i.elementBox(h,l),p=1/0,g=1/0,_=-1/0,m=-1/0,f=!0;for(let M=0;M<8&&f;M++){let E=M&1?u.x:d.x,b=M&2?u.y:d.y,v=M&4?u.z:d.z,S=1/(n[3]*E+n[7]*b+n[11]*v+n[15]);f=Math.abs((n[2]*E+n[6]*b+n[10]*v+n[14])*S)<=1;let A=s+((n[0]*E+n[4]*b+n[8]*v+n[12])*S+1)/2*o,x=r+(1-(n[1]*E+n[5]*b+n[9]*v+n[13])*S)/2*a;p=Math.min(p,A),_=Math.max(_,A),g=Math.min(g,x),m=Math.max(m,x)}f&&c.push({index:h,minX:p,minY:g,maxX:_,maxY:m})}return c}var Zf=["model","views","sections","clashes","bcf","timeliner","links"];function Jf(i){let e=ee("nav","ioviewer-rail ioviewer-floating");e.setAttribute("aria-label",se("panels")),i.append(e);let t=new Map,n=null;function s(l){let c=t.get(l);if(!c)throw new RangeError(`Unknown panel: ${l}`);return c}function r(l){let{button:c,panel:h,onClose:d}=s(l);n===l&&(h.hidden=!0,c.classList.remove("active"),c.setAttribute("aria-expanded","false"),n=null,d?.())}function o(l){let{button:c,panel:h}=s(l);c.hidden||n===l||(n&&r(n),h.hidden=!1,c.classList.add("active"),c.setAttribute("aria-expanded","true"),n=l)}function a(l,{icon:c,title:h,render:d,visible:u=!0,onClose:p}){let g=Zf.indexOf(l);if(g<0)throw new RangeError(`Unknown panel: ${l}`);if(t.has(l))throw new Error(`Panel ${l} is already registered.`);let _=Kt("ioviewer-rail-button",c,h);_.dataset.panel=l,_.hidden=!u,_.setAttribute("aria-expanded","false"),_.addEventListener("click",()=>n===l?r(l):o(l));let m=[...e.children].find(v=>Zf.indexOf(v.dataset.panel)>g);e.insertBefore(_,m??null);let f=ee("section","ioviewer-side-panel ioviewer-floating");f.dataset.panel=l,f.hidden=!0,f.setAttribute("aria-label",h);let M=Kt("ioviewer-panel-close",Ze.close,se("close"));M.addEventListener("click",()=>r(l));let E=ee("header","ioviewer-panel-header");E.append(ee("h2","",h),M);let b=ee("div","ioviewer-panel-body");f.append(E,b),i.append(f),t.set(l,{button:_,panel:f,onClose:p}),d(b)}return{rail:e,openPanel:o,closePanel:r,registerPanel:a}}var Kf=[{id:"navigation",items:["orbit","pan","fit","projection"]},{id:"sections",items:["plane","box","resetSections"]},{id:"measure",items:["distance"]},{id:"display",items:["displayMode","grids","opacity"]},{id:"view",items:["fullscreen"]}];function jf(i,e){let t=ee("div","ioviewer-toolbar ioviewer-floating");t.setAttribute("role","toolbar");let n=new Map;for(let a of e){let l=ee("div","ioviewer-toolbar-group");l.setAttribute("role","group"),l.setAttribute("aria-label",se(`group.${a.id}`));let c=ee("div","ioviewer-toolbar-row");for(let h of a.items){let d=Kt("ioviewer-tool",Ze[h],se(`tool.${h}`));d.dataset.tool=h,d.setAttribute("aria-disabled","true");let u={button:d,handler:null};d.addEventListener("click",()=>{d.getAttribute("aria-disabled")!=="true"&&u.handler?.()}),n.set(h,u),c.append(d)}l.append(c,ee("div","ioviewer-toolbar-label",se(`group.${a.id}`))),t.append(l)}i.append(t),new ResizeObserver(()=>i.style.setProperty("--toolbar-height",`${t.offsetHeight}px`)).observe(t);function r(a){let l=n.get(a);if(!l)throw new RangeError(`Unknown tool: ${a}`);return l}function o(a,l){r(a).button.setAttribute("aria-disabled",String(!l))}return{element:t,setHandler(a,l){r(a).handler=l,o(a,!0)},setEnabled:o,setActive(a,l){let{button:c}=r(a);c.classList.toggle("active",l),c.setAttribute("aria-pressed",String(l))}}}var hy="input, textarea, select, [contenteditable]";function Mh(i){return i.key==="ContextMenu"||i.code==="ContextMenu"||i.shiftKey&&(i.key==="F10"||i.code==="F10")}function Qf(i){if(i.ctrlKey||i.altKey||i.metaKey||i.repeat||i.target?.closest?.(hy))return null;if(Mh(i))return"contextMenu";switch(i.code){case"KeyH":return i.shiftKey?"showAll":"hide";case"KeyI":return i.shiftKey?null:"isolate";case"KeyF":return i.shiftKey?null:"zoomTo";case"Escape":return"escape";default:return null}}function ep(i,e,t,n,s){let r=ee("details","ioviewer-tree-filters");r.hidden=i.length===0;let o=ee("summary","",se("filters.title")),a=ee("div","ioviewer-filter-fields"),l=new Map(e.map(({id:v,name:S})=>[v,S||`#${v}`])),c=v=>v.modelId??e[0]?.id??null,h=v=>v.levelId??(v.level||null),d=v=>v.category??"",u=[{name:se("filters.model"),key:c,labels:new Map},{name:se("level"),key:h,labels:new Map},{name:se("category"),key:d,labels:new Map}],[p,g,_]=u,m=ee("div","ioviewer-filter-actions"),f=ee("button","ioviewer-text-button",se("filters.clear"));f.type="button",f.addEventListener("click",()=>{for(let v of u)v.select&&(v.select.selectedIndex=0);t.value="",n(),t.focus()});let M=ee("button","ioviewer-text-button",se("filters.isolate"));M.type="button",M.addEventListener("click",s),m.append(f,M),r.append(o,a,m);function E(){if(r.open){r.removeEventListener("toggle",E);for(let v of i){let S=c(v),A=l.get(S)??(S==null?"":`#${S}`);S!=null&&p.labels.set(S,A);let x=h(v);if(!g.labels.has(x)){let R=v.level||(x==null?se("filters.noLevel"):`#${x}`);g.labels.set(x,x!=null&&e.length>1&&A?`${R} \xB7 ${A}`:R)}let T=d(v);_.labels.set(T,T||se("noCategory"))}for(let v of u){if(!v.labels.size)continue;let S=new Map;for(let R of v.labels.values())S.set(R,(S.get(R)??0)+1);let A=[...v.labels].map(([R,L])=>[R,S.get(L)>1?`${L} (#${R})`:L]);A.sort((R,L)=>R[1].localeCompare(L[1])),v.keys=A.map(([R])=>R);let x=v.select=ee("select");x.append(new Option(se("filters.all"),""));for(let[R,[,L]]of A.entries())x.append(new Option(L,String(R+1)));x.addEventListener("change",n);let T=ee("label","ioviewer-filter-field");T.append(ee("span","",v.name),x),a.append(T)}}}r.addEventListener("toggle",E);function b(){return u.filter(v=>v.select?.selectedIndex>0)}return{element:r,predicate(){let v=b().map(({select:S,keys:A,key:x})=>({key:x,value:A[S.selectedIndex-1]}));return v.length?S=>v.every(({key:A,value:x})=>A(S)===x):null},update(v,S){let A=b().length;o.textContent=A?`${se("filters.title")} (${A})`:se("filters.title"),f.disabled=!A&&!v,M.disabled=!S}}}var yi=24,uy=8;function Sh(i,e,t,n,s){let r=Math.min(n,Math.max(0,Math.floor(i/e)-s)),o=Math.min(n,Math.ceil((i+t)/e)+s);return{start:r,end:Math.max(r,o)}}function dy(i){let e=null;return t=>{let n=t.trim().toLowerCase();e??(e=i.map(r=>`${r.name??""}
${r.type??""}
${r.id}
${r.sourceId??""}`.toLowerCase()));let s=[];for(let r=0;r<e.length;r++)e[r].includes(n)&&s.push(r);return s}}function fy(i){let e=new Map;return i.forEach((t,n)=>{let s=t.category??"";e.has(s)||e.set(s,[]),e.get(s).push(n)}),[...e].map(([t,n])=>({name:t,indices:n})).sort((t,n)=>t.name.localeCompare(n.name))}function tp(i,{elements:e,models:t,selection:n,scene:s,zoomToElement:r,openContextMenu:o}){let a=fy(e),l=new Int32Array(e.length);a.forEach((G,Q)=>G.indices.forEach(le=>l[le]=Q));let c=new Uint8Array(a.length),h=new Int32Array(a.length),d=new Uint32Array(a.length),u=dy(e),p="",g=!1,_=new Int32Array(0),m=0,f=-1,M=null,E=!1,b=ee("input","ioviewer-tree-search");b.type="search",b.placeholder=se("searchPlaceholder"),b.setAttribute("aria-label",se("searchPlaceholder"));let v=ee("div","ioviewer-tree");v.setAttribute("role","tree"),v.setAttribute("aria-label",se("panel.model")),v.setAttribute("aria-multiselectable","true"),v.tabIndex=-1;let S=ee("div","ioviewer-tree-spacer");S.setAttribute("role","presentation"),v.append(S);let A=ee("div","ioviewer-tree-empty",se("noMatches")),x=ep(e,t,b,D,()=>s.isolate(_));i.append(x.element,b,v,A);function T(){let G=_[m],Q=x.predicate();if(g=!!(p||Q),g){let ce=p?u(p):e.keys();if(Q){let te=[];for(let H of ce)Q(e[H])&&te.push(H);_=Int32Array.from(te)}else _=Int32Array.from(ce)}else{let ce=a.length;a.forEach((H,j)=>c[j]&&(ce+=H.indices.length)),_=new Int32Array(ce);let te=0;a.forEach((H,j)=>{if(h[j]=te,_[te++]=-(j+1),c[j])for(let ue of H.indices)_[te++]=ue})}let le=_.indexOf(G);m=le>=0?le:0,S.style.height=`${_.length*yi}px`,A.hidden=_.length>0||!g,x.update(p,!!s.isolate&&g&&_.some(ce=>s.instancesOf(ce).length>0)),R()}function R(G=v.contains(document.activeElement)){let Q=v.clientHeight;if(Q===0||_.length===0){S.replaceChildren();return}let le=v.scrollTop,{start:ce,end:te}=Sh(le,yi,Q,_.length,uy);!G&&(m<ce||m>=te)&&(m=Math.min(_.length-1,Math.floor(le/yi)));let H=[];m<ce&&H.push(L(m));for(let j=ce;j<te;j++)H.push(L(j));m>=te&&H.push(L(m)),S.replaceChildren(...H),G&&S.querySelector('[tabindex="0"]')?.focus({preventScroll:!0})}function L(G){let Q=_[G],le=Q<0?-Q-1:l[Q],ce=Q<0?d[le]===a[le].indices.length:n.has(Q),te=ee("div","tree-row");if(te.style.top=`${G*yi}px`,te.style.height=`${yi}px`,te.dataset.row=G,te.tabIndex=G===m?0:-1,te.setAttribute("role","treeitem"),te.classList.toggle("selected",ce),te.setAttribute("aria-selected",String(ce)),Q<0){te.classList.add("tree-category"),te.setAttribute("aria-level","1"),te.setAttribute("aria-posinset",String(le+1)),te.setAttribute("aria-setsize",String(a.length)),te.setAttribute("aria-expanded",String(!!c[le]));let H=ee("span","tree-chevron");H.innerHTML=Ze.chevron;let{name:j,indices:ue}=a[le];te.append(H,ee("span","tree-name",j||se("noCategory")),ee("span","tree-count",Pr(ue.length)))}else{let H=e[Q];te.classList.add("tree-element"),te.setAttribute("aria-level",g?"1":"2"),te.setAttribute("aria-posinset",String(g?G+1:G-h[le])),te.setAttribute("aria-setsize",String(g?_.length:a[le].indices.length)),te.classList.toggle("tree-child",!g),te.classList.toggle("tree-hidden",s.isVisible?.(Q)===!1),te.append(ee("span","tree-name",H.name||`#${H.id}`),ee("span","tree-type",H.type??""))}return te}function N(G){let Q=v.clientHeight;if(Q===0){f=G;return}let le=G*yi;le<v.scrollTop?v.scrollTop=le:le+yi>v.scrollTop+Q&&(v.scrollTop=le+yi-Q)}function U(G){m=G,N(G),R(!0)}function C(G){let Q=l[G];!g&&!c[Q]&&(c[Q]=1,T());let le=_.indexOf(G);le>=0&&(v.contains(document.activeElement)||(m=le),N(le)),R()}function B(G){E=!0;try{n.set(G)}finally{E=!1}}function z(G,Q){let le=_.indexOf(M);le<0&&(le=G,M=_[G]);let ce=_.subarray(Math.min(le,G),Math.max(le,G)+1).filter(te=>te>=0);ce.length>0&&B(Q?[...n.values(),...ce]:ce)}function W(G){M=G;let Q=-G-1,le=G<0?a[Q].indices:[G],ce=G<0?d[Q]===le.length:n.has(G),te=new Set(n.values());for(let H of le)ce?te.delete(H):te.add(H);B(te)}function F(G,Q,le){G>=0&&!n.has(G)&&(M=G,B([G]));let ce=G>=0?G:n.values().next().value??null;o(Q,le,ce,()=>{let te=_.indexOf(G);te>=0?U(te):b.focus()})}b.addEventListener("focus",()=>{S.firstElementChild||Z()});function D(){p=b.value.trim(),v.scrollTop=0,f=-1,m=-1,T()}b.addEventListener("input",D),v.addEventListener("scroll",()=>R()),v.addEventListener("focusin",G=>{let Q=G.target.closest(".tree-row");!Q||Q.tabIndex===0||(S.querySelector('[tabindex="0"]')?.setAttribute("tabindex","-1"),m=Number(Q.dataset.row),Q.tabIndex=0)}),v.addEventListener("keydown",G=>{let Q=G.target.closest(".tree-row");if(!Q||G.ctrlKey||G.altKey||G.metaKey)return;let le=Number(Q.dataset.row),ce=_[le];if(Mh(G)){if(G.preventDefault(),!G.repeat){let{left:H,bottom:j}=Q.getBoundingClientRect();F(ce,H,j)}return}if(G.key===" "){G.preventDefault(),G.repeat||(G.shiftKey?z(le,!1):W(ce));return}if(G.shiftKey)return;let te=le;switch(G.key){case"ArrowUp":te=Math.max(0,le-1);break;case"ArrowDown":te=Math.min(_.length-1,le+1);break;case"Home":te=0;break;case"End":te=_.length-1;break;case"ArrowRight":ce<0&&(c[-ce-1]?te=le+1:(c[-ce-1]=1,T()));break;case"ArrowLeft":ce>=0&&!g?te=h[l[ce]]:ce<0&&c[-ce-1]&&(c[-ce-1]=0,T());break;case"Enter":G.repeat||X(ce);break;default:return}G.preventDefault(),te!==le&&U(te)});function X(G){if(G>=0){M=G,B([G]),r(G);return}c[-G-1]^=1,T()}v.addEventListener("click",G=>{let Q=G.target.closest(".tree-row");if(!Q)return;let le=Number(Q.dataset.row),ce=G.ctrlKey||G.metaKey;G.shiftKey?z(le,ce):ce?W(_[le]):X(_[le])}),v.addEventListener("contextmenu",G=>{let Q=G.target.closest(".tree-row");Q&&(G.preventDefault(),F(_[Number(Q.dataset.row)],G.clientX,G.clientY))});function Z(){f>=0&&v.clientHeight>0&&(N(f),f=-1),R()}new ResizeObserver(Z).observe(v),n.addEventListener("change",()=>{let G=-1;d.fill(0);for(let Q of n.values())d[l[Q]]++,G=Q;if(E){R();return}M=null,G>=0?C(G):R()}),s.root?.addEventListener("change",G=>G.detail.kind==="visibility"&&R()),T()}var np={element:["properties","hide","isolate","showAll","-","zoomTo","sectionBox","-","copyId"],empty:["showAll","fitAll","resetSections"]},py={hide:"H",isolate:"I",showAll:"Shift+H",zoomTo:"F"},ol=4;function ip(i){let e=ee("div","ioviewer-context-menu");e.setAttribute("role","menu"),e.setAttribute("aria-label",se("contextMenu")),e.hidden=!0,i.append(e);let t=new Map(Object.values(np).flat().filter(c=>c!=="-").map(c=>[c,{enabled:!1,handler:null}])),n=null;function s(){if(e.hidden)return;let c=e.contains(document.activeElement)?n:null;n=null,e.hidden=!0,e.replaceChildren(),window.removeEventListener("pointerdown",o,!0),window.removeEventListener("wheel",s,!0),window.removeEventListener("scroll",r,!0),window.removeEventListener("resize",s),c?.()}function r(c){i.contains(c.target)||s()}function o(c){e.contains(c.target)||(s(),ja(c))}function a(c,h,d,u,p=null){let g=np[c];if(!g)throw new RangeError(`Unknown menu: ${c}`);s(),n=p;for(let f of g){if(f==="-"){let b=ee("div","ioviewer-menu-separator");b.setAttribute("role","separator"),e.append(b);continue}let M=t.get(f),E=ee("button","ioviewer-menu-item");E.type="button",E.tabIndex=-1,E.dataset.item=f,E.setAttribute("role","menuitem"),E.setAttribute("aria-disabled",String(!M.enabled)),M.enabled||(E.title=se("menu.unavailable")),E.append(ee("span","",se(`menu.${f}`)),ee("kbd","",py[f]??"")),E.addEventListener("click",()=>{M.enabled&&(s(),M.handler(u))}),e.append(E)}e.hidden=!1;let{width:_,height:m}=e.getBoundingClientRect();e.style.left=`${Math.max(ol,Math.min(h,innerWidth-_-ol))}px`,e.style.top=`${Math.max(ol,Math.min(d,innerHeight-m-ol))}px`,window.addEventListener("pointerdown",o,!0),window.addEventListener("wheel",s,!0),window.addEventListener("scroll",r,!0),window.addEventListener("resize",s),p&&e.querySelector("button")?.focus({preventScroll:!0})}e.addEventListener("keydown",c=>{if(c.key==="Tab"){s();return}if(c.key==="Escape"){c.preventDefault(),s();return}let h=[...e.querySelectorAll("button")],d=h.indexOf(document.activeElement),u;switch(c.key){case"ArrowDown":u=(d+1)%h.length;break;case"ArrowUp":u=(d+h.length-1)%h.length;break;case"Home":u=0;break;case"End":u=h.length-1;break;default:return}c.preventDefault(),h[u]?.focus({preventScroll:!0})});function l(c,{enabled:h=!0,handler:d}){let u=t.get(c);if(!u)throw new RangeError(`Unknown menu item: ${c}`);d&&(u.handler=d),u.enabled=h&&!!u.handler}return{element:e,open:a,close:s,setItem:l,get isOpen(){return!e.hidden}}}var my=1600;function sp(i,e,t){let n=()=>i.textContent=`${se("selected")}: ${Pr(e.size)} \xB7 ${se("elements")}: ${Pr(t)}`;e.addEventListener("change",n),n()}function rp(i,e){if(!e)return;let t=ee("div","ioviewer-banner ioviewer-floating");t.setAttribute("role","status");let n=se("truncated").replace("{meshes}",e.meshes).replace("{total}",e.totalMeshes),s=Kt("ioviewer-panel-close",Ze.close,se("close")),r=new ResizeObserver(()=>i.style.setProperty("--banner-height",`${t.offsetHeight}px`));s.addEventListener("click",()=>{r.disconnect(),i.style.removeProperty("--banner-height"),t.remove()}),t.append(ee("span","",n),s),i.append(t),r.observe(t)}function Fs(i,e){let t=ee("div","ioviewer-toast",e);t.setAttribute("role","status"),i.append(t),setTimeout(()=>t.remove(),my)}function op(i,e){let t=ee("table");for(let[s,r]of e)t.insertRow().append(ee("th","",s),ee("td","",String(r??"")));let n=ee("section");return n.append(ee("h3","",i),t),n}function ap(i,e,t){let n=ee("h2","ioviewer-properties-title"),s=ee("button","ioviewer-properties-close","\xD7");s.type="button",s.title=se("close"),s.setAttribute("aria-label",se("close")),s.addEventListener("click",()=>e.clear());let r=ee("header");r.append(n,s);let o=ee("div","ioviewer-properties-body");i.replaceChildren(r,o),i.hidden=!0;let a=h=>{let d=[[se("id"),h.id],[se("category"),h.category],[se("type"),h.type],[se("level"),h.level]];return h.sourceId&&d.push([se("sourceId"),h.sourceId]),h.link&&d.push([se("link"),h.link]),op(se("elementGroup"),d)},l=h=>{for(let[d,u]of Object.entries(h??{}))o.append(op(d,Object.entries(u)))},c;e.addEventListener("change",()=>{if(c?.abort(),c=void 0,o.removeAttribute("aria-busy"),i.hidden=e.size===0,o.replaceChildren(),e.size!==1){n.textContent=`${se("selected")}: ${e.size}`;return}let[h]=e.values(),d=t.meta.elements[h];if(n.textContent=d.name||`#${d.id}`,o.append(a(d)),!t.loadProperties){l(t.props(d.id));return}let u=new AbortController;c=u,o.setAttribute("aria-busy","true"),t.loadProperties(h,u.signal).then(p=>{u.signal.aborted||!p||(n.textContent=p.name||d.name||`#${d.id}`,o.replaceChildren(a({...d,...p})),l(p.properties))}).catch(()=>{u.signal.aborted||o.append(ee("p","",se("badData")))}).finally(()=>{c===u&&o.removeAttribute("aria-busy")})})}async function gy(i){if(await navigator.clipboard?.writeText(i).then(()=>!0,()=>!1))return!0;let e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.className="ioviewer-offscreen",document.body.append(e),e.select();try{return document.execCommand("copy")}finally{e.remove()}}function lp({root:i,data:e,scene:t,controls:n,picker:s,selection:r,measure:o}){let{meta:a}=e,l=()=>n.fitBox(t.visibleBox()),c={hide:t.setVisible&&(()=>r.size&&t.setVisible([...r.values()],!1)),isolate:t.isolate&&(()=>r.size&&t.isolate([...r.values()])),showAll:t.showAll&&(()=>t.showAll()),zoomTo:()=>{if(!r.size)return l();let[M,...E]=r.values(),b=t.elementBox(M);for(let v of E)b.union(t.elementBox(v));n.zoomToBox(b)},fitAll:l},h=Jf(i);h.registerPanel("model",{icon:Ze.model,title:se("panel.model"),visible:a.elements.length>0||!!t.setVisible,render:M=>tp(M,{elements:a.elements,models:a.models??[],selection:r,scene:t,openContextMenu:_,zoomToElement:E=>n.zoomToBox(t.elementBox(E))})});let d=document.createElement("aside");d.id="ioviewer-properties",d.className="ioviewer-floating",i.append(d),ap(d,r,e);let u=jf(i,Kf),p=M=>{n.setLeftButtonMode(M),u.setActive("orbit",M==="orbit"),u.setActive("pan",M==="pan")};u.setHandler("orbit",()=>p("orbit")),u.setHandler("pan",()=>p("pan")),p(n.leftButtonMode),u.setHandler("fit",l),u.setHandler("projection",()=>{let M=!n.camera.isOrthographicCamera;n.setProjection(M?"orthographic":"perspective"),u.setActive("projection",M)}),u.setActive("projection",!1),document.fullscreenEnabled&&(u.setHandler("fullscreen",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{u.setActive("fullscreen",!!document.fullscreenElement),Fs(i,se("fullscreenUnavailable"))})}),document.addEventListener("fullscreenchange",()=>u.setActive("fullscreen",!!document.fullscreenElement)));let g=ip(i);function _(M,E,b,v){g.open(b===null?"empty":"element",M,E,b,v)}function m(M){if(g.isOpen)return;let E=M===document.body,b=(E?n.dom:M).getBoundingClientRect(),v=E?b.left+b.width/2:b.left,S=E?b.top+b.height/2:b.bottom;_(v,S,r.values().next().value??null,()=>M.focus({preventScroll:!0}))}g.setItem("properties",{handler:M=>r.set([M])});for(let M of["hide","isolate","showAll","zoomTo","fitAll"])g.setItem(M,{handler:c[M]});g.setItem("copyId",{handler:M=>gy(String(a.elements[M].id)).then(E=>Fs(i,se(E?"idCopied":"copyFailed")),()=>Fs(i,se("copyFailed")))}),n.addEventListener("contextmenu",async M=>{let{x:E,y:b}=M.detail;if(o?.active)return _(E,b,r.values().next().value??null);let v=s.pick(E,b),S=v?.then?await v:v;if(S!==void 0){if(!S||S.element<0)return _(E,b,null);r.has(S.element)||r.set([S.element]),_(E,b,S.element)}});let f=[];return window.addEventListener("keydown",M=>{if(M.defaultPrevented)return;let E=Qf(M);if(E){if(M.preventDefault(),E==="contextMenu")return m(document.activeElement??document.body);if(E==="escape"&&!g.isOpen){f.some(b=>b())||r.clear();return}g.close(),E!=="escape"&&c[E]?.()}}),sp(document.getElementById("ioviewer-status"),r,t.elementCount),rp(i,a.truncated),{shell:h,toolbar:u,contextMenu:g,onEscape:M=>f.push(M)}}var wh={x:new I(1,0,0),y:new I(0,1,0),z:new I(0,0,1)};function Eh(i){let e=wh[i];if(!e)throw new RangeError(`Unknown axis: ${i}`);return e.clone()}function cp(i,e,t){if(e.length===0)return!1;let n=s=>s.distanceToPoint(i)<0;return t?e.every(n):e.some(n)}function hp(i,e,t,n){let s=i.clone().normalize(),r=s.dot(e)+t;return n?new _t(s,-r):new _t(s.negate(),r)}function up(i,e,t=0){if(e!=="keepInside"&&e!=="cutInside")throw new RangeError(`Unknown box mode: ${e}`);let{min:n,max:s}=i,r=[new _t(new I(1,0,0),-n.x),new _t(new I(-1,0,0),s.x),new _t(new I(0,1,0),-n.y),new _t(new I(0,-1,0),s.y),new _t(new I(0,0,1),-n.z),new _t(new I(0,0,-1),s.z)];if(t!==0){let o=i.getCenter(new I);for(let a of r){let l=a.distanceToPoint(o);a.normal.applyAxisAngle(wh.z,t),a.constant=l-a.normal.dot(o)}}return e==="keepInside"?{planes:r,intersection:!1}:{planes:r.map(o=>o.negate()),intersection:!0}}function dp(i,e,t,n,s,r){let o=i.clone();if(n>0?o.max[t]=Math.max(i.max[t]+s,i.min[t]+r):o.min[t]=Math.min(i.min[t]-s,i.max[t]-r),e!==0){let a=o.getCenter(new I).sub(i.getCenter(new I));o.translate(a.clone().applyAxisAngle(wh.z,e).sub(a))}return o}function fp(i){let{min:e,max:t}=i;return Array.from({length:8},(n,s)=>new I(s&1?t.x:e.x,s&2?t.y:e.y,s&4?t.z:e.z))}function pp(i,e,t){if(e.length===0||i.isEmpty())return!1;let n=fp(i),s=r=>n.every(o=>r.distanceToPoint(o)<0);return t?e.every(s):e.some(s)}function al(i,e){let t=i.getSize(new I).multiplyScalar(.5);return Math.abs(e.x)*t.x+Math.abs(e.y)*t.y+Math.abs(e.z)*t.z}function Nr(i,e,t){let n=e.clone().sub(i.origin),s=t.dot(i.direction),r=1-s*s;return r<.03?null:(s*i.direction.dot(n)-t.dot(n))/r}function ll(i,e,t){let n=new I(1,0,0).applyQuaternion(e),s=new I(0,1,0).applyQuaternion(e),[r,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let h of fp(i)){h.sub(t);let d=h.dot(n),u=h.dot(s);[r,o,a,l]=[Math.min(r,d),Math.max(o,d),Math.min(a,u),Math.max(l,u)]}return{center:t.clone().addScaledVector(n,(r+o)/2).addScaledVector(s,(a+l)/2),width:(o-r)*1.1,height:(l-a)*1.1}}var Ur=6,_y=["off","planes","box"],xy=.05,Th=new I(0,0,1),cl=class extends EventTarget{constructor(e,t,n){super(),this.scene=e,this.modelBox=t.clone(),this.center=t.getCenter(new I),this.planes=[],this.active=-1,this.box=null,this.boxYaw=0,this.boxMode="keepInside",this.fill=!1,this.gizmoVisible=!0,this._mode="off",n&&this.restore(n)}restore({planes:e,box:t,cutInside:n}){this.modelBox.isEmpty()||(this.planes=e.map(({axis:s,normal:r,offset:o,flipped:a})=>{let l=new I().fromArray(r),c=new Ct().setFromUnitVectors(Th,l);return{axis:s,quaternion:c,offset:o-l.dot(this.center),flipped:a,enabled:!0,rotated:!1}}),this.active=this.planes.length?0:-1,this.box=t?new it(new I().fromArray(t.min),new I().fromArray(t.max)):null,this.boxYaw=0,this.boxMode=n?"cutInside":"keepInside",this.gizmoVisible=!1,this.setMode(this.box?"box":this.planes.length?"planes":"off"))}get mode(){return this._mode}setMode(e){if(!_y.includes(e))throw new RangeError(`Unknown section mode: ${e}`);e==="box"&&!this.box&&this.fitBoxToShown()||(this._mode=e,this._changed(!0))}addPlane(e){let t=Eh(e);if(this.planes.length>=Ur||this.modelBox.isEmpty())return null;let n=new Ct().setFromUnitVectors(Th,t);return this.planes.push({axis:e,quaternion:n,offset:0,flipped:!1,enabled:!0,rotated:!1}),this.active=this.planes.length-1,this._mode="planes",this._changed(!0),this.active}removePlane(e){this._plane(e),this.planes.splice(e,1),(this.active>=this.planes.length||this.active>e)&&this.active--,this._changed(!0)}updatePlane(e,{offset:t,flipped:n,enabled:s,quaternion:r}){let o=this._plane(e);if(t!==void 0){if(!Number.isFinite(t))throw new RangeError(`Offset must be a finite number, got ${t}.`);o.offset=t}n!==void 0&&(o.flipped=!!n),s!==void 0&&(o.enabled=!!s),r&&(o.quaternion.copy(r).normalize(),o.rotated=o.axis!=="custom"&&this.normal(e).angleTo(Eh(o.axis))>1e-6),this._changed(!0)}setActivePlane(e){this._plane(e),this.active=e,this._changed(!1)}normal(e){return Th.clone().applyQuaternion(this._plane(e).quaternion)}extent(e){return al(this.modelBox,this.normal(e))}origin(e){return this.center.clone().addScaledVector(this.normal(e),this._plane(e).offset)}clipPlane(e){let t=this._plane(e);return hp(this.normal(e),this.center,t.offset,t.flipped)}setBox(e,t=0){if(e.isEmpty())throw new RangeError("The section box is empty.");t=mp(t),this.box=e.clone(),this.boxYaw=t,this._mode="box",this._changed(!0)}setBoxYaw(e){this.box&&(this.boxYaw=mp(e),this._changed(this.mode==="box"))}setBoxMode(e){if(e!=="keepInside"&&e!=="cutInside")throw new RangeError(`Unknown box mode: ${e}`);this.boxMode=e,this._changed(!0)}fitBoxToElements(e){let t=new it;for(let s of e)t.union(this.scene.elementBox(s));if(t.isEmpty())return!1;let n=t.getSize(new I);return this.setBox(t.expandByScalar(xy*Math.max(n.x,n.y,n.z))),!0}fitBoxToShown(){let e=this.scene.visibleBox();if(e.isEmpty())return!1;let t=e.getSize(new I);return this.setBox(e.expandByScalar(.001*Math.max(t.x,t.y,t.z))),!0}setGizmoVisible(e){this.gizmoVisible=!!e,this._changed(!1)}setFill(e){this.fill=!!e,this._changed(!1)}reset(){this.planes=[],this.active=-1,this.box=null,this.boxYaw=0,this._mode="off",this._changed(!0)}clipping(){if(this._mode==="planes")return{planes:this.planes.flatMap((t,n)=>t.enabled?[this.clipPlane(n)]:[]),intersection:!1};if(this._mode==="box"&&this.box){let e=up(this.box,this.boxMode,this.boxYaw);if(!e.intersection&&this.boxYaw!==0){let t=this.box.getCenter(new I),n=this.box.getSize(new I).multiplyScalar(.5),s=Math.abs(Math.cos(this.boxYaw)),r=Math.abs(Math.sin(this.boxYaw));n.set(s*n.x+r*n.y,r*n.x+s*n.y,n.z),e.bounds=new it(t.clone().sub(n),t.add(n))}return e}return{planes:[],intersection:!1}}isCut(e,{planes:t,intersection:n,bounds:s}=this.clipping()){return s&&!e.isEmpty()&&!s.intersectsBox(e)||pp(e,t,n)}_plane(e){let t=this.planes[e];if(!Number.isInteger(e)||!t)throw new RangeError(`Plane index ${e} is out of range 0..${this.planes.length-1}.`);return t}_changed(e){if(e){let{planes:t,intersection:n}=this.clipping();this.scene.setClipping(t,n)}this.dispatchEvent(new Event("change"))}};function mp(i){if(!Number.isFinite(i))throw new RangeError("The section box angle must be finite.");return i>=-Math.PI&&i<=Math.PI?i:ct.euclideanModulo(i+Math.PI,2*Math.PI)-Math.PI}var Ah=80,vy=8,Ih=.8,yy=Math.sin(ct.degToRad(12)),bi={x:"#ef4444",y:"#22c55e",z:"#3b82f6",centre:"#e2e8f0",hover:"#facc15",frame:"#93c5fd",fill:"#60a5fa"},Rh=["x","y","z"],by=Math.cos(ct.degToRad(12)),hl=new I(0,0,1),My=i=>new tn({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.9}),Sy=new tn({visible:!1});function ul(i,e,t,n){let s=new Rt,r=My(e);for(let a of t)s.add(new xt(a,r));let o=new xt(n,Sy);return o.userData.handle=s,s.add(o),s.userData={kind:i,color:e,material:r,proxy:o},s.traverse(a=>a.renderOrder=1e3),s}function Ch(i,e,t=n=>n){let n=ul("rotate",bi[e],[t(new _s(Ih,.018,8,64))],t(new _s(Ih,.09,8,48)));return n.name=i,n.userData.axis=e,n}var dl=class extends EventTarget{constructor(e,t){super(),this.sections=e,this.dom=t,this.camera=null,this.group=new Rt,this.group.name="sections",this._raycaster=new Ni,this._drag=null,this._hovered=null,this._buildPlanes(),this._buildPlaneGizmo(),this._buildBox(),e.addEventListener("change",()=>this._sync()),(t.parentElement??t).addEventListener("pointerdown",n=>this._down(n),!0),t.addEventListener("pointermove",n=>this._move(n)),t.addEventListener("pointerup",n=>this._up(n)),t.addEventListener("pointercancel",()=>this._end()),t.addEventListener("lostpointercapture",()=>this._end()),this._sync()}get dragging(){return this._drag!==null}update(e){this.camera=e;let t=this.planeGizmo;t.visible&&(t.scale.setScalar(this._worldPerPixel(t.position)*Ah),this.arrow.visible=this._across(hl.clone().applyQuaternion(t.quaternion),t.position));for(let s of this.boxHandles){let{shown:r,normal:o}=s.userData;s.visible=r&&(!o||this._across(o,s.position)),s.visible&&s.scale.setScalar(this._worldPerPixel(s.position)*vy)}let n=this.boxRing;n.visible&&n.scale.setScalar(this._worldPerPixel(n.position)*Ah)}_across(e,t){let n=this.camera,s=n.isOrthographicCamera?n.getWorldDirection(new I):t.clone().sub(n.position).normalize();return Math.abs(e.dot(s))<by}_buildPlanes(){let e=new yn(1,1),t=new lt().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>new I(r/2,o/2,0))),n=new tn({color:bi.fill,transparent:!0,opacity:.12,side:It,depthWrite:!1}),s=new an({color:bi.frame});this.planeVisuals=Array.from({length:Ur},()=>{let r=new Rt;return r.add(new xt(e,n),new Qs(t,s)),this.group.add(r),r})}_buildPlaneGizmo(){let e=(n,s)=>n.rotateX(Math.PI/2).translate(0,0,s),t=ul("move",bi.z,[e(new Li(.025,.025,1),.5),e(new ir(.08,.25),1.125)],e(new Li(.12,.12,1.25),.625));t.name="arrow",this.arrow=t,this.planeGizmo=new Rt,this.planeGizmo.add(t,Ch("ringX","x",n=>n.rotateY(Math.PI/2)),Ch("ringY","y",n=>n.rotateX(Math.PI/2))),this.group.add(this.planeGizmo)}_buildBox(){this.boxWire=new vn(new Di(new dn(1,1,1)),new an({color:bi.frame})),this.group.add(this.boxWire);let e=new gs(1,16,12),t=new gs(1.6,8,6);this.boxHandles=[];for(let s of Rh)for(let r of[-1,1]){let o=ul("face",bi[s],[e],t);o.name=`face${r>0?"+":"-"}${s}`,Object.assign(o.userData,{axis:s,sign:r,normal:new I}),this.boxHandles.push(o)}let n=ul("centre",bi.centre,[new dn(1.4,1.4,1.4)],t);n.name="centre",this.boxHandles.push(n),this.boxRing=Ch("boxRing","z"),this.group.add(...this.boxHandles,this.boxRing)}_sync(){let e=this.sections,t=e.mode==="planes";this.planeVisuals.forEach((r,o)=>{let a=e.planes[o];if(r.visible=t&&!!a?.enabled,!r.visible)return;r.children[0].visible=!e.fill;let l=ll(e.modelBox,a.quaternion,e.origin(o));r.position.copy(l.center),r.quaternion.copy(a.quaternion),r.scale.set(l.width,l.height,1)});let n=e.planes[e.active];this.planeGizmo.visible=t&&e.gizmoVisible&&!!n?.enabled,this.planeGizmo.visible&&(this.planeGizmo.position.copy(e.origin(e.active)),this.planeGizmo.quaternion.copy(n.quaternion));let s=e.mode==="box"?e.box:null;this.boxWire.visible=!!s,this.boxRing.visible=!!s&&e.gizmoVisible;for(let r of this.boxHandles)r.visible=r.userData.shown=!!s&&e.gizmoVisible;if(s){let r=s.getCenter(new I),o=s.getSize(new I);this.boxWire.position.copy(r),this.boxWire.scale.copy(o).max(new I(1e-6,1e-6,1e-6)),this.boxWire.rotation.z=e.boxYaw,this.boxRing.position.copy(r);for(let a of this.boxHandles){let{axis:l,sign:c,normal:h}=a.userData;h?(h.set(0,0,0).setComponent(Rh.indexOf(l),c).applyAxisAngle(hl,e.boxYaw),a.position.copy(r).addScaledVector(h,o[l]/2)):a.position.copy(r)}}}_worldPerPixel(e){let t=this.camera,n=Math.max(this.dom.clientHeight,1);if(t.isOrthographicCamera)return(t.top-t.bottom)/t.zoom/n;let s=e.clone().sub(t.position).dot(t.getWorldDirection(new I));return 2*Math.max(s,t.near)*Math.tan(ct.degToRad(t.fov/2))/n}_ray(e){let t=this.dom.getBoundingClientRect(),n=new Ve((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2);return this.camera.updateMatrixWorld(),this._raycaster.setFromCamera(n,this.camera),this._raycaster.ray.clone()}_hit(e){if(!this.camera)return null;this.update(this.camera),this.group.updateMatrixWorld(!0);let t=r=>{for(;r&&r!==this.group;r=r.parent)if(!r.visible)return!1;return!0},n=[];this.group.traverse(r=>r.userData.handle&&t(r)&&n.push(r)),this._ray(e);let s=this._raycaster.intersectObjects(n,!1);return(this.sections.mode==="box"?s.find(r=>r.object.userData.handle!==this.boxRing):null)??s[0]??null}_down(e){if(e.target!==this.dom||e.button!==0)return;let t=this._hit(e);if(!t)return;let n=t.object.userData.handle,s=this._start(n,this._raycaster.ray,t.point,e);s&&(e.stopPropagation(),e.preventDefault(),this.dom.setPointerCapture(e.pointerId),this._drag={id:e.pointerId,handle:n,...s},this._highlight(n))}_start(e,t,n,s){let r=this.sections,{kind:o}=e.userData;if(o==="move"){let u=r.active,p=r.origin(u),g=r.normal(u),_=Nr(t,p,g);return _===null?null:{index:u,origin:p,normal:g,offset:r.planes[u].offset,s0:_}}if(o==="rotate"){let u=r.active,p=e===this.boxRing,g=p?e.position.clone():r.origin(u),_=p?null:r.planes[u].quaternion.clone(),m=p?hl:new I().setComponent(Rh.indexOf(e.userData.axis),1).applyQuaternion(_),f={index:u,origin:g,quaternion:_,axis:m,yaw:p?r.boxYaw:null};if(Math.abs(m.dot(t.direction))<yy){let b=m.clone().cross(t.direction).normalize(),v=m.clone().cross(n.clone().sub(g));b.dot(v)<0&&b.negate(),b.applyQuaternion(this.camera.quaternion.clone().invert());let S=new Ve(b.x,-b.y).normalize().divideScalar(Ih*Ah);return{...f,screen:S,x:s.clientX,y:s.clientY}}let M=new _t().setFromNormalAndCoplanarPoint(m,g),E=t.intersectPlane(M,new I)?.sub(g);return E?{...f,plane:M,from:E}:null}let a=r.box.clone(),l=r.boxYaw;if(o==="face"){let u=e.userData.normal.clone(),p=e.position.clone(),g=Nr(t,p,u);return g===null?null:{box:a,yaw:l,normal:u,at:p,s0:g}}let c=this.camera.getWorldDirection(new I),h=new _t().setFromNormalAndCoplanarPoint(c,a.getCenter(new I)),d=t.intersectPlane(h,new I);return d?{box:a,yaw:l,plane:h,from:d}:null}_move(e){let t=this._drag;if(!t)return this._hover(e);if(e.pointerId!==t.id)return;if(e.buttons===0)return this._end();let n=this.sections,{kind:s}=t.handle.userData,r=t.screen?null:this._ray(e);if(s==="move"){let o=Nr(r,t.origin,t.normal);o!==null&&n.updatePlane(t.index,{offset:t.offset+o-t.s0})}else if(s==="rotate"){let o;if(t.screen)o=t.screen.x*(e.clientX-t.x)+t.screen.y*(e.clientY-t.y);else{let c=r.intersectPlane(t.plane,new I)?.sub(t.origin);if(!c)return;o=Math.atan2(t.axis.dot(new I().crossVectors(t.from,c)),t.from.dot(c))}if(t.yaw!==null)return n.setBoxYaw(t.yaw+o);let a=new Ct().setFromAxisAngle(t.axis,o).multiply(t.quaternion),l=hl.clone().applyQuaternion(a);n.updatePlane(t.index,{quaternion:a,offset:l.dot(t.origin.clone().sub(n.center))})}else if(s==="face"){let o=Nr(r,t.at,t.normal);if(o===null)return;let{axis:a,sign:l}=t.handle.userData,c=.001*Math.max(...n.modelBox.getSize(new I).toArray(),.001);n.setBox(dp(t.box,t.yaw,a,l,o-t.s0,c),t.yaw)}else{let o=r.intersectPlane(t.plane,new I);o&&n.setBox(t.box.clone().translate(o.sub(t.from)),t.yaw)}}_up(e){this._drag&&e.pointerId===this._drag.id&&this._end()}_end(){this._drag&&(this._drag=null,this._highlight(null))}_hover(e){e.buttons===0&&this._highlight(this._hit(e)?.object.userData.handle??null)}_highlight(e){if(this._hovered!==e){for(let t of[this._hovered,e])t&&t.userData.material.color.set(t===e?bi.hover:t.userData.color);this._hovered=e,this.dom.style.cursor=e?"grab":"",this.dispatchEvent(new Event("change"))}}};var wy=new I(0,0,1),Ey="#e9ad68";function Ty(i,e){let t=new Uint32Array(i.length/3),n=new Map;for(let o=0;o<t.length;o++){let a=i[o*3],l=i[o*3+1],c=i[o*3+2];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(c))return!1;let h=`${a},${l},${c}`;n.has(h)||n.set(h,n.size),t[o]=n.get(h)}if(n.size<4||e.length%3)return!1;let s=new Map,r=0;for(let o=0;o<e.length;o+=3){let a=[t[e[o]],t[e[o+1]],t[e[o+2]]],[l,c,h]=a;if(l===void 0||c===void 0||h===void 0)return!1;if(!(l===c||c===h||h===l))for(let d=0;d<3;d++){let u=a[d],p=a[(d+1)%3],g=u<p?1:-1,_=u<p?`${u},${p}`:`${p},${u}`,m=s.get(_);if(m!==void 0&&m!==-g)return!1;s.set(_,m===void 0?g:0),r+=m===void 0?1:-1}}return s.size>0&&r===0}function Ay(i,e){let{instances:t,geometries:n}=e.meta,s=e.readView(t.geometry),{width:r,height:o}=i.slotUniforms.slotState.value.image,a=new Uint8Array(r*o),l=new Map;for(let h=0;h<i.slotCount;h++){let d=s[i.slotInstance(h)];if(!l.has(d)){let u=n[d],p=Ty(Er({view:e.readView},u),e.readView(u.indices));l.set(d,p?255:0)}a[h]=l.get(d)}let c=new Nn(a,r,o,ws);return c.needsUpdate=!0,c}function gp(i,e,t,n){let s=new Vt({uniforms:i,vertexShader:`
#include <common>
${Tr}
#include <clipping_planes_pars_vertex>
uniform highp sampler2D closedSlots;
void main() {
  ${Ar}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  ${lh}
  if ( texelFetch( closedSlots, st, 0 ).r < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`,fragmentShader:`
#include <clipping_planes_pars_fragment>
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vec4( 0.0 );
}`,side:t,stencilZPass:n,stencilWrite:!0,clipping:!0,clippingPlanes:[e],colorWrite:!1,depthTest:!1,depthWrite:!1});return s.index0AttributeName="q",s}var fl=class{constructor(e,t,n,s){this.model=e,this.sections=t,this.data=n,this.drawStencils=s,this._farSide=new _t,this._surface=new xt(new yn(1,1),new tn({color:Ey,side:It,forceSinglePass:!0,stencilWrite:!0,stencilFunc:Sc,stencilWriteMask:0}))}render(e,t,n){let{sections:s,model:r}=this,{planes:o,intersection:a}=s.clipping(),l=a?o.map(u=>u.clone().negate()):o,c=u=>Math.abs(u.distanceToPoint(s.center))<al(s.modelBox,u.normal);if(r.opacity===0||!l.some(c))return e.render(t,n);if(!this.drawStencils&&!this._stencils){let u={...r.slotUniforms,closedSlots:{value:Ay(r,this.data)}};this._stencils=[gp(u,this._farSide,Ht,bc),gp(u,this._farSide,Bn,Mc)]}let h=this._surface.material;h.opacity=r.opacity,h.transparent!==r.opacity<1&&(h.transparent=r.opacity<1,h.depthWrite=!h.transparent,h.needsUpdate=!0);let d=e.autoClear;e.autoClear=!1;try{e.clear();let u=n.isOrthographicCamera?n.getWorldDirection(new I):null;l.forEach((p,g)=>{if(!c(p))return;let _=u?-p.normal.dot(u):p.distanceToPoint(n.position);if(_===0)return;if(this._farSide.copy(p),_>0&&this._farSide.negate(),e.clearStencil(),this.drawStencils)this.drawStencils(e,n,this._farSide);else for(let f of this._stencils)r.withMaterial(f,()=>e.render(r.root,n),{section:!0});this._surface.quaternion.setFromUnitVectors(wy,p.normal);let m=ll(s.modelBox,this._surface.quaternion,p.coplanarPoint(new I));this._surface.position.copy(m.center),this._surface.scale.set(m.width,m.height,1),h.clippingPlanes=l.filter((f,M)=>M!==g),e.render(this._surface,n)}),e.render(t,n)}finally{e.autoClear=d}}};function Fr(i,e,t){let n=ee("div","ioviewer-segmented");n.setAttribute("role","group"),n.setAttribute("aria-label",i);let s=e.map(([o,a])=>{let l=ee("button","",a);return l.type="button",l.dataset.value=o,l.addEventListener("click",()=>t(o)),n.append(l),l});return{element:n,update:o=>s.forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.value===o)))}}function Ph(i,e){let t=ee("label","ioviewer-check"),n=ee("input");return n.type="checkbox",n.addEventListener("change",()=>e(n.checked)),t.append(n,ee("span","",i)),{element:t,input:n}}function Ry(i,e){let t=ee("li","ioviewer-section-plane");t.addEventListener("pointerdown",()=>i.active!==e&&i.setActivePlane(e));let n=ee("span","ioviewer-section-name"),s=Kt("ioviewer-icon-button",Ze.flip,se("sections.flip"));s.addEventListener("click",()=>i.updatePlane(e,{flipped:!i.planes[e].flipped}));let r=Ph(se("sections.enabled"),h=>i.updatePlane(e,{enabled:h})),o=Kt("ioviewer-icon-button",Ze.remove,se("sections.delete"));o.addEventListener("click",()=>i.removePlane(e));let a=ee("input","ioviewer-section-slider");a.type="range",a.step="any",a.setAttribute("aria-label",se("sections.position")),a.addEventListener("input",()=>i.updatePlane(e,{offset:Number(a.value)}));let l=ee("div","ioviewer-section-head");return l.append(n,s,r.element,o),t.append(l,a),{element:t,update:()=>{let h=i.planes[e],d=h.rotated?` (${se("sections.rotated")})`:"",u=h.axis==="custom"?se("sections.custom"):h.axis.toUpperCase();n.textContent=`${e+1}. ${u}${d}`,t.classList.toggle("active",i.active===e),s.setAttribute("aria-pressed",String(h.flipped)),r.input.checked=h.enabled;let p=i.extent(e);a.min=String(Math.min(-p,h.offset)),a.max=String(Math.max(p,h.offset)),a.value=String(h.offset)}}}function _p({root:i,shell:e,toolbar:t,contextMenu:n,sections:s,selection:r,canFill:o}){let a="z",l=()=>{s.addPlane(a)===null&&(s.setMode("planes"),Fs(i,se("sections.maxPlanes")))},c=()=>[...r.values()],h=()=>s.fitBoxToElements(c()),d=Fr(se("sections.mode"),[["planes",se("sections.planes")],["box",se("sections.box")],["off",se("sections.off")]],C=>s.setMode(C)),u=Fr(se("sections.axis"),["x","y","z"].map(C=>[C,C.toUpperCase()]),C=>u.update(a=C));u.update(a);let p=ee("button","ioviewer-text-button",se("sections.addPlane"));p.type="button",p.addEventListener("click",l);let g=ee("ul","ioviewer-section-list"),_=ee("div","ioviewer-section-empty",se("sections.noPlanes")),m=ee("div","ioviewer-section-block"),f=ee("div","ioviewer-section-row");f.append(ee("span","",se("sections.axis")),u.element,p),m.append(f,g,_);let M=Fr(se("sections.box"),[["keepInside",se("sections.keepInside")],["cutInside",se("sections.cutInside")]],C=>s.setBoxMode(C)),E=ee("button","ioviewer-text-button",se("sections.fitSelection"));E.type="button",E.addEventListener("click",h);let b=ee("input","ioviewer-section-slider");Object.assign(b,{type:"range",min:"-180",max:"180",step:"1"}),b.addEventListener("input",()=>s.setBoxYaw(Number(b.value)*Math.PI/180));let v=ee("span");v.setAttribute("aria-hidden","true");let S=ee("label","ioviewer-section-row");S.append(ee("span","",se("sections.boxYaw")),b,v);let A=ee("div","ioviewer-section-block");A.append(M.element,S,E);let x=Ph(se("sections.showGizmo"),C=>s.setGizmoVisible(C)),T=Ph(se("sections.fill"),C=>s.setFill(C));o||(T.element.title=se("sections.fillUnavailable"));let R=[],L=()=>{d.update(s.mode),m.hidden=s.mode!=="planes",A.hidden=s.mode!=="box",p.disabled=s.planes.length>=Ur,R.length!==s.planes.length&&(R=s.planes.map((B,z)=>Ry(s,z)),g.replaceChildren(...R.map(B=>B.element))),R.forEach(B=>B.update()),_.hidden=R.length>0,M.update(s.boxMode),b.value=String(Math.round(s.boxYaw*180/Math.PI)),v.textContent=`${b.value}\xB0`,b.setAttribute("aria-valuetext",v.textContent),x.input.checked=s.gizmoVisible,T.input.checked=s.fill;let C=s.mode==="box"||s.mode==="planes"&&s.planes.some(B=>B.enabled);T.input.disabled=!o||!C,t.setActive("plane",s.mode==="planes"),t.setActive("box",s.mode==="box")},N=()=>E.disabled=r.size===0;if(e.registerPanel("sections",{icon:Ze.sections,title:se("panel.sections"),visible:!s.modelBox.isEmpty(),render:C=>C.append(d.element,m,A,T.element,x.element)}),s.addEventListener("change",L),r.addEventListener("change",N),L(),N(),s.modelBox.isEmpty())return;let U=()=>e.openPanel("sections");t.setHandler("plane",()=>{l(),U()}),t.setHandler("box",()=>{(s.mode==="box"||r.size&&h()||s.fitBoxToShown())&&U()}),t.setHandler("resetSections",()=>s.reset()),n.setItem("sectionBox",{handler:C=>{s.fitBoxToElements(r.has(C)?c():[C]),U()}}),n.setItem("resetSections",{handler:()=>s.reset()})}var Cy="#facc15",Iy=9;function Lh(i,e=vi){return`${new Intl.NumberFormat(e,{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(i)} ${se("unit.m",e)}`}var pl=class extends EventTarget{constructor(e){super(),this.active=!1,this.points=[],this.preview=null,this.group=new Rt,this.group.name="measure";let t=new lt;t.setAttribute("position",new St(new Float32Array(6),3));let n={color:Cy,depthTest:!1,depthWrite:!1,transparent:!0};this._line=new Ii(t,new an(n)),this._markers=new Pi(t,new li({...n,size:Iy,sizeAttenuation:!1}));for(let s of[this._line,this._markers])s.frustumCulled=!1,s.renderOrder=1001,this.group.add(s);this.label=ee("div","ioviewer-measure-label"),this.label.hidden=!0,this._previewMarker=ee("div","ioviewer-measure-preview"),this._previewMarker.hidden=!0,this._previewMarker.setAttribute("aria-hidden","true"),e.prepend(this.label,this._previewMarker),this._sync()}get distance(){return this.points.length===2?this.points[0].distanceTo(this.points[1]):null}get box(){return new it().setFromPoints(this.points)}setActive(e){this.active=!!e,this.active||(this.points=[],this.setPreview(null)),this._sync()}add(e){this.active&&(this.points=this.points.length===1?[this.points[0],e.clone()]:[e.clone()],this._sync())}clear(){return this.points.length===0?!1:(this.points=[],this._sync(),!0)}setPreview(e){!this.preview&&!e||(this.preview=e,this._previewMarker.hidden=!e,e&&(this._previewMarker.dataset.kind=e.kind),this.dispatchEvent(new Event("previewchange")))}update(e,t){this.preview&&Lr(this._previewMarker,this.preview.point,e,t),this.distance!==null&&Lr(this.label,this.points[0].clone().lerp(this.points[1],.5),e,t)}_sync(){let e=this._line.geometry.attributes.position;this.points.forEach((t,n)=>e.setXYZ(n,t.x,t.y,t.z)),e.needsUpdate=!0,this._line.geometry.setDrawRange(0,this.points.length),this._line.visible=this.points.length===2,this._markers.visible=this.points.length>0,this.label.hidden=this.distance===null,this.distance!==null&&(this.label.textContent=Lh(this.distance)),this.dispatchEvent(new Event("change"))}};var xp=8,Py=1-1e-6,Ly=8,vp={vertex:0,midpoint:1,edge:2},Dy=2e4;function Ny(i,e){let t=new Map,n=new Uint32Array(i.length/3);for(let d=0;d<n.length;d++){let u=d*3,p=`${i[u]},${i[u+1]},${i[u+2]}`;t.has(p)||t.set(p,d),n[d]=t.get(p)}let s=new Map,r=new I,o=new I,a=new I;function l(d,u,p){let g=Math.min(d,u),_=Math.max(d,u),m=g*n.length+_,f=s.get(m);f?(f.count++,f.crease||(f.crease=Math.abs(f.normal.dot(p))<Py)):s.set(m,{lo:g,hi:_,normal:p,count:1,crease:!1})}for(let d=0;d+2<e.length;d+=3){let u=n[e[d]],p=n[e[d+1]],g=n[e[d+2]];r.fromArray(i,u*3),o.fromArray(i,p*3).sub(r),a.fromArray(i,g*3).sub(r);let _=new I().crossVectors(o,a);_.lengthSq()>0&&(_.normalize(),l(u,p,_),l(p,g,_),l(g,u,_))}let c=[],h=new Set;for(let{lo:d,hi:u,count:p,crease:g}of s.values())p!==1&&!g||(c.push(d,u),h.add(d),h.add(u));return{edges:c,vertices:h}}function ml(i,e,t){return e<0&&t<0?!1:(e<0&&(i[0]=Math.max(i[0],e/(e-t))),t<0&&(i[1]=Math.min(i[1],e/(e-t))),i[0]<=i[1])}function Uy(i,e,t,n,s,r){let o=[0,1];if(!ml(o,t.w+t.z,n.w+n.z)||!ml(o,t.w-t.z,n.w-n.z))return[];if(!r||!s.length)return s.every(c=>ml(o,c.distanceToPoint(i),c.distanceToPoint(e)))?[o]:[];let a=o.slice();if(!s.every(c=>{let h=c.distanceToPoint(i),d=c.distanceToPoint(e);return(h<0||d<0)&&ml(a,-h,-d)}))return[o];let l=[];return o[0]<a[0]&&l.push([o[0],a[0]]),a[1]<o[1]&&l.push([a[1],o[1]]),l}function Dh(i,e){return[(i.x/i.w+1)*e.width/2,(1-i.y/i.w)*e.height/2]}function Fy(i,e,[t,n],s,r,o){let a=i.clone().lerp(e,t),l=i.clone().lerp(e,n),[c,h]=Dh(a,s),[d,u]=Dh(l,s),p=d-c,g=u-h,_=p*p+g*g;if(!(_>0))return null;let m=ct.clamp(((r-c)*p+(o-h)*g)/_,0,1);return t+(n-t)*(m*a.w/((1-m)*l.w+m*a.w))}var gl=class{constructor(e,t,n){this.picker=e,this.sections=t,this.data=n,this.cache=new Map}release(){this.data.releaseBinary(),this.cache.clear()}_geometry(e){let t=this.cache.get(e);if(t)this.cache.delete(e);else{let n=this.data.meta.geometries[e],s=tf({view:this.data.readView},n);t={positions:s,...Ny(s,this.data.readView(n.indices))}}return this.cache.set(e,t),this.cache.size>Ly&&this.cache.delete(this.cache.keys().next().value),t}target(e,t){let n=this.picker.measureTile(e,t,xp+1);if(!n)return null;let{rect:s}=n,r=e-s.left,o=t-s.top,{camera:a,scene:l}=this.picker,{planes:c,intersection:h}=this.sections.clipping(),d=new ke().multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),u=a.matrixWorldInverse.elements,p=null;function g(v,S,A,x){if(p&&vp[v]>vp[p.kind]||A.w<=0||A.z<-A.w||A.z>A.w)return;let[T,R]=Dh(A,s);if(!(T>=0&&R>=0&&T<s.width&&R<s.height))return;let L=(T-r)**2+(R-o)**2;if(L>xp**2||p?.kind===v&&L>=p.distance||v!=="edge"&&cp(S,c,h))return;let N=-(u[2]*S.x+u[6]*S.y+u[10]*S.z+u[14]);N-n.depthAt(T,R,x)>2*wn+Math.abs(N)*2**-21||(p={kind:v,distance:L,point:S.clone()})}let _=Dy*3,m=new ke,f=new I,M=new at,{geometry:E,matrix:b}=this.data.meta.instances;for(let v of n.slots){let S=l.slotInstance(v),[A]=this.data.readView({t:"u32",o:E.o+S*4,n:1}),x=this.data.meta.geometries[A],T=Math.max(x.indices.n,x.positions.n/3);if(T>_)continue;_-=T;let{positions:R,vertices:L,edges:N}=this._geometry(A),U=this.data.readView({t:"f32",o:b.o+S*48,n:12});m.set(U[0],U[3],U[6],U[9],U[1],U[4],U[7],U[10],U[2],U[5],U[8],U[11],0,0,0,1);let C=new Map;for(let B of L){let z=new I().fromArray(R,B*3).applyMatrix4(m),W=new at(z.x,z.y,z.z,1).applyMatrix4(d);C.set(B,[z,W]),g("vertex",z,W,v)}if(p?.kind!=="vertex")for(let B=0;B<N.length;B+=2){let[z,W]=C.get(N[B]),[F,D]=C.get(N[B+1]);if(g("midpoint",f.copy(z).lerp(F,.5),M.copy(W).lerp(D,.5),v),p?.kind!=="midpoint")for(let X of Uy(z,F,W,D,c,h)){let Z=Fy(W,D,X,s,r,o);Z!==null&&g("edge",f.copy(z).lerp(F,Z),M.copy(W).lerp(D,Z),v)}}}return p?{kind:p.kind,point:p.point}:{kind:"surface",point:n.point.clone()}}};var _l=class extends EventTarget{constructor(e,t){super();let n=[];this._labels=[],this.count=0;for(let r of t){let o=Mr(r);if(!(o.length<2)){this.count++;for(let a=1;a<o.length;a++)n.push(...o[a-1],...o[a]);for(let a of[o[0],o[o.length-1]])this._labels.push({element:ee("div","ioviewer-grid-label",r.name),point:new I(...a)})}}this.group=new vn(new lt().setAttribute("position",new ft(n,3)),new an({color:"#93c5fd",transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1})),this.group.name="grids",this.group.geometry.computeBoundingBox(),this.box=this.group.geometry.boundingBox,this.group.renderOrder=999;let s=ee("div","ioviewer-grid-labels");s.append(...this._labels.map(r=>r.element)),e.prepend(s),this._layer=s,this.setVisible(this.count>0)}get visible(){return this.group.visible}setVisible(e){this.group.visible=!!e,this._layer.hidden=!e,this.dispatchEvent(new Event("change"))}update(e,t){if(this.visible)for(let{element:n,point:s}of this._labels)Lr(n,s,e,t)}};var By=8,yp=4;function Nh(i,e,t,n="dialog"){let s=ee("div","ioviewer-popover ioviewer-floating");s.setAttribute("role",n),s.setAttribute("aria-label",t),s.hidden=!0,e.setAttribute("aria-haspopup",n),e.setAttribute("aria-expanded","false"),i.append(s);function r(l){s.contains(l.target)||(a(),ja(l))}s.addEventListener("keydown",l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),a(),e.focus())});function o(){s.hidden=!1,e.setAttribute("aria-expanded","true");let l=e.getBoundingClientRect(),{width:c}=s.getBoundingClientRect();s.style.left=`${Math.max(yp,Math.min(l.left+l.width/2-c/2,innerWidth-c-yp))}px`,s.style.bottom=`${innerHeight-l.top+By}px`,window.addEventListener("pointerdown",r,!0),window.addEventListener("resize",a)}function a(){return s.hidden?!1:(s.hidden=!0,e.setAttribute("aria-expanded","false"),window.removeEventListener("pointerdown",r,!0),window.removeEventListener("resize",a),!0)}return{element:s,close:a,toggle:()=>s.hidden?o():a(),get isOpen(){return!s.hidden}}}function Oy(i){return i?.initialWireframe?"wireframe":i?.initialWhiteMode?"white":"materials"}function bp({root:i,toolbar:e,scene:t,meta:n,grids:s,initialBackground:r,setBackground:o}){let a=x=>e.element.querySelector(`[data-tool="${x}"]`),l=a("displayMode"),c=Nh(i,l,se("group.display"));c.element.classList.add("ioviewer-display-modes");let h=ee("div");h.setAttribute("role","menu"),h.setAttribute("aria-label",se("tool.displayMode")),c.element.append(h);let d=(n.textures??[]).length>0,u=fh.map(x=>{let T=ee("button","ioviewer-menu-item",se(`display.${x}`));return T.type="button",T.dataset.mode=x,T.setAttribute("role","menuitemradio"),T.disabled=x==="textures"&&!d,T.addEventListener("click",()=>{p(x),c.close(),l.focus()}),h.append(T),T}),p=x=>{t.setDisplayMode(x);for(let T of u)T.setAttribute("aria-checked",String(T.dataset.mode===x))};p(Oy(n.options)),e.setHandler("displayMode",()=>{c.toggle(),c.isOpen&&h.querySelector('[aria-checked="true"]')?.focus()});let g=ee("div","ioviewer-background-setting"),_=ee("label","",se("display.background")),m=ee("input");Object.assign(m,{type:"color",value:r}),_.append(m);let f=ee("button","ioviewer-text-button",se("display.backgroundReset"));f.type="button",f.disabled=!0;let M=()=>{o(m.value),f.disabled=m.value===r};m.addEventListener("input",M),f.addEventListener("click",()=>{m.value=r,m.focus(),M()}),g.append(_,f),c.element.append(g),e.setActive("grids",s.visible),s.count>0&&e.setHandler("grids",()=>{s.setVisible(!s.visible),e.setActive("grids",s.visible)});let E=Nh(i,a("opacity"),se("tool.opacity"));E.element.classList.add("ioviewer-opacity");let b=ee("input","ioviewer-opacity-slider");Object.assign(b,{type:"range",min:"10",max:"100",step:"1",value:"100"}),b.setAttribute("aria-label",se("opacity.label"));let v=ee("output","ioviewer-opacity-value"),S=()=>v.textContent=se("opacity.value").replace("{value}",b.value);b.addEventListener("input",()=>{t.setOpacity(Number(b.value)/100),S()}),S();let A=ee("div","ioviewer-opacity-head");return A.append(ee("span","",se("opacity.label")),v),E.element.append(A,b),e.setHandler("opacity",E.toggle),[c,E]}var zy=3e3;function xl(i,e){let t=ee("button",i);return t.type="button",t.setAttribute("title",e),t.append(ee("span","ioviewer-row-name",e)),t}function Mp({shell:i,toolbar:e,controls:t,scene:n,sections:s,selection:r,restoreLinkedModels:o,views:a,bcfTopics:l}){let c=null,h=ee("button","ioviewer-text-button ioviewer-tour");h.type="button";function d(E){E.sections!=null&&s.restore(E.sections),E.hiddenElements!=null&&n.setHiddenElements(E.hiddenElements),E.visibleElements!=null&&n.isolate(E.visibleElements),E.hiddenModelKeys!=null&&o(E.hiddenModelKeys),E.selectedElements!=null&&r.set(E.selectedElements);let b=E.camera.projection==="orthographic";t.setProjection(b?"orthographic":"perspective"),e.setActive("projection",b),t.restoreViewCamera(E.camera)}function u(){d(a[c.next]),c.next=(c.next+1)%a.length;let E=()=>{t.animating?c.frame=requestAnimationFrame(E):c.timer=setTimeout(u,zy)};c.frame=requestAnimationFrame(E)}let p=E=>h.contains(E.target),g=E=>!p(E)&&m(),_=E=>{p(E)&&(E.key==="Enter"||E.key===" ")||(E.key==="Escape"&&(E.preventDefault(),E.stopPropagation()),m())};function m(){c&&(cancelAnimationFrame(c.frame),clearTimeout(c.timer),c=null,window.removeEventListener("pointerdown",g,!0),window.removeEventListener("wheel",m,!0),window.removeEventListener("keydown",_,!0),M())}function f(){c={next:0,frame:0,timer:0},window.addEventListener("pointerdown",g,!0),window.addEventListener("wheel",m,!0),window.addEventListener("keydown",_,!0),M(),u()}function M(){let E=se(c?"views.stop":"views.tour");h.replaceChildren(),h.insertAdjacentHTML("afterbegin",c?Ze.pause:Ze.play),h.append(ee("span","",E)),h.setAttribute("aria-pressed",String(!!c))}h.addEventListener("click",()=>c?m():f()),M(),i.registerPanel("views",{icon:Ze.views,title:se("panel.views"),visible:a.length>0,render:E=>{let b=ee("div","ioviewer-row-list");for(let v of a){let S=xl("ioviewer-row ioviewer-view",String(v.name??""));S.addEventListener("click",()=>d(v)),b.append(S)}E.append(h,b)}}),i.registerPanel("bcf",{icon:Ze.bcf,title:se("panel.bcf"),visible:l.length>0,render:E=>{let b=ee("div","ioviewer-row-list");for(let v of l){let S=ee("details","ioviewer-bcf-topic");S.append(ee("summary","",v.title)),v.status&&S.append(ee("p","ioviewer-bcf-status",v.status)),v.description&&S.append(ee("p","ioviewer-bcf-description",v.description)),v.viewpoints.length||S.append(ee("p","ioviewer-bcf-status",se("bcf.noView"))),v.viewpoints.forEach((A,x)=>{let T=se("bcf.viewpoint").replace("{index}",String(x+1)),R=xl("ioviewer-row ioviewer-view",T);if(R.addEventListener("click",()=>d(A)),S.append(R),A.missingComponents||A.ambiguousComponents){let L=se("bcf.components").replace("{missing}",String(A.missingComponents)).replace("{ambiguous}",String(A.ambiguousComponents));S.append(ee("p","ioviewer-bcf-status",L))}}),b.append(S)}E.append(b)}})}function Sp(i,e){let t=[];for(let[n,s]of[[i.element1Id,i.element1Name],[i.element2Id,i.element2Name]]){let r=n!=null?e.findIndex(o=>o.id!=null&&String(o.id)===String(n)&&!o.mesh):ky(e,s);r>=0&&!t.includes(r)&&t.push(r)}return t}function ky(i,e){if(e==null)return-1;let t=i.findIndex(n=>n.name===e);return t>=0&&i.findIndex((n,s)=>s>t&&n.name===e)<0?t:-1}var Vy=["New","Active","Reviewed","Approved","Resolved"],Uh=27,Hy=8,Gy=14,Wy=2,Xy=new I(1,-1,.8).normalize();function wp({shell:i,tests:e,elements:t,scene:n,controls:s,selection:r}){let o=new Rt;o.name="clash-marker";let a=new lt;a.setAttribute("position",new St(new Float32Array(3),3));let l={color:"#ef4444",depthTest:!1,depthWrite:!1,transparent:!0},c=new Pi(a,new li({...l,size:Gy,sizeAttenuation:!1}));c.frustumCulled=!1,c.renderOrder=1002,o.add(c),o.visible=!1;let h=null,d=null;function u(){o.visible=!1,h?.removeAttribute("aria-current"),h=null,d=null,s.setExtraBounds("clash",null)}function p(M,E){let b=Sp(M,t);b.length?r.set(b):r.clear();let v=new I(...M.point),S=0;for(let T of b){let R=n.elementBox(T);R.isEmpty()||(S=Math.max(S,...R.getSize(new I).toArray()))}let A=s.camera.position.clone().sub(s.target);A.lengthSq()<1e-12&&A.copy(Xy);let x=Math.max(3*S,Wy);s.animateTo({position:A.normalize().multiplyScalar(x).add(v),target:v}),a.attributes.position.setXYZ(0,v.x,v.y,v.z),a.attributes.position.needsUpdate=!0,o.visible=!0,h?.removeAttribute("aria-current"),h=E,d=M,E.setAttribute("aria-current","true"),s.setExtraBounds("clash",new it(v.clone(),v.clone()))}function g(M){let E=xl("ioviewer-row ioviewer-clash",String(M.name??""));E.setAttribute("title",`${M.name??""}: ${M.element1Name??""} \u2014 ${M.element2Name??""}`);let b=Vy.includes(M.status),v=ee("span","ioviewer-clash-status",b?se(`clash.${M.status}`):String(M.status??""));b&&(v.dataset.status=M.status);let S=typeof M.distance=="number"?Lh(M.distance):"";return E.append(v,ee("span","ioviewer-clash-distance",S)),M===d&&(h=E,E.setAttribute("aria-current","true")),E.addEventListener("click",()=>p(M,E)),E}function _(M,E){let b=ee("div","ioviewer-clash-test"),v=ee("button","ioviewer-row ioviewer-clash-header");v.type="button",v.setAttribute("aria-expanded","true");let S=`${M.name??""} (${M.clashes.length})`;v.setAttribute("title",S),v.insertAdjacentHTML("afterbegin",Ze.chevron),v.append(ee("span","ioviewer-row-name",S));let A=ee("div","ioviewer-clash-list");return A.style.height=`${Math.max(0,M.clashes.length*Uh-1)}px`,v.addEventListener("click",()=>{A.hidden=!A.hidden,v.setAttribute("aria-expanded",String(!A.hidden)),E()}),b.append(v,A),{box:b,list:A,clashes:M.clashes,rows:new Map}}function m({list:M,clashes:E,rows:b},{start:v,end:S}){for(let[x,T]of b)(x<v||x>=S)&&(T.remove(),b.delete(x));let A=null;for(let x=S-1;x>=v;x--){let T=b.get(x);T||(T=g(E[x]),T.style.top=`${x*Uh}px`,M.insertBefore(T,A),b.set(x,T)),A=T}}function f(M){if(!e.length)return;M.classList.add("ioviewer-clashes-body");let E=e.map(v=>_(v,b));for(let v of E)M.append(v.box);function b(){let v=M.scrollTop,S=M.clientHeight,A=E.map(({list:x,clashes:T})=>S&&!x.hidden?Sh(v-x.offsetTop,Uh,S,T.length,Hy):{start:0,end:0});E.forEach((x,T)=>m(x,A[T]))}M.addEventListener("scroll",b),M.addEventListener("focusin",b),new ResizeObserver(b).observe(M)}return i.registerPanel("clashes",{icon:Ze.clashes,title:se("panel.clashes"),visible:e.length>0,render:f,onClose:()=>o.visible&&u()}),{group:o}}var qy=["construct","demolish","temporary"],Yy=Date.parse("0002-01-01T00:00:00Z");function Ep(i){let e=typeof i=="string"?Date.parse(i):NaN;return e>=Yy?e:NaN}function Tp(i,e){let t=new Map(e.flatMap((o,a)=>o.mesh||o.id==null?[]:[[String(o.id),a]])),n=[];for(let o of Array.isArray(i?.tasks)?i.tasks:[]){let a=Ep(o?.start),l=Ep(o?.end);if(!(a<=l))continue;let c=qy.includes(o.type)?o.type:"construct",h=Array.isArray(o.attachedElements)?o.attachedElements:[];n.push({name:o.name,type:c,start:a,end:l,elements:h.map(d=>t.get(String(d))).filter(d=>d!==void 0)})}let s=n.reduce((o,a)=>Math.min(o,a.start),1/0),r=n.reduce((o,a)=>Math.max(o,a.end),-1/0);return{start:s,end:r,tasks:n}}function Ap(i,e){let t=new Set,n=new Map;for(let s of i){let r=e<s.start,o=e>s.end,a=s.type==="construct"?r:s.type==="demolish"?o:r||o;for(let l of s.elements)a?t.add(l):!r&&!o&&n.set(l,s.type)}for(let s of t)n.delete(s);return{hidden:t,active:n}}var $y=864e5,Zy=["1","5","15"],Jy={construct:"#22c55e",demolish:"#ef4444",temporary:"#a855f7"};function Rp({root:i,shell:e,timeliner:t,elements:n,scene:s}){let r=Tp(t,n);if(r.tasks.length===0)return e.registerPanel("timeliner",{icon:Ze.timeliner,title:se("panel.timeliner"),visible:!1,render:()=>{}}),null;let o=new Intl.DateTimeFormat(vi,{dateStyle:"short",timeZone:"UTC"}),a=new Intl.DateTimeFormat(vi,{dateStyle:"medium",timeZone:"UTC"}),l=r.start,c=1,h=0,d=0,u=!1,p=new Set,g=new Map,_=ee("div","ioviewer-player ioviewer-floating");_.setAttribute("role","group"),_.setAttribute("aria-label",se("player.title")),_.hidden=!0;let m=Kt("ioviewer-icon-button ioviewer-player-play",Ze.play,se("player.play"));m.addEventListener("click",()=>h?N():L());let f=ee("output","ioviewer-player-date"),M=ee("input","ioviewer-player-slider");Object.assign(M,{type:"range",min:String(r.start),max:String(r.end),step:"any"}),M.setAttribute("aria-label",se("player.date")),M.addEventListener("input",()=>A(Number(M.value)));let E=Fr(se("player.speed"),Zy.map(C=>[C,`${C}\xD7`]),C=>{c=Number(C),E.update(C)});E.update(String(c));let b=Kt("ioviewer-panel-close",Ze.close,se("close"));b.addEventListener("click",T),_.append(m,f,M,E.element,b),i.append(_),new ResizeObserver(()=>{let C=_.hidden?0:_.offsetHeight+8;i.style.setProperty("--player-space",`${C}px`)}).observe(_);function S(){let C=Ap(r.tasks,l),B=[...p].filter(D=>!C.hidden.has(D)),z=[...C.hidden].filter(D=>!p.has(D));p=C.hidden;let W=[...g.keys()].filter(D=>C.active.get(D)!==g.get(D)),F=new Map;for(let[D,X]of C.active)g.get(D)!==X&&(F.has(X)||F.set(X,[]),F.get(X).push(D));g=C.active,B.length&&s.setLayerHidden("schedule",B,!1),z.length&&s.setLayerHidden("schedule",z,!0),W.length&&s.setTint(W,null);for(let[D,X]of F)s.setTint(X,Jy[D])}function A(C){l=Math.min(Math.max(C,r.start),r.end),M.value=String(l),f.textContent=a.format(l),u&&S()}function x(){u||(u=!0,_.hidden=!1,A(r.start))}function T(){u&&(N(),u=!1,s.setTint([...g.keys()],null),g=new Map,p=new Set,s.clearLayer("schedule"),_.hidden=!0)}function R(C){A(l+Math.max(C-d,0)/1e3*c*$y),d=C,l>=r.end?N():h=requestAnimationFrame(R)}function L(){x(),!h&&(l>=r.end&&A(r.start),d=performance.now(),h=requestAnimationFrame(R),U())}function N(){cancelAnimationFrame(h),h=0,U()}function U(){let C=se(h?"player.pause":"player.play");m.innerHTML=h?Ze.pause:Ze.play,m.title=C,m.setAttribute("aria-label",C)}return e.registerPanel("timeliner",{icon:Ze.timeliner,title:se("panel.timeliner"),render:C=>{let B=ee("button","ioviewer-text-button ioviewer-player-open");B.type="button",B.insertAdjacentHTML("afterbegin",Ze.play),B.append(ee("span","",se("player.play"))),B.addEventListener("click",L);let z=ee("div","ioviewer-row-list");for(let W of r.tasks){let F=String(W.name??""),D=ee("div","ioviewer-row ioviewer-task");D.dataset.type=W.type,D.setAttribute("title",`${F} \xB7 ${se(`task.${W.type}`)}`);let X=`${o.format(W.start)} \u2013 ${o.format(W.end)}`;D.append(ee("span","ioviewer-row-name",F),ee("span","ioviewer-task-dates",X)),z.append(D)}C.append(B,z)}}),{open:x,close:T,play:L,pause:N,setDate:A,get date(){return l},get isOpen(){return u}}}function Cp({shell:i,files:e,elements:t,scene:n}){let s=e.map(o=>({file:o,members:o.members??t.flatMap((a,l)=>a.link!=null&&(a.link===o.name||a.link===o.path)?[l]:[]),input:ee("input")})),r=()=>n.replaceLayerHidden("links",s.flatMap(({input:o,members:a})=>o.checked?[]:a));return i.registerPanel("links",{icon:Ze.links,title:se("panel.links"),visible:s.length>0,render:o=>{let a=ee("div","ioviewer-row-list");for(let l of s){let c=String(l.file.name??""),h=ee("label","ioviewer-row ioviewer-check ioviewer-link");h.setAttribute("title",`${c} (${l.file.path??""})`);let{input:d}=l;d.type="checkbox",d.checked=l.members.length===0||l.file.visible!==!1,d.disabled=l.members.length===0,d.addEventListener("change",r),h.append(d,ee("span","ioviewer-row-name",c),ee("span","ioviewer-row-count",String(l.members.length))),a.append(h)}o.append(a),r()}}),o=>{let a=new Set(o);for(let{file:l,input:c}of s)c.checked=c.disabled||!a.has(l.key);r()}}Rf();var Vn=document.getElementById("ioviewer-canvas"),Fh=window.IOVIEWER_TEST??{},Br=Fh.startup;function Or(i){let e=document.getElementById("ioviewer-message");e.textContent=i,e.hidden=!1}try{let i=Qc(document,Br);i.title&&(document.title=i.title);let e=Vn.getContext("webgl2",{antialias:!0,stencil:!0});e?Ky($d(document,Br,i),e):Or(se("noWebGL"))}catch(i){if(!(i instanceof rt))throw i;Or(se("badData"))}function Ky(i,e){let t=new Rs({canvas:Vn,context:e,antialias:!0,stencil:!0,logarithmicDepthBuffer:zf(i.meta)});t.setPixelRatio(window.devicePixelRatio),t.autoClearStencil=!1,t.localClippingEnabled=!0;let n=new Ri,s="#1f2228",r=new Fe(s);t.setClearColor(r,1);let o=new or("#ffffff","#8a8f99",1.6);o.position.set(0,0,1),n.add(o);let a=new $t(45,1,.1,1e3);a.up.set(0,0,1),a.position.set(1,-1,.8);let l=new lr("#ffffff",1.4);l.position.set(.3,.6,0),a.add(l,l.target),l.target.position.set(0,0,-1),n.add(a),Br?.("sceneStart");let c=M();Br?.("sceneEnd"),i.releaseBinary();let h=new il(c,x,Math.min(c.totalCost,2e7));n.add(c.root);let d=new cl(c,c.visibleBox(),i.meta.sections),u=e.getContextAttributes()?.stencil===!0,p,g=new dl(d,Vn);n.add(g.group);let _=document.getElementById("ioviewer-ui"),m=new pl(_),f=new _l(_,i.meta.grids??[]);n.add(m.group,f.group);function M(){try{let te=new Ir(i,{...Fh,maxTextureSize:t.capabilities.maxTextureSize});return te.totalCost===0&&Or(se("noGeometry")),te}catch(te){if(!(te instanceof Cr))throw te;Or(se("tooLarge").replace("{count}",te.count).replace("{limit}",te.limit));let H=ue=>({o:0,n:0,t:ue}),j={count:0,geometry:H("u32"),material:H("u32"),element:H("i32"),matrix:H("f32")};return new Ir({...i,meta:{...i.meta,instances:j}})}}let E=!1;Vn.addEventListener("webglcontextlost",()=>{E=!0,Or(se("contextLost"))});let b,v=new Promise(te=>b=te),S=Br,A=!1;function x(){A||E||(A=!0,h.requested(performance.now()),requestAnimationFrame(()=>{if(A=!1,E)return;let te=Vn.getBoundingClientRect();z.camera.updateMatrixWorld(),g.update(z.camera),m.update(z.camera,te),f.update(z.camera,te),h.begin(z.camera,te.height,performance.now()),S?.("renderStart"),d.fill&&u?(p??(p=new fl(c,d,i)),p.render(t,n,z.camera)):t.render(n,z.camera),S&&(S("renderEnd"),S=void 0),h.end(performance.now()),ce.update(),b()}))}c.root.addEventListener("change",x),d.addEventListener("change",x),g.addEventListener("change",x),m.addEventListener("change",x),m.addEventListener("previewchange",x),f.addEventListener("change",x);let T=new tl(t,c,a,{pickFloat:Fh.pickFloat}),R=new gl(T,d,i),L=0,N=null;function U(){cancelAnimationFrame(L),L=0,N=null,m.setPreview(null)}function C(){L=0,N&&m.setPreview(R.target(...N))}function B(){N&&(m.setPreview(null),cancelAnimationFrame(L),L=requestAnimationFrame(()=>{L=requestAnimationFrame(C)}))}Vn.addEventListener("pointermove",te=>{if(!m.active||te.buttons)return U();N=[te.clientX,te.clientY],L||(L=requestAnimationFrame(C))});for(let te of["pointerdown","pointerleave","pointercancel","webglcontextlost"])Vn.addEventListener(te,U);c.root.addEventListener("change",te=>{te.detail.kind!=="appearance"&&B()});let z=new Ka(a,Vn,{pick:(te,H)=>T.pick(te,H)?.point??null,visibleBox:()=>c.visibleBox()});z.addEventListener("change",()=>{T.camera=z.camera,B(),x()}),c.root.addEventListener("change",te=>{te.detail.kind==="visibility"&&(z.invalidateBounds(),z.resize())});let W=new rl;W.addEventListener("change",()=>c.setHighlighted([...W.values()]));let F=lp({root:_,data:i,scene:c,controls:z,picker:T,selection:W,measure:m});_p({root:_,...F,sections:d,selection:W,canFill:u});let{meta:D}=i,X=Cp({...F,files:D.linkedFiles??[],elements:D.elements,scene:c});Mp({...F,controls:z,scene:c,sections:d,selection:W,restoreLinkedModels:X,views:D.viewpoints??[],bcfTopics:D.bcfTopics??[]});let Z=wp({...F,tests:D.clashTests??[],elements:D.elements,scene:c,controls:z,selection:W});n.add(Z.group);let G=Rp({root:_,...F,timeliner:D.timeliner,elements:D.elements,scene:c}),Q=te=>{t.setClearColor(r.set(te),1);let{r:H,g:j,b:ue}=r,be=.2126*H+.7152*j+.0722*ue>Math.sqrt(.0525)-.05?"#000":"#fff";_.style.setProperty("--viewport-text",te===s?"":be),x()};for(let te of bp({root:_,toolbar:F.toolbar,scene:c,meta:D,grids:f,initialBackground:s,setBackground:Q}))F.onEscape(te.close);F.toolbar.setHandler("distance",()=>{U(),m.setActive(!m.active),m.active||R.release(),F.toolbar.setActive("distance",m.active)}),F.toolbar.setActive("distance",!1),F.onEscape(()=>(U(),m.clear()));let le=()=>{z.setExtraBounds("grids",f.visible?f.box:null),z.setExtraBounds("measure",m.box)};f.addEventListener("change",le),m.addEventListener("change",le),le(),z.addEventListener("click",te=>{let{x:H,y:j,ctrl:ue,shift:Le}=te.detail;if(m.active){let vt=R.target(H,j);vt&&m.add(vt.point);return}let Be=T.pick(H,j)?.element??-1;ue?Be>=0&&W.toggle(Be):Be>=0?W.set([Be]):Le||W.clear()}),z.addEventListener("boxselect",te=>{if(m.active)return;let{rect:H,mode:j,ctrl:ue,shift:Le}=te.detail;if(H.width<4||H.height<4){!ue&&!Le&&W.clear();return}let be=new it,Be=Yf(H,j,$f(c,z.camera,Vn.getBoundingClientRect())),vt=d.clipping(),He=Be.filter(Je=>!d.isCut(c.elementBox(Je,be),vt));W.set(ue?[...W.values(),...He]:He)}),window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight,!1),z.resize()}),t.setSize(window.innerWidth,window.innerHeight,!1),z.resize(),z.fitBox(c.visibleBox(),!1);let ce=new el(document.getElementById("ioviewer-ui"),a,z);window.addEventListener("pointerdown",te=>{(te.target===Vn||ce.element.contains(te.target))&&document.activeElement?.blur()},!0),window.__ioviewer={scene:c,motionDetail:h,controls:z,picker:T,selection:W,ui:F,viewCube:ce,sections:d,sectionGizmo:g,measure:m,measureSnap:R,grids:f,clashes:Z,timeliner:G,ready:v,get camera(){return z.camera}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
