(this.webpackJsonpblogs=this.webpackJsonpblogs||[]).push([[0],{20:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(14),o=c.n(s),i=(c(20),c(7)),l=c(0),a=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"The Dojo Blog"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Blog"})]})]})},j=function(e){var t=e.blogs;return Object(l.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(l.jsx)("div",{className:"blog-preview",children:Object(l.jsxs)(i.b,{to:"/blogs/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],o=Object(n.useState)(!0),i=Object(b.a)(o,2),l=i[0],a=i[1],j=Object(n.useState)(null),d=Object(b.a)(j,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){a(!1),s(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(a(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:l,error:h}},h=function(){var e=d("http://localhost:3001/blogs"),t=e.error,c=e.isPending,n=e.data;return Object(l.jsxs)("div",{className:"home",children:[t&&Object(l.jsx)("div",{children:t}),c&&Object(l.jsx)("div",{children:"Loading..."}),n&&Object(l.jsx)(j,{blogs:n})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),o=Object(b.a)(s,2),i=o[0],a=o[1],j=Object(n.useState)("mario"),d=Object(b.a)(j,2),h=d[0],O=d[1],x=Object(u.f)();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{children:"Add a New Blog"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:i,author:h};fetch("http://localhost:3001/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){x.push("/")}))},children:[Object(l.jsx)("label",{children:"Blog title:"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Blog body:"}),Object(l.jsx)("textarea",{required:!0,value:i,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("label",{children:"Blog author:"}),Object(l.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(l.jsx)("option",{value:"mario",children:"mario"}),Object(l.jsx)("option",{value:"yoshi",children:"yoshi"})]}),Object(l.jsx)("button",{children:"Add Blog"})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://localhost:3001/blogs/"+e),c=t.data,n=t.error,r=t.isPending,s=Object(u.f)();return Object(l.jsxs)("div",{className:"blog-details",children:[r&&Object(l.jsx)("div",{children:"Loading..."}),n&&Object(l.jsx)("div",{children:n}),c&&Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:c.title}),Object(l.jsxs)("p",{children:["Written by ",c.author]}),Object(l.jsx)("div",{children:c.body}),Object(l.jsx)("button",{onClick:function(){fetch("http://localhost:3001/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"delete"})]})]})},f=function(){return Object(l.jsxs)("div",{className:"not-found",children:[Object(l.jsx)("h2",{children:"Sorry"}),Object(l.jsx)("p",{children:"That page cannot be found"}),Object(l.jsx)(i.b,{to:"/",children:"Back to the homepage..."})]})};var g=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(a,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(u.a,{path:"/create",children:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{path:"/blogs/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(f,{})})]})})]})})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e50045ca.chunk.js.map