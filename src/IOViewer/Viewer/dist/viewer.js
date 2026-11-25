(()=>{var qh=i=>{throw TypeError(i)};var Ml=(i,t,e)=>t.has(i)||qh("Cannot "+e);var si=(i,t,e)=>(Ml(i,t,"read from private field"),e?e.call(i):t.get(i)),Sl=(i,t,e)=>t.has(i)?qh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Yh=(i,t,e,n)=>(Ml(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),kr=(i,t,e)=>(Ml(i,t,"access private method"),e);var Tu=0,nc=1,Au=2;var cr=1,Ru=2,ys=3,On=0,Ve=1,Le=2,zn=0,bs=1,ic=2,sc=3,rc=4,Cu=5;var Ni=100,Iu=101,Pu=102,Lu=103,Du=104,Nu=200,Uu=201,Fu=202,Bu=203,oc=204,ac=205,Ou=206,zu=207,ku=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,_o=0,xo=1,vo=2,os=3,yo=4,bo=5,Mo=6,So=7,Jo=0,Yu=1,$u=2,bn=0,lc=1,cc=2,hc=3,uc=4,dc=5,fc=6,pc=7;var mc=300,pi=301,Ui=302,Ko=303,jo=304,hr=306,as=1e3,In=1001,wo=1002,Fe=1003,Zu=1004;var ur=1005;var ze=1006,Qo=1007;var mi=1008;var nn=1009,gc=1010,_c=1011,Ms=1012,ta=1013,Mn=1014,Ge=1015,Sn=1016,ea=1017,na=1018,Ss=1020,xc=35902,vc=35899,yc=1021,bc=1022,sn=1023,Pn=1026,gi=1027,ws=1028,ia=1029,_i=1030,sa=1031;var ra=1033,dr=33776,fr=33777,pr=33778,mr=33779,oa=35840,aa=35841,la=35842,ca=35843,ha=36196,ua=37492,da=37496,fa=37488,pa=37489,gr=37490,ma=37491,ga=37808,_a=37809,xa=37810,va=37811,ya=37812,ba=37813,Ma=37814,Sa=37815,wa=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,La=36495,Da=36283,Na=36284,_r=36285,Ua=36286;var Ws=2300,Eo=2301,mo=2302,Yl=2303,$l=2400,Zl=2401,Jl=2402;var Ju=3200;var Fa=0,Ku=1,ti="",Ie="srgb",Xs="srgb-linear",qs="linear",ie="srgb";var go=7680;var Mc=34055,Sc=34056;var wc=517;var ju=519,Qu=512,td=513,ed=514,Ba=515,nd=516,id=517,Oa=518,sd=519,Ec=35044,Tc=35048;var Ac="300 es",xn=2e3,ls=2001;function Tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){let i=Ys("canvas");return i.style.display="block",i}var $h={},cs=null;function $s(...i){let t="THREE."+i.shift();cs?cs("log",t,...i):console.log(t,...i)}function od(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=od(i);let t="THREE."+i.shift();if(cs)cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ft(...i){i=od(i);let t="THREE."+i.shift();if(cs)cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in $h||($h[t]=!0,Dt(...i))}function ad(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ld={[_o]:xo,[vo]:Mo,[yo]:So,[os]:bo,[xo]:_o,[Mo]:vo,[So]:yo,[bo]:os},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,ss=Math.PI/180,hs=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Rc(i,t){return(i%t+t)%t}function Rp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cp(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function Ip(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function Pp(i,t=1){return t-Math.abs(Rc(i,t*2)-t)}function Lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Up(i,t){return i+Math.random()*(t-i)}function Fp(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(Zh=i);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Op(i){return i*ss}function zp(i){return i*hs}function kp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var de={DEG2RAD:ss,RAD2DEG:hs,generateUUID:Zn,clamp:Zt,euclideanModulo:Rc,mapLinear:Rp,inverseLerp:Cp,lerp:Gs,damp:Ip,pingpong:Pp,smoothstep:Lp,smootherstep:Dp,randInt:Np,randFloat:Up,randFloatSpread:Fp,seededRandom:Bp,degToRad:Op,radToDeg:zp,isPowerOfTwo:kp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Gp,normalize:re,denormalize:_n},Dc=class Dc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dc.prototype.isVector2=!0;var Gt=Dc,Pe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);f=Math.sin(f*M)/E,a=Math.sin(a*M)/E,l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+_*a}else{l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nc=class Nc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wl.copy(this).projectOnVector(t),this.sub(wl)}reflect(t){return this.sub(wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nc.prototype.isVector3=!0;var I=Nc,wl=new I,Jh=new Pe,Uc=class Uc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],E=s[4],v=s[7],y=s[2],S=s[5],A=s[8];return r[0]=o*_+a*M+l*y,r[3]=o*m+a*E+l*S,r[6]=o*f+a*v+l*A,r[1]=c*_+h*M+d*y,r[4]=c*m+h*E+d*S,r[7]=c*f+h*v+d*A,r[2]=u*_+p*M+g*y,r[5]=u*m+p*E+g*S,r[8]=u*f+p*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Uc.prototype.isMatrix3=!0;var Ot=Uc,El=new Ot,Kh=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let i={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xs]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:Kh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Kh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var $t=Wp();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,To=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=Ys("canvas")),Wi.width=t.width,Wi.height=t.height;let s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xp=0,us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tl(s[o].image)):r.push(Tl(s[o]))}else r=Tl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?To.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var qp=0,Al=new I,ke=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=ze,o=mi,a=sn,l=nn,c=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Zn(),this.name="",this.source=new us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Al).x}get height(){return this.source.getSize(Al).y}get depth(){return this.source.getSize(Al).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=mc;ke.DEFAULT_ANISOTROPY=1;var Fc=class Fc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(p+1)/2,y=(f+1)/2,S=(h+u)/4,A=(d+_)/4,x=(g+m)/4;return E>v&&E>y?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fc.prototype.isVector4=!0;var ue=Fc,Ao=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ke(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends Ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zs=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Zo=class Zo{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,$p)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ri.crossVectors(n,rn),ri.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ri.crossVectors(n,rn)),ri.normalize(),Hr.crossVectors(rn,ri),s[0]=ri.x,s[4]=Hr.x,s[8]=rn.x,s[1]=ri.y,s[5]=Hr.y,s[9]=rn.y,s[2]=ri.z,s[6]=Hr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],E=n[7],v=n[11],y=n[15],S=s[0],A=s[4],x=s[8],T=s[12],R=s[1],L=s[5],N=s[9],U=s[13],C=s[2],F=s[6],G=s[10],q=s[14],k=s[3],D=s[7],B=s[11],X=s[15];return r[0]=o*S+a*R+l*C+c*k,r[4]=o*A+a*L+l*F+c*D,r[8]=o*x+a*N+l*G+c*B,r[12]=o*T+a*U+l*q+c*X,r[1]=h*S+d*R+u*C+p*k,r[5]=h*A+d*L+u*F+p*D,r[9]=h*x+d*N+u*G+p*B,r[13]=h*T+d*U+u*q+p*X,r[2]=g*S+_*R+m*C+f*k,r[6]=g*A+_*L+m*F+f*D,r[10]=g*x+_*N+m*G+f*B,r[14]=g*T+_*U+m*q+f*X,r[3]=M*S+E*R+v*C+y*k,r[7]=M*A+E*L+v*F+y*D,r[11]=M*x+E*N+v*G+y*B,r[15]=M*T+E*U+v*q+y*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],M=l*p-c*u,E=a*p-c*d,v=a*u-l*d,y=o*p-c*h,S=o*u-l*h,A=o*d-a*h;return e*(_*M-m*E+f*v)-n*(g*M-m*y+f*S)+s*(g*E-_*y+f*A)-r*(g*v-_*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=e*a-n*o,E=e*l-s*o,v=e*c-r*o,y=n*l-s*a,S=n*c-r*a,A=s*c-r*l,x=h*_-d*g,T=h*m-u*g,R=h*f-p*g,L=d*m-u*_,N=d*f-p*_,U=u*f-p*m,C=M*U-E*N+v*L+y*R-S*T+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return t[0]=(a*U-l*N+c*L)*F,t[1]=(s*N-n*U-r*L)*F,t[2]=(_*A-m*S+f*y)*F,t[3]=(u*S-d*A-p*y)*F,t[4]=(l*R-o*U-c*T)*F,t[5]=(e*U-s*R+r*T)*F,t[6]=(m*v-g*A-f*E)*F,t[7]=(h*A-u*v+p*E)*F,t[8]=(o*N-a*R+c*x)*F,t[9]=(n*R-e*N-r*x)*F,t[10]=(g*S-_*v+f*M)*F,t[11]=(d*v-h*S-p*M)*F,t[12]=(a*T-o*L-l*x)*F,t[13]=(e*L-n*T+s*x)*F,t[14]=(_*E-g*y-m*M)*F,t[15]=(h*y-d*E+u*M)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,M=l*c,E=l*h,v=l*d,y=n.x,S=n.y,A=n.z;return s[0]=(1-(_+f))*y,s[1]=(p+v)*y,s[2]=(g-E)*y,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(u+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+E)*A,s[9]=(m-M)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Xi.set(s[0],s[1],s[2]).length(),a=Xi.set(s[4],s[5],s[6]).length(),l=Xi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),pn.copy(this);let c=1/o,h=1/a,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ls)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ls)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Zo.prototype.isMatrix4=!0;var Ht=Zo,Xi=new I,pn=new Ht,Yp=new I(0,0,0),$p=new I(1,1,1),ri=new I,Hr=new I,rn=new I,Qh=new Ht,tu=new Pe,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zp=0,eu=new I,qi=new Pe,Gn=new Ht,Vr=new I,Fs=new I,Jp=new I,Kp=new Pe,nu=new I(1,0,0),iu=new I(0,1,0),su=new I(0,0,1),ru={type:"added"},jp={type:"removed"},Yi={type:"childadded",child:null},Rl={type:"childremoved",child:null},Oe=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Kn,n=new Pe,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Fs,Vr,this.up):Gn.lookAt(Vr,Fs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jp),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new I(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Se=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Cl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Rc(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cl(o,r,t+1/3),this.g=Cl(o,r,t),this.b=Cl(o,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return $t.workingToColorSpace($e.copy(this),t),Math.round(Zt($e.r*255,0,255))*65536+Math.round(Zt($e.g*255,0,255))*256+Math.round(Zt($e.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ie){$t.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Gr);let n=Gs(oi.h,Gr.h,e),s=Gs(oi.s,Gr.s,e),r=Gs(oi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Bt;Bt.NAMES=cd;var Ri=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mn=new I,Wn=new I,Il=new I,Xn=new I,$i=new I,Zi=new I,ou=new I,Pl=new I,Ll=new I,Dl=new I,Nl=new ue,Ul=new ue,Fl=new ue,$n=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Wn.subVectors(n,e),Il.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(Wn),l=mn.dot(Il),c=Wn.dot(Wn),h=Wn.dot(Il),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Nl.setScalar(0),Ul.setScalar(0),Fl.setScalar(0),Nl.fromBufferAttribute(t,e),Ul.fromBufferAttribute(t,n),Fl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nl,r.x),o.addScaledVector(Ul,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Wn.subVectors(t,e),mn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),Zi.subVectors(r,n),Pl.subVectors(t,n);let l=$i.dot(Pl),c=Zi.dot(Pl);if(l<=0&&c<=0)return e.copy(n);Ll.subVectors(t,s);let h=$i.dot(Ll),d=Zi.dot(Ll);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($i,o);Dl.subVectors(t,r);let p=$i.dot(Dl),g=Zi.dot(Dl);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ou.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(ou,a);let f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},te=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Xr.subVectors(this.max,Bs),Ji.subVectors(t.a,Bs),Ki.subVectors(t.b,Bs),ji.subVectors(t.c,Bs),ai.subVectors(Ki,Ji),li.subVectors(ji,Ki),Si.subVectors(Ji,ji);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Si.z,Si.y,ai.z,0,-ai.x,li.z,0,-li.x,Si.z,0,-Si.x,-ai.y,ai.x,0,-li.y,li.x,0,-Si.y,Si.x,0];return!Bl(e,Ji,Ki,ji,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,Ji,Ki,ji,Xr))?!1:(qr.crossVectors(ai,li),e=[qr.x,qr.y,qr.z],Bl(e,Ji,Ki,ji,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,Wr=new te,Ji=new I,Ki=new I,ji=new I,ai=new I,li=new I,Si=new I,Bs=new I,Xr=new I,qr=new I,wi=new I;function Bl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ce=new I,Yr=new Gt,tm=0,be=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=Ge,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Js=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ks=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},em=new te,Os=new I,Ol=new I,Ee=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):em.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(Ol)),this.expandByPoint(Os.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},nm=0,un=new Ht,zl=new Oe,Qi=new I,on=new te,zs=new te,Ue=new I,oe=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Ks:Js)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return zl.lookAt(t),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new te);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ee);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(on.min,zs.min),on.expandByPoint(Ue),Ue.addVectors(on.max,zs.max),on.expandByPoint(Ue)):(on.expandByPoint(zs.min),on.expandByPoint(zs.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),Ue.add(Qi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,u=new Gt,p=new Gt,g=new Gt,_=new I,m=new I;function f(x,T,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[x].add(_),a[T].add(_),a[R].add(_),l[x].add(m),l[T].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,T=M.length;x<T;++x){let R=M[x],L=R.start,N=R.count;for(let U=L,C=L+N;U<C;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let E=new I,v=new I,y=new I,S=new I;function A(x){y.fromBufferAttribute(s,x),S.copy(y);let T=a[x];E.copy(T),E.sub(y.multiplyScalar(y.dot(T))).normalize(),v.crossVectors(S,T);let L=v.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,T=M.length;x<T;++x){let R=M[x],L=R.start,N=R.count;for(let U=L,C=L+N;U<C;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new be(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Qe=new I,ps=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kl=new I,im=new I,sm=new Ot,ve=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=kl.subVectors(n,e).cross(im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sm.getNormalMatrix(t),s=this.coplanarPoint(kl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},rm=0,Dn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=bs,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ve().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new I,Hl=new I,$r=new I,Zr=new I,Ci=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hl.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(Hl);let r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=Zr.dot(this.direction),l=-Zr.dot($r),c=Zr.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hl).addScaledVector($r,u),p}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,p=t.z-o.z,g=e.x-o.x,_=e.y-o.y,m=e.z-o.z,f=n.x-o.x,M=n.y-o.y,E=n.z-o.z,v=Math.abs(l),y=Math.abs(c),S=Math.abs(h),A,x,T,R,L,N,U,C,F,G,q,k;if(v>=y&&v>=S?(T=l,N=d,F=g,k=f,l>=0?(A=c,x=h,R=u,L=p,U=_,C=m,G=M,q=E):(A=h,x=c,R=p,L=u,U=m,C=_,G=E,q=M)):y>=S?(T=c,N=u,F=_,k=M,c>=0?(A=h,x=l,R=p,L=d,U=m,C=g,G=E,q=f):(A=l,x=h,R=d,L=p,U=g,C=m,G=f,q=E)):(T=h,N=p,F=m,k=E,h>=0?(A=l,x=c,R=d,L=u,U=g,C=_,G=f,q=M):(A=c,x=l,R=u,L=d,U=_,C=g,G=M,q=f)),T===0)return null;let D=A/T,B=x/T,X=1/T,H=R-D*N,j=L-B*N,at=U-D*F,ct=C-B*F,lt=G-D*k,Y=q-B*k,Q=lt*ct-Y*at,xt=H*Y-j*lt,ht=at*j-ct*H;if(s){if(Q<0||xt<0||ht<0)return null}else if((Q<0||xt<0||ht<0)&&(Q>0||xt>0||ht>0))return null;let ut=Q+xt+ht;if(ut===0)return null;let Ut=X*(Q*N+xt*F+ht*k);return(ut>0?Ut<0:Ut>0)?null:this.at(Ut/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},au=new Ht,Ei=new Ci,Jr=new Ee,lu=new I,Kr=new I,jr=new I,Qr=new I,Vl=new I,to=new I,cu=new I,eo=new I,ye=class extends Oe{constructor(t=new oe,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Vl.fromBufferAttribute(d,t),o?to.addScaledVector(Vl,h):to.addScaledVector(Vl.sub(e),h))}e.add(to)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Jr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Jr,lu)===null||Ei.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(au.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,y=E;v<y;v+=3){let S=a.getX(v),A=a.getX(v+1),x=a.getX(v+2);s=no(this,f,t,n,c,h,d,S,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let M=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=no(this,o,t,n,c,h,d,M,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,y=E;v<y;v+=3){let S=v,A=v+1,x=v+2;s=no(this,f,t,n,c,h,d,S,A,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let M=m,E=m+1,v=m+2;s=no(this,o,t,n,c,h,d,M,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function om(i,t,e,n,s,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===On,a),l===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,jr),i.getVertexPosition(c,Qr);let h=om(i,t,e,n,Kr,jr,Qr,cu);if(h){let d=new I;$n.getBarycoord(cu,Kr,jr,Qr,d),s&&(h.uv=$n.getInterpolatedAttribute(s,a,l,c,d,new Gt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,l,c,d,new Gt)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};$n.getNormal(Kr,jr,Qr,u.normal),h.face=u,h.barycoord=d}return h}var Nn=class extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Fe,h=Fe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new Ht,hu=new Ht,io=[],uu=new te,am=new Ht,ks=new ye,Hs=new Ee,ms=class extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new te),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),uu.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ee),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Hs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),hu.multiplyMatrices(n,ts),ks.matrixWorld=hu,ks.raycast(t,io);for(let o=0,a=io.length;o<a;o++){let l=io[o];l.instanceId=r,l.object=this,e.push(l)}io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new jn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(s*this.count),s,this.count,ws,Ge));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Ee,lm=new Gt(.5,.5),so=new I,Un=class{constructor(t=new ve,e=new ve,n=new ve,s=new ve,r=new ve,o=new ve){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],M=r[12],E=r[13],v=r[14],y=r[15];if(s[0].setComponents(c-o,p-h,f-g,y-M).normalize(),s[1].setComponents(c+o,p+h,f+g,y+M).normalize(),s[2].setComponents(c+a,p+d,f+_,y+E).normalize(),s[3].setComponents(c-a,p-d,f-_,y-E).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,p-u,f-m,y-v).normalize();else if(s[4].setComponents(c-l,p-u,f-m,y-v).normalize(),e===xn)s[5].setComponents(c+l,p+u,f+m,y+v).normalize();else if(e===ls)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=lm.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var an=class extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Io=new I,Po=new I,du=new Ht,Vs=new Ci,ro=new Ee,Gl=new I,fu=new I,Ii=class extends Oe{constructor(t=new oe,e=new an){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Io.fromBufferAttribute(e,s-1),Po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Io.distanceTo(Po);t.setAttribute("lineDistance",new me(n,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;du.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),M=h.getX(_+1),E=oo(this,t,Vs,l,f,M,_);E&&e.push(E)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=oo(this,t,Vs,l,_,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=oo(this,t,Vs,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){let _=oo(this,t,Vs,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Io.fromBufferAttribute(a,s),Po.fromBufferAttribute(a,r),e.distanceSqToSegment(Io,Po,Gl,fu)>n)return;Gl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gl);if(!(c<t.near||c>t.far))return{distance:c,point:fu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var pu=new I,mu=new I,vn=class extends Ii{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)pu.fromBufferAttribute(e,s),mu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pu.distanceTo(mu);t.setAttribute("lineDistance",new me(n,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},js=class extends Ii{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Fn=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gu=new Ht,Kl=new Ci,ao=new Ee,lo=new I,Qn=class extends Oe{constructor(t=new oe,e=new Fn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;gu.copy(s).invert(),Kl.copy(t.ray).applyMatrix4(gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);lo.fromBufferAttribute(d,m),_u(lo,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)lo.fromBufferAttribute(d,g),_u(lo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _u(i,t,e,n,s,r,o){let a=Kl.distanceSqToPoint(i);if(a<e){let l=new I;Kl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qs=class extends ke{constructor(t=[],e=pi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tr=class extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends ke{constructor(t,e,n=Mn,s,r,o,a=Fe,l=Fe,c,h=Pn,d=1){if(h!==Pn&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Lo=class extends hi{constructor(t,e=Mn,n=pi,s,r,o=Fe,a=Fe,l,c=Pn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},er=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(_,m,f,M,E,v,y,S,A,x,T){let R=v/A,L=y/x,N=v/2,U=y/2,C=S/2,F=A+1,G=x+1,q=0,k=0,D=new I;for(let B=0;B<G;B++){let X=B*L-U;for(let H=0;H<F;H++){let j=H*R-N;D[_]=j*M,D[m]=X*E,D[f]=C,c.push(D.x,D.y,D.z),D[_]=0,D[m]=0,D[f]=S>0?1:-1,h.push(D.x,D.y,D.z),d.push(H/A),d.push(1-B/x),q+=1}}for(let B=0;B<x;B++)for(let X=0;X<A;X++){let H=u+X+F*B,j=u+X+F*(B+1),at=u+(X+1)+F*(B+1),ct=u+(X+1)+F*B;l.push(H,j,ct),l.push(j,at,ct),k+=6}a.addGroup(p,k,T),p+=k,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Pi=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,_=[],m=n/2,f=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(p,2));function M(){let v=new I,y=new I,S=0,A=(e-t)/n;for(let x=0;x<=r;x++){let T=[],R=x/r,L=R*(e-t)+t;for(let N=0;N<=s;N++){let U=N/s,C=U*l+a,F=Math.sin(C),G=Math.cos(C);y.x=L*F,y.y=-R*n+m,y.z=L*G,d.push(y.x,y.y,y.z),v.set(F,A,G).normalize(),u.push(v.x,v.y,v.z),p.push(U,1-R),T.push(g++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let R=_[T][x],L=_[T+1][x],N=_[T+1][x+1],U=_[T][x+1];(t>0||T!==0)&&(h.push(R,L,U),S+=3),(e>0||T!==r-1)&&(h.push(L,N,U),S+=3)}c.addGroup(f,S,0),f+=S}function E(v){let y=g,S=new Gt,A=new I,x=0,T=v===!0?t:e,R=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),u.push(0,R,0),p.push(.5,.5),g++;let L=g;for(let N=0;N<=s;N++){let C=N/s*l+a,F=Math.cos(C),G=Math.sin(C);A.x=T*G,A.y=m*R,A.z=T*F,d.push(A.x,A.y,A.z),u.push(0,R,0),S.x=F*.5+.5,S.y=G*.5*R+.5,p.push(S.x,S.y),g++}for(let N=0;N<s;N++){let U=y+N,C=L+N;v===!0?h.push(C,C+1,U):h.push(C+1,C,U),x+=3}c.addGroup(f,x,v===!0?1:2),f+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nr=class i extends Pi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var co=new I,ho=new I,Wl=new I,uo=new $n,Li=class extends oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ss*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:f}=uo;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),uo.getNormal(Wl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let E=(M+1)%3,v=d[M],y=d[E],S=uo[h[M]],A=uo[h[E]],x=`${v}_${y}`,T=`${y}_${v}`;T in u&&u[T]?(Wl.dot(u[T].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(A.x,A.y,A.z)),u[T]=null):x in u||(u[x]={index0:c[M],index1:c[E],normal:Wl.clone()})}}for(let g in u)if(u[g]){let{index0:_,index1:m}=u[g];co.fromBufferAttribute(a,_),ho.fromBufferAttribute(a,m),p.push(co.x,co.y,co.z),p.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new me(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var yn=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let M=f*u-o;for(let E=0;E<c;E++){let v=E*d-r;g.push(v,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let E=M+c*f,v=M+c*(f+1),y=M+1+c*(f+1),S=M+1+c*f;p.push(E,v,S),p.push(v,y,S)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var gs=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let M=[],E=f/n,v=o+E*a,y=t*Math.cos(v),S=Math.sqrt(t*t-y*y),A=0;f===0&&o===0?A=.5/e:f===n&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let T=x/e,R=s+T*r;d.x=-S*Math.cos(R),d.y=y,d.z=S*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+A,1-E),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let E=h[f][M+1],v=h[f][M],y=h[f+1][M],S=h[f+1][M+1];(f!==0||o>0)&&p.push(E,v,S),(f!==n-1||l<Math.PI)&&p.push(v,y,S)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class i extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,p=new I,g=new I;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let f=0;f<=s;f++){let M=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(M),p.y=(t+e*Math.cos(m))*Math.sin(M),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let f=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(f,M,v),l.push(M,E,v)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(xu(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(xu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Fi(i[e]);for(let s in n)t[s]=n[s]}return t}function xu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var hd={clone:Fi,merge:Je},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Do=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xs=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},No=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uo=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function es(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zl:r=t,a=2*e-n;break;case Jl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zl:o=t,l=2*n-e;break;case Jl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let y=0;y!==a;++y)r[y]=f*o[h+y]+M*o[c+y]+E*o[l+y]+v*o[d+y];return r}},Bo=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Oo=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zo=class extends ui{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}let u=a*2,p=t-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],f=p*u+g*2,M=d[f],E=d[f+1],v=t*u+g*2,y=h[v],S=h[v+1],A=fm(n,e,M,y,s);r[g]=ud(A,_,E,S,m)}return r}};function ud(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function dm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function fm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=ud(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=dm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=es(e,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:es(t.times,Array),values:es(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xl(t.settings)&&(n.settings={inTangents:es(t.settings.inTangents,Array),outTangents:es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new zo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case Eo:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break;case Yl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xl(this.settings)&&(vu(this.settings.inTangents,t),vu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ft("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ap(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Eo;var di=class extends ln{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ws;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};ko.prototype.ValueTypeName="color";var Ho=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};Ho.prototype.ValueTypeName="number";var Vo=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pe.slerpFlat(r,0,o,c-a,o,c,l);return r}},ir=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends ln{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ws;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};Go.prototype.ValueTypeName="vector";var Wo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dd=new Wo,Xo=class{constructor(t){this.manager=t!==void 0?t:dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},rr=class extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ql=new Ht,yu=new I,bu=new I,qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Un,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(yu),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ql,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ls||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fo=new I,po=new Pe,Cn=new I,or=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fo,po,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fo,po,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new I,Mu=new Gt,Su=new Gt,Ze=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Mu,Su),e.subVectors(Su,Mu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Bn=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jl=class extends qo{constructor(){super(new Bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new jl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vs=class extends oe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ns=-90,is=1,Yo=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(ns,is,t,e);s.layers=this.layers,this.add(s);let r=new Ze(ns,is,t,e);r.layers=this.layers,this.add(r);let o=new Ze(ns,is,t,e);o.layers=this.layers,this.add(o);let a=new Ze(ns,is,t,e);a.layers=this.layers,this.add(a);let l=new Ze(ns,is,t,e);l.layers=this.layers,this.add(l);let c=new Ze(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ic="\\[\\]\\.:\\/",pm=new RegExp("["+Ic+"]","g"),Pc="[^"+Ic+"]",mm="[^"+Ic.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",Pc),_m=/(WCOD+)?/.source.replace("WCOD",mm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pc),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pc),ym=new RegExp("^"+gm+_m+xm+vm+"$"),bm=["material","materials","bones","map"],Ql=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(t){let e=ym.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Ql;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gy=new Float32Array(1);var lr=class extends Co{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var wu=new Ht,Di=class{constructor(t,e,n=0,s=1/0){this.ray=new Ci(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ft("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,n=[]){return tc(t,this,n,e),n.sort(Eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tc(t[s],this,n,e);return n.sort(Eu),n}};function Eu(i,t){return i.distance-t.distance}function tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)tc(r[o],t,e,!0)}}var Bc=class Bc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Bc.prototype.isMatrix2=!0;var ec=Bc;function Lc(i,t,e,n){let s=Mm(n);switch(e){case yc:return i*t;case ws:return i*t/s.components*s.byteLength;case ia:return i*t/s.components*s.byteLength;case _i:return i*t*2/s.components*s.byteLength;case sa:return i*t*2/s.components*s.byteLength;case bc:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case ra:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:case ca:return Math.max(i,16)*Math.max(t,8)/4;case oa:case la:return Math.max(i,8)*Math.max(t,8)/2;case ha:case ua:case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case da:case gr:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case La:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Da:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(i){switch(i){case nn:case gc:return{byteLength:1,components:1};case Ms:case _c:case Sn:return{byteLength:2,components:1};case ea:case na:return{byteLength:2,components:4};case Mn:case ta:case Ge:return{byteLength:4,components:1};case xc:case vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Nd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$m=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_g=`#ifdef USE_ENVMAP
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
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
#endif`,Sg=`uniform sampler2D dfgLUT;
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
}`,wg=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,N_=`#define DISTANCE
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
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
}`,O_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,H_=`#define LAMBERT
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
}`,V_=`#define LAMBERT
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
}`,G_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,$_=`#define PHONG
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
}`,Z_=`#define STANDARD
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
}`,J_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,j_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Em,alphahash_pars_fragment:Tm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Im,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Um,beginnormal_vertex:Fm,bsdfs:Bm,iridescence_fragment:Om,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Gm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:$m,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:tg,colorspace_fragment:eg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:og,envmap_physical_pars_fragment:_g,envmap_vertex:ag,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:vg,lights_phong_fragment:yg,lights_phong_pars_fragment:bg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:wg,lights_fragment_maps:Eg,lights_fragment_end:Tg,lightprobes_pars_fragment:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Pg,map_fragment:Lg,map_pars_fragment:Dg,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Bg,morphinstance_vertex:Og,morphcolor_vertex:zg,morphnormal_vertex:kg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Vg,normal_fragment_begin:Gg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:jg,opaque_fragment:Qg,packing:t_,premultiplied_alpha_fragment:e_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:b_,uv_pars_vertex:M_,uv_vertex:S_,worldpos_vertex:w_,background_vert:E_,background_frag:T_,backgroundCube_vert:A_,backgroundCube_frag:R_,cube_vert:C_,cube_frag:I_,depth_vert:P_,depth_frag:L_,distance_vert:D_,distance_frag:N_,equirect_vert:U_,equirect_frag:F_,linedashed_vert:B_,linedashed_frag:O_,meshbasic_vert:z_,meshbasic_frag:k_,meshlambert_vert:H_,meshlambert_frag:V_,meshmatcap_vert:G_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:$_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:K_,meshtoon_frag:j_,points_vert:Q_,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},yt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Hn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Hn.physical={uniforms:Je([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var za={r:0,b:0,g:0},r0=new Ht,Ud=new Ot;Ud.set(-1,0,0,0,1,0,0,0,1);function o0(i,t,e,n,s,r){let o=new Bt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function g(M){let E=!1,v=p(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),E=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){let v=p(E);v&&(v.isCubeTexture||v.mapping===hr)?(c===void 0&&(c=new ye(new dn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Fi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ud),c.material.toneMapped=$t.getTransfer(v.colorSpace)!==ie,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ye(new yn(2,2),new He({name:"BackgroundMaterial",uniforms:Fi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$t.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(za,Cc(i)),e.buffers.color.setClear(za.r,za.g,za.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:_,dispose:f}}function a0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,N,U,C,F){let G=!1,q=d(L,C,U,N);r!==q&&(r=q,c(r.object)),G=p(L,C,U,F),G&&g(L,C,U,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(L,N,U,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,N,U,C){let F=C.wireframe===!0,G=n[N.id];G===void 0&&(G={},n[N.id]=G);let q=L.isInstancedMesh===!0?L.id:0,k=G[q];k===void 0&&(k={},G[q]=k);let D=k[U.id];D===void 0&&(D={},k[U.id]=D);let B=D[F];return B===void 0&&(B=u(l()),D[F]=B),B}function u(L){let N=[],U=[],C=[];for(let F=0;F<e;F++)N[F]=0,U[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:C,object:L,attributes:{},index:null}}function p(L,N,U,C){let F=r.attributes,G=N.attributes,q=0,k=U.getAttributes();for(let D in k)if(k[D].location>=0){let X=F[D],H=G[D];if(H===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),X===void 0||X.attribute!==H||H&&X.data!==H.data)return!0;q++}return r.attributesNum!==q||r.index!==C}function g(L,N,U,C){let F={},G=N.attributes,q=0,k=U.getAttributes();for(let D in k)if(k[D].location>=0){let X=G[D];X===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let H={};H.attribute=X,X&&X.data&&(H.data=X.data),F[D]=H,q++}r.attributes=F,r.attributesNum=q,r.index=C}function _(){let L=r.newAttributes;for(let N=0,U=L.length;N<U;N++)L[N]=0}function m(L){f(L,0)}function f(L,N){let U=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;U[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),F[L]!==N&&(i.vertexAttribDivisor(L,N),F[L]=N)}function M(){let L=r.newAttributes,N=r.enabledAttributes;for(let U=0,C=N.length;U<C;U++)N[U]!==L[U]&&(i.disableVertexAttribArray(U),N[U]=0)}function E(L,N,U,C,F,G,q){q===!0?i.vertexAttribIPointer(L,N,U,F,G):i.vertexAttribPointer(L,N,U,C,F,G)}function v(L,N,U,C){_();let F=C.attributes,G=U.getAttributes(),q=N.defaultAttributeValues;for(let k in G){let D=G[k];if(D.location>=0){let B=F[k];if(B===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),B!==void 0){let X=B.normalized,H=B.itemSize,j=t.get(B);if(j===void 0)continue;let at=j.buffer,ct=j.type,lt=j.bytesPerElement,Y=ct===i.INT||ct===i.UNSIGNED_INT||B.gpuType===ta;if(B.isInterleavedBufferAttribute){let Q=B.data,xt=Q.stride,ht=B.offset;if(Q.isInstancedInterleavedBuffer){for(let ut=0;ut<D.locationSize;ut++)f(D.location+ut,Q.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ut=0;ut<D.locationSize;ut++)m(D.location+ut);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ut=0;ut<D.locationSize;ut++)E(D.location+ut,H/D.locationSize,ct,X,xt*lt,(ht+H/D.locationSize*ut)*lt,Y)}else{if(B.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)f(D.location+Q,B.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Q=0;Q<D.locationSize;Q++)m(D.location+Q);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Q=0;Q<D.locationSize;Q++)E(D.location+Q,H/D.locationSize,ct,X,H*lt,H/D.locationSize*Q*lt,Y)}}else if(q!==void 0){let X=q[k];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(D.location,X);break;case 3:i.vertexAttrib3fv(D.location,X);break;case 4:i.vertexAttrib4fv(D.location,X);break;default:i.vertexAttrib1fv(D.location,X)}}}}M()}function y(){T();for(let L in n){let N=n[L];for(let U in N){let C=N[U];for(let F in C){let G=C[F];for(let q in G)h(G[q].object),delete G[q];delete C[F]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let U in N){let C=N[U];for(let F in C){let G=C[F];for(let q in G)h(G[q].object),delete G[q];delete C[F]}}delete n[L.id]}function A(L){for(let N in n){let U=n[N];for(let C in U){let F=U[C];if(F[L.id]===void 0)continue;let G=F[L.id];for(let q in G)h(G[q].object),delete G[q];delete F[L.id]}}}function x(L){for(let N in n){let U=n[N],C=L.isInstancedMesh===!0?L.id:0,F=U[C];if(F!==void 0){for(let G in F){let q=F[G];for(let k in q)h(q[k].object),delete q[k];delete F[G]}delete U[C],Object.keys(U).length===0&&delete n[N]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function l0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==nn&&A!==Ge&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:y,samples:S}}function h0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ve,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,v=f.clippingState||null;l.value=v,v=h(g,u,E,p);for(let y=0;y!==E;++y)v[y]=e[y];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Ts=4,u0=6,d0=20,f0=256,xr=new Bn,fd=new Bt,Oc=null,zc=0,kc=0,Hc=!1,p0=new I,Bi=new I,Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=p0}=r;Oc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,zc,kc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Sn,format:sn,colorSpace:Xs,depthBuffer:!1},s=pd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=m0(r)),this._blurMaterial=_0(r,t,e),this._ggxMaterial=g0(r,t,e)}return s}_compileMaterial(t){let e=new ye(new oe,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(fd),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new dn,new en({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,f=!0):(m.color.copy(fd),f=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let y=this._cubeSize;Es(s,v*y,E>2?y:0,y,y),d.setRenderTarget(s),f&&d.render(_,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===pi||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ts?n-g+Ts:0),f=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Es(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(a,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Es(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(a,xr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),u=4*(this._cubeSize-h);Es(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,xr)}};function m0(i){let t=[],e=[],n=i,s=i-Ts+1+u0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,E=f>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(v,p*u*f);for(let y=0;y<u;y++){let S=h[y*2]*2-1,A=h[y*2+1]*2-1;f===0?Bi.set(1,A,S):f===1?Bi.set(-S,1,-A):f===2?Bi.set(-S,A,1):f===3?Bi.set(-1,A,-S):f===4?Bi.set(-S,-1,A):Bi.set(S,A,-1),Bi.toArray(_,(f*u+y)*p)}}let m=new oe;m.setAttribute("position",new be(g,p)),m.setAttribute("outputDirection",new be(_,p)),e.push(new ye(m,null)),n>Ts&&n--}return{lodMeshes:e,sizeLods:t}}function pd(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g0(i,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:f0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function _0(i,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:d0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function md(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function gd(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Va=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:zn});r.uniforms.tEquirect.value=e;let o=new ye(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=ze),new Yo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function x0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ko||p===jo)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Va(g.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,g=p===Ko||p===jo,_=p===pi||p===Ui;if(g||_){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ha(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Ha(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===Ko?u.mapping=pi:p===jo&&(u.mapping=Ui),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function v0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let M=p.array;_=p.version;for(let E=0,v=M.length;E<v;E+=3){let y=M[E+0],S=M[E+1],A=M[E+2];u.push(y,S,S,A,A,y)}}else{let M=g.array;_=g.version;for(let E=0,v=M.length/3-1;E<v;E+=3){let y=E+0,S=E+1,A=E+2;u.push(y,S,S,A,A,y)}}let m=new(g.count>=65535?Ks:Js)(u,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function b0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*o,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function M0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S0(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=a.attributes.position.count*E,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*y*4*d),A=new Zs(S,v,y,d);A.type=Ge,A.needsUpdate=!0;let x=E*4;for(let R=0;R<d;R++){let L=m[R],N=f[R],U=M[R],C=v*y*4*R;for(let F=0;F<L.count;F++){let G=F*x;p===!0&&(s.fromBufferAttribute(L,F),S[C+G+0]=s.x,S[C+G+1]=s.y,S[C+G+2]=s.z,S[C+G+3]=0),g===!0&&(s.fromBufferAttribute(N,F),S[C+G+4]=s.x,S[C+G+5]=s.y,S[C+G+6]=s.z,S[C+G+7]=0),_===!0&&(s.fromBufferAttribute(U,F),S[C+G+8]=s.x,S[C+G+9]=s.y,S[C+G+10]=s.z,S[C+G+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Gt(v,y)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function w0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var E0={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[hc]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[fc]:"AGX_TONE_MAPPING",[pc]:"NEUTRAL_TONE_MAPPING",[dc]:"CUSTOM_TONE_MAPPING"};function T0(i,t,e,n,s,r){let o=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new oe;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));let h=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ye(c,h),u=new Bn(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,M=[],E=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;let y=o.width,S=o.height;M.length>0&&a===null&&(a=new Be(y,S,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Be(y,S,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(y,S)}},this.begin=function(v,y){if(_||v.toneMapping===bn&&M.length===0)return!1;if(f=y,y!==null){let S=y.width,A=y.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=bn,!0},this.hasRenderPass=function(){return E},this.end=function(v,y){v.toneMapping=m,_=!0;let S=o,A=a;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(v,A,S,y),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,h.defines={},$t.getTransfer(p)===ie&&(h.defines.SRGB_TRANSFER="");let x=E0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(f),v.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Fd=new ke,Wc=new hi(1,1),Bd=new Zs,Od=new Ro,zd=new Qs,_d=[],xd=[],vd=new Float32Array(16),yd=new Float32Array(9),bd=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=xd[t];e===void 0&&(e=new Int32Array(t),xd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),Ne(e,n)}}function L0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;yd.set(n),i.uniformMatrix3fv(this.addr,!1,yd),Ne(e,n)}}function D0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Ne(e,n)}}function N0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function O0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function V0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wc.compareFunction=e.isReversedDepthBuffer()?Oa:Ba,r=Wc):r=Fd,e.setTexture2D(t||r,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Od,s)}function W0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zd,s)}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bd,s)}function q0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return I0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return O0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(i,t){i.uniform1fv(this.addr,t)}function $0(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Z0(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function J0(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function K0(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function j0(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Q0(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tx(i,t){i.uniform1iv(this.addr,t)}function ex(i,t){i.uniform2iv(this.addr,t)}function nx(i,t){i.uniform3iv(this.addr,t)}function ix(i,t){i.uniform4iv(this.addr,t)}function sx(i,t){i.uniform1uiv(this.addr,t)}function rx(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function ax(i,t){i.uniform4uiv(this.addr,t)}function lx(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wc:o=Fd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function cx(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Od,r[o])}function hx(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zd,r[o])}function ux(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bd,r[o])}function dx(i){switch(i){case 5126:return Y0;case 35664:return $0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}var Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}},qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dx(e.type)}},Yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Md(i,t){i.seq.push(t),i.map[t.id]=t}function fx(i,t,e){let n=i.name,s=n.length;for(Vc.lastIndex=0;;){let r=Vc.exec(n),o=Vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Md(e,c===void 0?new Xc(a,i,t):new qc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Yc(a),Md(e,d)),e=d}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);fx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Sd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var px=37297,mx=0;function gx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wd=new Ot;function _x(i){$t._getMatrix(wd,$t.workingColorSpace,i);let t=`mat3( ${wd.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ed(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gx(i.getShaderSource(t),a)}else return r}function xx(i,t){let e=_x(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var vx={[lc]:"Linear",[cc]:"Reinhard",[hc]:"Cineon",[uc]:"ACESFilmic",[fc]:"AgX",[pc]:"Neutral",[dc]:"Custom"};function yx(i,t){let e=vx[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ka=new I;function bx(){$t.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),t=ka.y.toFixed(4),e=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Sx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yr(i){return i!==""}function Td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(Ex,Ax)}var Tx=new Map;function Ax(i,t){let e=Xt[t];if(e===void 0){let n=Tx.get(t);if(n!==void 0)e=Xt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $c(e)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(Rx,Cx)}function Cx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ix={[cr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Px(i){return Ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lx={[pi]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function Dx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nx={[Ui]:"ENVMAP_MODE_REFRACTION"};function Ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fx={[Jo]:"ENVMAP_BLENDING_MULTIPLY",[Yu]:"ENVMAP_BLENDING_MIX",[$u]:"ENVMAP_BLENDING_ADD"};function Bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ox(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Px(e),c=Dx(e),h=Ux(e),d=Bx(e),u=Ox(e),p=Mx(e),g=Sx(r),_=s.createProgram(),m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),f=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==bn?yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,xx("linearToOutputTexel",e.outputColorSpace),bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),o=$c(o),o=Td(o,e),o=Ad(o,e),a=$c(a),a=Td(a,e),a=Ad(a,e),o=Rd(o),a=Rd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=M+m+o,v=M+f+a,y=Sd(s,s.VERTEX_SHADER,E),S=Sd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(y)||"",C=s.getShaderInfoLog(S)||"",F=N.trim(),G=U.trim(),q=C.trim(),k=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,S);else{let B=Ed(s,y,"vertex"),X=Ed(s,S,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+B+`
`+X)}else F!==""?Dt("WebGLProgram: Program Info Log:",F):(G===""||q==="")&&(D=!1);D&&(L.diagnostics={runnable:k,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(y),s.deleteShader(S),x=new As(s,_),T=wx(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,px)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=S,this}var kx=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jc(t),e.set(t,n)),n}},Jc=class{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}};function Hx(i){return i===_i||i===gr||i===_r}function Vx(i,t,e,n,s,r){let o=new ds,a=new Zc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,L,N,U){let C=L.fog,F=N.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||G,q),D=k&&k.mapping===hr?k.image.height:null,B=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,H=X!==void 0?X.length:0,j=0;F.morphAttributes.position!==void 0&&(j=1),F.morphAttributes.normal!==void 0&&(j=2),F.morphAttributes.color!==void 0&&(j=3);let at,ct,lt,Y;if(B){let fe=Hn[B];at=fe.vertexShader,ct=fe.fragmentShader}else{at=x.vertexShader,ct=x.fragmentShader;let fe=a.getVertexShaderStage(x),ee=a.getFragmentShaderStage(x);a.update(x,fe,ee),lt=fe.id,Y=ee.id}let Q=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),ht=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,Ut=!!x.map,ae=!!x.matcap,zt=!!k,qt=!!x.aoMap,Kt=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,ce=!!x.normalMap,Te=!!x.displacementMap,tn=!!x.emissiveMap,Me=!!x.metalnessMap,Ae=!!x.roughnessMap,V=x.anisotropy>0,Xe=x.clearcoat>0,se=x.dispersion>0,P=x.retroreflectivity>0,b=x.iridescence>0,W=x.sheen>0,J=x.transmission>0,et=V&&!!x.anisotropyMap,dt=Xe&&!!x.clearcoatMap,ft=Xe&&!!x.clearcoatNormalMap,nt=Xe&&!!x.clearcoatRoughnessMap,rt=b&&!!x.iridescenceMap,pt=b&&!!x.iridescenceThicknessMap,It=W&&!!x.sheenColorMap,vt=W&&!!x.sheenRoughnessMap,mt=!!x.specularMap,Pt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,kt=J&&!!x.transmissionMap,z=J&&!!x.thicknessMap,gt=!!x.gradientMap,st=!!x.alphaMap,_t=x.alphaTest>0,St=!!x.alphaHash,ot=!!x.extensions,Lt=bn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Rt={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:ct,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ut,batchingColor:ut&&N._colorsTexture!==null,instancing:ht,instancingColor:ht&&N.instanceColor!==null,instancingMorph:ht&&N.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:ae,envMap:zt,envMapMode:zt&&k.mapping,envMapCubeUVHeight:D,aoMap:qt,lightMap:Kt,bumpMap:Vt,normalMap:ce,displacementMap:Te,emissiveMap:tn,normalMapObjectSpace:ce&&x.normalMapType===Ku,normalMapTangentSpace:ce&&x.normalMapType===Fa,packedNormalMap:ce&&x.normalMapType===Fa&&Hx(x.normalMap.format),metalnessMap:Me,roughnessMap:Ae,anisotropy:V,anisotropyMap:et,clearcoat:Xe,clearcoatMap:dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:nt,dispersion:se,retroreflection:P,iridescence:b,iridescenceMap:rt,iridescenceThicknessMap:pt,sheen:W,sheenColorMap:It,sheenRoughnessMap:vt,specularMap:mt,specularColorMap:Pt,specularIntensityMap:Nt,transmission:J,transmissionMap:kt,thicknessMap:z,gradientMap:gt,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:_t,alphaHash:St,combine:x.combine,mapUv:Ut&&g(x.map.channel),aoMapUv:qt&&g(x.aoMap.channel),lightMapUv:Kt&&g(x.lightMap.channel),bumpMapUv:Vt&&g(x.bumpMap.channel),normalMapUv:ce&&g(x.normalMap.channel),displacementMapUv:Te&&g(x.displacementMap.channel),emissiveMapUv:tn&&g(x.emissiveMap.channel),metalnessMapUv:Me&&g(x.metalnessMap.channel),roughnessMapUv:Ae&&g(x.roughnessMap.channel),anisotropyMapUv:et&&g(x.anisotropyMap.channel),clearcoatMapUv:dt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(x.sheenRoughnessMap.channel),specularMapUv:mt&&g(x.specularMap.channel),specularColorMapUv:Pt&&g(x.specularColorMap.channel),specularIntensityMapUv:Nt&&g(x.specularIntensityMap.channel),transmissionMapUv:kt&&g(x.transmissionMap.channel),thicknessMapUv:z&&g(x.thicknessMap.channel),alphaMapUv:st&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ce||V),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ut||st),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:j,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===ie,decodeVideoTextureEmissive:tn&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Le,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){let T=p[x.type],R;if(T){let L=Hn[T];R=hd.clone(L.uniforms)}else R=x.uniforms;return R}function v(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new zx(i,T,x,s),c.push(R),h.set(T,R)),R}function y(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:A}}function Gx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,_,m,f){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},i[t]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=f),t++,M}function l(u,p,g,_,m,f,M){M.reversedDepth===!0&&(m=-m);let E=a(u,p,g,_,m,f);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,p,g,_,m,f){let M=a(u,p,g,_,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,p){e.length>1&&e.sort(u||Wx),n.length>1&&n.sort(p||Id),s.length>1&&s.sort(p||Id)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pd,i.set(n,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Bt};break;case"SpotLight":e={position:new I,direction:new I,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $x=0;function Zx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jx(i){let t=new qx,e=Yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ht,o=new Ht;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,E=0,v=0,y=0,S=0,A=0,x=0,T=0,R=0;c.sort(Zx);for(let N=0,U=c.length;N<U;N++){let C=c[N],F=C.color,G=C.intensity,q=C.distance,k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===_i?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*G,d+=F.g*G,u+=F.b*G;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],G);R++}else if(C.isSunLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=k;let H=B.getViewportCount();for(let j=0;j<H;j++)n.sunShadowMatrix[_+j]=B.getMatrix(j),n.sunShadowCascade[_+j]=B._cascadeData[j];_+=H,g++}n.sun[p]=D,p++}else if(C.isDirectionalLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=C.shadow.matrix,y++}n.directional[m]=D,m++}else if(C.isSpotLight){let D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(F).multiplyScalar(G),D.distance=q,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[M]=D;let B=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,B.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[M]=B.matrix,C.castShadow){let X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.spotShadow[M]=X,n.spotShadowMap[M]=k,A++}M++}else if(C.isRectAreaLight){let D=t.get(C);D.color.copy(F).multiplyScalar(G),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=D,E++}else if(C.isPointLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let B=C.shadow,X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,n.pointShadow[f]=X,n.pointShadowMap[f]=k,n.pointShadowMatrix[f]=C.shadow.matrix,S++}n.point[f]=D,f++}else if(C.isHemisphereLight){let D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(G),D.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[v]=D,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==y||L.numPointShadows!==S||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=f,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=y,L.numPointShadows=S,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=$x++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0,m=0,f=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let v=c[M];if(v.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),u++}else if(v.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function Ld(i){let t=new Jx(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Kx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ld(i),t.set(s,[a])):r>=o.length?(a=new Ld(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
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
}`,tv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ev=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Dd=new Ht,vr=new I,Gc=new I;function nv(i,t,e){let n=new Un,s=new Gt,r=new Gt,o=new ue,a=new No,l=new Uo,c={},h=e.maxTextureSize,d={[On]:Ve,[Ve]:On,[Le]:Le},u=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:jx,fragmentShader:Qx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ye(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let f=this.type;this.render=function(S,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ru&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=f!==this.type;U&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=S.length;C<F;C++){let G=S[C],q=G.shadow;if(q===void 0){Dt("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let k=q.getFrameExtents();s.multiply(k),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,q.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=D,q.map===null||U===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ys){if(G.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Be(s.x,s.y,{format:_i,type:Sn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new hi(s.x,s.y,Ge),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=Pn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fe,q.map.depthTexture.magFilter=Fe}else G.isPointLight?(q.map=new Va(s.x),q.map.depthTexture=new Lo(s.x,Mn)):(q.map=new Be(s.x,s.y),q.map.depthTexture=new hi(s.x,s.y,Mn)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=Pn,this.type===cr?(q.map.depthTexture.compareFunction=D?Oa:Ba,q.map.depthTexture.minFilter=ze,q.map.depthTexture.magFilter=ze):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fe,q.map.depthTexture.magFilter=Fe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let B=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();G.isPointLight!==!0&&q.updateMatrices(G,x);for(let X=0;X<B;X++){let H=q.getCamera(X);if(G.isPointLight){let j=q.camera,at=q.matrix,ct=G.distance||j.far;ct!==j.far&&(j.far=ct,j.updateProjectionMatrix()),vr.setFromMatrixPosition(G.matrixWorld),j.position.copy(vr),Gc.copy(j.position),Gc.add(tv[X]),j.up.copy(ev[X]),j.lookAt(Gc),j.updateMatrixWorld(),at.makeTranslation(-vr.x,-vr.y,-vr.z),Dd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Dd,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,X),i.clear();else{X===0&&(i.setRenderTarget(q.map),i.clear());let j=q.getViewport(X);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),N.viewport(o)}n=q.getFrustum(X),v(A,x,H,G,this.type)}q.isPointLightShadow!==!0&&this.type===ys&&M(q,x),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,L)};function M(S,A){let x=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Be(s.x,s.y,{format:_i,type:Sn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,x,p,_,null)}function E(S,A,x,T){let R=null,L=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,U=A.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let F=C[U];F===void 0&&(F=R.clone(),C[U]=F,A.addEventListener("dispose",y)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,T===ys?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=x}return R}function v(S,A,x,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ys)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let U=t.update(S),C=S.material;if(Array.isArray(C)){let F=U.groups;for(let G=0,q=F.length;G<q;G++){let k=F[G],D=C[k.materialIndex];if(D&&D.visible){let B=E(S,D,T,R);S.onBeforeShadow(i,S,A,x,U,B,k),i.renderBufferDirect(x,null,U,B,S,k),S.onAfterShadow(i,S,A,x,U,B,k)}}}else if(C.visible){let F=E(S,C,T,R);S.onBeforeShadow(i,S,A,x,U,F,null),i.renderBufferDirect(x,null,U,F,S,null),S.onAfterShadow(i,S,A,x,U,F,null)}}let N=S.children;for(let U=0,C=N.length;U<C;U++)v(N[U],A,x,T,R)}function y(S){S.target.removeEventListener("dispose",y);for(let x in c){let T=c[x],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function iv(i,t){function e(){let z=!1,gt=new ue,st=null,_t=new ue(0,0,0,0);return{setMask:function(St){st!==St&&!z&&(i.colorMask(St,St,St,St),st=St)},setLocked:function(St){z=St},setClear:function(St,ot,Lt,Rt,fe){fe===!0&&(St*=Rt,ot*=Rt,Lt*=Rt),gt.set(St,ot,Lt,Rt),_t.equals(gt)===!1&&(i.clearColor(St,ot,Lt,Rt),_t.copy(gt))},reset:function(){z=!1,st=null,_t.set(-1,0,0,0)}}}function n(){let z=!1,gt=!1,st=null,_t=null,St=null;return{setReversed:function(ot){if(gt!==ot){let Lt=t.get("EXT_clip_control");ot?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),gt=ot;let Rt=St;St=null,this.setClear(Rt)}},getReversed:function(){return gt},setTest:function(ot){ot?Q(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ot){st!==ot&&!z&&(i.depthMask(ot),st=ot)},setFunc:function(ot){if(gt&&(ot=ld[ot]),_t!==ot){switch(ot){case _o:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ot}},setLocked:function(ot){z=ot},setClear:function(ot){St!==ot&&(St=ot,gt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){z=!1,st=null,_t=null,St=null,gt=!1}}}function s(){let z=!1,gt=null,st=null,_t=null,St=null,ot=null,Lt=null,Rt=null,fe=null;return{setTest:function(ee){z||(ee?Q(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!z&&(i.stencilMask(ee),gt=ee)},setFunc:function(ee,fn,An){(st!==ee||_t!==fn||St!==An)&&(i.stencilFunc(ee,fn,An),st=ee,_t=fn,St=An)},setOp:function(ee,fn,An){(ot!==ee||Lt!==fn||Rt!==An)&&(i.stencilOp(ee,fn,An),ot=ee,Lt=fn,Rt=An)},setLocked:function(ee){z=ee},setClear:function(ee){fe!==ee&&(i.clearStencil(ee),fe=ee)},reset:function(){z=!1,gt=null,st=null,_t=null,St=null,ot=null,Lt=null,Rt=null,fe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,E=null,v=null,y=null,S=null,A=null,x=new Bt(0,0,0),T=0,R=!1,L=null,N=null,U=null,C=null,F=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,k=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(D)[1]),q=k>=1):D.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),q=k>=2);let B=null,X={},H=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),at=new ue().fromArray(H),ct=new ue().fromArray(j);function lt(z,gt,st,_t){let St=new Uint8Array(4),ot=i.createTexture();i.bindTexture(z,ot),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<st;Lt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(gt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return ot}let Y={};Y[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(os),Vt(!1),ce(nc),Q(i.CULL_FACE),qt(zn);function Q(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function xt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ht(z,gt){return u[z]!==gt?(i.bindFramebuffer(z,gt),u[z]=gt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function ut(z,gt){let st=g,_t=!1;if(z){st=p.get(gt),st===void 0&&(st=[],p.set(gt,st));let St=z.textures;if(st.length!==St.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Lt=St.length;ot<Lt;ot++)st[ot]=i.COLOR_ATTACHMENT0+ot;st.length=St.length,_t=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,_t=!0);_t&&i.drawBuffers(st)}function Ut(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let ae={[Ni]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Pu]:i.FUNC_REVERSE_SUBTRACT};ae[Lu]=i.MIN,ae[Du]=i.MAX;let zt={[Nu]:i.ZERO,[Uu]:i.ONE,[Fu]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[zu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(z,gt,st,_t,St,ot,Lt,Rt,fe,ee){if(z===zn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),z!==Cu){if(z!==f||ee!==R){if((M!==Ni||y!==Ni)&&(i.blendEquation(i.FUNC_ADD),M=Ni,y=Ni),ee)switch(z){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ft("WebGLState: Invalid blending: ",z);break}else switch(z){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",z);break}E=null,v=null,S=null,A=null,x.set(0,0,0),T=0,f=z,R=ee}return}St=St||gt,ot=ot||st,Lt=Lt||_t,(gt!==M||St!==y)&&(i.blendEquationSeparate(ae[gt],ae[St]),M=gt,y=St),(st!==E||_t!==v||ot!==S||Lt!==A)&&(i.blendFuncSeparate(zt[st],zt[_t],zt[ot],zt[Lt]),E=st,v=_t,S=ot,A=Lt),(Rt.equals(x)===!1||fe!==T)&&(i.blendColor(Rt.r,Rt.g,Rt.b,fe),x.copy(Rt),T=fe),f=z,R=!1}function Kt(z,gt){z.side===Le?xt(i.CULL_FACE):Q(i.CULL_FACE);let st=z.side===Ve;gt&&(st=!st),Vt(st),z.blending===bs&&z.transparent===!1?qt(zn):qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let _t=z.stencilWrite;a.setTest(_t),_t&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),tn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(z){L!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),L=z)}function ce(z){z!==Tu?(Q(i.CULL_FACE),z!==N&&(z===nc?i.cullFace(i.BACK):z===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),N=z}function Te(z){z!==U&&(q&&i.lineWidth(z),U=z)}function tn(z,gt,st){z?(Q(i.POLYGON_OFFSET_FILL),(C!==gt||F!==st)&&(C=gt,F=st,o.getReversed()&&(gt=-gt),i.polygonOffset(gt,st))):xt(i.POLYGON_OFFSET_FILL)}function Me(z){z?Q(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ae(z){z===void 0&&(z=i.TEXTURE0+G-1),B!==z&&(i.activeTexture(z),B=z)}function V(z,gt,st){st===void 0&&(B===null?st=i.TEXTURE0+G-1:st=B);let _t=X[st];_t===void 0&&(_t={type:void 0,texture:void 0},X[st]=_t),(_t.type!==z||_t.texture!==gt)&&(B!==st&&(i.activeTexture(st),B=st),i.bindTexture(z,gt||Y[z]),_t.type=z,_t.texture=gt)}function Xe(){let z=X[B];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function b(){try{i.texSubImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function dt(){try{i.texStorage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function ft(){try{i.texStorage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function nt(){try{i.texImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function rt(){try{i.texImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function pt(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function It(z,gt){d[z]!==gt&&(i.pixelStorei(z,gt),d[z]=gt)}function vt(z){at.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),at.copy(z))}function mt(z){ct.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ct.copy(z))}function Pt(z,gt){let st=c.get(gt);st===void 0&&(st=new WeakMap,c.set(gt,st));let _t=st.get(z);_t===void 0&&(_t=i.getUniformBlockIndex(gt,z.name),st.set(z,_t))}function Nt(z,gt){let _t=c.get(gt).get(z);l.get(gt)!==_t&&(i.uniformBlockBinding(gt,_t,z.__bindingPointIndex),l.set(gt,_t))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},B=null,X={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,E=null,v=null,y=null,S=null,A=null,x=new Bt(0,0,0),T=0,R=!1,L=null,N=null,U=null,C=null,F=null,at.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:xt,bindFramebuffer:ht,drawBuffers:ut,useProgram:Ut,setBlending:qt,setMaterial:Kt,setFlipSided:Vt,setCullFace:ce,setLineWidth:Te,setPolygonOffset:tn,setScissorTest:Me,activeTexture:Ae,bindTexture:V,unbindTexture:Xe,compressedTexImage2D:se,compressedTexImage3D:P,texImage2D:nt,texImage3D:rt,pixelStorei:It,getParameter:pt,updateUBOMapping:Pt,uniformBlockBinding:Nt,texStorage2D:dt,texStorage3D:ft,texSubImage2D:b,texSubImage3D:W,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:vt,viewport:mt,reset:kt}}function sv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return g?new OffscreenCanvas(P,b):Ys("canvas")}function m(P,b,W){let J=1,et=se(P);if((et.width>W||et.height>W)&&(J=W/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let dt=Math.floor(J*et.width),ft=Math.floor(J*et.height);u===void 0&&(u=_(dt,ft));let nt=b?_(dt,ft):u;return nt.width=dt,nt.height=ft,nt.getContext("2d").drawImage(P,0,0,dt,ft),Dt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+dt+"x"+ft+")."),nt}else return"data"in P&&Dt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function f(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,b,W,J,et,dt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft;J&&(ft=t.get("EXT_texture_norm16"),ft||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=b;if(b===i.RED&&(W===i.FLOAT&&(nt=i.R32F),W===i.HALF_FLOAT&&(nt=i.R16F),W===i.UNSIGNED_BYTE&&(nt=i.R8),W===i.UNSIGNED_SHORT&&ft&&(nt=ft.R16_EXT),W===i.SHORT&&ft&&(nt=ft.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.R8UI),W===i.UNSIGNED_SHORT&&(nt=i.R16UI),W===i.UNSIGNED_INT&&(nt=i.R32UI),W===i.BYTE&&(nt=i.R8I),W===i.SHORT&&(nt=i.R16I),W===i.INT&&(nt=i.R32I)),b===i.RG&&(W===i.FLOAT&&(nt=i.RG32F),W===i.HALF_FLOAT&&(nt=i.RG16F),W===i.UNSIGNED_BYTE&&(nt=i.RG8),W===i.UNSIGNED_SHORT&&ft&&(nt=ft.RG16_EXT),W===i.SHORT&&ft&&(nt=ft.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RG8UI),W===i.UNSIGNED_SHORT&&(nt=i.RG16UI),W===i.UNSIGNED_INT&&(nt=i.RG32UI),W===i.BYTE&&(nt=i.RG8I),W===i.SHORT&&(nt=i.RG16I),W===i.INT&&(nt=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),W===i.UNSIGNED_INT&&(nt=i.RGB32UI),W===i.BYTE&&(nt=i.RGB8I),W===i.SHORT&&(nt=i.RGB16I),W===i.INT&&(nt=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),W===i.UNSIGNED_INT&&(nt=i.RGBA32UI),W===i.BYTE&&(nt=i.RGBA8I),W===i.SHORT&&(nt=i.RGBA16I),W===i.INT&&(nt=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&ft&&(nt=ft.RGB16_EXT),W===i.SHORT&&ft&&(nt=ft.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),b===i.RGBA){let rt=dt?qs:$t.getTransfer(et);W===i.FLOAT&&(nt=i.RGBA32F),W===i.HALF_FLOAT&&(nt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(nt=rt===ie?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ft&&(nt=ft.RGBA16_EXT),W===i.SHORT&&ft&&(nt=ft.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(P,b){let W;return P?b===null||b===Mn||b===Ss?W=i.DEPTH24_STENCIL8:b===Ge?W=i.DEPTH32F_STENCIL8:b===Ms&&(W=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mn||b===Ss?W=i.DEPTH_COMPONENT24:b===Ge?W=i.DEPTH_COMPONENT32F:b===Ms&&(W=i.DEPTH_COMPONENT16),W}function S(P,b){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fe&&P.minFilter!==ze?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){let b=P.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function x(P){let b=P.target;b.removeEventListener("dispose",x),L(b)}function T(P){let b=n.get(P);if(b.__webglInit===void 0)return;let W=P.source,J=p.get(W);if(J){let et=J[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(P),Object.keys(J).length===0&&p.delete(W)}n.remove(P)}function R(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let W=P.source,J=p.get(W);delete J[b.__cacheKey],o.memory.textures--}function L(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let et=0;et<b.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[J][et]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=P.textures;for(let J=0,et=W.length;J<et;J++){let dt=n.get(W[J]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(P)}let N=0;function U(){N=0}function C(){return N}function F(P){N=P}function G(){let P=N;return P>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function q(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function k(P,b){let W=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let J=P.image;if(J===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(W,P,b);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function D(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){xt(W,P,b);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function B(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){xt(W,P,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function X(P,b){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){ht(W,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let H={[as]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},j={[Fe]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},at={[Qu]:i.NEVER,[sd]:i.ALWAYS,[td]:i.LESS,[Ba]:i.LEQUAL,[ed]:i.EQUAL,[Oa]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function ct(P,b){if(b.type===Ge&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ze||b.magFilter===Qo||b.magFilter===ur||b.magFilter===mi||b.minFilter===ze||b.minFilter===Qo||b.minFilter===ur||b.minFilter===mi)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,H[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,H[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,H[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,j[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fe||b.minFilter!==ur&&b.minFilter!==mi||b.type===Ge&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function lt(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));let J=b.source,et=p.get(J);et===void 0&&(et={},p.set(J,et));let dt=q(b);if(dt!==P.__cacheKey){et[dt]===void 0&&(et[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),et[dt].usedTimes++;let ft=et[P.__cacheKey];ft!==void 0&&(et[P.__cacheKey].usedTimes--,ft.usedTimes===0&&R(b)),P.__cacheKey=dt,P.__webglTexture=et[dt].texture}return W}function Y(P,b,W){return Math.floor(Math.floor(P/W)/b)}function Q(P,b,W,J){let dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,J,b.data);else{dt.sort((It,vt)=>It.start-vt.start);let ft=0;for(let It=1;It<dt.length;It++){let vt=dt[ft],mt=dt[It],Pt=vt.start+vt.count,Nt=Y(mt.start,b.width,4),kt=Y(vt.start,b.width,4);mt.start<=Pt+1&&Nt===kt&&Y(mt.start+mt.count-1,b.width,4)===Nt?vt.count=Math.max(vt.count,mt.start+mt.count-vt.start):(++ft,dt[ft]=mt)}dt.length=ft+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let It=0,vt=dt.length;It<vt;It++){let mt=dt[It],Pt=Math.floor(mt.start/4),Nt=Math.ceil(mt.count/4),kt=Pt%b.width,z=Math.floor(Pt/b.width),gt=Nt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,kt,z,gt,st,W,J,b.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function xt(P,b,W){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);let et=lt(P,b),dt=b.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+W);let ft=n.get(dt);if(dt.version!==ft.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let st=$t.getPrimaries($t.workingColorSpace),_t=b.colorSpace===ti?null:$t.getPrimaries(b.colorSpace),St=b.colorSpace===ti||st===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let rt=m(b.image,!1,s.maxTextureSize);rt=Xe(b,rt);let pt=r.convert(b.format,b.colorSpace),It=r.convert(b.type),vt=v(b.internalFormat,pt,It,b.normalized,b.colorSpace,b.isVideoTexture);ct(J,b);let mt,Pt=b.mipmaps,Nt=b.isVideoTexture!==!0,kt=ft.__version===void 0||et===!0,z=dt.dataReady,gt=S(b,rt);if(b.isDepthTexture)vt=y(b.format===gi,b.type),kt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,vt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,vt,rt.width,rt.height,0,pt,It,null));else if(b.isDataTexture)if(Pt.length>0){Nt&&kt&&e.texStorage2D(i.TEXTURE_2D,gt,vt,Pt[0].width,Pt[0].height);for(let st=0,_t=Pt.length;st<_t;st++)mt=Pt[st],Nt?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(i.TEXTURE_2D,st,vt,mt.width,mt.height,0,pt,It,mt.data);b.generateMipmaps=!1}else Nt?(kt&&e.texStorage2D(i.TEXTURE_2D,gt,vt,rt.width,rt.height),z&&Q(b,rt,pt,It)):e.texImage2D(i.TEXTURE_2D,0,vt,rt.width,rt.height,0,pt,It,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Nt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,vt,Pt[0].width,Pt[0].height,rt.depth);for(let st=0,_t=Pt.length;st<_t;st++)if(mt=Pt[st],b.format!==sn)if(pt!==null)if(Nt){if(z)if(b.layerUpdates.size>0){let St=Lc(mt.width,mt.height,b.format,b.type);for(let ot of b.layerUpdates){let Lt=mt.data.subarray(ot*St/mt.data.BYTES_PER_ELEMENT,(ot+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ot,mt.width,mt.height,1,pt,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,rt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,vt,mt.width,mt.height,rt.depth,0,mt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,rt.depth,pt,It,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,vt,mt.width,mt.height,rt.depth,0,pt,It,mt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Nt&&kt&&e.texStorage2D(i.TEXTURE_2D,gt,vt,Pt[0].width,Pt[0].height);for(let st=0,_t=Pt.length;st<_t;st++)mt=Pt[st],b.format!==sn?pt!==null?Nt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,vt,mt.width,mt.height,0,mt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(i.TEXTURE_2D,st,vt,mt.width,mt.height,0,pt,It,mt.data)}else if(b.isDataArrayTexture)if(Nt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,vt,rt.width,rt.height,rt.depth),z)if(b.layerUpdates.size>0){let st=Lc(rt.width,rt.height,b.format,b.type);for(let _t of b.layerUpdates){let St=rt.data.subarray(_t*st/rt.data.BYTES_PER_ELEMENT,(_t+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,rt.width,rt.height,1,pt,It,St)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,pt,It,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,pt,It,rt.data);else if(b.isData3DTexture)Nt?(kt&&e.texStorage3D(i.TEXTURE_3D,gt,vt,rt.width,rt.height,rt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,pt,It,rt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,pt,It,rt.data);else if(b.isFramebufferTexture){if(kt)if(Nt)e.texStorage2D(i.TEXTURE_2D,gt,vt,rt.width,rt.height);else{let st=rt.width,_t=rt.height;for(let St=0;St<gt;St++)e.texImage2D(i.TEXTURE_2D,St,vt,st,_t,0,pt,It,null),st>>=1,_t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),d.add(b),st.onpaint=_t=>{let St=_t.changedElements;for(let ot of d)St.includes(ot.image)&&(ot.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let St=i.RGBA,ot=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,ot,Lt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Nt&&kt){let st=se(Pt[0]);e.texStorage2D(i.TEXTURE_2D,gt,vt,st.width,st.height)}for(let st=0,_t=Pt.length;st<_t;st++)mt=Pt[st],Nt?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt,It,mt):e.texImage2D(i.TEXTURE_2D,st,vt,pt,It,mt);b.generateMipmaps=!1}else if(Nt){if(kt){let st=se(rt);e.texStorage2D(i.TEXTURE_2D,gt,vt,st.width,st.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,It,rt)}else e.texImage2D(i.TEXTURE_2D,0,vt,pt,It,rt);f(b)&&M(J),ft.__version=dt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ht(P,b,W){if(b.image.length!==6)return;let J=lt(P,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let dt=n.get(et);if(et.version!==dt.__version||J===!0){e.activeTexture(i.TEXTURE0+W);let ft=$t.getPrimaries($t.workingColorSpace),nt=b.colorSpace===ti?null:$t.getPrimaries(b.colorSpace),rt=b.colorSpace===ti||ft===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let pt=b.isCompressedTexture||b.image[0].isCompressedTexture,It=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!pt&&!It?vt[ot]=m(b.image[ot],!0,s.maxCubemapSize):vt[ot]=It?b.image[ot].image:b.image[ot],vt[ot]=Xe(b,vt[ot]);let mt=vt[0],Pt=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type),kt=v(b.internalFormat,Pt,Nt,b.normalized,b.colorSpace),z=b.isVideoTexture!==!0,gt=dt.__version===void 0||J===!0,st=et.dataReady,_t=S(b,mt);ct(i.TEXTURE_CUBE_MAP,b);let St;if(pt){z&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,kt,mt.width,mt.height);for(let ot=0;ot<6;ot++){St=vt[ot].mipmaps;for(let Lt=0;Lt<St.length;Lt++){let Rt=St[Lt];b.format!==sn?Pt!==null?z?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,0,0,Rt.width,Rt.height,Pt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,kt,Rt.width,Rt.height,0,Rt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,0,0,Rt.width,Rt.height,Pt,Nt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,kt,Rt.width,Rt.height,0,Pt,Nt,Rt.data)}}}else{if(St=b.mipmaps,z&&gt){St.length>0&&_t++;let ot=se(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,kt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(It){z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,Pt,Nt,vt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,kt,vt[ot].width,vt[ot].height,0,Pt,Nt,vt[ot].data);for(let Lt=0;Lt<St.length;Lt++){let fe=St[Lt].image[ot].image;z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,0,0,fe.width,fe.height,Pt,Nt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,kt,fe.width,fe.height,0,Pt,Nt,fe.data)}}else{z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Pt,Nt,vt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,kt,Pt,Nt,vt[ot]);for(let Lt=0;Lt<St.length;Lt++){let Rt=St[Lt];z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,0,0,Pt,Nt,Rt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,kt,Pt,Nt,Rt.image[ot])}}}f(b)&&M(i.TEXTURE_CUBE_MAP),dt.__version=et.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ut(P,b,W,J,et,dt){let ft=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),rt=v(W.internalFormat,ft,nt,W.normalized,W.colorSpace),pt=n.get(b),It=n.get(W);if(It.__renderTarget=b,!pt.__hasExternalTextures){let vt=Math.max(1,b.width>>dt),mt=Math.max(1,b.height>>dt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,dt,rt,vt,mt,b.depth,0,ft,nt,null):e.texImage2D(et,dt,rt,vt,mt,0,ft,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Ae(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,It.__webglTexture,0,Me(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,It.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(P,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let J=b.depthTexture,et=J&&J.isDepthTexture?J.type:null,dt=y(b.stencilBuffer,et),ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(b),dt,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(b),dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,dt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,P)}else{let J=b.textures;for(let et=0;et<J.length;et++){let dt=J[et],ft=r.convert(dt.format,dt.colorSpace),nt=r.convert(dt.type),rt=v(dt.internalFormat,ft,nt,dt.normalized,dt.colorSpace);Ae(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(b),rt,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(b),rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(P,b,W){let J=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(b.depthTexture);if(et.__renderTarget=b,(!et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J){if(et.__webglInit===void 0&&(et.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b.depthTexture);let pt=r.convert(b.depthTexture.format),It=r.convert(b.depthTexture.type),vt;b.depthTexture.format===Pn?vt=i.DEPTH_COMPONENT24:b.depthTexture.format===gi&&(vt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,vt,b.width,b.height,0,pt,It,null)}}else k(b.depthTexture,0);let dt=et.__webglTexture,ft=Me(b),nt=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,rt=b.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Pn)Ae(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,dt,0);else if(b.depthTexture.format===gi)Ae(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,dt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(P){let b=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=J}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let J=0;J<6;J++)ae(b.__webglFramebuffer[J],P,J);else{let J=P.texture.mipmaps;J&&J.length>0?ae(b.__webglFramebuffer[0],P,0):ae(b.__webglFramebuffer,P,0)}else if(W){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Ut(b.__webglDepthbuffer[J],P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ut(b.__webglDepthbuffer,P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(P,b,W){let J=n.get(P);b!==void 0&&ut(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&zt(P)}function Kt(P){let b=P.texture,W=n.get(P),J=n.get(b);P.addEventListener("dispose",x);let et=P.textures,dt=P.isWebGLCubeRenderTarget===!0,ft=et.length>1;if(ft||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),dt){W.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[nt]=[];for(let rt=0;rt<b.mipmaps.length;rt++)W.__webglFramebuffer[nt][rt]=i.createFramebuffer()}else W.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let nt=0;nt<b.mipmaps.length;nt++)W.__webglFramebuffer[nt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ft)for(let nt=0,rt=et.length;nt<rt;nt++){let pt=n.get(et[nt]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Ae(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let nt=0;nt<et.length;nt++){let rt=et[nt];W.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[nt]);let pt=r.convert(rt.format,rt.colorSpace),It=r.convert(rt.type),vt=v(rt.internalFormat,pt,It,rt.normalized,rt.colorSpace,P.isXRRenderTarget===!0),mt=Me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,vt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,W.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ct(i.TEXTURE_CUBE_MAP,b);for(let nt=0;nt<6;nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)ut(W.__webglFramebuffer[nt][rt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else ut(W.__webglFramebuffer[nt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);f(b)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let nt=0,rt=et.length;nt<rt;nt++){let pt=et[nt],It=n.get(pt),vt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,It.__webglTexture),ct(vt,pt),ut(W.__webglFramebuffer,P,pt,i.COLOR_ATTACHMENT0+nt,vt,0),f(pt)&&M(vt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(nt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,J.__webglTexture),ct(nt,b),b.mipmaps&&b.mipmaps.length>0)for(let rt=0;rt<b.mipmaps.length;rt++)ut(W.__webglFramebuffer[rt],P,b,i.COLOR_ATTACHMENT0,nt,rt);else ut(W.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,nt,0);f(b)&&M(nt),e.unbindTexture()}P.depthBuffer&&zt(P)}function Vt(P){let b=P.textures;for(let W=0,J=b.length;W<J;W++){let et=b[W];if(f(et)){let dt=E(P),ft=n.get(et).__webglTexture;e.bindTexture(dt,ft),M(dt),e.unbindTexture()}}}let ce=[],Te=[];function tn(P){if(P.samples>0){if(Ae(P)===!1){let b=P.textures,W=P.width,J=P.height,et=i.COLOR_BUFFER_BIT,dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(P),nt=b.length>1;if(nt)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let rt=P.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);let It=n.get(b[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,et,i.NEAREST),l===!0&&(ce.length=0,Te.length=0,ce.push(i.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ce.push(dt),Te.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);let It=n.get(b[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Me(P){return Math.min(s.maxSamples,P.samples)}function Ae(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function V(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Xe(P,b){let W=P.colorSpace,J=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Xs&&W!==ti&&($t.getTransfer(W)===ie?(J!==sn||et!==nn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",W)),b}function se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function rv(i,t){function e(n,s=ti){let r,o=$t.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gc)return i.BYTE;if(n===_c)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===Ge)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===bc)return i.RGB;if(n===sn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===ws)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===ra)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===aa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===gr||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ha||n===ua)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===da)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fa)return r.COMPRESSED_R11_EAC;if(n===pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ga||n===_a||n===xa||n===va||n===ya||n===ba||n===Ma||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Da||n===Na||n===_r||n===Ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:ov,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Kc,f={},M=e.getContextAttributes(),E=null,v=null,y=[],S=[],A=new Gt,x=null,T=null,R=new Ze;R.viewport=new ue;let L=new Ze;L.viewport=new ue;let N=[R,L],U=new $o,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=y[Y];return Q===void 0&&(Q=new fs,y[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=y[Y];return Q===void 0&&(Q=new fs,y[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=y[Y];return Q===void 0&&(Q=new fs,y[Y]=Q),Q.getHandSpace()};function G(Y){let Q=S.indexOf(Y.inputSource);if(Q===-1)return;let xt=y[Q];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||o),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",k);for(let Y=0;Y<y.length;Y++){let Q=S[Y];Q!==null&&(S[Y]=null,y[Y].disconnect(Q))}C=null,F=null,m.reset();for(let Y in f)delete f[Y];if(t.setRenderTarget(E),p=null,u=null,d=null,s=null,v=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,ht=null,ut=null;M.depth&&(ut=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=M.stencil?gi:Pn,ht=M.stencil?Ss:Mn);let Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Be(u.textureWidth,u.textureHeight,{format:sn,type:nn,depthTexture:new hi(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Be(p.framebufferWidth,p.framebufferHeight,{format:sn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let Q=0;Q<Y.removed.length;Q++){let xt=Y.removed[Q],ht=S.indexOf(xt);ht>=0&&(S[ht]=null,y[ht].disconnect(xt))}for(let Q=0;Q<Y.added.length;Q++){let xt=Y.added[Q],ht=S.indexOf(xt);if(ht===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=S.length){S.push(xt),ht=Ut;break}else if(S[Ut]===null){S[Ut]=xt,ht=Ut;break}if(ht===-1)break}let ut=y[ht];ut&&ut.connect(xt)}}let D=new I,B=new I;function X(Y,Q,xt){D.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(xt.matrixWorld);let ht=D.distanceTo(B),ut=Q.projectionMatrix.elements,Ut=xt.projectionMatrix.elements,ae=ut[14]/(ut[10]-1),zt=ut[14]/(ut[10]+1),qt=(ut[9]+1)/ut[5],Kt=(ut[9]-1)/ut[5],Vt=(ut[8]-1)/ut[0],ce=(Ut[8]+1)/Ut[0],Te=ae*Vt,tn=ae*ce,Me=ht/(-Vt+ce),Ae=Me*-Vt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ut[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let V=ae+Me,Xe=zt+Me,se=Te-Ae,P=tn+(ht-Ae),b=qt*zt/Xe*V,W=Kt*zt/Xe*V;Y.projectionMatrix.makePerspective(se,P,b,W,V,Xe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function H(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),U.near=L.near=R.near=Q,U.far=L.far=R.far=xt,(C!==U.near||F!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,F=U.far),U.layers.mask=Y.layers.mask|6,R.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let ht=Y.parent,ut=U.cameras;H(U,ht);for(let Ut=0;Ut<ut.length;Ut++)H(ut[Ut],ht);ut.length===2?X(U,R,L):U.projectionMatrix.copy(R.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,U,ht)};function j(Y,Q,xt){xt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return f[Y]};let at=null;function ct(Y,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ht=!1;xt.length!==U.cameras.length&&(U.cameras.length=0,ht=!0);for(let zt=0;zt<xt.length;zt++){let qt=xt[zt],Kt=null;if(p!==null)Kt=p.getViewport(qt);else{let ce=d.getViewSubImage(u,qt);Kt=ce.viewport,zt===0&&(t.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(v))}let Vt=N[zt];Vt===void 0&&(Vt=new Ze,Vt.layers.enable(zt),Vt.viewport=new ue,N[zt]=Vt),Vt.matrix.fromArray(qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),zt===0&&(U.matrix.copy(Vt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ht===!0&&U.cameras.push(Vt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let zt=d.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<xt.length;zt++){let qt=xt[zt].camera;if(qt){let Kt=f[qt];Kt||(Kt=new er,f[qt]=Kt);let Vt=d.getCameraImage(qt);Kt.sourceTexture=Vt}}}}for(let xt=0;xt<y.length;xt++){let ht=S[xt],ut=y[xt];ht!==null&&ut!==void 0&&ut.update(ht,Q,c||o)}at&&at(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let lt=new Nd;lt.setAnimationLoop(ct),this.setAnimationLoop=function(Y){at=Y},this.dispose=function(){}}},lv=new Ht,kd=new Ot;kd.set(-1,0,0,0,1,0,0,0,1);function cv(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Cc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,E,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),E=M.envMap,v=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let S=y.program;n.uniformBlockBinding(v,S)}function c(v,y){let S=s[v.id];S===void 0&&(m(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",M));let A=y.program;n.updateUBOMapping(v,A);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let y=d();v.__bindingPointIndex=y;let S=i.createBuffer(),A=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let y=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,T=S.length;x<T;x++){let R=S[x];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)p(R[L],x,L,A);else p(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,S,A){if(_(v,y,S,A)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let N=T[L],U=f(N);g(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,y,S){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,S)}function _(v,y,S,A){let x=v.value,T=y+"_"+S;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){let y=v.uniforms,S=0,A=16;for(let T=0,R=y.length;T<R;T++){let L=Array.isArray(y[T])?y[T]:[y[T]];for(let N=0,U=L.length;N<U;N++){let C=L[N],F=Array.isArray(C.value)?C.value:[C.value];for(let G=0,q=F.length;G<q;G++){let k=F[G],D=f(k),B=S%A,X=B%D.boundary,H=B+X;S+=X,H!==0&&A-H<D.storage&&(S+=A-H),C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=D.storage}}}let x=S%A;return x>0&&(S+=A-x),v.__size=S,v.__cache={},this}function f(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){let y=v.target;y.removeEventListener("dispose",M);let S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function E(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function dv(){return kn===null&&(kn=new Nn(uv,16,16,_i,Sn),kn.name="DFG_LUT",kn.minFilter=ze,kn.magFilter=ze,kn.wrapS=In,kn.wrapT=In,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var Rs=class{constructor(t={}){let{canvas:e=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=p,m=new Set([ra,sa,ia]),f=new Set([nn,Mn,Ms,Ss,ea,na]),M=new Uint32Array(4),E=new Int32Array(4),v=new I,y=null,S=null,A=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,N=null,U=null,C=null,F=null;this._outputColorSpace=Ie;let G=0,q=0,k=null,D=-1,B=null,X=new ue,H=new ue,j=null,at=new Bt(0),ct=0,lt=e.width,Y=e.height,Q=1,xt=null,ht=null,ut=new ue(0,0,lt,Y),Ut=new ue(0,0,lt,Y),ae=!1,zt=new Un,qt=!1,Kt=!1,Vt=new Ht,ce=new I,Te=new ue,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ae(){return k===null?Q:1}let V=n;function Xe(w,O){return e.getContext(w,O)}let se,P,b,W,J,et,dt,ft,nt,rt,pt,It,vt,mt,Pt,Nt,kt,z,gt,st,_t,St,ot;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",fn,!1),V===null){let O="webgl2";if(V=Xe(O,w),V===null)throw Xe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(w){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",fn,!1),Ft("WebGLRenderer: "+w.message),w}function Lt(){se=new v0(V),se.init(),_t=new rv(V,se),P=new c0(V,se,t,_t),b=new iv(V,se),P.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),U=V.createFramebuffer(),C=V.createFramebuffer(),F=V.createFramebuffer(),W=new M0(V),J=new Gx,et=new sv(V,se,b,J,P,_t,W),dt=new x0(R),ft=new wm(V),St=new a0(V,ft),nt=new y0(V,ft,W,St),rt=new w0(V,nt,ft,St,W),z=new S0(V,P,et),Pt=new h0(J),pt=new Vx(R,dt,se,P,St,Pt),It=new cv(R,J),vt=new Xx,mt=new Kx(se),kt=new o0(R,dt,b,rt,g,l),Nt=new nv(R,rt,P),ot=new hv(V,W,P,b),gt=new l0(V,se,W),st=new b0(V,se,W),W.programs=pt.programs,R.capabilities=P,R.extensions=se,R.properties=J,R.renderLists=vt,R.shadowMap=Nt,R.state=b,R.info=W}_!==nn&&(T=new T0(_,e.width,e.height,a,s,r));let Rt=new jc(R,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(lt,Y,!1))},this.getSize=function(w){return w.set(lt,Y)},this.setSize=function(w,O,K=!0){if(Rt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=w,Y=O,e.width=Math.floor(w*Q),e.height=Math.floor(O*Q),K===!0&&(e.style.width=w+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(lt*Q,Y*Q).floor()},this.setDrawingBufferSize=function(w,O,K){lt=w,Y=O,Q=K,e.width=Math.floor(w*K),e.height=Math.floor(O*K),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===nn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,O,K,$){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,O,K,$),b.viewport(X.copy(ut).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,O,K,$){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,O,K,$),b.scissor(H.copy(Ut).multiplyScalar(Q).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){b.setScissorTest(ae=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,K=!0){let $=0;if(w){let Z=!1;if(k!==null){let Mt=k.texture.format;Z=m.has(Mt)}if(Z){let Mt=k.texture.type,Et=f.has(Mt),bt=kt.getClearColor(),Tt=kt.getClearAlpha(),Ct=bt.r,Wt=bt.g,Yt=bt.b;Et?(M[0]=Ct,M[1]=Wt,M[2]=Yt,M[3]=Tt,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=Ct,E[1]=Wt,E[2]=Yt,E[3]=Tt,V.clearBufferiv(V.COLOR,0,E))}else $|=V.COLOR_BUFFER_BIT}O&&($|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",fn,!1),kt.dispose(),vt.dispose(),mt.dispose(),J.dispose(),dt.dispose(),rt.dispose(),St.dispose(),ot.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Bh),Rt.removeEventListener("sessionend",Oh),Mi.stop()};function fe(w){w.preventDefault(),$s("WebGLRenderer: Context Lost."),L=!0}function ee(){$s("WebGLRenderer: Context Restored."),L=!1;let w=W.autoReset,O=Nt.enabled,K=Nt.autoUpdate,$=Nt.needsUpdate,Z=Nt.type;Lt(),W.autoReset=w,Nt.enabled=O,Nt.autoUpdate=K,Nt.needsUpdate=$,Nt.type=Z}function fn(w){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function An(w){let O=w.target;O.removeEventListener("dispose",An),vp(O)}function vp(w){yp(w),J.remove(w)}function yp(w){let O=J.get(w).programs;O!==void 0&&(O.forEach(function(K){pt.releaseProgram(K)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,K,$,Z,Mt){O===null&&(O=tn);let Et=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,bt=Sp(w,O,K,$,Z);b.setMaterial($,Et);let Tt=K.index,Ct=1;if($.wireframe===!0){if(Tt=nt.getWireframeAttribute(K),Tt===void 0)return;Ct=2}let Wt=K.drawRange,Yt=K.attributes.position,At=Wt.start*Ct,ne=(Wt.start+Wt.count)*Ct;Mt!==null&&(At=Math.max(At,Mt.start*Ct),ne=Math.min(ne,(Mt.start+Mt.count)*Ct)),Tt!==null?(At=Math.max(At,0),ne=Math.min(ne,Tt.count)):Yt!=null&&(At=Math.max(At,0),ne=Math.min(ne,Yt.count));let Re=ne-At;if(Re<0||Re===1/0)return;St.setup(Z,$,bt,K,Tt);let _e,he=gt;if(Tt!==null&&(_e=ft.get(Tt),he=st,he.setIndex(_e)),Z.isMesh)$.wireframe===!0?(b.setLineWidth($.wireframeLinewidth*Ae()),he.setMode(V.LINES)):he.setMode(V.TRIANGLES);else if(Z.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),b.setLineWidth(qe*Ae()),Z.isLineSegments?he.setMode(V.LINES):Z.isLineLoop?he.setMode(V.LINE_LOOP):he.setMode(V.LINE_STRIP)}else Z.isPoints?he.setMode(V.POINTS):Z.isSprite&&he.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(se.get("WEBGL_multi_draw"))he.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let qe=Z._multiDrawStarts,wt=Z._multiDrawCounts,je=Z._multiDrawCount,jt=Tt?ft.get(Tt).bytesPerElement:1,hn=J.get($).currentProgram.getUniforms();for(let Rn=0;Rn<je;Rn++)hn.setValue(V,"_gl_DrawID",Rn),he.render(qe[Rn]/jt,wt[Rn])}else if(Z.isInstancedMesh)he.renderInstances(At,Re,Z.count);else if(K.isInstancedBufferGeometry){let qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,wt=Math.min(K.instanceCount,qe);he.renderInstances(At,Re,wt)}else he.render(At,Re)};function Fh(w,O,K,$){N!==null&&w.isNodeMaterial&&N.setObject($,w),qt===!0&&Pt.setState(w,K,!1),w.transparent===!0&&w.side===Le&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,zr(w,O,$),w.side=On,w.needsUpdate=!0,zr(w,O,$),w.side=Le):zr(w,O,$)}this.compile=function(w,O,K=null){K===null&&(K=w),N!==null&&N.renderStart(w,O,K),S=mt.get(K),S.init(O),x.push(S),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),w!==K&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),Kt=this.localClippingEnabled,qt=Pt.init(this.clippingPlanes,Kt),qt===!0&&Pt.setGlobalState(this.clippingPlanes,O),N!==null&&Nt.render(S.state.shadowsArray,K,O);let $=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let Et=0;Et<Mt.length;Et++){let bt=Mt[Et];Fh(bt,K,O,Z),$.add(bt)}else Fh(Mt,K,O,Z),$.add(Mt)}),S=x.pop(),N!==null&&N.renderEnd(),$},this.compileAsync=function(w,O,K=null){let $=this.compile(w,O,K);return new Promise(Z=>{function Mt(){if($.forEach(function(Et){let Tt=J.get(Et).currentProgram;(Tt===void 0||Tt.isReady())&&$.delete(Et)}),$.size===0){Z(w);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let yl=null;function bp(w){yl&&yl(w)}function Bh(){Mi.stop()}function Oh(){Mi.start()}let Mi=new Nd;Mi.setAnimationLoop(bp),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){yl=w,Rt.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},Rt.addEventListener("sessionstart",Bh),Rt.addEventListener("sessionend",Oh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(w,O);let K=Rt.enabled===!0&&Rt.isPresenting===!0,$=T!==null&&(k===null||K)&&T.begin(R,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(O),O=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,O,k),S=mt.get(w,x.length),S.init(O),S.state.textureUnits=et.getTextureUnits(),x.push(S),Vt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),zt.setFromProjectionMatrix(Vt,xn,O.reversedDepth),Kt=this.localClippingEnabled,qt=Pt.init(this.clippingPlanes,Kt),y=vt.get(w,A.length),y.init(),A.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){let Et=R.xr.getDepthSensingMesh();Et!==null&&bl(Et,O,-1/0,R.sortObjects)}bl(w,O,0,R.sortObjects),y.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&y.sort(xt,ht),Me=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Me&&kt.addToRenderList(y,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&Pt.beginShadows();let Z=S.state.shadowsArray;if(Nt.render(Z,w,O),qt===!0&&Pt.endShadows(),($&&T.hasRenderPass())===!1){let Et=y.opaque,bt=y.transmissive;if(S.setupLights(),O.isArrayCamera){let Tt=O.cameras;if(bt.length>0)for(let Ct=0,Wt=Tt.length;Ct<Wt;Ct++){let Yt=Tt[Ct];kh(Et,bt,w,Yt)}Me&&kt.render(w);for(let Ct=0,Wt=Tt.length;Ct<Wt;Ct++){let Yt=Tt[Ct];zh(y,w,Yt,Yt.viewport)}}else bt.length>0&&kh(Et,bt,w,O),Me&&kt.render(w),zh(y,w,O)}k!==null&&q===0&&(et.updateMultisampleRenderTarget(k),et.updateRenderTargetMipmap(k)),$&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,O),St.resetDefaultState(),D=-1,B=null,x.pop(),x.length>0?(S=x[x.length-1],et.setTextureUnits(S.state.textureUnits),qt===!0&&Pt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,N!==null&&N.renderEnd()};function bl(w,O,K,$){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(zt)){$&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Vt);let Et=rt.update(w),bt=w.material;bt.visible&&y.push(w,Et,bt,K,Te.z,null,O)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(zt))){let Et=rt.update(w),bt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Te.copy(Et.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(Vt)),Array.isArray(bt)){let Tt=Et.groups;for(let Ct=0,Wt=Tt.length;Ct<Wt;Ct++){let Yt=Tt[Ct],At=bt[Yt.materialIndex];At&&At.visible&&y.push(w,Et,At,K,Te.z,Yt,O)}}else bt.visible&&y.push(w,Et,bt,K,Te.z,null,O)}}let Mt=w.children;for(let Et=0,bt=Mt.length;Et<bt;Et++)bl(Mt[Et],O,K,$)}function zh(w,O,K,$){let{opaque:Z,transmissive:Mt,transparent:Et}=w;S.setupLightsView(K),qt===!0&&Pt.setGlobalState(R.clippingPlanes,K),$&&b.viewport(X.copy($)),Z.length>0&&Or(Z,O,K),Mt.length>0&&Or(Mt,O,K),Et.length>0&&Or(Et,O,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function kh(w,O,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let At=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new Be(1,1,{generateMipmaps:!0,type:At?Sn:nn,minFilter:mi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let Mt=S.state.transmissionRenderTarget[$.id],Et=$.viewport||X;Mt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Tt=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(at),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),Me&&kt.render(K);let Wt=R.toneMapping;R.toneMapping=bn;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),qt===!0&&Pt.setGlobalState(R.clippingPlanes,$),Or(w,K,$),et.updateMultisampleRenderTarget(Mt),et.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ne=0,Re=O.length;ne<Re;ne++){let _e=O[ne],{object:he,geometry:qe,material:wt,group:je}=_e;if(wt.side===Le&&he.layers.test($.layers)){let jt=wt.side;wt.side=Ve,wt.needsUpdate=!0,Hh(he,K,$,qe,wt,je),wt.side=jt,wt.needsUpdate=!0,At=!0}}At===!0&&(et.updateMultisampleRenderTarget(Mt),et.updateRenderTargetMipmap(Mt))}R.setRenderTarget(bt,Tt,Ct),R.setClearColor(at,ct),Yt!==void 0&&($.viewport=Yt),R.toneMapping=Wt}function Or(w,O,K){let $=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Mt=w.length;Z<Mt;Z++){let Et=w[Z],{object:bt,geometry:Tt,group:Ct}=Et,Wt=Et.material;Wt.allowOverride===!0&&$!==null&&(Wt=$),bt.layers.test(K.layers)&&Hh(bt,O,K,Tt,Wt,Ct)}}function Hh(w,O,K,$,Z,Mt){N!==null&&Z.isNodeMaterial&&N.setObject(w,Z),w.onBeforeRender(R,O,K,$,Z,Mt),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(R,O,K,$,w,Mt),Z.transparent===!0&&Z.side===Le&&Z.forceSinglePass===!1?(Z.side=Ve,Z.needsUpdate=!0,R.renderBufferDirect(K,O,$,Z,w,Mt),Z.side=On,Z.needsUpdate=!0,R.renderBufferDirect(K,O,$,Z,w,Mt),Z.side=Le):R.renderBufferDirect(K,O,$,Z,w,Mt),w.onAfterRender(R,O,K,$,Z,Mt)}function zr(w,O,K){O.isScene!==!0&&(O=tn);let $=J.get(w),Z=S.state.lights,Mt=S.state.shadowsArray,Et=Z.state.version,bt=pt.getParameters(w,Z.state,Mt,O,K,S.state.lightProbeGridArray),Tt=pt.getProgramCacheKey(bt),Ct=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,$.fog=O.fog;let Wt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=dt.get(w.envMap||$.environment,Wt),$.envMapRotation=$.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",An),Ct=new Map,$.programs=Ct);let Yt=Ct.get(Tt);if(Yt!==void 0){if($.currentProgram===Yt&&$.lightsStateVersion===Et)return Gh(w,bt),Yt}else bt.uniforms=pt.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,K,bt),w.onBeforeCompile(bt,R),Yt=pt.acquireProgram(bt,Tt),Ct.set(Tt,Yt),$.uniforms=bt.uniforms;let At=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=Pt.uniform),Gh(w,bt),$.needsLights=Ep(w),$.lightsStateVersion=Et,$.needsLights&&(At.ambientLightColor.value=Z.state.ambient,At.lightProbe.value=Z.state.probe,At.sunLights.value=Z.state.sun,At.sunLightShadows.value=Z.state.sunShadow,At.directionalLights.value=Z.state.directional,At.directionalLightShadows.value=Z.state.directionalShadow,At.spotLights.value=Z.state.spot,At.spotLightShadows.value=Z.state.spotShadow,At.rectAreaLights.value=Z.state.rectArea,At.ltc_1.value=Z.state.rectAreaLTC1,At.ltc_2.value=Z.state.rectAreaLTC2,At.pointLights.value=Z.state.point,At.pointLightShadows.value=Z.state.pointShadow,At.hemisphereLights.value=Z.state.hemi,At.sunShadowMatrix.value=Z.state.sunShadowMatrix,At.sunShadowCascade.value=Z.state.sunShadowCascade,At.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,At.spotLightMatrix.value=Z.state.spotLightMatrix,At.spotLightMap.value=Z.state.spotLightMap,At.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=Yt,$.uniformsList=null,Yt}function Vh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=As.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Gh(w,O){let K=J.get(w);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Mp(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let K=0,$=w.length;K<$;K++){let Z=w[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Sp(w,O,K,$,Z){O.isScene!==!0&&(O=tn),et.resetTextureUnits();let Mt=O.fog,Et=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?O.environment:null,bt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$t.workingColorSpace,Tt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ct=dt.get($.envMap||Et,Tt),Wt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Yt=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),At=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,Re=!!K.morphAttributes.color,_e=bn;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_e=R.toneMapping);let he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qe=he!==void 0?he.length:0,wt=J.get($),je=S.state.lights;if(qt===!0&&(Kt===!0||w!==B)){let pe=w===B&&$.id===D;Pt.setState($,w,pe)}let jt=!1;$.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==je.state.version||wt.outputColorSpace!==bt||Z.isBatchedMesh&&wt.batching===!1||!Z.isBatchedMesh&&wt.batching===!0||Z.isBatchedMesh&&wt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&wt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&wt.instancing===!1||!Z.isInstancedMesh&&wt.instancing===!0||Z.isSkinnedMesh&&wt.skinning===!1||!Z.isSkinnedMesh&&wt.skinning===!0||Z.isInstancedMesh&&wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&wt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&wt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&wt.instancingMorph===!1&&Z.morphTexture!==null||wt.envMap!==Ct||$.fog===!0&&wt.fog!==Mt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Pt.numPlanes||wt.numIntersection!==Pt.numIntersection)||wt.vertexAlphas!==Wt||wt.vertexTangents!==Yt||wt.morphTargets!==At||wt.morphNormals!==ne||wt.morphColors!==Re||wt.toneMapping!==_e||wt.morphTargetsCount!==qe||!!wt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(jt=!0):(jt=!0,wt.__version=$.version);let hn=wt.currentProgram;jt===!0&&(hn=zr($,O,Z),N&&$.isNodeMaterial&&N.onUpdateProgram($,hn,wt));let Rn=!1,ei=!1,Vi=!1,le=hn.getUniforms(),we=wt.uniforms;if(b.useProgram(hn.program)&&(Rn=!0,ei=!0,Vi=!0),$.id!==D&&(D=$.id,ei=!0),wt.needsLights){let pe=Mp(S.state.lightProbeGridArray,Z);wt.lightProbeGrid!==pe&&(wt.lightProbeGrid=pe,ei=!0)}if(Rn||B!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),le.setValue(V,"projectionMatrix",w.projectionMatrix),le.setValue(V,"viewMatrix",w.matrixWorldInverse);let ii=le.map.cameraPosition;ii!==void 0&&ii.setValue(V,ce.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&le.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&le.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,ei=!0,Vi=!0)}if(wt.needsLights&&(je.state.sunShadowMap.length>0&&le.setValue(V,"sunShadowMap",je.state.sunShadowMap,et),je.state.directionalShadowMap.length>0&&le.setValue(V,"directionalShadowMap",je.state.directionalShadowMap,et),je.state.spotShadowMap.length>0&&le.setValue(V,"spotShadowMap",je.state.spotShadowMap,et),je.state.pointShadowMap.length>0&&le.setValue(V,"pointShadowMap",je.state.pointShadowMap,et)),Z.isSkinnedMesh){le.setOptional(V,Z,"bindMatrix"),le.setOptional(V,Z,"bindMatrixInverse");let pe=Z.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),le.setValue(V,"boneTexture",pe.boneTexture,et))}Z.isBatchedMesh&&(le.setOptional(V,Z,"batchingTexture"),le.setValue(V,"batchingTexture",Z._matricesTexture,et),le.setOptional(V,Z,"batchingIdTexture"),le.setValue(V,"batchingIdTexture",Z._indirectTexture,et),le.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&le.setValue(V,"batchingColorTexture",Z._colorsTexture,et));let ni=K.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&z.update(Z,K,hn),(ei||wt.receiveShadow!==Z.receiveShadow)&&(wt.receiveShadow=Z.receiveShadow,le.setValue(V,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&O.environment!==null&&(we.envMapIntensity.value=O.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=dv()),ei){if(le.setValue(V,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&wp(we,Vi),Mt&&$.fog===!0&&It.refreshFogUniforms(we,Mt),It.refreshMaterialUniforms(we,$,Q,Y,S.state.transmissionRenderTarget[w.id]),wt.needsLights&&wt.lightProbeGrid){let pe=wt.lightProbeGrid;we.probesSH.value=pe.texture,we.probesMin.value.copy(pe.boundingBox.min),we.probesMax.value.copy(pe.boundingBox.max),we.probesResolution.value.copy(pe.resolution)}As.upload(V,Vh(wt),we,et)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(As.upload(V,Vh(wt),we,et),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&le.setValue(V,"center",Z.center),le.setValue(V,"modelViewMatrix",Z.modelViewMatrix),le.setValue(V,"normalMatrix",Z.normalMatrix),le.setValue(V,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let pe=$.uniformsGroups;for(let ii=0,Gi=pe.length;ii<Gi;ii++){let Xh=pe[ii];ot.update(Xh,hn),ot.bind(Xh,hn)}}return hn}function wp(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ep(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,O,K){let $=J.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(w.texture).__webglTexture=O,J.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let K=J.get(w);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,K=0){k=w,G=O,q=K;let $=null,Z=!1,Mt=!1;if(w){let bt=J.get(w);if(bt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(V.FRAMEBUFFER,bt.__webglFramebuffer),X.copy(w.viewport),H.copy(w.scissor),j=w.scissorTest,b.viewport(X),b.scissor(H),b.setScissorTest(j),D=-1;return}else if(bt.__webglFramebuffer===void 0)et.setupRenderTarget(w);else if(bt.__hasExternalTextures)et.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Wt=w.depthTexture;if(bt.__boundDepthTexture!==Wt){if(Wt!==null&&J.has(Wt)&&(w.width!==Wt.image.width||w.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(w)}}let Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(Mt=!0);let Ct=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ct[O])?$=Ct[O][K]:$=Ct[O],Z=!0):w.samples>0&&et.useMultisampledRTT(w)===!1?$=J.get(w).__webglMultisampledFramebuffer:Array.isArray(Ct)?$=Ct[K]:$=Ct,X.copy(w.viewport),H.copy(w.scissor),j=w.scissorTest}else X.copy(ut).multiplyScalar(Q).floor(),H.copy(Ut).multiplyScalar(Q).floor(),j=ae;if(K!==0&&($=U),b.bindFramebuffer(V.FRAMEBUFFER,$)&&b.drawBuffers(w,$),b.viewport(X),b.scissor(H),b.setScissorTest(j),Z){let bt=J.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,K)}else if(Mt){let bt=O;for(let Tt=0;Tt<w.textures.length;Tt++){let Ct=J.get(w.textures[Tt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,K,bt)}}else if(w!==null&&K!==0){let bt=J.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bt.__webglTexture,K)}D=-1};function Wh(w){let O=J.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=P.textureFormatReadable(w.format),O.__typeReadable=P.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,K,$,Z,Mt,Et,bt=0){if(!(w&&w.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){b.bindFramebuffer(V.FRAMEBUFFER,Tt);try{let Ct=w.textures[bt],Wt=Ct.format,Yt=Ct.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let At=Wh(Ct);if(At.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-$&&K>=0&&K<=w.height-Z&&V.readPixels(O,K,$,Z,_t.convert(Wt),_t.convert(Yt),Mt)}finally{let Ct=k!==null?J.get(k).__webglFramebuffer:null;b.bindFramebuffer(V.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,O,K,$,Z,Mt,Et,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt)if(O>=0&&O<=w.width-$&&K>=0&&K<=w.height-Z){b.bindFramebuffer(V.FRAMEBUFFER,Tt);let Ct=w.textures[bt],Wt=Ct.format,Yt=Ct.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let At=Wh(Ct);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ne),V.bufferData(V.PIXEL_PACK_BUFFER,Mt.byteLength,V.STREAM_READ),V.readPixels(O,K,$,Z,_t.convert(Wt),_t.convert(Yt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Re=k!==null?J.get(k).__webglFramebuffer:null;b.bindFramebuffer(V.FRAMEBUFFER,Re);let _e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ad(V,_e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ne),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Mt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ne),V.deleteSync(_e),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,K=0){let $=Math.pow(2,-K),Z=Math.floor(w.image.width*$),Mt=Math.floor(w.image.height*$),Et=O!==null?O.x:0,bt=O!==null?O.y:0;et.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,Et,bt,Z,Mt),b.unbindTexture()},this.copyTextureToTexture=function(w,O,K=null,$=null,Z=0,Mt=0){let Et,bt,Tt,Ct,Wt,Yt,At,ne,Re,_e=w.isCompressedTexture?w.mipmaps[Mt]:w.image;if(K!==null)Et=K.max.x-K.min.x,bt=K.max.y-K.min.y,Tt=K.isBox3?K.max.z-K.min.z:1,Ct=K.min.x,Wt=K.min.y,Yt=K.isBox3?K.min.z:0;else{let we=Math.pow(2,-Z);Et=Math.floor(_e.width*we),bt=Math.floor(_e.height*we),w.isDataArrayTexture?Tt=_e.depth:w.isData3DTexture?Tt=Math.floor(_e.depth*we):Tt=1,Ct=0,Wt=0,Yt=0}$!==null?(At=$.x,ne=$.y,Re=$.z):(At=0,ne=0,Re=0);let he=_t.convert(O.format),qe=_t.convert(O.type),wt;O.isData3DTexture?(et.setTexture3D(O,0),wt=V.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(et.setTexture2DArray(O,0),wt=V.TEXTURE_2D_ARRAY):(et.setTexture2D(O,0),wt=V.TEXTURE_2D),b.activeTexture(V.TEXTURE0),b.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);let je=b.getParameter(V.UNPACK_ROW_LENGTH),jt=b.getParameter(V.UNPACK_IMAGE_HEIGHT),hn=b.getParameter(V.UNPACK_SKIP_PIXELS),Rn=b.getParameter(V.UNPACK_SKIP_ROWS),ei=b.getParameter(V.UNPACK_SKIP_IMAGES);b.pixelStorei(V.UNPACK_ROW_LENGTH,_e.width),b.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e.height),b.pixelStorei(V.UNPACK_SKIP_PIXELS,Ct),b.pixelStorei(V.UNPACK_SKIP_ROWS,Wt),b.pixelStorei(V.UNPACK_SKIP_IMAGES,Yt);let Vi=w.isDataArrayTexture||w.isData3DTexture,le=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let we=J.get(w),ni=J.get(O),pe=J.get(we.__renderTarget),ii=J.get(ni.__renderTarget);b.bindFramebuffer(V.READ_FRAMEBUFFER,pe.__webglFramebuffer),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Gi=0;Gi<Tt;Gi++)Vi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(w).__webglTexture,Z,Yt+Gi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(O).__webglTexture,Mt,Re+Gi)),V.blitFramebuffer(Ct,Wt,Et,bt,At,ne,Et,bt,V.DEPTH_BUFFER_BIT,V.NEAREST);b.bindFramebuffer(V.READ_FRAMEBUFFER,null),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||J.has(w)){let we=J.get(w),ni=J.get(O);b.bindFramebuffer(V.READ_FRAMEBUFFER,C),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let pe=0;pe<Tt;pe++)Vi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,we.__webglTexture,Z,Yt+pe):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,we.__webglTexture,Z),le?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ni.__webglTexture,Mt,Re+pe):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ni.__webglTexture,Mt),Z!==0?V.blitFramebuffer(Ct,Wt,Et,bt,At,ne,Et,bt,V.COLOR_BUFFER_BIT,V.NEAREST):le?V.copyTexSubImage3D(wt,Mt,At,ne,Re+pe,Ct,Wt,Et,bt):V.copyTexSubImage2D(wt,Mt,At,ne,Ct,Wt,Et,bt);b.bindFramebuffer(V.READ_FRAMEBUFFER,null),b.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(wt,Mt,At,ne,Re,Et,bt,Tt,he,qe,_e.data):O.isCompressedArrayTexture?V.compressedTexSubImage3D(wt,Mt,At,ne,Re,Et,bt,Tt,he,_e.data):V.texSubImage3D(wt,Mt,At,ne,Re,Et,bt,Tt,he,qe,_e):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Mt,At,ne,Et,bt,he,qe,_e.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Mt,At,ne,_e.width,_e.height,he,_e.data):V.texSubImage2D(V.TEXTURE_2D,Mt,At,ne,Et,bt,he,qe,_e);b.pixelStorei(V.UNPACK_ROW_LENGTH,je),b.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt),b.pixelStorei(V.UNPACK_SKIP_PIXELS,hn),b.pixelStorei(V.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(V.UNPACK_SKIP_IMAGES,ei),Mt===0&&O.generateMipmaps&&V.generateMipmap(wt),b.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&et.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?et.setTextureCube(w,0):w.isData3DTexture?et.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?et.setTexture2DArray(w,0):et.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){G=0,q=0,k=null,b.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var fv={f32:Float32Array,u16:Uint16Array,i16:Int16Array,u32:Uint32Array,i32:Int32Array},Hd=4*1024*1024;function br(i){return i.points??[i.start,i.end]}function Xd(i,t){let e=i.getElementById(t);if(!e)throw new Qt(`Data block '${t}' is missing.`);return e.textContent}function Vd(i){let t=0;for(let a of i.childNodes)t+=a.length;let e=new Uint8Array(Math.ceil(t/4)*3),n=0,s=!0,r="";for(let a of i.childNodes)for(let l=0;l<a.length;l+=Hd){let c=a.substringData(l,Hd),h=c.trim(),d=r+h,u=d.length-d.length%4,p=d.slice(0,u),g=Qc(e,n,p),_=p.endsWith("==")?2:p.endsWith("=")?1:0;s&&(s=c.length===h.length&&g-n===u*3/4-_),n=g,r=d.slice(u)}let o=Qc(e,n,r);return s&&(s=o-n===Math.floor(r.length*3/4)),{bytes:e.subarray(0,o),canonical:s}}function pv(i,t,e){let n=Math.floor(t/3),s=n*4,r=t-n*3,o=Math.ceil((r+e)/3)*4,a=[];for(let c of i.childNodes){if(s>=c.length){s-=c.length;continue}let h=Math.min(o,c.length-s);if(a.push(c.substringData(s,h)),o-=h,s=0,!o)break}let l=new Uint8Array(Math.ceil((r+e)/3)*3);if(Qc(l,0,a.join(""))<r+e)throw new Qt("The binary data is truncated.");return l.slice(r,r+e).buffer}function Qc(i,t,e){if(i.setFromBase64)return t+i.subarray(t).setFromBase64(e).written;let n=atob(e);for(let s=0;s<n.length;s++)i[t++]=n.charCodeAt(s);return t}var Qt=class extends Error{},Oi=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),xi=i=>Array.isArray(i)&&i.every(Oi),zi=i=>Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number"),qd=i=>Oi(i)&&zi(i.min)&&zi(i.max),Gd=i=>i==null||Oi(i)&&xi(i.planes)&&i.planes.every(t=>zi(t.normal)&&t.normal.every(Number.isFinite)&&t.normal.some(e=>e!==0)&&Number.isFinite(t.offset))&&(i.box==null||qd(i.box)&&i.box.max.every(Number.isFinite)&&i.box.min.every((t,e)=>Number.isFinite(t)&&t<=i.box.max[e]));function mv(i){if(!Oi(i)||!xi(i.elements)||!xi(i.geometries)||!xi(i.materials)||!Oi(i.instances))throw new Qt("META must describe elements, geometries, materials and instances.");if(i.title!=null&&typeof i.title!="string")throw new Qt("Invalid META title.");let{instances:t}=i;if(!Number.isSafeInteger(t.count)||t.count<0)throw new Qt("Invalid META instance count.");for(let[e,n,s]of[["geometry","u32",t.count],["material","u32",t.count],["element","i32",t.count],["matrix","f32",t.count*12]])if(t[e]?.t!==n||t[e].n!==s)throw new Qt(`Invalid META instance ${e} view.`);for(let e of i.geometries){let n=e.q;if(!qd(e.bbox)||!["u16","u32"].includes(e.indices?.t)||e.positions?.t!==(n?"u16":"f32")||n&&(!zi(n.o)||typeof n.s!="number")||e.normals!=null&&!["f32","i16"].includes(e.normals.t)||e.uvs!=null&&e.uvs.t!=="f32"||e.kind!=null&&e.kind!=="points"||e.colors!=null&&e.colors.t!=="u8")throw new Qt("Invalid META geometry.")}if(i.points!=null){let e=i.points;if(!Oi(e)||!Number.isSafeInteger(e.count)||e.count<0)throw new Qt("Invalid META point count.");for(let[n,s,r]of[["geometry","u32",e.count],["material","u32",e.count],["element","i32",e.count],["matrix","f32",e.count*12]])if(e[n]?.t!==s||e[n].n!==r)throw new Qt(`Invalid META point ${n} view.`)}gv(i);for(let e of i.materials){let n=e.texture;if(!zi(e.color)||typeof e.opacity!="number"||n!=null&&(!Number.isInteger(n)||n<0||n>=(i.textures?.length??0)))throw new Qt("Invalid META material.")}}function gv(i){if(!Oi(i)||!xi(i.elements)||i.title!=null&&typeof i.title!="string")throw new Qt("Invalid review metadata.");for(let l of["textures","grids","viewpoints","bcfTopics","clashTests","linkedFiles","models"])if(i[l]!=null&&!xi(i[l]))throw new Qt(`Invalid META ${l} list.`);if(i.models?.some(({id:l,name:c})=>!Number.isSafeInteger(l)||typeof c!="string")||i.elements.some(({modelId:l,levelId:c})=>l!=null&&!Number.isSafeInteger(l)||c!=null&&!Number.isSafeInteger(c)))throw new Qt("Invalid META model or level identity.");let t=l=>l==null||Array.isArray(l)&&l.every(c=>Number.isInteger(c)&&c>=0&&c<i.elements.length),e=l=>zi(l)&&l.every(Number.isFinite),n=l=>l==null||typeof l=="string",s=l=>e(l.camera?.position)&&e(l.camera?.target)&&Gd(l.sections)&&t(l.hiddenElements)&&t(l.visibleElements)&&t(l.selectedElements)&&(l.hiddenElements==null||l.visibleElements==null)&&(l.hiddenModelKeys==null||Array.isArray(l.hiddenModelKeys)&&l.hiddenModelKeys.every(c=>typeof c=="string")),r=l=>Number.isSafeInteger(l)&&l>=0,o=l=>s(l)&&e(l.camera.up)&&l.camera.up.some(c=>c!==0)&&(l.camera.projection==="orthographic"?Number.isFinite(l.camera.orthographicHeight)&&l.camera.orthographicHeight>0:l.camera.projection==="perspective"&&Number.isFinite(l.camera.fov)&&l.camera.fov>0&&l.camera.fov<180)&&r(l.missingComponents)&&r(l.ambiguousComponents),a=l=>{let c=br(l);return Array.isArray(c)&&c.length>=2&&c.every(e)};if(i.grids?.some(l=>!a(l))||i.viewpoints?.some(l=>!s(l))||i.clashTests?.some(l=>!xi(l.clashes)||l.clashes.some(c=>!zi(c.point))))throw new Qt("Invalid META grids, viewpoints or clashes.");if(i.bcfTopics?.some(l=>typeof l.title!="string"||!n(l.description)||!n(l.status)||!xi(l.viewpoints)||l.viewpoints.some(c=>!o(c))))throw new Qt("Invalid META BCF topics.");if(i.linkedFiles?.some(l=>!t(l.members)))throw new Qt("Invalid META linked file members.");if(!Gd(i.sections))throw new Qt("Invalid META sections.")}function _v(i){let t;try{t=JSON.parse(i)}catch(e){throw new Qt(e.message,{cause:e})}return mv(t),t}function th(i=document,t){t?.("metadataStart");let e;try{e=Xd(i,"ioviewer-meta")}catch(s){throw s instanceof Qt?s:new Qt(s.message,{cause:s})}let n=_v(e);return t?.("metadataEnd"),n}function Wd(i,t){let e=fv[i?.t];if(!e)throw new Qt(`Unknown view type '${i?.t}'.`);let n=e.BYTES_PER_ELEMENT;if(!(Number.isSafeInteger(i.o)&&Number.isSafeInteger(i.n)&&i.o>=0&&i.n>=0&&i.o%n===0&&i.o+i.n*n<=t))throw new Qt(`View ${JSON.stringify(i)} is outside the ${t} bytes of binary data.`);return e}function Yd(i=document,t,e=th(i,t)){let n,s,r,o;try{if(t?.("binaryStart"),s=i.getElementById("ioviewer-bin"),!s)throw new Error("Data block 'ioviewer-bin' is missing.");({bytes:n,canonical:r}=Vd(s)),t?.("binaryEnd")}catch(c){throw new Qt(c.message,{cause:c})}let a=n.length,l=null;return{meta:e,view(c){if(!n)throw new Error("The binary data has been released.");let h=Wd(c,a);return new h(n.buffer,c.o,c.n)},readView(c){let h=Wd(c,a);if(!c.n)return new h(0);!n&&!r&&(o??(o=Vd(s).bytes));let d=n??o;return d?new h(d.buffer,c.o,c.n):new h(pv(s,c.o,c.n*h.BYTES_PER_ELEMENT))},releaseBinary(){n=null,o=null},props(c){return l??(l=JSON.parse(Xd(i,"ioviewer-props"))),l[c]??null}}}var $d=new Ht,Zd=new Un,eh=32;function nh(i,t=new Float64Array(24)){return $d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Zd.setFromProjectionMatrix($d,i.coordinateSystem,i.reversedDepth),Zd.planes.forEach(({normal:e,constant:n},s)=>t.set([e.x,e.y,e.z,n],s*4)),t}function ih(i,t,e,n,s){for(let r=0;r<24;r+=4)if(i[r]*t+i[r+1]*e+i[r+2]*n+i[r+3]<-s)return!0;return!1}function Jd(i,t,e,n,s){for(let r=0;r<24;r+=4)if(i[r]*t+i[r+1]*e+i[r+2]*n+i[r+3]<s)return!1;return!0}function sh(i,t,e=new Float64Array(8)){let n=i.matrixWorld.elements,s=new I(-n[8],-n[9],-n[10]).normalize();return e.set([n[12],n[13],n[14],s.x,s.y,s.z,i.projectionMatrix.elements[5]*t/2,i.isPerspectiveCamera?1:0]),e}function Is(i){return 31-Math.clz32(Math.max(1,Math.min(i*i*256,2147483647)))}function Kd(i,t,e){if(t<=e)return 0;let n=0,s=!0;for(let r=eh-1;r>=0;r--)if(i[r]!==0){if(n+=i[r],n>e)return s?r===0?0:2**(r/2-4):2**((r+1)/2-4);s=!1}return 0}var wn=.0009765625,rh=32767,Mr=i=>i<0?-1:1;function jd(i){let t=Math.min(Math.max(i,-1),1)*rh;return Mr(t)*Math.round(Math.abs(t))}function Sr(i,t,e,n,s){let r=Math.abs(e)+Math.abs(n)+Math.abs(s);if(!(r>0)){i[t]=i[t+1]=0;return}let o=e/r,a=n/r;s<0&&([o,a]=[(1-Math.abs(a))*Mr(o),(1-Math.abs(o))*Mr(a)]),i[t]=jd(o),i[t+1]=jd(a)}function Qd(i,t,e,n){let s=Math.max(e/rh,-1),r=Math.max(n/rh,-1),o=1-Math.abs(s)-Math.abs(r);o<0&&([s,r]=[(1-Math.abs(r))*Mr(s),(1-Math.abs(s))*Mr(r)]);let a=Math.sqrt(s*s+r*r+o*o);i[t]=s/a,i[t+1]=r/a,i[t+2]=o/a}function wr(i,t){let e=i.view(t.positions);if(!t.q){if(!(e instanceof Float32Array))throw new Error(`Geometry positions of type '${t.positions.t}' need a "q" origin and step.`);return e}if(!(e instanceof Uint16Array))throw new Error(`Quantized geometry positions must be u16, got '${t.positions.t}'.`);return e}function Xa(i,t){let e=wr(i,t);if(!t.q)return e;let[n,s,r]=t.q.o,o=t.q.s,a=new Float32Array(e.length);for(let l=0;l<e.length;l+=3)a[l]=n+e[l]*o,a[l+1]=s+e[l+1]*o,a[l+2]=r+e[l+2]*o;return a}function tf(i,t){if(!t.normals)return null;let e=i.view(t.normals);if(!(e instanceof Float32Array||e instanceof Int16Array))throw new Error(`Geometry normals must be i16 or f32, got '${t.normals.t}'.`);return e}var ef=32768,nf=0,xv=1,Ps=2,sf=65535;function rf(i,t,e,n){let s=[],r=[Uint32Array.from(e)];for(;r.length;){let o=r.pop(),a=0;for(let c of o)a+=t[c];if(a<=n||o.length<=1){o.length&&s.push(o);continue}of(o,i);let l=0;for(let c=0;l<o.length-1&&c+t[o[l]]<=a/2;l++)c+=t[o[l]];l=Math.max(l,1),r.push(o.subarray(l),o.subarray(0,l))}return s}function of(i,t,e=-1){let n=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let h of i)for(let d=0;d<3;d++){let u=t[h*3+d];Number.isFinite(u)&&(u<n[d]&&(n[d]=u),u>s[d]&&(s[d]=u))}let r=0;for(let h=1;h<3;h++)s[h]-n[h]>s[r]-n[r]&&(r=h);let o=s[r]-n[r],a=2**20-1,l=new Float64Array(i.length);for(let h=0;h<i.length;h++){let d=i[h],u=t[d*3+r],p=o>0&&Number.isFinite(u)?Math.round((u-n[r])/o*a):0;l[h]=p*2**32+d}let c=0;e<0?l.sort():c=vv(l,e);for(let h=0;h<i.length;h++)i[h]=l[h]%2**32;return c}function vv(i,t){let e=0,n=i.length-1,s=2654435769,r=2*Math.ceil(Math.log2(i.length+1))+8,o=0,a=0;for(;e<n;){let l=n-e+1;if(++o>r)return i.subarray(e,n+1).sort(),a+l*Math.ceil(Math.log2(l));a+=l,s=Math.imul(s,1664525)+1013904223>>>0;let c=i[e+s%(n-e+1)],h=e,d=n;for(;h<=d;){for(;i[h]<c;)h++;for(;i[d]>c;)d--;if(h<=d){let u=i[h];i[h++]=i[d],i[d--]=u}}if(t<=d)n=d;else if(t>=h)e=h;else return a}return a}function af(i,t,e,n=1/0){let s=[];s.scanned=0;let r=[Uint32Array.from(t)];for(;r.length;){let o=r.pop(),a=Math.ceil(o.length/e);if(o.length<=1||a<=1&&yv(o,i)<=n){o.length&&s.push(o);continue}let l=a>1?Math.ceil(o.length*Math.floor(a/2)/a):Math.ceil(o.length/2);s.scanned+=of(o,i,l),r.push(o.subarray(l),o.subarray(0,l))}return s}function yv(i,t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l of i){let c=t[l*3],h=t[l*3+1],d=t[l*3+2];c<e&&(e=c),c>r&&(r=c),h<n&&(n=h),h>o&&(o=h),d<s&&(s=d),d>a&&(a=d)}return Math.hypot(r-e,o-n,a-s)/2}function lf(i,t){let e=new Float64Array(6).fill(-1/0),n=new Float64Array(6).fill(-1/0),s=new Int32Array(6);for(let o=0;o<t.length;o++)if(t[o]!==0)for(let a=0;a<6;a++){let l=i[o*6+a],c=a<3?-l:l;c>e[a]?(n[a]=e[a],e[a]=c,s[a]=o):c>n[a]&&(n[a]=c)}if(e[0]===-1/0)return 0;let r=Math.hypot(e[0]+e[3],e[1]+e[4],e[2]+e[5]);if(n[0]===-1/0)return r;for(let o of s){let a=c=>s[c]===o?n[c]:e[c],l=Math.hypot(a(0)+a(3),a(1)+a(4),a(2)+a(5));r=Math.min(r,2*l)}return r}var ah=384*2**20;function cf(i,{cap:t=ah,minRepeats:e=16,perCell:n=1024,maxDraws:s=1024}={}){let r=new Uint8Array(i.length),o=0;for(let h of i)o+=h.k*h.bytes;if(o<=t)return r;let a=h=>(i[h].k-1)*i[h].bytes,l=[...i.keys()].filter(h=>i[h].k>=e);l.sort((h,d)=>a(d)-a(h)||i[d].k-i[h].k||h-d);let c=0;for(let h of l){let d=i[h].cells??Math.ceil(i[h].k/n);c+d>s||(r[h]=1,c+=d)}return r}function qa(i,t){return i>65535?new Uint32Array(t):new Uint16Array(t)}function lh(i,t){return i.sort((e,n)=>t[n]-t[e]||e-n)}function hf(i,t,e,n){for(;t<e;){let s=t+e>>>1;i[s]>=n?t=s+1:e=s}return t}function uf(i,t,e){let n=i[t];return[n,e>t?i[e]-n:0]}function df(i,t,e,n){let s=i.subarray(t*12,t*12+12);if(s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===1&&s[5]===0&&s[6]===0&&s[7]===0&&s[8]===1&&e.q&&e.q.s===wn){for(let a=0;a<3;a++)n[a]=s[9+a]+e.q.o[a];return nf}let o=!0;for(let a=0;a<3;a++){let l=s[9+a],c=s[9+a];for(let h=0;h<3;h++){let d=s[h*3+a]*e.min[h],u=s[h*3+a]*e.max[h];l+=Math.min(d,u),c+=Math.max(d,u)}n[a]=Math.floor(l/wn)*wn,Math.ceil((c-n[a])/wn)<=sf||(o=!1)}return o||n.fill(0),o?xv:Ps}function ff(i,t){let e=i.length,n=0,s=0;for(let m of i){let f=t.source(t.geometryOf[m]);n+=f.vertices,s+=f.indices.length}let r=t.kind[i[0]]===Ps,o=r?new Float32Array(n*4):new Uint16Array(n*4),a=new Int16Array(n*2),l=t.textured?new Float32Array(n*2):null,c=qa(n,s),h=new Uint32Array(e+1),d=new Float32Array(e*3),u=new Float32Array(e),p=new Float64Array(3),g=0,_=0;for(let m=0;m<e;m++){let f=i[m],M=t.source(t.geometryOf[f]),E=t.kind[f];if(E===Ps!==r)throw new Error("A chunk mixes f32 and u16 slots.");let v=t.matrices.subarray(f*12,f*12+12);for(let S=0;S<3;S++)d[m*3+S]=t.origins[f*3+S];u[m]=r?1:wn,E===nf?bv(M,o,a,g,m):Mv(M,v,E,t.origins.subarray(f*3,f*3+3),o,a,g,m,p),l&&M.uvs&&l.set(M.uvs,g*2),h[m]=_;let y=M.indices;if(t.mirrored[f])for(let S=0;S<y.length;S+=3)c[_++]=y[S]+g,c[_++]=y[S+2]+g,c[_++]=y[S+1]+g;else for(let S=0;S<y.length;S++)c[_++]=y[S]+g;g+=M.vertices}return h[e]=_,{q:o,o:a,uv:l,index:c,indexStart:h,origins:d,steps:u}}function bv(i,t,e,n,s){let r=i.positions;for(let o=0;o<i.vertices;o++){let a=(n+o)*4;t[a]=r[o*3],t[a+1]=r[o*3+1],t[a+2]=r[o*3+2],t[a+3]=s}if(i.oct)e.set(i.oct,n*2);else{let o=Ya(i);for(let a=0;a<i.vertices;a++)Sr(e,(n+a)*2,o[a*3],o[a*3+1],o[a*3+2])}}function Mv(i,t,e,n,s,r,o,a,l){let[c,h,d,u,p,g,_,m,f,M,E,v]=t,S=c*(p*f-g*m)-u*(h*f-d*m)+_*(h*g-d*p)<0?-1:1,A=(p*f-g*m)*S,x=(g*_-u*f)*S,T=(u*m-p*_)*S,R=(m*d-f*h)*S,L=(f*c-_*d)*S,N=(_*h-m*c)*S,U=(h*g-d*p)*S,C=(d*u-c*g)*S,F=(c*p-h*u)*S,G=i.positions,q=i.q?i.q.o:null,k=i.q?i.q.s:1,D=Ya(i);for(let B=0;B<i.vertices;B++){let X=G[B*3],H=G[B*3+1],j=G[B*3+2];q&&(X=q[0]+X*k,H=q[1]+H*k,j=q[2]+j*k);let at=c*X+u*H+_*j+M,ct=h*X+p*H+m*j+E,lt=d*X+g*H+f*j+v,Y=(o+B)*4;e===Ps?(s[Y]=at,s[Y+1]=ct,s[Y+2]=lt):(s[Y]=oh(at-n[0]),s[Y+1]=oh(ct-n[1]),s[Y+2]=oh(lt-n[2])),s[Y+3]=a;let Q=D[B*3],xt=D[B*3+1],ht=D[B*3+2];l[0]=A*Q+R*xt+U*ht,l[1]=x*Q+L*xt+C*ht,l[2]=T*Q+N*xt+F*ht,Sr(r,(o+B)*2,l[0],l[1],l[2])}}var oh=i=>Math.min(Math.max(Math.round(i/wn),0),sf);function pf(i,t,e,n,s){let r=i.length/3,o=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let c=0;c<r;c++)for(let h=0;h<3;h++){let d=t?t.o[h]+i[c*3+h]*t.s:i[c*3+h];d<o[h]&&(o[h]=d),d>a[h]&&(a[h]=d)}let l=e instanceof Int16Array?e:null;return{positions:i,q:t,oct:l,normals:l?null:e,indices:n,uvs:s,vertices:r,min:o,max:a}}function Ya(i){if(!i.normals&&i.oct){i.normals=new Float32Array(i.vertices*3);for(let t=0;t<i.vertices;t++)Qd(i.normals,t*3,i.oct[t*2],i.oct[t*2+1])}else i.normals||(i.normals=Sv(i.positions,i.q,i.indices));return i.normals}function Sv(i,t,e){let n=new Float32Array(i.length),s=t?.s??1;for(let r=0;r<e.length;r+=3){let o=e[r]*3,a=e[r+1]*3,l=e[r+2]*3,c=(i[a]-i[o])*s,h=(i[a+1]-i[o+1])*s,d=(i[a+2]-i[o+2])*s,u=(i[l]-i[o])*s,p=(i[l+1]-i[o+1])*s,g=(i[l+2]-i[o+2])*s,_=h*g-d*p,m=d*u-c*g,f=c*p-h*u;n[o]+=_,n[o+1]+=m,n[o+2]+=f,n[a]+=_,n[a+1]+=m,n[a+2]+=f,n[l]+=_,n[l+1]+=m,n[l+2]+=f}for(let r=0;r<n.length;r+=3){let o=Math.hypot(n[r],n[r+1],n[r+2])||1;n[r]/=o,n[r+1]/=o,n[r+2]/=o}return n}var Er=`
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
}`,Tr=`
int slot = int( slotBase ) + int( q.w );
ivec2 st = ivec2( slot & 2047, slot >> 11 );
vec4 info = texelFetch( slotInfo, st, 0 );
vec4 state = texelFetch( slotState, st, 0 );
vec3 slotPosition = info.xyz + q.xyz * info.w;`,ch=`
#ifndef IO_NO_HIDE_BRANCH
if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
#endif`,wv=`
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
mat3 im = mat3( instanceMatrix );
transformedNormal = mat3( cross( im[ 1 ], im[ 2 ] ), cross( im[ 2 ], im[ 0 ] ), cross( im[ 0 ], im[ 1 ] ) ) * transformedNormal
  * ( dot( im[ 0 ], cross( im[ 1 ], im[ 2 ] ) ) < 0.0 ? -1.0 : 1.0 );
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif`;function vi(i,t,e){let n=i.indexOf(t);if(n<0||i.indexOf(t,n+1)>=0)throw new Error(`The shader must contain '${t}' exactly once.`);return i.slice(0,n)+e+i.slice(n+t.length)}function Ev(i){Object.assign(i.uniforms,this.userData.slotUniforms);let t=vi(i.vertexShader,"#include <common>",`#include <common>
${Er}`);t=vi(t,"#include <color_vertex>",`${Tr}
vTint = state.rgb;`),t=vi(t,"#include <beginnormal_vertex>","vec3 objectNormal = ioOct( normal.xy );"),t=vi(t,"#include <defaultnormal_vertex>",wv),t=vi(t,"#include <begin_vertex>","vec3 transformed = slotPosition;"),t=vi(t,"#include <clipping_planes_vertex>",`#include <clipping_planes_vertex>
${ch}`),i.vertexShader=t;let e=vi(i.fragmentShader,"#include <common>",`#include <common>
varying vec3 vTint;`);e=vi(e,"#include <color_fragment>","diffuseColor.rgb *= vTint;"),i.fragmentShader=e}function hh(i,t,e=!1){return i.userData.slotUniforms=t,i.onBeforeCompile=Ev,i.index0AttributeName="q",e&&(i.defines={IO_NO_HIDE_BRANCH:""}),i}var ph=["materials","textures","white","wireframe"],Tv=[245,158,11],Av=[235,235,237],Ar=4294967295,ki=2048,uh=256,Rv=16,dh=1024,Cv=.1,Iv=8192,Pv=1.4,Za=2**-20,$a=17;function Lv(i,t){let[e,n,s,r,o,a,l,c,h]=i.subarray(t*12,t*12+9);return e*(o*h-a*c)-r*(n*h-s*c)+l*(n*a-s*o)<0}function Dv(){this.array=null}function En(i,t,e=!1,n=be){return new n(i,t,e).onUpload(Dv)}var Rr=class extends RangeError{constructor(t,e){super(`${t} drawable instances exceed the limit of ${e}.`),this.name="ModelTooLargeError",this.count=t,this.limit=e}},mf=(i,t)=>{for(let e=t*6;e<t*6+6;e++)if(!Number.isFinite(i[e]))return!1;return!0};function Nv(i,t,e,n){for(let s=0;s<24;s+=4){let r=i[s],o=i[s+1],a=i[s+2],l=i[s+3];if(r*t[e+(r>=0?3:0)]+o*t[e+(o>=0?4:1)]+a*t[e+(a>=0?5:2)]+l<-(n+Za*Math.abs(l)))return!0}return!1}function Uv(i,t,{min:e,max:n},s){let r=t*12,o=t*6;if(e[0]>n[0]||e[1]>n[1]||e[2]>n[2]){s.set(e,o),s.set(n,o+3);return}for(let a=0;a<3;a++){let l=i[r+a],c=i[r+a+3],h=i[r+a+6],d=i[r+a+9],u=l*e[0],p=l*n[0],g=c*e[1],_=c*n[1],m=h*e[2],f=h*n[2];s[o+a]=Math.min(u,p)+Math.min(g,_)+Math.min(m,f)+d,s[o+a+3]=Math.max(u,p)+Math.max(g,_)+Math.max(m,f)+d}}var Fv=i=>{let t=i.getHex(Ie);return[t>>16&255,t>>8&255,t&255]},Cr=class{constructor(t,e={}){let{meta:n}=t,s=n.instances,r=s.count,o=t.view(s.geometry),a=t.view(s.material),l=t.view(s.matrix);this.root=new Se,this.elementCount=n.elements.length,this._elements=n.elements,this._meta=n,this._mode="materials",this._opacity=1,this._picking=!1,this._pickBounds=!0,this._instanceDetail=!0,this._pickFrustum=null,this._textures=new Map,this._elementOf=t.view(s.element).slice(),this._bucketOf=new Uint32Array(r),this._visible=new Uint8Array(r).fill(1),this._layers=new Map,this._layerHides=new Uint8Array(r),this._highlight=new Uint8Array(r),this._highlighted=[],this._tint=new Map,this._boxes=new Float32Array(r*6),this._minPixels=0,this._viewHeight=1,this.visibleCost=0;let c=!!e.noHideBranch;this.slotUniforms={slotInfo:{value:null},slotState:{value:null}},this._buckets=this._createBuckets(n,a,c),this._indexElements();for(let d=0;d<r;d++){let u=n.geometries[o[d]];if(!u)throw new Qt(`Instance ${d} references missing geometry ${o[d]}.`);Uv(l,d,u.bbox,this._boxes)}let h=Math.min(2**24-1,ki*(e.maxTextureSize??1/0),e.slotLimit??1/0);this._build(t,o,l,e,h);for(let d=0;d<r;d++)this._applyColor(d),this._draw(d);this._flush()}elementId(t){return this._checkElement(t),this._elements[t].id}setVisible(t,e){for(let n of t)for(let s of this.instancesOf(n))this._setInstanceVisible(s,e);this._changed("visibility")}showAll(){for(let t=0;t<this._visible.length;t++)this._setInstanceVisible(t,!0);this._changed("visibility")}setHiddenElements(t){let e=this._instanceMask(t);for(let n=0;n<e.length;n++){let s=e[n]===0;s!==(this._visible[n]===1)&&this._setInstanceVisible(n,s)}this._changed("visibility")}isolate(t){let e=this._instanceMask(t);for(let n=0;n<e.length;n++)this._setInstanceVisible(n,e[n]===1);this._changed("visibility")}setHighlighted(t){let e=this._highlighted;this._highlighted=[];for(let n of e)this._highlight[n]=0;for(let n of t)for(let s of this.instancesOf(n))this._highlight[s]=1,this._highlighted.push(s);for(let n of e)this._applyColor(n);for(let n of this._highlighted)this._applyColor(n);this._changed("appearance")}setTint(t,e){let n=e===null?null:Fv(new Bt(e));for(let s of t)for(let r of this.instancesOf(s))n?this._tint.set(r,n):this._tint.delete(r),this._applyColor(r);this._changed("appearance")}setLayerHidden(t,e,n){let s=this._layers.get(t);s||this._layers.set(t,s=new Uint8Array(this._visible.length));for(let r of e)for(let o of this.instancesOf(r))this._setLayerFlag(s,o,n);this._changed("visibility")}clearLayer(t){let e=this._layers.get(t);if(e){for(let n=0;n<e.length;n++)this._setLayerFlag(e,n,!1);this._layers.delete(t),this._changed("visibility")}}replaceLayerHidden(t,e){if(!e.length)return this.clearLayer(t);let n=this._instanceMask(e),s=this._layers.get(t);s||this._layers.set(t,s=new Uint8Array(this._visible.length));for(let r=0;r<n.length;r++)this._setLayerFlag(s,r,n[r]===1);this._changed("visibility")}_instanceMask(t){let e=new Uint8Array(this._visible.length);for(let n of t)for(let s of this.instancesOf(n))e[s]=1;return e}visibilityState(){return this._visible.map((t,e)=>this._shown(e)?1:0)}instancesOf(t){return this._checkElement(t),this._elementInstances.subarray(this._elementStart[t],this._elementStart[t+1])}isVisible(t){this._checkElement(t);for(let e=this._elementStart[t];e<this._elementStart[t+1];e++)if(this._shown(this._elementInstances[e]))return!0;return!1}get instanceCount(){return this._slotOf.length}get slotCount(){return this._slotInstance.length}instance(t){let e=this._slotOf[t];return e===Ar?{mesh:null,element:this._elementOf[t],slot:-1}:{mesh:this._units[this._slotUnit[e]].mesh,element:this._elementOf[t],slot:e}}instanceColor(t,e=new Bt){let n=this._slotOf[t],[s,r,o]=n===Ar?this._colorOf(t):this._state.image.data.subarray(n*4,n*4+3);return e.setRGB(s/255,r/255,o/255,Ie)}slotElement(t){return this._elementOf[this._slotInstance[t]]}slotInstance(t){return this._slotInstance[t]}withMaterial(t,e,{pickCamera:n=null,section:s=!1}={}){if(this._picking=!s,n&&this._pickBounds&&this._units.length>this._chunkCount){this._pickFrustum=nh(n,this._planes);let{x:r,y:o,z:a}=n.position;this._pickViewPadding=Za*(Math.abs(r)+Math.abs(o)+Math.abs(a))}for(let r of this._units)r.mesh.material=t,s?(r.mesh.visible=(r.mesh.visible||!!r.lines?.visible)&&r.bucket.material.opacity>0,r.lines&&(r.lines.visible=!1)):this._showUnit(r);if(!s)for(let r of this._compactCells)this._cellAttributes(r,!1);try{return e()}finally{this._picking=!1,this._pickFrustum=null;for(let r of this._units)r.mesh.material=r.bucket.material,this._showUnit(r);for(let r of this._cut)r.mesh.visible=!1,r.lines&&(r.lines.visible=!1);if(!s)for(let r of this._compactCells)this._cellAttributes(r,!0)}}elementBox(t,e=new te){this._checkElement(t),e.makeEmpty();for(let n=this._elementStart[t];n<this._elementStart[t+1];n++)this._expandBox(e,this._elementInstances[n]);return e}visibleBox(){let t=new te;for(let e=0;e<this._visible.length;e++)this._shown(e)&&this._expandBox(t,e);return t}setDisplayMode(t){if(!ph.includes(t))throw new Error(`Unknown display mode '${t}'.`);let e=t==="white"!=(this._mode==="white");this._mode=t;for(let n of this._buckets){let s=t==="textures"&&n.texture!==null?this._texture(n.texture):null;for(let r of[n.material,n.wire])r.map!==s&&(r.map=s,r.needsUpdate=!0)}t==="wireframe"&&this._buildLines();for(let n of this._units)this._showUnit(n);if(e)for(let n=0;n<this._slotOf.length;n++)this._applyColor(n);this._changed("appearance")}setOpacity(t){if(!(t>=0&&t<=1))throw new RangeError(`Opacity must be within 0..1, got ${t}.`);this._opacity=t;for(let e of this._buckets)this._applyOpacity(e);this._changed("appearance")}get opacity(){return this._opacity}setDetail(t,e=1){this._minPixels=t,this._viewHeight=e;for(let s of this._cut)this._showUnit(s);this._cut.length=0;for(let s of this._detailCells)s.detailCount=null;this._detailCells.length=0;for(let s of this._compactCells)this._cellAttributes(s,!1);this._compactCells.length=0;let n=this._unitScale;this._unitScale=null,!(!(t>0)||!n)&&(this._cutInView=0,this._cutFrame=null,this._units.forEach((s,r)=>{if(!(!(n[r]>=0)||s.shown===0)){if(s.dirty&&this._span(s),s.cell&&this._detailUsesInstances){if(s.detailHigh>=t&&this._detailCell(s,t))return}else if(this._slotRadius[s.slotBase+s.first]*n[r]>=t)return;s.mesh.visible=!1,s.lines&&(s.lines.visible=!1),this._cut.push(s),this._cutInView+=fh(s,s.first,s.last+1)}}))}_detailCell(t,e){if(t.detailLow>=e)return t.detailCount=Math.min(t.detailEnd,t.last+1),this._detailCells.push(t),!0;let{slotBase:n,last:s}=t,r=this._detailIndices,o=0,a=!1,l=!1;for(let u=0;u<=s;u++){let p=this._pixels[n+u];p<0||(p<e?a=!0:(r[o++]=u,l||(l=a)))}if(!o)return!1;if(t.detailCount=l?o:r[o-1]+1,this._detailCells.push(t),!l)return!0;let c=t.compact??(t.compact=this._compactCell(t.n)),h=c.buffer.array,d=o>c.count;for(let u=0;u<o;u++){let p=u*$a,g=n+r[u];if(u<c.count&&h[p+16]===g)continue;let _=r[u]*12;for(let m=0;m<4;m++)for(let f=0;f<3;f++)h[p+m*4+f]=t.matrices[_+m*3+f];h[p+15]=1,h[p+16]=g,d=!0}return c.count=o,d&&(c.buffer.clearUpdateRanges(),c.buffer.addUpdateRange(0,o*$a),c.buffer.needsUpdate=!0),this._cellAttributes(t,!0),this._compactCells.push(t),!0}_compactCell(t){let e=new lr(new Float32Array(t*$a),$a);return e.setUsage(Tc),this._detailBytes+=e.array.byteLength,{buffer:e,count:0,matrix:new ps(e,16,0),slots:new ps(e,1,16)}}_cellAttributes(t,e){let n=e?t.compact.matrix:t.matrixAttribute;t.mesh.instanceMatrix=n,t.lines&&(t.lines.instanceMatrix=n),t.mesh.geometry.setAttribute("slotBase",e?t.compact.slots:t.slotAttribute)}get totalCost(){return this._totalCost}detailThreshold(t,e,n,s=!0){if(this.visibleCost=this._totalCost,this._detailUsesInstances=!1,this._totalCost<=n)return 0;this._detailUsesInstances=s&&this._instanceDetail&&this._chunkCount<this._units.length,t.updateMatrixWorld();let r=nh(t,this._planes),o=sh(t,e,this._detailView),a=this._pixels,l=this._detailBins.fill(0),c=this._state.image.data,h=this._boxes,d=this._unitScale=new Float64Array(this._units.length).fill(-1),u=0;for(let p=0;p<this._units.length;p++){let g=this._units[p],_=g.sphere;if(g.shown===0||ih(r,_[0],_[1],_[2],_[3]))continue;let m=gf(o,_),f=o[7]?m>0?o[6]/m:1/0:o[6];d[p]=f;let M=g.cell&&this._detailUsesInstances,E=M&&!Jd(r,_[0],_[1],_[2],_[3]+g.pickPadding),v=g.slotBase+g.n,y=-1;if(M){let R=this._slotRadius[g.slotBase],L=this._slotRadius[v-1],N=m+_[3],U=Math.abs(o[3])*_[4]+Math.abs(o[4])*_[5]+Math.abs(o[5])*_[6],C=N-U-R,F=N+U-L,G=Math.fround(o[7]?C>0?R*o[6]/C:1/0:R*f),q=Math.fround(o[7]?F>0?L*o[6]/F:1/0:L*f);Is(q)===Is(G)&&(y=G)}if(y>=0&&!E){g.detailLow=g.detailHigh=y,g.detailEnd=g.n;let R=this._slotCost[g.slotBase]*g.shown;l[Is(y)]+=R,u+=R;continue}let S=0,A=1/0,x=-1,T=0;for(let R=g.slotBase;R<v;R++){if(c[R*4+3]===0){M&&(a[R]=-1);continue}let L=this._slotRadius[R],N=f;if(M){let F=this._slotInstance[R]*6,G=(h[F]+h[F+3])*.5,q=(h[F+1]+h[F+4])*.5,k=(h[F+2]+h[F+5])*.5;if(E&&ih(r,G,q,k,L+g.pickPadding)){a[R]=-1;continue}if(T=R-g.slotBase+1,y>=0){S++;continue}let D=(G-o[0])*o[3]+(q-o[1])*o[4]+(k-o[2])*o[5]-L;N=o[7]?D>0?o[6]/D:1/0:o[6]}let U=N===1/0?1/0:Math.fround(L*N);M&&(a[R]=U,A=Math.min(A,U),x=Math.max(x,U));let C=this._slotCost[R];l[Is(U)]+=C,u+=C}if(M){if(S){A=x=y;let R=S*this._slotCost[g.slotBase];l[Is(y)]+=R,u+=R}g.detailLow=A,g.detailHigh=x,g.detailEnd=T}}return this.visibleCost=u,Kd(l,u,n)}drawStats(){let t=-1/0;for(let r of this._units)t=Math.max(t,r.lastFrame);let e=0,n=this._cutFrame===t?this._cutInView:0,s=0;for(let r of this._units)r.lastFrame===t&&(n+=fh(r,r.first,Math.max(r.last+1,r.first)),e+=fh(r,r.first,Math.max(r.end,r.first)),s++);return{drawn:e,inView:n,draws:s}}drawnInstances(t){t.updateMatrixWorld();let e=new Un().setFromProjectionMatrix(new Ht().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse)),n={info:{render:{frame:-1}}},s=new Ee,r=[];for(let o of this._units){let a=this._mode==="wireframe"&&!this._picking?o.lines:o.mesh;if(!(!a?.visible||!e.intersectsSphere(s.set(s.center.fromArray(o.sphere),o.sphere[3])))){a.onBeforeRender(n,null,t,a.geometry,a.material,null);for(let l=o.first;l<o.end;l++){let c=o.cell&&o.mesh.instanceMatrix===o.compact?.matrix?o.compact.slots.getX(l):o.slotBase+l;this._state.image.data[c*4+3]&&r.push(this._slotInstance[c])}}}return r.sort((o,a)=>o-a)}memory(){let t=this._units[this._chunkCount]?.slotBase??this._slotInstance.length;return{gpuBytes:this._mergedBytes+this._instancedBytes+this._lineBytes+this._stateBytes+this._detailBytes,mergedBytes:this._mergedBytes,instancedBytes:this._instancedBytes,stateBytes:this._stateBytes,lineBytes:this._lineBytes,detailBytes:this._detailBytes,detailSourceBytes:(this._slotInstance.length-t)*48,chunks:this._chunkCount,cells:this._units.length-this._chunkCount,mergedInstances:t,instancedInstances:this._slotInstance.length-t,triangles:this._triangles}}setClipping(t,e){for(let n of this._buckets)for(let s of[n.material,n.wire])s.clippingPlanes=t.length>0?t:null,s.clipIntersection=e,s.needsUpdate=!0;this._changed("clipping")}_build(t,e,n,s,r){let o=e.length,a=this._meta,l=new Map,c=k=>{let D=l.get(k);if(!D){let B=a.geometries[k],X=t.view(B.indices),H=B.uvs?t.view(B.uvs):null;D=pf(wr(t,B),B.q??null,tf(t,B),X,H),D.drawable=D.indices.length>=3&&D.min.every(Number.isFinite)&&D.max.every(Number.isFinite),l.set(k,D)}return D},h=new Uint8Array(o),d=new Float64Array(o*3),u=new Float32Array(o*3),p=new Uint32Array(o),g=new Float32Array(o),_=new Uint8Array(o),m=new Map,f=this._boxes;for(let k=0;k<o;k++){let D=c(e[k]);if(!D.drawable||!mf(f,k))continue;h[k]=df(n,k,D,d.subarray(k*3,k*3+3)),_[k]=Lv(n,k)?1:0,p[k]=D.vertices;for(let H=0;H<3;H++)u[k*3+H]=(f[k*6+H]+f[k*6+3+H])/2;g[k]=Math.hypot(f[k*6+3]-f[k*6],f[k*6+4]-f[k*6+1],f[k*6+5]-f[k*6+2])/2;let B=(e[k]*2+_[k])*this._buckets.length+this._bucketOf[k],X=m.get(B);X||m.set(B,X=[]),X.push(k)}let E=[...m.keys()].sort((k,D)=>k-D).map(k=>{let D=m.get(k),B=c(e[D[0]]),X=this._buckets[this._bucketOf[D[0]]].texture!==null,H=[0,1,2].every(at=>(B.max[at]-B.min[at])/wn<=65535),j=B.vertices*((H?12:20)+(X?8:0))+B.indices.length*(B.vertices>65535?4:2);return{k:D.length,bytes:j,members:D,textured:X}}),v=s.mergedCap??ah,y=s.minRepeats??Rv;if(E.reduce((k,D)=>k+D.k*D.bytes,0)>v){let k=s.cellExtent==null?lf(f,p)*Cv:this.visibleBox().getSize(new I).length()*s.cellExtent;for(let D of E)D.k<y||(D.leaves=af(u,D.members,dh,k),D.cells=D.leaves.length)}let S=cf(E,{cap:v,minRepeats:y,perCell:dh,maxDraws:Iv}),A=new Map,x=new Uint32Array(a.geometries.length),T=[];E.forEach((k,D)=>{if(S[D]){for(let B of k.leaves)T.push({shape:k,members:lh(B,g)});return}for(let B of k.members){x[e[B]]++;let X=this._bucketOf[B]*2+(h[B]===Ps?1:0),H=A.get(X);H||A.set(X,H=[]),H.push(B)}});let R=[];for(let k of[...A.keys()].sort((D,B)=>D-B))for(let D of rf(u,p,A.get(k),s.chunkVertices??ef))R.push(lh(D,g));let L=[...R,...T.map(k=>k.members)].reduce((k,D)=>k+D.length,0);if(L>r)throw new Rr(L,r);let N=Math.max(1,Math.ceil(L/ki)),U=new Float32Array(ki*N*4);this._state=new Nn(new Uint8Array(ki*N*4),ki,N),this._state.colorSpace=Ie,this._state.onUpdate=()=>{this._fullPending=!1,this._pendingRanges=0},this._fullPending=!0,this._pendingRanges=0,this._dirty=new Uint32Array(uh),this._dirtyCount=0;let C=new Nn(U,ki,N,sn,Ge);C.needsUpdate=!0,C.onUpdate=()=>C.image.data=null,this.slotUniforms.slotInfo.value=C,this.slotUniforms.slotState.value=this._state,this._stateBytes=ki*N*20,this._slotOf=new Uint32Array(o).fill(Ar),this._slotInstance=new Uint32Array(L),this._slotUnit=new Uint32Array(L),this._slotRadius=new Float32Array(L),this._slotCost=new Float32Array(L),this._pixels=new Float32Array(L),this._planes=new Float64Array(24),this._detailView=new Float64Array(8),this._frameView=new Float64Array(8),this._frameViewAt=NaN,this._units=[],this._cut=[],this._detailCells=[],this._compactCells=[],this._detailIndices=new Uint16Array(dh),this._detailBins=new Float64Array(eh),this._detailBytes=0,this._unitScale=null,this._cutInView=0,this._cutFrame=-1,this._mergedBytes=0,this._instancedBytes=0,this._lineBytes=0;let F={matrices:n,geometryOf:e,mirrored:_,kind:h,origins:d,source:c,textured:!1};this._lineSources=new Map;let G=0;for(let k of R){let D=this._buckets[this._bucketOf[k[0]]];F.textured=D.texture!==null;let B=ff(k,F);for(let X=0;X<k.length;X++){let H=k[X],j=G+X;this._slotOf[H]=j,this._slotInstance[j]=H,this._slotUnit[j]=this._units.length,this._slotRadius[j]=g[H],this._slotCost[j]=(B.indexStart[X+1]-B.indexStart[X])/3,U.set(B.origins.subarray(X*3,X*3+3),j*4),U[j*4+3]=B.steps[X];let at=e[H];this._lineSources.has(at)||this._lineSources.set(at,c(at).indices.slice()),--x[at]===0&&l.delete(at)}this._units.push(this._chunk(D,k,G,B,_,e)),G+=k.length}this._lineMembers={mirrored:_,geometryOf:e.slice()},this._chunkCount=this._units.length,this._triangles=this._slotCost.reduce((k,D)=>k+D,0);let q=new Map;for(let{shape:k,members:D}of T){let B=D[0],X=c(e[B]),H=q.get(k);if(!H){let j=a.geometries[e[B]].bbox;H=this._shape(X,_[B]===1,k.textured);let at=lt=>Math.max(...lt.map(Math.abs)),ct=Math.max(at(X.min),at(X.max));H.pickExtent=ct,H.pickPadding=Math.max(0,...X.min.map((lt,Y)=>j.min[Y]-lt),...X.max.map((lt,Y)=>lt-j.max[Y]))+(X.q?Za*(at(X.q.o)+65535*Math.abs(X.q.s)):0),q.set(k,H)}for(let j=0;j<D.length;j++){let at=D[j],ct=G+j;this._slotOf[at]=ct,this._slotInstance[ct]=at,this._slotUnit[ct]=this._units.length,this._slotRadius[ct]=g[at],this._slotCost[ct]=H.triangles*Pv,U.set(X.q?X.q.o:[0,0,0],ct*4),U[ct*4+3]=X.q?X.q.s:1}this._triangles+=H.triangles*D.length,this._units.push(this._cell(this._buckets[this._bucketOf[B]],D,G,H,n)),G+=D.length}this._totalCost=this._slotCost.reduce((k,D)=>k+D,0)}_shape(t,e,n){let s=t.vertices,r=t.q?new Uint16Array(s*4):new Float32Array(s*4);for(let h=0;h<s;h++)for(let d=0;d<3;d++)r[h*4+d]=t.positions[h*3+d];let o=t.oct?t.oct.slice():null;if(!o){let h=Ya(t);o=new Int16Array(s*2);for(let d=0;d<s;d++)Sr(o,d*2,h[d*3],h[d*3+1],h[d*3+2])}let a=n?new Float32Array(s*2):null;a&&t.uvs&&a.set(t.uvs);let l=t.indices,c=qa(s,l.length);for(let h=0;h<l.length;h+=3)c[h]=l[h],c[h+1]=l[h+(e?2:1)],c[h+2]=l[h+(e?1:2)];return this._instancedBytes+=r.byteLength+o.byteLength+(a?.byteLength??0)+c.byteLength,{q:En(r,4),normal:En(o,2,!0),uv:a&&En(a,2),index:new be(c,1),triangles:l.length/3}}_cell(t,e,n,s,r){let o=e.length,a=new oe;a.setAttribute("q",s.q),a.setAttribute("position",s.q),a.setAttribute("normal",s.normal),s.uv&&a.setAttribute("uv",s.uv);let l=En(Float32Array.from({length:o},(m,f)=>n+f),1,!1,jn);a.setAttribute("slotBase",l),a.setIndex(s.index);let c=_f(this._boxes,e),h=new Ee(new I(c[0],c[1],c[2]),c[3]);a.boundingSphere=h;let d=new ms(a,t.material,0),u=new Float32Array(o*16),p=new Float32Array(o*12),g=0;for(let m=0;m<o;m++){let f=e[m]*12;for(let M=0;M<4;M++)for(let E=0;E<3;E++){let v=r[f+M*3+E];u[m*16+M*4+E]=v,p[m*12+M*3+E]=v}u[m*16+15]=1;for(let M=f;M<f+3;M++){let E=Math.abs(r[M])+Math.abs(r[M+3])+Math.abs(r[M+6]),v=E*s.pickExtent+Math.abs(r[M+9]);g=Math.max(g,E*s.pickPadding+Za*v)}}d.instanceMatrix=En(u,16,!1,jn),d.count=o,d.boundingSphere=h,this._instancedBytes+=o*68;let _={bucket:t,mesh:d,lines:null,slotBase:n,n:o,sphere:c,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!0,triangles:s.triangles,lastFrame:-1/0,pickPadding:Math.sqrt(3)*g,detailCount:null,detailLow:1/0,detailHigh:-1,detailEnd:0,compact:null,matrices:p,matrixAttribute:d.instanceMatrix,slotAttribute:l};return d.onBeforeRender=(m,f,M)=>this._range(_,m,M,d),d.visible=!1,this.root.add(d),_}_chunk(t,e,n,s,r,o){let a=new vs;a.instanceCount=1,a.setAttribute("q",En(s.q,4)),a.setAttribute("normal",En(s.o,2,!0)),s.uv&&a.setAttribute("uv",En(s.uv,2)),a.setAttribute("slotBase",En(new Float32Array([n]),1,!1,jn)),a.setIndex(En(s.index,1));let l=_f(this._boxes,e);a.boundingSphere=new Ee(new I(l[0],l[1],l[2]),l[3]),this._mergedBytes+=s.q.byteLength+s.o.byteLength+(s.uv?.byteLength??0)+s.index.byteLength;let c=new ye(a,t.material),h={bucket:t,mesh:c,lines:null,slotBase:n,n:e.length,sphere:l,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!1,starts:s.indexStart,vertices:s.q.length/4,f32:s.q instanceof Float32Array,members:e.slice(),lastFrame:-1/0};return c.onBeforeRender=(d,u,p)=>this._range(h,d,p,c),c.visible=!1,this.root.add(c),h}_buildLines(){if(!this._lineSources)return;let{mirrored:t,geometryOf:e}=this._lineMembers;for(let n of this._units){if(n.cell){let h=n.mesh.geometry.index;n.lines=new ms(n.mesh.geometry,n.bucket.wire,0),n.lines.instanceMatrix=n.mesh.instanceMatrix,n.lines.boundingSphere=n.mesh.boundingSphere,n.lines.onBeforeRender=(d,u,p)=>this._range(n,d,p,n.lines),this._lineBytes+=h.count*2*h.array.BYTES_PER_ELEMENT,this.root.add(n.lines);continue}let s=n.starts[n.n],r=qa(n.vertices,s*2),o=0,a=0;for(let h of n.members){let d=this._lineSources.get(e[h]),u=t[h]===1;for(let p=0;p<d.length;p+=3){let g=d[p]+a,_=d[p+(u?2:1)]+a,m=d[p+(u?1:2)]+a;r[o++]=g,r[o++]=_,r[o++]=_,r[o++]=m,r[o++]=m,r[o++]=g}a+=this._meta.geometries[e[h]].positions.n/3}let l=n.mesh.geometry,c=new vs;c.instanceCount=1;for(let h of["q","normal","uv","slotBase"])l.attributes[h]&&c.setAttribute(h,l.attributes[h]);c.setIndex(En(r,1)),c.boundingSphere=l.boundingSphere,this._lineBytes+=r.byteLength,n.lines=new vn(c,n.bucket.material),n.lines.onBeforeRender=(h,d,u)=>this._range(n,h,u,n.lines),this.root.add(n.lines),n.members=null}this._lineSources=null,this._lineMembers=null}_range(t,e,n,s){t.dirty&&this._span(t);let r=t.last+1;if(this._picking){if(t.cell&&this._pickFrustum){let o=this._state.image.data,a=t.pickPadding+this._pickViewPadding;for(;r>0;){let l=t.slotBase+r-1;if(o[l*4+3]&&!Nv(this._pickFrustum,this._boxes,this._slotInstance[l]*6,a))break;r--}}}else if(t.cell&&t.detailCount!==null)r=t.detailCount;else if(this._minPixels>0&&r>t.first){let o=e.info.render.frame;o!==this._frameViewAt&&(sh(n,this._viewHeight,this._frameView),this._frameViewAt=o);let a=this._frameView,l=gf(a,t.sphere),c=a[7]?l>0?this._minPixels*l/a[6]:0:this._minPixels/a[6];r=Math.min(r,hf(this._slotRadius,t.slotBase+t.first,t.slotBase+r,c)-t.slotBase)}if(t.cell)s.count=Math.max(r,0);else{let o=s.isLineSegments?2:1,[a,l]=uf(t.starts,t.first,r);s.geometry.setDrawRange(a*o,l*o)}this._picking||(t.end=r,t.lastFrame=e.info.render.frame,this._cutFrame===null&&this._minPixels>0&&(this._cutFrame=t.lastFrame))}_span(t){let e=this._state.image.data,n=0;for(;n<t.n&&e[(t.slotBase+n)*4+3]===0;)n++;let s=t.n-1;for(;s>=n&&e[(t.slotBase+s)*4+3]===0;)s--;t.first=n<t.n&&!t.cell?n:0,t.last=n<t.n?s:-1,t.dirty=!1}_showUnit(t){let e=this._mode==="wireframe"&&!this._picking;t.mesh.visible=t.shown>0&&!e,t.lines&&(t.lines.visible=t.shown>0&&e)}_createBuckets(t,e,n){let s=new Map,r=[];for(let o=0;o<e.length;o++){let a=e[o],l=s.get(a);if(!l){let c=t.materials[a];if(!c)throw new Qt(`Instance ${o} references missing material ${a}.`);l={index:r.length,bytes:c.color.map(h=>Math.round(h*255)),opacity:c.opacity,texture:c.texture??null,material:hh(new xs({side:Le}),this.slotUniforms,n),wire:hh(new xs({side:Le,wireframe:!0}),this.slotUniforms,n)},this._applyOpacity(l),s.set(a,l),r.push(l)}this._bucketOf[o]=l.index}return r}_indexElements(){let t=new Uint32Array(this.elementCount+1);for(let s of this._elementOf)s>=0&&t[s+1]++;for(let s=0;s<this.elementCount;s++)t[s+1]+=t[s];let e=new Uint32Array(t[this.elementCount]),n=t.slice(0,this.elementCount);this._elementOf.forEach((s,r)=>{s>=0&&(e[n[s]++]=r)}),this._elementStart=t,this._elementInstances=e}_texture(t){let e=this._textures.get(t);if(!e){let n=this._meta.textures[t],s=new Image;e=new ke(s),e.colorSpace=Ie,e.wrapS=e.wrapT=as,e.repeat.set(1/n.sx,1/n.sy),s.onload=()=>{e.needsUpdate=!0,this._changed("appearance")},s.src=`data:${n.mime};base64,${n.data}`,this._textures.set(t,e)}return e}_applyOpacity(t){let e=t.opacity*this._opacity,n=e<1;for(let s of[t.material,t.wire])s.transparent!==n&&(s.needsUpdate=!0),s.opacity=e,s.transparent=n,s.depthWrite=!n}_colorOf(t){return this._highlight[t]?Tv:this._tint.get(t)??(this._mode==="white"?Av:this._buckets[this._bucketOf[t]].bytes)}_applyColor(t){let e=this._slotOf[t];e!==Ar&&(this._state.image.data.set(this._colorOf(t),e*4),this._markDirty(e))}_setInstanceVisible(t,e){this._visible[t]=e?1:0,this._draw(t)}_setLayerFlag(t,e,n){t[e]!==(n?1:0)&&(t[e]=n?1:0,this._layerHides[e]+=n?1:-1,this._draw(e))}_shown(t){return this._visible[t]===1&&this._layerHides[t]===0}_draw(t){let e=this._slotOf[t];if(e===Ar)return;let n=this._shown(t)?255:0,s=this._state.image.data;if(s[e*4+3]===n)return;s[e*4+3]=n,this._markDirty(e);let r=this._units[this._slotUnit[e]];r.shown+=n?1:-1,r.dirty=!0,this._showUnit(r)}_markDirty(t){this._dirtyCount<uh&&(this._dirty[this._dirtyCount]=t),this._dirtyCount++}_flush(){let t=this._dirtyCount;if(t===0)return;this._dirtyCount=0;let e=this._state;if(this._fullPending||this._pendingRanges+t>uh)e.clearUpdateRanges(),this._fullPending=!0;else{for(let n=0;n<t;n++)e.addUpdateRange(this._dirty[n]*4,4);this._pendingRanges+=t}e.needsUpdate=!0}_checkElement(t){if(!Number.isInteger(t)||t<0||t>=this.elementCount)throw new RangeError(`Element index ${t} is out of range 0..${this.elementCount-1}.`)}_expandBox(t,e){if(!mf(this._boxes,e))return;let n=this._boxes,s=e*6;t.min.set(Math.min(t.min.x,n[s]),Math.min(t.min.y,n[s+1]),Math.min(t.min.z,n[s+2])),t.max.set(Math.max(t.max.x,n[s+3]),Math.max(t.max.y,n[s+4]),Math.max(t.max.z,n[s+5]))}_changed(t){this._flush(),this.root.dispatchEvent({type:"change",detail:{kind:t}})}};function fh(i,t,e){return e<=t?0:i.cell?(e-t)*i.triangles:(i.starts[e]-i.starts[t])/3}function gf(i,t){return(t[0]-i[0])*i[3]+(t[1]-i[1])*i[4]+(t[2]-i[2])*i[5]-t[3]}function _f(i,t){let e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let a of t)for(let l=0;l<3;l++)e[l]=Math.min(e[l],i[a*6+l]),n[l]=Math.max(n[l],i[a*6+3+l]);let s=(n[0]-e[0])/2,r=(n[1]-e[1])/2,o=(n[2]-e[2])/2;return Float64Array.of((e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,Math.hypot(s,r,o),s,r,o)}var Ja=class{constructor(t){this.root=new Se,this._objects=[],this._elements=[];let e=t.meta.points;if(this.count=e?.count??0,!this.count)return;let n=t.view(e.geometry),s=t.view(e.material),r=t.view(e.element),o=t.view(e.matrix);for(let a=0;a<this.count;a++){let l=t.meta.geometries[n[a]];if(!l||l.kind!=="points")throw new Qt(`Point instance ${a} references a geometry that is not points.`);let c=Xa(t,l),h=new oe;h.setAttribute("position",new be(c,3));let d=t.meta.materials[s[a]],u=!1;if(l.colors){let _=t.view(l.colors);if(_.length!==c.length)throw new Qt(`Point geometry ${n[a]} colors do not match its positions.`);let m=new Float32Array(_.length);for(let f=0;f<_.length;f++)m[f]=_[f]/255;h.setAttribute("color",new be(m,3)),u=!0}let p=new Fn({size:2,sizeAttenuation:!1,vertexColors:u,color:new Bt(...d?.color??[.8,.8,.8])}),g=new Qn(h,p);g.matrixAutoUpdate=!1,g.matrix.fromArray(Bv(o,a)),g.matrixWorldNeedsUpdate=!0,g.frustumCulled=!0,h.computeBoundingSphere(),this.root.add(g),this._objects.push(g),this._elements.push(r[a])}}syncVisibility(t){for(let e=0;e<this._objects.length;e++){let n=this._elements[e];this._objects[e].visible=n<0||t.isVisible(n)}}setClipping(t){for(let e of this._objects)e.material.clippingPlanes=t.length>0?t:null}setOpacity(t){for(let e of this._objects)e.material.opacity=t,e.material.transparent=t<1}visibleBox(t=new te){t.makeEmpty();let e=new Ee;for(let n of this._objects)n.visible&&(e.copy(n.geometry.boundingSphere).applyMatrix4(n.matrix),t.expandByPoint(e.center.clone().addScalar(e.radius)),t.expandByPoint(e.center.clone().addScalar(-e.radius)));return t}elementBox(t,e=new te){e.makeEmpty();let n=new Ee;for(let s=0;s<this._objects.length;s++)this._elements[s]!==t||!this._objects[s].visible||(n.copy(this._objects[s].geometry.boundingSphere).applyMatrix4(this._objects[s].matrix),e.expandByPoint(n.center.clone().addScalar(n.radius)),e.expandByPoint(n.center.clone().addScalar(-n.radius)));return e}};function Bv(i,t){let e=t*12;return[i[e],i[e+1],i[e+2],0,i[e+3],i[e+4],i[e+5],0,i[e+6],i[e+7],i[e+8],0,i[e+9],i[e+10],i[e+11],1]}var Ov={ru:{elements:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",noGeometry:"\u041D\u0435\u0442 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438",contextLost:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430 \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",noWebGL:"\u041D\u0443\u0436\u0435\u043D \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 WebGL 2",badData:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438",tooLarge:"\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0449\u0438\u043A\u0430: \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0441 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0435\u0439 \u2014 {count}, \u043F\u0440\u0435\u0434\u0435\u043B \u2014 {limit}",selected:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",elementGroup:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442",id:"Id",category:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",type:"\u0422\u0438\u043F",level:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",sourceId:"ID \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430",link:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B",panels:"\u041F\u0430\u043D\u0435\u043B\u0438","panel.model":"\u041C\u043E\u0434\u0435\u043B\u044C","panel.views":"\u0412\u0438\u0434\u044B","panel.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","panel.clashes":"\u041A\u043E\u043B\u043B\u0438\u0437\u0438\u0438","panel.bcf":"\u0422\u0435\u043C\u044B BCF","bcf.noView":"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0430","bcf.viewpoint":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u0434 {index}","bcf.components":"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u2014 {missing}, \u043D\u0435\u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u044B\u0445 \u2014 {ambiguous}","panel.timeliner":"4D-\u0433\u0440\u0430\u0444\u0438\u043A","panel.links":"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B","group.navigation":"\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F","group.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","group.measure":"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F","group.display":"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","group.view":"\u0412\u0438\u0434","tool.orbit":"\u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435","tool.pan":"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u0430","tool.fit":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","tool.projection":"\u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430 / \u043E\u0440\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F","tool.plane":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.box":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.distance":"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435","tool.displayMode":"\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","tool.grids":"\u041E\u0441\u0438","tool.opacity":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","tool.fullscreen":"\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",contextMenu:"\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E","menu.properties":"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430","menu.hide":"\u0421\u043A\u0440\u044B\u0442\u044C","menu.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C","menu.showAll":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0451","menu.zoomTo":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C \u043A \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.sectionBox":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.copyId":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id","menu.fitAll":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","menu.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","menu.unavailable":"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438",searchPlaceholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u0442\u0438\u043F\u0443, Id\u2026",noCategory:"\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",noMatches:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","filters.title":"\u0424\u0438\u043B\u044C\u0442\u0440\u044B","filters.model":"\u041C\u043E\u0434\u0435\u043B\u044C-\u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A","filters.noLevel":"\u0411\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F","filters.all":"\u0412\u0441\u0435","filters.clear":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C","filters.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F",idCopied:"Id \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D",copyFailed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id",fullscreenUnavailable:"\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D","face.front":"\u0421\u043F\u0435\u0440\u0435\u0434\u0438","face.back":"\u0421\u0437\u0430\u0434\u0438","face.left":"\u0421\u043B\u0435\u0432\u0430","face.right":"\u0421\u043F\u0440\u0430\u0432\u0430","face.top":"\u0421\u0432\u0435\u0440\u0445\u0443","face.bottom":"\u0421\u043D\u0438\u0437\u0443","cube.title":"\u041A\u0443\u0431 \u0432\u0438\u0434\u0430","cube.up":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0432\u0435\u0440\u0445","cube.down":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043D\u0438\u0437","cube.left":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043B\u0435\u0432\u043E","cube.right":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043F\u0440\u0430\u0432\u043E","cube.home":"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0438\u0434","sections.mode":"\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","sections.planes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.box":"\u0411\u043E\u043A\u0441","sections.off":"\u0412\u044B\u043A\u043B","sections.axis":"\u041E\u0441\u044C","sections.addPlane":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.noPlanes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442","sections.rotated":"\u043F\u043E\u0432\u0451\u0440\u043D\u0443\u0442\u0430","sections.custom":"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u0430\u044F","sections.position":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.flip":"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443","sections.enabled":"\u0412\u043A\u043B","sections.delete":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.keepInside":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.cutInside":"\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.fitSelection":"\u041F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443","sections.showGizmo":"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440","sections.boxYaw":"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0432\u043E\u043A\u0440\u0443\u0433 Z","sections.fill":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u0440\u0435\u0437\u043E\u0432","sections.fillUnavailable":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0431\u0435\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0442\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u0430 WebGL","sections.maxPlanes":"\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 6 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439","unit.m":"\u043C","display.materials":"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B","display.textures":"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B","display.white":"\u0411\u0435\u043B\u044B\u0439","display.wireframe":"\u041A\u0430\u0440\u043A\u0430\u0441","display.background":"\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430","display.backgroundReset":"\u0424\u043E\u043D \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E","opacity.label":"\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","opacity.value":"{value} %","views.tour":"\u0422\u0443\u0440 \u043F\u043E \u0432\u0438\u0434\u0430\u043C","views.stop":"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0443\u0440","clash.New":"\u041D\u043E\u0432\u0430\u044F","clash.Active":"\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F","clash.Reviewed":"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430","clash.Approved":"\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430","clash.Resolved":"\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430","task.construct":"\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E","task.demolish":"\u0421\u043D\u043E\u0441","task.temporary":"\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435","player.title":"4D-\u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C","player.play":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438","player.pause":"\u041F\u0430\u0443\u0437\u0430","player.date":"\u0414\u0430\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430","player.speed":"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",truncated:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {meshes} \u0438\u0437 {total} \u043C\u0435\u0448\u0435\u0439: \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u0440\u0435\u0437\u0430\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u043E\u0439 MaxMeshVertices"},en:{elements:"Elements",noGeometry:"No geometry",contextLost:"The graphics context was lost \u2014 reload the page",noWebGL:"This page needs a browser with WebGL 2",badData:"The model data could not be read",tooLarge:"The model is too large for this viewer: {count} objects with geometry, the limit is {limit}",selected:"Selected",close:"Close",elementGroup:"Element",id:"Id",category:"Category",type:"Type",level:"Level",sourceId:"Source ID",link:"Link",panels:"Panels","panel.model":"Model","panel.views":"Views","panel.sections":"Sections","panel.clashes":"Clashes","panel.bcf":"BCF topics","bcf.noView":"No view available","bcf.viewpoint":"Open viewpoint {index}","bcf.components":"Components missing \u2014 {missing}, ambiguous \u2014 {ambiguous}","panel.timeliner":"4D schedule","panel.links":"Linked files","group.navigation":"Navigation","group.sections":"Sections","group.measure":"Measure","group.display":"Display","group.view":"View","tool.orbit":"Orbit","tool.pan":"Pan","tool.fit":"Fit all","tool.projection":"Perspective / orthographic","tool.plane":"Section plane","tool.box":"Section box","tool.resetSections":"Reset sections","tool.distance":"Distance","tool.displayMode":"Display mode","tool.grids":"Grids","tool.opacity":"Transparency","tool.fullscreen":"Full screen",contextMenu:"Context menu","menu.properties":"Properties","menu.hide":"Hide","menu.isolate":"Isolate","menu.showAll":"Show all","menu.zoomTo":"Zoom to object","menu.sectionBox":"Section box around object","menu.copyId":"Copy Id","menu.fitAll":"Fit all","menu.resetSections":"Reset sections","menu.unavailable":"Unavailable for this model",searchPlaceholder:"Search by name, type, Id\u2026",noCategory:"No category",noMatches:"No matches","filters.title":"Filters","filters.model":"Source model","filters.noLevel":"No level","filters.all":"All","filters.clear":"Clear","filters.isolate":"Isolate matches",idCopied:"Id copied",copyFailed:"Could not copy Id",fullscreenUnavailable:"Fullscreen is not available","face.front":"Front","face.back":"Back","face.left":"Left","face.right":"Right","face.top":"Top","face.bottom":"Bottom","cube.title":"View cube","cube.up":"Rotate up","cube.down":"Rotate down","cube.left":"Rotate left","cube.right":"Rotate right","cube.home":"Home view","sections.mode":"Section mode","sections.planes":"Planes","sections.box":"Box","sections.off":"Off","sections.axis":"Axis","sections.addPlane":"Add plane","sections.noPlanes":"No planes","sections.rotated":"rotated","sections.custom":"Custom","sections.position":"Plane position","sections.flip":"Flip side","sections.enabled":"On","sections.delete":"Delete plane","sections.keepInside":"Show inside","sections.cutInside":"Cut inside","sections.fitSelection":"Fit to selection","sections.showGizmo":"Show gizmo","sections.boxYaw":"Rotation around Z","sections.fill":"Fill cut faces","sections.fillUnavailable":"Section fill requires a WebGL stencil buffer","sections.maxPlanes":"At most 6 planes","unit.m":"m","display.materials":"Materials","display.textures":"Textures","display.white":"White","display.wireframe":"Wireframe","display.background":"Background color","display.backgroundReset":"Reset background","opacity.label":"Opacity","opacity.value":"{value}%","views.tour":"Play tour","views.stop":"Stop tour","clash.New":"New","clash.Active":"Active","clash.Reviewed":"Reviewed","clash.Approved":"Approved","clash.Resolved":"Resolved","task.construct":"Construct","task.demolish":"Demolish","task.temporary":"Temporary","player.title":"4D player","player.play":"Play","player.pause":"Pause","player.date":"Schedule date","player.speed":"Speed",truncated:"Showing {meshes} of {total} meshes: the model was truncated by the MaxMeshVertices setting"}},Ls=(globalThis.navigator?.language??"").toLowerCase().startsWith("ru")?"ru":"en",Ir=new Intl.NumberFormat(Ls).format;function it(i,t=Ls){let e=Ov[t][i];if(e===void 0)throw new Error(`Missing UI string '${i}'.`);return e}var xf=new I(0,0,1),Ka=Math.PI/2-.01;function yf(i,t,e=4){return Math.hypot(t.x-i.x,t.y-i.y)<=e}function bf(i,t,e,n,s,r){let o=i.clone().sub(e),a=t.clone().sub(e),l=d=>(o.applyQuaternion(d),a.applyQuaternion(d));l(new Pe().setFromAxisAngle(xf,-n*r));let c=a.clone().sub(o).normalize(),h=c.clone().cross(xf);if(h.lengthSq()>1e-12){let d=Math.asin(de.clamp(c.z,-1,1)),u=de.clamp(s*r,d-Ka,d+Ka);l(new Pe().setFromAxisAngle(h.normalize(),-u))}return{position:o.add(e),target:a.add(e)}}function Mf(i,t,e,n){let s=r=>r.clone().sub(e).multiplyScalar(n).add(e);return{position:s(i),target:s(t)}}var zv=.85,kv=100/3;function Sf(i,t,e){let n=i*(t===1?kv:t===2?e:1);return de.clamp(zv**(-n/100),.5,2)}var mh=(i,t)=>t>=i?"window":"crossing";function wf(i,t,e){let n=vf(i.position,i.target),s=vf(t.position,t.target),r=n.azimuth??s.azimuth??0,o=s.azimuth??r,a=de.euclideanModulo(o-r+Math.PI,2*Math.PI)-Math.PI,l=(_,m)=>_+(m-_)*e,c=r+a*e,h=de.clamp(l(n.elevation,s.elevation),-Ka,Ka),d=l(n.distance,s.distance),u=i.target.clone().lerp(t.target,e),p=Math.cos(h)*d;return{position:u.clone().add(new I(p*Math.cos(c),p*Math.sin(c),Math.sin(h)*d)),target:u}}function Ef(i,t,e,n){let s=i.position.clone().sub(i.target),r=t.position.clone().sub(t.target),o=s.length(),a=r.length();s.normalize(),r.normalize();let l=new Pe().setFromUnitVectors(s,r),c=e.clone().applyQuaternion(l),h=new I().setFromMatrixColumn(new Ht().lookAt(t.position,t.target,n),1),d=r.dot(new I().crossVectors(c,h)),u=Math.atan2(Math.abs(d)<1e-9?0:d,c.dot(h)),p=new Pe;return g=>{p.identity().slerp(l,g);let _=s.clone().applyQuaternion(p),m=i.target.clone().lerp(t.target,g),f=_.clone().multiplyScalar(de.lerp(o,a,g)).add(m),M=e.clone().applyQuaternion(p).applyAxisAngle(_,u*g);return{position:f,target:m,up:M}}}function vf(i,t){let e=i.clone().sub(t),n=e.length(),s=Math.hypot(e.x,e.y);return{distance:n,elevation:n>1e-12?Math.asin(de.clamp(e.z/n,-1,1)):0,azimuth:s>1e-9*Math.max(n,1e-12)?Math.atan2(e.y,e.x):null}}var Hv=.005,Vv=new I(1,-1,.8).normalize(),_h=.01,Tf=1e-6,Gv=64,Af=1.05,Wv=5e3,gh=(i,t)=>new CustomEvent(i,{detail:t});function Rf({bbox:i,grids:t}){let e=r=>Array.isArray(r)&&r.length===3&&r.every(Number.isFinite);if(!e(i?.min)||!e(i?.max))return!0;let n=new te(new I(...i.min),new I(...i.max));if(n.isEmpty())return!0;let s=new I;for(let r of t??[])for(let o of br(r)){if(!e(o))return!0;n.expandByPoint(s.fromArray(o))}return n.getSize(s).length()*Af>_h*Wv}var ja=class extends EventTarget{constructor(t,e,{pick:n=()=>null,visibleBox:s=()=>new te}={}){super(),this.dom=e,this.pick=n,this.visibleBox=s,this.target=new I,this.leftButtonMode="orbit",this._perspective=t,this._defaultFov=t.fov,this._orthographic=new Bn(-1,1,1,-1),this.camera=t,this._drag=null,this._wheelPick=null,this._animation=0,this._overlay=null,this._bounds=null,this._extraBounds=new Map,e.style.touchAction="none",e.addEventListener("pointerdown",r=>this._down(r)),e.addEventListener("pointermove",r=>this._move(r)),e.addEventListener("pointerup",r=>this._up(r)),e.addEventListener("pointercancel",()=>this._end()),e.addEventListener("lostpointercapture",r=>this._lostCapture(r)),window.addEventListener("blur",()=>this._end()),e.addEventListener("wheel",r=>this._wheel(r),{passive:!1}),e.addEventListener("contextmenu",r=>r.preventDefault())}setLeftButtonMode(t){if(t!=="orbit"&&t!=="pan")throw new RangeError(`Unknown left button mode: ${t}`);this.leftButtonMode=t}setProjection(t){if(t!=="perspective"&&t!=="orthographic")throw new RangeError(`Unknown projection: ${t}`);let e=t==="perspective"?this._perspective:this._orthographic,n=this.camera;if(e!==n){this._stopAnimation(),e.position.copy(n.position),n.isOrthographicCamera&&e.position.sub(this.target).divideScalar(n.zoom).add(this.target),e.zoom=1,e.quaternion.copy(n.quaternion),e.up.copy(n.up),n.parent?.add(e),n.parent?.remove(n);for(let s of[...n.children])e.add(s);this.camera=e,this.resize()}}resize(){let t=this.camera,e=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),n=Math.max(t.position.distanceTo(this.target),1e-6);if(t.isPerspectiveCamera)t.aspect=e;else{let r=n*Math.tan(de.degToRad(this._perspective.fov/2));Object.assign(t,{top:r,bottom:-r,left:-r*e,right:r*e})}let s=this._rangeSphere();if(s){let r=s.center.clone().sub(t.position),o=new I(0,0,-1).applyQuaternion(t.quaternion);t.far=Math.max(1e-6,(r.length()+s.radius)*Af);let a=r.dot(o)-s.radius;t.near=Math.max(a*.95,Math.min(_h,t.far/2))}t.updateProjectionMatrix(),this.dispatchEvent(new Event("change"))}setExtraBounds(t,e){e&&!e.isEmpty()?this._extraBounds.set(t,e.clone()):this._extraBounds.delete(t),this.resize()}_rangeSphere(){let t=this._visibleBounds()?.sphere??null;if(this._extraBounds.size===0)return t;let e=t?this._bounds.box.clone():new te;for(let n of this._extraBounds.values())e.union(n);return e.getBoundingSphere(new Ee)}invalidateBounds(){this._bounds=null}_visibleBounds(){if(!this._bounds){let t=this.visibleBox();this._bounds={box:t,sphere:t.isEmpty()?null:t.getBoundingSphere(new Ee)}}return this._bounds.sphere&&this._bounds}fitBox(t,e=!0){if(t.isEmpty())return;let n=t.getBoundingSphere(new Ee),s=Math.max(n.radius,.001),r=de.degToRad(this._perspective.fov/2),o=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),a=s/Math.sin(Math.min(r,Math.atan(Math.tan(r)*o))),l=this.camera.position.clone().sub(this.target);l.lengthSq()<1e-12&&l.copy(Vv);let c=l.normalize().multiplyScalar(a).add(n.center);e?this.animateTo({position:c,target:n.center}):(this.camera.zoom=1,this._set(c,n.center))}zoomToBox(t){this.fitBox(t,!0)}resetCameraStyle(){this._perspective.fov=this._defaultFov,this.camera.up.set(0,0,1)}restoreViewCamera({position:t,target:e,up:n,fov:s,orthographicHeight:r}){let o=new I(...t),a=new I(...e);if(this.resetCameraStyle(),!n){this.animateTo({position:o,target:a});return}this._stopAnimation(),this.camera.up.fromArray(n),this._perspective.fov=s??this._defaultFov;let l=Math.max(o.distanceTo(a),1e-6);this.camera.zoom=r==null?1:2*l*Math.tan(de.degToRad(this._perspective.fov/2))/r,this._set(o,a)}animateTo({position:t,target:e,zoom:n=1,overPole:s=!1},r=400){this._stopAnimation();let o={position:this.camera.position.clone(),target:this.target.clone()},a={position:t??o.position,target:e??o.target},l=this.camera.zoom,c=s?Ef(o,a,new I(0,1,0).applyQuaternion(this.camera.quaternion),this.camera.up):u=>wf(o,a,u),h=performance.now(),d=u=>{let p=Math.min((u-h)/r,1),g=p*p*(3-2*p),_=c(g);this.camera.isOrthographicCamera&&(this.camera.zoom=de.lerp(l,n,g)),this._set(_.position,_.target,_.up),this._animation=p<1?requestAnimationFrame(d):0};this._animation=requestAnimationFrame(d)}get animating(){return this._animation!==0}_stopAnimation(){cancelAnimationFrame(this._animation),this._animation=0}_set(t,e,n){if(this.camera.position.copy(t),this.target.copy(e),n){let s=this.camera.up.clone();this.camera.up.copy(n),this.camera.lookAt(e),this.camera.up.copy(s)}else this.camera.lookAt(e);this.resize()}_down(t){this._end(),this._stopAnimation(),this.dom.setPointerCapture(t.pointerId),t.preventDefault();let e=t.button===0&&t.shiftKey?"box":t.button===0&&this.leftButtonMode==="orbit"?"orbit":"pan",n={x:t.clientX,y:t.clientY},s=null;e==="orbit"&&(s=this.pick(n.x,n.y),s||(s=this._visibleBounds()?.sphere.center.clone()??this.target.clone())),this._drag={id:t.pointerId,button:t.button,mode:e,pivot:s,down:n,last:n,moved:!1}}_anchor(t,e){let n=this.pick(t,e);if(n)return n;let s=this.dom.getBoundingClientRect(),r=s.left+s.width/2,o=s.top+s.height/2;return t===r&&e===o?null:this.pick(r,o)}_gestureDepth(t,e){let n=this.camera,s=t?t.clone().sub(n.position).dot(e):0;return Math.max(Tf,n.position.distanceTo(this.target),s)}_move(t){let e=this._drag;if(!e||t.pointerId!==e.id)return;if(t.buttons===0)return this._end();let n={x:t.clientX,y:t.clientY};if(!e.moved&&yf(e.down,n))return;e.moved=!0;let s=n.x-e.last.x,r=n.y-e.last.y;if(e.last=n,e.mode==="box")this._drawRect(e.down,n);else if(e.mode==="orbit"){let o=bf(this.camera.position,this.target,e.pivot,s,r,Hv);this._set(o.position,o.target)}else this._pan(s,r)}_pan(t,e){let n=this.camera,s=Math.max(this.dom.clientHeight,1);if(n.isPerspectiveCamera&&this._drag.depth===void 0){let{x:c,y:h}=this._drag.down;this._drag.depth=this._gestureDepth(this._anchor(c,h),n.getWorldDirection(new I))}let r=n.isPerspectiveCamera?2*this._drag.depth*Math.tan(de.degToRad(n.fov/2))/(s*n.zoom):(n.top-n.bottom)/n.zoom/s,o=new I(1,0,0).applyQuaternion(n.quaternion),a=new I(0,1,0).applyQuaternion(n.quaternion),l=o.multiplyScalar(-t*r).addScaledVector(a,e*r);this._set(n.position.clone().add(l),this.target.clone().add(l))}_up(t){let e=this._drag;if(!e||t.pointerId!==e.id||t.button!==e.button)return;let n={x:t.clientX,y:t.clientY};if(this._end(),e.mode==="box"&&e.moved){let s={x:Math.min(e.down.x,n.x),y:Math.min(e.down.y,n.y),width:Math.abs(n.x-e.down.x),height:Math.abs(n.y-e.down.y)},r=mh(e.down.x,n.x);this.dispatchEvent(gh("boxselect",{rect:s,mode:r,ctrl:t.ctrlKey,shift:t.shiftKey}))}else!e.moved&&e.button===0?this.dispatchEvent(gh("click",{x:n.x,y:n.y,button:0,ctrl:t.ctrlKey,shift:t.shiftKey})):!e.moved&&e.button===2&&this.dispatchEvent(gh("contextmenu",{x:n.x,y:n.y}))}_lostCapture(t){this._drag&&t.buttons?this.dom.setPointerCapture(this._drag.id):this._end()}_end(){this._drag=null,this._overlay?.remove(),this._overlay=null}_drawRect(t,e){this._overlay||(this._overlay=document.createElement("div"),Object.assign(this._overlay.style,{position:"fixed",pointerEvents:"none",border:"1px solid #2563eb",background:"rgba(37,99,235,0.12)"}),(this.dom.parentElement??document.body).appendChild(this._overlay)),Object.assign(this._overlay.style,{borderStyle:mh(t.x,e.x)==="window"?"solid":"dashed",left:`${Math.min(t.x,e.x)}px`,top:`${Math.min(t.y,e.y)}px`,width:`${Math.abs(e.x-t.x)}px`,height:`${Math.abs(e.y-t.y)}px`})}_wheel(t){if(t.preventDefault(),t.deltaY===0)return;this._stopAnimation();let e=Sf(t.deltaY,t.deltaMode,this.dom.clientHeight),n=this.camera,s=n.position.distanceTo(this.target),r=this._visibleBounds()?.sphere.radius??0,o=Gv*Math.max(r,.001);if(n.isOrthographicCamera){let{left:_,top:m,width:f,height:M}=this.dom.getBoundingClientRect();if(!f||!M)return;let E=de.clamp(n.zoom/e,Math.max(1e-6,Math.min(n.zoom,s/o)),1e6);if(E===n.zoom)return;let v=new I((2*(t.clientX-_)/f-1)*n.right,(1-2*(t.clientY-m)/M)*n.top,0).multiplyScalar(1/n.zoom-1/E).applyQuaternion(n.quaternion);n.zoom=E,this._set(n.position.clone().add(v),this.target.clone().add(v));return}this._wheelPick||(this._wheelPick={point:this._anchor(t.clientX,t.clientY)},requestAnimationFrame(()=>this._wheelPick=null));let a=n.getWorldDirection(new I),l=this._gestureDepth(this._wheelPick.point,a);if(!Number.isFinite(l))return;let c=Math.min(_h,Math.max(Tf,r)),h=de.clamp(l*e,c,Math.max(l,o))/l;if(h===1)return;let d=n.position.clone().addScaledVector(a,l),u=this._wheelPick.point,p=u&&u.clone().sub(n.position).dot(a)>=c?u:d,g=Mf(n.position,d,p,h);this._set(g.position,g.target)}};function tt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}function Ke(i,t,e){let n=tt("button",i);return n.type="button",n.innerHTML=t,n.title=e,n.setAttribute("aria-label",e),n}function Ds(i){i.preventDefault(),i.stopPropagation()}function Qa(i){Ds(i);let t=i.button===2,e=()=>{window.removeEventListener("pointerup",n,!0),setTimeout(()=>{window.removeEventListener("click",Ds,!0),t&&window.removeEventListener("contextmenu",Ds,!0)})},n=s=>{Ds(s),e()};window.addEventListener("pointerup",n,!0),window.addEventListener("click",Ds,!0),t&&window.addEventListener("contextmenu",Ds,!0)}function Pr(i,t,e,n){let s=t.clone().applyMatrix4(e.matrixWorldInverse).z<0,r=t.clone().project(e);i.hidden=!(s&&Math.abs(r.x)<=1&&Math.abs(r.y)<=1),!i.hidden&&(i.style.left=`${n.left+(r.x+1)/2*n.width}px`,i.style.top=`${n.top+(1-r.y)/2*n.height}px`)}var ge=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Cf='<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',Jt={model:ge('<path d="M4 6h2M10 6h10M4 12h2M10 12h10M4 18h2M10 18h10"/>'),views:ge('<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>'),sections:ge('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),clashes:ge('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>'),bcf:ge('<path d="M4 4h16v13H9l-5 4z"/><path d="M8 8h8M8 12h5"/>'),timeliner:ge('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),links:ge('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),orbit:ge('<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>'),pan:ge('<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>'),fit:ge('<path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"/>'),projection:ge(Cf),plane:ge('<path d="M3 17l5-6h13l-5 6z"/><path d="M12 14V4M9 7l3-3 3 3"/>'),box:ge(`<g stroke-dasharray="3 2.5">${Cf}</g>`),resetSections:ge('<circle cx="12" cy="12" r="8"/><path d="M6.5 17.5l11-11"/>'),distance:ge('<path d="M3 16L16 3l5 5L8 21z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>'),displayMode:ge('<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>'),grids:ge('<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'),opacity:ge('<path d="M12 3l6 8a6 6 0 1 1-12 0z"/>'),fullscreen:ge('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),close:ge('<path d="M6 6l12 12M18 6L6 18"/>'),chevron:ge('<path d="M9 6l6 6-6 6"/>'),flip:ge('<path d="M4 12h16"/><path d="M9 8l3-4 3 4M9 16l3 4 3-4"/>'),remove:ge('<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13M9 7V4h6v3"/>'),play:ge('<path d="M7 4l13 8-13 8z"/>'),pause:ge('<path d="M8 4v16M16 4v16"/>'),home:ge('<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/>')};var Lr=new I(0,0,1),cn={right:new I(1,0,0),left:new I(-1,0,0),back:new I(0,1,0),front:new I(0,-1,0),top:new I(0,0,1),bottom:new I(0,0,-1)},Xv={right:Lr,left:Lr,back:Lr,front:Lr,top:cn.back,bottom:cn.front},Hi=.7,qv=de.degToRad(1),If=.01,Pf=96,tl=1.75;function Lf(i){let t=i.split("-"),e=new I;for(let n of t){if(!Object.hasOwn(cn,n))throw new RangeError(`Unknown view cube region: ${i}`);e.add(cn[n])}if(new Set(t).size!==t.length||e.lengthSq()!==t.length)throw new RangeError(`Unknown view cube region: ${i}`);return e.normalize()}function Yv(i){let t=[];return Math.abs(i.z)>=Hi&&t.push(i.z>0?"top":"bottom"),Math.abs(i.y)>=Hi&&t.push(i.y>0?"back":"front"),Math.abs(i.x)>=Hi&&t.push(i.x>0?"right":"left"),t.join("-")}function xh(i,t=qv){let e=i.clone().normalize(),n=Math.cos(t);return Object.keys(cn).find(s=>e.dot(cn[s])>=n)??null}function Df(i){let t=new I(i.x,i.y,0);if(t.lengthSq()<1e-24)return"front";t.normalize();let e=["front","right","back","left"],n=Math.max(...e.map(s=>t.dot(cn[s])));return e.find(s=>t.dot(cn[s])>=n-1e-9)}function vh(i,t){return cn[Df(t)].clone().multiplyScalar(Math.sin(If)).addScaledVector(cn[i],Math.cos(If))}function $v(i,t){let e=xh(i);if(!e)return null;let n=e==="top"||e==="bottom";if(t==="left"||t==="right")return(n?vh(e,i):Lf(e)).applyAxisAngle(Lr,t==="right"?Math.PI/2:-Math.PI/2);if(t!=="up"&&t!=="down")throw new RangeError(`Unknown arrow: ${t}`);if(!n)return vh(t==="up"?"top":"bottom",i);let s=cn[Df(i)];return t==="up"==(e==="top")?s.clone().negate():s.clone()}function Zv(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle="#2a2f38",n.fillRect(0,0,128,128),n.fillStyle="#cbd5e1",n.textAlign="center",n.textBaseline="middle",n.font=`600 26px ${t}`;let s=n.measureText(i).width;s>112&&(n.font=`600 ${Math.floor(2912/s)}px ${t}`),n.fillText(i,64,64);let r=new tr(e);return r.colorSpace=Ie,r}var el=class{constructor(t,e,n){this.controls=n,this.home={position:e.position.clone(),target:n.target.clone()},this.element=tt("div","ioviewer-viewcube"),this.canvas=tt("canvas","ioviewer-viewcube-canvas"),this.canvas.title=it("cube.title"),this.canvas.setAttribute("aria-label",it("cube.title")),this.element.append(this.canvas),this.error=null,this.renderer=this._createRenderer(),this.scene=new Ri,this.camera=new Bn(-tl,tl,tl,-tl,.1,10),this.faces=new Se;let s=getComputedStyle(t).fontFamily;for(let[l,c]of Object.entries(cn)){let h=it(`face.${l}`),d=new ye(new yn(2,2),new en({map:Zv(h,s)})),u=Xv[l];d.quaternion.setFromRotationMatrix(new Ht().makeBasis(u.clone().cross(c),u,c)),d.position.copy(c),d.name=l,d.userData.label=h,this.faces.add(d)}let r=new vn(new Li(new dn(2,2,2)),new an({color:"#5b6575"}));this.highlight=new ye(new dn(1,1,1),new en({color:"#2563eb",transparent:!0,opacity:.6})),this.highlight.visible=!1,this.scene.add(this.faces,r,this.highlight),this._raycaster=new Di,this.hovered=null,this._pointer=null,this.element.addEventListener("contextmenu",l=>l.preventDefault());let o=l=>{this._pointer=[l.clientX,l.clientY],this._hover(this.regionAtClient(...this._pointer))&&this._render()};this.canvas.addEventListener("pointerenter",o),this.canvas.addEventListener("pointermove",o),this.canvas.addEventListener("pointerleave",()=>{this._pointer=null,this._hover(null)&&this._render()}),this.canvas.addEventListener("click",l=>{let c=this.regionAtClient(l.clientX,l.clientY);if(!c)return;let h=c==="top"||c==="bottom";this._look(h?vh(c,n.camera.position.clone().sub(n.target)):Lf(c))}),this.arrows=["up","down","left","right"].map(l=>{let c=Ke("ioviewer-viewcube-arrow",Jt.chevron,it(`cube.${l}`));return c.dataset.arrow=l,c.addEventListener("click",h=>{h.detail&&c.blur(),this._arrow(l)}),c});let a=Ke("ioviewer-viewcube-home",Jt.home,it("cube.home"));a.addEventListener("click",l=>{l.detail&&a.blur(),n.resetCameraStyle(),n.animateTo({position:this.home.position.clone(),target:this.home.target.clone()})}),this.element.append(...this.arrows,a),t.append(this.element),this.update()}_createRenderer(){this.canvas.addEventListener("webglcontextlost",e=>{e.stopImmediatePropagation(),this._fail(new Error("The view cube lost its WebGL context."))});let t=this.canvas.getContext("webgl2",{alpha:!0,antialias:!0});if(!t)return this._fail(new Error("WebGL 2 is not available for the view cube."));try{let e=new Rs({canvas:this.canvas,context:t,alpha:!0,antialias:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(Pf,Pf),e}catch(e){return this._fail(e)}}_fail(t){return this.error=t,this.renderer=null,this.element.hidden=!0,null}_render(){if(this.renderer)try{this.renderer.render(this.scene,this.camera)}catch(t){this._fail(t)}}update(){if(!this.renderer)return;let t=this.controls.camera,e=!this.camera.quaternion.equals(t.quaternion);this.camera.quaternion.copy(t.quaternion),this.camera.position.set(0,0,5).applyQuaternion(t.quaternion),this.camera.updateMatrixWorld();let n=xh(t.position.clone().sub(this.controls.target))!==null;for(let s of this.arrows)s.hidden=!n;e&&this._pointer&&this._hover(this.regionAtClient(...this._pointer)),this._render()}regionAtClient(t,e){let n=this.canvas.getBoundingClientRect(),s=new Gt((t-n.left)/n.width*2-1,1-(e-n.top)/n.height*2);this._raycaster.setFromCamera(s,this.camera);let r=this._raycaster.intersectObjects(this.faces.children)[0];return r?Yv(r.point):null}_hover(t){if(t===this.hovered)return!1;if(this.hovered=t,this.highlight.visible=!!t,t){let e=t.split("-").reduce((a,l)=>a.add(cn[l]),new I),n=a=>a===0?[-Hi,Hi]:a>0?[Hi,1.02]:[-1.02,-Hi],[s,r,o]=e.toArray().map(n);this.highlight.scale.set(s[1]-s[0],r[1]-r[0],o[1]-o[0]),this.highlight.position.set((s[0]+s[1])/2,(r[0]+r[1])/2,(o[0]+o[1])/2)}return!0}_arrow(t){let n=this.controls.camera.position.clone().sub(this.controls.target),s=$v(n,t);if(!s)return;let r=xh(n),o=r==="top"&&t==="up"||r==="bottom"&&t==="down";this._look(s,o)}_look(t,e=!1){let{controls:n}=this,s=n.camera.position.distanceTo(n.target);n.animateTo({position:t.clone().multiplyScalar(s).add(n.target),target:n.target.clone(),zoom:n.camera.zoom,overPole:e})}};var Jv=`
#include <common>
${Er}
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
void main() {
  ${Tr}
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
}`,Kv=`
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
}`,Nf=i=>i&&{element:i.element,point:i.point.clone()};function yh(i,t){let e=new He({vertexShader:Jv,fragmentShader:Kv,uniforms:i,defines:t?{[t]:""}:{},side:Le,clipping:!0});return e.index0AttributeName="q",e}var nl=class{constructor(t,e,n,s={}){this.renderer=t,this.scene=e,this.camera=n,this._lost=!1,t.domElement.addEventListener("webglcontextlost",()=>this._lost=!0),this._last=null,this._lastTile=null,this._key=new Float64Array(36),e.root.addEventListener("change",o=>{o.detail.kind!=="appearance"&&(this._last=this._lastTile=null)});let r=e.slotUniforms;this._float=s.pickFloat!==!1&&t.extensions.has("EXT_color_buffer_float"),this._float?(this._material=yh(r,null),this._target=new Be(1,1,{type:Ge}),this._pixel=new Float32Array(4)):(this._material=yh(r,"IO_PICK_RGBA8"),this._depthMaterial=yh(r,"IO_PICK_DEPTH"),this._target=new Be(1,1),this._pixel=new Uint8Array(4))}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=Math.floor(t-n.left),r=Math.floor(e-n.top);if(this._lost||!(s>=0&&r>=0&&s<n.width&&r<n.height))return null;let o=this._sampleKey(s,r,n),a=this.camera,l=this._last;if(l&&l.camera===a&&l.key.every((h,d)=>h===o[d]))return Nf(l.hit);let c=this._pick(s,r,n);return this._last={camera:a,key:o.slice(),hit:c},Nf(c)}_sampleKey(t,e,n){this.camera.updateMatrixWorld();let s=this._key;return s.set([t,e,n.width,n.height]),s.set(this.camera.matrixWorld.elements,4),s.set(this.camera.projectionMatrix.elements,20),s}measureTile(t,e,n){let s=this.renderer.domElement.getBoundingClientRect(),r=Math.floor(t-s.left),o=Math.floor(e-s.top);if(this._lost||!(r>=0&&o>=0&&r<s.width&&o<s.height))return null;let a=this._sampleKey(r,o,s),l=this.camera,c=this._lastTile;if(c&&c.camera===l&&c.radius===n&&c.key.every((y,S)=>y===a[S]))return c.tile;let h=n*2+1;(!this._measure||this._measure.target.width!==h)&&(this._measure?.target.dispose(),this._measure={target:new Be(h,h,this._float?{type:Ge}:{}),ids:this._float?new Float32Array(h*h*4):new Uint8Array(h*h*4),depths:this._float?null:new Uint8Array(h*h*4)});let{target:d,ids:u,depths:p}=this._measure,g=r-n,_=o-n;this._render(this._material,g,_,s,d,u);let m=(y,S)=>{let A=Math.floor(y)-g,x=Math.floor(S)-_;return A>=0&&A<h&&x>=0&&x<h?(h-1-x)*h+A:-1},f=this._float?null:new DataView(u.buffer),M=y=>(this._float?Math.round(u[y*4+3]):f.getUint32(y*4,!0))-1,E=M(m(r,o)),v=null;if(E>=0){p&&this._render(this._depthMaterial,g,_,s,d,p);let y=p&&new DataView(p.buffer),S=l.matrixWorldInverse.elements.slice(),A=U=>{if(y)return y.getFloat32(U*4,!0);let C=U*4;return-(S[2]*u[C]+S[6]*u[C+1]+S[10]*u[C+2]+S[14])},x=m(r,o),T=this._float?new I().fromArray(u,x*4):this._depthPoint(r,o,s,A(x)),R=new Set([E]),L=this.scene.slotElement(E);if(L>=0)for(let U=0;U<h*h;U++){let C=M(U);C>=0&&!R.has(C)&&this.scene.slotElement(C)===L&&R.add(C)}let N=l.isPerspectiveCamera;v={rect:s,point:T,element:L,slots:R,depthAt(U,C,F){let G=m(U,C),q=G<0?-1:M(G);if(q<0)return 1/0;if(q!==F)return A(G);let k=H=>N?1/A(H):A(H),D=k(G);function B(H,j,at){let ct=Math.sign(at),lt=m(U+ct*H,C+ct*j);if(lt>=0&&M(lt)===q)return(k(lt)-D)*Math.abs(at);let Y=m(U-ct*H,C-ct*j);return Y>=0&&M(Y)===q?(D-k(Y))*Math.abs(at):0}let X=D+B(1,0,U-Math.floor(U)-.5)+B(0,1,C-Math.floor(C)-.5);return X>0?N?1/X:X:A(G)}}}return this._lastTile={camera:l,key:a.slice(),radius:n,tile:v},this._last={camera:l,key:this._lastTile.key,hit:v},v}_pick(t,e,n){let s=this._render(this._material,t,e,n),r=(this._float?Math.round(s[3]):new Uint32Array(s.buffer)[0])-1;if(r<0)return null;let o=this.scene.slotElement(r);if(this._float)return{element:o,point:new I(s[0],s[1],s[2])};let a=this._render(this._depthMaterial,t,e,n);return{element:o,point:this._depthPoint(t,e,n,new DataView(a.buffer).getFloat32(0,!0))}}_depthPoint(t,e,n,s){let r=this.camera,o=new I((t+.5)/n.width*2-1,1-(e+.5)/n.height*2,-1).applyMatrix4(r.projectionMatrixInverse);return r.isPerspectiveCamera?o.multiplyScalar(-s/o.z):o.z=-s,o.applyMatrix4(r.matrixWorld)}_render(t,e,n,s,r=this._target,o=this._pixel){let{renderer:a,camera:l}=this,c={target:a.getRenderTarget(),color:a.getClearColor(new Bt),alpha:a.getClearAlpha()},h=this.scene._buckets[0]?.material;t.clippingPlanes=h?.clippingPlanes??null,t.clipIntersection=h?.clipIntersection??!1,l.updateMatrixWorld(),l.setViewOffset(s.width,s.height,e,n,r.width,r.height);try{a.setRenderTarget(r),a.setClearColor(0,0),this.scene.withMaterial(t,()=>a.render(this.scene.root,l),{pickCamera:l}),a.readRenderTargetPixels(r,0,0,r.width,r.height,o)}finally{a.setRenderTarget(c.target),a.setClearColor(c.color,c.alpha),l.clearViewOffset()}return o}};var il=33.333333333333336,jv=200,Uf=1e6,Qv=20,sl=class{constructor(t,e,n=1e7){this.scene=t,this.budget=n,this.minPixels=0,this._requestRender=e,this._last=new Float64Array(32),this._seen=!1,this._requestedAt=null,this._frame=null,this._cost=0,this._fastFrames=0,this._refine=!1,this._settle=0}requested(t){this._requestedAt??(this._requestedAt=t)}begin(t,e,n){t.updateMatrixWorld();let s=this._requestedAt===null?0:Math.max(n-this._requestedAt,0);this._requestedAt=null;let r=this._moved(t);this._frame=r?{start:n,waited:s}:null,this.minPixels=r?this.scene.detailThreshold(t,e,this.budget,this._refine):0,r||(this._fastFrames=0),this.scene.setDetail(this.minPixels,e),r&&(clearTimeout(this._settle),this.minPixels>0&&(this._settle=setTimeout(this._requestRender,jv)))}end(t){this.scene.setDetail(0),this._frame&&this._adapt(this._frame.waited+(t-this._frame.start)),this._frame=null}_adapt(t){this._cost=this._cost?this._cost*.8+t*.2:t,t>il*1.1?(this._refine=!1,this._fastFrames=0):this._refine||(this._fastFrames=this.minPixels>0&&t<il*.7?this._fastFrames+1:0,this._refine=this._fastFrames>=Qv),this._cost>il*1.1?this.budget=Math.max(this.budget*.9,Uf):this._cost<il*.7&&this.minPixels>0&&(this.budget=Math.max(Math.min(this.budget*1.05,this.scene.visibleCost),Uf))}_moved(t){let e=this._last,n=[...t.matrixWorld.elements,...t.projectionMatrix.elements],s=(o,a)=>a!==26&&a!==30&&Math.abs(o-e[a])>1e-9*Math.max(1,Math.abs(o)),r=this._seen&&n.some(s);return this._seen=!0,e.set(n),r}};var Tn,Ns,rl,ol=class extends EventTarget{constructor(){super(...arguments);Sl(this,Ns);Sl(this,Tn,new Set)}get size(){return si(this,Tn).size}has(e){return si(this,Tn).has(e)}values(){return si(this,Tn).values()}set(e){Yh(this,Tn,new Set(e)),kr(this,Ns,rl).call(this)}toggle(e){si(this,Tn).delete(e)||si(this,Tn).add(e),kr(this,Ns,rl).call(this)}clear(){si(this,Tn).size!==0&&(si(this,Tn).clear(),kr(this,Ns,rl).call(this))}};Tn=new WeakMap,Ns=new WeakSet,rl=function(){this.dispatchEvent(new Event("change"))};function Ff(i,t,e){if(t!=="window"&&t!=="crossing")throw new RangeError(`Unknown box select mode: ${t}`);let n=i.x+i.width,s=i.y+i.height,r=t==="window"?o=>o.minX>=i.x&&o.maxX<=n&&o.minY>=i.y&&o.maxY<=s:o=>o.maxX>=i.x&&o.minX<=n&&o.maxY>=i.y&&o.minY<=s;return e.filter(r).map(o=>o.index)}function Bf(i,t,e){let n=new Ht().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).elements,{left:s,top:r,width:o,height:a}=e,l=new te,c=[];for(let h=0;h<i.elementCount;h++){if(!i.isVisible(h))continue;let{min:d,max:u}=i.elementBox(h,l),p=1/0,g=1/0,_=-1/0,m=-1/0,f=!0;for(let M=0;M<8&&f;M++){let E=M&1?u.x:d.x,v=M&2?u.y:d.y,y=M&4?u.z:d.z,S=1/(n[3]*E+n[7]*v+n[11]*y+n[15]);f=Math.abs((n[2]*E+n[6]*v+n[10]*y+n[14])*S)<=1;let A=s+((n[0]*E+n[4]*v+n[8]*y+n[12])*S+1)/2*o,x=r+(1-(n[1]*E+n[5]*v+n[9]*y+n[13])*S)/2*a;p=Math.min(p,A),_=Math.max(_,A),g=Math.min(g,x),m=Math.max(m,x)}f&&c.push({index:h,minX:p,minY:g,maxX:_,maxY:m})}return c}var Of=["model","views","sections","clashes","bcf","timeliner","links"];function zf(i){let t=tt("nav","ioviewer-rail ioviewer-floating");t.setAttribute("aria-label",it("panels")),i.append(t);let e=new Map,n=null;function s(l){let c=e.get(l);if(!c)throw new RangeError(`Unknown panel: ${l}`);return c}function r(l){let{button:c,panel:h,onClose:d}=s(l);n===l&&(h.hidden=!0,c.classList.remove("active"),c.setAttribute("aria-expanded","false"),n=null,d?.())}function o(l){let{button:c,panel:h}=s(l);c.hidden||n===l||(n&&r(n),h.hidden=!1,c.classList.add("active"),c.setAttribute("aria-expanded","true"),n=l)}function a(l,{icon:c,title:h,render:d,visible:u=!0,onClose:p}){let g=Of.indexOf(l);if(g<0)throw new RangeError(`Unknown panel: ${l}`);if(e.has(l))throw new Error(`Panel ${l} is already registered.`);let _=Ke("ioviewer-rail-button",c,h);_.dataset.panel=l,_.hidden=!u,_.setAttribute("aria-expanded","false"),_.addEventListener("click",()=>n===l?r(l):o(l));let m=[...t.children].find(y=>Of.indexOf(y.dataset.panel)>g);t.insertBefore(_,m??null);let f=tt("section","ioviewer-side-panel ioviewer-floating");f.dataset.panel=l,f.hidden=!0,f.setAttribute("aria-label",h);let M=Ke("ioviewer-panel-close",Jt.close,it("close"));M.addEventListener("click",()=>r(l));let E=tt("header","ioviewer-panel-header");E.append(tt("h2","",h),M);let v=tt("div","ioviewer-panel-body");f.append(E,v),i.append(f),e.set(l,{button:_,panel:f,onClose:p}),d(v)}return{rail:t,openPanel:o,closePanel:r,registerPanel:a}}var kf=[{id:"navigation",items:["orbit","pan","fit","projection"]},{id:"sections",items:["plane","box","resetSections"]},{id:"measure",items:["distance"]},{id:"display",items:["displayMode","grids","opacity"]},{id:"view",items:["fullscreen"]}];function Hf(i,t){let e=tt("div","ioviewer-toolbar ioviewer-floating");e.setAttribute("role","toolbar");let n=new Map;for(let a of t){let l=tt("div","ioviewer-toolbar-group");l.setAttribute("role","group"),l.setAttribute("aria-label",it(`group.${a.id}`));let c=tt("div","ioviewer-toolbar-row");for(let h of a.items){let d=Ke("ioviewer-tool",Jt[h],it(`tool.${h}`));d.dataset.tool=h,d.setAttribute("aria-disabled","true");let u={button:d,handler:null};d.addEventListener("click",()=>{d.getAttribute("aria-disabled")!=="true"&&u.handler?.()}),n.set(h,u),c.append(d)}l.append(c,tt("div","ioviewer-toolbar-label",it(`group.${a.id}`))),e.append(l)}i.append(e),new ResizeObserver(()=>i.style.setProperty("--toolbar-height",`${e.offsetHeight}px`)).observe(e);function r(a){let l=n.get(a);if(!l)throw new RangeError(`Unknown tool: ${a}`);return l}function o(a,l){r(a).button.setAttribute("aria-disabled",String(!l))}return{element:e,setHandler(a,l){r(a).handler=l,o(a,!0)},setEnabled:o,setActive(a,l){let{button:c}=r(a);c.classList.toggle("active",l),c.setAttribute("aria-pressed",String(l))}}}var ty="input, textarea, select, [contenteditable]";function bh(i){return i.key==="ContextMenu"||i.code==="ContextMenu"||i.shiftKey&&(i.key==="F10"||i.code==="F10")}function Vf(i){if(i.ctrlKey||i.altKey||i.metaKey||i.repeat||i.target?.closest?.(ty))return null;if(bh(i))return"contextMenu";switch(i.code){case"KeyH":return i.shiftKey?"showAll":"hide";case"KeyI":return i.shiftKey?null:"isolate";case"KeyF":return i.shiftKey?null:"zoomTo";case"Escape":return"escape";default:return null}}function Gf(i,t,e,n,s){let r=tt("details","ioviewer-tree-filters");r.hidden=i.length===0;let o=tt("summary","",it("filters.title")),a=tt("div","ioviewer-filter-fields"),l=new Map(t.map(({id:y,name:S})=>[y,S||`#${y}`])),c=y=>y.modelId??t[0]?.id??null,h=y=>y.levelId??(y.level||null),d=y=>y.category??"",u=[{name:it("filters.model"),key:c,labels:new Map},{name:it("level"),key:h,labels:new Map},{name:it("category"),key:d,labels:new Map}],[p,g,_]=u,m=tt("div","ioviewer-filter-actions"),f=tt("button","ioviewer-text-button",it("filters.clear"));f.type="button",f.addEventListener("click",()=>{for(let y of u)y.select&&(y.select.selectedIndex=0);e.value="",n(),e.focus()});let M=tt("button","ioviewer-text-button",it("filters.isolate"));M.type="button",M.addEventListener("click",s),m.append(f,M),r.append(o,a,m);function E(){if(r.open){r.removeEventListener("toggle",E);for(let y of i){let S=c(y),A=l.get(S)??(S==null?"":`#${S}`);S!=null&&p.labels.set(S,A);let x=h(y);if(!g.labels.has(x)){let R=y.level||(x==null?it("filters.noLevel"):`#${x}`);g.labels.set(x,x!=null&&t.length>1&&A?`${R} \xB7 ${A}`:R)}let T=d(y);_.labels.set(T,T||it("noCategory"))}for(let y of u){if(!y.labels.size)continue;let S=new Map;for(let R of y.labels.values())S.set(R,(S.get(R)??0)+1);let A=[...y.labels].map(([R,L])=>[R,S.get(L)>1?`${L} (#${R})`:L]);A.sort((R,L)=>R[1].localeCompare(L[1])),y.keys=A.map(([R])=>R);let x=y.select=tt("select");x.append(new Option(it("filters.all"),""));for(let[R,[,L]]of A.entries())x.append(new Option(L,String(R+1)));x.addEventListener("change",n);let T=tt("label","ioviewer-filter-field");T.append(tt("span","",y.name),x),a.append(T)}}}r.addEventListener("toggle",E);function v(){return u.filter(y=>y.select?.selectedIndex>0)}return{element:r,predicate(){let y=v().map(({select:S,keys:A,key:x})=>({key:x,value:A[S.selectedIndex-1]}));return y.length?S=>y.every(({key:A,value:x})=>A(S)===x):null},update(y,S){let A=v().length;o.textContent=A?`${it("filters.title")} (${A})`:it("filters.title"),f.disabled=!A&&!y,M.disabled=!S}}}var yi=24,ey=8;function Mh(i,t,e,n,s){let r=Math.min(n,Math.max(0,Math.floor(i/t)-s)),o=Math.min(n,Math.ceil((i+e)/t)+s);return{start:r,end:Math.max(r,o)}}function ny(i){let t=null;return e=>{let n=e.trim().toLowerCase();t??(t=i.map(r=>`${r.name??""}
${r.type??""}
${r.id}
${r.sourceId??""}`.toLowerCase()));let s=[];for(let r=0;r<t.length;r++)t[r].includes(n)&&s.push(r);return s}}function iy(i){let t=new Map;return i.forEach((e,n)=>{let s=e.category??"";t.has(s)||t.set(s,[]),t.get(s).push(n)}),[...t].map(([e,n])=>({name:e,indices:n})).sort((e,n)=>e.name.localeCompare(n.name))}function Wf(i,{elements:t,models:e,selection:n,scene:s,zoomToElement:r,openContextMenu:o}){let a=iy(t),l=new Int32Array(t.length);a.forEach((H,j)=>H.indices.forEach(at=>l[at]=j));let c=new Uint8Array(a.length),h=new Int32Array(a.length),d=new Uint32Array(a.length),u=ny(t),p="",g=!1,_=new Int32Array(0),m=0,f=-1,M=null,E=!1,v=tt("input","ioviewer-tree-search");v.type="search",v.placeholder=it("searchPlaceholder"),v.setAttribute("aria-label",it("searchPlaceholder"));let y=tt("div","ioviewer-tree");y.setAttribute("role","tree"),y.setAttribute("aria-label",it("panel.model")),y.setAttribute("aria-multiselectable","true"),y.tabIndex=-1;let S=tt("div","ioviewer-tree-spacer");S.setAttribute("role","presentation"),y.append(S);let A=tt("div","ioviewer-tree-empty",it("noMatches")),x=Gf(t,e,v,D,()=>s.isolate(_));i.append(x.element,v,y,A);function T(){let H=_[m],j=x.predicate();if(g=!!(p||j),g){let ct=p?u(p):t.keys();if(j){let lt=[];for(let Y of ct)j(t[Y])&&lt.push(Y);_=Int32Array.from(lt)}else _=Int32Array.from(ct)}else{let ct=a.length;a.forEach((Y,Q)=>c[Q]&&(ct+=Y.indices.length)),_=new Int32Array(ct);let lt=0;a.forEach((Y,Q)=>{if(h[Q]=lt,_[lt++]=-(Q+1),c[Q])for(let xt of Y.indices)_[lt++]=xt})}let at=_.indexOf(H);m=at>=0?at:0,S.style.height=`${_.length*yi}px`,A.hidden=_.length>0||!g,x.update(p,!!s.isolate&&g&&_.some(ct=>s.instancesOf(ct).length>0)),R()}function R(H=y.contains(document.activeElement)){let j=y.clientHeight;if(j===0||_.length===0){S.replaceChildren();return}let at=y.scrollTop,{start:ct,end:lt}=Mh(at,yi,j,_.length,ey);!H&&(m<ct||m>=lt)&&(m=Math.min(_.length-1,Math.floor(at/yi)));let Y=[];m<ct&&Y.push(L(m));for(let Q=ct;Q<lt;Q++)Y.push(L(Q));m>=lt&&Y.push(L(m)),S.replaceChildren(...Y),H&&S.querySelector('[tabindex="0"]')?.focus({preventScroll:!0})}function L(H){let j=_[H],at=j<0?-j-1:l[j],ct=j<0?d[at]===a[at].indices.length:n.has(j),lt=tt("div","tree-row");if(lt.style.top=`${H*yi}px`,lt.style.height=`${yi}px`,lt.dataset.row=H,lt.tabIndex=H===m?0:-1,lt.setAttribute("role","treeitem"),lt.classList.toggle("selected",ct),lt.setAttribute("aria-selected",String(ct)),j<0){lt.classList.add("tree-category"),lt.setAttribute("aria-level","1"),lt.setAttribute("aria-posinset",String(at+1)),lt.setAttribute("aria-setsize",String(a.length)),lt.setAttribute("aria-expanded",String(!!c[at]));let Y=tt("span","tree-chevron");Y.innerHTML=Jt.chevron;let{name:Q,indices:xt}=a[at];lt.append(Y,tt("span","tree-name",Q||it("noCategory")),tt("span","tree-count",Ir(xt.length)))}else{let Y=t[j];lt.classList.add("tree-element"),lt.setAttribute("aria-level",g?"1":"2"),lt.setAttribute("aria-posinset",String(g?H+1:H-h[at])),lt.setAttribute("aria-setsize",String(g?_.length:a[at].indices.length)),lt.classList.toggle("tree-child",!g),lt.classList.toggle("tree-hidden",s.isVisible?.(j)===!1),lt.append(tt("span","tree-name",Y.name||`#${Y.id}`),tt("span","tree-type",Y.type??""))}return lt}function N(H){let j=y.clientHeight;if(j===0){f=H;return}let at=H*yi;at<y.scrollTop?y.scrollTop=at:at+yi>y.scrollTop+j&&(y.scrollTop=at+yi-j)}function U(H){m=H,N(H),R(!0)}function C(H){let j=l[H];!g&&!c[j]&&(c[j]=1,T());let at=_.indexOf(H);at>=0&&(y.contains(document.activeElement)||(m=at),N(at)),R()}function F(H){E=!0;try{n.set(H)}finally{E=!1}}function G(H,j){let at=_.indexOf(M);at<0&&(at=H,M=_[H]);let ct=_.subarray(Math.min(at,H),Math.max(at,H)+1).filter(lt=>lt>=0);ct.length>0&&F(j?[...n.values(),...ct]:ct)}function q(H){M=H;let j=-H-1,at=H<0?a[j].indices:[H],ct=H<0?d[j]===at.length:n.has(H),lt=new Set(n.values());for(let Y of at)ct?lt.delete(Y):lt.add(Y);F(lt)}function k(H,j,at){H>=0&&!n.has(H)&&(M=H,F([H]));let ct=H>=0?H:n.values().next().value??null;o(j,at,ct,()=>{let lt=_.indexOf(H);lt>=0?U(lt):v.focus()})}v.addEventListener("focus",()=>{S.firstElementChild||X()});function D(){p=v.value.trim(),y.scrollTop=0,f=-1,m=-1,T()}v.addEventListener("input",D),y.addEventListener("scroll",()=>R()),y.addEventListener("focusin",H=>{let j=H.target.closest(".tree-row");!j||j.tabIndex===0||(S.querySelector('[tabindex="0"]')?.setAttribute("tabindex","-1"),m=Number(j.dataset.row),j.tabIndex=0)}),y.addEventListener("keydown",H=>{let j=H.target.closest(".tree-row");if(!j||H.ctrlKey||H.altKey||H.metaKey)return;let at=Number(j.dataset.row),ct=_[at];if(bh(H)){if(H.preventDefault(),!H.repeat){let{left:Y,bottom:Q}=j.getBoundingClientRect();k(ct,Y,Q)}return}if(H.key===" "){H.preventDefault(),H.repeat||(H.shiftKey?G(at,!1):q(ct));return}if(H.shiftKey)return;let lt=at;switch(H.key){case"ArrowUp":lt=Math.max(0,at-1);break;case"ArrowDown":lt=Math.min(_.length-1,at+1);break;case"Home":lt=0;break;case"End":lt=_.length-1;break;case"ArrowRight":ct<0&&(c[-ct-1]?lt=at+1:(c[-ct-1]=1,T()));break;case"ArrowLeft":ct>=0&&!g?lt=h[l[ct]]:ct<0&&c[-ct-1]&&(c[-ct-1]=0,T());break;case"Enter":H.repeat||B(ct);break;default:return}H.preventDefault(),lt!==at&&U(lt)});function B(H){if(H>=0){M=H,F([H]),r(H);return}c[-H-1]^=1,T()}y.addEventListener("click",H=>{let j=H.target.closest(".tree-row");if(!j)return;let at=Number(j.dataset.row),ct=H.ctrlKey||H.metaKey;H.shiftKey?G(at,ct):ct?q(_[at]):B(_[at])}),y.addEventListener("contextmenu",H=>{let j=H.target.closest(".tree-row");j&&(H.preventDefault(),k(_[Number(j.dataset.row)],H.clientX,H.clientY))});function X(){f>=0&&y.clientHeight>0&&(N(f),f=-1),R()}new ResizeObserver(X).observe(y),n.addEventListener("change",()=>{let H=-1;d.fill(0);for(let j of n.values())d[l[j]]++,H=j;if(E){R();return}M=null,H>=0?C(H):R()}),s.root?.addEventListener("change",H=>H.detail.kind==="visibility"&&R()),T()}var Xf={element:["properties","hide","isolate","showAll","-","zoomTo","sectionBox","-","copyId"],empty:["showAll","fitAll","resetSections"]},sy={hide:"H",isolate:"I",showAll:"Shift+H",zoomTo:"F"},al=4;function qf(i){let t=tt("div","ioviewer-context-menu");t.setAttribute("role","menu"),t.setAttribute("aria-label",it("contextMenu")),t.hidden=!0,i.append(t);let e=new Map(Object.values(Xf).flat().filter(c=>c!=="-").map(c=>[c,{enabled:!1,handler:null}])),n=null;function s(){if(t.hidden)return;let c=t.contains(document.activeElement)?n:null;n=null,t.hidden=!0,t.replaceChildren(),window.removeEventListener("pointerdown",o,!0),window.removeEventListener("wheel",s,!0),window.removeEventListener("scroll",r,!0),window.removeEventListener("resize",s),c?.()}function r(c){i.contains(c.target)||s()}function o(c){t.contains(c.target)||(s(),Qa(c))}function a(c,h,d,u,p=null){let g=Xf[c];if(!g)throw new RangeError(`Unknown menu: ${c}`);s(),n=p;for(let f of g){if(f==="-"){let v=tt("div","ioviewer-menu-separator");v.setAttribute("role","separator"),t.append(v);continue}let M=e.get(f),E=tt("button","ioviewer-menu-item");E.type="button",E.tabIndex=-1,E.dataset.item=f,E.setAttribute("role","menuitem"),E.setAttribute("aria-disabled",String(!M.enabled)),M.enabled||(E.title=it("menu.unavailable")),E.append(tt("span","",it(`menu.${f}`)),tt("kbd","",sy[f]??"")),E.addEventListener("click",()=>{M.enabled&&(s(),M.handler(u))}),t.append(E)}t.hidden=!1;let{width:_,height:m}=t.getBoundingClientRect();t.style.left=`${Math.max(al,Math.min(h,innerWidth-_-al))}px`,t.style.top=`${Math.max(al,Math.min(d,innerHeight-m-al))}px`,window.addEventListener("pointerdown",o,!0),window.addEventListener("wheel",s,!0),window.addEventListener("scroll",r,!0),window.addEventListener("resize",s),p&&t.querySelector("button")?.focus({preventScroll:!0})}t.addEventListener("keydown",c=>{if(c.key==="Tab"){s();return}if(c.key==="Escape"){c.preventDefault(),s();return}let h=[...t.querySelectorAll("button")],d=h.indexOf(document.activeElement),u;switch(c.key){case"ArrowDown":u=(d+1)%h.length;break;case"ArrowUp":u=(d+h.length-1)%h.length;break;case"Home":u=0;break;case"End":u=h.length-1;break;default:return}c.preventDefault(),h[u]?.focus({preventScroll:!0})});function l(c,{enabled:h=!0,handler:d}){let u=e.get(c);if(!u)throw new RangeError(`Unknown menu item: ${c}`);d&&(u.handler=d),u.enabled=h&&!!u.handler}return{element:t,open:a,close:s,setItem:l,get isOpen(){return!t.hidden}}}var ry=1600;function Yf(i,t,e){let n=()=>i.textContent=`${it("selected")}: ${Ir(t.size)} \xB7 ${it("elements")}: ${Ir(e)}`;t.addEventListener("change",n),n()}function $f(i,t){if(!t)return;let e=tt("div","ioviewer-banner ioviewer-floating");e.setAttribute("role","status");let n=it("truncated").replace("{meshes}",t.meshes).replace("{total}",t.totalMeshes),s=Ke("ioviewer-panel-close",Jt.close,it("close")),r=new ResizeObserver(()=>i.style.setProperty("--banner-height",`${e.offsetHeight}px`));s.addEventListener("click",()=>{r.disconnect(),i.style.removeProperty("--banner-height"),e.remove()}),e.append(tt("span","",n),s),i.append(e),r.observe(e)}function Us(i,t){let e=tt("div","ioviewer-toast",t);e.setAttribute("role","status"),i.append(e),setTimeout(()=>e.remove(),ry)}function Zf(i,t){let e=tt("table");for(let[s,r]of t)e.insertRow().append(tt("th","",s),tt("td","",String(r??"")));let n=tt("section");return n.append(tt("h3","",i),e),n}function Jf(i,t,e){let n=tt("h2","ioviewer-properties-title"),s=tt("button","ioviewer-properties-close","\xD7");s.type="button",s.title=it("close"),s.setAttribute("aria-label",it("close")),s.addEventListener("click",()=>t.clear());let r=tt("header");r.append(n,s);let o=tt("div","ioviewer-properties-body");i.replaceChildren(r,o),i.hidden=!0;let a=h=>{let d=[[it("id"),h.id],[it("category"),h.category],[it("type"),h.type],[it("level"),h.level]];return h.sourceId&&d.push([it("sourceId"),h.sourceId]),h.link&&d.push([it("link"),h.link]),Zf(it("elementGroup"),d)},l=h=>{for(let[d,u]of Object.entries(h??{}))o.append(Zf(d,Object.entries(u)))},c;t.addEventListener("change",()=>{if(c?.abort(),c=void 0,o.removeAttribute("aria-busy"),i.hidden=t.size===0,o.replaceChildren(),t.size!==1){n.textContent=`${it("selected")}: ${t.size}`;return}let[h]=t.values(),d=e.meta.elements[h];if(n.textContent=d.name||`#${d.id}`,o.append(a(d)),!e.loadProperties){l(e.props(d.id));return}let u=new AbortController;c=u,o.setAttribute("aria-busy","true"),e.loadProperties(h,u.signal).then(p=>{u.signal.aborted||!p||(n.textContent=p.name||d.name||`#${d.id}`,o.replaceChildren(a({...d,...p})),l(p.properties))}).catch(()=>{u.signal.aborted||o.append(tt("p","",it("badData")))}).finally(()=>{c===u&&o.removeAttribute("aria-busy")})})}async function oy(i){if(await navigator.clipboard?.writeText(i).then(()=>!0,()=>!1))return!0;let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.className="ioviewer-offscreen",document.body.append(t),t.select();try{return document.execCommand("copy")}finally{t.remove()}}function Kf({root:i,data:t,scene:e,controls:n,picker:s,selection:r,measure:o}){let{meta:a}=t,l=()=>n.fitBox(e.visibleBox()),c={hide:e.setVisible&&(()=>r.size&&e.setVisible([...r.values()],!1)),isolate:e.isolate&&(()=>r.size&&e.isolate([...r.values()])),showAll:e.showAll&&(()=>e.showAll()),zoomTo:()=>{if(!r.size)return l();let[M,...E]=r.values(),v=e.elementBox(M);for(let y of E)v.union(e.elementBox(y));n.zoomToBox(v)},fitAll:l},h=zf(i);h.registerPanel("model",{icon:Jt.model,title:it("panel.model"),visible:a.elements.length>0||!!e.setVisible,render:M=>Wf(M,{elements:a.elements,models:a.models??[],selection:r,scene:e,openContextMenu:_,zoomToElement:E=>n.zoomToBox(e.elementBox(E))})});let d=document.createElement("aside");d.id="ioviewer-properties",d.className="ioviewer-floating",i.append(d),Jf(d,r,t);let u=Hf(i,kf),p=M=>{n.setLeftButtonMode(M),u.setActive("orbit",M==="orbit"),u.setActive("pan",M==="pan")};u.setHandler("orbit",()=>p("orbit")),u.setHandler("pan",()=>p("pan")),p(n.leftButtonMode),u.setHandler("fit",l),u.setHandler("projection",()=>{let M=!n.camera.isOrthographicCamera;n.setProjection(M?"orthographic":"perspective"),u.setActive("projection",M)}),u.setActive("projection",!1),document.fullscreenEnabled&&(u.setHandler("fullscreen",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{u.setActive("fullscreen",!!document.fullscreenElement),Us(i,it("fullscreenUnavailable"))})}),document.addEventListener("fullscreenchange",()=>u.setActive("fullscreen",!!document.fullscreenElement)));let g=qf(i);function _(M,E,v,y){g.open(v===null?"empty":"element",M,E,v,y)}function m(M){if(g.isOpen)return;let E=M===document.body,v=(E?n.dom:M).getBoundingClientRect(),y=E?v.left+v.width/2:v.left,S=E?v.top+v.height/2:v.bottom;_(y,S,r.values().next().value??null,()=>M.focus({preventScroll:!0}))}g.setItem("properties",{handler:M=>r.set([M])});for(let M of["hide","isolate","showAll","zoomTo","fitAll"])g.setItem(M,{handler:c[M]});g.setItem("copyId",{handler:M=>oy(String(a.elements[M].id)).then(E=>Us(i,it(E?"idCopied":"copyFailed")),()=>Us(i,it("copyFailed")))}),n.addEventListener("contextmenu",async M=>{let{x:E,y:v}=M.detail;if(o?.active)return _(E,v,r.values().next().value??null);let y=s.pick(E,v),S=y?.then?await y:y;if(S!==void 0){if(!S||S.element<0)return _(E,v,null);r.has(S.element)||r.set([S.element]),_(E,v,S.element)}});let f=[];return window.addEventListener("keydown",M=>{if(M.defaultPrevented)return;let E=Vf(M);if(E){if(M.preventDefault(),E==="contextMenu")return m(document.activeElement??document.body);if(E==="escape"&&!g.isOpen){f.some(v=>v())||r.clear();return}g.close(),E!=="escape"&&c[E]?.()}}),Yf(document.getElementById("ioviewer-status"),r,e.elementCount),$f(i,a.truncated),{shell:h,toolbar:u,contextMenu:g,onEscape:M=>f.push(M)}}var Sh={x:new I(1,0,0),y:new I(0,1,0),z:new I(0,0,1)};function wh(i){let t=Sh[i];if(!t)throw new RangeError(`Unknown axis: ${i}`);return t.clone()}function jf(i,t,e){if(t.length===0)return!1;let n=s=>s.distanceToPoint(i)<0;return e?t.every(n):t.some(n)}function Qf(i,t,e,n){let s=i.clone().normalize(),r=s.dot(t)+e;return n?new ve(s,-r):new ve(s.negate(),r)}function tp(i,t,e=0){if(t!=="keepInside"&&t!=="cutInside")throw new RangeError(`Unknown box mode: ${t}`);let{min:n,max:s}=i,r=[new ve(new I(1,0,0),-n.x),new ve(new I(-1,0,0),s.x),new ve(new I(0,1,0),-n.y),new ve(new I(0,-1,0),s.y),new ve(new I(0,0,1),-n.z),new ve(new I(0,0,-1),s.z)];if(e!==0){let o=i.getCenter(new I);for(let a of r){let l=a.distanceToPoint(o);a.normal.applyAxisAngle(Sh.z,e),a.constant=l-a.normal.dot(o)}}return t==="keepInside"?{planes:r,intersection:!1}:{planes:r.map(o=>o.negate()),intersection:!0}}function ep(i,t,e,n,s,r){let o=i.clone();if(n>0?o.max[e]=Math.max(i.max[e]+s,i.min[e]+r):o.min[e]=Math.min(i.min[e]-s,i.max[e]-r),t!==0){let a=o.getCenter(new I).sub(i.getCenter(new I));o.translate(a.clone().applyAxisAngle(Sh.z,t).sub(a))}return o}function np(i){let{min:t,max:e}=i;return Array.from({length:8},(n,s)=>new I(s&1?e.x:t.x,s&2?e.y:t.y,s&4?e.z:t.z))}function ip(i,t,e){if(t.length===0||i.isEmpty())return!1;let n=np(i),s=r=>n.every(o=>r.distanceToPoint(o)<0);return e?t.every(s):t.some(s)}function ll(i,t){let e=i.getSize(new I).multiplyScalar(.5);return Math.abs(t.x)*e.x+Math.abs(t.y)*e.y+Math.abs(t.z)*e.z}function Dr(i,t,e){let n=t.clone().sub(i.origin),s=e.dot(i.direction),r=1-s*s;return r<.03?null:(s*i.direction.dot(n)-e.dot(n))/r}function cl(i,t,e){let n=new I(1,0,0).applyQuaternion(t),s=new I(0,1,0).applyQuaternion(t),[r,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let h of np(i)){h.sub(e);let d=h.dot(n),u=h.dot(s);[r,o,a,l]=[Math.min(r,d),Math.max(o,d),Math.min(a,u),Math.max(l,u)]}return{center:e.clone().addScaledVector(n,(r+o)/2).addScaledVector(s,(a+l)/2),width:(o-r)*1.1,height:(l-a)*1.1}}var Nr=6,ay=["off","planes","box"],ly=.05,Eh=new I(0,0,1),hl=class extends EventTarget{constructor(t,e,n){super(),this.scene=t,this.modelBox=e.clone(),this.center=e.getCenter(new I),this.planes=[],this.active=-1,this.box=null,this.boxYaw=0,this.boxMode="keepInside",this.fill=!1,this.gizmoVisible=!0,this._mode="off",n&&this.restore(n)}restore({planes:t,box:e,cutInside:n}){this.modelBox.isEmpty()||(this.planes=t.map(({axis:s,normal:r,offset:o,flipped:a})=>{let l=new I().fromArray(r),c=new Pe().setFromUnitVectors(Eh,l);return{axis:s,quaternion:c,offset:o-l.dot(this.center),flipped:a,enabled:!0,rotated:!1}}),this.active=this.planes.length?0:-1,this.box=e?new te(new I().fromArray(e.min),new I().fromArray(e.max)):null,this.boxYaw=0,this.boxMode=n?"cutInside":"keepInside",this.gizmoVisible=!1,this.setMode(this.box?"box":this.planes.length?"planes":"off"))}get mode(){return this._mode}setMode(t){if(!ay.includes(t))throw new RangeError(`Unknown section mode: ${t}`);t==="box"&&!this.box&&this.fitBoxToShown()||(this._mode=t,this._changed(!0))}addPlane(t){let e=wh(t);if(this.planes.length>=Nr||this.modelBox.isEmpty())return null;let n=new Pe().setFromUnitVectors(Eh,e);return this.planes.push({axis:t,quaternion:n,offset:0,flipped:!1,enabled:!0,rotated:!1}),this.active=this.planes.length-1,this._mode="planes",this._changed(!0),this.active}removePlane(t){this._plane(t),this.planes.splice(t,1),(this.active>=this.planes.length||this.active>t)&&this.active--,this._changed(!0)}updatePlane(t,{offset:e,flipped:n,enabled:s,quaternion:r}){let o=this._plane(t);if(e!==void 0){if(!Number.isFinite(e))throw new RangeError(`Offset must be a finite number, got ${e}.`);o.offset=e}n!==void 0&&(o.flipped=!!n),s!==void 0&&(o.enabled=!!s),r&&(o.quaternion.copy(r).normalize(),o.rotated=o.axis!=="custom"&&this.normal(t).angleTo(wh(o.axis))>1e-6),this._changed(!0)}setActivePlane(t){this._plane(t),this.active=t,this._changed(!1)}normal(t){return Eh.clone().applyQuaternion(this._plane(t).quaternion)}extent(t){return ll(this.modelBox,this.normal(t))}origin(t){return this.center.clone().addScaledVector(this.normal(t),this._plane(t).offset)}clipPlane(t){let e=this._plane(t);return Qf(this.normal(t),this.center,e.offset,e.flipped)}setBox(t,e=0){if(t.isEmpty())throw new RangeError("The section box is empty.");e=sp(e),this.box=t.clone(),this.boxYaw=e,this._mode="box",this._changed(!0)}setBoxYaw(t){this.box&&(this.boxYaw=sp(t),this._changed(this.mode==="box"))}setBoxMode(t){if(t!=="keepInside"&&t!=="cutInside")throw new RangeError(`Unknown box mode: ${t}`);this.boxMode=t,this._changed(!0)}fitBoxToElements(t){let e=new te;for(let s of t)e.union(this.scene.elementBox(s));if(e.isEmpty())return!1;let n=e.getSize(new I);return this.setBox(e.expandByScalar(ly*Math.max(n.x,n.y,n.z))),!0}fitBoxToShown(){let t=this.scene.visibleBox();if(t.isEmpty())return!1;let e=t.getSize(new I);return this.setBox(t.expandByScalar(.001*Math.max(e.x,e.y,e.z))),!0}setGizmoVisible(t){this.gizmoVisible=!!t,this._changed(!1)}setFill(t){this.fill=!!t,this._changed(!1)}reset(){this.planes=[],this.active=-1,this.box=null,this.boxYaw=0,this._mode="off",this._changed(!0)}clipping(){if(this._mode==="planes")return{planes:this.planes.flatMap((e,n)=>e.enabled?[this.clipPlane(n)]:[]),intersection:!1};if(this._mode==="box"&&this.box){let t=tp(this.box,this.boxMode,this.boxYaw);if(!t.intersection&&this.boxYaw!==0){let e=this.box.getCenter(new I),n=this.box.getSize(new I).multiplyScalar(.5),s=Math.abs(Math.cos(this.boxYaw)),r=Math.abs(Math.sin(this.boxYaw));n.set(s*n.x+r*n.y,r*n.x+s*n.y,n.z),t.bounds=new te(e.clone().sub(n),e.add(n))}return t}return{planes:[],intersection:!1}}isCut(t,{planes:e,intersection:n,bounds:s}=this.clipping()){return s&&!t.isEmpty()&&!s.intersectsBox(t)||ip(t,e,n)}_plane(t){let e=this.planes[t];if(!Number.isInteger(t)||!e)throw new RangeError(`Plane index ${t} is out of range 0..${this.planes.length-1}.`);return e}_changed(t){if(t){let{planes:e,intersection:n}=this.clipping();this.scene.setClipping(e,n)}this.dispatchEvent(new Event("change"))}};function sp(i){if(!Number.isFinite(i))throw new RangeError("The section box angle must be finite.");return i>=-Math.PI&&i<=Math.PI?i:de.euclideanModulo(i+Math.PI,2*Math.PI)-Math.PI}var Th=80,cy=8,Ch=.8,hy=Math.sin(de.degToRad(12)),bi={x:"#ef4444",y:"#22c55e",z:"#3b82f6",centre:"#e2e8f0",hover:"#facc15",frame:"#93c5fd",fill:"#60a5fa"},Ah=["x","y","z"],uy=Math.cos(de.degToRad(12)),ul=new I(0,0,1),dy=i=>new en({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.9}),fy=new en({visible:!1});function dl(i,t,e,n){let s=new Se,r=dy(t);for(let a of e)s.add(new ye(a,r));let o=new ye(n,fy);return o.userData.handle=s,s.add(o),s.userData={kind:i,color:t,material:r,proxy:o},s.traverse(a=>a.renderOrder=1e3),s}function Rh(i,t,e=n=>n){let n=dl("rotate",bi[t],[e(new _s(Ch,.018,8,64))],e(new _s(Ch,.09,8,48)));return n.name=i,n.userData.axis=t,n}var fl=class extends EventTarget{constructor(t,e){super(),this.sections=t,this.dom=e,this.camera=null,this.group=new Se,this.group.name="sections",this._raycaster=new Di,this._drag=null,this._hovered=null,this._buildPlanes(),this._buildPlaneGizmo(),this._buildBox(),t.addEventListener("change",()=>this._sync()),(e.parentElement??e).addEventListener("pointerdown",n=>this._down(n),!0),e.addEventListener("pointermove",n=>this._move(n)),e.addEventListener("pointerup",n=>this._up(n)),e.addEventListener("pointercancel",()=>this._end()),e.addEventListener("lostpointercapture",()=>this._end()),this._sync()}get dragging(){return this._drag!==null}update(t){this.camera=t;let e=this.planeGizmo;e.visible&&(e.scale.setScalar(this._worldPerPixel(e.position)*Th),this.arrow.visible=this._across(ul.clone().applyQuaternion(e.quaternion),e.position));for(let s of this.boxHandles){let{shown:r,normal:o}=s.userData;s.visible=r&&(!o||this._across(o,s.position)),s.visible&&s.scale.setScalar(this._worldPerPixel(s.position)*cy)}let n=this.boxRing;n.visible&&n.scale.setScalar(this._worldPerPixel(n.position)*Th)}_across(t,e){let n=this.camera,s=n.isOrthographicCamera?n.getWorldDirection(new I):e.clone().sub(n.position).normalize();return Math.abs(t.dot(s))<uy}_buildPlanes(){let t=new yn(1,1),e=new oe().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>new I(r/2,o/2,0))),n=new en({color:bi.fill,transparent:!0,opacity:.12,side:Le,depthWrite:!1}),s=new an({color:bi.frame});this.planeVisuals=Array.from({length:Nr},()=>{let r=new Se;return r.add(new ye(t,n),new js(e,s)),this.group.add(r),r})}_buildPlaneGizmo(){let t=(n,s)=>n.rotateX(Math.PI/2).translate(0,0,s),e=dl("move",bi.z,[t(new Pi(.025,.025,1),.5),t(new nr(.08,.25),1.125)],t(new Pi(.12,.12,1.25),.625));e.name="arrow",this.arrow=e,this.planeGizmo=new Se,this.planeGizmo.add(e,Rh("ringX","x",n=>n.rotateY(Math.PI/2)),Rh("ringY","y",n=>n.rotateX(Math.PI/2))),this.group.add(this.planeGizmo)}_buildBox(){this.boxWire=new vn(new Li(new dn(1,1,1)),new an({color:bi.frame})),this.group.add(this.boxWire);let t=new gs(1,16,12),e=new gs(1.6,8,6);this.boxHandles=[];for(let s of Ah)for(let r of[-1,1]){let o=dl("face",bi[s],[t],e);o.name=`face${r>0?"+":"-"}${s}`,Object.assign(o.userData,{axis:s,sign:r,normal:new I}),this.boxHandles.push(o)}let n=dl("centre",bi.centre,[new dn(1.4,1.4,1.4)],e);n.name="centre",this.boxHandles.push(n),this.boxRing=Rh("boxRing","z"),this.group.add(...this.boxHandles,this.boxRing)}_sync(){let t=this.sections,e=t.mode==="planes";this.planeVisuals.forEach((r,o)=>{let a=t.planes[o];if(r.visible=e&&!!a?.enabled,!r.visible)return;r.children[0].visible=!t.fill;let l=cl(t.modelBox,a.quaternion,t.origin(o));r.position.copy(l.center),r.quaternion.copy(a.quaternion),r.scale.set(l.width,l.height,1)});let n=t.planes[t.active];this.planeGizmo.visible=e&&t.gizmoVisible&&!!n?.enabled,this.planeGizmo.visible&&(this.planeGizmo.position.copy(t.origin(t.active)),this.planeGizmo.quaternion.copy(n.quaternion));let s=t.mode==="box"?t.box:null;this.boxWire.visible=!!s,this.boxRing.visible=!!s&&t.gizmoVisible;for(let r of this.boxHandles)r.visible=r.userData.shown=!!s&&t.gizmoVisible;if(s){let r=s.getCenter(new I),o=s.getSize(new I);this.boxWire.position.copy(r),this.boxWire.scale.copy(o).max(new I(1e-6,1e-6,1e-6)),this.boxWire.rotation.z=t.boxYaw,this.boxRing.position.copy(r);for(let a of this.boxHandles){let{axis:l,sign:c,normal:h}=a.userData;h?(h.set(0,0,0).setComponent(Ah.indexOf(l),c).applyAxisAngle(ul,t.boxYaw),a.position.copy(r).addScaledVector(h,o[l]/2)):a.position.copy(r)}}}_worldPerPixel(t){let e=this.camera,n=Math.max(this.dom.clientHeight,1);if(e.isOrthographicCamera)return(e.top-e.bottom)/e.zoom/n;let s=t.clone().sub(e.position).dot(e.getWorldDirection(new I));return 2*Math.max(s,e.near)*Math.tan(de.degToRad(e.fov/2))/n}_ray(t){let e=this.dom.getBoundingClientRect(),n=new Gt((t.clientX-e.left)/e.width*2-1,1-(t.clientY-e.top)/e.height*2);return this.camera.updateMatrixWorld(),this._raycaster.setFromCamera(n,this.camera),this._raycaster.ray.clone()}_hit(t){if(!this.camera)return null;this.update(this.camera),this.group.updateMatrixWorld(!0);let e=r=>{for(;r&&r!==this.group;r=r.parent)if(!r.visible)return!1;return!0},n=[];this.group.traverse(r=>r.userData.handle&&e(r)&&n.push(r)),this._ray(t);let s=this._raycaster.intersectObjects(n,!1);return(this.sections.mode==="box"?s.find(r=>r.object.userData.handle!==this.boxRing):null)??s[0]??null}_down(t){if(t.target!==this.dom||t.button!==0)return;let e=this._hit(t);if(!e)return;let n=e.object.userData.handle,s=this._start(n,this._raycaster.ray,e.point,t);s&&(t.stopPropagation(),t.preventDefault(),this.dom.setPointerCapture(t.pointerId),this._drag={id:t.pointerId,handle:n,...s},this._highlight(n))}_start(t,e,n,s){let r=this.sections,{kind:o}=t.userData;if(o==="move"){let u=r.active,p=r.origin(u),g=r.normal(u),_=Dr(e,p,g);return _===null?null:{index:u,origin:p,normal:g,offset:r.planes[u].offset,s0:_}}if(o==="rotate"){let u=r.active,p=t===this.boxRing,g=p?t.position.clone():r.origin(u),_=p?null:r.planes[u].quaternion.clone(),m=p?ul:new I().setComponent(Ah.indexOf(t.userData.axis),1).applyQuaternion(_),f={index:u,origin:g,quaternion:_,axis:m,yaw:p?r.boxYaw:null};if(Math.abs(m.dot(e.direction))<hy){let v=m.clone().cross(e.direction).normalize(),y=m.clone().cross(n.clone().sub(g));v.dot(y)<0&&v.negate(),v.applyQuaternion(this.camera.quaternion.clone().invert());let S=new Gt(v.x,-v.y).normalize().divideScalar(Ch*Th);return{...f,screen:S,x:s.clientX,y:s.clientY}}let M=new ve().setFromNormalAndCoplanarPoint(m,g),E=e.intersectPlane(M,new I)?.sub(g);return E?{...f,plane:M,from:E}:null}let a=r.box.clone(),l=r.boxYaw;if(o==="face"){let u=t.userData.normal.clone(),p=t.position.clone(),g=Dr(e,p,u);return g===null?null:{box:a,yaw:l,normal:u,at:p,s0:g}}let c=this.camera.getWorldDirection(new I),h=new ve().setFromNormalAndCoplanarPoint(c,a.getCenter(new I)),d=e.intersectPlane(h,new I);return d?{box:a,yaw:l,plane:h,from:d}:null}_move(t){let e=this._drag;if(!e)return this._hover(t);if(t.pointerId!==e.id)return;if(t.buttons===0)return this._end();let n=this.sections,{kind:s}=e.handle.userData,r=e.screen?null:this._ray(t);if(s==="move"){let o=Dr(r,e.origin,e.normal);o!==null&&n.updatePlane(e.index,{offset:e.offset+o-e.s0})}else if(s==="rotate"){let o;if(e.screen)o=e.screen.x*(t.clientX-e.x)+e.screen.y*(t.clientY-e.y);else{let c=r.intersectPlane(e.plane,new I)?.sub(e.origin);if(!c)return;o=Math.atan2(e.axis.dot(new I().crossVectors(e.from,c)),e.from.dot(c))}if(e.yaw!==null)return n.setBoxYaw(e.yaw+o);let a=new Pe().setFromAxisAngle(e.axis,o).multiply(e.quaternion),l=ul.clone().applyQuaternion(a);n.updatePlane(e.index,{quaternion:a,offset:l.dot(e.origin.clone().sub(n.center))})}else if(s==="face"){let o=Dr(r,e.at,e.normal);if(o===null)return;let{axis:a,sign:l}=e.handle.userData,c=.001*Math.max(...n.modelBox.getSize(new I).toArray(),.001);n.setBox(ep(e.box,e.yaw,a,l,o-e.s0,c),e.yaw)}else{let o=r.intersectPlane(e.plane,new I);o&&n.setBox(e.box.clone().translate(o.sub(e.from)),e.yaw)}}_up(t){this._drag&&t.pointerId===this._drag.id&&this._end()}_end(){this._drag&&(this._drag=null,this._highlight(null))}_hover(t){t.buttons===0&&this._highlight(this._hit(t)?.object.userData.handle??null)}_highlight(t){if(this._hovered!==t){for(let e of[this._hovered,t])e&&e.userData.material.color.set(e===t?bi.hover:e.userData.color);this._hovered=t,this.dom.style.cursor=t?"grab":"",this.dispatchEvent(new Event("change"))}}};var py=new I(0,0,1),my="#e9ad68";function gy(i,t){let e=new Uint32Array(i.length/3),n=new Map;for(let o=0;o<e.length;o++){let a=i[o*3],l=i[o*3+1],c=i[o*3+2];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(c))return!1;let h=`${a},${l},${c}`;n.has(h)||n.set(h,n.size),e[o]=n.get(h)}if(n.size<4||t.length%3)return!1;let s=new Map,r=0;for(let o=0;o<t.length;o+=3){let a=[e[t[o]],e[t[o+1]],e[t[o+2]]],[l,c,h]=a;if(l===void 0||c===void 0||h===void 0)return!1;if(!(l===c||c===h||h===l))for(let d=0;d<3;d++){let u=a[d],p=a[(d+1)%3],g=u<p?1:-1,_=u<p?`${u},${p}`:`${p},${u}`,m=s.get(_);if(m!==void 0&&m!==-g)return!1;s.set(_,m===void 0?g:0),r+=m===void 0?1:-1}}return s.size>0&&r===0}function _y(i,t){let{instances:e,geometries:n}=t.meta,s=t.readView(e.geometry),{width:r,height:o}=i.slotUniforms.slotState.value.image,a=new Uint8Array(r*o),l=new Map;for(let h=0;h<i.slotCount;h++){let d=s[i.slotInstance(h)];if(!l.has(d)){let u=n[d],p=gy(wr({view:t.readView},u),t.readView(u.indices));l.set(d,p?255:0)}a[h]=l.get(d)}let c=new Nn(a,r,o,ws);return c.needsUpdate=!0,c}function rp(i,t,e,n){let s=new He({uniforms:i,vertexShader:`
#include <common>
${Er}
#include <clipping_planes_pars_vertex>
uniform highp sampler2D closedSlots;
void main() {
  ${Tr}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  ${ch}
  if ( texelFetch( closedSlots, st, 0 ).r < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`,fragmentShader:`
#include <clipping_planes_pars_fragment>
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vec4( 0.0 );
}`,side:e,stencilZPass:n,stencilWrite:!0,clipping:!0,clippingPlanes:[t],colorWrite:!1,depthTest:!1,depthWrite:!1});return s.index0AttributeName="q",s}var pl=class{constructor(t,e,n,s){this.model=t,this.sections=e,this.data=n,this.drawStencils=s,this._farSide=new ve,this._surface=new ye(new yn(1,1),new en({color:my,side:Le,forceSinglePass:!0,stencilWrite:!0,stencilFunc:wc,stencilWriteMask:0}))}render(t,e,n){let{sections:s,model:r}=this,{planes:o,intersection:a}=s.clipping(),l=a?o.map(u=>u.clone().negate()):o,c=u=>Math.abs(u.distanceToPoint(s.center))<ll(s.modelBox,u.normal);if(r.opacity===0||!l.some(c))return t.render(e,n);if(!this.drawStencils&&!this._stencils){let u={...r.slotUniforms,closedSlots:{value:_y(r,this.data)}};this._stencils=[rp(u,this._farSide,Ve,Mc),rp(u,this._farSide,On,Sc)]}let h=this._surface.material;h.opacity=r.opacity,h.transparent!==r.opacity<1&&(h.transparent=r.opacity<1,h.depthWrite=!h.transparent,h.needsUpdate=!0);let d=t.autoClear;t.autoClear=!1;try{t.clear();let u=n.isOrthographicCamera?n.getWorldDirection(new I):null;l.forEach((p,g)=>{if(!c(p))return;let _=u?-p.normal.dot(u):p.distanceToPoint(n.position);if(_===0)return;if(this._farSide.copy(p),_>0&&this._farSide.negate(),t.clearStencil(),this.drawStencils)this.drawStencils(t,n,this._farSide);else for(let f of this._stencils)r.withMaterial(f,()=>t.render(r.root,n),{section:!0});this._surface.quaternion.setFromUnitVectors(py,p.normal);let m=cl(s.modelBox,this._surface.quaternion,p.coplanarPoint(new I));this._surface.position.copy(m.center),this._surface.scale.set(m.width,m.height,1),h.clippingPlanes=l.filter((f,M)=>M!==g),t.render(this._surface,n)}),t.render(e,n)}finally{t.autoClear=d}}};function Ur(i,t,e){let n=tt("div","ioviewer-segmented");n.setAttribute("role","group"),n.setAttribute("aria-label",i);let s=t.map(([o,a])=>{let l=tt("button","",a);return l.type="button",l.dataset.value=o,l.addEventListener("click",()=>e(o)),n.append(l),l});return{element:n,update:o=>s.forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.value===o)))}}function Ih(i,t){let e=tt("label","ioviewer-check"),n=tt("input");return n.type="checkbox",n.addEventListener("change",()=>t(n.checked)),e.append(n,tt("span","",i)),{element:e,input:n}}function xy(i,t){let e=tt("li","ioviewer-section-plane");e.addEventListener("pointerdown",()=>i.active!==t&&i.setActivePlane(t));let n=tt("span","ioviewer-section-name"),s=Ke("ioviewer-icon-button",Jt.flip,it("sections.flip"));s.addEventListener("click",()=>i.updatePlane(t,{flipped:!i.planes[t].flipped}));let r=Ih(it("sections.enabled"),h=>i.updatePlane(t,{enabled:h})),o=Ke("ioviewer-icon-button",Jt.remove,it("sections.delete"));o.addEventListener("click",()=>i.removePlane(t));let a=tt("input","ioviewer-section-slider");a.type="range",a.step="any",a.setAttribute("aria-label",it("sections.position")),a.addEventListener("input",()=>i.updatePlane(t,{offset:Number(a.value)}));let l=tt("div","ioviewer-section-head");return l.append(n,s,r.element,o),e.append(l,a),{element:e,update:()=>{let h=i.planes[t],d=h.rotated?` (${it("sections.rotated")})`:"",u=h.axis==="custom"?it("sections.custom"):h.axis.toUpperCase();n.textContent=`${t+1}. ${u}${d}`,e.classList.toggle("active",i.active===t),s.setAttribute("aria-pressed",String(h.flipped)),r.input.checked=h.enabled;let p=i.extent(t);a.min=String(Math.min(-p,h.offset)),a.max=String(Math.max(p,h.offset)),a.value=String(h.offset)}}}function op({root:i,shell:t,toolbar:e,contextMenu:n,sections:s,selection:r,canFill:o}){let a="z",l=()=>{s.addPlane(a)===null&&(s.setMode("planes"),Us(i,it("sections.maxPlanes")))},c=()=>[...r.values()],h=()=>s.fitBoxToElements(c()),d=Ur(it("sections.mode"),[["planes",it("sections.planes")],["box",it("sections.box")],["off",it("sections.off")]],C=>s.setMode(C)),u=Ur(it("sections.axis"),["x","y","z"].map(C=>[C,C.toUpperCase()]),C=>u.update(a=C));u.update(a);let p=tt("button","ioviewer-text-button",it("sections.addPlane"));p.type="button",p.addEventListener("click",l);let g=tt("ul","ioviewer-section-list"),_=tt("div","ioviewer-section-empty",it("sections.noPlanes")),m=tt("div","ioviewer-section-block"),f=tt("div","ioviewer-section-row");f.append(tt("span","",it("sections.axis")),u.element,p),m.append(f,g,_);let M=Ur(it("sections.box"),[["keepInside",it("sections.keepInside")],["cutInside",it("sections.cutInside")]],C=>s.setBoxMode(C)),E=tt("button","ioviewer-text-button",it("sections.fitSelection"));E.type="button",E.addEventListener("click",h);let v=tt("input","ioviewer-section-slider");Object.assign(v,{type:"range",min:"-180",max:"180",step:"1"}),v.addEventListener("input",()=>s.setBoxYaw(Number(v.value)*Math.PI/180));let y=tt("span");y.setAttribute("aria-hidden","true");let S=tt("label","ioviewer-section-row");S.append(tt("span","",it("sections.boxYaw")),v,y);let A=tt("div","ioviewer-section-block");A.append(M.element,S,E);let x=Ih(it("sections.showGizmo"),C=>s.setGizmoVisible(C)),T=Ih(it("sections.fill"),C=>s.setFill(C));o||(T.element.title=it("sections.fillUnavailable"));let R=[],L=()=>{d.update(s.mode),m.hidden=s.mode!=="planes",A.hidden=s.mode!=="box",p.disabled=s.planes.length>=Nr,R.length!==s.planes.length&&(R=s.planes.map((F,G)=>xy(s,G)),g.replaceChildren(...R.map(F=>F.element))),R.forEach(F=>F.update()),_.hidden=R.length>0,M.update(s.boxMode),v.value=String(Math.round(s.boxYaw*180/Math.PI)),y.textContent=`${v.value}\xB0`,v.setAttribute("aria-valuetext",y.textContent),x.input.checked=s.gizmoVisible,T.input.checked=s.fill;let C=s.mode==="box"||s.mode==="planes"&&s.planes.some(F=>F.enabled);T.input.disabled=!o||!C,e.setActive("plane",s.mode==="planes"),e.setActive("box",s.mode==="box")},N=()=>E.disabled=r.size===0;if(t.registerPanel("sections",{icon:Jt.sections,title:it("panel.sections"),visible:!s.modelBox.isEmpty(),render:C=>C.append(d.element,m,A,T.element,x.element)}),s.addEventListener("change",L),r.addEventListener("change",N),L(),N(),s.modelBox.isEmpty())return;let U=()=>t.openPanel("sections");e.setHandler("plane",()=>{l(),U()}),e.setHandler("box",()=>{(s.mode==="box"||r.size&&h()||s.fitBoxToShown())&&U()}),e.setHandler("resetSections",()=>s.reset()),n.setItem("sectionBox",{handler:C=>{s.fitBoxToElements(r.has(C)?c():[C]),U()}}),n.setItem("resetSections",{handler:()=>s.reset()})}var vy="#facc15",yy=9;function Ph(i,t=Ls){return`${new Intl.NumberFormat(t,{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(i)} ${it("unit.m",t)}`}var ml=class extends EventTarget{constructor(t){super(),this.active=!1,this.points=[],this.preview=null,this.group=new Se,this.group.name="measure";let e=new oe;e.setAttribute("position",new be(new Float32Array(6),3));let n={color:vy,depthTest:!1,depthWrite:!1,transparent:!0};this._line=new Ii(e,new an(n)),this._markers=new Qn(e,new Fn({...n,size:yy,sizeAttenuation:!1}));for(let s of[this._line,this._markers])s.frustumCulled=!1,s.renderOrder=1001,this.group.add(s);this.label=tt("div","ioviewer-measure-label"),this.label.hidden=!0,this._previewMarker=tt("div","ioviewer-measure-preview"),this._previewMarker.hidden=!0,this._previewMarker.setAttribute("aria-hidden","true"),t.prepend(this.label,this._previewMarker),this._sync()}get distance(){return this.points.length===2?this.points[0].distanceTo(this.points[1]):null}get box(){return new te().setFromPoints(this.points)}setActive(t){this.active=!!t,this.active||(this.points=[],this.setPreview(null)),this._sync()}add(t){this.active&&(this.points=this.points.length===1?[this.points[0],t.clone()]:[t.clone()],this._sync())}clear(){return this.points.length===0?!1:(this.points=[],this._sync(),!0)}setPreview(t){!this.preview&&!t||(this.preview=t,this._previewMarker.hidden=!t,t&&(this._previewMarker.dataset.kind=t.kind),this.dispatchEvent(new Event("previewchange")))}update(t,e){this.preview&&Pr(this._previewMarker,this.preview.point,t,e),this.distance!==null&&Pr(this.label,this.points[0].clone().lerp(this.points[1],.5),t,e)}_sync(){let t=this._line.geometry.attributes.position;this.points.forEach((e,n)=>t.setXYZ(n,e.x,e.y,e.z)),t.needsUpdate=!0,this._line.geometry.setDrawRange(0,this.points.length),this._line.visible=this.points.length===2,this._markers.visible=this.points.length>0,this.label.hidden=this.distance===null,this.distance!==null&&(this.label.textContent=Ph(this.distance)),this.dispatchEvent(new Event("change"))}};var ap=8,by=1-1e-6,My=8,lp={vertex:0,midpoint:1,edge:2},Sy=2e4;function wy(i,t){let e=new Map,n=new Uint32Array(i.length/3);for(let d=0;d<n.length;d++){let u=d*3,p=`${i[u]},${i[u+1]},${i[u+2]}`;e.has(p)||e.set(p,d),n[d]=e.get(p)}let s=new Map,r=new I,o=new I,a=new I;function l(d,u,p){let g=Math.min(d,u),_=Math.max(d,u),m=g*n.length+_,f=s.get(m);f?(f.count++,f.crease||(f.crease=Math.abs(f.normal.dot(p))<by)):s.set(m,{lo:g,hi:_,normal:p,count:1,crease:!1})}for(let d=0;d+2<t.length;d+=3){let u=n[t[d]],p=n[t[d+1]],g=n[t[d+2]];r.fromArray(i,u*3),o.fromArray(i,p*3).sub(r),a.fromArray(i,g*3).sub(r);let _=new I().crossVectors(o,a);_.lengthSq()>0&&(_.normalize(),l(u,p,_),l(p,g,_),l(g,u,_))}let c=[],h=new Set;for(let{lo:d,hi:u,count:p,crease:g}of s.values())p!==1&&!g||(c.push(d,u),h.add(d),h.add(u));return{edges:c,vertices:h}}function gl(i,t,e){return t<0&&e<0?!1:(t<0&&(i[0]=Math.max(i[0],t/(t-e))),e<0&&(i[1]=Math.min(i[1],t/(t-e))),i[0]<=i[1])}function Ey(i,t,e,n,s,r){let o=[0,1];if(!gl(o,e.w+e.z,n.w+n.z)||!gl(o,e.w-e.z,n.w-n.z))return[];if(!r||!s.length)return s.every(c=>gl(o,c.distanceToPoint(i),c.distanceToPoint(t)))?[o]:[];let a=o.slice();if(!s.every(c=>{let h=c.distanceToPoint(i),d=c.distanceToPoint(t);return(h<0||d<0)&&gl(a,-h,-d)}))return[o];let l=[];return o[0]<a[0]&&l.push([o[0],a[0]]),a[1]<o[1]&&l.push([a[1],o[1]]),l}function Lh(i,t){return[(i.x/i.w+1)*t.width/2,(1-i.y/i.w)*t.height/2]}function Ty(i,t,[e,n],s,r,o){let a=i.clone().lerp(t,e),l=i.clone().lerp(t,n),[c,h]=Lh(a,s),[d,u]=Lh(l,s),p=d-c,g=u-h,_=p*p+g*g;if(!(_>0))return null;let m=de.clamp(((r-c)*p+(o-h)*g)/_,0,1);return e+(n-e)*(m*a.w/((1-m)*l.w+m*a.w))}var _l=class{constructor(t,e,n){this.picker=t,this.sections=e,this.data=n,this.cache=new Map}release(){this.data.releaseBinary(),this.cache.clear()}_geometry(t){let e=this.cache.get(t);if(e)this.cache.delete(t);else{let n=this.data.meta.geometries[t],s=Xa({view:this.data.readView},n);e={positions:s,...wy(s,this.data.readView(n.indices))}}return this.cache.set(t,e),this.cache.size>My&&this.cache.delete(this.cache.keys().next().value),e}target(t,e){let n=this.picker.measureTile(t,e,ap+1);if(!n)return null;let{rect:s}=n,r=t-s.left,o=e-s.top,{camera:a,scene:l}=this.picker,{planes:c,intersection:h}=this.sections.clipping(),d=new Ht().multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),u=a.matrixWorldInverse.elements,p=null;function g(y,S,A,x){if(p&&lp[y]>lp[p.kind]||A.w<=0||A.z<-A.w||A.z>A.w)return;let[T,R]=Lh(A,s);if(!(T>=0&&R>=0&&T<s.width&&R<s.height))return;let L=(T-r)**2+(R-o)**2;if(L>ap**2||p?.kind===y&&L>=p.distance||y!=="edge"&&jf(S,c,h))return;let N=-(u[2]*S.x+u[6]*S.y+u[10]*S.z+u[14]);N-n.depthAt(T,R,x)>2*wn+Math.abs(N)*2**-21||(p={kind:y,distance:L,point:S.clone()})}let _=Sy*3,m=new Ht,f=new I,M=new ue,{geometry:E,matrix:v}=this.data.meta.instances;for(let y of n.slots){let S=l.slotInstance(y),[A]=this.data.readView({t:"u32",o:E.o+S*4,n:1}),x=this.data.meta.geometries[A],T=Math.max(x.indices.n,x.positions.n/3);if(T>_)continue;_-=T;let{positions:R,vertices:L,edges:N}=this._geometry(A),U=this.data.readView({t:"f32",o:v.o+S*48,n:12});m.set(U[0],U[3],U[6],U[9],U[1],U[4],U[7],U[10],U[2],U[5],U[8],U[11],0,0,0,1);let C=new Map;for(let F of L){let G=new I().fromArray(R,F*3).applyMatrix4(m),q=new ue(G.x,G.y,G.z,1).applyMatrix4(d);C.set(F,[G,q]),g("vertex",G,q,y)}if(p?.kind!=="vertex")for(let F=0;F<N.length;F+=2){let[G,q]=C.get(N[F]),[k,D]=C.get(N[F+1]);if(g("midpoint",f.copy(G).lerp(k,.5),M.copy(q).lerp(D,.5),y),p?.kind!=="midpoint")for(let B of Ey(G,k,q,D,c,h)){let X=Ty(q,D,B,s,r,o);X!==null&&g("edge",f.copy(G).lerp(k,X),M.copy(q).lerp(D,X),y)}}}return p?{kind:p.kind,point:p.point}:{kind:"surface",point:n.point.clone()}}};var xl=class extends EventTarget{constructor(t,e){super();let n=[];this._labels=[],this.count=0;for(let r of e){let o=br(r);if(!(o.length<2)){this.count++;for(let a=1;a<o.length;a++)n.push(...o[a-1],...o[a]);for(let a of[o[0],o[o.length-1]])this._labels.push({element:tt("div","ioviewer-grid-label",r.name),point:new I(...a)})}}this.group=new vn(new oe().setAttribute("position",new me(n,3)),new an({color:"#93c5fd",transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1})),this.group.name="grids",this.group.geometry.computeBoundingBox(),this.box=this.group.geometry.boundingBox,this.group.renderOrder=999;let s=tt("div","ioviewer-grid-labels");s.append(...this._labels.map(r=>r.element)),t.prepend(s),this._layer=s,this.setVisible(this.count>0)}get visible(){return this.group.visible}setVisible(t){this.group.visible=!!t,this._layer.hidden=!t,this.dispatchEvent(new Event("change"))}update(t,e){if(this.visible)for(let{element:n,point:s}of this._labels)Pr(n,s,t,e)}};var Ay=8,cp=4;function Dh(i,t,e,n="dialog"){let s=tt("div","ioviewer-popover ioviewer-floating");s.setAttribute("role",n),s.setAttribute("aria-label",e),s.hidden=!0,t.setAttribute("aria-haspopup",n),t.setAttribute("aria-expanded","false"),i.append(s);function r(l){s.contains(l.target)||(a(),Qa(l))}s.addEventListener("keydown",l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),a(),t.focus())});function o(){s.hidden=!1,t.setAttribute("aria-expanded","true");let l=t.getBoundingClientRect(),{width:c}=s.getBoundingClientRect();s.style.left=`${Math.max(cp,Math.min(l.left+l.width/2-c/2,innerWidth-c-cp))}px`,s.style.bottom=`${innerHeight-l.top+Ay}px`,window.addEventListener("pointerdown",r,!0),window.addEventListener("resize",a)}function a(){return s.hidden?!1:(s.hidden=!0,t.setAttribute("aria-expanded","false"),window.removeEventListener("pointerdown",r,!0),window.removeEventListener("resize",a),!0)}return{element:s,close:a,toggle:()=>s.hidden?o():a(),get isOpen(){return!s.hidden}}}function Ry(i){return i?.initialWireframe?"wireframe":i?.initialWhiteMode?"white":"materials"}function hp({root:i,toolbar:t,scene:e,meta:n,grids:s,initialBackground:r,setBackground:o}){let a=x=>t.element.querySelector(`[data-tool="${x}"]`),l=a("displayMode"),c=Dh(i,l,it("group.display"));c.element.classList.add("ioviewer-display-modes");let h=tt("div");h.setAttribute("role","menu"),h.setAttribute("aria-label",it("tool.displayMode")),c.element.append(h);let d=(n.textures??[]).length>0,u=ph.map(x=>{let T=tt("button","ioviewer-menu-item",it(`display.${x}`));return T.type="button",T.dataset.mode=x,T.setAttribute("role","menuitemradio"),T.disabled=x==="textures"&&!d,T.addEventListener("click",()=>{p(x),c.close(),l.focus()}),h.append(T),T}),p=x=>{e.setDisplayMode(x);for(let T of u)T.setAttribute("aria-checked",String(T.dataset.mode===x))};p(Ry(n.options)),t.setHandler("displayMode",()=>{c.toggle(),c.isOpen&&h.querySelector('[aria-checked="true"]')?.focus()});let g=tt("div","ioviewer-background-setting"),_=tt("label","",it("display.background")),m=tt("input");Object.assign(m,{type:"color",value:r}),_.append(m);let f=tt("button","ioviewer-text-button",it("display.backgroundReset"));f.type="button",f.disabled=!0;let M=()=>{o(m.value),f.disabled=m.value===r};m.addEventListener("input",M),f.addEventListener("click",()=>{m.value=r,m.focus(),M()}),g.append(_,f),c.element.append(g),t.setActive("grids",s.visible),s.count>0&&t.setHandler("grids",()=>{s.setVisible(!s.visible),t.setActive("grids",s.visible)});let E=Dh(i,a("opacity"),it("tool.opacity"));E.element.classList.add("ioviewer-opacity");let v=tt("input","ioviewer-opacity-slider");Object.assign(v,{type:"range",min:"10",max:"100",step:"1",value:"100"}),v.setAttribute("aria-label",it("opacity.label"));let y=tt("output","ioviewer-opacity-value"),S=()=>y.textContent=it("opacity.value").replace("{value}",v.value);v.addEventListener("input",()=>{e.setOpacity(Number(v.value)/100),S()}),S();let A=tt("div","ioviewer-opacity-head");return A.append(tt("span","",it("opacity.label")),y),E.element.append(A,v),t.setHandler("opacity",E.toggle),[c,E]}var Cy=3e3;function vl(i,t){let e=tt("button",i);return e.type="button",e.setAttribute("title",t),e.append(tt("span","ioviewer-row-name",t)),e}function up({shell:i,toolbar:t,controls:e,scene:n,sections:s,selection:r,restoreLinkedModels:o,views:a,bcfTopics:l}){let c=null,h=tt("button","ioviewer-text-button ioviewer-tour");h.type="button";function d(E){E.sections!=null&&s.restore(E.sections),E.hiddenElements!=null&&n.setHiddenElements(E.hiddenElements),E.visibleElements!=null&&n.isolate(E.visibleElements),E.hiddenModelKeys!=null&&o(E.hiddenModelKeys),E.selectedElements!=null&&r.set(E.selectedElements);let v=E.camera.projection==="orthographic";e.setProjection(v?"orthographic":"perspective"),t.setActive("projection",v),e.restoreViewCamera(E.camera)}function u(){d(a[c.next]),c.next=(c.next+1)%a.length;let E=()=>{e.animating?c.frame=requestAnimationFrame(E):c.timer=setTimeout(u,Cy)};c.frame=requestAnimationFrame(E)}let p=E=>h.contains(E.target),g=E=>!p(E)&&m(),_=E=>{p(E)&&(E.key==="Enter"||E.key===" ")||(E.key==="Escape"&&(E.preventDefault(),E.stopPropagation()),m())};function m(){c&&(cancelAnimationFrame(c.frame),clearTimeout(c.timer),c=null,window.removeEventListener("pointerdown",g,!0),window.removeEventListener("wheel",m,!0),window.removeEventListener("keydown",_,!0),M())}function f(){c={next:0,frame:0,timer:0},window.addEventListener("pointerdown",g,!0),window.addEventListener("wheel",m,!0),window.addEventListener("keydown",_,!0),M(),u()}function M(){let E=it(c?"views.stop":"views.tour");h.replaceChildren(),h.insertAdjacentHTML("afterbegin",c?Jt.pause:Jt.play),h.append(tt("span","",E)),h.setAttribute("aria-pressed",String(!!c))}h.addEventListener("click",()=>c?m():f()),M(),i.registerPanel("views",{icon:Jt.views,title:it("panel.views"),visible:a.length>0,render:E=>{let v=tt("div","ioviewer-row-list");for(let y of a){let S=vl("ioviewer-row ioviewer-view",String(y.name??""));S.addEventListener("click",()=>d(y)),v.append(S)}E.append(h,v)}}),i.registerPanel("bcf",{icon:Jt.bcf,title:it("panel.bcf"),visible:l.length>0,render:E=>{let v=tt("div","ioviewer-row-list");for(let y of l){let S=tt("details","ioviewer-bcf-topic");S.append(tt("summary","",y.title)),y.status&&S.append(tt("p","ioviewer-bcf-status",y.status)),y.description&&S.append(tt("p","ioviewer-bcf-description",y.description)),y.viewpoints.length||S.append(tt("p","ioviewer-bcf-status",it("bcf.noView"))),y.viewpoints.forEach((A,x)=>{let T=it("bcf.viewpoint").replace("{index}",String(x+1)),R=vl("ioviewer-row ioviewer-view",T);if(R.addEventListener("click",()=>d(A)),S.append(R),A.missingComponents||A.ambiguousComponents){let L=it("bcf.components").replace("{missing}",String(A.missingComponents)).replace("{ambiguous}",String(A.ambiguousComponents));S.append(tt("p","ioviewer-bcf-status",L))}}),v.append(S)}E.append(v)}})}function dp(i,t){let e=[];for(let[n,s]of[[i.element1Id,i.element1Name],[i.element2Id,i.element2Name]]){let r=n!=null?t.findIndex(o=>o.id!=null&&String(o.id)===String(n)&&!o.mesh):Iy(t,s);r>=0&&!e.includes(r)&&e.push(r)}return e}function Iy(i,t){if(t==null)return-1;let e=i.findIndex(n=>n.name===t);return e>=0&&i.findIndex((n,s)=>s>e&&n.name===t)<0?e:-1}var Py=["New","Active","Reviewed","Approved","Resolved"],Nh=27,Ly=8,Dy=14,Ny=2,Uy=new I(1,-1,.8).normalize();function fp({shell:i,tests:t,elements:e,scene:n,controls:s,selection:r}){let o=new Se;o.name="clash-marker";let a=new oe;a.setAttribute("position",new be(new Float32Array(3),3));let l={color:"#ef4444",depthTest:!1,depthWrite:!1,transparent:!0},c=new Qn(a,new Fn({...l,size:Dy,sizeAttenuation:!1}));c.frustumCulled=!1,c.renderOrder=1002,o.add(c),o.visible=!1;let h=null,d=null;function u(){o.visible=!1,h?.removeAttribute("aria-current"),h=null,d=null,s.setExtraBounds("clash",null)}function p(M,E){let v=dp(M,e);v.length?r.set(v):r.clear();let y=new I(...M.point),S=0;for(let T of v){let R=n.elementBox(T);R.isEmpty()||(S=Math.max(S,...R.getSize(new I).toArray()))}let A=s.camera.position.clone().sub(s.target);A.lengthSq()<1e-12&&A.copy(Uy);let x=Math.max(3*S,Ny);s.animateTo({position:A.normalize().multiplyScalar(x).add(y),target:y}),a.attributes.position.setXYZ(0,y.x,y.y,y.z),a.attributes.position.needsUpdate=!0,o.visible=!0,h?.removeAttribute("aria-current"),h=E,d=M,E.setAttribute("aria-current","true"),s.setExtraBounds("clash",new te(y.clone(),y.clone()))}function g(M){let E=vl("ioviewer-row ioviewer-clash",String(M.name??""));E.setAttribute("title",`${M.name??""}: ${M.element1Name??""} \u2014 ${M.element2Name??""}`);let v=Py.includes(M.status),y=tt("span","ioviewer-clash-status",v?it(`clash.${M.status}`):String(M.status??""));v&&(y.dataset.status=M.status);let S=typeof M.distance=="number"?Ph(M.distance):"";return E.append(y,tt("span","ioviewer-clash-distance",S)),M===d&&(h=E,E.setAttribute("aria-current","true")),E.addEventListener("click",()=>p(M,E)),E}function _(M,E){let v=tt("div","ioviewer-clash-test"),y=tt("button","ioviewer-row ioviewer-clash-header");y.type="button",y.setAttribute("aria-expanded","true");let S=`${M.name??""} (${M.clashes.length})`;y.setAttribute("title",S),y.insertAdjacentHTML("afterbegin",Jt.chevron),y.append(tt("span","ioviewer-row-name",S));let A=tt("div","ioviewer-clash-list");return A.style.height=`${Math.max(0,M.clashes.length*Nh-1)}px`,y.addEventListener("click",()=>{A.hidden=!A.hidden,y.setAttribute("aria-expanded",String(!A.hidden)),E()}),v.append(y,A),{box:v,list:A,clashes:M.clashes,rows:new Map}}function m({list:M,clashes:E,rows:v},{start:y,end:S}){for(let[x,T]of v)(x<y||x>=S)&&(T.remove(),v.delete(x));let A=null;for(let x=S-1;x>=y;x--){let T=v.get(x);T||(T=g(E[x]),T.style.top=`${x*Nh}px`,M.insertBefore(T,A),v.set(x,T)),A=T}}function f(M){if(!t.length)return;M.classList.add("ioviewer-clashes-body");let E=t.map(y=>_(y,v));for(let y of E)M.append(y.box);function v(){let y=M.scrollTop,S=M.clientHeight,A=E.map(({list:x,clashes:T})=>S&&!x.hidden?Mh(y-x.offsetTop,Nh,S,T.length,Ly):{start:0,end:0});E.forEach((x,T)=>m(x,A[T]))}M.addEventListener("scroll",v),M.addEventListener("focusin",v),new ResizeObserver(v).observe(M)}return i.registerPanel("clashes",{icon:Jt.clashes,title:it("panel.clashes"),visible:t.length>0,render:f,onClose:()=>o.visible&&u()}),{group:o}}var Fy=["construct","demolish","temporary"],By=Date.parse("0002-01-01T00:00:00Z");function pp(i){let t=typeof i=="string"?Date.parse(i):NaN;return t>=By?t:NaN}function mp(i,t){let e=new Map(t.flatMap((o,a)=>o.mesh||o.id==null?[]:[[String(o.id),a]])),n=[];for(let o of Array.isArray(i?.tasks)?i.tasks:[]){let a=pp(o?.start),l=pp(o?.end);if(!(a<=l))continue;let c=Fy.includes(o.type)?o.type:"construct",h=Array.isArray(o.attachedElements)?o.attachedElements:[];n.push({name:o.name,type:c,start:a,end:l,elements:h.map(d=>e.get(String(d))).filter(d=>d!==void 0)})}let s=n.reduce((o,a)=>Math.min(o,a.start),1/0),r=n.reduce((o,a)=>Math.max(o,a.end),-1/0);return{start:s,end:r,tasks:n}}function gp(i,t){let e=new Set,n=new Map;for(let s of i){let r=t<s.start,o=t>s.end,a=s.type==="construct"?r:s.type==="demolish"?o:r||o;for(let l of s.elements)a?e.add(l):!r&&!o&&n.set(l,s.type)}for(let s of e)n.delete(s);return{hidden:e,active:n}}var Oy=864e5,zy=["1","5","15"],ky={construct:"#22c55e",demolish:"#ef4444",temporary:"#a855f7"};function _p({root:i,shell:t,timeliner:e,elements:n,scene:s}){let r=mp(e,n);if(r.tasks.length===0)return t.registerPanel("timeliner",{icon:Jt.timeliner,title:it("panel.timeliner"),visible:!1,render:()=>{}}),null;let o=new Intl.DateTimeFormat(void 0,{dateStyle:"short",timeZone:"UTC"}),a=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}),l=r.start,c=1,h=0,d=0,u=!1,p=new Set,g=new Map,_=tt("div","ioviewer-player ioviewer-floating");_.setAttribute("role","group"),_.setAttribute("aria-label",it("player.title")),_.hidden=!0;let m=Ke("ioviewer-icon-button ioviewer-player-play",Jt.play,it("player.play"));m.addEventListener("click",()=>h?N():L());let f=tt("output","ioviewer-player-date"),M=tt("input","ioviewer-player-slider");Object.assign(M,{type:"range",min:String(r.start),max:String(r.end),step:"any"}),M.setAttribute("aria-label",it("player.date")),M.addEventListener("input",()=>A(Number(M.value)));let E=Ur(it("player.speed"),zy.map(C=>[C,`${C}\xD7`]),C=>{c=Number(C),E.update(C)});E.update(String(c));let v=Ke("ioviewer-panel-close",Jt.close,it("close"));v.addEventListener("click",T),_.append(m,f,M,E.element,v),i.append(_),new ResizeObserver(()=>{let C=_.hidden?0:_.offsetHeight+8;i.style.setProperty("--player-space",`${C}px`)}).observe(_);function S(){let C=gp(r.tasks,l),F=[...p].filter(D=>!C.hidden.has(D)),G=[...C.hidden].filter(D=>!p.has(D));p=C.hidden;let q=[...g.keys()].filter(D=>C.active.get(D)!==g.get(D)),k=new Map;for(let[D,B]of C.active)g.get(D)!==B&&(k.has(B)||k.set(B,[]),k.get(B).push(D));g=C.active,F.length&&s.setLayerHidden("schedule",F,!1),G.length&&s.setLayerHidden("schedule",G,!0),q.length&&s.setTint(q,null);for(let[D,B]of k)s.setTint(B,ky[D])}function A(C){l=Math.min(Math.max(C,r.start),r.end),M.value=String(l),f.textContent=a.format(l),u&&S()}function x(){u||(u=!0,_.hidden=!1,A(r.start))}function T(){u&&(N(),u=!1,s.setTint([...g.keys()],null),g=new Map,p=new Set,s.clearLayer("schedule"),_.hidden=!0)}function R(C){A(l+Math.max(C-d,0)/1e3*c*Oy),d=C,l>=r.end?N():h=requestAnimationFrame(R)}function L(){x(),!h&&(l>=r.end&&A(r.start),d=performance.now(),h=requestAnimationFrame(R),U())}function N(){cancelAnimationFrame(h),h=0,U()}function U(){let C=it(h?"player.pause":"player.play");m.innerHTML=h?Jt.pause:Jt.play,m.title=C,m.setAttribute("aria-label",C)}return t.registerPanel("timeliner",{icon:Jt.timeliner,title:it("panel.timeliner"),render:C=>{let F=tt("button","ioviewer-text-button ioviewer-player-open");F.type="button",F.insertAdjacentHTML("afterbegin",Jt.play),F.append(tt("span","",it("player.play"))),F.addEventListener("click",L);let G=tt("div","ioviewer-row-list");for(let q of r.tasks){let k=String(q.name??""),D=tt("div","ioviewer-row ioviewer-task");D.dataset.type=q.type,D.setAttribute("title",`${k} \xB7 ${it(`task.${q.type}`)}`);let B=`${o.format(q.start)} \u2013 ${o.format(q.end)}`;D.append(tt("span","ioviewer-row-name",k),tt("span","ioviewer-task-dates",B)),G.append(D)}C.append(F,G)}}),{open:x,close:T,play:L,pause:N,setDate:A,get date(){return l},get isOpen(){return u}}}function xp({shell:i,files:t,elements:e,scene:n}){let s=t.map(o=>({file:o,members:o.members??e.flatMap((a,l)=>a.link!=null&&(a.link===o.name||a.link===o.path)?[l]:[]),input:tt("input")})),r=()=>n.replaceLayerHidden("links",s.flatMap(({input:o,members:a})=>o.checked?[]:a));return i.registerPanel("links",{icon:Jt.links,title:it("panel.links"),visible:s.length>0,render:o=>{let a=tt("div","ioviewer-row-list");for(let l of s){let c=String(l.file.name??""),h=tt("label","ioviewer-row ioviewer-check ioviewer-link");h.setAttribute("title",`${c} (${l.file.path??""})`);let{input:d}=l;d.type="checkbox",d.checked=l.members.length===0||l.file.visible!==!1,d.disabled=l.members.length===0,d.addEventListener("change",r),h.append(d,tt("span","ioviewer-row-name",c),tt("span","ioviewer-row-count",String(l.members.length))),a.append(h)}o.append(a),r()}}),o=>{let a=new Set(o);for(let{file:l,input:c}of s)c.checked=c.disabled||!a.has(l.key);r()}}document.documentElement.lang=Ls;var Vn=document.getElementById("ioviewer-canvas"),Uh=window.IOVIEWER_TEST??{},Fr=Uh.startup;function Br(i){let t=document.getElementById("ioviewer-message");t.textContent=i,t.hidden=!1}try{let i=th(document,Fr);i.title&&(document.title=i.title);let t=Vn.getContext("webgl2",{antialias:!0,stencil:!0});t?Hy(Yd(document,Fr,i),t):Br(it("noWebGL"))}catch(i){if(!(i instanceof Qt))throw i;Br(it("badData"))}function Hy(i,t){let e=new Rs({canvas:Vn,context:t,antialias:!0,stencil:!0,logarithmicDepthBuffer:Rf(i.meta)});e.setPixelRatio(window.devicePixelRatio),e.autoClearStencil=!1,e.localClippingEnabled=!0;let n=new Ri,s="#1f2228",r=new Bt(s);e.setClearColor(r,1);let o=new rr("#ffffff","#8a8f99",1.6);o.position.set(0,0,1),n.add(o);let a=new Ze(45,1,.1,1e3);a.up.set(0,0,1),a.position.set(1,-1,.8);let l=new ar("#ffffff",1.4);l.position.set(.3,.6,0),a.add(l,l.target),l.target.position.set(0,0,-1),n.add(a);let c=!1;Fr?.("sceneStart");let h=S(),d=new Ja(i);Fr?.("sceneEnd"),i.releaseBinary(),!c&&h.totalCost===0&&d.count===0&&Br(it("noGeometry"));let u=new sl(h,N,Math.min(h.totalCost,2e7));n.add(h.root),n.add(d.root);let p=()=>{let ht=h.visibleBox();return d.count?ht.union(d.visibleBox()):ht},g={visibleBox:p,elementBox:(ht,ut)=>{let Ut=h.elementBox(ht,ut);return d.count?Ut.union(d.elementBox(ht)):Ut},setClipping:(ht,ut)=>{h.setClipping(ht,ut),d.setClipping(ht)}},_=new hl(g,p(),i.meta.sections);d.syncVisibility(h),d.setClipping(_.clipping().planes);let m=t.getContextAttributes()?.stencil===!0,f,M=new fl(_,Vn);n.add(M.group);let E=document.getElementById("ioviewer-ui"),v=new ml(E),y=new xl(E,i.meta.grids??[]);n.add(v.group,y.group);function S(){try{return new Cr(i,{...Uh,maxTextureSize:e.capabilities.maxTextureSize})}catch(ht){if(!(ht instanceof Rr))throw ht;c=!0,Br(it("tooLarge").replace("{count}",ht.count).replace("{limit}",ht.limit));let ut=ae=>({o:0,n:0,t:ae}),Ut={count:0,geometry:ut("u32"),material:ut("u32"),element:ut("i32"),matrix:ut("f32")};return new Cr({...i,meta:{...i.meta,instances:Ut}})}}let A=!1;Vn.addEventListener("webglcontextlost",()=>{A=!0,Br(it("contextLost"))});let x,T=new Promise(ht=>x=ht),R=Fr,L=!1;function N(){L||A||(L=!0,u.requested(performance.now()),requestAnimationFrame(()=>{if(L=!1,A)return;let ht=Vn.getBoundingClientRect();B.camera.updateMatrixWorld(),M.update(B.camera),v.update(B.camera,ht),y.update(B.camera,ht),u.begin(B.camera,ht.height,performance.now()),R?.("renderStart"),_.fill&&m?(f??(f=new pl(h,_,i)),f.render(e,n,B.camera)):e.render(n,B.camera),R&&(R("renderEnd"),R=void 0),u.end(performance.now()),xt.update(),x()}))}h.root.addEventListener("change",N),_.addEventListener("change",()=>{d.setClipping(_.clipping().planes),N()}),M.addEventListener("change",N),v.addEventListener("change",N),v.addEventListener("previewchange",N),y.addEventListener("change",N);let U=new nl(e,h,a,{pickFloat:Uh.pickFloat}),C=new _l(U,_,i),F=0,G=null;function q(){cancelAnimationFrame(F),F=0,G=null,v.setPreview(null)}function k(){F=0,G&&v.setPreview(C.target(...G))}function D(){G&&(v.setPreview(null),cancelAnimationFrame(F),F=requestAnimationFrame(()=>{F=requestAnimationFrame(k)}))}Vn.addEventListener("pointermove",ht=>{if(!v.active||ht.buttons)return q();G=[ht.clientX,ht.clientY],F||(F=requestAnimationFrame(k))});for(let ht of["pointerdown","pointerleave","pointercancel","webglcontextlost"])Vn.addEventListener(ht,q);h.root.addEventListener("change",ht=>{ht.detail.kind!=="appearance"&&D()});let B=new ja(a,Vn,{pick:(ht,ut)=>U.pick(ht,ut)?.point??null,visibleBox:p});B.addEventListener("change",()=>{U.camera=B.camera,D(),N()}),h.root.addEventListener("change",ht=>{ht.detail.kind==="visibility"&&(d.syncVisibility(h),B.invalidateBounds(),B.resize())});let X=new ol;X.addEventListener("change",()=>h.setHighlighted([...X.values()]));let H=Kf({root:E,data:i,scene:h,controls:B,picker:U,selection:X,measure:v});op({root:E,...H,sections:_,selection:X,canFill:m});let{meta:j}=i,at=xp({...H,files:j.linkedFiles??[],elements:j.elements,scene:h});up({...H,controls:B,scene:h,sections:_,selection:X,restoreLinkedModels:at,views:j.viewpoints??[],bcfTopics:j.bcfTopics??[]});let ct=fp({...H,tests:j.clashTests??[],elements:j.elements,scene:h,controls:B,selection:X});n.add(ct.group);let lt=_p({root:E,...H,timeliner:j.timeliner,elements:j.elements,scene:h}),Y=ht=>{e.setClearColor(r.set(ht),1);let{r:ut,g:Ut,b:ae}=r,qt=.2126*ut+.7152*Ut+.0722*ae>Math.sqrt(.0525)-.05?"#000":"#fff";E.style.setProperty("--viewport-text",ht===s?"":qt),N()};for(let ht of hp({root:E,toolbar:H.toolbar,scene:h,meta:j,grids:y,initialBackground:s,setBackground:Y}))H.onEscape(ht.close);H.toolbar.setHandler("distance",()=>{q(),v.setActive(!v.active),v.active||C.release(),H.toolbar.setActive("distance",v.active)}),H.toolbar.setActive("distance",!1),H.onEscape(()=>(q(),v.clear()));let Q=()=>{B.setExtraBounds("grids",y.visible?y.box:null),B.setExtraBounds("measure",v.box)};y.addEventListener("change",Q),v.addEventListener("change",Q),Q(),B.addEventListener("click",ht=>{let{x:ut,y:Ut,ctrl:ae,shift:zt}=ht.detail;if(v.active){let Vt=C.target(ut,Ut);Vt&&v.add(Vt.point);return}let Kt=U.pick(ut,Ut)?.element??-1;ae?Kt>=0&&X.toggle(Kt):Kt>=0?X.set([Kt]):zt||X.clear()}),B.addEventListener("boxselect",ht=>{if(v.active)return;let{rect:ut,mode:Ut,ctrl:ae,shift:zt}=ht.detail;if(ut.width<4||ut.height<4){!ae&&!zt&&X.clear();return}let qt=new te,Kt=Ff(ut,Ut,Bf(h,B.camera,Vn.getBoundingClientRect())),Vt=_.clipping(),ce=Kt.filter(Te=>!_.isCut(h.elementBox(Te,qt),Vt));X.set(ae?[...X.values(),...ce]:ce)}),window.addEventListener("resize",()=>{e.setSize(window.innerWidth,window.innerHeight,!1),B.resize()}),e.setSize(window.innerWidth,window.innerHeight,!1),B.resize(),B.fitBox(p(),!1);let xt=new el(document.getElementById("ioviewer-ui"),a,B);window.addEventListener("pointerdown",ht=>{(ht.target===Vn||xt.element.contains(ht.target))&&document.activeElement?.blur()},!0),window.__ioviewer={scene:h,points:d,motionDetail:u,controls:B,picker:U,selection:X,ui:H,viewCube:xt,sections:_,sectionGizmo:M,measure:v,measureSnap:C,grids:y,clashes:ct,timeliner:lt,ready:T,get camera(){return B.camera}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
