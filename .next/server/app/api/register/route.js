(()=>{var e={};e.id=661,e.ids=[661],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55511:e=>{"use strict";e.exports=require("crypto")},91928:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>h,routeModule:()=>l,serverHooks:()=>w,workAsyncStorage:()=>x,workUnitAsyncStorage:()=>m});var s={};t.r(s),t.d(s,{POST:()=>g});var o=t(42706),n=t(28203),a=t(45994),i=t(81755),u=t(53253),p=t(39187),c=t(58964),d=t.n(c);async function g(e){try{let{name:r,email:t,password:s}=await e.json(),o=await d().hash(s,10);return await (0,i.x)(),await u.A.create({name:r,email:t,password:o}),p.NextResponse.json({message:"User is registered."},{status:201})}catch(e){return p.NextResponse.json({message:"There was an error while registering the user."},{status:500})}}let l=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/register/route",pathname:"/api/register",filename:"route",bundlePath:"app/api/register/route"},resolvedPagePath:"C:\\Users\\Dell\\Desktop\\studentinfosystem\\app\\api\\register\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:x,workUnitAsyncStorage:m,serverHooks:w}=l;function h(){return(0,a.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:m})}},96487:()=>{},78335:()=>{},81755:(e,r,t)=>{"use strict";t.d(r,{x:()=>n});var s=t(56037),o=t.n(s);let n=async()=>{try{await o().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB")}catch(e){console.log("Error connecting to MongoDB: ",e)}}},53253:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var s=t(56037),o=t.n(s);let n=new s.Schema({name:{type:String,required:!0},email:{type:String,required:!0},password:{type:String,required:!0}},{timestamps:!0}),a=s.models.User||o().model("User",n)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,452,964],()=>t(91928));module.exports=s})();