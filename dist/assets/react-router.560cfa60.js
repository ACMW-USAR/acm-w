import{R as d,r as t}from"./react.ab7217f4.js";import{A as R,i as g,p as T,s as A}from"./@remix-run.85acbd0d.js";import{j as x}from"./framer-motion.2dffd613.js";/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b=t.exports.createContext(null),f=t.exports.createContext(null);function y(){return t.exports.useContext(f)!=null}const I="startTransition";d[I];function S(h){let{basename:v="/",children:P=null,location:e,navigationType:a=R.Pop,navigator:o,static:r=!1}=h;y()&&g(!1);let n=v.replace(/^\/*/,"/"),C=t.exports.useMemo(()=>({basename:n,navigator:o,static:r}),[n,o,r]);typeof e=="string"&&(e=T(e));let{pathname:i="/",search:s="",hash:l="",state:u=null,key:c="default"}=e,p=t.exports.useMemo(()=>{let m=A(i,n);return m==null?null:{location:{pathname:m,search:s,hash:l,state:u,key:c},navigationType:a}},[n,i,s,l,u,c,a]);return p==null?null:x(b.Provider,{value:C,children:x(f.Provider,{children:P,value:p})})}new Promise(()=>{});export{S as R};
