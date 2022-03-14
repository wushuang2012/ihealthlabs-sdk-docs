"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[2319],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46551:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"HS2S",sidebar_position:2},s=void 0,c={unversionedId:"scale/hs2s",id:"version-1.4.9/scale/hs2s",isDocsHomePage:!1,title:"HS2S",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/scale/hs2s.md",sourceDirName:"scale",slug:"/scale/hs2s",permalink:"/ihealthlabs-sdk-docs/react-native/scale/hs2s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/scale/hs2s.md",tags:[],version:"1.4.9",sidebarPosition:2,frontMatter:{title:"HS2S",sidebar_position:2},sidebar:"version-0.23.x/mainSidebar",previous:{title:"HS2",permalink:"/ihealthlabs-sdk-docs/react-native/scale/hs2"},next:{title:"HS4",permalink:"/ihealthlabs-sdk-docs/react-native/scale/hs4"}},d=[{value:"API Reference",id:"api-reference",children:[{value:"Import HS2S module",id:"import-hs2s-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get device information",id:"get-device-information",children:[]},{value:"get device battery",id:"get-device-battery",children:[]},{value:"set Unit",id:"set-unit",children:[]},{value:"get user information",id:"get-user-information",children:[]},{value:"create user",id:"create-user",children:[]},{value:"delete user",id:"delete-user",children:[]},{value:"get the number of offline data",id:"get-the-number-of-offline-data",children:[]},{value:"get offline data",id:"get-offline-data",children:[]},{value:"delete offline data by user id",id:"delete-offline-data-by-user-id",children:[]},{value:"get the number of anonymous offline data",id:"get-the-number-of-anonymous-offline-data",children:[]},{value:"get anonymous offline data",id:"get-anonymous-offline-data",children:[]},{value:"delete anonymous offline data",id:"delete-anonymous-offline-data",children:[]},{value:"start a online measurement",id:"start-a-online-measurement",children:[]},{value:"start heart rate measurement mode",id:"start-heart-rate-measurement-mode",children:[]},{value:"stop heart rate measurement mode",id:"stop-heart-rate-measurement-mode",children:[]},{value:"reset device",id:"reset-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"import-hs2s-module"},"Import HS2S module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  HS2SModule,\n  HS2SProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,r.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,r.kt)("h3",{id:"get-device-information"},"get device information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getDeviceInfo(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_get_device_info") {\n       console.log(event["battery"]);\n       console.log(event["unit_current"]);\n       console.log(event["user_count"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"get-device-battery"},"get device battery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_get_battery_hs") {\n       console.log(event["battery_hs"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"set-unit"},"set Unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.setUnit(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_set_unit") {\n       console.log(event["result"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"get-user-information"},"get user information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getUserInfo(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_get_user_info") {\n       console.log(event["user_info-count"]);\n       let array = event["user_info_array"];\n       console.log(array["body_building"]);\n       console.log(array["impedance"]);\n       console.log(array["height"]);\n       console.log(array["age"]);\n       console.log(array["gender"]);\n       console.log(array["weight"]);\n       console.log(array["create_time"]);\n       console.log(array["user_id"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"create-user"},"create user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.updateUserInfo(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_create_or_update_user_info") {\n       console.log(event["result"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"delete-user"},"delete user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.deleteUser(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_delete_user_info") {\n       console.log(event["result"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"get-the-number-of-offline-data"},"get the number of offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getMemoryDataCount(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_history_data_num") {\n       console.log(event["history_data_count"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"get-offline-data"},"get offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getMemoryData(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_history_data") {\n        let arr = event["history_data"];\n        arr.forEach(function(result) {\n            console.log(result["fat_weight"]);\n            console.log(result["fat_control"];\n            console.log(result["weight_control"];\n            console.log(result["standard_weight"];\n            console.log(result["skeletal_muscle_mass"];\n            console.log(result["body_water_rate"];\n            console.log(result["muscle_mas"];\n            console.log(result["instruction_type"];\n            console.log(result["body_building"];\n            console.log(result["height"];\n            console.log(result["gender"];\n            console.log(result["muscle_control"];\n            console.log(result["physical_age"];\n            console.log(result["visceral_fat_grade"];\n            console.log(result["protein_rate"];\n            console.log(result["bone_salt_content"];\n            console.log(result["visceral_fat_grade"];\n            console.log(result["measure_time"];\n            console.log(result["age"];\n            console.log(result["impedance"];\n            console.log(result["weight"];\n       })\n    }\n}\n')),(0,r.kt)("h3",{id:"delete-offline-data-by-user-id"},"delete offline data by user id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.deleteMemoryData(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_delete_history_data") {\n       console.log(event["result"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"get-the-number-of-anonymous-offline-data"},"get the number of anonymous offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getAnonymousMemoryDataCount(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_anonymous_data_num") {\n       console.log(event["anonymous_data_count"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"get-anonymous-offline-data"},"get anonymous offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.getAnonymousMemoryData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_anonymous_data") {\n        let arr = event["history_data"];\n        arr.forEach(function(result) {\n            console.log(result["instruction_type"];\n            console.log(result["body_building"];\n            console.log(result["height"];\n            console.log(result["gender"];\n            console.log(result["measure_time"];\n            console.log(result["age"];\n            console.log(result["impedance"];\n            console.log(result["weight"];\n       })\n    }\n}\n')),(0,r.kt)("h3",{id:"delete-anonymous-offline-data"},"delete anonymous offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.deleteAnonymousMemoryData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_delete_anonymous_data") {\n       console.log(event["result"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"start-a-online-measurement"},"start a online measurement"),(0,r.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.measure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_specify_users") {\n        console.log(event["result"]);\n        // 1: success, 0: failure\n\n    } else if (event.action === "action_online_real_time_weight") {\n        console.log(event["weight"]);\n\n    } else if (event.action === "action_online_result") {\n        console.log(event["weight"]);\n\n    } else if (event.action === "action_body_fat_result") {\n        let bodyFat = event["data_body_fat_result"];\n        let fat_weight = bodyFat["fat_weight"];\n        let fat_control = bodyFat["fat_control"];\n        let weight_control = bodyFat["weight_control"];\n        let standard_weight = bodyFat["standard_weight"];\n        let skeletal_muscle_mass = bodyFat["skeletal_muscle_mass"];\n        let body_water_rate = bodyFat["body_water_rate"];\n        let muscle_mas = bodyFat["muscle_mas"];\n        let instruction_type = bodyFat["instruction_type"];\n        let body_building = bodyFat["body_building"];\n        let height = bodyFat["height"];\n        let gender = bodyFat["gender"];\n        let muscle_control = bodyFat["muscle_control"];\n        let physical_age = bodyFat["physical_age"];\n        let visceral_fat_grade = bodyFat["visceral_fat_grade"];\n        let protein_rate = bodyFat["protein_rate"];\n        let bone_salt_content = bodyFat["bone_salt_content"];\n        let visceral_fat_grade = bodyFat["visceral_fat_grade"];\n        let measure_time = bodyFat["measure_time"];\n        let age = bodyFat["age"];\n        let impedance = bodyFat["impedance"];\n        let weight = bodyFat["weight"];\n\n    } else if (event.action === "action_measure_finish_at_critical") { }\n});\n')),(0,r.kt)("h3",{id:"start-heart-rate-measurement-mode"},"start heart rate measurement mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"HS2SModule.resetDevice(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === HS2SProfileModule.ACTION_HS2S_MEASURE_HEARTRATE) {\n       \n    }\n}\n")),(0,r.kt)("h3",{id:"stop-heart-rate-measurement-mode"},"stop heart rate measurement mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.resetDevice(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === HS2SProfileModule.ACTION_HS2S_EXIT_MEASURE_HEARTRATE_STATUS) {\n        // {"status":0,"heartrate":78}\n       console.log(event.message);\n    }\n}\n')),(0,r.kt)("h3",{id:"reset-device"},"reset device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'HS2SModule.resetDevice(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SModule.Event_Notify,  (event) => {\n    if (event.action === "action_restore_factory_settings") {\n       console.log(event["result"]);\n    }\n}\n')),(0,r.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"HS2SModule.disConnect(mac);\n")),(0,r.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"HS2SModule.getAllConnectedDevices();\n")))}m.isMDXComponent=!0}}]);