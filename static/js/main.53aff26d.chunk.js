(this.webpackJsonpblogs=this.webpackJsonpblogs||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),o=n(43),i=n.n(o),s=(n(51),n(4)),r=n(5),j=n(7),b=n(6),l=n(28),_=n.n(l),p=n(0),d=(c.a.Component,n(14)),u=n.n(d),O=n.p+"static/media/myfoto.5ba3f213.jpg",h=n(29),x=n.n(h),g=n(44),m=n.n(g),v=function(e){return Object(p.jsx)("li",{className:m.a.subnavigation,children:Object(p.jsxs)("span",{children:[" ",Object(p.jsx)("span",{className:"fa fa-angle-right"})," Sub Alamat 1"]})})},f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).toggleThisNavbar=function(){a.setState({open:!a.state.open})},a.state={open:!1},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("li",{className:"".concat(x.a.navigation__container," ").concat(x.a.navigation," disable-hightlight"),children:[Object(p.jsxs)("span",{onClick:this.toggleThisNavbar,children:[Object(p.jsx)("span",{className:"fa "+(!0===this.state.open?" fa-angle-down":" fa-angle-double-right")})," Hackerrank (48)"]}),Object(p.jsxs)("ul",{style:{listStyle:"none",padding:0,display:!1===this.state.open?"none":"initial"},children:[Object(p.jsx)(v,{}),Object(p.jsx)(v,{}),Object(p.jsx)(v,{})]})]})}}]),n}(c.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return console.log("/blogs"),Object(p.jsxs)("nav",{className:u.a.navbar__container,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)("figure",{className:u.a.navbar__profpic__container,children:Object(p.jsx)("img",{src:O,width:"100%",alt:""})})}),Object(p.jsxs)("div",{className:u.a.navbar__profile__description__container,children:[Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"Written By"})}),Object(p.jsx)("p",{style:{color:"#f1c40f"},children:Object(p.jsx)("strong",{children:"Akbar Noto P.B"})}),Object(p.jsx)("p",{children:"Data Science / Software Engineering / Back End Developer"})]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Type Category / Title"}),Object(p.jsxs)("span",{className:"input-group-addon",children:[" ",Object(p.jsx)("span",{className:"fa fa-search"})," "]})]})}),Object(p.jsxs)("div",{className:u.a.navigation__component__container,children:[Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{}),Object(p.jsx)(f,{})]})]})}}]),n}(c.a.Component),y=n(45),N=n.n(y),k=n(46),S=n.n(k),w=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={loading:!0,text:""},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(t){t.target.status&&e.setState({text:t.target.responseText.split("https://github.com").join("https://raw.githubusercontent.com").split("/blob/").join("/")})},t.open("GET","https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md"),t.send()}},{key:"render",value:function(){return Object(p.jsx)("article",{className:N.a.body__component,children:Object(p.jsx)(S.a,{children:this.state.text})})}}]),n}(c.a.Component),D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={loading:!1},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C,{}),Object(p.jsx)(w,{})]})}}]),n}(c.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),E()},14:function(e,t,n){e.exports={navbar__profpic__container:"SidebarComponent_navbar__profpic__container__1UZ0t",navbar__profile__description__container:"SidebarComponent_navbar__profile__description__container__1PvFk",navbar__container:"SidebarComponent_navbar__container__tC7lY",navigation__component__container:"SidebarComponent_navigation__component__container__3WBaz"}},28:function(e,t,n){e.exports={header__container:"HeaderComponent_header__container__1vts2",header__name:"HeaderComponent_header__name__38f1H"}},29:function(e,t,n){e.exports={navigation__container:"NavigationComponent_navigation__container__2REXX",navigation:"NavigationComponent_navigation__20eDE"}},44:function(e,t,n){e.exports={subnavigation:"SubnavigationComponent_subnavigation__2ossq"}},45:function(e,t,n){e.exports={body__component:"BodyComponent_body__component__2CaJh"}},51:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.53aff26d.chunk.js.map