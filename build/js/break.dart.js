(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.eN(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.eO(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ch(b)
return new s(c,this)}:function(){if(s===null)s=A.ch(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ch(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={c6:function c6(){},
cg(a,b,c){return a},
cx(){return new A.aV("No element")},
aL:function aL(a){this.a=a},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a1:function a1(){},
d7(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fr(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.be(a)
return s},
bn(a){return A.dB(a)},
dB(a){var s,r,q,p,o
if(a instanceof A.i)return A.p(A.ar(a),null)
s=J.bc(a)
if(s===B.z||s===B.B||t.B.b(a)){r=B.k(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.p(A.ar(a),null)},
as(a,b){if(a==null)J.cn(a)
throw A.d(A.ex(a,b))},
ex(a,b){var s,r="index",q=null
if(!A.cU(b))return new A.A(!0,b,r,q)
s=A.bO(J.cn(a))
if(b<0||b>=s)return A.dz(b,a,r,q,s)
return new A.aa(q,q,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.aP()
s=new Error()
s.dartException=a
r=A.eP
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
eP(){return J.be(this.dartException)},
ck(a){throw A.d(a)},
d6(a){throw A.d(A.cv(a))},
x(a){var s,r,q,p,o,n
a=A.eL(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.o([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.br(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bs(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
cC(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
c7(a,b){var s=b==null,r=s?null:b.method
return new A.aK(a,r,s?null:b.receiver)},
au(a){if(a==null)return new A.bm(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.N(a,a.dartException)
return A.es(a)},
N(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
es(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.aa(r,16)&8191)===10)switch(q){case 438:return A.N(a,A.c7(A.m(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.m(s)
return A.N(a,new A.a9(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.da()
n=$.db()
m=$.dc()
l=$.dd()
k=$.dg()
j=$.dh()
i=$.df()
$.de()
h=$.dj()
g=$.di()
f=o.k(s)
if(f!=null)return A.N(a,A.c7(A.bb(s),f))
else{f=n.k(s)
if(f!=null){f.method="call"
return A.N(a,A.c7(A.bb(s),f))}else{f=m.k(s)
if(f==null){f=l.k(s)
if(f==null){f=k.k(s)
if(f==null){f=j.k(s)
if(f==null){f=i.k(s)
if(f==null){f=l.k(s)
if(f==null){f=h.k(s)
if(f==null){f=g.k(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.bb(s)
return A.N(a,new A.a9(s,f==null?e:f.method))}}}return A.N(a,new A.b1(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ab()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.N(a,new A.A(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ab()
return a},
aq(a){var s
if(a==null)return new A.ag(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.ag(a)},
eG(a,b,c,d,e,f){t.Z.a(a)
switch(A.bO(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bz("Unsupported number of arguments for wrapped closure"))},
W(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.eG)
a.$identity=s
return s},
dw(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.aW().constructor.prototype):Object.create(new A.a_(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cu(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ds(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cu(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ds(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dp)}throw A.d("Error in functionType of tearoff")},
dt(a,b,c,d){var s=A.ct
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cu(a,b,c,d){var s,r
if(c)return A.dv(a,b,d)
s=b.length
r=A.dt(s,d,a,b)
return r},
du(a,b,c,d){var s=A.ct,r=A.dq
switch(b?-1:a){case 0:throw A.d(new A.aS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
dv(a,b,c){var s,r
if($.cr==null)$.cr=A.cq("interceptor")
if($.cs==null)$.cs=A.cq("receiver")
s=b.length
r=A.du(s,c,a,b)
return r},
ch(a){return A.dw(a)},
dp(a,b){return A.bM(v.typeUniverse,A.ar(a.a),b)},
ct(a){return a.a},
dq(a){return a.b},
cq(a){var s,r,q,p=new A.a_("receiver","interceptor"),o=J.dA(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.c3("Field name "+a+" not found.",null))},
eN(a){throw A.d(new A.aC(a))},
eB(a){return v.getIsolateTag(a)},
fq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eI(a){var s,r,q,p,o,n=A.bb($.d1.$1(a)),m=$.bT[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.e2($.d_.$2(a,n))
if(q!=null){m=$.bT[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.c1(s)
$.bT[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.bY[n]=s
return s}if(p==="-"){o=A.c1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.d3(a,s)
if(p==="*")throw A.d(A.cD(n))
if(v.leafTags[n]===true){o=A.c1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.d3(a,s)},
d3(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cj(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
c1(a){return J.cj(a,!1,null,!!a.$iaJ)},
eK(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.c1(s)
else return J.cj(s,c,null,null)},
eE(){if(!0===$.ci)return
$.ci=!0
A.eF()},
eF(){var s,r,q,p,o,n,m,l
$.bT=Object.create(null)
$.bY=Object.create(null)
A.eD()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.d4.$1(o)
if(n!=null){m=A.eK(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
eD(){var s,r,q,p,o,n,m=B.p()
m=A.V(B.q,A.V(B.r,A.V(B.l,A.V(B.l,A.V(B.t,A.V(B.u,A.V(B.v(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.d1=new A.bV(p)
$.d_=new A.bW(o)
$.d4=new A.bX(n)},
V(a,b){return a(b)||b},
eL(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
br:function br(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a9:function a9(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a},
bm:function bm(a){this.a=a},
ag:function ag(a){this.a=a
this.b=null},
I:function I(){},
az:function az(){},
aA:function aA(){},
aZ:function aZ(){},
aW:function aW(){},
a_:function a_(a,b){this.a=a
this.b=b},
aS:function aS(a){this.a=a},
bV:function bV(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
aN:function aN(){},
a7:function a7(){},
Q:function Q(){},
a8:function a8(){},
aO:function aO(){},
ae:function ae(){},
af:function af(){},
cz(a,b){var s=b.c
return s==null?b.c=A.cb(a,b.y,!0):s},
cy(a,b){var s=b.c
return s==null?b.c=A.aj(a,"a2",[b.y]):s},
cA(a){var s=a.x
if(s===6||s===7||s===8)return A.cA(a.y)
return s===11||s===12},
dC(a){return a.at},
Y(a){return A.cc(v.typeUniverse,a,!1)},
G(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.G(a,s,a0,a1)
if(r===s)return b
return A.cM(a,r,!0)
case 7:s=b.y
r=A.G(a,s,a0,a1)
if(r===s)return b
return A.cb(a,r,!0)
case 8:s=b.y
r=A.G(a,s,a0,a1)
if(r===s)return b
return A.cL(a,r,!0)
case 9:q=b.z
p=A.ao(a,q,a0,a1)
if(p===q)return b
return A.aj(a,b.y,p)
case 10:o=b.y
n=A.G(a,o,a0,a1)
m=b.z
l=A.ao(a,m,a0,a1)
if(n===o&&l===m)return b
return A.c9(a,n,l)
case 11:k=b.y
j=A.G(a,k,a0,a1)
i=b.z
h=A.ep(a,i,a0,a1)
if(j===k&&h===i)return b
return A.cK(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.ao(a,g,a0,a1)
o=b.y
n=A.G(a,o,a0,a1)
if(f===g&&n===o)return b
return A.ca(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.bh("Attempted to substitute unexpected RTI kind "+c))}},
ao(a,b,c,d){var s,r,q,p,o=b.length,n=A.bN(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.G(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
eq(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.bN(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.G(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ep(a,b,c,d){var s,r=b.a,q=A.ao(a,r,c,d),p=b.b,o=A.ao(a,p,c,d),n=b.c,m=A.eq(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.b6()
s.a=q
s.b=o
s.c=m
return s},
o(a,b){a[v.arrayRti]=b
return a},
ew(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.eC(s)
return a.$S()}return null},
d2(a,b){var s
if(A.cA(b))if(a instanceof A.I){s=A.ew(a)
if(s!=null)return s}return A.ar(a)},
ar(a){var s
if(a instanceof A.i){s=a.$ti
return s!=null?s:A.ce(a)}if(Array.isArray(a))return A.cd(a)
return A.ce(J.bc(a))},
cd(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
fm(a){var s=a.$ti
return s!=null?s:A.ce(a)},
ce(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ea(a,s)},
ea(a,b){var s=a instanceof A.I?a.__proto__.__proto__.constructor:b,r=A.e_(v.typeUniverse,s.name)
b.$ccache=r
return r},
eC(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cc(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
e9(a){var s,r,q,p,o=this
if(o===t.K)return A.T(o,a,A.ee)
if(!A.y(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.T(o,a,A.ei)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.cU
else if(r===t.i||r===t.H)q=A.ed
else if(r===t.N)q=A.ef
else q=r===t.v?A.cS:null
if(q!=null)return A.T(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.eH)){o.r="$i"+p
if(p==="B")return A.T(o,a,A.ec)
return A.T(o,a,A.eg)}}else if(s===7)return A.T(o,a,A.e7)
return A.T(o,a,A.e5)},
T(a,b,c){a.b=c
return a.b(b)},
e8(a){var s,r=this,q=A.e4
if(!A.y(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.e3
else if(r===t.K)q=A.e1
else{s=A.at(r)
if(s)q=A.e6}r.a=q
return r.a(a)},
bP(a){var s,r=a.x
if(!A.y(a))if(!(a===t._))if(!(a===t.G))if(r!==7)s=r===8&&A.bP(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
e5(a){var s=this
if(a==null)return A.bP(s)
return A.f(v.typeUniverse,A.d2(a,s),null,s,null)},
e7(a){if(a==null)return!0
return this.y.b(a)},
eg(a){var s,r=this
if(a==null)return A.bP(r)
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.bc(a)[s]},
ec(a){var s,r=this
if(a==null)return A.bP(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.bc(a)[s]},
e4(a){var s,r=this
if(a==null){s=A.at(r)
if(s)return a}else if(r.b(a))return a
A.cQ(a,r)},
e6(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.cQ(a,s)},
cQ(a,b){throw A.d(A.dQ(A.cF(a,A.d2(a,b),A.p(b,null))))},
cF(a,b,c){var s=A.bk(a)
return s+": type '"+A.p(b==null?A.ar(a):b,null)+"' is not a subtype of type '"+c+"'"},
dQ(a){return new A.ai("TypeError: "+a)},
n(a,b){return new A.ai("TypeError: "+A.cF(a,null,b))},
ee(a){return a!=null},
e1(a){if(a!=null)return a
throw A.d(A.n(a,"Object"))},
ei(a){return!0},
e3(a){return a},
cS(a){return!0===a||!1===a},
fb(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.n(a,"bool"))},
fd(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool"))},
fc(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool?"))},
fe(a){if(typeof a=="number")return a
throw A.d(A.n(a,"double"))},
fg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double"))},
ff(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double?"))},
cU(a){return typeof a=="number"&&Math.floor(a)===a},
bO(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.n(a,"int"))},
fi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int"))},
fh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int?"))},
ed(a){return typeof a=="number"},
cP(a){if(typeof a=="number")return a
throw A.d(A.n(a,"num"))},
fk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num"))},
fj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num?"))},
ef(a){return typeof a=="string"},
bb(a){if(typeof a=="string")return a
throw A.d(A.n(a,"String"))},
fl(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String"))},
e2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String?"))},
em(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.p(a[q],b)
return s},
cR(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.o([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.F(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.as(a5,j)
m=B.m.j(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.p(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.p(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.p(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.p(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.p(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
p(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.p(a.y,b)
return s}if(l===7){r=a.y
s=A.p(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.p(a.y,b)+">"
if(l===9){p=A.er(a.y)
o=a.z
return o.length>0?p+("<"+A.em(o,b)+">"):p}if(l===11)return A.cR(a,b,null)
if(l===12)return A.cR(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.as(b,n)
return b[n]}return"?"},
er(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
e0(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
e_(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cc(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ak(a,5,"#")
q=A.bN(s)
for(p=0;p<s;++p)q[p]=r
o=A.aj(a,b,q)
n[b]=o
return o}else return m},
dY(a,b){return A.cN(a.tR,b)},
dX(a,b){return A.cN(a.eT,b)},
cc(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.cJ(A.cH(a,null,b,c))
r.set(b,s)
return s},
bM(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.cJ(A.cH(a,b,c,!0))
q.set(c,r)
return r},
dZ(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.c9(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
F(a,b){b.a=A.e8
b.b=A.e9
return b},
ak(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.t(null,null)
s.x=b
s.at=c
r=A.F(a,s)
a.eC.set(c,r)
return r},
cM(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.dV(a,b,r,c)
a.eC.set(r,s)
return s},
dV(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.y(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.t(null,null)
q.x=6
q.y=b
q.at=c
return A.F(a,q)},
cb(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.dU(a,b,r,c)
a.eC.set(r,s)
return s},
dU(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.y(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.at(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.at(q.y))return q
else return A.cz(a,b)}}p=new A.t(null,null)
p.x=7
p.y=b
p.at=c
return A.F(a,p)},
cL(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.dS(a,b,r,c)
a.eC.set(r,s)
return s},
dS(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.y(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.aj(a,"a2",[b])
else if(b===t.P||b===t.T)return t.R}q=new A.t(null,null)
q.x=8
q.y=b
q.at=c
return A.F(a,q)},
dW(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.t(null,null)
s.x=13
s.y=b
s.at=q
r=A.F(a,s)
a.eC.set(q,r)
return r},
ba(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
dR(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
aj(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ba(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.t(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.F(a,r)
a.eC.set(p,q)
return q},
c9(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.ba(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.t(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.F(a,o)
a.eC.set(q,n)
return n},
cK(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ba(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ba(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.dR(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.t(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.F(a,p)
a.eC.set(r,o)
return o},
ca(a,b,c,d){var s,r=b.at+("<"+A.ba(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.dT(a,b,c,r,d)
a.eC.set(r,s)
return s},
dT(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.bN(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.G(a,b,r,0)
m=A.ao(a,c,r,0)
return A.ca(a,n,m,c!==m)}}l=new A.t(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.F(a,l)},
cH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.dK(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.cI(a,r,h,g,!1)
else if(q===46)r=A.cI(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.E(a.u,a.e,g.pop()))
break
case 94:g.push(A.dW(a.u,g.pop()))
break
case 35:g.push(A.ak(a.u,5,"#"))
break
case 64:g.push(A.ak(a.u,2,"@"))
break
case 126:g.push(A.ak(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.c8(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.aj(p,n,o))
else{m=A.E(p,a.e,n)
switch(m.x){case 11:g.push(A.ca(p,m,o,a.n))
break
default:g.push(A.c9(p,m,o))
break}}break
case 38:A.dL(a,g)
break
case 42:p=a.u
g.push(A.cM(p,A.E(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.cb(p,A.E(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.cL(p,A.E(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.b6()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.c8(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.cK(p,A.E(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.c8(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.dN(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.E(a.u,a.e,i)},
dK(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
cI(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.e0(s,o.y)[p]
if(n==null)A.ck('No "'+p+'" in "'+A.dC(o)+'"')
d.push(A.bM(s,o,n))}else d.push(p)
return m},
dL(a,b){var s=b.pop()
if(0===s){b.push(A.ak(a.u,1,"0&"))
return}if(1===s){b.push(A.ak(a.u,4,"1&"))
return}throw A.d(A.bh("Unexpected extended operation "+A.m(s)))},
E(a,b,c){if(typeof c=="string")return A.aj(a,c,a.sEA)
else if(typeof c=="number")return A.dM(a,b,c)
else return c},
c8(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.E(a,b,c[s])},
dN(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.E(a,b,c[s])},
dM(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.bh("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.bh("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.y(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.y(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.f(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.f(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.f(a,b.y,c,d,e)
if(r===6)return A.f(a,b.y,c,d,e)
return r!==7}if(r===6)return A.f(a,b.y,c,d,e)
if(p===6){s=A.cz(a,d)
return A.f(a,b,c,s,e)}if(r===8){if(!A.f(a,b.y,c,d,e))return!1
return A.f(a,A.cy(a,b),c,d,e)}if(r===7){s=A.f(a,t.P,c,d,e)
return s&&A.f(a,b.y,c,d,e)}if(p===8){if(A.f(a,b,c,d.y,e))return!0
return A.f(a,b,c,A.cy(a,d),e)}if(p===7){s=A.f(a,b,c,t.P,e)
return s||A.f(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.f(a,k,c,j,e)||!A.f(a,j,e,k,c))return!1}return A.cT(a,b.y,c,d.y,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.cT(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.eb(a,b,c,d,e)}return!1},
cT(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.f(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.f(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.f(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.f(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.f(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
eb(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bM(a,b,r[o])
return A.cO(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.cO(a,n,null,c,m,e)},
cO(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.f(a,r,d,q,f))return!1}return!0},
at(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.y(a))if(r!==7)if(!(r===6&&A.at(a.y)))s=r===8&&A.at(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eH(a){var s
if(!A.y(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
y(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
cN(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
bN(a){return a>0?new Array(a):v.typeUniverse.sEA},
t:function t(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b6:function b6(){this.c=this.b=this.a=null},
b4:function b4(){},
ai:function ai(a){this.a=a},
dF(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.et()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.W(new A.bu(q),1)).observe(s,{childList:true})
return new A.bt(q,s,r)}else if(self.setImmediate!=null)return A.eu()
return A.ev()},
dG(a){self.scheduleImmediate(A.W(new A.bv(t.M.a(a)),0))},
dH(a){self.setImmediate(A.W(new A.bw(t.M.a(a)),0))},
dI(a){t.M.a(a)
A.dO(0,a)},
cB(a,b){var s=B.c.v(a.a,1000)
return A.dP(s,b)},
dO(a,b){var s=new A.ah()
s.a2(a,b)
return s},
dP(a,b){var s=new A.ah()
s.a3(a,b)
return s},
c4(a,b){var s=A.cg(a,"error",t.K)
return new A.Z(s,b==null?A.dn(a):b)},
dn(a){var s
if(t.Q.b(a)){s=a.gt()
if(s!=null)return s}return B.x},
dJ(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.M()
b.C(a)
A.b7(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.L(q)}},
b7(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.bQ(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.b7(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.bQ(i.a,i.b)
return}f=$.h
if(f!==g)$.h=g
else f=null
b=b.c
if((b&15)===8)new A.bE(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bD(p,i).$0()}else if((b&2)!==0)new A.bC(c,p).$0()
if(f!=null)$.h=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("a2<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.u(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.dJ(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.u(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
ek(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.cp(a,"onError",u.c))},
ej(){var s,r
for(s=$.U;s!=null;s=$.U){$.an=null
r=s.b
$.U=r
if(r==null)$.am=null
s.a.$0()}},
eo(){$.cf=!0
try{A.ej()}finally{$.an=null
$.cf=!1
if($.U!=null)$.cl().$1(A.d0())}},
cY(a){var s=new A.b3(a),r=$.am
if(r==null){$.U=$.am=s
if(!$.cf)$.cl().$1(A.d0())}else $.am=r.b=s},
en(a){var s,r,q,p=$.U
if(p==null){A.cY(a)
$.an=$.am
return}s=new A.b3(a)
r=$.an
if(r==null){s.b=p
$.U=$.an=s}else{q=r.b
s.b=q
$.an=r.b=s
if(q==null)$.am=s}},
dE(a,b){var s=$.h
if(s===B.b)return A.cB(a,t.e.a(b))
return A.cB(a,t.e.a(s.O(b,t.p)))},
bQ(a,b){A.en(new A.bR(a,b))},
cV(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
cW(a,b,c,d,e,f,g){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
el(a,b,c,d,e,f,g,h,i){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
cX(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.ab(d)
A.cY(d)},
bu:function bu(a){this.a=a},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a){this.a=a},
bw:function bw(a){this.a=a},
ah:function ah(){this.c=0},
bL:function bL(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a){this.a=a},
bD:function bD(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
b3:function b3(a){this.a=a
this.b=null},
aX:function aX(){},
bo:function bo(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
aY:function aY(){},
al:function al(){},
bR:function bR(a,b){this.a=a
this.b=b},
b8:function b8(){},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
cw(a,b,c){var s,r
if(A.eh(a))return b+"..."+c
s=new A.bq(b)
B.a.F($.ap,a)
try{r=s
r.a=A.dD(r.a,a,", ")}finally{if(0>=$.ap.length)return A.as($.ap,-1)
$.ap.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
eh(a){var s,r
for(s=$.ap.length,r=0;r<s;++r)if(a===$.ap[r])return!0
return!1},
M:function M(){},
dx(a){if(a instanceof A.I)return a.h(0)
return"Instance of '"+A.bn(a)+"'"},
dy(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
dD(a,b,c){var s=J.dm(b)
if(!s.B())return a
if(c.length===0){do a+=A.m(s.gA())
while(s.B())}else{a+=A.m(s.gA())
for(;s.B();)a=a+c+A.m(s.gA())}return a},
bk(a){if(typeof a=="number"||A.cS(a)||a==null)return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dx(a)},
bh(a){return new A.ay(a)},
c3(a,b){return new A.A(!1,null,b,a)},
cp(a,b,c){return new A.A(!0,a,b,c)},
dz(a,b,c,d,e){return new A.aE(e,!0,a,c,"Index out of range")},
R(a){return new A.b2(a)},
cD(a){return new A.b0(a)},
cv(a){return new A.aB(a)},
bj:function bj(a){this.a=a},
e:function e(){},
ay:function ay(a){this.a=a},
D:function D(){},
aP:function aP(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aE:function aE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b2:function b2(a){this.a=a},
b0:function b0(a){this.a=a},
aV:function aV(a){this.a=a},
aB:function aB(a){this.a=a},
aQ:function aQ(){},
ab:function ab(){},
aC:function aC(a){this.a=a},
bz:function bz(a){this.a=a},
r:function r(){},
i:function i(){},
b9:function b9(){},
bq:function bq(a){this.a=a},
d8(){var s=window
s.toString
return s},
cG(a,b,c,d,e){var s=A.cZ(new A.by(c),t.z),r=s!=null
if(r&&!0){t.o.a(s)
if(r)B.j.a4(a,b,s,!1)}return new A.b5(a,b,s,!1,e.i("b5<0>"))},
cZ(a,b){var s=$.h
if(s===B.b)return a
return s.O(a,b)},
d5(a){return document.querySelector(a)},
c:function c(){},
av:function av(){},
aw:function aw(){},
H:function H(){},
a0:function a0(){},
bi:function bi(){},
b:function b(){},
a:function a(){},
l:function l(){},
aD:function aD(){},
K:function K(){},
a6:function a6(){},
w:function w(){},
aT:function aT(){},
S:function S(){},
c5:function c5(a){this.$ti=a},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b5:function b5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
by:function by(a){this.a=a},
bG:function bG(a){this.a=a},
bf:function bf(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
bg:function bg(a){this.a=a},
eJ(){var s,r={},q=document.querySelector("#joke"),p=A.o(["Et sinon, ca va ?","Ca va ?","Sur Twitch, toutes les deux heures, la pause s'impose","Salut Maman !","All your stream are belong to us","Suivez moi sur Twitter : _shalien","AFK","Bient\xf4t de retour","Penser \xe0 vous hydrater","Status : En pause","Status : AFK","Je reviens bient\xf4t","Le chat, je vous vois ...Error: Stream not found"],t.s)
B.y.sY($.dl(),"https://www.twitch.tv/embed/shalien/chat?darkpopout&parent="+A.m(B.a.gn(t.h.a(window.location).host.split(":"))))
s=$.bd().l(12)
if(typeof s!=="number")return s.j()
r.a=s
q.toString
if(!(s>=0&&s<13))return A.as(p,s)
J.co(q,p[s])
A.dE(new A.bj(21e7),new A.bZ(r,p,q))
$.c2().af()
r=window
r.toString
B.j.U(r,new A.c_())
r=window
r.toString
s=t.t.a(new A.c0())
t.Y.a(null)
A.cG(r,"resize",s,!1,t.z)},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(){},
c0:function c0(){},
aF:function aF(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
eO(a){return A.ck(new A.aL("Field '"+a+"' has been assigned during initialization."))},
eM(a,b){var s=$.bd().l(b)
if(typeof s!=="number")return s.j()
return s+a}},J={
cj(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bU(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ci==null){A.eE()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.cD("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bH
if(o==null)o=$.bH=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.eI(a)
if(p!=null)return p
if(typeof a=="function")return B.A
s=Object.getPrototypeOf(a)
if(s==null)return B.o
if(s===Object.prototype)return B.o
if(typeof q=="function"){o=$.bH
if(o==null)o=$.bH=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
dA(a,b){a.fixed$length=Array
return a},
bc(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a4.prototype
return J.aI.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.aH.prototype
if(typeof a=="boolean")return J.aG.prototype
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
return a}if(a instanceof A.i)return a
return J.bU(a)},
ey(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
return a}if(a instanceof A.i)return a
return J.bU(a)},
ez(a){if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
return a}if(a instanceof A.i)return a
return J.bU(a)},
eA(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
return a}if(a instanceof A.i)return a
return J.bU(a)},
dm(a){return J.ez(a).gS(a)},
cn(a){return J.ey(a).gm(a)},
co(a,b){return J.eA(a).sam(a,b)},
be(a){return J.bc(a).h(a)},
O:function O(){},
aG:function aG(){},
aH:function aH(){},
q:function q(){},
L:function L(){},
aR:function aR(){},
ac:function ac(){},
v:function v(){},
j:function j(a){this.$ti=a},
bl:function bl(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(){},
a4:function a4(){},
aI:function aI(){},
P:function P(){}},B={}
var w=[A,J,B]
var $={}
A.c6.prototype={}
J.O.prototype={
h(a){return"Instance of '"+A.bn(a)+"'"}}
J.aG.prototype={
h(a){return String(a)},
$ibS:1}
J.aH.prototype={
h(a){return"null"}}
J.q.prototype={}
J.L.prototype={
h(a){return String(a)}}
J.aR.prototype={}
J.ac.prototype={}
J.v.prototype={
h(a){var s=a[$.d9()]
if(s==null)return this.a_(a)
return"JavaScript function for "+J.be(s)},
$iJ:1}
J.j.prototype={
F(a,b){A.cd(a).c.a(b)
if(!!a.fixed$length)A.ck(A.R("add"))
a.push(b)},
gn(a){if(a.length>0)return a[0]
throw A.d(A.cx())},
gq(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cx())},
h(a){return A.cw(a,"[","]")},
gS(a){return new J.ax(a,a.length,A.cd(a).i("ax<1>"))},
gm(a){return a.length},
$ia3:1,
$iB:1}
J.bl.prototype={}
J.ax.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.d6(q))
s=r.c
if(s>=p){r.sK(null)
return!1}r.sK(q[s]);++r.c
return!0},
sK(a){this.d=this.$ti.i("1?").a(a)}}
J.a5.prototype={
ad(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.R(""+a+".floor()"))},
V(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.R(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a0(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.N(a,b)},
v(a,b){return(a|0)===a?a/b|0:this.N(a,b)},
N(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.R("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
aa(a,b){var s
if(a>0)s=this.a9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a9(a,b){return b>31?0:a>>>b},
$iX:1,
$iz:1}
J.a4.prototype={$ik:1}
J.aI.prototype={}
J.P.prototype={
j(a,b){return a+b},
X(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.w)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ah(a,b,c){var s=b-a.length
if(s<=0)return a
return this.X(c,s)+a},
h(a){return a},
gm(a){return a.length},
$iC:1}
A.aL.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.aM.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.cv(q))
s=r.c
if(s>=p){r.sI(null)
return!1}r.sI(q[s]);++r.c
return!0},
sI(a){this.d=this.$ti.i("1?").a(a)}}
A.a1.prototype={}
A.br.prototype={
k(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.a9.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.aK.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.b1.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bm.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ag.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaU:1}
A.I.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.d7(r==null?"unknown":r)+"'"},
$iJ:1,
gap(){return this},
$C:"$1",
$R:1,
$D:null}
A.az.prototype={$C:"$0",$R:0}
A.aA.prototype={$C:"$2",$R:2}
A.aZ.prototype={}
A.aW.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.d7(s)+"'"}}
A.a_.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bn(this.a)+"'")}}
A.aS.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bV.prototype={
$1(a){return this.a(a)},
$S:5}
A.bW.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.bX.prototype={
$1(a){return this.a(A.bb(a))},
$S:7}
A.aN.prototype={}
A.a7.prototype={
a6(a,b,c){return a.getUint32(b,c)},
a8(a,b,c,d){return a.setUint32(b,c,d)},
$idr:1}
A.Q.prototype={
gm(a){return a.length},
$iaJ:1}
A.a8.prototype={$ia3:1,$iB:1}
A.aO.prototype={
gm(a){return a.length}}
A.ae.prototype={}
A.af.prototype={}
A.t.prototype={
i(a){return A.bM(v.typeUniverse,this,a)},
p(a){return A.dZ(v.typeUniverse,this,a)}}
A.b6.prototype={}
A.b4.prototype={
h(a){return this.a}}
A.ai.prototype={$iD:1}
A.bu.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.bt.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.bv.prototype={
$0(){this.a.$0()},
$S:1}
A.bw.prototype={
$0(){this.a.$0()},
$S:1}
A.ah.prototype={
a2(a,b){if(self.setTimeout!=null)self.setTimeout(A.W(new A.bL(this,b),0),a)
else throw A.d(A.R("`setTimeout()` not found."))},
a3(a,b){if(self.setTimeout!=null)self.setInterval(A.W(new A.bK(this,a,Date.now(),b),0),a)
else throw A.d(A.R("Periodic timer."))},
$ib_:1}
A.bL.prototype={
$0(){this.a.c=1
this.b.$0()},
$S:0}
A.bK.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.a0(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.Z.prototype={
h(a){return A.m(this.a)},
$ie:1,
gt(){return this.b}}
A.ad.prototype={
ag(a){if((this.c&15)!==6)return!0
return this.b.b.H(t.m.a(this.d),a.a,t.v,t.K)},
ae(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.aj(q,m,a.b,o,n,t.l)
else p=l.H(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.j.b(A.au(s))){if((r.c&1)!==0)throw A.d(A.c3("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.c3("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
ao(a,b,c){var s,r,q,p=this.$ti
p.p(c).i("1/(2)").a(a)
s=$.h
if(s===B.b){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.cp(b,"onError",u.c))}else{c.i("@<0/>").p(p.c).i("1(2)").a(a)
if(b!=null)b=A.ek(b,s)}r=new A.u(s,c.i("u<0>"))
q=b==null?1:3
this.J(new A.ad(r,q,a,b,p.i("@<1>").p(c).i("ad<1,2>")))
return r},
an(a,b){return this.ao(a,null,b)},
C(a){this.a=a.a&30|this.a&1
this.c=a.c},
J(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.J(a)
return}r.C(s)}A.cX(null,null,r.b,t.M.a(new A.bA(r,a)))}},
L(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.L(a)
return}m.C(n)}l.a=m.u(a)
A.cX(null,null,m.b,t.M.a(new A.bB(l,m)))}},
M(){var s=t.F.a(this.c)
this.c=null
return this.u(s)},
u(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
$ia2:1}
A.bA.prototype={
$0(){A.b7(this.a,this.b)},
$S:0}
A.bB.prototype={
$0(){A.b7(this.b,this.a.a)},
$S:0}
A.bE.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ai(t.O.a(q.d),t.A)}catch(p){s=A.au(p)
r=A.aq(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.c4(s,r)
o.b=!0
return}if(l instanceof A.u&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.an(new A.bF(n),t.A)
q.b=!1}},
$S:0}
A.bF.prototype={
$1(a){return this.a},
$S:10}
A.bD.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.H(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.au(l)
r=A.aq(l)
q=this.a
q.c=A.c4(s,r)
q.b=!0}},
$S:0}
A.bC.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.ag(s)&&p.a.e!=null){p.c=p.a.ae(s)
p.b=!1}}catch(o){r=A.au(o)
q=A.aq(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.c4(r,q)
n.b=!0}},
$S:0}
A.b3.prototype={}
A.aX.prototype={
gm(a){var s,r,q=this,p={},o=new A.u($.h,t.a)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bo(p,q))
t.Y.a(new A.bp(p,o))
A.cG(q.a,q.b,r,!1,s.c)
return o}}
A.bo.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bp.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.M()
r.c.a(q)
s.a=8
s.c=q
A.b7(s,p)},
$S:0}
A.aY.prototype={}
A.al.prototype={$icE:1}
A.bR.prototype={
$0(){var s=this.a,r=this.b
A.cg(s,"error",t.K)
A.cg(r,"stackTrace",t.l)
A.dy(s,r)},
$S:0}
A.b8.prototype={
ak(a){var s,r,q
t.M.a(a)
try{if(B.b===$.h){a.$0()
return}A.cV(null,null,this,a,t.q)}catch(q){s=A.au(q)
r=A.aq(q)
A.bQ(t.K.a(s),t.l.a(r))}},
al(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.b===$.h){a.$1(b)
return}A.cW(null,null,this,a,b,t.q,c)}catch(q){s=A.au(q)
r=A.aq(q)
A.bQ(t.K.a(s),t.l.a(r))}},
ab(a){return new A.bI(this,t.M.a(a))},
O(a,b){return new A.bJ(this,b.i("~(0)").a(a),b)},
ai(a,b){b.i("0()").a(a)
if($.h===B.b)return a.$0()
return A.cV(null,null,this,a,b)},
H(a,b,c,d){c.i("@<0>").p(d).i("1(2)").a(a)
d.a(b)
if($.h===B.b)return a.$1(b)
return A.cW(null,null,this,a,b,c,d)},
aj(a,b,c,d,e,f){d.i("@<0>").p(e).p(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.h===B.b)return a.$2(b,c)
return A.el(null,null,this,a,b,c,d,e,f)}}
A.bI.prototype={
$0(){return this.a.ak(this.b)},
$S:0}
A.bJ.prototype={
$1(a){var s=this.c
return this.a.al(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.M.prototype={
gS(a){return new A.aM(a,a.length,A.ar(a).i("aM<M.E>"))},
h(a){return A.cw(a,"[","]")}}
A.bj.prototype={
h(a){var s,r,q,p,o=this.a,n=B.c.v(o,36e8)
o%=36e8
s=B.c.v(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.c.v(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.m.ah(B.c.h(o%1e6),6,"0")}}
A.e.prototype={
gt(){return A.aq(this.$thrownJsError)}}
A.ay.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bk(s)
return"Assertion failed"}}
A.D.prototype={}
A.aP.prototype={
h(a){return"Throw of null."}}
A.A.prototype={
gE(){return"Invalid argument"+(!this.a?"(s)":"")},
gD(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gE()+q+o
if(!s.a)return n
return n+s.gD()+": "+A.bk(s.b)}}
A.aa.prototype={
gE(){return"RangeError"},
gD(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.aE.prototype={
gE(){return"RangeError"},
gD(){if(A.bO(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.b2.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b0.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aV.prototype={
h(a){return"Bad state: "+this.a}}
A.aB.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bk(s)+"."}}
A.aQ.prototype={
h(a){return"Out of Memory"},
gt(){return null},
$ie:1}
A.ab.prototype={
h(a){return"Stack Overflow"},
gt(){return null},
$ie:1}
A.aC.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bz.prototype={
h(a){return"Exception: "+this.a}}
A.r.prototype={
h(a){return"null"}}
A.i.prototype={$ii:1,
h(a){return"Instance of '"+A.bn(this)+"'"},
toString(){return this.h(this)}}
A.b9.prototype={
h(a){return""},
$iaU:1}
A.bq.prototype={
gm(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.av.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.aw.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.H.prototype={
sR(a,b){a.height=b},
sW(a,b){a.width=b},
gac(a){var s=a.getContext("2d")
s.toString
return s},
$iH:1}
A.a0.prototype={
sG(a,b){a.fillStyle=b},
sP(a,b){a.filter=b},
$ia0:1}
A.bi.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.b.prototype={
h(a){var s=a.localName
s.toString
return s}}
A.a.prototype={$ia:1}
A.l.prototype={
a4(a,b,c,d){return a.addEventListener(b,A.W(t.o.a(c),1),!1)},
$il:1}
A.aD.prototype={
gm(a){return a.length}}
A.K.prototype={
sY(a,b){a.src=b},
$iK:1}
A.a6.prototype={
h(a){var s=String(a)
s.toString
return s},
$ia6:1}
A.w.prototype={
h(a){var s=a.nodeValue
return s==null?this.Z(a):s},
sam(a,b){a.textContent=b}}
A.aT.prototype={
gm(a){return a.length}}
A.S.prototype={
U(a,b){var s
t.f.a(b)
this.a5(a)
s=A.cZ(b,t.H)
s.toString
return this.a7(a,s)},
a7(a,b){var s=a.requestAnimationFrame(A.W(t.f.a(b),1))
s.toString
return s},
a5(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.c5.prototype={}
A.bx.prototype={}
A.b5.prototype={}
A.by.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:3}
A.bG.prototype={
a1(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.d(A.R("No source of cryptographically secure random numbers available."))},
l(a){var s,r,q,p,o,n,m,l,k,j=null
if(a<=0||a>4294967296)throw A.d(new A.aa(j,j,!1,j,j,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
B.n.a8(r,0,0,!1)
q=4-s
p=A.bO(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;!0;){m=r.buffer
m=new Uint8Array(m,q,s)
crypto.getRandomValues(m)
l=B.n.a6(r,0,!1)
if(n)return(l&o)>>>0
k=l%a
if(l-k+a<p)return k}}}
A.bf.prototype={
af(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.r,a0=b.w,a1=a0.width
a1.toString
s=a0.height
s.toString
a.clearRect(0,0,a1,s)
s=b.r
a1=a0.height
a1.toString
a=a0.width
a.toString
a=s.createLinearGradient(0,a1,a,0)
a.toString
a1=b.b
a.addColorStop(0,B.a.gn(a1))
a.addColorStop(0,B.a.gq(a1))
a1=b.r;(a1&&B.e).sG(a1,a)
a=b.r
a1=a0.width
a1.toString
s=a0.height
s.toString
a.fillRect(0,0,a1,s)
s=b.f
a1=b.e
a=t.u
r=b.x
do{q=B.a.gn(s)
p=B.a.gq(s)
o=$.bd()
p=o.l(p)
if(typeof p!=="number")return p.j()
n=p+q
q=B.a.gn(a1)
p=o.l(B.a.gq(a1))
if(typeof p!=="number")return p.j()
m=p+q
q=a0.width
q.toString
q=o.l(q+100)
if(typeof q!=="number")return q.j()
l=q+-100
q=a0.height
q.toString
q=o.l(q+100)
if(typeof q!=="number")return q.j()
k=q+-100
q=o.l(299)
if(typeof q!=="number")return q.j()
j=B.f.ad(q/100)
if(!(j>=0&&j<3))return A.as(B.h,j)
i=B.a.gn(B.h[j])
h=B.a.gq(B.h[j])
b.r.beginPath()
q=b.r;(q&&B.e).sP(q,"blur("+m+"px)")
q=n/2
p=l-q
q=k-q
g=l+n
f=k+n
e=b.r.createLinearGradient(p,q,g,f)
e.addColorStop(0,i)
e.addColorStop(1,h)
d=b.r;(d&&B.e).sG(d,e)
b.r.fill()
b.r.arc(l,k,n,0,6.283185307179586,!1)
b.r.closePath()
d=o.l(99)
if(typeof d!=="number")return d.j()
c=B.f.V((d+-99)/100)
o=o.l(99)
if(typeof o!=="number")return o.j()
B.a.F(r,new A.aF(l,k,m,n,c,B.f.V((o+-99)/100),c,i,h,A.o([p,q,g,f],a)))}while(--b.d>=0)},
T(a){var s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=j.width
i.toString
s=j.height
s.toString
k.clearRect(0,0,i,s)
for(k=l.x,i=k.length,s=l.f,r=0;r<k.length;k.length===i||(0,A.d6)(k),++r){q=k[r]
p=q.a
o=q.e
p+=o*2
n=j.width
n.toString
if(!(p>=n&&o!==0))p=p<=0&&o!==0
else p=!0
if(p)q.e=o*-1
p=q.b
o=q.f
p+=o*2
n=j.height
n.toString
if(!(p>=n&&o!==0))p=p<=0&&o!==0
else p=!0
if(p)q.f=o*-1
if(!(q.c+q.r>=B.a.gq(s)&&q.r!==0))p=q.c+q.r<=B.a.gn(s)&&q.r!==0
else p=!0
if(p)q.r*=-1
q.a=q.a+q.e*2
q.b=q.b+q.f*2
q.c=q.c+q.r
l.r.beginPath()
p=l.r;(p&&B.e).sP(p,"blur("+q.c+"px)")
p=q.y
m=l.r.createLinearGradient(B.a.gn(p),p[1],p[2],B.a.gq(p))
m.addColorStop(0,q.w)
m.addColorStop(1,q.x)
p=l.r;(p&&B.e).sG(p,m)
l.r.arc(q.a,q.b,q.d,0,6.283185307179586,!1)
l.r.fill()
l.r.closePath()}k=window
k.toString
B.j.U(k,new A.bg(l))}}
A.bg.prototype={
$1(a){return this.a.T(A.cP(a))},
$S:4}
A.bZ.prototype={
$1(a){var s,r
t.p.a(a)
s=$.bd().l(12)
if(typeof s!=="number")return s.j()
this.a.a=s
r=this.b
if(!(s>=0&&s<13))return A.as(r,s)
J.co(this.c,r[s])},
$S:11}
A.c_.prototype={
$1(a){A.cP(a)
return $.c2().T(a)},
$S:4}
A.c0.prototype={
$1(a){var s=$.c2(),r=s.w
B.d.sW(r,window.innerWidth)
B.d.sR(r,window.innerHeight)
r=r.getContext("2d")
r.toString
s.r=r
r.globalCompositeOperation="lighter"},
$S:3}
A.aF.prototype={};(function aliases(){var s=J.O.prototype
s.Z=s.h
s=J.L.prototype
s.a_=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"et","dG",2)
s(A,"eu","dH",2)
s(A,"ev","dI",2)
r(A,"d0","eo",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.c6,J.O,J.ax,A.e,A.aM,A.a1,A.br,A.bm,A.ag,A.I,A.t,A.b6,A.ah,A.Z,A.ad,A.u,A.b3,A.aX,A.aY,A.al,A.M,A.bj,A.aQ,A.ab,A.bz,A.r,A.b9,A.bq,A.c5,A.bG,A.bf,A.aF])
q(J.O,[J.aG,J.aH,J.q,J.j,J.a5,J.P,A.aN])
q(J.q,[J.L,A.l,A.a0,A.bi,A.a,A.a6])
q(J.L,[J.aR,J.ac,J.v])
r(J.bl,J.j)
q(J.a5,[J.a4,J.aI])
q(A.e,[A.aL,A.D,A.aK,A.b1,A.aS,A.b4,A.ay,A.aP,A.A,A.b2,A.b0,A.aV,A.aB,A.aC])
r(A.a9,A.D)
q(A.I,[A.az,A.aA,A.aZ,A.bV,A.bX,A.bu,A.bt,A.bF,A.bo,A.bJ,A.by,A.bg,A.bZ,A.c_,A.c0])
q(A.aZ,[A.aW,A.a_])
r(A.bW,A.aA)
q(A.aN,[A.a7,A.Q])
r(A.ae,A.Q)
r(A.af,A.ae)
r(A.a8,A.af)
r(A.aO,A.a8)
r(A.ai,A.b4)
q(A.az,[A.bv,A.bw,A.bL,A.bK,A.bA,A.bB,A.bE,A.bD,A.bC,A.bp,A.bR,A.bI])
r(A.b8,A.al)
q(A.A,[A.aa,A.aE])
q(A.l,[A.w,A.S])
r(A.b,A.w)
r(A.c,A.b)
q(A.c,[A.av,A.aw,A.H,A.aD,A.K,A.aT])
r(A.bx,A.aX)
r(A.b5,A.aY)
s(A.ae,A.M)
s(A.af,A.a1)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",X:"double",z:"num",C:"String",bS:"bool",r:"Null",B:"List"},mangledNames:{},types:["~()","r()","~(~())","~(a)","~(z)","@(@)","@(@,C)","@(C)","r(@)","r(~())","u<@>(@)","~(b_)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dY(v.typeUniverse,JSON.parse('{"aR":"L","ac":"L","v":"L","eR":"a","eV":"a","eQ":"b","eW":"b","f_":"b","eS":"c","eY":"c","eX":"w","eU":"w","aG":{"bS":[]},"j":{"B":["1"],"a3":["1"]},"bl":{"j":["1"],"B":["1"],"a3":["1"]},"a5":{"X":[],"z":[]},"a4":{"X":[],"k":[],"z":[]},"aI":{"X":[],"z":[]},"P":{"C":[]},"aL":{"e":[]},"a9":{"D":[],"e":[]},"aK":{"e":[]},"b1":{"e":[]},"ag":{"aU":[]},"I":{"J":[]},"az":{"J":[]},"aA":{"J":[]},"aZ":{"J":[]},"aW":{"J":[]},"a_":{"J":[]},"aS":{"e":[]},"a7":{"dr":[]},"Q":{"aJ":["1"]},"a8":{"M":["k"],"aJ":["k"],"B":["k"],"a3":["k"],"a1":["k"]},"aO":{"M":["k"],"aJ":["k"],"B":["k"],"a3":["k"],"a1":["k"],"M.E":"k"},"b4":{"e":[]},"ai":{"D":[],"e":[]},"u":{"a2":["1"]},"ah":{"b_":[]},"Z":{"e":[]},"al":{"cE":[]},"b8":{"al":[],"cE":[]},"X":{"z":[]},"k":{"z":[]},"B":{"a3":["1"]},"ay":{"e":[]},"D":{"e":[]},"aP":{"e":[]},"A":{"e":[]},"aa":{"e":[]},"aE":{"e":[]},"b2":{"e":[]},"b0":{"e":[]},"aV":{"e":[]},"aB":{"e":[]},"aQ":{"e":[]},"ab":{"e":[]},"aC":{"e":[]},"b9":{"aU":[]},"c":{"l":[]},"av":{"l":[]},"aw":{"l":[]},"H":{"l":[]},"b":{"l":[]},"aD":{"l":[]},"K":{"l":[]},"w":{"l":[]},"aT":{"l":[]},"S":{"l":[]},"bx":{"aX":["1"]}}'))
A.dX(v.typeUniverse,JSON.parse('{"Q":1,"aY":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.Y
return{n:s("Z"),Q:s("e"),z:s("a"),Z:s("J"),d:s("a2<@>"),s:s("j<C>"),u:s("j<X>"),b:s("j<@>"),T:s("aH"),g:s("v"),D:s("aJ<@>"),h:s("a6"),P:s("r"),K:s("i"),l:s("aU"),N:s("C"),p:s("b_"),j:s("D"),B:s("ac"),c:s("u<@>"),a:s("u<k>"),v:s("bS"),m:s("bS(i)"),i:s("X"),A:s("@"),O:s("@()"),y:s("@(i)"),C:s("@(i,aU)"),S:s("k"),G:s("0&*"),_:s("i*"),R:s("a2<r>?"),X:s("i?"),F:s("ad<@,@>?"),o:s("@(a)?"),Y:s("~()?"),t:s("~(a)?"),H:s("z"),q:s("~"),M:s("~()"),e:s("~(b_)"),f:s("~(z)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.d=A.H.prototype
B.e=A.a0.prototype
B.y=A.K.prototype
B.z=J.O.prototype
B.a=J.j.prototype
B.c=J.a4.prototype
B.f=J.a5.prototype
B.m=J.P.prototype
B.A=J.v.prototype
B.B=J.q.prototype
B.n=A.a7.prototype
B.o=J.aR.prototype
B.i=J.ac.prototype
B.j=A.S.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.p=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.v=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.r=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.t=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.l=function(hooks) { return hooks; }

B.w=new A.aQ()
B.b=new A.b8()
B.x=new A.b9()
B.D=A.o(s(["#ee0505","#a10303"]),t.s)
B.E=A.o(s(["#0a0a0a","#2b2b2b"]),t.s)
B.C=A.o(s(["#6d0202","#850303"]),t.s)
B.h=A.o(s([B.D,B.E,B.C]),A.Y("j<B<C>>"))})();(function staticFields(){$.bH=null
$.cs=null
$.cr=null
$.d1=null
$.d_=null
$.d4=null
$.bT=null
$.bY=null
$.ci=null
$.U=null
$.am=null
$.an=null
$.cf=!1
$.h=B.b
$.ap=A.o([],A.Y("j<i>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"eT","d9",()=>A.eB("_$dart_dartClosure"))
s($,"f0","da",()=>A.x(A.bs({
toString:function(){return"$receiver$"}})))
s($,"f1","db",()=>A.x(A.bs({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"f2","dc",()=>A.x(A.bs(null)))
s($,"f3","dd",()=>A.x(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"f6","dg",()=>A.x(A.bs(void 0)))
s($,"f7","dh",()=>A.x(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"f5","df",()=>A.x(A.cC(null)))
s($,"f4","de",()=>A.x(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"f9","dj",()=>A.x(A.cC(void 0)))
s($,"f8","di",()=>A.x(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"fa","cl",()=>A.dF())
s($,"eZ","bd",()=>{var r=new A.bG(new DataView(new ArrayBuffer(8)))
r.a1()
return r})
s($,"fo","cm",()=>{var r=A.d5("#canvas")
r.toString
return A.Y("H").a(r)})
s($,"fp","dk",()=>B.d.gac($.cm()))
s($,"fn","c2",()=>{var r,q,p,o,n=$.dk(),m=$.cm(),l=t.s,k=A.o(["#0a0a0a","#0a0a0a"],l)
l=A.o(["#0a0a0a","#0a0a0a"],l)
r=A.eM(55,70)
q=A.Y("j<k>")
p=A.o([12,70],q)
q=A.o([1,120],q)
o=A.o([],A.Y("j<aF>"))
B.d.sW(m,A.d8().innerWidth)
B.d.sR(m,A.d8().innerHeight)
return new A.bf(k,l,r,p,q,n,m,o)})
s($,"fs","dl",()=>{var r=A.d5("#twitch-chat")
r.toString
return A.Y("K").a(r)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.O,CanvasGradient:J.q,DOMError:J.q,MediaError:J.q,NavigatorUserMediaError:J.q,OverconstrainedError:J.q,PositionError:J.q,GeolocationPositionError:J.q,ArrayBufferView:A.aN,DataView:A.a7,Uint8Array:A.aO,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.av,HTMLAreaElement:A.aw,HTMLCanvasElement:A.H,CanvasRenderingContext2D:A.a0,DOMException:A.bi,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.l,HTMLFormElement:A.aD,HTMLIFrameElement:A.K,Location:A.a6,Document:A.w,HTMLDocument:A.w,Node:A.w,HTMLSelectElement:A.aT,Window:A.S,DOMWindow:A.S})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,DataView:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,HTMLIFrameElement:true,Location:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})
A.Q.$nativeSuperclassTag="ArrayBufferView"
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.af.$nativeSuperclassTag="ArrayBufferView"
A.a8.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.eJ
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=break.dart.js.map
