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
a[c]=function(){a[c]=function(){A.eD(b)}
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
if(a[b]!==s)A.eE(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ca(b)
return new s(c,this)}:function(){if(s===null)s=A.ca(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ca(a).prototype
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
a(hunkHelpers,v,w,$)}var A={c_:function c_(){},
c9(a,b,c){return a},
cr(){return new A.aR("No element")},
aI:function aI(a){this.a=a},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a_:function a_(){},
d0(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fh(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.D.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b9(a)
return s},
bh(a){return A.du(a)},
du(a){var s,r,q,p,o
if(a instanceof A.i)return A.o(A.ap(a),null)
s=J.b8(a)
if(s===B.v||s===B.z||t.B.b(a)){r=B.i(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.o(A.ap(a),null)},
bS(a,b){if(a==null)J.ci(a)
throw A.d(A.eo(a,b))},
eo(a,b){var s,r="index",q=null
if(!A.cN(b))return new A.z(!0,b,r,q)
s=A.bI(J.ci(a))
if(b<0||b>=s)return A.ds(b,a,r,q,s)
return new A.a8(q,q,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.aM()
s=new Error()
s.dartException=a
r=A.eF
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
eF(){return J.b9(this.dartException)},
ce(a){throw A.d(a)},
d_(a){throw A.d(A.cp(a))},
w(a){var s,r,q,p,o,n
a=A.eB(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.p([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bl(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bm(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
cv(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
c0(a,b){var s=b==null,r=s?null:b.method
return new A.aH(a,r,s?null:b.receiver)},
ar(a){if(a==null)return new A.bg(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.N(a,a.dartException)
return A.ej(a)},
N(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ej(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.w.a4(r,16)&8191)===10)switch(q){case 438:return A.N(a,A.c0(A.n(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.n(s)
return A.N(a,new A.a7(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.d3()
n=$.d4()
m=$.d5()
l=$.d6()
k=$.d9()
j=$.da()
i=$.d8()
$.d7()
h=$.dc()
g=$.db()
f=o.j(s)
if(f!=null)return A.N(a,A.c0(A.b7(s),f))
else{f=n.j(s)
if(f!=null){f.method="call"
return A.N(a,A.c0(A.b7(s),f))}else{f=m.j(s)
if(f==null){f=l.j(s)
if(f==null){f=k.j(s)
if(f==null){f=j.j(s)
if(f==null){f=i.j(s)
if(f==null){f=l.j(s)
if(f==null){f=h.j(s)
if(f==null){f=g.j(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.b7(s)
return A.N(a,new A.a7(s,f==null?e:f.method))}}}return A.N(a,new A.aX(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.a9()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.N(a,new A.z(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.a9()
return a},
ao(a){var s
if(a==null)return new A.ae(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.ae(a)},
ew(a,b,c,d,e,f){t.Z.a(a)
switch(A.bI(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bt("Unsupported number of arguments for wrapped closure"))},
an(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ew)
a.$identity=s
return s},
dp(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.aS().constructor.prototype):Object.create(new A.Y(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.co(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.dk(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.co(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
dk(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dh)}throw A.d("Error in functionType of tearoff")},
dl(a,b,c,d){var s=A.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
co(a,b,c,d){var s,r
if(c)return A.dn(a,b,d)
s=b.length
r=A.dl(s,d,a,b)
return r},
dm(a,b,c,d){var s=A.cn,r=A.di
switch(b?-1:a){case 0:throw A.d(new A.aO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
dn(a,b,c){var s,r
if($.cl==null)$.cl=A.ck("interceptor")
if($.cm==null)$.cm=A.ck("receiver")
s=b.length
r=A.dm(s,c,a,b)
return r},
ca(a){return A.dp(a)},
dh(a,b){return A.bG(v.typeUniverse,A.ap(a.a),b)},
cn(a){return a.a},
di(a){return a.b},
ck(a){var s,r,q,p=new A.Y("receiver","interceptor"),o=J.dt(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.bX("Field name "+a+" not found.",null))},
eD(a){throw A.d(new A.az(a))},
er(a){return v.getIsolateTag(a)},
fg(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ey(a){var s,r,q,p,o,n=A.b7($.cV.$1(a)),m=$.bN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bR[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dU($.cT.$2(a,n))
if(q!=null){m=$.bN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bR[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.bV(s)
$.bN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.bR[n]=s
return s}if(p==="-"){o=A.bV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.cX(a,s)
if(p==="*")throw A.d(A.cw(n))
if(v.leafTags[n]===true){o=A.bV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.cX(a,s)},
cX(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cd(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
bV(a){return J.cd(a,!1,null,!!a.$iaG)},
eA(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.bV(s)
else return J.cd(s,c,null,null)},
eu(){if(!0===$.cc)return
$.cc=!0
A.ev()},
ev(){var s,r,q,p,o,n,m,l
$.bN=Object.create(null)
$.bR=Object.create(null)
A.et()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.cY.$1(o)
if(n!=null){m=A.eA(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
et(){var s,r,q,p,o,n,m=B.m()
m=A.U(B.n,A.U(B.o,A.U(B.j,A.U(B.j,A.U(B.p,A.U(B.q,A.U(B.r(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.cV=new A.bO(p)
$.cT=new A.bP(o)
$.cY=new A.bQ(n)},
U(a,b){return a(b)||b},
eB(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bl:function bl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a7:function a7(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a){this.a=a},
bg:function bg(a){this.a=a},
ae:function ae(a){this.a=a
this.b=null},
I:function I(){},
aw:function aw(){},
ax:function ax(){},
aV:function aV(){},
aS:function aS(){},
Y:function Y(a,b){this.a=a
this.b=b},
aO:function aO(a){this.a=a},
bO:function bO(a){this.a=a},
bP:function bP(a){this.a=a},
bQ:function bQ(a){this.a=a},
aK:function aK(){},
a5:function a5(){},
Q:function Q(){},
a6:function a6(){},
aL:function aL(){},
ac:function ac(){},
ad:function ad(){},
ct(a,b){var s=b.c
return s==null?b.c=A.c4(a,b.y,!0):s},
cs(a,b){var s=b.c
return s==null?b.c=A.ag(a,"a0",[b.y]):s},
cu(a){var s=a.x
if(s===6||s===7||s===8)return A.cu(a.y)
return s===11||s===12},
dv(a){return a.at},
W(a){return A.c5(v.typeUniverse,a,!1)},
G(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.G(a,s,a0,a1)
if(r===s)return b
return A.cF(a,r,!0)
case 7:s=b.y
r=A.G(a,s,a0,a1)
if(r===s)return b
return A.c4(a,r,!0)
case 8:s=b.y
r=A.G(a,s,a0,a1)
if(r===s)return b
return A.cE(a,r,!0)
case 9:q=b.z
p=A.al(a,q,a0,a1)
if(p===q)return b
return A.ag(a,b.y,p)
case 10:o=b.y
n=A.G(a,o,a0,a1)
m=b.z
l=A.al(a,m,a0,a1)
if(n===o&&l===m)return b
return A.c2(a,n,l)
case 11:k=b.y
j=A.G(a,k,a0,a1)
i=b.z
h=A.eg(a,i,a0,a1)
if(j===k&&h===i)return b
return A.cD(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.al(a,g,a0,a1)
o=b.y
n=A.G(a,o,a0,a1)
if(f===g&&n===o)return b
return A.c3(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.bc("Attempted to substitute unexpected RTI kind "+c))}},
al(a,b,c,d){var s,r,q,p,o=b.length,n=A.bH(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.G(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
eh(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.bH(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.G(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
eg(a,b,c,d){var s,r=b.a,q=A.al(a,r,c,d),p=b.b,o=A.al(a,p,c,d),n=b.c,m=A.eh(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.b2()
s.a=q
s.b=o
s.c=m
return s},
p(a,b){a[v.arrayRti]=b
return a},
en(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.es(s)
return a.$S()}return null},
cW(a,b){var s
if(A.cu(b))if(a instanceof A.I){s=A.en(a)
if(s!=null)return s}return A.ap(a)},
ap(a){var s
if(a instanceof A.i){s=a.$ti
return s!=null?s:A.c7(a)}if(Array.isArray(a))return A.c6(a)
return A.c7(J.b8(a))},
c6(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
fc(a){var s=a.$ti
return s!=null?s:A.c7(a)},
c7(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.e1(a,s)},
e1(a,b){var s=a instanceof A.I?a.__proto__.__proto__.constructor:b,r=A.dR(v.typeUniverse,s.name)
b.$ccache=r
return r},
es(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c5(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
e0(a){var s,r,q,p,o=this
if(o===t.K)return A.S(o,a,A.e5)
if(!A.x(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.S(o,a,A.e9)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.cN
else if(r===t.i||r===t.H)q=A.e4
else if(r===t.N)q=A.e6
else q=r===t.v?A.cL:null
if(q!=null)return A.S(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.ex)){o.r="$i"+p
if(p==="B")return A.S(o,a,A.e3)
return A.S(o,a,A.e7)}}else if(s===7)return A.S(o,a,A.dZ)
return A.S(o,a,A.dX)},
S(a,b,c){a.b=c
return a.b(b)},
e_(a){var s,r=this,q=A.dW
if(!A.x(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.dV
else if(r===t.K)q=A.dT
else{s=A.aq(r)
if(s)q=A.dY}r.a=q
return r.a(a)},
bJ(a){var s,r=a.x
if(!A.x(a))if(!(a===t._))if(!(a===t.G))if(r!==7)s=r===8&&A.bJ(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
dX(a){var s=this
if(a==null)return A.bJ(s)
return A.f(v.typeUniverse,A.cW(a,s),null,s,null)},
dZ(a){if(a==null)return!0
return this.y.b(a)},
e7(a){var s,r=this
if(a==null)return A.bJ(r)
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.b8(a)[s]},
e3(a){var s,r=this
if(a==null)return A.bJ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.b8(a)[s]},
dW(a){var s,r=this
if(a==null){s=A.aq(r)
if(s)return a}else if(r.b(a))return a
A.cJ(a,r)},
dY(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.cJ(a,s)},
cJ(a,b){throw A.d(A.dH(A.cy(a,A.cW(a,b),A.o(b,null))))},
cy(a,b,c){var s=A.be(a)
return s+": type '"+A.o(b==null?A.ap(a):b,null)+"' is not a subtype of type '"+c+"'"},
dH(a){return new A.af("TypeError: "+a)},
m(a,b){return new A.af("TypeError: "+A.cy(a,null,b))},
e5(a){return a!=null},
dT(a){if(a!=null)return a
throw A.d(A.m(a,"Object"))},
e9(a){return!0},
dV(a){return a},
cL(a){return!0===a||!1===a},
f1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.m(a,"bool"))},
f3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.m(a,"bool"))},
f2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.m(a,"bool?"))},
f4(a){if(typeof a=="number")return a
throw A.d(A.m(a,"double"))},
f6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"double"))},
f5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"double?"))},
cN(a){return typeof a=="number"&&Math.floor(a)===a},
bI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.m(a,"int"))},
f8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.m(a,"int"))},
f7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.m(a,"int?"))},
e4(a){return typeof a=="number"},
cI(a){if(typeof a=="number")return a
throw A.d(A.m(a,"num"))},
fa(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"num"))},
f9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"num?"))},
e6(a){return typeof a=="string"},
b7(a){if(typeof a=="string")return a
throw A.d(A.m(a,"String"))},
fb(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.m(a,"String"))},
dU(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.m(a,"String?"))},
ed(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.o(a[q],b)
return s},
cK(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.p([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.E(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.bS(a5,j)
m=B.x.k(m+l,a5[j])
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
if(l===9){p=A.ei(a.y)
o=a.z
return o.length>0?p+("<"+A.ed(o,b)+">"):p}if(l===11)return A.cK(a,b,null)
if(l===12)return A.cK(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.bS(b,n)
return b[n]}return"?"},
ei(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
dS(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
dR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c5(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ah(a,5,"#")
q=A.bH(s)
for(p=0;p<s;++p)q[p]=r
o=A.ag(a,b,q)
n[b]=o
return o}else return m},
dP(a,b){return A.cG(a.tR,b)},
dO(a,b){return A.cG(a.eT,b)},
c5(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.cC(A.cA(a,null,b,c))
r.set(b,s)
return s},
bG(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.cC(A.cA(a,b,c,!0))
q.set(c,r)
return r},
dQ(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.c2(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
F(a,b){b.a=A.e_
b.b=A.e0
return b},
ah(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.t(null,null)
s.x=b
s.at=c
r=A.F(a,s)
a.eC.set(c,r)
return r},
cF(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.dM(a,b,r,c)
a.eC.set(r,s)
return s},
dM(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.x(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.t(null,null)
q.x=6
q.y=b
q.at=c
return A.F(a,q)},
c4(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.dL(a,b,r,c)
a.eC.set(r,s)
return s},
dL(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.x(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aq(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.aq(q.y))return q
else return A.ct(a,b)}}p=new A.t(null,null)
p.x=7
p.y=b
p.at=c
return A.F(a,p)},
cE(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.dJ(a,b,r,c)
a.eC.set(r,s)
return s},
dJ(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.x(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ag(a,"a0",[b])
else if(b===t.P||b===t.T)return t.R}q=new A.t(null,null)
q.x=8
q.y=b
q.at=c
return A.F(a,q)},
dN(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.t(null,null)
s.x=13
s.y=b
s.at=q
r=A.F(a,s)
a.eC.set(q,r)
return r},
b6(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
dI(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
ag(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.b6(c)+">"
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
c2(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.b6(r)+">")
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
cD(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.b6(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.b6(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.dI(i)+"}"}r=n+(g+")")
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
c3(a,b,c,d){var s,r=b.at+("<"+A.b6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.dK(a,b,c,r,d)
a.eC.set(r,s)
return s},
dK(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.bH(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.G(a,b,r,0)
m=A.al(a,c,r,0)
return A.c3(a,n,m,c!==m)}}l=new A.t(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.F(a,l)},
cA(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cC(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.dC(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.cB(a,r,h,g,!1)
else if(q===46)r=A.cB(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.E(a.u,a.e,g.pop()))
break
case 94:g.push(A.dN(a.u,g.pop()))
break
case 35:g.push(A.ah(a.u,5,"#"))
break
case 64:g.push(A.ah(a.u,2,"@"))
break
case 126:g.push(A.ah(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.c1(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.ag(p,n,o))
else{m=A.E(p,a.e,n)
switch(m.x){case 11:g.push(A.c3(p,m,o,a.n))
break
default:g.push(A.c2(p,m,o))
break}}break
case 38:A.dD(a,g)
break
case 42:p=a.u
g.push(A.cF(p,A.E(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.c4(p,A.E(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.cE(p,A.E(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.b2()
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
A.c1(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.cD(p,A.E(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.c1(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.dF(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.E(a.u,a.e,i)},
dC(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
cB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.dS(s,o.y)[p]
if(n==null)A.ce('No "'+p+'" in "'+A.dv(o)+'"')
d.push(A.bG(s,o,n))}else d.push(p)
return m},
dD(a,b){var s=b.pop()
if(0===s){b.push(A.ah(a.u,1,"0&"))
return}if(1===s){b.push(A.ah(a.u,4,"1&"))
return}throw A.d(A.bc("Unexpected extended operation "+A.n(s)))},
E(a,b,c){if(typeof c=="string")return A.ag(a,c,a.sEA)
else if(typeof c=="number")return A.dE(a,b,c)
else return c},
c1(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.E(a,b,c[s])},
dF(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.E(a,b,c[s])},
dE(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.bc("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.bc("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.x(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.x(b))return!1
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
if(p===6){s=A.ct(a,d)
return A.f(a,b,c,s,e)}if(r===8){if(!A.f(a,b.y,c,d,e))return!1
return A.f(a,A.cs(a,b),c,d,e)}if(r===7){s=A.f(a,t.P,c,d,e)
return s&&A.f(a,b.y,c,d,e)}if(p===8){if(A.f(a,b,c,d.y,e))return!0
return A.f(a,b,c,A.cs(a,d),e)}if(p===7){s=A.f(a,b,c,t.P,e)
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
if(!A.f(a,k,c,j,e)||!A.f(a,j,e,k,c))return!1}return A.cM(a,b.y,c,d.y,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.cM(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.e2(a,b,c,d,e)}return!1},
cM(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
e2(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bG(a,b,r[o])
return A.cH(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.cH(a,n,null,c,m,e)},
cH(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.f(a,r,d,q,f))return!1}return!0},
aq(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.x(a))if(r!==7)if(!(r===6&&A.aq(a.y)))s=r===8&&A.aq(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ex(a){var s
if(!A.x(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
x(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
cG(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
bH(a){return a>0?new Array(a):v.typeUniverse.sEA},
t:function t(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
b2:function b2(){this.c=this.b=this.a=null},
b0:function b0(){},
af:function af(a){this.a=a},
dx(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ek()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.an(new A.bo(q),1)).observe(s,{childList:true})
return new A.bn(q,s,r)}else if(self.setImmediate!=null)return A.el()
return A.em()},
dy(a){self.scheduleImmediate(A.an(new A.bp(t.M.a(a)),0))},
dz(a){self.setImmediate(A.an(new A.bq(t.M.a(a)),0))},
dA(a){t.M.a(a)
A.dG(0,a)},
dG(a,b){var s=new A.bE()
s.Y(a,b)
return s},
bY(a,b){var s=A.c9(a,"error",t.K)
return new A.X(s,b==null?A.dg(a):b)},
dg(a){var s
if(t.Q.b(a)){s=a.gA()
if(s!=null)return s}return B.t},
dB(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.L()
b.B(a)
A.b3(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.K(q)}},
b3(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.bK(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.b3(c.a,b)
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
A.bK(i.a,i.b)
return}f=$.h
if(f!==g)$.h=g
else f=null
b=b.c
if((b&15)===8)new A.by(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bx(p,i).$0()}else if((b&2)!==0)new A.bw(c,p).$0()
if(f!=null)$.h=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("a0<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.t(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.dB(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.t(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
eb(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.cj(a,"onError",u.c))},
ea(){var s,r
for(s=$.T;s!=null;s=$.T){$.ak=null
r=s.b
$.T=r
if(r==null)$.aj=null
s.a.$0()}},
ef(){$.c8=!0
try{A.ea()}finally{$.ak=null
$.c8=!1
if($.T!=null)$.cg().$1(A.cU())}},
cR(a){var s=new A.b_(a),r=$.aj
if(r==null){$.T=$.aj=s
if(!$.c8)$.cg().$1(A.cU())}else $.aj=r.b=s},
ee(a){var s,r,q,p=$.T
if(p==null){A.cR(a)
$.ak=$.aj
return}s=new A.b_(a)
r=$.ak
if(r==null){s.b=p
$.T=$.ak=s}else{q=r.b
s.b=q
$.ak=r.b=s
if(q==null)$.aj=s}},
bK(a,b){A.ee(new A.bL(a,b))},
cO(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
cP(a,b,c,d,e,f,g){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
ec(a,b,c,d,e,f,g,h,i){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
cQ(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.a5(d)
A.cR(d)},
bo:function bo(a){this.a=a},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a){this.a=a},
bq:function bq(a){this.a=a},
bE:function bE(){},
bF:function bF(a,b){this.a=a
this.b=b},
X:function X(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c,d,e){var _=this
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
bu:function bu(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a){this.a=a},
bx:function bx(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.b=b},
b_:function b_(a){this.a=a
this.b=null},
aT:function aT(){},
bi:function bi(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
aU:function aU(){},
ai:function ai(){},
bL:function bL(a,b){this.a=a
this.b=b},
b4:function b4(){},
bC:function bC(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
cq(a,b,c){var s,r
if(A.e8(a))return b+"..."+c
s=new A.bk(b)
B.a.E($.am,a)
try{r=s
r.a=A.dw(r.a,a,", ")}finally{if(0>=$.am.length)return A.bS($.am,-1)
$.am.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
e8(a){var s,r
for(s=$.am.length,r=0;r<s;++r)if(a===$.am[r])return!0
return!1},
M:function M(){},
dq(a){if(a instanceof A.I)return a.h(0)
return"Instance of '"+A.bh(a)+"'"},
dr(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
dw(a,b,c){var s=J.df(b)
if(!s.v())return a
if(c.length===0){do a+=A.n(s.gu())
while(s.v())}else{a+=A.n(s.gu())
for(;s.v();)a=a+c+A.n(s.gu())}return a},
be(a){if(typeof a=="number"||A.cL(a)||a==null)return J.b9(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dq(a)},
bc(a){return new A.av(a)},
bX(a,b){return new A.z(!1,null,b,a)},
cj(a,b,c){return new A.z(!0,a,b,c)},
ds(a,b,c,d,e){return new A.aB(e,!0,a,c,"Index out of range")},
aZ(a){return new A.aY(a)},
cw(a){return new A.aW(a)},
cp(a){return new A.ay(a)},
e:function e(){},
av:function av(a){this.a=a},
D:function D(){},
aM:function aM(){},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aB:function aB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aY:function aY(a){this.a=a},
aW:function aW(a){this.a=a},
aR:function aR(a){this.a=a},
ay:function ay(a){this.a=a},
a9:function a9(){},
az:function az(a){this.a=a},
bt:function bt(a){this.a=a},
r:function r(){},
i:function i(){},
b5:function b5(){},
bk:function bk(a){this.a=a},
d1(){var s=window
s.toString
return s},
cz(a,b,c,d,e){var s=A.cS(new A.bs(c),t.z),r=s!=null
if(r&&!0){t.o.a(s)
if(r)B.h.Z(a,b,s,!1)}return new A.b1(a,b,s,!1,e.i("b1<0>"))},
cS(a,b){var s=$.h
if(s===B.b)return a
return s.a6(a,b)},
cZ(a){return document.querySelector(a)},
c:function c(){},
as:function as(){},
at:function at(){},
H:function H(){},
Z:function Z(){},
bd:function bd(){},
b:function b(){},
a:function a(){},
l:function l(){},
aA:function aA(){},
K:function K(){},
a4:function a4(){},
v:function v(){},
aP:function aP(){},
R:function R(){},
bZ:function bZ(a){this.$ti=a},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b1:function b1(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bs:function bs(a){this.a=a},
bA:function bA(a){this.a=a},
ba:function ba(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
bb:function bb(a){this.a=a},
ez(){var s,r
B.u.sU($.de(),"https://www.twitch.tv/embed/shalien/chat?darkpopout&parent="+A.n(B.a.gn(t.e.a(window.location).host.split(":"))))
$.bW().aa()
s=window
s.toString
B.h.R(s,new A.bT())
s=window
s.toString
r=t.t.a(new A.bU())
t.Y.a(null)
A.cz(s,"resize",r,!1,t.z)},
bT:function bT(){},
bU:function bU(){},
aC:function aC(a,b,c,d,e,f,g,h,i,j){var _=this
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
eE(a){return A.ce(new A.aI("Field '"+a+"' has been assigned during initialization."))},
eC(a,b){var s=$.cf().m(b)
if(typeof s!=="number")return s.k()
return s+a}},J={
cd(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cb(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cc==null){A.eu()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.cw("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bB
if(o==null)o=$.bB=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ey(a)
if(p!=null)return p
if(typeof a=="function")return B.y
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.bB
if(o==null)o=$.bB=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.f,enumerable:false,writable:true,configurable:true})
return B.f}return B.f},
dt(a,b){a.fixed$length=Array
return a},
b8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a2.prototype
return J.aF.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.aE.prototype
if(typeof a=="boolean")return J.aD.prototype
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.i)return a
return J.cb(a)},
ep(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.i)return a
return J.cb(a)},
eq(a){if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.i)return a
return J.cb(a)},
df(a){return J.eq(a).gO(a)},
ci(a){return J.ep(a).gl(a)},
b9(a){return J.b8(a).h(a)},
O:function O(){},
aD:function aD(){},
aE:function aE(){},
q:function q(){},
L:function L(){},
aN:function aN(){},
aa:function aa(){},
A:function A(){},
j:function j(a){this.$ti=a},
bf:function bf(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a3:function a3(){},
a2:function a2(){},
aF:function aF(){},
P:function P(){}},B={}
var w=[A,J,B]
var $={}
A.c_.prototype={}
J.O.prototype={
h(a){return"Instance of '"+A.bh(a)+"'"}}
J.aD.prototype={
h(a){return String(a)},
$ibM:1}
J.aE.prototype={
h(a){return"null"}}
J.q.prototype={}
J.L.prototype={
h(a){return String(a)}}
J.aN.prototype={}
J.aa.prototype={}
J.A.prototype={
h(a){var s=a[$.d2()]
if(s==null)return this.W(a)
return"JavaScript function for "+J.b9(s)},
$iJ:1}
J.j.prototype={
E(a,b){A.c6(a).c.a(b)
if(!!a.fixed$length)A.ce(A.aZ("add"))
a.push(b)},
gn(a){if(a.length>0)return a[0]
throw A.d(A.cr())},
gq(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cr())},
h(a){return A.cq(a,"[","]")},
gO(a){return new J.au(a,a.length,A.c6(a).i("au<1>"))},
gl(a){return a.length},
$ia1:1,
$iB:1}
J.bf.prototype={}
J.au.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
v(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.d_(q))
s=r.c
if(s>=p){r.sJ(null)
return!1}r.sJ(q[s]);++r.c
return!0},
sJ(a){this.d=this.$ti.i("1?").a(a)}}
J.a3.prototype={
a8(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aZ(""+a+".floor()"))},
S(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aZ(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a4(a,b){var s
if(a>0)s=this.a3(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a3(a,b){return b>31?0:a>>>b},
$iV:1,
$iy:1}
J.a2.prototype={$ik:1}
J.aF.prototype={}
J.P.prototype={
k(a,b){return a+b},
h(a){return a},
gl(a){return a.length},
$iC:1}
A.aI.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.aJ.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
v(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.cp(q))
s=r.c
if(s>=p){r.sH(null)
return!1}r.sH(q[s]);++r.c
return!0},
sH(a){this.d=this.$ti.i("1?").a(a)}}
A.a_.prototype={}
A.bl.prototype={
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
A.a7.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.aH.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.aX.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bg.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ae.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaQ:1}
A.I.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.d0(r==null?"unknown":r)+"'"},
$iJ:1,
gai(){return this},
$C:"$1",
$R:1,
$D:null}
A.aw.prototype={$C:"$0",$R:0}
A.ax.prototype={$C:"$2",$R:2}
A.aV.prototype={}
A.aS.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.d0(s)+"'"}}
A.Y.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bh(this.a)+"'")}}
A.aO.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bO.prototype={
$1(a){return this.a(a)},
$S:5}
A.bP.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.bQ.prototype={
$1(a){return this.a(A.b7(a))},
$S:7}
A.aK.prototype={}
A.a5.prototype={
a0(a,b,c){return a.getUint32(b,c)},
a2(a,b,c,d){return a.setUint32(b,c,d)},
$idj:1}
A.Q.prototype={
gl(a){return a.length},
$iaG:1}
A.a6.prototype={$ia1:1,$iB:1}
A.aL.prototype={
gl(a){return a.length}}
A.ac.prototype={}
A.ad.prototype={}
A.t.prototype={
i(a){return A.bG(v.typeUniverse,this,a)},
p(a){return A.dQ(v.typeUniverse,this,a)}}
A.b2.prototype={}
A.b0.prototype={
h(a){return this.a}}
A.af.prototype={$iD:1}
A.bo.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.bn.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.bp.prototype={
$0(){this.a.$0()},
$S:2}
A.bq.prototype={
$0(){this.a.$0()},
$S:2}
A.bE.prototype={
Y(a,b){if(self.setTimeout!=null)self.setTimeout(A.an(new A.bF(this,b),0),a)
else throw A.d(A.aZ("`setTimeout()` not found."))}}
A.bF.prototype={
$0(){this.b.$0()},
$S:0}
A.X.prototype={
h(a){return A.n(this.a)},
$ie:1,
gA(){return this.b}}
A.ab.prototype={
ab(a){if((this.c&15)!==6)return!0
return this.b.b.G(t.m.a(this.d),a.a,t.v,t.K)},
a9(a){var s,r=this,q=r.e,p=null,o=t.A,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.ad(q,m,a.b,o,n,t.l)
else p=l.G(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.h.b(A.ar(s))){if((r.c&1)!==0)throw A.d(A.bX("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bX("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
ah(a,b,c){var s,r,q,p=this.$ti
p.p(c).i("1/(2)").a(a)
s=$.h
if(s===B.b){if(b!=null&&!t.C.b(b)&&!t.y.b(b))throw A.d(A.cj(b,"onError",u.c))}else{c.i("@<0/>").p(p.c).i("1(2)").a(a)
if(b!=null)b=A.eb(b,s)}r=new A.u(s,c.i("u<0>"))
q=b==null?1:3
this.I(new A.ab(r,q,a,b,p.i("@<1>").p(c).i("ab<1,2>")))
return r},
ag(a,b){return this.ah(a,null,b)},
B(a){this.a=a.a&30|this.a&1
this.c=a.c},
I(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.I(a)
return}r.B(s)}A.cQ(null,null,r.b,t.M.a(new A.bu(r,a)))}},
K(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.K(a)
return}m.B(n)}l.a=m.t(a)
A.cQ(null,null,m.b,t.M.a(new A.bv(l,m)))}},
L(){var s=t.F.a(this.c)
this.c=null
return this.t(s)},
t(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
$ia0:1}
A.bu.prototype={
$0(){A.b3(this.a,this.b)},
$S:0}
A.bv.prototype={
$0(){A.b3(this.b,this.a.a)},
$S:0}
A.by.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ac(t.O.a(q.d),t.A)}catch(p){s=A.ar(p)
r=A.ao(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.bY(s,r)
o.b=!0
return}if(l instanceof A.u&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.ag(new A.bz(n),t.A)
q.b=!1}},
$S:0}
A.bz.prototype={
$1(a){return this.a},
$S:10}
A.bx.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.G(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ar(l)
r=A.ao(l)
q=this.a
q.c=A.bY(s,r)
q.b=!0}},
$S:0}
A.bw.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.ab(s)&&p.a.e!=null){p.c=p.a.a9(s)
p.b=!1}}catch(o){r=A.ar(o)
q=A.ao(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.bY(r,q)
n.b=!0}},
$S:0}
A.b_.prototype={}
A.aT.prototype={
gl(a){var s,r,q=this,p={},o=new A.u($.h,t.a)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bi(p,q))
t.Y.a(new A.bj(p,o))
A.cz(q.a,q.b,r,!1,s.c)
return o}}
A.bi.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bj.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.L()
r.c.a(q)
s.a=8
s.c=q
A.b3(s,p)},
$S:0}
A.aU.prototype={}
A.ai.prototype={$icx:1}
A.bL.prototype={
$0(){var s=this.a,r=this.b
A.c9(s,"error",t.K)
A.c9(r,"stackTrace",t.l)
A.dr(s,r)},
$S:0}
A.b4.prototype={
ae(a){var s,r,q
t.M.a(a)
try{if(B.b===$.h){a.$0()
return}A.cO(null,null,this,a,t.p)}catch(q){s=A.ar(q)
r=A.ao(q)
A.bK(t.K.a(s),t.l.a(r))}},
af(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.b===$.h){a.$1(b)
return}A.cP(null,null,this,a,b,t.p,c)}catch(q){s=A.ar(q)
r=A.ao(q)
A.bK(t.K.a(s),t.l.a(r))}},
a5(a){return new A.bC(this,t.M.a(a))},
a6(a,b){return new A.bD(this,b.i("~(0)").a(a),b)},
ac(a,b){b.i("0()").a(a)
if($.h===B.b)return a.$0()
return A.cO(null,null,this,a,b)},
G(a,b,c,d){c.i("@<0>").p(d).i("1(2)").a(a)
d.a(b)
if($.h===B.b)return a.$1(b)
return A.cP(null,null,this,a,b,c,d)},
ad(a,b,c,d,e,f){d.i("@<0>").p(e).p(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.h===B.b)return a.$2(b,c)
return A.ec(null,null,this,a,b,c,d,e,f)}}
A.bC.prototype={
$0(){return this.a.ae(this.b)},
$S:0}
A.bD.prototype={
$1(a){var s=this.c
return this.a.af(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.M.prototype={
gO(a){return new A.aJ(a,a.length,A.ap(a).i("aJ<M.E>"))},
h(a){return A.cq(a,"[","]")}}
A.e.prototype={
gA(){return A.ao(this.$thrownJsError)}}
A.av.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.be(s)
return"Assertion failed"}}
A.D.prototype={}
A.aM.prototype={
h(a){return"Throw of null."}}
A.z.prototype={
gD(){return"Invalid argument"+(!this.a?"(s)":"")},
gC(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gD()+q+o
if(!s.a)return n
return n+s.gC()+": "+A.be(s.b)}}
A.a8.prototype={
gD(){return"RangeError"},
gC(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.aB.prototype={
gD(){return"RangeError"},
gC(){if(A.bI(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.aY.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aW.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aR.prototype={
h(a){return"Bad state: "+this.a}}
A.ay.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.be(s)+"."}}
A.a9.prototype={
h(a){return"Stack Overflow"},
gA(){return null},
$ie:1}
A.az.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bt.prototype={
h(a){return"Exception: "+this.a}}
A.r.prototype={
h(a){return"null"}}
A.i.prototype={$ii:1,
h(a){return"Instance of '"+A.bh(this)+"'"},
toString(){return this.h(this)}}
A.b5.prototype={
h(a){return""},
$iaQ:1}
A.bk.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.as.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.at.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.H.prototype={
sN(a,b){a.height=b},
sT(a,b){a.width=b},
ga7(a){var s=a.getContext("2d")
s.toString
return s},
$iH:1}
A.Z.prototype={
sF(a,b){a.fillStyle=b},
sM(a,b){a.filter=b},
$iZ:1}
A.bd.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.b.prototype={
h(a){var s=a.localName
s.toString
return s}}
A.a.prototype={$ia:1}
A.l.prototype={
Z(a,b,c,d){return a.addEventListener(b,A.an(t.o.a(c),1),!1)},
$il:1}
A.aA.prototype={
gl(a){return a.length}}
A.K.prototype={
sU(a,b){a.src=b},
$iK:1}
A.a4.prototype={
h(a){var s=String(a)
s.toString
return s},
$ia4:1}
A.v.prototype={
h(a){var s=a.nodeValue
return s==null?this.V(a):s}}
A.aP.prototype={
gl(a){return a.length}}
A.R.prototype={
R(a,b){var s
t.f.a(b)
this.a_(a)
s=A.cS(b,t.H)
s.toString
return this.a1(a,s)},
a1(a,b){var s=a.requestAnimationFrame(A.an(t.f.a(b),1))
s.toString
return s},
a_(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.bZ.prototype={}
A.br.prototype={}
A.b1.prototype={}
A.bs.prototype={
$1(a){return this.a.$1(t.z.a(a))},
$S:3}
A.bA.prototype={
X(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.d(A.aZ("No source of cryptographically secure random numbers available."))},
m(a){var s,r,q,p,o,n,m,l,k,j=null
if(a<=0||a>4294967296)throw A.d(new A.a8(j,j,!1,j,j,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
B.k.a2(r,0,0,!1)
q=4-s
p=A.bI(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;!0;){m=r.buffer
m=new Uint8Array(m,q,s)
crypto.getRandomValues(m)
l=B.k.a0(r,0,!1)
if(n)return(l&o)>>>0
k=l%a
if(l-k+a<p)return k}}}
A.ba.prototype={
aa(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.r,a1=a.w,a2=a1.width
a2.toString
s=a1.height
s.toString
a0.clearRect(0,0,a2,s)
s=a.r
a2=a1.height
a2.toString
a0=a1.width
a0.toString
a0=s.createLinearGradient(0,a2,a0,0)
a0.toString
a2=a.b
a0.addColorStop(0,B.a.gn(a2))
a0.addColorStop(0,B.a.gq(a2))
a2=a.r;(a2&&B.d).sF(a2,a0)
a0=a.r
a2=a1.width
a2.toString
s=a1.height
s.toString
a0.fillRect(0,0,a2,s)
s=a.f
a2=a.e
a0=a.a
r=t.u
q=a.x
do{p=B.a.gn(s)
o=B.a.gq(s)
n=$.cf()
o=n.m(o)
if(typeof o!=="number")return o.k()
m=o+p
p=B.a.gn(a2)
o=n.m(B.a.gq(a2))
if(typeof o!=="number")return o.k()
l=o+p
p=a1.width
p.toString
p=n.m(p+100)
if(typeof p!=="number")return p.k()
k=p+-100
p=a1.height
p.toString
p=n.m(p+100)
if(typeof p!=="number")return p.k()
j=p+-100
p=n.m(299)
if(typeof p!=="number")return p.k()
i=B.e.a8(p/100)
if(!(i>=0&&i<3))return A.bS(a0,i)
h=B.a.gn(a0[i])
g=B.a.gq(a0[i])
a.r.beginPath()
p=a.r;(p&&B.d).sM(p,"blur("+l+"px)")
p=m/2
o=k-p
p=j-p
f=k+m
e=j+m
d=a.r.createLinearGradient(o,p,f,e)
d.addColorStop(0,h)
d.addColorStop(1,g)
c=a.r;(c&&B.d).sF(c,d)
a.r.fill()
a.r.arc(k,j,m,0,6.283185307179586,!1)
a.r.closePath()
c=n.m(99)
if(typeof c!=="number")return c.k()
b=B.e.S((c+-99)/100)
n=n.m(99)
if(typeof n!=="number")return n.k()
B.a.E(q,new A.aC(k,j,l,m,b,B.e.S((n+-99)/100),b,h,g,A.p([o,p,f,e],r)))}while(--a.d>=0)},
P(a){var s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=j.width
i.toString
s=j.height
s.toString
k.clearRect(0,0,i,s)
for(k=l.x,i=k.length,s=l.f,r=0;r<k.length;k.length===i||(0,A.d_)(k),++r){q=k[r]
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
p=l.r;(p&&B.d).sM(p,"blur("+q.c+"px)")
p=q.y
m=l.r.createLinearGradient(B.a.gn(p),p[1],p[2],B.a.gq(p))
m.addColorStop(0,q.w)
m.addColorStop(1,q.x)
p=l.r;(p&&B.d).sF(p,m)
l.r.arc(q.a,q.b,q.d,0,6.283185307179586,!1)
l.r.fill()
l.r.closePath()}k=window
k.toString
B.h.R(k,new A.bb(l))}}
A.bb.prototype={
$1(a){return this.a.P(A.cI(a))},
$S:4}
A.bT.prototype={
$1(a){A.cI(a)
return $.bW().P(a)},
$S:4}
A.bU.prototype={
$1(a){var s=$.bW(),r=s.w
B.c.sT(r,window.innerWidth)
B.c.sN(r,window.innerHeight)
r=r.getContext("2d")
r.toString
s.r=r
r.globalCompositeOperation="lighter"},
$S:3}
A.aC.prototype={};(function aliases(){var s=J.O.prototype
s.V=s.h
s=J.L.prototype
s.W=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"ek","dy",1)
s(A,"el","dz",1)
s(A,"em","dA",1)
r(A,"cU","ef",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.c_,J.O,J.au,A.e,A.aJ,A.a_,A.bl,A.bg,A.ae,A.I,A.t,A.b2,A.bE,A.X,A.ab,A.u,A.b_,A.aT,A.aU,A.ai,A.M,A.a9,A.bt,A.r,A.b5,A.bk,A.bZ,A.bA,A.ba,A.aC])
q(J.O,[J.aD,J.aE,J.q,J.j,J.a3,J.P,A.aK])
q(J.q,[J.L,A.l,A.Z,A.bd,A.a,A.a4])
q(J.L,[J.aN,J.aa,J.A])
r(J.bf,J.j)
q(J.a3,[J.a2,J.aF])
q(A.e,[A.aI,A.D,A.aH,A.aX,A.aO,A.b0,A.av,A.aM,A.z,A.aY,A.aW,A.aR,A.ay,A.az])
r(A.a7,A.D)
q(A.I,[A.aw,A.ax,A.aV,A.bO,A.bQ,A.bo,A.bn,A.bz,A.bi,A.bD,A.bs,A.bb,A.bT,A.bU])
q(A.aV,[A.aS,A.Y])
r(A.bP,A.ax)
q(A.aK,[A.a5,A.Q])
r(A.ac,A.Q)
r(A.ad,A.ac)
r(A.a6,A.ad)
r(A.aL,A.a6)
r(A.af,A.b0)
q(A.aw,[A.bp,A.bq,A.bF,A.bu,A.bv,A.by,A.bx,A.bw,A.bj,A.bL,A.bC])
r(A.b4,A.ai)
q(A.z,[A.a8,A.aB])
q(A.l,[A.v,A.R])
r(A.b,A.v)
r(A.c,A.b)
q(A.c,[A.as,A.at,A.H,A.aA,A.K,A.aP])
r(A.br,A.aT)
r(A.b1,A.aU)
s(A.ac,A.M)
s(A.ad,A.a_)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",V:"double",y:"num",C:"String",bM:"bool",r:"Null",B:"List"},mangledNames:{},types:["~()","~(~())","r()","~(a)","~(y)","@(@)","@(@,C)","@(C)","r(@)","r(~())","u<@>(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dP(v.typeUniverse,JSON.parse('{"aN":"L","aa":"L","A":"L","eH":"a","eL":"a","eG":"b","eM":"b","eQ":"b","eI":"c","eO":"c","eN":"v","eK":"v","aD":{"bM":[]},"j":{"B":["1"],"a1":["1"]},"bf":{"j":["1"],"B":["1"],"a1":["1"]},"a3":{"V":[],"y":[]},"a2":{"V":[],"k":[],"y":[]},"aF":{"V":[],"y":[]},"P":{"C":[]},"aI":{"e":[]},"a7":{"D":[],"e":[]},"aH":{"e":[]},"aX":{"e":[]},"ae":{"aQ":[]},"I":{"J":[]},"aw":{"J":[]},"ax":{"J":[]},"aV":{"J":[]},"aS":{"J":[]},"Y":{"J":[]},"aO":{"e":[]},"a5":{"dj":[]},"Q":{"aG":["1"]},"a6":{"M":["k"],"aG":["k"],"B":["k"],"a1":["k"],"a_":["k"]},"aL":{"M":["k"],"aG":["k"],"B":["k"],"a1":["k"],"a_":["k"],"M.E":"k"},"b0":{"e":[]},"af":{"D":[],"e":[]},"u":{"a0":["1"]},"X":{"e":[]},"ai":{"cx":[]},"b4":{"ai":[],"cx":[]},"V":{"y":[]},"k":{"y":[]},"B":{"a1":["1"]},"av":{"e":[]},"D":{"e":[]},"aM":{"e":[]},"z":{"e":[]},"a8":{"e":[]},"aB":{"e":[]},"aY":{"e":[]},"aW":{"e":[]},"aR":{"e":[]},"ay":{"e":[]},"a9":{"e":[]},"az":{"e":[]},"b5":{"aQ":[]},"c":{"l":[]},"as":{"l":[]},"at":{"l":[]},"H":{"l":[]},"b":{"l":[]},"aA":{"l":[]},"K":{"l":[]},"v":{"l":[]},"aP":{"l":[]},"R":{"l":[]},"br":{"aT":["1"]}}'))
A.dO(v.typeUniverse,JSON.parse('{"Q":1,"aU":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.W
return{n:s("X"),Q:s("e"),z:s("a"),Z:s("J"),d:s("a0<@>"),s:s("j<C>"),u:s("j<V>"),b:s("j<@>"),T:s("aE"),g:s("A"),D:s("aG<@>"),e:s("a4"),P:s("r"),K:s("i"),l:s("aQ"),N:s("C"),h:s("D"),B:s("aa"),c:s("u<@>"),a:s("u<k>"),v:s("bM"),m:s("bM(i)"),i:s("V"),A:s("@"),O:s("@()"),y:s("@(i)"),C:s("@(i,aQ)"),S:s("k"),G:s("0&*"),_:s("i*"),R:s("a0<r>?"),X:s("i?"),F:s("ab<@,@>?"),o:s("@(a)?"),Y:s("~()?"),t:s("~(a)?"),H:s("y"),p:s("~"),M:s("~()"),f:s("~(y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.c=A.H.prototype
B.d=A.Z.prototype
B.u=A.K.prototype
B.v=J.O.prototype
B.a=J.j.prototype
B.w=J.a2.prototype
B.e=J.a3.prototype
B.x=J.P.prototype
B.y=J.A.prototype
B.z=J.q.prototype
B.k=A.a5.prototype
B.l=J.aN.prototype
B.f=J.aa.prototype
B.h=A.R.prototype
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.m=function() {
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
B.r=function(getTagFallback) {
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
B.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.o=function(hooks) {
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
B.q=function(hooks) {
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
B.p=function(hooks) {
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
B.j=function(hooks) { return hooks; }

B.b=new A.b4()
B.t=new A.b5()
B.C=A.p(s(["#ae0505","#710303"]),t.s)
B.A=A.p(s(["#0a0a0a","#1b2b2b"]),t.s)
B.D=A.p(s(["#3d0202","#450303"]),t.s)
B.B=A.p(s([B.C,B.A,B.D]),A.W("j<B<C>>"))})();(function staticFields(){$.bB=null
$.cm=null
$.cl=null
$.cV=null
$.cT=null
$.cY=null
$.bN=null
$.bR=null
$.cc=null
$.T=null
$.aj=null
$.ak=null
$.c8=!1
$.h=B.b
$.am=A.p([],A.W("j<i>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"eJ","d2",()=>A.er("_$dart_dartClosure"))
s($,"eR","d3",()=>A.w(A.bm({
toString:function(){return"$receiver$"}})))
s($,"eS","d4",()=>A.w(A.bm({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"eT","d5",()=>A.w(A.bm(null)))
s($,"eU","d6",()=>A.w(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"eX","d9",()=>A.w(A.bm(void 0)))
s($,"eY","da",()=>A.w(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"eW","d8",()=>A.w(A.cv(null)))
s($,"eV","d7",()=>A.w(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"f_","dc",()=>A.w(A.cv(void 0)))
s($,"eZ","db",()=>A.w(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"f0","cg",()=>A.dx())
s($,"eP","cf",()=>{var r=new A.bA(new DataView(new ArrayBuffer(8)))
r.X()
return r})
s($,"fe","ch",()=>{var r=A.cZ("#canvas")
r.toString
return A.W("H").a(r)})
s($,"ff","dd",()=>B.c.ga7($.ch()))
s($,"fd","bW",()=>{var r,q,p,o,n=$.dd(),m=$.ch(),l=t.s,k=A.p(["#0a0a0a","#0a0a0a"],l)
l=A.p(["#0a0a0a","#0a0a0a"],l)
r=A.eC(55,70)
q=A.W("j<k>")
p=A.p([12,70],q)
q=A.p([1,120],q)
o=A.p([],A.W("j<aC>"))
B.c.sT(m,A.d1().innerWidth)
B.c.sN(m,A.d1().innerHeight)
return new A.ba(B.B,k,l,r,p,q,n,m,o)})
s($,"fi","de",()=>{var r=A.cZ("#twitch-chat")
r.toString
return A.W("K").a(r)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.O,CanvasGradient:J.q,DOMError:J.q,MediaError:J.q,NavigatorUserMediaError:J.q,OverconstrainedError:J.q,PositionError:J.q,GeolocationPositionError:J.q,ArrayBufferView:A.aK,DataView:A.a5,Uint8Array:A.aL,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.as,HTMLAreaElement:A.at,HTMLCanvasElement:A.H,CanvasRenderingContext2D:A.Z,DOMException:A.bd,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.l,HTMLFormElement:A.aA,HTMLIFrameElement:A.K,Location:A.a4,Document:A.v,HTMLDocument:A.v,Node:A.v,HTMLSelectElement:A.aP,Window:A.R,DOMWindow:A.R})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,DataView:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,HTMLIFrameElement:true,Location:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})
A.Q.$nativeSuperclassTag="ArrayBufferView"
A.ac.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.a6.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.ez
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=ending.dart.js.map
