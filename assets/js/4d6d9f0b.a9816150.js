"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[8044],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return A}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},M={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),A=i,m=u["".concat(s,".").concat(A)]||u[A]||M[A]||r;return t?o.createElement(m,l(l({ref:n},c),{},{components:t})):o.createElement(m,l({ref:n},c))}));function A(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43140:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],a={title:"AM3S",sidebar_position:2},s=void 0,d={unversionedId:"tracker/am3s",id:"version-1.4.9/tracker/am3s",isDocsHomePage:!1,title:"AM3S",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/tracker/am3s.md",sourceDirName:"tracker",slug:"/tracker/am3s",permalink:"/ihealthlabs-sdk-docs/react-native/tracker/am3s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/react-native_versioned_docs/version-1.4.9/tracker/am3s.md",tags:[],version:"1.4.9",sidebarPosition:2,frontMatter:{title:"AM3S",sidebar_position:2},sidebar:"version-0.23.x/mainSidebar",previous:{title:"AM3",permalink:"/ihealthlabs-sdk-docs/react-native/tracker/am3"},next:{title:"AM4",permalink:"/ihealthlabs-sdk-docs/react-native/tracker/am4"}},c=[{value:"API Reference",id:"api-reference",children:[{value:"Import AM3S Module",id:"import-am3s-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get all connected am3s devices",id:"get-all-connected-am3s-devices",children:[]},{value:"disconnect a am3s devices",id:"disconnect-a-am3s-devices",children:[]},{value:"erase am3s memory",id:"erase-am3s-memory",children:[]},{value:"get the user id bound to the device",id:"get-the-user-id-bound-to-the-device",children:[]},{value:"set the user id to the device",id:"set-the-user-id-to-the-device",children:[]},{value:"setAlarmClock",id:"setalarmclock",children:[]},{value:"get alarm clock ids",id:"get-alarm-clock-ids",children:[]},{value:"get alarm clock detail",id:"get-alarm-clock-detail",children:[]},{value:"delete alarm clock by id",id:"delete-alarm-clock-by-id",children:[]},{value:"set activity reminder interval",id:"set-activity-reminder-interval",children:[]},{value:"get activity reminder interval",id:"get-activity-reminder-interval",children:[]},{value:"get am3s information",id:"get-am3s-information",children:[]},{value:"set user id to the am3s device",id:"set-user-id-to-the-am3s-device",children:[]},{value:"set user information to the am3s device",id:"set-user-information-to-the-am3s-device",children:[]},{value:"get user information stored in the am3s device",id:"get-user-information-stored-in-the-am3s-device",children:[]},{value:"set bmr to the am3s device",id:"set-bmr-to-the-am3s-device",children:[]},{value:"get activity steps",id:"get-activity-steps",children:[]},{value:"get current activity steps",id:"get-current-activity-steps",children:[]},{value:"set current time to am3s device",id:"set-current-time-to-am3s-device",children:[]},{value:"set hour mode (12 or 24) to am3s device",id:"set-hour-mode-12-or-24-to-am3s-device",children:[]},{value:"get hour mode (12 or 24) from am3s device",id:"get-hour-mode-12-or-24-from-am3s-device",children:[]},{value:"get sleep data stored in the am3s",id:"get-sleep-data-stored-in-the-am3s",children:[]}]}],M={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},M,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"import-am3s-module"},"Import AM3S Module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  AM3SModule,\n  AMProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,r.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,r.kt)("h3",{id:"get-all-connected-am3s-devices"},"get all connected am3s devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getAllConnectedDevices();\n")),(0,r.kt)("h3",{id:"disconnect-a-am3s-devices"},"disconnect a am3s devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.disconnect(mac);\n")),(0,r.kt)("h3",{id:"erase-am3s-memory"},"erase am3s memory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.reset(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_RESET_AM) {\n        if (0 === event[AMProfileModule.RESET_AM]) {\n            console.log('reset fail');\n        } else if (1 === event[AMProfileModule.RESET_AM]) {\n            console.log('reset success');\n        }\n    }\n});\n")),(0,r.kt)("h3",{id:"get-the-user-id-bound-to-the-device"},"get the user id bound to the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getUserId(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_USERID_AM) {\n        console.log(event[AMProfileModule.USERID_AM]);\n    }\n});\n")),(0,r.kt)("h3",{id:"set-the-user-id-to-the-device"},"set the user id to the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// id: user id, the range is 0~0x7fffffff\nAM3SModule.setUserId(mac, id);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_USERID_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"setalarmclock"},"setAlarmClock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\n/**\n * id: alarm clock id, you can set up to 3 alarm clocks\n * hour: clock hour\n * min:  clock minates\n * isRepeat: one time or repeat\n * weeks: available on the day of the week\n * isOn: open or close\n */\n\nAM3SModule.setAlarmClock(mac, 1, 12, 0, true, [1, 1, 1, 1, 1, 0, 0], false);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"get-alarm-clock-ids"},"get alarm clock ids"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getAlarmClockNum(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM) {\n        console.log(event[AMProfileModule.GET_ALARMNUM_AM]);    // e.g. 3\n        console.log(event[AMProfileModule.GET_ALARMNUM_ID_AM]); // e.g. [1, 2, 3]\n    }\n});\n")),(0,r.kt)("h3",{id:"get-alarm-clock-detail"},"get alarm clock detail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM3SModule.getAlarmClockDetail(mac, [1, 3, 2]);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_ALARMINFO_AM) {\n        let dataArray = event[BPProfileModule.GET_ALARM_CLOCK_DETAIL];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n                console.log(offlineData[AMProfileModule.GET_ALARM_ID_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_TIME_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_ISREPEAT_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_WEEK_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_ISON_AM]);\n            }\n        } \n    }\n});\n')),(0,r.kt)("h3",{id:"delete-alarm-clock-by-id"},"delete alarm clock by id"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.deleteAlarmClock(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_DELETE_ALARM_SUCCESS_AM) {\n        console.log('delete success');\n    }\n});\n")),(0,r.kt)("h3",{id:"set-activity-reminder-interval"},"set activity reminder interval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * hour\n * min\n * isOn: open or close\n */\nAM3SModule.setActivityRemind(mac, 0, 30, false);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"get-activity-reminder-interval"},"get activity reminder interval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getActivityRemind(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM) {\n        console.log('get success');\n    }\n});\n")),(0,r.kt)("h3",{id:"get-am3s-information"},"get am3s information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.queryAMState(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_QUERY_STATE_AM) {\n        // 0 indicates waist\n        // 1 indicates wrist\n        // 2 indicates sleep\n        console.log(event[AMProfileModule.QUERY_STATE_AM]);\n        // battery level 0~10\n        console.log(event[AMProfileModule.QUERY_BATTERY_AM]);\n    }\n});\n")),(0,r.kt)("h3",{id:"set-user-id-to-the-am3s-device"},"set user id to the am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// The user id range is from 0 to 0x7fffffff\nAM3SModule.setUserId(mac, 8);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_USERID_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"set-user-information-to-the-am3s-device"},"set user information to the am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * age\n * height(cm)\n * weight(lbs)\n * gender 0: female, 1: male\n * unit 0: miles, 1: kilometre\n * target the goal of steps, the range is from 4 ~ 65535\n * activityLevel 1: sedentary, 2: active, 3: very active\n */\nAM3SModule.setUserInfo(mac, 25, 183, 80, AMProfileModule.AM_SET_MALE, AMProfileModule.AM_SET_UNIT_METRIC, 10000, 1, 30);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"get-user-information-stored-in-the-am3s-device"},"get user information stored in the am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getUserInfo(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_USERINFO_AM) {\n        console.log(event[AMProfileModule.GET_USER_AGE_AM]);\n        console.log(event[AMProfileModule.GET_USER_STEP_AM]);\n        console.log(event[AMProfileModule.GET_USER_HEIGHT_AM]);\n        console.log(event[AMProfileModule.GET_USER_SEX_AM]);\n        console.log(event[AMProfileModule.GET_USER_WEIGHT_AM]);\n        console.log(event[AMProfileModule.GET_USER_UNIT_AM]);\n        console.log(event[AMProfileModule.GET_USER_AGE_AM]);\n        console.log(event[AMProfileModule.GET_USER_TARGET1_AM]);\n        console.log(event[AMProfileModule.GET_USER_TARGET2_AM]);\n        console.log(event[AMProfileModule.GET_USER_TARGET3_AM]);\n    }\n});\n")),(0,r.kt)("h3",{id:"set-bmr-to-the-am3s-device"},"set bmr to the am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// bmr Basal Metabolic Rate\nAM3SModule.setUserBmr(mac, 2000);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_BMR_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"get-activity-steps"},"get activity steps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM3SModule.syncActivityData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_ACTIVITY_DATA_AM) {\n        let dataArray = event[AMProfileModule.SYNC_ACTIVITY_EACH_DATA_AM];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_TIME_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_STEP_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_CALORIE_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM]);\n                console.log(offlineData[AMProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,r.kt)("h3",{id:"get-current-activity-steps"},"get current activity steps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.syncRealData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_REAL_DATA_AM) {\n        console.log(offlineData[AMProfileModule.SYNC_REAL_STEP_AM]);\n        console.log(offlineData[AMProfileModule.SYNC_REAL_CALORIE_AM]);\n        console.log(offlineData[AMProfileModule.SYNC_REAL_TOTALCALORIE_AM]);\n    }\n});\n")),(0,r.kt)("h3",{id:"set-current-time-to-am3s-device"},"set current time to am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.syncRealData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_TIME_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"set-hour-mode-12-or-24-to-am3s-device"},"set hour mode (12 or 24) to am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * AMProfileModule.AM_SET_12_HOUR_MODE(0)\n * AMProfileModule.AM_SET_24_HOUR_MODE(1)\n * AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE(2)\n * AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE(3)\n * AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE(4)\n * AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE\n **/\nAM3SModule.setHourMode(mac, AMProfileModule.AM_SET_24_HOUR_MODE);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_HOUR_MODE_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,r.kt)("h3",{id:"get-hour-mode-12-or-24-from-am3s-device"},"get hour mode (12 or 24) from am3s device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getHourMode(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_HOUR_MODE_AM) {\n        console.log(event[AMProfileModule.GET_HOUR_MODE_AM]);\n    }\n});\n")),(0,r.kt)("h3",{id:"get-sleep-data-stored-in-the-am3s"},"get sleep data stored in the am3s"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM3SModule.syncSleepData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_SLEEP_DATA_AM) {\n        let dataArray = event[AMProfileModule.SYNC_SLEEP_DATA_AM];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n                console.log(offlineData[AMProfileModule.SYNC_SLEEP_EACH_DATA_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_SLEEP_DATA_TIME_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_SLEEP_DATA_LEVEL_AM]);\n                console.log(offlineData[AMProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')))}u.isMDXComponent=!0}}]);