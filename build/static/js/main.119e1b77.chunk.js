(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(16),c=t.n(r),o=t(17),a=t(3),u=t(1),i=t(0),s=function(e){var n=e.filterName,t=e.handleFilterName;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){return Object(i.jsxs)("form",{onSubmit:e.addNumber,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{autoFocus:!0,value:e.newName,onChange:e.handleNewName}),Object(i.jsx)("br",{}),"number: ",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNewNumber})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.person,t=e.deleteNumber;return Object(i.jsxs)("form",{onSubmit:t,children:[n.name," ",n.number," ",Object(i.jsx)("button",{children:"delete"})]})},f=function(e){var n=e.personsToShow,t=e.deleteNumber;return n.map((function(e){return Object(i.jsx)(l,{person:e,deleteNumber:t},e.name)}))},b=function(e){var n=e.message,t=e.notificationType;return null===n?null:Object(i.jsx)("div",{className:t,children:n})},j=t(5),m=t.n(j),h="/api/persons",O=function(){return m.a.get(h).then((function(e){return e.data}))},p=function(e){return m.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return m.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},N=function(e){return m.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(u.useState)(""),l=Object(a.a)(c,2),j=l[0],m=l[1],h=Object(u.useState)(""),w=Object(a.a)(h,2),x=w[0],g=w[1],S=Object(u.useState)(""),T=Object(a.a)(S,2),k=T[0],y=T[1],C=Object(u.useState)(null),D=Object(a.a)(C,2),F=D[0],A=D[1],E=Object(u.useState)("success"),I=Object(a.a)(E,2),J=I[0],L=I[1];Object(u.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var P=""===k?Object(o.a)(t):t.filter((function(e){var n=e.name.toLowerCase(),t=k.toLowerCase();return n.includes(t)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(b,{message:F,notificationType:J}),Object(i.jsx)(s,{filterName:k,handleFilterName:function(e){return y(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(d,{addNumber:function(e){e.preventDefault();var n={name:j,number:x};if(t.some((function(e){return e.name===j}))){var c="".concat(j," is already added to phonebook, replace the old number with a new one?");if(window.confirm(c)){var o=t.find((function(e){return e.name===j})).id;v(o,n).then((function(e){r(t.map((function(n){return n.id!==o?n:e}))),L("success"),A("Added ".concat(e.name)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){console.log(e.response.data),L("error"),A("Information of ".concat(j," has already been removed from server")),setTimeout((function(){A(null)}),5e3),r(t.filter((function(e){return e.id!==o})))})),m(""),g("")}}else p(n).then((function(e){r(t.concat(e)),m(""),g(""),L("success"),A("Added ".concat(e.name)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){console.log(e.response.data),L("error"),A("Person validation failed."),setTimeout((function(){A(null)}),5e3)}))},newName:j,handleNewName:function(e){return m(e.target.value)},newNumber:x,handleNewNumber:function(e){return g(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(f,{personsToShow:P,deleteNumber:function(e){e.preventDefault();var n=e.target.firstChild.data,c=t.find((function(e){return e.name===n})).id;window.confirm("Delete ".concat(n,"?"))&&N(c).then((function(){r(t.filter((function(e){return e.id!==c})))})).catch((function(e){console.log("could not delete number as it doesn't exist")}))}})]})};t(41);c.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.119e1b77.chunk.js.map