"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[8286],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},S={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||S[d]||r;return t?i.createElement(f,s(s({ref:n},g),{},{components:t})):i.createElement(f,s({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21591:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return g}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),s=["components"],o={title:"HS2S",sidebar_position:2},l=void 0,c={unversionedId:"scale/hs2s",id:"version-2.7.7/scale/hs2s",isDocsHomePage:!1,title:"HS2S",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/scale/hs2s.md",sourceDirName:"scale",slug:"/scale/hs2s",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs2s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/scale/hs2s.md",tags:[],version:"2.7.7",sidebarPosition:2,frontMatter:{title:"HS2S",sidebar_position:2},sidebar:"version-1.33.x/mainSidebar",previous:{title:"HS2",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs2"},next:{title:"HS4",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs4"}},g=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for HS2S devices",id:"2scan-for-hs2s-devices",children:[]},{value:"3.Connect to HS2S devices",id:"3connect-to-hs2s-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device info",id:"get-the-device-info",children:[]},{value:"Get the battery info",id:"get-the-battery-info",children:[]},{value:"Set the unit of device",id:"set-the-unit-of-device",children:[]},{value:"Get the info of user in hs2s",id:"get-the-info-of-user-in-hs2s",children:[]},{value:"Create or update user info in device",id:"create-or-update-user-info-in-device",children:[]},{value:"Delete user info in device",id:"delete-user-info-in-device",children:[]},{value:"Specify tourist users",id:"specify-tourist-users",children:[]},{value:"Specify Online Users",id:"specify-online-users",children:[]},{value:"Get off line data count",id:"get-off-line-data-count",children:[]},{value:"Get offline data",id:"get-offline-data",children:[]},{value:"Delete offline data",id:"delete-offline-data",children:[]}]}],S={toc:g};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},S,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect Hs2s scale.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get device info, if don't have any user info, create a user info and take a measure directly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get user info, if have this user info, get data stored in hs2s. if don't have this user info, create a user info.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get offline data and take measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS2S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-hs2s-devices"},"2.Scan for HS2S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.HS2S);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"3connect-to-hs2s-devices"},"3.Connect to HS2S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS2S)\n\nHs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"get-the-device-info"},"Get the device info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.getDeviceInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_GET_DEVICE_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int userCount = obj.getInt(Hs2sProfile.HS_USER_COUNT)\n                int unit = obj.getInt(Hs2sProfile.HS_UNIT_CURRENT)\n                int bettery = obj.getInt(Hs2sProfile.BATTERY_HS)\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-the-battery-info"},"Get the battery info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.getBattery();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_BATTERY_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(Hs2sProfile.BATTERY_HS)\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"set-the-unit-of-device"},"Set the unit of device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\n\n//  Hs2sProfile#UNIT_LB}  <br>  {@link Hs2sProfile#UNIT_ST\ncontrol.setUnit(Hs2sProfile.UNIT_KG);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_SET_UNIT_SUCCESS.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-the-info-of-user-in-hs2s"},"Get the info of user in hs2s"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.getUserInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_GET_USER_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int userCount = obj.getInt(Hs2sProfile.USER_INFO_COUNT);\n                JSONArray userArr = obj.gegetJSONArray(Hs2sProfile.USER_INFO_ARRAY);\n                for (int i = 0; i < userCount; i++) {\n                    JSONObject user = userArr.getJSONObject(i);\n\n                    String    userId = user.getString(Hs2sProfile.USER_INFO_USER_ID);\n                    long        time = user.getLong(Hs2sProfile.USER_INFO_CREATE_TIME);\n                    String    weigth = user.getString(Hs2sProfile.USER_INFO_WEIGHT);\n                    int       gender = user.getInt(Hs2sProfile.USER_INFO_GENDER);\n                    int          age = user.getInt(Hs2sProfile.USER_INFO_AGE);\n                    int       height = user.getInt(Hs2sProfile.USER_INFO_HEIGHT);\n                    int bodybuilding = user.getInt(Hs2sProfile.USER_INFO_BODYBUILDING);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"create-or-update-user-info-in-device"},"Create or update user info in device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\n/*\n * @param id           User id  (The length of ID must be 16)\n * @param weight       weight   (unit kg     range: 20kg-180kg)\n * @param gender       0:women      1:man\n * @param age          age    18-99  (If it is not within this range, it is impossible to measure the constitution correctly.)\n * @param height       height  90-220 cm    (If it is not within this range, it is impossible to measure the constitution correctly.)\n * @param impedance    0:No body fat measurement    1:body fat measurement\n * @param bodybuilding 0:No   Bodybuilding          1:Bodybuilding\n */\ncontrol.createOrUpdateUserInfo(String id, float weight, int gender, int age, int height, int impedance, int bodybuilding);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_CREATE_OR_UPDATE_USER_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n                \n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"delete-user-info-in-device"},"Delete user info in device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.deleteUserInfo(String id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_DELETE_USER_INFO.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n               String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"specify-tourist-users"},"Specify tourist users"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.specifyTouristUsers();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_SPECIFY_USERS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Hs2sProfile.ACTION_ONLINE_REAL_TIME_WEIGHT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Hs2sProfile.ACTION_ONLINE_RESULT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String dataId = obj.getInt(Hs2sProfile.DATA_ID);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"specify-online-users"},"Specify Online Users"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\n/*\n * @param id           User id  (The length of ID must be 16)\n * @param weight       weight   (unit kg     range: 20kg-180kg)\n * @param gender       0:women      1:man\n * @param age          age    18-99  (If it is not within this range, it is impossible to measure the constitution correctly.)\n * @param height       height  90-220 cm    (If it is not within this range, it is impossible to measure the constitution correctly.)\n * @param impedance    0:No body fat measurement    1:body fat measurement\n * @param bodybuilding 0:No   Bodybuilding          1:Bodybuilding\n */\ncontrol.specifyOnlineUsers(String id, \n                           float weight, \n                           int gender,\n                           int age, \n                           int height, \n                           int impedance,\n                           int bodybuilding)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_SPECIFY_USERS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Hs2sProfile.ACTION_ONLINE_REAL_TIME_WEIGHT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Hs2sProfile.ACTION_ONLINE_RESULT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String dataId = obj.getInt(Hs2sProfile.DATA_ID);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Hs2sProfile.ACTION_ONLINE_RESULT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String dataId = obj.getInt(Hs2sProfile.DATA_ID);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                Double weight = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Hs2sProfile.DATA_BODY_FAT_RESULT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                Double weight = obj.getDouble(Hs2sProfile.OPERATION_DESCRIBE);\n                String dataId = obj.getString(Hs2sProfile.DATA_ID);\n                Double description = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n                int userCount = obj.getString(Hs2sProfile.DATA_USER_NUM);\n                int gender = obj.getString(Hs2sProfile.DATA_GENDER);\n                int age = obj.getString(Hs2sProfile.DATA_AGE);\n                int height = obj.getString(Hs2sProfile.DATA_HEIGHT);\n                long measureTs = obj.getLong(Hs2sProfile.DATA_MEASURE_TIME);\n                int bodyBuilding = obj.getInt(Hs2sProfile.DATA_BODYBUILDING);\n                int type = obj.getInt(Hs2sProfile.DATA_INSTRUCTION_TYPE);\n\n                JSONObject objResult = obj.getJSONObject(Hs2sProfile.DATA_BODY_FAT_RESULT);\n                String bodyFit = obj.getString(Hs2sProfile.DATA_BODY_FIT_PERCENTAGE);\n                String muscleMass = obj.getString(Hs2sProfile.DATA_MUSCLE_MASS);\n                String boneSaltContent = obj.getString(Hs2sProfile.DATA_BONE_SALT_CONTENT);\n                String bodyWater = obj.getString(Hs2sProfile.DATA_BODY_WATER_RATE);\n                String protein = obj.getString(Hs2sProfile.DATA_PROTEIN_RATE);\n                String skeletalMuscleMass = obj.getString(Hs2sProfile.DATA_SKELETAL_MUSCLE_MASS);\n                String visceralFat = obj.getString(Hs2sProfile.DATA_VISCERAL_FAT_GRADE);\n                String physicalAge = obj.getString(Hs2sProfile.DATA_PHYSICAL_AGE);\n                String standardWeight = obj.getString(Hs2sProfile.DATA_STANDARD_WEIGHT);\n                String weightControl = obj.getString(Hs2sProfile.DATA_WEIGHT_CONTROL);\n                String muscleControl = obj.getString(Hs2sProfile.DATA_MUSCLE_CONTROL);\n                String fatControl = obj.getString(Hs2sProfile.DATA_FAT_CONTROL);\n                String fatWeight = obj.getString(Hs2sProfile.DATA_FAT_WEIGHT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"get-off-line-data-count"},"Get off line data count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.getOfflineDataCount(String... IDArray);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_HISTORY_DATA_NUM.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int userCount = obj.getInt(Hs2sProfile.HISTORY_DATA_USER_COUNT);\n                JSONArray countArr = obj.gegetJSONArray(Hs2sProfile.HISTORY_DATA_COUNT_ARRAY);\n                for (int i = 0; i < userCount; i++) {\n                    JSONObject countObj = userArr.getJSONObject(i);\n                    int count = countObj.getInt(Hs2sProfile.HISTORY_DATA_COUNT);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-offline-data"},"Get offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.getOfflineData(String id) \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_HISTORY_DATA.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    int status = obj.getInt(Hs2sProfile.OPERATION_STATUS);\n                    Double weight = obj.getDouble(Hs2sProfile.OPERATION_DESCRIBE);\n                    String dataId = obj.getString(Hs2sProfile.DATA_ID);\n                    Double description = obj.getDouble(Hs2sProfile.DATA_WEIGHT);\n                    int userCount = obj.getString(Hs2sProfile.DATA_USER_NUM);\n                    int gender = obj.getString(Hs2sProfile.DATA_GENDER);\n                    int age = obj.getString(Hs2sProfile.DATA_AGE);\n                    int height = obj.getString(Hs2sProfile.DATA_HEIGHT);\n                    long measureTs = obj.getLong(Hs2sProfile.DATA_MEASURE_TIME);\n                    int bodyBuilding = obj.getInt(Hs2sProfile.DATA_BODYBUILDING);\n                    int type = obj.getInt(Hs2sProfile.DATA_INSTRUCTION_TYPE);\n\n                    JSONObject objResult = obj.getJSONObject(Hs2sProfile.DATA_BODY_FAT_RESULT);\n                    String bodyFit = obj.getString(Hs2sProfile.DATA_BODY_FIT_PERCENTAGE);\n                    String muscleMass = obj.getString(Hs2sProfile.DATA_MUSCLE_MASS);\n                    String boneSaltContent = obj.getString(Hs2sProfile.DATA_BONE_SALT_CONTENT);\n                    String bodyWater = obj.getString(Hs2sProfile.DATA_BODY_WATER_RATE);\n                    String protein = obj.getString(Hs2sProfile.DATA_PROTEIN_RATE);\n                    String skeletalMuscleMass = obj.getString(Hs2sProfile.DATA_SKELETAL_MUSCLE_MASS);\n                    String visceralFat = obj.getString(Hs2sProfile.DATA_VISCERAL_FAT_GRADE);\n                    String physicalAge = obj.getString(Hs2sProfile.DATA_PHYSICAL_AGE);\n                    String standardWeight = obj.getString(Hs2sProfile.DATA_STANDARD_WEIGHT);\n                    String weightControl = obj.getString(Hs2sProfile.DATA_WEIGHT_CONTROL);\n                    String muscleControl = obj.getString(Hs2sProfile.DATA_MUSCLE_CONTROL);\n                    String fatControl = obj.getString(Hs2sProfile.DATA_FAT_CONTROL);\n                    String fatWeight = obj.getString(Hs2sProfile.DATA_FAT_WEIGHT);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"delete-offline-data"},"Delete offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2sControl control = iHealthDevicesManager.getInstance().getHs2sControl(mDeviceMac);\ncontrol.deleteOfflineData(String id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Hs2sProfile.ACTION_DELETE_HISTORY_DATA.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int status = obj.getInt(Hs2sProfile.OPERATION_STATUS)\n                String description = obj.getString(Hs2sProfile.OPERATION_DESCRIBE)\n               \n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")))}u.isMDXComponent=!0}}]);