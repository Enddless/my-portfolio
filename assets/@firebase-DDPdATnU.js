import{o as Su}from"./idb-BXWtuYvb.js";var os={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Pu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,c=s>>2,l=(s&3)<<4|a>>4;let f=(a&15)<<2|h>>6,g=h&63;u||(g=64,o||(f=64)),r.push(e[c],e[l],e[f],e[g])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(lo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const l=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||h==null||l==null)throw new Cu;const f=s<<2|a>>4;if(r.push(f),h!==64){const g=a<<4&240|h>>2;if(r.push(g),l!==64){const A=h<<6&192|l;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vu=function(n){const t=lo(n);return fo.encodeByteArray(t,!0)},Tn=function(n){return Vu(n).replace(/\./g,"")},Du=function(n){try{return fo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=()=>bu().__FIREBASE_DEFAULTS__,ku=()=>{if(typeof process>"u"||typeof os>"u")return;const n=os.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ou=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Du(n[1]);return t&&JSON.parse(t)},ti=()=>{try{return Nu()||ku()||Ou()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xu=n=>{var t,e;return(e=(t=ti())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Mu=n=>{const t=xu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},po=()=>{var n;return(n=ti())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tn(JSON.stringify(e)),Tn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){var n;const t=(n=ti())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bu(){return!Uu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function go(){try{return typeof indexedDB=="object"}catch{return!1}}function qu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="FirebaseError";class de extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=$u,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?ju(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new de(i,a,r)}}function ju(n,t){return n.replace(zu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const zu=/\{\$([^}]+)}/g;function wr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(as(s)&&as(o)){if(!wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function as(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}class Ne{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Lu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qu(t))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vt){return this.instances.has(t)}getOptions(t=Vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ku(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vt){return this.component?this.component.multipleInstances?t:Vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ku(n){return n===Vt?void 0:n}function Qu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Gu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Wu={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Yu=P.INFO,Xu={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Ju=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Xu[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _o{constructor(t){this.name=t,this._logLevel=Yu,this._logHandler=Ju,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in P))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...t),this._logHandler(this,P.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...t),this._logHandler(this,P.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,P.INFO,...t),this._logHandler(this,P.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,P.WARN,...t),this._logHandler(this,P.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...t),this._logHandler(this,P.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(th(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function th(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ar="@firebase/app",us="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new _o("@firebase/app"),eh="@firebase/app-compat",nh="@firebase/analytics-compat",rh="@firebase/analytics",ih="@firebase/app-check-compat",sh="@firebase/app-check",oh="@firebase/auth",ah="@firebase/auth-compat",uh="@firebase/database",hh="@firebase/database-compat",ch="@firebase/functions",lh="@firebase/functions-compat",dh="@firebase/installations",fh="@firebase/installations-compat",ph="@firebase/messaging",gh="@firebase/messaging-compat",mh="@firebase/performance",_h="@firebase/performance-compat",yh="@firebase/remote-config",Eh="@firebase/remote-config-compat",vh="@firebase/storage",Th="@firebase/storage-compat",Ih="@firebase/firestore",wh="@firebase/firestore-compat",Ah="firebase",Rh="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]",Sh={[Ar]:"fire-core",[eh]:"fire-core-compat",[rh]:"fire-analytics",[nh]:"fire-analytics-compat",[sh]:"fire-app-check",[ih]:"fire-app-check-compat",[oh]:"fire-auth",[ah]:"fire-auth-compat",[uh]:"fire-rtdb",[hh]:"fire-rtdb-compat",[ch]:"fire-fn",[lh]:"fire-fn-compat",[dh]:"fire-iid",[fh]:"fire-iid-compat",[ph]:"fire-fcm",[gh]:"fire-fcm-compat",[mh]:"fire-perf",[_h]:"fire-perf-compat",[yh]:"fire-rc",[Eh]:"fire-rc-compat",[vh]:"fire-gcs",[Th]:"fire-gcs-compat",[Ih]:"fire-fst",[wh]:"fire-fst-compat","fire-js":"fire-js",[Ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Map,Sr=new Map;function Ph(n,t){try{n.container.addComponent(t)}catch(e){Ft.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function An(n){const t=n.name;if(Sr.has(t))return Ft.debug(`There were multiple attempts to register component ${t}.`),!1;Sr.set(t,n);for(const e of wn.values())Ph(e,n);return!0}function Ch(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new mo("app","Firebase",Vh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=Rh;function Nh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(e||(e=po()),!e)throw wt.create("no-options");const s=wn.get(i);if(s){if(wr(e,s.options)&&wr(r,s.config))return s;throw wt.create("duplicate-app",{appName:i})}const o=new Hu(i);for(const u of Sr.values())o.addComponent(u);const a=new Dh(e,r,o);return wn.set(i,a),a}function kh(n=Rr){const t=wn.get(n);if(!t&&n===Rr&&po())return Nh();if(!t)throw wt.create("no-app",{appName:n});return t}function Se(n,t,e){var r;let i=(r=Sh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}An(new Ne(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="firebase-heartbeat-database",xh=1,ke="firebase-heartbeat-store";let hr=null;function yo(){return hr||(hr=Su(Oh,xh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ke)}catch(e){console.warn(e)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),hr}async function Mh(n){try{const e=(await yo()).transaction(ke),r=await e.objectStore(ke).get(Eo(n));return await e.done,r}catch(t){if(t instanceof de)Ft.warn(t.message);else{const e=wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(e.message)}}}async function hs(n,t){try{const r=(await yo()).transaction(ke,"readwrite");await r.objectStore(ke).put(t,Eo(n)),await r.done}catch(e){if(e instanceof de)Ft.warn(e.message);else{const r=wt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(r.message)}}}function Eo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1024,Fh=30*24*60*60*1e3;class Uh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Fh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cs(),{heartbeatsToSend:r,unsentEntries:i}=Bh(this._heartbeatsCache.heartbeats),s=Tn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cs(){return new Date().toISOString().substring(0,10)}function Bh(n,t=Lh){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ls(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ls(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class qh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return go()?qu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Mh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return hs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ls(n){return Tn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){An(new Ne("platform-logger",t=>new Zu(t),"PRIVATE")),An(new Ne("heartbeat",t=>new Uh(t),"PRIVATE")),Se(Ar,us,n),Se(Ar,us,"esm2017"),Se("fire-js","")}$h("");var jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ei=ei||{},v=jh||self;function Mn(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Qe(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function zh(n){return Object.prototype.hasOwnProperty.call(n,cr)&&n[cr]||(n[cr]=++Gh)}var cr="closure_uid_"+(1e9*Math.random()>>>0),Gh=0;function Kh(n,t,e){return n.call.apply(n.bind,arguments)}function Qh(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Z(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Kh:Z=Qh,Z.apply(null,arguments)}function hn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function z(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Pt(){this.s=this.s,this.o=this.o}var Hh=0;Pt.prototype.s=!1;Pt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Hh!=0)&&zh(this)};Pt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vo=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ni(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function ds(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Mn(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function tt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Wh=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};v.addEventListener("test",e,t),v.removeEventListener("test",e,t)}catch{}return n}();function Oe(n){return/^[\s\xa0]*$/.test(n)}function Ln(){var n=v.navigator;return n&&(n=n.userAgent)?n:""}function ut(n){return Ln().indexOf(n)!=-1}function ri(n){return ri[" "](n),n}ri[" "]=function(){};function Yh(n,t){var e=$c;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Xh=ut("Opera"),re=ut("Trident")||ut("MSIE"),To=ut("Edge"),Pr=To||re,Io=ut("Gecko")&&!(Ln().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),Jh=Ln().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function wo(){var n=v.document;return n?n.documentMode:void 0}var Cr;t:{var lr="",dr=function(){var n=Ln();if(Io)return/rv:([^\);]+)(\)|;)/.exec(n);if(To)return/Edge\/([\d\.]+)/.exec(n);if(re)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Jh)return/WebKit\/(\S+)/.exec(n);if(Xh)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(dr&&(lr=dr?dr[1]:""),re){var fr=wo();if(fr!=null&&fr>parseFloat(lr)){Cr=String(fr);break t}}Cr=lr}var Vr;if(v.document&&re){var fs=wo();Vr=fs||parseInt(Cr,10)||void 0}else Vr=void 0;var Zh=Vr;function xe(n,t){if(tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Io){t:{try{ri(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:tc[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&xe.$.h.call(this)}}z(xe,tt);var tc={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),ec=0;function nc(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++ec,this.fa=this.ia=!1}function Fn(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ii(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function rc(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Ao(n){const t={};for(const e in n)t[e]=n[e];return t}const ps="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ro(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<ps.length;s++)e=ps[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Un(n){this.src=n,this.g={},this.h=0}Un.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=br(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new nc(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Dr(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=vo(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fn(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function br(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var si="closure_lm_"+(1e6*Math.random()|0),pr={};function So(n,t,e,r,i){if(r&&r.once)return Co(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)So(n,t[s],e,r,i);return null}return e=ui(e),n&&n[He]?n.O(t,e,Qe(r)?!!r.capture:!!r,i):Po(n,t,e,!1,r,i)}function Po(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Qe(i)?!!i.capture:!!i,a=ai(n);if(a||(n[si]=a=new Un(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=ic(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Wh||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Do(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function ic(){function n(e){return t.call(n.src,n.listener,e)}const t=sc;return n}function Co(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Co(n,t[s],e,r,i);return null}return e=ui(e),n&&n[He]?n.P(t,e,Qe(r)?!!r.capture:!!r,i):Po(n,t,e,!0,r,i)}function Vo(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Vo(n,t[s],e,r,i);else r=Qe(r)?!!r.capture:!!r,e=ui(e),n&&n[He]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=br(s,e,r,i),-1<e&&(Fn(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=ai(n))&&(t=n.g[t.toString()],n=-1,t&&(n=br(t,e,r,i)),(e=-1<n?t[n]:null)&&oi(e))}function oi(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[He])Dr(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Do(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=ai(t))?(Dr(e,n),e.h==0&&(e.src=null,t[si]=null)):Fn(n)}}}function Do(n){return n in pr?pr[n]:pr[n]="on"+n}function sc(n,t){if(n.fa)n=!0;else{t=new xe(t,this);var e=n.listener,r=n.la||n.src;n.ia&&oi(n),n=e.call(r,t)}return n}function ai(n){return n=n[si],n instanceof Un?n:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(n){return typeof n=="function"?n:(n[gr]||(n[gr]=function(t){return n.handleEvent(t)}),n[gr])}function j(){Pt.call(this),this.i=new Un(this),this.S=this,this.J=null}z(j,Pt);j.prototype[He]=!0;j.prototype.removeEventListener=function(n,t,e,r){Vo(this,n,t,e,r)};function Q(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new tt(t,n);else if(t instanceof tt)t.target=t.target||n;else{var i=t;t=new tt(r,n),Ro(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=cn(o,r,!0,t)&&i}if(o=t.g=n,i=cn(o,r,!0,t)&&i,i=cn(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=cn(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Fn(e[r]);delete n.g[t],n.h--}}this.J=null};j.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};j.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function cn(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Dr(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var hi=v.JSON.stringify;class oc{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ac(){var n=ci;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class uc{constructor(){this.h=this.g=null}add(t,e){const r=bo.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var bo=new oc(()=>new hc,n=>n.reset());class hc{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function cc(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function lc(n){v.setTimeout(()=>{throw n},0)}let Me,Le=!1,ci=new uc,No=()=>{const n=v.Promise.resolve(void 0);Me=()=>{n.then(dc)}};var dc=()=>{for(var n;n=ac();){try{n.h.call(n.g)}catch(e){lc(e)}var t=bo;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Le=!1};function Bn(n,t){j.call(this),this.h=n||1,this.g=t||v,this.j=Z(this.qb,this),this.l=Date.now()}z(Bn,j);m=Bn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(li(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function li(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}m.N=function(){Bn.$.N.call(this),li(this),delete this.g};function di(n,t,e){if(typeof n=="function")e&&(n=Z(n,e));else if(n&&typeof n.handleEvent=="function")n=Z(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(n,t||0)}function ko(n){n.g=di(()=>{n.g=null,n.i&&(n.i=!1,ko(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class fc extends Pt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ko(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(n){Pt.call(this),this.h=n,this.g={}}z(Fe,Pt);var gs=[];function Oo(n,t,e,r){Array.isArray(e)||(e&&(gs[0]=e.toString()),e=gs);for(var i=0;i<e.length;i++){var s=So(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function xo(n){ii(n.g,function(t,e){this.g.hasOwnProperty(e)&&oi(t)},n),n.g={}}Fe.prototype.N=function(){Fe.$.N.call(this),xo(this)};Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qn(){this.g=!0}qn.prototype.Ea=function(){this.g=!1};function pc(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function gc(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Wt(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+_c(n,e)+(r?" "+r:"")})}function mc(n,t){n.info(function(){return"TIMEOUT: "+t})}qn.prototype.info=function(){};function _c(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hi(e)}catch{return t}}var $t={},ms=null;function $n(){return ms=ms||new j}$t.Ta="serverreachability";function Mo(n){tt.call(this,$t.Ta,n)}z(Mo,tt);function Ue(n){const t=$n();Q(t,new Mo(t))}$t.STAT_EVENT="statevent";function Lo(n,t){tt.call(this,$t.STAT_EVENT,n),this.stat=t}z(Lo,tt);function nt(n){const t=$n();Q(t,new Lo(t,n))}$t.Ua="timingevent";function Fo(n,t){tt.call(this,$t.Ua,n),this.size=t}z(Fo,tt);function We(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){n()},t)}var jn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Uo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fi(){}fi.prototype.h=null;function _s(n){return n.h||(n.h=n.i())}function Bo(){}var Ye={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pi(){tt.call(this,"d")}z(pi,tt);function gi(){tt.call(this,"c")}z(gi,tt);var Nr;function zn(){}z(zn,fi);zn.prototype.g=function(){return new XMLHttpRequest};zn.prototype.i=function(){return{}};Nr=new zn;function Xe(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Fe(this),this.P=yc,n=Pr?125:void 0,this.V=new Bn(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qo}function qo(){this.i=null,this.g="",this.h=!1}var yc=45e3,$o={},kr={};m=Xe.prototype;m.setTimeout=function(n){this.P=n};function Or(n,t,e){n.L=1,n.A=Kn(Et(t)),n.u=e,n.S=!0,jo(n,null)}function jo(n,t){n.G=Date.now(),Je(n),n.B=Et(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Xo(e.i,"t",r),n.o=0,e=n.l.J,n.h=new qo,n.g=ya(n.l,e?t:null,!n.u),0<n.O&&(n.M=new fc(Z(n.Pa,n,n.g),n.O)),Oo(n.U,n.g,"readystatechange",n.nb),t=n.I?Ao(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Ue(),pc(n.j,n.v,n.B,n.m,n.W,n.u)}m.nb=function(n){n=n.target;const t=this.M;t&&ct(n)==3?t.l():this.Pa(n)};m.Pa=function(n){try{if(n==this.g)t:{const c=ct(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>c)&&(c!=3||Pr||this.g&&(this.h.h||this.g.ja()||Ts(this.g)))){this.J||c!=4||t==7||(t==8||0>=l?Ue(3):Ue(2)),Gn(this);var e=this.g.da();this.ca=e;e:if(zo(this)){var r=Ts(this.g);n="";var i=r.length,s=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),Pe(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,gc(this.j,this.v,this.B,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oe(a)){var h=a;break e}}h=null}if(e=h)Wt(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,e);else{this.i=!1,this.s=3,nt(12),bt(this),Pe(this);break t}}this.S?(Go(this,c,o),Pr&&this.i&&c==3&&(Oo(this.U,this.V,"tick",this.mb),this.V.start())):(Wt(this.j,this.m,o,null),xr(this,o)),c==4&&bt(this),this.i&&!this.J&&(c==4?pa(this.l,this):(this.i=!1,Je(this)))}else Uc(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),bt(this),Pe(this)}}}catch{}finally{}};function zo(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Go(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=Ec(n,e),i==kr){t==4&&(n.s=4,nt(14),r=!1),Wt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==$o){n.s=4,nt(15),Wt(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Wt(n.j,n.m,i,null),xr(n,i);zo(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,nt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ti(t),t.M=!0,nt(11))):(Wt(n.j,n.m,e,"[Invalid Chunked Response]"),bt(n),Pe(n))}m.mb=function(){if(this.g){var n=ct(this.g),t=this.g.ja();this.o<t.length&&(Gn(this),Go(this,n,t),this.i&&n!=4&&Je(this))}};function Ec(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?kr:(e=Number(t.substring(e,r)),isNaN(e)?$o:(r+=1,r+e>t.length?kr:(t=t.slice(r,r+e),n.o=r+e,t)))}m.cancel=function(){this.J=!0,bt(this)};function Je(n){n.Y=Date.now()+n.P,Ko(n,n.P)}function Ko(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=We(Z(n.lb,n),t)}function Gn(n){n.C&&(v.clearTimeout(n.C),n.C=null)}m.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(mc(this.j,this.B),this.L!=2&&(Ue(),nt(17)),bt(this),this.s=2,Pe(this)):Ko(this,this.Y-n)};function Pe(n){n.l.H==0||n.J||pa(n.l,n)}function bt(n){Gn(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,li(n.V),xo(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function xr(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Mr(e.i,n))){if(!n.K&&Mr(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Pn(e),Yn(e);else break t;vi(e),nt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=We(Z(e.ib,e),6e3));if(1>=ta(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Nt(e,11)}else if((n.K||e.g==n)&&Pn(e),!Oe(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(e.V=h[0],h=h[1],e.H==2)if(h[0]=="c"){e.K=h[1],e.pa=h[2];const c=h[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const l=h[4];l!=null&&(e.Ga=l,e.l.info("SVER="+e.Ga));const f=h[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const g=n.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mi(s,s.h),s.h=null))}if(r.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,N(r.I,r.F,R))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=_a(r,r.J?r.pa:null,r.Y),o.K){ea(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Gn(a),Je(a)),r.g=o}else da(r);0<e.j.length&&Xn(e)}else h[0]!="stop"&&h[0]!="close"||Nt(e,7);else e.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Nt(e,7):Ei(e):h[0]!="noop"&&e.h&&e.h.Aa(h),e.A=0)}}Ue(4)}catch{}}function vc(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Mn(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Tc(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Mn(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Qo(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Mn(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Tc(n),r=vc(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Ho=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ic(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof xt){this.h=n.h,Rn(this,n.j),this.s=n.s,this.g=n.g,Sn(this,n.m),this.l=n.l;var t=n.i,e=new Be;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ys(this,e),this.o=n.o}else n&&(t=String(n).match(Ho))?(this.h=!1,Rn(this,t[1]||"",!0),this.s=Te(t[2]||""),this.g=Te(t[3]||"",!0),Sn(this,t[4]),this.l=Te(t[5]||"",!0),ys(this,t[6]||"",!0),this.o=Te(t[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}xt.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ie(t,Es,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ie(t,Es,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ie(e,e.charAt(0)=="/"?Rc:Ac,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ie(e,Pc)),n.join("")};function Et(n){return new xt(n)}function Rn(n,t,e){n.j=e?Te(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Sn(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ys(n,t,e){t instanceof Be?(n.i=t,Cc(n.i,n.h)):(e||(t=Ie(t,Sc)),n.i=new Be(t,n.h))}function N(n,t,e){n.i.set(t,e)}function Kn(n){return N(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Te(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ie(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,wc),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function wc(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Es=/[#\/\?@]/g,Ac=/[#\?:]/g,Rc=/[#\?]/g,Sc=/[#\?@]/g,Pc=/#/g;function Be(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ct(n){n.g||(n.g=new Map,n.h=0,n.i&&Ic(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}m=Be.prototype;m.add=function(n,t){Ct(this),this.i=null,n=fe(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Wo(n,t){Ct(n),t=fe(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Yo(n,t){return Ct(n),t=fe(n,t),n.g.has(t)}m.forEach=function(n,t){Ct(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};m.ta=function(){Ct(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};m.Z=function(n){Ct(this);let t=[];if(typeof n=="string")Yo(this,n)&&(t=t.concat(this.g.get(fe(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};m.set=function(n,t){return Ct(this),this.i=null,n=fe(this,n),Yo(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};m.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Xo(n,t,e){Wo(n,t),0<e.length&&(n.i=null,n.g.set(fe(n,t),ni(e)),n.h+=e.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function fe(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Cc(n,t){t&&!n.j&&(Ct(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Wo(this,r),Xo(this,i,e))},n)),n.j=t}var Vc=class{constructor(n,t){this.g=n,this.map=t}};function Jo(n){this.l=n||Dc,v.PerformanceNavigationTiming?(n=v.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dc=10;function Zo(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ta(n){return n.h?1:n.g?n.g.size:0}function Mr(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function mi(n,t){n.g?n.g.add(t):n.h=t}function ea(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Jo.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function na(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ni(n.i)}var bc=class{stringify(n){return v.JSON.stringify(n,void 0)}parse(n){return v.JSON.parse(n,void 0)}};function Nc(){this.g=new bc}function kc(n,t,e){const r=e||"";try{Qo(n,function(i,s){let o=i;Qe(i)&&(o=hi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Oc(n,t){const e=new qn;if(v.Image){const r=new Image;r.onload=hn(ln,e,r,"TestLoadImage: loaded",!0,t),r.onerror=hn(ln,e,r,"TestLoadImage: error",!1,t),r.onabort=hn(ln,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=hn(ln,e,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function ln(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Qn(n){this.l=n.ec||null,this.j=n.ob||!1}z(Qn,fi);Qn.prototype.g=function(){return new Hn(this.l,this.j)};Qn.prototype.i=function(n){return function(){return n}}({});function Hn(n,t){j.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=_i,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Hn,j);var _i=0;m=Hn.prototype;m.open=function(n,t){if(this.readyState!=_i)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,qe(this)};m.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=_i};m.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ra(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ra(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}m.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ze(this):qe(this),this.readyState==3&&ra(this)}};m.Za=function(n){this.g&&(this.response=this.responseText=n,Ze(this))};m.Ya=function(n){this.g&&(this.response=n,Ze(this))};m.ka=function(){this.g&&Ze(this)};function Ze(n){n.readyState=4,n.l=null,n.j=null,n.A=null,qe(n)}m.setRequestHeader=function(n,t){this.v.append(n,t)};m.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function qe(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var xc=v.JSON.parse;function O(n){j.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ia,this.L=this.M=!1}z(O,j);var ia="",Mc=/^https?$/i,Lc=["POST","PUT"];m=O.prototype;m.Oa=function(n){this.M=n};m.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nr.g(),this.C=this.u?_s(this.u):_s(Nr),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){vs(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=v.FormData&&n instanceof v.FormData,!(0<=vo(Lc,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aa(this),0<this.B&&((this.L=Fc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=di(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){vs(this,s)}};function Fc(n){return re&&typeof n.timeout=="number"&&n.ontimeout!==void 0}m.ua=function(){typeof ei<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function vs(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,sa(n),Wn(n)}function sa(n){n.F||(n.F=!0,Q(n,"complete"),Q(n,"error"))}m.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Q(this,"complete"),Q(this,"abort"),Wn(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),O.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?oa(this):this.kb())};m.kb=function(){oa(this)};function oa(n){if(n.h&&typeof ei<"u"&&(!n.C[1]||ct(n)!=4||n.da()!=2)){if(n.v&&ct(n)==4)di(n.La,0,n);else if(Q(n,"readystatechange"),ct(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Ho)[1]||null;!i&&v.self&&v.self.location&&(i=v.self.location.protocol.slice(0,-1)),r=!Mc.test(i?i.toLowerCase():"")}e=r}if(e)Q(n,"complete"),Q(n,"success");else{n.m=6;try{var s=2<ct(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",sa(n)}}finally{Wn(n)}}}}function Wn(n,t){if(n.g){aa(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Q(n,"ready");try{e.onreadystatechange=r}catch{}}}function aa(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(v.clearTimeout(n.A),n.A=null)}m.isActive=function(){return!!this.g};function ct(n){return n.g?n.g.readyState:0}m.da=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),xc(t)}};function Ts(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case ia:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Uc(n){const t={};n=(n.g&&2<=ct(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Oe(n[r]))continue;var e=cc(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}rc(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ua(n){let t="";return ii(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function yi(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=ua(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):N(n,t,e))}function ye(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function ha(n){this.Ga=0,this.j=[],this.l=new qn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ye("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ye("baseRetryDelayMs",5e3,n),this.hb=ye("retryDelaySeedMs",1e4,n),this.eb=ye("forwardChannelMaxRetries",2,n),this.xa=ye("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Jo(n&&n.concurrentRequestLimit),this.Ja=new Nc,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=ha.prototype;m.ra=8;m.H=1;function Ei(n){if(ca(n),n.H==3){var t=n.W++,e=Et(n.I);if(N(e,"SID",n.K),N(e,"RID",t),N(e,"TYPE","terminate"),tn(n,e),t=new Xe(n,n.l,t),t.L=2,t.A=Kn(Et(e)),e=!1,v.navigator&&v.navigator.sendBeacon)try{e=v.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&v.Image&&(new Image().src=t.A,e=!0),e||(t.g=ya(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Je(t)}ma(n)}function Yn(n){n.g&&(Ti(n),n.g.cancel(),n.g=null)}function ca(n){Yn(n),n.u&&(v.clearTimeout(n.u),n.u=null),Pn(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&v.clearTimeout(n.m),n.m=null)}function Xn(n){if(!Zo(n.i)&&!n.m){n.m=!0;var t=n.Na;Me||No(),Le||(Me(),Le=!0),ci.add(t,n),n.C=0}}function Bc(n,t){return ta(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=We(Z(n.Na,n,t),ga(n,n.C)),n.C++,!0)}m.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Xe(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Ao(s),Ro(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=la(this,i,t),e=Et(this.I),N(e,"RID",n),N(e,"CVER",22),this.F&&N(e,"X-HTTP-Session-Id",this.F),tn(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(ua(s)))+"&"+t:this.o&&yi(e,this.o,s)),mi(this.i,i),this.bb&&N(e,"TYPE","init"),this.P?(N(e,"$req",t),N(e,"SID","null"),i.aa=!0,Or(i,e,null)):Or(i,e,t),this.H=2}}else this.H==3&&(n?Is(this,n):this.j.length==0||Zo(this.i)||Is(this))};function Is(n,t){var e;t?e=t.m:e=n.W++;const r=Et(n.I);N(r,"SID",n.K),N(r,"RID",e),N(r,"AID",n.V),tn(n,r),n.o&&n.s&&yi(r,n.o,n.s),e=new Xe(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=la(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),mi(n.i,e),Or(e,r,t)}function tn(n,t){n.na&&ii(n.na,function(e,r){N(t,r,e)}),n.h&&Qo({},function(e,r){N(t,r,e)})}function la(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Z(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let h=i[u].g;const c=i[u].map;if(h-=s,0>h)s=Math.max(0,i[u].g-100),a=!1;else try{kc(c,o,"req"+h+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function da(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Me||No(),Le||(Me(),Le=!0),ci.add(t,n),n.A=0}}function vi(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=We(Z(n.Ma,n),ga(n,n.A)),n.A++,!0)}m.Ma=function(){if(this.u=null,fa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=We(Z(this.jb,this),n)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Yn(this),fa(this))};function Ti(n){n.B!=null&&(v.clearTimeout(n.B),n.B=null)}function fa(n){n.g=new Xe(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Et(n.wa);N(t,"RID","rpc"),N(t,"SID",n.K),N(t,"AID",n.V),N(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&N(t,"TO",n.qa),N(t,"TYPE","xmlhttp"),tn(n,t),n.o&&n.s&&yi(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Kn(Et(t)),e.u=null,e.S=!0,jo(e,n)}m.ib=function(){this.v!=null&&(this.v=null,Yn(this),vi(this),nt(19))};function Pn(n){n.v!=null&&(v.clearTimeout(n.v),n.v=null)}function pa(n,t){var e=null;if(n.g==t){Pn(n),Ti(n),n.g=null;var r=2}else if(Mr(n.i,t))e=t.F,ea(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=$n(),Q(r,new Fo(r,e)),Xn(n)}else da(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Bc(n,t)||r==2&&vi(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Nt(n,5);break;case 4:Nt(n,10);break;case 3:Nt(n,6);break;default:Nt(n,2)}}}function ga(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Nt(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Z(n.pb,n);e||(e=new xt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Rn(e,"https"),Kn(e)),Oc(e.toString(),r)}else nt(2);n.H=0,n.h&&n.h.za(t),ma(n),ca(n)}m.pb=function(n){n?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function ma(n){if(n.H=0,n.ma=[],n.h){const t=na(n.i);(t.length!=0||n.j.length!=0)&&(ds(n.ma,t),ds(n.ma,n.j),n.i.i.length=0,ni(n.j),n.j.length=0),n.h.ya()}}function _a(n,t,e){var r=e instanceof xt?Et(e):new xt(e);if(r.g!="")t&&(r.g=t+"."+r.g),Sn(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xt(null);r&&Rn(s,r),t&&(s.g=t),i&&Sn(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&N(r,e,t),N(r,"VER",n.ra),tn(n,r),r}function ya(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new O(new Qn({ob:e})):new O(n.va),t.Oa(n.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ea(){}m=Ea.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Cn(){if(re&&!(10<=Number(Zh)))throw Error("Environmental error: no available transport.")}Cn.prototype.g=function(n,t){return new rt(n,t)};function rt(n,t){j.call(this),this.g=new ha(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Oe(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Oe(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new pe(this)}z(rt,j);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;nt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=_a(n,null,n.Y),Xn(n)};rt.prototype.close=function(){Ei(this.g)};rt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=hi(n),n=e);t.j.push(new Vc(t.fb++,n)),t.H==3&&Xn(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,Ei(this.g),delete this.g,rt.$.N.call(this)};function va(n){pi.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}z(va,pi);function Ta(){gi.call(this),this.status=1}z(Ta,gi);function pe(n){this.g=n}z(pe,Ea);pe.prototype.Ba=function(){Q(this.g,"a")};pe.prototype.Aa=function(n){Q(this.g,new va(n))};pe.prototype.za=function(n){Q(this.g,new Ta)};pe.prototype.ya=function(){Q(this.g,"b")};function qc(){this.blockSize=-1}function ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ot,qc);ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mr(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ot.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)mr(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){mr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){mr(this,r),i=0;break}}this.h=i,this.i+=t};ot.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function b(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var $c={};function Ii(n){return-128<=n&&128>n?Yh(n,function(t){return new b([t|0],0>t?-1:0)}):new b([n|0],0>n?-1:0)}function lt(n){if(isNaN(n)||!isFinite(n))return Yt;if(0>n)return K(lt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Lr;return new b(t,0)}function Ia(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return K(Ia(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=lt(Math.pow(t,8)),r=Yt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=lt(Math.pow(t,s)),r=r.R(s).add(lt(o))):(r=r.R(e),r=r.add(lt(o)))}return r}var Lr=4294967296,Yt=Ii(0),Fr=Ii(1),ws=Ii(16777216);m=b.prototype;m.ea=function(){if(it(this))return-K(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Lr+r)*t,t*=Lr}return n};m.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(yt(this))return"0";if(it(this))return"-"+K(this).toString(n);for(var t=lt(Math.pow(n,6)),e=this,r="";;){var i=Dn(e,t).g;e=Vn(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,yt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};m.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function yt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function it(n){return n.h==-1}m.X=function(n){return n=Vn(this,n),it(n)?-1:yt(n)?0:1};function K(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new b(e,~n.h).add(Fr)}m.abs=function(){return it(this)?K(this):this};m.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new b(e,e[e.length-1]&-2147483648?-1:0)};function Vn(n,t){return n.add(K(t))}m.R=function(n){if(yt(this)||yt(n))return Yt;if(it(this))return it(n)?K(this).R(K(n)):K(K(this).R(n));if(it(n))return K(this.R(K(n)));if(0>this.X(ws)&&0>n.X(ws))return lt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,dn(e,2*r+2*i),e[2*r+2*i+1]+=s*u,dn(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,dn(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,dn(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new b(e,0)};function dn(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Ee(n,t){this.g=n,this.h=t}function Dn(n,t){if(yt(t))throw Error("division by zero");if(yt(n))return new Ee(Yt,Yt);if(it(n))return t=Dn(K(n),t),new Ee(K(t.g),K(t.h));if(it(t))return t=Dn(n,K(t)),new Ee(K(t.g),t.h);if(30<n.g.length){if(it(n)||it(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Fr,r=t;0>=r.X(n);)e=As(e),r=As(r);var i=Gt(e,1),s=Gt(r,1);for(r=Gt(r,2),e=Gt(e,2);!yt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=Gt(r,1),e=Gt(e,1)}return t=Vn(n,i.R(t)),new Ee(i,t)}for(i=Yt;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lt(e),o=s.R(t);it(o)||0<o.X(n);)e-=r,s=lt(e),o=s.R(t);yt(s)&&(s=Fr),i=i.add(s),n=Vn(n,o)}return new Ee(i,n)}m.gb=function(n){return Dn(this,n).h};m.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new b(e,this.h&n.h)};m.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new b(e,this.h|n.h)};m.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new b(e,this.h^n.h)};function As(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new b(e,n.h)}function Gt(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new b(i,n.h)}Cn.prototype.createWebChannel=Cn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;jn.NO_ERROR=0;jn.TIMEOUT=8;jn.HTTP_ERROR=6;Uo.COMPLETE="complete";Bo.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";j.prototype.listen=j.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ot.prototype.digest=ot.prototype.l;ot.prototype.reset=ot.prototype.reset;ot.prototype.update=ot.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=lt;b.fromString=Ia;var jc=function(){return new Cn},zc=function(){return $n()},_r=jn,Gc=Uo,Kc=$t,Rs={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fn=Bo,Qc=O,Hc=ot,Xt=b;const Ss="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new _o("@firebase/firestore");function ve(){return Ut.logLevel}function _(n,...t){if(Ut.logLevel<=P.DEBUG){const e=t.map(wi);Ut.debug(`Firestore (${ge}): ${n}`,...e)}}function ft(n,...t){if(Ut.logLevel<=P.ERROR){const e=t.map(wi);Ut.error(`Firestore (${ge}): ${n}`,...e)}}function ie(n,...t){if(Ut.logLevel<=P.WARN){const e=t.map(wi);Ut.warn(`Firestore (${ge}): ${n}`,...e)}}function wi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(n="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+n;throw ft(t),new Error(t)}function U(n,t){n||w()}function V(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends de{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Y.UNAUTHENTICATED))}shutdown(){}}class Yc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xc{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new wa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new Y(t)}}class Jc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Jc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class el{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(U(typeof e.token=="string"),this.R=e.token,new tl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=nl(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function D(n,t){return n<t?-1:n>t?1:0}function se(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new $(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new $(0,0))}static max(){return new I(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e,r){e===void 0?e=0:e>t.length&&w(),r===void 0?r=t.length-e:r>t.length-e&&w(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return $e.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $e?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class k extends $e{construct(t,e,r){return new k(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new k(e)}static emptyPath(){return new k([])}}const il=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends $e{construct(t,e,r){return new J(t,e,r)}static isValidIdentifier(t){return il.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(e)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return k.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function sl(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=I.fromTimestamp(r===1e9?new $(e+1,0):new $(e,r));return new At(i,E.empty(),t)}function ol(n){return new At(n.readTime,n.key,-1)}class At{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new At(I.min(),E.empty(),-1)}static max(){return new At(I.max(),E.empty(),-1)}}function al(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=E.comparator(n.documentKey,t.documentKey),e!==0?e:D(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ul)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new d((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof d?e:d.resolve(e)}catch(e){return d.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):d.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):d.reject(e)}static resolve(t){return new d((e,r)=>{e(t)})}static reject(t){return new d((e,r)=>{r(t)})}static waitFor(t){return new d((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=d.resolve(!1);for(const r of t)e=e.next(i=>i?d.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new d((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(c=>{o[h]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new d((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Mt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Ce(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Si(r.target.error);this.V.reject(new Ce(t,i))}}static open(t,e,r,i){try{return new Ri(e,t.transaction(i,r))}catch(s){throw new Ce(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new ll(e)}}class kt{constructor(t,e,r){this.name=t,this.version=e,this.p=r,kt.S(In())===12.2&&ft("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Dt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!go())return!1;if(kt.C())return!0;const t=In(),e=kt.S(t),r=0<e&&e<10,i=kt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new Ce(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ce(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Ri.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),d.reject(h))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,h=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class cl{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Dt(this.k.delete())}}class Ce extends y{constructor(t,e){super(p.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function en(n){return n.name==="IndexedDbTransactionError"}class ll{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Dt(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Dt(this.store.add(t))}get(t){return Dt(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Dt(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Dt(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new d((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new d((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new d((r,i)=>{e.onerror=s=>{const o=Si(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new d((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new cl(a),h=e(a.primaryKey,a.value,u);if(h instanceof d){const c=h.catch(l=>(u.done(),d.reject(l)));r.push(c)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>d.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Dt(n){return new d((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Si(r.target.error);e(i)}})}let Ps=!1;function Si(n){const t=kt.S(In());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ps||(Ps=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Pi._e=-1;function Jn(n){return n==null}function bn(n){return n===0&&1/n==-1/0}function dl(n){return typeof n=="number"&&Number.isInteger(n)&&!bn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function nn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Aa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.comparator=t,this.root=e||G.EMPTY}insert(t,e){return new x(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new x(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pn(this.root,t,this.comparator,!0)}}class pn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??G.RED,this.left=i??G.EMPTY,this.right=s??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new G(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return G.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,e,r,i,s){return this}insert(t,e,r){return new G(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.comparator=t,this.data=new x(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vs(this.data.getIterator())}getIteratorFrom(t){return new Vs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof H)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new H(this.comparator);return e.data=t,e}}class Vs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new Tt([])}unionWith(t){let e=new H(J.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Tt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return se(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ra("Invalid base64 string: "+s):s}}(t);return new et(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}et.EMPTY_BYTE_STRING=new et("");const fl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(n){if(U(!!n),typeof n=="string"){let t=0;const e=fl.exec(n);if(U(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:L(n.seconds),nanos:L(n.nanos)}}function L(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ci(n){const t=n.mapValue.fields.__previous_value__;return Zn(t)?Ci(t):t}function je(n){const t=Rt(n.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e,r,i,s,o,a,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class ze{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zn(n)?4:gl(n)?9007199254740991:10:w()}function pt(n,t){if(n===t)return!0;const e=qt(n);if(e!==qt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return je(n).isEqual(je(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rt(i.timestampValue),a=Rt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Bt(i.bytesValue).isEqual(Bt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return L(i.geoPointValue.latitude)===L(s.geoPointValue.latitude)&&L(i.geoPointValue.longitude)===L(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return L(i.integerValue)===L(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=L(i.doubleValue),a=L(s.doubleValue);return o===a?bn(o)===bn(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return se(n.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Cs(o)!==Cs(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!pt(o[u],a[u])))return!1;return!0}(n,t);default:return w()}}function Ge(n,t){return(n.values||[]).find(e=>pt(e,t))!==void 0}function oe(n,t){if(n===t)return 0;const e=qt(n),r=qt(t);if(e!==r)return D(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=L(s.integerValue||s.doubleValue),u=L(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Ds(n.timestampValue,t.timestampValue);case 4:return Ds(je(n),je(t));case 5:return D(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Bt(s),u=Bt(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const c=D(a[h],u[h]);if(c!==0)return c}return D(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=D(L(s.latitude),L(o.latitude));return a!==0?a:D(L(s.longitude),L(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const c=oe(a[h],u[h]);if(c)return c}return D(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===gn.mapValue&&o===gn.mapValue)return 0;if(s===gn.mapValue)return 1;if(o===gn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),h=o.fields||{},c=Object.keys(h);u.sort(),c.sort();for(let l=0;l<u.length&&l<c.length;++l){const f=D(u[l],c[l]);if(f!==0)return f;const g=oe(a[u[l]],h[c[l]]);if(g!==0)return g}return D(u.length,c.length)}(n.mapValue,t.mapValue);default:throw w()}}function Ds(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return D(n,t);const e=Rt(n),r=Rt(t),i=D(e.seconds,r.seconds);return i!==0?i:D(e.nanos,r.nanos)}function ae(n){return Ur(n)}function Ur(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Rt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Bt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return E.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ur(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ur(e.fields[o])}`;return i+"}"}(n.mapValue):w()}function Nn(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Br(n){return!!n&&"integerValue"in n}function Vi(n){return!!n&&"arrayValue"in n}function bs(n){return!!n&&"nullValue"in n}function Ns(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yr(n){return!!n&&"mapValue"in n}function Ve(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return nn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ve(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ve(n.arrayValue.values[e]);return t}return Object.assign({},n)}function gl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.value=t}static empty(){return new ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ve(e)}setAll(t){let e=J.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Ve(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){nn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ht(Ve(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new X(t,0,I.min(),I.min(),I.min(),ht.empty(),0)}static newFoundDocument(t,e,r,i){return new X(t,1,e,I.min(),r,i,0)}static newNoDocument(t,e){return new X(t,2,e,I.min(),I.min(),ht.empty(),0)}static newUnknownDocument(t,e){return new X(t,3,e,I.min(),I.min(),ht.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof X&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.position=t,this.inclusive=e}}function ks(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),e.key):r=oe(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Os(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!pt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e="asc"){this.field=t,this.dir=e}}function ml(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{}class F extends Sa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new yl(t,e,r):e==="array-contains"?new Tl(t,r):e==="in"?new Il(t,r):e==="not-in"?new wl(t,r):e==="array-contains-any"?new Al(t,r):new F(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new El(t,r):new vl(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(oe(e,this.value)):e!==null&&qt(this.value)===qt(e)&&this.matchesComparison(oe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends Sa{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new at(t,e)}matches(t){return Pa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Pa(n){return n.op==="and"}function Ca(n){return _l(n)&&Pa(n)}function _l(n){for(const t of n.filters)if(t instanceof at)return!1;return!0}function qr(n){if(n instanceof F)return n.field.canonicalString()+n.op.toString()+ae(n.value);if(Ca(n))return n.filters.map(t=>qr(t)).join(",");{const t=n.filters.map(e=>qr(e)).join(",");return`${n.op}(${t})`}}function Va(n,t){return n instanceof F?function(r,i){return i instanceof F&&r.op===i.op&&r.field.isEqual(i.field)&&pt(r.value,i.value)}(n,t):n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Va(o,i.filters[a]),!0):!1}(n,t):void w()}function Da(n){return n instanceof F?function(e){return`${e.field.canonicalString()} ${e.op} ${ae(e.value)}`}(n):n instanceof at?function(e){return e.op.toString()+" {"+e.getFilters().map(Da).join(" ,")+"}"}(n):"Filter"}class yl extends F{constructor(t,e,r){super(t,e,r),this.key=E.fromName(r.referenceValue)}matches(t){const e=E.comparator(t.key,this.key);return this.matchesComparison(e)}}class El extends F{constructor(t,e){super(t,"in",e),this.keys=ba("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vl extends F{constructor(t,e){super(t,"not-in",e),this.keys=ba("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ba(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>E.fromName(r.referenceValue))}class Tl extends F{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vi(e)&&Ge(e.arrayValue,this.value)}}class Il extends F{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ge(this.value.arrayValue,e)}}class wl extends F{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ge(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ge(this.value.arrayValue,e)}}class Al extends F{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ge(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function xs(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Rl(n,t,e,r,i,s,o)}function Di(n){const t=V(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>qr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Jn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ae(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ae(r)).join(",")),t.ce=e}return t.ce}function bi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ml(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Va(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Os(n.startAt,t.startAt)&&Os(n.endAt,t.endAt)}function $r(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Sl(n,t,e,r,i,s,o,a){return new jt(n,t,e,r,i,s,o,a)}function Ni(n){return new jt(n)}function Ms(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ki(n){return n.collectionGroup!==null}function Jt(n){const t=V(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new H(J.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Ke(s,r))}),e.has(J.keyField().canonicalString())||t.le.push(new Ke(J.keyField(),r))}return t.le}function dt(n){const t=V(n);return t.he||(t.he=Pl(t,Jt(n))),t.he}function Pl(n,t){if(n.limitType==="F")return xs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ke(i.field,s)});const e=n.endAt?new ue(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ue(n.startAt.position,n.startAt.inclusive):null;return xs(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function jr(n,t){const e=n.filters.concat([t]);return new jt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function kn(n,t,e){return new jt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function tr(n,t){return bi(dt(n),dt(t))&&n.limitType===t.limitType}function Na(n){return`${Di(dt(n))}|lt:${n.limitType}`}function Kt(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Da(i)).join(", ")}]`),Jn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ae(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ae(i)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function er(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Jt(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const h=ks(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,Jt(r),i)||r.endAt&&!function(o,a,u){const h=ks(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,Jt(r),i))}(n,t)}function Cl(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ka(n){return(t,e)=>{let r=!1;for(const i of Jt(n)){const s=Vl(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Vl(n,t,e){const r=n.field.isKeyField()?E.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),h=a.data.field(s);return u!==null&&h!==null?oe(u,h):w()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){nn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Aa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new x(E.comparator);function St(){return Dl}const Oa=new x(E.comparator);function we(...n){let t=Oa;for(const e of n)t=t.insert(e.key,e);return t}function bl(n){let t=Oa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ot(){return De()}function xa(){return De()}function De(){return new me(n=>n.toString(),(n,t)=>n.isEqual(t))}const Nl=new H(E.comparator);function C(...n){let t=Nl;for(const e of n)t=t.add(e);return t}const kl=new H(D);function Ol(){return kl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bn(t)?"-0":t}}function La(n){return{integerValue:""+n}}function xl(n,t){return dl(t)?La(t):Ma(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this._=void 0}}function Ml(n,t,e){return n instanceof zr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zn(s)&&(s=Ci(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof On?Fa(n,t):n instanceof xn?Ua(n,t):function(i,s){const o=Fl(i,s),a=Ls(o)+Ls(i.Ie);return Br(o)&&Br(i.Ie)?La(a):Ma(i.serializer,a)}(n,t)}function Ll(n,t,e){return n instanceof On?Fa(n,t):n instanceof xn?Ua(n,t):e}function Fl(n,t){return n instanceof Gr?function(r){return Br(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class zr extends nr{}class On extends nr{constructor(t){super(),this.elements=t}}function Fa(n,t){const e=Ba(t);for(const r of n.elements)e.some(i=>pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class xn extends nr{constructor(t){super(),this.elements=t}}function Ua(n,t){let e=Ba(t);for(const r of n.elements)e=e.filter(i=>!pt(i,r));return{arrayValue:{values:e}}}class Gr extends nr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ls(n){return L(n.integerValue||n.doubleValue)}function Ba(n){return Vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ul(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof On&&i instanceof On||r instanceof xn&&i instanceof xn?se(r.elements,i.elements,pt):r instanceof Gr&&i instanceof Gr?pt(r.Ie,i.Ie):r instanceof zr&&i instanceof zr}(n.transform,t.transform)}class Lt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _n(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Oi{}function qa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ql(n.key,Lt.none()):new xi(n.key,n.data,Lt.none());{const e=n.data,r=ht.empty();let i=new H(J.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new rr(n.key,r,new Tt(i.toArray()),Lt.none())}}function Bl(n,t,e){n instanceof xi?function(i,s,o){const a=i.value.clone(),u=Us(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof rr?function(i,s,o){if(!_n(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Us(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($a(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function be(n,t,e,r){return n instanceof xi?function(s,o,a,u){if(!_n(s.precondition,o))return a;const h=s.value.clone(),c=Bs(s.fieldTransforms,u,o);return h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof rr?function(s,o,a,u){if(!_n(s.precondition,o))return a;const h=Bs(s.fieldTransforms,u,o),c=o.data;return c.setAll($a(s)),c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,t,e,r):function(s,o,a){return _n(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Fs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&se(r,i,(s,o)=>Ul(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xi extends Oi{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rr extends Oi{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $a(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Us(n,t,e){const r=new Map;U(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ll(o,a,e[i]))}return r}function Bs(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Ml(s,o,t))}return r}class ql extends Oi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Bl(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=be(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=be(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=xa();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=qa(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),C())}isEqual(t){return this.batchId===t.batchId&&se(this.mutations,t.mutations,(e,r)=>Fs(e,r))&&se(this.baseMutations,t.baseMutations,(e,r)=>Fs(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,S;function ja(n){if(n===void 0)return ft("GRPC error has no .code"),p.UNKNOWN;switch(n){case M.OK:return p.OK;case M.CANCELLED:return p.CANCELLED;case M.UNKNOWN:return p.UNKNOWN;case M.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case M.INTERNAL:return p.INTERNAL;case M.UNAVAILABLE:return p.UNAVAILABLE;case M.UNAUTHENTICATED:return p.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case M.NOT_FOUND:return p.NOT_FOUND;case M.ALREADY_EXISTS:return p.ALREADY_EXISTS;case M.PERMISSION_DENIED:return p.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case M.ABORTED:return p.ABORTED;case M.OUT_OF_RANGE:return p.OUT_OF_RANGE;case M.UNIMPLEMENTED:return p.UNIMPLEMENTED;case M.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(S=M||(M={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Xt([4294967295,4294967295],0);function qs(n){const t=Gl().encode(n),e=new Hc;return e.update(t),new Uint8Array(e.digest())}function $s(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([i,s],0)]}class Mi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ae(`Invalid padding: ${e}`);if(r<0)throw new Ae(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ae(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ae(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Xt.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Xt.fromNumber(r)));return i.compare(Kl)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=qs(t),[r,i]=$s(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Mi(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=qs(t),[r,i]=$s(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ae extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,rn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ir(I.min(),i,new x(D),St(),C())}}class rn{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new rn(r,e,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class za{constructor(t,e){this.targetId=t,this.fe=e}}class Ga{constructor(t,e,r=et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class js{constructor(){this.ge=0,this.pe=Gs(),this.ye=et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=C(),e=C(),r=C();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:w()}}),new rn(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Gs()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,U(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Ql{constructor(t){this.Be=t,this.ke=new Map,this.qe=St(),this.Qe=zs(),this.Ke=new x(D)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:w()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if($r(s))if(r===0){const o=new E(s.path);this.We(e,o,X.newNoDocument(o,I.min()))}else U(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,h)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Bt(r).toUint8Array()}catch(u){if(u instanceof Ra)return ie("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Mi(o,i,s)}catch(u){return ie(u instanceof Ae?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&$r(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,X.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=C();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new ir(t,e,this.Ke,this.qe,r);return this.qe=St(),this.Qe=zs(),this.Ke=new x(D),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new js,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new H(D),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Be._t(t)}He(t){this.ke.set(t,new js),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function zs(){return new x(E.comparator)}function Gs(){return new x(E.comparator)}const Hl={asc:"ASCENDING",desc:"DESCENDING"},Wl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yl={and:"AND",or:"OR"};class Xl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Kr(n,t){return n.useProto3Json||Jn(t)?t:{value:t}}function Qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ka(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zt(n){return U(!!n),I.fromTimestamp(function(e){const r=Rt(e);return new $(r.seconds,r.nanos)}(n))}function Qa(n,t){return Hr(n,t).canonicalString()}function Hr(n,t){const e=function(i){return new k(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ha(n){const t=k.fromString(n);return U(Za(t)),t}function Er(n,t){const e=Ha(t);if(e.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new E(Ya(e))}function Wa(n,t){return Qa(n.databaseId,t)}function Jl(n){const t=Ha(n);return t.length===4?k.emptyPath():Ya(t)}function Ks(n){return new k(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ya(n){return U(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Zl(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,c){return h.useProto3Json?(U(c===void 0||typeof c=="string"),et.fromBase64String(c||"")):(U(c===void 0||c instanceof Uint8Array),et.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?p.UNKNOWN:ja(h.code);return new y(c,h.message||"")}(o);e=new Ga(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Er(n,r.document.name),s=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):I.min(),a=new ht({mapValue:{fields:r.document.fields}}),u=X.newFoundDocument(i,s,o,a),h=r.targetIds||[],c=r.removedTargetIds||[];e=new yn(h,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Er(n,r.document),s=r.readTime?Zt(r.readTime):I.min(),o=X.newNoDocument(i,s),a=r.removedTargetIds||[];e=new yn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Er(n,r.document),s=r.removedTargetIds||[];e=new yn([],s,i,null)}else{if(!("filter"in t))return w();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zl(i,s),a=r.targetId;e=new za(a,o)}}return e}function td(n,t){return{documents:[Wa(n,t.path)]}}function ed(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Wa(n,i);const s=function(h){if(h.length!==0)return Ja(at.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(c=>function(f){return{field:Qt(f.field),direction:id(f.dir)}}(c))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Kr(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:e,parent:i}}function nd(n){let t=Jl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){U(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(l){const f=Xa(l);return f instanceof at&&Ca(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(l){return l.map(f=>function(A){return new Ke(Ht(A.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(l){let f;return f=typeof l=="object"?l.value:l,Jn(f)?null:f}(e.limit));let u=null;e.startAt&&(u=function(l){const f=!!l.before,g=l.values||[];return new ue(g,f)}(e.startAt));let h=null;return e.endAt&&(h=function(l){const f=!l.before,g=l.values||[];return new ue(g,f)}(e.endAt)),Sl(t,i,o,s,a,"F",u,h)}function rd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ht(e.unaryFilter.field);return F.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ht(e.unaryFilter.field);return F.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ht(e.unaryFilter.field);return F.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ht(e.unaryFilter.field);return F.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(n):n.fieldFilter!==void 0?function(e){return F.create(Ht(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return at.create(e.compositeFilter.filters.map(r=>Xa(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return w()}}(e.compositeFilter.op))}(n):w()}function id(n){return Hl[n]}function sd(n){return Wl[n]}function od(n){return Yl[n]}function Qt(n){return{fieldPath:n.canonicalString()}}function Ht(n){return J.fromServerFormat(n.fieldPath)}function Ja(n){return n instanceof F?function(e){if(e.op==="=="){if(Ns(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NAN"}};if(bs(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ns(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NOT_NAN"}};if(bs(e.value))return{unaryFilter:{field:Qt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qt(e.field),op:sd(e.op),value:e.value}}}(n):n instanceof at?function(e){const r=e.getFilters().map(i=>Ja(i));return r.length===1?r[0]:{compositeFilter:{op:od(e.op),filters:r}}}(n):w()}function Za(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,r,i,s=I.min(),o=I.min(),a=et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new It(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this.ct=t}}function ud(n){const t=nd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?kn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this._n=new cd}addToCollectionParentIndex(t,e){return this._n.add(e),d.resolve()}getCollectionParents(t,e){return d.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return d.resolve()}deleteFieldIndex(t,e){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,e){return d.resolve()}getDocumentsMatchingTarget(t,e){return d.resolve(null)}getIndexType(t,e){return d.resolve(0)}getFieldIndexes(t,e){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,e){return d.resolve(At.min())}getMinOffsetFromCollectionGroup(t,e){return d.resolve(At.min())}updateCollectionGroup(t,e,r){return d.resolve()}updateIndexEntries(t,e){return d.resolve()}}class cd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new H(k.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new H(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new he(0)}static Ln(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,X.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?d.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&be(r.mutation,i,Tt.empty(),$.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,C()).next(()=>r))}getLocalViewOfDocuments(t,e,r=C()){const i=Ot();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=we();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Ot();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,C()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=St();const o=De(),a=function(){return De()}();return e.forEach((u,h)=>{const c=r.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof rr)?s=s.insert(h.key,h):c!==void 0?(o.set(h.key,c.mutation.getFieldMask()),be(c.mutation,h,c.mutation.getFieldMask(),$.now())):o.set(h.key,Tt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,c)=>o.set(h,c)),e.forEach((h,c)=>{var l;return a.set(h,new dd(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,e){const r=De();let i=new x((o,a)=>o-a),s=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let c=r.get(u)||Tt.empty();c=a.applyToLocalView(h,c),r.set(u,c);const l=(i.get(a.batchId)||C()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=xa();c.forEach(f=>{if(!s.has(f)){const g=qa(e.get(f),r.get(f));g!==null&&l.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ki(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):d.resolve(Ot());let a=-1,u=s;return o.next(h=>d.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),s.get(c)?d.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,C())).next(c=>({batchId:a,changes:bl(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new E(e)).next(r=>{let i=we();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=we();return this.indexManager.getCollectionParents(t,s).next(a=>d.forEach(a,u=>{const h=function(l,f){return new jt(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(c=>{c.forEach((l,f)=>{o=o.insert(l,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,h)=>{const c=h.getKey();o.get(c)===null&&(o=o.insert(c,X.newInvalidDocument(c)))});let a=we();return o.forEach((u,h)=>{const c=s.get(u);c!==void 0&&be(c.mutation,h,Tt.empty(),$.now()),er(e,h)&&(a=a.insert(u,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return d.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Zt(i.createTime)}}(e)),d.resolve()}getNamedQuery(t,e){return d.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:ud(i.bundledQuery),readTime:Zt(i.readTime)}}(e)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.overlays=new x(E.comparator),this.hr=new Map}getOverlay(t,e){return d.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ot();return d.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),d.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,e,r){const i=Ot(),s=e.length+1,o=new E(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new x((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let c=s.get(h.largestBatchId);c===null&&(c=Ot(),s=s.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=Ot(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return d.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jl(e,r));let s=this.hr.get(e);s===void 0&&(s=C(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.Pr=new H(q.Ir),this.Tr=new H(q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new q(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new q(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new E(new k([])),r=new q(e,t),i=new q(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new E(new k([])),r=new q(e,t),i=new q(e,t+1);let s=C();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new q(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return E.comparator(t.key,e.key)||D(t.pr,e.pr)}static Er(t,e){return D(t.pr,e.pr)||E.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new H(q.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $l(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new q(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,e){return d.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return d.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new q(e,0),i=new q(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),d.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new H(D);return e.forEach(i=>{const s=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new q(new E(s),0);let a=new H(D);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){U(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(e.mutations,i=>{const s=new q(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new q(e,0),i=this.wr.firstAfterOrEqual(r);return d.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.vr=t,this.docs=function(){return new x(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return d.resolve(r?r.document.mutableCopy():X.newInvalidDocument(e))}getEntries(t,e){let r=St();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():X.newInvalidDocument(i))}),d.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=St();const o=e.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:c}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||al(ol(c),r)<=0||(i.has(c.key)||er(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return d.resolve(s)}getAllFromCollectionGroup(t,e,r,i){w()}Fr(t,e){return d.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new yd(this)}getSize(t){return d.resolve(this.size)}}class yd extends ld{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),d.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.persistence=t,this.Mr=new me(e=>Di(e),bi),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Li,this.targetCount=0,this.Lr=he.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),d.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new he(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,d.resolve()}updateTargetData(t,e){return this.qn(e),d.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(s).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return d.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),d.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),d.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return d.resolve(r)}containsKey(t,e){return d.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,e){this.Br={},this.overlays={},this.kr=new Pi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Ed(this),this.indexManager=new hd,this.remoteDocumentCache=function(i){return new _d(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ad(e),this.$r=new pd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new md(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new Td(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Td extends hl{constructor(t){super(),this.currentSequenceNumber=t}}class Fi{constructor(t){this.persistence=t,this.zr=new Li,this.jr=null}static Hr(t){return new Fi(t)}get Jr(){if(this.jr)return this.jr;throw w()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),d.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,I.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return d.or([()=>d.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=C(),i=C();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ui(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Bu()?8:kt.v(In())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Id;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(ve()<=P.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",Kt(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(ve()<=P.DEBUG&&_("QueryEngine","Query:",Kt(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ve()<=P.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",Kt(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,dt(e))):d.resolve())}ji(t,e){if(Ms(e))return d.resolve(null);let r=dt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=kn(e,null,"F"),r=dt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=C(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Zi(e,a);return this.Xi(e,h,o,u.readTime)?this.ji(t,kn(e,null,"F")):this.es(t,h,e,u)}))})))}Hi(t,e,r,i){return Ms(e)||i.isEqual(I.min())?d.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?d.resolve(null):(ve()<=P.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kt(e)),this.es(t,o,e,sl(i,-1)).next(a=>a))})}Zi(t,e){let r=new H(ka(t));return e.forEach((i,s)=>{er(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return ve()<=P.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Kt(e)),this.zi.getDocumentsMatchingQuery(t,e,At.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new x(D),this.rs=new me(s=>Di(s),bi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fd(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Rd(n,t,e,r){return new Ad(n,t,e,r)}async function tu(n,t){const e=V(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=C();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of s){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return e.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function eu(n){const t=V(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Sd(n,t){const e=V(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((c,l)=>{const f=i.get(l);if(!f)return;a.push(e.Qr.removeMatchingKeys(s,c.removedDocuments,l).next(()=>e.Qr.addMatchingKeys(s,c.addedDocuments,l)));let g=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(l)!==null?g=g.withResumeToken(et.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(l,g),function(R,T,B){return R.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(f,g,c)&&a.push(e.Qr.updateTargetData(s,g))});let u=St(),h=C();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Pd(s,o,t.documentUpdates).next(c=>{u=c.cs,h=c.ls})),!r.isEqual(I.min())){const c=e.Qr.getLastRemoteSnapshotVersion(s).next(l=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return d.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.ns=i,s))}function Pd(n,t,e){let r=C(),i=C();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=St();return e.forEach((a,u)=>{const h=s.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Cd(n,t){const e=V(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,d.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new It(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Wr(n,t,e){const r=V(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!en(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Qs(n,t,e){const r=V(n);let i=I.min(),s=C();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,c){const l=V(u),f=l.rs.get(c);return f!==void 0?d.resolve(l.ns.get(f)):l.Qr.getTargetData(h,c)}(r,o,dt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:I.min(),e?s:C())).next(a=>(Vd(r,Cl(t),a),{documents:a,hs:s})))}function Vd(n,t,e){let r=n.ss.get(t)||I.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class Hs{constructor(){this.activeTargetIds=Ol()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dd{constructor(){this.no=new Hs,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Hs,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn=null;function vr(){return mn===null?mn=function(){return 268435456+Math.round(2147483648*Math.random())}():mn++,"0x"+mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="WebChannelConnection";class Od extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=vr(),u=this.bo(e,r.toUriEncodedString());_("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,s,o),this.Co(e,u,h,i).then(c=>(_("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw ie("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=Nd[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=vr();return new Promise((o,a)=>{const u=new Qc;u.setWithCredentials(!0),u.listenOnce(Gc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _r.NO_ERROR:const c=u.getResponseJson();_(W,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case _r.TIMEOUT:_(W,`RPC '${t}' ${s} timed out`),a(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const l=u.getStatus();if(_(W,`RPC '${t}' ${s} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const A=function(T){const B=T.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(B)>=0?B:p.UNKNOWN}(g.status);a(new y(A,g.message))}else a(new y(p.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{_(W,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);_(W,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",h,r,15)})}Fo(t,e,r){const i=vr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=jc(),a=zc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const c=s.join("");_(W,`Creating RPC '${t}' stream ${i}: ${c}`,u);const l=o.createWebChannel(c,u);let f=!1,g=!1;const A=new kd({lo:T=>{g?_(W,`Not sending because RPC '${t}' stream ${i} is closed:`,T):(f||(_(W,`Opening RPC '${t}' stream ${i} transport.`),l.open(),f=!0),_(W,`RPC '${t}' stream ${i} sending:`,T),l.send(T))},ho:()=>l.close()}),R=(T,B,st)=>{T.listen(B,mt=>{try{st(mt)}catch(_t){setTimeout(()=>{throw _t},0)}})};return R(l,fn.EventType.OPEN,()=>{g||_(W,`RPC '${t}' stream ${i} transport opened.`)}),R(l,fn.EventType.CLOSE,()=>{g||(g=!0,_(W,`RPC '${t}' stream ${i} transport closed`),A.Vo())}),R(l,fn.EventType.ERROR,T=>{g||(g=!0,ie(W,`RPC '${t}' stream ${i} transport errored:`,T),A.Vo(new y(p.UNAVAILABLE,"The operation could not be completed")))}),R(l,fn.EventType.MESSAGE,T=>{var B;if(!g){const st=T.data[0];U(!!st);const mt=st,_t=mt.error||((B=mt[0])===null||B===void 0?void 0:B.error);if(_t){_(W,`RPC '${t}' stream ${i} received error:`,_t);const an=_t.status;let zt=function(Ru){const ss=M[Ru];if(ss!==void 0)return ja(ss)}(an),un=_t.message;zt===void 0&&(zt=p.INTERNAL,un="Unknown error status: "+an+" with message "+_t.message),g=!0,A.Vo(new y(zt,un)),l.close()}else _(W,`RPC '${t}' stream ${i} received:`,st),A.mo(st)}}),R(a,Kc.STAT_EVENT,T=>{T.stat===Rs.PROXY?_(W,`RPC '${t}' stream ${i} detected buffering proxy`):T.stat===Rs.NOPROXY&&_(W,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.Ro()},0),A}}function Tr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){return new Xl(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new nu(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(ft(e.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Md extends xd{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=Zl(this.serializer,t),r=function(s){if(!("targetChange"in s))return I.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?Zt(o.readTime):I.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Ks(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=$r(u)?{documents:td(s,u)}:{query:ed(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ka(s,o.resumeToken);const h=Kr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=Qr(s,o.snapshotVersion.toTimestamp());const h=Kr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=rd(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Ks(this.serializer),e.removeTarget=t,this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,Hr(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(p.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Hr(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Fd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ft(e),this.g_=!1):_("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{on(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=V(u);h.v_.add(4),await sn(h),h.x_.set("Unknown"),h.v_.delete(4),await or(h)}(this))})}),this.x_=new Fd(r,i)}}async function or(n){if(on(n))for(const t of n.F_)await t(!0)}async function sn(n){for(const t of n.F_)await t(!1)}function ru(n,t){const e=V(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),ji(e)?$i(e):_e(e).Jo()&&qi(e,t))}function Bi(n,t){const e=V(n),r=_e(e);e.C_.delete(t),r.Jo()&&iu(e,t),e.C_.size===0&&(r.Jo()?r.Xo():on(e)&&e.x_.set("Unknown"))}function qi(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}_e(n).c_(t)}function iu(n,t){n.O_.Oe(t),_e(n).l_(t)}function $i(n){n.O_=new Ql({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),_e(n).start(),n.x_.p_()}function ji(n){return on(n)&&!_e(n).Ho()&&n.C_.size>0}function on(n){return V(n).v_.size===0}function su(n){n.O_=void 0}async function Bd(n){n.C_.forEach((t,e)=>{qi(n,t)})}async function qd(n,t){su(n),ji(n)?(n.x_.S_(t),$i(n)):n.x_.set("Unknown")}async function $d(n,t,e){if(n.x_.set("Online"),t instanceof Ga&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ys(n,r)}else if(t instanceof yn?n.O_.$e(t):t instanceof za?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(I.min()))try{const r=await eu(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.C_.get(h);c&&s.C_.set(h,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const c=s.C_.get(u);if(!c)return;s.C_.set(u,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),iu(s,u);const l=new It(c.target,u,h,c.sequenceNumber);qi(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,t,e){if(!en(t))throw t;n.v_.add(1),await sn(n),n.x_.set("Offline"),e||(e=()=>eu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await or(n)})}async function Xs(n,t){const e=V(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=on(e);e.v_.add(3),await sn(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await or(e)}async function jd(n,t){const e=V(n);t?(e.v_.delete(2),await or(e)):t||(e.v_.add(2),await sn(e),e.x_.set("Unknown"))}function _e(n){return n.N_||(n.N_=function(e,r,i){const s=V(e);return s.R_(),new Md(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Bd.bind(null,n),To:qd.bind(null,n),u_:$d.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),ji(n)?$i(n):n.x_.set("Unknown")):(await n.N_.stop(),su(n))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new zi(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(n,t){if(ft("AsyncQueue",`${t}: ${n}`),en(n))return new y(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.comparator=t?(e,r)=>t(e,r)||E.comparator(e.key,r.key):(e,r)=>E.comparator(e.key,r.key),this.keyedMap=we(),this.sortedSet=new x(this.comparator)}static emptySet(t){return new te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof te)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new te;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.B_=new x(E.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):w():this.B_=this.B_.insert(e,t)}k_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ce{constructor(t,e,r,i,s,o,a,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new ce(t,e,te.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&tr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class Gd{constructor(){this.queries=new me(t=>Na(t),tr),this.onlineState="Unknown",this.W_=new Set}}async function Kd(n,t){const e=V(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.K_()&&t.U_()&&(r=2):(s=new zd,r=t.U_()?0:1);try{switch(r){case 0:s.q_=await e.onListen(i,!0);break;case 1:s.q_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=ou(o,`Initialization of query '${Kt(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,s),s.Q_.push(t),t.G_(e.onlineState),s.q_&&t.z_(s.q_)&&Gi(e)}async function Qd(n,t){const e=V(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=t.U_()?0:1:!s.K_()&&t.U_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Hd(n,t){const e=V(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Gi(e)}function Wd(n,t,e){const r=V(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function Gi(n){n.W_.forEach(t=>{t.next()})}var Yr,Zs;(Zs=Yr||(Yr={})).j_="default",Zs.Cache="cache";class Yd{constructor(t,e,r){this.query=t,this.H_=e,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ce(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),e=!0):this.X_(t,this.onlineState)&&(this.ea(t),e=!0),this.Y_=t,e}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let e=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),e=!0),e}X_(t,e){if(!t.fromCache||!this.U_())return!0;const r=e!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const e=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ea(t){t=ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Yr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this.key=t}}class uu{constructor(t){this.key=t}}class Xd{constructor(t,e){this.query=t,this.ua=e,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=C(),this.mutatedKeys=C(),this.ha=ka(t),this.Pa=new te(this.ha)}get Ia(){return this.ua}Ta(t,e){const r=e?e.Ea:new Js,i=e?e.Pa:this.Pa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const f=i.get(c),g=er(this.query,l)?l:null,A=!!f&&this.mutatedKeys.has(f.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?A!==R&&(r.track({type:3,doc:g}),T=!0):this.da(f,g)||(r.track({type:2,doc:g}),T=!0,(u&&this.ha(g,u)>0||h&&this.ha(g,h)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(u||h)&&(a=!0)),T&&(g?(o=o.add(g),s=R?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((c,l)=>function(g,A){const R=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return R(g)-R(A)}(c.type,l.type)||this.ha(c.doc,l.doc)),this.Aa(r),i=i!=null&&i;const a=e&&!i?this.Ra():[],u=this.la.size===0&&this.current&&!i?1:0,h=u!==this.ca;return this.ca=u,o.length!==0||h?{snapshot:new ce(this.query,t.Pa,s,o,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Js,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=C(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const e=[];return t.forEach(r=>{this.la.has(r)||e.push(new uu(r))}),this.la.forEach(r=>{t.has(r)||e.push(new au(r))}),e}fa(t){this.ua=t.hs,this.la=C();const e=this.Ta(t.documents);return this.applyChanges(e,!0)}ga(){return ce.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Jd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Zd{constructor(t){this.key=t,this.pa=!1}}class tf{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new me(a=>Na(a),tr),this.Sa=new Map,this.ba=new Set,this.Da=new x(E.comparator),this.Ca=new Map,this.va=new Li,this.Fa={},this.Ma=new Map,this.xa=he.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function ef(n,t,e=!0){const r=fu(n);let i;const s=r.wa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await hu(r,t,e,!0),i}async function nf(n,t){const e=fu(n);await hu(e,t,!0,!1)}async function hu(n,t,e,r){const i=await Cd(n.localStore,dt(t)),s=i.targetId,o=e?n.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await rf(n,t,s,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&ru(n.remoteStore,i),a}async function rf(n,t,e,r,i){n.Na=(l,f,g)=>async function(R,T,B,st){let mt=T.view.Ta(B);mt.Xi&&(mt=await Qs(R.localStore,T.query,!1).then(({documents:un})=>T.view.Ta(un,mt)));const _t=st&&st.targetChanges.get(T.targetId),an=st&&st.targetMismatches.get(T.targetId)!=null,zt=T.view.applyChanges(mt,R.isPrimaryClient,_t,an);return eo(R,T.targetId,zt.Va),zt.snapshot}(n,l,f,g);const s=await Qs(n.localStore,t,!0),o=new Xd(t,s.hs),a=o.Ta(s.documents),u=rn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=o.applyChanges(a,n.isPrimaryClient,u);eo(n,e,h.Va);const c=new Jd(t,e,o);return n.wa.set(t,c),n.Sa.has(e)?n.Sa.get(e).push(t):n.Sa.set(e,[t]),h.snapshot}async function sf(n,t,e){const r=V(n),i=r.wa.get(t),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!tr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Wr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Bi(r.remoteStore,i.targetId),Xr(r,i.targetId)}).catch(Ai)):(Xr(r,i.targetId),await Wr(r.localStore,i.targetId,!0))}async function of(n,t){const e=V(n),r=e.wa.get(t),i=e.Sa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Bi(e.remoteStore,r.targetId))}async function cu(n,t){const e=V(n);try{const r=await Sd(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Ca.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?U(o.pa):i.removedDocuments.size>0&&(U(o.pa),o.pa=!1))}),await du(e,r,t)}catch(r){await Ai(r)}}function to(n,t,e){const r=V(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=V(o);u.onlineState=a;let h=!1;u.queries.forEach((c,l)=>{for(const f of l.Q_)f.G_(a)&&(h=!0)}),h&&Gi(u)}(r.eventManager,t),i.length&&r.ya.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function af(n,t,e){const r=V(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ca.get(t),s=i&&i.key;if(s){let o=new x(E.comparator);o=o.insert(s,X.newNoDocument(s,I.min()));const a=C().add(s),u=new ir(I.min(),new Map,new x(D),o,a);await cu(r,u),r.Da=r.Da.remove(s),r.Ca.delete(t),Ki(r)}else await Wr(r.localStore,t,!1).then(()=>Xr(r,t,e)).catch(Ai)}function Xr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Sa.get(t))n.wa.delete(r),e&&n.ya.La(r,e);n.Sa.delete(t),n.isPrimaryClient&&n.va.Vr(t).forEach(r=>{n.va.containsKey(r)||lu(n,r)})}function lu(n,t){n.ba.delete(t.path.canonicalString());const e=n.Da.get(t);e!==null&&(Bi(n.remoteStore,e),n.Da=n.Da.remove(t),n.Ca.delete(e),Ki(n))}function eo(n,t,e){for(const r of e)r instanceof au?(n.va.addReference(r.key,t),uf(n,r)):r instanceof uu?(_("SyncEngine","Document no longer in limbo: "+r.key),n.va.removeReference(r.key,t),n.va.containsKey(r.key)||lu(n,r.key)):w()}function uf(n,t){const e=t.key,r=e.path.canonicalString();n.Da.get(e)||n.ba.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ba.add(r),Ki(n))}function Ki(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const t=n.ba.values().next().value;n.ba.delete(t);const e=new E(k.fromString(t)),r=n.xa.next();n.Ca.set(r,new Zd(e)),n.Da=n.Da.insert(e,r),ru(n.remoteStore,new It(dt(Ni(e.path)),r,"TargetPurposeLimboResolution",Pi._e))}}async function du(n,t,e){const r=V(n),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,e).then(h=>{if((h||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const c=Ui.Ki(u.targetId,h);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(u,h){const c=V(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(h,f=>d.forEach(f.qi,g=>c.persistence.referenceDelegate.addReference(l,f.targetId,g)).next(()=>d.forEach(f.Qi,g=>c.persistence.referenceDelegate.removeReference(l,f.targetId,g)))))}catch(l){if(!en(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of h){const f=l.targetId;if(!l.fromCache){const g=c.ns.get(f),A=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(A);c.ns=c.ns.insert(f,R)}}}(r.localStore,s))}async function hf(n,t){const e=V(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await tu(e.localStore,t);e.currentUser=t,function(s,o){s.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(p.CANCELLED,o))})}),s.Ma.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await du(e,r.us)}}function cf(n,t){const e=V(n),r=e.Ca.get(t);if(r&&r.pa)return C().add(r.key);{let i=C();const s=e.Sa.get(t);if(!s)return i;for(const o of s){const a=e.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function fu(n){const t=V(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=cu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=af.bind(null,t),t.ya.u_=Hd.bind(null,t.eventManager),t.ya.La=Wd.bind(null,t.eventManager),t}class no{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=sr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Rd(this.persistence,new wd,t.initialUser,this.serializer)}createPersistence(t){return new vd(Fi.Hr,this.serializer)}createSharedClientState(t){return new Dd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>to(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hf.bind(null,this.syncEngine),await jd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Gd}()}createDatastore(t){const e=sr(t.databaseInfo.databaseId),r=function(s){return new Od(s)}(t.databaseInfo);return function(s,o,a,u){return new Ld(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Ud(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>to(this.syncEngine,e,0),function(){return Ws.D()?new Ws:new bd}())}createSyncEngine(t,e){return function(i,s,o,a,u,h,c){const l=new tf(i,s,o,a,u,h);return c&&(l.Oa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=V(r);_("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await sn(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):ft("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=rl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ou(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ir(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ro(n,t){n.asyncQueue.verifyOperationInProgress();const e=await gf(n);_("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Xs(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xs(t.remoteStore,i)),n._onlineComponents=t}function pf(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function gf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ir(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!pf(e))throw e;ie("Error using user provided cache. Falling back to memory cache: "+e),await Ir(n,new no)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Ir(n,new no);return n._offlineComponents}async function mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ro(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ro(n,new lf))),n._onlineComponents}async function io(n){const t=await mf(n),e=t.eventManager;return e.onListen=ef.bind(null,t.syncEngine),e.onUnlisten=sf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=nf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=of.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n,t,e){if(!e)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function yf(n,t,e,r){if(t===!0&&r===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function oo(n){if(E.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":w()}function En(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ar(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Ef(n,t){if(t<=0)throw new y(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qi{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ao({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ao(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wc;switch(r.type){case"firstParty":return new Zc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=so.get(e);r&&(_("ComponentProvider","Removing Datastore"),so.delete(e),r.terminate())}(this),Promise.resolve()}}function vf(n,t,e,r={}){var i;const s=(n=En(n,Qi))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Y.MOCK_USER;else{a=Fu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Y(h)}n._authCredentials=new Yc(new wa(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new vt(this.firestore,t,this._query)}}class gt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class ee extends vt{constructor(t,e,r){super(t,e,Ni(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new E(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function qf(n,t,...e){if(n=ne(n),_f("collection","path",t),n instanceof Qi){const r=k.fromString(t,...e);return oo(r),new ee(n,null,r)}{if(!(n instanceof gt||n instanceof ee))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return oo(r),new ee(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new nu(this,"async_queue_retry"),this.cu=()=>{const e=Tr();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Tr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const e=Tr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const e=new Mt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!en(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const e=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=e,e}enqueueAfterDelay(t,e,r){this.lu(),this.uu.indexOf(t)>-1&&(e=0);const i=zi.createAndSchedule(this,t,e,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&w()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const e of this.su)if(e.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.su)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const e=this.su.indexOf(t);this.su.splice(e,1)}}function uo(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Jr extends Qi{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Tf}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gu(this),this._firestoreClient.terminate()}}function $f(n,t){const e=typeof n=="object"?n:kh(),r=typeof n=="string"?n:t||"(default)",i=Ch(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Mu("firestore");s&&vf(i,...s)}return i}function If(n){return n._firestoreClient||gu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function gu(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,h,c){return new pl(a,u,h,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,pu(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new ff(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this._byteString=t}static fromBase64String(t){try{return new le(et.fromBase64String(t))}catch(e){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new le(et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=/^__.*__$/;function yu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class Wi{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Wi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.mu({path:r,gu:!1});return i.pu(t),i}yu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return Zr(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(yu(this.Vu)&&wf.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Af{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||sr(t)}Cu(t,e,r,i=!1){return new Wi({Vu:t,methodName:e,Du:r,path:J.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eu(n){const t=n._freezeSettings(),e=sr(n._databaseId);return new Af(n._databaseId,!!t.ignoreUndefinedProperties,e)}function vu(n,t,e,r=!1){return Yi(e,n.Cu(r?4:3,t))}function Yi(n,t){if(Tu(n=ne(n)))return Sf("Unsupported field value:",t,n),Rf(n,t);if(n instanceof _u)return function(r,i){if(!yu(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Yi(a,i.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$.fromDate(r);return{timestampValue:Qr(i.serializer,s)}}if(r instanceof $){const s=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qr(i.serializer,s)}}if(r instanceof Hi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof le)return{bytesValue:Ka(i.serializer,r._byteString)};if(r instanceof gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${ar(r)}`)}(n,t)}function Rf(n,t){const e={};return Aa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nn(n,(r,i)=>{const s=Yi(i,t.fu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Tu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $||n instanceof Hi||n instanceof le||n instanceof gt||n instanceof _u)}function Sf(n,t,e){if(!Tu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ar(e);throw r==="an object"?t.Su(n+" a custom object"):t.Su(n+" "+r)}}const Pf=new RegExp("[~\\*/\\[\\]]");function Cf(n,t,e){if(t.search(Pf)>=0)throw Zr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new mu(...t.split("."))._internalPath}catch{throw Zr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zr(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new y(p.INVALID_ARGUMENT,a+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ji("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Vf extends Xi{data(){return super.data()}}function Ji(n,t){return typeof t=="string"?Cf(n,t):t instanceof mu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zi{}class ur extends Zi{}function jf(n,t,...e){let r=[];t instanceof Zi&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof es).length,a=s.filter(u=>u instanceof ts).length;if(o>1||o>0&&a>0)throw new y(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ts extends ur{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ts(t,e,r)}_apply(t){const e=this._parse(t);return Iu(t._query,e),new vt(t.firestore,t.converter,jr(t._query,e))}_parse(t){const e=Eu(t.firestore);return function(s,o,a,u,h,c,l){let f;if(h.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){co(l,c);const g=[];for(const A of l)g.push(ho(u,s,A));f={arrayValue:{values:g}}}else f=ho(u,s,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||co(l,c),f=vu(a,o,l,c==="in"||c==="not-in");return F.create(h,c,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class es extends Zi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new es(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:at.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Iu(o,u),o=jr(o,u)}(t._query,e),new vt(t.firestore,t.converter,jr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ns extends ur{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ns(t,e)}_apply(t){const e=function(i,s,o){if(i.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ke(s,o)}(t._query,this._field,this._direction);return new vt(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new jt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function zf(n,t="asc"){const e=t,r=Ji("orderBy",n);return ns._create(r,e)}class rs extends ur{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new rs(t,e,r)}_apply(t){return new vt(t.firestore,t.converter,kn(t._query,this._limit,this._limitType))}}function Gf(n){return Ef("limit",n),rs._create("limit",n,"F")}class is extends ur{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new is(t,e,r)}_apply(t){const e=bf(t,this.type,this._docOrFields,this._inclusive);return new vt(t.firestore,t.converter,function(i,s){return new jt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function Kf(...n){return is._create("startAfter",n,!1)}function bf(n,t,e,r){if(e[0]=ne(e[0]),e[0]instanceof Xi)return function(s,o,a,u,h){if(!u)throw new y(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const l of Jt(s))if(l.field.isKeyField())c.push(Nn(o,u.key));else{const f=u.data.field(l.field);if(Zn(f))throw new y(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const g=l.field.canonicalString();throw new y(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}c.push(f)}return new ue(c,h)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=Eu(n.firestore);return function(o,a,u,h,c,l){const f=o.explicitOrderBy;if(c.length>f.length)throw new y(p.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let A=0;A<c.length;A++){const R=c[A];if(f[A].field.isKeyField()){if(typeof R!="string")throw new y(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof R}`);if(!ki(o)&&R.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${R}' contains a slash.`);const T=o.path.child(k.fromString(R));if(!E.isDocumentKey(T))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const B=new E(T);g.push(Nn(a,B))}else{const T=vu(u,h,R);g.push(T)}}return new ue(g,l)}(n._query,n.firestore._databaseId,i,t,e,r)}}function ho(n,t,e){if(typeof(e=ne(e))=="string"){if(e==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ki(t)&&e.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(k.fromString(e));if(!E.isDocumentKey(r))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nn(n,new E(r))}if(e instanceof gt)return Nn(n,e._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ar(e)}.`)}function co(n,t){if(!Array.isArray(n)||n.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Iu(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Nf{convertValue(t,e="none"){switch(qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw w()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return nn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Hi(L(t.latitude),L(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ci(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(je(t));default:return null}}convertTimestamp(t){const e=Rt(t);return new $(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=k.fromString(t);U(Za(r));const i=new ze(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(e)||ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wu extends Xi{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ji("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class vn extends wu{data(t={}){return super.data(t)}}class kf{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Re(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new vn(this._firestore,this._userDataWriter,r.key,r,new Re(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new vn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Re(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new vn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Re(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,c=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Of(a.type),doc:u,oldIndex:h,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Of(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}class Au extends Nf{constructor(t){super(),this.firestore=t}convertBytes(t){return new le(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gt(this.firestore,null,e)}}function Qf(n,...t){var e,r,i;n=ne(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||uo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(uo(t[o])){const l=t[o];t[o]=(e=l.next)===null||e===void 0?void 0:e.bind(l),t[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,h,c;if(n instanceof gt)h=En(n.firestore,Jr),c=Ni(n._key.path),u={next:l=>{t[o]&&t[o](xf(h,n,l))},error:t[o+1],complete:t[o+2]};else{const l=En(n,vt);h=En(l.firestore,Jr),c=l._query;const f=new Au(h);u={next:g=>{t[o]&&t[o](new kf(h,f,l,g))},error:t[o+1],complete:t[o+2]},Df(n._query)}return function(f,g,A,R){const T=new df(R),B=new Yd(g,T,A);return f.asyncQueue.enqueueAndForget(async()=>Kd(await io(f),B)),()=>{T.Qa(),f.asyncQueue.enqueueAndForget(async()=>Qd(await io(f),B))}}(If(h),c,a,u)}function xf(n,t,e){const r=e.docs.get(t._key),i=new Au(n);return new wu(n,i,t._key,r,new Re(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){ge=i})(bh),An(new Ne("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Jr(new Xc(r.getProvider("auth-internal")),new el(r.getProvider("app-check-internal")),function(h,c){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(h.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Se(Ss,"4.5.0",t),Se(Ss,"4.5.0","esm2017")})();export{de as F,zf as a,qf as c,$f as g,Nh as i,Gf as l,Qf as o,jf as q,Se as r,Kf as s};
