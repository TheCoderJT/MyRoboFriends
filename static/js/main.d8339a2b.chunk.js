(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),a=r.n(s),i=r(3),o=(r(13),r(0)),h=function(e){var t=e.id,r=e.name,n=e.email;return Object(o.jsxs)("div",{className:"tc bg-light-green br3 ma2 dib grow shadow-5",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:r}),Object(o.jsx)("p",{children:n})]})]})},l=function(e){e.id,e.name,e.email;var t=e.robots;return Object(o.jsx)("div",{className:"flex flex-wrap justify-center",children:t.map((function(e,r){return Object(o.jsx)(h,{id:t[r].id,name:t[r].username,email:t[r].email},t[r].id)}))})},j=function(e){e.searchField;var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},b=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"2px solid black",height:"100vh"},children:e.children})},d=r(5),u=r(6),f=r(8),O=r(7),m=function(e){Object(f.a)(r,e);var t=Object(O.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(u.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oooooop. That is not good"}):this.props.children}}]),r}(n.Component),x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(""),a=Object(i.a)(s,2),h=a[0],d=a[1];Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var u=r.filter((function(e){return e.username.toLowerCase().includes(h.toLowerCase())}));return r.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:"RoboFreinds"}),Object(o.jsx)(j,{searchChange:function(e){d(e.target.value)}}),Object(o.jsx)(b,{children:Object(o.jsx)(m,{children:Object(o.jsx)(l,{robots:u})})})]}):Object(o.jsx)("h1",{className:"tc v-mid f1",children:"Loading...."})};r(15),r(16);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d8339a2b.chunk.js.map