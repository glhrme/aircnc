(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/camera.234a4ab9.svg"},31:function(e,t,a){e.exports=a.p+"static/media/logo.91c62ad4.svg"},32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=(a(37),a(12)),s=a(8),u=a(7),m=a.n(u),i=a(10),p=a(5),d=a(27),h=a.n(d).a.create({baseURL:"https://aircnc-meme.herokuapp.com/"});function b(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1];function s(){return(s=Object(i.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,h.post("/session",{email:l});case 3:n=e.sent,r=n.data._id,localStorage.setItem("user",r),localStorage.setItem("email",l),t.push("/dashboard");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ofere\xe7a ",r.a.createElement("strong",null,"spots")," para programadores e encontre ",r.a.createElement("strong",null,"talentos")," para a sua empresa"),r.a.createElement("form",{onSubmit:function(e){return s.apply(this,arguments)}},r.a.createElement("label",{htmlFor:"email"},"E-mail:"),r.a.createElement("input",{id:"email",type:"email",placeholder:"Seu melhor e-mail",onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"btn",type:"submit"},"Entrar")))}a(56);function f(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(p.a)(l,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user"),e.next=3,h.get("/dashboard",{headers:{user_id:t}});case 3:a=e.sent,console.log(a.data.success),d(a.data.success),c(localStorage.getItem("email"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,a),r.a.createElement("ul",{className:"spot-list"},u.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("header",{style:{backgroundImage:"url(".concat(e.thumbnail_url,")")}}),r.a.createElement("strong",null," ",e.company," "),r.a.createElement("span",null," ",e.price?"R$ ".concat(e.price,",00/dia"):"GRATUITO"," "))}))),r.a.createElement(o.b,{to:"/new-spot"},r.a.createElement("button",{className:"btn"},"Cadastrar Novo Spot")))}a(62);var E=a(30),g=a.n(E);function v(e){var t=e.history,a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),u=Object(p.a)(s,2),d=u[0],b=u[1],f=Object(n.useState)(""),E=Object(p.a)(f,2),v=E[0],O=E[1],j=Object(n.useState)(null),y=Object(p.a)(j,2),S=y[0],w=y[1],x=Object(n.useMemo)((function(){return S?URL.createObjectURL(S):null}),[S]);function k(){return(k=Object(i.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=new FormData,r=localStorage.getItem("user"),n.append("thumbnail",S),n.append("company",l),n.append("techs",d),n.append("price",v),e.next=9,h.post("/spots",n,{headers:{user_id:r}});case 9:t.push("/dashboard");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("label",{id:"thumbnail",style:{backgroundImage:"url(".concat(x,")")},className:S?"has-thumbnail":""},r.a.createElement("input",{type:"file",onChange:function(e){return w(e.target.files[0])}}),r.a.createElement("img",{src:g.a,alt:"Select img"})),r.a.createElement("label",{htmlFor:"company"},"Empresa:"),r.a.createElement("input",{id:"company",placeholder:"Sua empresa incr\xedvel",value:l,onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"techs"},"Tecnologias: ",r.a.createElement("span",null,"(separadas por v\xedrgula)")),r.a.createElement("input",{id:"techs",placeholder:"Tecnologias da empresa",value:d,onChange:function(e){return b(e.target.value)}}),r.a.createElement("label",{htmlFor:"price"},"Di\xe1ria:"),r.a.createElement("input",{id:"price",placeholder:"Valor di\xe1rio",value:v,onChange:function(e){return O(e.target.value)}}),r.a.createElement("button",{className:"btn"},"Cadastrar")))}function O(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:b}),r.a.createElement(s.a,{path:"/dashboard",component:f}),r.a.createElement(s.a,{path:"/new-spot",component:v})))}var j=a(31),y=a.n(j);var S=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:y.a,alt:"Logo do AirCNC"}),r.a.createElement("div",{className:"content"},r.a.createElement(O,null)))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a3c7597d.chunk.js.map