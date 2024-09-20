"use strict";(self.webpackChunkzhouweico_github_io=self.webpackChunkzhouweico_github_io||[]).push([[8066],{7455:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var t=i(4848),l=i(8453);const o={title:"AI CodeReview",authors:["zhouwei"],tags:["AI","CodeReview"]},s=void 0,r={permalink:"/blog/2024/09/02/ai-codereview",source:"@site/blog/2024-09-02-ai-codereview/index.md",title:"AI CodeReview",description:"AI \u4ee3\u7801\u5ba1\u67e5\u4e0e Gitlab MR \u96c6\u6210\uff0c\u9ad8\u6548\u667a\u80fd\u7684\u4ee3\u7801\u5ba1\u67e5\u89e3\u51b3\u65b9\u6848\u3002",date:"2024-09-02T00:00:00.000Z",tags:[{inline:!0,label:"AI",permalink:"/blog/tags/ai"},{inline:!0,label:"CodeReview",permalink:"/blog/tags/code-review"}],readingTime:4.055,hasTruncateMarker:!0,authors:[{name:"ZHOUWEI",title:"DevOps @ LBX",url:"https://zhouwei.co",page:{permalink:"/blog/authors/zhouwei"},email:"hi@zhouwei.co",socials:{x:"https://x.com/zhouweico",github:"https://github.com/zhouweico",newsletter:"https://zhouwei.co"},imageURL:"/img/logo.jpg",key:"zhouwei"}],frontMatter:{title:"AI CodeReview",authors:["zhouwei"],tags:["AI","CodeReview"]},unlisted:!1,nextItem:{title:"KubeCon + CloudNativeCon China",permalink:"/blog/2019/06/24/KubeCon-CloudNativeCon"}},c={authorsImageUrls:[void 0]},h=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u4ee3\u7801\u5ba1\u67e5\u539f\u7406",id:"\u4ee3\u7801\u5ba1\u67e5\u539f\u7406",level:2},{value:"\u63d0\u95ee\u8bcd",id:"\u63d0\u95ee\u8bcd",level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"AI \u4ee3\u7801\u5ba1\u67e5\u4e0e Gitlab MR \u96c6\u6210\uff0c\u9ad8\u6548\u667a\u80fd\u7684\u4ee3\u7801\u5ba1\u67e5\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u81ea\u52a8\u89e6\u53d1\u4e0e\u53ca\u65f6\u54cd\u5e94"}),"\n",(0,t.jsx)(n.p,{children:"\u5229\u7528Gitlab\u7684Webhook\u529f\u80fd\uff0c\u5b9e\u73b0\u4ee3\u7801\u63d0\u4ea4\u3001\u5408\u5e76\u8bf7\u6c42\u548c\u6807\u7b7e\u521b\u5efa\u7b49\u4e8b\u4ef6\u7684\u81ea\u52a8\u89e6\u53d1\u3002\u4e00\u65e6\u6709\u65b0\u7684\u4ee3\u7801\u63d0\u4ea4\uff0c\u7cfb\u7edf\u5373\u65f6\u54cd\u5e94\uff0c\u7acb\u5373\u542f\u52a8\u5ba1\u67e5\u8fc7\u7a0b\uff0c\u65e0\u9700\u624b\u52a8\u5e72\u9884\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gitlab API\u63a5\u53e3\u5229\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4e0eGitlab\u7684API\u63a5\u53e3\u96c6\u6210\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u529f\u80fd\u62d3\u5c55\u548c\u6269\u5c55\u3002\u8fd9\u79cd\u96c6\u6210\u65b9\u5f0f\u4f7f\u5f97\u4e0eGitlab\u7684\u4ea4\u4e92\u66f4\u52a0\u7075\u6d3b\uff0c\u80fd\u591f\u652f\u6301\u66f4\u591a\u81ea\u5b9a\u4e49\u7684\u5ba1\u67e5\u9700\u6c42\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5168\u9762\u81ea\u52a8\u5ba1\u67e5"}),"\n",(0,t.jsx)(n.p,{children:"\u5927\u6a21\u578b\u81ea\u52a8\u5ba1\u67e5Gitlab\u7684\u4ee3\u7801\uff0c\u6db5\u76d6push\uff08commit\uff09\u3001merge\uff08\u5408\u5e76\u8bf7\u6c42\uff09\u548ctag\uff08\u6807\u7b7e\u521b\u5efa\uff09\u7b49\u4e09\u79cd\u4ee3\u7801\u63d0\u4ea4\u65b9\u5f0f\u3002\u65e0\u8bba\u662f\u65b0\u7684\u4ee3\u7801\u63d0\u4ea4\u8fd8\u662f\u4ee3\u7801\u5408\u5e76\uff0c\u7cfb\u7edf\u90fd\u80fd\u81ea\u52a8\u68c0\u67e5\u5e76\u63d0\u4f9b\u5ba1\u67e5\u8bc4\u8bba\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"retrying\u91cd\u8bd5\u673a\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u5e94\u5bf9\u7f51\u7edc\u5f02\u5e38\u6216\u5176\u4ed6\u95ee\u9898\uff0c\u7cfb\u7edf\u5b9e\u73b0retrying\u91cd\u8bd5\u673a\u5236\u3002\u5982\u679c\u56e0\u4e3a\u7f51\u7edc\u95ee\u9898\u5bfc\u81f4\u8bf7\u6c42\u4e0d\u6210\u529f\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8fdb\u884c\u91cd\u8bd5\uff0c\u786e\u4fdd\u5ba1\u67e5\u8fc7\u7a0b\u7684\u53ef\u9760\u6027\u548c\u7a33\u5b9a\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4ee3\u7801\u5ba1\u67e5\u539f\u7406",children:"\u4ee3\u7801\u5ba1\u67e5\u539f\u7406"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u67b6\u6784",src:i(3717).A+"",width:"1851",height:"919"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"1\u3001Gitlab \u7684 Webhook \u4e8b\u4ef6\u63a8\u9001"}),"\n",(0,t.jsx)(n.p,{children:"Gitlab \u53ef\u4ee5\u914d\u7f6e Webhook\uff0c\u7528\u4e8e\u5728\u4ee3\u7801\u63d0\u4ea4\u3001\u5408\u5e76\u8bf7\u6c42\u7b49\u4e8b\u4ef6\u53d1\u751f\u65f6\u89e6\u53d1\u901a\u77e5\u3002\u5f53\u6709\u65b0\u7684\u4ee3\u7801\u63d0\u4ea4\u6216\u5408\u5e76\u8bf7\u6c42\u65f6\uff0cGitlab \u5c06\u5411\u9884\u5148\u8bbe\u7f6e\u7684 URL \u53d1\u9001 POST \u8bf7\u6c42\uff0c\u5305\u542b\u76f8\u5173\u7684\u4e8b\u4ef6\u6570\u636e\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"2\u3001\u89e3\u6790 diff \u5185\u5bb9\u5e76\u53d1\u9001\u81f3\u5927\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53 Gitlab \u6536\u5230 Webhook \u4e8b\u4ef6\u540e\uff0c\u53ef\u4ee5\u89e3\u6790 diff \u5185\u5bb9\uff0c\u8fd9\u662f\u65b0\u63d0\u4ea4\u7684\u4ee3\u7801\u4e0e\u73b0\u6709\u4ee3\u7801\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\u7136\u540e\uff0c\u5c06\u8fd9\u4e9b\u5dee\u5f02\u53d1\u9001\u7ed9\u5927\u6a21\u578b\u7684 API \u7aef\u70b9\uff0c\u4ee5\u4fbf\u5927\u6a21\u578b\u80fd\u591f\u7406\u89e3\u4ee3\u7801\u53d8\u66f4\u7684\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"3\u3001\u5927\u6a21\u578b\u5904\u7406\u5e76\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,t.jsx)(n.p,{children:"\u5927\u6a21\u578b\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u81ea\u7136\u8bed\u8a00\u5904\u7406\u6a21\u578b\uff0c\u80fd\u591f\u7406\u89e3\u548c\u5904\u7406\u81ea\u7136\u8bed\u8a00\u6587\u672c\u3002\u5f53\u5927\u6a21\u578b\u6536\u5230 diff \u5185\u5bb9\u540e\uff0c\u5b83\u4f1a\u89e3\u6790\u3001\u7406\u89e3\u4ee3\u7801\u7684\u53d8\u66f4\uff0c\u5e76\u5bf9\u5176\u4e2d\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898\u3001\u6f0f\u6d1e\u6216\u4f18\u5316\u5efa\u8bae\u8fdb\u884c\u5206\u6790\u548c\u56de\u590d\u3002\u5927\u6a21\u578b\u5c06\u5904\u7406\u540e\u7684\u7ed3\u679c\u8fd4\u56de\u7ed9\u89e6\u53d1 Webhook \u7684 Gitlab \u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"4\u3001\u5c06\u5927\u6a21\u578b\u5904\u7406\u7684\u7ed3\u679c\u8fdb\u884c\u8bc4\u8bba\u5c55\u793a"}),"\n",(0,t.jsx)(n.p,{children:"Gitlab \u53ef\u4ee5\u63a5\u6536\u6765\u81ea\u5927\u6a21\u578b\u7684\u5904\u7406\u7ed3\u679c\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u8bc4\u8bba\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684\u63d0\u4ea4\u6216\u5408\u5e76\u8bf7\u6c42\u4e2d\u3002\u8fd9\u6837\uff0c\u4ee3\u7801\u63d0\u4ea4\u8005\u548c\u5176\u4ed6\u56e2\u961f\u6210\u5458\u90fd\u53ef\u4ee5\u67e5\u770b\u5927\u6a21\u578b\u7684\u5ba1\u67e5\u7ed3\u679c\uff0c\u5e76\u6839\u636e\u5efa\u8bae\u505a\u51fa\u76f8\u5e94\u7684\u6539\u8fdb\u6216\u4fee\u590d\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u63d0\u95ee\u8bcd",children:"\u63d0\u95ee\u8bcd"}),"\n",(0,t.jsx)(n.p,{children:"\u8d44\u6df1\u7f16\u7a0b\u4e13\u5bb6\u63d0\u95ee"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'messages = [\n    {\n        "role": "system",\n        "content": "\u4f60\u662f\u4e00\u4f4d\u8d44\u6df1\u7f16\u7a0b\u4e13\u5bb6, gitlab\u7684commit\u4ee3\u7801\u53d8\u66f4\u5c06\u4ee5git diff \u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u63d0\u4f9b, \u4ee5\u683c\u5f0f\u300c\u53d8\u66f4\u8bc4\u5206\uff1a\u5b9e\u9645\u7684\u5206\u6570\u300d\u7ed9\u53d8\u66f4\u6253\u5206, \u5206\u6570\u533a\u95f4\u4e3a0~100\u5206\u3002\u7136\u540e, \u4ee5\u7cbe\u70bc\u7684\u8bed\u8a00\u3001\u4e25\u5389\u7684\u8bed\u6c14\u6307\u51fa\u5b58\u5728\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u89c9\u5f97\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b, \u53ef\u76f4\u63a5\u7ed9\u51fa\u4fee\u6539\u540e\u7684\u5185\u5bb9\u3002\u4f60\u7684\u53cd\u9988\u5185\u5bb9\u5fc5\u987b\u4f7f\u7528\u4e25\u8c28\u7684markdown\u683c\u5f0f\u3002"\n    },\n    {\n        "role": "user",\n        "content": f"\u8bf7review\u8fd9\u90e8\u5206\u4ee3\u7801\u53d8\u66f4{content}",\n    },\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6548\u679c\u5c55\u793a",children:"\u6548\u679c\u5c55\u793a"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://codereviewbot.ai",children:"https://codereviewbot.ai"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/nangongchengfeng/Chat-CodeReview/",children:"https://github.com/nangongchengfeng/Chat-CodeReview/"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3717:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/architecture-1b4bd2c7a4b12039d2797ed069a6ba3a.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const l={},o=t.createContext(l);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);