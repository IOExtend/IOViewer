(()=>{var Qc=i=>{throw TypeError(i)};var Ka=(i,t,e)=>t.has(i)||Qc("Cannot "+e);var Zn=(i,t,e)=>(Ka(i,t,"read from private field"),e?e.call(i):t.get(i)),ja=(i,t,e)=>t.has(i)?Qc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),th=(i,t,e,n)=>(Ka(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),br=(i,t,e)=>(Ka(i,t,"access private method"),e);var Dh=0,Pl=1,Nh=2;var js=1,Uh=2,ps=3,ai=0,Je=1,Be=2,Pn=0,ms=1,Ll=2,Dl=3,Nl=4,Fh=5;var Ri=100,Bh=101,Oh=102,zh=103,kh=104,Vh=200,Hh=201,Gh=202,Wh=203,Ul=204,Fl=205,Xh=206,qh=207,Yh=208,$h=209,Zh=210,Jh=211,Kh=212,jh=213,Qh=214,Qr=0,to=1,eo=2,es=3,no=4,io=5,so=6,ro=7,Lo=0,tu=1,eu=2,_n=0,Bl=1,Ol=2,zl=3,kl=4,Vl=5,Hl=6,Gl=7;var Wl=300,li=301,Ci=302,Do=303,No=304,Qs=306,ns=1e3,En=1001,oo=1002,Ie=1003,nu=1004;var tr=1005;var De=1006,Uo=1007;var ci=1008;var Qe=1009,Xl=1010,ql=1011,gs=1012,Fo=1013,xn=1014,We=1015,vn=1016,Bo=1017,Oo=1018,_s=1020,Yl=35902,$l=35899,Zl=1021,Jl=1022,tn=1023,Tn=1026,hi=1027,zo=1028,ko=1029,ui=1030,Vo=1031;var Ho=1033,er=33776,nr=33777,ir=33778,sr=33779,Go=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,$o=37492,Zo=37496,Jo=37488,Ko=37489,rr=37490,jo=37491,Qo=37808,ta=37809,ea=37810,na=37811,ia=37812,sa=37813,ra=37814,oa=37815,aa=37816,la=37817,ca=37818,ha=37819,ua=37820,da=37821,fa=36492,pa=36494,ma=36495,ga=36283,_a=36284,or=36285,xa=36286;var Us=2300,ao=2301,Kr=2302,Sl=2303,bl=2400,wl=2401,El=2402;var iu=3200;var va=0,su=1,Wn="",Se="srgb",Fs="srgb-linear",Bs="linear",te="srgb";var jr=7680;var ru=519,ou=512,au=513,lu=514,ya=515,cu=516,hu=517,Ma=518,uu=519,du=35044;var Kl="300 es",mn=2e3,is=2001;function If(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){let i=Os("canvas");return i.style.display="block",i}var eh={},ss=null;function jl(...i){let t="THREE."+i.shift();ss?ss("log",t,...i):console.log(t,...i)}function pu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=pu(i);let t="THREE."+i.shift();if(ss)ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=pu(i);let t="THREE."+i.shift();if(ss)ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yi(...i){let t=i.join(" ");t in eh||(eh[t]=!0,Ct(...i))}function mu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var gu={[Qr]:to,[eo]:so,[no]:ro,[es]:io,[to]:Qr,[so]:eo,[ro]:no,[io]:es},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nh=1234567,Qi=Math.PI/180,rs=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(i,t){return(i%t+t)%t}function Lf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Df(i,t,e){return i!==t?(e-i)/(t-i):0}function Ns(i,t,e){return(1-e)*i+e*t}function Nf(i,t,e,n){return Ns(i,t,1-Math.exp(-e*n))}function Uf(i,t=1){return t-Math.abs(Ql(i,t*2)-t)}function Ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Of(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zf(i,t){return i+Math.random()*(t-i)}function kf(i){return i*(.5-Math.random())}function Vf(i){i!==void 0&&(nh=i);let t=nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hf(i){return i*Qi}function Gf(i){return i*rs}function Wf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oe={DEG2RAD:Qi,RAD2DEG:rs,generateUUID:xs,clamp:Yt,euclideanModulo:Ql,mapLinear:Lf,inverseLerp:Df,lerp:Ns,damp:Nf,pingpong:Uf,smoothstep:Ff,smootherstep:Bf,randInt:Of,randFloat:zf,randFloatSpread:kf,seededRandom:Vf,degToRad:Hf,radToDeg:Gf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Yf,normalize:$e,denormalize:ji},sc=class sc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sc.prototype.isVector2=!0;var zt=sc,Ne=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-a;if(m<.9995){let w=Math.acos(m),R=Math.sin(w);f=Math.sin(f*w)/R,a=Math.sin(a*w)/R,l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+_*a}else{l=l*f+u*a,c=c*f+p*a,h=h*f+g*a,d=d*f+_*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rc=class rc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rc.prototype.isVector3=!0;var C=rc,Qa=new C,ih=new Ne,oc=class oc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],w=s[1],R=s[4],S=s[7],b=s[2],y=s[5],T=s[8];return r[0]=o*_+a*w+l*b,r[3]=o*m+a*R+l*y,r[6]=o*f+a*S+l*T,r[1]=c*_+h*w+d*b,r[4]=c*m+h*R+d*y,r[7]=c*f+h*S+d*T,r[2]=u*_+p*w+g*b,r[5]=u*m+p*R+g*y,r[8]=u*f+p*S+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(t,e)),this}rotate(t){return yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var Ut=oc,tl=new Ut,sh=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $f(){let i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:te,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),i}var qt=$f();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oi,lo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Os("canvas")),Oi.width=t.width,Oi.height=t.height;let s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zf=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(el(s[o].image)):r.push(el(s[o]))}else r=el(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var Jf=0,nl=new C,Ue=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=En,s=En,r=De,o=ci,a=tn,l=Qe,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=xs(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Wl;Ue.DEFAULT_ANISOTROPY=1;var ac=class ac{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,S=(p+1)/2,b=(f+1)/2,y=(h+u)/4,T=(d+_)/4,v=(g+m)/4;return R>S&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=y/n,r=T/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=y/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=v/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ac.prototype.isVector4=!0;var pe=ac,co=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ue(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends co{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zs=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ho=class extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Po=class Po{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kf,t,jf)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),wr.crossVectors(en,Jn),s[0]=Jn.x,s[4]=wr.x,s[8]=en.x,s[1]=Jn.y,s[5]=wr.y,s[9]=en.y,s[2]=Jn.z,s[6]=wr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],R=n[7],S=n[11],b=n[15],y=s[0],T=s[4],v=s[8],E=s[12],P=s[1],D=s[5],z=s[9],O=s[13],I=s[2],k=s[6],X=s[10],Y=s[14],B=s[3],U=s[7],H=s[11],Z=s[15];return r[0]=o*y+a*P+l*I+c*B,r[4]=o*T+a*D+l*k+c*U,r[8]=o*v+a*z+l*X+c*H,r[12]=o*E+a*O+l*Y+c*Z,r[1]=h*y+d*P+u*I+p*B,r[5]=h*T+d*D+u*k+p*U,r[9]=h*v+d*z+u*X+p*H,r[13]=h*E+d*O+u*Y+p*Z,r[2]=g*y+_*P+m*I+f*B,r[6]=g*T+_*D+m*k+f*U,r[10]=g*v+_*z+m*X+f*H,r[14]=g*E+_*O+m*Y+f*Z,r[3]=w*y+R*P+S*I+b*B,r[7]=w*T+R*D+S*k+b*U,r[11]=w*v+R*z+S*X+b*H,r[15]=w*E+R*O+S*Y+b*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],w=l*p-c*u,R=a*p-c*d,S=a*u-l*d,b=o*p-c*h,y=o*u-l*h,T=o*d-a*h;return e*(_*w-m*R+f*S)-n*(g*w-m*b+f*y)+s*(g*R-_*b+f*T)-r*(g*S-_*y+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],w=e*a-n*o,R=e*l-s*o,S=e*c-r*o,b=n*l-s*a,y=n*c-r*a,T=s*c-r*l,v=h*_-d*g,E=h*m-u*g,P=h*f-p*g,D=d*m-u*_,z=d*f-p*_,O=u*f-p*m,I=w*O-R*z+S*D+b*P-y*E+T*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(a*O-l*z+c*D)*k,t[1]=(s*z-n*O-r*D)*k,t[2]=(_*T-m*y+f*b)*k,t[3]=(u*y-d*T-p*b)*k,t[4]=(l*P-o*O-c*E)*k,t[5]=(e*O-s*P+r*E)*k,t[6]=(m*S-g*T-f*R)*k,t[7]=(h*T-u*S+p*R)*k,t[8]=(o*z-a*P+c*v)*k,t[9]=(n*P-e*z-r*v)*k,t[10]=(g*y-_*S+f*w)*k,t[11]=(d*S-h*y-p*w)*k,t[12]=(a*E-o*D-l*v)*k,t[13]=(e*D-n*E+s*v)*k,t[14]=(_*R-g*b-m*w)*k,t[15]=(h*b-d*R+u*w)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,w=l*c,R=l*h,S=l*d,b=n.x,y=n.y,T=n.z;return s[0]=(1-(_+f))*b,s[1]=(p+S)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(p-S)*y,s[5]=(1-(u+f))*y,s[6]=(m+w)*y,s[7]=0,s[8]=(g+R)*T,s[9]=(m-w)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),dn.copy(this);let c=1/o,h=1/a,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===mn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===is)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===mn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===is)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Po.prototype.isMatrix4=!0;var Ht=Po,zi=new C,dn=new Ht,Kf=new C(0,0,0),jf=new C(1,1,1),Jn=new C,wr=new C,en=new C,oh=new Ht,ah=new Ne,Vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qf=0,lh=new C,ki=new Ne,Nn=new Ht,Er=new C,As=new C,tp=new C,ep=new Ne,ch=new C(1,0,0),hh=new C(0,1,0),uh=new C(0,0,1),dh={type:"added"},np={type:"removed"},Vi={type:"childadded",child:null},il={type:"childremoved",child:null},Pe=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Vn,n=new Ne,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(As,Er,this.up):Nn.lookAt(Er,As,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(np),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,tp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new C(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ip={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Ql(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sl(o,r,t+1/3),this.g=sl(o,r,t),this.b=sl(o,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return qt.workingToColorSpace(He.copy(this),t),Math.round(Yt(He.r*255,0,255))*65536+Math.round(Yt(He.g*255,0,255))*256+Math.round(Yt(He.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Se){qt.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Tr);let n=Ns(Kn.h,Tr.h,e),s=Ns(Kn.s,Tr.s,e),r=Ns(Kn.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Dt;Dt.NAMES=_u;var Mi=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},fn=new C,Un=new C,rl=new C,Fn=new C,Hi=new C,Gi=new C,fh=new C,ol=new C,al=new C,ll=new C,cl=new pe,hl=new pe,ul=new pe,zn=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Un.subVectors(n,e),rl.subVectors(t,e);let o=fn.dot(fn),a=fn.dot(Un),l=fn.dot(rl),c=Un.dot(Un),h=Un.dot(rl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),ol.subVectors(t,n);let l=Hi.dot(ol),c=Gi.dot(ol);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,s);let h=Hi.dot(al),d=Gi.dot(al);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Hi,o);ll.subVectors(t,r);let p=Hi.dot(ll),g=Gi.dot(ll);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return fh.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(fh,a);let f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},se=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),Rr.subVectors(this.max,Rs),Wi.subVectors(t.a,Rs),Xi.subVectors(t.b,Rs),qi.subVectors(t.c,Rs),jn.subVectors(Xi,Wi),Qn.subVectors(qi,Xi),gi.subVectors(Wi,qi);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-gi.z,gi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-gi.y,gi.x,0];return!dl(e,Wi,Xi,qi,Rr)||(e=[1,0,0,0,1,0,0,0,1],!dl(e,Wi,Xi,qi,Rr))?!1:(Cr.crossVectors(jn,Qn),e=[Cr.x,Cr.y,Cr.z],dl(e,Wi,Xi,qi,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bn=[new C,new C,new C,new C,new C,new C,new C,new C],pn=new C,Ar=new se,Wi=new C,Xi=new C,qi=new C,jn=new C,Qn=new C,gi=new C,Rs=new C,Rr=new C,Cr=new C,_i=new C;function dl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);let a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Me=new C,Ir=new zt,sp=0,we=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=du,this.updateRanges=[],this.gpuType=We,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ks=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vs=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},rp=new se,Cs=new C,fl=new C,Le=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(fl)),this.expandByPoint(Cs.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},op=0,ln=new Ht,pl=new Pe,Yi=new C,nn=new se,Is=new se,Ce=new C,re=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(If(t)?Vs:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new se);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Le);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(nn.min,Is.min),nn.expandByPoint(Ce),Ce.addVectors(nn.max,Is.max),nn.expandByPoint(Ce)):(nn.expandByPoint(Is.min),nn.expandByPoint(Is.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(t,c),Ce.add(Yi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new C,l[v]=new C;let c=new C,h=new C,d=new C,u=new zt,p=new zt,g=new zt,_=new C,m=new C;function f(v,E,P){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[v].add(_),a[E].add(_),a[P].add(_),l[v].add(m),l[E].add(m),l[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let v=0,E=w.length;v<E;++v){let P=w[v],D=P.start,z=P.count;for(let O=D,I=D+z;O<I;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let R=new C,S=new C,b=new C,y=new C;function T(v){b.fromBufferAttribute(s,v),y.copy(b);let E=a[v];R.copy(E),R.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(y,E);let D=S.dot(l[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,D)}for(let v=0,E=w.length;v<E;++v){let P=w[v],D=P.start,z=P.count;for(let O=D,I=D+z;O<I;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new we(u,h,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ml=new C,ap=new C,lp=new Ut,ge=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ml.subVectors(n,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lp.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cp=0,Rn=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ms,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ge().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var On=new C,gl=new C,Pr=new C,Lr=new C,Si=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gl.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(gl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Pr),a=Lr.dot(this.direction),l=-Lr.dot(Pr),c=Lr.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gl).addScaledVector(Pr,u),p}intersectSphere(t,e){if(t.radius<0)return null;On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,p=t.z-o.z,g=e.x-o.x,_=e.y-o.y,m=e.z-o.z,f=n.x-o.x,w=n.y-o.y,R=n.z-o.z,S=Math.abs(l),b=Math.abs(c),y=Math.abs(h),T,v,E,P,D,z,O,I,k,X,Y,B;if(S>=b&&S>=y?(E=l,z=d,k=g,B=f,l>=0?(T=c,v=h,P=u,D=p,O=_,I=m,X=w,Y=R):(T=h,v=c,P=p,D=u,O=m,I=_,X=R,Y=w)):b>=y?(E=c,z=u,k=_,B=w,c>=0?(T=h,v=l,P=p,D=d,O=m,I=g,X=R,Y=f):(T=l,v=h,P=d,D=p,O=g,I=m,X=f,Y=R)):(E=h,z=p,k=m,B=R,h>=0?(T=l,v=c,P=d,D=u,O=g,I=_,X=f,Y=w):(T=c,v=l,P=u,D=d,O=_,I=g,X=w,Y=f)),E===0)return null;let U=T/E,H=v/E,Z=1/E,rt=P-U*z,at=D-H*z,Ft=O-U*k,Nt=I-H*k,$t=X-U*B,J=Y-H*B,et=$t*Nt-J*Ft,xt=rt*J-at*$t,Lt=Ft*at-Nt*rt;if(s){if(et<0||xt<0||Lt<0)return null}else if((et<0||xt<0||Lt<0)&&(et>0||xt>0||Lt>0))return null;let yt=et+xt+Lt;if(yt===0)return null;let Vt=Z*(et*z+xt*k+Lt*B);return(yt>0?Vt<0:Vt>0)?null:this.at(Vt/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ph=new Ht,xi=new Si,Dr=new Le,mh=new C,Nr=new C,Ur=new C,Fr=new C,_l=new C,Br=new C,gh=new C,Or=new C,_e=class extends Pe{constructor(t=new re,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(_l.fromBufferAttribute(d,t),o?Br.addScaledVector(_l,h):Br.addScaledVector(_l.sub(e),h))}e.add(Br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Dr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Dr,mh)===null||xi.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(r).invert(),xi.copy(t.ray).applyMatrix4(ph),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),R=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,b=R;S<b;S+=3){let y=a.getX(S),T=a.getX(S+1),v=a.getX(S+2);s=zr(this,f,t,n,c,h,d,y,T,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=a.getX(m),R=a.getX(m+1),S=a.getX(m+2);s=zr(this,o,t,n,c,h,d,w,R,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,b=R;S<b;S+=3){let y=S,T=S+1,v=S+2;s=zr(this,f,t,n,c,h,d,y,T,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=m,R=m+1,S=m+2;s=zr(this,o,t,n,c,h,d,w,R,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function hp(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ai,a),l===null)return null;Or.copy(a),Or.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:i}}function zr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Nr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Fr);let h=hp(i,t,e,n,Nr,Ur,Fr,gh);if(h){let d=new C;zn.getBarycoord(gh,Nr,Ur,Fr,d),s&&(h.uv=zn.getInterpolatedAttribute(s,a,l,c,d,new zt)),r&&(h.uv1=zn.getInterpolatedAttribute(r,a,l,c,d,new zt)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};zn.getNormal(Nr,Ur,Fr,u.normal),h.face=u,h.barycoord=d}return h}var ei=class extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ie,h=Ie,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$i=new Ht,_h=new Ht,kr=[],xh=new se,up=new Ht,Ps=new _e,Ls=new Le,cs=class extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,up)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new se),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),xh.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Le),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Ls.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),t.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),_h.multiplyMatrices(n,$i),Ps.matrixWorld=_h,Ps.raycast(t,kr);for(let o=0,a=kr.length;o<a;o++){let l=kr[o];l.instanceId=r,l.object=this,e.push(l)}kr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(s*this.count),s,this.count,zo,We));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vi=new Le,dp=new zt(.5,.5),Vr=new C,Cn=class{constructor(t=new ge,e=new ge,n=new ge,s=new ge,r=new ge,o=new ge){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],w=r[12],R=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-o,p-h,f-g,b-w).normalize(),s[1].setComponents(c+o,p+h,f+g,b+w).normalize(),s[2].setComponents(c+a,p+d,f+_,b+R).normalize(),s[3].setComponents(c-a,p-d,f-_,b-R).normalize(),n)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,p-u,f-m,b-S).normalize();else if(s[4].setComponents(c-l,p-u,f-m,b-S).normalize(),e===mn)s[5].setComponents(c+l,p+u,f+m,b+S).normalize();else if(e===is)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=dp.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sn=class extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uo=new C,fo=new C,vh=new Ht,Ds=new Si,Hr=new Le,xl=new C,yh=new C,bi=class extends Pe{constructor(t=new re,e=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)uo.fromBufferAttribute(e,s-1),fo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new ce(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;vh.copy(s).invert(),Ds.copy(t.ray).applyMatrix4(vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),w=h.getX(_+1),R=Gr(this,t,Ds,l,f,w,_);R&&e.push(R)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Gr(this,t,Ds,l,_,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=Gr(this,t,Ds,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){let _=Gr(this,t,Ds,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gr(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(uo.fromBufferAttribute(a,s),fo.fromBufferAttribute(a,r),e.distanceSqToSegment(uo,fo,xl,yh)>n)return;xl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xl);if(!(c<t.near||c>t.far))return{distance:c,point:yh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Mh=new C,Sh=new C,gn=class extends bi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Mh.fromBufferAttribute(e,s),Sh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mh.distanceTo(Sh);t.setAttribute("lineDistance",new ce(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hs=class extends bi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ni=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bh=new Ht,Tl=new Si,Wr=new Le,Xr=new C,wi=class extends Pe{constructor(t=new re,e=new ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;bh.copy(s).invert(),Tl.copy(t.ray).applyMatrix4(bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);Xr.fromBufferAttribute(d,m),wh(Xr,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)Xr.fromBufferAttribute(d,g),wh(Xr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wh(i,t,e,n,s,r,o){let a=Tl.distanceSqToPoint(i);if(a<e){let l=new C;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Gs=class extends Ue{constructor(t=[],e=li,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ws=class extends Ue{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends Ue{constructor(t,e,n=xn,s,r,o,a=Ie,l=Ie,c,h=Tn,d=1){if(h!==Tn&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},po=class extends ii{constructor(t,e=xn,n=li,s,r,o=Ie,a=Ie,l,c=Tn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hn=class i extends re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(_,m,f,w,R,S,b,y,T,v,E){let P=S/T,D=b/v,z=S/2,O=b/2,I=y/2,k=T+1,X=v+1,Y=0,B=0,U=new C;for(let H=0;H<X;H++){let Z=H*D-O;for(let rt=0;rt<k;rt++){let at=rt*P-z;U[_]=at*w,U[m]=Z*R,U[f]=I,c.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[f]=y>0?1:-1,h.push(U.x,U.y,U.z),d.push(rt/T),d.push(1-H/v),Y+=1}}for(let H=0;H<v;H++)for(let Z=0;Z<T;Z++){let rt=u+Z+k*H,at=u+Z+k*(H+1),Ft=u+(Z+1)+k*(H+1),Nt=u+(Z+1)+k*H;l.push(rt,at,Nt),l.push(at,Ft,Nt),B+=6}a.addGroup(p,B,E),p+=B,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ei=class i extends re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,_=[],m=n/2,f=0;w(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function w(){let S=new C,b=new C,y=0,T=(e-t)/n;for(let v=0;v<=r;v++){let E=[],P=v/r,D=P*(e-t)+t;for(let z=0;z<=s;z++){let O=z/s,I=O*l+a,k=Math.sin(I),X=Math.cos(I);b.x=D*k,b.y=-P*n+m,b.z=D*X,d.push(b.x,b.y,b.z),S.set(k,T,X).normalize(),u.push(S.x,S.y,S.z),p.push(O,1-P),E.push(g++)}_.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let P=_[E][v],D=_[E+1][v],z=_[E+1][v+1],O=_[E][v+1];(t>0||E!==0)&&(h.push(P,D,O),y+=3),(e>0||E!==r-1)&&(h.push(D,z,O),y+=3)}c.addGroup(f,y,0),f+=y}function R(S){let b=g,y=new zt,T=new C,v=0,E=S===!0?t:e,P=S===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),g++;let D=g;for(let z=0;z<=s;z++){let I=z/s*l+a,k=Math.cos(I),X=Math.sin(I);T.x=E*X,T.y=m*P,T.z=E*k,d.push(T.x,T.y,T.z),u.push(0,P,0),y.x=k*.5+.5,y.y=X*.5*P+.5,p.push(y.x,y.y),g++}for(let z=0;z<s;z++){let O=b+z,I=D+z;S===!0?h.push(I,I+1,O):h.push(I+1,I,O),v+=3}c.addGroup(f,v,S===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qs=class i extends Ei{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qr=new C,Yr=new C,vl=new C,$r=new zn,Ti=class extends re{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Qi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:f}=$r;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),$r.getNormal(vl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let R=(w+1)%3,S=d[w],b=d[R],y=$r[h[w]],T=$r[h[R]],v=`${S}_${b}`,E=`${b}_${S}`;E in u&&u[E]?(vl.dot(u[E].normal)<=r&&(p.push(y.x,y.y,y.z),p.push(T.x,T.y,T.z)),u[E]=null):v in u||(u[v]={index0:c[w],index1:c[R],normal:vl.clone()})}}for(let g in u)if(u[g]){let{index0:_,index1:m}=u[g];qr.fromBufferAttribute(a,_),Yr.fromBufferAttribute(a,m),p.push(qr.x,qr.y,qr.z),p.push(Yr.x,Yr.y,Yr.z)}this.setAttribute("position",new ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Gn=class i extends re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let w=f*u-o;for(let R=0;R<c;R++){let S=R*d-r;g.push(S,-w,0),_.push(0,0,1),m.push(R/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let R=w+c*f,S=w+c*(f+1),b=w+1+c*(f+1),y=w+1+c*f;p.push(R,S,y),p.push(S,b,y)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var hs=class i extends re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,u=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let w=[],R=f/n,S=o+R*a,b=t*Math.cos(S),y=Math.sqrt(t*t-b*b),T=0;f===0&&o===0?T=.5/e:f===n&&l===Math.PI&&(T=-.5/e);for(let v=0;v<=e;v++){let E=v/e,P=s+E*r;d.x=-y*Math.cos(P),d.y=b,d.z=y*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+T,1-R),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let R=h[f][w+1],S=h[f][w],b=h[f+1][w],y=h[f+1][w+1];(f!==0||o>0)&&p.push(R,S,y),(f!==n-1||l<Math.PI)&&p.push(S,b,y)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var us=class i extends re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,p=new C,g=new C;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let f=0;f<=s;f++){let w=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(w),p.y=(t+e*Math.cos(m))*Math.sin(w),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let f=(s+1)*_+m-1,w=(s+1)*(_-1)+m-1,R=(s+1)*(_-1)+m,S=(s+1)*_+m;l.push(f,w,S),l.push(w,R,S)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Eh(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let s in n)t[s]=n[s]}return t}function Eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var xu={clone:Ii,merge:Xe},pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ds=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},go=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_o=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wl:r=t,a=2*e-n;break;case El:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:o=t,l=2*n-e;break;case El:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,R=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let b=0;b!==a;++b)r[b]=f*o[h+b]+w*o[c+b]+R*o[l+b]+S*o[d+b];return r}},vo=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},yo=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mo=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}let u=a*2,p=t-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],f=p*u+g*2,w=d[f],R=d[f+1],S=t*u+g*2,b=h[S],y=h[S+1],T=_p(n,e,w,b,s);r[g]=vu(T,_,R,y,m)}return r}};function vu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function gp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function _p(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=vu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=gp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),yl(t.settings)&&(n.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Us:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break;case Sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;yl(this.settings)&&(Th(this.settings.inTangents,t),Th(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Pt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Pf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,yl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Th(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=ao;var ri=class extends rn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Us;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};So.prototype.ValueTypeName="color";var bo=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="number";var wo=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ys=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends rn{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Us;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yu=new To,Ao=class{constructor(t){this.manager=t!==void 0?t:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zs=class extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ml=new Ht,Ah=new C,Rh=new C,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cn,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ml,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===is||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zr=new C,Jr=new Ne,wn=new C,Js=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zr,Jr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new C,Ch=new zt,Ih=new zt,Ge=class extends Js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ih),e.subVectors(Ih,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var In=class extends Js{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Al=class extends Ro{constructor(){super(new In(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Al}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fs=class extends re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ji=-90,Ki=1,Co=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(Ji,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Ge(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let o=new Ge(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let a=new Ge(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let l=new Ge(Ji,Ki,t,e);l.layers=this.layers,this.add(l);let c=new Ge(Ji,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Io=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ec="\\[\\]\\.:\\/",xp=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",vp="[^"+ec.replace("\\.","")+"]",yp=/((?:WC+[\/:])*)/.source.replace("WC",nc),Mp=/(WCOD+)?/.source.replace("WCOD",vp),Sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),wp=new RegExp("^"+yp+Mp+Sp+bp+"$"),Ep=["material","materials","bones","map"],Rl=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(t){let e=wp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ep.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Rl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lv=new Float32Array(1);var Ph=new Ht,Ai=class{constructor(t,e,n=0,s=1/0){this.ray=new Si(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(t,e=!0,n=[]){return Cl(t,this,n,e),n.sort(Lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Cl(t[s],this,n,e);return n.sort(Lh),n}};function Lh(i,t){return i.distance-t.distance}function Cl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Cl(r[o],t,e,!0)}}var lc=class lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lc.prototype.isMatrix2=!0;var Il=lc;function ic(i,t,e,n){let s=Tp(n);switch(e){case Zl:return i*t;case zo:return i*t/s.components*s.byteLength;case ko:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case Vo:return i*t*2/s.components*s.byteLength;case Jl:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case Ho:return i*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:case qo:return Math.max(i,16)*Math.max(t,8)/4;case Go:case Xo:return Math.max(i,8)*Math.max(t,8)/2;case Yo:case $o:case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case rr:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fa:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ga:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case or:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(i){switch(i){case Qe:case Xl:return{byteLength:1,components:1};case gs:case ql:case vn:return{byteLength:2,components:1};case Bo:case Oo:return{byteLength:2,components:4};case xn:case Fo:case We:return{byteLength:4,components:1};case Yl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`uniform sampler2D dfgLUT;
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
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
}`,Vg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,Kg=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,t_=`#define STANDARD
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
}`,e_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,l_=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Cp,alphahash_pars_fragment:Ip,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Dp,alphatest_pars_fragment:Np,aomap_fragment:Up,aomap_pars_fragment:Fp,batching_pars_vertex:Bp,batching_vertex:Op,begin_vertex:zp,beginnormal_vertex:kp,bsdfs:Vp,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:$p,color_pars_fragment:Zp,color_pars_vertex:Jp,color_vertex:Kp,common:jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:xm,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:bm,lights_phong_fragment:wm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Im,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Fm,map_pars_fragment:Bm,map_particle_fragment:Om,map_particle_pars_fragment:zm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Hm,morphcolor_vertex:Gm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:$m,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:Km,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:eg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:xg,specularmap_fragment:vg,specularmap_pars_fragment:yg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:bg,transmission_pars_fragment:wg,uv_pars_fragment:Eg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:Rg,background_vert:Cg,background_frag:Ig,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ng,depth_vert:Ug,depth_frag:Fg,distance_vert:Bg,distance_frag:Og,equirect_vert:zg,equirect_frag:kg,linedashed_vert:Vg,linedashed_frag:Hg,meshbasic_vert:Gg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:$g,meshnormal_vert:Zg,meshnormal_frag:Jg,meshphong_vert:Kg,meshphong_frag:jg,meshphysical_vert:Qg,meshphysical_frag:t_,meshtoon_vert:e_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},pt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Dn={basic:{uniforms:Xe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Xe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Xe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Xe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Xe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Xe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Xe([pt.points,pt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Xe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Xe([pt.common,pt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Xe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Xe([pt.sprite,pt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Xe([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Xe([pt.lights,pt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Dn.physical={uniforms:Xe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Sa={r:0,b:0,g:0},c_=new Ht,Gu=new Ut;Gu.set(-1,0,0,0,1,0,0,0,1);function h_(i,t,e,n,s,r){let o=new Dt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let S=w.backgroundBlurriness>0;R=t.get(R,S)}return R}function g(w){let R=!1,S=p(w);S===null?m(o,a):S&&S.isColor&&(m(S,1),R=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,R){let S=p(R);S&&(S.isCubeTexture||S.mapping===Qs)?(c===void 0&&(c=new _e(new hn(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ii(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gu),c.material.toneMapped=qt.getTransfer(S.colorSpace)!==te,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _e(new Gn(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ii(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=qt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,R){w.getRGB(Sa,tc(i)),e.buffers.color.setClear(Sa.r,Sa.g,Sa.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,R=1){o.set(w),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(o,a)},render:g,addToRenderList:_,dispose:f}}function u_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,z,O,I,k){let X=!1,Y=d(D,I,O,z);r!==Y&&(r=Y,c(r.object)),X=p(D,I,O,k),X&&g(D,I,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(D,z,O,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,z,O,I){let k=I.wireframe===!0,X=n[z.id];X===void 0&&(X={},n[z.id]=X);let Y=D.isInstancedMesh===!0?D.id:0,B=X[Y];B===void 0&&(B={},X[Y]=B);let U=B[O.id];U===void 0&&(U={},B[O.id]=U);let H=U[k];return H===void 0&&(H=u(l()),U[k]=H),H}function u(D){let z=[],O=[],I=[];for(let k=0;k<e;k++)z[k]=0,O[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:I,object:D,attributes:{},index:null}}function p(D,z,O,I){let k=r.attributes,X=z.attributes,Y=0,B=O.getAttributes();for(let U in B)if(B[U].location>=0){let Z=k[U],rt=X[U];if(rt===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor)),Z===void 0||Z.attribute!==rt||rt&&Z.data!==rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function g(D,z,O,I){let k={},X=z.attributes,Y=0,B=O.getAttributes();for(let U in B)if(B[U].location>=0){let Z=X[U];Z===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));let rt={};rt.attribute=Z,Z&&Z.data&&(rt.data=Z.data),k[U]=rt,Y++}r.attributes=k,r.attributesNum=Y,r.index=I}function _(){let D=r.newAttributes;for(let z=0,O=D.length;z<O;z++)D[z]=0}function m(D){f(D,0)}function f(D,z){let O=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;O[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),k[D]!==z&&(i.vertexAttribDivisor(D,z),k[D]=z)}function w(){let D=r.newAttributes,z=r.enabledAttributes;for(let O=0,I=z.length;O<I;O++)z[O]!==D[O]&&(i.disableVertexAttribArray(O),z[O]=0)}function R(D,z,O,I,k,X,Y){Y===!0?i.vertexAttribIPointer(D,z,O,k,X):i.vertexAttribPointer(D,z,O,I,k,X)}function S(D,z,O,I){_();let k=I.attributes,X=O.getAttributes(),Y=z.defaultAttributeValues;for(let B in X){let U=X[B];if(U.location>=0){let H=k[B];if(H===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),H!==void 0){let Z=H.normalized,rt=H.itemSize,at=t.get(H);if(at===void 0)continue;let Ft=at.buffer,Nt=at.type,$t=at.bytesPerElement,J=Nt===i.INT||Nt===i.UNSIGNED_INT||H.gpuType===Fo;if(H.isInterleavedBufferAttribute){let et=H.data,xt=et.stride,Lt=H.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<U.locationSize;yt++)f(U.location+yt,et.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<U.locationSize;yt++)m(U.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let yt=0;yt<U.locationSize;yt++)R(U.location+yt,rt/U.locationSize,Nt,Z,xt*$t,(Lt+rt/U.locationSize*yt)*$t,J)}else{if(H.isInstancedBufferAttribute){for(let et=0;et<U.locationSize;et++)f(U.location+et,H.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let et=0;et<U.locationSize;et++)m(U.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let et=0;et<U.locationSize;et++)R(U.location+et,rt/U.locationSize,Nt,Z,rt*$t,rt/U.locationSize*et*$t,J)}}else if(Y!==void 0){let Z=Y[B];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(U.location,Z);break;case 3:i.vertexAttrib3fv(U.location,Z);break;case 4:i.vertexAttrib4fv(U.location,Z);break;default:i.vertexAttrib1fv(U.location,Z)}}}}w()}function b(){E();for(let D in n){let z=n[D];for(let O in z){let I=z[O];for(let k in I){let X=I[k];for(let Y in X)h(X[Y].object),delete X[Y];delete I[k]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let O in z){let I=z[O];for(let k in I){let X=I[k];for(let Y in X)h(X[Y].object),delete X[Y];delete I[k]}}delete n[D.id]}function T(D){for(let z in n){let O=n[z];for(let I in O){let k=O[I];if(k[D.id]===void 0)continue;let X=k[D.id];for(let Y in X)h(X[Y].object),delete X[Y];delete k[D.id]}}}function v(D){for(let z in n){let O=n[z],I=D.isInstancedMesh===!0?D.id:0,k=O[I];if(k!==void 0){for(let X in k){let Y=k[X];for(let B in Y)h(Y[B].object),delete Y[B];delete k[X]}delete O[I],Object.keys(O).length===0&&delete n[z]}}}function E(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function d_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function f_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==tn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let v=T===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Qe&&T!==We&&!v&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:S,maxSamples:b,samples:y}}function p_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ge,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,R=w*4,S=f.clippingState||null;l.value=S,S=h(g,u,R,p);for(let b=0;b!==R;++b)S[b]=e[b];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,S=p;R!==_;++R,S+=4)o.copy(d[R]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ys=4,m_=6,g_=20,__=256,ar=new In,Mu=new Dt,cc=null,hc=0,uc=0,dc=!1,x_=new C,Pi=new C,wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=x_}=r;cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:vn,format:tn,colorSpace:Fs,depthBuffer:!1},s=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(r)),this._blurMaterial=M_(r,t,e),this._ggxMaterial=y_(r,t,e)}return s}_compileMaterial(t){let e=new _e(new re,t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,s,r){let l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Mu),d.toneMapping=_n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new hn,new cn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,f=!0):(m.color.copy(Mu),f=!0);for(let R=0;R<6;R++){let S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let b=this._cubeSize;vs(s,S*b,R>2?b:0,b,b),d.setRenderTarget(s),f&&d.render(_,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===li||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ar)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ys?n-g+ys:0),f=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,vs(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(a,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,vs(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(a,ar)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ys?s-this._lodMax+ys:0),u=4*(this._cubeSize-h);vs(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,ar)}};function v_(i){let t=[],e=[],n=i,s=i-ys+1+m_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),_=new Float32Array(p*u*d);for(let f=0;f<d;f++){let w=f%3*2/3-1,R=f>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];g.set(S,p*u*f);for(let b=0;b<u;b++){let y=h[b*2]*2-1,T=h[b*2+1]*2-1;f===0?Pi.set(1,T,y):f===1?Pi.set(-y,1,-T):f===2?Pi.set(-y,T,1):f===3?Pi.set(-1,T,-y):f===4?Pi.set(-y,-1,T):Pi.set(y,T,-1),Pi.toArray(_,(f*u+b)*p)}}let m=new re;m.setAttribute("position",new we(g,p)),m.setAttribute("outputDirection",new we(_,p)),e.push(new _e(m,null)),n>ys&&n--}return{lodMeshes:e,sizeLods:t}}function Su(i,t,e){let n=new Fe(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function y_(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:__,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function M_(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:g_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function bu(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function wu(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ea=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Pn});r.uniforms.tEquirect.value=e;let o=new _e(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=De),new Co(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function S_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Do||p===No)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Ea(g.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,g=p===Do||p===No,_=p===li||p===Ci;if(g||_){let m=e.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new wa(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new wa(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===Do?u.mapping=li:p===No&&(u.mapping=Ci),u}function l(u){let p=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function b_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yi("WebGLRenderer: "+n+" extension not supported."),s}}}function w_(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let w=p.array;_=p.version;for(let R=0,S=w.length;R<S;R+=3){let b=w[R+0],y=w[R+1],T=w[R+2];u.push(b,y,y,T,T,b)}}else{let w=g.array;_=g.version;for(let R=0,S=w.length/3-1;R<S;R+=3){let b=R+0,y=R+1,T=R+2;u.push(b,y,y,T,T,b)}}let m=new(g.count>=65535?Vs:ks)(u,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function E_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*o,p),e.update(u,n,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=u[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A_(i,t,e){let n=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let S=a.attributes.position.count*R,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let y=new Float32Array(S*b*4*d),T=new zs(y,S,b,d);T.type=We,T.needsUpdate=!0;let v=R*4;for(let P=0;P<d;P++){let D=m[P],z=f[P],O=w[P],I=S*b*4*P;for(let k=0;k<D.count;k++){let X=k*v;p===!0&&(s.fromBufferAttribute(D,k),y[I+X+0]=s.x,y[I+X+1]=s.y,y[I+X+2]=s.z,y[I+X+3]=0),g===!0&&(s.fromBufferAttribute(z,k),y[I+X+4]=s.x,y[I+X+5]=s.y,y[I+X+6]=s.z,y[I+X+7]=0),_===!0&&(s.fromBufferAttribute(O,k),y[I+X+8]=s.x,y[I+X+9]=s.y,y[I+X+10]=s.z,y[I+X+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new zt(S,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function R_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var C_={[Bl]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[zl]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[Hl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function I_(i,t,e,n,s,r){let o=new Fe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new re;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _e(c,h),u=new In(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,w=[],R=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),l!==null&&l.setSize(S,b);for(let y=0;y<w.length;y++){let T=w[y];T.setSize&&T.setSize(S,b)}},this.setEffects=function(S){w=S,R=w.length>0&&w[0].isRenderPass===!0;let b=o.width,y=o.height;w.length>0&&a===null&&(a=new Fe(b,y,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Fe(b,y,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<w.length;T++){let v=w[T];v.setSize&&v.setSize(b,y)}},this.begin=function(S,b){if(_||S.toneMapping===_n&&w.length===0)return!1;if(f=b,b!==null){let y=b.width,T=b.height;(o.width!==y||o.height!==T)&&this.setSize(y,T)}return R===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=_n,!0},this.hasRenderPass=function(){return R},this.end=function(S,b){S.toneMapping=m,_=!0;let y=o,T=a;for(let v=0;v<w.length;v++){let E=w[v];E.enabled!==!1&&(E.render(S,T,y,b),E.needsSwap!==!1&&(y=T,T=T===a?l:a))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,h.defines={},qt.getTransfer(p)===te&&(h.defines.SRGB_TRANSFER="");let v=C_[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(f),S.render(d,u),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wu=new Ue,mc=new ii(1,1),Xu=new zs,qu=new ho,Yu=new Gs,Eu=[],Tu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Aa(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function U_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),Ae(e,n)}}function F_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),Ae(e,n)}}function B_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Ae(e,n)}}function O_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function H_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function W_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function X_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function q_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=e.isReversedDepthBuffer()?Ma:ya,r=mc):r=Wu,e.setTexture2D(t||r,s)}function Y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function $_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yu,s)}function Z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function J_(i){switch(i){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return B_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return V_;case 5125:return H_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}function K_(i,t){i.uniform1fv(this.addr,t)}function j_(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function Q_(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function t0(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function e0(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n0(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i0(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s0(i,t){i.uniform1iv(this.addr,t)}function r0(i,t){i.uniform2iv(this.addr,t)}function o0(i,t){i.uniform3iv(this.addr,t)}function a0(i,t){i.uniform4iv(this.addr,t)}function l0(i,t){i.uniform1uiv(this.addr,t)}function c0(i,t){i.uniform2uiv(this.addr,t)}function h0(i,t){i.uniform3uiv(this.addr,t)}function u0(i,t){i.uniform4uiv(this.addr,t)}function d0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=mc:o=Wu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function f0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qu,r[o])}function p0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yu,r[o])}function m0(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xu,r[o])}function g0(i){switch(i){case 5126:return K_;case 35664:return j_;case 35665:return Q_;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return o0;case 35669:case 35673:return a0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}var gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J_(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g0(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function _0(i,t,e){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),o=fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Iu(e,c===void 0?new gc(a,i,t):new _c(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new xc(a),Iu(e,d)),e=d}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);_0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var x0=37297,v0=0;function y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Lu=new Ut;function M0(i){qt._getMatrix(Lu,qt.workingColorSpace,i);let t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y0(i.getShaderSource(t),a)}else return r}function S0(i,t){let e=M0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var b0={[Bl]:"Linear",[Ol]:"Reinhard",[zl]:"Cineon",[kl]:"ACESFilmic",[Hl]:"AgX",[Gl]:"Neutral",[Vl]:"Custom"};function w0(i,t){let e=b0[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ba=new C;function E0(){qt.getLuminanceCoefficients(ba);let i=ba.x.toFixed(4),t=ba.y.toFixed(4),e=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function A0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function Nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(C0,P0)}var I0=new Map;function P0(i,t){let e=kt[t];if(e===void 0){let n=I0.get(t);if(n!==void 0)e=kt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vc(e)}var L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(i){return i.replace(L0,D0)}function D0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var N0={[js]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function U0(i){return N0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F0={[li]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function B0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var O0={[Ci]:"ENVMAP_MODE_REFRACTION"};function z0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k0={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[tu]:"ENVMAP_BLENDING_MIX",[eu]:"ENVMAP_BLENDING_ADD"};function V0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":k0[i.combine]||"ENVMAP_BLENDING_NONE"}function H0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function G0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=U0(e),c=B0(e),h=z0(e),d=V0(e),u=H0(e),p=T0(e),g=A0(r),_=s.createProgram(),m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?kt.tonemapping_pars_fragment:"",e.toneMapping!==_n?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,S0("linearToOutputTexel",e.outputColorSpace),E0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=vc(o),o=Nu(o,e),o=Uu(o,e),a=vc(a),a=Nu(a,e),a=Uu(a,e),o=Fu(o),a=Fu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=w+m+o,S=w+f+a,b=Pu(s,s.VERTEX_SHADER,R),y=Pu(s,s.FRAGMENT_SHADER,S);s.attachShader(_,b),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(y)||"",k=z.trim(),X=O.trim(),Y=I.trim(),B=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,y);else{let H=Du(s,b,"vertex"),Z=Du(s,y,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+H+`
`+Z)}else k!==""?Ct("WebGLProgram: Program Info Log:",k):(X===""||Y==="")&&(U=!1);U&&(D.diagnostics={runnable:B,programLog:k,vertexShader:{log:X,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(b),s.deleteShader(y),v=new Ms(s,_),E=R0(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,x0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=y,this}var W0=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mc(t),e.set(t,n)),n}},Mc=class{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}};function X0(i){return i===ui||i===rr||i===or}function q0(i,t,e,n,s,r){let o=new as,a=new yc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,P,D,z,O){let I=D.fog,k=z.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=t.get(v.envMap||X,Y),U=B&&B.mapping===Qs?B.image.height:null,H=p[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ct("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=Z!==void 0?Z.length:0,at=0;k.morphAttributes.position!==void 0&&(at=1),k.morphAttributes.normal!==void 0&&(at=2),k.morphAttributes.color!==void 0&&(at=3);let Ft,Nt,$t,J;if(H){let ae=Dn[H];Ft=ae.vertexShader,Nt=ae.fragmentShader}else{Ft=v.vertexShader,Nt=v.fragmentShader;let ae=a.getVertexShaderStage(v),jt=a.getFragmentShaderStage(v);a.update(v,ae,jt),$t=ae.id,J=jt.id}let et=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Vt=!!v.map,Ee=!!v.matcap,Gt=!!B,Kt=!!v.aoMap,oe=!!v.lightMap,Xt=!!v.bumpMap&&v.wireframe===!1,fe=!!v.normalMap,Re=!!v.displacementMap,je=!!v.emissiveMap,me=!!v.metalnessMap,ve=!!v.roughnessMap,F=v.anisotropy>0,ze=v.clearcoat>0,ee=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,V=v.sheen>0,q=v.transmission>0,K=F&&!!v.anisotropyMap,ot=ze&&!!v.clearcoatMap,lt=ze&&!!v.clearcoatNormalMap,j=ze&&!!v.clearcoatRoughnessMap,tt=x&&!!v.iridescenceMap,ct=x&&!!v.iridescenceThicknessMap,Tt=V&&!!v.sheenColorMap,ft=V&&!!v.sheenRoughnessMap,ht=!!v.specularMap,At=!!v.specularColorMap,It=!!v.specularIntensityMap,Bt=q&&!!v.transmissionMap,N=q&&!!v.thicknessMap,ut=!!v.gradientMap,Q=!!v.alphaMap,dt=v.alphaTest>0,_t=!!v.alphaHash,it=!!v.extensions,Rt=_n;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let wt={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:Ft,fragmentShader:Nt,defines:v.defines,customVertexShaderID:$t,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:Ee,envMap:Gt,envMapMode:Gt&&B.mapping,envMapCubeUVHeight:U,aoMap:Kt,lightMap:oe,bumpMap:Xt,normalMap:fe,displacementMap:Re,emissiveMap:je,normalMapObjectSpace:fe&&v.normalMapType===su,normalMapTangentSpace:fe&&v.normalMapType===va,packedNormalMap:fe&&v.normalMapType===va&&X0(v.normalMap.format),metalnessMap:me,roughnessMap:ve,anisotropy:F,anisotropyMap:K,clearcoat:ze,clearcoatMap:ot,clearcoatNormalMap:lt,clearcoatRoughnessMap:j,dispersion:ee,retroreflection:A,iridescence:x,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:V,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:ht,specularColorMap:At,specularIntensityMap:It,transmission:q,transmissionMap:Bt,thicknessMap:N,gradientMap:ut,opaque:v.transparent===!1&&v.blending===ms&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:dt,alphaHash:_t,combine:v.combine,mapUv:Vt&&g(v.map.channel),aoMapUv:Kt&&g(v.aoMap.channel),lightMapUv:oe&&g(v.lightMap.channel),bumpMapUv:Xt&&g(v.bumpMap.channel),normalMapUv:fe&&g(v.normalMap.channel),displacementMapUv:Re&&g(v.displacementMap.channel),emissiveMapUv:je&&g(v.emissiveMap.channel),metalnessMapUv:me&&g(v.metalnessMap.channel),roughnessMapUv:ve&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:ot&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(v.sheenRoughnessMap.channel),specularMapUv:ht&&g(v.specularMap.channel),specularColorMapUv:At&&g(v.specularColorMap.channel),specularIntensityMapUv:It&&g(v.specularIntensityMap.channel),transmissionMapUv:Bt&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||F),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Vt||Q),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:at,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&qt.getTransfer(v.map.colorSpace)===te,decodeVideoTextureEmissive:je&&v.emissiveMap.isVideoTexture===!0&&qt.getTransfer(v.emissiveMap.colorSpace)===te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===Je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(f(E,v),w(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function w(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){let E=p[v.type],P;if(E){let D=Dn[E];P=xu.clone(D.uniforms)}else P=v.uniforms;return P}function S(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new G0(i,E,v,s),c.push(P),h.set(E,P)),P}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:T}}function Y0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,_,m,f){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:f},i[t]=w):(w.id=u.id,w.object=u,w.geometry=p,w.material=g,w.materialVariant=o(u),w.groupOrder=_,w.renderOrder=u.renderOrder,w.z=m,w.group=f),t++,w}function l(u,p,g,_,m,f,w){w.reversedDepth===!0&&(m=-m);let R=a(u,p,g,_,m,f);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,p,g,_,m,f){let w=a(u,p,g,_,m,f);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,p){e.length>1&&e.sort(u||$0),n.length>1&&n.sort(p||Ou),s.length>1&&s.sort(p||Ou)}function d(){for(let u=t,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Z0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new zu,i.set(n,[o])):s>=r.length?(o=new zu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function J0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Dt};break;case"SpotLight":e={position:new C,direction:new C,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function K0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j0=0;function Q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tx(i){let t=new J0,e=K0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ht,o=new Ht;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,R=0,S=0,b=0,y=0,T=0,v=0,E=0,P=0;c.sort(Q0);for(let z=0,O=c.length;z<O;z++){let I=c[z],k=I.color,X=I.intensity,Y=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ui?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*X,d+=k.g*X,u+=k.b*X;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],X);P++}else if(I.isSunLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=B;let rt=H.getViewportCount();for(let at=0;at<rt;at++)n.sunShadowMatrix[_+at]=H.getMatrix(at),n.sunShadowCascade[_+at]=H._cascadeData[at];_+=rt,g++}n.sun[p]=U,p++}else if(I.isDirectionalLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=U,m++}else if(I.isSpotLight){let U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(k).multiplyScalar(X),U.distance=Y,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[w]=U;let H=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,H.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[w]=H.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[w]=Z,n.spotShadowMap[w]=B,T++}w++}else if(I.isRectAreaLight){let U=t.get(I);U.color.copy(k).multiplyScalar(X),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=U,R++}else if(I.isPointLight){let U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let H=I.shadow,Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=B,n.pointShadowMatrix[f]=I.shadow.matrix,y++}n.point[f]=U,f++}else if(I.isHemisphereLight){let U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(X),U.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[S]=U,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==w||D.rectAreaLength!==R||D.hemiLength!==S||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==T||D.numSpotMaps!==v||D.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=w,n.rectArea.length=R,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=w,D.rectAreaLength=R,D.hemiLength=S,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=T,D.numSpotMaps=v,D.numLightProbes=P,n.version=j0++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0,m=0,f=h.matrixWorldInverse;for(let w=0,R=c.length;w<R;w++){let S=c[w];if(S.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),d++}else if(S.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(S.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(S.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function ku(i){let t=new tx(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ex(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ku(i),t.set(s,[a])):r>=o.length?(a=new ku(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ix=`uniform sampler2D shadow_pass;
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
}`,sx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],rx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Vu=new Ht,lr=new C,pc=new C;function ox(i,t,e){let n=new Cn,s=new zt,r=new zt,o=new pe,a=new go,l=new _o,c={},h=e.maxTextureSize,d={[ai]:Je,[Je]:ai,[Be]:Be},u=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:nx,fragmentShader:ix}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new re;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new _e(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let f=this.type;this.render=function(y,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Uh&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Pn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=f!==this.type;O&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=y.length;I<k;I++){let X=y[I],Y=X.shadow;if(Y===void 0){Ct("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let B=Y.getFrameExtents();s.multiply(B),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,Y.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=U,Y.map===null||O===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ps){if(X.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Fe(s.x,s.y,{format:ui,type:vn,minFilter:De,magFilter:De,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new ii(s.x,s.y,We),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=Tn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ie,Y.map.depthTexture.magFilter=Ie}else X.isPointLight?(Y.map=new Ea(s.x),Y.map.depthTexture=new po(s.x,xn)):(Y.map=new Fe(s.x,s.y),Y.map.depthTexture=new ii(s.x,s.y,xn)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=Tn,this.type===js?(Y.map.depthTexture.compareFunction=U?Ma:ya,Y.map.depthTexture.minFilter=De,Y.map.depthTexture.magFilter=De):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ie,Y.map.depthTexture.magFilter=Ie);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let H=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,v);for(let Z=0;Z<H;Z++){let rt=Y.getCamera(Z);if(X.isPointLight){let at=Y.camera,Ft=Y.matrix,Nt=X.distance||at.far;Nt!==at.far&&(at.far=Nt,at.updateProjectionMatrix()),lr.setFromMatrixPosition(X.matrixWorld),at.position.copy(lr),pc.copy(at.position),pc.add(sx[Z]),at.up.copy(rx[Z]),at.lookAt(pc),at.updateMatrixWorld(),Ft.makeTranslation(-lr.x,-lr.y,-lr.z),Vu.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Vu,at.coordinateSystem,at.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(Y.map),i.clear());let at=Y.getViewport(Z);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),z.viewport(o)}n=Y.getFrustum(Z),S(T,v,rt,X,this.type)}Y.isPointLightShadow!==!0&&this.type===ps&&w(Y,v),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,D)};function w(y,T){let v=t.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new Fe(s.x,s.y,{format:ui,type:vn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,v,u,_,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,v,p,_,null)}function R(y,T,v,E){let P=null,D=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)P=D;else if(P=v.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let z=P.uuid,O=T.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let k=I[O];k===void 0&&(k=P.clone(),I[O]=k,T.addEventListener("dispose",b)),P=k}if(P.visible=T.visible,P.wireframe=T.wireframe,E===ps?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:d[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=v}return P}function S(y,T,v,E,P){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===ps)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);let O=t.update(y),I=y.material;if(Array.isArray(I)){let k=O.groups;for(let X=0,Y=k.length;X<Y;X++){let B=k[X],U=I[B.materialIndex];if(U&&U.visible){let H=R(y,U,E,P);y.onBeforeShadow(i,y,T,v,O,H,B),i.renderBufferDirect(v,null,O,H,y,B),y.onAfterShadow(i,y,T,v,O,H,B)}}}else if(I.visible){let k=R(y,I,E,P);y.onBeforeShadow(i,y,T,v,O,k,null),i.renderBufferDirect(v,null,O,k,y,null),y.onAfterShadow(i,y,T,v,O,k,null)}}let z=y.children;for(let O=0,I=z.length;O<I;O++)S(z[O],T,v,E,P)}function b(y){y.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],P=y.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function ax(i,t){function e(){let N=!1,ut=new pe,Q=null,dt=new pe(0,0,0,0);return{setMask:function(_t){Q!==_t&&!N&&(i.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){N=_t},setClear:function(_t,it,Rt,wt,ae){ae===!0&&(_t*=wt,it*=wt,Rt*=wt),ut.set(_t,it,Rt,wt),dt.equals(ut)===!1&&(i.clearColor(_t,it,Rt,wt),dt.copy(ut))},reset:function(){N=!1,Q=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,Q=null,dt=null,_t=null;return{setReversed:function(it){if(ut!==it){let Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let wt=_t;_t=null,this.setClear(wt)}},getReversed:function(){return ut},setTest:function(it){it?et(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!N&&(i.depthMask(it),Q=it)},setFunc:function(it){if(ut&&(it=gu[it]),dt!==it){switch(it){case Qr:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=it}},setLocked:function(it){N=it},setClear:function(it){_t!==it&&(_t=it,ut&&(it=1-it),i.clearDepth(it))},reset:function(){N=!1,Q=null,dt=null,_t=null,ut=!1}}}function s(){let N=!1,ut=null,Q=null,dt=null,_t=null,it=null,Rt=null,wt=null,ae=null;return{setTest:function(jt){N||(jt?et(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(jt){ut!==jt&&!N&&(i.stencilMask(jt),ut=jt)},setFunc:function(jt,un,Sn){(Q!==jt||dt!==un||_t!==Sn)&&(i.stencilFunc(jt,un,Sn),Q=jt,dt=un,_t=Sn)},setOp:function(jt,un,Sn){(it!==jt||Rt!==un||wt!==Sn)&&(i.stencilOp(jt,un,Sn),it=jt,Rt=un,wt=Sn)},setLocked:function(jt){N=jt},setClear:function(jt){ae!==jt&&(i.clearStencil(jt),ae=jt)},reset:function(){N=!1,ut=null,Q=null,dt=null,_t=null,it=null,Rt=null,wt=null,ae=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,w=null,R=null,S=null,b=null,y=null,T=null,v=new Dt(0,0,0),E=0,P=!1,D=null,z=null,O=null,I=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,B=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=B>=2);let H=null,Z={},rt=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Ft=new pe().fromArray(rt),Nt=new pe().fromArray(at);function $t(N,ut,Q,dt){let _t=new Uint8Array(4),it=i.createTexture();i.bindTexture(N,it),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<Q;Rt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ut+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return it}let J={};J[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(es),Xt(!1),fe(Pl),et(i.CULL_FACE),Kt(Pn);function et(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function xt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Lt(N,ut){return u[N]!==ut?(i.bindFramebuffer(N,ut),u[N]=ut,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function yt(N,ut){let Q=g,dt=!1;if(N){Q=p.get(ut),Q===void 0&&(Q=[],p.set(ut,Q));let _t=N.textures;if(Q.length!==_t.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Rt=_t.length;it<Rt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=_t.length,dt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,dt=!0);dt&&i.drawBuffers(Q)}function Vt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let Ee={[Ri]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};Ee[zh]=i.MIN,Ee[kh]=i.MAX;let Gt={[Vh]:i.ZERO,[Hh]:i.ONE,[Gh]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[Wh]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[Kh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,ut,Q,dt,_t,it,Rt,wt,ae,jt){if(N===Pn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),N!==Fh){if(N!==f||jt!==P){if((w!==Ri||b!==Ri)&&(i.blendEquation(i.FUNC_ADD),w=Ri,b=Ri),jt)switch(N){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",N);break}else switch(N){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dl:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",N);break}R=null,S=null,y=null,T=null,v.set(0,0,0),E=0,f=N,P=jt}return}_t=_t||ut,it=it||Q,Rt=Rt||dt,(ut!==w||_t!==b)&&(i.blendEquationSeparate(Ee[ut],Ee[_t]),w=ut,b=_t),(Q!==R||dt!==S||it!==y||Rt!==T)&&(i.blendFuncSeparate(Gt[Q],Gt[dt],Gt[it],Gt[Rt]),R=Q,S=dt,y=it,T=Rt),(wt.equals(v)===!1||ae!==E)&&(i.blendColor(wt.r,wt.g,wt.b,ae),v.copy(wt),E=ae),f=N,P=!1}function oe(N,ut){N.side===Be?xt(i.CULL_FACE):et(i.CULL_FACE);let Q=N.side===Je;ut&&(Q=!Q),Xt(Q),N.blending===ms&&N.transparent===!1?Kt(Pn):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let dt=N.stencilWrite;a.setTest(dt),dt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),je(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function fe(N){N!==Dh?(et(i.CULL_FACE),N!==z&&(N===Pl?i.cullFace(i.BACK):N===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),z=N}function Re(N){N!==O&&(Y&&i.lineWidth(N),O=N)}function je(N,ut,Q){N?(et(i.POLYGON_OFFSET_FILL),(I!==ut||k!==Q)&&(I=ut,k=Q,o.getReversed()&&(ut=-ut),i.polygonOffset(ut,Q))):xt(i.POLYGON_OFFSET_FILL)}function me(N){N?et(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function ve(N){N===void 0&&(N=i.TEXTURE0+X-1),H!==N&&(i.activeTexture(N),H=N)}function F(N,ut,Q){Q===void 0&&(H===null?Q=i.TEXTURE0+X-1:Q=H);let dt=Z[Q];dt===void 0&&(dt={type:void 0,texture:void 0},Z[Q]=dt),(dt.type!==N||dt.texture!==ut)&&(H!==Q&&(i.activeTexture(Q),H=Q),i.bindTexture(N,ut||J[N]),dt.type=N,dt.texture=ut)}function ze(){let N=Z[H];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function V(){try{i.texSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function ot(){try{i.texStorage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function lt(){try{i.texStorage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function j(){try{i.texImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function tt(){try{i.texImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function ct(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Tt(N,ut){d[N]!==ut&&(i.pixelStorei(N,ut),d[N]=ut)}function ft(N){Ft.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ft.copy(N))}function ht(N){Nt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Nt.copy(N))}function At(N,ut){let Q=c.get(ut);Q===void 0&&(Q=new WeakMap,c.set(ut,Q));let dt=Q.get(N);dt===void 0&&(dt=i.getUniformBlockIndex(ut,N.name),Q.set(N,dt))}function It(N,ut){let dt=c.get(ut).get(N);l.get(ut)!==dt&&(i.uniformBlockBinding(ut,dt,N.__bindingPointIndex),l.set(ut,dt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},H=null,Z={},u={},p=new WeakMap,g=[],_=null,m=!1,f=null,w=null,R=null,S=null,b=null,y=null,T=null,v=new Dt(0,0,0),E=0,P=!1,D=null,z=null,O=null,I=null,k=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:xt,bindFramebuffer:Lt,drawBuffers:yt,useProgram:Vt,setBlending:Kt,setMaterial:oe,setFlipSided:Xt,setCullFace:fe,setLineWidth:Re,setPolygonOffset:je,setScissorTest:me,activeTexture:ve,bindTexture:F,unbindTexture:ze,compressedTexImage2D:ee,compressedTexImage3D:A,texImage2D:j,texImage3D:tt,pixelStorei:Tt,getParameter:ct,updateUBOMapping:At,uniformBlockBinding:It,texStorage2D:ot,texStorage3D:lt,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:ft,viewport:ht,reset:Bt}}function lx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return g?new OffscreenCanvas(A,x):Os("canvas")}function m(A,x,V){let q=1,K=ee(A);if((K.width>V||K.height>V)&&(q=V/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ot=Math.floor(q*K.width),lt=Math.floor(q*K.height);u===void 0&&(u=_(ot,lt));let j=x?_(ot,lt):u;return j.width=ot,j.height=lt,j.getContext("2d").drawImage(A,0,0,ot,lt),Ct("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+lt+")."),j}else return"data"in A&&Ct("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function f(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,x,V,q,K,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt;q&&(lt=t.get("EXT_texture_norm16"),lt||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8),V===i.UNSIGNED_SHORT&&lt&&(j=lt.R16_EXT),V===i.SHORT&&lt&&(j=lt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),x===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8),V===i.UNSIGNED_SHORT&&lt&&(j=lt.RG16_EXT),V===i.SHORT&&lt&&(j=lt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&lt&&(j=lt.RGB16_EXT),V===i.SHORT&&lt&&(j=lt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let tt=ot?Bs:qt.getTransfer(K);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=tt===te?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&lt&&(j=lt.RGBA16_EXT),V===i.SHORT&&lt&&(j=lt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(A,x){let V;return A?x===null||x===xn||x===_s?V=i.DEPTH24_STENCIL8:x===We?V=i.DEPTH32F_STENCIL8:x===gs&&(V=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===_s?V=i.DEPTH_COMPONENT24:x===We?V=i.DEPTH_COMPONENT32F:x===gs&&(V=i.DEPTH_COMPONENT16),V}function y(A,x){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ie&&A.minFilter!==De?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){let x=A.target;x.removeEventListener("dispose",T),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(A){let x=A.target;x.removeEventListener("dispose",v),D(x)}function E(A){let x=n.get(A);if(x.__webglInit===void 0)return;let V=A.source,q=p.get(V);if(q){let K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(A),Object.keys(q).length===0&&p.delete(V)}n.remove(A)}function P(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let V=A.source,q=p.get(V);delete q[x.__cacheKey],o.memory.textures--}function D(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=A.textures;for(let q=0,K=V.length;q<K;q++){let ot=n.get(V[q]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(A)}let z=0;function O(){z=0}function I(){return z}function k(A){z=A}function X(){let A=z;return A>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function B(A,x){let V=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let q=A.image;if(q===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function U(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){xt(V,A,x);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function H(A,x){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){xt(V,A,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function Z(A,x){let V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Lt(V,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let rt={[ns]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},at={[Ie]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Ft={[ou]:i.NEVER,[uu]:i.ALWAYS,[au]:i.LESS,[ya]:i.LEQUAL,[lu]:i.EQUAL,[Ma]:i.GEQUAL,[cu]:i.GREATER,[hu]:i.NOTEQUAL};function Nt(A,x){if(x.type===We&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===De||x.magFilter===Uo||x.magFilter===tr||x.magFilter===ci||x.minFilter===De||x.minFilter===Uo||x.minFilter===tr||x.minFilter===ci)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,rt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,at[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==tr&&x.minFilter!==ci||x.type===We&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));let q=x.source,K=p.get(q);K===void 0&&(K={},p.set(q,K));let ot=Y(x);if(ot!==A.__cacheKey){K[ot]===void 0&&(K[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),K[ot].usedTimes++;let lt=K[A.__cacheKey];lt!==void 0&&(K[A.__cacheKey].usedTimes--,lt.usedTimes===0&&P(x)),A.__cacheKey=ot,A.__webglTexture=K[ot].texture}return V}function J(A,x,V){return Math.floor(Math.floor(A/V)/x)}function et(A,x,V,q){let ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,q,x.data);else{ot.sort((Tt,ft)=>Tt.start-ft.start);let lt=0;for(let Tt=1;Tt<ot.length;Tt++){let ft=ot[lt],ht=ot[Tt],At=ft.start+ft.count,It=J(ht.start,x.width,4),Bt=J(ft.start,x.width,4);ht.start<=At+1&&It===Bt&&J(ht.start+ht.count-1,x.width,4)===It?ft.count=Math.max(ft.count,ht.start+ht.count-ft.start):(++lt,ot[lt]=ht)}ot.length=lt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Tt=0,ft=ot.length;Tt<ft;Tt++){let ht=ot[Tt],At=Math.floor(ht.start/4),It=Math.ceil(ht.count/4),Bt=At%x.width,N=Math.floor(At/x.width),ut=It,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Bt,N,ut,Q,V,q,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function xt(A,x,V){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let K=$t(A,x),ot=x.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+V);let lt=n.get(ot);if(ot.version!==lt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Q=qt.getPrimaries(qt.workingColorSpace),dt=x.colorSpace===Wn?null:qt.getPrimaries(x.colorSpace),_t=x.colorSpace===Wn||Q===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=m(x.image,!1,s.maxTextureSize);tt=ze(x,tt);let ct=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),ft=S(x.internalFormat,ct,Tt,x.normalized,x.colorSpace,x.isVideoTexture);Nt(q,x);let ht,At=x.mipmaps,It=x.isVideoTexture!==!0,Bt=lt.__version===void 0||K===!0,N=ot.dataReady,ut=y(x,tt);if(x.isDepthTexture)ft=b(x.format===hi,x.type),Bt&&(It?e.texStorage2D(i.TEXTURE_2D,1,ft,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,ct,Tt,null));else if(x.isDataTexture)if(At.length>0){It&&Bt&&e.texStorage2D(i.TEXTURE_2D,ut,ft,At[0].width,At[0].height);for(let Q=0,dt=At.length;Q<dt;Q++)ht=At[Q],It?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,Tt,ht.data):e.texImage2D(i.TEXTURE_2D,Q,ft,ht.width,ht.height,0,ct,Tt,ht.data);x.generateMipmaps=!1}else It?(Bt&&e.texStorage2D(i.TEXTURE_2D,ut,ft,tt.width,tt.height),N&&et(x,tt,ct,Tt)):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,ct,Tt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,ft,At[0].width,At[0].height,tt.depth);for(let Q=0,dt=At.length;Q<dt;Q++)if(ht=At[Q],x.format!==tn)if(ct!==null)if(It){if(N)if(x.layerUpdates.size>0){let _t=ic(ht.width,ht.height,x.format,x.type);for(let it of x.layerUpdates){let Rt=ht.data.subarray(it*_t/ht.data.BYTES_PER_ELEMENT,(it+1)*_t/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,ht.width,ht.height,1,ct,Rt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ct,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ft,ht.width,ht.height,tt.depth,0,ht.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,tt.depth,ct,Tt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ft,ht.width,ht.height,tt.depth,0,ct,Tt,ht.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{It&&Bt&&e.texStorage2D(i.TEXTURE_2D,ut,ft,At[0].width,At[0].height);for(let Q=0,dt=At.length;Q<dt;Q++)ht=At[Q],x.format!==tn?ct!==null?It?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ft,ht.width,ht.height,0,ht.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ht.width,ht.height,ct,Tt,ht.data):e.texImage2D(i.TEXTURE_2D,Q,ft,ht.width,ht.height,0,ct,Tt,ht.data)}else if(x.isDataArrayTexture)if(It){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,ft,tt.width,tt.height,tt.depth),N)if(x.layerUpdates.size>0){let Q=ic(tt.width,tt.height,x.format,x.type);for(let dt of x.layerUpdates){let _t=tt.data.subarray(dt*Q/tt.data.BYTES_PER_ELEMENT,(dt+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,tt.width,tt.height,1,ct,Tt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,tt.width,tt.height,tt.depth,0,ct,Tt,tt.data);else if(x.isData3DTexture)It?(Bt&&e.texStorage3D(i.TEXTURE_3D,ut,ft,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,tt.width,tt.height,tt.depth,0,ct,Tt,tt.data);else if(x.isFramebufferTexture){if(Bt)if(It)e.texStorage2D(i.TEXTURE_2D,ut,ft,tt.width,tt.height);else{let Q=tt.width,dt=tt.height;for(let _t=0;_t<ut;_t++)e.texImage2D(i.TEXTURE_2D,_t,ft,Q,dt,0,ct,Tt,null),Q>>=1,dt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),d.add(x),Q.onpaint=dt=>{let _t=dt.changedElements;for(let it of d)_t.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let _t=i.RGBA,it=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,it,Rt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(It&&Bt){let Q=ee(At[0]);e.texStorage2D(i.TEXTURE_2D,ut,ft,Q.width,Q.height)}for(let Q=0,dt=At.length;Q<dt;Q++)ht=At[Q],It?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct,Tt,ht):e.texImage2D(i.TEXTURE_2D,Q,ft,ct,Tt,ht);x.generateMipmaps=!1}else if(It){if(Bt){let Q=ee(tt);e.texStorage2D(i.TEXTURE_2D,ut,ft,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,ft,ct,Tt,tt);f(x)&&w(q),lt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Lt(A,x,V){if(x.image.length!==6)return;let q=$t(A,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let ot=n.get(K);if(K.version!==ot.__version||q===!0){e.activeTexture(i.TEXTURE0+V);let lt=qt.getPrimaries(qt.workingColorSpace),j=x.colorSpace===Wn?null:qt.getPrimaries(x.colorSpace),tt=x.colorSpace===Wn||lt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,Tt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let it=0;it<6;it++)!ct&&!Tt?ft[it]=m(x.image[it],!0,s.maxCubemapSize):ft[it]=Tt?x.image[it].image:x.image[it],ft[it]=ze(x,ft[it]);let ht=ft[0],At=r.convert(x.format,x.colorSpace),It=r.convert(x.type),Bt=S(x.internalFormat,At,It,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ut=ot.__version===void 0||q===!0,Q=K.dataReady,dt=y(x,ht);Nt(i.TEXTURE_CUBE_MAP,x);let _t;if(ct){N&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Bt,ht.width,ht.height);for(let it=0;it<6;it++){_t=ft[it].mipmaps;for(let Rt=0;Rt<_t.length;Rt++){let wt=_t[Rt];x.format!==tn?At!==null?N?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,Bt,wt.width,wt.height,0,wt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,wt.width,wt.height,At,It,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,Bt,wt.width,wt.height,0,At,It,wt.data)}}}else{if(_t=x.mipmaps,N&&ut){_t.length>0&&dt++;let it=ee(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Bt,it.width,it.height)}for(let it=0;it<6;it++)if(Tt){N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft[it].width,ft[it].height,At,It,ft[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,ft[it].width,ft[it].height,0,At,It,ft[it].data);for(let Rt=0;Rt<_t.length;Rt++){let ae=_t[Rt].image[it].image;N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,ae.width,ae.height,At,It,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,Bt,ae.width,ae.height,0,At,It,ae.data)}}else{N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,At,It,ft[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,At,It,ft[it]);for(let Rt=0;Rt<_t.length;Rt++){let wt=_t[Rt];N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,At,It,wt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,Bt,At,It,wt.image[it])}}}f(x)&&w(i.TEXTURE_CUBE_MAP),ot.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function yt(A,x,V,q,K,ot){let lt=r.convert(V.format,V.colorSpace),j=r.convert(V.type),tt=S(V.internalFormat,lt,j,V.normalized,V.colorSpace),ct=n.get(x),Tt=n.get(V);if(Tt.__renderTarget=x,!ct.__hasExternalTextures){let ft=Math.max(1,x.width>>ot),ht=Math.max(1,x.height>>ot);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,tt,ft,ht,x.depth,0,lt,j,null):e.texImage2D(K,ot,tt,ft,ht,0,lt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ve(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Tt.__webglTexture,0,me(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Tt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(A,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,ot=b(x.stencilBuffer,K),lt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(x),ot,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(x),ot,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ot,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,A)}else{let q=x.textures;for(let K=0;K<q.length;K++){let ot=q[K],lt=r.convert(ot.format,ot.colorSpace),j=r.convert(ot.type),tt=S(ot.internalFormat,lt,j,ot.normalized,ot.colorSpace);ve(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(x),tt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(x),tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,x,V){let q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x.depthTexture);let ct=r.convert(x.depthTexture.format),Tt=r.convert(x.depthTexture.type),ft;x.depthTexture.format===Tn?ft=i.DEPTH_COMPONENT24:x.depthTexture.format===hi&&(ft=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ft,x.width,x.height,0,ct,Tt,null)}}else B(x.depthTexture,0);let ot=K.__webglTexture,lt=me(x),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,tt=x.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Tn)ve(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,j,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,j,ot,0);else if(x.depthTexture.format===hi)ve(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,j,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,tt,j,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(A){let x=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)Ee(x.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?Ee(x.__webglFramebuffer[0],A,0):Ee(x.__webglFramebuffer,A,0)}else if(V){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Vt(x.__webglDepthbuffer[q],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Vt(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(A,x,V){let q=n.get(A);x!==void 0&&yt(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Gt(A)}function oe(A){let x=A.texture,V=n.get(A),q=n.get(x);A.addEventListener("dispose",v);let K=A.textures,ot=A.isWebGLCubeRenderTarget===!0,lt=K.length>1;if(lt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,o.memory.textures++),ot){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let tt=0;tt<x.mipmaps.length;tt++)V.__webglFramebuffer[j][tt]=i.createFramebuffer()}else V.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)V.__webglFramebuffer[j]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(lt)for(let j=0,tt=K.length;j<tt;j++){let ct=n.get(K[j]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ve(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let tt=K[j];V.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[j]);let ct=r.convert(tt.format,tt.colorSpace),Tt=r.convert(tt.type),ft=S(tt.internalFormat,ct,Tt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),ht=me(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,V.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)yt(V.__webglFramebuffer[j][tt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else yt(V.__webglFramebuffer[j],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(x)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let j=0,tt=K.length;j<tt;j++){let ct=K[j],Tt=n.get(ct),ft=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Tt.__webglTexture),Nt(ft,ct),yt(V.__webglFramebuffer,A,ct,i.COLOR_ATTACHMENT0+j,ft,0),f(ct)&&w(ft)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),Nt(j,x),x.mipmaps&&x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)yt(V.__webglFramebuffer[tt],A,x,i.COLOR_ATTACHMENT0,j,tt);else yt(V.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,j,0);f(x)&&w(j),e.unbindTexture()}A.depthBuffer&&Gt(A)}function Xt(A){let x=A.textures;for(let V=0,q=x.length;V<q;V++){let K=x[V];if(f(K)){let ot=R(A),lt=n.get(K).__webglTexture;e.bindTexture(ot,lt),w(ot),e.unbindTexture()}}}let fe=[],Re=[];function je(A){if(A.samples>0){if(ve(A)===!1){let x=A.textures,V=A.width,q=A.height,K=i.COLOR_BUFFER_BIT,ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(A),j=x.length>1;if(j)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Tt=n.get(x[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,K,i.NEAREST),l===!0&&(fe.length=0,Re.length=0,fe.push(i.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(fe.push(ot),Re.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let Tt=n.get(x[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function me(A){return Math.min(s.maxSamples,A.samples)}function ve(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ze(A,x){let V=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Fs&&V!==Wn&&(qt.getTransfer(V)===te?(q!==tn||K!==Qe)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",V)),x}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=Kt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cx(i,t){function e(n,s=Wn){let r,o=qt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return i.BYTE;if(n===ql)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===We)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===Jl)return i.RGB;if(n===tn)return i.RGBA;if(n===Tn)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Vo)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===$o||n===Zo||n===Jo||n===Ko||n===rr||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===$o)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jo)return r.COMPRESSED_R11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rr)return r.COMPRESSED_RG11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fa)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ga||n===_a||n===or||n===xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`,Sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends An{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Sc,f={},w=e.getContextAttributes(),R=null,S=null,b=[],y=[],T=new zt,v=null,E=null,P=new Ge;P.viewport=new pe;let D=new Ge;D.viewport=new pe;let z=[P,D],O=new Io,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=b[J];return et===void 0&&(et=new ls,b[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=b[J];return et===void 0&&(et=new ls,b[J]=et),et.getGripSpace()},this.getHand=function(J){let et=b[J];return et===void 0&&(et=new ls,b[J]=et),et.getHandSpace()};function X(J){let et=y.indexOf(J.inputSource);if(et===-1)return;let xt=b[et];xt!==void 0&&(xt.update(J.inputSource,J.frame,c||o),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",B);for(let J=0;J<b.length;J++){let et=y[J];et!==null&&(y[J]=null,b[J].disconnect(et))}I=null,k=null,m.reset();for(let J in f)delete f[J];if(t.setRenderTarget(R),p=null,u=null,d=null,s=null,S=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Lt=null,yt=null;w.depth&&(yt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?hi:Tn,Lt=w.stencil?_s:xn);let Vt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Fe(u.textureWidth,u.textureHeight,{format:tn,type:Qe,depthTexture:new ii(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Fe(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(J){for(let et=0;et<J.removed.length;et++){let xt=J.removed[et],Lt=y.indexOf(xt);Lt>=0&&(y[Lt]=null,b[Lt].disconnect(xt))}for(let et=0;et<J.added.length;et++){let xt=J.added[et],Lt=y.indexOf(xt);if(Lt===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=y.length){y.push(xt),Lt=Vt;break}else if(y[Vt]===null){y[Vt]=xt,Lt=Vt;break}if(Lt===-1)break}let yt=b[Lt];yt&&yt.connect(xt)}}let U=new C,H=new C;function Z(J,et,xt){U.setFromMatrixPosition(et.matrixWorld),H.setFromMatrixPosition(xt.matrixWorld);let Lt=U.distanceTo(H),yt=et.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,Ee=yt[14]/(yt[10]-1),Gt=yt[14]/(yt[10]+1),Kt=(yt[9]+1)/yt[5],oe=(yt[9]-1)/yt[5],Xt=(yt[8]-1)/yt[0],fe=(Vt[8]+1)/Vt[0],Re=Ee*Xt,je=Ee*fe,me=Lt/(-Xt+fe),ve=me*-Xt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ve),J.translateZ(me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),yt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let F=Ee+me,ze=Gt+me,ee=Re-ve,A=je+(Lt-ve),x=Kt*Gt/ze*F,V=oe*Gt/ze*F;J.projectionMatrix.makePerspective(ee,A,x,V,F,ze),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function rt(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,xt=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),O.near=D.near=P.near=et,O.far=D.far=P.far=xt,(I!==O.near||k!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,k=O.far),O.layers.mask=J.layers.mask|6,P.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Lt=J.parent,yt=O.cameras;rt(O,Lt);for(let Vt=0;Vt<yt.length;Vt++)rt(yt[Vt],Lt);yt.length===2?Z(O,P,D):O.projectionMatrix.copy(P.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),at(J,O,Lt)};function at(J,et,xt){xt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(J){return f[J]};let Ft=null;function Nt(J,et){if(h=et.getViewerPose(c||o),g=et,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Lt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Lt=!0);for(let Gt=0;Gt<xt.length;Gt++){let Kt=xt[Gt],oe=null;if(p!==null)oe=p.getViewport(Kt);else{let fe=d.getViewSubImage(u,Kt);oe=fe.viewport,Gt===0&&(t.setRenderTargetTextures(S,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(S))}let Xt=z[Gt];Xt===void 0&&(Xt=new Ge,Xt.layers.enable(Gt),Xt.viewport=new pe,z[Gt]=Xt),Xt.matrix.fromArray(Kt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Kt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(oe.x,oe.y,oe.width,oe.height),Gt===0&&(O.matrix.copy(Xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Lt===!0&&O.cameras.push(Xt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Gt=d.getDepthInformation(xt[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,s.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Gt=0;Gt<xt.length;Gt++){let Kt=xt[Gt].camera;if(Kt){let oe=f[Kt];oe||(oe=new Xs,f[Kt]=oe);let Xt=d.getCameraImage(Kt);oe.sourceTexture=Xt}}}}for(let xt=0;xt<b.length;xt++){let Lt=y[xt],yt=b[xt];Lt!==null&&yt!==void 0&&yt.update(Lt,et,c||o)}Ft&&Ft(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let $t=new Hu;$t.setAnimationLoop(Nt),this.setAnimationLoop=function(J){Ft=J},this.dispose=function(){}}},dx=new Ht,$u=new Ut;$u.set(-1,0,0,0,1,0,0,0,1);function fx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,R,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),R=w.envMap,S=w.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(dx.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($u),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function px(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let y=b.program;n.uniformBlockBinding(S,y)}function c(S,b){let y=s[S.id];y===void 0&&(m(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",w));let T=b.program;n.updateUBOMapping(S,T);let v=t.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){let b=d();S.__bindingPointIndex=b;let y=i.createBuffer(),T=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let b=s[S.id],y=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=y.length;v<E;v++){let P=y[v];if(Array.isArray(P))for(let D=0,z=P.length;D<z;D++)p(P[D],v,D,T);else p(P,v,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,b,y,T){if(_(S,b,y,T)===!0){let v=S.__offset,E=S.value;if(Array.isArray(E)){let P=0;for(let D=0;D<E.length;D++){let z=E[D],O=f(z);g(z,S.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,b,y){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,y)}function _(S,b,y,T){let v=S.value,E=b+"_"+y;if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:ArrayBuffer.isView(v)?T[E]=v.slice():T[E]=v.clone(),!0;{let P=T[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return T[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(S){let b=S.uniforms,y=0,T=16;for(let E=0,P=b.length;E<P;E++){let D=Array.isArray(b[E])?b[E]:[b[E]];for(let z=0,O=D.length;z<O;z++){let I=D[z],k=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Y=k.length;X<Y;X++){let B=k[X],U=f(B),H=y%T,Z=H%U.boundary,rt=H+Z;y+=Z,rt!==0&&T-rt<U.storage&&(y+=T-rt),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=U.storage}}}let v=y%T;return v>0&&(y+=T-v),S.__size=y,S.__cache={},this}function f(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",S),b}function w(S){let b=S.target;b.removeEventListener("dispose",w);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function gx(){return Ln===null&&(Ln=new ei(mx,16,16,ui,vn),Ln.name="DFG_LUT",Ln.minFilter=De,Ln.magFilter=De,Ln.wrapS=En,Ln.wrapT=En,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var Ss=class{constructor(t={}){let{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Qe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=p,m=new Set([Ho,Vo,ko]),f=new Set([Qe,xn,gs,_s,Bo,Oo]),w=new Uint32Array(4),R=new Int32Array(4),S=new C,b=null,y=null,T=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,z=null,O=null,I=null,k=null;this._outputColorSpace=Se;let X=0,Y=0,B=null,U=-1,H=null,Z=new pe,rt=new pe,at=null,Ft=new Dt(0),Nt=0,$t=e.width,J=e.height,et=1,xt=null,Lt=null,yt=new pe(0,0,$t,J),Vt=new pe(0,0,$t,J),Ee=!1,Gt=new Cn,Kt=!1,oe=!1,Xt=new Ht,fe=new C,Re=new pe,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function ve(){return B===null?et:1}let F=n;function ze(M,L){return e.getContext(M,L)}let ee,A,x,V,q,K,ot,lt,j,tt,ct,Tt,ft,ht,At,It,Bt,N,ut,Q,dt,_t,it;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",un,!1),F===null){let L="webgl2";if(F=ze(L,M),F===null)throw ze(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(M){throw e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Pt("WebGLRenderer: "+M.message),M}function Rt(){ee=new b_(F),ee.init(),dt=new cx(F,ee),A=new f_(F,ee,t,dt),x=new ax(F,ee),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=F.createFramebuffer(),I=F.createFramebuffer(),k=F.createFramebuffer(),V=new T_(F),q=new Y0,K=new lx(F,ee,x,q,A,dt,V),ot=new S_(P),lt=new Rp(F),_t=new u_(F,lt),j=new w_(F,lt,V,_t),tt=new R_(F,j,lt,_t,V),N=new A_(F,A,K),At=new p_(q),ct=new q0(P,ot,ee,A,_t,At),Tt=new fx(P,q),ft=new Z0,ht=new ex(ee),Bt=new h_(P,ot,x,tt,g,l),It=new ox(P,tt,A),it=new px(F,V,A,x),ut=new d_(F,ee,V),Q=new E_(F,ee,V),V.programs=ct.programs,P.capabilities=A,P.extensions=ee,P.properties=q,P.renderLists=ft,P.shadowMap=It,P.state=x,P.info=V}_!==Qe&&(E=new I_(_,e.width,e.height,a,s,r));let wt=new bc(P,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize($t,J,!1))},this.getSize=function(M){return M.set($t,J)},this.setSize=function(M,L,$=!0){if(wt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=M,J=L,e.width=Math.floor(M*et),e.height=Math.floor(L*et),$===!0&&(e.style.width=M+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set($t*et,J*et).floor()},this.setDrawingBufferSize=function(M,L,$){$t=M,J=L,et=$,e.width=Math.floor(M*$),e.height=Math.floor(L*$),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(_===Qe){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,L,$,G){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,L,$,G),x.viewport(Z.copy(yt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Vt)},this.setScissor=function(M,L,$,G){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,L,$,G),x.scissor(rt.copy(Vt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){x.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){xt=M},this.setTransparentSort=function(M){Lt=M},this.getClearColor=function(M){return M.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,$=!0){let G=0;if(M){let W=!1;if(B!==null){let gt=B.texture.format;W=m.has(gt)}if(W){let gt=B.texture.type,Mt=f.has(gt),mt=Bt.getClearColor(),St=Bt.getClearAlpha(),Et=mt.r,Ot=mt.g,Wt=mt.b;Mt?(w[0]=Et,w[1]=Ot,w[2]=Wt,w[3]=St,F.clearBufferuiv(F.COLOR,0,w)):(R[0]=Et,R[1]=Ot,R[2]=Wt,R[3]=St,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}L&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Bt.dispose(),ft.dispose(),ht.dispose(),q.dispose(),ot.dispose(),tt.dispose(),_t.dispose(),it.dispose(),ct.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Wc),wt.removeEventListener("sessionend",Xc),mi.stop()};function ae(M){M.preventDefault(),jl("WebGLRenderer: Context Lost."),D=!0}function jt(){jl("WebGLRenderer: Context Restored."),D=!1;let M=V.autoReset,L=It.enabled,$=It.autoUpdate,G=It.needsUpdate,W=It.type;Rt(),V.autoReset=M,It.enabled=L,It.autoUpdate=$,It.needsUpdate=G,It.type=W}function un(M){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Sn(M){let L=M.target;L.removeEventListener("dispose",Sn),bf(L)}function bf(M){wf(M),q.remove(M)}function wf(M){let L=q.get(M).programs;L!==void 0&&(L.forEach(function($){ct.releaseProgram($)}),M.isShaderMaterial&&ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,$,G,W,gt){L===null&&(L=je);let Mt=W.isMesh&&W.matrixWorld.determinantAffine()<0,mt=Af(M,L,$,G,W);x.setMaterial(G,Mt);let St=$.index,Et=1;if(G.wireframe===!0){if(St=j.getWireframeAttribute($),St===void 0)return;Et=2}let Ot=$.drawRange,Wt=$.attributes.position,bt=Ot.start*Et,Qt=(Ot.start+Ot.count)*Et;gt!==null&&(bt=Math.max(bt,gt.start*Et),Qt=Math.min(Qt,(gt.start+gt.count)*Et)),St!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,St.count)):Wt!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,Wt.count));let ye=Qt-bt;if(ye<0||ye===1/0)return;_t.setup(W,G,mt,$,St);let he,ie=ut;if(St!==null&&(he=lt.get(St),ie=Q,ie.setIndex(he)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*ve()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(W.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),x.setLineWidth(ke*ve()),W.isLineSegments?ie.setMode(F.LINES):W.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else W.isPoints?ie.setMode(F.POINTS):W.isSprite&&ie.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ke=W._multiDrawStarts,vt=W._multiDrawCounts,Ye=W._multiDrawCount,Jt=St?lt.get(St).bytesPerElement:1,an=q.get(G).currentProgram.getUniforms();for(let bn=0;bn<Ye;bn++)an.setValue(F,"_gl_DrawID",bn),ie.render(ke[bn]/Jt,vt[bn])}else if(W.isInstancedMesh)ie.renderInstances(bt,ye,W.count);else if($.isInstancedBufferGeometry){let ke=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vt=Math.min($.instanceCount,ke);ie.renderInstances(bt,ye,vt)}else ie.render(bt,ye)};function Gc(M,L,$,G){z!==null&&M.isNodeMaterial&&z.setObject(G,M),Kt===!0&&At.setState(M,$,!1),M.transparent===!0&&M.side===Be&&M.forceSinglePass===!1?(M.side=Je,M.needsUpdate=!0,Sr(M,L,G),M.side=ai,M.needsUpdate=!0,Sr(M,L,G),M.side=Be):Sr(M,L,G)}this.compile=function(M,L,$=null){$===null&&($=M),z!==null&&z.renderStart(M,L,$),y=ht.get($),y.init(L),v.push(y),$.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),M!==$&&M.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights(),z!==null&&z.updateLights(y.state.lightsArray),oe=this.localClippingEnabled,Kt=At.init(this.clippingPlanes,oe),Kt===!0&&At.setGlobalState(this.clippingPlanes,L),z!==null&&It.render(y.state.shadowsArray,$,L);let G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let Mt=0;Mt<gt.length;Mt++){let mt=gt[Mt];Gc(mt,$,L,W),G.add(mt)}else Gc(gt,$,L,W),G.add(gt)}),y=v.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(M,L,$=null){let G=this.compile(M,L,$);return new Promise(W=>{function gt(){if(G.forEach(function(Mt){let St=q.get(Mt).currentProgram;(St===void 0||St.isReady())&&G.delete(Mt)}),G.size===0){W(M);return}setTimeout(gt,10)}ee.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Za=null;function Ef(M){Za&&Za(M)}function Wc(){mi.stop()}function Xc(){mi.start()}let mi=new Hu;mi.setAnimationLoop(Ef),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){Za=M,wt.setAnimationLoop(M),M===null?mi.stop():mi.start()},wt.addEventListener("sessionstart",Wc),wt.addEventListener("sessionend",Xc),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(M,L);let $=wt.enabled===!0&&wt.isPresenting===!0,G=E!==null&&(B===null||$)&&E.begin(P,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(L),L=wt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,L,B),y=ht.get(M,v.length),y.init(L),y.state.textureUnits=K.getTextureUnits(),v.push(y),Xt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Gt.setFromProjectionMatrix(Xt,mn,L.reversedDepth),oe=this.localClippingEnabled,Kt=At.init(this.clippingPlanes,oe),b=ft.get(M,T.length),b.init(),T.push(b),wt.enabled===!0&&wt.isPresenting===!0){let Mt=P.xr.getDepthSensingMesh();Mt!==null&&Ja(Mt,L,-1/0,P.sortObjects)}Ja(M,L,0,P.sortObjects),b.finish(),z!==null&&z.updateLights(y.state.lightsArray),P.sortObjects===!0&&b.sort(xt,Lt),me=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,me&&Bt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&At.beginShadows();let W=y.state.shadowsArray;if(It.render(W,M,L),Kt===!0&&At.endShadows(),(G&&E.hasRenderPass())===!1){let Mt=b.opaque,mt=b.transmissive;if(y.setupLights(),L.isArrayCamera){let St=L.cameras;if(mt.length>0)for(let Et=0,Ot=St.length;Et<Ot;Et++){let Wt=St[Et];Yc(Mt,mt,M,Wt)}me&&Bt.render(M);for(let Et=0,Ot=St.length;Et<Ot;Et++){let Wt=St[Et];qc(b,M,Wt,Wt.viewport)}}else mt.length>0&&Yc(Mt,mt,M,L),me&&Bt.render(M),qc(b,M,L)}B!==null&&Y===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),G&&E.end(P),M.isScene===!0&&M.onAfterRender(P,M,L),_t.resetDefaultState(),U=-1,H=null,v.pop(),v.length>0?(y=v[v.length-1],K.setTextureUnits(y.state.textureUnits),Kt===!0&&At.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,z!==null&&z.renderEnd()};function Ja(M,L,$,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)y.pushLightProbeGrid(M);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Gt)){G&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xt);let Mt=tt.update(M),mt=M.material;mt.visible&&b.push(M,Mt,mt,$,Re.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Gt))){let Mt=tt.update(M),mt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Re.copy(Mt.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(Xt)),Array.isArray(mt)){let St=Mt.groups;for(let Et=0,Ot=St.length;Et<Ot;Et++){let Wt=St[Et],bt=mt[Wt.materialIndex];bt&&bt.visible&&b.push(M,Mt,bt,$,Re.z,Wt,L)}}else mt.visible&&b.push(M,Mt,mt,$,Re.z,null,L)}}let gt=M.children;for(let Mt=0,mt=gt.length;Mt<mt;Mt++)Ja(gt[Mt],L,$,G)}function qc(M,L,$,G){let{opaque:W,transmissive:gt,transparent:Mt}=M;y.setupLightsView($),Kt===!0&&At.setGlobalState(P.clippingPlanes,$),G&&x.viewport(Z.copy(G)),W.length>0&&Mr(W,L,$),gt.length>0&&Mr(gt,L,$),Mt.length>0&&Mr(Mt,L,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Yc(M,L,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[G.id]===void 0){let bt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[G.id]=new Fe(1,1,{generateMipmaps:!0,type:bt?vn:Qe,minFilter:ci,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let gt=y.state.transmissionRenderTarget[G.id],Mt=G.viewport||Z;gt.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);let mt=P.getRenderTarget(),St=P.getActiveCubeFace(),Et=P.getActiveMipmapLevel();P.setRenderTarget(gt),P.getClearColor(Ft),Nt=P.getClearAlpha(),Nt<1&&P.setClearColor(16777215,.5),P.clear(),me&&Bt.render($);let Ot=P.toneMapping;P.toneMapping=_n;let Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),y.setupLightsView(G),Kt===!0&&At.setGlobalState(P.clippingPlanes,G),Mr(M,$,G),K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Qt=0,ye=L.length;Qt<ye;Qt++){let he=L[Qt],{object:ie,geometry:ke,material:vt,group:Ye}=he;if(vt.side===Be&&ie.layers.test(G.layers)){let Jt=vt.side;vt.side=Je,vt.needsUpdate=!0,$c(ie,$,G,ke,vt,Ye),vt.side=Jt,vt.needsUpdate=!0,bt=!0}}bt===!0&&(K.updateMultisampleRenderTarget(gt),K.updateRenderTargetMipmap(gt))}P.setRenderTarget(mt,St,Et),P.setClearColor(Ft,Nt),Wt!==void 0&&(G.viewport=Wt),P.toneMapping=Ot}function Mr(M,L,$){let G=L.isScene===!0?L.overrideMaterial:null;for(let W=0,gt=M.length;W<gt;W++){let Mt=M[W],{object:mt,geometry:St,group:Et}=Mt,Ot=Mt.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),mt.layers.test($.layers)&&$c(mt,L,$,St,Ot,Et)}}function $c(M,L,$,G,W,gt){z!==null&&W.isNodeMaterial&&z.setObject(M,W),M.onBeforeRender(P,L,$,G,W,gt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(P,L,$,G,M,gt),W.transparent===!0&&W.side===Be&&W.forceSinglePass===!1?(W.side=Je,W.needsUpdate=!0,P.renderBufferDirect($,L,G,W,M,gt),W.side=ai,W.needsUpdate=!0,P.renderBufferDirect($,L,G,W,M,gt),W.side=Be):P.renderBufferDirect($,L,G,W,M,gt),M.onAfterRender(P,L,$,G,W,gt)}function Sr(M,L,$){L.isScene!==!0&&(L=je);let G=q.get(M),W=y.state.lights,gt=y.state.shadowsArray,Mt=W.state.version,mt=ct.getParameters(M,W.state,gt,L,$,y.state.lightProbeGridArray),St=ct.getProgramCacheKey(mt),Et=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;let Ot=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ot.get(M.envMap||G.environment,Ot),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Et===void 0&&(M.addEventListener("dispose",Sn),Et=new Map,G.programs=Et);let Wt=Et.get(St);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===Mt)return Jc(M,mt),Wt}else mt.uniforms=ct.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,$,mt),M.onBeforeCompile(mt,P),Wt=ct.acquireProgram(mt,St),Et.set(St,Wt),G.uniforms=mt.uniforms;let bt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=At.uniform),Jc(M,mt),G.needsLights=Cf(M),G.lightsStateVersion=Mt,G.needsLights&&(bt.ambientLightColor.value=W.state.ambient,bt.lightProbe.value=W.state.probe,bt.sunLights.value=W.state.sun,bt.sunLightShadows.value=W.state.sunShadow,bt.directionalLights.value=W.state.directional,bt.directionalLightShadows.value=W.state.directionalShadow,bt.spotLights.value=W.state.spot,bt.spotLightShadows.value=W.state.spotShadow,bt.rectAreaLights.value=W.state.rectArea,bt.ltc_1.value=W.state.rectAreaLTC1,bt.ltc_2.value=W.state.rectAreaLTC2,bt.pointLights.value=W.state.point,bt.pointLightShadows.value=W.state.pointShadow,bt.hemisphereLights.value=W.state.hemi,bt.sunShadowMatrix.value=W.state.sunShadowMatrix,bt.sunShadowCascade.value=W.state.sunShadowCascade,bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,bt.spotLightMatrix.value=W.state.spotLightMatrix,bt.spotLightMap.value=W.state.spotLightMap,bt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=y.state.lightProbeGridArray.length>0,G.currentProgram=Wt,G.uniformsList=null,Wt}function Zc(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Ms.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Jc(M,L){let $=q.get(M);$.outputColorSpace=L.outputColorSpace,$.batching=L.batching,$.batchingColor=L.batchingColor,$.instancing=L.instancing,$.instancingColor=L.instancingColor,$.instancingMorph=L.instancingMorph,$.skinning=L.skinning,$.morphTargets=L.morphTargets,$.morphNormals=L.morphNormals,$.morphColors=L.morphColors,$.morphTargetsCount=L.morphTargetsCount,$.numClippingPlanes=L.numClippingPlanes,$.numIntersection=L.numClipIntersection,$.vertexAlphas=L.vertexAlphas,$.vertexTangents=L.vertexTangents,$.toneMapping=L.toneMapping}function Tf(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let $=0,G=M.length;$<G;$++){let W=M[$];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function Af(M,L,$,G,W){L.isScene!==!0&&(L=je),K.resetTextureUnits();let gt=L.fog,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,mt=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:qt.workingColorSpace,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Et=ot.get(G.envMap||Mt,St),Ot=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Wt=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!$.morphAttributes.position,Qt=!!$.morphAttributes.normal,ye=!!$.morphAttributes.color,he=_n;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(he=P.toneMapping);let ie=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ke=ie!==void 0?ie.length:0,vt=q.get(G),Ye=y.state.lights;if(Kt===!0&&(oe===!0||M!==H)){let le=M===H&&G.id===U;At.setState(G,M,le)}let Jt=!1;G.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ye.state.version||vt.outputColorSpace!==mt||W.isBatchedMesh&&vt.batching===!1||!W.isBatchedMesh&&vt.batching===!0||W.isBatchedMesh&&vt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&vt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&vt.instancing===!1||!W.isInstancedMesh&&vt.instancing===!0||W.isSkinnedMesh&&vt.skinning===!1||!W.isSkinnedMesh&&vt.skinning===!0||W.isInstancedMesh&&vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&vt.instancingMorph===!1&&W.morphTexture!==null||vt.envMap!==Et||G.fog===!0&&vt.fog!==gt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==At.numPlanes||vt.numIntersection!==At.numIntersection)||vt.vertexAlphas!==Ot||vt.vertexTangents!==Wt||vt.morphTargets!==bt||vt.morphNormals!==Qt||vt.morphColors!==ye||vt.toneMapping!==he||vt.morphTargetsCount!==ke||!!vt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,vt.__version=G.version);let an=vt.currentProgram;Jt===!0&&(an=Sr(G,L,W),z&&G.isNodeMaterial&&z.onUpdateProgram(G,an,vt));let bn=!1,qn=!1,Fi=!1,ne=an.getUniforms(),xe=vt.uniforms;if(x.useProgram(an.program)&&(bn=!0,qn=!0,Fi=!0),G.id!==U&&(U=G.id,qn=!0),vt.needsLights){let le=Tf(y.state.lightProbeGridArray,W);vt.lightProbeGrid!==le&&(vt.lightProbeGrid=le,qn=!0)}if(bn||H!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ne.setValue(F,"projectionMatrix",M.projectionMatrix),ne.setValue(F,"viewMatrix",M.matrixWorldInverse);let $n=ne.map.cameraPosition;$n!==void 0&&$n.setValue(F,fe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&ne.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ne.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,qn=!0,Fi=!0)}if(vt.needsLights&&(Ye.state.sunShadowMap.length>0&&ne.setValue(F,"sunShadowMap",Ye.state.sunShadowMap,K),Ye.state.directionalShadowMap.length>0&&ne.setValue(F,"directionalShadowMap",Ye.state.directionalShadowMap,K),Ye.state.spotShadowMap.length>0&&ne.setValue(F,"spotShadowMap",Ye.state.spotShadowMap,K),Ye.state.pointShadowMap.length>0&&ne.setValue(F,"pointShadowMap",Ye.state.pointShadowMap,K)),W.isSkinnedMesh){ne.setOptional(F,W,"bindMatrix"),ne.setOptional(F,W,"bindMatrixInverse");let le=W.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),ne.setValue(F,"boneTexture",le.boneTexture,K))}W.isBatchedMesh&&(ne.setOptional(F,W,"batchingTexture"),ne.setValue(F,"batchingTexture",W._matricesTexture,K),ne.setOptional(F,W,"batchingIdTexture"),ne.setValue(F,"batchingIdTexture",W._indirectTexture,K),ne.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&ne.setValue(F,"batchingColorTexture",W._colorsTexture,K));let Yn=$.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&N.update(W,$,an),(qn||vt.receiveShadow!==W.receiveShadow)&&(vt.receiveShadow=W.receiveShadow,ne.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(xe.envMapIntensity.value=L.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=gx()),qn){if(ne.setValue(F,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&Rf(xe,Fi),gt&&G.fog===!0&&Tt.refreshFogUniforms(xe,gt),Tt.refreshMaterialUniforms(xe,G,et,J,y.state.transmissionRenderTarget[M.id]),vt.needsLights&&vt.lightProbeGrid){let le=vt.lightProbeGrid;xe.probesSH.value=le.texture,xe.probesMin.value.copy(le.boundingBox.min),xe.probesMax.value.copy(le.boundingBox.max),xe.probesResolution.value.copy(le.resolution)}Ms.upload(F,Zc(vt),xe,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ms.upload(F,Zc(vt),xe,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ne.setValue(F,"center",W.center),ne.setValue(F,"modelViewMatrix",W.modelViewMatrix),ne.setValue(F,"normalMatrix",W.normalMatrix),ne.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let le=G.uniformsGroups;for(let $n=0,Bi=le.length;$n<Bi;$n++){let jc=le[$n];it.update(jc,an),it.bind(jc,an)}}return an}function Rf(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Cf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,L,$){let G=q.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=L,q.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let $=q.get(M);$.__webglFramebuffer=L,$.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,$=0){B=M,X=L,Y=$;let G=null,W=!1,gt=!1;if(M){let mt=q.get(M);if(mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,mt.__webglFramebuffer),Z.copy(M.viewport),rt.copy(M.scissor),at=M.scissorTest,x.viewport(Z),x.scissor(rt),x.setScissorTest(at),U=-1;return}else if(mt.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(mt.__hasExternalTextures)K.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ot=M.depthTexture;if(mt.__boundDepthTexture!==Ot){if(Ot!==null&&q.has(Ot)&&(M.width!==Ot.image.width||M.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}let St=M.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(gt=!0);let Et=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?G=Et[L][$]:G=Et[L],W=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?G=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Et)?G=Et[$]:G=Et,Z.copy(M.viewport),rt.copy(M.scissor),at=M.scissorTest}else Z.copy(yt).multiplyScalar(et).floor(),rt.copy(Vt).multiplyScalar(et).floor(),at=Ee;if($!==0&&(G=O),x.bindFramebuffer(F.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(Z),x.scissor(rt),x.setScissorTest(at),W){let mt=q.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,$)}else if(gt){let mt=L;for(let St=0;St<M.textures.length;St++){let Et=q.get(M.textures[St]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+St,Et.__webglTexture,$,mt)}}else if(M!==null&&$!==0){let mt=q.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mt.__webglTexture,$)}U=-1};function Kc(M){let L=q.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=A.textureFormatReadable(M.format),L.__typeReadable=A.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,$,G,W,gt,Mt,mt=0){if(!(M&&M.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){x.bindFramebuffer(F.FRAMEBUFFER,St);try{let Et=M.textures[mt],Ot=Et.format,Wt=Et.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);let bt=Kc(Et);if(bt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&$>=0&&$<=M.height-W&&F.readPixels(L,$,G,W,dt.convert(Ot),dt.convert(Wt),gt)}finally{let Et=B!==null?q.get(B).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,L,$,G,W,gt,Mt,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St)if(L>=0&&L<=M.width-G&&$>=0&&$<=M.height-W){x.bindFramebuffer(F.FRAMEBUFFER,St);let Et=M.textures[mt],Ot=Et.format,Wt=Et.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);let bt=Kc(Et);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(L,$,G,W,dt.convert(Ot),dt.convert(Wt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ye=B!==null?q.get(B).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,ye);let he=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await mu(F,he,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Qt),F.deleteSync(he),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,$=0){let G=Math.pow(2,-$),W=Math.floor(M.image.width*G),gt=Math.floor(M.image.height*G),Mt=L!==null?L.x:0,mt=L!==null?L.y:0;K.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Mt,mt,W,gt),x.unbindTexture()},this.copyTextureToTexture=function(M,L,$=null,G=null,W=0,gt=0){let Mt,mt,St,Et,Ot,Wt,bt,Qt,ye,he=M.isCompressedTexture?M.mipmaps[gt]:M.image;if($!==null)Mt=$.max.x-$.min.x,mt=$.max.y-$.min.y,St=$.isBox3?$.max.z-$.min.z:1,Et=$.min.x,Ot=$.min.y,Wt=$.isBox3?$.min.z:0;else{let xe=Math.pow(2,-W);Mt=Math.floor(he.width*xe),mt=Math.floor(he.height*xe),M.isDataArrayTexture?St=he.depth:M.isData3DTexture?St=Math.floor(he.depth*xe):St=1,Et=0,Ot=0,Wt=0}G!==null?(bt=G.x,Qt=G.y,ye=G.z):(bt=0,Qt=0,ye=0);let ie=dt.convert(L.format),ke=dt.convert(L.type),vt;L.isData3DTexture?(K.setTexture3D(L,0),vt=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(K.setTexture2DArray(L,0),vt=F.TEXTURE_2D_ARRAY):(K.setTexture2D(L,0),vt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let Ye=x.getParameter(F.UNPACK_ROW_LENGTH),Jt=x.getParameter(F.UNPACK_IMAGE_HEIGHT),an=x.getParameter(F.UNPACK_SKIP_PIXELS),bn=x.getParameter(F.UNPACK_SKIP_ROWS),qn=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),x.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);let Fi=M.isDataArrayTexture||M.isData3DTexture,ne=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let xe=q.get(M),Yn=q.get(L),le=q.get(xe.__renderTarget),$n=q.get(Yn.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,le.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Bi=0;Bi<St;Bi++)Fi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(M).__webglTexture,W,Wt+Bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(L).__webglTexture,gt,ye+Bi)),F.blitFramebuffer(Et,Ot,Mt,mt,bt,Qt,Mt,mt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||q.has(M)){let xe=q.get(M),Yn=q.get(L);x.bindFramebuffer(F.READ_FRAMEBUFFER,I),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let le=0;le<St;le++)Fi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,W,Wt+le):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,W),ne?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yn.__webglTexture,gt,ye+le):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yn.__webglTexture,gt),W!==0?F.blitFramebuffer(Et,Ot,Mt,mt,bt,Qt,Mt,mt,F.COLOR_BUFFER_BIT,F.NEAREST):ne?F.copyTexSubImage3D(vt,gt,bt,Qt,ye+le,Et,Ot,Mt,mt):F.copyTexSubImage2D(vt,gt,bt,Qt,Et,Ot,Mt,mt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ne?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(vt,gt,bt,Qt,ye,Mt,mt,St,ie,ke,he.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(vt,gt,bt,Qt,ye,Mt,mt,St,ie,he.data):F.texSubImage3D(vt,gt,bt,Qt,ye,Mt,mt,St,ie,ke,he):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,bt,Qt,Mt,mt,ie,ke,he.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,bt,Qt,he.width,he.height,ie,he.data):F.texSubImage2D(F.TEXTURE_2D,gt,bt,Qt,Mt,mt,ie,ke,he);x.pixelStorei(F.UNPACK_ROW_LENGTH,Ye),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),x.pixelStorei(F.UNPACK_SKIP_PIXELS,an),x.pixelStorei(F.UNPACK_SKIP_ROWS,bn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,qn),gt===0&&L.generateMipmaps&&F.generateMipmap(vt),x.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){X=0,Y=0,B=null,x.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var _x={f32:Float32Array,u16:Uint16Array,i16:Int16Array,u32:Uint32Array,i32:Int32Array},Zu=4*1024*1024;function Ju(i,t){let e=i.getElementById(t);if(!e)throw new Error(`Data block '${t}' is missing.`);return e.textContent}function xx(i){let t=0;for(let r of i.childNodes)t+=r.length;let e=new Uint8Array(Math.ceil(t/4)*3),n=0,s="";for(let r of i.childNodes)for(let o=0;o<r.length;o+=Zu){let a=s+r.substringData(o,Zu).trim(),l=a.length-a.length%4;n=Ku(e,n,a.slice(0,l)),s=a.slice(l)}return e.subarray(0,Ku(e,n,s))}function Ku(i,t,e){if(i.setFromBase64)return t+i.subarray(t).setFromBase64(e).written;let n=atob(e);for(let s=0;s<n.length;s++)i[t++]=n.charCodeAt(s);return t}var Li=class extends Error{};function ju(i=document){let t,e;try{t=JSON.parse(Ju(i,"ioviewer-meta"));let s=i.getElementById("ioviewer-bin");if(!s)throw new Error("Data block 'ioviewer-bin' is missing.");e=xx(s)}catch(s){throw new Li(s.message,{cause:s})}let n=null;return{meta:t,view(s){if(!e)throw new Error("The binary data has been released.");let r=_x[s.t];if(!r)throw new Li(`Unknown view type '${s.t}'.`);let o=r.BYTES_PER_ELEMENT;if(!(Number.isInteger(s.o)&&Number.isInteger(s.n)&&s.o>=0&&s.n>=0&&s.o%o===0&&s.o+s.n*o<=e.length))throw new Li(`View ${JSON.stringify(s)} is outside the ${e.length} bytes of binary data.`);return new r(e.buffer,s.o,s.n)},releaseBinary(){e=null},props(s){return n??(n=JSON.parse(Ju(i,"ioviewer-props"))),n[s]??null}}}var Qu=new Ht,td=new Cn,ed=32;function nd(i,t=new Float64Array(24)){return Qu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),td.setFromProjectionMatrix(Qu,i.coordinateSystem,i.reversedDepth),td.planes.forEach(({normal:e,constant:n},s)=>t.set([e.x,e.y,e.z,n],s*4)),t}function id(i,t,e,n,s){for(let r=0;r<24;r+=4)if(i[r]*t+i[r+1]*e+i[r+2]*n+i[r+3]<-s)return!0;return!1}function wc(i,t,e=new Float64Array(8)){let n=i.matrixWorld.elements,s=new C(-n[8],-n[9],-n[10]).normalize();return e.set([n[12],n[13],n[14],s.x,s.y,s.z,i.projectionMatrix.elements[5]*t/2,i.isPerspectiveCamera?1:0]),e}function sd(i,t,e){let n=new Float64Array(ed),s=0;for(let a=0;a<i.length;a++){let l=i[a];l<0||(s+=t[a],n[31-Math.clz32(Math.max(1,Math.min(l*l*256,2147483647)))]+=t[a])}if(s<=e)return 0;let r=0,o=!0;for(let a=ed-1;a>=0;a--)if(n[a]!==0){if(r+=n[a],r>e)return o?a===0?0:2**(a/2-4):2**((a+1)/2-4);o=!1}return 0}var Xn=.0009765625,Ec=32767,hr=i=>i<0?-1:1;function rd(i){let t=Math.min(Math.max(i,-1),1)*Ec;return hr(t)*Math.round(Math.abs(t))}function ur(i,t,e,n,s){let r=Math.abs(e)+Math.abs(n)+Math.abs(s);if(!(r>0)){i[t]=i[t+1]=0;return}let o=e/r,a=n/r;s<0&&([o,a]=[(1-Math.abs(a))*hr(o),(1-Math.abs(o))*hr(a)]),i[t]=rd(o),i[t+1]=rd(a)}function od(i,t,e,n){let s=Math.max(e/Ec,-1),r=Math.max(n/Ec,-1),o=1-Math.abs(s)-Math.abs(r);o<0&&([s,r]=[(1-Math.abs(r))*hr(s),(1-Math.abs(s))*hr(r)]);let a=Math.sqrt(s*s+r*r+o*o);i[t]=s/a,i[t+1]=r/a,i[t+2]=o/a}function ad(i,t){let e=i.view(t.positions);if(!t.q){if(!(e instanceof Float32Array))throw new Error(`Geometry positions of type '${t.positions.t}' need a "q" origin and step.`);return e}if(!(e instanceof Uint16Array))throw new Error(`Quantized geometry positions must be u16, got '${t.positions.t}'.`);return e}function ld(i,t){if(!t.normals)return null;let e=i.view(t.normals);if(!(e instanceof Float32Array||e instanceof Int16Array))throw new Error(`Geometry normals must be i16 or f32, got '${t.normals.t}'.`);return e}var cd=32768,hd=0,vx=1,ws=2,ud=65535;function dd(i,t,e,n){let s=[],r=[Uint32Array.from(e)];for(;r.length;){let o=r.pop(),a=0;for(let c of o)a+=t[c];if(a<=n||o.length<=1){o.length&&s.push(o);continue}fd(o,i);let l=0;for(let c=0;l<o.length-1&&c+t[o[l]]<=a/2;l++)c+=t[o[l]];l=Math.max(l,1),r.push(o.subarray(l),o.subarray(0,l))}return s}function fd(i,t,e=-1){let n=[1/0,1/0,1/0],s=[-1/0,-1/0,-1/0];for(let h of i)for(let d=0;d<3;d++){let u=t[h*3+d];Number.isFinite(u)&&(u<n[d]&&(n[d]=u),u>s[d]&&(s[d]=u))}let r=0;for(let h=1;h<3;h++)s[h]-n[h]>s[r]-n[r]&&(r=h);let o=s[r]-n[r],a=2**20-1,l=new Float64Array(i.length);for(let h=0;h<i.length;h++){let d=i[h],u=t[d*3+r],p=o>0&&Number.isFinite(u)?Math.round((u-n[r])/o*a):0;l[h]=p*2**32+d}let c=0;e<0?l.sort():c=yx(l,e);for(let h=0;h<i.length;h++)i[h]=l[h]%2**32;return c}function yx(i,t){let e=0,n=i.length-1,s=2654435769,r=2*Math.ceil(Math.log2(i.length+1))+8,o=0,a=0;for(;e<n;){let l=n-e+1;if(++o>r)return i.subarray(e,n+1).sort(),a+l*Math.ceil(Math.log2(l));a+=l,s=Math.imul(s,1664525)+1013904223>>>0;let c=i[e+s%(n-e+1)],h=e,d=n;for(;h<=d;){for(;i[h]<c;)h++;for(;i[d]>c;)d--;if(h<=d){let u=i[h];i[h++]=i[d],i[d--]=u}}if(t<=d)n=d;else if(t>=h)e=h;else return a}return a}function pd(i,t,e,n=1/0){let s=[];s.scanned=0;let r=[Uint32Array.from(t)];for(;r.length;){let o=r.pop(),a=Math.ceil(o.length/e);if(o.length<=1||a<=1&&Mx(o,i)<=n){o.length&&s.push(o);continue}let l=a>1?Math.ceil(o.length*Math.floor(a/2)/a):Math.ceil(o.length/2);s.scanned+=fd(o,i,l),r.push(o.subarray(l),o.subarray(0,l))}return s}function Mx(i,t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l of i){let c=t[l*3],h=t[l*3+1],d=t[l*3+2];c<e&&(e=c),c>r&&(r=c),h<n&&(n=h),h>o&&(o=h),d<s&&(s=d),d>a&&(a=d)}return Math.hypot(r-e,o-n,a-s)/2}var Ac=384*2**20;function md(i,{cap:t=Ac,minRepeats:e=16,perCell:n=1024,maxDraws:s=1024}={}){let r=new Uint8Array(i.length),o=0;for(let h of i)o+=h.k*h.bytes;if(o<=t)return r;let a=h=>(i[h].k-1)*i[h].bytes,l=[...i.keys()].filter(h=>i[h].k>=e);l.sort((h,d)=>a(d)-a(h)||i[d].k-i[h].k||h-d);let c=0;for(let h of l){let d=i[h].cells??Math.ceil(i[h].k/n);c+d>s||(r[h]=1,c+=d)}return r}function Ra(i,t){return i>65535?new Uint32Array(t):new Uint16Array(t)}function Rc(i,t){return i.sort((e,n)=>t[n]-t[e]||e-n)}function gd(i,t,e,n){for(;t<e;){let s=t+e>>>1;i[s]>=n?t=s+1:e=s}return t}function _d(i,t,e){let n=i[t];return[n,e>t?i[e]-n:0]}function xd(i,t,e,n){let s=i.subarray(t*12,t*12+12);if(s[0]===1&&s[1]===0&&s[2]===0&&s[3]===0&&s[4]===1&&s[5]===0&&s[6]===0&&s[7]===0&&s[8]===1&&e.q&&e.q.s===Xn){for(let a=0;a<3;a++)n[a]=s[9+a]+e.q.o[a];return hd}let o=!0;for(let a=0;a<3;a++){let l=s[9+a],c=s[9+a];for(let h=0;h<3;h++){let d=s[h*3+a]*e.min[h],u=s[h*3+a]*e.max[h];l+=Math.min(d,u),c+=Math.max(d,u)}n[a]=Math.floor(l/Xn)*Xn,Math.ceil((c-n[a])/Xn)<=ud||(o=!1)}return o||n.fill(0),o?vx:ws}function vd(i,t){let e=i.length,n=0,s=0;for(let m of i){let f=t.source(t.geometryOf[m]);n+=f.vertices,s+=f.indices.length}let r=t.kind[i[0]]===ws,o=r?new Float32Array(n*4):new Uint16Array(n*4),a=new Int16Array(n*2),l=t.textured?new Float32Array(n*2):null,c=Ra(n,s),h=new Uint32Array(e+1),d=new Float32Array(e*3),u=new Float32Array(e),p=new Float64Array(3),g=0,_=0;for(let m=0;m<e;m++){let f=i[m],w=t.source(t.geometryOf[f]),R=t.kind[f];if(R===ws!==r)throw new Error("A chunk mixes f32 and u16 slots.");let S=t.matrices.subarray(f*12,f*12+12);for(let y=0;y<3;y++)d[m*3+y]=t.origins[f*3+y];u[m]=r?1:Xn,R===hd?Sx(w,o,a,g,m):bx(w,S,R,t.origins.subarray(f*3,f*3+3),o,a,g,m,p),l&&w.uvs&&l.set(w.uvs,g*2),h[m]=_;let b=w.indices;if(t.mirrored[f])for(let y=0;y<b.length;y+=3)c[_++]=b[y]+g,c[_++]=b[y+2]+g,c[_++]=b[y+1]+g;else for(let y=0;y<b.length;y++)c[_++]=b[y]+g;g+=w.vertices}return h[e]=_,{q:o,o:a,uv:l,index:c,indexStart:h,origins:d,steps:u}}function Sx(i,t,e,n,s){let r=i.positions;for(let o=0;o<i.vertices;o++){let a=(n+o)*4;t[a]=r[o*3],t[a+1]=r[o*3+1],t[a+2]=r[o*3+2],t[a+3]=s}if(i.oct)e.set(i.oct,n*2);else{let o=Ca(i);for(let a=0;a<i.vertices;a++)ur(e,(n+a)*2,o[a*3],o[a*3+1],o[a*3+2])}}function bx(i,t,e,n,s,r,o,a,l){let[c,h,d,u,p,g,_,m,f,w,R,S]=t,y=c*(p*f-g*m)-u*(h*f-d*m)+_*(h*g-d*p)<0?-1:1,T=(p*f-g*m)*y,v=(g*_-u*f)*y,E=(u*m-p*_)*y,P=(m*d-f*h)*y,D=(f*c-_*d)*y,z=(_*h-m*c)*y,O=(h*g-d*p)*y,I=(d*u-c*g)*y,k=(c*p-h*u)*y,X=i.positions,Y=i.q?i.q.o:null,B=i.q?i.q.s:1,U=Ca(i);for(let H=0;H<i.vertices;H++){let Z=X[H*3],rt=X[H*3+1],at=X[H*3+2];Y&&(Z=Y[0]+Z*B,rt=Y[1]+rt*B,at=Y[2]+at*B);let Ft=c*Z+u*rt+_*at+w,Nt=h*Z+p*rt+m*at+R,$t=d*Z+g*rt+f*at+S,J=(o+H)*4;e===ws?(s[J]=Ft,s[J+1]=Nt,s[J+2]=$t):(s[J]=Tc(Ft-n[0]),s[J+1]=Tc(Nt-n[1]),s[J+2]=Tc($t-n[2])),s[J+3]=a;let et=U[H*3],xt=U[H*3+1],Lt=U[H*3+2];l[0]=T*et+P*xt+O*Lt,l[1]=v*et+D*xt+I*Lt,l[2]=E*et+z*xt+k*Lt,ur(r,(o+H)*2,l[0],l[1],l[2])}}var Tc=i=>Math.min(Math.max(Math.round(i/Xn),0),ud);function yd(i,t,e,n,s){let r=i.length/3,o=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let c=0;c<r;c++)for(let h=0;h<3;h++){let d=t?t.o[h]+i[c*3+h]*t.s:i[c*3+h];d<o[h]&&(o[h]=d),d>a[h]&&(a[h]=d)}let l=e instanceof Int16Array?e:null;return{positions:i,q:t,oct:l,normals:l?null:e,indices:n,uvs:s,vertices:r,min:o,max:a}}function Ca(i){if(!i.normals&&i.oct){i.normals=new Float32Array(i.vertices*3);for(let t=0;t<i.vertices;t++)od(i.normals,t*3,i.oct[t*2],i.oct[t*2+1])}else i.normals||(i.normals=wx(i.positions,i.q,i.indices));return i.normals}function wx(i,t,e){let n=(r,o)=>t?t.o[o]+i[r*3+o]*t.s:i[r*3+o],s=new Float32Array(i.length);for(let r=0;r<e.length;r+=3){let[o,a,l]=[e[r],e[r+1],e[r+2]],c=[0,1,2].map(u=>n(a,u)-n(o,u)),h=[0,1,2].map(u=>n(l,u)-n(o,u)),d=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]];for(let u of[o,a,l])for(let p=0;p<3;p++)s[u*3+p]+=d[p]}for(let r=0;r<s.length;r+=3){let o=Math.hypot(s[r],s[r+1],s[r+2])||1;s[r]/=o,s[r+1]/=o,s[r+2]/=o}return s}var Cc=`
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
}`,Ic=`
int slot = int( slotBase ) + int( q.w );
ivec2 st = ivec2( slot & 2047, slot >> 11 );
vec4 info = texelFetch( slotInfo, st, 0 );
vec4 state = texelFetch( slotState, st, 0 );
vec3 slotPosition = info.xyz + q.xyz * info.w;`,Ex=`
#ifndef IO_NO_HIDE_BRANCH
if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
#endif`,Tx=`
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
mat3 im = mat3( instanceMatrix );
transformedNormal = mat3( cross( im[ 1 ], im[ 2 ] ), cross( im[ 2 ], im[ 0 ] ), cross( im[ 0 ], im[ 1 ] ) ) * transformedNormal
  * ( dot( im[ 0 ], cross( im[ 1 ], im[ 2 ] ) ) < 0.0 ? -1.0 : 1.0 );
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif`;function di(i,t,e){let n=i.indexOf(t);if(n<0||i.indexOf(t,n+1)>=0)throw new Error(`The shader must contain '${t}' exactly once.`);return i.slice(0,n)+e+i.slice(n+t.length)}function Ax(i){Object.assign(i.uniforms,this.userData.slotUniforms);let t=di(i.vertexShader,"#include <common>",`#include <common>
${Cc}`);t=di(t,"#include <color_vertex>",`${Ic}
vTint = state.rgb;`),t=di(t,"#include <beginnormal_vertex>","vec3 objectNormal = ioOct( normal.xy );"),t=di(t,"#include <defaultnormal_vertex>",Tx),t=di(t,"#include <begin_vertex>","vec3 transformed = slotPosition;"),t=di(t,"#include <clipping_planes_vertex>",`#include <clipping_planes_vertex>
${Ex}`),i.vertexShader=t;let e=di(i.fragmentShader,"#include <common>",`#include <common>
varying vec3 vTint;`);e=di(e,"#include <color_fragment>","diffuseColor.rgb *= vTint;"),i.fragmentShader=e}function Pc(i,t,e=!1){return i.userData.slotUniforms=t,i.onBeforeCompile=Ax,i.index0AttributeName="q",e&&(i.defines={IO_NO_HIDE_BRANCH:""}),i}var Nc=["materials","textures","white","wireframe"],Rx=[245,158,11],Cx=[235,235,237],dr=4294967295,Di=2048,Lc=256,Ix=16,Md=1024,Px=.1,Lx=8192,Dx=1.4;function Nx(i,t){let[e,n,s,r,o,a,l,c,h]=i.subarray(t*12,t*12+9);return e*(o*h-a*c)-r*(n*h-s*c)+l*(n*a-s*o)<0}function Ux(){this.array=null}function yn(i,t,e=!1,n=we){return new n(i,t,e).onUpload(Ux)}var fr=class extends RangeError{constructor(t,e){super(`${t} drawable instances exceed the limit of ${e}.`),this.name="ModelTooLargeError",this.count=t,this.limit=e}},Sd=(i,t)=>{for(let e=t*6;e<t*6+6;e++)if(!Number.isFinite(i[e]))return!1;return!0},Fx=i=>{let t=i.getHex(Se);return[t>>16&255,t>>8&255,t&255]},pr=class{constructor(t,e={}){let{meta:n}=t,s=n.instances,r=s.count,o=t.view(s.geometry),a=t.view(s.material),l=t.view(s.matrix);this.root=new be,this.elementCount=n.elements.length,this._elements=n.elements,this._meta=n,this._mode="materials",this._opacity=1,this._picking=!1,this._textures=new Map,this._elementOf=t.view(s.element).slice(),this._bucketOf=new Uint32Array(r),this._visible=new Uint8Array(r).fill(1),this._layers=new Map,this._layerHides=new Uint8Array(r),this._highlight=new Uint8Array(r),this._highlighted=[],this._tint=new Map,this._boxes=new Float32Array(r*6),this._minPixels=0,this._viewHeight=1,this.visibleCost=0;let c=!!e.noHideBranch;this.slotUniforms={slotInfo:{value:null},slotState:{value:null}},this._buckets=this._createBuckets(n,a,c),this._indexElements();let h=new Ht,d=new se;for(let p=0;p<r;p++){let g=l.subarray(p*12,p*12+12);h.set(g[0],g[3],g[6],g[9],g[1],g[4],g[7],g[10],g[2],g[5],g[8],g[11],0,0,0,1);let _=n.geometries[o[p]].bbox;d.min.fromArray(_.min),d.max.fromArray(_.max),d.applyMatrix4(h),d.min.toArray(this._boxes,p*6),d.max.toArray(this._boxes,p*6+3)}let u=Math.min(2**24-1,Di*(e.maxTextureSize??1/0),e.slotLimit??1/0);this._build(t,o,l,e,u);for(let p=0;p<r;p++)this._applyColor(p),this._draw(p);this._flush()}elementId(t){return this._checkElement(t),this._elements[t].id}setVisible(t,e){for(let n of t)for(let s of this.instancesOf(n))this._setInstanceVisible(s,e);this._changed("visibility")}showAll(){for(let t=0;t<this._visible.length;t++)this._setInstanceVisible(t,!0);this._changed("visibility")}isolate(t){let e=new Uint8Array(this._visible.length);for(let n of t)for(let s of this.instancesOf(n))e[s]=1;for(let n=0;n<e.length;n++)this._setInstanceVisible(n,e[n]===1);this._changed("visibility")}setHighlighted(t){let e=this._highlighted;this._highlighted=[];for(let n of e)this._highlight[n]=0;for(let n of t)for(let s of this.instancesOf(n))this._highlight[s]=1,this._highlighted.push(s);for(let n of e)this._applyColor(n);for(let n of this._highlighted)this._applyColor(n);this._changed("appearance")}setTint(t,e){let n=e===null?null:Fx(new Dt(e));for(let s of t)for(let r of this.instancesOf(s))n?this._tint.set(r,n):this._tint.delete(r),this._applyColor(r);this._changed("appearance")}setLayerHidden(t,e,n){let s=this._layers.get(t);s||this._layers.set(t,s=new Uint8Array(this._visible.length));for(let r of e)for(let o of this.instancesOf(r))this._setLayerFlag(s,o,n);this._changed("visibility")}clearLayer(t){let e=this._layers.get(t);if(e){for(let n=0;n<e.length;n++)this._setLayerFlag(e,n,!1);this._layers.delete(t),this._changed("visibility")}}visibilityState(){return this._visible.map((t,e)=>this._shown(e)?1:0)}instancesOf(t){return this._checkElement(t),this._elementInstances.subarray(this._elementStart[t],this._elementStart[t+1])}isVisible(t){this._checkElement(t);for(let e=this._elementStart[t];e<this._elementStart[t+1];e++)if(this._shown(this._elementInstances[e]))return!0;return!1}get instanceCount(){return this._slotOf.length}instance(t){let e=this._slotOf[t];return e===dr?{mesh:null,element:this._elementOf[t],slot:-1}:{mesh:this._units[this._slotUnit[e]].mesh,element:this._elementOf[t],slot:e}}instanceColor(t,e=new Dt){let n=this._slotOf[t],[s,r,o]=n===dr?this._colorOf(t):this._state.image.data.subarray(n*4,n*4+3);return e.setRGB(s/255,r/255,o/255,Se)}slotElement(t){return this._elementOf[this._slotInstance[t]]}withMaterial(t,e){this._picking=!0;for(let n of this._units)n.mesh.material=t,this._showUnit(n);try{return e()}finally{this._picking=!1;for(let n of this._units)n.mesh.material=n.bucket.material,this._showUnit(n)}}elementBox(t,e=new se){this._checkElement(t),e.makeEmpty();for(let n=this._elementStart[t];n<this._elementStart[t+1];n++)this._expandBox(e,this._elementInstances[n]);return e}visibleBox(){let t=new se;for(let e=0;e<this._visible.length;e++)this._shown(e)&&this._expandBox(t,e);return t}setDisplayMode(t){if(!Nc.includes(t))throw new Error(`Unknown display mode '${t}'.`);let e=t==="white"!=(this._mode==="white");this._mode=t;for(let n of this._buckets){let s=t==="textures"&&n.texture!==null?this._texture(n.texture):null;for(let r of[n.material,n.wire])r.map!==s&&(r.map=s,r.needsUpdate=!0)}t==="wireframe"&&this._buildLines();for(let n of this._units)this._showUnit(n);if(e)for(let n=0;n<this._slotOf.length;n++)this._applyColor(n);this._changed("appearance")}setOpacity(t){if(!(t>=0&&t<=1))throw new RangeError(`Opacity must be within 0..1, got ${t}.`);this._opacity=t;for(let e of this._buckets)this._applyOpacity(e);this._changed("appearance")}setDetail(t,e=1){this._minPixels=t,this._viewHeight=e;for(let s of this._cut)this._showUnit(s);this._cut.length=0;let n=this._unitScale;!(t>0)||!n||(this._unitScale=null,this._cutInView=0,this._cutFrame=null,this._units.forEach((s,r)=>{!(n[r]>=0)||s.shown===0||(s.dirty&&this._span(s),!(this._slotRadius[s.slotBase+s.first]*n[r]>=t)&&(s.mesh.visible=!1,s.lines&&(s.lines.visible=!1),this._cut.push(s),this._cutInView+=Dc(s,s.first,s.last+1)))}))}get totalCost(){return this._totalCost}detailThreshold(t,e,n){if(this.visibleCost=this._totalCost,this._totalCost<=n)return 0;t.updateMatrixWorld();let s=nd(t,this._planes),r=wc(t,e,this._detailView),o=this._pixels.fill(-1),a=this._state.image.data,l=this._unitScale=new Float64Array(this._units.length).fill(-1),c=0;for(let h=0;h<this._units.length;h++){let d=this._units[h],u=d.sphere;if(d.shown===0||id(s,u[0],u[1],u[2],u[3]))continue;let p=bd(r,u),g=r[7]?p>0?r[6]/p:1/0:r[6];l[h]=g;for(let _=d.slotBase;_<d.slotBase+d.n;_++)a[_*4+3]!==0&&(o[_]=this._slotRadius[_]*g,c+=this._slotCost[_])}return this.visibleCost=c,sd(o,this._slotCost,n)}drawStats(){let t=-1/0;for(let r of this._units)t=Math.max(t,r.lastFrame);let e=0,n=this._cutFrame===t?this._cutInView:0,s=0;for(let r of this._units)r.lastFrame===t&&(n+=Dc(r,r.first,Math.max(r.last+1,r.first)),e+=Dc(r,r.first,Math.max(r.end,r.first)),s++);return{drawn:e,inView:n,draws:s}}drawnInstances(t){t.updateMatrixWorld();let e=new Cn().setFromProjectionMatrix(new Ht().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse)),n={info:{render:{frame:-1}}},s=new Le,r=[];for(let o of this._units){let a=this._mode==="wireframe"&&!this._picking?o.lines:o.mesh;if(!(!a?.visible||!e.intersectsSphere(s.set(s.center.fromArray(o.sphere),o.sphere[3])))){a.onBeforeRender(n,null,t,a.geometry,a.material,null);for(let l=o.first;l<o.end;l++){let c=o.slotBase+l;this._state.image.data[c*4+3]&&r.push(this._slotInstance[c])}}}return r.sort((o,a)=>o-a)}memory(){let t=this._units[this._chunkCount]?.slotBase??this._slotInstance.length;return{gpuBytes:this._mergedBytes+this._instancedBytes+this._lineBytes+this._stateBytes,mergedBytes:this._mergedBytes,instancedBytes:this._instancedBytes,stateBytes:this._stateBytes,lineBytes:this._lineBytes,chunks:this._chunkCount,cells:this._units.length-this._chunkCount,mergedInstances:t,instancedInstances:this._slotInstance.length-t,triangles:this._triangles}}setClipping(t,e){for(let n of this._buckets)for(let s of[n.material,n.wire])s.clippingPlanes=t.length>0?t:null,s.clipIntersection=e,s.needsUpdate=!0;this._changed("clipping")}_build(t,e,n,s,r){let o=e.length,a=this._meta,l=new Map,c=B=>{let U=l.get(B);if(!U){let H=a.geometries[B],Z=t.view(H.indices),rt=H.uvs?t.view(H.uvs):null;U=yd(ad(t,H),H.q??null,ld(t,H),Z,rt),l.set(B,U)}return U},h=new Uint8Array(o),d=new Float64Array(o*3),u=new Float32Array(o*3),p=new Uint32Array(o),g=new Float32Array(o),_=new Uint8Array(o),m=new Map,f=this._boxes;for(let B=0;B<o;B++){let U=c(e[B]);if(U.vertices===0||!Sd(f,B))continue;h[B]=xd(n,B,U,d.subarray(B*3,B*3+3)),_[B]=Nx(n,B)?1:0,p[B]=U.vertices;for(let rt=0;rt<3;rt++)u[B*3+rt]=(f[B*6+rt]+f[B*6+3+rt])/2;g[B]=Math.hypot(f[B*6+3]-f[B*6],f[B*6+4]-f[B*6+1],f[B*6+5]-f[B*6+2])/2;let H=(e[B]*2+_[B])*this._buckets.length+this._bucketOf[B],Z=m.get(H);Z||m.set(H,Z=[]),Z.push(B)}let R=[...m.keys()].sort((B,U)=>B-U).map(B=>{let U=m.get(B),H=c(e[U[0]]),Z=this._buckets[this._bucketOf[U[0]]].texture!==null,rt=[0,1,2].every(Ft=>(H.max[Ft]-H.min[Ft])/Xn<=65535),at=H.vertices*((rt?12:20)+(Z?8:0))+H.indices.length*(H.vertices>65535?4:2);return{k:U.length,bytes:at,members:U,textured:Z}}),S=s.mergedCap??Ac,b=s.minRepeats??Ix;if(R.reduce((B,U)=>B+U.k*U.bytes,0)>S){let B=this.visibleBox(),U=B.isEmpty()?1/0:B.min.distanceTo(B.max)*(s.cellExtent??Px);for(let H of R)H.k<b||(H.leaves=pd(u,H.members,Md,U),H.cells=H.leaves.length)}let y=md(R,{cap:S,minRepeats:b,perCell:Md,maxDraws:Lx}),T=new Map,v=new Uint32Array(a.geometries.length),E=[];R.forEach((B,U)=>{if(y[U]){for(let H of B.leaves)E.push({shape:B,members:Rc(H,g)});return}for(let H of B.members){v[e[H]]++;let Z=this._bucketOf[H]*2+(h[H]===ws?1:0),rt=T.get(Z);rt||T.set(Z,rt=[]),rt.push(H)}});let P=[];for(let B of[...T.keys()].sort((U,H)=>U-H))for(let U of dd(u,p,T.get(B),s.chunkVertices??cd))P.push(Rc(U,g));let D=[...P,...E.map(B=>B.members)].reduce((B,U)=>B+U.length,0);if(D>r)throw new fr(D,r);let z=Math.max(1,Math.ceil(D/Di)),O=new Float32Array(Di*z*4);this._state=new ei(new Uint8Array(Di*z*4),Di,z),this._state.colorSpace=Se,this._state.onUpdate=()=>{this._fullPending=!1,this._pendingRanges=0},this._fullPending=!0,this._pendingRanges=0,this._dirty=new Uint32Array(Lc),this._dirtyCount=0;let I=new ei(O,Di,z,tn,We);I.needsUpdate=!0,I.onUpdate=()=>I.image.data=null,this.slotUniforms.slotInfo.value=I,this.slotUniforms.slotState.value=this._state,this._stateBytes=Di*z*20,this._slotOf=new Uint32Array(o).fill(dr),this._slotInstance=new Uint32Array(D),this._slotUnit=new Uint32Array(D),this._slotRadius=new Float32Array(D),this._slotCost=new Float32Array(D),this._pixels=new Float32Array(D),this._planes=new Float64Array(24),this._detailView=new Float64Array(8),this._frameView=new Float64Array(8),this._frameViewAt=NaN,this._units=[],this._cut=[],this._unitScale=null,this._cutInView=0,this._cutFrame=-1,this._mergedBytes=0,this._instancedBytes=0,this._lineBytes=0;let k={matrices:n,geometryOf:e,mirrored:_,kind:h,origins:d,source:c,textured:!1};this._lineSources=new Map;let X=0;for(let B of P){let U=this._buckets[this._bucketOf[B[0]]];k.textured=U.texture!==null;let H=vd(B,k);for(let Z=0;Z<B.length;Z++){let rt=B[Z],at=X+Z;this._slotOf[rt]=at,this._slotInstance[at]=rt,this._slotUnit[at]=this._units.length,this._slotRadius[at]=g[rt],this._slotCost[at]=(H.indexStart[Z+1]-H.indexStart[Z])/3,O.set(H.origins.subarray(Z*3,Z*3+3),at*4),O[at*4+3]=H.steps[Z];let Ft=e[rt];this._lineSources.has(Ft)||this._lineSources.set(Ft,c(Ft).indices.slice()),--v[Ft]===0&&l.delete(Ft)}this._units.push(this._chunk(U,B,X,H,_,e)),X+=B.length}this._lineMembers={mirrored:_,geometryOf:e.slice()},this._chunkCount=this._units.length,this._triangles=this._slotCost.reduce((B,U)=>B+U,0);let Y=new Map;for(let{shape:B,members:U}of E){let H=U[0],Z=c(e[H]),rt=Y.get(B);rt||Y.set(B,rt=this._shape(Z,_[H]===1,B.textured));for(let at=0;at<U.length;at++){let Ft=U[at],Nt=X+at;this._slotOf[Ft]=Nt,this._slotInstance[Nt]=Ft,this._slotUnit[Nt]=this._units.length,this._slotRadius[Nt]=g[Ft],this._slotCost[Nt]=rt.triangles*Dx,O.set(Z.q?Z.q.o:[0,0,0],Nt*4),O[Nt*4+3]=Z.q?Z.q.s:1}this._triangles+=rt.triangles*U.length,this._units.push(this._cell(this._buckets[this._bucketOf[H]],U,X,rt,n)),X+=U.length}this._totalCost=this._slotCost.reduce((B,U)=>B+U,0)}_shape(t,e,n){let s=t.vertices,r=t.q?new Uint16Array(s*4):new Float32Array(s*4);for(let h=0;h<s;h++)for(let d=0;d<3;d++)r[h*4+d]=t.positions[h*3+d];let o=t.oct?t.oct.slice():null;if(!o){let h=Ca(t);o=new Int16Array(s*2);for(let d=0;d<s;d++)ur(o,d*2,h[d*3],h[d*3+1],h[d*3+2])}let a=n?new Float32Array(s*2):null;a&&t.uvs&&a.set(t.uvs);let l=t.indices,c=Ra(s,l.length);for(let h=0;h<l.length;h+=3)c[h]=l[h],c[h+1]=l[h+(e?2:1)],c[h+2]=l[h+(e?1:2)];return this._instancedBytes+=r.byteLength+o.byteLength+(a?.byteLength??0)+c.byteLength,{q:yn(r,4),normal:yn(o,2,!0),uv:a&&yn(a,2),index:new we(c,1),triangles:l.length/3}}_cell(t,e,n,s,r){let o=e.length,a=new re;a.setAttribute("q",s.q),a.setAttribute("position",s.q),a.setAttribute("normal",s.normal),s.uv&&a.setAttribute("uv",s.uv),a.setAttribute("slotBase",yn(Float32Array.from({length:o},(p,g)=>n+g),1,!1,Hn)),a.setIndex(s.index);let l=wd(this._boxes,e),c=new Le(new C(l[0],l[1],l[2]),l[3]);a.boundingSphere=c;let h=new cs(a,t.material,0),d=new Float32Array(o*16);for(let p=0;p<o;p++){let g=e[p]*12;for(let _=0;_<4;_++)d[p*16+_*4]=r[g+_*3],d[p*16+_*4+1]=r[g+_*3+1],d[p*16+_*4+2]=r[g+_*3+2];d[p*16+15]=1}h.instanceMatrix=yn(d,16,!1,Hn),h.count=o,h.boundingSphere=c,this._instancedBytes+=o*68;let u={bucket:t,mesh:h,lines:null,slotBase:n,n:o,sphere:l,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!0,triangles:s.triangles,lastFrame:-1/0};return h.onBeforeRender=(p,g,_)=>this._range(u,p,_,h),h.visible=!1,this.root.add(h),u}_chunk(t,e,n,s,r,o){let a=new fs;a.instanceCount=1,a.setAttribute("q",yn(s.q,4)),a.setAttribute("normal",yn(s.o,2,!0)),s.uv&&a.setAttribute("uv",yn(s.uv,2)),a.setAttribute("slotBase",yn(new Float32Array([n]),1,!1,Hn)),a.setIndex(yn(s.index,1));let l=wd(this._boxes,e);a.boundingSphere=new Le(new C(l[0],l[1],l[2]),l[3]),this._mergedBytes+=s.q.byteLength+s.o.byteLength+(s.uv?.byteLength??0)+s.index.byteLength;let c=new _e(a,t.material),h={bucket:t,mesh:c,lines:null,slotBase:n,n:e.length,sphere:l,shown:0,first:0,last:-1,end:0,dirty:!1,cell:!1,starts:s.indexStart,vertices:s.q.length/4,f32:s.q instanceof Float32Array,members:e.slice(),lastFrame:-1/0};return c.onBeforeRender=(d,u,p)=>this._range(h,d,p,c),c.visible=!1,this.root.add(c),h}_buildLines(){if(!this._lineSources)return;let{mirrored:t,geometryOf:e}=this._lineMembers;for(let n of this._units){if(n.cell){let h=n.mesh.geometry.index;n.lines=new cs(n.mesh.geometry,n.bucket.wire,0),n.lines.instanceMatrix=n.mesh.instanceMatrix,n.lines.boundingSphere=n.mesh.boundingSphere,n.lines.onBeforeRender=(d,u,p)=>this._range(n,d,p,n.lines),this._lineBytes+=h.count*2*h.array.BYTES_PER_ELEMENT,this.root.add(n.lines);continue}let s=n.starts[n.n],r=Ra(n.vertices,s*2),o=0,a=0;for(let h of n.members){let d=this._lineSources.get(e[h]),u=t[h]===1;for(let p=0;p<d.length;p+=3){let g=d[p]+a,_=d[p+(u?2:1)]+a,m=d[p+(u?1:2)]+a;r[o++]=g,r[o++]=_,r[o++]=_,r[o++]=m,r[o++]=m,r[o++]=g}a+=this._meta.geometries[e[h]].positions.n/3}let l=n.mesh.geometry,c=new fs;c.instanceCount=1;for(let h of["q","normal","uv","slotBase"])l.attributes[h]&&c.setAttribute(h,l.attributes[h]);c.setIndex(yn(r,1)),c.boundingSphere=l.boundingSphere,this._lineBytes+=r.byteLength,n.lines=new gn(c,n.bucket.material),n.lines.onBeforeRender=(h,d,u)=>this._range(n,h,u,n.lines),this.root.add(n.lines),n.members=null}this._lineSources=null,this._lineMembers=null}_range(t,e,n,s){t.dirty&&this._span(t);let r=t.last+1;if(this._minPixels>0&&r>t.first){let o=e.info.render.frame;o!==this._frameViewAt&&(wc(n,this._viewHeight,this._frameView),this._frameViewAt=o);let a=this._frameView,l=bd(a,t.sphere),c=a[7]?l>0?this._minPixels*l/a[6]:0:this._minPixels/a[6];r=Math.min(r,gd(this._slotRadius,t.slotBase+t.first,t.slotBase+r,c)-t.slotBase)}if(t.cell)s.count=Math.max(r,0);else{let o=s.isLineSegments?2:1,[a,l]=_d(t.starts,t.first,r);s.geometry.setDrawRange(a*o,l*o)}t.end=r,t.lastFrame=e.info.render.frame,this._cutFrame===null&&this._minPixels>0&&(this._cutFrame=t.lastFrame)}_span(t){let e=this._state.image.data,n=0;for(;n<t.n&&e[(t.slotBase+n)*4+3]===0;)n++;let s=t.n-1;for(;s>=n&&e[(t.slotBase+s)*4+3]===0;)s--;t.first=n<t.n&&!t.cell?n:0,t.last=n<t.n?s:-1,t.dirty=!1}_showUnit(t){let e=this._mode==="wireframe"&&!this._picking;t.mesh.visible=t.shown>0&&!e,t.lines&&(t.lines.visible=t.shown>0&&e)}_createBuckets(t,e,n){let s=new Map,r=[];for(let o=0;o<e.length;o++){let a=e[o],l=s.get(a);if(!l){let c=t.materials[a];l={index:r.length,bytes:c.color.map(h=>Math.round(h*255)),opacity:c.opacity,texture:c.texture,material:Pc(new ds({side:Be}),this.slotUniforms,n),wire:Pc(new ds({side:Be,wireframe:!0}),this.slotUniforms,n)},this._applyOpacity(l),s.set(a,l),r.push(l)}this._bucketOf[o]=l.index}return r}_indexElements(){let t=new Uint32Array(this.elementCount+1);for(let s of this._elementOf)s>=0&&t[s+1]++;for(let s=0;s<this.elementCount;s++)t[s+1]+=t[s];let e=new Uint32Array(t[this.elementCount]),n=t.slice(0,this.elementCount);this._elementOf.forEach((s,r)=>{s>=0&&(e[n[s]++]=r)}),this._elementStart=t,this._elementInstances=e}_texture(t){let e=this._textures.get(t);if(!e){let n=this._meta.textures[t],s=new Image;e=new Ue(s),e.colorSpace=Se,e.wrapS=e.wrapT=ns,e.repeat.set(1/n.sx,1/n.sy),s.onload=()=>{e.needsUpdate=!0,this._changed("appearance")},s.src=`data:${n.mime};base64,${n.data}`,this._textures.set(t,e)}return e}_applyOpacity(t){let e=t.opacity*this._opacity,n=e<1;for(let s of[t.material,t.wire])s.transparent!==n&&(s.needsUpdate=!0),s.opacity=e,s.transparent=n,s.depthWrite=!n}_colorOf(t){return this._highlight[t]?Rx:this._tint.get(t)??(this._mode==="white"?Cx:this._buckets[this._bucketOf[t]].bytes)}_applyColor(t){let e=this._slotOf[t];e!==dr&&(this._state.image.data.set(this._colorOf(t),e*4),this._markDirty(e))}_setInstanceVisible(t,e){this._visible[t]=e?1:0,this._draw(t)}_setLayerFlag(t,e,n){t[e]!==(n?1:0)&&(t[e]=n?1:0,this._layerHides[e]+=n?1:-1,this._draw(e))}_shown(t){return this._visible[t]===1&&this._layerHides[t]===0}_draw(t){let e=this._slotOf[t];if(e===dr)return;let n=this._shown(t)?255:0,s=this._state.image.data;if(s[e*4+3]===n)return;s[e*4+3]=n,this._markDirty(e);let r=this._units[this._slotUnit[e]];r.shown+=n?1:-1,r.dirty=!0,this._showUnit(r)}_markDirty(t){this._dirtyCount<Lc&&(this._dirty[this._dirtyCount]=t),this._dirtyCount++}_flush(){let t=this._dirtyCount;if(t===0)return;this._dirtyCount=0;let e=this._state;if(this._fullPending||this._pendingRanges+t>Lc)e.clearUpdateRanges(),this._fullPending=!0;else{for(let n=0;n<t;n++)e.addUpdateRange(this._dirty[n]*4,4);this._pendingRanges+=t}e.needsUpdate=!0}_checkElement(t){if(!Number.isInteger(t)||t<0||t>=this.elementCount)throw new RangeError(`Element index ${t} is out of range 0..${this.elementCount-1}.`)}_expandBox(t,e){if(!Sd(this._boxes,e))return;let n=this._boxes,s=e*6;t.min.set(Math.min(t.min.x,n[s]),Math.min(t.min.y,n[s+1]),Math.min(t.min.z,n[s+2])),t.max.set(Math.max(t.max.x,n[s+3]),Math.max(t.max.y,n[s+4]),Math.max(t.max.z,n[s+5]))}_changed(t){this._flush(),this.root.dispatchEvent({type:"change",detail:{kind:t}})}};function Dc(i,t,e){return e<=t?0:i.cell?(e-t)*i.triangles:(i.starts[e]-i.starts[t])/3}function bd(i,t){return(t[0]-i[0])*i[3]+(t[1]-i[1])*i[4]+(t[2]-i[2])*i[5]-t[3]}function wd(i,t){let e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let s of t)for(let r=0;r<3;r++)e[r]=Math.min(e[r],i[s*6+r]),n[r]=Math.max(n[r],i[s*6+3+r]);return Float64Array.of((e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2,Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2])/2)}var Bx={ru:{elements:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",noGeometry:"\u041D\u0435\u0442 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438",contextLost:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430 \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",noWebGL:"\u041D\u0443\u0436\u0435\u043D \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 WebGL 2",badData:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438",tooLarge:"\u041C\u043E\u0434\u0435\u043B\u044C \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0449\u0438\u043A\u0430: \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0441 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0435\u0439 \u2014 {count}, \u043F\u0440\u0435\u0434\u0435\u043B \u2014 {limit}",selected:"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",elementGroup:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442",id:"Id",category:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",type:"\u0422\u0438\u043F",level:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",sourceId:"ID \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430",link:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B",panels:"\u041F\u0430\u043D\u0435\u043B\u0438","panel.model":"\u041C\u043E\u0434\u0435\u043B\u044C","panel.views":"\u0412\u0438\u0434\u044B","panel.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","panel.clashes":"\u041A\u043E\u043B\u043B\u0438\u0437\u0438\u0438","panel.timeliner":"4D-\u0433\u0440\u0430\u0444\u0438\u043A","panel.links":"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B","group.navigation":"\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F","group.sections":"\u0421\u0435\u0447\u0435\u043D\u0438\u044F","group.measure":"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F","group.display":"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","group.view":"\u0412\u0438\u0434","tool.orbit":"\u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435","tool.pan":"\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u0430","tool.fit":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","tool.projection":"\u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430 / \u043E\u0440\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F","tool.plane":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.box":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","tool.distance":"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435","tool.displayMode":"\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","tool.grids":"\u041E\u0441\u0438","tool.opacity":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","tool.fullscreen":"\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D","menu.properties":"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430","menu.hide":"\u0421\u043A\u0440\u044B\u0442\u044C","menu.isolate":"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C","menu.showAll":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0451","menu.zoomTo":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C \u043A \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.sectionBox":"\u0411\u043E\u043A\u0441 \u0441\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0443","menu.copyId":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id","menu.fitAll":"\u0412\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0451","menu.resetSections":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0435\u0447\u0435\u043D\u0438\u044F",searchPlaceholder:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u0442\u0438\u043F\u0443, Id\u2026",noCategory:"\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",noMatches:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",idCopied:"Id \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D",copyFailed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C Id",fullscreenUnavailable:"\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D","face.front":"\u0421\u043F\u0435\u0440\u0435\u0434\u0438","face.back":"\u0421\u0437\u0430\u0434\u0438","face.left":"\u0421\u043B\u0435\u0432\u0430","face.right":"\u0421\u043F\u0440\u0430\u0432\u0430","face.top":"\u0421\u0432\u0435\u0440\u0445\u0443","face.bottom":"\u0421\u043D\u0438\u0437\u0443","cube.title":"\u041A\u0443\u0431 \u0432\u0438\u0434\u0430","cube.up":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0432\u0435\u0440\u0445","cube.down":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043D\u0438\u0437","cube.left":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043B\u0435\u0432\u043E","cube.right":"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u043F\u0440\u0430\u0432\u043E","cube.home":"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0432\u0438\u0434","sections.mode":"\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0447\u0435\u043D\u0438\u044F","sections.planes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.box":"\u0411\u043E\u043A\u0441","sections.off":"\u0412\u044B\u043A\u043B","sections.axis":"\u041E\u0441\u044C","sections.addPlane":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.noPlanes":"\u041F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439 \u043D\u0435\u0442","sections.rotated":"\u043F\u043E\u0432\u0451\u0440\u043D\u0443\u0442\u0430","sections.position":"\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438","sections.flip":"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443","sections.enabled":"\u0412\u043A\u043B","sections.delete":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C","sections.keepInside":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.cutInside":"\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438","sections.fitSelection":"\u041F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u043C\u0443","sections.showGizmo":"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440","sections.maxPlanes":"\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 6 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0435\u0439","unit.m":"\u043C","display.materials":"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B","display.textures":"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B","display.white":"\u0411\u0435\u043B\u044B\u0439","display.wireframe":"\u041A\u0430\u0440\u043A\u0430\u0441","opacity.label":"\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","opacity.value":"{value} %","views.tour":"\u0422\u0443\u0440 \u043F\u043E \u0432\u0438\u0434\u0430\u043C","views.stop":"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0443\u0440","clash.New":"\u041D\u043E\u0432\u0430\u044F","clash.Active":"\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F","clash.Reviewed":"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430","clash.Approved":"\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430","clash.Resolved":"\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430","task.construct":"\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E","task.demolish":"\u0421\u043D\u043E\u0441","task.temporary":"\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435","player.title":"4D-\u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C","player.play":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438","player.pause":"\u041F\u0430\u0443\u0437\u0430","player.date":"\u0414\u0430\u0442\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430","player.speed":"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",truncated:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E {meshes} \u0438\u0437 {total} \u043C\u0435\u0448\u0435\u0439: \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u0440\u0435\u0437\u0430\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u043E\u0439 MaxMeshVertices"},en:{elements:"Elements",noGeometry:"No geometry",contextLost:"The graphics context was lost \u2014 reload the page",noWebGL:"This page needs a browser with WebGL 2",badData:"The model data could not be read",tooLarge:"The model is too large for this viewer: {count} objects with geometry, the limit is {limit}",selected:"Selected",close:"Close",elementGroup:"Element",id:"Id",category:"Category",type:"Type",level:"Level",sourceId:"Source ID",link:"Link",panels:"Panels","panel.model":"Model","panel.views":"Views","panel.sections":"Sections","panel.clashes":"Clashes","panel.timeliner":"4D schedule","panel.links":"Linked files","group.navigation":"Navigation","group.sections":"Sections","group.measure":"Measure","group.display":"Display","group.view":"View","tool.orbit":"Orbit","tool.pan":"Pan","tool.fit":"Fit all","tool.projection":"Perspective / orthographic","tool.plane":"Section plane","tool.box":"Section box","tool.resetSections":"Reset sections","tool.distance":"Distance","tool.displayMode":"Display mode","tool.grids":"Grids","tool.opacity":"Transparency","tool.fullscreen":"Full screen","menu.properties":"Properties","menu.hide":"Hide","menu.isolate":"Isolate","menu.showAll":"Show all","menu.zoomTo":"Zoom to object","menu.sectionBox":"Section box around object","menu.copyId":"Copy Id","menu.fitAll":"Fit all","menu.resetSections":"Reset sections",searchPlaceholder:"Search by name, type, Id\u2026",noCategory:"No category",noMatches:"No matches",idCopied:"Id copied",copyFailed:"Could not copy Id",fullscreenUnavailable:"Fullscreen is not available","face.front":"Front","face.back":"Back","face.left":"Left","face.right":"Right","face.top":"Top","face.bottom":"Bottom","cube.title":"View cube","cube.up":"Rotate up","cube.down":"Rotate down","cube.left":"Rotate left","cube.right":"Rotate right","cube.home":"Home view","sections.mode":"Section mode","sections.planes":"Planes","sections.box":"Box","sections.off":"Off","sections.axis":"Axis","sections.addPlane":"Add plane","sections.noPlanes":"No planes","sections.rotated":"rotated","sections.position":"Plane position","sections.flip":"Flip side","sections.enabled":"On","sections.delete":"Delete plane","sections.keepInside":"Show inside","sections.cutInside":"Cut inside","sections.fitSelection":"Fit to selection","sections.showGizmo":"Show gizmo","sections.maxPlanes":"At most 6 planes","unit.m":"m","display.materials":"Materials","display.textures":"Textures","display.white":"White","display.wireframe":"Wireframe","opacity.label":"Opacity","opacity.value":"{value}%","views.tour":"Play tour","views.stop":"Stop tour","clash.New":"New","clash.Active":"Active","clash.Reviewed":"Reviewed","clash.Approved":"Approved","clash.Resolved":"Resolved","task.construct":"Construct","task.demolish":"Demolish","task.temporary":"Temporary","player.title":"4D player","player.play":"Play","player.pause":"Pause","player.date":"Schedule date","player.speed":"Speed",truncated:"Showing {meshes} of {total} meshes: the model was truncated by the MaxMeshVertices setting"}},mr=(globalThis.navigator?.language??"").toLowerCase().startsWith("ru")?"ru":"en";function st(i,t=mr){let e=Bx[t][i];if(e===void 0)throw new Error(`Missing UI string '${i}'.`);return e}var Ed=new C(0,0,1),Ia=Math.PI/2-.01;function Ad(i,t,e=4){return Math.hypot(t.x-i.x,t.y-i.y)<=e}function Rd(i,t,e,n,s,r){let o=i.clone().sub(e),a=t.clone().sub(e),l=d=>(o.applyQuaternion(d),a.applyQuaternion(d));l(new Ne().setFromAxisAngle(Ed,-n*r));let c=a.clone().sub(o).normalize(),h=c.clone().cross(Ed);if(h.lengthSq()>1e-12){let d=Math.asin(Oe.clamp(c.z,-1,1)),u=Oe.clamp(s*r,d-Ia,d+Ia);l(new Ne().setFromAxisAngle(h.normalize(),-u))}return{position:o.add(e),target:a.add(e)}}function Cd(i,t,e,n){let s=r=>r.clone().sub(e).multiplyScalar(n).add(e);return{position:s(i),target:s(t)}}var Ox=.85,zx=100/3;function Id(i,t,e){let n=i*(t===1?zx:t===2?e:1);return Oe.clamp(Ox**(-n/100),.5,2)}var Uc=(i,t)=>t>=i?"window":"crossing";function Pd(i,t,e){let n=Td(i.position,i.target),s=Td(t.position,t.target),r=n.azimuth??s.azimuth??0,o=s.azimuth??r,a=Oe.euclideanModulo(o-r+Math.PI,2*Math.PI)-Math.PI,l=(_,m)=>_+(m-_)*e,c=r+a*e,h=Oe.clamp(l(n.elevation,s.elevation),-Ia,Ia),d=l(n.distance,s.distance),u=i.target.clone().lerp(t.target,e),p=Math.cos(h)*d;return{position:u.clone().add(new C(p*Math.cos(c),p*Math.sin(c),Math.sin(h)*d)),target:u}}function Td(i,t){let e=i.clone().sub(t),n=e.length(),s=Math.hypot(e.x,e.y);return{distance:n,elevation:n>1e-12?Math.asin(Oe.clamp(e.z/n,-1,1)):0,azimuth:s>1e-9*Math.max(n,1e-12)?Math.atan2(e.y,e.x):null}}var kx=.005,Vx=new C(1,-1,.8).normalize(),Fc=(i,t)=>new CustomEvent(i,{detail:t}),Pa=class extends EventTarget{constructor(t,e,{pick:n=()=>null,visibleBox:s=()=>new se}={}){super(),this.dom=e,this.pick=n,this.visibleBox=s,this.target=new C,this.leftButtonMode="orbit",this._perspective=t,this._orthographic=new In(-1,1,1,-1),this.camera=t,this._drag=null,this._wheelPick=null,this._animation=0,this._overlay=null,this._bounds=null,this._extraBounds=new Map,e.style.touchAction="none",e.addEventListener("pointerdown",r=>this._down(r)),e.addEventListener("pointermove",r=>this._move(r)),e.addEventListener("pointerup",r=>this._up(r)),e.addEventListener("pointercancel",()=>this._end()),e.addEventListener("lostpointercapture",r=>this._lostCapture(r)),window.addEventListener("blur",()=>this._end()),e.addEventListener("wheel",r=>this._wheel(r),{passive:!1}),e.addEventListener("contextmenu",r=>r.preventDefault())}setLeftButtonMode(t){if(t!=="orbit"&&t!=="pan")throw new RangeError(`Unknown left button mode: ${t}`);this.leftButtonMode=t}setProjection(t){if(t!=="perspective"&&t!=="orthographic")throw new RangeError(`Unknown projection: ${t}`);let e=t==="perspective"?this._perspective:this._orthographic,n=this.camera;if(e!==n){e.position.copy(n.position),e.quaternion.copy(n.quaternion),e.up.copy(n.up),n.parent?.add(e),n.parent?.remove(n);for(let s of[...n.children])e.add(s);this.camera=e,this.resize()}}resize(){let t=this.camera,e=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),n=Math.max(t.position.distanceTo(this.target),1e-6);if(t.isPerspectiveCamera)t.aspect=e;else{let r=n*Math.tan(Oe.degToRad(this._perspective.fov/2));Object.assign(t,{top:r,bottom:-r,left:-r*e,right:r*e})}let s=this._rangeSphere();if(s){let r=t.position.distanceTo(s.center);t.far=(r+s.radius)*1.05,t.near=Math.max((r-s.radius)*.95,t.far/5e3)}t.updateProjectionMatrix(),this.dispatchEvent(new Event("change"))}setExtraBounds(t,e){e&&!e.isEmpty()?this._extraBounds.set(t,e.clone()):this._extraBounds.delete(t),this.resize()}_rangeSphere(){let t=this._visibleBounds()?.sphere??null;if(this._extraBounds.size===0)return t;let e=t?this._bounds.box.clone():new se;for(let n of this._extraBounds.values())e.union(n);return e.getBoundingSphere(new Le)}invalidateBounds(){this._bounds=null}_visibleBounds(){if(!this._bounds){let t=this.visibleBox();this._bounds={box:t,sphere:t.isEmpty()?null:t.getBoundingSphere(new Le)}}return this._bounds.sphere&&this._bounds}fitBox(t,e=!0){if(t.isEmpty())return;let n=t.getBoundingSphere(new Le),s=Math.max(n.radius,.001),r=Oe.degToRad(this._perspective.fov/2),o=this.dom.clientWidth/Math.max(this.dom.clientHeight,1),a=s/Math.sin(Math.min(r,Math.atan(Math.tan(r)*o))),l=this.camera.position.clone().sub(this.target);l.lengthSq()<1e-12&&l.copy(Vx);let c=l.normalize().multiplyScalar(a).add(n.center);e?this.animateTo({position:c,target:n.center}):this._set(c,n.center)}zoomToBox(t){this.fitBox(t,!0)}animateTo({position:t,target:e},n=400){this._stopAnimation();let s={position:this.camera.position.clone(),target:this.target.clone()},r={position:t??s.position,target:e??s.target},o=performance.now(),a=l=>{let c=Math.min((l-o)/n,1),h=Pd(s,r,c*c*(3-2*c));this._set(h.position,h.target),this._animation=c<1?requestAnimationFrame(a):0};this._animation=requestAnimationFrame(a)}get animating(){return this._animation!==0}_stopAnimation(){cancelAnimationFrame(this._animation),this._animation=0}_set(t,e){this.camera.position.copy(t),this.target.copy(e),this.camera.lookAt(e),this.resize()}_down(t){this._end(),this._stopAnimation(),this.dom.setPointerCapture(t.pointerId),t.preventDefault();let e=t.button===0&&t.shiftKey?"box":t.button===0&&this.leftButtonMode==="orbit"?"orbit":"pan",n={x:t.clientX,y:t.clientY},s=null;e==="orbit"&&(s=this.pick(n.x,n.y),s||(s=this._visibleBounds()?.sphere.center.clone()??this.target.clone())),this._drag={id:t.pointerId,button:t.button,mode:e,pivot:s,down:n,last:n,moved:!1}}_move(t){let e=this._drag;if(!e||t.pointerId!==e.id)return;if(t.buttons===0)return this._end();let n={x:t.clientX,y:t.clientY};if(!e.moved&&Ad(e.down,n))return;e.moved=!0;let s=n.x-e.last.x,r=n.y-e.last.y;if(e.last=n,e.mode==="box")this._drawRect(e.down,n);else if(e.mode==="orbit"){let o=Rd(this.camera.position,this.target,e.pivot,s,r,kx);this._set(o.position,o.target)}else this._pan(s,r)}_pan(t,e){let n=this.camera,s=Math.max(this.dom.clientHeight,1),r=n.isPerspectiveCamera?2*n.position.distanceTo(this.target)*Math.tan(Oe.degToRad(n.fov/2))/s:(n.top-n.bottom)/s,o=new C(1,0,0).applyQuaternion(n.quaternion),a=new C(0,1,0).applyQuaternion(n.quaternion),l=o.multiplyScalar(-t*r).addScaledVector(a,e*r);this._set(n.position.clone().add(l),this.target.clone().add(l))}_up(t){let e=this._drag;if(!e||t.pointerId!==e.id||t.button!==e.button)return;let n={x:t.clientX,y:t.clientY};if(this._end(),e.mode==="box"&&e.moved){let s={x:Math.min(e.down.x,n.x),y:Math.min(e.down.y,n.y),width:Math.abs(n.x-e.down.x),height:Math.abs(n.y-e.down.y)},r=Uc(e.down.x,n.x);this.dispatchEvent(Fc("boxselect",{rect:s,mode:r,ctrl:t.ctrlKey,shift:t.shiftKey}))}else!e.moved&&e.button===0?this.dispatchEvent(Fc("click",{x:n.x,y:n.y,button:0,ctrl:t.ctrlKey,shift:t.shiftKey})):!e.moved&&e.button===2&&this.dispatchEvent(Fc("contextmenu",{x:n.x,y:n.y}))}_lostCapture(t){this._drag&&t.buttons?this.dom.setPointerCapture(this._drag.id):this._end()}_end(){this._drag=null,this._overlay?.remove(),this._overlay=null}_drawRect(t,e){this._overlay||(this._overlay=document.createElement("div"),Object.assign(this._overlay.style,{position:"fixed",pointerEvents:"none",border:"1px solid #2563eb",background:"rgba(37,99,235,0.12)"}),(this.dom.parentElement??document.body).appendChild(this._overlay)),Object.assign(this._overlay.style,{borderStyle:Uc(t.x,e.x)==="window"?"solid":"dashed",left:`${Math.min(t.x,e.x)}px`,top:`${Math.min(t.y,e.y)}px`,width:`${Math.abs(e.x-t.x)}px`,height:`${Math.abs(e.y-t.y)}px`})}_wheel(t){if(t.preventDefault(),t.deltaY===0)return;this._stopAnimation(),this._wheelPick||(this._wheelPick={point:this.pick(t.clientX,t.clientY)},requestAnimationFrame(()=>this._wheelPick=null));let e=this._wheelPick.point??this.target,n=Cd(this.camera.position,this.target,e,Id(t.deltaY,t.deltaMode,this.dom.clientHeight));this._set(n.position,n.target)}};function nt(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}function qe(i,t,e){let n=nt("button",i);return n.type="button",n.innerHTML=t,n.title=e,n.setAttribute("aria-label",e),n}function La(i){i.preventDefault(),i.stopPropagation()}function Da(i){La(i);let t=()=>{window.removeEventListener("pointerup",e,!0),setTimeout(()=>window.removeEventListener("click",La,!0))},e=n=>{La(n),t()};window.addEventListener("pointerup",e,!0),window.addEventListener("click",La,!0)}function Na(i,t,e,n){let s=t.clone().applyMatrix4(e.matrixWorldInverse).z<0,r=t.clone().project(e);i.hidden=!(s&&Math.abs(r.x)<=1&&Math.abs(r.y)<=1),!i.hidden&&(i.style.left=`${n.left+(r.x+1)/2*n.width}px`,i.style.top=`${n.top+(1-r.y)/2*n.height}px`)}var de=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Ld='<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',Zt={model:de('<path d="M4 6h2M10 6h10M4 12h2M10 12h10M4 18h2M10 18h10"/>'),views:de('<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>'),sections:de('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),clashes:de('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>'),timeliner:de('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),links:de('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),orbit:de('<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>'),pan:de('<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>'),fit:de('<path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"/>'),projection:de(Ld),plane:de('<path d="M3 17l5-6h13l-5 6z"/><path d="M12 14V4M9 7l3-3 3 3"/>'),box:de(`<g stroke-dasharray="3 2.5">${Ld}</g>`),resetSections:de('<circle cx="12" cy="12" r="8"/><path d="M6.5 17.5l11-11"/>'),distance:de('<path d="M3 16L16 3l5 5L8 21z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>'),displayMode:de('<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>'),grids:de('<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'),opacity:de('<path d="M12 3l6 8a6 6 0 1 1-12 0z"/>'),fullscreen:de('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),close:de('<path d="M6 6l12 12M18 6L6 18"/>'),chevron:de('<path d="M9 6l6 6-6 6"/>'),flip:de('<path d="M4 12h16"/><path d="M9 8l3-4 3 4M9 16l3 4 3-4"/>'),remove:de('<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13M9 7V4h6v3"/>'),play:de('<path d="M7 4l13 8-13 8z"/>'),pause:de('<path d="M8 4v16M16 4v16"/>'),home:de('<path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h12V9.5"/>')};var gr=new C(0,0,1),on={right:new C(1,0,0),left:new C(-1,0,0),back:new C(0,1,0),front:new C(0,-1,0),top:new C(0,0,1),bottom:new C(0,0,-1)},Hx={right:gr,left:gr,back:gr,front:gr,top:on.back,bottom:on.front},Ni=.7,Gx=Oe.degToRad(1),Dd=.01,Nd=96,Ua=1.75;function Ud(i){let t=i.split("-"),e=new C;for(let n of t){if(!Object.hasOwn(on,n))throw new RangeError(`Unknown view cube region: ${i}`);e.add(on[n])}if(new Set(t).size!==t.length||e.lengthSq()!==t.length)throw new RangeError(`Unknown view cube region: ${i}`);return e.normalize()}function Wx(i){let t=[];return Math.abs(i.z)>=Ni&&t.push(i.z>0?"top":"bottom"),Math.abs(i.y)>=Ni&&t.push(i.y>0?"back":"front"),Math.abs(i.x)>=Ni&&t.push(i.x>0?"right":"left"),t.join("-")}function Fd(i,t=Gx){let e=i.clone().normalize(),n=Math.cos(t);return Object.keys(on).find(s=>e.dot(on[s])>=n)??null}function Bd(i){let t=new C(i.x,i.y,0);if(t.lengthSq()<1e-24)return"front";t.normalize();let e=["front","right","back","left"],n=Math.max(...e.map(s=>t.dot(on[s])));return e.find(s=>t.dot(on[s])>=n-1e-9)}function Bc(i,t){return on[Bd(t)].clone().multiplyScalar(Math.sin(Dd)).addScaledVector(on[i],Math.cos(Dd))}function Xx(i,t){let e=Fd(i);if(!e)return null;let n=e==="top"||e==="bottom";if(t==="left"||t==="right")return(n?Bc(e,i):Ud(e)).applyAxisAngle(gr,t==="right"?Math.PI/2:-Math.PI/2);if(t!=="up"&&t!=="down")throw new RangeError(`Unknown arrow: ${t}`);if(!n)return Bc(t==="up"?"top":"bottom",i);let s=on[Bd(i)];return t==="up"==(e==="top")?s.clone().negate():s.clone()}function qx(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle="#2a2f38",n.fillRect(0,0,128,128),n.fillStyle="#cbd5e1",n.textAlign="center",n.textBaseline="middle",n.font=`600 26px ${t}`;let s=n.measureText(i).width;s>112&&(n.font=`600 ${Math.floor(2912/s)}px ${t}`),n.fillText(i,64,64);let r=new Ws(e);return r.colorSpace=Se,r}var Fa=class{constructor(t,e,n){this.controls=n,this.home={position:e.position.clone(),target:n.target.clone()},this.element=nt("div","ioviewer-viewcube"),this.canvas=nt("canvas","ioviewer-viewcube-canvas"),this.canvas.title=st("cube.title"),this.canvas.setAttribute("aria-label",st("cube.title")),this.element.append(this.canvas),this.error=null,this.renderer=this._createRenderer(),this.scene=new Mi,this.camera=new In(-Ua,Ua,Ua,-Ua,.1,10),this.faces=new be;let s=getComputedStyle(t).fontFamily;for(let[a,l]of Object.entries(on)){let c=st(`face.${a}`),h=new _e(new Gn(2,2),new cn({map:qx(c,s)})),d=Hx[a];h.quaternion.setFromRotationMatrix(new Ht().makeBasis(d.clone().cross(l),d,l)),h.position.copy(l),h.name=a,h.userData.label=c,this.faces.add(h)}let r=new gn(new Ti(new hn(2,2,2)),new sn({color:"#5b6575"}));this.highlight=new _e(new hn(1,1,1),new cn({color:"#2563eb",transparent:!0,opacity:.6})),this.highlight.visible=!1,this.scene.add(this.faces,r,this.highlight),this._raycaster=new Ai,this.hovered=null,this.canvas.addEventListener("pointermove",a=>this._hover(this.regionAtClient(a.clientX,a.clientY))),this.canvas.addEventListener("pointerleave",()=>this._hover(null)),this.canvas.addEventListener("click",a=>{let l=this.regionAtClient(a.clientX,a.clientY);if(!l)return;let c=l==="top"||l==="bottom";this._look(c?Bc(l,n.camera.position.clone().sub(n.target)):Ud(l))}),this.arrows=["up","down","left","right"].map(a=>{let l=qe("ioviewer-viewcube-arrow",Zt.chevron,st(`cube.${a}`));return l.dataset.arrow=a,l.addEventListener("click",()=>this._arrow(a)),l});let o=qe("ioviewer-viewcube-home",Zt.home,st("cube.home"));o.addEventListener("click",()=>n.animateTo({position:this.home.position.clone(),target:this.home.target.clone()})),this.element.append(...this.arrows,o),t.append(this.element),this.update()}_createRenderer(){this.canvas.addEventListener("webglcontextlost",e=>{e.stopImmediatePropagation(),this._fail(new Error("The view cube lost its WebGL context."))});let t=this.canvas.getContext("webgl2",{alpha:!0,antialias:!0});if(!t)return this._fail(new Error("WebGL 2 is not available for the view cube."));try{let e=new Ss({canvas:this.canvas,context:t,alpha:!0,antialias:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(Nd,Nd),e}catch(e){return this._fail(e)}}_fail(t){return this.error=t,this.renderer=null,this.element.hidden=!0,null}_render(){if(this.renderer)try{this.renderer.render(this.scene,this.camera)}catch(t){this._fail(t)}}update(){if(!this.renderer)return;let t=this.controls.camera;this.camera.quaternion.copy(t.quaternion),this.camera.position.set(0,0,5).applyQuaternion(t.quaternion),this.camera.updateMatrixWorld();let e=Fd(t.position.clone().sub(this.controls.target))!==null;for(let n of this.arrows)n.hidden=!e;this._render()}regionAtClient(t,e){let n=this.canvas.getBoundingClientRect(),s=new zt((t-n.left)/n.width*2-1,1-(e-n.top)/n.height*2);this._raycaster.setFromCamera(s,this.camera);let r=this._raycaster.intersectObjects(this.faces.children)[0];return r?Wx(r.point):null}_hover(t){if(t!==this.hovered){if(this.hovered=t,this.highlight.visible=!!t,t){let e=t.split("-").reduce((a,l)=>a.add(on[l]),new C),n=a=>a===0?[-Ni,Ni]:a>0?[Ni,1.02]:[-1.02,-Ni],[s,r,o]=e.toArray().map(n);this.highlight.scale.set(s[1]-s[0],r[1]-r[0],o[1]-o[0]),this.highlight.position.set((s[0]+s[1])/2,(r[0]+r[1])/2,(o[0]+o[1])/2)}this._render()}}_arrow(t){let n=this.controls.camera.position.clone().sub(this.controls.target),s=Xx(n,t);s&&this._look(s)}_look(t){let{controls:e}=this,n=e.camera.position.distanceTo(e.target);e.animateTo({position:t.clone().multiplyScalar(n).add(e.target),target:e.target.clone()})}};var Yx=`
#include <common>
${Cc}
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
varying vec2 vSlot;
void main() {
  ${Ic}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  vec4 wp = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  #endif
  vPos = ( modelMatrix * wp ).xyz;
  vSlot = vec2( float( slot >> 12 ), float( slot & 4095 ) );
  if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`,$x=`
#include <common>
#include <packing>
#include <clipping_planes_pars_fragment>
varying vec3 vPos;
varying vec2 vSlot;
void main() {
  #include <clipping_planes_fragment>
  float id = floor( vSlot.x + 0.5 ) * 4096.0 + floor( vSlot.y + 0.5 ) + 1.0;
  #if defined( IO_PICK_DEPTH )
  gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
  #elif defined( IO_PICK_RGBA8 )
  gl_FragColor = vec4( mod( id, 256.0 ), mod( floor( id / 256.0 ), 256.0 ), mod( floor( id / 65536.0 ), 256.0 ), floor( id / 16777216.0 ) ) / 255.0;
  #else
  gl_FragColor = vec4( vPos, id );
  #endif
}`,Od=i=>i&&{element:i.element,point:i.point.clone()};function Oc(i,t){let e=new Ze({vertexShader:Yx,fragmentShader:$x,uniforms:i,defines:t?{[t]:""}:{},side:Be,clipping:!0});return e.index0AttributeName="q",e}var Ba=class{constructor(t,e,n,s={}){this.renderer=t,this.scene=e,this.camera=n,this._lost=!1,t.domElement.addEventListener("webglcontextlost",()=>this._lost=!0),this._last=null,this._key=new Float64Array(36),e.root.addEventListener("change",o=>o.detail.kind!=="appearance"&&(this._last=null));let r=e.slotUniforms;this._float=s.pickFloat!==!1&&t.extensions.has("EXT_color_buffer_float"),this._float?(this._material=Oc(r,null),this._target=new Fe(1,1,{type:We}),this._pixel=new Float32Array(4)):(this._material=Oc(r,"IO_PICK_RGBA8"),this._depthMaterial=Oc(r,"IO_PICK_DEPTH"),this._target=new Fe(1,1),this._pixel=new Uint8Array(4))}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=Math.floor(t-n.left),r=Math.floor(e-n.top);if(this._lost||!(s>=0&&r>=0&&s<n.width&&r<n.height))return null;let o=this.camera;o.updateMatrixWorld();let a=this._key;a.set([s,r,n.width,n.height]),a.set(o.matrixWorld.elements,4),a.set(o.projectionMatrix.elements,20);let l=this._last;if(l&&l.camera===o&&l.key.every((h,d)=>h===a[d]))return Od(l.hit);let c=this._pick(s,r,n);return this._last={camera:o,key:a.slice(),hit:c},Od(c)}_pick(t,e,n){let s=this._render(this._material,t,e,n),r=(this._float?Math.round(s[3]):new Uint32Array(s.buffer)[0])-1;if(r<0)return null;let o=this.scene.slotElement(r);if(this._float)return{element:o,point:new C(s[0],s[1],s[2])};let[a,l,c,h]=this._render(this._depthMaterial,t,e,n),d=a/256+l/65536+c/16777216+h/255/16777216,u=new C((t+.5)/n.width*2-1,1-(e+.5)/n.height*2,d*2-1);return{element:o,point:u.unproject(this.camera)}}_render(t,e,n,s){let{renderer:r,camera:o}=this,a={target:r.getRenderTarget(),color:r.getClearColor(new Dt),alpha:r.getClearAlpha()},l=this.scene._buckets[0]?.material;t.clippingPlanes=l?.clippingPlanes??null,t.clipIntersection=l?.clipIntersection??!1,o.updateMatrixWorld(),o.setViewOffset(s.width,s.height,e,n,1,1);try{r.setRenderTarget(this._target),r.setClearColor(0,0),this.scene.withMaterial(t,()=>r.render(this.scene.root,o)),r.readRenderTargetPixels(this._target,0,0,1,1,this._pixel)}finally{r.setRenderTarget(a.target),r.setClearColor(a.color,a.alpha),o.clearViewOffset()}return this._pixel}};var zd=33.333333333333336,Zx=200,kd=1e6,Oa=class{constructor(t,e,n=1e7){this.scene=t,this.budget=n,this.minPixels=0,this._requestRender=e,this._last=new Float64Array(32),this._seen=!1,this._requestedAt=null,this._frame=null,this._cost=0,this._settle=0}requested(t){this._requestedAt??(this._requestedAt=t)}begin(t,e,n){t.updateMatrixWorld();let s=this._requestedAt===null?0:Math.max(n-this._requestedAt,0);this._requestedAt=null;let r=this._moved(t);this._frame=r?{start:n,waited:s}:null,this.minPixels=r?this.scene.detailThreshold(t,e,this.budget):0,this.scene.setDetail(this.minPixels,e),r&&(clearTimeout(this._settle),this.minPixels>0&&(this._settle=setTimeout(this._requestRender,Zx)))}end(t){this.scene.setDetail(0),this._frame&&this._adapt(this._frame.waited+(t-this._frame.start)),this._frame=null}_adapt(t){this._cost=this._cost?this._cost*.8+t*.2:t,this._cost>zd*1.1?this.budget=Math.max(this.budget*.9,kd):this._cost<zd*.7&&this.minPixels>0&&(this.budget=Math.max(Math.min(this.budget*1.05,this.scene.visibleCost),kd))}_moved(t){let e=this._last,n=[...t.matrixWorld.elements,...t.projectionMatrix.elements],s=(o,a)=>a!==26&&a!==30&&Math.abs(o-e[a])>1e-9*Math.max(1,Math.abs(o)),r=this._seen&&n.some(s);return this._seen=!0,e.set(n),r}};var Mn,Es,za,ka=class extends EventTarget{constructor(){super(...arguments);ja(this,Es);ja(this,Mn,new Set)}get size(){return Zn(this,Mn).size}has(e){return Zn(this,Mn).has(e)}values(){return Zn(this,Mn).values()}set(e){th(this,Mn,new Set(e)),br(this,Es,za).call(this)}toggle(e){Zn(this,Mn).delete(e)||Zn(this,Mn).add(e),br(this,Es,za).call(this)}clear(){Zn(this,Mn).size!==0&&(Zn(this,Mn).clear(),br(this,Es,za).call(this))}};Mn=new WeakMap,Es=new WeakSet,za=function(){this.dispatchEvent(new Event("change"))};function Vd(i,t,e){if(t!=="window"&&t!=="crossing")throw new RangeError(`Unknown box select mode: ${t}`);let n=i.x+i.width,s=i.y+i.height,r=t==="window"?o=>o.minX>=i.x&&o.maxX<=n&&o.minY>=i.y&&o.maxY<=s:o=>o.maxX>=i.x&&o.minX<=n&&o.maxY>=i.y&&o.minY<=s;return e.filter(r).map(o=>o.index)}function Hd(i,t,e){let n=new Ht().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).elements,{left:s,top:r,width:o,height:a}=e,l=new se,c=[];for(let h=0;h<i.elementCount;h++){if(!i.isVisible(h))continue;let{min:d,max:u}=i.elementBox(h,l),p=1/0,g=1/0,_=-1/0,m=-1/0,f=!0;for(let w=0;w<8&&f;w++){let R=w&1?u.x:d.x,S=w&2?u.y:d.y,b=w&4?u.z:d.z,y=1/(n[3]*R+n[7]*S+n[11]*b+n[15]);f=Math.abs((n[2]*R+n[6]*S+n[10]*b+n[14])*y)<=1;let T=s+((n[0]*R+n[4]*S+n[8]*b+n[12])*y+1)/2*o,v=r+(1-(n[1]*R+n[5]*S+n[9]*b+n[13])*y)/2*a;p=Math.min(p,T),_=Math.max(_,T),g=Math.min(g,v),m=Math.max(m,v)}f&&c.push({index:h,minX:p,minY:g,maxX:_,maxY:m})}return c}var Gd=["model","views","sections","clashes","timeliner","links"];function Wd(i){let t=nt("nav","ioviewer-rail ioviewer-floating");t.setAttribute("aria-label",st("panels")),i.append(t);let e=new Map,n=null;function s(l){let c=e.get(l);if(!c)throw new RangeError(`Unknown panel: ${l}`);return c}function r(l){let{button:c,panel:h,onClose:d}=s(l);n===l&&(h.hidden=!0,c.classList.remove("active"),c.setAttribute("aria-expanded","false"),n=null,d?.())}function o(l){let{button:c,panel:h}=s(l);c.hidden||n===l||(n&&r(n),h.hidden=!1,c.classList.add("active"),c.setAttribute("aria-expanded","true"),n=l)}function a(l,{icon:c,title:h,render:d,visible:u=!0,onClose:p}){let g=Gd.indexOf(l);if(g<0)throw new RangeError(`Unknown panel: ${l}`);if(e.has(l))throw new Error(`Panel ${l} is already registered.`);let _=qe("ioviewer-rail-button",c,h);_.dataset.panel=l,_.hidden=!u,_.setAttribute("aria-expanded","false"),_.addEventListener("click",()=>n===l?r(l):o(l));let m=[...t.children].find(b=>Gd.indexOf(b.dataset.panel)>g);t.insertBefore(_,m??null);let f=nt("section","ioviewer-side-panel ioviewer-floating");f.dataset.panel=l,f.hidden=!0,f.setAttribute("aria-label",h);let w=qe("ioviewer-panel-close",Zt.close,st("close"));w.addEventListener("click",()=>r(l));let R=nt("header","ioviewer-panel-header");R.append(nt("h2","",h),w);let S=nt("div","ioviewer-panel-body");f.append(R,S),i.append(f),e.set(l,{button:_,panel:f,onClose:p}),d(S)}return{rail:t,openPanel:o,closePanel:r,registerPanel:a}}var Xd=[{id:"navigation",items:["orbit","pan","fit","projection"]},{id:"sections",items:["plane","box","resetSections"]},{id:"measure",items:["distance"]},{id:"display",items:["displayMode","grids","opacity"]},{id:"view",items:["fullscreen"]}];function qd(i,t){let e=nt("div","ioviewer-toolbar ioviewer-floating");e.setAttribute("role","toolbar");let n=new Map;for(let o of t){let a=nt("div","ioviewer-toolbar-group");a.setAttribute("role","group"),a.setAttribute("aria-label",st(`group.${o.id}`));let l=nt("div","ioviewer-toolbar-row");for(let c of o.items){let h=qe("ioviewer-tool",Zt[c],st(`tool.${c}`));h.dataset.tool=c,h.setAttribute("aria-disabled","true");let d={button:h,handler:null};h.addEventListener("click",()=>{h.getAttribute("aria-disabled")!=="true"&&d.handler?.()}),n.set(c,d),l.append(h)}a.append(l,nt("div","ioviewer-toolbar-label",st(`group.${o.id}`))),e.append(a)}i.append(e);function s(o){let a=n.get(o);if(!a)throw new RangeError(`Unknown tool: ${o}`);return a}function r(o,a){s(o).button.setAttribute("aria-disabled",String(!a))}return{element:e,setHandler(o,a){s(o).handler=a,r(o,!0)},setEnabled:r,setActive(o,a){let{button:l}=s(o);l.classList.toggle("active",a),l.setAttribute("aria-pressed",String(a))}}}var Ui=24,Jx=8;function Kx(i,t,e,n,s){let r=Math.min(n,Math.max(0,Math.floor(i/t)-s)),o=Math.min(n,Math.ceil((i+e)/t)+s);return{start:r,end:Math.max(r,o)}}function jx(i){let t=null;return e=>{let n=e.trim().toLowerCase();t??(t=i.map(r=>`${r.name??""}
${r.type??""}
${r.id}
${r.sourceId??""}`.toLowerCase()));let s=[];for(let r=0;r<t.length;r++)t[r].includes(n)&&s.push(r);return s}}function Qx(i){let t=new Map;return i.forEach((e,n)=>{let s=e.category??"";t.has(s)||t.set(s,[]),t.get(s).push(n)}),[...t].map(([e,n])=>({name:e,indices:n})).sort((e,n)=>e.name.localeCompare(n.name))}function Yd(i,{elements:t,selection:e,scene:n,activate:s}){let r=Qx(t),o=new Int32Array(t.length);r.forEach((b,y)=>b.indices.forEach(T=>o[T]=y));let a=new Uint8Array(r.length),l=jx(t),c="",h=new Int32Array(0),d=-1,u=nt("input","ioviewer-tree-search");u.type="search",u.placeholder=st("searchPlaceholder"),u.setAttribute("aria-label",st("searchPlaceholder"));let p=nt("div","ioviewer-tree");p.setAttribute("role","tree"),p.setAttribute("aria-label",st("panel.model"));let g=nt("div","ioviewer-tree-spacer");p.append(g);let _=nt("div","ioviewer-tree-empty",st("noMatches"));i.append(u,p,_);function m(){if(c)h=Int32Array.from(l(c));else{let b=r.length;r.forEach((T,v)=>a[v]&&(b+=T.indices.length)),h=new Int32Array(b);let y=0;r.forEach((T,v)=>{if(h[y++]=-(v+1),a[v])for(let E of T.indices)h[y++]=E})}g.style.height=`${h.length*Ui}px`,_.hidden=h.length>0||!c,f()}function f(){let{start:b,end:y}=Kx(p.scrollTop,Ui,p.clientHeight,h.length,Jx),T=[];for(let v=b;v<y;v++)T.push(w(v));g.replaceChildren(...T)}function w(b){let y=h[b],T=nt("div","tree-row");if(T.style.top=`${b*Ui}px`,T.style.height=`${Ui}px`,T.dataset.row=b,T.setAttribute("role","treeitem"),y<0){let v=-y-1;T.classList.add("tree-category"),T.setAttribute("aria-expanded",String(!!a[v]));let E=nt("span","tree-chevron");E.innerHTML=Zt.chevron;let{name:P,indices:D}=r[v];T.append(E,nt("span","tree-name",P||st("noCategory")),nt("span","tree-count",String(D.length)))}else{let v=t[y],E=e.has(y);T.classList.add("tree-element"),T.classList.toggle("tree-child",!c),T.classList.toggle("selected",E),T.classList.toggle("tree-hidden",!n.isVisible(y)),T.setAttribute("aria-selected",String(E)),T.append(nt("span","tree-name",v.name||`#${v.id}`),nt("span","tree-type",v.type??""))}return T}function R(b){let y=p.clientHeight;if(y===0){d=b;return}let T=b*Ui;T<p.scrollTop?p.scrollTop=T:T+Ui>p.scrollTop+y&&(p.scrollTop=T+Ui-y)}function S(b){let y=o[b];!c&&!a[y]&&(a[y]=1,m());let T=h.indexOf(b);T>=0&&R(T),f()}u.addEventListener("input",()=>{c=u.value.trim(),p.scrollTop=0,m()}),p.addEventListener("scroll",f),p.addEventListener("click",b=>{let y=b.target.closest(".tree-row");if(!y)return;let T=h[Number(y.dataset.row)];if(T>=0){s(T);return}a[-T-1]^=1,m()}),new ResizeObserver(()=>{d>=0&&p.clientHeight>0&&(R(d),d=-1),f()}).observe(p),e.addEventListener("change",()=>{let b=-1;for(let y of e.values())b=y;b>=0?S(b):f()}),n.root.addEventListener("change",b=>b.detail.kind==="visibility"&&f()),m()}var $d={element:["properties","hide","isolate","showAll","-","zoomTo","sectionBox","-","copyId"],empty:["showAll","fitAll","resetSections"]},tv={hide:"H",isolate:"I",showAll:"Shift+H",zoomTo:"F"},Va=4;function Zd(i){let t=nt("div","ioviewer-context-menu");t.setAttribute("role","menu"),t.hidden=!0,i.append(t);let e=new Map(Object.values($d).flat().filter(l=>l!=="-").map(l=>[l,{enabled:!1,handler:null}]));function n(){t.hidden||(t.hidden=!0,t.replaceChildren(),window.removeEventListener("pointerdown",r,!0),window.removeEventListener("wheel",n,!0),window.removeEventListener("scroll",s,!0),window.removeEventListener("resize",n))}function s(l){i.contains(l.target)||n()}function r(l){t.contains(l.target)||(n(),Da(l))}function o(l,c,h,d){let u=$d[l];if(!u)throw new RangeError(`Unknown menu: ${l}`);n();for(let _ of u){if(_==="-"){t.append(nt("div","ioviewer-menu-separator"));continue}let m=e.get(_),f=nt("button","ioviewer-menu-item");f.type="button",f.dataset.item=_,f.setAttribute("role","menuitem"),f.disabled=!m.enabled,f.append(nt("span","",st(`menu.${_}`)),nt("kbd","",tv[_]??"")),f.addEventListener("click",()=>{n(),m.handler(d)}),t.append(f)}t.hidden=!1;let{width:p,height:g}=t.getBoundingClientRect();t.style.left=`${Math.max(Va,Math.min(c,innerWidth-p-Va))}px`,t.style.top=`${Math.max(Va,Math.min(h,innerHeight-g-Va))}px`,window.addEventListener("pointerdown",r,!0),window.addEventListener("wheel",n,!0),window.addEventListener("scroll",s,!0),window.addEventListener("resize",n)}function a(l,{enabled:c=!0,handler:h}){let d=e.get(l);if(!d)throw new RangeError(`Unknown menu item: ${l}`);h&&(d.handler=h),d.enabled=c&&!!d.handler}return{element:t,open:o,close:n,setItem:a,get isOpen(){return!t.hidden}}}var ev="input, textarea, select, [contenteditable]";function nv(i){if(i.ctrlKey||i.altKey||i.metaKey||i.repeat||i.target?.closest?.(ev))return null;switch(i.code){case"KeyH":return i.shiftKey?"showAll":"hide";case"KeyI":return i.shiftKey?null:"isolate";case"KeyF":return i.shiftKey?null:"zoomTo";case"Escape":return"escape";default:return null}}function Jd(i,t){i.addEventListener("keydown",e=>{let n=nv(e);n&&(e.preventDefault(),t[n]())})}var iv=1600;function Kd(i,t,e){let n=()=>i.textContent=`${st("selected")}: ${t.size} \xB7 ${st("elements")}: ${e}`;t.addEventListener("change",n),n()}function jd(i,t){if(!t)return;let e=nt("div","ioviewer-banner ioviewer-floating");e.setAttribute("role","status");let n=st("truncated").replace("{meshes}",t.meshes).replace("{total}",t.totalMeshes),s=qe("ioviewer-panel-close",Zt.close,st("close"));s.addEventListener("click",()=>e.remove()),e.append(nt("span","",n),s),i.append(e)}function Ts(i,t){let e=nt("div","ioviewer-toast",t);e.setAttribute("role","status"),i.append(e),setTimeout(()=>e.remove(),iv)}function Qd(i,t){let e=nt("table");for(let[s,r]of t)e.insertRow().append(nt("th","",s),nt("td","",String(r??"")));let n=nt("section");return n.append(nt("h3","",i),e),n}function tf(i,t,e){let n=nt("h2","ioviewer-properties-title"),s=nt("button","ioviewer-properties-close","\xD7");s.type="button",s.title=st("close"),s.setAttribute("aria-label",st("close")),s.addEventListener("click",()=>t.clear());let r=nt("header");r.append(n,s);let o=nt("div","ioviewer-properties-body");i.replaceChildren(r,o),i.hidden=!0,t.addEventListener("change",()=>{if(i.hidden=t.size===0,o.replaceChildren(),t.size!==1){n.textContent=`${st("selected")}: ${t.size}`;return}let[a]=t.values(),l=e.meta.elements[a];n.textContent=l.name||`#${l.id}`;let c=[[st("id"),l.id],[st("category"),l.category],[st("type"),l.type],[st("level"),l.level]];l.sourceId&&c.push([st("sourceId"),l.sourceId]),l.link&&c.push([st("link"),l.link]),o.append(Qd(st("elementGroup"),c));for(let[h,d]of Object.entries(e.props(l.id)??{}))o.append(Qd(h,Object.entries(d)))})}async function sv(i){if(await navigator.clipboard?.writeText(i).then(()=>!0,()=>!1))return!0;let t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.className="ioviewer-offscreen",document.body.append(t),t.select();try{return document.execCommand("copy")}finally{t.remove()}}function ef({root:i,data:t,scene:e,controls:n,picker:s,selection:r,measure:o}){let{meta:a}=t,l=()=>n.fitBox(e.visibleBox()),c={hide:()=>r.size&&e.setVisible([...r.values()],!1),isolate:()=>r.size&&e.isolate([...r.values()]),showAll:()=>e.showAll(),zoomTo:()=>{if(!r.size)return l();let[m,...f]=r.values(),w=e.elementBox(m);for(let R of f)w.union(e.elementBox(R));n.zoomToBox(w)},fitAll:l},h=Wd(i);h.registerPanel("model",{icon:Zt.model,title:st("panel.model"),render:m=>Yd(m,{elements:a.elements,selection:r,scene:e,activate:f=>{r.set([f]),n.zoomToBox(e.elementBox(f))}})});let d=document.createElement("aside");d.id="ioviewer-properties",d.className="ioviewer-floating",i.append(d),tf(d,r,t);let u=qd(i,Xd),p=m=>{n.setLeftButtonMode(m),u.setActive("orbit",m==="orbit"),u.setActive("pan",m==="pan")};u.setHandler("orbit",()=>p("orbit")),u.setHandler("pan",()=>p("pan")),p(n.leftButtonMode),u.setHandler("fit",l),u.setHandler("projection",()=>{let m=!n.camera.isOrthographicCamera;n.setProjection(m?"orthographic":"perspective"),u.setActive("projection",m)}),u.setActive("projection",!1),document.fullscreenEnabled&&(u.setHandler("fullscreen",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{u.setActive("fullscreen",!!document.fullscreenElement),Ts(i,st("fullscreenUnavailable"))})}),document.addEventListener("fullscreenchange",()=>u.setActive("fullscreen",!!document.fullscreenElement)));let g=Zd(i);g.setItem("properties",{handler:m=>r.set([m])});for(let m of["hide","isolate","showAll","zoomTo","fitAll"])g.setItem(m,{handler:c[m]});g.setItem("copyId",{handler:m=>sv(String(a.elements[m].id)).then(f=>Ts(i,st(f?"idCopied":"copyFailed")),()=>Ts(i,st("copyFailed")))}),n.addEventListener("contextmenu",m=>{let{x:f,y:w}=m.detail;if(o.active){let[S]=r.values();return S===void 0?g.open("empty",f,w,null):g.open("element",f,w,S)}let R=s.pick(f,w);if(!R||R.element<0)return g.open("empty",f,w,null);r.has(R.element)||r.set([R.element]),g.open("element",f,w,R.element)});let _=[];return Jd(window,{...c,escape:()=>{if(g.isOpen)return g.close();_.some(m=>m())||r.clear()}}),Kd(document.getElementById("ioviewer-status"),r,e.elementCount),jd(i,a.truncated),{shell:h,toolbar:u,contextMenu:g,onEscape:m=>_.push(m)}}var rv={x:new C(1,0,0),y:new C(0,1,0),z:new C(0,0,1)};function zc(i){let t=rv[i];if(!t)throw new RangeError(`Unknown axis: ${i}`);return t.clone()}function nf(i,t,e,n){let s=i.clone().normalize(),r=s.dot(t)+e;return n?new ge(s,-r):new ge(s.negate(),r)}function sf(i,t){if(t!=="keepInside"&&t!=="cutInside")throw new RangeError(`Unknown box mode: ${t}`);let{min:e,max:n}=i,s=[new ge(new C(1,0,0),-e.x),new ge(new C(-1,0,0),n.x),new ge(new C(0,1,0),-e.y),new ge(new C(0,-1,0),n.y),new ge(new C(0,0,1),-e.z),new ge(new C(0,0,-1),n.z)];return t==="keepInside"?{planes:s,intersection:!1}:{planes:s.map(r=>r.negate()),intersection:!0}}function rf(i){let{min:t,max:e}=i;return Array.from({length:8},(n,s)=>new C(s&1?e.x:t.x,s&2?e.y:t.y,s&4?e.z:t.z))}function Ha(i,t,e){if(t.length===0||i.isEmpty())return!1;let n=rf(i),s=r=>n.every(o=>r.distanceToPoint(o)<0);return e?t.every(s):t.some(s)}function of(i,t){let e=i.getSize(new C).multiplyScalar(.5);return Math.abs(t.x)*e.x+Math.abs(t.y)*e.y+Math.abs(t.z)*e.z}function _r(i,t,e){let n=t.clone().sub(i.origin),s=e.dot(i.direction),r=1-s*s;return r<.03?null:(s*i.direction.dot(n)-e.dot(n))/r}function af(i,t,e){let n=new C(1,0,0).applyQuaternion(t),s=new C(0,1,0).applyQuaternion(t),[r,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let h of rf(i)){h.sub(e);let d=h.dot(n),u=h.dot(s);[r,o,a,l]=[Math.min(r,d),Math.max(o,d),Math.min(a,u),Math.max(l,u)]}return{center:e.clone().addScaledVector(n,(r+o)/2).addScaledVector(s,(a+l)/2),width:(o-r)*1.1,height:(l-a)*1.1}}var xr=6,ov=["off","planes","box"],av=.05,lf=new C(0,0,1),Ga=class extends EventTarget{constructor(t,e){super(),this.scene=t,this.modelBox=e.clone(),this.center=e.getCenter(new C),this.planes=[],this.active=-1,this.box=null,this.boxMode="keepInside",this.gizmoVisible=!0,this._mode="off"}get mode(){return this._mode}setMode(t){if(!ov.includes(t))throw new RangeError(`Unknown section mode: ${t}`);t==="box"&&!this.box&&this.fitBoxToShown()||(this._mode=t,this._changed(!0))}addPlane(t){let e=zc(t);if(this.planes.length>=xr||this.modelBox.isEmpty())return null;let n=new Ne().setFromUnitVectors(lf,e);return this.planes.push({axis:t,quaternion:n,offset:0,flipped:!1,enabled:!0,rotated:!1}),this.active=this.planes.length-1,this._mode="planes",this._changed(!0),this.active}removePlane(t){this._plane(t),this.planes.splice(t,1),(this.active>=this.planes.length||this.active>t)&&this.active--,this._changed(!0)}updatePlane(t,{offset:e,flipped:n,enabled:s,quaternion:r}){let o=this._plane(t);if(e!==void 0){if(!Number.isFinite(e))throw new RangeError(`Offset must be a finite number, got ${e}.`);o.offset=e}n!==void 0&&(o.flipped=!!n),s!==void 0&&(o.enabled=!!s),r&&(o.quaternion.copy(r).normalize(),o.rotated=this.normal(t).angleTo(zc(o.axis))>1e-6),this._changed(!0)}setActivePlane(t){this._plane(t),this.active=t,this._changed(!1)}normal(t){return lf.clone().applyQuaternion(this._plane(t).quaternion)}extent(t){return of(this.modelBox,this.normal(t))}origin(t){return this.center.clone().addScaledVector(this.normal(t),this._plane(t).offset)}clipPlane(t){let e=this._plane(t);return nf(this.normal(t),this.center,e.offset,e.flipped)}setBox(t){if(t.isEmpty())throw new RangeError("The section box is empty.");this.box=t.clone(),this._mode="box",this._changed(!0)}setBoxMode(t){if(t!=="keepInside"&&t!=="cutInside")throw new RangeError(`Unknown box mode: ${t}`);this.boxMode=t,this._changed(!0)}fitBoxToElements(t){let e=new se;for(let s of t)e.union(this.scene.elementBox(s));if(e.isEmpty())return!1;let n=e.getSize(new C);return this.setBox(e.expandByScalar(av*Math.max(n.x,n.y,n.z))),!0}fitBoxToShown(){let t=this.scene.visibleBox();if(t.isEmpty())return!1;let e=t.getSize(new C);return this.setBox(t.expandByScalar(.001*Math.max(e.x,e.y,e.z))),!0}setGizmoVisible(t){this.gizmoVisible=!!t,this._changed(!1)}reset(){this.planes=[],this.active=-1,this.box=null,this._mode="off",this._changed(!0)}clipping(){return this._mode==="planes"?{planes:this.planes.flatMap((e,n)=>e.enabled?[this.clipPlane(n)]:[]),intersection:!1}:this._mode==="box"&&this.box?sf(this.box,this.boxMode):{planes:[],intersection:!1}}isCut(t){let{planes:e,intersection:n}=this.clipping();return Ha(t,e,n)}_plane(t){let e=this.planes[t];if(!Number.isInteger(t)||!e)throw new RangeError(`Plane index ${t} is out of range 0..${this.planes.length-1}.`);return e}_changed(t){if(t){let{planes:e,intersection:n}=this.clipping();this.scene.setClipping(e,n)}this.dispatchEvent(new Event("change"))}};var lv=80,cv=8,fi={x:"#ef4444",y:"#22c55e",z:"#3b82f6",centre:"#e2e8f0",hover:"#facc15",frame:"#93c5fd",fill:"#60a5fa"},Wa=["x","y","z"],hv=Math.cos(Oe.degToRad(12)),cf=new C(0,0,1),uv=i=>new cn({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.9}),dv=new cn({visible:!1});function Xa(i,t,e,n){let s=new be,r=uv(t);for(let a of e)s.add(new _e(a,r));let o=new _e(n,dv);return o.userData.handle=s,s.add(o),s.userData={kind:i,color:t,material:r,proxy:o},s.traverse(a=>a.renderOrder=1e3),s}var qa=class extends EventTarget{constructor(t,e){super(),this.sections=t,this.dom=e,this.camera=null,this.group=new be,this.group.name="sections",this._raycaster=new Ai,this._drag=null,this._hovered=null,this._buildPlanes(),this._buildPlaneGizmo(),this._buildBox(),t.addEventListener("change",()=>this._sync()),(e.parentElement??e).addEventListener("pointerdown",n=>this._down(n),!0),e.addEventListener("pointermove",n=>this._move(n)),e.addEventListener("pointerup",n=>this._up(n)),e.addEventListener("pointercancel",()=>this._end()),e.addEventListener("lostpointercapture",()=>this._end()),this._sync()}get dragging(){return this._drag!==null}update(t){this.camera=t;let e=this.planeGizmo;e.visible&&(e.scale.setScalar(this._worldPerPixel(e.position)*lv),this.arrow.visible=this._across(cf.clone().applyQuaternion(e.quaternion),e.position));for(let n of this.boxHandles){let{shown:s,axis:r}=n.userData;n.visible=s&&(!r||this._across(new C().setComponent(Wa.indexOf(r),1),n.position)),n.visible&&n.scale.setScalar(this._worldPerPixel(n.position)*cv)}}_across(t,e){let n=this.camera,s=n.isOrthographicCamera?n.getWorldDirection(new C):e.clone().sub(n.position).normalize();return Math.abs(t.dot(s))<hv}_buildPlanes(){let t=new Gn(1,1),e=new re().setFromPoints([[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>new C(r/2,o/2,0))),n=new cn({color:fi.fill,transparent:!0,opacity:.12,side:Be,depthWrite:!1}),s=new sn({color:fi.frame});this.planeVisuals=Array.from({length:xr},()=>{let r=new be;return r.add(new _e(t,n),new Hs(e,s)),this.group.add(r),r})}_buildPlaneGizmo(){let t=(s,r)=>s.rotateX(Math.PI/2).translate(0,0,r),e=Xa("move",fi.z,[t(new Ei(.025,.025,1),.5),t(new qs(.08,.25),1.125)],t(new Ei(.12,.12,1.25),.625));e.name="arrow",this.arrow=e;let n=(s,r,o)=>{let a=Xa("rotate",fi[r],[o(new us(.8,.018,8,64))],o(new us(.8,.09,8,48)));return a.name=s,a.userData.axis=r,a};this.planeGizmo=new be,this.planeGizmo.add(e,n("ringX","x",s=>s.rotateY(Math.PI/2)),n("ringY","y",s=>s.rotateX(Math.PI/2))),this.group.add(this.planeGizmo)}_buildBox(){this.boxWire=new gn(new Ti(new hn(1,1,1)),new sn({color:fi.frame})),this.group.add(this.boxWire);let t=new hs(1,16,12),e=new hs(1.6,8,6);this.boxHandles=[];for(let s of Wa)for(let r of[-1,1]){let o=Xa("face",fi[s],[t],e);o.name=`face${r>0?"+":"-"}${s}`,Object.assign(o.userData,{axis:s,sign:r}),this.boxHandles.push(o)}let n=Xa("centre",fi.centre,[new hn(1.4,1.4,1.4)],e);n.name="centre",this.boxHandles.push(n),this.group.add(...this.boxHandles)}_sync(){let t=this.sections,e=t.mode==="planes";this.planeVisuals.forEach((r,o)=>{let a=t.planes[o];if(r.visible=e&&!!a?.enabled,!r.visible)return;let l=af(t.modelBox,a.quaternion,t.origin(o));r.position.copy(l.center),r.quaternion.copy(a.quaternion),r.scale.set(l.width,l.height,1)});let n=t.planes[t.active];this.planeGizmo.visible=e&&t.gizmoVisible&&!!n?.enabled,this.planeGizmo.visible&&(this.planeGizmo.position.copy(t.origin(t.active)),this.planeGizmo.quaternion.copy(n.quaternion));let s=t.mode==="box"?t.box:null;this.boxWire.visible=!!s;for(let r of this.boxHandles)r.visible=r.userData.shown=!!s&&t.gizmoVisible;if(s){let r=s.getCenter(new C),o=s.getSize(new C);this.boxWire.position.copy(r),this.boxWire.scale.copy(o).max(new C(1e-6,1e-6,1e-6));for(let a of this.boxHandles){a.position.copy(r);let{axis:l,sign:c}=a.userData;l&&(a.position[l]=c>0?s.max[l]:s.min[l])}}}_worldPerPixel(t){let e=this.camera,n=Math.max(this.dom.clientHeight,1);if(e.isOrthographicCamera)return(e.top-e.bottom)/e.zoom/n;let s=t.clone().sub(e.position).dot(e.getWorldDirection(new C));return 2*Math.max(s,e.near)*Math.tan(Oe.degToRad(e.fov/2))/n}_ray(t){let e=this.dom.getBoundingClientRect(),n=new zt((t.clientX-e.left)/e.width*2-1,1-(t.clientY-e.top)/e.height*2);return this.camera.updateMatrixWorld(),this._raycaster.setFromCamera(n,this.camera),this._raycaster.ray.clone()}_hit(t){if(!this.camera)return null;this.update(this.camera),this.group.updateMatrixWorld(!0);let e=r=>{for(;r&&r!==this.group;r=r.parent)if(!r.visible)return!1;return!0},n=[];this.group.traverse(r=>r.userData.handle&&e(r)&&n.push(r)),this._ray(t);let s=this._raycaster.intersectObjects(n,!1)[0];return s?s.object.userData.handle:null}_down(t){if(t.target!==this.dom||t.button!==0)return;let e=this._hit(t),n=e&&this._start(e,this._ray(t));n&&(t.stopPropagation(),t.preventDefault(),this.dom.setPointerCapture(t.pointerId),this._drag={id:t.pointerId,handle:e,...n},this._highlight(e))}_start(t,e){let n=this.sections,{kind:s}=t.userData;if(s==="move"||s==="rotate"){let c=n.active,h=n.origin(c),d=n.planes[c].quaternion.clone();if(s==="move"){let _=n.normal(c),m=_r(e,h,_);return m===null?null:{index:c,origin:h,normal:_,offset:n.planes[c].offset,s0:m}}let u=new C().setComponent(Wa.indexOf(t.userData.axis),1).applyQuaternion(d),p=new ge().setFromNormalAndCoplanarPoint(u,h),g=e.intersectPlane(p,new C)?.sub(h);return g?{index:c,origin:h,quaternion:d,axis:u,plane:p,from:g}:null}let r=n.box.clone();if(s==="face"){let{axis:c,sign:h}=t.userData,d=new C().setComponent(Wa.indexOf(c),h),u=t.position.clone(),p=_r(e,u,d);return p===null?null:{box:r,normal:d,at:u,s0:p}}let o=this.camera.getWorldDirection(new C),a=new ge().setFromNormalAndCoplanarPoint(o,r.getCenter(new C)),l=e.intersectPlane(a,new C);return l?{box:r,plane:a,from:l}:null}_move(t){let e=this._drag;if(!e)return this._hover(t);if(t.pointerId!==e.id)return;if(t.buttons===0)return this._end();let n=this._ray(t),s=this.sections,{kind:r}=e.handle.userData;if(r==="move"){let o=_r(n,e.origin,e.normal);o!==null&&s.updatePlane(e.index,{offset:e.offset+o-e.s0})}else if(r==="rotate"){let o=n.intersectPlane(e.plane,new C)?.sub(e.origin);if(!o)return;let a=Math.atan2(e.axis.dot(new C().crossVectors(e.from,o)),e.from.dot(o)),l=new Ne().setFromAxisAngle(e.axis,a).multiply(e.quaternion),c=cf.clone().applyQuaternion(l);s.updatePlane(e.index,{quaternion:l,offset:c.dot(e.origin.clone().sub(s.center))})}else if(r==="face"){let o=_r(n,e.at,e.normal);if(o===null)return;let{axis:a,sign:l}=e.handle.userData,c=e.box.clone(),h=.001*Math.max(...s.modelBox.getSize(new C).toArray(),.001),d=(l>0?e.box.max[a]:e.box.min[a])+l*(o-e.s0);l>0?c.max[a]=Math.max(d,c.min[a]+h):c.min[a]=Math.min(d,c.max[a]-h),s.setBox(c)}else{let o=n.intersectPlane(e.plane,new C);o&&s.setBox(e.box.clone().translate(o.sub(e.from)))}}_up(t){this._drag&&t.pointerId===this._drag.id&&this._end()}_end(){this._drag&&(this._drag=null,this._highlight(null))}_hover(t){t.buttons===0&&this._highlight(this._hit(t))}_highlight(t){if(this._hovered!==t){for(let e of[this._hovered,t])e&&e.userData.material.color.set(e===t?fi.hover:e.userData.color);this._hovered=t,this.dom.style.cursor=t?"grab":"",this.dispatchEvent(new Event("change"))}}};function vr(i,t,e){let n=nt("div","ioviewer-segmented");n.setAttribute("role","group"),n.setAttribute("aria-label",i);let s=t.map(([o,a])=>{let l=nt("button","",a);return l.type="button",l.dataset.value=o,l.addEventListener("click",()=>e(o)),n.append(l),l});return{element:n,update:o=>s.forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.value===o)))}}function hf(i,t){let e=nt("label","ioviewer-check"),n=nt("input");return n.type="checkbox",n.addEventListener("change",()=>t(n.checked)),e.append(n,nt("span","",i)),{element:e,input:n}}function fv(i,t){let e=nt("li","ioviewer-section-plane");e.addEventListener("pointerdown",()=>i.active!==t&&i.setActivePlane(t));let n=nt("span","ioviewer-section-name"),s=qe("ioviewer-icon-button",Zt.flip,st("sections.flip"));s.addEventListener("click",()=>i.updatePlane(t,{flipped:!i.planes[t].flipped}));let r=hf(st("sections.enabled"),h=>i.updatePlane(t,{enabled:h})),o=qe("ioviewer-icon-button",Zt.remove,st("sections.delete"));o.addEventListener("click",()=>i.removePlane(t));let a=nt("input","ioviewer-section-slider");a.type="range",a.step="any",a.setAttribute("aria-label",st("sections.position")),a.addEventListener("input",()=>i.updatePlane(t,{offset:Number(a.value)}));let l=nt("div","ioviewer-section-head");return l.append(n,s,r.element,o),e.append(l,a),{element:e,update:()=>{let h=i.planes[t],d=h.rotated?` (${st("sections.rotated")})`:"";n.textContent=`${t+1}. ${h.axis.toUpperCase()}${d}`,e.classList.toggle("active",i.active===t),s.setAttribute("aria-pressed",String(h.flipped)),r.input.checked=h.enabled;let u=i.extent(t);a.min=String(-u),a.max=String(u),a.value=String(h.offset)}}}function uf({root:i,shell:t,toolbar:e,contextMenu:n,sections:s,selection:r}){let o="z",a=()=>{s.addPlane(o)===null&&(s.setMode("planes"),Ts(i,st("sections.maxPlanes")))},l=()=>[...r.values()],c=()=>s.fitBoxToElements(l()),h=vr(st("sections.mode"),[["planes",st("sections.planes")],["box",st("sections.box")],["off",st("sections.off")]],E=>s.setMode(E)),d=vr(st("sections.axis"),["x","y","z"].map(E=>[E,E.toUpperCase()]),E=>d.update(o=E));d.update(o);let u=nt("button","ioviewer-text-button",st("sections.addPlane"));u.type="button",u.addEventListener("click",a);let p=nt("ul","ioviewer-section-list"),g=nt("div","ioviewer-section-empty",st("sections.noPlanes")),_=nt("div","ioviewer-section-block"),m=nt("div","ioviewer-section-row");m.append(nt("span","",st("sections.axis")),d.element,u),_.append(m,p,g);let f=vr(st("sections.box"),[["keepInside",st("sections.keepInside")],["cutInside",st("sections.cutInside")]],E=>s.setBoxMode(E)),w=nt("button","ioviewer-text-button",st("sections.fitSelection"));w.type="button",w.addEventListener("click",c);let R=nt("div","ioviewer-section-block");R.append(f.element,w);let S=hf(st("sections.showGizmo"),E=>s.setGizmoVisible(E)),b=[],y=()=>{h.update(s.mode),_.hidden=s.mode!=="planes",R.hidden=s.mode!=="box",u.disabled=s.planes.length>=xr,b.length!==s.planes.length&&(b=s.planes.map((E,P)=>fv(s,P)),p.replaceChildren(...b.map(E=>E.element))),b.forEach(E=>E.update()),g.hidden=b.length>0,f.update(s.boxMode),S.input.checked=s.gizmoVisible,e.setActive("plane",s.mode==="planes"),e.setActive("box",s.mode==="box")},T=()=>w.disabled=r.size===0;if(t.registerPanel("sections",{icon:Zt.sections,title:st("panel.sections"),visible:!s.modelBox.isEmpty(),render:E=>E.append(h.element,_,R,S.element)}),s.addEventListener("change",y),r.addEventListener("change",T),y(),T(),e.setActive("plane",!1),e.setActive("box",!1),s.modelBox.isEmpty())return;let v=()=>t.openPanel("sections");e.setHandler("plane",()=>{a(),v()}),e.setHandler("box",()=>{!(r.size&&c())&&!s.fitBoxToShown()||v()}),e.setHandler("resetSections",()=>s.reset()),n.setItem("sectionBox",{handler:E=>{s.fitBoxToElements(r.has(E)?l():[E]),v()}}),n.setItem("resetSections",{handler:()=>s.reset()})}var pv="#facc15",mv=9;function kc(i,t=mr){return`${new Intl.NumberFormat(t,{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!1}).format(i)} ${st("unit.m",t)}`}var Ya=class extends EventTarget{constructor(t){super(),this.active=!1,this.points=[],this.group=new be,this.group.name="measure";let e=new re;e.setAttribute("position",new we(new Float32Array(6),3));let n={color:pv,depthTest:!1,depthWrite:!1,transparent:!0};this._line=new bi(e,new sn(n)),this._markers=new wi(e,new ni({...n,size:mv,sizeAttenuation:!1}));for(let s of[this._line,this._markers])s.frustumCulled=!1,s.renderOrder=1001,this.group.add(s);this.label=nt("div","ioviewer-measure-label"),this.label.hidden=!0,t.prepend(this.label),this._sync()}get distance(){return this.points.length===2?this.points[0].distanceTo(this.points[1]):null}get box(){return new se().setFromPoints(this.points)}setActive(t){this.active=!!t,this.active||(this.points=[]),this._sync()}add(t){this.active&&(this.points=this.points.length===1?[this.points[0],t.clone()]:[t.clone()],this._sync())}clear(){return this.points.length===0?!1:(this.points=[],this._sync(),!0)}update(t,e){this.distance!==null&&Na(this.label,this.points[0].clone().lerp(this.points[1],.5),t,e)}_sync(){let t=this._line.geometry.attributes.position;this.points.forEach((e,n)=>t.setXYZ(n,e.x,e.y,e.z)),t.needsUpdate=!0,this._line.geometry.setDrawRange(0,this.points.length),this._line.visible=this.points.length===2,this._markers.visible=this.points.length>0,this.label.hidden=this.distance===null,this.distance!==null&&(this.label.textContent=kc(this.distance)),this.dispatchEvent(new Event("change"))}};var $a=class extends EventTarget{constructor(t,e){super(),this.count=e.length,this.group=new gn(new re().setAttribute("position",new ce(e.flatMap(s=>[...s.start,...s.end]),3)),new sn({color:"#93c5fd",transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1})),this.group.name="grids",this.group.geometry.computeBoundingBox(),this.box=this.group.geometry.boundingBox,this.group.renderOrder=999,this._labels=e.flatMap(s=>[s.start,s.end].map(r=>({element:nt("div","ioviewer-grid-label",s.name),point:new C(...r)})));let n=nt("div","ioviewer-grid-labels");n.append(...this._labels.map(s=>s.element)),t.prepend(n),this._layer=n,this.setVisible(this.count>0)}get visible(){return this.group.visible}setVisible(t){this.group.visible=!!t,this._layer.hidden=!t,this.dispatchEvent(new Event("change"))}update(t,e){if(this.visible)for(let{element:n,point:s}of this._labels)Na(n,s,t,e)}};var gv=8,df=4;function Vc(i,t,e,n="dialog"){let s=nt("div","ioviewer-popover ioviewer-floating");s.setAttribute("role",n),s.setAttribute("aria-label",e),s.hidden=!0,t.setAttribute("aria-haspopup",n),t.setAttribute("aria-expanded","false"),i.append(s);function r(l){s.contains(l.target)||(a(),Da(l))}s.addEventListener("keydown",l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),a(),t.focus())});function o(){s.hidden=!1,t.setAttribute("aria-expanded","true");let l=t.getBoundingClientRect(),{width:c}=s.getBoundingClientRect();s.style.left=`${Math.max(df,Math.min(l.left+l.width/2-c/2,innerWidth-c-df))}px`,s.style.bottom=`${innerHeight-l.top+gv}px`,window.addEventListener("pointerdown",r,!0),window.addEventListener("resize",a)}function a(){return s.hidden?!1:(s.hidden=!0,t.setAttribute("aria-expanded","false"),window.removeEventListener("pointerdown",r,!0),window.removeEventListener("resize",a),!0)}return{element:s,close:a,toggle:()=>s.hidden?o():a(),get isOpen(){return!s.hidden}}}function _v(i){return i?.initialWireframe?"wireframe":i?.initialWhiteMode?"white":"materials"}function ff({root:i,toolbar:t,scene:e,meta:n,grids:s}){let r=_=>t.element.querySelector(`[data-tool="${_}"]`),o=Vc(i,r("displayMode"),st("tool.displayMode"),"menu");o.element.classList.add("ioviewer-display-modes");let a=(n.textures??[]).length>0,l=Nc.map(_=>{let m=nt("button","ioviewer-menu-item",st(`display.${_}`));return m.type="button",m.dataset.mode=_,m.setAttribute("role","menuitemradio"),m.disabled=_==="textures"&&!a,m.addEventListener("click",()=>{c(_),o.close()}),o.element.append(m),m}),c=_=>{e.setDisplayMode(_);for(let m of l)m.setAttribute("aria-checked",String(m.dataset.mode===_))};c(_v(n.options)),t.setHandler("displayMode",o.toggle),t.setActive("grids",s.visible),s.count>0&&t.setHandler("grids",()=>{s.setVisible(!s.visible),t.setActive("grids",s.visible)});let h=Vc(i,r("opacity"),st("tool.opacity"));h.element.classList.add("ioviewer-opacity");let d=nt("input","ioviewer-opacity-slider");Object.assign(d,{type:"range",min:"10",max:"100",step:"1",value:"100"}),d.setAttribute("aria-label",st("opacity.label"));let u=nt("output","ioviewer-opacity-value"),p=()=>u.textContent=st("opacity.value").replace("{value}",d.value);d.addEventListener("input",()=>{e.setOpacity(Number(d.value)/100),p()}),p();let g=nt("div","ioviewer-opacity-head");return g.append(nt("span","",st("opacity.label")),u),h.element.append(g,d),t.setHandler("opacity",h.toggle),[o,h]}var xv=3e3;function Hc(i,t){let e=nt("button",i);return e.type="button",e.setAttribute("title",t),e.append(nt("span","ioviewer-row-name",t)),e}function pf({shell:i,toolbar:t,controls:e,views:n}){let s=null,r=nt("button","ioviewer-text-button ioviewer-tour");r.type="button";function o(g){let _=g.camera.projection==="orthographic";e.setProjection(_?"orthographic":"perspective"),t.setActive("projection",_),e.animateTo({position:new C(...g.camera.position),target:new C(...g.camera.target)})}function a(){o(n[s.next]),s.next=(s.next+1)%n.length;let g=()=>{e.animating?s.frame=requestAnimationFrame(g):s.timer=setTimeout(a,xv)};s.frame=requestAnimationFrame(g)}let l=g=>r.contains(g.target),c=g=>!l(g)&&d(),h=g=>!(l(g)&&(g.key==="Enter"||g.key===" "))&&d();function d(){s&&(cancelAnimationFrame(s.frame),clearTimeout(s.timer),s=null,window.removeEventListener("pointerdown",c,!0),window.removeEventListener("wheel",d,!0),window.removeEventListener("keydown",h,!0),p())}function u(){s={next:0,frame:0,timer:0},window.addEventListener("pointerdown",c,!0),window.addEventListener("wheel",d,!0),window.addEventListener("keydown",h,!0),p(),a()}function p(){let g=st(s?"views.stop":"views.tour");r.replaceChildren(),r.insertAdjacentHTML("afterbegin",s?Zt.pause:Zt.play),r.append(nt("span","",g)),r.setAttribute("aria-pressed",String(!!s))}r.addEventListener("click",()=>s?d():u()),p(),i.registerPanel("views",{icon:Zt.views,title:st("panel.views"),visible:n.length>0,render:g=>{let _=nt("div","ioviewer-row-list");for(let m of n){let f=Hc("ioviewer-row ioviewer-view",String(m.name??""));f.addEventListener("click",()=>o(m)),_.append(f)}g.append(r,_)}})}function mf(i,t){let e=[];for(let[n,s]of[[i.element1Id,i.element1Name],[i.element2Id,i.element2Name]]){let r=n!=null?t.findIndex(o=>o.id===n&&!o.mesh):vv(t,s);r>=0&&!e.includes(r)&&e.push(r)}return e}function vv(i,t){if(t==null)return-1;let e=i.findIndex(n=>n.name===t);return e>=0&&i.findIndex((n,s)=>s>e&&n.name===t)<0?e:-1}var yv=["New","Active","Reviewed","Approved","Resolved"],Mv=14,Sv=2,bv=new C(1,-1,.8).normalize();function gf({shell:i,tests:t,elements:e,scene:n,controls:s,selection:r}){let o=new be;o.name="clash-marker";let a=new re;a.setAttribute("position",new we(new Float32Array(3),3));let l={color:"#ef4444",depthTest:!1,depthWrite:!1,transparent:!0},c=new wi(a,new ni({...l,size:Mv,sizeAttenuation:!1}));c.frustumCulled=!1,c.renderOrder=1002,o.add(c),o.visible=!1;let h=null;function d(){o.visible=!1,h?.removeAttribute("aria-current"),h=null,s.setExtraBounds("clash",null)}function u(_,m){let f=mf(_,e);f.length?r.set(f):r.clear();let w=new C(..._.point),R=0;for(let y of f){let T=n.elementBox(y);T.isEmpty()||(R=Math.max(R,...T.getSize(new C).toArray()))}let S=s.camera.position.clone().sub(s.target);S.lengthSq()<1e-12&&S.copy(bv);let b=Math.max(3*R,Sv);s.animateTo({position:S.normalize().multiplyScalar(b).add(w),target:w}),a.attributes.position.setXYZ(0,w.x,w.y,w.z),a.attributes.position.needsUpdate=!0,o.visible=!0,h?.removeAttribute("aria-current"),h=m,m.setAttribute("aria-current","true"),s.setExtraBounds("clash",new se(w.clone(),w.clone()))}function p(_){let m=Hc("ioviewer-row ioviewer-clash",String(_.name??""));m.setAttribute("title",`${_.name??""}: ${_.element1Name??""} \u2014 ${_.element2Name??""}`);let f=yv.includes(_.status),w=nt("span","ioviewer-clash-status",f?st(`clash.${_.status}`):String(_.status??""));return f&&(w.dataset.status=_.status),m.append(w,nt("span","ioviewer-clash-distance",kc(_.distance))),m.addEventListener("click",()=>u(_,m)),m}function g(_){let m=nt("div","ioviewer-clash-test"),f=nt("button","ioviewer-row ioviewer-clash-header");f.type="button",f.setAttribute("aria-expanded","true");let w=`${_.name??""} (${_.clashes.length})`;f.setAttribute("title",w),f.insertAdjacentHTML("afterbegin",Zt.chevron),f.append(nt("span","ioviewer-row-name",w));let R=nt("div","ioviewer-row-list");return R.append(..._.clashes.map(p)),f.addEventListener("click",()=>{R.hidden=!R.hidden,f.setAttribute("aria-expanded",String(!R.hidden))}),m.append(f,R),m}return i.registerPanel("clashes",{icon:Zt.clashes,title:st("panel.clashes"),visible:t.length>0,render:_=>_.append(...t.map(g)),onClose:()=>o.visible&&d()}),{group:o}}var wv=["construct","demolish","temporary"],Ev=Date.parse("0002-01-01T00:00:00Z");function _f(i){let t=typeof i=="string"?Date.parse(i):NaN;return t>=Ev?t:NaN}function xf(i,t){let e=new Map(t.flatMap((o,a)=>o.mesh?[]:[[o.id,a]])),n=[];for(let o of Array.isArray(i?.tasks)?i.tasks:[]){let a=_f(o?.start),l=_f(o?.end);if(!wv.includes(o?.type)||!(a<=l))continue;let c=Array.isArray(o.attachedElements)?o.attachedElements:[];n.push({name:o.name,type:o.type,start:a,end:l,elements:c.filter(h=>e.has(h)).map(h=>e.get(h))})}let s=n.reduce((o,a)=>Math.min(o,a.start),1/0),r=n.reduce((o,a)=>Math.max(o,a.end),-1/0);return{start:s,end:r,tasks:n}}function vf(i,t){let e=new Set,n=new Map;for(let s of i){let r=t<s.start,o=t>s.end,a=s.type==="construct"?r:s.type==="demolish"?o:r||o;for(let l of s.elements)a?e.add(l):!r&&!o&&n.set(l,s.type)}for(let s of e)n.delete(s);return{hidden:e,active:n}}var Tv=864e5,Av=["1","5","15"],Rv={construct:"#22c55e",demolish:"#ef4444",temporary:"#a855f7"},Cv="156px";function yf({root:i,shell:t,timeliner:e,elements:n,scene:s}){let r=xf(e,n);if(r.tasks.length===0)return t.registerPanel("timeliner",{icon:Zt.timeliner,title:st("panel.timeliner"),visible:!1,render:()=>{}}),null;let o=new Intl.DateTimeFormat(void 0,{dateStyle:"short",timeZone:"UTC"}),a=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}),l=r.start,c=1,h=0,d=0,u=!1,p=new Set,g=new Map,_=nt("div","ioviewer-player ioviewer-floating");_.setAttribute("role","group"),_.setAttribute("aria-label",st("player.title")),_.hidden=!0;let m=qe("ioviewer-icon-button ioviewer-player-play",Zt.play,st("player.play"));m.addEventListener("click",()=>h?D():P());let f=nt("output","ioviewer-player-date"),w=nt("input","ioviewer-player-slider");Object.assign(w,{type:"range",min:String(r.start),max:String(r.end),step:"any"}),w.setAttribute("aria-label",st("player.date")),w.addEventListener("input",()=>y(Number(w.value)));let R=vr(st("player.speed"),Av.map(O=>[O,`${O}\xD7`]),O=>{c=Number(O),R.update(O)});R.update(String(c));let S=qe("ioviewer-panel-close",Zt.close,st("close"));S.addEventListener("click",v),_.append(m,f,w,R.element,S),i.append(_);function b(){let O=vf(r.tasks,l),I=[...p].filter(B=>!O.hidden.has(B)),k=[...O.hidden].filter(B=>!p.has(B));p=O.hidden;let X=[...g.keys()].filter(B=>O.active.get(B)!==g.get(B)),Y=new Map;for(let[B,U]of O.active)g.get(B)!==U&&(Y.has(U)||Y.set(U,[]),Y.get(U).push(B));g=O.active,I.length&&s.setLayerHidden("schedule",I,!1),k.length&&s.setLayerHidden("schedule",k,!0),X.length&&s.setTint(X,null);for(let[B,U]of Y)s.setTint(U,Rv[B])}function y(O){l=Math.min(Math.max(O,r.start),r.end),w.value=String(l),f.textContent=a.format(l),u&&b()}function T(){u||(u=!0,_.hidden=!1,i.style.setProperty("--toolbar-space",Cv),y(r.start))}function v(){u&&(D(),u=!1,s.setTint([...g.keys()],null),g=new Map,p=new Set,s.clearLayer("schedule"),_.hidden=!0,i.style.removeProperty("--toolbar-space"))}function E(O){y(l+Math.max(O-d,0)/1e3*c*Tv),d=O,l>=r.end?D():h=requestAnimationFrame(E)}function P(){T(),!h&&(l>=r.end&&y(r.start),d=performance.now(),h=requestAnimationFrame(E),z())}function D(){cancelAnimationFrame(h),h=0,z()}function z(){let O=st(h?"player.pause":"player.play");m.innerHTML=h?Zt.pause:Zt.play,m.title=O,m.setAttribute("aria-label",O)}return t.registerPanel("timeliner",{icon:Zt.timeliner,title:st("panel.timeliner"),render:O=>{let I=nt("button","ioviewer-text-button ioviewer-player-open");I.type="button",I.insertAdjacentHTML("afterbegin",Zt.play),I.append(nt("span","",st("player.play"))),I.addEventListener("click",P);let k=nt("div","ioviewer-row-list");for(let X of r.tasks){let Y=String(X.name??""),B=nt("div","ioviewer-row ioviewer-task");B.dataset.type=X.type,B.setAttribute("title",`${Y} \xB7 ${st(`task.${X.type}`)}`);let U=`${o.format(X.start)} \u2013 ${o.format(X.end)}`;B.append(nt("span","ioviewer-row-name",Y),nt("span","ioviewer-task-dates",U)),k.append(B)}O.append(I,k)}}),{open:T,close:v,play:P,pause:D,setDate:y,get date(){return l},get isOpen(){return u}}}function Mf({shell:i,files:t,elements:e,scene:n}){let s=t.map((o,a)=>({file:o,layer:`link:${a}`,members:e.flatMap((l,c)=>l.link!=null&&(l.link===o.name||l.link===o.path)?[c]:[])})),r=(o,a)=>a?n.clearLayer(o.layer):n.setLayerHidden(o.layer,o.members,!0);i.registerPanel("links",{icon:Zt.links,title:st("panel.links"),visible:s.length>0,render:o=>{let a=nt("div","ioviewer-row-list");for(let l of s){let c=String(l.file.name??""),h=nt("label","ioviewer-row ioviewer-check ioviewer-link");h.setAttribute("title",`${c} (${l.file.path??""})`);let d=nt("input");d.type="checkbox",d.checked=l.members.length===0||l.file.visible!==!1,d.disabled=l.members.length===0,d.addEventListener("change",()=>r(l,d.checked)),d.checked||r(l,!1),h.append(d,nt("span","ioviewer-row-name",c),nt("span","ioviewer-row-count",String(l.members.length))),a.append(h)}o.append(a)}})}document.documentElement.lang=mr;var pi=document.getElementById("ioviewer-canvas");function yr(i){let t=document.getElementById("ioviewer-message");t.textContent=i,t.hidden=!1}var Sf=pi.getContext("webgl2",{antialias:!0});if(!Sf)yr(st("noWebGL"));else try{Iv(ju(),Sf)}catch(i){if(!(i instanceof Li))throw i;yr(st("badData"))}function Iv(i,t){i.meta.title&&(document.title=i.meta.title);let e=new Ss({canvas:pi,context:t,antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.localClippingEnabled=!0;let n=new Mi;n.background=new Dt("#1f2228");let s=new Zs("#ffffff","#8a8f99",1.6);s.position.set(0,0,1),n.add(s);let r=new Ge(45,1,.1,1e3);r.up.set(0,0,1),r.position.set(1,-1,.8);let o=new Ks("#ffffff",1.4);o.position.set(.3,.6,0),r.add(o,o.target),o.target.position.set(0,0,-1),n.add(r);let a=window.IOVIEWER_TEST??{},l=_();i.releaseBinary();let c=new Oa(l,S,Math.min(l.totalCost,2e7));n.add(l.root);let h=new Ga(l,l.visibleBox()),d=new qa(h,pi);n.add(d.group);let u=document.getElementById("ioviewer-ui"),p=new Ya(u),g=new $a(u,i.meta.grids??[]);n.add(p.group,g.group);function _(){try{return new pr(i,{...a,maxTextureSize:e.capabilities.maxTextureSize})}catch(I){if(!(I instanceof fr))throw I;yr(st("tooLarge").replace("{count}",I.count).replace("{limit}",I.limit));let k=Y=>({o:0,n:0,t:Y}),X={count:0,geometry:k("u32"),material:k("u32"),element:k("i32"),matrix:k("f32")};return new pr({...i,meta:{...i.meta,instances:X}})}}i.meta.instances.count===0&&yr(st("noGeometry"));let m=!1;pi.addEventListener("webglcontextlost",()=>{m=!0,yr(st("contextLost"))});let f,w=new Promise(I=>f=I),R=!1;function S(){R||m||(R=!0,c.requested(performance.now()),requestAnimationFrame(()=>{if(R=!1,m)return;let I=pi.getBoundingClientRect();y.camera.updateMatrixWorld(),d.update(y.camera),p.update(y.camera,I),g.update(y.camera,I),c.begin(y.camera,I.height,performance.now()),e.render(n,y.camera),c.end(performance.now()),O.update(),f()}))}l.root.addEventListener("change",S),h.addEventListener("change",S),d.addEventListener("change",S),p.addEventListener("change",S),g.addEventListener("change",S);let b=new Ba(e,l,r,{pickFloat:a.pickFloat}),y=new Pa(r,pi,{pick:(I,k)=>b.pick(I,k)?.point??null,visibleBox:()=>l.visibleBox()});y.addEventListener("change",()=>{b.camera=y.camera,S()}),l.root.addEventListener("change",I=>{I.detail.kind==="visibility"&&(y.invalidateBounds(),y.resize())});let T=new ka;T.addEventListener("change",()=>l.setHighlighted([...T.values()]));let v=ef({root:u,data:i,scene:l,controls:y,picker:b,selection:T,measure:p});uf({root:u,...v,sections:h,selection:T});let{meta:E}=i;pf({...v,controls:y,views:E.viewpoints??[]});let P=gf({...v,tests:E.clashTests??[],elements:E.elements,scene:l,controls:y,selection:T});n.add(P.group);let D=yf({root:u,...v,timeliner:E.timeliner,elements:E.elements,scene:l});Mf({...v,files:E.linkedFiles??[],elements:E.elements,scene:l});for(let I of ff({root:u,toolbar:v.toolbar,scene:l,meta:i.meta,grids:g}))v.onEscape(I.close);v.toolbar.setHandler("distance",()=>{p.setActive(!p.active),v.toolbar.setActive("distance",p.active)}),v.toolbar.setActive("distance",!1),v.onEscape(()=>p.clear());let z=()=>{y.setExtraBounds("grids",g.visible?g.box:null),y.setExtraBounds("measure",p.box)};g.addEventListener("change",z),p.addEventListener("change",z),z(),y.addEventListener("click",I=>{let{x:k,y:X,ctrl:Y,shift:B}=I.detail,U=b.pick(k,X),H=U?.element??-1;p.active?U&&p.add(U.point):Y?H>=0&&T.toggle(H):H>=0?T.set([H]):B||T.clear()}),y.addEventListener("boxselect",I=>{if(p.active)return;let{rect:k,mode:X,ctrl:Y,shift:B}=I.detail;if(k.width<4||k.height<4){!Y&&!B&&T.clear();return}let U=new se,H=Vd(k,X,Hd(l,y.camera,pi.getBoundingClientRect())),{planes:Z,intersection:rt}=h.clipping(),at=H.filter(Ft=>!Ha(l.elementBox(Ft,U),Z,rt));T.set(Y?[...T.values(),...at]:at)}),window.addEventListener("resize",()=>{e.setSize(window.innerWidth,window.innerHeight,!1),y.resize()}),e.setSize(window.innerWidth,window.innerHeight,!1),y.resize(),y.fitBox(l.visibleBox(),!1);let O=new Fa(document.getElementById("ioviewer-ui"),r,y);window.addEventListener("pointerdown",I=>{(I.target===pi||O.element.contains(I.target))&&document.activeElement?.blur()},!0),window.__ioviewer={scene:l,motionDetail:c,controls:y,picker:b,selection:T,ui:v,viewCube:O,sections:h,sectionGizmo:d,measure:p,grids:g,clashes:P,timeliner:D,ready:w,get camera(){return y.camera}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
