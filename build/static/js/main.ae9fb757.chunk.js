(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c.n(n),s=c(14),o=c.n(s),i=(c(60),c(61),c(35)),l=c(11),j=c.n(l),u=c(18),d=c(20),p=c(102),b=c(103),h=c(104),O=c(48),x=c.n(O),m=c(50),f=c.n(m),v=c(34),k=c.n(v),N=c(49),g=c.n(N),y=c(19),w=c.n(y),C=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)({id:null,title:"",completed:!1}),o=Object(d.a)(s,2),l=o[0],O=o[1],m=Object(n.useState)(""),v=Object(d.a)(m,2),N=v[0],y=v[1],C=Object(n.useState)(!1),S=Object(d.a)(C,2),E=S[0],F=S[1],I=Object(n.useState)(!1),J=Object(d.a)(I,2),q=J[0],A=J[1],B=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://react-django--todo.herokuapp.com/api/task-list");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://react-django--todo.herokuapp.com/api/task-create/",E&&(t="https://react-django--todo.herokuapp.com/api/task-update/".concat(l.id,"/")),e.next=4,w.a.post(t,l);case 4:B(),O({id:null,title:"",completed:!1});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("https://react-django--todo.herokuapp.com/api/task-delete/".concat(t.id,"/"));case 2:B();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.completed=!t.completed,c="https://react-django--todo.herokuapp.com/api/task-update/".concat(t.id,"/"),e.next=4,w.a.post(c,t);case 4:B();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://react-django--todo.herokuapp.com/api/task-list/?title=".concat(t));case 2:c=e.sent,r(c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){B()}),[]),Object(a.jsxs)("div",{className:"todoForm",children:[Object(a.jsxs)("div",{className:"form",children:[Object(a.jsxs)("form",{className:"add",onSubmit:D,children:[Object(a.jsx)("input",{type:"text",onChange:function(e){return O(Object(i.a)(Object(i.a)({},l),{},{title:e.target.value}))},className:"todo",value:l.title,placeholder:"Your ToDo here..."}),Object(a.jsx)(p.a,{startIcon:Object(a.jsx)(x.a,{}),children:"Add"})]}),Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{type:"text",onChange:function(e){y(e.target.value),Y(e.target.value)},value:N,placeholder:"Search"}),Object(a.jsx)(b.a,{children:Object(a.jsx)(g.a,{})})]}),Object(a.jsxs)("form",{className:"completed",children:[Object(a.jsx)(h.a,{id:"completed",onChange:function(e){return A(!q)}}),Object(a.jsx)("label",{htmlFor:"completed",children:"Completed"})]})]}),Object(a.jsx)("div",{className:"todos",children:c.length&&c.map((function(e){return e.completed?q&&Object(a.jsxs)("strike",{children:[Object(a.jsx)("h5",{onClick:function(){return T(e)},children:e.title}),Object(a.jsx)("div",{className:"tools",children:Object(a.jsx)(b.a,{onClick:function(){return M(e)},children:Object(a.jsx)(k.a,{})})})]},e.id):Object(a.jsxs)("span",{children:[Object(a.jsx)("h5",{onClick:function(){return T(e)},children:e.title}),Object(a.jsxs)("div",{className:"tools",children:[Object(a.jsx)(b.a,{onClick:function(){return function(e){O(e),F(!0),document.querySelector(".todo").focus()}(e)},children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(b.a,{onClick:function(){return M(e)},children:Object(a.jsx)(k.a,{})})]})]},e.title)}))})]})};var S=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)("section",{children:[Object(a.jsx)("div",{className:"color"}),Object(a.jsx)("div",{className:"color"}),Object(a.jsx)("div",{className:"color"}),Object(a.jsx)("div",{className:"color"}),Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("div",{className:"circle",style:{"--i":0}}),Object(a.jsx)("div",{className:"circle",style:{"--i":1}}),Object(a.jsx)("div",{className:"circle",style:{"--i":2}}),Object(a.jsx)("div",{className:"circle",style:{"--i":3}}),Object(a.jsx)("div",{className:"circle",style:{"--i":4}}),Object(a.jsx)(C,{})]})]})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.ae9fb757.chunk.js.map