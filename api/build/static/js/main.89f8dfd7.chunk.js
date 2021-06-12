(this.webpackJsonpreact_code_snippet_app=this.webpackJsonpreact_code_snippet_app||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(7),c=n.n(a),s=(n(21),n(2)),i=(n(22),n(23),n(0)),l=function(e){var t=e.buttonContent,n=e.buttonCallback,o=e.buttonType;return Object(i.jsx)("button",{className:"Button transform transition duration-500 px-5 rounded-full bg-pink-300 hover:bg-pink-500 hover:bg-opacity-50 ring ring-transparent hover:ring hover:ring-white bg-opacity-50",onClick:n,type:o,children:t})};l.defaultProps={buttonContent:"Button",buttonCallback:function(){console.log("Button Clicked!")},buttonType:"button"};var u=l,b=(n(25),function(e){var t=e.setShowModal;return Object(i.jsxs)("nav",{className:"Navbar flex flex-row justify-between p-3 bg-gradient-to-r from-red-900 to-pink-800 text-white font-medium",children:[Object(i.jsx)("h1",{className:"text-3xl px-8",children:"CodePasta\ud83c\udf5d"}),Object(i.jsx)("ul",{className:"flex flex-row justify-between",children:Object(i.jsx)("li",{className:"p-2",children:Object(i.jsx)(u,{buttonContent:"+ New Snippet",buttonCallback:t,buttonType:"button"})})})]})}),p=n(4),d=n.n(p),j=n(5),f=(n(27),n(6)),x=n.n(f),h="/api/codesnippets",g=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(h);case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("Error in fetching API!"),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post(h,{snippetTitle:t,snippetContent:n});case 3:o=e.sent,console.log("Successfully POSTed:",o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error in POST request to API!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(d.a.mark((function e(t,n,o){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.put(h+t,{snippetTitle:n,snippetContent:o});case 3:r=e.sent,console.log("Successfully PUTed:",r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error in PUT request to API!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,o){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete(h+t);case 3:n=e.sent,console.log("Successfully DELETed:",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error in DELETE request to API!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.snippetTitle,n=e.snippetContent,r=e.dataID,a=e.index,c=e.setReload,l=Object(o.useState)(!1),b=Object(s.a)(l,2),p=b[0],f=b[1],x=Object(o.useState)(""),h=Object(s.a)(x,2),g=h[0],m=h[1],w=Object(o.useState)(""),y=Object(s.a)(w,2),S=y[0],k=y[1],C=Object(o.useState)(""),N=Object(s.a)(C,2),P=N[0],T=N[1],E=Object(o.useState)(""),M=Object(s.a)(E,2),R=M[0],_=M[1];Object(o.useEffect)((function(){_(n),m(n),T(r)}),[r,n]),Object(o.useEffect)((function(){k(R)}),[R]);var I=function(){f(!p)},F=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.stopPropagation(),navigator.clipboard.writeText(g)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"SnippetCard flex flex-col justify-between mx-12 lg:mx-16 xl:mx-32 my-3 rounded-xl bg-pink-400 bg-opacity-50 font-light",children:[Object(i.jsx)("h3",{className:"rounded-t-xl p-2 bg-pink-600 bg-opacity-50 text-2xl",children:t}),Object(i.jsx)("div",{className:"p-5",children:Object(i.jsxs)("pre",{className:"flex flex-col justify-items-stretch text-left whitespace-pre-wrap",children:[Object(i.jsx)("label",{name:"SnippetCard-textarea-".concat(a)}),Object(i.jsx)("textarea",{className:"resize-none box-content bg-transparent border-box focus:outline-none font-mono",name:"SnippetCard-textarea-".concat(a),value:R,readOnly:!p,onChange:p?function(e){_(e.target.value)}:null,rows:"12",cols:"40"})]})}),Object(i.jsxs)("div",{className:"flex flex-row justify-evenly p-2 rounded-b-xl bg-pink-700 bg-opacity-50",children:[p?null:Object(i.jsx)(u,{buttonContent:"\ud83d\udccb",buttonCallback:F}),Object(i.jsx)(u,{buttonContent:p?"Submit":"Update",buttonCallback:p?function(e){e.stopPropagation(),console.log(R),k(R),O(P,t,S),m(S),I(),c((function(e){return!e}))}:I}),p?Object(i.jsx)(u,{buttonContent:"Cancel",buttonCallback:function(e){e.stopPropagation(),_(g),f(!1),c((function(e){return!e}))}}):Object(i.jsx)(u,{buttonContent:"Delete",buttonCallback:function(e){e.stopPropagation(),v(P),c((function(e){return!e}))}})]})]})};w.defaultProps={snippetTitle:"Hello World!",snippetContent:"console.log('Hello World!')"};var y=w,S=(n(46),function(e){var t=e.reload,n=e.setReload,r=e.memoGetCodeSnippets,a=Object(o.useState)([]),c=Object(s.a)(a,2),l=c[0],u=c[1];Object(o.useEffect)((function(){r().then((function(e){var t=e.data;return u(t)})).catch((function(e){return new Error(e)}))}),[r,t]);var b;return Object(i.jsx)("div",{className:"SnippetContainer grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 py-10 min-h-screen lg:min-h-full",children:(b=l,b.map((function(e,t){return Object(i.jsx)(y,{index:t,dataID:e._id,snippetTitle:e.snippetTitle,snippetContent:e.snippetContent,setReload:n},e._id)})))})}),k=(n(47),function(e){var t=e.setShowModal;return Object(i.jsxs)("div",{className:"ModalHeader flex justify-between w-1/2 rounded-t-xl p-2 bg-pink-500 text-2xl",children:[Object(i.jsx)("h4",{className:"ml-5",children:"New Snippet"}),Object(i.jsx)("div",{className:"mr-1",children:Object(i.jsx)(u,{buttonContent:"X",buttonCallback:t})})]})}),C=(n(48),n(49),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(o.useState)(e),n=Object(s.a)(t,2),r=n[0],a=n[1],c=function(e){a(e.target.value)},i=function(){a("")};return[r,c,i]}),N=function(e){var t=e.setShowModal,n=e.setReload,r=C(""),a=Object(s.a)(r,2),c=a[0],l=a[1],u=C(""),b=Object(s.a)(u,2),p=b[0],d=b[1],j=Object(o.useState)(!1),f=Object(s.a)(j,2),x=f[0],h=f[1],g=Object(o.useState)(!1),O=Object(s.a)(g,2),v=O[0],w=O[1];return Object(i.jsx)("div",{className:"SnippetForm",children:Object(i.jsxs)("form",{className:"flex flex-col items-center",onSubmit:function(e){e.preventDefault(),h(!1),w(!1);var o=e.target[0].value,r=e.target[1].value;console.log(o,r),""===o&&h(!0),""===r&&w(!0),x||v||(m(o,r),t(!1),n((function(e){return!e})))},children:[Object(i.jsxs)("label",{className:"pt-2 mb-2",children:["Snippet Name ",x?Object(i.jsx)("span",{className:"text-yellow-300",children:" Please input a name!"}):null]}),Object(i.jsx)("input",{className:"w-1/3 box-content bg-pink-800 border border-solid border-white rounded-lg ring-1 ring-white ring-offset-2 focus:outline-none font-mono",type:"text",placeholder:"// Function Foo",required:!0,value:c,onChange:l}),Object(i.jsxs)("label",{className:"pt-2 mb-2",children:["Snippet Content ",v?Object(i.jsx)("span",{className:"text-yellow-300",children:" Please input code!"}):null]}),Object(i.jsx)("textarea",{className:"w-1/3 resize-none box-content bg-transparent border border-solid border-white rounded-lg ring-1 ring-white ring-offset-2 focus:outline-none font-mono",type:"text",placeholder:"foo => console.log('bar')",rows:12,columns:40,required:!0,value:p,onChange:d}),Object(i.jsx)("input",{className:"transform transition duration-500 mt-6 px-5 rounded-full bg-pink-300 hover:bg-pink-500 hover:bg-opacity-50 ring ring-transparent hover:ring hover:ring-white bg-opacity-50",type:"submit",value:"Submit!"})]})})},P=function(e){var t=e.setShowModal,n=e.setReload;return Object(i.jsx)("div",{className:"ModalBody w-1/2 pt-4 bg-pink-800 bg-opacity-80",children:Object(i.jsx)(N,{setShowModal:t,setReload:n})})},T=(n(50),function(){return Object(i.jsx)("div",{className:"ModalFooter w-1/2 pb-5 pt-7 rounded-b-lg bg-pink-800 bg-opacity-80 text-center",children:Object(i.jsxs)("h5",{className:"text-md",children:["Any code formatting you make ",Object(i.jsx)("b",{children:"will"})," be imported."]})})}),E=(n(51),function(e){var t=e.show,n=e.setShowModal,o=e.setReload;return t?c.a.createPortal(Object(i.jsxs)("div",{className:"ModalContainer backdrop-filter backdrop-blur backdrop-saturate-50 fixed flex flex-col items-center justify-center inset-0 bg-pink-200 bg-opacity-50 text-white",children:[Object(i.jsx)(k,{setShowModal:n}),Object(i.jsx)(P,{setShowModal:n,setReload:o}),Object(i.jsx)(T,{})]}),document.getElementById("root")):null}),M=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=Object(o.useState)(e),n=Object(s.a)(t,2),r=n[0],a=n[1],c=function(){a(!r)},i=function(){a(!0)},l=function(){a(!1)};return[r,c,i,l]},R=function(){return Object(i.jsxs)("footer",{className:"text-base p-3 bg-gradient-to-l from-yellow-800 to-pink-800",children:[Object(i.jsxs)("h5",{children:["Made with ",Object(i.jsx)("a",{href:"https://reactjs.org/",rel:"noreferrer",target:"_blank",children:"React \u269b"}),", ",Object(i.jsx)("a",{href:"https://tailwindcss.com/",rel:"noreferrer",target:"_blank",children:"Tailwind CSS \ud83d\udca8"}),", \ud83d\udc89 & \ud83d\ude05 & \ud83d\ude2d."]}),Object(i.jsx)("h6",{className:"text-sm",children:"Neil Chen, 2021."})]})},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useState)(t),r=Object(s.a)(n,2),a=r[0],c=r[1],i=Object(o.useCallback)(e,[e,a]);if(!e)throw new Error("useReload requires a callback to memoize.");return[a,c,i]};var I=function(){var e=M(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],r=_(g,!1),a=Object(s.a)(r,3),c=a[0],l=a[1],u=a[2];return Object(i.jsxs)("div",{className:"App min-h-full min-w-full lg:min-h-screen lg:min-w-screen text-white",children:[Object(i.jsx)(b,{setShowModal:o}),Object(i.jsxs)("section",{className:"divide-y divide-solid divide-pink-200",children:[Object(i.jsx)("h1",{className:"rounded-full bg-pink-700 bg-opacity-50 p-5 mx-32 my-10 text-4xl",children:"Code Snippets that you can save and reference for any project."}),Object(i.jsx)(S,{reload:c,setReload:l,memoGetCodeSnippets:u}),Object(i.jsx)(E,{show:n,setShowModal:o,setReload:l})]}),Object(i.jsx)(R,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.89f8dfd7.chunk.js.map