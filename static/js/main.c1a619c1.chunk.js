(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{17:function(e,t,a){e.exports={container:"DisplayChat_container__3Se92",details_of_chat:"DisplayChat_details_of_chat__20gjN",chats:"DisplayChat_chats__CEDUL"}},18:function(e,t,a){e.exports={container:"DisplayAllContacts_container__1BLvM",nav_bar:"DisplayAllContacts_nav_bar__1Rd-D",area_for_chat:"DisplayAllContacts_area_for_chat__1Q7zE"}},23:function(e,t,a){e.exports={div_align_right:"DisplayChatCloud_div_align_right__240Th",common_to_cloud:"DisplayChatCloud_common_to_cloud__181zV"}},27:function(e,t,a){e.exports={container:"App_container__1BS_Q"}},29:function(e,t,a){e.exports={search:"SearchConvo_search__FXx33"}},30:function(e,t,a){e.exports={common:"EachChatTab_common__2aNzx"}},31:function(e,t,a){e.exports={active:"ChatTabs_active__t9Wwy"}},35:function(e,t,a){e.exports={convo_button:"AddNewConvo_convo_button__2nIlO"}},36:function(e,t,a){e.exports={chat_container:"AllConvos_chat_container__3HZWN"}},37:function(e,t,a){e.exports={default_screen:"DefaultScreen_default_screen__3JUZX"}},39:function(e,t,a){e.exports={spinner:"LoadingSpinner_spinner__3EyPC"}},46:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a.n(n),s=(a(46),a(3)),i=a(27),o=a.n(i),r=a(14),l=a(0),d=a(28),h=a(29),u=a.n(h),m=a(1),b=function(e){return Object(m.jsx)("input",{className:u.a.search,type:"text",placeholder:"\uf002 Search for conversation",style:{fontFamily:"Arial, FontAwesome"},onChange:e.onSearch.bind(undefined)})},p=a(10),j=a(30),g=a.n(j),f=function(e){return Object(m.jsxs)("div",{className:g.a.common,children:[Object(m.jsx)("img",{src:e.data.dp,alt:"dp"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.data.name}),Object(m.jsx)("span",{children:e.data.latest})]})]})},x=a(31),O=a.n(x),_=a(7),v=a(19),w=a(13),D=a(33),y=a.n(D),C=Object(v.b)({name:"everyData",initialState:{chatdata:[],allContacts:[{dp:"https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-cd72yq_7d7c172f.jpeg?region=0%2C0%2C600%2C600",id:1,latest:"I hate anime",messages:[],name:"Leanne Graham",username:"leanne"},{dp:"https://ae01.alicdn.com/kf/HTB12HwKBLiSBuNkSnhJq6zDcpXat/Full-Diamond-Painting-Pikachu-Wearing-Hat-Diamond-Mosaic-Diamond-Drawing-Square-Diamond-Embroidery-Cross-Stitch-Decoration.jpg_Q90.jpg_.webp",id:2,latest:"Ash is the worst trainer",messages:[],name:"Ervin Howell",username:"ervin"},{dp:"https://qph.fs.quoracdn.net/main-qimg-79f170951f7edb01470230af0f73ff23-pjlq",id:3,latest:"I thought I was the God",messages:[],name:"Madara Uchiha",username:"notObito"},{dp:"https://w0.peakpx.com/wallpaper/670/410/HD-wallpaper-light-yagami-art-facial-expression-anime-deathnote-anime-deathnote-deathnote-l-kira.jpg",id:4,latest:"I have a note-book",messages:[],name:"Light Yagami",username:"kira"},{dp:"https://www.hola.com/us/images/0268-11fe68838026-bf4ca2a78607-1000/horizontal-1200/daniel-craig-in-39-knives-out-39-.jpg",id:5,latest:"It is not a Donut Hole at all but a smaller donut with its own hole.",messages:[],name:"Benoit Blanc",username:"notTheBestDetective"},{dp:"https://pbs.twimg.com/profile_images/1190831929211457536/9x6L3cg6_400x400.jpg",id:6,latest:"You ridiculous bureaucrats will not dictate how my story ends!",messages:[],name:"God of Mischief",username:"Loki"},{dp:"https://i.pinimg.com/736x/65/0e/e6/650ee6bf521a33488387c5ebaa135de1--gotham-city-dark-knight.jpg",id:7,latest:"I'm not wearing hockey pads!",messages:[],name:"Batman",username:"theDarkKnight"},{dp:"https://images.news18.com/ibnlive/uploads/2021/09/cristiano-ronaldo-5.jpg",id:8,latest:"Siiii!!!!!!",messages:[],name:"Cristiano",username:"cr7"},{dp:"https://pbs.twimg.com/profile_images/1162020875752943616/IXAYdrua_400x400.jpg",id:9,latest:"It's difficult to play against 21 players.",messages:[],name:"David De Gea",username:"theWall"},{dp:"https://i.guim.co.uk/img/media/0538b5e0f902e3e53e896c68b7af2723b7498a86/376_168_2029_1218/master/2029.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fde5ea3f2a693f8abc071bf6a9d54c1f",id:10,latest:"I'll kill them all if they don't obey me.",messages:[],name:"Ralf Rangnick",username:"godOfGegenpress"},{dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHbtmMf5WpfspPDwsic2_TcLnN4GOnDcYpA&usqp=CAU",id:11,latest:"I am Groot!",messages:[],name:"I am Groot",username:"iAmGroot"},{dp:"https://i1.sndcdn.com/artworks-000280481291-t8c1dc-t500x500.jpg",id:12,latest:"I can go one step further",messages:[],name:"Son Goku",username:"kakarot"}]},reducers:{databaseDataSet:function(e,t){0===e.chatdata.length&&(e.chatdata=t.payload.obtainedData)},updateChatData:function(e,t){var a=e.chatdata.findIndex((function(e){return e.username===t.payload.changeTo}));e.chatdata[a].messages.push({fromUser:!0,text:t.payload.text,time:t.payload.time});var n=t.payload.text;n.length>15&&(console.log("this didnt trigger?"),n=(n=n.substring(0,10)).padEnd(15,".")),e.chatdata[a].latest=n},initializeNewChat:function(e,t){var a=e.chatdata;a.push(t.payload.chatToAdd[0]),e.chatdata=a},removeEmptyChat:function(e){var t=e.chatdata.filter((function(e){return 0!==e.messages.length}));e.chatdata=t}}}),k={key:"root",storage:y.a,whitelist:["dataSlice.reducer"]},S=Object(w.g)(k,C.reducer),N=C.actions,A=Object(v.a)({reducer:S,middleware:Object(v.c)({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}})}),I=Object(w.h)(A),B=function(e){var t=Object(_.c)((function(e){return e.chatdata})),a=Object(s.h)(),n=Object(_.b)(),c=Object(s.g)();Object(l.useEffect)((function(){var e=t.filter((function(e){return 0===e.messages.length}));0!==e.length&&(c.location.pathname.includes(e[0].username)||n(N.removeEmptyChat()))}),[t,n,c.location.pathname,a.username]);var i=t.filter((function(t){return t.name.toLowerCase().includes(e.searchFor.toLowerCase())})).map((function(t){return Object(m.jsxs)(p.c,{to:"/chat/".concat(t.username),onClick:e.close,className:function(e){return e?"".concat(O.a.active):""},style:{textDecoration:"none",color:"white",backgroundColor:"#003153"},children:[" ",Object(m.jsx)(f,{data:t})]},"index".concat(t.id))}));return Object(m.jsxs)("div",{children:[i.length>0&&i,0===i.length&&Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("h3",{children:"No chats to Load."})," Start a new conversation!"]})]})},E=a(35),F=a.n(E),L=function(e){return Object(m.jsx)(p.b,{to:"#/newchat",onClick:e.close,children:Object(m.jsx)("button",{className:F.a.convo_button,children:"Start New Conversation \u2795"})})},M=a(36),G=a.n(M),H={bmItem:{display:"inline-block",textDecoration:"none",color:"#d1d1d1",transition:"color 0.2s"},bmItemHover:{color:"white"},bmBurgerButton:{position:"fixed",width:"30px",height:"25px",left:"30px",top:"10px"},bmBurgerBars:{background:"white",zIndex:"2"},bmCrossButton:{height:"30px",width:"30px"},bmCross:{background:"#bdc3c7"},bmMenu:{background:"#373a47",padding:"50px 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},q=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],c=function(){n(!1)},s=Object(l.useState)(""),i=Object(r.a)(s,2),o=i[0],h=i[1];return Object(m.jsx)(d.slide,{isOpen:a,onStateChange:function(e){return function(e){n(e.isOpen)}(e)},width:window.innerWidth<=600?"100%":"300px",styles:H,children:Object(m.jsxs)("div",{className:G.a.chat_container,children:[Object(m.jsx)(b,{onSearch:function(e){h(e.target.value)}}),Object(m.jsx)(L,{close:c}),Object(m.jsx)(B,{searchFor:o,close:c})]})})},z=a(37),T=a.n(z),U=function(){return Object(m.jsx)("div",{className:T.a.default_screen,children:Object(m.jsx)("h1",{children:"Select a conversation to view"})})},Y=a(23),J=a.n(Y),P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=function(e){var t=new Date(e),a=new Date(Date.now()),n="".concat(t.getHours()),c="".concat(t.getMinutes()),s="".concat(n.padStart(2,"0"),":").concat(c.padStart(2,"0"));return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()||(s+=", ".concat(t.getDate()," ").concat(P[t.getMonth()],", ").concat(t.getFullYear())),s},X=function(e){return Object(m.jsxs)("div",{className:"".concat(J.a.common_to_cloud," ").concat(e.messageData.fromUser?J.a.div_align_right:""),children:[Object(m.jsx)("p",{children:e.messageData.text}),Object(m.jsxs)("h5",{children:[Object(m.jsxs)("span",{children:[!e.messageData.fromUser&&Object(m.jsx)("img",{src:e.urlForDP,alt:"dp"}),Object(m.jsx)("span",{children:e.messageData.fromUser?"You":e.messageFrom})]}),Object(m.jsx)("span",{children:W(e.messageData.time)})]})]})},K=a(17),Q=a.n(K),R=a(38),Z=void 0,V=function(){var e=Object(_.b)(),t=Object(s.g)(),a=Object(_.c)((function(e){return e.chatdata})),n=Object(_.c)((function(e){return e.allContacts})),c=Object(s.h)(),i=Object(l.useState)(""),o=Object(r.a)(i,2),d=o[0],h=o[1],u=a.filter((function(e){return e.username===c.username}));Object(l.useEffect)((function(){0===u.length&&e(N.initializeNewChat({chatToAdd:n.filter((function(e){return e.username===c.username}))}))}),[n,e,c.username,u.length]);var b=0===u.length?"Kuch nahi hai":Object(m.jsxs)(R.a,{style:{height:"100% !important",maxHeight:"100% !important"},children:[" ",u[0].messages.map((function(e,t){return Object(m.jsx)(X,{messageData:e,messageFrom:u[0].username,urlForDP:u[0].dp},"message".concat(t))}))," "]});return Object(m.jsxs)("div",{className:Q.a.container,children:[0!==u.length&&Object(m.jsxs)("div",{className:Q.a.details_of_chat,children:[Object(m.jsx)("img",{src:u[0].dp,alt:"dp"}),Object(m.jsx)("h4",{children:u[0].name})]}),Object(m.jsx)("div",{className:Q.a.chats,children:0!==u.length&&b}),Object(m.jsxs)("form",{onSubmit:function(a){a.preventDefault(),""!==d&&(e(N.updateChatData({changeTo:c.username,text:d,time:Date.now()})),h(""),t.push("/chat/".concat(c.username)))}.bind(Z),children:[Object(m.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)}.bind(Z),value:d}),Object(m.jsx)("button",{type:"submit",children:Object(m.jsx)("i",{className:"fa fa-paper-plane","aria-hidden":"true"})})]})]})},$=a(18),ee=a.n($),te=a(39),ae=a.n(te),ne=function(){return Object(m.jsx)("div",{className:ae.a.spinner})},ce=function(){var e=Object(l.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(_.c)((function(e){return e.allContacts})),s=Object(l.useState)([]),i=Object(r.a)(s,2),o=i[0],d=i[1];return Object(l.useEffect)((function(){d(c.map((function(e,t){return 0!==c.length&&t===c.length-1&&n(!1),Object(m.jsx)(p.b,{to:"/chat/".concat(e.username),style:{color:"white",textDecoration:"none"},children:Object(m.jsx)(f,{data:e})},"index".concat(e.id))})))}),[c]),Object(m.jsxs)("div",{className:ee.a.container,children:[Object(m.jsx)("div",{className:ee.a.nav_bar}),a&&Object(m.jsx)(ne,{}),!a&&Object(m.jsx)("div",{className:ee.a.area_for_chat,children:o})]})},se=a(24),ie=a.n(se),oe=a(40),re=function(){var e=Object(_.b)(),t=Object(l.useCallback)(Object(oe.a)(ie.a.mark((function t(){var a,n,c;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://chatapi-b173c-default-rtdb.asia-southeast1.firebasedatabase.app/chathistory.json");case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,c=Object.keys(n),e(N.databaseDataSet({obtainedData:n[c[0]]})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),[e]);Object(l.useEffect)((function(){t()}),[t])};var le=function(){return re(),Object(m.jsxs)("div",{className:o.a.container,children:[Object(m.jsx)(q,{}),Object(m.jsxs)(s.d,{children:[Object(m.jsx)(s.b,{path:"/ChatApp",exact:!0,children:Object(m.jsx)(s.a,{to:"/home"})}),Object(m.jsx)(s.b,{path:"/",exact:!0,children:Object(m.jsx)(s.a,{to:"/home"})}),Object(m.jsx)(s.b,{path:"/home",exact:!0,children:Object(m.jsx)(U,{})}),Object(m.jsx)(s.b,{path:"/chat/:username",children:Object(m.jsx)(V,{})}),Object(m.jsx)(s.b,{path:"#/newchat",children:Object(m.jsx)(ce,{})})]})]})},de=a(41);c.a.render(Object(m.jsx)(p.a,{children:Object(m.jsx)(_.a,{store:A,children:Object(m.jsx)(de.a,{loading:null,persistor:I,children:Object(m.jsx)(le,{})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.c1a619c1.chunk.js.map