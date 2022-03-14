"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[5655],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return P}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=s(t),P=r,p=f["".concat(d,".").concat(P)]||f[P]||u[P]||l;return t?o.createElement(p,i(i({ref:n},c),{},{components:t})):o.createElement(p,i({ref:n},c))}));function P(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84999:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var o=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],a={title:"BP5S",sidebar_position:3},d=void 0,s={unversionedId:"blood_pressure/bp5s",id:"version-1.4.9/blood_pressure/bp5s",isDocsHomePage:!1,title:"BP5S",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/blood_pressure/bp5s.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/bp5s",permalink:"/ihealthlabs-sdk-docs/react-native/blood_pressure/bp5s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/blood_pressure/bp5s.md",tags:[],version:"1.4.9",sidebarPosition:3,frontMatter:{title:"BP5S",sidebar_position:3},sidebar:"version-0.23.x/mainSidebar",previous:{title:"BP5",permalink:"/ihealthlabs-sdk-docs/react-native/blood_pressure/bp5"},next:{title:"BP7",permalink:"/ihealthlabs-sdk-docs/react-native/blood_pressure/bp7"}},c=[{value:"API Reference",id:"api-reference",children:[{value:"Import BP5S Module",id:"import-bp5s-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"cancel current measurement",id:"cancel-current-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"enable offline mode",id:"enable-offline-mode",children:[]},{value:"disable offline mode",id:"disable-offline-mode",children:[]},{value:"is enable offline mode",id:"is-enable-offline-mode",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],u={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"import-bp5s-module"},"Import BP5S Module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP5SModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,l.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,l.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,l.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.startMeasure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,l.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.stopMeasure(mac);\n")),(0,l.kt)("h3",{id:"get-battery"},"get battery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.enbleOffline(mac);\n")),(0,l.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.disableOffline(mac);\n")),(0,l.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {\n        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,l.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.disConnect(mac);\n")),(0,l.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getAllConnectedDevices();\n")))}f.isMDXComponent=!0}}]);