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
a[c]=function(){a[c]=function(){A.eR(b)}
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
if(a[b]!==s)A.eS(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ci(b)
return new s(c,this)}:function(){if(s===null)s=A.ci(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ci(a).prototype
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
a(hunkHelpers,v,w,$)}var A={c7:function c7(){},
ch(a,b,c){return a},
cA(){return new A.aW("No element")},
aM:function aM(a){this.a=a},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(){},
d9(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fv(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.be(a)
return s},
bo(a){return A.dF(a)},
dF(a){var s,r,q,p,o
if(a instanceof A.i)return A.p(A.at(a),null)
s=J.bd(a)
if(s===B.A||s===B.C||t.B.b(a)){r=B.l(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.p(A.at(a),null)},
c_(a,b){if(a==null)J.cq(a)
throw A.d(A.eB(a,b))},
eB(a,b){var s,r="index",q=null
if(!A.cX(b))return new A.B(!0,b,r,q)
s=A.bP(J.cq(a))
if(b<0||b>=s)return A.dD(b,a,r,q,s)
return new A.ac(q,q,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.aQ()
s=new Error()
s.dartException=a
r=A.eT
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
eT(){return J.be(this.dartException)},
cm(a){throw A.d(a)},
d8(a){throw A.d(A.cx(a))},
y(a){var s,r,q,p,o,n
a=A.eP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.q([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bs(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bt(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
cF(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
c8(a,b){var s=b==null,r=s?null:b.method
return new A.aL(a,r,s?null:b.receiver)},
av(a){if(a==null)return new A.bn(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.P(a,a.dartException)
return A.ew(a)},
P(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ew(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.ag(r,16)&8191)===10)switch(q){case 438:return A.P(a,A.c8(A.m(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.m(s)
return A.P(a,new A.ab(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.dc()
n=$.dd()
m=$.de()
l=$.df()
k=$.di()
j=$.dj()
i=$.dh()
$.dg()
h=$.dl()
g=$.dk()
f=o.j(s)
if(f!=null)return A.P(a,A.c8(A.bc(s),f))
else{f=n.j(s)
if(f!=null){f.method="call"
return A.P(a,A.c8(A.bc(s),f))}else{f=m.j(s)
if(f==null){f=l.j(s)
if(f==null){f=k.j(s)
if(f==null){f=j.j(s)
if(f==null){f=i.j(s)
if(f==null){f=l.j(s)
if(f==null){f=h.j(s)
if(f==null){f=g.j(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.bc(s)
return A.P(a,new A.ab(s,f==null?e:f.method))}}}return A.P(a,new A.b2(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ad()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.P(a,new A.B(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ad()
return a},
as(a){var s
if(a==null)return new A.ai(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.ai(a)},
eK(a,b,c,d,e,f){t.Z.a(a)
switch(A.bP(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bA("Unsupported number of arguments for wrapped closure"))},
X(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.eK)
a.$identity=s
return s},
dz(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.aX().constructor.prototype):Object.create(new A.a0(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cw(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.dv(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cw(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
dv(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ds)}throw A.d("Error in functionType of tearoff")},
dw(a,b,c,d){var s=A.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cw(a,b,c,d){var s,r
if(c)return A.dy(a,b,d)
s=b.length
r=A.dw(s,d,a,b)
return r},
dx(a,b,c,d){var s=A.cv,r=A.dt
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
dy(a,b,c){var s,r
if($.ct==null)$.ct=A.cs("interceptor")
if($.cu==null)$.cu=A.cs("receiver")
s=b.length
r=A.dx(s,c,a,b)
return r},
ci(a){return A.dz(a)},
ds(a,b){return A.bN(v.typeUniverse,A.at(a.a),b)},
cv(a){return a.a},
dt(a){return a.b},
cs(a){var s,r,q,p=new A.a0("receiver","interceptor"),o=J.dE(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.c4("Field name "+a+" not found.",null))},
eR(a){throw A.d(new A.aD(a))},
eF(a){return v.getIsolateTag(a)},
fu(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eM(a){var s,r,q,p,o,n=A.bc($.d4.$1(a)),m=$.bU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bZ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.e6($.d2.$2(a,n))
if(q!=null){m=$.bU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bZ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.c2(s)
$.bU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.bZ[n]=s
return s}if(p==="-"){o=A.c2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.d6(a,s)
if(p==="*")throw A.d(A.cG(n))
if(v.leafTags[n]===true){o=A.c2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.d6(a,s)},
d6(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ck(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
c2(a){return J.ck(a,!1,null,!!a.$iaK)},
eO(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.c2(s)
else return J.ck(s,c,null,null)},
eI(){if(!0===$.cj)return
$.cj=!0
A.eJ()},
eJ(){var s,r,q,p,o,n,m,l
$.bU=Object.create(null)
$.bZ=Object.create(null)
A.eH()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.d7.$1(o)
if(n!=null){m=A.eO(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
eH(){var s,r,q,p,o,n,m=B.q()
m=A.W(B.r,A.W(B.t,A.W(B.m,A.W(B.m,A.W(B.u,A.W(B.v,A.W(B.w(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.d4=new A.bW(p)
$.d2=new A.bX(o)
$.d7=new A.bY(n)},
W(a,b){return a(b)||b},
eP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bs:function bs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ab:function ab(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a},
bn:function bn(a){this.a=a},
ai:function ai(a){this.a=a
this.b=null},
J:function J(){},
aA:function aA(){},
aB:function aB(){},
b_:function b_(){},
aX:function aX(){},
a0:function a0(a,b){this.a=a
this.b=b},
aT:function aT(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
bY:function bY(a){this.a=a},
aO:function aO(){},
a9:function a9(){},
S:function S(){},
aa:function aa(){},
aP:function aP(){},
ag:function ag(){},
ah:function ah(){},
cC(a,b){var s=b.c
return s==null?b.c=A.cc(a,b.y,!0):s},
cB(a,b){var s=b.c
return s==null?b.c=A.al(a,"a4",[b.y]):s},
cD(a){var s=a.x
if(s===6||s===7||s===8)return A.cD(a.y)
return s===11||s===12},
dG(a){return a.at},
Z(a){return A.cd(v.typeUniverse,a,!1)},
H(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.H(a,s,a0,a1)
if(r===s)return b
return A.cP(a,r,!0)
case 7:s=b.y
r=A.H(a,s,a0,a1)
if(r===s)return b
return A.cc(a,r,!0)
case 8:s=b.y
r=A.H(a,s,a0,a1)
if(r===s)return b
return A.cO(a,r,!0)
case 9:q=b.z
p=A.aq(a,q,a0,a1)
if(p===q)return b
return A.al(a,b.y,p)
case 10:o=b.y
n=A.H(a,o,a0,a1)
m=b.z
l=A.aq(a,m,a0,a1)
if(n===o&&l===m)return b
return A.ca(a,n,l)
case 11:k=b.y
j=A.H(a,k,a0,a1)
i=b.z
h=A.et(a,i,a0,a1)
if(j===k&&h===i)return b
return A.cN(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.aq(a,g,a0,a1)
o=b.y
n=A.H(a,o,a0,a1)
if(f===g&&n===o)return b
return A.cb(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.bh("Attempted to substitute unexpected RTI kind "+c))}},
aq(a,b,c,d){var s,r,q,p,o=b.length,n=A.bO(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.H(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
eu(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.bO(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.H(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
et(a,b,c,d){var s,r=b.a,q=A.aq(a,r,c,d),p=b.b,o=A.aq(a,p,c,d),n=b.c,m=A.eu(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.b7()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
eA(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.eG(s)
return a.$S()}return null},
d5(a,b){var s
if(A.cD(b))if(a instanceof A.J){s=A.eA(a)
if(s!=null)return s}return A.at(a)},
at(a){var s
if(a instanceof A.i){s=a.$ti
return s!=null?s:A.cf(a)}if(Array.isArray(a))return A.ce(a)
return A.cf(J.bd(a))},
ce(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
fp(a){var s=a.$ti
return s!=null?s:A.cf(a)},
cf(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ee(a,s)},
ee(a,b){var s=a instanceof A.J?a.__proto__.__proto__.constructor:b,r=A.e3(v.typeUniverse,s.name)
b.$ccache=r
return r},
eG(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cd(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ed(a){var s,r,q,p,o=this
if(o===t.K)return A.U(o,a,A.ei)
if(!A.z(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.U(o,a,A.em)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.cX
else if(r===t.i||r===t.H)q=A.eh
else if(r===t.N)q=A.ej
else q=r===t.v?A.cV:null
if(q!=null)return A.U(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.eL)){o.r="$i"+p
if(p==="C")return A.U(o,a,A.eg)
return A.U(o,a,A.ek)}}else if(s===7)return A.U(o,a,A.eb)
return A.U(o,a,A.e9)},
U(a,b,c){a.b=c
return a.b(b)},
ec(a){var s,r=this,q=A.e8
if(!A.z(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.e7
else if(r===t.K)q=A.e5
else{s=A.au(r)
if(s)q=A.ea}r.a=q
return r.a(a)},
bQ(a){var s,r=a.x
if(!A.z(a))if(!(a===t._))if(!(a===t.G))if(r!==7)s=r===8&&A.bQ(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
e9(a){var s=this
if(a==null)return A.bQ(s)
return A.f(v.typeUniverse,A.d5(a,s),null,s,null)},
eb(a){if(a==null)return!0
return this.y.b(a)},
ek(a){var s,r=this
if(a==null)return A.bQ(r)
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.bd(a)[s]},
eg(a){var s,r=this
if(a==null)return A.bQ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.bd(a)[s]},
e8(a){var s,r=this
if(a==null){s=A.au(r)
if(s)return a}else if(r.b(a))return a
A.cT(a,r)},
ea(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.cT(a,s)},
cT(a,b){throw A.d(A.dU(A.cI(a,A.d5(a,b),A.p(b,null))))},
cI(a,b,c){var s=A.bl(a)
return s+": type '"+A.p(b==null?A.at(a):b,null)+"' is not a subtype of type '"+c+"'"},
dU(a){return new A.ak("TypeError: "+a)},
n(a,b){return new A.ak("TypeError: "+A.cI(a,null,b))},
ei(a){return a!=null},
e5(a){if(a!=null)return a
throw A.d(A.n(a,"Object"))},
em(a){return!0},
e7(a){return a},
cV(a){return!0===a||!1===a},
fe(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.n(a,"bool"))},
fg(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool"))},
ff(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool?"))},
fh(a){if(typeof a=="number")return a
throw A.d(A.n(a,"double"))},
fj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double"))},
fi(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double?"))},
cX(a){return typeof a=="number"&&Math.floor(a)===a},
bP(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.n(a,"int"))},
fl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int"))},
fk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int?"))},
eh(a){return typeof a=="number"},
cS(a){if(typeof a=="number")return a
throw A.d(A.n(a,"num"))},
fn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num"))},
fm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num?"))},
ej(a){return typeof a=="string"},
bc(a){if(typeof a=="string")return a
throw A.d(A.n(a,"String"))},
fo(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String"))},
e6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String?"))},
eq(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.p(a[q],b)
return s},
cU(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.q([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.F(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c_(a5,j)
m=B.f.k(m+l,a5[j])
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
if(l===9){p=A.ev(a.y)
o=a.z
return o.length>0?p+("<"+A.eq(o,b)+">"):p}if(l===11)return A.cU(a,b,null)
if(l===12)return A.cU(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c_(b,n)
return b[n]}return"?"},
ev(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
e4(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
e3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cd(a,b,!1)
else if(typeof m=="number"){s=m
r=A.am(a,5,"#")
q=A.bO(s)
for(p=0;p<s;++p)q[p]=r
o=A.al(a,b,q)
n[b]=o
return o}else return m},
e1(a,b){return A.cQ(a.tR,b)},
e0(a,b){return A.cQ(a.eT,b)},
cd(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.cM(A.cK(a,null,b,c))
r.set(b,s)
return s},
bN(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.cM(A.cK(a,b,c,!0))
q.set(c,r)
return r},
e2(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.ca(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
G(a,b){b.a=A.ec
b.b=A.ed
return b},
am(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.u(null,null)
s.x=b
s.at=c
r=A.G(a,s)
a.eC.set(c,r)
return r},
cP(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.dZ(a,b,r,c)
a.eC.set(r,s)
return s},
dZ(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.z(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.u(null,null)
q.x=6
q.y=b
q.at=c
return A.G(a,q)},
cc(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.dY(a,b,r,c)
a.eC.set(r,s)
return s},
dY(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.z(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.au(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.au(q.y))return q
else return A.cC(a,b)}}p=new A.u(null,null)
p.x=7
p.y=b
p.at=c
return A.G(a,p)},
cO(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.dW(a,b,r,c)
a.eC.set(r,s)
return s},
dW(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.z(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.al(a,"a4",[b])
else if(b===t.P||b===t.T)return t.R}q=new A.u(null,null)
q.x=8
q.y=b
q.at=c
return A.G(a,q)},
e_(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.u(null,null)
s.x=13
s.y=b
s.at=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
bb(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
dV(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
al(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bb(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.u(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.G(a,r)
a.eC.set(p,q)
return q},
ca(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.bb(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.u(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.G(a,o)
a.eC.set(q,n)
return n},
cN(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bb(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bb(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.dV(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.u(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.G(a,p)
a.eC.set(r,o)
return o},
cb(a,b,c,d){var s,r=b.at+("<"+A.bb(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.dX(a,b,c,r,d)
a.eC.set(r,s)
return s},
dX(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.bO(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.H(a,b,r,0)
m=A.aq(a,c,r,0)
return A.cb(a,n,m,c!==m)}}l=new A.u(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.G(a,l)},
cK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cM(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.dO(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.cL(a,r,h,g,!1)
else if(q===46)r=A.cL(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.F(a.u,a.e,g.pop()))
break
case 94:g.push(A.e_(a.u,g.pop()))
break
case 35:g.push(A.am(a.u,5,"#"))
break
case 64:g.push(A.am(a.u,2,"@"))
break
case 126:g.push(A.am(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.c9(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.al(p,n,o))
else{m=A.F(p,a.e,n)
switch(m.x){case 11:g.push(A.cb(p,m,o,a.n))
break
default:g.push(A.ca(p,m,o))
break}}break
case 38:A.dP(a,g)
break
case 42:p=a.u
g.push(A.cP(p,A.F(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.cc(p,A.F(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.cO(p,A.F(p,a.e,g.pop()),a.n))
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
A.c9(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.cN(p,A.F(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.c9(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.dR(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.F(a.u,a.e,i)},
dO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
cL(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.e4(s,o.y)[p]
if(n==null)A.cm('No "'+p+'" in "'+A.dG(o)+'"')
d.push(A.bN(s,o,n))}else d.push(p)
return m},
dP(a,b){var s=b.pop()
if(0===s){b.push(A.am(a.u,1,"0&"))
return}if(1===s){b.push(A.am(a.u,4,"1&"))
return}throw A.d(A.bh("Unexpected extended operation "+A.m(s)))},
F(a,b,c){if(typeof c=="string")return A.al(a,c,a.sEA)
else if(typeof c=="number")return A.dQ(a,b,c)
else return c},
c9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.F(a,b,c[s])},
dR(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.F(a,b,c[s])},
dQ(a,b,c){var s,r,q=b.x
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
if(p===6){s=A.cC(a,d)
return A.f(a,b,c,s,e)}if(r===8){if(!A.f(a,b.y,c,d,e))return!1
return A.f(a,A.cB(a,b),c,d,e)}if(r===7){s=A.f(a,t.P,c,d,e)
return s&&A.f(a,b.y,c,d,e)}if(p===8){if(A.f(a,b,c,d.y,e))return!0
return A.f(a,b,c,A.cB(a,d),e)}if(p===7){s=A.f(a,b,c,t.P,e)
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
if(!A.f(a,k,c,j,e)||!A.f(a,j,e,k,c))return!1}return A.cW(a,b.y,c,d.y,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.cW(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ef(a,b,c,d,e)}return!1},
cW(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ef(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bN(a,b,r[o])
return A.cR(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.cR(a,n,null,c,m,e)},
cR(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.f(a,r,d,q,f))return!1}return!0},
au(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.z(a))if(r!==7)if(!(r===6&&A.au(a.y)))s=r===8&&A.au(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eL(a){var s
if(!A.z(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
z(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
cQ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
bO(a){return a>0?new Array(a):v.typeUniverse.sEA},
u:function u(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b7:function b7(){this.c=this.b=this.a=null},
b5:function b5(){},
ak:function ak(a){this.a=a},
dJ(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ex()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.X(new A.bv(q),1)).observe(s,{childList:true})
return new A.bu(q,s,r)}else if(self.setImmediate!=null)return A.ey()
return A.ez()},
dK(a){self.scheduleImmediate(A.X(new A.bw(t.M.a(a)),0))},
dL(a){self.setImmediate(A.X(new A.bx(t.M.a(a)),0))},
dM(a){t.M.a(a)
A.dS(0,a)},
cE(a,b){var s=B.b.n(a.a,1000)
return A.dT(s<0?0:s,b)},
dS(a,b){var s=new A.aj(!0)
s.a8(a,b)
return s},
dT(a,b){var s=new A.aj(!1)
s.a9(a,b)
return s},
c5(a,b){var s=A.ch(a,"error",t.K)
return new A.a_(s,b==null?A.dr(a):b)},
dr(a){var s
if(t.Q.b(a)){s=a.gu()
if(s!=null)return s}return B.y},
dN(a,b){var s,r,q
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
A.bR(l.a,l.b)}return}p.a=a0
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
A.bR(i.a,i.b)
return}f=$.h
if(f!==g)$.h=g
else f=null
b=b.c
if((b&15)===8)new A.bF(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bE(p,i).$0()}else if((b&2)!==0)new A.bD(c,p).$0()
if(f!=null)$.h=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("a4<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.v(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.dN(b,e)
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
eo(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.cr(a,"onError",u.c))},
en(){var s,r
for(s=$.V;s!=null;s=$.V){$.ap=null
r=s.b
$.V=r
if(r==null)$.ao=null
s.a.$0()}},
es(){$.cg=!0
try{A.en()}finally{$.ap=null
$.cg=!1
if($.V!=null)$.co().$1(A.d3())}},
d0(a){var s=new A.b4(a),r=$.ao
if(r==null){$.V=$.ao=s
if(!$.cg)$.co().$1(A.d3())}else $.ao=r.b=s},
er(a){var s,r,q,p=$.V
if(p==null){A.d0(a)
$.ap=$.ao
return}s=new A.b4(a)
r=$.ap
if(r==null){s.b=p
$.V=$.ap=s}else{q=r.b
s.b=q
$.ap=r.b=s
if(q==null)$.ao=s}},
dI(a,b){var s=$.h
if(s===B.c)return A.cE(a,t.e.a(b))
return A.cE(a,t.e.a(s.P(b,t.p)))},
bR(a,b){A.er(new A.bS(a,b))},
cY(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
cZ(a,b,c,d,e,f,g){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
ep(a,b,c,d,e,f,g,h,i){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
d_(a,b,c,d){t.M.a(d)
if(B.c!==c)d=c.ah(d)
A.d0(d)},
bv:function bv(a){this.a=a},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a},
bx:function bx(a){this.a=a},
aj:function aj(a){this.a=a
this.b=null
this.c=0},
bM:function bM(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
af:function af(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bB:function bB(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a},
bE:function bE(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
b4:function b4(a){this.a=a
this.b=null},
aY:function aY(){},
bp:function bp(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
an:function an(){},
bS:function bS(a,b){this.a=a
this.b=b},
b9:function b9(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
cz(a,b,c){var s,r
if(A.el(a))return b+"..."+c
s=new A.br(b)
B.a.F($.ar,a)
try{r=s
r.a=A.dH(r.a,a,", ")}finally{if(0>=$.ar.length)return A.c_($.ar,-1)
$.ar.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
el(a){var s,r
for(s=$.ar.length,r=0;r<s;++r)if(a===$.ar[r])return!0
return!1},
N:function N(){},
dB(a){if(a instanceof A.J)return a.h(0)
return"Instance of '"+A.bo(a)+"'"},
dC(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
dH(a,b,c){var s=J.dq(b)
if(!s.B())return a
if(c.length===0){do a+=A.m(s.gA())
while(s.B())}else{a+=A.m(s.gA())
for(;s.B();)a=a+c+A.m(s.gA())}return a},
cy(a){return new A.a2(1e6*a)},
bl(a){if(typeof a=="number"||A.cV(a)||a==null)return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dB(a)},
bh(a){return new A.az(a)},
c4(a,b){return new A.B(!1,null,b,a)},
cr(a,b,c){return new A.B(!0,a,b,c)},
dD(a,b,c,d,e){return new A.aF(e,!0,a,c,"Index out of range")},
O(a){return new A.b3(a)},
cG(a){return new A.b1(a)},
cx(a){return new A.aC(a)},
a2:function a2(a){this.a=a},
e:function e(){},
az:function az(a){this.a=a},
E:function E(){},
aQ:function aQ(){},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aF:function aF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b3:function b3(a){this.a=a},
b1:function b1(a){this.a=a},
aW:function aW(a){this.a=a},
aC:function aC(a){this.a=a},
aR:function aR(){},
ad:function ad(){},
aD:function aD(a){this.a=a},
bA:function bA(a){this.a=a},
t:function t(){},
i:function i(){},
ba:function ba(){},
br:function br(a){this.a=a},
da(){var s=window
s.toString
return s},
cJ(a,b,c,d,e){var s=A.d1(new A.bz(c),t.z),r=s!=null
if(r&&!0){t.o.a(s)
if(r)B.k.aa(a,b,s,!1)}return new A.b6(a,b,s,!1,e.i("b6<0>"))},
d1(a,b){var s=$.h
if(s===B.c)return a
return s.P(a,b)},
cl(a){return document.querySelector(a)},
c:function c(){},
aw:function aw(){},
ax:function ax(){},
I:function I(){},
a1:function a1(){},
bk:function bk(){},
o:function o(){},
a:function a(){},
j:function j(){},
aE:function aE(){},
L:function L(){},
a8:function a8(){},
x:function x(){},
aU:function aU(){},
T:function T(){},
c6:function c6(a){this.$ti=a},
by:function by(a,b,c,d){var _=this
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
bz:function bz(a){this.a=a},
bH:function bH(a){this.a=a},
b:function b(){},
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
dA(a){var s=new A.bi(B.n,a)
s.a6(a,B.n)
return s},
bi:function bi(a,b){this.a=a
this.b=b},
bj:function bj(a){this.a=a},
eN(){var s,r
A.dA($.dn())
B.z.sa2($.dp(),"https://www.twitch.tv/embed/shalien/chat?darkpopout&parent="+A.m(B.a.gp(t.h.a(window.location).host.split(":"))))
$.c3().al()
s=window
s.toString
B.k.X(s,new A.c0())
s=window
s.toString
r=t.t.a(new A.c1())
t.Y.a(null)
A.cJ(s,"resize",r,!1,t.z)},
c0:function c0(){},
c1:function c1(){},
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
eS(a){return A.cm(new A.aM("Field '"+a+"' has been assigned during initialization."))},
eQ(a,b){var s=$.cn().m(b)
if(typeof s!=="number")return s.k()
return s+a}},J={
ck(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bV(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cj==null){A.eI()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.cG("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bI
if(o==null)o=$.bI=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.eM(a)
if(p!=null)return p
if(typeof a=="function")return B.B
s=Object.getPrototypeOf(a)
if(s==null)return B.p
if(s===Object.prototype)return B.p
if(typeof q=="function"){o=$.bI
if(o==null)o=$.bI=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
dE(a,b){a.fixed$length=Array
return a},
bd(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a6.prototype
return J.aJ.prototype}if(typeof a=="string")return J.R.prototype
if(a==null)return J.aI.prototype
if(typeof a=="boolean")return J.aH.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bV(a)},
eC(a){if(typeof a=="string")return J.R.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bV(a)},
eD(a){if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bV(a)},
eE(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof A.i)return a
return J.bV(a)},
dq(a){return J.eD(a).gV(a)},
cq(a){return J.eC(a).gl(a)},
be(a){return J.bd(a).h(a)},
Q:function Q(){},
aH:function aH(){},
aI:function aI(){},
r:function r(){},
M:function M(){},
aS:function aS(){},
ae:function ae(){},
w:function w(){},
k:function k(a){this.$ti=a},
bm:function bm(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(){},
a6:function a6(){},
aJ:function aJ(){},
R:function R(){}},B={}
var w=[A,J,B]
var $={}
A.c7.prototype={}
J.Q.prototype={
h(a){return"Instance of '"+A.bo(a)+"'"}}
J.aH.prototype={
h(a){return String(a)},
$ibT:1}
J.aI.prototype={
h(a){return"null"}}
J.r.prototype={}
J.M.prototype={
h(a){return String(a)}}
J.aS.prototype={}
J.ae.prototype={}
J.w.prototype={
h(a){var s=a[$.db()]
if(s==null)return this.a4(a)
return"JavaScript function for "+J.be(s)},
$iK:1}
J.k.prototype={
F(a,b){A.ce(a).c.a(b)
if(!!a.fixed$length)A.cm(A.O("add"))
a.push(b)},
gp(a){if(a.length>0)return a[0]
throw A.d(A.cA())},
gt(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cA())},
h(a){return A.cz(a,"[","]")},
gV(a){return new J.ay(a,a.length,A.ce(a).i("ay<1>"))},
gl(a){return a.length},
$ia5:1,
$iC:1}
J.bm.prototype={}
J.ay.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.d8(q))
s=r.c
if(s>=p){r.sL(null)
return!1}r.sL(q[s]);++r.c
return!0},
sL(a){this.d=this.$ti.i("1?").a(a)}}
J.a7.prototype={
T(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.O(""+a+".floor()"))},
Y(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.O(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a0(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
a5(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.O(a,b)},
n(a,b){return(a|0)===a?a/b|0:this.O(a,b)},
O(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.O("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
ag(a,b){var s
if(a>0)s=this.af(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){return b>31?0:a>>>b},
$iY:1,
$iA:1}
J.a6.prototype={$il:1}
J.aJ.prototype={}
J.R.prototype={
k(a,b){return a+b},
a1(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.x)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
H(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a1(c,s)+a},
h(a){return a},
gl(a){return a.length},
$iD:1}
A.aM.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.aN.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.cx(q))
s=r.c
if(s>=p){r.sJ(null)
return!1}r.sJ(q[s]);++r.c
return!0},
sJ(a){this.d=this.$ti.i("1?").a(a)}}
A.a3.prototype={}
A.bs.prototype={
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
A.ab.prototype={
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
A.bn.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ai.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaV:1}
A.J.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.d9(r==null?"unknown":r)+"'"},
$iK:1,
gav(){return this},
$C:"$1",
$R:1,
$D:null}
A.aA.prototype={$C:"$0",$R:0}
A.aB.prototype={$C:"$2",$R:2}
A.b_.prototype={}
A.aX.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.d9(s)+"'"}}
A.a0.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bo(this.a)+"'")}}
A.aT.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bW.prototype={
$1(a){return this.a(a)},
$S:5}
A.bX.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.bY.prototype={
$1(a){return this.a(A.bc(a))},
$S:7}
A.aO.prototype={}
A.a9.prototype={
ac(a,b,c){return a.getUint32(b,c)},
ae(a,b,c,d){return a.setUint32(b,c,d)},
$idu:1}
A.S.prototype={
gl(a){return a.length},
$iaK:1}
A.aa.prototype={$ia5:1,$iC:1}
A.aP.prototype={
gl(a){return a.length}}
A.ag.prototype={}
A.ah.prototype={}
A.u.prototype={
i(a){return A.bN(v.typeUniverse,this,a)},
q(a){return A.e2(v.typeUniverse,this,a)}}
A.b7.prototype={}
A.b5.prototype={
h(a){return this.a}}
A.ak.prototype={$iE:1}
A.bv.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.bu.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.bw.prototype={
$0(){this.a.$0()},
$S:1}
A.bx.prototype={
$0(){this.a.$0()},
$S:1}
A.aj.prototype={
a8(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.X(new A.bM(this,b),0),a)
else throw A.d(A.O("`setTimeout()` not found."))},
a9(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.X(new A.bL(this,a,Date.now(),b),0),a)
else throw A.d(A.O("Periodic timer."))},
ai(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.d(A.O("Canceling a timer."))},
$ib0:1}
A.bM.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.bL.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.a5(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.a_.prototype={
h(a){return A.m(this.a)},
$ie:1,
gu(){return this.b}}
A.af.prototype={
am(a){if((this.c&15)!==6)return!0
return this.b.b.I(t.m.a(this.d),a.a,t.v,t.K)},
ak(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.ao(q,m,a.b,o,n,t.l)
else p=l.I(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.j.b(A.av(s))){if((r.c&1)!==0)throw A.d(A.c4("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.c4("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
au(a,b,c){var s,r,q,p=this.$ti
p.q(c).i("1/(2)").a(a)
s=$.h
if(s===B.c){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.cr(b,"onError",u.c))}else{c.i("@<0/>").q(p.c).i("1(2)").a(a)
if(b!=null)b=A.eo(b,s)}r=new A.v(s,c.i("v<0>"))
q=b==null?1:3
this.K(new A.af(r,q,a,b,p.i("@<1>").q(c).i("af<1,2>")))
return r},
ar(a,b){return this.au(a,null,b)},
C(a){this.a=a.a&30|this.a&1
this.c=a.c},
K(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.K(a)
return}r.C(s)}A.d_(null,null,r.b,t.M.a(new A.bB(r,a)))}},
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
A.d_(null,null,m.b,t.M.a(new A.bC(l,m)))}},
N(){var s=t.F.a(this.c)
this.c=null
return this.v(s)},
v(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
$ia4:1}
A.bB.prototype={
$0(){A.b8(this.a,this.b)},
$S:0}
A.bC.prototype={
$0(){A.b8(this.b,this.a.a)},
$S:0}
A.bF.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.an(t.O.a(q.d),t.A)}catch(p){s=A.av(p)
r=A.as(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.c5(s,r)
o.b=!0
return}if(l instanceof A.v&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.ar(new A.bG(n),t.A)
q.b=!1}},
$S:0}
A.bG.prototype={
$1(a){return this.a},
$S:10}
A.bE.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.I(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.av(l)
r=A.as(l)
q=this.a
q.c=A.c5(s,r)
q.b=!0}},
$S:0}
A.bD.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.am(s)&&p.a.e!=null){p.c=p.a.ak(s)
p.b=!1}}catch(o){r=A.av(o)
q=A.as(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.c5(r,q)
n.b=!0}},
$S:0}
A.b4.prototype={}
A.aY.prototype={
gl(a){var s,r,q=this,p={},o=new A.v($.h,t.a)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bp(p,q))
t.Y.a(new A.bq(p,o))
A.cJ(q.a,q.b,r,!1,s.c)
return o}}
A.bp.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bq.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.N()
r.c.a(q)
s.a=8
s.c=q
A.b8(s,p)},
$S:0}
A.aZ.prototype={}
A.an.prototype={$icH:1}
A.bS.prototype={
$0(){var s=this.a,r=this.b
A.ch(s,"error",t.K)
A.ch(r,"stackTrace",t.l)
A.dC(s,r)},
$S:0}
A.b9.prototype={
ap(a){var s,r,q
t.M.a(a)
try{if(B.c===$.h){a.$0()
return}A.cY(null,null,this,a,t.q)}catch(q){s=A.av(q)
r=A.as(q)
A.bR(t.K.a(s),t.l.a(r))}},
aq(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.c===$.h){a.$1(b)
return}A.cZ(null,null,this,a,b,t.q,c)}catch(q){s=A.av(q)
r=A.as(q)
A.bR(t.K.a(s),t.l.a(r))}},
ah(a){return new A.bJ(this,t.M.a(a))},
P(a,b){return new A.bK(this,b.i("~(0)").a(a),b)},
an(a,b){b.i("0()").a(a)
if($.h===B.c)return a.$0()
return A.cY(null,null,this,a,b)},
I(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.h===B.c)return a.$1(b)
return A.cZ(null,null,this,a,b,c,d)},
ao(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.h===B.c)return a.$2(b,c)
return A.ep(null,null,this,a,b,c,d,e,f)}}
A.bJ.prototype={
$0(){return this.a.ap(this.b)},
$S:0}
A.bK.prototype={
$1(a){var s=this.c
return this.a.aq(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.N.prototype={
gV(a){return new A.aN(a,a.length,A.at(a).i("aN<N.E>"))},
h(a){return A.cz(a,"[","]")}}
A.a2.prototype={
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
gu(){return A.as(this.$thrownJsError)}}
A.az.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bl(s)
return"Assertion failed"}}
A.E.prototype={}
A.aQ.prototype={
h(a){return"Throw of null."}}
A.B.prototype={
gE(){return"Invalid argument"+(!this.a?"(s)":"")},
gD(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gE()+q+o
if(!s.a)return n
return n+s.gD()+": "+A.bl(s.b)}}
A.ac.prototype={
gE(){return"RangeError"},
gD(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.aF.prototype={
gE(){return"RangeError"},
gD(){if(A.bP(this.b)<0)return": index must not be negative"
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
A.aC.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bl(s)+"."}}
A.aR.prototype={
h(a){return"Out of Memory"},
gu(){return null},
$ie:1}
A.ad.prototype={
h(a){return"Stack Overflow"},
gu(){return null},
$ie:1}
A.aD.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bA.prototype={
h(a){return"Exception: "+this.a}}
A.t.prototype={
h(a){return"null"}}
A.i.prototype={$ii:1,
h(a){return"Instance of '"+A.bo(this)+"'"},
toString(){return this.h(this)}}
A.ba.prototype={
h(a){return""},
$iaV:1}
A.br.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.aw.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.ax.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.I.prototype={
sU(a,b){a.height=b},
sa_(a,b){a.width=b},
gaj(a){var s=a.getContext("2d")
s.toString
return s},
$iI:1}
A.a1.prototype={
sG(a,b){a.fillStyle=b},
sS(a,b){a.filter=b},
$ia1:1}
A.bk.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.o.prototype={
h(a){var s=a.localName
s.toString
return s},
R(a){return a.blur()},
$io:1}
A.a.prototype={$ia:1}
A.j.prototype={
aa(a,b,c,d){return a.addEventListener(b,A.X(t.o.a(c),1),!1)},
$ij:1}
A.aE.prototype={
gl(a){return a.length}}
A.L.prototype={
sa2(a,b){a.src=b},
$iL:1}
A.a8.prototype={
h(a){var s=String(a)
s.toString
return s},
$ia8:1}
A.x.prototype={
h(a){var s=a.nodeValue
return s==null?this.a3(a):s},
sZ(a,b){a.textContent=b}}
A.aU.prototype={
gl(a){return a.length}}
A.T.prototype={
X(a,b){var s
t.f.a(b)
this.ab(a)
s=A.d1(b,t.H)
s.toString
return this.ad(a,s)},
ad(a,b){var s=a.requestAnimationFrame(A.X(t.f.a(b),1))
s.toString
return s},
ab(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.c6.prototype={}
A.by.prototype={}
A.b6.prototype={}
A.bz.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:3}
A.bH.prototype={
a7(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.d(A.O("No source of cryptographically secure random numbers available."))},
m(a){var s,r,q,p,o,n,m,l,k,j=null
if(a<=0||a>4294967296)throw A.d(new A.ac(j,j,!1,j,j,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
B.o.ae(r,0,0,!1)
q=4-s
p=A.bP(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;!0;){m=r.buffer
m=new Uint8Array(m,q,s)
crypto.getRandomValues(m)
l=B.o.ac(r,0,!1)
if(n)return(l&o)>>>0
k=l%a
if(l-k+a<p)return k}}}
A.b.prototype={
R(a){return a.blur()}}
A.bf.prototype={
al(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.r,a0=b.w,a1=a0.width
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
a.addColorStop(0,B.a.gp(a1))
a.addColorStop(0,B.a.gt(a1))
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
do{q=B.a.gp(s)
p=B.a.gt(s)
o=$.cn()
p=o.m(p)
if(typeof p!=="number")return p.k()
n=p+q
q=B.a.gp(a1)
p=o.m(B.a.gt(a1))
if(typeof p!=="number")return p.k()
m=p+q
q=a0.width
q.toString
q=o.m(q+100)
if(typeof q!=="number")return q.k()
l=q+-100
q=a0.height
q.toString
q=o.m(q+100)
if(typeof q!=="number")return q.k()
k=q+-100
q=o.m(299)
if(typeof q!=="number")return q.k()
j=B.h.T(q/100)
if(!(j>=0&&j<3))return A.c_(B.i,j)
i=B.a.gp(B.i[j])
h=B.a.gt(B.i[j])
b.r.beginPath()
q=b.r;(q&&B.e).sS(q,"blur("+m+"px)")
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
d=o.m(99)
if(typeof d!=="number")return d.k()
c=B.h.Y((d+-99)/100)
o=o.m(99)
if(typeof o!=="number")return o.k()
B.a.F(r,new A.aG(l,k,m,n,c,B.h.Y((o+-99)/100),c,i,h,A.q([p,q,g,f],a)))}while(--b.d>=0)},
W(a){var s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=j.width
i.toString
s=j.height
s.toString
k.clearRect(0,0,i,s)
for(k=l.x,i=k.length,s=l.f,r=0;r<k.length;k.length===i||(0,A.d8)(k),++r){q=k[r]
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
if(!(q.c+q.r>=B.a.gt(s)&&q.r!==0))p=q.c+q.r<=B.a.gp(s)&&q.r!==0
else p=!0
if(p)q.r*=-1
q.a=q.a+q.e*2
q.b=q.b+q.f*2
q.c=q.c+q.r
l.r.beginPath()
p=l.r;(p&&B.e).sS(p,"blur("+q.c+"px)")
p=q.y
m=l.r.createLinearGradient(B.a.gp(p),p[1],p[2],B.a.gt(p))
m.addColorStop(0,q.w)
m.addColorStop(1,q.x)
p=l.r;(p&&B.e).sG(p,m)
l.r.arc(q.a,q.b,q.d,0,6.283185307179586,!1)
l.r.fill()
l.r.closePath()}k=window
k.toString
B.k.X(k,new A.bg(l))}}
A.bg.prototype={
$1(a){return this.a.W(A.cS(a))},
$S:4}
A.bi.prototype={
a6(a,b){A.dI(A.cy(1),new A.bj(this))}}
A.bj.prototype={
$1(a){var s,r,q,p,o
t.p.a(a)
s=this.a
r=s.a.a-A.cy(1).a
s.a=new A.a2(r)
q=B.b.n(r,1e6)<0||r<0
p=s.b
o=J.eE(p)
if(q){o.sZ(p,"00:00")
o.R(p)
a.ai()}else o.sZ(p,B.f.H(B.b.h(B.b.n(r,6e7)),2,"0")+":"+B.f.H(B.b.h(B.b.T(B.b.a0(B.b.n(s.a.a,1e6),60))),2,"0"))},
$S:11}
A.c0.prototype={
$1(a){A.cS(a)
return $.c3().W(a)},
$S:4}
A.c1.prototype={
$1(a){var s=$.c3(),r=s.w
B.d.sa_(r,window.innerWidth)
B.d.sU(r,window.innerHeight)
r=r.getContext("2d")
r.toString
s.r=r
r.globalCompositeOperation="lighter"},
$S:3}
A.aG.prototype={};(function aliases(){var s=J.Q.prototype
s.a3=s.h
s=J.M.prototype
s.a4=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"ex","dK",2)
s(A,"ey","dL",2)
s(A,"ez","dM",2)
r(A,"d3","es",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.c7,J.Q,J.ay,A.e,A.aN,A.a3,A.bs,A.bn,A.ai,A.J,A.u,A.b7,A.aj,A.a_,A.af,A.v,A.b4,A.aY,A.aZ,A.an,A.N,A.a2,A.aR,A.ad,A.bA,A.t,A.ba,A.br,A.c6,A.bH,A.bf,A.bi,A.aG])
q(J.Q,[J.aH,J.aI,J.r,J.k,J.a7,J.R,A.aO])
q(J.r,[J.M,A.j,A.a1,A.bk,A.a,A.a8])
q(J.M,[J.aS,J.ae,J.w])
r(J.bm,J.k)
q(J.a7,[J.a6,J.aJ])
q(A.e,[A.aM,A.E,A.aL,A.b2,A.aT,A.b5,A.az,A.aQ,A.B,A.b3,A.b1,A.aW,A.aC,A.aD])
r(A.ab,A.E)
q(A.J,[A.aA,A.aB,A.b_,A.bW,A.bY,A.bv,A.bu,A.bG,A.bp,A.bK,A.bz,A.bg,A.bj,A.c0,A.c1])
q(A.b_,[A.aX,A.a0])
r(A.bX,A.aB)
q(A.aO,[A.a9,A.S])
r(A.ag,A.S)
r(A.ah,A.ag)
r(A.aa,A.ah)
r(A.aP,A.aa)
r(A.ak,A.b5)
q(A.aA,[A.bw,A.bx,A.bM,A.bL,A.bB,A.bC,A.bF,A.bE,A.bD,A.bq,A.bS,A.bJ])
r(A.b9,A.an)
q(A.B,[A.ac,A.aF])
q(A.j,[A.x,A.T])
r(A.o,A.x)
q(A.o,[A.c,A.b])
q(A.c,[A.aw,A.ax,A.I,A.aE,A.L,A.aU])
r(A.by,A.aY)
r(A.b6,A.aZ)
s(A.ag,A.N)
s(A.ah,A.a3)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Y:"double",A:"num",D:"String",bT:"bool",t:"Null",C:"List"},mangledNames:{},types:["~()","t()","~(~())","~(a)","~(A)","@(@)","@(@,D)","@(D)","t(@)","t(~())","v<@>(@)","~(b0)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.e1(v.typeUniverse,JSON.parse('{"aS":"M","ae":"M","w":"M","eV":"a","eZ":"a","eU":"b","f_":"b","eW":"c","f1":"c","f0":"x","eY":"x","aH":{"bT":[]},"k":{"C":["1"],"a5":["1"]},"bm":{"k":["1"],"C":["1"],"a5":["1"]},"a7":{"Y":[],"A":[]},"a6":{"Y":[],"l":[],"A":[]},"aJ":{"Y":[],"A":[]},"R":{"D":[]},"aM":{"e":[]},"ab":{"E":[],"e":[]},"aL":{"e":[]},"b2":{"e":[]},"ai":{"aV":[]},"J":{"K":[]},"aA":{"K":[]},"aB":{"K":[]},"b_":{"K":[]},"aX":{"K":[]},"a0":{"K":[]},"aT":{"e":[]},"a9":{"du":[]},"S":{"aK":["1"]},"aa":{"N":["l"],"aK":["l"],"C":["l"],"a5":["l"],"a3":["l"]},"aP":{"N":["l"],"aK":["l"],"C":["l"],"a5":["l"],"a3":["l"],"N.E":"l"},"b5":{"e":[]},"ak":{"E":[],"e":[]},"v":{"a4":["1"]},"aj":{"b0":[]},"a_":{"e":[]},"an":{"cH":[]},"b9":{"an":[],"cH":[]},"Y":{"A":[]},"l":{"A":[]},"C":{"a5":["1"]},"az":{"e":[]},"E":{"e":[]},"aQ":{"e":[]},"B":{"e":[]},"ac":{"e":[]},"aF":{"e":[]},"b3":{"e":[]},"b1":{"e":[]},"aW":{"e":[]},"aC":{"e":[]},"aR":{"e":[]},"ad":{"e":[]},"aD":{"e":[]},"ba":{"aV":[]},"c":{"o":[],"j":[]},"aw":{"o":[],"j":[]},"ax":{"o":[],"j":[]},"I":{"o":[],"j":[]},"o":{"j":[]},"aE":{"o":[],"j":[]},"L":{"o":[],"j":[]},"x":{"j":[]},"aU":{"o":[],"j":[]},"T":{"j":[]},"by":{"aY":["1"]},"b":{"o":[],"j":[]}}'))
A.e0(v.typeUniverse,JSON.parse('{"S":1,"aZ":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.Z
return{n:s("a_"),Q:s("e"),z:s("a"),Z:s("K"),d:s("a4<@>"),s:s("k<D>"),u:s("k<Y>"),b:s("k<@>"),T:s("aI"),g:s("w"),D:s("aK<@>"),h:s("a8"),P:s("t"),K:s("i"),l:s("aV"),N:s("D"),p:s("b0"),j:s("E"),B:s("ae"),c:s("v<@>"),a:s("v<l>"),v:s("bT"),m:s("bT(i)"),i:s("Y"),A:s("@"),O:s("@()"),y:s("@(i)"),C:s("@(i,aV)"),S:s("l"),G:s("0&*"),_:s("i*"),R:s("a4<t>?"),X:s("i?"),F:s("af<@,@>?"),o:s("@(a)?"),Y:s("~()?"),t:s("~(a)?"),H:s("A"),q:s("~"),M:s("~()"),e:s("~(b0)"),f:s("~(A)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.d=A.I.prototype
B.e=A.a1.prototype
B.z=A.L.prototype
B.A=J.Q.prototype
B.a=J.k.prototype
B.b=J.a6.prototype
B.h=J.a7.prototype
B.f=J.R.prototype
B.B=J.w.prototype
B.C=J.r.prototype
B.o=A.a9.prototype
B.p=J.aS.prototype
B.j=J.ae.prototype
B.k=A.T.prototype
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.q=function() {
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
B.w=function(getTagFallback) {
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
B.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.t=function(hooks) {
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
B.v=function(hooks) {
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
B.u=function(hooks) {
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
B.m=function(hooks) { return hooks; }

B.x=new A.aR()
B.c=new A.b9()
B.y=new A.ba()
B.n=new A.a2(6e8)
B.E=A.q(s(["#ee0505","#a10303"]),t.s)
B.F=A.q(s(["#0a0a0a","#2b2b2b"]),t.s)
B.D=A.q(s(["#6d0202","#850303"]),t.s)
B.i=A.q(s([B.E,B.F,B.D]),A.Z("k<C<D>>"))})();(function staticFields(){$.bI=null
$.cu=null
$.ct=null
$.d4=null
$.d2=null
$.d7=null
$.bU=null
$.bZ=null
$.cj=null
$.V=null
$.ao=null
$.ap=null
$.cg=!1
$.h=B.c
$.ar=A.q([],A.Z("k<i>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"eX","db",()=>A.eF("_$dart_dartClosure"))
s($,"f3","dc",()=>A.y(A.bt({
toString:function(){return"$receiver$"}})))
s($,"f4","dd",()=>A.y(A.bt({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"f5","de",()=>A.y(A.bt(null)))
s($,"f6","df",()=>A.y(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"f9","di",()=>A.y(A.bt(void 0)))
s($,"fa","dj",()=>A.y(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"f8","dh",()=>A.y(A.cF(null)))
s($,"f7","dg",()=>A.y(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"fc","dl",()=>A.y(A.cF(void 0)))
s($,"fb","dk",()=>A.y(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"fd","co",()=>A.dJ())
s($,"f2","cn",()=>{var r=new A.bH(new DataView(new ArrayBuffer(8)))
r.a7()
return r})
s($,"ft","dn",()=>{var r=A.cl("#countdown")
r.toString
return r})
s($,"fr","cp",()=>{var r=A.cl("#canvas")
r.toString
return A.Z("I").a(r)})
s($,"fs","dm",()=>B.d.gaj($.cp()))
s($,"fq","c3",()=>{var r,q,p,o,n=$.dm(),m=$.cp(),l=t.s,k=A.q(["#0a0a0a","#0a0a0a"],l)
l=A.q(["#0a0a0a","#0a0a0a"],l)
r=A.eQ(55,70)
q=A.Z("k<l>")
p=A.q([12,70],q)
q=A.q([1,120],q)
o=A.q([],A.Z("k<aG>"))
B.d.sa_(m,A.da().innerWidth)
B.d.sU(m,A.da().innerHeight)
return new A.bf(k,l,r,p,q,n,m,o)})
s($,"fw","dp",()=>{var r=A.cl("#twitch-chat")
r.toString
return A.Z("L").a(r)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.Q,CanvasGradient:J.r,DOMError:J.r,MediaError:J.r,NavigatorUserMediaError:J.r,OverconstrainedError:J.r,PositionError:J.r,GeolocationPositionError:J.r,ArrayBufferView:A.aO,DataView:A.a9,Uint8Array:A.aP,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aw,HTMLAreaElement:A.ax,HTMLCanvasElement:A.I,CanvasRenderingContext2D:A.a1,DOMException:A.bk,Element:A.o,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.j,HTMLFormElement:A.aE,HTMLIFrameElement:A.L,Location:A.a8,Document:A.x,HTMLDocument:A.x,Node:A.x,HTMLSelectElement:A.aU,Window:A.T,DOMWindow:A.T,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,DataView:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,HTMLIFrameElement:true,Location:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.S.$nativeSuperclassTag="ArrayBufferView"
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.ah.$nativeSuperclassTag="ArrayBufferView"
A.aa.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.eN
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=incoming.dart.js.map
