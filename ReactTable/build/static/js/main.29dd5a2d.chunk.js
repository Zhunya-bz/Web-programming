(this["webpackJsonpcrud-ui"]=this["webpackJsonpcrud-ui"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"name":"Evgeniya","city":"Kazan"},{"id":2,"name":"Nikita","city":"Moscow"},{"id":3,"name":"Dasha","city":"Novosibirsk"},{"id":4,"name":"Rishat","city":"Elabuga"},{"id":5,"name":"Sasha","city":"Kiev"},{"id":6,"name":"Vladimir","city":"Mumbai"},{"id":7,"name":"Kristina","city":"Varshava"},{"id":8,"name":"Pavel","city":"Abakan"},{"id":9,"name":"Oleg","city":"Sochi"}]')},21:function(e,a,t){e.exports=t(48)},45:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),l=t.n(i),c=t(6),o=t(19),m=t(7),u=(t(26),t(45),t(20)),s=t(18);var d=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)({name:"",age:"",email:""}),d=Object(m.a)(l,2),f=d[0],p=d[1];console.log(s.length);var v=function(e){e.preventDefault();var a=e.target.getAttribute("name"),t=e.target.value,n=Object(o.a)({},f);n[a]=t,p(n)};return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"MyApp Table"),r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.data.name),r.a.createElement("td",null,e.data.age),r.a.createElement("td",null,e.data.email),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return function(e){var a=Object(c.a)(t),n=a.findIndex((function(a){return a._id===e}));a.splice(n,1),i(a)}(e._id)}},"Delete")))}))))),r.a.createElement("h2",null,"Add a contact"),r.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault();var a={_id:Object(u.a)(),data:{name:f.name,age:f.age,email:f.email},__v:0},n=[].concat(Object(c.a)(t),[a]);i(n)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",className:"form-control form-inline_input",required:"required",placeholder:"Your name",onChange:v}),r.a.createElement("input",{type:"text",name:"age",className:"form-control form-inline_input",required:"required",placeholder:"Your age",onChange:v}),r.a.createElement("input",{type:"text",name:"email",className:"form-control form-inline_input",required:"required",placeholder:"Your email",onChange:v}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add"))))};t(46),t(47);l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[21,1,2]]]);
//# sourceMappingURL=main.29dd5a2d.chunk.js.map