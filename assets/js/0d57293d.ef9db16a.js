"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[317],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),c=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),v=r,p=f["".concat(d,".").concat(v)]||f[v]||s[v]||i;return t?o.createElement(p,l(l({ref:n},u),{},{components:t})):o.createElement(p,l({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9827:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],a={},d="KN550",c={unversionedId:"device/kn550",id:"device/kn550",isDocsHomePage:!1,title:"KN550",description:"import KN550 module",source:"@site/docs/device/kn550.md",sourceDirName:"device",slug:"/device/kn550",permalink:"/doc.sdk.ihealthlabs/docs/device/kn550",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/kn550.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HS6",permalink:"/doc.sdk.ihealthlabs/docs/device/hs6"},next:{title:"NT13B",permalink:"/doc.sdk.ihealthlabs/docs/device/nt13b"}},u=[{value:"import KN550 module",id:"import-kn550-module",children:[]},{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"get KN550 function",id:"get-kn550-function",children:[]},{value:"get quantity of data stored in the KN550 device",id:"get-quantity-of-data-stored-in-the-kn550-device",children:[]},{value:"get data stored in the KN550 device",id:"get-data-stored-in-the-kn550-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get device information",id:"get-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],s={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kn550"},"KN550"),(0,i.kt)("h2",{id:"import-kn550-module"},"import KN550 module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP550BTModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,i.kt)("h3",{id:"get-battery"},"get battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,i.kt)("h3",{id:"get-kn550-function"},"get KN550 function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getFunctionInfo(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_FUNCTION_INFORMATION_BP) {\n        console.log(event[BPProfileModule.FUNCTION_IS_UPAIR_MEASURE]);\n        console.log(event[BPProfileModule.FUNCTION_IS_ARM_MEASURE]);\n        console.log(event[BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR]);\n        console.log(event[BPProfileModule.FUNCTION_HAVE_OFFLINE]);\n        console.log(event[BPProfileModule.FUNCTION_HAVE_HSD]);\n        console.log(event[BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING]);\n        console.log(event[BPProfileModule.FUNCTION_IS_MULTI_UPLOAD]);\n        console.log(event[BPProfileModule.FUNCTION_HAVE_SELF_UPDATE]);\n    }\n});\n")),(0,i.kt)("h3",{id:"get-quantity-of-data-stored-in-the-kn550-device"},"get quantity of data stored in the KN550 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,i.kt)("h3",{id:"get-data-stored-in-the-kn550-device"},"get data stored in the KN550 device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BP550BTModule.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,i.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.disconnect(mac);\n")),(0,i.kt)("h3",{id:"get-device-information"},"get device information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {\n    console.info(event);\n})\n")),(0,i.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getAllConnectedDevices();\n")))}f.isMDXComponent=!0}}]);