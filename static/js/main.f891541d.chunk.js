(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(7),o=a(1),l=function(e){return function(t){return e===t.id}},d=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1},u=a(9),m=a.n(u),j=a(0),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(j.jsx)(b,{user:r},r.id)]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})},f=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=f.find(l(e.userId))||null;return Object(s.a)(Object(s.a)({},e),{},{user:t})})),x=function(){var e=Object(o.useState)(p),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),u=s[0],m=s[1],b=Object(o.useState)(0),h=Object(c.a)(b,2),x=h[0],v=h[1],y=Object(o.useState)(!1),S=Object(c.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(!1),C=Object(c.a)(g,2),_=C[0],k=C[1],D={id:d(a),title:u,completed:!1,userId:x,user:f.find(l(x))||null};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),I(!u),k(!x),u&&x&&(n((function(e){return[].concat(Object(r.a)(e),[D])})),m(""),v(0))},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["Title: ",Object(j.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){m(e.target.value),I(!1)}})]}),N&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["User: ",Object(j.jsxs)("select",{"data-cy":"userSelect",value:x,onChange:function(e){v(+e.target.value),k(!1)},children:[Object(j.jsx)("option",{value:0,disabled:!0,children:"Choose a user"}),f.map((function(e){var t=e.id,a=e.name;return Object(j.jsx)("option",{value:t,children:a},t)}))]})]}),_&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:a})]})};i.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f891541d.chunk.js.map