(()=>{var tu=i=>{throw TypeError(i)};var Ll=(i,t,e)=>t.has(i)||tu("Cannot "+e);var ui=(i,t,e)=>(Ll(i,t,"read from private field"),e?e.call(i):t.get(i)),Dl=(i,t,e)=>t.has(i)?tu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),eu=(i,t,e,n)=>(Ll(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Jr=(i,t,e)=>(Ll(i,t,"access private method"),e);var Uu=0,dc=1,Fu=2;var gr=1,Bu=2,As=3,Wn=0,Be=1,Oe=2,Xn=0,Rs=1,fc=2,pc=3,mc=4,Ou=5;var Hi=100,zu=101,ku=102,Hu=103,Vu=104,Gu=200,Wu=201,Xu=202,qu=203,gc=204,_c=205,Yu=206,$u=207,Zu=208,Ju=209,Ku=210,ju=211,Qu=212,td=213,ed=214,Ro=0,Co=1,Io=2,fs=3,Po=4,Lo=5,Do=6,No=7,_r=0,nd=1,id=2,wn=0,xc=1,vc=2,yc=3,Mc=4,bc=5,Sc=6,wc=7;var Ec=300,Mi=301,Vi=302,aa=303,la=304,xr=306,ps=1e3,Dn=1001,Uo=1002,Ve=1003,sd=1004;var vr=1005;var qe=1006,ca=1007;var bi=1008;var nn=1009,Tc=1010,Ac=1011,Cs=1012,ha=1013,En=1014,Ye=1015,Tn=1016,ua=1017,da=1018,Is=1020,Rc=35902,Cc=35899,Ic=1021,Pc=1022,sn=1023,Nn=1026,Si=1027,Ps=1028,fa=1029,wi=1030,pa=1031;var ma=1033,yr=33776,Mr=33777,br=33778,Sr=33779,ga=35840,_a=35841,xa=35842,va=35843,ya=36196,Ma=37492,ba=37496,Sa=37488,wa=37489,wr=37490,Ea=37491,Ta=37808,Aa=37809,Ra=37810,Ca=37811,Ia=37812,Pa=37813,La=37814,Da=37815,Na=37816,Ua=37817,Fa=37818,Ba=37819,Oa=37820,za=37821,ka=36492,Ha=36494,Va=36495,Ga=36283,Wa=36284,Er=36285,Xa=36286;var Ks=2300,Fo=2301,Eo=2302,ic=2303,sc=2400,rc=2401,oc=2402;var rd=3200;var Tr=0,od=1,ri="",Me="srgb",js="srgb-linear",Qs="linear",ue="srgb";var To=7680;var Lc=34055,Dc=34056;var Nc=517;var ad=519,ld=512,cd=513,hd=514,qa=515,ud=516,dd=517,Ya=518,fd=519,Uc=35044,Ar=35048;var Fc="300 es",yn=2e3,ms=2001;function Vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=gs("canvas");return i.style.display="block",i}var nu={},_s=null;function tr(...i){let t="THREE."+i.shift();_s?_s("log",t,...i):console.log(t,...i)}function md(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=md(i);let t="THREE."+i.shift();if(_s)_s("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=md(i);let t="THREE."+i.shift();if(_s)_s("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ui(...i){let t=i.join(" ");t in nu||(nu[t]=!0,kt(...i))}function gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _d={[Ro]:Co,[Io]:Do,[Po]:No,[fs]:Lo,[Co]:Ro,[Do]:Io,[No]:Po,[Lo]:fs},Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=1234567,us=Math.PI/180,xs=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function Wp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xp(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function qp(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function Yp(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function $p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kp(i,t){return i+Math.random()*(t-i)}function jp(i){return i*(.5-Math.random())}function Qp(i){i!==void 0&&(iu=i);let t=iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*us}function em(i){return i*xs}function nm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var le={DEG2RAD:us,RAD2DEG:xs,generateUUID:ni,clamp:ne,euclideanModulo:Bc,mapLinear:Wp,inverseLerp:Xp,lerp:Js,damp:qp,pingpong:Yp,smoothstep:$p,smootherstep:Zp,randInt:Jp,randFloat:Kp,randFloatSpread:jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:sm,setQuaternionFromProperEuler:rm,normalize:de,denormalize:vn},Vc=class Vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;var Gt=Vc,De=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,a=Math.sin(a*M)/T,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gc=class Gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gc.prototype.isVector3=!0;var P=Gc,Nl=new P,su=new De,Wc=class Wc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],M=s[1],T=s[4],S=s[7],v=s[2],b=s[5],A=s[8];return r[0]=o*_+a*M+l*v,r[3]=o*g+a*T+l*b,r[6]=o*p+a*S+l*A,r[1]=c*_+h*M+d*v,r[4]=c*g+h*T+d*b,r[7]=c*p+h*S+d*A,r[2]=u*_+f*M+m*v,r[5]=u*g+f*T+m*b,r[8]=u*p+f*S+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var Yt=Wc,Ul=new Yt,ru=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function om(){let i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}var ee=om();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Bo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=gs("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},am=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fl(s[o].image)):r.push(Fl(s[o]))}else r=Fl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var lm=0,Bl=new P,Ge=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=qe,o=bi,a=sn,l=nn,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=ni(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ps:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ps:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Ec;Ge.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,S=(f+1)/2,v=(p+1)/2,b=(h+u)/4,A=(d+_)/4,x=(m+g)/4;return T>S&&T>v?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=A/n):S>v?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var xe=Xc,Oo=class extends Un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ge(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},er=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oa=class oa{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,_,g)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),di.crossVectors(n,rn),di.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),di.crossVectors(n,rn)),di.normalize(),Kr.crossVectors(rn,di),s[0]=di.x,s[4]=Kr.x,s[8]=rn.x,s[1]=di.y,s[5]=Kr.y,s[9]=rn.y,s[2]=di.z,s[6]=Kr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],T=n[7],S=n[11],v=n[15],b=s[0],A=s[4],x=s[8],w=s[12],R=s[1],D=s[5],N=s[9],B=s[13],L=s[2],U=s[6],W=s[10],V=s[14],O=s[3],F=s[7],G=s[11],Y=s[15];return r[0]=o*b+a*R+l*L+c*O,r[4]=o*A+a*D+l*U+c*F,r[8]=o*x+a*N+l*W+c*G,r[12]=o*w+a*B+l*V+c*Y,r[1]=h*b+d*R+u*L+f*O,r[5]=h*A+d*D+u*U+f*F,r[9]=h*x+d*N+u*W+f*G,r[13]=h*w+d*B+u*V+f*Y,r[2]=m*b+_*R+g*L+p*O,r[6]=m*A+_*D+g*U+p*F,r[10]=m*x+_*N+g*W+p*G,r[14]=m*w+_*B+g*V+p*Y,r[3]=M*b+T*R+S*L+v*O,r[7]=M*A+T*D+S*U+v*F,r[11]=M*x+T*N+S*W+v*G,r[15]=M*w+T*B+S*V+v*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],M=l*f-c*u,T=a*f-c*d,S=a*u-l*d,v=o*f-c*h,b=o*u-l*h,A=o*d-a*h;return e*(_*M-g*T+p*S)-n*(m*M-g*v+p*b)+s*(m*T-_*v+p*A)-r*(m*S-_*b+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=e*a-n*o,T=e*l-s*o,S=e*c-r*o,v=n*l-s*a,b=n*c-r*a,A=s*c-r*l,x=h*_-d*m,w=h*g-u*m,R=h*p-f*m,D=d*g-u*_,N=d*p-f*_,B=u*p-f*g,L=M*B-T*N+S*D+v*R-b*w+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return t[0]=(a*B-l*N+c*D)*U,t[1]=(s*N-n*B-r*D)*U,t[2]=(_*A-g*b+p*v)*U,t[3]=(u*b-d*A-f*v)*U,t[4]=(l*R-o*B-c*w)*U,t[5]=(e*B-s*R+r*w)*U,t[6]=(g*S-m*A-p*T)*U,t[7]=(h*A-u*S+f*T)*U,t[8]=(o*N-a*R+c*x)*U,t[9]=(n*R-e*N-r*x)*U,t[10]=(m*b-_*S+p*M)*U,t[11]=(d*S-h*b-f*M)*U,t[12]=(a*w-o*D-l*x)*U,t[13]=(e*D-n*w+s*x)*U,t[14]=(_*T-m*v-g*M)*U,t[15]=(h*v-d*T+u*M)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,g=o*d,p=a*d,M=l*c,T=l*h,S=l*d,v=n.x,b=n.y,A=n.z;return s[0]=(1-(_+p))*v,s[1]=(f+S)*v,s[2]=(m-T)*v,s[3]=0,s[4]=(f-S)*b,s[5]=(1-(u+p))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+T)*A,s[9]=(g-M)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ki.set(s[0],s[1],s[2]).length(),a=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gn.copy(this);let c=1/o,h=1/a,d=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,e.setFromRotationMatrix(gn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===yn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ms)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===yn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===ms)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};oa.prototype.isMatrix4=!0;var Zt=oa,Ki=new P,gn=new Zt,cm=new P(0,0,0),hm=new P(1,1,1),di=new P,Kr=new P,rn=new P,au=new Zt,lu=new De,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,cu=new P,ji=new De,Jn=new Zt,jr=new P,Gs=new P,dm=new P,fm=new De,hu=new P(1,0,0),uu=new P(0,1,0),du=new P(0,0,1),fu={type:"added"},pm={type:"removed"},Qi={type:"childadded",child:null},Ol={type:"childremoved",child:null},We=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Fn,n=new De,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Yt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Gs,jr,this.up):Jn.lookAt(jr,Gs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new P(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Bc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zl(o,r,t+1/3),this.g=zl(o,r,t),this.b=zl(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return ee.workingToColorSpace(Je.copy(this),t),Math.round(ne(Je.r*255,0,255))*65536+Math.round(ne(Je.g*255,0,255))*256+Math.round(ne(Je.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Me){ee.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Qr);let n=Js(fi.h,Qr.h,e),s=Js(fi.s,Qr.s,e),r=Js(fi.l,Qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Ht;Ht.NAMES=xd;var fn=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new P,Kn=new P,kl=new P,jn=new P,ts=new P,es=new P,pu=new P,Hl=new P,Vl=new P,Gl=new P,Wl=new xe,Xl=new xe,ql=new xe,ei=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Kn.subVectors(n,e),kl.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Kn),l=_n.dot(kl),c=Kn.dot(Kn),h=Kn.dot(kl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(t,e),Xl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wl,r.x),o.addScaledVector(Xl,r.y),o.addScaledVector(ql,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Kn.subVectors(t,e),_n.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),_n.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,n),es.subVectors(r,n),Hl.subVectors(t,n);let l=ts.dot(Hl),c=es.dot(Hl);if(l<=0&&c<=0)return e.copy(n);Vl.subVectors(t,s);let h=ts.dot(Vl),d=es.dot(Vl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ts,o);Gl.subVectors(t,r);let f=ts.dot(Gl),m=es.dot(Gl);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(es,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return pu.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(pu,a);let p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ae=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),eo.subVectors(this.max,Ws),ns.subVectors(t.a,Ws),is.subVectors(t.b,Ws),ss.subVectors(t.c,Ws),pi.subVectors(is,ns),mi.subVectors(ss,is),Pi.subVectors(ns,ss);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Pi.z,Pi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Pi.z,0,-Pi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Pi.y,Pi.x,0];return!Yl(e,ns,is,ss,eo)||(e=[1,0,0,0,1,0,0,0,1],!Yl(e,ns,is,ss,eo))?!1:(no.crossVectors(pi,mi),e=[no.x,no.y,no.z],Yl(e,ns,is,ss,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,to=new ae,ns=new P,is=new P,ss=new P,pi=new P,mi=new P,Pi=new P,Ws=new P,eo=new P,no=new P,Li=new P;function Yl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pe=new P,io=new Gt,gm=0,Ae=class extends Un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Ye,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var nr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},_m=new ae,Xs=new P,$l=new P,Xe=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_m.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add($l)),this.expandByPoint(Xs.copy(t.center).sub($l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xm=0,dn=new Zt,Zl=new We,rs=new P,on=new ae,qs=new ae,He=new P,fe=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Zl.lookAt(t),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(on.min,qs.min),on.expandByPoint(He),He.addVectors(on.max,qs.max),on.expandByPoint(He)):(on.expandByPoint(qs.min),on.expandByPoint(qs.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),He.add(rs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new P,l[x]=new P;let c=new P,h=new P,d=new P,u=new Gt,f=new Gt,m=new Gt,_=new P,g=new P;function p(x,w,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[x].add(_),a[w].add(_),a[R].add(_),l[x].add(g),l[w].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,w=M.length;x<w;++x){let R=M[x],D=R.start,N=R.count;for(let B=D,L=D+N;B<L;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let T=new P,S=new P,v=new P,b=new P;function A(x){v.fromBufferAttribute(s,x),b.copy(v);let w=a[x];T.copy(w),T.sub(v.multiplyScalar(v.dot(w))).normalize(),S.crossVectors(b,w);let D=S.dot(l[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,D)}for(let x=0,w=M.length;x<w;++x){let R=M[x],D=R.start,N=R.count;for(let B=D,L=D+N;B<L;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Ae(u,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},en=new P,bs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jl=new P,vm=new P,ym=new Yt,Te=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Jl.subVectors(n,e).cross(vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Jl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ym.getNormalMatrix(t),s=this.coplanarPoint(Jl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mm=0,Mn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Rs,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Te().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ti=new P,Kl=new P,so=new P,ro=new P,Fi=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kl.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),ro.copy(this.origin).sub(Kl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kl).addScaledVector(so,u),f}intersectSphere(t,e){if(t.radius<0)return null;ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,T=n.z-o.z,S=Math.abs(l),v=Math.abs(c),b=Math.abs(h),A,x,w,R,D,N,B,L,U,W,V,O;if(S>=v&&S>=b?(w=l,N=d,U=m,O=p,l>=0?(A=c,x=h,R=u,D=f,B=_,L=g,W=M,V=T):(A=h,x=c,R=f,D=u,B=g,L=_,W=T,V=M)):v>=b?(w=c,N=u,U=_,O=M,c>=0?(A=h,x=l,R=f,D=d,B=g,L=m,W=T,V=p):(A=l,x=h,R=d,D=f,B=m,L=g,W=p,V=T)):(w=h,N=f,U=g,O=T,h>=0?(A=l,x=c,R=d,D=u,B=m,L=_,W=p,V=M):(A=c,x=l,R=u,D=d,B=_,L=m,W=M,V=p)),w===0)return null;let F=A/w,G=x/w,Y=1/w,z=R-F*N,$=D-G*N,nt=B-F*U,lt=L-G*U,at=W-F*O,X=V-G*O,tt=at*lt-X*nt,ht=z*X-$*at,Rt=nt*$-lt*z;if(s){if(tt<0||ht<0||Rt<0)return null}else if((tt<0||ht<0||Rt<0)&&(tt>0||ht>0||Rt>0))return null;let ft=tt+ht+Rt;if(ft===0)return null;let Ot=Y*(tt*N+ht*U+Rt*O);return(ft>0?Ot<0:Ot>0)?null:this.at(Ot/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mu=new Zt,Di=new Fi,oo=new Xe,gu=new P,ao=new P,lo=new P,co=new P,jl=new P,ho=new P,_u=new P,uo=new P,pe=class extends We{constructor(t=new fe,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(jl.fromBufferAttribute(d,t),o?ho.addScaledVector(jl,h):ho.addScaledVector(jl.sub(e),h))}e.add(ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(oo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(oo,gu)===null||Di.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),Di.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,v=T;S<v;S+=3){let b=a.getX(S),A=a.getX(S+1),x=a.getX(S+2);s=fo(this,p,t,n,c,h,d,b,A,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),T=a.getX(g+1),S=a.getX(g+2);s=fo(this,o,t,n,c,h,d,M,T,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let g=u[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,v=T;S<v;S+=3){let b=S,A=S+1,x=S+2;s=fo(this,p,t,n,c,h,d,b,A,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=g,T=g+1,S=g+2;s=fo(this,o,t,n,c,h,d,M,T,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function bm(i,t,e,n,s,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wn,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ao),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=bm(i,t,e,n,ao,lo,co,_u);if(h){let d=new P;ei.getBarycoord(_u,ao,lo,co,d),s&&(h.uv=ei.getInterpolatedAttribute(s,a,l,c,d,new Gt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,l,c,d,new Gt)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};ei.getNormal(ao,lo,co,u.normal),h.face=u,h.barycoord=d}return h}var Bn=class extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ve,h=Ve,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new Zt,xu=new Zt,po=[],vu=new ae,Sm=new Zt,Ys=new pe,$s=new Xe,_i=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ae),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),vu.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(vu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),$s.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),xu.multiplyMatrices(n,os),Ys.matrixWorld=xu,Ys.raycast(t,po);for(let o=0,a=po.length;o<a;o++){let l=po[o];l.instanceId=r,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bn(new Float32Array(s*this.count),s,this.count,Ps,Ye));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ni=new Xe,wm=new Gt(.5,.5),mo=new P,On=class{constructor(t=new Te,e=new Te,n=new Te,s=new Te,r=new Te,o=new Te){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],T=r[13],S=r[14],v=r[15];if(s[0].setComponents(c-o,f-h,p-m,v-M).normalize(),s[1].setComponents(c+o,f+h,p+m,v+M).normalize(),s[2].setComponents(c+a,f+d,p+_,v+T).normalize(),s[3].setComponents(c-a,f-d,p-_,v-T).normalize(),n)s[4].setComponents(l,u,g,S).normalize(),s[5].setComponents(c-l,f-u,p-g,v-S).normalize();else if(s[4].setComponents(c-l,f-u,p-g,v-S).normalize(),e===yn)s[5].setComponents(c+l,f+u,p+g,v+S).normalize();else if(e===ms)s[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=wm.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var an=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ho=new P,Vo=new P,yu=new Zt,Zs=new Fi,go=new Xe,Ql=new P,Mu=new P,Bi=class extends We{constructor(t=new fe,e=new an){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ho.fromBufferAttribute(e,s-1),Vo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ho.distanceTo(Vo);t.setAttribute("lineDistance",new be(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;yu.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=h.getX(_),M=h.getX(_+1),T=_o(this,t,Zs,l,p,M,_);T&&e.push(T)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=_o(this,t,Zs,l,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=_o(this,t,Zs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=_o(this,t,Zs,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _o(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ho.fromBufferAttribute(a,s),Vo.fromBufferAttribute(a,r),e.distanceSqToSegment(Ho,Vo,Ql,Mu)>n)return;Ql.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ql);if(!(c<t.near||c>t.far))return{distance:c,point:Mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var bu=new P,Su=new P,bn=class extends Bi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bu.fromBufferAttribute(e,s),Su.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bu.distanceTo(Su);t.setAttribute("lineDistance",new be(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sr=class extends Bi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},zn=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wu=new Zt,ac=new Fi,xo=new Xe,vo=new P,Sn=class extends We{constructor(t=new fe,e=new zn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;wu.copy(s).invert(),ac.copy(t.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let g=c.getX(m);vo.fromBufferAttribute(d,g),Eu(vo,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)vo.fromBufferAttribute(d,m),Eu(vo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eu(i,t,e,n,s,r,o){let a=ac.distanceSqToPoint(i);if(a<e){let l=new P;ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rr=class extends Ge{constructor(t=[],e=Mi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},or=class extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kn=class extends Ge{constructor(t,e,n=En,s,r,o,a=Ve,l=Ve,c,h=Nn,d=1){if(h!==Nn&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Go=class extends kn{constructor(t,e=En,n=Mi,s,r,o=Ve,a=Ve,l,c=Nn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ar=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pn=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function m(_,g,p,M,T,S,v,b,A,x,w){let R=S/A,D=v/x,N=S/2,B=v/2,L=b/2,U=A+1,W=x+1,V=0,O=0,F=new P;for(let G=0;G<W;G++){let Y=G*D-B;for(let z=0;z<U;z++){let $=z*R-N;F[_]=$*M,F[g]=Y*T,F[p]=L,c.push(F.x,F.y,F.z),F[_]=0,F[g]=0,F[p]=b>0?1:-1,h.push(F.x,F.y,F.z),d.push(z/A),d.push(1-G/x),V+=1}}for(let G=0;G<x;G++)for(let Y=0;Y<A;Y++){let z=u+Y+U*G,$=u+Y+U*(G+1),nt=u+(Y+1)+U*(G+1),lt=u+(Y+1)+U*G;l.push(z,$,lt),l.push($,nt,lt),O+=6}a.addGroup(f,O,w),f+=O,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Oi=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],g=n/2,p=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function M(){let S=new P,v=new P,b=0,A=(e-t)/n;for(let x=0;x<=r;x++){let w=[],R=x/r,D=R*(e-t)+t;for(let N=0;N<=s;N++){let B=N/s,L=B*l+a,U=Math.sin(L),W=Math.cos(L);v.x=D*U,v.y=-R*n+g,v.z=D*W,d.push(v.x,v.y,v.z),S.set(U,A,W).normalize(),u.push(S.x,S.y,S.z),f.push(B,1-R),w.push(m++)}_.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=_[w][x],D=_[w+1][x],N=_[w+1][x+1],B=_[w][x+1];(t>0||w!==0)&&(h.push(R,D,B),b+=3),(e>0||w!==r-1)&&(h.push(D,N,B),b+=3)}c.addGroup(p,b,0),p+=b}function T(S){let v=m,b=new Gt,A=new P,x=0,w=S===!0?t:e,R=S===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),m++;let D=m;for(let N=0;N<=s;N++){let L=N/s*l+a,U=Math.cos(L),W=Math.sin(L);A.x=w*W,A.y=g*R,A.z=w*U,d.push(A.x,A.y,A.z),u.push(0,R,0),b.x=U*.5+.5,b.y=W*.5*R+.5,f.push(b.x,b.y),m++}for(let N=0;N<s;N++){let B=v+N,L=D+N;S===!0?h.push(L,L+1,B):h.push(L+1,L,B),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class i extends Oi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yo=new P,Mo=new P,tc=new P,bo=new ei,zi=class extends fe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(us*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:g,c:p}=bo;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),bo.getNormal(tc),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let T=(M+1)%3,S=d[M],v=d[T],b=bo[h[M]],A=bo[h[T]],x=`${S}_${v}`,w=`${v}_${S}`;w in u&&u[w]?(tc.dot(u[w].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(A.x,A.y,A.z)),u[w]=null):x in u||(u[x]={index0:c[M],index1:c[T],normal:tc.clone()})}}for(let m in u)if(u[m]){let{index0:_,index1:g}=u[m];yo.fromBufferAttribute(a,_),Mo.fromBufferAttribute(a,g),f.push(yo.x,yo.y,yo.z),f.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new be(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ln=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*u-o;for(let T=0;T<c;T++){let S=T*d-r;m.push(S,-M,0),_.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let T=M+c*p,S=M+c*(p+1),v=M+1+c*(p+1),b=M+1+c*p;f.push(T,S,b),f.push(S,v,b)}this.setIndex(f),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hn=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let M=[],T=p/n,S=o+T*a,v=t*Math.cos(S),b=Math.sqrt(t*t-v*v),A=0;p===0&&o===0?A=.5/e:p===n&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let w=x/e,R=s+w*r;d.x=-b*Math.cos(R),d.y=v,d.z=b*Math.sin(R),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(w+A,1-T),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let T=h[p][M+1],S=h[p][M],v=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&f.push(T,S,b),(p!==n-1||l<Math.PI)&&f.push(S,v,b)}this.setIndex(f),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ss=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,m=new P;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,M=(s+1)*(_-1)+g-1,T=(s+1)*(_-1)+g,S=(s+1)*_+g;l.push(p,M,S),l.push(M,T,S)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tu(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function Tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Em(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var vd={clone:Gi,merge:je},Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wo=class extends Ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cr=class extends Mn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ws=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=_r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xo=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rc:r=t,a=2*e-n;break;case oc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:o=t,l=2*n-e;break;case oc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,T=(-1-f)*g+(1.5+f)*_+.5*m,S=f*g-f*_;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+M*o[c+v]+T*o[l+v]+S*o[d+v];return r}},$o=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Zo=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jo=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),_=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],p=f*u+m*2,M=d[p],T=d[p+1],S=t*u+m*2,v=h[S],b=h[S+1],A=Cm(n,e,M,v,s);r[m]=yd(A,_,T,b,g)}return r}};function yd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Rm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Cm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=yd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Rm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ec(t.settings)&&(n.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Fo:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break;case ic:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Eo;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ec(this.settings)&&(Au(this.settings.inTangents,t),Au(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Gp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Eo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Au(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Fo;var vi=class extends cn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Ks;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="color";var jo=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="number";var Qo=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)De.slerpFlat(r,0,o,c-a,o,c,l);return r}},hr=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends cn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Ks;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="vector";var Ao={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ru(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ru(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ru(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Md=new ea,Es=class{constructor(t){this.manager=t!==void 0?t:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Es.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=new WeakMap,na=class extends Es{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ao.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=ls.get(o);d===void 0&&(d=[],ls.set(o,d)),d.push({onLoad:e,onError:s})}return o}let a=gs("img");function l(){h(),e&&e(this);let d=ls.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}ls.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Ao.remove(`image:${t}`);let u=ls.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}ls.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ao.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var ur=class extends Es{constructor(t){super(t)}load(t,e,n,s){let r=new Ge,o=new na(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},dr=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fr=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nc=new Zt,Cu=new P,Iu=new P,ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new On,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ms||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},So=new P,wo=new De,Ln=new P,ki=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(So,wo,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,wo,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(So,wo,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,wo,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new P,Pu=new Gt,Lu=new Gt,Le=class extends ki{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Lu),e.subVectors(Lu,Pu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vn=class extends ki{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lc=class extends ia{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=class extends fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var cs=-90,hs=1,sa=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Le(cs,hs,t,e);r.layers=this.layers,this.add(r);let o=new Le(cs,hs,t,e);o.layers=this.layers,this.add(o);let a=new Le(cs,hs,t,e);a.layers=this.layers,this.add(a);let l=new Le(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Le(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ra=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zc="\\[\\]\\.:\\/",Im=new RegExp("["+zc+"]","g"),kc="[^"+zc+"]",Pm="[^"+zc.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",kc),Dm=/(WCOD+)?/.source.replace("WCOD",Pm),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),Fm=new RegExp("^"+Lm+Dm+Nm+Um+"$"),Bm=["material","materials","bones","map"],cc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(t){let e=Fm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=cc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cM=new Float32Array(1);var mr=class extends ko{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Du=new Zt,Gn=class{constructor(t,e,n=0,s=1/0){this.ray=new Fi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,n=[]){return hc(t,this,n,e),n.sort(Nu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hc(t[s],this,n,e);return n.sort(Nu),n}};function Nu(i,t){return i.distance-t.distance}function hc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)hc(r[o],t,e,!0)}}var qc=class qc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};qc.prototype.isMatrix2=!0;var uc=qc;function Hc(i,t,e,n){let s=Om(n);switch(e){case Ic:return i*t;case Ps:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case Pc:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:case va:return Math.max(i,16)*Math.max(t,8)/4;case ga:case xa:return Math.max(i,8)*Math.max(t,8)/2;case ya:case Ma:case Sa:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:case wr:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ga:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Er:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Om(i){switch(i){case nn:case Tc:return{byteLength:1,components:1};case Cs:case Ac:case Tn:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case En:case ha:case Ye:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function km(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
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
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tg=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hg=`#define PI 3.141592653589793
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
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dg=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rg=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
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
#endif`,zg=`uniform sampler2D dfgLUT;
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
}`,kg=`
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
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
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T_=`float getShadowMask() {
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
}`,A_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`#include <common>
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
}`,$_=`#if DEPTH_PACKING == 3200
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
}`,Z_=`#define DISTANCE
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
}`,J_=`#define DISTANCE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,a0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,h0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,f0=`#define TOON
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
}`,p0=`#define TOON
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
}`,m0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,y0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:$m,batching_pars_vertex:Zm,batching_vertex:Jm,begin_vertex:Km,beginnormal_vertex:jm,bsdfs:Qm,iridescence_fragment:tg,bumpmap_pars_fragment:eg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:lg,color_vertex:cg,common:hg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:fg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:_g,colorspace_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:yg,envmap_pars_fragment:Mg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Dg,envmap_vertex:Sg,fog_vertex:wg,fog_pars_vertex:Eg,fog_fragment:Tg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Rg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Pg,lights_pars_begin:Lg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Ug,lights_phong_fragment:Fg,lights_phong_pars_fragment:Bg,lights_physical_fragment:Og,lights_physical_pars_fragment:zg,lights_fragment_begin:kg,lights_fragment_maps:Hg,lights_fragment_end:Vg,lightprobes_pars_fragment:Gg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Yg,map_fragment:$g,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:t_,morphcolor_vertex:e_,morphnormal_vertex:n_,morphtarget_pars_vertex:i_,morphtarget_vertex:s_,normal_fragment_begin:r_,normal_fragment_maps:o_,normal_pars_fragment:a_,normal_pars_vertex:l_,normal_vertex:c_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:p_,opaque_fragment:m_,packing:g_,premultiplied_alpha_fragment:__,project_vertex:x_,dithering_fragment:v_,dithering_pars_fragment:y_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:w_,shadowmap_vertex:E_,shadowmask_pars_fragment:T_,skinbase_vertex:A_,skinning_pars_vertex:R_,skinning_vertex:C_,skinnormal_vertex:I_,specularmap_fragment:P_,specularmap_pars_fragment:L_,tonemapping_fragment:D_,tonemapping_pars_fragment:N_,transmission_fragment:U_,transmission_pars_fragment:F_,uv_pars_fragment:B_,uv_pars_vertex:O_,uv_vertex:z_,worldpos_vertex:k_,background_vert:H_,background_frag:V_,backgroundCube_vert:G_,backgroundCube_frag:W_,cube_vert:X_,cube_frag:q_,depth_vert:Y_,depth_frag:$_,distance_vert:Z_,distance_frag:J_,equirect_vert:K_,equirect_frag:j_,linedashed_vert:Q_,linedashed_frag:t0,meshbasic_vert:e0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:_0,shadow_frag:x0,sprite_vert:v0,sprite_frag:y0},Mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Yn={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Yn.physical={uniforms:je([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var $a={r:0,b:0,g:0},M0=new Zt,Wd=new Yt;Wd.set(-1,0,0,0,1,0,0,0,1);function b0(i,t,e,n,s,r){let o=new Ht(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let S=M.backgroundBlurriness>0;T=t.get(T,S)}return T}function m(M){let T=!1,S=f(M);S===null?g(o,a):S&&S.isColor&&(g(S,1),T=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,T){let S=f(T);S&&(S.isCubeTexture||S.mapping===xr)?(c===void 0&&(c=new pe(new pn(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Gi(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wd),c.material.toneMapped=ee.getTransfer(S.colorSpace)!==ue,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pe(new ln(2,2),new Ue({name:"BackgroundMaterial",uniforms:Gi(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ee.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB($a,Oc(i)),e.buffers.color.setClear($a.r,$a.g,$a.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:_,dispose:p}}function S0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,N,B,L,U){let W=!1,V=d(D,L,B,N);r!==V&&(r=V,c(r.object)),W=f(D,L,B,U),W&&m(D,L,B,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(D,N,B,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,N,B,L){let U=L.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let V=D.isInstancedMesh===!0?D.id:0,O=W[V];O===void 0&&(O={},W[V]=O);let F=O[B.id];F===void 0&&(F={},O[B.id]=F);let G=F[U];return G===void 0&&(G=u(l()),F[U]=G),G}function u(D){let N=[],B=[],L=[];for(let U=0;U<e;U++)N[U]=0,B[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,N,B,L){let U=r.attributes,W=N.attributes,V=0,O=B.getAttributes();for(let F in O)if(O[F].location>=0){let Y=U[F],z=W[F];if(z===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),Y===void 0||Y.attribute!==z||z&&Y.data!==z.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function m(D,N,B,L){let U={},W=N.attributes,V=0,O=B.getAttributes();for(let F in O)if(O[F].location>=0){let Y=W[F];Y===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));let z={};z.attribute=Y,Y&&Y.data&&(z.data=Y.data),U[F]=z,V++}r.attributes=U,r.attributesNum=V,r.index=L}function _(){let D=r.newAttributes;for(let N=0,B=D.length;N<B;N++)D[N]=0}function g(D){p(D,0)}function p(D,N){let B=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;B[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),U[D]!==N&&(i.vertexAttribDivisor(D,N),U[D]=N)}function M(){let D=r.newAttributes,N=r.enabledAttributes;for(let B=0,L=N.length;B<L;B++)N[B]!==D[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function T(D,N,B,L,U,W,V){V===!0?i.vertexAttribIPointer(D,N,B,U,W):i.vertexAttribPointer(D,N,B,L,U,W)}function S(D,N,B,L){_();let U=L.attributes,W=B.getAttributes(),V=N.defaultAttributeValues;for(let O in W){let F=W[O];if(F.location>=0){let G=U[O];if(G===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){let Y=G.normalized,z=G.itemSize,$=t.get(G);if($===void 0)continue;let nt=$.buffer,lt=$.type,at=$.bytesPerElement,X=lt===i.INT||lt===i.UNSIGNED_INT||G.gpuType===ha;if(G.isInterleavedBufferAttribute){let tt=G.data,ht=tt.stride,Rt=G.offset;if(tt.isInstancedInterleavedBuffer){for(let ft=0;ft<F.locationSize;ft++)p(F.location+ft,tt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<F.locationSize;ft++)g(F.location+ft);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ft=0;ft<F.locationSize;ft++)T(F.location+ft,z/F.locationSize,lt,Y,ht*at,(Rt+z/F.locationSize*ft)*at,X)}else{if(G.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)p(F.location+tt,G.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let tt=0;tt<F.locationSize;tt++)g(F.location+tt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let tt=0;tt<F.locationSize;tt++)T(F.location+tt,z/F.locationSize,lt,Y,z*at,z/F.locationSize*tt*at,X)}}else if(V!==void 0){let Y=V[O];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(F.location,Y);break;case 3:i.vertexAttrib3fv(F.location,Y);break;case 4:i.vertexAttrib4fv(F.location,Y);break;default:i.vertexAttrib1fv(F.location,Y)}}}}M()}function v(){w();for(let D in n){let N=n[D];for(let B in N){let L=N[B];for(let U in L){let W=L[U];for(let V in W)h(W[V].object),delete W[V];delete L[U]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let B in N){let L=N[B];for(let U in L){let W=L[U];for(let V in W)h(W[V].object),delete W[V];delete L[U]}}delete n[D.id]}function A(D){for(let N in n){let B=n[N];for(let L in B){let U=B[L];if(U[D.id]===void 0)continue;let W=U[D.id];for(let V in W)h(W[V].object),delete W[V];delete U[D.id]}}}function x(D){for(let N in n){let B=n[N],L=D.isInstancedMesh===!0?D.id:0,U=B[L];if(U!==void 0){for(let W in U){let V=U[W];for(let O in V)h(V[O].object),delete V[O];delete U[W]}delete B[L],Object.keys(B).length===0&&delete n[N]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function w0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function E0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==nn&&A!==Ye&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:v,samples:b}}function T0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Te,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,T=M*4,S=p.clippingState||null;l.value=S,S=h(m,u,T,f);for(let v=0;v!==T;++v)S[v]=e[v];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,S=f;T!==_;++T,S+=4)o.copy(d[T]).applyMatrix4(M,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Ds=4,A0=6,R0=20,C0=256,Rr=new Vn,bd=new Ht,Yc=null,$c=0,Zc=0,Jc=!1,I0=new P,Wi=new P,Ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=I0}=r;Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yc,$c,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Tn,format:sn,colorSpace:js,depthBuffer:!1},s=Sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P0(r)),this._blurMaterial=D0(r,t,e),this._ggxMaterial=L0(r,t,e)}return s}_compileMaterial(t){let e=new pe(new fe,t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s,r){let l=new Le(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bd),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new pn,new Ke({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(bd),p=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let v=this._cubeSize;Ls(s,S*v,T>2?v:0,v,v),d.setRenderTarget(s),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Mi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Ds?n-m+Ds:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ls(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ls(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Rr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ds?s-this._lodMax+Ds:0),u=4*(this._cubeSize-h);Ls(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Rr)}};function P0(i){let t=[],e=[],n=i,s=i-Ds+1+A0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,T=p>2?0:-1,S=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(S,f*u*p);for(let v=0;v<u;v++){let b=h[v*2]*2-1,A=h[v*2+1]*2-1;p===0?Wi.set(1,A,b):p===1?Wi.set(-b,1,-A):p===2?Wi.set(-b,A,1):p===3?Wi.set(-1,A,-b):p===4?Wi.set(-b,-1,A):Wi.set(b,A,-1),Wi.toArray(_,(p*u+v)*f)}}let g=new fe;g.setAttribute("position",new Ae(m,f)),g.setAttribute("outputDirection",new Ae(_,f)),e.push(new pe(g,null)),n>Ds&&n--}return{lodMeshes:e,sizeLods:t}}function Sd(i,t,e){let n=new Ne(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function L0(i,t,e){return new Ue({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function D0(i,t,e){return new Ue({name:"SphericalGaussianBlur",defines:{SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function wd(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ed(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ka=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Xn});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=qe),new sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function N0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===aa||f===la)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Ka(m.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===aa||f===la,_=f===Mi||f===Vi;if(m||_){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ja(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Ja(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===aa?u.mapping=Mi:f===la&&(u.mapping=Vi),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function U0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ui("WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let T=0,S=M.length;T<S;T+=3){let v=M[T+0],b=M[T+1],A=M[T+2];u.push(v,b,b,A,A,v)}}else{let M=m.array;_=m.version;for(let T=0,S=M.length/3-1;T<S;T+=3){let v=T+0,b=T+1,A=T+2;u.push(v,b,b,A,A,v)}}let g=new(m.count>=65535?ir:nr)(u,1);g.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function B0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function O0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let S=a.attributes.position.count*T,v=1;S>t.maxTextureSize&&(v=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let b=new Float32Array(S*v*4*d),A=new er(b,S,v,d);A.type=Ye,A.needsUpdate=!0;let x=T*4;for(let R=0;R<d;R++){let D=g[R],N=p[R],B=M[R],L=S*v*4*R;for(let U=0;U<D.count;U++){let W=U*x;f===!0&&(s.fromBufferAttribute(D,U),b[L+W+0]=s.x,b[L+W+1]=s.y,b[L+W+2]=s.z,b[L+W+3]=0),m===!0&&(s.fromBufferAttribute(N,U),b[L+W+4]=s.x,b[L+W+5]=s.y,b[L+W+6]=s.z,b[L+W+7]=0),_===!0&&(s.fromBufferAttribute(B,U),b[L+W+8]=s.x,b[L+W+9]=s.y,b[L+W+10]=s.z,b[L+W+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Gt(S,v)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function k0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var H0={[xc]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function V0(i,t,e,n,s,r){let o=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new fe;c.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new be([0,2,0,0,2,0],2));let h=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pe(c,h),u=new Vn(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,M=[],T=!1;this.setSize=function(S,v){o.setSize(S,v),a!==null&&a.setSize(S,v),l!==null&&l.setSize(S,v);for(let b=0;b<M.length;b++){let A=M[b];A.setSize&&A.setSize(S,v)}},this.setEffects=function(S){M=S,T=M.length>0&&M[0].isRenderPass===!0;let v=o.width,b=o.height;M.length>0&&a===null&&(a=new Ne(v,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(v,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(v,b)}},this.begin=function(S,v){if(_||S.toneMapping===wn&&M.length===0)return!1;if(p=v,v!==null){let b=v.width,A=v.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return T===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=wn,!0},this.hasRenderPass=function(){return T},this.end=function(S,v){S.toneMapping=g,_=!0;let b=o,A=a;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(S,A,b,v),w.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(f!==S.outputColorSpace||m!==S.toneMapping){f=S.outputColorSpace,m=S.toneMapping,h.defines={},ee.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let x=H0[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xd=new Ge,Qc=new kn(1,1),qd=new er,Yd=new zo,$d=new rr,Td=[],Ad=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Id=new Float32Array(4);function Us(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Td[s];if(r===void 0&&(r=new Float32Array(s),Td[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qa(i,t){let e=Ad[t];e===void 0&&(e=new Int32Array(t),Ad[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Id.set(n),i.uniformMatrix2fv(this.addr,!1,Id),ke(e,n)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Cd.set(n),i.uniformMatrix3fv(this.addr,!1,Cd),ke(e,n)}}function Z0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Rd.set(n),i.uniformMatrix4fv(this.addr,!1,Rd),ke(e,n)}}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?Ya:qa,r=Qc):r=Xd,e.setTexture2D(t||r,s)}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yd,s)}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$d,s)}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qd,s)}function lx(i){switch(i){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return $0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return K0;case 35668:case 35672:return j0;case 35669:case 35673:return Q0;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(i,t){i.uniform1fv(this.addr,t)}function hx(i,t){let e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function ux(i,t){let e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function dx(i,t){let e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function fx(i,t){let e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function px(i,t){let e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mx(i,t){let e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gx(i,t){i.uniform1iv(this.addr,t)}function _x(i,t){i.uniform2iv(this.addr,t)}function xx(i,t){i.uniform3iv(this.addr,t)}function vx(i,t){i.uniform4iv(this.addr,t)}function yx(i,t){i.uniform1uiv(this.addr,t)}function Mx(i,t){i.uniform2uiv(this.addr,t)}function bx(i,t){i.uniform3uiv(this.addr,t)}function Sx(i,t){i.uniform4uiv(this.addr,t)}function wx(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qc:o=Xd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ex(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yd,r[o])}function Tx(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$d,r[o])}function Ax(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qd,r[o])}function Rx(i){switch(i){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return vx;case 5125:return yx;case 36294:return Mx;case 36295:return bx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lx(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rx(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Pd(i,t){i.seq.push(t),i.map[t.id]=t}function Cx(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),o=Kc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pd(e,c===void 0?new th(a,i,t):new eh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new nh(a),Pd(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Cx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ix=37297,Px=0;function Lx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Dd=new Yt;function Dx(i){ee._getMatrix(Dd,ee.workingColorSpace,i);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Qs:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Lx(i.getShaderSource(t),a)}else return r}function Nx(i,t){let e=Dx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ux={[xc]:"Linear",[vc]:"Reinhard",[yc]:"Cineon",[Mc]:"ACESFilmic",[Sc]:"AgX",[wc]:"Neutral",[bc]:"Custom"};function Fx(i,t){let e=Ux[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Za=new P;function Bx(){ee.getLuminanceCoefficients(Za);let i=Za.x.toFixed(4),t=Za.y.toFixed(4),e=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function zx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ir(i){return i!==""}function Ud(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(Hx,Gx)}var Vx=new Map;function Gx(i,t){let e=jt[t];if(e===void 0){let n=Vx.get(t);if(n!==void 0)e=jt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ih(e)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(Wx,Xx)}function Xx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Od(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var qx={[gr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Yx(i){return qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $x={[Mi]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function Zx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$x[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jx={[Vi]:"ENVMAP_MODE_REFRACTION"};function Kx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jx={[_r]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function Qx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jx[i.combine]||"ENVMAP_BLENDING_NONE"}function tv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ev(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Yx(e),c=Zx(e),h=Kx(e),d=Qx(e),u=tv(e),f=Ox(e),m=zx(r),_=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(g=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?jt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Nx("linearToOutputTexel",e.outputColorSpace),Bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=ih(o),o=Ud(o,e),o=Fd(o,e),a=ih(a),a=Ud(a,e),a=Fd(a,e),o=Bd(o),a=Bd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+g+o,S=M+p+a,v=Ld(s,s.VERTEX_SHADER,T),b=Ld(s,s.FRAGMENT_SHADER,S);s.attachShader(_,v),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(v)||"",L=s.getShaderInfoLog(b)||"",U=N.trim(),W=B.trim(),V=L.trim(),O=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,b);else{let G=Nd(s,v,"vertex"),Y=Nd(s,b,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+G+`
`+Y)}else U!==""?kt("WebGLProgram: Program Info Log:",U):(W===""||V==="")&&(F=!1);F&&(D.diagnostics={runnable:O,programLog:U,vertexShader:{log:W,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(v),s.deleteShader(b),x=new Ns(s,_),w=kx(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,Ix)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=b,this}var nv=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}};function iv(i){return i===wi||i===wr||i===Er}function sv(i,t,e,n,s,r){let o=new ys,a=new sh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,R,D,N,B){let L=D.fog,U=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||W,V),F=O&&O.mapping===xr?O.image.height:null,G=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,z=Y!==void 0?Y.length:0,$=0;U.morphAttributes.position!==void 0&&($=1),U.morphAttributes.normal!==void 0&&($=2),U.morphAttributes.color!==void 0&&($=3);let nt,lt,at,X;if(G){let ve=Yn[G];nt=ve.vertexShader,lt=ve.fragmentShader}else{nt=x.vertexShader,lt=x.fragmentShader;let ve=a.getVertexShaderStage(x),ce=a.getFragmentShaderStage(x);a.update(x,ve,ce),at=ve.id,X=ce.id}let tt=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,ft=N.isBatchedMesh===!0,Ot=!!x.map,Ct=!!x.matcap,It=!!O,Xt=!!x.aoMap,$t=!!x.lightMap,qt=!!x.bumpMap&&x.wireframe===!1,Qt=!!x.normalMap,ie=!!x.displacementMap,ge=!!x.emissiveMap,dt=!!x.metalnessMap,zt=!!x.roughnessMap,I=x.anisotropy>0,ut=x.clearcoat>0,Et=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,q=x.sheen>0,j=x.transmission>0,it=I&&!!x.anisotropyMap,pt=ut&&!!x.clearcoatMap,mt=ut&&!!x.clearcoatNormalMap,st=ut&&!!x.clearcoatRoughnessMap,ot=y&&!!x.iridescenceMap,gt=y&&!!x.iridescenceThicknessMap,Ut=q&&!!x.sheenColorMap,yt=q&&!!x.sheenRoughnessMap,_t=!!x.specularMap,Ft=!!x.specularColorMap,Vt=!!x.specularIntensityMap,Jt=j&&!!x.transmissionMap,H=j&&!!x.thicknessMap,xt=!!x.gradientMap,rt=!!x.alphaMap,vt=x.alphaTest>0,wt=!!x.alphaHash,ct=!!x.extensions,Bt=wn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Dt={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:lt,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ft,batchingColor:ft&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Ct,envMap:It,envMapMode:It&&O.mapping,envMapCubeUVHeight:F,aoMap:Xt,lightMap:$t,bumpMap:qt,normalMap:Qt,displacementMap:ie,emissiveMap:ge,normalMapObjectSpace:Qt&&x.normalMapType===od,normalMapTangentSpace:Qt&&x.normalMapType===Tr,packedNormalMap:Qt&&x.normalMapType===Tr&&iv(x.normalMap.format),metalnessMap:dt,roughnessMap:zt,anisotropy:I,anisotropyMap:it,clearcoat:ut,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:st,dispersion:Et,retroreflection:C,iridescence:y,iridescenceMap:ot,iridescenceThicknessMap:gt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:_t,specularColorMap:Ft,specularIntensityMap:Vt,transmission:j,transmissionMap:Jt,thicknessMap:H,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Rs&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:vt,alphaHash:wt,combine:x.combine,mapUv:Ot&&m(x.map.channel),aoMapUv:Xt&&m(x.aoMap.channel),lightMapUv:$t&&m(x.lightMap.channel),bumpMapUv:qt&&m(x.bumpMap.channel),normalMapUv:Qt&&m(x.normalMap.channel),displacementMapUv:ie&&m(x.displacementMap.channel),emissiveMapUv:ge&&m(x.emissiveMap.channel),metalnessMapUv:dt&&m(x.metalnessMap.channel),roughnessMapUv:zt&&m(x.roughnessMap.channel),anisotropyMapUv:it&&m(x.anisotropyMap.channel),clearcoatMapUv:pt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(x.sheenRoughnessMap.channel),specularMapUv:_t&&m(x.specularMap.channel),specularColorMapUv:Ft&&m(x.specularColorMap.channel),specularIntensityMapUv:Vt&&m(x.specularIntensityMap.channel),transmissionMapUv:Jt&&m(x.transmissionMap.channel),thicknessMapUv:H&&m(x.thicknessMap.channel),alphaMapUv:rt&&m(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Qt||I),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Ot||rt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&Qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:ge&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oe,flipSided:x.side===Be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let w=f[x.type],R;if(w){let D=Yn[w];R=vd.clone(D.uniforms)}else R=x.uniforms;return R}function S(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new ev(i,w,x,s),c.push(R),h.set(w,R)),R}function v(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:S,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:A}}function rv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ov(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,g,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,f,m,_,g,p,M){M.reversedDepth===!0&&(g=-g);let T=a(u,f,m,_,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function c(u,f,m,_,g,p){let M=a(u,f,m,_,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||ov),n.length>1&&n.sort(f||zd),s.length>1&&s.sort(f||zd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function av(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new kd,i.set(n,[o])):s>=r.length?(o=new kd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function cv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hv=0;function uv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dv(i){let t=new lv,e=cv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Zt,o=new Zt;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,T=0,S=0,v=0,b=0,A=0,x=0,w=0,R=0;c.sort(uv);for(let N=0,B=c.length;N<B;N++){let L=c[N],U=L.color,W=L.intensity,V=L.distance,O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===wi?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=U.r*W,d+=U.g*W,u+=U.b*W;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],W);R++}else if(L.isSunLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,Y=e.get(L);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=Y,n.sunShadowMap[m]=O;let z=G.getViewportCount();for(let $=0;$<z;$++)n.sunShadowMatrix[_+$]=G.getMatrix($),n.sunShadowCascade[_+$]=G._cascadeData[$];_+=z,m++}n.sun[f]=F,f++}else if(L.isDirectionalLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,Y=e.get(L);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=L.shadow.matrix,v++}n.directional[g]=F,g++}else if(L.isSpotLight){let F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(U).multiplyScalar(W),F.distance=V,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[M]=F;let G=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,G.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=G.matrix,L.castShadow){let Y=e.get(L);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=O,A++}M++}else if(L.isRectAreaLight){let F=t.get(L);F.color.copy(U).multiplyScalar(W),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=F,T++}else if(L.isPointLight){let F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let G=L.shadow,Y=e.get(L);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=F,p++}else if(L.isHemisphereLight){let F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(W),F.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[S]=F,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==m||D.numDirectionalShadows!==v||D.numPointShadows!==b||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.sunLength=f,D.directionalLength=g,D.pointLength=p,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=m,D.numDirectionalShadows=v,D.numPointShadows=b,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=R,n.version=hv++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let S=c[M];if(S.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Hd(i){let t=new dv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function fv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hd(i),t.set(s,[a])):r>=o.length?(a=new Hd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`,gv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],_v=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Vd=new Zt,Cr=new P,jc=new P;function xv(i,t,e){let n=new On,s=new Gt,r=new Gt,o=new xe,a=new Xo,l=new qo,c={},h=e.maxTextureSize,d={[Wn]:Be,[Be]:Wn,[Oe]:Oe},u=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new fe;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let p=this.type;this.render=function(b,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Bu&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Xn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=b.length;L<U;L++){let W=b[L],V=W.shadow;if(V===void 0){kt("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let O=V.getFrameExtents();s.multiply(O),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,V.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=F,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===As){if(W.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ne(s.x,s.y,{format:wi,type:Tn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new kn(s.x,s.y,Ye),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Nn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ve,V.map.depthTexture.magFilter=Ve}else W.isPointLight?(V.map=new Ka(s.x),V.map.depthTexture=new Go(s.x,En)):(V.map=new Ne(s.x,s.y),V.map.depthTexture=new kn(s.x,s.y,En)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Nn,this.type===gr?(V.map.depthTexture.compareFunction=F?Ya:qa,V.map.depthTexture.minFilter=qe,V.map.depthTexture.magFilter=qe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ve,V.map.depthTexture.magFilter=Ve);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let G=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,x);for(let Y=0;Y<G;Y++){let z=V.getCamera(Y);if(W.isPointLight){let $=V.camera,nt=V.matrix,lt=W.distance||$.far;lt!==$.far&&($.far=lt,$.updateProjectionMatrix()),Cr.setFromMatrixPosition(W.matrixWorld),$.position.copy(Cr),jc.copy($.position),jc.add(gv[Y]),$.up.copy(_v[Y]),$.lookAt(jc),$.updateMatrixWorld(),nt.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Vd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Vd,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(V.map),i.clear());let $=V.getViewport(Y);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),N.viewport(o)}n=V.getFrustum(Y),S(A,x,z,W,this.type)}V.isPointLightShadow!==!0&&this.type===As&&M(V,x),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,D)};function M(b,A){let x=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ne(s.x,s.y,{format:wi,type:Tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,x,f,_,null)}function T(b,A,x,w){let R=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,B=A.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let U=L[B];U===void 0&&(U=R.clone(),L[B]=U,A.addEventListener("dispose",v)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,w===As?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=x}return R}function S(b,A,x,w,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===As)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let B=t.update(b),L=b.material;if(Array.isArray(L)){let U=B.groups;for(let W=0,V=U.length;W<V;W++){let O=U[W],F=L[O.materialIndex];if(F&&F.visible){let G=T(b,F,w,R);b.onBeforeShadow(i,b,A,x,B,G,O),i.renderBufferDirect(x,null,B,G,b,O),b.onAfterShadow(i,b,A,x,B,G,O)}}}else if(L.visible){let U=T(b,L,w,R);b.onBeforeShadow(i,b,A,x,B,U,null),i.renderBufferDirect(x,null,B,U,b,null),b.onAfterShadow(i,b,A,x,B,U,null)}}let N=b.children;for(let B=0,L=N.length;B<L;B++)S(N[B],A,x,w,R)}function v(b){b.target.removeEventListener("dispose",v);for(let x in c){let w=c[x],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function vv(i,t){function e(){let H=!1,xt=new xe,rt=null,vt=new xe(0,0,0,0);return{setMask:function(wt){rt!==wt&&!H&&(i.colorMask(wt,wt,wt,wt),rt=wt)},setLocked:function(wt){H=wt},setClear:function(wt,ct,Bt,Dt,ve){ve===!0&&(wt*=Dt,ct*=Dt,Bt*=Dt),xt.set(wt,ct,Bt,Dt),vt.equals(xt)===!1&&(i.clearColor(wt,ct,Bt,Dt),vt.copy(xt))},reset:function(){H=!1,rt=null,vt.set(-1,0,0,0)}}}function n(){let H=!1,xt=!1,rt=null,vt=null,wt=null;return{setReversed:function(ct){if(xt!==ct){let Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),xt=ct;let Dt=wt;wt=null,this.setClear(Dt)}},getReversed:function(){return xt},setTest:function(ct){ct?tt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!H&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(xt&&(ct=_d[ct]),vt!==ct){switch(ct){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ct}},setLocked:function(ct){H=ct},setClear:function(ct){wt!==ct&&(wt=ct,xt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){H=!1,rt=null,vt=null,wt=null,xt=!1}}}function s(){let H=!1,xt=null,rt=null,vt=null,wt=null,ct=null,Bt=null,Dt=null,ve=null;return{setTest:function(ce){H||(ce?tt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!H&&(i.stencilMask(ce),xt=ce)},setFunc:function(ce,mn,In){(rt!==ce||vt!==mn||wt!==In)&&(i.stencilFunc(ce,mn,In),rt=ce,vt=mn,wt=In)},setOp:function(ce,mn,In){(ct!==ce||Bt!==mn||Dt!==In)&&(i.stencilOp(ce,mn,In),ct=ce,Bt=mn,Dt=In)},setLocked:function(ce){H=ce},setClear:function(ce){ve!==ce&&(i.clearStencil(ce),ve=ce)},reset:function(){H=!1,xt=null,rt=null,vt=null,wt=null,ct=null,Bt=null,Dt=null,ve=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,M=null,T=null,S=null,v=null,b=null,A=null,x=new Ht(0,0,0),w=0,R=!1,D=null,N=null,B=null,L=null,U=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,O=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=O>=2);let G=null,Y={},z=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),nt=new xe().fromArray(z),lt=new xe().fromArray($);function at(H,xt,rt,vt){let wt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(H,ct),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<rt;Bt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ct}let X={};X[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(fs),qt(!1),Qt(dc),tt(i.CULL_FACE),Xt(Xn);function tt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function ht(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Rt(H,xt){return u[H]!==xt?(i.bindFramebuffer(H,xt),u[H]=xt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function ft(H,xt){let rt=m,vt=!1;if(H){rt=f.get(xt),rt===void 0&&(rt=[],f.set(xt,rt));let wt=H.textures;if(rt.length!==wt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Bt=wt.length;ct<Bt;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=wt.length,vt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(rt)}function Ot(H){return _!==H?(i.useProgram(H),_=H,!0):!1}let Ct={[Hi]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};Ct[Hu]=i.MIN,Ct[Vu]=i.MAX;let It={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function Xt(H,xt,rt,vt,wt,ct,Bt,Dt,ve,ce){if(H===Xn){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),H!==Ou){if(H!==p||ce!==R){if((M!==Hi||v!==Hi)&&(i.blendEquation(i.FUNC_ADD),M=Hi,v=Hi),ce)switch(H){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",H);break}else switch(H){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",H);break}T=null,S=null,b=null,A=null,x.set(0,0,0),w=0,p=H,R=ce}return}wt=wt||xt,ct=ct||rt,Bt=Bt||vt,(xt!==M||wt!==v)&&(i.blendEquationSeparate(Ct[xt],Ct[wt]),M=xt,v=wt),(rt!==T||vt!==S||ct!==b||Bt!==A)&&(i.blendFuncSeparate(It[rt],It[vt],It[ct],It[Bt]),T=rt,S=vt,b=ct,A=Bt),(Dt.equals(x)===!1||ve!==w)&&(i.blendColor(Dt.r,Dt.g,Dt.b,ve),x.copy(Dt),w=ve),p=H,R=!1}function $t(H,xt){H.side===Oe?ht(i.CULL_FACE):tt(i.CULL_FACE);let rt=H.side===Be;xt&&(rt=!rt),qt(rt),H.blending===Rs&&H.transparent===!1?Xt(Xn):Xt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let vt=H.stencilWrite;a.setTest(vt),vt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function Qt(H){H!==Uu?(tt(i.CULL_FACE),H!==N&&(H===dc?i.cullFace(i.BACK):H===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),N=H}function ie(H){H!==B&&(V&&i.lineWidth(H),B=H)}function ge(H,xt,rt){H?(tt(i.POLYGON_OFFSET_FILL),(L!==xt||U!==rt)&&(L=xt,U=rt,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,rt))):ht(i.POLYGON_OFFSET_FILL)}function dt(H){H?tt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function zt(H){H===void 0&&(H=i.TEXTURE0+W-1),G!==H&&(i.activeTexture(H),G=H)}function I(H,xt,rt){rt===void 0&&(G===null?rt=i.TEXTURE0+W-1:rt=G);let vt=Y[rt];vt===void 0&&(vt={type:void 0,texture:void 0},Y[rt]=vt),(vt.type!==H||vt.texture!==xt)&&(G!==rt&&(i.activeTexture(rt),G=rt),i.bindTexture(H,xt||X[H]),vt.type=H,vt.texture=xt)}function ut(){let H=Y[G];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Et(){try{i.compressedTexImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function y(){try{i.texSubImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function q(){try{i.texSubImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function pt(){try{i.texStorage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function mt(){try{i.texStorage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function st(){try{i.texImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function ot(){try{i.texImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function gt(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Ut(H,xt){d[H]!==xt&&(i.pixelStorei(H,xt),d[H]=xt)}function yt(H){nt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),nt.copy(H))}function _t(H){lt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),lt.copy(H))}function Ft(H,xt){let rt=c.get(xt);rt===void 0&&(rt=new WeakMap,c.set(xt,rt));let vt=rt.get(H);vt===void 0&&(vt=i.getUniformBlockIndex(xt,H.name),rt.set(H,vt))}function Vt(H,xt){let vt=c.get(xt).get(H);l.get(xt)!==vt&&(i.uniformBlockBinding(xt,vt,H.__bindingPointIndex),l.set(xt,vt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},G=null,Y={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,M=null,T=null,S=null,v=null,b=null,A=null,x=new Ht(0,0,0),w=0,R=!1,D=null,N=null,B=null,L=null,U=null,nt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:ht,bindFramebuffer:Rt,drawBuffers:ft,useProgram:Ot,setBlending:Xt,setMaterial:$t,setFlipSided:qt,setCullFace:Qt,setLineWidth:ie,setPolygonOffset:ge,setScissorTest:dt,activeTexture:zt,bindTexture:I,unbindTexture:ut,compressedTexImage2D:Et,compressedTexImage3D:C,texImage2D:st,texImage3D:ot,pixelStorei:Ut,getParameter:gt,updateUBOMapping:Ft,uniformBlockBinding:Vt,texStorage2D:pt,texStorage3D:mt,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:it,scissor:yt,viewport:_t,reset:Jt}}function yv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return m?new OffscreenCanvas(C,y):gs("canvas")}function g(C,y,q){let j=1,it=Et(C);if((it.width>q||it.height>q)&&(j=q/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let pt=Math.floor(j*it.width),mt=Math.floor(j*it.height);u===void 0&&(u=_(pt,mt));let st=y?_(pt,mt):u;return st.width=pt,st.height=mt,st.getContext("2d").drawImage(C,0,0,pt,mt),kt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+pt+"x"+mt+")."),st}else return"data"in C&&kt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,q,j,it,pt=!1){if(C!==null){if(i[C]!==void 0)return i[C];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;j&&(mt=t.get("EXT_texture_norm16"),mt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=y;if(y===i.RED&&(q===i.FLOAT&&(st=i.R32F),q===i.HALF_FLOAT&&(st=i.R16F),q===i.UNSIGNED_BYTE&&(st=i.R8),q===i.UNSIGNED_SHORT&&mt&&(st=mt.R16_EXT),q===i.SHORT&&mt&&(st=mt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.R8UI),q===i.UNSIGNED_SHORT&&(st=i.R16UI),q===i.UNSIGNED_INT&&(st=i.R32UI),q===i.BYTE&&(st=i.R8I),q===i.SHORT&&(st=i.R16I),q===i.INT&&(st=i.R32I)),y===i.RG&&(q===i.FLOAT&&(st=i.RG32F),q===i.HALF_FLOAT&&(st=i.RG16F),q===i.UNSIGNED_BYTE&&(st=i.RG8),q===i.UNSIGNED_SHORT&&mt&&(st=mt.RG16_EXT),q===i.SHORT&&mt&&(st=mt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RG8UI),q===i.UNSIGNED_SHORT&&(st=i.RG16UI),q===i.UNSIGNED_INT&&(st=i.RG32UI),q===i.BYTE&&(st=i.RG8I),q===i.SHORT&&(st=i.RG16I),q===i.INT&&(st=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGB8UI),q===i.UNSIGNED_SHORT&&(st=i.RGB16UI),q===i.UNSIGNED_INT&&(st=i.RGB32UI),q===i.BYTE&&(st=i.RGB8I),q===i.SHORT&&(st=i.RGB16I),q===i.INT&&(st=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),q===i.UNSIGNED_INT&&(st=i.RGBA32UI),q===i.BYTE&&(st=i.RGBA8I),q===i.SHORT&&(st=i.RGBA16I),q===i.INT&&(st=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_SHORT&&mt&&(st=mt.RGB16_EXT),q===i.SHORT&&mt&&(st=mt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),y===i.RGBA){let ot=pt?Qs:ee.getTransfer(it);q===i.FLOAT&&(st=i.RGBA32F),q===i.HALF_FLOAT&&(st=i.RGBA16F),q===i.UNSIGNED_BYTE&&(st=ot===ue?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&mt&&(st=mt.RGBA16_EXT),q===i.SHORT&&mt&&(st=mt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(C,y){let q;return C?y===null||y===En||y===Is?q=i.DEPTH24_STENCIL8:y===Ye?q=i.DEPTH32F_STENCIL8:y===Cs&&(q=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===En||y===Is?q=i.DEPTH_COMPONENT24:y===Ye?q=i.DEPTH_COMPONENT32F:y===Cs&&(q=i.DEPTH_COMPONENT16),q}function b(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==qe?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),D(y)}function w(C){let y=n.get(C);if(y.__webglInit===void 0)return;let q=C.source,j=f.get(q);if(j){let it=j[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(C),Object.keys(j).length===0&&f.delete(q)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let q=C.source,j=f.get(q);delete j[y.__cacheKey],o.memory.textures--}function D(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let it=0;it<y.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(y.__webglFramebuffer[j][it]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=C.textures;for(let j=0,it=q.length;j<it;j++){let pt=n.get(q[j]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(q[j])}n.remove(C)}let N=0;function B(){N=0}function L(){return N}function U(C){N=C}function W(){let C=N;return C>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function V(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function O(C,y){let q=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let j=C.image;if(j===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(q,C,y);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function F(C,y){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){ht(q,C,y);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function G(C,y){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){ht(q,C,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function Y(C,y){let q=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){Rt(q,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let z={[ps]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},$={[Ve]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},nt={[ld]:i.NEVER,[fd]:i.ALWAYS,[cd]:i.LESS,[qa]:i.LEQUAL,[hd]:i.EQUAL,[Ya]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function lt(C,y){if(y.type===Ye&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===qe||y.magFilter===ca||y.magFilter===vr||y.magFilter===bi||y.minFilter===qe||y.minFilter===ca||y.minFilter===vr||y.minFilter===bi)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,z[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,z[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,z[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ve||y.minFilter!==vr&&y.minFilter!==bi||y.type===Ye&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function at(C,y){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let j=y.source,it=f.get(j);it===void 0&&(it={},f.set(j,it));let pt=V(y);if(pt!==C.__cacheKey){it[pt]===void 0&&(it[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[pt].usedTimes++;let mt=it[C.__cacheKey];mt!==void 0&&(it[C.__cacheKey].usedTimes--,mt.usedTimes===0&&R(y)),C.__cacheKey=pt,C.__webglTexture=it[pt].texture}return q}function X(C,y,q){return Math.floor(Math.floor(C/q)/y)}function tt(C,y,q,j){let pt=C.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,j,y.data);else{pt.sort((Ut,yt)=>Ut.start-yt.start);let mt=0;for(let Ut=1;Ut<pt.length;Ut++){let yt=pt[mt],_t=pt[Ut],Ft=yt.start+yt.count,Vt=X(_t.start,y.width,4),Jt=X(yt.start,y.width,4);_t.start<=Ft+1&&Vt===Jt&&X(_t.start+_t.count-1,y.width,4)===Vt?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++mt,pt[mt]=_t)}pt.length=mt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ut=0,yt=pt.length;Ut<yt;Ut++){let _t=pt[Ut],Ft=Math.floor(_t.start/4),Vt=Math.ceil(_t.count/4),Jt=Ft%y.width,H=Math.floor(Ft/y.width),xt=Vt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Jt,H,xt,rt,q,j,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function ht(C,y,q){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);let it=at(C,y),pt=y.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+q);let mt=n.get(pt);if(pt.version!==mt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let rt=ee.getPrimaries(ee.workingColorSpace),vt=y.colorSpace===ri?null:ee.getPrimaries(y.colorSpace),wt=y.colorSpace===ri||rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ot=g(y.image,!1,s.maxTextureSize);ot=ut(y,ot);let gt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),yt=S(y.internalFormat,gt,Ut,y.normalized,y.colorSpace,y.isVideoTexture);lt(j,y);let _t,Ft=y.mipmaps,Vt=y.isVideoTexture!==!0,Jt=mt.__version===void 0||it===!0,H=pt.dataReady,xt=b(y,ot);if(y.isDepthTexture)yt=v(y.format===Si,y.type),Jt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,yt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,yt,ot.width,ot.height,0,gt,Ut,null));else if(y.isDataTexture)if(Ft.length>0){Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ft[0].width,Ft[0].height);for(let rt=0,vt=Ft.length;rt<vt;rt++)_t=Ft[rt],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,gt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,rt,yt,_t.width,_t.height,0,gt,Ut,_t.data);y.generateMipmaps=!1}else Vt?(Jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,ot.width,ot.height),H&&tt(y,ot,gt,Ut)):e.texImage2D(i.TEXTURE_2D,0,yt,ot.width,ot.height,0,gt,Ut,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,Ft[0].width,Ft[0].height,ot.depth);for(let rt=0,vt=Ft.length;rt<vt;rt++)if(_t=Ft[rt],y.format!==sn)if(gt!==null)if(Vt){if(H)if(y.layerUpdates.size>0){let wt=Hc(_t.width,_t.height,y.format,y.type);for(let ct of y.layerUpdates){let Bt=_t.data.subarray(ct*wt/_t.data.BYTES_PER_ELEMENT,(ct+1)*wt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,_t.width,_t.height,1,gt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,ot.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,yt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,ot.depth,gt,Ut,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,yt,_t.width,_t.height,ot.depth,0,gt,Ut,_t.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Ft[0].width,Ft[0].height);for(let rt=0,vt=Ft.length;rt<vt;rt++)_t=Ft[rt],y.format!==sn?gt!==null?Vt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,yt,_t.width,_t.height,0,_t.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,gt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,rt,yt,_t.width,_t.height,0,gt,Ut,_t.data)}else if(y.isDataArrayTexture)if(Vt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,ot.width,ot.height,ot.depth),H)if(y.layerUpdates.size>0){let rt=Hc(ot.width,ot.height,y.format,y.type);for(let vt of y.layerUpdates){let wt=ot.data.subarray(vt*rt/ot.data.BYTES_PER_ELEMENT,(vt+1)*rt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,ot.width,ot.height,1,gt,Ut,wt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Ut,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,ot.width,ot.height,ot.depth,0,gt,Ut,ot.data);else if(y.isData3DTexture)Vt?(Jt&&e.texStorage3D(i.TEXTURE_3D,xt,yt,ot.width,ot.height,ot.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Ut,ot.data)):e.texImage3D(i.TEXTURE_3D,0,yt,ot.width,ot.height,ot.depth,0,gt,Ut,ot.data);else if(y.isFramebufferTexture){if(Jt)if(Vt)e.texStorage2D(i.TEXTURE_2D,xt,yt,ot.width,ot.height);else{let rt=ot.width,vt=ot.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,yt,rt,vt,0,gt,Ut,null),rt>>=1,vt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),ot.parentNode!==rt){rt.appendChild(ot),d.add(y),rt.onpaint=vt=>{let wt=vt.changedElements;for(let ct of d)wt.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let wt=i.RGBA,ct=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,ct,Bt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Vt&&Jt){let rt=Et(Ft[0]);e.texStorage2D(i.TEXTURE_2D,xt,yt,rt.width,rt.height)}for(let rt=0,vt=Ft.length;rt<vt;rt++)_t=Ft[rt],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt,Ut,_t):e.texImage2D(i.TEXTURE_2D,rt,yt,gt,Ut,_t);y.generateMipmaps=!1}else if(Vt){if(Jt){let rt=Et(ot);e.texStorage2D(i.TEXTURE_2D,xt,yt,rt.width,rt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ut,ot)}else e.texImage2D(i.TEXTURE_2D,0,yt,gt,Ut,ot);p(y)&&M(j),mt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Rt(C,y,q){if(y.image.length!==6)return;let j=at(C,y),it=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let pt=n.get(it);if(it.version!==pt.__version||j===!0){e.activeTexture(i.TEXTURE0+q);let mt=ee.getPrimaries(ee.workingColorSpace),st=y.colorSpace===ri?null:ee.getPrimaries(y.colorSpace),ot=y.colorSpace===ri||mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let gt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!gt&&!Ut?yt[ct]=g(y.image[ct],!0,s.maxCubemapSize):yt[ct]=Ut?y.image[ct].image:y.image[ct],yt[ct]=ut(y,yt[ct]);let _t=yt[0],Ft=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type),Jt=S(y.internalFormat,Ft,Vt,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,xt=pt.__version===void 0||j===!0,rt=it.dataReady,vt=b(y,_t);lt(i.TEXTURE_CUBE_MAP,y);let wt;if(gt){H&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,_t.width,_t.height);for(let ct=0;ct<6;ct++){wt=yt[ct].mipmaps;for(let Bt=0;Bt<wt.length;Bt++){let Dt=wt[Bt];y.format!==sn?Ft!==null?H?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,Jt,Dt.width,Dt.height,0,Dt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,Dt.width,Dt.height,Ft,Vt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,Jt,Dt.width,Dt.height,0,Ft,Vt,Dt.data)}}}else{if(wt=y.mipmaps,H&&xt){wt.length>0&&vt++;let ct=Et(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ut){H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Ft,Vt,yt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,yt[ct].width,yt[ct].height,0,Ft,Vt,yt[ct].data);for(let Bt=0;Bt<wt.length;Bt++){let ve=wt[Bt].image[ct].image;H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,ve.width,ve.height,Ft,Vt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,Jt,ve.width,ve.height,0,Ft,Vt,ve.data)}}else{H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ft,Vt,yt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Jt,Ft,Vt,yt[ct]);for(let Bt=0;Bt<wt.length;Bt++){let Dt=wt[Bt];H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Ft,Vt,Dt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,Jt,Ft,Vt,Dt.image[ct])}}}p(y)&&M(i.TEXTURE_CUBE_MAP),pt.__version=it.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ft(C,y,q,j,it,pt){let mt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),ot=S(q.internalFormat,mt,st,q.normalized,q.colorSpace),gt=n.get(y),Ut=n.get(q);if(Ut.__renderTarget=y,!gt.__hasExternalTextures){let yt=Math.max(1,y.width>>pt),_t=Math.max(1,y.height>>pt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,pt,ot,yt,_t,y.depth,0,mt,st,null):e.texImage2D(it,pt,ot,yt,_t,0,mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),zt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,Ut.__webglTexture,0,dt(y)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,Ut.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(C,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let j=y.depthTexture,it=j&&j.isDepthTexture?j.type:null,pt=v(y.stencilBuffer,it),mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(y),pt,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(y),pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,C)}else{let j=y.textures;for(let it=0;it<j.length;it++){let pt=j[it],mt=r.convert(pt.format,pt.colorSpace),st=r.convert(pt.type),ot=S(pt.internalFormat,mt,st,pt.normalized,pt.colorSpace);zt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(y),ot,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(y),ot,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ot,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(C,y,q){let j=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(y.depthTexture);if(it.__renderTarget=y,(!it.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(it.__webglInit===void 0&&(it.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),lt(i.TEXTURE_CUBE_MAP,y.depthTexture);let gt=r.convert(y.depthTexture.format),Ut=r.convert(y.depthTexture.type),yt;y.depthTexture.format===Nn?yt=i.DEPTH_COMPONENT24:y.depthTexture.format===Si&&(yt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,y.width,y.height,0,gt,Ut,null)}}else O(y.depthTexture,0);let pt=it.__webglTexture,mt=dt(y),st=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ot=y.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Nn)zt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,pt,0);else if(y.depthTexture.format===Si)zt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(C){let y=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=j}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let j=0;j<6;j++)Ct(y.__webglFramebuffer[j],C,j);else{let j=C.texture.mipmaps;j&&j.length>0?Ct(y.__webglFramebuffer[0],C,0):Ct(y.__webglFramebuffer,C,0)}else if(q){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),Ot(y.__webglDepthbuffer[j],C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ot(y.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,y,q){let j=n.get(C);y!==void 0&&ft(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&It(C)}function $t(C){let y=C.texture,q=n.get(C),j=n.get(y);C.addEventListener("dispose",x);let it=C.textures,pt=C.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),pt){q.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[st]=[];for(let ot=0;ot<y.mipmaps.length;ot++)q.__webglFramebuffer[st][ot]=i.createFramebuffer()}else q.__webglFramebuffer[st]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)q.__webglFramebuffer[st]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(mt)for(let st=0,ot=it.length;st<ot;st++){let gt=n.get(it[st]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&zt(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let ot=it[st];q.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[st]);let gt=r.convert(ot.format,ot.colorSpace),Ut=r.convert(ot.type),yt=S(ot.internalFormat,gt,Ut,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),_t=dt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,q.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),lt(i.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let ot=0;ot<y.mipmaps.length;ot++)ft(q.__webglFramebuffer[st][ot],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ot);else ft(q.__webglFramebuffer[st],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(y)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let st=0,ot=it.length;st<ot;st++){let gt=it[st],Ut=n.get(gt),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),lt(yt,gt),ft(q.__webglFramebuffer,C,gt,i.COLOR_ATTACHMENT0+st,yt,0),p(gt)&&M(yt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),lt(st,y),y.mipmaps&&y.mipmaps.length>0)for(let ot=0;ot<y.mipmaps.length;ot++)ft(q.__webglFramebuffer[ot],C,y,i.COLOR_ATTACHMENT0,st,ot);else ft(q.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,st,0);p(y)&&M(st),e.unbindTexture()}C.depthBuffer&&It(C)}function qt(C){let y=C.textures;for(let q=0,j=y.length;q<j;q++){let it=y[q];if(p(it)){let pt=T(C),mt=n.get(it).__webglTexture;e.bindTexture(pt,mt),M(pt),e.unbindTexture()}}}let Qt=[],ie=[];function ge(C){if(C.samples>0){if(zt(C)===!1){let y=C.textures,q=C.width,j=C.height,it=i.COLOR_BUFFER_BIT,pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(C),st=y.length>1;if(st)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let ot=C.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Ut=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,q,j,0,0,q,j,it,i.NEAREST),l===!0&&(Qt.length=0,ie.length=0,Qt.push(i.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Qt.push(pt),ie.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Ut=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function dt(C){return Math.min(s.maxSamples,C.samples)}function zt(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ut(C,y){let q=C.colorSpace,j=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==js&&q!==ri&&(ee.getTransfer(q)===ue?(j!==sn||it!==nn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",q)),y}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Mv(i,t){function e(n,s=ri){let r,o=ee.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Ye)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Pc)return i.RGB;if(n===sn)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Ps)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===br||n===Sr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===_a||n===xa||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ma||n===ba||n===Sa||n===wa||n===wr||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ma)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sa)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Ba||n===Oa||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Wa||n===Er||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ue({vertexShader:bv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new oh,p={},M=e.getContextAttributes(),T=null,S=null,v=[],b=[],A=new Gt,x=null,w=null,R=new Le;R.viewport=new xe;let D=new Le;D.viewport=new xe;let N=[R,D],B=new ra,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=v[X];return tt===void 0&&(tt=new Ms,v[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=v[X];return tt===void 0&&(tt=new Ms,v[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=v[X];return tt===void 0&&(tt=new Ms,v[X]=tt),tt.getHandSpace()};function W(X){let tt=b.indexOf(X.inputSource);if(tt===-1)return;let ht=v[tt];ht!==void 0&&(ht.update(X.inputSource,X.frame,c||o),ht.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",O);for(let X=0;X<v.length;X++){let tt=b[X];tt!==null&&(b[X]=null,v[X].disconnect(tt))}L=null,U=null,g.reset();for(let X in p)delete p[X];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,S=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),w!==null){let X=w.camera;X.fov=w.fov,X.zoom=w.zoom,X.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Rt=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=M.stencil?Si:Nn,Rt=M.stencil?Is:En);let Ot={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Ne(u.textureWidth,u.textureHeight,{format:sn,type:nn,depthTexture:new kn(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ht={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ne(f.framebufferWidth,f.framebufferHeight,{format:sn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(X){for(let tt=0;tt<X.removed.length;tt++){let ht=X.removed[tt],Rt=b.indexOf(ht);Rt>=0&&(b[Rt]=null,v[Rt].disconnect(ht))}for(let tt=0;tt<X.added.length;tt++){let ht=X.added[tt],Rt=b.indexOf(ht);if(Rt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=b.length){b.push(ht),Rt=Ot;break}else if(b[Ot]===null){b[Ot]=ht,Rt=Ot;break}if(Rt===-1)break}let ft=v[Rt];ft&&ft.connect(ht)}}let F=new P,G=new P;function Y(X,tt,ht){F.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);let Rt=F.distanceTo(G),ft=tt.projectionMatrix.elements,Ot=ht.projectionMatrix.elements,Ct=ft[14]/(ft[10]-1),It=ft[14]/(ft[10]+1),Xt=(ft[9]+1)/ft[5],$t=(ft[9]-1)/ft[5],qt=(ft[8]-1)/ft[0],Qt=(Ot[8]+1)/Ot[0],ie=Ct*qt,ge=Ct*Qt,dt=Rt/(-qt+Qt),zt=dt*-qt;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(zt),X.translateZ(dt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ft[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let I=Ct+dt,ut=It+dt,Et=ie-zt,C=ge+(Rt-zt),y=Xt*It/ut*I,q=$t*It/ut*I;X.projectionMatrix.makePerspective(Et,C,y,q,I,ut),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function z(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,ht=X.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),B.near=D.near=R.near=tt,B.far=D.far=R.far=ht,(L!==B.near||U!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,U=B.far),B.layers.mask=X.layers.mask|6,R.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let Rt=X.parent,ft=B.cameras;z(B,Rt);for(let Ot=0;Ot<ft.length;Ot++)z(ft[Ot],Rt);ft.length===2?Y(B,R,D):B.projectionMatrix.copy(R.projectionMatrix),w===null&&X.isPerspectiveCamera&&(w={camera:X,fov:X.fov,zoom:X.zoom}),$(X,B,Rt)};function $(X,tt,ht){ht===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(ht.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(X){return p[X]};let nt=null;function lt(X,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Rt=!1;ht.length!==B.cameras.length&&(B.cameras.length=0,Rt=!0);for(let It=0;It<ht.length;It++){let Xt=ht[It],$t=null;if(f!==null)$t=f.getViewport(Xt);else{let Qt=d.getViewSubImage(u,Xt);$t=Qt.viewport,It===0&&(t.setRenderTargetTextures(S,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(S))}let qt=N[It];qt===void 0&&(qt=new Le,qt.layers.enable(It),qt.viewport=new xe,N[It]=qt),qt.matrix.fromArray(Xt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Xt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set($t.x,$t.y,$t.width,$t.height),It===0&&(B.matrix.copy(qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Rt===!0&&B.cameras.push(qt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let It=d.getDepthInformation(ht[0]);It&&It.isValid&&It.texture&&g.init(It,s.renderState)}if(ft&&ft.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let It=0;It<ht.length;It++){let Xt=ht[It].camera;if(Xt){let $t=p[Xt];$t||($t=new ar,p[Xt]=$t);let qt=d.getCameraImage(Xt);$t.sourceTexture=qt}}}}for(let ht=0;ht<v.length;ht++){let Rt=b[ht],ft=v[ht];Rt!==null&&ft!==void 0&&ft.update(Rt,tt,c||o)}nt&&nt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let at=new Gd;at.setAnimationLoop(lt),this.setAnimationLoop=function(X){nt=X},this.dispose=function(){}}},wv=new Zt,Zd=new Yt;Zd.set(-1,0,0,0,1,0,0,0,1);function Ev(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Oc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),T=M.envMap,S=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Zd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let b=v.program;n.uniformBlockBinding(S,b)}function c(S,v){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",M));let A=v.program;n.updateUBOMapping(S,A);let x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){let v=d();S.__bindingPointIndex=v;let b=i.createBuffer(),A=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,w=b.length;x<w;x++){let R=b[x];if(Array.isArray(R))for(let D=0,N=R.length;D<N;D++)f(R[D],x,D,A);else f(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,b,A){if(_(S,v,b,A)===!0){let x=S.__offset,w=S.value;if(Array.isArray(w)){let R=0;for(let D=0;D<w.length;D++){let N=w[D],B=p(N);m(N,S.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function m(S,v,b){typeof S=="number"||typeof S=="boolean"?v[0]=S:S.isMatrix3?(v[0]=S.elements[0],v[1]=S.elements[1],v[2]=S.elements[2],v[3]=0,v[4]=S.elements[3],v[5]=S.elements[4],v[6]=S.elements[5],v[7]=0,v[8]=S.elements[6],v[9]=S.elements[7],v[10]=S.elements[8],v[11]=0):ArrayBuffer.isView(S)?v.set(new S.constructor(S.buffer,S.byteOffset,v.length)):S.toArray(v,b)}function _(S,v,b,A){let x=S.value,w=v+"_"+b;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(S){let v=S.uniforms,b=0,A=16;for(let w=0,R=v.length;w<R;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let N=0,B=D.length;N<B;N++){let L=D[N],U=Array.isArray(L.value)?L.value:[L.value];for(let W=0,V=U.length;W<V;W++){let O=U[W],F=p(O),G=b%A,Y=G%F.boundary,z=G+Y;b+=Y,z!==0&&A-z<F.storage&&(b+=A-z),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=F.storage}}}let x=b%A;return x>0&&(b+=A-x),S.__size=b,S.__cache={},this}function p(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",S),v}function M(S){let v=S.target;v.removeEventListener("dispose",M);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function T(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function Rv(){return qn===null&&(qn=new Bn(Av,16,16,wi,Tn),qn.name="DFG_LUT",qn.minFilter=qe,qn.magFilter=qe,qn.wrapS=Dn,qn.wrapT=Dn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var Ei=class{constructor(t={}){let{canvas:e=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([ma,pa,fa]),p=new Set([nn,En,Cs,Is,ua,da]),M=new Uint32Array(4),T=new Int32Array(4),S=new P,v=null,b=null,A=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,N=null,B=null,L=null,U=null;this._outputColorSpace=Me;let W=0,V=0,O=null,F=-1,G=null,Y=new xe,z=new xe,$=null,nt=new Ht(0),lt=0,at=e.width,X=e.height,tt=1,ht=null,Rt=null,ft=new xe(0,0,at,X),Ot=new xe(0,0,at,X),Ct=!1,It=new On,Xt=!1,$t=!1,qt=new Zt,Qt=new P,ie=new xe,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function zt(){return O===null?tt:1}let I=n;function ut(E,k){return e.getContext(E,k)}let Et,C,y,q,j,it,pt,mt,st,ot,gt,Ut,yt,_t,Ft,Vt,Jt,H,xt,rt,vt,wt,ct;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",mn,!1),I===null){let k="webgl2";if(I=ut(k,E),I===null)throw ut(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(E){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),Wt("WebGLRenderer: "+E.message),E}function Bt(){Et=new U0(I),Et.init(),vt=new Mv(I,Et),C=new E0(I,Et,t,vt),y=new vv(I,Et),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=I.createFramebuffer(),L=I.createFramebuffer(),U=I.createFramebuffer(),q=new O0(I),j=new rv,it=new yv(I,Et,y,j,C,vt,q),pt=new N0(R),mt=new km(I),wt=new S0(I,mt),st=new F0(I,mt,q,wt),ot=new k0(I,st,mt,wt,q),H=new z0(I,C,it),Ft=new T0(j),gt=new sv(R,pt,Et,C,wt,Ft),Ut=new Ev(R,j),yt=new av,_t=new fv(Et),Jt=new b0(R,pt,y,ot,m,l),Vt=new xv(R,ot,C),ct=new Tv(I,q,C,y),xt=new w0(I,Et,q),rt=new B0(I,Et,q),q.programs=gt.programs,R.capabilities=C,R.extensions=Et,R.properties=j,R.renderLists=yt,R.shadowMap=Vt,R.state=y,R.info=q}_!==nn&&(w=new V0(_,e.width,e.height,a,s,r));let Dt=new ah(R,I);this.xr=Dt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(at,X,!1))},this.getSize=function(E){return E.set(at,X)},this.setSize=function(E,k,Q=!0){if(Dt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=E,X=k,e.width=Math.floor(E*tt),e.height=Math.floor(k*tt),Q===!0&&(e.style.width=E+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(at*tt,X*tt).floor()},this.setDrawingBufferSize=function(E,k,Q){at=E,X=k,tt=Q,e.width=Math.floor(E*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===nn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,k,Q,J){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,k,Q,J),y.viewport(Y.copy(ft).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,k,Q,J){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,k,Q,J),y.scissor(z.copy(Ot).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(E){y.setScissorTest(Ct=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){Rt=E},this.getClearColor=function(E){return E.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,Q=!0){let J=0;if(E){let K=!1;if(O!==null){let St=O.texture.format;K=g.has(St)}if(K){let St=O.texture.type,At=p.has(St),bt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),Nt=bt.r,Kt=bt.g,te=bt.b;At?(M[0]=Nt,M[1]=Kt,M[2]=te,M[3]=Pt,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=Nt,T[1]=Kt,T[2]=te,T[3]=Pt,I.clearBufferiv(I.COLOR,0,T))}else J|=I.COLOR_BUFFER_BIT}k&&(J|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),Jt.dispose(),yt.dispose(),_t.dispose(),j.dispose(),pt.dispose(),ot.dispose(),wt.dispose(),ct.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Xh),Dt.removeEventListener("sessionend",qh),Ii.stop()};function ve(E){E.preventDefault(),tr("WebGLRenderer: Context Lost."),D=!0}function ce(){tr("WebGLRenderer: Context Restored."),D=!1;let E=q.autoReset,k=Vt.enabled,Q=Vt.autoUpdate,J=Vt.needsUpdate,K=Vt.type;Bt(),q.autoReset=E,Vt.enabled=k,Vt.autoUpdate=Q,Vt.needsUpdate=J,Vt.type=K}function mn(E){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function In(E){let k=E.target;k.removeEventListener("dispose",In),Up(k)}function Up(E){Fp(E),j.remove(E)}function Fp(E){let k=j.get(E).programs;k!==void 0&&(k.forEach(function(Q){gt.releaseProgram(Q)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Q,J,K,St){k===null&&(k=ge);let At=K.isMesh&&K.matrixWorld.determinantAffine()<0,bt=zp(E,k,Q,J,K);y.setMaterial(J,At);let Pt=Q.index,Nt=1;if(J.wireframe===!0){if(Pt=st.getWireframeAttribute(Q),Pt===void 0)return;Nt=2}let Kt=Q.drawRange,te=Q.attributes.position,Lt=Kt.start*Nt,he=(Kt.start+Kt.count)*Nt;St!==null&&(Lt=Math.max(Lt,St.start*Nt),he=Math.min(he,(St.start+St.count)*Nt)),Pt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,Pt.count)):te!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,te.count));let Ie=he-Lt;if(Ie<0||Ie===1/0)return;wt.setup(K,J,bt,Q,Pt);let we,_e=xt;if(Pt!==null&&(we=mt.get(Pt),_e=rt,_e.setIndex(we)),K.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*zt()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(K.isLine){let $e=J.linewidth;$e===void 0&&($e=1),y.setLineWidth($e*zt()),K.isLineSegments?_e.setMode(I.LINES):K.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else K.isPoints?_e.setMode(I.POINTS):K.isSprite&&_e.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))_e.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let $e=K._multiDrawStarts,Tt=K._multiDrawCounts,tn=K._multiDrawCount,oe=Pt?mt.get(Pt).bytesPerElement:1,un=j.get(J).currentProgram.getUniforms();for(let Pn=0;Pn<tn;Pn++)un.setValue(I,"_gl_DrawID",Pn),_e.render($e[Pn]/oe,Tt[Pn])}else if(K.isInstancedMesh)_e.renderInstances(Lt,Ie,K.count);else if(Q.isInstancedBufferGeometry){let $e=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Tt=Math.min(Q.instanceCount,$e);_e.renderInstances(Lt,Ie,Tt)}else _e.render(Lt,Ie)};function Wh(E,k,Q,J){N!==null&&E.isNodeMaterial&&N.setObject(J,E),Xt===!0&&Ft.setState(E,Q,!1),E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=Be,E.needsUpdate=!0,Zr(E,k,J),E.side=Wn,E.needsUpdate=!0,Zr(E,k,J),E.side=Oe):Zr(E,k,J)}this.compile=function(E,k,Q=null){Q===null&&(Q=E),N!==null&&N.renderStart(E,k,Q),b=_t.get(Q),b.init(k),x.push(b),Q.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),E!==Q&&E.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),$t=this.localClippingEnabled,Xt=Ft.init(this.clippingPlanes,$t),Xt===!0&&Ft.setGlobalState(this.clippingPlanes,k),N!==null&&Vt.render(b.state.shadowsArray,Q,k);let J=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let bt=St[At];Wh(bt,Q,k,K),J.add(bt)}else Wh(St,Q,k,K),J.add(St)}),b=x.pop(),N!==null&&N.renderEnd(),J},this.compileAsync=function(E,k,Q=null){let J=this.compile(E,k,Q);return new Promise(K=>{function St(){if(J.forEach(function(At){let Pt=j.get(At).currentProgram;(Pt===void 0||Pt.isReady())&&J.delete(At)}),J.size===0){K(E);return}setTimeout(St,10)}Et.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Il=null;function Bp(E){Il&&Il(E)}function Xh(){Ii.stop()}function qh(){Ii.start()}let Ii=new Gd;Ii.setAnimationLoop(Bp),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(E){Il=E,Dt.setAnimationLoop(E),E===null?Ii.stop():Ii.start()},Dt.addEventListener("sessionstart",Xh),Dt.addEventListener("sessionend",qh),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(E,k);let Q=Dt.enabled===!0&&Dt.isPresenting===!0,J=w!==null&&(O===null||Q)&&w.begin(R,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(k),k=Dt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,k,O),b=_t.get(E,x.length),b.init(k),b.state.textureUnits=it.getTextureUnits(),x.push(b),qt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),It.setFromProjectionMatrix(qt,yn,k.reversedDepth),$t=this.localClippingEnabled,Xt=Ft.init(this.clippingPlanes,$t),v=yt.get(E,A.length),v.init(),A.push(v),Dt.enabled===!0&&Dt.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&Pl(At,k,-1/0,R.sortObjects)}Pl(E,k,0,R.sortObjects),v.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&v.sort(ht,Rt),dt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,dt&&Jt.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xt===!0&&Ft.beginShadows();let K=b.state.shadowsArray;if(Vt.render(K,E,k),Xt===!0&&Ft.endShadows(),(J&&w.hasRenderPass())===!1){let At=v.opaque,bt=v.transmissive;if(b.setupLights(),k.isArrayCamera){let Pt=k.cameras;if(bt.length>0)for(let Nt=0,Kt=Pt.length;Nt<Kt;Nt++){let te=Pt[Nt];$h(At,bt,E,te)}dt&&Jt.render(E);for(let Nt=0,Kt=Pt.length;Nt<Kt;Nt++){let te=Pt[Nt];Yh(v,E,te,te.viewport)}}else bt.length>0&&$h(At,bt,E,k),dt&&Jt.render(E),Yh(v,E,k)}O!==null&&V===0&&(it.updateMultisampleRenderTarget(O),it.updateRenderTargetMipmap(O)),J&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,k),wt.resetDefaultState(),F=-1,G=null,x.pop(),x.length>0?(b=x[x.length-1],it.setTextureUnits(b.state.textureUnits),Xt===!0&&Ft.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,N!==null&&N.renderEnd()};function Pl(E,k,Q,J){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(It)){J&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(qt);let At=ot.update(E),bt=E.material;bt.visible&&v.push(E,At,bt,Q,ie.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(It))){let At=ot.update(E),bt=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ie.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ie.copy(At.boundingSphere.center)),ie.applyMatrix4(E.matrixWorld).applyMatrix4(qt)),Array.isArray(bt)){let Pt=At.groups;for(let Nt=0,Kt=Pt.length;Nt<Kt;Nt++){let te=Pt[Nt],Lt=bt[te.materialIndex];Lt&&Lt.visible&&v.push(E,At,Lt,Q,ie.z,te,k)}}else bt.visible&&v.push(E,At,bt,Q,ie.z,null,k)}}let St=E.children;for(let At=0,bt=St.length;At<bt;At++)Pl(St[At],k,Q,J)}function Yh(E,k,Q,J){let{opaque:K,transmissive:St,transparent:At}=E;b.setupLightsView(Q),Xt===!0&&Ft.setGlobalState(R.clippingPlanes,Q),J&&y.viewport(Y.copy(J)),K.length>0&&$r(K,k,Q),St.length>0&&$r(St,k,Q),At.length>0&&$r(At,k,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function $h(E,k,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){let Lt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new Ne(1,1,{generateMipmaps:!0,type:Lt?Tn:nn,minFilter:bi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let St=b.state.transmissionRenderTarget[J.id],At=J.viewport||Y;St.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(nt),lt=R.getClearAlpha(),lt<1&&R.setClearColor(16777215,.5),R.clear(),dt&&Jt.render(Q);let Kt=R.toneMapping;R.toneMapping=wn;let te=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),Xt===!0&&Ft.setGlobalState(R.clippingPlanes,J),$r(E,Q,J),it.updateMultisampleRenderTarget(St),it.updateRenderTargetMipmap(St),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Ie=k.length;he<Ie;he++){let we=k[he],{object:_e,geometry:$e,material:Tt,group:tn}=we;if(Tt.side===Oe&&_e.layers.test(J.layers)){let oe=Tt.side;Tt.side=Be,Tt.needsUpdate=!0,Zh(_e,Q,J,$e,Tt,tn),Tt.side=oe,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&(it.updateMultisampleRenderTarget(St),it.updateRenderTargetMipmap(St))}R.setRenderTarget(bt,Pt,Nt),R.setClearColor(nt,lt),te!==void 0&&(J.viewport=te),R.toneMapping=Kt}function $r(E,k,Q){let J=k.isScene===!0?k.overrideMaterial:null;for(let K=0,St=E.length;K<St;K++){let At=E[K],{object:bt,geometry:Pt,group:Nt}=At,Kt=At.material;Kt.allowOverride===!0&&J!==null&&(Kt=J),bt.layers.test(Q.layers)&&Zh(bt,k,Q,Pt,Kt,Nt)}}function Zh(E,k,Q,J,K,St){N!==null&&K.isNodeMaterial&&N.setObject(E,K),E.onBeforeRender(R,k,Q,J,K,St),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(R,k,Q,J,E,St),K.transparent===!0&&K.side===Oe&&K.forceSinglePass===!1?(K.side=Be,K.needsUpdate=!0,R.renderBufferDirect(Q,k,J,K,E,St),K.side=Wn,K.needsUpdate=!0,R.renderBufferDirect(Q,k,J,K,E,St),K.side=Oe):R.renderBufferDirect(Q,k,J,K,E,St),E.onAfterRender(R,k,Q,J,K,St)}function Zr(E,k,Q){k.isScene!==!0&&(k=ge);let J=j.get(E),K=b.state.lights,St=b.state.shadowsArray,At=K.state.version,bt=gt.getParameters(E,K.state,St,k,Q,b.state.lightProbeGridArray),Pt=gt.getProgramCacheKey(bt),Nt=J.programs;J.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;let Kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;J.envMap=pt.get(E.envMap||J.environment,Kt),J.envMapRotation=J.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",In),Nt=new Map,J.programs=Nt);let te=Nt.get(Pt);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===At)return Kh(E,bt),te}else bt.uniforms=gt.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,Q,bt),E.onBeforeCompile(bt,R),te=gt.acquireProgram(bt,Pt),Nt.set(Pt,te),J.uniforms=bt.uniforms;let Lt=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Lt.clippingPlanes=Ft.uniform),Kh(E,bt),J.needsLights=Hp(E),J.lightsStateVersion=At,J.needsLights&&(Lt.ambientLightColor.value=K.state.ambient,Lt.lightProbe.value=K.state.probe,Lt.sunLights.value=K.state.sun,Lt.sunLightShadows.value=K.state.sunShadow,Lt.directionalLights.value=K.state.directional,Lt.directionalLightShadows.value=K.state.directionalShadow,Lt.spotLights.value=K.state.spot,Lt.spotLightShadows.value=K.state.spotShadow,Lt.rectAreaLights.value=K.state.rectArea,Lt.ltc_1.value=K.state.rectAreaLTC1,Lt.ltc_2.value=K.state.rectAreaLTC2,Lt.pointLights.value=K.state.point,Lt.pointLightShadows.value=K.state.pointShadow,Lt.hemisphereLights.value=K.state.hemi,Lt.sunShadowMatrix.value=K.state.sunShadowMatrix,Lt.sunShadowCascade.value=K.state.sunShadowCascade,Lt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Lt.spotLightMatrix.value=K.state.spotLightMatrix,Lt.spotLightMap.value=K.state.spotLightMap,Lt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=b.state.lightProbeGridArray.length>0,J.currentProgram=te,J.uniformsList=null,te}function Jh(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Ns.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Kh(E,k){let Q=j.get(E);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function Op(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let Q=0,J=E.length;Q<J;Q++){let K=E[Q];if(K.texture!==null&&K.boundingBox.containsPoint(S))return K}return null}function zp(E,k,Q,J,K){k.isScene!==!0&&(k=ge),it.resetTextureUnits();let St=k.fog,At=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,bt=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ee.workingColorSpace,Pt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Nt=pt.get(J.envMap||At,Pt),Kt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,te=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Lt=!!Q.morphAttributes.position,he=!!Q.morphAttributes.normal,Ie=!!Q.morphAttributes.color,we=wn;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(we=R.toneMapping);let _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,$e=_e!==void 0?_e.length:0,Tt=j.get(J),tn=b.state.lights;if(Xt===!0&&($t===!0||E!==G)){let ye=E===G&&J.id===F;Ft.setState(J,E,ye)}let oe=!1;J.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==tn.state.version||Tt.outputColorSpace!==bt||K.isBatchedMesh&&Tt.batching===!1||!K.isBatchedMesh&&Tt.batching===!0||K.isBatchedMesh&&Tt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Tt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Tt.instancing===!1||!K.isInstancedMesh&&Tt.instancing===!0||K.isSkinnedMesh&&Tt.skinning===!1||!K.isSkinnedMesh&&Tt.skinning===!0||K.isInstancedMesh&&Tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Tt.instancingMorph===!1&&K.morphTexture!==null||Tt.envMap!==Nt||J.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==Kt||Tt.vertexTangents!==te||Tt.morphTargets!==Lt||Tt.morphNormals!==he||Tt.morphColors!==Ie||Tt.toneMapping!==we||Tt.morphTargetsCount!==$e||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Tt.__version=J.version);let un=Tt.currentProgram;oe===!0&&(un=Zr(J,k,K),N&&J.isNodeMaterial&&N.onUpdateProgram(J,un,Tt));let Pn=!1,li=!1,$i=!1,me=un.getUniforms(),Ce=Tt.uniforms;if(y.useProgram(un.program)&&(Pn=!0,li=!0,$i=!0),J.id!==F&&(F=J.id,li=!0),Tt.needsLights){let ye=Op(b.state.lightProbeGridArray,K);Tt.lightProbeGrid!==ye&&(Tt.lightProbeGrid=ye,li=!0)}if(Pn||G!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(I,"projectionMatrix",E.projectionMatrix),me.setValue(I,"viewMatrix",E.matrixWorldInverse);let hi=me.map.cameraPosition;hi!==void 0&&hi.setValue(I,Qt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&me.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,li=!0,$i=!0)}if(Tt.needsLights&&(tn.state.sunShadowMap.length>0&&me.setValue(I,"sunShadowMap",tn.state.sunShadowMap,it),tn.state.directionalShadowMap.length>0&&me.setValue(I,"directionalShadowMap",tn.state.directionalShadowMap,it),tn.state.spotShadowMap.length>0&&me.setValue(I,"spotShadowMap",tn.state.spotShadowMap,it),tn.state.pointShadowMap.length>0&&me.setValue(I,"pointShadowMap",tn.state.pointShadowMap,it)),K.isSkinnedMesh){me.setOptional(I,K,"bindMatrix"),me.setOptional(I,K,"bindMatrixInverse");let ye=K.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),me.setValue(I,"boneTexture",ye.boneTexture,it))}K.isBatchedMesh&&(me.setOptional(I,K,"batchingTexture"),me.setValue(I,"batchingTexture",K._matricesTexture,it),me.setOptional(I,K,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",K._indirectTexture,it),me.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",K._colorsTexture,it));let ci=Q.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&H.update(K,Q,un),(li||Tt.receiveShadow!==K.receiveShadow)&&(Tt.receiveShadow=K.receiveShadow,me.setValue(I,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(Ce.envMapIntensity.value=k.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=Rv()),li){if(me.setValue(I,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&kp(Ce,$i),St&&J.fog===!0&&Ut.refreshFogUniforms(Ce,St),Ut.refreshMaterialUniforms(Ce,J,tt,X,b.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.lightProbeGrid){let ye=Tt.lightProbeGrid;Ce.probesSH.value=ye.texture,Ce.probesMin.value.copy(ye.boundingBox.min),Ce.probesMax.value.copy(ye.boundingBox.max),Ce.probesResolution.value.copy(ye.resolution)}Ns.upload(I,Jh(Tt),Ce,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ns.upload(I,Jh(Tt),Ce,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&me.setValue(I,"center",K.center),me.setValue(I,"modelViewMatrix",K.modelViewMatrix),me.setValue(I,"normalMatrix",K.normalMatrix),me.setValue(I,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ye=J.uniformsGroups;for(let hi=0,Zi=ye.length;hi<Zi;hi++){let Qh=ye[hi];ct.update(Qh,un),ct.bind(Qh,un)}}return un}function kp(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Hp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,k,Q){let J=j.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),j.get(E.texture).__webglTexture=k,j.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let Q=j.get(E);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Q=0){O=E,W=k,V=Q;let J=null,K=!1,St=!1;if(E){let bt=j.get(E);if(bt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,bt.__webglFramebuffer),Y.copy(E.viewport),z.copy(E.scissor),$=E.scissorTest,y.viewport(Y),y.scissor(z),y.setScissorTest($),F=-1;return}else if(bt.__webglFramebuffer===void 0)it.setupRenderTarget(E);else if(bt.__hasExternalTextures)it.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Kt=E.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&j.has(Kt)&&(E.width!==Kt.image.width||E.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);let Nt=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?J=Nt[k][Q]:J=Nt[k],K=!0):E.samples>0&&it.useMultisampledRTT(E)===!1?J=j.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?J=Nt[Q]:J=Nt,Y.copy(E.viewport),z.copy(E.scissor),$=E.scissorTest}else Y.copy(ft).multiplyScalar(tt).floor(),z.copy(Ot).multiplyScalar(tt).floor(),$=Ct;if(Q!==0&&(J=B),y.bindFramebuffer(I.FRAMEBUFFER,J)&&y.drawBuffers(E,J),y.viewport(Y),y.scissor(z),y.setScissorTest($),K){let bt=j.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,Q)}else if(St){let bt=k;for(let Pt=0;Pt<E.textures.length;Pt++){let Nt=j.get(E.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,Q,bt)}}else if(E!==null&&Q!==0){let bt=j.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,Q)}F=-1};function jh(E){let k=j.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=C.textureFormatReadable(E.format),k.__typeReadable=C.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,Q,J,K,St,At,bt=0){if(!(E&&E.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){y.bindFramebuffer(I.FRAMEBUFFER,Pt);try{let Nt=E.textures[bt],Kt=Nt.format,te=Nt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt);let Lt=jh(Nt);if(Lt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-J&&Q>=0&&Q<=E.height-K&&I.readPixels(k,Q,J,K,vt.convert(Kt),vt.convert(te),St)}finally{let Nt=O!==null?j.get(O).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,k,Q,J,K,St,At,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(k>=0&&k<=E.width-J&&Q>=0&&Q<=E.height-K){y.bindFramebuffer(I.FRAMEBUFFER,Pt);let Nt=E.textures[bt],Kt=Nt.format,te=Nt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+bt);let Lt=jh(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(k,Q,J,K,vt.convert(Kt),vt.convert(te),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ie=O!==null?j.get(O).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Ie);let we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gd(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(he),I.deleteSync(we),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,Q=0){let J=Math.pow(2,-Q),K=Math.floor(E.image.width*J),St=Math.floor(E.image.height*J),At=k!==null?k.x:0,bt=k!==null?k.y:0;it.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,At,bt,K,St),y.unbindTexture()},this.copyTextureToTexture=function(E,k,Q=null,J=null,K=0,St=0){let At,bt,Pt,Nt,Kt,te,Lt,he,Ie,we=E.isCompressedTexture?E.mipmaps[St]:E.image;if(Q!==null)At=Q.max.x-Q.min.x,bt=Q.max.y-Q.min.y,Pt=Q.isBox3?Q.max.z-Q.min.z:1,Nt=Q.min.x,Kt=Q.min.y,te=Q.isBox3?Q.min.z:0;else{let Ce=Math.pow(2,-K);At=Math.floor(we.width*Ce),bt=Math.floor(we.height*Ce),E.isDataArrayTexture?Pt=we.depth:E.isData3DTexture?Pt=Math.floor(we.depth*Ce):Pt=1,Nt=0,Kt=0,te=0}J!==null?(Lt=J.x,he=J.y,Ie=J.z):(Lt=0,he=0,Ie=0);let _e=vt.convert(k.format),$e=vt.convert(k.type),Tt;k.isData3DTexture?(it.setTexture3D(k,0),Tt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(it.setTexture2DArray(k,0),Tt=I.TEXTURE_2D_ARRAY):(it.setTexture2D(k,0),Tt=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let tn=y.getParameter(I.UNPACK_ROW_LENGTH),oe=y.getParameter(I.UNPACK_IMAGE_HEIGHT),un=y.getParameter(I.UNPACK_SKIP_PIXELS),Pn=y.getParameter(I.UNPACK_SKIP_ROWS),li=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,Nt),y.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),y.pixelStorei(I.UNPACK_SKIP_IMAGES,te);let $i=E.isDataArrayTexture||E.isData3DTexture,me=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Ce=j.get(E),ci=j.get(k),ye=j.get(Ce.__renderTarget),hi=j.get(ci.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,ye.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Zi=0;Zi<Pt;Zi++)$i&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,j.get(E).__webglTexture,K,te+Zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,j.get(k).__webglTexture,St,Ie+Zi)),I.blitFramebuffer(Nt,Kt,At,bt,Lt,he,At,bt,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||j.has(E)){let Ce=j.get(E),ci=j.get(k);y.bindFramebuffer(I.READ_FRAMEBUFFER,L),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let ye=0;ye<Pt;ye++)$i?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,K,te+ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,K),me?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ci.__webglTexture,St,Ie+ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ci.__webglTexture,St),K!==0?I.blitFramebuffer(Nt,Kt,At,bt,Lt,he,At,bt,I.COLOR_BUFFER_BIT,I.NEAREST):me?I.copyTexSubImage3D(Tt,St,Lt,he,Ie+ye,Nt,Kt,At,bt):I.copyTexSubImage2D(Tt,St,Lt,he,Nt,Kt,At,bt);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Tt,St,Lt,he,Ie,At,bt,Pt,_e,$e,we.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,St,Lt,he,Ie,At,bt,Pt,_e,we.data):I.texSubImage3D(Tt,St,Lt,he,Ie,At,bt,Pt,_e,$e,we):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,Lt,he,At,bt,_e,$e,we.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,Lt,he,we.width,we.height,_e,we.data):I.texSubImage2D(I.TEXTURE_2D,St,Lt,he,At,bt,_e,$e,we);y.pixelStorei(I.UNPACK_ROW_LENGTH,tn),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe),y.pixelStorei(I.UNPACK_SKIP_PIXELS,un),y.pixelStorei(I.UNPACK_SKIP_ROWS,Pn),y.pixelStorei(I.UNPACK_SKIP_IMAGES,li),St===0&&k.generateMipmaps&&I.generateMipmap(Tt),y.unbindTexture()},this.initRenderTarget=function(E){j.get(E).__webglFramebuffer===void 0&&it.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?it.setTextureCube(E,0):E.isData3DTexture?it.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?it.setTexture2DArray(E,0):it.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){W=0,V=0,O=null,y.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Cv={f32:Float32Array,u8:Uint8Array,u16:Uint16Array,i16:Int16Array,u32:Uint32Array,i32:Int32Array},Jd=4*1024*1024;function Pr(i){return i.points??[i.start,i.end]}function tf(i,t){let e=i.getElementById(t);if(!e)throw new se(`Data block '${t}' is missing.`);return e.textContent}function Kd(i){let t=0;for(let a of i.childNodes)t+=a.length;let e=new Uint8Array(Math.ceil(t/4)*3),n=0,s=!0,r="";for(let a of i.childNodes)for(let l=0;l<a.length;l+=Jd){let c=a.substringData(l,Jd),h=c.trim(),d=r+h,u=d.length-d.length%4,f=d.slice(0,u),m=lh(e,n,f),_=f.endsWith("==")?2:f.endsWith("=")?1:0;s&&(s=c.length===h.length&&m-n===u*3/4-_),n=m,r=d.slice(u)}let o=lh(e,n,r);return s&&(s=o-n===Math.floor(r.length*3/4)),{bytes:e.subarray(0,o),canonical:s}}function Iv(i,t,e){let n=Math.floor(t/3),s=n*4,r=t-n*3,o=Math.ceil((r+e)/3)*4,a=[];for(let c of i.childNodes){if(s>=c.length){s-=c.length;continue}let h=Math.min(o,c.length-s);if(a.push(c.substringData(s,h)),o-=h,s=0,!o)break}let l=new Uint8Array(Math.ceil((r+e)/3)*3);if(lh(l,0,a.join(""))<r+e)throw new se("The binary data is truncated.");return l.slice(r,r+e).buffer}function lh(i,t,e){if(i.setFromBase64)return t+i.subarray(t).setFromBase64(e).written;let n=atob(e);for(let s=0;s<n.length;s++)i[t++]=n.charCodeAt(s);return t}var se=class extends Error{},Xi=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),oi=i=>Array.isArray(i)&&i.every(Xi),Ti=i=>Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number"),ef=i=>Xi(i)&&Ti(i.min)&&Ti(i.max),jd=i=>i==null||Xi(i)&&oi(i.planes)&&i.planes.every(t=>Ti(t.normal)&&t.normal.every(Number.isFinite)&&t.normal.some(e=>e!==0)&&Number.isFinite(t.offset))&&(i.box==null||ef(i.box)&&i.box.max.every(Number.isFinite)&&i.box.min.every((t,e)=>Number.isFinite(t)&&t<=i.box.max[e]));function Pv(i){if(!Xi(i)||!oi(i.elements)||!oi(i.geometries)||!oi(i.materials)||!Xi(i.instances))throw new se("META must describe elements, geometries, materials and instances.");if(i.title!=null&&typeof i.title!="string")throw new se("Invalid META title.");let{instances:t}=i;if(!Number.isSafeInteger(t.count)||t.count<0)throw new se("Invalid META instance count.");for(let[n,s,r]of[["geometry","u32",t.count],["material","u32",t.count],["element","i32",t.count],["matrix","f32",t.count*12]])if(t[n]?.t!==s||t[n].n!==r)throw new se(`Invalid META instance ${n} view.`);for(let n of i.geometries){let s=n.q;if(!ef(n.bbox)||!["u16","u32"].includes(n.indices?.t)||n.positions?.t!==(s?"u16":"f32")||s&&(!Ti(s.o)||typeof s.s!="number")||n.normals!=null&&!["f32","i16"].includes(n.normals.t)||n.uvs!=null&&n.uvs.t!=="f32"||n.kind!=null&&n.kind!=="points"||n.colors!=null&&(n.kind!=="points"||n.colors.t!=="u8"||n.colors.n!==n.positions.n)||n.intensities!=null&&(n.kind!=="points"||n.intensities.t!=="u8"||3*n.intensities.n!==n.positions.n))throw new se("Invalid META geometry.")}if(i.points!=null){let n=i.points;if(!Xi(n)||!Number.isSafeInteger(n.count)||n.count<0)throw new se("Invalid META point count.");for(let[s,r,o]of[["geometry","u32",n.count],["material","u32",n.count],["element","i32",n.count],["matrix","f32",n.count*12]])if(n[s]?.t!==r||n[s].n!==o)throw new se(`Invalid META point ${s} view.`)}if(i.panoramas!=null&&(!oi(i.panoramas)||i.panoramas.some(n=>!Number.isInteger(n.element)||n.element<0||n.element>=i.elements.length||n.name!=null&&typeof n.name!="string"||!Ti(n.position)||!n.position.every(Number.isFinite)||!Number.isFinite(n.yaw)||!e(n.image)||n.intensity!=null&&!e(n.intensity))))throw new se("Invalid META panorama.");function e(n){return n?.t==="u8"&&Number.isSafeInteger(n.n)&&n.n>=4&&n.n<=16*1024*1024}Lv(i);for(let n of i.materials){let s=n.texture;if(!Ti(n.color)||typeof n.opacity!="number"||s!=null&&(!Number.isInteger(s)||s<0||s>=(i.textures?.length??0)))throw new se("Invalid META material.")}}function Lv(i){if(!Xi(i)||!oi(i.elements)||i.title!=null&&typeof i.title!="string")throw new se("Invalid review metadata.");for(let l of["textures","grids","viewpoints","bcfTopics","clashTests","linkedFiles","models"])if(i[l]!=null&&!oi(i[l]))throw new se(`Invalid META ${l} list.`);if(i.models?.some(({id:l,name:c})=>!Number.isSafeInteger(l)||typeof c!="string")||i.elements.some(({modelId:l,levelId:c})=>l!=null&&!Number.isSafeInteger(l)||c!=null&&!Number.isSafeInteger(c)))throw new se("Invalid META model or level identity.");let t=l=>l==null||Array.isArray(l)&&l.every(c=>Number.isInteger(c)&&c>=0&&c<i.elements.length),e=l=>Ti(l)&&l.every(Number.isFinite),n=l=>l==null||typeof l=="string",s=l=>e(l.camera?.position)&&e(l.camera?.target)&&jd(l.sections)&&t(l.hiddenElements)&&t(l.visibleElements)&&t(l.selectedElements)&&(l.hiddenElements==null||l.visibleElements==null)&&(l.hiddenModelKeys==null||Array.isArray(l.hiddenModelKeys)&&l.hiddenModelKeys.every(c=>typeof c=="string")),r=l=>Number.isSafeInteger(l)&&l>=0,o=l=>s(l)&&e(l.camera.up)&&l.camera.up.some(c=>c!==0)&&(l.camera.projection==="orthographic"?Number.isFinite(l.camera.orthographicHeight)&&l.camera.orthographicHeight>0:l.camera.projection==="perspective"&&Number.isFinite(l.camera.fov)&&l.camera.fov>0&&l.camera.fov<180)&&r(l.missingComponents)&&r(l.ambiguousComponents),a=l=>{let c=Pr(l);return Array.isArray(c)&&c.length>=2&&c.every(e)};if(i.grids?.some(l=>!a(l))||i.viewpoints?.some(l=>!s(l))||i.clashTests?.some(l=>!oi(l.clashes)||l.clashes.some(c=>!Ti(c.point))))throw new se("Invalid META grids, viewpoints or clashes.");if(i.bcfTopics?.some(l=>typeof l.title!="string"||!n(l.description)||!n(l.status)||!oi(l.viewpoints)||l.viewpoints.some(c=>!o(c))))throw new se("Invalid META BCF topics.");if(i.linkedFiles?.some(l=>!t(l.members)))throw new se("Invalid META linked file members.");if(!jd(i.sections))throw new se("Invalid META sections.")}function Dv(i){let t;try{t=JSON.parse(i)}catch(e){throw new se(e.message,{cause:e})}return Pv(t),t}function ch(i=document,t){t?.("metadataStart");let e;try{e=tf(i,"ioviewer-meta")}catch(s){throw s instanceof se?s:new se(s.message,{cause:s})}let n=Dv(e);return t?.("metadataEnd"),n}function Qd(i,t){let e=Cv[i?.t];if(!e)throw new se(`Unknown view type '${i?.t}'.`);let n=e.BYTES_PER_ELEMENT;if(!(Number.isSafeInteger(i.o)&&Number.isSafeInteger(i.n)&&i.o>=0&&i.n>=0&&i.o%n===0&&i.o+i.n*n<=t))throw new se(`View ${JSON.stringify(i)} is outside the ${t} bytes of binary data.`);return e}function nf(i=document,t,e=ch(i,t)){let n,s,r,o;try{if(t?.("binaryStart"),s=i.getElementById("ioviewer-bin"),!s)throw new Error("Data block 'ioviewer-bin' is missing.");({bytes:n,canonical:r}=Kd(s)),t?.("binaryEnd")}catch(c){throw new se(c.message,{cause:c})}let a=n.length,l=null;return{meta:e,view(c){if(!n)throw new Error("The binary data has been released.");let h=Qd(c,a);return new h(n.buffer,c.o,c.n)},readView(c){let h=Qd(c,a);if(!c.n)return new h(0);!n&&!r&&(o??(o=Kd(s).bytes));let d=n??o;return d?new h(d.buffer,c.o,c.n):new h(Iv(s,c.o,c.n*h.BYTES_PER_ELEMENT))},releaseBinary(){n=null,o=null},props(c){return l??(l=JSON.parse(tf(i,"ioviewer-props"))),l[c]??null}}}var sf=new Zt,rf=new On,hh=32;function uh(i,t=new Float64Array(24)){return sf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),rf.setFromProjectionMatrix(sf,i.coordinateSystem,i.reversedDepth),rf.planes.forEach(({normal:e,constant:n},s)=>t.set([e.x,e.y,e.z,n],s*4)),t}function dh(i,t,e,n,s){for(let r=0;r<24;r+=4)if(i[r]*t+i[r+1]*e+i[r+2]*n+i[r+3]<-s)return!0;return!1}function of(i,t,e,n,s){for(let r=0;r<24;r+=4)if(i[r]*t+i[r+1]*e+i[r+2]*n+i[r+3]<s)return!1;return!0}function fh(i,t,e=new Float64Array(8)){let n=i.matrixWorld.elements,s=new P(-n[8],-n[9],-n[10]).normalize();return e.set([n[12],n[13],n[14],s.x,s.y,s.z,i.projectionMatrix.elements[5]*t/2,i.isPerspectiveCamera?1:0]),e}function Fs(i){return 31-Math.clz32(Math.max(1,Math.min(i*i*256,2147483647)))}function af(i,t,e){if(t<=e)return 0;let n=0,s=!0;for(let r=hh-1;r>=0;r--)if(i[r]!==0){if(n+=i[r],n>e)return s?r===0?0:2**(r/2-4):2**((r+1)/2-4);s=!1}return 0}var An=.0009765625,ph=32767,Lr=i=>i<0?-1:1;function lf(i){let t=Math.min(Math.max(i,-1),1)*ph;return Lr(t)*Math.round(Math.abs(t))}function Dr(i,t,e,n,s){let r=Math.abs(e)+Math.abs(n)+Math.abs(s);if(!(r>0)){i[t]=i[t+1]=0;return}let o=e/r,a=n/r;s<0&&([o,a]=[(1-Math.abs(a))*Lr(o),(1-Math.abs(o))*Lr(a)]),i[t]=lf(o),i[t+1]=lf(a)}function cf(i,t,e,n){let s=Math.max(e/ph,-1),r=Math.max(n/ph,-1),o=1-Math.abs(s)-Math.abs(r);o<0&&([s,r]=[(1-Math.abs(r))*Lr(s),(1-Math.abs(s))*Lr(r)]);let a=Math.sqrt(s*s+r*r+o*o);i[t]=s/a,i[t+1]=r/a,i[t+2]=o/a}function Nr(i,t){let e=i.view(t.positions);if(!t.q){if(!(e instanceof Float32Array))throw new Error(`Geometry positions of type '${t.positions.t}' need a "q" origin and step.`);return e}if(!(e instanceof Uint16Array))throw new Error(`Quantized geometry positions must be u16, got '${t.positions.t}'.`);return e}function tl(i,t){let e=Nr(i,t);if(!t.q)return e;let[n,s,r]=t.q.o,o=t.q.s,a=new Float32Array(e.length);for(let l=0;l<e.length;l+=3)a[l]=n+e[l]*o,a[l+1]=s+e[l+1]*o,a[l+2]=r+e[l+2]*o;return a}function hf(i,t){if(!t.normals)return null;let e=i.view(t.normals);if(!(e instanceof Float32Array||e instanceof Int16Array))throw new Error(`Geometry normals must be i16 or f32, got '${t.normals.t}'.`);return e}var uf=32768,df=0,Nv=1,Bs=2,ff=65535;function pf(i,t,e,n){let s=[],r=[Uint32Array.from(e)];for(;r.length;){let o=r.pop(),a=0;for(let c of o)a+=t[c];if(a<=n||o.length<=1){o.length&&s.push(o);continue}mf(o,i);let l=0;for(let c=0;l<o.length-1&&c+t[o[l]]<=a/2;l++)c+=t[o[l]];l=Math.max(l,1),r.push(o.subarray(l),o.subarray(0,l))}return s}function mf(i,t,e=-1){let n=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let h of i)for(let d=0;d<3;d++){let u=t[h*3+d];Number.isFinite(u)&&(u<n[d]&&(n[d]=u),u>s[d]&&(s[d]=u))}let r=0;for(let h=1;h<3;h++)s[h]-n[h]>s[r]-n[r]&&(r=h);let o=s[r]-n[r],a=2**20-1,l=new Float64Array(i.length);for(let h=0;h<i.length;h++){let d=i[h],u=t[d*3+r],f=o>0&&Number.isFinite(u)?Math.round((u-n[r])/o*a):0;l[h]=f*2**32+d}let c=0;e<0?l.sort():c=Uv(l,e);for(let h=0;h<i.length;h++)i[h]=l[h]%2**32;return c}function Uv(i,t){let e=0,n=i.length-1,s=2654435769,r=2*Math.ceil(Math.log2(i.length+1))+8,o=0,a=0;for(;e<n;){let l=n-e+1;if(++o>r)return i.subarray(e,n+1).sort(),a+l*Math.ceil(Math.log2(l));a+=l,s=Math.imul(s,1664525)+1013904223>>>0;let c=i[e+s%(n-e+1)],h=e,d=n;for(;h<=d;){for(;i[h]<c;)h++;for(;i[d]>c;)d--;if(h<=d){let u=i[h];i[h++]=i[d],i[d--]=u}}if(t<=d)n=d;else if(t>=h)e=h;else return a}return a}function gf(i,t,e,n=1/0){let s=[];s.scanned=0;let r=[Uint32Array.from(t)];for(;r.length;){let o=r.pop(),a=Math.ceil(o.length/e);if(o.length<=1||a<=1&&Fv(o,i)<=n){o.length&&s.push(o);continue}let l=a>1?Math.ceil(o.length*Math.floor(a/2)/a):Math.ceil(o.length/2);s.scanned+=mf(o,i,l),r.push(o.subarray(l),o.subarray(0,l))}return s}function Fv(i,t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l of i){let c=t[l*3],h=t[l*3+1],d=t[l*3+2];c<e&&(e=c),c>r&&(r=c),h<n&&(n=h),h>o&&(o=h),d<s&&(s=d),d>a&&(a=d)}return Math.hypot(r-e,o-n,a-s)/2}function _f(i,t){let e=new Float64Array(6).fill(-1/0),n=new Float64Array(6).fill(-1/0),s=new Int32Array(6);for(let o=0;o<t.length;o++)if(t[o]!==0)for(let a=0;a<6;a++){let l=i[o*6+a],c=a<3?-l:l;c>e[a]?(n[a]=e[a],e[a]=c,s[a]=o):c>n[a]&&(n[a]=c)}if(e[0]===-1/0)return 0;let r=Math.hypot(e[0]+e[3],e[1]+e[4],e[2]+e[5]);if(n[0]===-1/0)return r;for(let o of s){let a=c=>s[c]===o?n[c]:e[c],l=Math.hypot(a(0)+a(3),a(1)+a(4),a(2)+a(5));r=Math.min(r,2*l)}return r}var gh=384*2**20;function xf(i,{cap:t=gh,minRepeats:e=16,perCell:n=1024,maxDraws:s=1024}={}){let r=new Uint8Array(i.length),o=0;for(let h of i)o+=h.k*h.bytes;if(o<=t)return r;let a=h=>(i[h].k-1)*i[h].bytes,l=[...i.keys()].filter(h=>i[h].k>=e);l.sort((h,d)=>a(d)-a(h)||i[d].k-i[h].k||h-d);let c=0;for(let h of l){let d=i[h].cells??Math.ceil(i[h].k/n);c+d>s||(r[h]=1,c+=d)}return r}function el(i,t){return i>65535?new Uint32Array(t):new Uint16Array(t)}function _h(i,t){return i.sort((e,n)=>t[n]-t[e]||e-n)}function vf(i,t,e,n){for(;t<e;){let s=t+e>>>1;i[s]>=n?t=s+1:e=s}return t}function yf(i,t,e){let n=i[t];return[n,e>t?i[e]-n:0]}function Mf(i,t,e,n){let s=i.subarray(t*12,t*12+12);if(s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===1&&s[5]===0&&s[6]===0&&s[7]===0&&s[8]===1&&e.q&&e.q.s===An){for(let a=0;a<3;a++)n[a]=s[9+a]+e.q.o[a];return df}let o=!0;for(let a=0;a<3;a++){let l=s[9+a],c=s[9+a];for(let h=0;h<3;h++){let d=s[h*3+a]*e.min[h],u=s[h*3+a]*e.max[h];l+=Math.min(d,u),c+=Math.max(d,u)}n[a]=Math.floor(l/An)*An,Math.ceil((c-n[a])/An)<=ff||(o=!1)}return o||n.fill(0),o?Nv:Bs}function bf(i,t){let e=i.length,n=0,s=0;for(let g of i){let p=t.source(t.geometryOf[g]);n+=p.vertices,s+=p.indices.length}let r=t.kind[i[0]]===Bs,o=r?new Float32Array(n*4):new Uint16Array(n*4),a=new Int16Array(n*2),l=t.textured?new Float32Array(n*2):null,c=el(n,s),h=new Uint32Array(e+1),d=new Float32Array(e*3),u=new Float32Array(e),f=new Float64Array(3),m=0,_=0;for(let g=0;g<e;g++){let p=i[g],M=t.source(t.geometryOf[p]),T=t.kind[p];if(T===Bs!==r)throw new Error("A chunk mixes f32 and u16 slots.");let S=t.matrices.subarray(p*12,p*12+12);for(let b=0;b<3;b++)d[g*3+b]=t.origins[p*3+b];u[g]=r?1:An,T===df?Bv(M,o,a,m,g):Ov(M,S,T,t.origins.subarray(p*3,p*3+3),o,a,m,g,f),l&&M.uvs&&l.set(M.uvs,m*2),h[g]=_;let v=M.indices;if(t.mirrored[p])for(let b=0;b<v.length;b+=3)c[_++]=v[b]+m,c[_++]=v[b+2]+m,c[_++]=v[b+1]+m;else for(let b=0;b<v.length;b++)c[_++]=v[b]+m;m+=M.vertices}return h[e]=_,{q:o,o:a,uv:l,index:c,indexStart:h,origins:d,steps:u}}function Bv(i,t,e,n,s){let r=i.positions;for(let o=0;o<i.vertices;o++){let a=(n+o)*4;t[a]=r[o*3],t[a+1]=r[o*3+1],t[a+2]=r[o*3+2],t[a+3]=s}if(i.oct)e.set(i.oct,n*2);else{let o=nl(i);for(let a=0;a<i.vertices;a++)Dr(e,(n+a)*2,o[a*3],o[a*3+1],o[a*3+2])}}function Ov(i,t,e,n,s,r,o,a,l){let[c,h,d,u,f,m,_,g,p,M,T,S]=t,b=c*(f*p-m*g)-u*(h*p-d*g)+_*(h*m-d*f)<0?-1:1,A=(f*p-m*g)*b,x=(m*_-u*p)*b,w=(u*g-f*_)*b,R=(g*d-p*h)*b,D=(p*c-_*d)*b,N=(_*h-g*c)*b,B=(h*m-d*f)*b,L=(d*u-c*m)*b,U=(c*f-h*u)*b,W=i.positions,V=i.q?i.q.o:null,O=i.q?i.q.s:1,F=nl(i);for(let G=0;G<i.vertices;G++){let Y=W[G*3],z=W[G*3+1],$=W[G*3+2];V&&(Y=V[0]+Y*O,z=V[1]+z*O,$=V[2]+$*O);let nt=c*Y+u*z+_*$+M,lt=h*Y+f*z+g*$+T,at=d*Y+m*z+p*$+S,X=(o+G)*4;e===Bs?(s[X]=nt,s[X+1]=lt,s[X+2]=at):(s[X]=mh(nt-n[0]),s[X+1]=mh(lt-n[1]),s[X+2]=mh(at-n[2])),s[X+3]=a;let tt=F[G*3],ht=F[G*3+1],Rt=F[G*3+2];l[0]=A*tt+R*ht+B*Rt,l[1]=x*tt+D*ht+L*Rt,l[2]=w*tt+N*ht+U*Rt,Dr(r,(o+G)*2,l[0],l[1],l[2])}}var mh=i=>Math.min(Math.max(Math.round(i/An),0),ff);function Sf(i,t,e,n,s){let r=i.length/3,o=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let c=0;c<r;c++)for(let h=0;h<3;h++){let d=t?t.o[h]+i[c*3+h]*t.s:i[c*3+h];d<o[h]&&(o[h]=d),d>a[h]&&(a[h]=d)}let l=e instanceof Int16Array?e:null;return{positions:i,q:t,oct:l,normals:l?null:e,indices:n,uvs:s,vertices:r,min:o,max:a}}function nl(i){if(!i.normals&&i.oct){i.normals=new Float32Array(i.vertices*3);for(let t=0;t<i.vertices;t++)cf(i.normals,t*3,i.oct[t*2],i.oct[t*2+1])}else i.normals||(i.normals=zv(i.positions,i.q,i.indices));return i.normals}function zv(i,t,e){let n=new Float32Array(i.length),s=t?.s??1;for(let r=0;r<e.length;r+=3){let o=e[r]*3,a=e[r+1]*3,l=e[r+2]*3,c=(i[a]-i[o])*s,h=(i[a+1]-i[o+1])*s,d=(i[a+2]-i[o+2])*s,u=(i[l]-i[o])*s,f=(i[l+1]-i[o+1])*s,m=(i[l+2]-i[o+2])*s,_=h*m-d*f,g=d*u-c*m,p=c*f-h*u;n[o]+=_,n[o+1]+=g,n[o+2]+=p,n[a]+=_,n[a+1]+=g,n[a+2]+=p,n[l]+=_,n[l+1]+=g,n[l+2]+=p}for(let r=0;r<n.length;r+=3){let o=Math.hypot(n[r],n[r+1],n[r+2])||1;n[r]/=o,n[r+1]/=o,n[r+2]/=o}return n}var Ur=`
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
}`,Fr=`
int slot = int( slotBase ) + int( q.w );
ivec2 st = ivec2( slot & 2047, slot >> 11 );
vec4 info = texelFetch( slotInfo, st, 0 );
vec4 state = texelFetch( slotState, st, 0 );
vec3 slotPosition = info.xyz + q.xyz * info.w;`,xh=`
#ifndef IO_NO_HIDE_BRANCH
if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
#endif`,kv=`
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
mat3 im = mat3( instanceMatrix );
transformedNormal = mat3( cross( im[ 1 ], im[ 2 ] ), cross( im[ 2 ], im[ 0 ] ), cross( im[ 0 ], im[ 1 ] ) ) * transformedNormal
  * ( dot( im[ 0 ], cross( im[ 1 ], im[ 2 ] ) ) < 0.0 ? -1.0 : 1.0 );
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif`;function Ai(i,t,e){let n=i.indexOf(t);if(n<0||i.indexOf(t,n+1)>=0)throw new Error(`The shader must contain '${t}' exactly once.`);return i.slice(0,n)+e+i.slice(n+t.length)}function Hv(i){Object.assign(i.uniforms,this.userData.slotUniforms);let t=Ai(i.vertexShader,"#include <common>",`#include <common>
${Ur}`);t=Ai(t,"#include <color_vertex>",`${Fr}
vTint = state.rgb;`),t=Ai(t,"#include <beginnormal_vertex>","vec3 objectNormal = ioOct( normal.xy );"),t=Ai(t,"#include <defaultnormal_vertex>",kv),t=Ai(t,"#include <begin_vertex>","vec3 transformed = slotPosition;"),t=Ai(t,"#include <clipping_planes_vertex>",`#include <clipping_planes_vertex>
${xh}`),i.vertexShader=t;let e=Ai(i.fragmentShader,"#include <common>",`#include <common>
varying vec3 vTint;`);e=Ai(e,"#include <color_fragment>","diffuseColor.rgb *= vTint;"),i.fragmentShader=e}function vh(i,t,e=!1){return i.userData.slotUniforms=t,i.onBeforeCompile=Hv,i.index0AttributeName="q",e&&(i.defines={IO_NO_HIDE_BRANCH:""}),i}var Sh=["materials","textures","white","wireframe"],Vv=[245,158,11],Gv=[235,235,237],Br=4294967295,qi=2048,yh=256,Wv=16,Mh=1024,Xv=.1,qv=8192,Yv=1.4,sl=2**-20,il=17;function $v(i,t){let[e,n,s,r,o,a,l,c,h]=i.subarray(t*12,t*12+9);return e*(o*h-a*c)-r*(n*h-s*c)+l*(n*a-s*o)<0}function Zv(){this.array=null}function Rn(i,t,e=!1,n=Ae){return new n(i,t,e).onUpload(Zv)}var Or=class extends RangeError{constructor(t,e){super(`${t} drawable instances exceed the limit of ${e}.`),this.name="ModelTooLargeError",this.count=t,this.limit=e}},wf=(i,t)=>{for(let e=t*6;e<t*6+6;e++)if(!Number.isFinite(i[e]))return!1;return!0};function Jv(i,t,e,n){for(let s=0;s<24;s+=4){let r=i[s],o=i[s+1],a=i[s+2],l=i[s+3];if(r*t[e+(r>=0?3:0)]+o*t[e+(o>=0?4:1)]+a*t[e+(a>=0?5:2)]+l<-(n+sl*Math.abs(l)))return!0}return!1}function Ef(i,t,{min:e,max:n},s){let r=t*12,o=t*6;if(e[0]>n[0]||e[1]>n[1]||e[2]>n[2]){s.set(e,o),s.set(n,o+3);return}for(let a=0;a<3;a++){let l=i[r+a],c=i[r+a+3],h=i[r+a+6],d=i[r+a+9],u=l*e[0],f=l*n[0],m=c*e[1],_=c*n[1],g=h*e[2],p=h*n[2];s[o+a]=Math.min(u,f)+Math.min(m,_)+Math.min(g,p)+d,s[o+a+3]=Math.max(u,f)+Math.max(m,_)+Math.max(g,p)+d}}var Kv=i=>{let t=i.getHex(Me);return[t>>16&255,t>>8&255,t&255]},zr=class{constructor(t,e={}){let{meta:n}=t,s=n.instances,r=s.count,o=t.view(s.geometry),a=t.view(s.material),l=t.view(s.matrix),c=n.points,h=c?.count??0,d=r+h;this.root=new Re,this.elementCount=n.elements.length,this._elements=n.elements,this._meta=n,this._mode="materials",this._opacity=1,this._picking=!1,this._pickBounds=!0,this._instanceDetail=!0,this._pickFrustum=null,this._textures=new Map,this._elementOf=new Int32Array(d),this._elementOf.set(t.view(s.element)),this._bucketOf=new Uint32Array(r),this._visible=new Uint8Array(d).fill(1),this._layers=new Map,this._layerHides=new Uint8Array(d),this._highlight=new Uint8Array(d),this._highlighted=[],this._tint=new Map,this._boxes=new Float32Array(d*6),this._minPixels=0,this._viewHeight=1,this.visibleCost=0;let u=!!e.noHideBranch;if(this.slotUniforms={slotInfo:{value:null},slotState:{value:null}},this._buckets=this._createBuckets(n,a,u),h){this._elementOf.set(t.view(c.element),r),this._pointMaterials=t.view(c.material).slice();let m=t.view(c.geometry),_=t.view(c.matrix),g=this._boxes.subarray(r*6);for(let p=0;p<h;p++)Ef(_,p,n.geometries[m[p]].bbox,g)}this._indexElements();for(let m=0;m<r;m++){let _=n.geometries[o[m]];if(!_)throw new se(`Instance ${m} references missing geometry ${o[m]}.`);Ef(l,m,_.bbox,this._boxes)}let f=Math.min(2**24-1,qi*(e.maxTextureSize??1/0),e.slotLimit??1/0);this._build(t,o,l,e,f);for(let m=0;m<r;m++)this._applyColor(m),this._draw(m);this._flush()}elementId(t){return this._checkElement(t),this._elements[t].id}setVisible(t,e){for(let n of t)for(let s of this.instancesOf(n))this._setInstanceVisible(s,e);this._changed("visibility")}showAll(){for(let t=0;t<this._visible.length;t++)this._setInstanceVisible(t,!0);this._changed("visibility")}setHiddenElements(t){let e=this._instanceMask(t);for(let n=0;n<e.length;n++){let s=e[n]===0;s!==(this._visible[n]===1)&&this._setInstanceVisible(n,s)}this._changed("visibility")}isolate(t){let e=this._instanceMask(t);for(let n=0;n<e.length;n++)this._setInstanceVisible(n,e[n]===1);this._changed("visibility")}setHighlighted(t){let e=this._highlighted;this._highlighted=[];for(let n of e)this._highlight[n]=0;for(let n of t)for(let s of this.instancesOf(n))this._highlight[s]=1,this._highlighted.push(s);for(let n of e)this._applyColor(n);for(let n of this._highlighted)this._applyColor(n);this._changed("appearance")}setTint(t,e){let n=e===null?null:Kv(new Ht(e));for(let s of t)for(let r of this.instancesOf(s))n?this._tint.set(r,n):this._tint.delete(r),this._applyColor(r);this._changed("appearance")}setLayerHidden(t,e,n){let s=this._layers.get(t);s||this._layers.set(t,s=new Uint8Array(this._visible.length));for(let r of e)for(let o of this.instancesOf(r))this._setLayerFlag(s,o,n);this._changed("visibility")}clearLayer(t){let e=this._layers.get(t);if(e){for(let n=0;n<e.length;n++)this._setLayerFlag(e,n,!1);this._layers.delete(t),this._changed("visibility")}}replaceLayerHidden(t,e){if(!e.length)return this.clearLayer(t);let n=this._instanceMask(e),s=this._layers.get(t);s||this._layers.set(t,s=new Uint8Array(this._visible.length));for(let r=0;r<n.length;r++)this._setLayerFlag(s,r,n[r]===1);this._changed("visibility")}_instanceMask(t){let e=new Uint8Array(this._visible.length);for(let n of t)for(let s of this.instancesOf(n))e[s]=1;return e}visibilityState(){return this._visible.map((t,e)=>this._shown(e)?1:0)}instancesOf(t){return this._checkElement(t),this._elementInstances.subarray(this._elementStart[t],this._elementStart[t+1])}isVisible(t){this._checkElement(t);for(let e=this._elementStart[t];e<this._elementStart[t+1];e++)if(this._shown(this._elementInstances[e]))return!0;return!1}get instanceCount(){return this._slotOf.length}isInstanceVisible(t){return this._shown(t)}get slotCount(){return this._slotInstance.length}instance(t){let e=this._slotOf[t];return e===Br?{mesh:null,element:this._elementOf[t],slot:-1}:{mesh:this._units[this._slotUnit[e]].mesh,element:this._elementOf[t],slot:e}}instanceColor(t,e=new Ht){let n=this._slotOf[t],[s,r,o]=n===Br?this._colorOf(t):this._state.image.data.subarray(n*4,n*4+3);return e.setRGB(s/255,r/255,o/255,Me)}instanceColorOverride(t,e){let n=this._colorOverride(t);return n?(e.setRGB(n[0]/255,n[1]/255,n[2]/255,Me),!0):!1}slotElement(t){return this._elementOf[this._slotInstance[t]]}slotInstance(t){return this._slotInstance[t]}withMaterial(t,e,{pickCamera:n=null,section:s=!1}={}){if(this._picking=!s,n&&this._pickBounds&&this._units.length>this._chunkCount){this._pickFrustum=uh(n,this._planes);let{x:r,y:o,z:a}=n.position;this._pickViewPadding=sl*(Math.abs(r)+Math.abs(o)+Math.abs(a))}for(let r of this._units)r.mesh.material=t,s?(r.mesh.visible=(r.mesh.visible||!!r.lines?.visible)&&r.bucket.material.opacity>0,r.lines&&(r.lines.visible=!1)):this._showUnit(r);if(!s)for(let r of this._compactCells)this._cellAttributes(r,!1);try{return e()}finally{this._picking=!1,this._pickFrustum=null;for(let r of this._units)r.mesh.material=r.bucket.material,this._showUnit(r);for(let r of this._cut)r.mesh.visible=!1,r.lines&&(r.lines.visible=!1);if(!s)for(let r of this._compactCells)this._cellAttributes(r,!0)}}elementBox(t,e=new ae){this._checkElement(t),e.makeEmpty();for(let n=this._elementStart[t];n<this._elementStart[t+1];n++)this._expandBox(e,this._elementInstances[n]);return e}visibleBox(){let t=new ae;for(let e=0;e<this._visible.length;e++)this._shown(e)&&this._expandBox(t,e);return t}setDisplayMode(t){if(!Sh.includes(t))throw new Error(`Unknown display mode '${t}'.`);let e=t==="white"!=(this._mode==="white");this._mode=t;for(let n of this._buckets){let s=t==="textures"&&n.texture!==null?this._texture(n.texture):null;for(let r of[n.material,n.wire])r.map!==s&&(r.map=s,r.needsUpdate=!0)}t==="wireframe"&&this._buildLines();for(let n of this._units)this._showUnit(n);if(e)for(let n=0;n<this._slotOf.length;n++)this._applyColor(n);this._changed("appearance")}setOpacity(t){if(!(t>=0&&t<=1))throw new RangeError(`Opacity must be within 0..1, got ${t}.`);this._opacity=t;for(let e of this._buckets)this._applyOpacity(e);this._changed("appearance")}get opacity(){return this._opacity}setDetail(t,e=1){this._minPixels=t,this._viewHeight=e;for(let s of this._cut)this._showUnit(s);this._cut.length=0;for(let s of this._detailCells)s.detailCount=null;this._detailCells.length=0;for(let s of this._compactCells)this._cellAttributes(s,!1);this._compactCells.length=0;let n=this._unitScale;this._unitScale=null,!(!(t>0)||!n)&&(this._cutInView=0,this._cutFrame=null,this._units.forEach((s,r)=>{if(!(!(n[r]>=0)||s.shown===0)){if(s.dirty&&this._span(s),s.cell&&this._detailUsesInstances){if(s.detailHigh>=t&&this._detailCell(s,t))return}else if(this._slotRadius[s.slotBase+s.first]*n[r]>=t)return;s.mesh.visible=!1,s.lines&&(s.lines.visible=!1),this._cut.push(s),this._cutInView+=bh(s,s.first,s.last+1)}}))}_detailCell(t,e){if(t.detailLow>=e)return t.detailCount=Math.min(t.detailEnd,t.last+1),this._detailCells.push(t),!0;let{slotBase:n,last:s}=t,r=this._detailIndices,o=0,a=!1,l=!1;for(let u=0;u<=s;u++){let f=this._pixels[n+u];f<0||(f<e?a=!0:(r[o++]=u,l||(l=a)))}if(!o)return!1;if(t.detailCount=l?o:r[o-1]+1,this._detailCells.push(t),!l)return!0;let c=t.compact??(t.compact=this._compactCell(t.n)),h=c.buffer.array,d=o>c.count;for(let u=0;u<o;u++){let f=u*il,m=n+r[u];if(u<c.count&&h[f+16]===m)continue;let _=r[u]*12;for(let g=0;g<4;g++)for(let p=0;p<3;p++)h[f+g*4+p]=t.matrices[_+g*3+p];h[f+15]=1,h[f+16]=m,d=!0}return c.count=o,d&&(c.buffer.clearUpdateRanges(),c.buffer.addUpdateRange(0,o*il),c.buffer.needsUpdate=!0),this._cellAttributes(t,!0),this._compactCells.push(t),!0}_compactCell(t){let e=new mr(new Float32Array(t*il),il);return e.setUsage(Ar),this._detailBytes+=e.array.byteLength,{buffer:e,count:0,matrix:new bs(e,16,0),slots:new bs(e,1,16)}}_cellAttributes(t,e){let n=e?t.compact.matrix:t.matrixAttribute;t.mesh.instanceMatrix=n,t.lines&&(t.lines.instanceMatrix=n),t.mesh.geometry.setAttribute("slotBase",e?t.compact.slots:t.slotAttribute)}get totalCost(){return this._totalCost}detailThreshold(t,e,n,s=!0){if(this.visibleCost=this._totalCost,this._detailUsesInstances=!1,this._totalCost<=n)return 0;this._detailUsesInstances=s&&this._instanceDetail&&this._chunkCount<this._units.length,t.updateMatrixWorld();let r=uh(t,this._planes),o=fh(t,e,this._detailView),a=this._pixels,l=this._detailBins.fill(0),c=this._state.image.data,h=this._boxes,d=this._unitScale=new Float64Array(this._units.length).fill(-1),u=0;for(let f=0;f<this._units.length;f++){let m=this._units[f],_=m.sphere;if(m.shown===0||dh(r,_[0],_[1],_[2],_[3]))continue;let g=Tf(o,_),p=o[7]?g>0?o[6]/g:1/0:o[6];d[f]=p;let M=m.cell&&this._detailUsesInstances,T=M&&!of(r,_[0],_[1],_[2],_[3]+m.pickPadding),S=m.slotBase+m.n,v=-1;if(M){let R=this._slotRadius[m.slotBase],D=this._slotRadius[S-1],N=g+_[3],B=Math.abs(o[3])*_[4]+Math.abs(o[4])*_[5]+Math.abs(o[5])*_[6],L=N-B-R,U=N+B-D,W=Math.fround(o[7]?L>0?R*o[6]/L:1/0:R*p),V=Math.fround(o[7]?U>0?D*o[6]/U:1/0:D*p);Fs(V)===Fs(W)&&(v=W)}if(v>=0&&!T){m.detailLow=m.detailHigh=v,m.detailEnd=m.n;let R=this._slotCost[m.slotBase]*m.shown;l[Fs(v)]+=R,u+=R;continue}let b=0,A=1/0,x=-1,w=0;for(let R=m.slotBase;R<S;R++){if(c[R*4+3]===0){M&&(a[R]=-1);continue}let D=this._slotRadius[R],N=p;if(M){let U=this._slotInstance[R]*6,W=(h[U]+h[U+3])*.5,V=(h[U+1]+h[U+4])*.5,O=(h[U+2]+h[U+5])*.5;if(T&&dh(r,W,V,O,D+m.pickPadding)){a[R]=-1;continue}if(w=R-m.slotBase+1,v>=0){b++;continue}let F=(W-o[0])*o[3]+(V-o[1])*o[4]+(O-o[2])*o[5]-D;N=o[7]?F>0?o[6]/F:1/0:o[6]}let B=N===1/0?1/0:Math.fround(D*N);M&&(a[R]=B,A=Math.min(A,B),x=Math.max(x,B));let L=this._slotCost[R];l[Fs(B)]+=L,u+=L}if(M){if(b){A=x=v;let R=b*this._slotCost[m.slotBase];l[Fs(v)]+=R,u+=R}m.detailLow=A,m.detailHigh=x,m.detailEnd=w}}return this.visibleCost=u,af(l,u,n)}drawStats(){let t=-1/0;for(let r of this._units)t=Math.max(t,r.lastFrame);let e=0,n=this._cutFrame===t?this._cutInView:0,s=0;for(let r of this._units)r.lastFrame===t&&(n+=bh(r,r.first,Math.max(r.last+1,r.first)),e+=bh(r,r.first,Math.max(r.end,r.first)),s++);return{drawn:e,inView:n,draws:s}}drawnInstances(t){t.updateMatrixWorld();let e=new On().setFromProjectionMatrix(new Zt().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse)),n={info:{render:{frame:-1}}},s=new Xe,r=[];for(let o of this._units){let a=this._mode==="wireframe"&&!this._picking?o.lines:o.mesh;if(!(!a?.visible||!e.intersectsSphere(s.set(s.center.fromArray(o.sphere),o.sphere[3])))){a.onBeforeRender(n,null,t,a.geometry,a.material,null);for(let l=o.first;l<o.end;l++){let c=o.cell&&o.mesh.instanceMatrix===o.compact?.matrix?o.compact.slots.getX(l):o.slotBase+l;this._state.image.data[c*4+3]&&r.push(this._slotInstance[c])}}}return r.sort((o,a)=>o-a)}memory(){let t=this._units[this._chunkCount]?.slotBase??this._slotInstance.length;return{gpuBytes:this._mergedBytes+this._instancedBytes+this._lineBytes+this._stateBytes+this._detailBytes,mergedBytes:this._mergedBytes,instancedBytes:this._instancedBytes,stateBytes:this._stateBytes,lineBytes:this._lineBytes,detailBytes:this._detailBytes,detailSourceBytes:(this._slotInstance.length-t)*48,chunks:this._chunkCount,cells:this._units.length-this._chunkCount,mergedInstances:t,instancedInstances:this._slotInstance.length-t,triangles:this._triangles}}setClipping(t,e){for(let n of this._buckets)for(let s of[n.material,n.wire])s.clippingPlanes=t.length>0?t:null,s.clipIntersection=e,s.needsUpdate=!0;this._changed("clipping")}_build(t,e,n,s,r){let o=e.length,a=this._meta,l=new Map,c=O=>{let F=l.get(O);if(!F){let G=a.geometries[O],Y=t.view(G.indices),z=G.uvs?t.view(G.uvs):null;F=Sf(Nr(t,G),G.q??null,hf(t,G),Y,z),F.drawable=F.indices.length>=3&&F.min.every(Number.isFinite)&&F.max.every(Number.isFinite),l.set(O,F)}return F},h=new Uint8Array(o),d=new Float64Array(o*3),u=new Float32Array(o*3),f=new Uint32Array(o),m=new Float32Array(o),_=new Uint8Array(o),g=new Map,p=this._boxes;for(let O=0;O<o;O++){let F=c(e[O]);if(!F.drawable||!wf(p,O))continue;h[O]=Mf(n,O,F,d.subarray(O*3,O*3+3)),_[O]=$v(n,O)?1:0,f[O]=F.vertices;for(let z=0;z<3;z++)u[O*3+z]=(p[O*6+z]+p[O*6+3+z])/2;m[O]=Math.hypot(p[O*6+3]-p[O*6],p[O*6+4]-p[O*6+1],p[O*6+5]-p[O*6+2])/2;let G=(e[O]*2+_[O])*this._buckets.length+this._bucketOf[O],Y=g.get(G);Y||g.set(G,Y=[]),Y.push(O)}let T=[...g.keys()].sort((O,F)=>O-F).map(O=>{let F=g.get(O),G=c(e[F[0]]),Y=this._buckets[this._bucketOf[F[0]]].texture!==null,z=[0,1,2].every(nt=>(G.max[nt]-G.min[nt])/An<=65535),$=G.vertices*((z?12:20)+(Y?8:0))+G.indices.length*(G.vertices>65535?4:2);return{k:F.length,bytes:$,members:F,textured:Y}}),S=s.mergedCap??gh,v=s.minRepeats??Wv;if(T.reduce((O,F)=>O+F.k*F.bytes,0)>S){let O=s.cellExtent==null?_f(p,f)*Xv:this.visibleBox().getSize(new P).length()*s.cellExtent;for(let F of T)F.k<v||(F.leaves=gf(u,F.members,Mh,O),F.cells=F.leaves.length)}let b=xf(T,{cap:S,minRepeats:v,perCell:Mh,maxDraws:qv}),A=new Map,x=new Uint32Array(a.geometries.length),w=[];T.forEach((O,F)=>{if(b[F]){for(let G of O.leaves)w.push({shape:O,members:_h(G,m)});return}for(let G of O.members){x[e[G]]++;let Y=this._bucketOf[G]*2+(h[G]===Bs?1:0),z=A.get(Y);z||A.set(Y,z=[]),z.push(G)}});let R=[];for(let O of[...A.keys()].sort((F,G)=>F-G))for(let F of pf(u,f,A.get(O),s.chunkVertices??uf))R.push(_h(F,m));let D=[...R,...w.map(O=>O.members)].reduce((O,F)=>O+F.length,0);if(D>r)throw new Or(D,r);let N=Math.max(1,Math.ceil(D/qi)),B=new Float32Array(qi*N*4);this._state=new Bn(new Uint8Array(qi*N*4),qi,N),this._state.colorSpace=Me,this._state.onUpdate=()=>{this._fullPending=!1,this._pendingRanges=0},this._fullPending=!0,this._pendingRanges=0,this._dirty=new Uint32Array(yh),this._dirtyCount=0;let L=new Bn(B,qi,N,sn,Ye);L.needsUpdate=!0,L.onUpdate=()=>L.image.data=null,this.slotUniforms.slotInfo.value=L,this.slotUniforms.slotState.value=this._state,this._stateBytes=qi*N*20,this._slotOf=new Uint32Array(this._visible.length).fill(Br),this._slotInstance=new Uint32Array(D),this._slotUnit=new Uint32Array(D),this._slotRadius=new Float32Array(D),this._slotCost=new Float32Array(D),this._pixels=new Float32Array(D),this._planes=new Float64Array(24),this._detailView=new Float64Array(8),this._frameView=new Float64Array(8),this._frameViewAt=NaN,this._units=[],this._cut=[],this._detailCells=[],this._compactCells=[],this._detailIndices=new Uint16Array(Mh),this._detailBins=new Float64Array(hh),this._detailBytes=0,this._unitScale=null,this._cutInView=0,this._cutFrame=-1,this._mergedBytes=0,this._instancedBytes=0,this._lineBytes=0;let U={matrices:n,geometryOf:e,mirrored:_,kind:h,origins:d,source:c,textured:!1};this._lineSources=new Map;let W=0;for(let O of R){let F=this._buckets[this._bucketOf[O[0]]];U.textured=F.texture!==null;let G=bf(O,U);for(let Y=0;Y<O.length;Y++){let z=O[Y],$=W+Y;this._slotOf[z]=$,this._slotInstance[$]=z,this._slotUnit[$]=this._units.length,this._slotRadius[$]=m[z],this._slotCost[$]=(G.indexStart[Y+1]-G.indexStart[Y])/3,B.set(G.origins.subarray(Y*3,Y*3+3),$*4),B[$*4+3]=G.steps[Y];let nt=e[z];this._lineSources.has(nt)||this._lineSources.set(nt,c(nt).indices.slice()),--x[nt]===0&&l.delete(nt)}this._units.push(this._chunk(F,O,W,G,_,e)),W+=O.length}this._lineMembers={mirrored:_,geometryOf:e.slice()},this._chunkCount=this._units.length,this._triangles=this._slotCost.reduce((O,F)=>O+F,0);let V=new Map;for(let{shape:O,members:F}of w){let G=F[0],Y=c(e[G]),z=V.get(O);if(!z){let $=a.geometries[e[G]].bbox;z=this._shape(Y,_[G]===1,O.textured);let nt=at=>Math.max(...at.map(Math.abs)),lt=Math.max(nt(Y.min),nt(Y.max));z.pickExtent=lt,z.pickPadding=Math.max(0,...Y.min.map((at,X)=>$.min[X]-at),...Y.max.map((at,X)=>at-$.max[X]))+(Y.q?sl*(nt(Y.q.o)+65535*Math.abs(Y.q.s)):0),V.set(O,z)}for(let $=0;$<F.length;$++){let nt=F[$],lt=W+$;this._slotOf[nt]=lt,this._slotInstance[lt]=nt,this._slotUnit[lt]=this._units.length,this._slotRadius[lt]=m[nt],this._slotCost[lt]=z.triangles*Yv,B.set(Y.q?Y.q.o:[0,0,0],lt*4),B[lt*4+3]=Y.q?Y.q.s:1}this._triangles+=z.triangles*F.length,this._units.push(this._cell(this._buckets[this._bucketOf[G]],F,W,z,n)),W+=F.length}this._totalCost=this._slotCost.reduce((O,F)=>O+F,0)}_shape(t,e,n){let s=t.vertices,r=t.q?new Uint16Array(s*4):new Float32Array(s*4);for(let h=0;h<s;h++)for(let d=0;d<3;d++)r[h*4+d]=t.positions[h*3+d];let o=t.oct?t.oct.slice():null;if(!o){let h=nl(t);o=new Int16Array(s*2);for(let d=0;d<s;d++)Dr(o,d*2,h[d*3],h[d*3+1],h[d*3+2])}let a=n?new Float32Array(s*2):null;a&&t.uvs&&a.set(t.uvs);let l=t.indices,c=el(s,l.length);for(let h=0;h<l.length;h+=3)c[h]=l[h],c[h+1]=l[h+(e?2:1)],c[h+2]=l[h+(e?1:2)];return this._instancedBytes+=r.byteLength+o.byteLength+(a?.byteLength??0)+c.byteLength,{q:Rn(r,4),normal:Rn(o,2,!0),uv:a&&Rn(a,2),index:new Ae(c,1),triangles:l.length/3}}_cell(t,e,n,s,r){let o=e.length,a=new fe;a.setAttribute("q",s.q),a.setAttribute("position",s.q),a.setAttribute("normal",s.normal),s.uv&&a.setAttribute("uv",s.uv);let l=Rn(Float32Array.from({length:o},(g,p)=>n+p),1,!1,si);a.setAttribute("slotBase",l),a.setIndex(s.index);let c=Af(this._boxes,e),h=new Xe(new P(c[0],c[1],c[2]),c[3]);a.boundingSphere=h;let d=new _i(a,t.material,0),u=new Float32Array(o*16),f=new Float32Array(o*12),m=0;for(let g=0;g<o;g++){let p=e[g]*12;for(let M=0;M<4;M++)for(let T=0;T<3;T++){let S=r[p+M*3+T];u[g*16+M*4+T]=S,f[g*12+M*3+T]=S}u[g*16+15]=1;for(let M=p;M<p+3;M++){let T=Math.abs(r[M])+Math.abs(r[M+3])+Math.abs(r[M+6]),S=T*s.pickExtent+Math.abs(r[M+9]);m=Math.max(m,T*s.pickPadding+sl*S)}}d.instanceMatrix=Rn(u,16,!1,si),d.count=o,d.boundingSphere=h,this._instancedBytes+=o*68;let _={bucket:t,mesh:d,lines:null,slotBase:n,n:o,sphere:c,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!0,triangles:s.triangles,lastFrame:-1/0,pickPadding:Math.sqrt(3)*m,detailCount:null,detailLow:1/0,detailHigh:-1,detailEnd:0,compact:null,matrices:f,matrixAttribute:d.instanceMatrix,slotAttribute:l};return d.onBeforeRender=(g,p,M)=>this._range(_,g,M,d),d.visible=!1,this.root.add(d),_}_chunk(t,e,n,s,r,o){let a=new Ts;a.instanceCount=1,a.setAttribute("q",Rn(s.q,4)),a.setAttribute("normal",Rn(s.o,2,!0)),s.uv&&a.setAttribute("uv",Rn(s.uv,2)),a.setAttribute("slotBase",Rn(new Float32Array([n]),1,!1,si)),a.setIndex(Rn(s.index,1));let l=Af(this._boxes,e);a.boundingSphere=new Xe(new P(l[0],l[1],l[2]),l[3]),this._mergedBytes+=s.q.byteLength+s.o.byteLength+(s.uv?.byteLength??0)+s.index.byteLength;let c=new pe(a,t.material),h={bucket:t,mesh:c,lines:null,slotBase:n,n:e.length,sphere:l,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!1,starts:s.indexStart,vertices:s.q.length/4,f32:s.q instanceof Float32Array,members:e.slice(),lastFrame:-1/0};return c.onBeforeRender=(d,u,f)=>this._range(h,d,f,c),c.visible=!1,this.root.add(c),h}_buildLines(){if(!this._lineSources)return;let{mirrored:t,geometryOf:e}=this._lineMembers;for(let n of this._units){if(n.cell){let h=n.mesh.geometry.index;n.lines=new _i(n.mesh.geometry,n.bucket.wire,0),n.lines.instanceMatrix=n.mesh.instanceMatrix,n.lines.boundingSphere=n.mesh.boundingSphere,n.lines.onBeforeRender=(d,u,f)=>this._range(n,d,f,n.lines),this._lineBytes+=h.count*2*h.array.BYTES_PER_ELEMENT,this.root.add(n.lines);continue}let s=n.starts[n.n],r=el(n.vertices,s*2),o=0,a=0;for(let h of n.members){let d=this._lineSources.get(e[h]),u=t[h]===1;for(let f=0;f<d.length;f+=3){let m=d[f]+a,_=d[f+(u?2:1)]+a,g=d[f+(u?1:2)]+a;r[o++]=m,r[o++]=_,r[o++]=_,r[o++]=g,r[o++]=g,r[o++]=m}a+=this._meta.geometries[e[h]].positions.n/3}let l=n.mesh.geometry,c=new Ts;c.instanceCount=1;for(let h of["q","normal","uv","slotBase"])l.attributes[h]&&c.setAttribute(h,l.attributes[h]);c.setIndex(Rn(r,1)),c.boundingSphere=l.boundingSphere,this._lineBytes+=r.byteLength,n.lines=new bn(c,n.bucket.material),n.lines.onBeforeRender=(h,d,u)=>this._range(n,h,u,n.lines),this.root.add(n.lines),n.members=null}this._lineSources=null,this._lineMembers=null}_range(t,e,n,s){t.dirty&&this._span(t);let r=t.last+1;if(this._picking){if(t.cell&&this._pickFrustum){let o=this._state.image.data,a=t.pickPadding+this._pickViewPadding;for(;r>0;){let l=t.slotBase+r-1;if(o[l*4+3]&&!Jv(this._pickFrustum,this._boxes,this._slotInstance[l]*6,a))break;r--}}}else if(t.cell&&t.detailCount!==null)r=t.detailCount;else if(this._minPixels>0&&r>t.first){let o=e.info.render.frame;o!==this._frameViewAt&&(fh(n,this._viewHeight,this._frameView),this._frameViewAt=o);let a=this._frameView,l=Tf(a,t.sphere),c=a[7]?l>0?this._minPixels*l/a[6]:0:this._minPixels/a[6];r=Math.min(r,vf(this._slotRadius,t.slotBase+t.first,t.slotBase+r,c)-t.slotBase)}if(t.cell)s.count=Math.max(r,0);else{let o=s.isLineSegments?2:1,[a,l]=yf(t.starts,t.first,r);s.geometry.setDrawRange(a*o,l*o)}this._picking||(t.end=r,t.lastFrame=e.info.render.frame,this._cutFrame===null&&this._minPixels>0&&(this._cutFrame=t.lastFrame))}_span(t){let e=this._state.image.data,n=0;for(;n<t.n&&e[(t.slotBase+n)*4+3]===0;)n++;let s=t.n-1;for(;s>=n&&e[(t.slotBase+s)*4+3]===0;)s--;t.first=n<t.n&&!t.cell?n:0,t.last=n<t.n?s:-1,t.dirty=!1}_showUnit(t){let e=this._mode==="wireframe"&&!this._picking;t.mesh.visible=t.shown>0&&!e,t.lines&&(t.lines.visible=t.shown>0&&e)}_createBuckets(t,e,n){let s=new Map,r=[];for(let o=0;o<e.length;o++){let a=e[o],l=s.get(a);if(!l){let c=t.materials[a];if(!c)throw new se(`Instance ${o} references missing material ${a}.`);l={index:r.length,bytes:c.color.map(h=>Math.round(h*255)),opacity:c.opacity,texture:c.texture??null,material:vh(new ws({side:Oe}),this.slotUniforms,n),wire:vh(new ws({side:Oe,wireframe:!0}),this.slotUniforms,n)},this._applyOpacity(l),s.set(a,l),r.push(l)}this._bucketOf[o]=l.index}return r}_indexElements(){let t=new Uint32Array(this.elementCount+1);for(let s of this._elementOf)s>=0&&t[s+1]++;for(let s=0;s<this.elementCount;s++)t[s+1]+=t[s];let e=new Uint32Array(t[this.elementCount]),n=t.slice(0,this.elementCount);this._elementOf.forEach((s,r)=>{s>=0&&(e[n[s]++]=r)}),this._elementStart=t,this._elementInstances=e}_texture(t){let e=this._textures.get(t);if(!e){let n=this._meta.textures[t],s=new Image;e=new Ge(s),e.colorSpace=Me,e.wrapS=e.wrapT=ps,e.repeat.set(1/n.sx,1/n.sy),s.onload=()=>{e.needsUpdate=!0,this._changed("appearance")},s.src=`data:${n.mime};base64,${n.data}`,this._textures.set(t,e)}return e}_applyOpacity(t){let e=t.opacity*this._opacity,n=e<1;for(let s of[t.material,t.wire])s.transparent!==n&&(s.needsUpdate=!0),s.opacity=e,s.transparent=n,s.depthWrite=!n}_colorOverride(t){return this._highlight[t]?Vv:this._tint.get(t)??(this._mode==="white"?Gv:null)}_colorOf(t){let e=this._colorOverride(t);if(e)return e;if(t>=this._bucketOf.length){let n=this._pointMaterials[t-this._bucketOf.length];return this._meta.materials[n].color.map(s=>Math.round(s*255))}return this._buckets[this._bucketOf[t]].bytes}_applyColor(t){let e=this._slotOf[t];e!==Br&&(this._state.image.data.set(this._colorOf(t),e*4),this._markDirty(e))}_setInstanceVisible(t,e){this._visible[t]=e?1:0,this._draw(t)}_setLayerFlag(t,e,n){t[e]!==(n?1:0)&&(t[e]=n?1:0,this._layerHides[e]+=n?1:-1,this._draw(e))}_shown(t){return this._visible[t]===1&&this._layerHides[t]===0}_draw(t){let e=this._slotOf[t];if(e===Br)return;let n=this._shown(t)?255:0,s=this._state.image.data;if(s[e*4+3]===n)return;s[e*4+3]=n,this._markDirty(e);let r=this._units[this._slotUnit[e]];r.shown+=n?1:-1,r.dirty=!0,this._showUnit(r)}_markDirty(t){this._dirtyCount<yh&&(this._dirty[this._dirtyCount]=t),this._dirtyCount++}_flush(){let t=this._dirtyCount;if(t===0)return;this._dirtyCount=0;let e=this._state;if(this._fullPending||this._pendingRanges+t>yh)e.clearUpdateRanges(),this._fullPending=!0;else{for(let n=0;n<t;n++)e.addUpdateRange(this._dirty[n]*4,4);this._pendingRanges+=t}e.needsUpdate=!0}_checkElement(t){if(!Number.isInteger(t)||t<0||t>=this.elementCount)throw new RangeError(`Element index ${t} is out of range 0..${this.elementCount-1}.`)}_expandBox(t,e){if(!wf(this._boxes,e))return;let n=this._boxes,s=e*6;t.min.set(Math.min(t.min.x,n[s]),Math.min(t.min.y,n[s+1]),Math.min(t.min.z,n[s+2])),t.max.set(Math.max(t.max.x,n[s+3]),Math.max(t.max.y,n[s+4]),Math.max(t.max.z,n[s+5]))}_changed(t){this._flush(),this.root.dispatchEvent({type:"change",detail:{kind:t}})}};function bh(i,t,e){return e<=t?0:i.cell?(e-t)*i.triangles:(i.starts[e]-i.starts[t])/3}function Tf(i,t){return(t[0]-i[0])*i[3]+(t[1]-i[1])*i[4]+(t[2]-i[2])*i[5]-t[3]}function Af(i,t){let e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let a of t)for(let l=0;l<3;l++)e[l]=Math.min(e[l],i[a*6+l]),n[l]=Math.max(n[l],i[a*6+3+l]);let s=(n[0]-e[0])/2,r=(n[1]-e[1])/2,o=(n[2]-e[2])/2;return Float64Array.of((e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,Math.hypot(s,r,o),s,r,o)}var rl=class{constructor(t){this.root=new Re,this._materials=[];let e=t.meta.points;if(this.count=e?.count??0,!this.count)return;let n=t.view(e.geometry),s=t.view(e.material),r=t.view(e.matrix);for(let o=0;o<this.count;o++){let a=t.meta.geometries[n[o]];if(!a||a.kind!=="points")throw new se(`Point instance ${o} references a geometry that is not points.`);let l=tl(t,a),c=new fe;if(c.setAttribute("position",new Ae(l,3)),a.intensities){let m=t.view(a.intensities);if(m.length*3!==l.length)throw new se(`Point geometry ${n[o]} intensities do not match its positions.`);c.setAttribute("intensity",new Ae(m.slice(),1,!0))}let h=t.meta.materials[s[o]],d=!1;if(a.colors){let m=t.view(a.colors);if(m.length!==l.length)throw new se(`Point geometry ${n[o]} colors do not match its positions.`);let _=new Float32Array(m.length),g=new Ht;for(let p=0;p<m.length;p+=3)g.setRGB(m[p]/255,m[p+1]/255,m[p+2]/255,Me),g.toArray(_,p);c.setAttribute("color",new Ae(_,3)),d=!0}let u=new zn({size:2,sizeAttenuation:!1,vertexColors:d,color:d?16777215:new Ht().setRGB(...h?.color??[.8,.8,.8],Me)}),f=new Sn(c,u);f.onBeforeRender=(m,_,g,p,M)=>{M!==u&&(M.uniforms.pointIndex.value=o,M.uniforms.pointSize.value=u.opacity>0?u.size:0,M.uniformsNeedUpdate=!0)},f.matrixAutoUpdate=!1,f.matrix.fromArray(jv(r,o)),f.matrixWorldNeedsUpdate=!0,f.frustumCulled=!0,c.computeBoundingSphere(),this.root.add(f),this._materials.push({material:u,color:u.color.clone(),opacity:h?.opacity??1,vertexColors:d})}}syncVisibility(t){let e=t.instanceCount-this.count;for(let[n,s]of this.root.children.entries())s.visible=t.isInstanceVisible(e+n)}syncAppearance(t){let e=t.instanceCount-this.count;for(let[n,s]of this._materials.entries()){let{material:r}=s,o=t.instanceColorOverride(e+n,r.color);o||r.color.copy(s.color);let a=s.vertexColors&&!o,l=t.opacity*s.opacity,c=l<1;(r.vertexColors!==a||r.transparent!==c)&&(r.needsUpdate=!0),r.vertexColors=a,r.opacity=l,r.transparent=c,r.depthWrite=!c}}setClipping(t,e=!1){this.clippingPlanes=t.length>0?t:null,this.clipIntersection=e;for(let{material:n}of this._materials)n.clippingPlanes=this.clippingPlanes,n.clipIntersection=e}withPickMaterial(t,e){t.clippingPlanes=this.clippingPlanes,t.clipIntersection=this.clipIntersection;for(let n of this.root.children)n.material=t;try{e()}finally{for(let[n,s]of this.root.children.entries())s.material=this._materials[n].material}}position(t,e,n){let s=this.root.children[t];return n.fromBufferAttribute(s.geometry.attributes.position,e).applyMatrix4(s.matrixWorld)}};function jv(i,t){let e=t*12;return[i[e],i[e+1],i[e+2],0,i[e+3],i[e+4],i[e+5],0,i[e+6],i[e+7],i[e+8],0,i[e+9],i[e+10],i[e+11],1]}var Qv={ru:{elements:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",noGeometry:"\u041D\u0435\u0442 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438",contextLost:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430 \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",noWebGL:"\u041D\u0443\u0436\u0435\u043D \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 WebGL 2",badData:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438",tooLarge:"\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0449\u0438\u043A\u0430: \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0441 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0435\u0439 \u2014 {count}, \u043F\u0440\u0435\u0434\u0435\u043B \u2014 {limit}",selected:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C","scanMap.title":"\u041C\u0438\u043D\u0438\u043A\u0430\u0440\u0442\u0430","scanMap.plan":"\u041F\u043B\u0430\u043D \u043E\u0431\u043B\u0430\u043A\u0430 \u0442\u043E\u0447\u0435\u043A","scanMap.metres":"\u043C","scanMap.choosePhoto":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0442\u043E\u043F\u0430\u043D\u043E\u0440\u0430\u043C\u0443\u2026","scanMap.spheres":"\u0421\u0444\u0435\u0440\u044B \u043F\u0430\u043D\u043E\u0440\u0430\u043C \u0432 3D","scanMap.photo":"\u0424\u043E\u0442\u043E\u043F\u0430\u043D\u043E\u0440\u0430\u043C\u0430","scanMap.intensity":"\u0418\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u044C","scanMap.goToStation":"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u0442\u0430\u043D\u0446\u0438\u0438 {name}","scanMap.photoControls":"\u0424\u043E\u0442\u043E\u043F\u0430\u043D\u043E\u0440\u0430\u043C\u0430. \u0421\u0442\u0440\u0435\u043B\u043A\u0438 \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442 \u043A\u0430\u043C\u0435\u0440\u0443, \u043A\u043E\u043B\u0435\u0441\u043E \u043C\u0435\u043D\u044F\u0435\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431.","scanMap.loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\u2026","scanMap.photoError":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E.","scanMap.enlargePhoto":"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C","scanMap.shrinkPhoto":"\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C","scanMap.size":"\u0420\u0430\u0437\u043C\u0435\u0440 \u043C\u0438\u043D\u0438\u043A\u0430\u0440\u0442\u044B","scanMap.small":"\u041C\u0430\u043B\u0430\u044F","scanMap.medium":"\u0421\u0440\u0435\u0434\u043D\u044F\u044F","scanMap.large":"\u0411\u043E\u043B\u044C\u0448\u0430\u044F","scanMap.zoomIn":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C \u043C\u0438\u043D\u0438\u043A\u0430\u0440\u0442\u0443","scanMap.zoomOut":"\u041E\u0442\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u0438\u043D\u0438\u043A\u0430\u0440\u0442\u0443","scanMap.reset":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043F\u043B\u0430\u043D","scanMap.levels":"\u0423\u0440\u043E\u0432\u043D\u0438 \u043C\u0438\u043D\u0438\u043A\u0430\u0440\u0442\u044B","scanMap.allLevels":"\u0412\u0441\u0435 \u0432\u044B\u0441\u043E\u0442\u044B","scanMap.level":"\u0423\u0440\u043E\u0432\u0435\u043D\u044C {n}","scanMap.addLevel":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u0435","scanMap.removeLevel":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C","scanMap.autoButton":"\u0410\u0432\u0442\u043E","scanMap.autoLevels":"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u043D\u0438 \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0430\u043C \u0441\u0442\u0430\u043D\u0446\u0438\u0439","scanMap.noLevels":"\u041D\u0435\u0442 \u044F\u0432\u043D\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0445 \u0433\u0440\u0443\u043F\u043F \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0435.","scanMap.levelsAdded":"\u0423\u0440\u043E\u0432\u043D\u0438 \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0430\u043C \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B.","scanMap.levelsExist":"\u042D\u0442\u0438 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u044B \u0443\u0436\u0435 \u043E\u0445\u0432\u0430\u0447\u0435\u043D\u044B \u0443\u0440\u043E\u0432\u043D\u044F\u043C\u0438.","scanMap.levelAdded":"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043E\u0437\u0434\u0430\u043D.","scanMap.levelTemporary":"\u0423\u0440\u043E\u0432\u043D\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0434\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.","scanMap.cancel":"\u041E\u0442\u043C\u0435\u043D\u0430","scanMap.pickLower":"\u0429\u0451\u043B\u043A\u043D\u0438\u0442\u0435 \u043F\u043E \u043D\u0438\u0436\u043D\u0435\u0439 \u043E\u0442\u043C\u0435\u0442\u043A\u0435 \u0443\u0440\u043E\u0432\u043D\u044F.","scanMap.pickUpper":"\u041D\u0438\u0437 {z}. \u0422\u0435\u043F\u0435\u0440\u044C \u0449\u0451\u043B\u043A\u043D\u0438\u0442\u0435 \u043F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u043E\u0442\u043C\u0435\u0442\u043A\u0435.","scanMap.noLowerHit":"\u041D\u0430 \u043B\u0443\u0447\u0435 \u043D\u0435\u0442 \u0442\u043E\u0447\u0435\u043A \u043E\u0431\u043B\u0430\u043A\u0430. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0438\u0436\u043D\u044E\u044E \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u0440\u044F\u0434\u043E\u043C.","scanMap.noUpperHit":"\u041D\u0430 \u043B\u0443\u0447\u0435 \u043D\u0435\u0442 \u0442\u043E\u0447\u0435\u043A \u043E\u0431\u043B\u0430\u043A\u0430. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0435\u0440\u0445\u043D\u044E\u044E \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u0440\u044F\u0434\u043E\u043C.","scanMap.upperAboveLower":"\u0412\u0435\u0440\u0445\u043D\u044F\u044F \u043E\u0442\u043C\u0435\u0442\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0432\u044B\u0448\u0435 {z}.",elementGroup:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442",id:"Id",category:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",type:"\u0422\u0438\u043F",level:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",sourceId:"ID \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430",link:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B",panels:"\u041F\u0430\u043D\u0435\u043B\u0438","panel.model":"\u041C\u043E\u0434\u0435\u043B\u044C","panel.views":"\u0412\u0438\u0434\u044B","panel.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","panel.clashes":"\u041A\u043E\u043B\u043B\u0438\u0437\u0438\u0438","panel.bcf":"\u0422\u0435\u043C\u044B BCF","bcf.noView":"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0430","bcf.viewpoint":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u0434 {index}","bcf.components":"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u2014 {missing}, \u043D\u0435\u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u044B\u0445 \u2014 {ambiguous}","panel.timeliner":"4D-\u0433\u0440\u0430\u0444\u0438\u043A","panel.links":"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B","group.navigation":"\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F","group.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","group.measure":"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F","group.display":"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","group.view":"\u0412\u0438\u0434","tool.orbit":"\u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435","tool.pan":"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u0430","tool.fit":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","tool.projection":"\u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430 / \u043E\u0440\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F","tool.plane":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.box":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.distance":"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435","tool.displayMode":"\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","tool.grids":"\u041E\u0441\u0438","tool.opacity":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","tool.fullscreen":"\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",contextMenu:"\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E","menu.properties":"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430","menu.hide":"\u0421\u043A\u0440\u044B\u0442\u044C","menu.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C","menu.showAll":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0451","menu.zoomTo":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C \u043A \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.sectionBox":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.copyId":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id","menu.fitAll":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","menu.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","menu.unavailable":"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438",searchPlaceholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u0442\u0438\u043F\u0443, Id\u2026",noCategory:"\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",noMatches:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E","filters.title":"\u0424\u0438\u043B\u044C\u0442\u0440\u044B","filters.model":"\u041C\u043E\u0434\u0435\u043B\u044C-\u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A","filters.noLevel":"\u0411\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F","filters.all":"\u0412\u0441\u0435","filters.clear":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C","filters.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F",idCopied:"Id \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D",copyFailed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id",fullscreenUnavailable:"\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D","face.front":"\u0421\u043F\u0435\u0440\u0435\u0434\u0438","face.back":"\u0421\u0437\u0430\u0434\u0438","face.left":"\u0421\u043B\u0435\u0432\u0430","face.right":"\u0421\u043F\u0440\u0430\u0432\u0430","face.top":"\u0421\u0432\u0435\u0440\u0445\u0443","face.bottom":"\u0421\u043D\u0438\u0437\u0443","cube.title":"\u041A\u0443\u0431 \u0432\u0438\u0434\u0430","cube.up":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0432\u0435\u0440\u0445","cube.down":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043D\u0438\u0437","cube.left":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043B\u0435\u0432\u043E","cube.right":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043F\u0440\u0430\u0432\u043E","cube.home":"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0438\u0434","sections.mode":"\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","sections.planes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.box":"\u0411\u043E\u043A\u0441","sections.off":"\u0412\u044B\u043A\u043B","sections.axis":"\u041E\u0441\u044C","sections.addPlane":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.noPlanes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442","sections.rotated":"\u043F\u043E\u0432\u0451\u0440\u043D\u0443\u0442\u0430","sections.custom":"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u0430\u044F","sections.position":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.flip":"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443","sections.enabled":"\u0412\u043A\u043B","sections.delete":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.keepInside":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.cutInside":"\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.fitSelection":"\u041F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443","sections.showGizmo":"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440","sections.boxYaw":"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0432\u043E\u043A\u0440\u0443\u0433 Z","sections.fill":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u0441\u0440\u0435\u0437\u043E\u0432","sections.fillUnavailable":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0431\u0435\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0442\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u0430 WebGL","sections.fillNeedsMeshes":"\u0414\u043B\u044F \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0441\u0435\u0447\u0435\u043D\u0438\u0439 \u043D\u0443\u0436\u043D\u0430 \u0437\u0430\u043C\u043A\u043D\u0443\u0442\u0430\u044F \u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044F","sections.maxPlanes":"\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 6 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439","unit.m":"\u043C","display.materials":"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B","display.textures":"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B","display.white":"\u0411\u0435\u043B\u044B\u0439","display.wireframe":"\u041A\u0430\u0440\u043A\u0430\u0441","display.background":"\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430","display.backgroundReset":"\u0424\u043E\u043D \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E","opacity.label":"\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","opacity.value":"{value} %","views.tour":"\u0422\u0443\u0440 \u043F\u043E \u0432\u0438\u0434\u0430\u043C","views.stop":"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0443\u0440","clash.New":"\u041D\u043E\u0432\u0430\u044F","clash.Active":"\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F","clash.Reviewed":"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430","clash.Approved":"\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430","clash.Resolved":"\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430","task.construct":"\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E","task.demolish":"\u0421\u043D\u043E\u0441","task.temporary":"\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435","player.title":"4D-\u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C","player.play":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438","player.pause":"\u041F\u0430\u0443\u0437\u0430","player.date":"\u0414\u0430\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430","player.speed":"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",truncated:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {meshes} \u0438\u0437 {total} \u043C\u0435\u0448\u0435\u0439: \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u0440\u0435\u0437\u0430\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u043E\u0439 MaxMeshVertices"},en:{elements:"Elements",noGeometry:"No geometry",contextLost:"The graphics context was lost \u2014 reload the page",noWebGL:"This page needs a browser with WebGL 2",badData:"The model data could not be read",tooLarge:"The model is too large for this viewer: {count} objects with geometry, the limit is {limit}",selected:"Selected",close:"Close","scanMap.title":"Minimap","scanMap.plan":"Point cloud floor plan","scanMap.metres":"m","scanMap.choosePhoto":"Open photo panorama\u2026","scanMap.spheres":"Panorama spheres in 3D","scanMap.photo":"Photo panorama","scanMap.intensity":"Intensity","scanMap.goToStation":"Move to station {name}","scanMap.photoControls":"Photo panorama. Arrow keys turn the camera, the wheel zooms.","scanMap.loading":"Loading photograph\u2026","scanMap.photoError":"Could not open the spherical photograph.","scanMap.enlargePhoto":"Enlarge","scanMap.shrinkPhoto":"Restore size","scanMap.size":"Minimap size","scanMap.small":"Small","scanMap.medium":"Medium","scanMap.large":"Large","scanMap.zoomIn":"Zoom in on minimap","scanMap.zoomOut":"Zoom out on minimap","scanMap.reset":"Fit the whole plan","scanMap.levels":"Minimap levels","scanMap.allLevels":"All heights","scanMap.level":"Level {n}","scanMap.addLevel":"Create level from panorama","scanMap.removeLevel":"Remove selected level","scanMap.autoButton":"Auto","scanMap.autoLevels":"Detect levels by station height","scanMap.noLevels":"Station heights have no clear groups.","scanMap.levelsAdded":"Levels added from station heights.","scanMap.levelsExist":"Existing levels already cover these height ranges.","scanMap.levelAdded":"Level created.","scanMap.levelTemporary":"Levels will stay available until you close this page.","scanMap.cancel":"Cancel","scanMap.pickLower":"Click the lower level elevation.","scanMap.pickUpper":"Lower elevation {z}. Now click the upper elevation.","scanMap.noLowerHit":"No scan points along that ray. Choose a nearby lower elevation.","scanMap.noUpperHit":"No scan points along that ray. Choose a nearby upper elevation.","scanMap.upperAboveLower":"The upper elevation must be above {z}.",elementGroup:"Element",id:"Id",category:"Category",type:"Type",level:"Level",sourceId:"Source ID",link:"Link",panels:"Panels","panel.model":"Model","panel.views":"Views","panel.sections":"Sections","panel.clashes":"Clashes","panel.bcf":"BCF topics","bcf.noView":"No view available","bcf.viewpoint":"Open viewpoint {index}","bcf.components":"Components missing \u2014 {missing}, ambiguous \u2014 {ambiguous}","panel.timeliner":"4D schedule","panel.links":"Linked files","group.navigation":"Navigation","group.sections":"Sections","group.measure":"Measure","group.display":"Display","group.view":"View","tool.orbit":"Orbit","tool.pan":"Pan","tool.fit":"Fit all","tool.projection":"Perspective / orthographic","tool.plane":"Section plane","tool.box":"Section box","tool.resetSections":"Reset sections","tool.distance":"Distance","tool.displayMode":"Display mode","tool.grids":"Grids","tool.opacity":"Transparency","tool.fullscreen":"Full screen",contextMenu:"Context menu","menu.properties":"Properties","menu.hide":"Hide","menu.isolate":"Isolate","menu.showAll":"Show all","menu.zoomTo":"Zoom to object","menu.sectionBox":"Section box around object","menu.copyId":"Copy Id","menu.fitAll":"Fit all","menu.resetSections":"Reset sections","menu.unavailable":"Unavailable for this model",searchPlaceholder:"Search by name, type, Id\u2026",noCategory:"No category",noMatches:"No matches","filters.title":"Filters","filters.model":"Source model","filters.noLevel":"No level","filters.all":"All","filters.clear":"Clear","filters.isolate":"Isolate matches",idCopied:"Id copied",copyFailed:"Could not copy Id",fullscreenUnavailable:"Fullscreen is not available","face.front":"Front","face.back":"Back","face.left":"Left","face.right":"Right","face.top":"Top","face.bottom":"Bottom","cube.title":"View cube","cube.up":"Rotate up","cube.down":"Rotate down","cube.left":"Rotate left","cube.right":"Rotate right","cube.home":"Home view","sections.mode":"Section mode","sections.planes":"Planes","sections.box":"Box","sections.off":"Off","sections.axis":"Axis","sections.addPlane":"Add plane","sections.noPlanes":"No planes","sections.rotated":"rotated","sections.custom":"Custom","sections.position":"Plane position","sections.flip":"Flip side","sections.enabled":"On","sections.delete":"Delete plane","sections.keepInside":"Show inside","sections.cutInside":"Cut inside","sections.fitSelection":"Fit to selection","sections.showGizmo":"Show gizmo","sections.boxYaw":"Rotation around Z","sections.fill":"Fill cut faces","sections.fillUnavailable":"Section fill requires a WebGL stencil buffer","sections.fillNeedsMeshes":"Section fill requires closed mesh geometry","sections.maxPlanes":"At most 6 planes","unit.m":"m","display.materials":"Materials","display.textures":"Textures","display.white":"White","display.wireframe":"Wireframe","display.background":"Background color","display.backgroundReset":"Reset background","opacity.label":"Opacity","opacity.value":"{value}%","views.tour":"Play tour","views.stop":"Stop tour","clash.New":"New","clash.Active":"Active","clash.Reviewed":"Reviewed","clash.Approved":"Approved","clash.Resolved":"Resolved","task.construct":"Construct","task.demolish":"Demolish","task.temporary":"Temporary","player.title":"4D player","player.play":"Play","player.pause":"Pause","player.date":"Schedule date","player.speed":"Speed",truncated:"Showing {meshes} of {total} meshes: the model was truncated by the MaxMeshVertices setting"}},ai=(globalThis.navigator?.language??"").toLowerCase().startsWith("ru")?"ru":"en",kr=new Intl.NumberFormat(ai).format;function Z(i,t=ai){let e=Qv[t][i];if(e===void 0)throw new Error(`Missing UI string '${i}'.`);return e}var Rf=new P(0,0,1),ol=Math.PI/2-.01;function If(i,t,e=4){return Math.hypot(t.x-i.x,t.y-i.y)<=e}function Pf(i,t,e,n,s,r){let o=i.clone().sub(e),a=t.clone().sub(e),l=d=>(o.applyQuaternion(d),a.applyQuaternion(d));l(new De().setFromAxisAngle(Rf,-n*r));let c=a.clone().sub(o).normalize(),h=c.clone().cross(Rf);if(h.lengthSq()>1e-12){let d=Math.asin(le.clamp(c.z,-1,1)),u=le.clamp(s*r,d-ol,d+ol);l(new De().setFromAxisAngle(h.normalize(),-u))}return{position:o.add(e),target:a.add(e)}}function Lf(i,t,e,n){let s=r=>r.clone().sub(e).multiplyScalar(n).add(e);return{position:s(i),target:s(t)}}var ty=.85,ey=100/3;function Df(i,t,e){let n=i*(t===1?ey:t===2?e:1);return le.clamp(ty**(-n/100),.5,2)}var wh=(i,t)=>t>=i?"window":"crossing";function Nf(i,t,e){let n=Cf(i.position,i.target),s=Cf(t.position,t.target),r=n.azimuth??s.azimuth??0,o=s.azimuth??r,a=le.euclideanModulo(o-r+Math.PI,2*Math.PI)-Math.PI,l=(_,g)=>_+(g-_)*e,c=r+a*e,h=le.clamp(l(n.elevation,s.elevation),-ol,ol),d=l(n.distance,s.distance),u=i.target.clone().lerp(t.target,e),f=Math.cos(h)*d;return{position:u.clone().add(new P(f*Math.cos(c),f*Math.sin(c),Math.sin(h)*d)),target:u}}function Uf(i,t,e,n){let s=i.position.clone().sub(i.target),r=t.position.clone().sub(t.target),o=s.length(),a=r.length();s.normalize(),r.normalize();let l=new De().setFromUnitVectors(s,r),c=e.clone().applyQuaternion(l),h=new P().setFromMatrixColumn(new Zt().lookAt(t.position,t.target,n),1),d=r.dot(new P().crossVectors(c,h)),u=Math.atan2(Math.abs(d)<1e-9?0:d,c.dot(h)),f=new De;return m=>{f.identity().slerp(l,m);let _=s.clone().applyQuaternion(f),g=i.target.clone().lerp(t.target,m),p=_.clone().multiplyScalar(le.lerp(o,a,m)).add(g),M=e.clone().applyQuaternion(f).applyAxisAngle(_,u*m);return{position:p,target:g,up:M}}}function Cf(i,t){let e=i.clone().sub(t),n=e.length(),s=Math.hypot(e.x,e.y);return{distance:n,elevation:n>1e-12?Math.asin(le.clamp(e.z/n,-1,1)):0,azimuth:s>1e-9*Math.max(n,1e-12)?Math.atan2(e.y,e.x):null}}var ny=.005,iy=new P(1,-1,.8).normalize(),Th=.01,Ff=1e-6,sy=64,Bf=1.05,ry=5e3,Eh=(i,t)=>new CustomEvent(i,{detail:t});function Of({bbox:i,grids:t}){let e=r=>Array.isArray(r)&&r.length===3&&r.every(Number.isFinite);if(!e(i?.min)||!e(i?.max))return!0;let n=new ae(new P(...i.min),new P(...i.max));if(n.isEmpty())return!0;let s=new P;for(let r of t??[])for(let o of Pr(r)){if(!e(o))return!0;n.expandByPoint(s.fromArray(o))}return n.getSize(s).length()*Bf>Th*ry}var al=class extends EventTarget{constructor(t,e,{pick:n=()=>null,visibleBox:s=()=>new ae}={}){super(),this.dom=e,this.pick=n,this.visibleBox=s,this.target=new P,this.leftButtonMode="orbit",this._perspective=t,this._defaultFov=t.fov,this._orthographic=new Vn(-1,1,1,-1),this.camera=t,this._drag=null,this._wheelPick=null,this._animation=0,this._overlay=null,this._bounds=null,this._extraBounds=new Map,e.style.touchAction="none",e.addEventListener("pointerdown",r=>this._down(r)),e.addEventListener("pointermove",r=>this._move(r)),e.addEventListener("pointerup",r=>this._up(r)),e.addEventListener("pointercancel",()=>this._end()),e.addEventListener("lostpointercapture",r=>this._lostCapture(r)),window.addEventListener("blur",()=>this._end()),e.addEventListener("wheel",r=>this._wheel(r),{passive:!1}),e.addEventListener("contextmenu",r=>r.preventDefault())}setLeftButtonMode(t){if(t!=="orbit"&&t!=="pan")throw new RangeError(`Unknown left button mode: ${t}`);this.leftButtonMode=t}setProjection(t){if(t!=="perspective"&&t!=="orthographic")throw new RangeError(`Unknown projection: ${t}`);let e=t==="perspective"?this._perspective:this._orthographic,n=this.camera;if(e!==n){this._stopAnimation(),e.position.copy(n.position),n.isOrthographicCamera&&e.position.sub(this.target).divideScalar(n.zoom).add(this.target),e.zoom=1,e.quaternion.copy(n.quaternion),e.up.copy(n.up),n.parent?.add(e),n.parent?.remove(n);for(let s of[...n.children])e.add(s);this.camera=e,this.resize()}}resize(){let t=this.camera,e=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),n=Math.max(t.position.distanceTo(this.target),1e-6);if(t.isPerspectiveCamera)t.aspect=e;else{let r=n*Math.tan(le.degToRad(this._perspective.fov/2));Object.assign(t,{top:r,bottom:-r,left:-r*e,right:r*e})}let s=this._rangeSphere();if(s){let r=s.center.clone().sub(t.position),o=new P(0,0,-1).applyQuaternion(t.quaternion);t.far=Math.max(1e-6,(r.length()+s.radius)*Bf);let a=r.dot(o)-s.radius;t.near=Math.max(a*.95,Math.min(Th,t.far/2))}t.updateProjectionMatrix(),this.dispatchEvent(new Event("change"))}setExtraBounds(t,e){e&&!e.isEmpty()?this._extraBounds.set(t,e.clone()):this._extraBounds.delete(t),this.resize()}_rangeSphere(){let t=this._visibleBounds()?.sphere??null;if(this._extraBounds.size===0)return t;let e=t?this._bounds.box.clone():new ae;for(let n of this._extraBounds.values())e.union(n);return e.getBoundingSphere(new Xe)}invalidateBounds(){this._bounds=null}_visibleBounds(){if(!this._bounds){let t=this.visibleBox();this._bounds={box:t,sphere:t.isEmpty()?null:t.getBoundingSphere(new Xe)}}return this._bounds.sphere&&this._bounds}fitBox(t,e=!0){if(t.isEmpty())return;let n=t.getBoundingSphere(new Xe),s=Math.max(n.radius,.001),r=le.degToRad(this._perspective.fov/2),o=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),a=s/Math.sin(Math.min(r,Math.atan(Math.tan(r)*o))),l=this.camera.position.clone().sub(this.target);l.lengthSq()<1e-12&&l.copy(iy);let c=l.normalize().multiplyScalar(a).add(n.center);e?this.animateTo({position:c,target:n.center}):(this.camera.zoom=1,this._set(c,n.center))}zoomToBox(t){this.fitBox(t,!0)}resetCameraStyle(){this._perspective.fov=this._defaultFov,this.camera.up.set(0,0,1)}restoreViewCamera({position:t,target:e,up:n,fov:s,orthographicHeight:r}){let o=new P(...t),a=new P(...e);if(this.resetCameraStyle(),!n){this.animateTo({position:o,target:a});return}this._stopAnimation(),this.camera.up.fromArray(n),this._perspective.fov=s??this._defaultFov;let l=Math.max(o.distanceTo(a),1e-6);this.camera.zoom=r==null?1:2*l*Math.tan(le.degToRad(this._perspective.fov/2))/r,this._set(o,a)}animateTo({position:t,target:e,zoom:n=1,overPole:s=!1},r=400){this._stopAnimation();let o={position:this.camera.position.clone(),target:this.target.clone()},a={position:t??o.position,target:e??o.target},l=this.camera.zoom,c=s?Uf(o,a,new P(0,1,0).applyQuaternion(this.camera.quaternion),this.camera.up):u=>Nf(o,a,u),h=performance.now(),d=u=>{let f=Math.min((u-h)/r,1),m=f*f*(3-2*f),_=c(m);this.camera.isOrthographicCamera&&(this.camera.zoom=le.lerp(l,n,m)),this._set(_.position,_.target,_.up),this._animation=f<1?requestAnimationFrame(d):0};this._animation=requestAnimationFrame(d)}get animating(){return this._animation!==0}_stopAnimation(){cancelAnimationFrame(this._animation),this._animation=0}_set(t,e,n){if(this.camera.position.copy(t),this.target.copy(e),n){let s=this.camera.up.clone();this.camera.up.copy(n),this.camera.lookAt(e),this.camera.up.copy(s)}else this.camera.lookAt(e);this.resize()}_down(t){this._end(),this._stopAnimation(),this.dom.setPointerCapture(t.pointerId),t.preventDefault();let e=t.button===0&&t.shiftKey?"box":t.button===0&&this.leftButtonMode==="orbit"?"orbit":"pan",n={x:t.clientX,y:t.clientY},s=null;e==="orbit"&&(s=this.pick(n.x,n.y),s||(s=this._visibleBounds()?.sphere.center.clone()??this.target.clone())),this._drag={id:t.pointerId,button:t.button,mode:e,pivot:s,down:n,last:n,moved:!1}}_anchor(t,e){let n=this.pick(t,e);if(n)return n;let s=this.dom.getBoundingClientRect(),r=s.left+s.width/2,o=s.top+s.height/2;return t===r&&e===o?null:this.pick(r,o)}_gestureDepth(t,e){let n=this.camera,s=t?t.clone().sub(n.position).dot(e):0;return Math.max(Ff,n.position.distanceTo(this.target),s)}_move(t){let e=this._drag;if(!e||t.pointerId!==e.id)return;if(t.buttons===0)return this._end();let n={x:t.clientX,y:t.clientY};if(!e.moved&&If(e.down,n))return;e.moved=!0;let s=n.x-e.last.x,r=n.y-e.last.y;if(e.last=n,e.mode==="box")this._drawRect(e.down,n);else if(e.mode==="orbit"){let o=Pf(this.camera.position,this.target,e.pivot,s,r,ny);this._set(o.position,o.target)}else this._pan(s,r)}_pan(t,e){let n=this.camera,s=Math.max(this.dom.clientHeight,1);if(n.isPerspectiveCamera&&this._drag.depth===void 0){let{x:c,y:h}=this._drag.down;this._drag.depth=this._gestureDepth(this._anchor(c,h),n.getWorldDirection(new P))}let r=n.isPerspectiveCamera?2*this._drag.depth*Math.tan(le.degToRad(n.fov/2))/(s*n.zoom):(n.top-n.bottom)/n.zoom/s,o=new P(1,0,0).applyQuaternion(n.quaternion),a=new P(0,1,0).applyQuaternion(n.quaternion),l=o.multiplyScalar(-t*r).addScaledVector(a,e*r);this._set(n.position.clone().add(l),this.target.clone().add(l))}_up(t){let e=this._drag;if(!e||t.pointerId!==e.id||t.button!==e.button)return;let n={x:t.clientX,y:t.clientY};if(this._end(),e.mode==="box"&&e.moved){let s={x:Math.min(e.down.x,n.x),y:Math.min(e.down.y,n.y),width:Math.abs(n.x-e.down.x),height:Math.abs(n.y-e.down.y)},r=wh(e.down.x,n.x);this.dispatchEvent(Eh("boxselect",{rect:s,mode:r,ctrl:t.ctrlKey,shift:t.shiftKey}))}else!e.moved&&e.button===0?this.dispatchEvent(Eh("click",{x:n.x,y:n.y,button:0,ctrl:t.ctrlKey,shift:t.shiftKey})):!e.moved&&e.button===2&&this.dispatchEvent(Eh("contextmenu",{x:n.x,y:n.y}))}_lostCapture(t){this._drag&&t.buttons?this.dom.setPointerCapture(this._drag.id):this._end()}_end(){this._drag=null,this._overlay?.remove(),this._overlay=null}_drawRect(t,e){this._overlay||(this._overlay=document.createElement("div"),Object.assign(this._overlay.style,{position:"fixed",pointerEvents:"none",border:"1px solid #2563eb",background:"rgba(37,99,235,0.12)"}),(this.dom.parentElement??document.body).appendChild(this._overlay)),Object.assign(this._overlay.style,{borderStyle:wh(t.x,e.x)==="window"?"solid":"dashed",left:`${Math.min(t.x,e.x)}px`,top:`${Math.min(t.y,e.y)}px`,width:`${Math.abs(e.x-t.x)}px`,height:`${Math.abs(e.y-t.y)}px`})}_wheel(t){if(t.preventDefault(),t.deltaY===0)return;this._stopAnimation();let e=Df(t.deltaY,t.deltaMode,this.dom.clientHeight),n=this.camera,s=n.position.distanceTo(this.target),r=this._visibleBounds()?.sphere.radius??0,o=sy*Math.max(r,.001);if(n.isOrthographicCamera){let{left:_,top:g,width:p,height:M}=this.dom.getBoundingClientRect();if(!p||!M)return;let T=le.clamp(n.zoom/e,Math.max(1e-6,Math.min(n.zoom,s/o)),1e6);if(T===n.zoom)return;let S=new P((2*(t.clientX-_)/p-1)*n.right,(1-2*(t.clientY-g)/M)*n.top,0).multiplyScalar(1/n.zoom-1/T).applyQuaternion(n.quaternion);n.zoom=T,this._set(n.position.clone().add(S),this.target.clone().add(S));return}this._wheelPick||(this._wheelPick={point:this._anchor(t.clientX,t.clientY)},requestAnimationFrame(()=>this._wheelPick=null));let a=n.getWorldDirection(new P),l=this._gestureDepth(this._wheelPick.point,a);if(!Number.isFinite(l))return;let c=Math.min(Th,Math.max(Ff,r)),h=le.clamp(l*e,c,Math.max(l,o))/l;if(h===1)return;let d=n.position.clone().addScaledVector(a,l),u=this._wheelPick.point,f=u&&u.clone().sub(n.position).dot(a)>=c?u:d,m=Lf(n.position,d,f,h);this._set(m.position,m.target)}};function et(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}function Qe(i,t,e){let n=et("button",i);return n.type="button",n.innerHTML=t,n.title=e,n.setAttribute("aria-label",e),n}function Os(i){i.preventDefault(),i.stopPropagation()}function ll(i){Os(i);let t=i.button===2,e=()=>{window.removeEventListener("pointerup",n,!0),setTimeout(()=>{window.removeEventListener("click",Os,!0),t&&window.removeEventListener("contextmenu",Os,!0)})},n=s=>{Os(s),e()};window.addEventListener("pointerup",n,!0),window.addEventListener("click",Os,!0),t&&window.addEventListener("contextmenu",Os,!0)}function Hr(i,t,e,n){let s=t.clone().applyMatrix4(e.matrixWorldInverse).z<0,r=t.clone().project(e);i.hidden=!(s&&Math.abs(r.x)<=1&&Math.abs(r.y)<=1),!i.hidden&&(i.style.left=`${n.left+(r.x+1)/2*n.width}px`,i.style.top=`${n.top+(1-r.y)/2*n.height}px`)}var Se=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,zf='<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',re={model:Se('<path d="M4 6h2M10 6h10M4 12h2M10 12h10M4 18h2M10 18h10"/>'),views:Se('<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>'),sections:Se('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),clashes:Se('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>'),bcf:Se('<path d="M4 4h16v13H9l-5 4z"/><path d="M8 8h8M8 12h5"/>'),timeliner:Se('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),links:Se('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),orbit:Se('<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>'),pan:Se('<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>'),fit:Se('<path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"/>'),projection:Se(zf),plane:Se('<path d="M3 17l5-6h13l-5 6z"/><path d="M12 14V4M9 7l3-3 3 3"/>'),box:Se(`<g stroke-dasharray="3 2.5">${zf}</g>`),resetSections:Se('<circle cx="12" cy="12" r="8"/><path d="M6.5 17.5l11-11"/>'),distance:Se('<path d="M3 16L16 3l5 5L8 21z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>'),displayMode:Se('<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>'),grids:Se('<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'),opacity:Se('<path d="M12 3l6 8a6 6 0 1 1-12 0z"/>'),fullscreen:Se('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),close:Se('<path d="M6 6l12 12M18 6L6 18"/>'),chevron:Se('<path d="M9 6l6 6-6 6"/>'),flip:Se('<path d="M4 12h16"/><path d="M9 8l3-4 3 4M9 16l3 4 3-4"/>'),remove:Se('<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13M9 7V4h6v3"/>'),play:Se('<path d="M7 4l13 8-13 8z"/>'),pause:Se('<path d="M8 4v16M16 4v16"/>'),home:Se('<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/>')};var Vr=new P(0,0,1),hn={right:new P(1,0,0),left:new P(-1,0,0),back:new P(0,1,0),front:new P(0,-1,0),top:new P(0,0,1),bottom:new P(0,0,-1)},oy={right:Vr,left:Vr,back:Vr,front:Vr,top:hn.back,bottom:hn.front},Yi=.7,ay=le.degToRad(1),kf=.01,Hf=96,cl=1.75;function Vf(i){let t=i.split("-"),e=new P;for(let n of t){if(!Object.hasOwn(hn,n))throw new RangeError(`Unknown view cube region: ${i}`);e.add(hn[n])}if(new Set(t).size!==t.length||e.lengthSq()!==t.length)throw new RangeError(`Unknown view cube region: ${i}`);return e.normalize()}function ly(i){let t=[];return Math.abs(i.z)>=Yi&&t.push(i.z>0?"top":"bottom"),Math.abs(i.y)>=Yi&&t.push(i.y>0?"back":"front"),Math.abs(i.x)>=Yi&&t.push(i.x>0?"right":"left"),t.join("-")}function Ah(i,t=ay){let e=i.clone().normalize(),n=Math.cos(t);return Object.keys(hn).find(s=>e.dot(hn[s])>=n)??null}function Gf(i){let t=new P(i.x,i.y,0);if(t.lengthSq()<1e-24)return"front";t.normalize();let e=["front","right","back","left"],n=Math.max(...e.map(s=>t.dot(hn[s])));return e.find(s=>t.dot(hn[s])>=n-1e-9)}function Rh(i,t){return hn[Gf(t)].clone().multiplyScalar(Math.sin(kf)).addScaledVector(hn[i],Math.cos(kf))}function cy(i,t){let e=Ah(i);if(!e)return null;let n=e==="top"||e==="bottom";if(t==="left"||t==="right")return(n?Rh(e,i):Vf(e)).applyAxisAngle(Vr,t==="right"?Math.PI/2:-Math.PI/2);if(t!=="up"&&t!=="down")throw new RangeError(`Unknown arrow: ${t}`);if(!n)return Rh(t==="up"?"top":"bottom",i);let s=hn[Gf(i)];return t==="up"==(e==="top")?s.clone().negate():s.clone()}function hy(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle="#2a2f38",n.fillRect(0,0,128,128),n.fillStyle="#cbd5e1",n.textAlign="center",n.textBaseline="middle",n.font=`600 26px ${t}`;let s=n.measureText(i).width;s>112&&(n.font=`600 ${Math.floor(2912/s)}px ${t}`),n.fillText(i,64,64);let r=new or(e);return r.colorSpace=Me,r}var hl=class{constructor(t,e,n){this.controls=n,this.home={position:e.position.clone(),target:n.target.clone()},this.element=et("div","ioviewer-viewcube"),this.canvas=et("canvas","ioviewer-viewcube-canvas"),this.canvas.title=Z("cube.title"),this.canvas.setAttribute("aria-label",Z("cube.title")),this.element.append(this.canvas),this.error=null,this.renderer=this._createRenderer(),this.scene=new fn,this.camera=new Vn(-cl,cl,cl,-cl,.1,10),this.faces=new Re;let s=getComputedStyle(t).fontFamily;for(let[l,c]of Object.entries(hn)){let h=Z(`face.${l}`),d=new pe(new ln(2,2),new Ke({map:hy(h,s)})),u=oy[l];d.quaternion.setFromRotationMatrix(new Zt().makeBasis(u.clone().cross(c),u,c)),d.position.copy(c),d.name=l,d.userData.label=h,this.faces.add(d)}let r=new bn(new zi(new pn(2,2,2)),new an({color:"#5b6575"}));this.highlight=new pe(new pn(1,1,1),new Ke({color:"#2563eb",transparent:!0,opacity:.6})),this.highlight.visible=!1,this.scene.add(this.faces,r,this.highlight),this._raycaster=new Gn,this.hovered=null,this._pointer=null,this.element.addEventListener("contextmenu",l=>l.preventDefault());let o=l=>{this._pointer=[l.clientX,l.clientY],this._hover(this.regionAtClient(...this._pointer))&&this._render()};this.canvas.addEventListener("pointerenter",o),this.canvas.addEventListener("pointermove",o),this.canvas.addEventListener("pointerleave",()=>{this._pointer=null,this._hover(null)&&this._render()}),this.canvas.addEventListener("click",l=>{let c=this.regionAtClient(l.clientX,l.clientY);if(!c)return;let h=c==="top"||c==="bottom";this._look(h?Rh(c,n.camera.position.clone().sub(n.target)):Vf(c))}),this.arrows=["up","down","left","right"].map(l=>{let c=Qe("ioviewer-viewcube-arrow",re.chevron,Z(`cube.${l}`));return c.dataset.arrow=l,c.addEventListener("click",h=>{h.detail&&c.blur(),this._arrow(l)}),c});let a=Qe("ioviewer-viewcube-home",re.home,Z("cube.home"));a.addEventListener("click",l=>{l.detail&&a.blur(),n.resetCameraStyle(),n.animateTo({position:this.home.position.clone(),target:this.home.target.clone()})}),this.element.append(...this.arrows,a),t.append(this.element),this.update()}_createRenderer(){this.canvas.addEventListener("webglcontextlost",e=>{e.stopImmediatePropagation(),this._fail(new Error("The view cube lost its WebGL context."))});let t=this.canvas.getContext("webgl2",{alpha:!0,antialias:!0});if(!t)return this._fail(new Error("WebGL 2 is not available for the view cube."));try{let e=new Ei({canvas:this.canvas,context:t,alpha:!0,antialias:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(Hf,Hf),e}catch(e){return this._fail(e)}}_fail(t){return this.error=t,this.renderer=null,this.element.hidden=!0,null}_render(){if(this.renderer)try{this.renderer.render(this.scene,this.camera)}catch(t){this._fail(t)}}update(){if(!this.renderer)return;let t=this.controls.camera,e=!this.camera.quaternion.equals(t.quaternion);this.camera.quaternion.copy(t.quaternion),this.camera.position.set(0,0,5).applyQuaternion(t.quaternion),this.camera.updateMatrixWorld();let n=Ah(t.position.clone().sub(this.controls.target))!==null;for(let s of this.arrows)s.hidden=!n;e&&this._pointer&&this._hover(this.regionAtClient(...this._pointer)),this._render()}regionAtClient(t,e){let n=this.canvas.getBoundingClientRect(),s=new Gt((t-n.left)/n.width*2-1,1-(e-n.top)/n.height*2);this._raycaster.setFromCamera(s,this.camera);let r=this._raycaster.intersectObjects(this.faces.children)[0];return r?ly(r.point):null}_hover(t){if(t===this.hovered)return!1;if(this.hovered=t,this.highlight.visible=!!t,t){let e=t.split("-").reduce((a,l)=>a.add(hn[l]),new P),n=a=>a===0?[-Yi,Yi]:a>0?[Yi,1.02]:[-1.02,-Yi],[s,r,o]=e.toArray().map(n);this.highlight.scale.set(s[1]-s[0],r[1]-r[0],o[1]-o[0]),this.highlight.position.set((s[0]+s[1])/2,(r[0]+r[1])/2,(o[0]+o[1])/2)}return!0}_arrow(t){let n=this.controls.camera.position.clone().sub(this.controls.target),s=cy(n,t);if(!s)return;let r=Ah(n),o=r==="top"&&t==="up"||r==="bottom"&&t==="down";this._look(s,o)}_look(t,e=!1){let{controls:n}=this,s=n.camera.position.distanceTo(n.target);n.animateTo({position:t.clone().multiplyScalar(s).add(n.target),target:n.target.clone(),zoom:n.camera.zoom,overPole:e})}};var uy=`
#include <common>
#ifdef IO_PICK_POINTS
uniform uint pointIndex;
uniform float pointSize;
flat varying uint vPoint;
flat varying uint vVertex;
#else
${Ur}
varying vec2 vSlot;
#endif
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
#if defined( IO_PICK_DEPTH ) && !defined( IO_PICK_POINTS )
varying float vViewDepth;
#endif
void main() {
  #ifdef IO_PICK_POINTS
  vec3 transformed = position;
  gl_PointSize = pointSize;
  vPoint = pointIndex;
  vVertex = uint( gl_VertexID );
  #else
  ${Fr}
  vec3 transformed = slotPosition;
  #endif
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #if defined( IO_PICK_DEPTH ) && !defined( IO_PICK_POINTS )
  vViewDepth = -mvPosition.z;
  #endif
  vec4 wp = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  #endif
  vPos = ( modelMatrix * wp ).xyz;
  #ifdef IO_PICK_POINTS
  if ( pointSize <= 0.0 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
  #else
  vSlot = vec2( float( slot >> 12 ), float( slot & 4095 ) );
  if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
  #endif
}`,dy=`
#include <common>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec3 vPos;
#ifdef IO_PICK_POINTS
flat varying uint vPoint;
flat varying uint vVertex;
#else
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
#endif
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #ifdef IO_PICK_POINTS
  uint id = 0x80000000u | vPoint;
  float sampleId = -float( vPoint + 1u );
  #else
  float sampleId = floor( vSlot.x + 0.5 ) * 4096.0 + floor( vSlot.y + 0.5 ) + 1.0;
  uint id = uint( sampleId );
  #endif
  #if defined( IO_PICK_DEPTH )
  #ifdef IO_PICK_POINTS
  uint bits = vVertex;
  #else
  uint bits = floatBitsToUint( vViewDepth );
  #endif
  #elif defined( IO_PICK_RGBA8 )
  uint bits = id;
  #else
  gl_FragColor = vec4( vPos, sampleId );
  #endif
  #if defined( IO_PICK_DEPTH ) || defined( IO_PICK_RGBA8 )
  uvec4 bytes = ( uvec4( bits ) >> uvec4( 0u, 8u, 16u, 24u ) ) & 255u;
  gl_FragColor = vec4( bytes ) / 255.0;
  #endif
}`,Wf=i=>i&&{element:i.element,point:i.point.clone()};function zs(i,t,e=!1){let n=new Ue({vertexShader:uy,fragmentShader:dy,uniforms:i,defines:t?{[t]:""}:{},side:Oe,clipping:!0});return e?n.defines.IO_PICK_POINTS="":n.index0AttributeName="q",n}var ul=class{constructor(t,e,n,s={}){this.renderer=t,this.scene=e,this.points=s.points?.count?s.points:null,this.camera=n,this._lost=!1,t.domElement.addEventListener("webglcontextlost",()=>this._lost=!0),this._last=null,this._lastTile=null,this._key=new Float64Array(36),e.root.addEventListener("change",l=>{l.detail.kind!=="appearance"&&(this._last=this._lastTile=null)});let r=e.slotUniforms,o={pointIndex:{value:0},pointSize:{value:0}};this._float=s.pickFloat!==!1&&t.extensions.has("EXT_color_buffer_float");let a=this.points?3:1;this._float?(this._material=zs(r,null),this._target=new Ne(a,a,{type:Ye}),this._pixel=new Float32Array(a*a*4),this.points&&(this._pointMaterial=zs(o,null,!0))):(this._material=zs(r,"IO_PICK_RGBA8"),this._depthMaterial=zs(r,"IO_PICK_DEPTH"),this._target=new Ne(a,a),this._pixel=new Uint8Array(a*a*4),this.points&&(this._pointMaterial=zs(o,"IO_PICK_RGBA8",!0),this._pointDepthMaterial=zs(o,"IO_PICK_DEPTH",!0)))}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=Math.floor(t-n.left),r=Math.floor(e-n.top);if(this._lost||!(s>=0&&r>=0&&s<n.width&&r<n.height))return null;let o=this._sampleKey(s,r,n),a=this.camera,l=this._last;if(l&&l.camera===a&&l.key.every((h,d)=>h===o[d]))return Wf(l.hit);let c=this._pick(s,r,n);return this._last={camera:a,key:o.slice(),hit:c},Wf(c)}_sampleKey(t,e,n){this.camera.updateMatrixWorld();let s=this._key;return s.set([t,e,n.width,n.height]),s.set(this.camera.matrixWorld.elements,4),s.set(this.camera.projectionMatrix.elements,20),s}measureTile(t,e,n){let s=this.renderer.domElement.getBoundingClientRect(),r=Math.floor(t-s.left),o=Math.floor(e-s.top);if(this._lost||!(r>=0&&o>=0&&r<s.width&&o<s.height))return null;let a=this._sampleKey(r,o,s),l=this.camera,c=this._lastTile;if(c&&c.camera===l&&c.radius===n&&c.key.every((x,w)=>x===a[w]))return c.tile;let h=n*2+1;(!this._measure||this._measure.target.width!==h)&&(this._measure?.target.dispose(),this._measure={target:new Ne(h,h,this._float?{type:Ye}:{}),ids:this._float?new Float32Array(h*h*4):new Uint8Array(h*h*4),depths:this._float?null:new Uint8Array(h*h*4)});let{target:d,ids:u,depths:f}=this._measure,m=r-n,_=o-n;this._render(this._material,m,_,s,d,u);let g=(x,w)=>{let R=Math.floor(x)-m,D=Math.floor(w)-_;return R>=0&&R<h&&D>=0&&D<h?(h-1-D)*h+R:-1},p=this._float?u:new Uint32Array(u.buffer),M=x=>this._slotAt(p,x),T=g(r,o),S=M(T),v=T;if(S<0&&this.points){let x=(n-1)**2;for(let w=0;w<h*h;w++){if(!this._isPoint(M(w)))continue;let R=(w%h-n)**2+(Math.floor(w/h)-n)**2;R>x||(x=R,v=w)}}let b=null,A=M(v);if(A>=0){f&&this._render(this._depthMaterial,m,_,s,d,f);let x=f&&new DataView(f.buffer),w=l.matrixWorldInverse.elements.slice(),R=new P,D=V=>{let O=this._vertexAt(M(V),u,x,V,R);return O?-(w[2]*O.x+w[6]*O.y+w[10]*O.z+w[14]):x.getFloat32(V*4,!0)},N=this._vertexAt(A,u,x,v)??this._depthPoint(r,o,s,D(v)),B=this._isPoint(A),L=this._elementAt(A),U=new Set([A]);if(!B&&L>=0)for(let V=0;V<h*h;V++){let O=M(V);O>=0&&!this._isPoint(O)&&!U.has(O)&&this.scene.slotElement(O)===L&&U.add(O)}let W=l.isPerspectiveCamera;b={rect:s,point:N,element:L,slots:U,pointSample:B,depthAt(V,O,F){let G=g(V,O),Y=G<0?-1:M(G);if(Y<0)return 1/0;if(Y!==F)return D(G);let z=at=>W?1/D(at):D(at),$=z(G);function nt(at,X,tt){let ht=Math.sign(tt),Rt=g(V+ht*at,O+ht*X);if(Rt>=0&&M(Rt)===Y)return(z(Rt)-$)*Math.abs(tt);let ft=g(V-ht*at,O-ht*X);return ft>=0&&M(ft)===Y?($-z(ft))*Math.abs(tt):0}let lt=$+nt(1,0,V-Math.floor(V)-.5)+nt(0,1,O-Math.floor(O)-.5);return lt>0?W?1/lt:lt:D(G)}}}return this._lastTile={camera:l,key:a.slice(),radius:n,tile:b},this._last={camera:l,key:this._lastTile.key,hit:S>=0?b:null},b}_pick(t,e,n){let s=(this._target.width-1)/2,r=(this._target.width**2-1)/2,o=this._render(this._material,t-s,e-s,n),a=this._slotAt(this._float?o:new Uint32Array(o.buffer),r);if(a<0)return null;let l=this._elementAt(a),c=this._float?null:this._render(this._depthMaterial,t-s,e-s,n),h=c&&new DataView(c.buffer),d=this._vertexAt(a,o,h,r)??this._depthPoint(t,e,n,h.getFloat32(r*4,!0));return{element:l,point:d}}_slotAt(t,e){let n=this._float?Math.round(t[e*4+3]):t[e];return n<0?this.scene.slotCount-n-1:n>=2147483648?this.scene.slotCount+n-2147483648:n-1}_isPoint(t){return t>=this.scene.slotCount}_elementAt(t){return this._isPoint(t)?this.scene.instance(this.scene.instanceCount-this.points.count+t-this.scene.slotCount).element:this.scene.slotElement(t)}_vertexAt(t,e,n,s,r=new P){return this._float?r.fromArray(e,s*4):this._isPoint(t)?this.points.position(t-this.scene.slotCount,n.getUint32(s*4,!0),r):null}_depthPoint(t,e,n,s){let r=this.camera,o=new P((t+.5)/n.width*2-1,1-(e+.5)/n.height*2,-1).applyMatrix4(r.projectionMatrixInverse);return r.isPerspectiveCamera?o.multiplyScalar(-s/o.z):o.z=-s,o.applyMatrix4(r.matrixWorld)}_render(t,e,n,s,r=this._target,o=this._pixel){let{renderer:a,camera:l}=this,c={target:a.getRenderTarget(),color:a.getClearColor(new Ht),alpha:a.getClearAlpha(),autoClear:a.autoClear},h=this.scene._buckets[0]?.material;t.clippingPlanes=h?.clippingPlanes??null,t.clipIntersection=h?.clipIntersection??!1,l.updateMatrixWorld(),l.setViewOffset(s.width,s.height,e,n,r.width,r.height);try{if(a.setRenderTarget(r),a.setClearColor(0,0),this.scene.withMaterial(t,()=>a.render(this.scene.root,l),{pickCamera:l}),this.points){a.autoClear=!1;let d=t===this._depthMaterial?this._pointDepthMaterial:this._pointMaterial;this.points.withPickMaterial(d,()=>a.render(this.points.root,l))}a.readRenderTargetPixels(r,0,0,r.width,r.height,o)}finally{a.setRenderTarget(c.target),a.setClearColor(c.color,c.alpha),a.autoClear=c.autoClear,l.clearViewOffset()}return o}};var dl=33.333333333333336,fy=200,Xf=1e6,py=20,fl=class{constructor(t,e,n=1e7){this.scene=t,this.budget=n,this.minPixels=0,this._requestRender=e,this._last=new Float64Array(32),this._seen=!1,this._requestedAt=null,this._frame=null,this._cost=0,this._fastFrames=0,this._refine=!1,this._settle=0}requested(t){this._requestedAt??(this._requestedAt=t)}begin(t,e,n){t.updateMatrixWorld();let s=this._requestedAt===null?0:Math.max(n-this._requestedAt,0);this._requestedAt=null;let r=this._moved(t);this._frame=r?{start:n,waited:s}:null,this.minPixels=r?this.scene.detailThreshold(t,e,this.budget,this._refine):0,r||(this._fastFrames=0),this.scene.setDetail(this.minPixels,e),r&&(clearTimeout(this._settle),this.minPixels>0&&(this._settle=setTimeout(this._requestRender,fy)))}end(t){this.scene.setDetail(0),this._frame&&this._adapt(this._frame.waited+(t-this._frame.start)),this._frame=null}_adapt(t){this._cost=this._cost?this._cost*.8+t*.2:t,t>dl*1.1?(this._refine=!1,this._fastFrames=0):this._refine||(this._fastFrames=this.minPixels>0&&t<dl*.7?this._fastFrames+1:0,this._refine=this._fastFrames>=py),this._cost>dl*1.1?this.budget=Math.max(this.budget*.9,Xf):this._cost<dl*.7&&this.minPixels>0&&(this.budget=Math.max(Math.min(this.budget*1.05,this.scene.visibleCost),Xf))}_moved(t){let e=this._last,n=[...t.matrixWorld.elements,...t.projectionMatrix.elements],s=(o,a)=>a!==26&&a!==30&&Math.abs(o-e[a])>1e-9*Math.max(1,Math.abs(o)),r=this._seen&&n.some(s);return this._seen=!0,e.set(n),r}};var Cn,ks,pl,ml=class extends EventTarget{constructor(){super(...arguments);Dl(this,ks);Dl(this,Cn,new Set)}get size(){return ui(this,Cn).size}has(e){return ui(this,Cn).has(e)}values(){return ui(this,Cn).values()}set(e){eu(this,Cn,new Set(e)),Jr(this,ks,pl).call(this)}toggle(e){ui(this,Cn).delete(e)||ui(this,Cn).add(e),Jr(this,ks,pl).call(this)}clear(){ui(this,Cn).size!==0&&(ui(this,Cn).clear(),Jr(this,ks,pl).call(this))}};Cn=new WeakMap,ks=new WeakSet,pl=function(){this.dispatchEvent(new Event("change"))};function qf(i,t,e){if(t!=="window"&&t!=="crossing")throw new RangeError(`Unknown box select mode: ${t}`);let n=i.x+i.width,s=i.y+i.height,r=t==="window"?o=>o.minX>=i.x&&o.maxX<=n&&o.minY>=i.y&&o.maxY<=s:o=>o.maxX>=i.x&&o.minX<=n&&o.maxY>=i.y&&o.minY<=s;return e.filter(r).map(o=>o.index)}function Yf(i,t,e){let n=new Zt().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).elements,{left:s,top:r,width:o,height:a}=e,l=new ae,c=[];for(let h=0;h<i.elementCount;h++){if(!i.isVisible(h))continue;let{min:d,max:u}=i.elementBox(h,l),f=1/0,m=1/0,_=-1/0,g=-1/0,p=!0;for(let M=0;M<8&&p;M++){let T=M&1?u.x:d.x,S=M&2?u.y:d.y,v=M&4?u.z:d.z,b=1/(n[3]*T+n[7]*S+n[11]*v+n[15]);p=Math.abs((n[2]*T+n[6]*S+n[10]*v+n[14])*b)<=1;let A=s+((n[0]*T+n[4]*S+n[8]*v+n[12])*b+1)/2*o,x=r+(1-(n[1]*T+n[5]*S+n[9]*v+n[13])*b)/2*a;f=Math.min(f,A),_=Math.max(_,A),m=Math.min(m,x),g=Math.max(g,x)}p&&c.push({index:h,minX:f,minY:m,maxX:_,maxY:g})}return c}var $f=["model","views","sections","clashes","bcf","timeliner","links"];function Zf(i){let t=et("nav","ioviewer-rail ioviewer-floating");t.setAttribute("aria-label",Z("panels")),i.append(t);let e=new Map,n=null;function s(l){let c=e.get(l);if(!c)throw new RangeError(`Unknown panel: ${l}`);return c}function r(l){let{button:c,panel:h,onClose:d}=s(l);n===l&&(h.hidden=!0,c.classList.remove("active"),c.setAttribute("aria-expanded","false"),n=null,d?.())}function o(l){let{button:c,panel:h}=s(l);c.hidden||n===l||(n&&r(n),h.hidden=!1,c.classList.add("active"),c.setAttribute("aria-expanded","true"),n=l)}function a(l,{icon:c,title:h,render:d,visible:u=!0,onClose:f}){let m=$f.indexOf(l);if(m<0)throw new RangeError(`Unknown panel: ${l}`);if(e.has(l))throw new Error(`Panel ${l} is already registered.`);let _=Qe("ioviewer-rail-button",c,h);_.dataset.panel=l,_.hidden=!u,_.setAttribute("aria-expanded","false"),_.addEventListener("click",()=>n===l?r(l):o(l));let g=[...t.children].find(v=>$f.indexOf(v.dataset.panel)>m);t.insertBefore(_,g??null);let p=et("section","ioviewer-side-panel ioviewer-floating");p.dataset.panel=l,p.hidden=!0,p.setAttribute("aria-label",h);let M=Qe("ioviewer-panel-close",re.close,Z("close"));M.addEventListener("click",()=>r(l));let T=et("header","ioviewer-panel-header");T.append(et("h2","",h),M);let S=et("div","ioviewer-panel-body");p.append(T,S),i.append(p),e.set(l,{button:_,panel:p,onClose:f}),d(S)}return{rail:t,openPanel:o,closePanel:r,registerPanel:a}}var Jf=[{id:"navigation",items:["orbit","pan","fit","projection"]},{id:"sections",items:["plane","box","resetSections"]},{id:"measure",items:["distance"]},{id:"display",items:["displayMode","grids","opacity"]},{id:"view",items:["fullscreen"]}];function Kf(i,t){let e=et("div","ioviewer-toolbar ioviewer-floating");e.setAttribute("role","toolbar");let n=new Map;for(let a of t){let l=et("div","ioviewer-toolbar-group");l.setAttribute("role","group"),l.setAttribute("aria-label",Z(`group.${a.id}`));let c=et("div","ioviewer-toolbar-row");for(let h of a.items){let d=Qe("ioviewer-tool",re[h],Z(`tool.${h}`));d.dataset.tool=h,d.setAttribute("aria-disabled","true");let u={button:d,handler:null};d.addEventListener("click",()=>{d.getAttribute("aria-disabled")!=="true"&&u.handler?.()}),n.set(h,u),c.append(d)}l.append(c,et("div","ioviewer-toolbar-label",Z(`group.${a.id}`))),e.append(l)}i.append(e),new ResizeObserver(()=>i.style.setProperty("--toolbar-height",`${e.offsetHeight}px`)).observe(e);function r(a){let l=n.get(a);if(!l)throw new RangeError(`Unknown tool: ${a}`);return l}function o(a,l){r(a).button.setAttribute("aria-disabled",String(!l))}return{element:e,setHandler(a,l){r(a).handler=l,o(a,!0)},setEnabled:o,setActive(a,l){let{button:c}=r(a);c.classList.toggle("active",l),c.setAttribute("aria-pressed",String(l))}}}var my="input, textarea, select, [contenteditable]";function Ch(i){return i.key==="ContextMenu"||i.code==="ContextMenu"||i.shiftKey&&(i.key==="F10"||i.code==="F10")}function jf(i){if(i.ctrlKey||i.altKey||i.metaKey||i.repeat||i.target?.closest?.(my))return null;if(Ch(i))return"contextMenu";switch(i.code){case"KeyH":return i.shiftKey?"showAll":"hide";case"KeyI":return i.shiftKey?null:"isolate";case"KeyF":return i.shiftKey?null:"zoomTo";case"Escape":return"escape";default:return null}}function Qf(i,t,e,n,s){let r=et("details","ioviewer-tree-filters");r.hidden=i.length===0;let o=et("summary","",Z("filters.title")),a=et("div","ioviewer-filter-fields"),l=new Map(t.map(({id:v,name:b})=>[v,b||`#${v}`])),c=v=>v.modelId??t[0]?.id??null,h=v=>v.levelId??(v.level||null),d=v=>v.category??"",u=[{name:Z("filters.model"),key:c,labels:new Map},{name:Z("level"),key:h,labels:new Map},{name:Z("category"),key:d,labels:new Map}],[f,m,_]=u,g=et("div","ioviewer-filter-actions"),p=et("button","ioviewer-text-button",Z("filters.clear"));p.type="button",p.addEventListener("click",()=>{for(let v of u)v.select&&(v.select.selectedIndex=0);e.value="",n(),e.focus()});let M=et("button","ioviewer-text-button",Z("filters.isolate"));M.type="button",M.addEventListener("click",s),g.append(p,M),r.append(o,a,g);function T(){if(r.open){r.removeEventListener("toggle",T);for(let v of i){let b=c(v),A=l.get(b)??(b==null?"":`#${b}`);b!=null&&f.labels.set(b,A);let x=h(v);if(!m.labels.has(x)){let R=v.level||(x==null?Z("filters.noLevel"):`#${x}`);m.labels.set(x,x!=null&&t.length>1&&A?`${R} \xB7 ${A}`:R)}let w=d(v);_.labels.set(w,w||Z("noCategory"))}for(let v of u){if(!v.labels.size)continue;let b=new Map;for(let R of v.labels.values())b.set(R,(b.get(R)??0)+1);let A=[...v.labels].map(([R,D])=>[R,b.get(D)>1?`${D} (#${R})`:D]);A.sort((R,D)=>R[1].localeCompare(D[1])),v.keys=A.map(([R])=>R);let x=v.select=et("select");x.append(new Option(Z("filters.all"),""));for(let[R,[,D]]of A.entries())x.append(new Option(D,String(R+1)));x.addEventListener("change",n);let w=et("label","ioviewer-filter-field");w.append(et("span","",v.name),x),a.append(w)}}}r.addEventListener("toggle",T);function S(){return u.filter(v=>v.select?.selectedIndex>0)}return{element:r,predicate(){let v=S().map(({select:b,keys:A,key:x})=>({key:x,value:A[b.selectedIndex-1]}));return v.length?b=>v.every(({key:A,value:x})=>A(b)===x):null},update(v,b){let A=S().length;o.textContent=A?`${Z("filters.title")} (${A})`:Z("filters.title"),p.disabled=!A&&!v,M.disabled=!b}}}var Ri=24,gy=8;function Ih(i,t,e,n,s){let r=Math.min(n,Math.max(0,Math.floor(i/t)-s)),o=Math.min(n,Math.ceil((i+e)/t)+s);return{start:r,end:Math.max(r,o)}}function _y(i){let t=null;return e=>{let n=e.trim().toLowerCase();t??(t=i.map(r=>`${r.name??""}
${r.type??""}
${r.id}
${r.sourceId??""}`.toLowerCase()));let s=[];for(let r=0;r<t.length;r++)t[r].includes(n)&&s.push(r);return s}}function xy(i){let t=new Map;return i.forEach((e,n)=>{let s=e.category??"";t.has(s)||t.set(s,[]),t.get(s).push(n)}),[...t].map(([e,n])=>({name:e,indices:n})).sort((e,n)=>e.name.localeCompare(n.name))}function tp(i,{elements:t,models:e,selection:n,scene:s,zoomToElement:r,openContextMenu:o}){let a=xy(t),l=new Int32Array(t.length);a.forEach((z,$)=>z.indices.forEach(nt=>l[nt]=$));let c=new Uint8Array(a.length),h=new Int32Array(a.length),d=new Uint32Array(a.length),u=_y(t),f="",m=!1,_=new Int32Array(0),g=0,p=-1,M=null,T=!1,S=et("input","ioviewer-tree-search");S.type="search",S.placeholder=Z("searchPlaceholder"),S.setAttribute("aria-label",Z("searchPlaceholder"));let v=et("div","ioviewer-tree");v.setAttribute("role","tree"),v.setAttribute("aria-label",Z("panel.model")),v.setAttribute("aria-multiselectable","true"),v.tabIndex=-1;let b=et("div","ioviewer-tree-spacer");b.setAttribute("role","presentation"),v.append(b);let A=et("div","ioviewer-tree-empty",Z("noMatches")),x=Qf(t,e,S,F,()=>s.isolate(_));i.append(x.element,S,v,A);function w(){let z=_[g],$=x.predicate();if(m=!!(f||$),m){let lt=f?u(f):t.keys();if($){let at=[];for(let X of lt)$(t[X])&&at.push(X);_=Int32Array.from(at)}else _=Int32Array.from(lt)}else{let lt=a.length;a.forEach((X,tt)=>c[tt]&&(lt+=X.indices.length)),_=new Int32Array(lt);let at=0;a.forEach((X,tt)=>{if(h[tt]=at,_[at++]=-(tt+1),c[tt])for(let ht of X.indices)_[at++]=ht})}let nt=_.indexOf(z);g=nt>=0?nt:0,b.style.height=`${_.length*Ri}px`,A.hidden=_.length>0||!m,x.update(f,!!s.isolate&&m&&_.some(lt=>s.instancesOf(lt).length>0)),R()}function R(z=v.contains(document.activeElement)){let $=v.clientHeight;if($===0||_.length===0){b.replaceChildren();return}let nt=v.scrollTop,{start:lt,end:at}=Ih(nt,Ri,$,_.length,gy);!z&&(g<lt||g>=at)&&(g=Math.min(_.length-1,Math.floor(nt/Ri)));let X=[];g<lt&&X.push(D(g));for(let tt=lt;tt<at;tt++)X.push(D(tt));g>=at&&X.push(D(g)),b.replaceChildren(...X),z&&b.querySelector('[tabindex="0"]')?.focus({preventScroll:!0})}function D(z){let $=_[z],nt=$<0?-$-1:l[$],lt=$<0?d[nt]===a[nt].indices.length:n.has($),at=et("div","tree-row");if(at.style.top=`${z*Ri}px`,at.style.height=`${Ri}px`,at.dataset.row=z,at.tabIndex=z===g?0:-1,at.setAttribute("role","treeitem"),at.classList.toggle("selected",lt),at.setAttribute("aria-selected",String(lt)),$<0){at.classList.add("tree-category"),at.setAttribute("aria-level","1"),at.setAttribute("aria-posinset",String(nt+1)),at.setAttribute("aria-setsize",String(a.length)),at.setAttribute("aria-expanded",String(!!c[nt]));let X=et("span","tree-chevron");X.innerHTML=re.chevron;let{name:tt,indices:ht}=a[nt];at.append(X,et("span","tree-name",tt||Z("noCategory")),et("span","tree-count",kr(ht.length)))}else{let X=t[$];at.classList.add("tree-element"),at.setAttribute("aria-level",m?"1":"2"),at.setAttribute("aria-posinset",String(m?z+1:z-h[nt])),at.setAttribute("aria-setsize",String(m?_.length:a[nt].indices.length)),at.classList.toggle("tree-child",!m),at.classList.toggle("tree-hidden",s.isVisible?.($)===!1),at.append(et("span","tree-name",X.name||`#${X.id}`),et("span","tree-type",X.type??""))}return at}function N(z){let $=v.clientHeight;if($===0){p=z;return}let nt=z*Ri;nt<v.scrollTop?v.scrollTop=nt:nt+Ri>v.scrollTop+$&&(v.scrollTop=nt+Ri-$)}function B(z){g=z,N(z),R(!0)}function L(z){let $=l[z];!m&&!c[$]&&(c[$]=1,w());let nt=_.indexOf(z);nt>=0&&(v.contains(document.activeElement)||(g=nt),N(nt)),R()}function U(z){T=!0;try{n.set(z)}finally{T=!1}}function W(z,$){let nt=_.indexOf(M);nt<0&&(nt=z,M=_[z]);let lt=_.subarray(Math.min(nt,z),Math.max(nt,z)+1).filter(at=>at>=0);lt.length>0&&U($?[...n.values(),...lt]:lt)}function V(z){M=z;let $=-z-1,nt=z<0?a[$].indices:[z],lt=z<0?d[$]===nt.length:n.has(z),at=new Set(n.values());for(let X of nt)lt?at.delete(X):at.add(X);U(at)}function O(z,$,nt){z>=0&&!n.has(z)&&(M=z,U([z]));let lt=z>=0?z:n.values().next().value??null;o($,nt,lt,()=>{let at=_.indexOf(z);at>=0?B(at):S.focus()})}S.addEventListener("focus",()=>{b.firstElementChild||Y()});function F(){f=S.value.trim(),v.scrollTop=0,p=-1,g=-1,w()}S.addEventListener("input",F),v.addEventListener("scroll",()=>R()),v.addEventListener("focusin",z=>{let $=z.target.closest(".tree-row");!$||$.tabIndex===0||(b.querySelector('[tabindex="0"]')?.setAttribute("tabindex","-1"),g=Number($.dataset.row),$.tabIndex=0)}),v.addEventListener("keydown",z=>{let $=z.target.closest(".tree-row");if(!$||z.ctrlKey||z.altKey||z.metaKey)return;let nt=Number($.dataset.row),lt=_[nt];if(Ch(z)){if(z.preventDefault(),!z.repeat){let{left:X,bottom:tt}=$.getBoundingClientRect();O(lt,X,tt)}return}if(z.key===" "){z.preventDefault(),z.repeat||(z.shiftKey?W(nt,!1):V(lt));return}if(z.shiftKey)return;let at=nt;switch(z.key){case"ArrowUp":at=Math.max(0,nt-1);break;case"ArrowDown":at=Math.min(_.length-1,nt+1);break;case"Home":at=0;break;case"End":at=_.length-1;break;case"ArrowRight":lt<0&&(c[-lt-1]?at=nt+1:(c[-lt-1]=1,w()));break;case"ArrowLeft":lt>=0&&!m?at=h[l[lt]]:lt<0&&c[-lt-1]&&(c[-lt-1]=0,w());break;case"Enter":z.repeat||G(lt);break;default:return}z.preventDefault(),at!==nt&&B(at)});function G(z){if(z>=0){M=z,U([z]),r(z);return}c[-z-1]^=1,w()}v.addEventListener("click",z=>{let $=z.target.closest(".tree-row");if(!$)return;let nt=Number($.dataset.row),lt=z.ctrlKey||z.metaKey;z.shiftKey?W(nt,lt):lt?V(_[nt]):G(_[nt])}),v.addEventListener("contextmenu",z=>{let $=z.target.closest(".tree-row");$&&(z.preventDefault(),O(_[Number($.dataset.row)],z.clientX,z.clientY))});function Y(){p>=0&&v.clientHeight>0&&(N(p),p=-1),R()}new ResizeObserver(Y).observe(v),n.addEventListener("change",()=>{let z=-1;d.fill(0);for(let $ of n.values())d[l[$]]++,z=$;if(T){R();return}M=null,z>=0?L(z):R()}),s.root?.addEventListener("change",z=>z.detail.kind==="visibility"&&R()),w()}var ep={element:["properties","hide","isolate","showAll","-","zoomTo","sectionBox","-","copyId"],empty:["showAll","fitAll","resetSections"]},vy={hide:"H",isolate:"I",showAll:"Shift+H",zoomTo:"F"},gl=4;function np(i){let t=et("div","ioviewer-context-menu");t.setAttribute("role","menu"),t.setAttribute("aria-label",Z("contextMenu")),t.hidden=!0,i.append(t);let e=new Map(Object.values(ep).flat().filter(c=>c!=="-").map(c=>[c,{enabled:!1,handler:null}])),n=null;function s(){if(t.hidden)return;let c=t.contains(document.activeElement)?n:null;n=null,t.hidden=!0,t.replaceChildren(),window.removeEventListener("pointerdown",o,!0),window.removeEventListener("wheel",s,!0),window.removeEventListener("scroll",r,!0),window.removeEventListener("resize",s),c?.()}function r(c){i.contains(c.target)||s()}function o(c){t.contains(c.target)||(s(),ll(c))}function a(c,h,d,u,f=null){let m=ep[c];if(!m)throw new RangeError(`Unknown menu: ${c}`);s(),n=f;for(let p of m){if(p==="-"){let S=et("div","ioviewer-menu-separator");S.setAttribute("role","separator"),t.append(S);continue}let M=e.get(p),T=et("button","ioviewer-menu-item");T.type="button",T.tabIndex=-1,T.dataset.item=p,T.setAttribute("role","menuitem"),T.setAttribute("aria-disabled",String(!M.enabled)),M.enabled||(T.title=Z("menu.unavailable")),T.append(et("span","",Z(`menu.${p}`)),et("kbd","",vy[p]??"")),T.addEventListener("click",()=>{M.enabled&&(s(),M.handler(u))}),t.append(T)}t.hidden=!1;let{width:_,height:g}=t.getBoundingClientRect();t.style.left=`${Math.max(gl,Math.min(h,innerWidth-_-gl))}px`,t.style.top=`${Math.max(gl,Math.min(d,innerHeight-g-gl))}px`,window.addEventListener("pointerdown",o,!0),window.addEventListener("wheel",s,!0),window.addEventListener("scroll",r,!0),window.addEventListener("resize",s),f&&t.querySelector("button")?.focus({preventScroll:!0})}t.addEventListener("keydown",c=>{if(c.key==="Tab"){s();return}if(c.key==="Escape"){c.preventDefault(),s();return}let h=[...t.querySelectorAll("button")],d=h.indexOf(document.activeElement),u;switch(c.key){case"ArrowDown":u=(d+1)%h.length;break;case"ArrowUp":u=(d+h.length-1)%h.length;break;case"Home":u=0;break;case"End":u=h.length-1;break;default:return}c.preventDefault(),h[u]?.focus({preventScroll:!0})});function l(c,{enabled:h=!0,handler:d}){let u=e.get(c);if(!u)throw new RangeError(`Unknown menu item: ${c}`);d&&(u.handler=d),u.enabled=h&&!!u.handler}return{element:t,open:a,close:s,setItem:l,get isOpen(){return!t.hidden}}}var yy=1600;function ip(i,t,e){let n=()=>i.textContent=`${Z("selected")}: ${kr(t.size)} \xB7 ${Z("elements")}: ${kr(e)}`;t.addEventListener("change",n),n()}function sp(i,t){if(!t)return;let e=et("div","ioviewer-banner ioviewer-floating");e.setAttribute("role","status");let n=Z("truncated").replace("{meshes}",t.meshes).replace("{total}",t.totalMeshes),s=Qe("ioviewer-panel-close",re.close,Z("close")),r=new ResizeObserver(()=>i.style.setProperty("--banner-height",`${e.offsetHeight}px`));s.addEventListener("click",()=>{r.disconnect(),i.style.removeProperty("--banner-height"),e.remove()}),e.append(et("span","",n),s),i.append(e),r.observe(e)}function Hs(i,t){let e=et("div","ioviewer-toast",t);e.setAttribute("role","status"),i.append(e),setTimeout(()=>e.remove(),yy)}function rp(i,t){let e=et("table");for(let[s,r]of t)e.insertRow().append(et("th","",s),et("td","",String(r??"")));let n=et("section");return n.append(et("h3","",i),e),n}function op(i,t,e){let n=et("h2","ioviewer-properties-title"),s=et("button","ioviewer-properties-close","\xD7");s.type="button",s.title=Z("close"),s.setAttribute("aria-label",Z("close")),s.addEventListener("click",()=>t.clear());let r=et("header");r.append(n,s);let o=et("div","ioviewer-properties-body");i.replaceChildren(r,o),i.hidden=!0;let a=h=>{let d=[[Z("id"),h.id],[Z("category"),h.category],[Z("type"),h.type],[Z("level"),h.level]];return h.sourceId&&d.push([Z("sourceId"),h.sourceId]),h.link&&d.push([Z("link"),h.link]),rp(Z("elementGroup"),d)},l=h=>{for(let[d,u]of Object.entries(h??{}))o.append(rp(d,Object.entries(u)))},c;t.addEventListener("change",()=>{if(c?.abort(),c=void 0,o.removeAttribute("aria-busy"),i.hidden=t.size===0,o.replaceChildren(),t.size!==1){n.textContent=`${Z("selected")}: ${t.size}`;return}let[h]=t.values(),d=e.meta.elements[h];if(n.textContent=d.name||`#${d.id}`,o.append(a(d)),!e.loadProperties){l(e.props(d.id));return}let u=new AbortController;c=u,o.setAttribute("aria-busy","true"),e.loadProperties(h,u.signal).then(f=>{u.signal.aborted||!f||(n.textContent=f.name||d.name||`#${d.id}`,o.replaceChildren(a({...d,...f})),l(f.properties))}).catch(()=>{u.signal.aborted||o.append(et("p","",Z("badData")))}).finally(()=>{c===u&&o.removeAttribute("aria-busy")})})}async function My(i){if(await navigator.clipboard?.writeText(i).then(()=>!0,()=>!1))return!0;let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.className="ioviewer-offscreen",document.body.append(t),t.select();try{return document.execCommand("copy")}finally{t.remove()}}function ap({root:i,data:t,scene:e,controls:n,picker:s,selection:r,measure:o}){let{meta:a}=t,l=()=>n.fitBox(e.visibleBox()),c={hide:e.setVisible&&(()=>r.size&&e.setVisible([...r.values()],!1)),isolate:e.isolate&&(()=>r.size&&e.isolate([...r.values()])),showAll:e.showAll&&(()=>e.showAll()),zoomTo:()=>{if(!r.size)return l();let[M,...T]=r.values(),S=e.elementBox(M);for(let v of T)S.union(e.elementBox(v));n.zoomToBox(S)},fitAll:l},h=Zf(i);h.registerPanel("model",{icon:re.model,title:Z("panel.model"),visible:a.elements.length>0||!!e.setVisible,render:M=>tp(M,{elements:a.elements,models:a.models??[],selection:r,scene:e,openContextMenu:_,zoomToElement:T=>n.zoomToBox(e.elementBox(T))})});let d=document.createElement("aside");d.id="ioviewer-properties",d.className="ioviewer-floating",i.append(d),op(d,r,t);let u=Kf(i,Jf),f=M=>{n.setLeftButtonMode(M),u.setActive("orbit",M==="orbit"),u.setActive("pan",M==="pan")};u.setHandler("orbit",()=>f("orbit")),u.setHandler("pan",()=>f("pan")),f(n.leftButtonMode),u.setHandler("fit",l),u.setHandler("projection",()=>{let M=!n.camera.isOrthographicCamera;n.setProjection(M?"orthographic":"perspective"),u.setActive("projection",M)}),u.setActive("projection",!1),document.fullscreenEnabled&&(u.setHandler("fullscreen",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{u.setActive("fullscreen",!!document.fullscreenElement),Hs(i,Z("fullscreenUnavailable"))})}),document.addEventListener("fullscreenchange",()=>u.setActive("fullscreen",!!document.fullscreenElement)));let m=np(i);function _(M,T,S,v){m.open(S===null?"empty":"element",M,T,S,v)}function g(M){if(m.isOpen)return;let T=M===document.body,S=(T?n.dom:M).getBoundingClientRect(),v=T?S.left+S.width/2:S.left,b=T?S.top+S.height/2:S.bottom;_(v,b,r.values().next().value??null,()=>M.focus({preventScroll:!0}))}m.setItem("properties",{handler:M=>r.set([M])});for(let M of["hide","isolate","showAll","zoomTo","fitAll"])m.setItem(M,{handler:c[M]});m.setItem("copyId",{handler:M=>My(String(a.elements[M].id)).then(T=>Hs(i,Z(T?"idCopied":"copyFailed")),()=>Hs(i,Z("copyFailed")))}),n.addEventListener("contextmenu",async M=>{let{x:T,y:S}=M.detail;if(o?.active)return _(T,S,r.values().next().value??null);let v=s.pick(T,S),b=v?.then?await v:v;if(b!==void 0){if(!b||b.element<0)return _(T,S,null);r.has(b.element)||r.set([b.element]),_(T,S,b.element)}});let p=[];return window.addEventListener("keydown",M=>{if(M.defaultPrevented)return;let T=jf(M);if(T){if(M.preventDefault(),T==="contextMenu")return g(document.activeElement??document.body);if(T==="escape"&&!m.isOpen){p.some(S=>S())||r.clear();return}m.close(),T!=="escape"&&c[T]?.()}}),ip(document.getElementById("ioviewer-status"),r,e.elementCount),sp(i,a.truncated),{shell:h,toolbar:u,contextMenu:m,onEscape:M=>p.push(M)}}var Ph={x:new P(1,0,0),y:new P(0,1,0),z:new P(0,0,1)};function Lh(i){let t=Ph[i];if(!t)throw new RangeError(`Unknown axis: ${i}`);return t.clone()}function lp(i,t,e){if(t.length===0)return!1;let n=s=>s.distanceToPoint(i)<0;return e?t.every(n):t.some(n)}function cp(i,t,e,n){let s=i.clone().normalize(),r=s.dot(t)+e;return n?new Te(s,-r):new Te(s.negate(),r)}function hp(i,t,e=0){if(t!=="keepInside"&&t!=="cutInside")throw new RangeError(`Unknown box mode: ${t}`);let{min:n,max:s}=i,r=[new Te(new P(1,0,0),-n.x),new Te(new P(-1,0,0),s.x),new Te(new P(0,1,0),-n.y),new Te(new P(0,-1,0),s.y),new Te(new P(0,0,1),-n.z),new Te(new P(0,0,-1),s.z)];if(e!==0){let o=i.getCenter(new P);for(let a of r){let l=a.distanceToPoint(o);a.normal.applyAxisAngle(Ph.z,e),a.constant=l-a.normal.dot(o)}}return t==="keepInside"?{planes:r,intersection:!1}:{planes:r.map(o=>o.negate()),intersection:!0}}function up(i,t,e,n,s,r){let o=i.clone();if(n>0?o.max[e]=Math.max(i.max[e]+s,i.min[e]+r):o.min[e]=Math.min(i.min[e]-s,i.max[e]-r),t!==0){let a=o.getCenter(new P).sub(i.getCenter(new P));o.translate(a.clone().applyAxisAngle(Ph.z,t).sub(a))}return o}function dp(i){let{min:t,max:e}=i;return Array.from({length:8},(n,s)=>new P(s&1?e.x:t.x,s&2?e.y:t.y,s&4?e.z:t.z))}function fp(i,t,e){if(t.length===0||i.isEmpty())return!1;let n=dp(i),s=r=>n.every(o=>r.distanceToPoint(o)<0);return e?t.every(s):t.some(s)}function _l(i,t){let e=i.getSize(new P).multiplyScalar(.5);return Math.abs(t.x)*e.x+Math.abs(t.y)*e.y+Math.abs(t.z)*e.z}function Gr(i,t,e){let n=t.clone().sub(i.origin),s=e.dot(i.direction),r=1-s*s;return r<.03?null:(s*i.direction.dot(n)-e.dot(n))/r}function xl(i,t,e){let n=new P(1,0,0).applyQuaternion(t),s=new P(0,1,0).applyQuaternion(t),[r,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let h of dp(i)){h.sub(e);let d=h.dot(n),u=h.dot(s);[r,o,a,l]=[Math.min(r,d),Math.max(o,d),Math.min(a,u),Math.max(l,u)]}return{center:e.clone().addScaledVector(n,(r+o)/2).addScaledVector(s,(a+l)/2),width:(o-r)*1.1,height:(l-a)*1.1}}var Wr=6,by=["off","planes","box"],Sy=.05,Dh=new P(0,0,1),vl=class extends EventTarget{constructor(t,e,n){super(),this.scene=t,this.modelBox=e.clone(),this.center=e.getCenter(new P),this.planes=[],this.active=-1,this.box=null,this.boxYaw=0,this.boxMode="keepInside",this.fill=!1,this.gizmoVisible=!0,this._mode="off",n&&this.restore(n)}restore({planes:t,box:e,cutInside:n}){this.modelBox.isEmpty()||(this.planes=t.map(({axis:s,normal:r,offset:o,flipped:a})=>{let l=new P().fromArray(r),c=new De().setFromUnitVectors(Dh,l);return{axis:s,quaternion:c,offset:o-l.dot(this.center),flipped:a,enabled:!0,rotated:!1}}),this.active=this.planes.length?0:-1,this.box=e?new ae(new P().fromArray(e.min),new P().fromArray(e.max)):null,this.boxYaw=0,this.boxMode=n?"cutInside":"keepInside",this.gizmoVisible=!1,this.setMode(this.box?"box":this.planes.length?"planes":"off"))}get mode(){return this._mode}setMode(t){if(!by.includes(t))throw new RangeError(`Unknown section mode: ${t}`);t==="box"&&!this.box&&this.fitBoxToShown()||(this._mode=t,this._changed(!0))}addPlane(t){let e=Lh(t);if(this.planes.length>=Wr||this.modelBox.isEmpty())return null;let n=new De().setFromUnitVectors(Dh,e);return this.planes.push({axis:t,quaternion:n,offset:0,flipped:!1,enabled:!0,rotated:!1}),this.active=this.planes.length-1,this._mode="planes",this._changed(!0),this.active}removePlane(t){this._plane(t),this.planes.splice(t,1),(this.active>=this.planes.length||this.active>t)&&this.active--,this._changed(!0)}updatePlane(t,{offset:e,flipped:n,enabled:s,quaternion:r}){let o=this._plane(t);if(e!==void 0){if(!Number.isFinite(e))throw new RangeError(`Offset must be a finite number, got ${e}.`);o.offset=e}n!==void 0&&(o.flipped=!!n),s!==void 0&&(o.enabled=!!s),r&&(o.quaternion.copy(r).normalize(),o.rotated=o.axis!=="custom"&&this.normal(t).angleTo(Lh(o.axis))>1e-6),this._changed(!0)}setActivePlane(t){this._plane(t),this.active=t,this._changed(!1)}normal(t){return Dh.clone().applyQuaternion(this._plane(t).quaternion)}extent(t){return _l(this.modelBox,this.normal(t))}origin(t){return this.center.clone().addScaledVector(this.normal(t),this._plane(t).offset)}clipPlane(t){let e=this._plane(t);return cp(this.normal(t),this.center,e.offset,e.flipped)}setBox(t,e=0){if(t.isEmpty())throw new RangeError("The section box is empty.");e=pp(e),this.box=t.clone(),this.boxYaw=e,this._mode="box",this._changed(!0)}setBoxYaw(t){this.box&&(this.boxYaw=pp(t),this._changed(this.mode==="box"))}setBoxMode(t){if(t!=="keepInside"&&t!=="cutInside")throw new RangeError(`Unknown box mode: ${t}`);this.boxMode=t,this._changed(!0)}fitBoxToElements(t){let e=new ae;for(let s of t)e.union(this.scene.elementBox(s));if(e.isEmpty())return!1;let n=e.getSize(new P);return this.setBox(e.expandByScalar(Sy*Math.max(n.x,n.y,n.z))),!0}fitBoxToShown(){let t=this.scene.visibleBox();if(t.isEmpty())return!1;let e=t.getSize(new P);return this.setBox(t.expandByScalar(.001*Math.max(e.x,e.y,e.z))),!0}setGizmoVisible(t){this.gizmoVisible=!!t,this._changed(!1)}setFill(t){this.fill=!!t,this._changed(!1)}reset(){this.planes=[],this.active=-1,this.box=null,this.boxYaw=0,this._mode="off",this._changed(!0)}clipping(){if(this._mode==="planes")return{planes:this.planes.flatMap((e,n)=>e.enabled?[this.clipPlane(n)]:[]),intersection:!1};if(this._mode==="box"&&this.box){let t=hp(this.box,this.boxMode,this.boxYaw);if(!t.intersection&&this.boxYaw!==0){let e=this.box.getCenter(new P),n=this.box.getSize(new P).multiplyScalar(.5),s=Math.abs(Math.cos(this.boxYaw)),r=Math.abs(Math.sin(this.boxYaw));n.set(s*n.x+r*n.y,r*n.x+s*n.y,n.z),t.bounds=new ae(e.clone().sub(n),e.add(n))}return t}return{planes:[],intersection:!1}}isCut(t,{planes:e,intersection:n,bounds:s}=this.clipping()){return s&&!t.isEmpty()&&!s.intersectsBox(t)||fp(t,e,n)}_plane(t){let e=this.planes[t];if(!Number.isInteger(t)||!e)throw new RangeError(`Plane index ${t} is out of range 0..${this.planes.length-1}.`);return e}_changed(t){if(t){let{planes:e,intersection:n}=this.clipping();this.scene.setClipping(e,n)}this.dispatchEvent(new Event("change"))}};function pp(i){if(!Number.isFinite(i))throw new RangeError("The section box angle must be finite.");return i>=-Math.PI&&i<=Math.PI?i:le.euclideanModulo(i+Math.PI,2*Math.PI)-Math.PI}var Nh=80,wy=8,Bh=.8,Ey=Math.sin(le.degToRad(12)),Ci={x:"#ef4444",y:"#22c55e",z:"#3b82f6",centre:"#e2e8f0",hover:"#facc15",frame:"#93c5fd",fill:"#60a5fa"},Uh=["x","y","z"],Ty=Math.cos(le.degToRad(12)),yl=new P(0,0,1),Ay=i=>new Ke({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.9}),Ry=new Ke({visible:!1});function Ml(i,t,e,n){let s=new Re,r=Ay(t);for(let a of e)s.add(new pe(a,r));let o=new pe(n,Ry);return o.userData.handle=s,s.add(o),s.userData={kind:i,color:t,material:r,proxy:o},s.traverse(a=>a.renderOrder=1e3),s}function Fh(i,t,e=n=>n){let n=Ml("rotate",Ci[t],[e(new Ss(Bh,.018,8,64))],e(new Ss(Bh,.09,8,48)));return n.name=i,n.userData.axis=t,n}var bl=class extends EventTarget{constructor(t,e){super(),this.sections=t,this.dom=e,this.camera=null,this.group=new Re,this.group.name="sections",this._raycaster=new Gn,this._drag=null,this._hovered=null,this._buildPlanes(),this._buildPlaneGizmo(),this._buildBox(),t.addEventListener("change",()=>this._sync()),(e.parentElement??e).addEventListener("pointerdown",n=>this._down(n),!0),e.addEventListener("pointermove",n=>this._move(n)),e.addEventListener("pointerup",n=>this._up(n)),e.addEventListener("pointercancel",()=>this._end()),e.addEventListener("lostpointercapture",()=>this._end()),this._sync()}get dragging(){return this._drag!==null}update(t){this.camera=t;let e=this.planeGizmo;e.visible&&(e.scale.setScalar(this._worldPerPixel(e.position)*Nh),this.arrow.visible=this._across(yl.clone().applyQuaternion(e.quaternion),e.position));for(let s of this.boxHandles){let{shown:r,normal:o}=s.userData;s.visible=r&&(!o||this._across(o,s.position)),s.visible&&s.scale.setScalar(this._worldPerPixel(s.position)*wy)}let n=this.boxRing;n.visible&&n.scale.setScalar(this._worldPerPixel(n.position)*Nh)}_across(t,e){let n=this.camera,s=n.isOrthographicCamera?n.getWorldDirection(new P):e.clone().sub(n.position).normalize();return Math.abs(t.dot(s))<Ty}_buildPlanes(){let t=new ln(1,1),e=new fe().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>new P(r/2,o/2,0))),n=new Ke({color:Ci.fill,transparent:!0,opacity:.12,side:Oe,depthWrite:!1}),s=new an({color:Ci.frame});this.planeVisuals=Array.from({length:Wr},()=>{let r=new Re;return r.add(new pe(t,n),new sr(e,s)),this.group.add(r),r})}_buildPlaneGizmo(){let t=(n,s)=>n.rotateX(Math.PI/2).translate(0,0,s),e=Ml("move",Ci.z,[t(new Oi(.025,.025,1),.5),t(new lr(.08,.25),1.125)],t(new Oi(.12,.12,1.25),.625));e.name="arrow",this.arrow=e,this.planeGizmo=new Re,this.planeGizmo.add(e,Fh("ringX","x",n=>n.rotateY(Math.PI/2)),Fh("ringY","y",n=>n.rotateX(Math.PI/2))),this.group.add(this.planeGizmo)}_buildBox(){this.boxWire=new bn(new zi(new pn(1,1,1)),new an({color:Ci.frame})),this.group.add(this.boxWire);let t=new Hn(1,16,12),e=new Hn(1.6,8,6);this.boxHandles=[];for(let s of Uh)for(let r of[-1,1]){let o=Ml("face",Ci[s],[t],e);o.name=`face${r>0?"+":"-"}${s}`,Object.assign(o.userData,{axis:s,sign:r,normal:new P}),this.boxHandles.push(o)}let n=Ml("centre",Ci.centre,[new pn(1.4,1.4,1.4)],e);n.name="centre",this.boxHandles.push(n),this.boxRing=Fh("boxRing","z"),this.group.add(...this.boxHandles,this.boxRing)}_sync(){let t=this.sections,e=t.mode==="planes";this.planeVisuals.forEach((r,o)=>{let a=t.planes[o];if(r.visible=e&&!!a?.enabled,!r.visible)return;r.children[0].visible=!t.fill;let l=xl(t.modelBox,a.quaternion,t.origin(o));r.position.copy(l.center),r.quaternion.copy(a.quaternion),r.scale.set(l.width,l.height,1)});let n=t.planes[t.active];this.planeGizmo.visible=e&&t.gizmoVisible&&!!n?.enabled,this.planeGizmo.visible&&(this.planeGizmo.position.copy(t.origin(t.active)),this.planeGizmo.quaternion.copy(n.quaternion));let s=t.mode==="box"?t.box:null;this.boxWire.visible=!!s,this.boxRing.visible=!!s&&t.gizmoVisible;for(let r of this.boxHandles)r.visible=r.userData.shown=!!s&&t.gizmoVisible;if(s){let r=s.getCenter(new P),o=s.getSize(new P);this.boxWire.position.copy(r),this.boxWire.scale.copy(o).max(new P(1e-6,1e-6,1e-6)),this.boxWire.rotation.z=t.boxYaw,this.boxRing.position.copy(r);for(let a of this.boxHandles){let{axis:l,sign:c,normal:h}=a.userData;h?(h.set(0,0,0).setComponent(Uh.indexOf(l),c).applyAxisAngle(yl,t.boxYaw),a.position.copy(r).addScaledVector(h,o[l]/2)):a.position.copy(r)}}}_worldPerPixel(t){let e=this.camera,n=Math.max(this.dom.clientHeight,1);if(e.isOrthographicCamera)return(e.top-e.bottom)/e.zoom/n;let s=t.clone().sub(e.position).dot(e.getWorldDirection(new P));return 2*Math.max(s,e.near)*Math.tan(le.degToRad(e.fov/2))/n}_ray(t){let e=this.dom.getBoundingClientRect(),n=new Gt((t.clientX-e.left)/e.width*2-1,1-(t.clientY-e.top)/e.height*2);return this.camera.updateMatrixWorld(),this._raycaster.setFromCamera(n,this.camera),this._raycaster.ray.clone()}_hit(t){if(!this.camera)return null;this.update(this.camera),this.group.updateMatrixWorld(!0);let e=r=>{for(;r&&r!==this.group;r=r.parent)if(!r.visible)return!1;return!0},n=[];this.group.traverse(r=>r.userData.handle&&e(r)&&n.push(r)),this._ray(t);let s=this._raycaster.intersectObjects(n,!1);return(this.sections.mode==="box"?s.find(r=>r.object.userData.handle!==this.boxRing):null)??s[0]??null}_down(t){if(t.target!==this.dom||t.button!==0)return;let e=this._hit(t);if(!e)return;let n=e.object.userData.handle,s=this._start(n,this._raycaster.ray,e.point,t);s&&(t.stopPropagation(),t.preventDefault(),this.dom.setPointerCapture(t.pointerId),this._drag={id:t.pointerId,handle:n,...s},this._highlight(n))}_start(t,e,n,s){let r=this.sections,{kind:o}=t.userData;if(o==="move"){let u=r.active,f=r.origin(u),m=r.normal(u),_=Gr(e,f,m);return _===null?null:{index:u,origin:f,normal:m,offset:r.planes[u].offset,s0:_}}if(o==="rotate"){let u=r.active,f=t===this.boxRing,m=f?t.position.clone():r.origin(u),_=f?null:r.planes[u].quaternion.clone(),g=f?yl:new P().setComponent(Uh.indexOf(t.userData.axis),1).applyQuaternion(_),p={index:u,origin:m,quaternion:_,axis:g,yaw:f?r.boxYaw:null};if(Math.abs(g.dot(e.direction))<Ey){let S=g.clone().cross(e.direction).normalize(),v=g.clone().cross(n.clone().sub(m));S.dot(v)<0&&S.negate(),S.applyQuaternion(this.camera.quaternion.clone().invert());let b=new Gt(S.x,-S.y).normalize().divideScalar(Bh*Nh);return{...p,screen:b,x:s.clientX,y:s.clientY}}let M=new Te().setFromNormalAndCoplanarPoint(g,m),T=e.intersectPlane(M,new P)?.sub(m);return T?{...p,plane:M,from:T}:null}let a=r.box.clone(),l=r.boxYaw;if(o==="face"){let u=t.userData.normal.clone(),f=t.position.clone(),m=Gr(e,f,u);return m===null?null:{box:a,yaw:l,normal:u,at:f,s0:m}}let c=this.camera.getWorldDirection(new P),h=new Te().setFromNormalAndCoplanarPoint(c,a.getCenter(new P)),d=e.intersectPlane(h,new P);return d?{box:a,yaw:l,plane:h,from:d}:null}_move(t){let e=this._drag;if(!e)return this._hover(t);if(t.pointerId!==e.id)return;if(t.buttons===0)return this._end();let n=this.sections,{kind:s}=e.handle.userData,r=e.screen?null:this._ray(t);if(s==="move"){let o=Gr(r,e.origin,e.normal);o!==null&&n.updatePlane(e.index,{offset:e.offset+o-e.s0})}else if(s==="rotate"){let o;if(e.screen)o=e.screen.x*(t.clientX-e.x)+e.screen.y*(t.clientY-e.y);else{let c=r.intersectPlane(e.plane,new P)?.sub(e.origin);if(!c)return;o=Math.atan2(e.axis.dot(new P().crossVectors(e.from,c)),e.from.dot(c))}if(e.yaw!==null)return n.setBoxYaw(e.yaw+o);let a=new De().setFromAxisAngle(e.axis,o).multiply(e.quaternion),l=yl.clone().applyQuaternion(a);n.updatePlane(e.index,{quaternion:a,offset:l.dot(e.origin.clone().sub(n.center))})}else if(s==="face"){let o=Gr(r,e.at,e.normal);if(o===null)return;let{axis:a,sign:l}=e.handle.userData,c=.001*Math.max(...n.modelBox.getSize(new P).toArray(),.001);n.setBox(up(e.box,e.yaw,a,l,o-e.s0,c),e.yaw)}else{let o=r.intersectPlane(e.plane,new P);o&&n.setBox(e.box.clone().translate(o.sub(e.from)),e.yaw)}}_up(t){this._drag&&t.pointerId===this._drag.id&&this._end()}_end(){this._drag&&(this._drag=null,this._highlight(null))}_hover(t){t.buttons===0&&this._highlight(this._hit(t)?.object.userData.handle??null)}_highlight(t){if(this._hovered!==t){for(let e of[this._hovered,t])e&&e.userData.material.color.set(e===t?Ci.hover:e.userData.color);this._hovered=t,this.dom.style.cursor=t?"grab":"",this.dispatchEvent(new Event("change"))}}};var Cy=new P(0,0,1),Iy="#e9ad68";function Py(i,t){let e=new Uint32Array(i.length/3),n=new Map;for(let o=0;o<e.length;o++){let a=i[o*3],l=i[o*3+1],c=i[o*3+2];if(!Number.isFinite(a)||!Number.isFinite(l)||!Number.isFinite(c))return!1;let h=`${a},${l},${c}`;n.has(h)||n.set(h,n.size),e[o]=n.get(h)}if(n.size<4||t.length%3)return!1;let s=new Map,r=0;for(let o=0;o<t.length;o+=3){let a=[e[t[o]],e[t[o+1]],e[t[o+2]]],[l,c,h]=a;if(l===void 0||c===void 0||h===void 0)return!1;if(!(l===c||c===h||h===l))for(let d=0;d<3;d++){let u=a[d],f=a[(d+1)%3],m=u<f?1:-1,_=u<f?`${u},${f}`:`${f},${u}`,g=s.get(_);if(g!==void 0&&g!==-m)return!1;s.set(_,g===void 0?m:0),r+=g===void 0?1:-1}}return s.size>0&&r===0}function Ly(i,t){let{instances:e,geometries:n}=t.meta,s=t.readView(e.geometry),{width:r,height:o}=i.slotUniforms.slotState.value.image,a=new Uint8Array(r*o),l=new Map;for(let h=0;h<i.slotCount;h++){let d=s[i.slotInstance(h)];if(!l.has(d)){let u=n[d],f=Py(Nr({view:t.readView},u),t.readView(u.indices));l.set(d,f?255:0)}a[h]=l.get(d)}let c=new Bn(a,r,o,Ps);return c.needsUpdate=!0,c}function mp(i,t,e,n){let s=new Ue({uniforms:i,vertexShader:`
#include <common>
${Ur}
#include <clipping_planes_pars_vertex>
uniform highp sampler2D closedSlots;
void main() {
  ${Fr}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  ${xh}
  if ( texelFetch( closedSlots, st, 0 ).r < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`,fragmentShader:`
#include <clipping_planes_pars_fragment>
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vec4( 0.0 );
}`,side:e,stencilZPass:n,stencilWrite:!0,clipping:!0,clippingPlanes:[t],colorWrite:!1,depthTest:!1,depthWrite:!1});return s.index0AttributeName="q",s}var Sl=class{constructor(t,e,n,s){this.model=t,this.sections=e,this.data=n,this.drawStencils=s,this._farSide=new Te,this._surface=new pe(new ln(1,1),new Ke({color:Iy,side:Oe,forceSinglePass:!0,stencilWrite:!0,stencilFunc:Nc,stencilWriteMask:0}))}render(t,e,n){let{sections:s,model:r}=this,{planes:o,intersection:a}=s.clipping(),l=a?o.map(u=>u.clone().negate()):o,c=u=>Math.abs(u.distanceToPoint(s.center))<_l(s.modelBox,u.normal);if(r.opacity===0||!l.some(c))return t.render(e,n);if(!this.drawStencils&&!this._stencils){let u={...r.slotUniforms,closedSlots:{value:Ly(r,this.data)}};this._stencils=[mp(u,this._farSide,Be,Lc),mp(u,this._farSide,Wn,Dc)]}let h=this._surface.material;h.opacity=r.opacity,h.transparent!==r.opacity<1&&(h.transparent=r.opacity<1,h.depthWrite=!h.transparent,h.needsUpdate=!0);let d=t.autoClear;t.autoClear=!1;try{t.clear();let u=n.isOrthographicCamera?n.getWorldDirection(new P):null;l.forEach((f,m)=>{if(!c(f))return;let _=u?-f.normal.dot(u):f.distanceToPoint(n.position);if(_===0)return;if(this._farSide.copy(f),_>0&&this._farSide.negate(),t.clearStencil(),this.drawStencils)this.drawStencils(t,n,this._farSide);else for(let p of this._stencils)r.withMaterial(p,()=>t.render(r.root,n),{section:!0});this._surface.quaternion.setFromUnitVectors(Cy,f.normal);let g=xl(s.modelBox,this._surface.quaternion,f.coplanarPoint(new P));this._surface.position.copy(g.center),this._surface.scale.set(g.width,g.height,1),h.clippingPlanes=l.filter((p,M)=>M!==m),t.render(this._surface,n)}),t.render(e,n)}finally{t.autoClear=d}}};function Xr(i,t,e){let n=et("div","ioviewer-segmented");n.setAttribute("role","group"),n.setAttribute("aria-label",i);let s=t.map(([o,a])=>{let l=et("button","",a);return l.type="button",l.dataset.value=o,l.addEventListener("click",()=>e(o)),n.append(l),l});return{element:n,update:o=>s.forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.value===o)))}}function Oh(i,t){let e=et("label","ioviewer-check"),n=et("input");return n.type="checkbox",n.addEventListener("change",()=>t(n.checked)),e.append(n,et("span","",i)),{element:e,input:n}}function Dy(i,t){let e=et("li","ioviewer-section-plane");e.addEventListener("pointerdown",()=>i.active!==t&&i.setActivePlane(t));let n=et("span","ioviewer-section-name"),s=Qe("ioviewer-icon-button",re.flip,Z("sections.flip"));s.addEventListener("click",()=>i.updatePlane(t,{flipped:!i.planes[t].flipped}));let r=Oh(Z("sections.enabled"),h=>i.updatePlane(t,{enabled:h})),o=Qe("ioviewer-icon-button",re.remove,Z("sections.delete"));o.addEventListener("click",()=>i.removePlane(t));let a=et("input","ioviewer-section-slider");a.type="range",a.step="any",a.setAttribute("aria-label",Z("sections.position")),a.addEventListener("input",()=>i.updatePlane(t,{offset:Number(a.value)}));let l=et("div","ioviewer-section-head");return l.append(n,s,r.element,o),e.append(l,a),{element:e,update:()=>{let h=i.planes[t],d=h.rotated?` (${Z("sections.rotated")})`:"",u=h.axis==="custom"?Z("sections.custom"):h.axis.toUpperCase();n.textContent=`${t+1}. ${u}${d}`,e.classList.toggle("active",i.active===t),s.setAttribute("aria-pressed",String(h.flipped)),r.input.checked=h.enabled;let f=i.extent(t);a.min=String(Math.min(-f,h.offset)),a.max=String(Math.max(f,h.offset)),a.value=String(h.offset)}}}function gp({root:i,shell:t,toolbar:e,contextMenu:n,sections:s,selection:r,canFill:o,hasMeshes:a=!0}){let l="z",c=()=>{s.addPlane(l)===null&&(s.setMode("planes"),Hs(i,Z("sections.maxPlanes")))},h=()=>[...r.values()],d=()=>s.fitBoxToElements(h()),u=Xr(Z("sections.mode"),[["planes",Z("sections.planes")],["box",Z("sections.box")],["off",Z("sections.off")]],U=>s.setMode(U)),f=Xr(Z("sections.axis"),["x","y","z"].map(U=>[U,U.toUpperCase()]),U=>f.update(l=U));f.update(l);let m=et("button","ioviewer-text-button",Z("sections.addPlane"));m.type="button",m.addEventListener("click",c);let _=et("ul","ioviewer-section-list"),g=et("div","ioviewer-section-empty",Z("sections.noPlanes")),p=et("div","ioviewer-section-block"),M=et("div","ioviewer-section-row");M.append(et("span","",Z("sections.axis")),f.element,m),p.append(M,_,g);let T=Xr(Z("sections.box"),[["keepInside",Z("sections.keepInside")],["cutInside",Z("sections.cutInside")]],U=>s.setBoxMode(U)),S=et("button","ioviewer-text-button",Z("sections.fitSelection"));S.type="button",S.addEventListener("click",d);let v=et("input","ioviewer-section-slider");Object.assign(v,{type:"range",min:"-180",max:"180",step:"1"}),v.addEventListener("input",()=>s.setBoxYaw(Number(v.value)*Math.PI/180));let b=et("span");b.setAttribute("aria-hidden","true");let A=et("label","ioviewer-section-row");A.append(et("span","",Z("sections.boxYaw")),v,b);let x=et("div","ioviewer-section-block");x.append(T.element,A,S);let w=Oh(Z("sections.showGizmo"),U=>s.setGizmoVisible(U)),R=Oh(Z("sections.fill"),U=>s.setFill(U));o||(R.element.title=Z(a?"sections.fillUnavailable":"sections.fillNeedsMeshes"));let D=[],N=()=>{u.update(s.mode),p.hidden=s.mode!=="planes",x.hidden=s.mode!=="box",m.disabled=s.planes.length>=Wr,D.length!==s.planes.length&&(D=s.planes.map((W,V)=>Dy(s,V)),_.replaceChildren(...D.map(W=>W.element))),D.forEach(W=>W.update()),g.hidden=D.length>0,T.update(s.boxMode),v.value=String(Math.round(s.boxYaw*180/Math.PI)),b.textContent=`${v.value}\xB0`,v.setAttribute("aria-valuetext",b.textContent),w.input.checked=s.gizmoVisible,R.input.checked=s.fill;let U=s.mode==="box"||s.mode==="planes"&&s.planes.some(W=>W.enabled);R.input.disabled=!o||!U,e.setActive("plane",s.mode==="planes"),e.setActive("box",s.mode==="box")},B=()=>S.disabled=r.size===0;if(t.registerPanel("sections",{icon:re.sections,title:Z("panel.sections"),visible:!s.modelBox.isEmpty(),render:U=>U.append(u.element,p,x,R.element,w.element)}),s.addEventListener("change",N),r.addEventListener("change",B),N(),B(),s.modelBox.isEmpty())return;let L=()=>t.openPanel("sections");e.setHandler("plane",()=>{c(),L()}),e.setHandler("box",()=>{(s.mode==="box"||r.size&&d()||s.fitBoxToShown())&&L()}),e.setHandler("resetSections",()=>s.reset()),n.setItem("sectionBox",{handler:U=>{s.fitBoxToElements(r.has(U)?h():[U]),L()}}),n.setItem("resetSections",{handler:()=>s.reset()})}var Ny="#facc15",Uy=9;function zh(i,t=ai){return`${new Intl.NumberFormat(t,{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(i)} ${Z("unit.m",t)}`}var wl=class extends EventTarget{constructor(t){super(),this.active=!1,this.points=[],this.preview=null,this.group=new Re,this.group.name="measure";let e=new fe;e.setAttribute("position",new Ae(new Float32Array(6),3));let n={color:Ny,depthTest:!1,depthWrite:!1,transparent:!0};this._line=new Bi(e,new an(n)),this._markers=new Sn(e,new zn({...n,size:Uy,sizeAttenuation:!1}));for(let s of[this._line,this._markers])s.frustumCulled=!1,s.renderOrder=1001,this.group.add(s);this.label=et("div","ioviewer-measure-label"),this.label.hidden=!0,this._previewMarker=et("div","ioviewer-measure-preview"),this._previewMarker.hidden=!0,this._previewMarker.setAttribute("aria-hidden","true"),t.prepend(this.label,this._previewMarker),this._sync()}get distance(){return this.points.length===2?this.points[0].distanceTo(this.points[1]):null}get box(){return new ae().setFromPoints(this.points)}setActive(t){this.active=!!t,this.active||(this.points=[],this.setPreview(null)),this._sync()}add(t){this.active&&(this.points=this.points.length===1?[this.points[0],t.clone()]:[t.clone()],this._sync())}clear(){return this.points.length===0?!1:(this.points=[],this._sync(),!0)}setPreview(t){!this.preview&&!t||(this.preview=t,this._previewMarker.hidden=!t,t&&(this._previewMarker.dataset.kind=t.kind),this.dispatchEvent(new Event("previewchange")))}update(t,e){this.preview&&Hr(this._previewMarker,this.preview.point,t,e),this.distance!==null&&Hr(this.label,this.points[0].clone().lerp(this.points[1],.5),t,e)}_sync(){let t=this._line.geometry.attributes.position;this.points.forEach((e,n)=>t.setXYZ(n,e.x,e.y,e.z)),t.needsUpdate=!0,this._line.geometry.setDrawRange(0,this.points.length),this._line.visible=this.points.length===2,this._markers.visible=this.points.length>0,this.label.hidden=this.distance===null,this.distance!==null&&(this.label.textContent=zh(this.distance)),this.dispatchEvent(new Event("change"))}};var _p=8,Fy=1-1e-6,By=8,xp={vertex:0,midpoint:1,edge:2},Oy=2e4;function zy(i,t){let e=new Map,n=new Uint32Array(i.length/3);for(let d=0;d<n.length;d++){let u=d*3,f=`${i[u]},${i[u+1]},${i[u+2]}`;e.has(f)||e.set(f,d),n[d]=e.get(f)}let s=new Map,r=new P,o=new P,a=new P;function l(d,u,f){let m=Math.min(d,u),_=Math.max(d,u),g=m*n.length+_,p=s.get(g);p?(p.count++,p.crease||(p.crease=Math.abs(p.normal.dot(f))<Fy)):s.set(g,{lo:m,hi:_,normal:f,count:1,crease:!1})}for(let d=0;d+2<t.length;d+=3){let u=n[t[d]],f=n[t[d+1]],m=n[t[d+2]];r.fromArray(i,u*3),o.fromArray(i,f*3).sub(r),a.fromArray(i,m*3).sub(r);let _=new P().crossVectors(o,a);_.lengthSq()>0&&(_.normalize(),l(u,f,_),l(f,m,_),l(m,u,_))}let c=[],h=new Set;for(let{lo:d,hi:u,count:f,crease:m}of s.values())f!==1&&!m||(c.push(d,u),h.add(d),h.add(u));return{edges:c,vertices:h}}function El(i,t,e){return t<0&&e<0?!1:(t<0&&(i[0]=Math.max(i[0],t/(t-e))),e<0&&(i[1]=Math.min(i[1],t/(t-e))),i[0]<=i[1])}function ky(i,t,e,n,s,r){let o=[0,1];if(!El(o,e.w+e.z,n.w+n.z)||!El(o,e.w-e.z,n.w-n.z))return[];if(!r||!s.length)return s.every(c=>El(o,c.distanceToPoint(i),c.distanceToPoint(t)))?[o]:[];let a=o.slice();if(!s.every(c=>{let h=c.distanceToPoint(i),d=c.distanceToPoint(t);return(h<0||d<0)&&El(a,-h,-d)}))return[o];let l=[];return o[0]<a[0]&&l.push([o[0],a[0]]),a[1]<o[1]&&l.push([a[1],o[1]]),l}function kh(i,t){return[(i.x/i.w+1)*t.width/2,(1-i.y/i.w)*t.height/2]}function Hy(i,t,[e,n],s,r,o){let a=i.clone().lerp(t,e),l=i.clone().lerp(t,n),[c,h]=kh(a,s),[d,u]=kh(l,s),f=d-c,m=u-h,_=f*f+m*m;if(!(_>0))return null;let g=le.clamp(((r-c)*f+(o-h)*m)/_,0,1);return e+(n-e)*(g*a.w/((1-g)*l.w+g*a.w))}var Tl=class{constructor(t,e,n){this.picker=t,this.sections=e,this.data=n,this.cache=new Map}release(){this.data.releaseBinary(),this.cache.clear()}_geometry(t){let e=this.cache.get(t);if(e)this.cache.delete(t);else{let n=this.data.meta.geometries[t],s=tl({view:this.data.readView},n);e={positions:s,...zy(s,this.data.readView(n.indices))}}return this.cache.set(t,e),this.cache.size>By&&this.cache.delete(this.cache.keys().next().value),e}target(t,e){let n=this.picker.measureTile(t,e,_p+1);if(!n)return null;if(n.pointSample)return{kind:"vertex",point:n.point.clone()};let{rect:s}=n,r=t-s.left,o=e-s.top,{camera:a,scene:l}=this.picker,{planes:c,intersection:h}=this.sections.clipping(),d=new Zt().multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),u=a.matrixWorldInverse.elements,f=null;function m(v,b,A,x){if(f&&xp[v]>xp[f.kind]||A.w<=0||A.z<-A.w||A.z>A.w)return;let[w,R]=kh(A,s);if(!(w>=0&&R>=0&&w<s.width&&R<s.height))return;let D=(w-r)**2+(R-o)**2;if(D>_p**2||f?.kind===v&&D>=f.distance||v!=="edge"&&lp(b,c,h))return;let N=-(u[2]*b.x+u[6]*b.y+u[10]*b.z+u[14]);N-n.depthAt(w,R,x)>2*An+Math.abs(N)*2**-21||(f={kind:v,distance:D,point:b.clone()})}let _=Oy*3,g=new Zt,p=new P,M=new xe,{geometry:T,matrix:S}=this.data.meta.instances;for(let v of n.slots){let b=l.slotInstance(v),[A]=this.data.readView({t:"u32",o:T.o+b*4,n:1}),x=this.data.meta.geometries[A],w=Math.max(x.indices.n,x.positions.n/3);if(w>_)continue;_-=w;let{positions:R,vertices:D,edges:N}=this._geometry(A),B=this.data.readView({t:"f32",o:S.o+b*48,n:12});g.set(B[0],B[3],B[6],B[9],B[1],B[4],B[7],B[10],B[2],B[5],B[8],B[11],0,0,0,1);let L=new Map;for(let U of D){let W=new P().fromArray(R,U*3).applyMatrix4(g),V=new xe(W.x,W.y,W.z,1).applyMatrix4(d);L.set(U,[W,V]),m("vertex",W,V,v)}if(f?.kind!=="vertex")for(let U=0;U<N.length;U+=2){let[W,V]=L.get(N[U]),[O,F]=L.get(N[U+1]);if(m("midpoint",p.copy(W).lerp(O,.5),M.copy(V).lerp(F,.5),v),f?.kind!=="midpoint")for(let G of ky(W,O,V,F,c,h)){let Y=Hy(V,F,G,s,r,o);Y!==null&&m("edge",p.copy(W).lerp(O,Y),M.copy(V).lerp(F,Y),v)}}}return f?{kind:f.kind,point:f.point}:{kind:"surface",point:n.point.clone()}}};var Al=class extends EventTarget{constructor(t,e){super();let n=[];this._labels=[],this.count=0;for(let r of e){let o=Pr(r);if(!(o.length<2)){this.count++;for(let a=1;a<o.length;a++)n.push(...o[a-1],...o[a]);for(let a of[o[0],o[o.length-1]])this._labels.push({element:et("div","ioviewer-grid-label",r.name),point:new P(...a)})}}this.group=new bn(new fe().setAttribute("position",new be(n,3)),new an({color:"#93c5fd",transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1})),this.group.name="grids",this.group.geometry.computeBoundingBox(),this.box=this.group.geometry.boundingBox,this.group.renderOrder=999;let s=et("div","ioviewer-grid-labels");s.append(...this._labels.map(r=>r.element)),t.prepend(s),this._layer=s,this.setVisible(this.count>0)}get visible(){return this.group.visible}setVisible(t){this.group.visible=!!t,this._layer.hidden=!t,this.dispatchEvent(new Event("change"))}update(t,e){if(this.visible)for(let{element:n,point:s}of this._labels)Hr(n,s,t,e)}};var Vy=8,vp=4;function Hh(i,t,e,n="dialog"){let s=et("div","ioviewer-popover ioviewer-floating");s.setAttribute("role",n),s.setAttribute("aria-label",e),s.hidden=!0,t.setAttribute("aria-haspopup",n),t.setAttribute("aria-expanded","false"),i.append(s);function r(l){s.contains(l.target)||(a(),ll(l))}s.addEventListener("keydown",l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),a(),t.focus())});function o(){s.hidden=!1,t.setAttribute("aria-expanded","true");let l=t.getBoundingClientRect(),{width:c}=s.getBoundingClientRect();s.style.left=`${Math.max(vp,Math.min(l.left+l.width/2-c/2,innerWidth-c-vp))}px`,s.style.bottom=`${innerHeight-l.top+Vy}px`,window.addEventListener("pointerdown",r,!0),window.addEventListener("resize",a)}function a(){return s.hidden?!1:(s.hidden=!0,t.setAttribute("aria-expanded","false"),window.removeEventListener("pointerdown",r,!0),window.removeEventListener("resize",a),!0)}return{element:s,close:a,toggle:()=>s.hidden?o():a(),get isOpen(){return!s.hidden}}}function Gy(i){return i?.initialWireframe?"wireframe":i?.initialWhiteMode?"white":"materials"}function yp({root:i,toolbar:t,scene:e,meta:n,grids:s,initialBackground:r,setBackground:o,hasMeshes:a=!0}){let l=R=>t.element.querySelector(`[data-tool="${R}"]`),c=l("displayMode"),h=Hh(i,c,Z("group.display"));h.element.classList.add("ioviewer-display-modes");let d=et("div");d.setAttribute("role","menu"),d.setAttribute("aria-label",Z("tool.displayMode")),h.element.append(d);let u=(n.textures??[]).length>0,f=Sh.map(R=>{let D=et("button","ioviewer-menu-item",Z(`display.${R}`));return D.type="button",D.dataset.mode=R,D.setAttribute("role","menuitemradio"),D.disabled=R==="textures"&&!u||R==="wireframe"&&!a,D.addEventListener("click",()=>{m(R),h.close(),c.focus()}),d.append(D),D}),m=R=>{e.setDisplayMode(R);for(let D of f)D.setAttribute("aria-checked",String(D.dataset.mode===R))},_=Gy(n.options);m(_==="wireframe"&&!a?"materials":_),t.setHandler("displayMode",()=>{h.toggle(),h.isOpen&&d.querySelector('[aria-checked="true"]')?.focus()});let g=et("div","ioviewer-background-setting"),p=et("label","",Z("display.background")),M=et("input");Object.assign(M,{type:"color",value:r}),p.append(M);let T=et("button","ioviewer-text-button",Z("display.backgroundReset"));T.type="button",T.disabled=!0;let S=()=>{o(M.value),T.disabled=M.value===r};M.addEventListener("input",S),T.addEventListener("click",()=>{M.value=r,M.focus(),S()}),g.append(p,T),h.element.append(g),t.setActive("grids",s.visible),s.count>0&&t.setHandler("grids",()=>{s.setVisible(!s.visible),t.setActive("grids",s.visible)});let v=Hh(i,l("opacity"),Z("tool.opacity"));v.element.classList.add("ioviewer-opacity");let b=et("input","ioviewer-opacity-slider");Object.assign(b,{type:"range",min:"10",max:"100",step:"1",value:"100"}),b.setAttribute("aria-label",Z("opacity.label"));let A=et("output","ioviewer-opacity-value"),x=()=>A.textContent=Z("opacity.value").replace("{value}",b.value);b.addEventListener("input",()=>{e.setOpacity(Number(b.value)/100),x()}),x();let w=et("div","ioviewer-opacity-head");return w.append(et("span","",Z("opacity.label")),A),v.element.append(w,b),t.setHandler("opacity",v.toggle),[h,v]}var Wy=3e3;function Rl(i,t){let e=et("button",i);return e.type="button",e.setAttribute("title",t),e.append(et("span","ioviewer-row-name",t)),e}function Mp({shell:i,toolbar:t,controls:e,scene:n,sections:s,selection:r,restoreLinkedModels:o,views:a,bcfTopics:l}){let c=null,h=et("button","ioviewer-text-button ioviewer-tour");h.type="button";function d(T){T.sections!=null&&s.restore(T.sections),T.hiddenElements!=null&&n.setHiddenElements(T.hiddenElements),T.visibleElements!=null&&n.isolate(T.visibleElements),T.hiddenModelKeys!=null&&o(T.hiddenModelKeys),T.selectedElements!=null&&r.set(T.selectedElements);let S=T.camera.projection==="orthographic";e.setProjection(S?"orthographic":"perspective"),t.setActive("projection",S),e.restoreViewCamera(T.camera)}function u(){d(a[c.next]),c.next=(c.next+1)%a.length;let T=()=>{e.animating?c.frame=requestAnimationFrame(T):c.timer=setTimeout(u,Wy)};c.frame=requestAnimationFrame(T)}let f=T=>h.contains(T.target),m=T=>!f(T)&&g(),_=T=>{f(T)&&(T.key==="Enter"||T.key===" ")||(T.key==="Escape"&&(T.preventDefault(),T.stopPropagation()),g())};function g(){c&&(cancelAnimationFrame(c.frame),clearTimeout(c.timer),c=null,window.removeEventListener("pointerdown",m,!0),window.removeEventListener("wheel",g,!0),window.removeEventListener("keydown",_,!0),M())}function p(){c={next:0,frame:0,timer:0},window.addEventListener("pointerdown",m,!0),window.addEventListener("wheel",g,!0),window.addEventListener("keydown",_,!0),M(),u()}function M(){let T=Z(c?"views.stop":"views.tour");h.replaceChildren(),h.insertAdjacentHTML("afterbegin",c?re.pause:re.play),h.append(et("span","",T)),h.setAttribute("aria-pressed",String(!!c))}h.addEventListener("click",()=>c?g():p()),M(),i.registerPanel("views",{icon:re.views,title:Z("panel.views"),visible:a.length>0,render:T=>{let S=et("div","ioviewer-row-list");for(let v of a){let b=Rl("ioviewer-row ioviewer-view",String(v.name??""));b.addEventListener("click",()=>d(v)),S.append(b)}T.append(h,S)}}),i.registerPanel("bcf",{icon:re.bcf,title:Z("panel.bcf"),visible:l.length>0,render:T=>{let S=et("div","ioviewer-row-list");for(let v of l){let b=et("details","ioviewer-bcf-topic");b.append(et("summary","",v.title)),v.status&&b.append(et("p","ioviewer-bcf-status",v.status)),v.description&&b.append(et("p","ioviewer-bcf-description",v.description)),v.viewpoints.length||b.append(et("p","ioviewer-bcf-status",Z("bcf.noView"))),v.viewpoints.forEach((A,x)=>{let w=Z("bcf.viewpoint").replace("{index}",String(x+1)),R=Rl("ioviewer-row ioviewer-view",w);if(R.addEventListener("click",()=>d(A)),b.append(R),A.missingComponents||A.ambiguousComponents){let D=Z("bcf.components").replace("{missing}",String(A.missingComponents)).replace("{ambiguous}",String(A.ambiguousComponents));b.append(et("p","ioviewer-bcf-status",D))}}),S.append(b)}T.append(S)}})}function bp(i,t){let e=[];for(let[n,s]of[[i.element1Id,i.element1Name],[i.element2Id,i.element2Name]]){let r=n!=null?t.findIndex(o=>o.id!=null&&String(o.id)===String(n)&&!o.mesh):Xy(t,s);r>=0&&!e.includes(r)&&e.push(r)}return e}function Xy(i,t){if(t==null)return-1;let e=i.findIndex(n=>n.name===t);return e>=0&&i.findIndex((n,s)=>s>e&&n.name===t)<0?e:-1}var qy=["New","Active","Reviewed","Approved","Resolved"],Vh=27,Yy=8,$y=14,Zy=2,Jy=new P(1,-1,.8).normalize();function Sp({shell:i,tests:t,elements:e,scene:n,controls:s,selection:r}){let o=new Re;o.name="clash-marker";let a=new fe;a.setAttribute("position",new Ae(new Float32Array(3),3));let l={color:"#ef4444",depthTest:!1,depthWrite:!1,transparent:!0},c=new Sn(a,new zn({...l,size:$y,sizeAttenuation:!1}));c.frustumCulled=!1,c.renderOrder=1002,o.add(c),o.visible=!1;let h=null,d=null;function u(){o.visible=!1,h?.removeAttribute("aria-current"),h=null,d=null,s.setExtraBounds("clash",null)}function f(M,T){let S=bp(M,e);S.length?r.set(S):r.clear();let v=new P(...M.point),b=0;for(let w of S){let R=n.elementBox(w);R.isEmpty()||(b=Math.max(b,...R.getSize(new P).toArray()))}let A=s.camera.position.clone().sub(s.target);A.lengthSq()<1e-12&&A.copy(Jy);let x=Math.max(3*b,Zy);s.animateTo({position:A.normalize().multiplyScalar(x).add(v),target:v}),a.attributes.position.setXYZ(0,v.x,v.y,v.z),a.attributes.position.needsUpdate=!0,o.visible=!0,h?.removeAttribute("aria-current"),h=T,d=M,T.setAttribute("aria-current","true"),s.setExtraBounds("clash",new ae(v.clone(),v.clone()))}function m(M){let T=Rl("ioviewer-row ioviewer-clash",String(M.name??""));T.setAttribute("title",`${M.name??""}: ${M.element1Name??""} \u2014 ${M.element2Name??""}`);let S=qy.includes(M.status),v=et("span","ioviewer-clash-status",S?Z(`clash.${M.status}`):String(M.status??""));S&&(v.dataset.status=M.status);let b=typeof M.distance=="number"?zh(M.distance):"";return T.append(v,et("span","ioviewer-clash-distance",b)),M===d&&(h=T,T.setAttribute("aria-current","true")),T.addEventListener("click",()=>f(M,T)),T}function _(M,T){let S=et("div","ioviewer-clash-test"),v=et("button","ioviewer-row ioviewer-clash-header");v.type="button",v.setAttribute("aria-expanded","true");let b=`${M.name??""} (${M.clashes.length})`;v.setAttribute("title",b),v.insertAdjacentHTML("afterbegin",re.chevron),v.append(et("span","ioviewer-row-name",b));let A=et("div","ioviewer-clash-list");return A.style.height=`${Math.max(0,M.clashes.length*Vh-1)}px`,v.addEventListener("click",()=>{A.hidden=!A.hidden,v.setAttribute("aria-expanded",String(!A.hidden)),T()}),S.append(v,A),{box:S,list:A,clashes:M.clashes,rows:new Map}}function g({list:M,clashes:T,rows:S},{start:v,end:b}){for(let[x,w]of S)(x<v||x>=b)&&(w.remove(),S.delete(x));let A=null;for(let x=b-1;x>=v;x--){let w=S.get(x);w||(w=m(T[x]),w.style.top=`${x*Vh}px`,M.insertBefore(w,A),S.set(x,w)),A=w}}function p(M){if(!t.length)return;M.classList.add("ioviewer-clashes-body");let T=t.map(v=>_(v,S));for(let v of T)M.append(v.box);function S(){let v=M.scrollTop,b=M.clientHeight,A=T.map(({list:x,clashes:w})=>b&&!x.hidden?Ih(v-x.offsetTop,Vh,b,w.length,Yy):{start:0,end:0});T.forEach((x,w)=>g(x,A[w]))}M.addEventListener("scroll",S),M.addEventListener("focusin",S),new ResizeObserver(S).observe(M)}return i.registerPanel("clashes",{icon:re.clashes,title:Z("panel.clashes"),visible:t.length>0,render:p,onClose:()=>o.visible&&u()}),{group:o}}var Ky=["construct","demolish","temporary"],jy=Date.parse("0002-01-01T00:00:00Z");function wp(i){let t=typeof i=="string"?Date.parse(i):NaN;return t>=jy?t:NaN}function Ep(i,t){let e=new Map(t.flatMap((o,a)=>o.mesh||o.id==null?[]:[[String(o.id),a]])),n=[];for(let o of Array.isArray(i?.tasks)?i.tasks:[]){let a=wp(o?.start),l=wp(o?.end);if(!(a<=l))continue;let c=Ky.includes(o.type)?o.type:"construct",h=Array.isArray(o.attachedElements)?o.attachedElements:[];n.push({name:o.name,type:c,start:a,end:l,elements:h.map(d=>e.get(String(d))).filter(d=>d!==void 0)})}let s=n.reduce((o,a)=>Math.min(o,a.start),1/0),r=n.reduce((o,a)=>Math.max(o,a.end),-1/0);return{start:s,end:r,tasks:n}}function Tp(i,t){let e=new Set,n=new Map;for(let s of i){let r=t<s.start,o=t>s.end,a=s.type==="construct"?r:s.type==="demolish"?o:r||o;for(let l of s.elements)a?e.add(l):!r&&!o&&n.set(l,s.type)}for(let s of e)n.delete(s);return{hidden:e,active:n}}var Qy=864e5,tM=["1","5","15"],eM={construct:"#22c55e",demolish:"#ef4444",temporary:"#a855f7"};function Ap({root:i,shell:t,timeliner:e,elements:n,scene:s}){let r=Ep(e,n);if(r.tasks.length===0)return t.registerPanel("timeliner",{icon:re.timeliner,title:Z("panel.timeliner"),visible:!1,render:()=>{}}),null;let o=new Intl.DateTimeFormat(void 0,{dateStyle:"short",timeZone:"UTC"}),a=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}),l=r.start,c=1,h=0,d=0,u=!1,f=new Set,m=new Map,_=et("div","ioviewer-player ioviewer-floating");_.setAttribute("role","group"),_.setAttribute("aria-label",Z("player.title")),_.hidden=!0;let g=Qe("ioviewer-icon-button ioviewer-player-play",re.play,Z("player.play"));g.addEventListener("click",()=>h?N():D());let p=et("output","ioviewer-player-date"),M=et("input","ioviewer-player-slider");Object.assign(M,{type:"range",min:String(r.start),max:String(r.end),step:"any"}),M.setAttribute("aria-label",Z("player.date")),M.addEventListener("input",()=>A(Number(M.value)));let T=Xr(Z("player.speed"),tM.map(L=>[L,`${L}\xD7`]),L=>{c=Number(L),T.update(L)});T.update(String(c));let S=Qe("ioviewer-panel-close",re.close,Z("close"));S.addEventListener("click",w),_.append(g,p,M,T.element,S),i.append(_),new ResizeObserver(()=>{let L=_.hidden?0:_.offsetHeight+8;i.style.setProperty("--player-space",`${L}px`)}).observe(_);function b(){let L=Tp(r.tasks,l),U=[...f].filter(F=>!L.hidden.has(F)),W=[...L.hidden].filter(F=>!f.has(F));f=L.hidden;let V=[...m.keys()].filter(F=>L.active.get(F)!==m.get(F)),O=new Map;for(let[F,G]of L.active)m.get(F)!==G&&(O.has(G)||O.set(G,[]),O.get(G).push(F));m=L.active,U.length&&s.setLayerHidden("schedule",U,!1),W.length&&s.setLayerHidden("schedule",W,!0),V.length&&s.setTint(V,null);for(let[F,G]of O)s.setTint(G,eM[F])}function A(L){l=Math.min(Math.max(L,r.start),r.end),M.value=String(l),p.textContent=a.format(l),u&&b()}function x(){u||(u=!0,_.hidden=!1,A(r.start))}function w(){u&&(N(),u=!1,s.setTint([...m.keys()],null),m=new Map,f=new Set,s.clearLayer("schedule"),_.hidden=!0)}function R(L){A(l+Math.max(L-d,0)/1e3*c*Qy),d=L,l>=r.end?N():h=requestAnimationFrame(R)}function D(){x(),!h&&(l>=r.end&&A(r.start),d=performance.now(),h=requestAnimationFrame(R),B())}function N(){cancelAnimationFrame(h),h=0,B()}function B(){let L=Z(h?"player.pause":"player.play");g.innerHTML=h?re.pause:re.play,g.title=L,g.setAttribute("aria-label",L)}return t.registerPanel("timeliner",{icon:re.timeliner,title:Z("panel.timeliner"),render:L=>{let U=et("button","ioviewer-text-button ioviewer-player-open");U.type="button",U.insertAdjacentHTML("afterbegin",re.play),U.append(et("span","",Z("player.play"))),U.addEventListener("click",D);let W=et("div","ioviewer-row-list");for(let V of r.tasks){let O=String(V.name??""),F=et("div","ioviewer-row ioviewer-task");F.dataset.type=V.type,F.setAttribute("title",`${O} \xB7 ${Z(`task.${V.type}`)}`);let G=`${o.format(V.start)} \u2013 ${o.format(V.end)}`;F.append(et("span","ioviewer-row-name",O),et("span","ioviewer-task-dates",G)),W.append(F)}L.append(U,W)}}),{open:x,close:w,play:D,pause:N,setDate:A,get date(){return l},get isOpen(){return u}}}function Rp({shell:i,files:t,elements:e,scene:n}){let s=t.map(o=>({file:o,members:o.members??e.flatMap((a,l)=>a.link!=null&&(a.link===o.name||a.link===o.path)?[l]:[]),input:et("input")})),r=()=>n.replaceLayerHidden("links",s.flatMap(({input:o,members:a})=>o.checked?[]:a));return i.registerPanel("links",{icon:re.links,title:Z("panel.links"),visible:s.length>0,render:o=>{let a=et("div","ioviewer-row-list");for(let l of s){let c=String(l.file.name??""),h=et("label","ioviewer-row ioviewer-check ioviewer-link");h.setAttribute("title",`${c} (${l.file.path??""})`);let{input:d}=l;d.type="checkbox",d.checked=l.members.length===0||l.file.visible!==!1,d.disabled=l.members.length===0,d.addEventListener("change",r),h.append(d,et("span","ioviewer-row-name",c),et("span","ioviewer-row-count",String(l.members.length))),a.append(h)}o.append(a),r()}}),o=>{let a=new Set(o);for(let{file:l,input:c}of s)c.checked=c.disabled||!a.has(l.key);r()}}function Cp(i,t,e){let n=i.filter(Number.isFinite).sort((a,l)=>a-l),s=[];for(let a of n){let l=s.at(-1);!l||a-l.at(-1)>2/2?s.push([a]):l.push(a)}let r=[];for(let a of s){if(a.length<2)continue;let l=r.at(-1);l&&a[Math.floor(a.length/2)]-l[Math.floor(l.length/2)]<2?l.push(...a):r.push(a)}if(r.length<2)return[];let o=[Math.min(t,n[0])];for(let a=1;a<r.length;a++)o.push((r[a-1].at(-1)+r[a][0])/2);return o.push(Math.max(e,n.at(-1))),o.slice(1).map((a,l)=>({min:o[l],max:a}))}function Ip(i,t){return!i||t>=i.min&&t<=i.max}function Pp(i,t,e,n){let s=Math.min(16,Math.max(.5,i.zoom*t)),r=1/i.zoom-1/s;return{...i,zoom:s,x:i.x+e*i.side*r,y:i.y-n*i.side*r}}function Lp(){let i=new fn,t=new Le(72,1,.15,20);t.up.set(0,0,1);let e=new P,n=new Ue({uniforms:{size:{value:1}},vertexShader:["attribute float intensity;","varying float signal;","uniform float size;","void main() {","  signal = intensity;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = size;","}"].join(`
`),fragmentShader:["varying float signal;","void main() {","  vec2 offset = gl_PointCoord - 0.5;","  if (signal == 0.0 || dot(offset, offset) > 0.25) discard;","  gl_FragColor = vec4(vec3(0.12 + 0.88 * signal), 1.0);","}"].join(`
`)}),s=new Ne(1,1,{depthTexture:new kn(1,1)}),r=new Gt,o=new fn,a=new ki,l=new Ue({depthTest:!1,depthWrite:!1,uniforms:{levels:{value:s.texture},depth:{value:s.depthTexture},sampleStep:{value:new Gt},range:{value:new Gt}},vertexShader:["varying vec2 uvScreen;","void main() { uvScreen = uv; gl_Position = vec4(position, 1.0); }"].join(`
`),fragmentShader:["uniform sampler2D levels, depth;","uniform vec2 sampleStep, range;","varying vec2 uvScreen;","float distanceAt(float z) { return range.x * range.y / mix(range.y, range.x, z); }","void main() {","  float center = texture2D(depth, uvScreen).r;","  float anchor = center;","  if (center >= 1.0) {","    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++)","      anchor = min(anchor, texture2D(depth, uvScreen + vec2(float(x), float(y)) * sampleStep).r);","  }","  float total = 0.0, weight = 0.0;","  if (anchor < 1.0) {","    float d = distanceAt(anchor);","    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {","      vec2 p = uvScreen + vec2(float(x), float(y)) * sampleStep;","      float z = texture2D(depth, p).r;","      if (z >= 1.0 || abs(distanceAt(z) - d) > max(0.08, d * 0.015)) continue;","      float w = 1.0 / (1.0 + float(x * x + y * y));","      total += texture2D(levels, p).r * w;","      weight += w;","    }","  }","  gl_FragColor = vec4(weight > 0.0 ? vec3(total / weight) : vec3(0.063, 0.075, 0.094), 1.0);","}"].join(`
`)}),c=new pe(new ln(2,2),l);return c.frustumCulled=!1,o.add(c),{setScan(h,d){i.clear();for(let m of h){if(!m.geometry.getAttribute("intensity"))continue;let _=new Sn(m.geometry,n);_.matrixAutoUpdate=!1,_.matrix.copy(m.matrixWorld),i.add(_)}t.position.copy(d);let u=new ae().setFromObject(i),f=u.getSize(e).length();t.far=Math.max(20,f+d.distanceTo(u.getCenter(e)))},draw(h,d,u){t.aspect=d.aspect,t.fov=d.fov,t.updateProjectionMatrix(),t.lookAt(e.copy(t.position).add(u));let f=h.getPixelRatio();n.uniforms.size.value=5.5*f,h.getDrawingBufferSize(r),s.setSize(r.x,r.y),l.uniforms.sampleStep.value.set(2*f/r.x,2*f/r.y),l.uniforms.range.value.set(t.near,t.far),h.setRenderTarget(s),h.render(i,t),h.setRenderTarget(null),h.render(o,a)}}}var nM=new Intl.NumberFormat(ai,{maximumFractionDigits:2,minimumFractionDigits:2}),Cl=i=>`${nM.format(i)} ${Z("scanMap.metres")}`;function $n(i,t,e){let n=document.createElement("button");return n.type="button",n.textContent=t,n.title=i,n.setAttribute("aria-label",i),n.addEventListener("click",e),n}function iM(i,t){return[i*.005,t*.005]}function sM(i,t,e){return i.set(Math.cos(e)*Math.cos(t),Math.cos(e)*Math.sin(t),Math.sin(e))}function rM(i,t,e,n,s,r,o){let a=new Gn;a.setFromCamera(new Gt(n,s),i),a.ray.origin.copy(t),a.near=.05,a.params.Points.threshold=.12;let l=new P,c=new P;for(let h of a.intersectObjects(e,!1))if(l.fromBufferAttribute(h.object.geometry.attributes.position,h.index).applyMatrix4(h.object.matrixWorld),c.copy(l).sub(t).project(i),Math.hypot((c.x-n)*r/2,(c.y-s)*o/2)<=14)return l.z}function Dp(i,t,e,n,s,r){if(!e.count)return;let o=new ae().setFromObject(e.root);if(o.isEmpty())return;let a=o.getSize(new P),l=o.getCenter(new P),c={x:l.x,y:l.y,side:Math.max(a.x,a.y,.01)*1.12,zoom:1},h={...c},d=I=>50+100*(I-h.x)*h.zoom/h.side,u=I=>50-100*(I-h.y)*h.zoom/h.side,f=I=>Math.min(96,Math.max(4,I)),m=(I,ut,Et=!1)=>{let C=d(ut.x),y=u(ut.y);return I.style.left=`${Et?f(C):C}%`,I.style.top=`${Et?f(y):y}%`,C>=0&&C<=100&&y>=0&&y<=100},_=t.meta.rtcOffset?.[2]??0,g=t.meta.panoramas??[],p=g.map(I=>new P(...I.position)),M=`ioviewer.scan-levels.v1:${location.pathname}`,T=()=>Cp(p.map(I=>I.z+_),o.min.z+_,o.max.z+_),S=null;try{let I=JSON.parse(localStorage.getItem(M));Array.isArray(I)&&(S=I.filter(ut=>Number.isFinite(ut?.min)&&Number.isFinite(ut.max)&&ut.max>ut.min))}catch{S=null}let v=S??T(),b=-1,A=!0,x=I=>Ip(v[b],I+_),w=document.createElement("details");w.className="ioviewer-floating ioviewer-scan-map",w.open=!matchMedia("(max-width: 600px)").matches;let R=document.createElement("summary");R.textContent=Z("scanMap.title");let D=document.createElement("div");D.className="scan-map-plot";let N=document.createElement("canvas");N.width=N.height=300,N.setAttribute("role","img"),N.setAttribute("aria-label",Z("scanMap.plan")),N.tabIndex=0;let B=document.createElement("span");B.className="scan-map-camera",B.setAttribute("aria-hidden","true");let L=document.createElement("span");L.className="scan-map-axes",L.textContent="Y \u2191";let U=document.createElement("span");U.className="scan-map-scale",D.append(N,B,L,U),w.append(R,D),i.append(w);let W=e.root.children.reduce((I,ut)=>I+ut.geometry.attributes.position.count,0),V=Math.max(1,Math.ceil(W/6e4)),O=e.root.children.map(I=>{let ut=I.geometry.attributes.position,Et=new Float32Array(Math.ceil(ut.count/V)*3),C=new P;for(let y=0,q=0;y<ut.count;y+=V,q+=3)C.fromBufferAttribute(ut,y).applyMatrix4(I.matrixWorld).toArray(Et,q);return Et}),F=0,G=()=>{if(F=0,!w.open)return;let I=N.getContext("2d");if(!I)return;I.clearRect(0,0,300,300),I.fillStyle="rgba(160, 185, 201, .33)";for(let[C,y]of O.entries())if(e.root.children[C].visible)for(let q=0;q<y.length;q+=3)x(y[q+2])&&I.fillRect(d(y[q])*3,u(y[q+1])*3,2,2);let ut=h.side/h.zoom,Et=10**Math.floor(Math.log10(ut/3));U.style.width=`${Et/ut*100}%`,U.textContent=`${Et.toLocaleString(ai)} ${Z("scanMap.metres")}`;for(let[C,y]of p.entries())dt[C].hidden=!m(dt[C],y)||!x(y.z);nt()},Y=()=>{F||(F=requestAnimationFrame(G))},z=new P,$=null,nt=()=>{if($){B.hidden=!x($.position.z),m(B,$.position,!0),B.style.rotate=`${Math.PI/2-$.yaw}rad`;return}B.hidden=!1,m(B,s.camera.position,!0),s.camera.getWorldDirection(z),B.style.rotate=`${Math.atan2(z.x,z.y)}rad`};w.addEventListener("toggle",Y),n.root.addEventListener("change",I=>{I.detail.kind==="visibility"&&Y()}),s.addEventListener("change",nt);let lt=document.createElement("div");lt.className="scan-map-controls";let at=document.createElement("select");at.setAttribute("aria-label",Z("scanMap.size"));for(let I of["small","medium","large"])at.add(new Option(Z(`scanMap.${I}`),I));at.value=matchMedia("(max-width: 600px)").matches?"small":"medium",i.dataset.scanMapSize=at.value,at.addEventListener("change",()=>{i.dataset.scanMapSize=at.value});let X=(I,ut=0,Et=0)=>{h=Pp(h,I,ut,Et),Y()},tt=()=>{h={...c},Y()};lt.append(at,$n(Z("scanMap.zoomOut"),"\u2212",()=>X(.8)),$n(Z("scanMap.zoomIn"),"+",()=>X(1.25)),$n(Z("scanMap.reset"),"\u21BA",tt)),w.insertBefore(lt,D),N.addEventListener("wheel",I=>{I.preventDefault();let ut=N.getBoundingClientRect();X(I.deltaY<0?1.15:1/1.15,(I.clientX-ut.left)/ut.width-.5,(I.clientY-ut.top)/ut.height-.5)},{passive:!1});let ht;N.addEventListener("pointerdown",I=>{I.button!==0||ht||(N.setPointerCapture(I.pointerId),ht={id:I.pointerId,x:I.clientX,y:I.clientY})}),N.addEventListener("pointermove",I=>{if(ht?.id!==I.pointerId)return;let ut=h.side/(h.zoom*Math.max(1,N.clientWidth));h.x-=(I.clientX-ht.x)*ut,h.y+=(I.clientY-ht.y)*ut,ht.x=I.clientX,ht.y=I.clientY,Y()}),N.addEventListener("lostpointercapture",I=>{I.pointerId===ht?.id&&(ht=void 0)}),N.addEventListener("keydown",I=>{let ut={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[I.key];if(ut){let Et=h.side/h.zoom/10;h.x+=ut[0]*Et,h.y+=ut[1]*Et,Y()}else if(I.key==="+"||I.key==="="||I.key==="-")X(I.key==="-"?.8:1.25);else if(I.key==="0")tt();else return;I.preventDefault(),I.stopPropagation()});let Rt=document.createElement("div");Rt.className="scan-map-controls";let ft=document.createElement("select");ft.setAttribute("aria-label",Z("scanMap.levels"));let Ot=document.createElement("p");Ot.className="scan-map-feedback",Ot.setAttribute("role","status");function Ct(){try{localStorage.setItem(M,JSON.stringify(v))}catch{Ot.textContent=Z("scanMap.levelTemporary")}}function It(){ft.replaceChildren(new Option(Z("scanMap.allLevels"),"-1")),v.forEach((I,ut)=>ft.add(new Option(`${Z("scanMap.level").replace("{n}",ut+1)} \xB7 ${Cl(I.min)} \u2013 ${Cl(I.max)}`,String(ut)))),ft.value=String(b),qt.disabled=b<0;for(let[I,ut]of p.entries())ie.options[I+1].hidden=!x(ut.z);Y(),r()}ft.addEventListener("change",()=>{b=Number(ft.value),Ot.textContent="",It()});let Xt=$n(Z("scanMap.addLevel"),"+",()=>{if(Qt.isClosed()){let I=p.findIndex(ut=>x(ut.z));zt(Math.max(0,I))}Qt.pickLevel()});Xt.disabled=!g.length;let $t=$n(Z("scanMap.autoLevels"),Z("scanMap.autoButton"),()=>{let I=T(),ut=I.filter(Et=>!v.some(C=>C.min<Et.max&&Et.min<C.max));Ot.textContent=Z(I.length?ut.length?"scanMap.levelsAdded":"scanMap.levelsExist":"scanMap.noLevels"),ut.length&&(v.push(...ut),Ct(),It())});$t.disabled=p.length<2;let qt=$n(Z("scanMap.removeLevel"),"\xD7",()=>{b<0||(v.splice(b,1),b=-1,Ot.textContent="",Ct(),It())});if(Rt.append(ft,Xt,$t,qt),g.length){let I=$n(Z("scanMap.spheres"),"\u25C9",()=>{A=!A,I.setAttribute("aria-pressed",String(A)),r()});I.setAttribute("aria-pressed","true"),Rt.append(I)}w.append(Rt,Ot);let Qt=g.length?oM(i,t,e,zt,I=>{$=I,I||dt.forEach(ut=>ut.classList.remove("current")),nt()},I=>{b=v.push(I)-1,Ot.textContent=Z("scanMap.levelAdded"),Ct(),It()}):null,ie=document.createElement("select");ie.setAttribute("aria-label",Z("scanMap.choosePhoto"));let ge=new Option(Z("scanMap.choosePhoto"),"");ge.disabled=!0,ie.add(ge);let dt=[];for(let[I,ut]of g.entries()){let Et=ut.name||t.meta.elements[ut.element].name||String(I+1);ie.add(new Option(Et,String(I)));let C=document.createElement("button");C.type="button",C.className="scan-map-station",C.title=Et,C.setAttribute("aria-label",`${Z("scanMap.photo")} \xB7 ${Et}`),C.addEventListener("click",()=>zt(I)),dt.push(C),D.append(C)}ie.value="",ie.addEventListener("change",()=>zt(Number(ie.value))),ie.hidden=!g.length,w.append(ie),It(),!S&&v.length&&Ct();function zt(I,ut=!1){w.open=!0,ie.value=String(I),dt.forEach((Et,C)=>Et.classList.toggle("current",I===C)),Qt.open(I,ut),ie.value=""}return{open:zt,showSphere:(I,ut)=>A&&x(ut)&&n.isVisible(I)}}function oM(i,t,e,n,s,r){let o=document.createElement("section");o.className="ioviewer-floating scan-photo",o.setAttribute("aria-label",Z("scanMap.photo")),o.hidden=!0;let a=document.createElement("header"),l=document.createElement("span"),c=document.createElement("div");c.className="scan-photo-actions";let h=$n(Z("scanMap.enlargePhoto"),Z("scanMap.enlargePhoto"),()=>{let dt=o.classList.toggle("is-expanded"),zt=Z(dt?"scanMap.shrinkPhoto":"scanMap.enlargePhoto");h.textContent=h.title=zt,h.setAttribute("aria-label",zt),h.setAttribute("aria-pressed",String(dt))});h.setAttribute("aria-pressed","false");let d=document.createElement("button");d.type="button",d.textContent=Z("close"),d.addEventListener("click",It);let u=!1,f=$n(Z("scanMap.intensity"),Z("scanMap.intensity"),()=>{u=!u,ge(!1)});f.className="scan-photo-intensity",f.hidden=!0,c.append(f,h,d),a.append(l,c);let m=document.createElement("canvas");m.tabIndex=0,m.setAttribute("aria-label",Z("scanMap.photoControls"));let _=document.createElement("p");_.setAttribute("role","status");let g=document.createElement("div");g.className="scan-photo-view";let p=document.createElement("span");p.className="scan-photo-crosshair",p.setAttribute("aria-hidden","true");let M=document.createElement("div");M.className="scan-photo-level",M.hidden=!0;let T=document.createElement("span");T.setAttribute("role","status"),M.append(T,$n(Z("scanMap.cancel"),Z("scanMap.cancel"),$t)),g.append(m,p,_),o.append(a,M,g),i.append(o);let S=t.meta.panoramas.map((dt,zt)=>{let I=dt.name||t.meta.elements[dt.element].name||String(zt+1),ut=document.createElement("button");return ut.className="scan-photo-link",ut.type="button",ut.title=I,ut.setAttribute("aria-label",Z("scanMap.goToStation").replace("{name}",I)),ut.hidden=!0,ut.addEventListener("click",()=>n(zt,!0)),g.append(ut),{photo:dt,name:I,button:ut,position:new P(...dt.position)}}),v=t.readView(t.meta.points.element),b=new Gn;b.params.Points.threshold=.12,b.near=.25;let A=new P,x=new P,w=new P,R=[],D=[],N=!1,B,L=t.meta.rtcOffset?.[2]??0,U,W,V,O=0,F=!1,G=!1,Y=0,z=0,$=null,nt,lt,at=new fn,X=new Le(72,1,.1,20);X.up.set(0,0,1);let tt=new Hn(10,56,28);tt.rotateX(Math.PI/2);let ht=new Ke({side:Be}),Rt=new pe(tt,ht);at.add(Rt);let ft=()=>{if(!(o.hidden||!W&&!G)){U.setSize(m.clientWidth,m.clientHeight,!1),X.aspect=m.clientWidth/Math.max(1,m.clientHeight),X.updateProjectionMatrix(),X.lookAt(sM(A,Y,z)),G?V.draw(U,X,A):U.render(at,X),X.getWorldDirection(A);for(let dt of R){if(N){dt.button.hidden=!0;continue}w.copy(dt.position).sub(nt.position).normalize(),x.copy(w).project(X);let zt=w.dot(A)>0&&Math.abs(x.x)<.92&&Math.abs(x.y)<.88;dt.button.hidden=!zt,zt&&(dt.button.style.left=`${(1+x.x)*50}%`,dt.button.style.top=`${(1-x.y)*50}%`)}s({position:nt.position,yaw:Y})}},Ot=(dt,zt)=>{Y+=dt,z=le.clamp(z+zt,-1.55,1.55),ft()};new ResizeObserver(ft).observe(m),m.addEventListener("pointerdown",dt=>{dt.button!==0||$||(m.setPointerCapture(dt.pointerId),$={id:dt.pointerId,x:dt.clientX,y:dt.clientY,moved:!1})}),m.addEventListener("pointermove",dt=>{$?.id===dt.pointerId&&(N&&!$.moved&&Math.hypot(dt.clientX-$.x,dt.clientY-$.y)<5||($.moved=!0,Ot(...iM(dt.clientX-$.x,dt.clientY-$.y)),$.x=dt.clientX,$.y=dt.clientY))}),m.addEventListener("pointerup",dt=>{if($?.id!==dt.pointerId||$.moved||!N)return;let zt=m.getBoundingClientRect();Qt((dt.clientX-zt.left)*2/zt.width-1,1-(dt.clientY-zt.top)*2/zt.height)}),m.addEventListener("lostpointercapture",dt=>{$?.id===dt.pointerId&&($=null)}),m.addEventListener("keydown",dt=>{if(N&&dt.key==="Enter"){dt.preventDefault(),Qt(0,0);return}let zt={ArrowLeft:[.12,0],ArrowRight:[-.12,0],ArrowUp:[0,.12],ArrowDown:[0,-.12]}[dt.key];zt&&(dt.preventDefault(),dt.stopPropagation(),Ot(...zt))}),m.addEventListener("wheel",dt=>{dt.preventDefault(),X.fov=le.clamp(X.fov+Math.sign(dt.deltaY)*5,32,95),ft()},{passive:!1}),o.addEventListener("keydown",dt=>{dt.key==="Escape"&&(N?$t():It()),dt.stopPropagation()});function It(){o.hidden=!0,$t(),O++,$=null,Xt(),s(null),lt?.focus()}function Xt(){G=!1,W?.dispose(),W=void 0,ht.map=null;for(let dt of R)dt.button.hidden=!0;R=[]}function $t(){N=!1,B=void 0,o.classList.remove("is-picking"),M.hidden=!0,ft()}function qt(){N=!0,B=void 0,o.classList.add("is-picking"),T.textContent=Z("scanMap.pickLower"),M.hidden=!1,ft(),(W||G)&&m.focus()}function Qt(dt,zt){if(!W&&!G)return;let I=rM(X,nt.position,D,dt,zt,m.clientWidth,m.clientHeight);if(I===void 0){T.textContent=Z(B===void 0?"scanMap.noLowerHit":"scanMap.noUpperHit");return}let ut=I+L;B===void 0?(B=ut,T.textContent=Z("scanMap.pickUpper").replace("{z}",Cl(ut))):ut<=B?T.textContent=Z("scanMap.upperAboveLower").replace("{z}",Cl(B)):(r({min:B,max:ut}),$t())}function ie(dt,zt){let I=o.hidden;if(I&&(lt=document.activeElement),Xt(),nt=S[dt],o.hidden=!1,l.textContent=nt.name,Rt.rotation.z=le.degToRad(nt.photo.yaw),D=e.root.children.filter((ut,Et)=>v[Et]===nt.photo.element),F=D.some(ut=>ut.geometry.getAttribute("intensity")),f.hidden=!F&&!nt.photo.intensity,R=S.filter(ut=>{if(ut===nt)return!1;let Et=w.copy(ut.position).sub(nt.position).length();return Et<=.25?!1:(b.set(nt.position,w.multiplyScalar(1/Et)),b.far=Et-.25,!b.intersectObjects(D,!1).length)}),I||!zt){let ut=R.reduce((Et,C)=>!Et||C.position.distanceToSquared(nt.position)<Et.position.distanceToSquared(nt.position)?C:Et,null);ut?(w.copy(ut.position).sub(nt.position),Y=Math.atan2(w.y,w.x),z=le.clamp(Math.atan2(w.z,Math.hypot(w.x,w.y)),-1.55,1.55)):(Y=Rt.rotation.z,z=0),X.fov=72}ge(!0)}function ge(dt){let zt=++O,I=u&&(F||!!nt.photo.intensity);G=!1,f.setAttribute("aria-pressed",String(I)),m.style.visibility="hidden",_.textContent=Z("scanMap.loading");let ut=()=>{zt===O&&(_.textContent=Z("scanMap.photoError"))},Et;try{if(U??(U=new Ei({canvas:m,antialias:!0})),U.setPixelRatio(Math.min(devicePixelRatio,2)),I&&F){V??(V=Lp()),V.setScan(D,nt.position),G=!0,_.textContent="",m.style.visibility="visible",ft(),dt&&m.focus();return}let C=I?nt.photo.intensity:nt.photo.image;Et=URL.createObjectURL(new Blob([t.readView(C)],{type:"image/jpeg"}))}catch{ut();return}new ur().load(Et,C=>{if(URL.revokeObjectURL(Et),zt!==O||C.image.width!==2*C.image.height){C.dispose(),ut();return}W?.dispose(),W=C,W.colorSpace=Me,ht.map=W,ht.needsUpdate=!0,_.textContent="",m.style.visibility="visible",ft(),dt&&m.focus()},void 0,()=>{URL.revokeObjectURL(Et),ut()})}return{open:ie,pickLevel:qt,isClosed:()=>o.hidden}}var Vs=7;function Np(i){if(!i?.length)return null;let t=i.map(({position:l})=>new P(...l)),e=new cr({color:"#72bfff",depthTest:!1,depthWrite:!1}),n=new _i(new Hn(1,12,8),e,i.length);n.count=0,n.frustumCulled=!1,n.renderOrder=10,n.instanceMatrix.setUsage(Ar);let s=[],r=new Zt,o=new P,a=new Gt;return{mesh:n,update(l,c,h){if(n.count=0,s.length=0,!(c.width<=0||c.height<=0)){for(let[d,u]of t.entries()){if(!h(i[d].element,u.z))continue;let f=-o.copy(u).applyMatrix4(l.matrixWorldInverse).z;if(f<=l.near||f>=l.far||(o.copy(u).project(l),!Number.isFinite(o.x)||!Number.isFinite(o.y)))continue;let m=(o.x+1)*c.width/2,_=(1-o.y)*c.height/2;if(m<-Vs||m>c.width+Vs||_<-Vs||_>c.height+Vs)continue;let g=l.isOrthographicCamera?(l.top-l.bottom)/l.zoom:l.getViewSize(f,a).y,p=Vs*g/c.height;n.setMatrixAt(n.count++,r.makeScale(p,p,p).setPosition(u)),s.push({index:d,depth:f,x:m+c.left,y:_+c.top})}n.instanceMatrix.needsUpdate=n.count>0}},pick(l,c){let h;for(let d of s)(!h||d.depth<h.depth)&&Math.hypot(d.x-l,d.y-c)<=Vs&&(h=d);return h?.index}}}document.documentElement.lang=ai;var Zn=document.getElementById("ioviewer-canvas"),Gh=window.IOVIEWER_TEST??{},qr=Gh.startup;function Yr(i){let t=document.getElementById("ioviewer-message");t.textContent=i,t.hidden=!1}try{let i=ch(document,qr);i.title&&(document.title=i.title);let t=Zn.getContext("webgl2",{antialias:!0,stencil:!0});t?aM(nf(document,qr,i),t):Yr(Z("noWebGL"))}catch(i){if(!(i instanceof se))throw i;Yr(Z("badData"))}function aM(i,t){let e=new Ei({canvas:Zn,context:t,antialias:!0,stencil:!0,logarithmicDepthBuffer:Of(i.meta)});e.setPixelRatio(window.devicePixelRatio),e.autoClearStencil=!1,e.localClippingEnabled=!0;let n=new fn,s="#1f2228",r=new Ht(s);e.setClearColor(r,1);let o=new fr("#ffffff","#8a8f99",1.6);o.position.set(0,0,1),n.add(o);let a=new Le(45,1,.1,1e3);a.up.set(0,0,1),a.position.set(1,-1,.8);let l=new pr("#ffffff",1.4);l.position.set(.3,.6,0),a.add(l,l.target),l.target.position.set(0,0,-1),n.add(a);let c=!1;qr?.("sceneStart");let h=x(),d=new rl(i);qr?.("sceneEnd"),i.releaseBinary(),!c&&h.totalCost===0&&d.count===0&&Yr(Z("noGeometry"));let u=new fl(h,L,Math.min(h.totalCost,2e7));n.add(h.root),n.add(d.root);let f=d.count?Np(i.meta.panoramas):null;f&&n.add(f.mesh);let m=()=>h.visibleBox(),_=new vl(h,m(),i.meta.sections);d.syncVisibility(h),d.syncAppearance(h);let g=()=>{let{planes:Ct,intersection:It}=_.clipping();d.setClipping(Ct,It)};g();let p=h.slotCount>0,M=p&&t.getContextAttributes()?.stencil===!0,T,S=new bl(_,Zn);n.add(S.group);let v=document.getElementById("ioviewer-ui"),b=new wl(v),A=new Al(v,i.meta.grids??[]);n.add(b.group,A.group);function x(){try{return new zr(i,{...Gh,maxTextureSize:e.capabilities.maxTextureSize})}catch(Ct){if(!(Ct instanceof Or))throw Ct;c=!0,Yr(Z("tooLarge").replace("{count}",Ct.count).replace("{limit}",Ct.limit));let It=$t=>({o:0,n:0,t:$t}),Xt={count:0,geometry:It("u32"),material:It("u32"),element:It("i32"),matrix:It("f32")};return new zr({...i,meta:{...i.meta,instances:Xt}})}}let w=!1;Zn.addEventListener("webglcontextlost",()=>{w=!0,Yr(Z("contextLost"))});let R,D=new Promise(Ct=>R=Ct),N=qr,B=!1;function L(){B||w||(B=!0,u.requested(performance.now()),requestAnimationFrame(()=>{if(B=!1,w)return;let Ct=Zn.getBoundingClientRect();z.camera.updateMatrixWorld(),ft&&f?.update(z.camera,Ct,ft.showSphere),S.update(z.camera),b.update(z.camera,Ct),A.update(z.camera,Ct),u.begin(z.camera,Ct.height,performance.now()),N?.("renderStart"),_.fill&&M?(T??(T=new Sl(h,_,i)),T.render(e,n,z.camera)):e.render(n,z.camera),N&&(N("renderEnd"),N=void 0),u.end(performance.now()),Ot.update(),R()}))}h.root.addEventListener("change",L),_.addEventListener("change",()=>{g(),L()}),S.addEventListener("change",L),b.addEventListener("change",L),b.addEventListener("previewchange",L),A.addEventListener("change",L);let U=new ul(e,h,a,{points:d,pickFloat:Gh.pickFloat}),W=new Tl(U,_,i),V=0,O=null;function F(){cancelAnimationFrame(V),V=0,O=null,b.setPreview(null)}function G(){V=0,O&&b.setPreview(W.target(...O))}function Y(){O&&(b.setPreview(null),cancelAnimationFrame(V),V=requestAnimationFrame(()=>{V=requestAnimationFrame(G)}))}Zn.addEventListener("pointermove",Ct=>{if(!b.active||Ct.buttons)return F();O=[Ct.clientX,Ct.clientY],V||(V=requestAnimationFrame(G))});for(let Ct of["pointerdown","pointerleave","pointercancel","webglcontextlost"])Zn.addEventListener(Ct,F);h.root.addEventListener("change",Ct=>{Ct.detail.kind!=="appearance"&&Y()});let z=new al(a,Zn,{pick:(Ct,It)=>U.pick(Ct,It)?.point??null,visibleBox:m});z.addEventListener("change",()=>{U.camera=z.camera,Y(),L()}),h.root.addEventListener("change",Ct=>{Ct.detail.kind==="appearance"&&d.syncAppearance(h),Ct.detail.kind==="visibility"&&(d.syncVisibility(h),z.invalidateBounds(),z.resize())});let $=new ml;$.addEventListener("change",()=>h.setHighlighted([...$.values()]));let nt=ap({root:v,data:i,scene:h,controls:z,picker:U,selection:$,measure:b});gp({root:v,...nt,sections:_,selection:$,canFill:M,hasMeshes:p});let{meta:lt}=i,at=Rp({...nt,files:lt.linkedFiles??[],elements:lt.elements,scene:h});Mp({...nt,controls:z,scene:h,sections:_,selection:$,restoreLinkedModels:at,views:lt.viewpoints??[],bcfTopics:lt.bcfTopics??[]});let X=Sp({...nt,tests:lt.clashTests??[],elements:lt.elements,scene:h,controls:z,selection:$});n.add(X.group);let tt=Ap({root:v,...nt,timeliner:lt.timeliner,elements:lt.elements,scene:h}),ht=Ct=>{e.setClearColor(r.set(Ct),1);let{r:It,g:Xt,b:$t}=r,Qt=.2126*It+.7152*Xt+.0722*$t>Math.sqrt(.0525)-.05?"#000":"#fff";v.style.setProperty("--viewport-text",Ct===s?"":Qt),L()};for(let Ct of yp({root:v,toolbar:nt.toolbar,scene:h,meta:lt,grids:A,initialBackground:s,setBackground:ht,hasMeshes:p}))nt.onEscape(Ct.close);nt.toolbar.setHandler("distance",()=>{F(),b.setActive(!b.active),b.active||W.release(),nt.toolbar.setActive("distance",b.active)}),nt.toolbar.setActive("distance",!1),nt.onEscape(()=>(F(),b.clear()));let Rt=()=>{z.setExtraBounds("grids",A.visible?A.box:null),z.setExtraBounds("measure",b.box)};A.addEventListener("change",Rt),b.addEventListener("change",Rt),Rt(),z.addEventListener("click",Ct=>{let{x:It,y:Xt,ctrl:$t,shift:qt}=Ct.detail;if(b.active){let dt=W.target(It,Xt);dt&&b.add(dt.point);return}let Qt=!$t&&!qt?f?.pick(It,Xt):void 0;if(Qt!==void 0){ft.open(Qt);return}let ge=U.pick(It,Xt)?.element??-1;$t?ge>=0&&$.toggle(ge):ge>=0?$.set([ge]):qt||$.clear()}),z.addEventListener("boxselect",Ct=>{if(b.active)return;let{rect:It,mode:Xt,ctrl:$t,shift:qt}=Ct.detail;if(It.width<4||It.height<4){!$t&&!qt&&$.clear();return}let Qt=new ae,ie=qf(It,Xt,Yf(h,z.camera,Zn.getBoundingClientRect())),ge=_.clipping(),dt=ie.filter(zt=>!_.isCut(h.elementBox(zt,Qt),ge));$.set($t?[...$.values(),...dt]:dt)}),window.addEventListener("resize",()=>{e.setSize(window.innerWidth,window.innerHeight,!1),z.resize()}),e.setSize(window.innerWidth,window.innerHeight,!1),z.resize(),z.fitBox(m(),!1);let ft=Dp(v,i,d,h,z,L),Ot=new hl(document.getElementById("ioviewer-ui"),a,z);window.addEventListener("pointerdown",Ct=>{(Ct.target===Zn||Ot.element.contains(Ct.target))&&document.activeElement?.blur()},!0),window.__ioviewer={scene:h,points:d,motionDetail:u,controls:z,picker:U,selection:$,ui:nt,viewCube:Ot,sections:_,sectionGizmo:S,measure:b,measureSnap:W,grids:A,clashes:X,timeliner:tt,ready:D,get camera(){return z.camera}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
