(window.webpackJsonpwallet=window.webpackJsonpwallet||[]).push([[0],{204:function(e,t,a){e.exports=a.p+"static/media/logo.a3a974aa.jpg"},212:function(e,t,a){e.exports=a(405)},217:function(e,t,a){},218:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),s=(a(217),a(218),a(36)),c=a(151),i=a(65),u=a(24),m=a(25),d=new(function(){function e(){Object(u.a)(this,e),this.authenticated=!1}return Object(m.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),p=function(e){for(var t=e.component,a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return d.isAuthenticated()?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},h=a(418),f=a(39),y=function(e){return r.a.createElement(h.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(f.a,{type:"primary",onClick:function(){e.history.push("/login")}},"Back Home")})},g=a(32),b=a(30),E=a(31),v=a(410),O=a(420),j=a(415),w=a(414),k=a(419),C=a(406),S=a(10),T=a(409),P=a(1),N=a.n(P),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).columns=[{title:"Requested Date",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("a",null,e)}},{title:"Type",dataIndex:"type",key:"type"},{title:"Amount",dataIndex:"amount",key:"amount"},{title:"LP",key:"months",dataIndex:"months"},{title:"Status",key:"status",dataIndex:"status",render:function(e){return r.a.createElement("span",null,e.map((function(e){var t;return"rejected"===e&&(t="volcano"),"pending"===e&&(t="geekblue"),"accepted"===e&&(t="purple"),"approved"===e&&(t="green"),r.a.createElement(k.a,{color:t,key:e},e.toUpperCase())})))}},{title:"Action",key:"action",render:function(e,t){return r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){a.handleDelete(t.id)}},"Delete"))}}],a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchRequests()}},{key:"componentWillReceiveProps",value:function(e){console.log(e),e.newRequest&&this.props.requests.unshift(e.newRequest)}},{key:"handleDelete",value:function(e){this.props.deleteRequest(e),C.a.open({message:"Delete Successful",description:"",icon:r.a.createElement(S.a,{type:"smile",style:{color:"#108ee9"}})}),console.log(e)}},{key:"render",value:function(){var e=this.props.requests;return console.log(e),r.a.createElement(T.a,{pagination:{pageSize:3},columns:this.columns,dataSource:e,rowKey:"id"})}}]),t}(n.Component);R.prototypes={fetchRequests:N.a.func.isRequired,requests:N.a.array.isRequired,newRequest:N.a.object.isRequired};var q=Object(s.b)((function(e){return{requests:e.requests.items,newRequest:e.requests.item}}),{fetchRequests:function(){return function(e){fetch("http://localhost:4000/requests?_sort=id&_order=desc").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_REQUESTS",payload:t})}))}},deleteRequest:function(e){return function(t){fetch("http://localhost:4000/requests/"+e,{method:"DELETE"}).then((function(e){return e.json()})).then((function(a){return t({type:"DELETE_REQUEST",payload:e})}))}}})(R),x=a(62),D=a(407),I=a(413),A=a(416),M=a(412),F=a(43),L=a.n(F),B={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:{style:{color:"#3C33FF"},label:r.a.createElement("strong",null,"12 Months")}},W=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){if(a.state.amount&&a.state.months){var t={amount:a.state.amount,months:a.state.months,date:a.state.date,status:["pending"],type:"LOAN"};a.props.requestLoan(t),console.log(t),a.setState({confirmLoading:!0}),setTimeout((function(){a.setState({visible:!1,confirmLoading:!1,amount:"",months:""})})),D.a.success("Loan Request Successful",3)}else D.a.info("Please apply correctly",3)},a.handleCancel=function(){console.log("Clicked cancel button"),a.setState({visible:!1})},a.state={ModalText:"Content of the modal",visible:!1,confirmLoading:!1,amount:"",months:"",date:L()(new Date).format("DD-MM-YY")},a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.handleChangeMonths=a.handleChangeMonths.bind(Object(x.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){console.log(e),this.setState({amount:e})}},{key:"handleChangeMonths",value:function(e){console.log(e),this.setState({months:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{onClick:this.showModal},"Borrow"),r.a.createElement(I.a,{title:"How Much?",visible:this.state.visible,onOk:this.handleOk,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel},r.a.createElement("div",null,r.a.createElement("h3",null,"Amount:"),r.a.createElement(A.a,{style:{width:200},defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:this.handleChange,name:"amount",value:this.state.amount})),r.a.createElement("div",null,r.a.createElement("h3",null,"Period:"),r.a.createElement(M.a,{marks:B,min:1,max:12,name:"months",value:this.state.months?this.state.months:0,onChange:this.handleChangeMonths}))))}}]),t}(n.Component),_=Object(s.b)(null,{requestLoan:function(e){return function(t){fetch("http://localhost:4000/requests",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"BORROW",payload:e})}))}}})(W),K=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).columns=[{title:"Date",dataIndex:"date",key:"date",render:function(e){return r.a.createElement("a",null,e)}},{title:"Type",dataIndex:"type",key:"type",render:function(e){return r.a.createElement("span",null,e.map((function(e){var t;return"depo"===e&&(t="volcano"),"trans"===e&&(t="geekblue"),"deposit"===e&&(t="purple"),"transfer"===e&&(t="green"),r.a.createElement(k.a,{color:t,key:e},e.toUpperCase())})))}},{title:"Amount",dataIndex:"amount",key:"amount"},{title:"Mode",key:"mode",dataIndex:"mode",render:function(e){return r.a.createElement("span",null,e.map((function(e){var t;return"card"===e&&(t="volcano"),"mpesa"===e&&(t="geekblue"),"airtel money"===e&&(t="purple"),"tkash"===e&&(t="green"),r.a.createElement(k.a,{color:t,key:e},e.toUpperCase())})))}}],a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchTransactions()}},{key:"componentWillReceiveProps",value:function(e){console.log(e),e.newTransaction&&this.props.transactions.unshift(e.newTransaction)}},{key:"render",value:function(){var e=this.props.transactions;return console.log(e),r.a.createElement(T.a,{pagination:{pageSize:3},columns:this.columns,dataSource:e,rowKey:"id"})}}]),t}(n.Component);K.prototypes={fetchTransactions:N.a.func.isRequired,transactions:N.a.array.isRequired,newTransaction:N.a.object.isRequired};var U=Object(s.b)((function(e){return{transactions:e.transactions.items,newTransaction:e.transactions.item}}),{fetchTransactions:function(){return function(e){fetch("http://localhost:4000/transactions").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_TRANSACTION",payload:t})}))}}})(K),H=a(94),V=H.a.Option,Y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){if(a.state.amount&&a.state.mode){var t={amount:a.state.amount,date:a.state.date,mode:[a.state.mode],type:["deposit"]};a.props.createTransaction(t),console.log(t),a.setState({confirmLoading:!0}),setTimeout((function(){a.setState({visible:!1,confirmLoading:!1,amount:"",mode:""})})),D.a.success("Transaction Successful",3)}else D.a.info("Please apply correctly",3)},a.handleCancel=function(){console.log("Clicked cancel button"),a.setState({visible:!1})},a.state={ModalText:"Content of the modal",visible:!1,confirmLoading:!1,amount:"",mode:"",date:L()(new Date).format("DD-MM-YY")},a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.handleSelectChange=a.handleSelectChange.bind(Object(x.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({amount:e})}},{key:"handleSelectChange",value:function(e){this.setState({mode:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{onClick:this.showModal},"Deposit"),r.a.createElement(I.a,{title:"How Much?",visible:this.state.visible,onOk:this.handleOk,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel},r.a.createElement("div",null,r.a.createElement("h3",null,"Amount:"),r.a.createElement(A.a,{style:{width:200},defaultValue:1e3,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:this.handleChange,name:"amount",value:this.state.amount}),r.a.createElement("h3",null,"Mode:"),r.a.createElement(H.a,{defaultValue:"mpesa",style:{width:120},onChange:this.handleSelectChange},r.a.createElement(V,{value:"mpesa"},"Mpesa"),r.a.createElement(V,{value:"card"},"Card"),r.a.createElement(V,{value:"tkash"},"TKash"),r.a.createElement(V,{value:"airtel money"},"Airtel Money")))))}}]),t}(n.Component),J=Object(s.b)(null,{createTransaction:function(e){return function(t){fetch("http://localhost:4000/transactions",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"NEW_TRANSACTION",payload:e})}))}}})(Y),$=v.a.TabPane,Q=r.a.createElement("div",{style:{display:"flex",width:"max-content",justifyContent:"flex-end"}},r.a.createElement(j.a,{title:"Status",value:"Active",style:{marginRight:32}}),r.a.createElement(j.a,{title:"Balance",prefix:"KES",value:6e4})),z=function(e){var t=e.children,a=e.extra;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"main"},t),r.a.createElement("div",{className:"extra"},a))},G=function(e){function t(){return Object(u.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{title:"Wallet ",subTitle:"TM",extra:[r.a.createElement(_,{key:"3"}),r.a.createElement(J,{key:"2"}),r.a.createElement(f.a,{key:"1",type:"primary"},"Transfer")],footer:r.a.createElement(v.a,{defaultActiveKey:"1"},r.a.createElement($,{tab:"Transactions",key:"1"},r.a.createElement(U,null)),r.a.createElement($,{tab:"Requests",key:"2"},r.a.createElement(q,null)))},r.a.createElement(z,{extra:Q},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return r.a.createElement(O.a,{size:"small",column:e},r.a.createElement(O.a.Item,{label:"Account Name"},"Sir. BankAlot"),r.a.createElement(O.a.Item,{label:"Account No:"},r.a.createElement("a",null,"421421")),r.a.createElement(O.a.Item,{label:"Creation Time"},"2019-09-17"),r.a.createElement(O.a.Item,{label:"Effective Time"},"2019-09-17"),r.a.createElement(O.a.Item,{label:"Account Type"},"Primary Account"))}())))}}]),t}(n.Component),X=a(58),Z=a.n(X),ee=a(408),te=a(86),ae=ee.a.Header,ne=ee.a.Sider,re=ee.a.Content,oe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.logOut=function(){d.logout((function(){Z.a.success("You're safely logged out!"),a.props.history.push("/login")}))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(ee.a,null,r.a.createElement(ne,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement("div",{className:"menu-logo"},r.a.createElement(S.a,{type:"wallet",theme:"twoTone",className:"menu-header-logo"}),r.a.createElement("h1",{className:"menu-header"},"My Wallet")),r.a.createElement(te.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(te.a.Item,{key:"1"},r.a.createElement(S.a,{type:"user"}),r.a.createElement("span",null,"Dashboard")))),r.a.createElement(ee.a,null,r.a.createElement(ae,{style:{background:"#fff",padding:0}},r.a.createElement(S.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),r.a.createElement(f.a,{type:"danger",icon:"poweroff",style:{float:"right"},onClick:this.logOut})),r.a.createElement(re,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},r.a.createElement(G,null))))}}]),t}(n.Component),le=Object(s.b)(null)(oe),se=a(411),ce=a(210),ie=a(84),ue=a(204),me=a.n(ue),de=function(){return r.a.createElement("header",{className:"App-header2"},r.a.createElement("img",{className:"App-logo",src:me.a}))},pe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(d.login((function(){Z.a.success("You're successfully logged in!"),a.props.history.push("/dashboard")})),console.log("Received values of form: ",t))}))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(se.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(de,null),r.a.createElement(se.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(ce.a,{prefix:r.a.createElement(S.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(se.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(ce.a,{prefix:r.a.createElement(S.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(se.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(ie.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),r.a.createElement(f.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:"/register"},"register now!")))}}]),t}(n.Component),he=se.a.create({name:"normal_login"})(pe),fe=a(417),ye=H.a.Option,ge=[{value:"Kenya",label:"Kenya",children:[{value:"Nairobi",label:"Nairobi",children:[{value:"Westlands",label:"Westlands"},{value:"CBD",label:"CBD"}]}]},{value:"Uganda",label:"Uganda",children:[{value:"Kampala",label:"Kampala",children:[{value:"Northern",label:"Northern"},{value:"Eastern",label:"Eastern"}]}]}],be=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||(a.props.register(t),Z.a.success("You're successfully registered. Please login to continue!"),a.props.history.push("/login"),console.log("Received values of form: ",t))}))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},a=e("prefix",{initialValue:"254"})(r.a.createElement(H.a,{style:{width:70}},r.a.createElement(ye,{value:"254"},"+254"),r.a.createElement(ye,{value:"256"},"+256")));return r.a.createElement(se.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,className:"register-form"}),r.a.createElement(de,null),r.a.createElement(se.a.Item,{label:"First Name"},e("firstName",{rules:[{required:!0,message:"Please input your First Name!"}]})(r.a.createElement(ce.a,null))),r.a.createElement(se.a.Item,{label:"Last Name"},e("lastName",{rules:[{required:!0,message:"Please input your Last Name!"}]})(r.a.createElement(ce.a,null))),r.a.createElement(se.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(ce.a,null))),r.a.createElement(se.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(ce.a.Password,null))),r.a.createElement(se.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(ce.a.Password,{onBlur:this.handleConfirmBlur}))),r.a.createElement(se.a.Item,{label:"Residence "},e("residence",{initialValue:["Kenya","Nairobi","CBD"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]})(r.a.createElement(fe.a,{options:ge}))),r.a.createElement(se.a.Item,{label:"Phone Number"},e("phone",{rules:[{required:!0,message:"Please input your phone number!"}]})(r.a.createElement(ce.a,{addonBefore:a,style:{width:"100%"}}))),r.a.createElement(se.a.Item,t,e("agreement",{valuePropName:"checked"})(r.a.createElement(ie.a,null,"I have read the ",r.a.createElement("a",{href:""},"agreement")))),r.a.createElement(se.a.Item,t,r.a.createElement(f.a,{type:"primary",htmlType:"submit"},"Register")))}}]),t}(n.Component),Ee=se.a.create({name:"register"})(be),ve=Object(s.b)(null,{register:function(e){return function(t){console.log(e),fetch("http://localhost:4000/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"REGISTER_USER",payload:e})}))}}})(Ee),Oe=a(59),je=a(209),we=a(116);function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(a,!0).forEach((function(t){Object(we.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Se={items:[],item:{}};function Te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Te(a,!0).forEach((function(t){Object(we.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ne={items:[],item:{}},Re=Object(Oe.c)({requests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BORROW":return Ce({},e,{item:t.payload});case"FETCH_REQUESTS":return Ce({},e,{items:t.payload});case"DELETE_REQUEST":return console.log(t.payload),Ce({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});default:return e}},transactions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_TRANSACTION":return Pe({},e,{item:t.payload});case"FETCH_TRANSACTION":return Pe({},e,{items:t.payload});default:return e}}}),qe=[je.a],xe=Object(Oe.e)(Re,{},Object(Oe.d)(Oe.a.apply(void 0,qe)));var De=function(){return r.a.createElement(s.a,{store:xe},r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/login",component:he}),r.a.createElement(i.b,{exact:!0,path:"/register",component:ve}),r.a.createElement(p,{exact:!0,path:"/dashboard",component:le}),r.a.createElement(i.b,{path:"*",component:y})),r.a.createElement(Z.a,{stack:{limit:3},timeout:3e3,position:"top-right",effect:"slide",offset:65}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[212,1,2]]]);
//# sourceMappingURL=main.12e149ed.chunk.js.map