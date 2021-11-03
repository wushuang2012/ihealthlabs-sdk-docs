"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[3971],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),v=i,p=f["".concat(s,".").concat(v)]||f[v]||d[v]||o;return t?r.createElement(p,a(a({ref:n},u),{},{components:t})):r.createElement(p,a({ref:n},u))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),i=t(9443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=t(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var n,t=e.lazy,i=e.block,c=e.defaultValue,u=e.values,d=e.groupId,f=e.className,v=r.Children.toArray(e.children),p=null!=u?u:v.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value,h=o(),b=h.tabGroupChoices,g=h.setTabGroupChoices,x=(0,r.useState)(m),y=x[0],S=x[1],k=[];if(null!=d){var E=b[d];null!=E&&E!==y&&p.some((function(e){return e.value===E}))&&S(E)}var N=function(e){var n=e.currentTarget,t=k.indexOf(n),r=p[t].value;S(r),null!=d&&(g(d,r),setTimeout((function(){var e,t,r,i,o,a,l,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,i=e.bottom,o=e.right,a=window,l=a.innerHeight,c=a.innerWidth,t>=0&&o<=c&&i<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},H=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;t=k[r]||k[0];break;case"ArrowLeft":var i=k.indexOf(e.target)-1;t=k[i]||k[k.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},f)},p.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:H,onFocus:N,onClick:N},null!=t?t:n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},1414:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=t(5064),l=t(8215),s=["components"],c={title:"HS5",sidebar_position:11},u=void 0,d={unversionedId:"device/scale/hs5s",id:"device/scale/hs5s",isDocsHomePage:!1,title:"HS5",description:"Android Doc",source:"@site/docs/device/scale/hs5s.md",sourceDirName:"device/scale",slug:"/device/scale/hs5s",permalink:"/doc.sdk.ihealthlabs/docs/device/scale/hs5s",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/scale/hs5s.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"HS5",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"HS5",permalink:"/doc.sdk.ihealthlabs/docs/device/scale/hs5"},next:{title:"HS6",permalink:"/doc.sdk.ihealthlabs/docs/device/scale/hs6"}},f=[{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"init hs6",id:"init-hs6",children:[]},{value:"set wifi for hs6",id:"set-wifi-for-hs6",children:[]},{value:"bind user with hs6",id:"bind-user-with-hs6",children:[]},{value:"unbind hs6",id:"unbind-hs6",children:[]},{value:"get token",id:"get-token",children:[]},{value:"set unit",id:"set-unit",children:[]},{value:"get data stored in cloud",id:"get-data-stored-in-cloud",children:[]}]}],v={toc:f};function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,o.kt)("h4",{id:"android-doc"},"Android Doc")),(0,o.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,o.kt)("h4",{id:"ios-doc"},"iOS Doc")),(0,o.kt)(l.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},"## import HS6 module",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  HS6Module,\n  HS6ProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,o.kt)("h2",{id:"apis"},"APIs"),(0,o.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,o.kt)("h3",{id:"init-hs6"},"init hs6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// need the ihealth account, apply from ihealth developer website\nHS6Module.init("xxx.xxx@xxx.com");\n')),(0,o.kt)("h3",{id:"set-wifi-for-hs6"},"set wifi for hs6"),(0,o.kt)("p",null,"The api only support the 2.4G wifi."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS6Module.setWifi("xxxx", "1234567890");\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    if (event.action === HS6ProfileModule.ACTION_HS6_SETWIFI) {\n        console.log(event[HS6ProfileModule.SETWIFI_RESULT]);\n    }\n});\n')),(0,o.kt)("h3",{id:"bind-user-with-hs6"},"bind user with hs6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * birthday\n * weight(kg)\n * height(cm)\n * isSporter\n * gender\n * serialNumber\n */\nHS6Module.bindDeviceHS6("1979-02-26 12:20:10", 85.0, 180, 2, 1, "ACCF2337A952");\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    if (event.action === HS6ProfileModule.ACTION_HS6_BIND) {\n        console.log(event[HS6ProfileModule.HS6_BIND_EXTRA]);\n        // 1: bind success, 2: the scale has no empty position, 3: bind fail\n        console.log(event[HS6ProfileModule.BIND_HS6_RESULT]);\n        console.log(event[HS6ProfileModule.HS6_MODEL]);\n        // The range is from 1~10\n        console.log(event[HS6ProfileModule.HS6_POSITION]);\n        // 1: setted, 0: not\n        console.log(event[HS6ProfileModule.HS6_SETTED_WIFI]);\n    }\n});\n')),(0,o.kt)("h3",{id:"unbind-hs6"},"unbind hs6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS6Module.unBindDeviceHS6("ACCF2337A952");\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    if (event.action === HS6ProfileModule.ACTION_HS6_UNBIND) {\n        console.log(event[HS6ProfileModule.HS6_UNBIND_RESULT]);\n    }\n});\n')),(0,o.kt)("h3",{id:"get-token"},"get token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * clientId, \n * clientSecret, \n * username, \n * clientPara\n`*/\nHS6Module.getToken("xxx", "xxx", "xxx.xxx@xxx.com", "random_str");\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    if (event.action === HS6ProfileModule.ACTION_HS6_GET_TOKEN) {\n        console.log(event[HS6ProfileModule.GET_TOKEN_RESULT]);\n    }\n});\n')),(0,o.kt)("h3",{id:"set-unit"},"set unit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * username\n * unitType 0: Kg 1: lbs 2: st\n`*/\nHS6Module.setUnit("xxx.xxx@xxx.com", 0);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    if (event.action === HS6ProfileModule.ACTION_HS6_SET_UNIT) {\n        console.log(event[HS6ProfileModule.SET_UNIT_RESULT]);\n    }\n});\n')),(0,o.kt)("h3",{id:"get-data-stored-in-cloud"},"get data stored in cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS6Module.getCloudData("xxx", "xxx", "xxx.xxx@xxx.com", 0, 10);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(HS6Module.Event_Notify,  (event) => {\n    if (event.action === HSProfileModule.ACTION_HS6_GET_CLOUDDATA) {\n        \n    }\n});\n')))))}p.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);