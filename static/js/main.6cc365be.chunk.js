(this.webpackJsonpblogs=this.webpackJsonpblogs||[]).push([[0],{10:function(n,t,e){n.exports={navbar__profpic__container:"SidebarComponent_navbar__profpic__container__1UZ0t",navbar__profile__description__container:"SidebarComponent_navbar__profile__description__container__1PvFk",navbar__container:"SidebarComponent_navbar__container__tC7lY",navigation__component__container:"SidebarComponent_navigation__component__container__3WBaz",navbar__container__small__close:"SidebarComponent_navbar__container__small__close__TbMfD",navbar__container__small:"SidebarComponent_navbar__container__small__1P_CF"}},175:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a),o=e(20),c=e.n(o),s=(e(67),e(26)),r=e.n(s),l=e(7),_=e(1);var p=function(){var n=Object(l.c)();return Object(_.jsxs)("header",{className:r.a.header__container,children:[Object(_.jsx)("span",{className:"fa fa-navicon "+r.a.header__toggle,onClick:function(){return n({type:"TOGGLE_NAVBAR"})}}),Object(_.jsx)("a",{href:".",className:r.a.header__name,children:"AKBARNOTOPB"})]})},u=e(10),d=e.n(u),b=e.p+"static/media/myfoto.5ba3f213.jpg",h=e(22),j=e(23),g=e(25),v=e(24),f=e(40),m=e.n(f),O=e(59),x=e.n(O),N=function(n){return Object(_.jsx)("li",{className:x.a.subnavigation,children:Object(_.jsxs)("span",{onClick:n.toggleSubNavigation,children:[Object(_.jsx)("span",{className:"fa fa-angle-right"})," ",n.details.title]})})},C=function(n){Object(g.a)(e,n);var t=Object(v.a)(e);function e(n){var a;return Object(h.a)(this,e),(a=t.call(this,n)).toggleThisNavbar=function(){a.props.details.subnav.length>0?a.setState({open:!a.state.open}):a.dispatchNavigation({url:a.props.details.url,api:a.props.details.api,subnav:!1})},a.dispatchNavigation=function(n){a.props.dispatch(n)},a.state={open:!1},a}return Object(j.a)(e,[{key:"render",value:function(){var n=this,t=[],e=0;return this.props.details.subnav.forEach((function(a){var i={url:n.props.details.url+a.url,api:a.api,subnav:!0};t.push(Object(_.jsx)(N,{details:a,toggleSubNavigation:function(){n.dispatchNavigation(i)}},e++))})),Object(_.jsxs)("li",{className:"".concat(m.a.navigation__container," ").concat(m.a.navigation," disable-hightlight"),children:[Object(_.jsxs)("span",{onClick:this.toggleThisNavbar,children:[Object(_.jsx)("span",{className:"fa "+(!0===this.state.open?" fa-angle-down":" fa-angle-double-right")})," ",this.props.details.title," ",0!==this.props.details.subnav.length?"(".concat(this.props.details.subnav.length,")"):""]}),Object(_.jsx)("ul",{style:{listStyle:"none",padding:0,display:!1===this.state.open?"none":"initial"},children:t})]})}}]),e}(i.a.Component),y=[{title:"Home",url:"/",api:"https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md",subnav:[]},{title:"Hackerank",url:"/hackerank",api:"/",subnav:[{title:"Sub judul 1",url:"/sub-judul-1",api:"https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md"},{title:"Sub judul 2",url:"/sub-judul-2",api:"/"},{title:"Sub judul 3",url:"/sub-judul-3",api:"/"}]}];var S=function(){var n=Object(l.d)((function(n){return n.navbarToggled})),t=[],e=Object(l.c)(),a=0;return y.forEach((function(n){t.push(Object(_.jsx)(C,{details:n,dispatch:function(n){e({type:"TOGGLE_NAVIGATION",payload:n})}},a++))})),Object(_.jsxs)("nav",{className:"".concat(d.a.navbar__container," ")+(!0===n?d.a.navbar__container__small:""),children:[n?Object(_.jsx)("span",{onClick:function(){return e({type:"TOGGLE_NAVBAR"})},className:"fa fa-close "+d.a.navbar__container__small__close}):"",Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{style:{textAlign:"center"},children:Object(_.jsx)("figure",{className:d.a.navbar__profpic__container,children:Object(_.jsx)("img",{src:b,width:"100%",alt:""})})}),Object(_.jsxs)("div",{className:d.a.navbar__profile__description__container,children:[Object(_.jsx)("p",{children:Object(_.jsx)("small",{children:"Written By"})}),Object(_.jsx)("p",{style:{color:"#f1c40f"},children:Object(_.jsx)("strong",{children:"Akbar Noto P.B"})}),Object(_.jsx)("p",{children:"Data Science / Software Engineering / Back End Developer"})]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("div",{className:"form-group",children:Object(_.jsxs)("div",{className:"input-group",children:[Object(_.jsx)("input",{type:"text",className:"form-control",placeholder:"Type Category / Title"}),Object(_.jsxs)("span",{className:"input-group-addon",children:[" ",Object(_.jsx)("span",{className:"fa fa-search"})," "]})]})}),Object(_.jsx)("div",{className:d.a.navigation__component__container,children:t})]})},E=e(60),T=e.n(E),A=e(61),k=e.n(A),D=e(62),w=e.n(D),G=e(41),L=e.n(G);var B=function(){return Object(_.jsx)("span",{className:"fa fa-spinner "+L.a.spinning+" "+L.a.spinner})},V=function(n){Object(g.a)(e,n);var t=Object(v.a)(e);function e(n){var a;return Object(h.a)(this,e),(a=t.call(this,n)).state={loading:!0,text:"",api:a.props.article,url:a.props.url},a}return Object(j.a)(e,[{key:"componentDidUpdate",value:function(n){var t=this;n.article!==this.props.article&&this.setState({loading:!0},(function(){t.updateContent()}))}},{key:"updateContent",value:function(){var n=this,t=new XMLHttpRequest;t.onreadystatechange=function(t){t.target.status&&n.setState({text:t.target.responseText.split("https://github.com").join("https://raw.githubusercontent.com").split("/blob/").join("/"),loading:!1})},t.open("GET",this.props.article),t.send()}},{key:"componentDidMount",value:function(){this.updateContent()}},{key:"render",value:function(){return Object(_.jsx)("article",{className:T.a.body__component,title:this.state.url,children:!0===this.state.loading?Object(_.jsx)(B,{}):Object(_.jsx)(k.a,{plugins:[w.a],children:this.state.text})})}}]),e}(i.a.Component);var F=Object(l.b)((function(n){return{api:n.navigationToggled.api,url:n.navigationToggled.url}}))((function(n){return window.history.pushState({path:"?path=".concat(n.url)},"","?path=".concat(n.url)),Object(_.jsx)(V,{page:n.url,article:n.api})})),I=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAVBAR":return!n;default:return n}},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:"/",api:"https://raw.githubusercontent.com/akbarnotopb/portofolio/main/Data%20Science/EDA/Covid%20Vaccinations%20EDA%20-%206%20Feb%202021.md",subnav:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAVIGATION":return t.payload;default:return n}},X=e(11),H=Object(X.b)({navbarToggled:I,navigationToggled:R}),P=Object(X.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var M=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(l.a,{store:P,children:[Object(_.jsx)(p,{}),Object(_.jsx)(S,{}),Object(_.jsx)(F,{store:P})]})})},U=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,176)).then((function(t){var e=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),a(n),i(n),o(n),c(n)}))};c.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(M,{})}),document.getElementById("root")),U()},26:function(n,t,e){n.exports={header__container:"HeaderComponent_header__container__1vts2",header__toggle:"HeaderComponent_header__toggle__37XhQ",header__name:"HeaderComponent_header__name__38f1H"}},40:function(n,t,e){n.exports={navigation__container:"NavigationComponent_navigation__container__2REXX",navigation:"NavigationComponent_navigation__20eDE"}},41:function(n,t,e){n.exports={spinning:"LoadingComponent_spinning__2KDcw",spin:"LoadingComponent_spin__OwBQW",spinner:"LoadingComponent_spinner__3OIpd"}},59:function(n,t,e){n.exports={subnavigation:"SubnavigationComponent_subnavigation__2ossq"}},60:function(n,t,e){n.exports={body__component:"ArticleComponent_body__component__1VVio"}},67:function(n,t,e){}},[[175,1,2]]]);
//# sourceMappingURL=main.6cc365be.chunk.js.map