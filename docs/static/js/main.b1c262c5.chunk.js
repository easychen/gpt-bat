(this["webpackJsonpgpt-bat"]=this["webpackJsonpgpt-bat"]||[]).push([[0],{270:function(e,t,n){},328:function(e,t){},541:function(e,t,n){"use strict";n.r(t);var s,r,i,a,o,l,c,p,u,h,b,d,j,m,f,O,v,g,_,x,y,k,w,N,S,C,P,I,T,z,A,B=n(0),F=n.n(B),E=n(25),G=n.n(E),K=(n(270),n(16)),D=n(17),L=n(23),M=n(22),R=n(43),J=n(27),W=n(14),$=n(2),H=Object(W.b)("store")(s=Object(W.c)(s=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object($.jsx)("div",{className:"title",children:Object($.jsxs)("h1",{children:["Hello\uff0c",this.props.store.appname]})})}}]),n}(B.Component))||s)||s,U=H,Y=n(545),q=(r=Object(W.b)("store"),Object(J.f)(i=r(i=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var e=this;return Object($.jsxs)("div",{children:[Object($.jsx)("h1",{children:Object($.jsx)(U,{})}),Object($.jsx)("div",{children:Object($.jsx)(Y.b,{onClick:function(){return e.props.store.appname+="\ud83c\udf88"},children:"change"})}),Object($.jsx)("div",{children:Object($.jsx)("span",{onClick:function(){return e.props.history.push("/login")},children:"Login"})})]})}}]),n}(B.Component))||i)||i),V=q,Q=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object($.jsx)("h1",{children:"Login form"})}}]),n}(B.Component),X=Q,Z=n(207),ee=n.n(Z),te=(a=Object(W.b)("store"),Object(J.f)(o=a(o=Object(W.c)(o=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object($.jsx)("div",{className:(this.props.className||"")+" header",children:"Header"})}}]),n}(B.Component))||o)||o),l=Object(W.b)("store"),Object(J.f)(c=l(c=Object(W.c)(c=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object($.jsx)("div",{className:(this.props.className||"")+" footer",children:"Footer"})}}]),n}(B.Component))||c)||c),p=Object(W.b)("store"),Object(J.f)(u=p(u=Object(W.c)(u=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object($.jsx)(ee.a,{title:this.props.title||this.props.store.appname,children:Object($.jsx)("div",{className:"cbox",children:Object($.jsx)("div",{className:"solo-center body wrapped",children:this.props.main})})})}}]),n}(B.Component))||u)||u)||u),ne=te,se=(h=Object(W.b)("store"),Object(J.f)(b=h(b=Object(W.c)(b=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var e=Object($.jsx)("div",{children:"Sample"});return Object($.jsx)(ne,{title:this.props.store.appname,main:e})}}]),n}(B.Component))||b)||b),n(5)),re=n(3),ie=n.n(re),ae=n(15),oe=n(212),le=(d=Object(W.b)("store"),Object(J.f)(j=d(j=Object(W.c)(j=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var e=this,t=this.props.store[this.props.field]||"";return Object($.jsxs)(Y.e,{label:this.props.label,children:["textarea"==this.props.type?Object($.jsx)(Y.g,{growVertically:!0,large:!0,placeholder:this.props.placeholder,onChange:function(t){return e.props.store[e.props.field]=t.target.value},value:t,className:"fluid",fill:!0}):Object($.jsx)(Y.f,{className:this.props.className||"",type:this.props.type,large:"true",placeholder:this.props.placeholder,onChange:function(t){return e.props.store[e.props.field]=t.target.value},value:t}),parseInt(this.props.max_count)>0&&Object($.jsxs)("div",{className:"text-count",children:[t.length,"/",this.props.max_count]})]})}}]),n}(B.Component))||j)||j)||j),ce=le,pe=n(68),ue=(m=Object(W.b)("store"),Object(J.f)(f=m(f=Object(W.c)(f=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var e=this;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)("div",{className:"std-hr form-div"}),Object($.jsx)(Y.e,{children:Object($.jsxs)("div",{className:"flex flex-row justify-between",children:[Object($.jsx)("div",{className:"left",children:Object($.jsx)(Y.b,{large:"true",intent:pe.a.PRIMARY,onClick:function(){return e.props.onSubmit()},children:"\u63d0\u4ea4"})}),Object($.jsx)("div",{className:"right",children:this.props.cancel||Object($.jsx)(Y.b,{large:"true",onClick:function(){return e.props.history.goBack()},className:"right-20",children:"\u53d6\u6d88"})})]})})]})}}]),n}(B.Component))||f)||f)||f),he=ue,be=n(211),de=(O=Object(W.b)("store"),Object(J.f)(v=O(v=Object(W.c)(v=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){var e=this,t=this.props.options.filter((function(t){return e.props.store[e.props.field]==t.value}));Date.now();return Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"lossline",children:this.props.label}),Object($.jsx)(be.a,{className:this.props.className,menuPlacement:this.props.menuPlacement||"auto",placeholder:this.props.placeholder||"\u8bf7\u9009\u62e9",value:t,isMulti:!1,onChange:function(t){console.log("e",t),e.props.store[e.props.field]=t?t.value:"",e.props.onChange&&e.props.onChange(t)},options:this.props.options||[]})]})}}]),n}(B.Component))||v)||v)||v),je=de,me=n(35),fe=n(36),Oe=(n(326),n(4)),ve=n(213),ge=n(209),_e=n.n(ge),xe="GPTBAT_",ye=(g=function(){function e(){Object(K.a)(this,e),Object(me.a)(this,"appname",_,this),Object(me.a)(this,"split_type",x,this),Object(me.a)(this,"split_length",y,this),Object(me.a)(this,"split_char",k,this),Object(me.a)(this,"system_prompt",w,this),Object(me.a)(this,"user_prompt",N,this),Object(me.a)(this,"max_tokens",S,this),Object(me.a)(this,"upload_tokens_count",C,this),Object(me.a)(this,"model",P,this),Object(me.a)(this,"lists",I,this),this.i18n={zh:{subtitle:"GPT\u957f\u6587\u672c\u5904\u7406\u7a0b\u5e8f",split_type:"\u5206\u9694\u65b9\u5f0f",split_by_line:"\u6309\u6362\u884c\u5206\u9694",split_by_length:"\u6309\u957f\u5ea6\u5206\u9694",split_by_char:"\u6309\u7279\u6b8a\u5b57\u7b26\u5206\u9694",split_length:"\u5206\u9694\u957f\u5ea6",split_char:"\u5206\u9694\u7b26\uff0c\u652f\u6301\u6b63\u5219",system_prompt:"System \u63d0\u793a\u8bcd",user_prompt:"User \u63d0\u793a\u8bcd",model:"\u6a21\u578b",upload_file:"\u9009\u62e9\u6587\u4ef6",begin_process:"\u5f00\u59cb\u5904\u7406",segment:"\u6bb5",about:"\u7ea6",key_settings_title:"\u8bbe\u7f6eOpenAI/ Forward Key",key_settings_key:"\u8bf7\u8f93\u5165OpenAI/Forward KEY: sk-xxx/fkxxx",key_settings_url:"\u8bf7\u8f93\u5165API\u5730\u5740\uff0c\u5982\u65e0\u9700\u4ee3\u7406\u53ef\u7559\u7a7a",key_settings_apply:"\u7533\u8bf7Forward Key \xb7 \u53ef\u5fae\u4fe1\u5145\u503c"},en:{subtitle:"Batch Processing for GPT",split_type:"Split Type",split_by_line:"Split by Line",split_by_length:"Split by Length",split_by_char:"Split by Special Character",split_length:"Split Length",split_char:"Split Character, supports regex",system_prompt:"System Prompt",user_prompt:"User Prompt",model:"Model",upload_file:"Select File",begin_process:"Process",segment:"Segments",about:"About",key_settings_title:"Set OpenAI/Forward Key",key_settings_key:"Please enter OpenAI/Forward KEY: sk-xxx/fkxxx",key_settings_url:"Please enter API address, leave blank if no proxy is needed",key_settings_apply:"Apply for Forward Key \xb7 WeChat recharge available"}},Object(me.a)(this,"openai_key",T,this),Object(me.a)(this,"openai_api_url",z,this),this.to_save_vars=["openai_key","openai_api_url"],Object(me.a)(this,"menu",A,this),this.load_vars()}return Object(D.a)(e,[{key:"load_vars",value:function(){var e=this;this.to_save_vars.forEach((function(t){var n=window.localStorage.getItem(xe+t);n&&(e[t]=JSON.parse(n))}))}},{key:"save_vars",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=null===t?this.to_save_vars:[t];n.forEach((function(t){window.localStorage.setItem(xe+t,JSON.stringify(e[t]))}))}},{key:"get_token_count",value:function(){var e=Object(ae.a)(ie.a.mark((function e(t){var n,s;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://service-qodt7tt0-1256183612.gz.apigw.tencentcs.com/release/countTokens",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:"1243r4d#s2",text:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,console.log("json",s),!s||!s.count){e.next=11;break}return e.abrupt("return",s.count);case 11:return e.abrupt("return",0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"do_process",value:function(){var e=Object(ae.a)(ie.a.mark((function e(t){var n,s,r,i,a,o,l,c,p,u,h,b,d,j=arguments;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=j.length>1&&void 0!==j[1]?j[1]:null,s=j.length>2&&void 0!==j[2]?j[2]:null,r=j.length>3&&void 0!==j[3]?j[3]:null,i=j.length>4&&void 0!==j[4]?j[4]:null,a=t+"|"+n+"|"+s+"|"+r+"|"+i,o=_e()(a).toString(),!(l=window.localStorage.getItem("cache-"+o))){e.next=11;break}return e.abrupt("return",l);case 11:return(c=new ve.a(this.openai_key.trim())).setApiBaseUrl(this.openai_api_url.trim()),e.next=15,c.completion({messages:[{content:s||this.system_prompt,role:"system"},{content:n.replace("{$content}",t)||this.user_prompt.replace("{$content}",t),role:"user"}],model:r||this.model,max_tokens:parseInt(i)||parseInt(this.max_tokens)});case 15:if(!(p=e.sent)){e.next=21;break}return window.localStorage.setItem("cache-"+o,null===(u=p.choices[0])||void 0===u||null===(h=u.message)||void 0===h?void 0:h.content.trim()),e.abrupt("return",null===(b=p.choices[0])||void 0===b||null===(d=b.message)||void 0===d?void 0:d.content.trim());case 21:return e.abrupt("return","");case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),_=Object(fe.a)(g.prototype,"appname",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"GPT::BAT"}}),x=Object(fe.a)(g.prototype,"split_type",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"newline"}}),y=Object(fe.a)(g.prototype,"split_length",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),k=Object(fe.a)(g.prototype,"split_char",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"\\n---\\n"}}),w=Object(fe.a)(g.prototype,"system_prompt",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Please help me to translate the following text to Chinese. Please return only translated content not include the origin text."}}),N=Object(fe.a)(g.prototype,"user_prompt",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Here is the text: {$content}"}}),S=Object(fe.a)(g.prototype,"max_tokens",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),C=Object(fe.a)(g.prototype,"upload_tokens_count",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),P=Object(fe.a)(g.prototype,"model",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"gpt-3.5-turbo"}}),I=Object(fe.a)(g.prototype,"lists",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=Object(fe.a)(g.prototype,"openai_key",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),z=Object(fe.a)(g.prototype,"openai_api_url",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"https://api.openai.com"}}),A=Object(fe.a)(g.prototype,"menu",[Oe.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{id:8001,text:"\u9996\u9875",link:"/home",member_only:!1}]}}),g),ke=new ye,we=n(29),Ne=Y.h.create({className:"lm-toaster",position:we.a.TOP});n(329),n(330);function Se(e){Ne.show({message:e})}var Ce,Pe,Ie=n(210),Te=(Ce=Object(W.b)("store"),Object(J.f)(Pe=Ce(Pe=Object(W.c)(Pe=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(e){var s;return Object(K.a)(this,n),(s=t.call(this,e)).drop_ref=F.a.createRef(),s.state={open_dialog:!1,out:"",map_text:"",lang:"zh"},s}return Object(D.a)(n,[{key:"onDropped",value:function(e){var t=this;console.log(e);var n=new FileReader;n.addEventListener("loadend",function(){var e=Object(ae.a)(ie.a.mark((function e(n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.content=n.target.result,e.next=3,t.spliting(t.content);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.readAsText(e[0])}},{key:"spliting",value:function(){var e=Object(ae.a)(ie.a.mark((function e(t){var n,s,r,i,a,o,l,c,p,u,h,b;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&!(t.trim().length<1)){e.next=2;break}return e.abrupt("return",!1);case 2:if("newline"==this.props.store.split_type&&(this.props.store.lists=t.split("\n").filter((function(e){return e.length>0}))),"char"==this.props.store.split_type&&(this.props.store.lists=null===t||void 0===t?void 0:t.split(RegExp(this.props.store.split_char)).filter((function(e){return e.length>0}))),"length"==this.props.store.split_type){for(n=parseInt(this.props.store.split_length),s=[],r=0;r<t.length;r+=n)s.push(t.substr(r,n));s&&s.length>0&&(this.props.store.lists=s)}for(i=parseInt(this.props.store.max_tokens),a=[],o=0;o<(null===(l=this.props.store.lists)||void 0===l?void 0:l.length);o++)if((c=this.props.store.lists[o]).length>i)for(p=Math.ceil(c.length/i),u=0;u<p;u++)a.push(c.substr(u*i,i));else a.push(c);return a&&a.length>0&&(this.props.store.lists=a),console.log(" files"),e.next=12,this.props.store.get_token_count(this.props.user_prompt+""+this.props.system_prompt);case 12:return h=e.sent,e.next=15,this.props.store.get_token_count(t);case 15:b=e.sent,console.log("prompts_token_count",h,"content_token_count",b),this.props.store.upload_tokens_count=b+(6+h)*this.props.store.lists.length;case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"process",value:function(){var e=Object(ae.a)(ie.a.mark((function e(){var t,n,s,r,i,a;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.content){e.next=2;break}return e.abrupt("return",!1);case 2:if(0!=this.props.store.openai_key.trim().length){e.next=6;break}return Se("\u8bf7\u5148\u8bbe\u7f6eOpenAI/API2D Key"),this.setState({open_dialog:!0}),e.abrupt("return");case 6:this.setState({out:"\u5f00\u59cb\u5904\u7406"}),t=this.props.store,n=[],e.prev=9,s=0;case 11:if(!(s<t.lists.length)){e.next=21;break}return r=t.lists[s],e.next=15,t.do_process(r,t.user_prompt,t.system_prompt,t.model,t.max_tokens||1e3);case 15:(i=e.sent)&&n.push(i),this.setState({out:"\u5df2\u5b8c\u6210"+(s+1)+"/"+t.lists.length,map_text:" - "+i.substr(0,50)+"..."});case 18:s++,e.next=11;break;case 21:e.next=28;break;case 23:return e.prev=23,e.t0=e.catch(9),console.error(e.t0),Se("\u5904\u7406\u5931\u8d25\uff0c\u8bf7\u5df2\u5904\u7406\u5185\u5bb9\u5df2\u7f13\u5b58\uff0c\u53ef\u7a0d\u540e\u91cd\u65b0\u518d\u8bd5"),e.abrupt("return");case 28:a="length"==t.split_type?"":"\r\n",Object(Ie.saveAs)(new Blob([n.join(a)],{type:"text/plain;charset=utf-8"}),"GPT_BAT_result.txt"),window.setTimeout((function(){if(window.confirm("\u5904\u7406\u5b8c\u6210\uff0c\u662f\u5426\u6e05\u9664\u7f13\u5b58")){for(var e=0;e<localStorage.length;e++){var t=localStorage.key(e);t.startsWith("cache")&&localStorage.removeItem(t)}Se("\u6e05\u9664\u5b8c\u6210")}}),3e3);case 31:case"end":return e.stop()}}),e,this,[[9,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"save_key",value:function(){var e=Object(ae.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.store.openai_key=this.props.store.openai_key.trim(),this.props.store.openai_api_url=this.props.store.openai_api_url.trim(),!this.props.store.openai_key||!this.props.store.openai_key.trim().startsWith("fk")||"https://api.openai.com"!=this.props.store.openai_api_url.trim()&&this.props.store.openai_api_url||(Se("\u68c0\u6d4b\u5230\u60a8\u4f7f\u7528\u7684\u662fapi2d key\uff0c\u5df2\u81ea\u52a8\u5207\u6362\u5230API2D\u5730\u5740"),this.props.store.openai_api_url="https://openai.api2d.net"),this.props.store.save_vars(),this.setState({open_dialog:!1}),Se("\u4fdd\u5b58\u6210\u529f");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,s,r,i,a,o,l,c,p,u,h,b,d,j,m,f,O,v=this,g=this.props.store,_=Object($.jsxs)("div",{className:"flex flex-row justify-between border rounded  p-10 mt-10 editor",children:[Object($.jsxs)("div",{className:"left w-1/2",children:[Object($.jsx)("div",{className:"text-xl text-blue-500",children:"GPT::BAT"}),Object($.jsx)("div",{className:"text-lg mb-5 text-gray-400",children:null===(e=g.i18n[this.state.lang])||void 0===e?void 0:e.subtitle}),Object($.jsx)(je,{onChange:function(){return v.spliting(v.content)},field:"split_type",className:"mt-2",label:null===(t=g.i18n[this.state.lang])||void 0===t?void 0:t.split_type,options:[{value:"newline",label:null===(n=g.i18n[this.state.lang])||void 0===n?void 0:n.split_by_line},{value:"length",label:null===(s=g.i18n[this.state.lang])||void 0===s?void 0:s.split_by_length},{value:"char",label:null===(r=g.i18n[this.state.lang])||void 0===r?void 0:r.split_by_char}]}),"length"==this.props.store.split_type&&Object($.jsx)(ce,{field:"split_length",className:"mt-2",placeholder:null===(i=g.i18n[this.state.lang])||void 0===i?void 0:i.split_length}),"char"==this.props.store.split_type&&Object($.jsx)(ce,{field:"split_char",className:"mt-2",placeholder:null===(a=g.i18n[this.state.lang])||void 0===a?void 0:a.split_char}),Object($.jsxs)("div",{className:"border rounded p-5 mt-8",children:[Object($.jsx)(ce,{type:"textarea",field:"system_prompt",className:"mt-2",placeholder:"",label:null===(o=g.i18n[this.state.lang])||void 0===o?void 0:o.system_prompt}),Object($.jsx)(ce,{type:"textarea",field:"user_prompt",className:"mt-2",placeholder:"",label:null===(l=g.i18n[this.state.lang])||void 0===l?void 0:l.user_prompt}),Object($.jsx)(ce,{field:"max_tokens",className:"mt-2",placeholder:"",label:"Max Tokens"}),Object($.jsx)(je,{field:"model",className:"mt-2",label:null===(c=g.i18n[this.state.lang])||void 0===c?void 0:c.model,menuPlacement:"top",options:[{value:"gpt4",label:"GPT4"},{value:"gpt-3.5-turbo",label:"GPT3.5"}]})]}),Object($.jsxs)(Y.c,{className:"mt-8",children:[Object($.jsx)(Y.b,{large:!0,icon:"key",className:"ml-2",onClick:function(){return v.setState({open_dialog:!v.state.open_dialog})}}),Object($.jsx)(oe.a,{maxSize:10485760,multiple:!1,ref:this.drop_ref,onDrop:function(e){return v.onDropped(e)},children:function(e){var t,n=e.getRootProps,s=e.getInputProps;return Object($.jsxs)("div",Object(se.a)(Object(se.a)({},n()),{},{children:[Object($.jsx)("input",Object(se.a)({},s())),Object($.jsx)(Y.b,{large:!0,icon:"document-open",text:null===(t=g.i18n[v.state.lang])||void 0===t?void 0:t.upload_file})]}))}}),Object($.jsx)(Y.b,{large:!0,icon:"rocket-slant",className:"ml-2",text:null===(p=g.i18n[this.state.lang])||void 0===p?void 0:p.begin_process,onClick:function(){return v.process()},disabled:!((null===(u=this.props.store.lists)||void 0===u?void 0:u.length)>0)}),Object($.jsxs)(Y.c,{className:"ml-2",children:[Object($.jsx)(Y.b,{large:!0,text:"En",active:"en"==this.state.lang,onClick:function(){return v.setState({lang:"en"})}}),Object($.jsx)(Y.b,{large:!0,text:"\u4e2d\u6587",active:"zh"==this.state.lang,onClick:function(){return v.setState({lang:"zh"})}})]})]}),Object($.jsxs)("div",{className:"bg-blue-100 rounded p-5 mt-5 process-info",children:[this.state.out,this.state.map_text]}),Object($.jsxs)("div",{className:"text-gray-400 px-2 mt-5",children:["\ud83c\udf88 Made by ",Object($.jsx)("a",{href:"https://github.com/easychen",rel:"noreferrer",target:"_blank",children:"EasyChen"})]})]}),Object($.jsxs)("div",{className:"right w-1/2",children:[Object($.jsxs)("div",{className:"log p-2 text-lg bg-blue-100",children:[null===(h=this.props.store.lists)||void 0===h?void 0:h.length," ",null===(b=g.i18n[this.state.lang])||void 0===b?void 0:b.segment," ",null===(d=g.i18n[this.state.lang])||void 0===d?void 0:d.about," ",100*(parseInt(this.props.store.upload_tokens_count/100)+1)," Tokens"]}),Object($.jsx)("div",{className:"content-list",children:this.props.store.lists&&this.props.store.lists.map((function(e,t){return Object($.jsx)("div",{className:"p-2 content-item",children:e},t)}))}),Object($.jsx)(Y.d,{isOpen:this.state.open_dialog,title:null===(j=g.i18n[this.state.lang])||void 0===j?void 0:j.key_settings_title,icon:"info-sign",onClose:function(){return v.setState({open_dialog:!1})},children:Object($.jsxs)("div",{className:"p-5 mt-2",children:[Object($.jsx)(ce,{field:"openai_key",placeholder:null===(m=g.i18n[this.state.lang])||void 0===m?void 0:m.key_settings_key}),Object($.jsx)(ce,{field:"openai_api_url",placeholder:null===(f=g.i18n[this.state.lang])||void 0===f?void 0:f.key_settings_url}),Object($.jsx)(he,{onSubmit:function(){return v.save_key()},cancel:Object($.jsx)(Y.a,{large:!0,icon:"key",href:"https://api2d.com/r/186008",target:"_blank",children:null===(O=g.i18n[this.state.lang])||void 0===O?void 0:O.key_settings_apply})})]})})]})]});return Object($.jsx)(ne,{title:this.props.store.appname,main:_})}}]),n}(B.Component))||Pe)||Pe)||Pe),ze=Te,Ae=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object($.jsx)(R.a,{children:Object($.jsxs)(J.c,{children:[Object($.jsx)(J.a,{path:"/login",component:X}),Object($.jsx)(J.a,{path:"/index",component:V}),Object($.jsx)(J.a,{path:"/",component:ze})]})})}}]),n}(B.Component),Be=Ae;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));G.a.render(Object($.jsx)(W.a,{store:ke,children:Object($.jsx)(Be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[541,1,2]]]);