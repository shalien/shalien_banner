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
a[c]=function(){a[c]=function(){A.eU(b)}
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
if(a[b]!==s)A.eV(b)
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
cx(){return new A.aW("No element")},
aM:function aM(a){this.a=a},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a1:function a1(){},
db(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fv(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
v(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.be(a)
return s},
bk(a){return A.dC(a)},
dC(a){var s,r,q,p,o
if(a instanceof A.i)return A.o(A.aq(a),null)
s=J.bd(a)
if(s===B.x||s===B.z||t.B.b(a)){r=B.k(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.o(A.aq(a),null)},
bX(a,b){if(a==null)J.co(a)
throw A.d(A.eA(a,b))},
eA(a,b){var s,r="index"
if(!A.cU(b))return new A.B(!0,b,r,null)
s=A.bL(J.co(a))
if(b<0||b>=s)return new A.aF(s,!0,b,r,"Index out of range")
return new A.a9(!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.aQ()
s=new Error()
s.dartException=a
r=A.eW
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
eW(){return J.be(this.dartException)},
cl(a){throw A.d(a)},
da(a){throw A.d(A.cv(a))},
y(a){var s,r,q,p,o,n
a=A.eS(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.u([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bo(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bp(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
cC(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
c7(a,b){var s=b==null,r=s?null:b.method
return new A.aL(a,r,s?null:b.receiver)},
as(a){if(a==null)return new A.bj(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.O(a,a.dartException)
return A.et(a)},
O(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
et(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.ad(r,16)&8191)===10)switch(q){case 438:return A.O(a,A.c7(A.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.v(s)
return A.O(a,new A.a8(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.dd()
n=$.de()
m=$.df()
l=$.dg()
k=$.dj()
j=$.dk()
i=$.di()
$.dh()
h=$.dm()
g=$.dl()
f=o.j(s)
if(f!=null)return A.O(a,A.c7(A.bc(s),f))
else{f=n.j(s)
if(f!=null){f.method="call"
return A.O(a,A.c7(A.bc(s),f))}else{f=m.j(s)
if(f==null){f=l.j(s)
if(f==null){f=k.j(s)
if(f==null){f=j.j(s)
if(f==null){f=i.j(s)
if(f==null){f=l.j(s)
if(f==null){f=h.j(s)
if(f==null){f=g.j(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.bc(s)
return A.O(a,new A.a8(s,f==null?e:f.method))}}}return A.O(a,new A.b2(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aa()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.O(a,new A.B(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aa()
return a},
ap(a){var s
if(a==null)return new A.af(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.af(a)},
eL(a,b,c,d,e,f){t.Z.a(a)
switch(A.bL(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bw("Unsupported number of arguments for wrapped closure"))},
W(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.eL)
a.$identity=s
return s},
dy(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.aX().constructor.prototype):Object.create(new A.a_(null,null).constructor.prototype)
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
p=a0}s.$S=A.du(a1,h,g)
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
du(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dr)}throw A.d("Error in functionType of tearoff")},
dv(a,b,c,d){var s=A.ct
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cu(a,b,c,d){var s,r
if(c)return A.dx(a,b,d)
s=b.length
r=A.dv(s,d,a,b)
return r},
dw(a,b,c,d){var s=A.ct,r=A.ds
switch(b?-1:a){case 0:throw A.d(new A.aT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
dx(a,b,c){var s,r
if($.cr==null)$.cr=A.cq("interceptor")
if($.cs==null)$.cs=A.cq("receiver")
s=b.length
r=A.dw(s,c,a,b)
return r},
ch(a){return A.dy(a)},
dr(a,b){return A.bJ(v.typeUniverse,A.aq(a.a),b)},
ct(a){return a.a},
ds(a){return a.b},
cq(a){var s,r,q,p=new A.a_("receiver","interceptor"),o=J.dB(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.c2("Field name "+a+" not found.",null))},
eU(a){throw A.d(new A.aC(a))},
eE(a){return v.getIsolateTag(a)},
fu(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eN(a){var s,r,q,p,o,n=A.bc($.d3.$1(a)),m=$.bQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.e3($.d_.$2(a,n))
if(q!=null){m=$.bQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.c_(s)
$.bQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.bW[n]=s
return s}if(p==="-"){o=A.c_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.d6(a,s)
if(p==="*")throw A.d(A.cD(n))
if(v.leafTags[n]===true){o=A.c_(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.d6(a,s)},
d6(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ck(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_(a){return J.ck(a,!1,null,!!a.$iaK)},
eP(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.c_(s)
else return J.ck(s,c,null,null)},
eJ(){if(!0===$.cj)return
$.cj=!0
A.eK()},
eK(){var s,r,q,p,o,n,m,l
$.bQ=Object.create(null)
$.bW=Object.create(null)
A.eI()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.d8.$1(o)
if(n!=null){m=A.eP(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
eI(){var s,r,q,p,o,n,m=B.o()
m=A.V(B.p,A.V(B.q,A.V(B.l,A.V(B.l,A.V(B.r,A.V(B.t,A.V(B.u(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.d3=new A.bT(p)
$.d_=new A.bU(o)
$.d8=new A.bV(n)},
V(a,b){return a(b)||b},
eS(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bo:function bo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a8:function a8(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a},
bj:function bj(a){this.a=a},
af:function af(a){this.a=a
this.b=null},
J:function J(){},
az:function az(){},
aA:function aA(){},
b_:function b_(){},
aX:function aX(){},
a_:function a_(a,b){this.a=a
this.b=b},
aT:function aT(a){this.a=a},
bT:function bT(a){this.a=a},
bU:function bU(a){this.a=a},
bV:function bV(a){this.a=a},
aO:function aO(){},
a6:function a6(){},
R:function R(){},
a7:function a7(){},
aP:function aP(){},
ad:function ad(){},
ae:function ae(){},
cz(a,b){var s=b.c
return s==null?b.c=A.cb(a,b.y,!0):s},
cy(a,b){var s=b.c
return s==null?b.c=A.ai(a,"a2",[b.y]):s},
cA(a){var s=a.x
if(s===6||s===7||s===8)return A.cA(a.y)
return s===11||s===12},
dD(a){return a.at},
Y(a){return A.cc(v.typeUniverse,a,!1)},
H(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.H(a,s,a0,a1)
if(r===s)return b
return A.cM(a,r,!0)
case 7:s=b.y
r=A.H(a,s,a0,a1)
if(r===s)return b
return A.cb(a,r,!0)
case 8:s=b.y
r=A.H(a,s,a0,a1)
if(r===s)return b
return A.cL(a,r,!0)
case 9:q=b.z
p=A.an(a,q,a0,a1)
if(p===q)return b
return A.ai(a,b.y,p)
case 10:o=b.y
n=A.H(a,o,a0,a1)
m=b.z
l=A.an(a,m,a0,a1)
if(n===o&&l===m)return b
return A.c9(a,n,l)
case 11:k=b.y
j=A.H(a,k,a0,a1)
i=b.z
h=A.eq(a,i,a0,a1)
if(j===k&&h===i)return b
return A.cK(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.an(a,g,a0,a1)
o=b.y
n=A.H(a,o,a0,a1)
if(f===g&&n===o)return b
return A.ca(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.bf("Attempted to substitute unexpected RTI kind "+c))}},
an(a,b,c,d){var s,r,q,p,o=b.length,n=A.bK(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.H(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
er(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.bK(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.H(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
eq(a,b,c,d){var s,r=b.a,q=A.an(a,r,c,d),p=b.b,o=A.an(a,p,c,d),n=b.c,m=A.er(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.b7()
s.a=q
s.b=o
s.c=m
return s},
u(a,b){a[v.arrayRti]=b
return a},
ex(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.eF(s)
return a.$S()}return null},
d4(a,b){var s
if(A.cA(b))if(a instanceof A.J){s=A.ex(a)
if(s!=null)return s}return A.aq(a)},
aq(a){var s
if(a instanceof A.i){s=a.$ti
return s!=null?s:A.ce(a)}if(Array.isArray(a))return A.cd(a)
return A.ce(J.bd(a))},
cd(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
fs(a){var s=a.$ti
return s!=null?s:A.ce(a)},
ce(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eb(a,s)},
eb(a,b){var s=a instanceof A.J?a.__proto__.__proto__.constructor:b,r=A.e0(v.typeUniverse,s.name)
b.$ccache=r
return r},
eF(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cc(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ea(a){var s,r,q,p,o=this
if(o===t.K)return A.T(o,a,A.ef)
if(!A.z(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.T(o,a,A.ej)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.cU
else if(r===t.i||r===t.H)q=A.ee
else if(r===t.N)q=A.eg
else q=r===t.v?A.cS:null
if(q!=null)return A.T(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.eM)){o.r="$i"+p
if(p==="C")return A.T(o,a,A.ed)
return A.T(o,a,A.eh)}}else if(s===7)return A.T(o,a,A.e8)
return A.T(o,a,A.e6)},
T(a,b,c){a.b=c
return a.b(b)},
e9(a){var s,r=this,q=A.e5
if(!A.z(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.e4
else if(r===t.K)q=A.e2
else{s=A.ar(r)
if(s)q=A.e7}r.a=q
return r.a(a)},
bM(a){var s,r=a.x
if(!A.z(a))if(!(a===t._))if(!(a===t.G))if(r!==7)s=r===8&&A.bM(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
e6(a){var s=this
if(a==null)return A.bM(s)
return A.f(v.typeUniverse,A.d4(a,s),null,s,null)},
e8(a){if(a==null)return!0
return this.y.b(a)},
eh(a){var s,r=this
if(a==null)return A.bM(r)
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.bd(a)[s]},
ed(a){var s,r=this
if(a==null)return A.bM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.bd(a)[s]},
e5(a){var s,r=this
if(a==null){s=A.ar(r)
if(s)return a}else if(r.b(a))return a
A.cQ(a,r)},
e7(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.cQ(a,s)},
cQ(a,b){throw A.d(A.dR(A.cF(a,A.d4(a,b),A.o(b,null))))},
cF(a,b,c){var s=A.bh(a)
return s+": type '"+A.o(b==null?A.aq(a):b,null)+"' is not a subtype of type '"+c+"'"},
dR(a){return new A.ah("TypeError: "+a)},
n(a,b){return new A.ah("TypeError: "+A.cF(a,null,b))},
ef(a){return a!=null},
e2(a){if(a!=null)return a
throw A.d(A.n(a,"Object"))},
ej(a){return!0},
e4(a){return a},
cS(a){return!0===a||!1===a},
fh(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.n(a,"bool"))},
fj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool"))},
fi(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool?"))},
fk(a){if(typeof a=="number")return a
throw A.d(A.n(a,"double"))},
fm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double"))},
fl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double?"))},
cU(a){return typeof a=="number"&&Math.floor(a)===a},
bL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.n(a,"int"))},
fo(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int"))},
fn(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int?"))},
ee(a){return typeof a=="number"},
cP(a){if(typeof a=="number")return a
throw A.d(A.n(a,"num"))},
fq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num"))},
fp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num?"))},
eg(a){return typeof a=="string"},
bc(a){if(typeof a=="string")return a
throw A.d(A.n(a,"String"))},
fr(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String"))},
e3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String?"))},
en(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.o(a[q],b)
return s},
cR(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.u([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.F(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.bX(a5,j)
m=B.f.k(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.o(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.o(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.o(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.o(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.o(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
o(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.o(a.y,b)
return s}if(l===7){r=a.y
s=A.o(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.o(a.y,b)+">"
if(l===9){p=A.es(a.y)
o=a.z
return o.length>0?p+("<"+A.en(o,b)+">"):p}if(l===11)return A.cR(a,b,null)
if(l===12)return A.cR(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.bX(b,n)
return b[n]}return"?"},
es(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
e1(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
e0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cc(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aj(a,5,"#")
q=A.bK(s)
for(p=0;p<s;++p)q[p]=r
o=A.ai(a,b,q)
n[b]=o
return o}else return m},
dZ(a,b){return A.cN(a.tR,b)},
dY(a,b){return A.cN(a.eT,b)},
cc(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.cJ(A.cH(a,null,b,c))
r.set(b,s)
return s},
bJ(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.cJ(A.cH(a,b,c,!0))
q.set(c,r)
return r},
e_(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.c9(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
G(a,b){b.a=A.e9
b.b=A.ea
return b},
aj(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.r(null,null)
s.x=b
s.at=c
r=A.G(a,s)
a.eC.set(c,r)
return r},
cM(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.dW(a,b,r,c)
a.eC.set(r,s)
return s},
dW(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.z(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.r(null,null)
q.x=6
q.y=b
q.at=c
return A.G(a,q)},
cb(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.dV(a,b,r,c)
a.eC.set(r,s)
return s},
dV(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.z(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.ar(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.ar(q.y))return q
else return A.cz(a,b)}}p=new A.r(null,null)
p.x=7
p.y=b
p.at=c
return A.G(a,p)},
cL(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.dT(a,b,r,c)
a.eC.set(r,s)
return s},
dT(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.z(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ai(a,"a2",[b])
else if(b===t.P||b===t.T)return t.R}q=new A.r(null,null)
q.x=8
q.y=b
q.at=c
return A.G(a,q)},
dX(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.r(null,null)
s.x=13
s.y=b
s.at=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
bb(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
dS(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
ai(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bb(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.r(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.G(a,r)
a.eC.set(p,q)
return q},
c9(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.bb(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.r(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.G(a,o)
a.eC.set(q,n)
return n},
cK(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bb(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bb(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.dS(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.r(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.G(a,p)
a.eC.set(r,o)
return o},
ca(a,b,c,d){var s,r=b.at+("<"+A.bb(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.dU(a,b,c,r,d)
a.eC.set(r,s)
return s},
dU(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.bK(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.H(a,b,r,0)
m=A.an(a,c,r,0)
return A.ca(a,n,m,c!==m)}}l=new A.r(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.G(a,l)},
cH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.dL(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.cI(a,r,h,g,!1)
else if(q===46)r=A.cI(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.F(a.u,a.e,g.pop()))
break
case 94:g.push(A.dX(a.u,g.pop()))
break
case 35:g.push(A.aj(a.u,5,"#"))
break
case 64:g.push(A.aj(a.u,2,"@"))
break
case 126:g.push(A.aj(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.c8(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.ai(p,n,o))
else{m=A.F(p,a.e,n)
switch(m.x){case 11:g.push(A.ca(p,m,o,a.n))
break
default:g.push(A.c9(p,m,o))
break}}break
case 38:A.dM(a,g)
break
case 42:p=a.u
g.push(A.cM(p,A.F(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.cb(p,A.F(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.cL(p,A.F(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.b7()
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
g.push(A.cK(p,A.F(p,a.e,g.pop()),l))
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
A.dO(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.F(a.u,a.e,i)},
dL(a,b,c,d){var s,r,q=b-48
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
n=A.e1(s,o.y)[p]
if(n==null)A.cl('No "'+p+'" in "'+A.dD(o)+'"')
d.push(A.bJ(s,o,n))}else d.push(p)
return m},
dM(a,b){var s=b.pop()
if(0===s){b.push(A.aj(a.u,1,"0&"))
return}if(1===s){b.push(A.aj(a.u,4,"1&"))
return}throw A.d(A.bf("Unexpected extended operation "+A.v(s)))},
F(a,b,c){if(typeof c=="string")return A.ai(a,c,a.sEA)
else if(typeof c=="number")return A.dN(a,b,c)
else return c},
c8(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.F(a,b,c[s])},
dO(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.F(a,b,c[s])},
dN(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.bf("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.bf("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.z(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.z(b))return!1
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
return A.ec(a,b,c,d,e)}return!1},
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
ec(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bJ(a,b,r[o])
return A.cO(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.cO(a,n,null,c,m,e)},
cO(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.f(a,r,d,q,f))return!1}return!0},
ar(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.z(a))if(r!==7)if(!(r===6&&A.ar(a.y)))s=r===8&&A.ar(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eM(a){var s
if(!A.z(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
z(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
cN(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
bK(a){return a>0?new Array(a):v.typeUniverse.sEA},
r:function r(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b7:function b7(){this.c=this.b=this.a=null},
b5:function b5(){},
ah:function ah(a){this.a=a},
dG(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.eu()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.W(new A.br(q),1)).observe(s,{childList:true})
return new A.bq(q,s,r)}else if(self.setImmediate!=null)return A.ev()
return A.ew()},
dH(a){self.scheduleImmediate(A.W(new A.bs(t.M.a(a)),0))},
dI(a){self.setImmediate(A.W(new A.bt(t.M.a(a)),0))},
dJ(a){t.M.a(a)
A.dP(0,a)},
cB(a,b){var s=B.b.n(a.a,1000)
return A.dQ(s<0?0:s,b)},
dP(a,b){var s=new A.ag(!0)
s.a5(a,b)
return s},
dQ(a,b){var s=new A.ag(!1)
s.a6(a,b)
return s},
c3(a,b){var s=A.cg(a,"error",t.K)
return new A.Z(s,b==null?A.dq(a):b)},
dq(a){var s
if(t.Q.b(a)){s=a.gu()
if(s!=null)return s}return B.w},
dK(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.N()
b.C(a)
A.b8(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.M(q)}},
b8(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.bN(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.b8(c.a,b)
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
A.bN(i.a,i.b)
return}f=$.h
if(f!==g)$.h=g
else f=null
b=b.c
if((b&15)===8)new A.bB(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bA(p,i).$0()}else if((b&2)!==0)new A.bz(c,p).$0()
if(f!=null)$.h=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("a2<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.v(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.dK(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.v(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
el(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.cp(a,"onError",u.c))},
ek(){var s,r
for(s=$.U;s!=null;s=$.U){$.am=null
r=s.b
$.U=r
if(r==null)$.al=null
s.a.$0()}},
ep(){$.cf=!0
try{A.ek()}finally{$.am=null
$.cf=!1
if($.U!=null)$.cn().$1(A.d0())}},
cY(a){var s=new A.b4(a),r=$.al
if(r==null){$.U=$.al=s
if(!$.cf)$.cn().$1(A.d0())}else $.al=r.b=s},
eo(a){var s,r,q,p=$.U
if(p==null){A.cY(a)
$.am=$.al
return}s=new A.b4(a)
r=$.am
if(r==null){s.b=p
$.U=$.am=s}else{q=r.b
s.b=q
$.am=r.b=s
if(q==null)$.al=s}},
dF(a,b){var s=$.h
if(s===B.c)return A.cB(a,t.e.a(b))
return A.cB(a,t.e.a(s.P(b,t.p)))},
bN(a,b){A.eo(new A.bO(a,b))},
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
em(a,b,c,d,e,f,g,h,i){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
cX(a,b,c,d){t.M.a(d)
if(B.c!==c)d=c.ae(d)
A.cY(d)},
br:function br(a){this.a=a},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a){this.a=a},
bt:function bt(a){this.a=a},
ag:function ag(a){this.a=a
this.b=null
this.c=0},
bI:function bI(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
t:function t(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bx:function bx(a,b){this.a=a
this.b=b},
by:function by(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
bA:function bA(a,b){this.a=a
this.b=b},
bz:function bz(a,b){this.a=a
this.b=b},
b4:function b4(a){this.a=a
this.b=null},
aY:function aY(){},
bl:function bl(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
ak:function ak(){},
bO:function bO(a,b){this.a=a
this.b=b},
b9:function b9(){},
bF:function bF(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
cw(a,b,c){var s,r
if(A.ei(a))return b+"..."+c
s=new A.bn(b)
B.a.F($.ao,a)
try{r=s
r.a=A.dE(r.a,a,", ")}finally{if(0>=$.ao.length)return A.bX($.ao,-1)
$.ao.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ei(a){var s,r
for(s=$.ao.length,r=0;r<s;++r)if(a===$.ao[r])return!0
return!1},
M:function M(){},
dz(a){if(a instanceof A.J)return a.h(0)
return"Instance of '"+A.bk(a)+"'"},
dA(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
dE(a,b,c){var s=J.dp(b)
if(!s.B())return a
if(c.length===0){do a+=A.v(s.gA())
while(s.B())}else{a+=A.v(s.gA())
for(;s.B();)a=a+c+A.v(s.gA())}return a},
c4(a,b){return new A.aD(1e6*b+6e7*a)},
bh(a){if(typeof a=="number"||A.cS(a)||a==null)return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dz(a)},
bf(a){return new A.ax(a)},
c2(a,b){return new A.B(!1,null,b,a)},
cp(a,b,c){return new A.B(!0,a,b,c)},
N(a){return new A.b3(a)},
cD(a){return new A.b1(a)},
cv(a){return new A.aB(a)},
d7(a){A.eQ(A.v(a))},
aD:function aD(a){this.a=a},
e:function e(){},
ax:function ax(a){this.a=a},
E:function E(){},
aQ:function aQ(){},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b3:function b3(a){this.a=a},
b1:function b1(a){this.a=a},
aW:function aW(a){this.a=a},
aB:function aB(a){this.a=a},
aR:function aR(){},
aa:function aa(){},
aC:function aC(a){this.a=a},
bw:function bw(a){this.a=a},
q:function q(){},
i:function i(){},
ba:function ba(){},
bn:function bn(a){this.a=a},
cG(a,b,c,d,e){var s=A.cZ(new A.bv(c),t.z),r=s!=null
if(r&&!0){t.o.a(s)
if(r)B.j.a7(a,b,s,!1)}return new A.b6(a,b,s,!1,e.i("b6<0>"))},
cZ(a,b){var s=$.h
if(s===B.c)return a
return s.P(a,b)},
eR(a){return document.querySelector(a)},
c:function c(){},
au:function au(){},
av:function av(){},
I:function I(){},
ay:function ay(){},
bg:function bg(){},
a0:function a0(){},
a:function a(){},
m:function m(){},
aE:function aE(){},
x:function x(){},
aU:function aU(){},
S:function S(){},
c5:function c5(a){this.$ti=a},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b6:function b6(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bv:function bv(a){this.a=a},
bD:function bD(a){this.a=a},
b:function b(){},
aG:function aG(a,b,c,d,e,f,g,h,i,j){var _=this
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
eO(){var s,r
A.eH()
s=$.at()
B.d.sZ(s,window.innerWidth)
B.d.sU(s,window.innerHeight)
A.eG()
s=window
s.toString
B.j.W(s,new A.bY())
s=window
s.toString
r=t.t.a(new A.bZ())
t.Y.a(null)
A.cG(s,"resize",r,!1,t.z)},
eH(){var s={},r=document.querySelector("#countdown")
r.toString
s.a=A.c4(10,0)
A.dF(A.c4(0,1),new A.bS(s,r))},
eG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=$.j(),c=$.at(),b=c.width
b.toString
s=c.height
s.toString
d.clearRect(0,0,b,s)
s=$.j()
b=c.height
b.toString
d=c.width
d.toString
d=s.createLinearGradient(0,b,d,0)
d.toString
d.addColorStop(0,B.a.gq($.d1))
d.addColorStop(0,B.a.gt($.d1))
b=$.j();(b&&B.e).sG(b,d)
d=$.j()
b=c.width
b.toString
s=c.height
s.toString
d.fillRect(0,0,b,s)
s=t.u
do{d=B.a.gq($.c0)
b=B.a.gt($.c0)
r=$.cm()
b=r.m(b)
if(typeof b!=="number")return b.k()
q=b+d
d=B.a.gq($.d2)
b=r.m(B.a.gt($.d2))
if(typeof b!=="number")return b.k()
p=b+d
d=c.width
d.toString
d=r.m(d+100)
if(typeof d!=="number")return d.k()
o=d+-100
d=c.height
d.toString
d=r.m(d+100)
if(typeof d!=="number")return d.k()
n=d+-100
d=""+p
A.d7(""+o+", "+n+", "+q+", "+d)
b=r.m(299)
if(typeof b!=="number")return b.k()
m=B.h.T(b/100)
if(!(m>=0&&m<3))return A.bX($.ci,m)
l=B.a.gq($.ci[m])
k=B.a.gt($.ci[m])
$.j().beginPath()
b=$.j();(b&&B.e).sS(b,"blur("+d+"px)")
d=q/2
b=o-d
d=n-d
j=o+q
i=n+q
h=$.j().createLinearGradient(b,d,j,i)
h.addColorStop(0,l)
h.addColorStop(1,k)
g=$.j();(g&&B.e).sG(g,h)
$.j().fill()
$.j().arc(o,n,q,0,6.283185307179586,!1)
$.j().closePath()
g=r.m(99)
if(typeof g!=="number")return g.k()
f=B.h.X((g+-99)/100)
r=r.m(99)
if(typeof r!=="number")return r.k()
e=B.h.X((r+-99)/100)
i=A.u([b,d,j,i],s)
B.a.F($.d5,new A.aG(o,n,p,q,f,e,f,l,k,i))
i=$.dn()
if(typeof i!=="number")return i.aq();--i
$.ez=i}while(i>=0)},
d9(a){var s,r,q,p,o,n,m,l,k
A.d7(a)
s=$.j()
r=$.at()
q=r.width
q.toString
p=r.height
p.toString
s.clearRect(0,0,q,p)
for(s=$.d5,q=s.length,o=0;o<s.length;s.length===q||(0,A.da)(s),++o){n=s[o]
p=n.a
m=n.e
p+=m*2
l=r.width
l.toString
if(!(p>=l&&m!==0))p=p<=0&&m!==0
else p=!0
if(p)n.e=m*-1
p=n.b
m=n.f
p+=m*2
l=r.height
l.toString
if(!(p>=l&&m!==0))p=p<=0&&m!==0
else p=!0
if(p)n.f=m*-1
if(!(n.c+n.r>=B.a.gt($.c0)&&n.r!==0))p=n.c+n.r<=B.a.gq($.c0)&&n.r!==0
else p=!0
if(p)n.r*=-1
n.a=n.a+n.e*2
n.b=n.b+n.f*2
n.c=n.c+n.r
$.j().beginPath()
p=$.j();(p&&B.e).sS(p,"blur("+n.c+"px)")
p=n.y
k=$.j().createLinearGradient(B.a.gq(p),p[1],p[2],B.a.gt(p))
k.addColorStop(0,n.w)
k.addColorStop(1,n.x)
p=$.j();(p&&B.e).sG(p,k)
$.j().arc(n.a,n.b,n.d,0,6.283185307179586,!1)
$.j().fill()
$.j().closePath()}s=window
s.toString
B.j.W(s,new A.c1())},
eT(a,b){var s=$.cm().m(b)
if(typeof s!=="number")return s.k()
return s+a},
bY:function bY(){},
bZ:function bZ(){},
bS:function bS(a,b){this.a=a
this.b=b},
c1:function c1(){},
eQ(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
eV(a){return A.cl(new A.aM("Field '"+a+"' has been assigned during initialization."))}},J={
ck(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bR(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cj==null){A.eJ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.cD("Return interceptor for "+A.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bE
if(o==null)o=$.bE=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.eN(a)
if(p!=null)return p
if(typeof a=="function")return B.y
s=Object.getPrototypeOf(a)
if(s==null)return B.n
if(s===Object.prototype)return B.n
if(typeof q=="function"){o=$.bE
if(o==null)o=$.bE=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
dB(a,b){a.fixed$length=Array
return a},
bd(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a4.prototype
return J.aJ.prototype}if(typeof a=="string")return J.Q.prototype
if(a==null)return J.aI.prototype
if(typeof a=="boolean")return J.aH.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bR(a)},
eB(a){if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bR(a)},
eC(a){if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bR(a)},
eD(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bR(a)},
dp(a){return J.eC(a).gV(a)},
co(a){return J.eB(a).gl(a)},
be(a){return J.bd(a).h(a)},
P:function P(){},
aH:function aH(){},
aI:function aI(){},
p:function p(){},
L:function L(){},
aS:function aS(){},
ab:function ab(){},
w:function w(){},
k:function k(a){this.$ti=a},
bi:function bi(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(){},
a4:function a4(){},
aJ:function aJ(){},
Q:function Q(){}},B={}
var w=[A,J,B]
var $={}
A.c6.prototype={}
J.P.prototype={
h(a){return"Instance of '"+A.bk(a)+"'"}}
J.aH.prototype={
h(a){return String(a)},
$ibP:1}
J.aI.prototype={
h(a){return"null"}}
J.p.prototype={}
J.L.prototype={
h(a){return String(a)}}
J.aS.prototype={}
J.ab.prototype={}
J.w.prototype={
h(a){var s=a[$.dc()]
if(s==null)return this.a2(a)
return"JavaScript function for "+J.be(s)},
$iK:1}
J.k.prototype={
F(a,b){A.cd(a).c.a(b)
if(!!a.fixed$length)A.cl(A.N("add"))
a.push(b)},
gq(a){if(a.length>0)return a[0]
throw A.d(A.cx())},
gt(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cx())},
h(a){return A.cw(a,"[","]")},
gV(a){return new J.aw(a,a.length,A.cd(a).i("aw<1>"))},
gl(a){return a.length},
$ia3:1,
$iC:1}
J.bi.prototype={}
J.aw.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.da(q))
s=r.c
if(s>=p){r.sL(null)
return!1}r.sL(q[s]);++r.c
return!0},
sL(a){this.d=this.$ti.i("1?").a(a)}}
J.a5.prototype={
T(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.N(""+a+".floor()"))},
X(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.N(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
a3(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.O(a,b)},
n(a,b){return(a|0)===a?a/b|0:this.O(a,b)},
O(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.N("Result of truncating division is "+A.v(s)+": "+A.v(a)+" ~/ "+b))},
ad(a,b){var s
if(a>0)s=this.ac(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ac(a,b){return b>31?0:a>>>b},
$iX:1,
$iA:1}
J.a4.prototype={$il:1}
J.aJ.prototype={}
J.Q.prototype={
k(a,b){return a+b},
a0(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.v)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
H(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a0(c,s)+a},
h(a){return a},
gl(a){return a.length},
$iD:1}
A.aM.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.aN.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.cv(q))
s=r.c
if(s>=p){r.sJ(null)
return!1}r.sJ(q[s]);++r.c
return!0},
sJ(a){this.d=this.$ti.i("1?").a(a)}}
A.a1.prototype={}
A.bo.prototype={
j(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.a8.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.aL.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.b2.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bj.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.af.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaV:1}
A.J.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.db(r==null?"unknown":r)+"'"},
$iK:1,
gap(){return this},
$C:"$1",
$R:1,
$D:null}
A.az.prototype={$C:"$0",$R:0}
A.aA.prototype={$C:"$2",$R:2}
A.b_.prototype={}
A.aX.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.db(s)+"'"}}
A.a_.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bk(this.a)+"'")}}
A.aT.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bT.prototype={
$1(a){return this.a(a)},
$S:5}
A.bU.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.bV.prototype={
$1(a){return this.a(A.bc(a))},
$S:7}
A.aO.prototype={}
A.a6.prototype={
a9(a,b,c){return a.getUint32(b,c)},
ab(a,b,c,d){return a.setUint32(b,c,d)},
$idt:1}
A.R.prototype={
gl(a){return a.length},
$iaK:1}
A.a7.prototype={$ia3:1,$iC:1}
A.aP.prototype={
gl(a){return a.length}}
A.ad.prototype={}
A.ae.prototype={}
A.r.prototype={
i(a){return A.bJ(v.typeUniverse,this,a)},
p(a){return A.e_(v.typeUniverse,this,a)}}
A.b7.prototype={}
A.b5.prototype={
h(a){return this.a}}
A.ah.prototype={$iE:1}
A.br.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.bq.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.bs.prototype={
$0(){this.a.$0()},
$S:1}
A.bt.prototype={
$0(){this.a.$0()},
$S:1}
A.ag.prototype={
a5(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.W(new A.bI(this,b),0),a)
else throw A.d(A.N("`setTimeout()` not found."))},
a6(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.W(new A.bH(this,a,Date.now(),b),0),a)
else throw A.d(A.N("Periodic timer."))},
af(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.N("Canceling a timer."))},
$ib0:1}
A.bI.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.bH.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.a3(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.Z.prototype={
h(a){return A.v(this.a)},
$ie:1,
gu(){return this.b}}
A.ac.prototype={
ai(a){if((this.c&15)!==6)return!0
return this.b.b.I(t.m.a(this.d),a.a,t.v,t.K)},
ah(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.ak(q,m,a.b,o,n,t.l)
else p=l.I(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.h.b(A.as(s))){if((r.c&1)!==0)throw A.d(A.c2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.c2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.t.prototype={
ao(a,b,c){var s,r,q,p=this.$ti
p.p(c).i("1/(2)").a(a)
s=$.h
if(s===B.c){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.cp(b,"onError",u.c))}else{c.i("@<0/>").p(p.c).i("1(2)").a(a)
if(b!=null)b=A.el(b,s)}r=new A.t(s,c.i("t<0>"))
q=b==null?1:3
this.K(new A.ac(r,q,a,b,p.i("@<1>").p(c).i("ac<1,2>")))
return r},
an(a,b){return this.ao(a,null,b)},
C(a){this.a=a.a&30|this.a&1
this.c=a.c},
K(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.K(a)
return}r.C(s)}A.cX(null,null,r.b,t.M.a(new A.bx(r,a)))}},
M(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.M(a)
return}m.C(n)}l.a=m.v(a)
A.cX(null,null,m.b,t.M.a(new A.by(l,m)))}},
N(){var s=t.F.a(this.c)
this.c=null
return this.v(s)},
v(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
$ia2:1}
A.bx.prototype={
$0(){A.b8(this.a,this.b)},
$S:0}
A.by.prototype={
$0(){A.b8(this.b,this.a.a)},
$S:0}
A.bB.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.aj(t.O.a(q.d),t.A)}catch(p){s=A.as(p)
r=A.ap(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.c3(s,r)
o.b=!0
return}if(l instanceof A.t&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.an(new A.bC(n),t.A)
q.b=!1}},
$S:0}
A.bC.prototype={
$1(a){return this.a},
$S:10}
A.bA.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.I(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.as(l)
r=A.ap(l)
q=this.a
q.c=A.c3(s,r)
q.b=!0}},
$S:0}
A.bz.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.ai(s)&&p.a.e!=null){p.c=p.a.ah(s)
p.b=!1}}catch(o){r=A.as(o)
q=A.ap(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.c3(r,q)
n.b=!0}},
$S:0}
A.b4.prototype={}
A.aY.prototype={
gl(a){var s,r,q=this,p={},o=new A.t($.h,t.a)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bl(p,q))
t.Y.a(new A.bm(p,o))
A.cG(q.a,q.b,r,!1,s.c)
return o}}
A.bl.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bm.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.N()
r.c.a(q)
s.a=8
s.c=q
A.b8(s,p)},
$S:0}
A.aZ.prototype={}
A.ak.prototype={$icE:1}
A.bO.prototype={
$0(){var s=this.a,r=this.b
A.cg(s,"error",t.K)
A.cg(r,"stackTrace",t.l)
A.dA(s,r)},
$S:0}
A.b9.prototype={
al(a){var s,r,q
t.M.a(a)
try{if(B.c===$.h){a.$0()
return}A.cV(null,null,this,a,t.q)}catch(q){s=A.as(q)
r=A.ap(q)
A.bN(t.K.a(s),t.l.a(r))}},
am(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.c===$.h){a.$1(b)
return}A.cW(null,null,this,a,b,t.q,c)}catch(q){s=A.as(q)
r=A.ap(q)
A.bN(t.K.a(s),t.l.a(r))}},
ae(a){return new A.bF(this,t.M.a(a))},
P(a,b){return new A.bG(this,b.i("~(0)").a(a),b)},
aj(a,b){b.i("0()").a(a)
if($.h===B.c)return a.$0()
return A.cV(null,null,this,a,b)},
I(a,b,c,d){c.i("@<0>").p(d).i("1(2)").a(a)
d.a(b)
if($.h===B.c)return a.$1(b)
return A.cW(null,null,this,a,b,c,d)},
ak(a,b,c,d,e,f){d.i("@<0>").p(e).p(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.h===B.c)return a.$2(b,c)
return A.em(null,null,this,a,b,c,d,e,f)}}
A.bF.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.bG.prototype={
$1(a){var s=this.c
return this.a.am(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.M.prototype={
gV(a){return new A.aN(a,a.length,A.aq(a).i("aN<M.E>"))},
h(a){return A.cw(a,"[","]")}}
A.aD.prototype={
h(a){var s,r,q,p,o=this.a,n=B.b.n(o,36e8)
o%=36e8
if(o<0)o=-o
s=B.b.n(o,6e7)
o%=6e7
r=s<10?"0":""
q=B.b.n(o,1e6)
p=q<10?"0":""
return""+n+":"+r+s+":"+p+q+"."+B.f.H(B.b.h(o%1e6),6,"0")}}
A.e.prototype={
gu(){return A.ap(this.$thrownJsError)}}
A.ax.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bh(s)
return"Assertion failed"}}
A.E.prototype={}
A.aQ.prototype={
h(a){return"Throw of null."}}
A.B.prototype={
gE(){return"Invalid argument"+(!this.a?"(s)":"")},
gD(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gE()+q+o
if(!s.a)return n
return n+s.gD()+": "+A.bh(s.b)}}
A.a9.prototype={
gE(){return"RangeError"},
gD(){return""}}
A.aF.prototype={
gE(){return"RangeError"},
gD(){if(A.bL(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.b3.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b1.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aW.prototype={
h(a){return"Bad state: "+this.a}}
A.aB.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bh(s)+"."}}
A.aR.prototype={
h(a){return"Out of Memory"},
gu(){return null},
$ie:1}
A.aa.prototype={
h(a){return"Stack Overflow"},
gu(){return null},
$ie:1}
A.aC.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bw.prototype={
h(a){return"Exception: "+this.a}}
A.q.prototype={
h(a){return"null"}}
A.i.prototype={$ii:1,
h(a){return"Instance of '"+A.bk(this)+"'"},
toString(){return this.h(this)}}
A.ba.prototype={
h(a){return""},
$iaV:1}
A.bn.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.au.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.av.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.I.prototype={
sU(a,b){a.height=b},
sZ(a,b){a.width=b},
gag(a){var s=a.getContext("2d")
s.toString
return s},
$iI:1}
A.ay.prototype={
sG(a,b){a.fillStyle=b},
sS(a,b){a.filter=b}}
A.bg.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.a0.prototype={
h(a){var s=a.localName
s.toString
return s},
R(a){return a.blur()}}
A.a.prototype={$ia:1}
A.m.prototype={
a7(a,b,c,d){return a.addEventListener(b,A.W(t.o.a(c),1),!1)},
$im:1}
A.aE.prototype={
gl(a){return a.length}}
A.x.prototype={
h(a){var s=a.nodeValue
return s==null?this.a1(a):s},
sY(a,b){a.textContent=b}}
A.aU.prototype={
gl(a){return a.length}}
A.S.prototype={
W(a,b){var s
t.f.a(b)
this.a8(a)
s=A.cZ(b,t.H)
s.toString
return this.aa(a,s)},
aa(a,b){var s=a.requestAnimationFrame(A.W(t.f.a(b),1))
s.toString
return s},
a8(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.c5.prototype={}
A.bu.prototype={}
A.b6.prototype={}
A.bv.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:3}
A.bD.prototype={
a4(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.d(A.N("No source of cryptographically secure random numbers available."))},
m(a){var s,r,q,p,o,n,m,l,k
if(a<=0||a>4294967296)throw A.d(new A.a9(!1,null,null,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
B.m.ab(r,0,0,!1)
q=4-s
p=A.bL(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;!0;){m=r.buffer
m=new Uint8Array(m,q,s)
crypto.getRandomValues(m)
l=B.m.a9(r,0,!1)
if(n)return(l&o)>>>0
k=l%a
if(l-k+a<p)return k}}}
A.b.prototype={
R(a){return a.blur()}}
A.aG.prototype={}
A.bY.prototype={
$1(a){return A.d9(A.cP(a))},
$S:4}
A.bZ.prototype={
$1(a){var s=$.at()
B.d.sZ(s,window.innerWidth)
B.d.sU(s,window.innerHeight)
s=s.getContext("2d")
s.toString
$.ey=s
s.globalCompositeOperation="lighter"},
$S:3}
A.bS.prototype={
$1(a){var s,r,q,p,o
t.p.a(a)
s=this.a
r=s.a.a-A.c4(0,1).a
s.a=new A.aD(r)
q=B.b.n(r,1e6)<0||r<0
p=this.b
o=J.eD(p)
if(q){o.sY(p,"00:00")
o.R(p)
a.af()}else o.sY(p,B.f.H(B.b.h(B.b.n(r,6e7)),2,"0")+":"+B.f.H(B.b.h(B.b.T(B.b.a_(B.b.n(s.a.a,1e6),60))),2,"0"))},
$S:11}
A.c1.prototype={
$1(a){return A.d9(A.cP(a))},
$S:4};(function aliases(){var s=J.P.prototype
s.a1=s.h
s=J.L.prototype
s.a2=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"eu","dH",2)
s(A,"ev","dI",2)
s(A,"ew","dJ",2)
r(A,"d0","ep",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.c6,J.P,J.aw,A.e,A.aN,A.a1,A.bo,A.bj,A.af,A.J,A.r,A.b7,A.ag,A.Z,A.ac,A.t,A.b4,A.aY,A.aZ,A.ak,A.M,A.aD,A.aR,A.aa,A.bw,A.q,A.ba,A.bn,A.c5,A.bD,A.aG])
q(J.P,[J.aH,J.aI,J.p,J.k,J.a5,J.Q,A.aO])
q(J.p,[J.L,A.m,A.ay,A.bg,A.a])
q(J.L,[J.aS,J.ab,J.w])
r(J.bi,J.k)
q(J.a5,[J.a4,J.aJ])
q(A.e,[A.aM,A.E,A.aL,A.b2,A.aT,A.b5,A.ax,A.aQ,A.B,A.b3,A.b1,A.aW,A.aB,A.aC])
r(A.a8,A.E)
q(A.J,[A.az,A.aA,A.b_,A.bT,A.bV,A.br,A.bq,A.bC,A.bl,A.bG,A.bv,A.bY,A.bZ,A.bS,A.c1])
q(A.b_,[A.aX,A.a_])
r(A.bU,A.aA)
q(A.aO,[A.a6,A.R])
r(A.ad,A.R)
r(A.ae,A.ad)
r(A.a7,A.ae)
r(A.aP,A.a7)
r(A.ah,A.b5)
q(A.az,[A.bs,A.bt,A.bI,A.bH,A.bx,A.by,A.bB,A.bA,A.bz,A.bm,A.bO,A.bF])
r(A.b9,A.ak)
q(A.B,[A.a9,A.aF])
q(A.m,[A.x,A.S])
r(A.a0,A.x)
q(A.a0,[A.c,A.b])
q(A.c,[A.au,A.av,A.I,A.aE,A.aU])
r(A.bu,A.aY)
r(A.b6,A.aZ)
s(A.ad,A.M)
s(A.ae,A.a1)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",X:"double",A:"num",D:"String",bP:"bool",q:"Null",C:"List"},mangledNames:{},types:["~()","q()","~(~())","~(a)","~(A)","@(@)","@(@,D)","@(D)","q(@)","q(~())","t<@>(@)","~(b0)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dZ(v.typeUniverse,JSON.parse('{"aS":"L","ab":"L","w":"L","eY":"a","f1":"a","eX":"b","f2":"b","eZ":"c","f4":"c","f3":"x","f0":"x","aH":{"bP":[]},"k":{"C":["1"],"a3":["1"]},"bi":{"k":["1"],"C":["1"],"a3":["1"]},"a5":{"X":[],"A":[]},"a4":{"X":[],"l":[],"A":[]},"aJ":{"X":[],"A":[]},"Q":{"D":[]},"aM":{"e":[]},"a8":{"E":[],"e":[]},"aL":{"e":[]},"b2":{"e":[]},"af":{"aV":[]},"J":{"K":[]},"az":{"K":[]},"aA":{"K":[]},"b_":{"K":[]},"aX":{"K":[]},"a_":{"K":[]},"aT":{"e":[]},"a6":{"dt":[]},"R":{"aK":["1"]},"a7":{"M":["l"],"aK":["l"],"C":["l"],"a3":["l"],"a1":["l"]},"aP":{"M":["l"],"aK":["l"],"C":["l"],"a3":["l"],"a1":["l"],"M.E":"l"},"b5":{"e":[]},"ah":{"E":[],"e":[]},"t":{"a2":["1"]},"ag":{"b0":[]},"Z":{"e":[]},"ak":{"cE":[]},"b9":{"ak":[],"cE":[]},"X":{"A":[]},"l":{"A":[]},"C":{"a3":["1"]},"ax":{"e":[]},"E":{"e":[]},"aQ":{"e":[]},"B":{"e":[]},"a9":{"e":[]},"aF":{"e":[]},"b3":{"e":[]},"b1":{"e":[]},"aW":{"e":[]},"aB":{"e":[]},"aR":{"e":[]},"aa":{"e":[]},"aC":{"e":[]},"ba":{"aV":[]},"c":{"m":[]},"au":{"m":[]},"av":{"m":[]},"I":{"m":[]},"a0":{"m":[]},"aE":{"m":[]},"x":{"m":[]},"aU":{"m":[]},"S":{"m":[]},"bu":{"aY":["1"]},"b":{"m":[]}}'))
A.dY(v.typeUniverse,JSON.parse('{"R":1,"aZ":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.Y
return{n:s("Z"),Q:s("e"),z:s("a"),Z:s("K"),d:s("a2<@>"),s:s("k<D>"),u:s("k<X>"),b:s("k<@>"),T:s("aI"),g:s("w"),D:s("aK<@>"),P:s("q"),K:s("i"),l:s("aV"),N:s("D"),p:s("b0"),h:s("E"),B:s("ab"),c:s("t<@>"),a:s("t<l>"),v:s("bP"),m:s("bP(i)"),i:s("X"),A:s("@"),O:s("@()"),y:s("@(i)"),C:s("@(i,aV)"),S:s("l"),G:s("0&*"),_:s("i*"),R:s("a2<q>?"),X:s("i?"),F:s("ac<@,@>?"),o:s("@(a)?"),Y:s("~()?"),t:s("~(a)?"),H:s("A"),q:s("~"),M:s("~()"),e:s("~(b0)"),f:s("~(A)")}})();(function constants(){B.d=A.I.prototype
B.e=A.ay.prototype
B.x=J.P.prototype
B.a=J.k.prototype
B.b=J.a4.prototype
B.h=J.a5.prototype
B.f=J.Q.prototype
B.y=J.w.prototype
B.z=J.p.prototype
B.m=A.a6.prototype
B.n=J.aS.prototype
B.i=J.ab.prototype
B.j=A.S.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.o=function() {
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
B.u=function(getTagFallback) {
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
B.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.q=function(hooks) {
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
B.t=function(hooks) {
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
B.r=function(hooks) {
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

B.v=new A.aR()
B.c=new A.b9()
B.w=new A.ba()})();(function staticFields(){$.bE=null
$.cs=null
$.cr=null
$.d3=null
$.d_=null
$.d8=null
$.bQ=null
$.bW=null
$.cj=null
$.U=null
$.al=null
$.am=null
$.cf=!1
$.h=B.c
$.ao=A.u([],A.Y("k<i>"))
$.d5=A.u([],A.Y("k<aG>"))
$.d1=A.u(["#0a0a0a","#0a0a0a"],t.s)
$.ci=function(){var s=t.s
return A.u([A.u(["#ee0505","#a10303"],s),A.u(["#0a0a0a","#2b2b2b"],s),A.u(["#6d0202","#850303"],s)],A.Y("k<C<D>>"))}()
$.d2=A.u([12,70],A.Y("k<l>"))
$.c0=A.u([1,120],A.Y("k<l>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"f_","dc",()=>A.eE("_$dart_dartClosure"))
s($,"f6","dd",()=>A.y(A.bp({
toString:function(){return"$receiver$"}})))
s($,"f7","de",()=>A.y(A.bp({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"f8","df",()=>A.y(A.bp(null)))
s($,"f9","dg",()=>A.y(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fc","dj",()=>A.y(A.bp(void 0)))
s($,"fd","dk",()=>A.y(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fb","di",()=>A.y(A.cC(null)))
s($,"fa","dh",()=>A.y(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ff","dm",()=>A.y(A.cC(void 0)))
s($,"fe","dl",()=>A.y(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"fg","cn",()=>A.dG())
s($,"f5","cm",()=>{var q=new A.bD(new DataView(new ArrayBuffer(8)))
q.a4()
return q})
s($,"ft","at",()=>{var q=A.eR("#canvas")
q.toString
return A.Y("I").a(q)})
r($,"ey","j",()=>B.d.gag($.at()))
r($,"ez","dn",()=>A.eT(55,70))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.P,CanvasGradient:J.p,DOMError:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,ArrayBufferView:A.aO,DataView:A.a6,Uint8Array:A.aP,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.au,HTMLAreaElement:A.av,HTMLCanvasElement:A.I,CanvasRenderingContext2D:A.ay,DOMException:A.bg,Element:A.a0,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.m,HTMLFormElement:A.aE,Document:A.x,HTMLDocument:A.x,Node:A.x,HTMLSelectElement:A.aU,Window:A.S,DOMWindow:A.S,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,DataView:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.R.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.a7.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.eO
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
