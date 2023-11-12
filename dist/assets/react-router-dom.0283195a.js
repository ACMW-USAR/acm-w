import{R,r}from"./react.ab7217f4.js";import{R as T}from"./react-router.560cfa60.js";import{c as b}from"./@remix-run.85acbd0d.js";import{j as v}from"./framer-motion.2dffd613.js";/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const x="startTransition",l=R[x];function I(t){let{basename:S,children:f,future:p,window:h}=t,s=r.exports.useRef();s.current==null&&(s.current=b({window:h,v5Compat:!0}));let e=s.current,[i,o]=r.exports.useState({action:e.action,location:e.location}),{v7_startTransition:n}=p||{},a=r.exports.useCallback(c=>{n&&l?l(()=>o(c)):o(c)},[o,n]);return r.exports.useLayoutEffect(()=>e.listen(a),[e,a]),v(T,{basename:S,children:f,location:i.location,navigationType:i.action,navigator:e})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(u||(u={}));var m;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{I as B};
