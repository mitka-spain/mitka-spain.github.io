/*! For license information please see 544.js.LICENSE.txt */
"use strict";(self.webpackChunkinqviz_excel=self.webpackChunkinqviz_excel||[]).push([[544],{21981:function(e,t,s){s.d(t,{h4:function(){return d}});var i="object"==typeof window?window:{},a="0123456789abcdef".split(""),n=[-2147483648,8388608,32768,128],r=[24,16,8,0],c=[];function o(e){e?(c[0]=c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0,this.blocks=c):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}o.prototype.update=function(e){if(!this.finalized){var t="string"!=typeof e;t&&e.constructor===i.ArrayBuffer&&(e=new Uint8Array(e));for(var s,a,n=0,c=e.length||0,o=this.blocks;n<c;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),t)for(a=this.start;n<c&&a<64;++n)o[a>>2]|=e[n]<<r[3&a++];else for(a=this.start;n<c&&a<64;++n)(s=e.charCodeAt(n))<128?o[a>>2]|=s<<r[3&a++]:s<2048?(o[a>>2]|=(192|s>>6)<<r[3&a++],o[a>>2]|=(128|63&s)<<r[3&a++]):s<55296||s>=57344?(o[a>>2]|=(224|s>>12)<<r[3&a++],o[a>>2]|=(128|s>>6&63)<<r[3&a++],o[a>>2]|=(128|63&s)<<r[3&a++]):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++n)),o[a>>2]|=(240|s>>18)<<r[3&a++],o[a>>2]|=(128|s>>12&63)<<r[3&a++],o[a>>2]|=(128|s>>6&63)<<r[3&a++],o[a>>2]|=(128|63&s)<<r[3&a++]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=o[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},o.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=n[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},o.prototype.hash=function(){var e,t,s=this.h0,i=this.h1,a=this.h2,n=this.h3,r=this.h4,c=this.blocks;for(e=16;e<80;++e)t=c[e-3]^c[e-8]^c[e-14]^c[e-16],c[e]=t<<1|t>>>31;for(e=0;e<20;e+=5)s=(t=(i=(t=(a=(t=(n=(t=(r=(t=s<<5|s>>>27)+(i&a|~i&n)+r+1518500249+c[e]<<0)<<5|r>>>27)+(s&(i=i<<30|i>>>2)|~s&a)+n+1518500249+c[e+1]<<0)<<5|n>>>27)+(r&(s=s<<30|s>>>2)|~r&i)+a+1518500249+c[e+2]<<0)<<5|a>>>27)+(n&(r=r<<30|r>>>2)|~n&s)+i+1518500249+c[e+3]<<0)<<5|i>>>27)+(a&(n=n<<30|n>>>2)|~a&r)+s+1518500249+c[e+4]<<0,a=a<<30|a>>>2;for(;e<40;e+=5)s=(t=(i=(t=(a=(t=(n=(t=(r=(t=s<<5|s>>>27)+(i^a^n)+r+1859775393+c[e]<<0)<<5|r>>>27)+(s^(i=i<<30|i>>>2)^a)+n+1859775393+c[e+1]<<0)<<5|n>>>27)+(r^(s=s<<30|s>>>2)^i)+a+1859775393+c[e+2]<<0)<<5|a>>>27)+(n^(r=r<<30|r>>>2)^s)+i+1859775393+c[e+3]<<0)<<5|i>>>27)+(a^(n=n<<30|n>>>2)^r)+s+1859775393+c[e+4]<<0,a=a<<30|a>>>2;for(;e<60;e+=5)s=(t=(i=(t=(a=(t=(n=(t=(r=(t=s<<5|s>>>27)+(i&a|i&n|a&n)+r-1894007588+c[e]<<0)<<5|r>>>27)+(s&(i=i<<30|i>>>2)|s&a|i&a)+n-1894007588+c[e+1]<<0)<<5|n>>>27)+(r&(s=s<<30|s>>>2)|r&i|s&i)+a-1894007588+c[e+2]<<0)<<5|a>>>27)+(n&(r=r<<30|r>>>2)|n&s|r&s)+i-1894007588+c[e+3]<<0)<<5|i>>>27)+(a&(n=n<<30|n>>>2)|a&r|n&r)+s-1894007588+c[e+4]<<0,a=a<<30|a>>>2;for(;e<80;e+=5)s=(t=(i=(t=(a=(t=(n=(t=(r=(t=s<<5|s>>>27)+(i^a^n)+r-899497514+c[e]<<0)<<5|r>>>27)+(s^(i=i<<30|i>>>2)^a)+n-899497514+c[e+1]<<0)<<5|n>>>27)+(r^(s=s<<30|s>>>2)^i)+a-899497514+c[e+2]<<0)<<5|a>>>27)+(n^(r=r<<30|r>>>2)^s)+i-899497514+c[e+3]<<0)<<5|i>>>27)+(a^(n=n<<30|n>>>2)^r)+s-899497514+c[e+4]<<0,a=a<<30|a>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+i<<0,this.h2=this.h2+a<<0,this.h3=this.h3+n<<0,this.h4=this.h4+r<<0},o.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,s=this.h2,i=this.h3,n=this.h4;return a[e>>28&15]+a[e>>24&15]+a[e>>20&15]+a[e>>16&15]+a[e>>12&15]+a[e>>8&15]+a[e>>4&15]+a[15&e]+a[t>>28&15]+a[t>>24&15]+a[t>>20&15]+a[t>>16&15]+a[t>>12&15]+a[t>>8&15]+a[t>>4&15]+a[15&t]+a[s>>28&15]+a[s>>24&15]+a[s>>20&15]+a[s>>16&15]+a[s>>12&15]+a[s>>8&15]+a[s>>4&15]+a[15&s]+a[i>>28&15]+a[i>>24&15]+a[i>>20&15]+a[i>>16&15]+a[i>>12&15]+a[i>>8&15]+a[i>>4&15]+a[15&i]+a[n>>28&15]+a[n>>24&15]+a[n>>20&15]+a[n>>16&15]+a[n>>12&15]+a[n>>8&15]+a[n>>4&15]+a[15&n]},o.prototype.toString=o.prototype.hex,o.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,s=this.h2,i=this.h3,a=this.h4;return[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,a>>24&255,a>>16&255,a>>8&255,255&a]},o.prototype.array=o.prototype.digest,o.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(20),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),e},s(13908);const h=(...e)=>{return t=e.join("_"),new o(!0).update(t).hex();var t};class l{}const u=new Map;class d extends l{constructor(e){super(),Object.defineProperty(this,"cache",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cache=e??new Map}lookup(e,t){return Promise.resolve(this.cache.get(h(e,t))??null)}async update(e,t,s){this.cache.set(h(e,t),s)}static global(){return new d(u)}}},20099:function(e,t,s){s.d(t,{BD:function(){return g},qV:function(){return y}});var i=s(21981),a=s(11141),n=s(13908),r=s(99636),c=s(79742),o=Object.defineProperty;function h(e,t){return 1===e.length?[t.get(e.join(","))]:function(e,t){let s=Array.from({length:e.length},((e,t)=>({start:t,end:t+1})));for(;s.length>1;){let i=null;for(let a=0;a<s.length-1;a++){const n=e.slice(s[a].start,s[a+1].end),r=t.get(n.join(","));null!=r&&(null==i||r<i[0])&&(i=[r,a])}if(null==i)break;{const e=i[1];s[e]={start:s[e].start,end:s[e+1].end},s.splice(e+1,1)}}return s}(e,t).map((s=>t.get(e.slice(s.start,s.end).join(",")))).filter((e=>null!=e))}var l,u=class{specialTokens;inverseSpecialTokens;patStr;textEncoder=new TextEncoder;textDecoder=new TextDecoder("utf-8");rankMap=new Map;textMap=new Map;constructor(e,t){this.patStr=e.pat_str;const s=e.bpe_ranks.split("\n").filter(Boolean).reduce(((e,t)=>{const[s,i,...a]=t.split(" "),n=Number.parseInt(i,10);return a.forEach(((t,s)=>e[t]=n+s)),e}),{});for(const[e,t]of Object.entries(s)){const s=c.toByteArray(e);this.rankMap.set(s.join(","),t),this.textMap.set(t,s)}this.specialTokens={...e.special_tokens,...t},this.inverseSpecialTokens=Object.entries(this.specialTokens).reduce(((e,[t,s])=>(e[s]=this.textEncoder.encode(t),e)),{})}encode(e,t=[],s="all"){const i=new RegExp(this.patStr,"ug"),a=u.specialTokenRegex(Object.keys(this.specialTokens)),n=[],r=new Set("all"===t?Object.keys(this.specialTokens):t),c=new Set("all"===s?Object.keys(this.specialTokens).filter((e=>!r.has(e))):s);if(c.size>0){const t=u.specialTokenRegex([...c]),s=e.match(t);if(null!=s)throw new Error(`The text contains a special token that is not allowed: ${s[0]}`)}let o=0;for(;;){let t=null,s=o;for(;a.lastIndex=s,t=a.exec(e),null!=t&&!r.has(t[0]);)s=t.index+1;const c=t?.index??e.length;for(const t of e.substring(o,c).matchAll(i)){const e=this.textEncoder.encode(t[0]),s=this.rankMap.get(e.join(","));null==s?n.push(...h(e,this.rankMap)):n.push(s)}if(null==t)break;let l=this.specialTokens[t[0]];n.push(l),o=t.index+t[0].length}return n}decode(e){const t=[];let s=0;for(let i=0;i<e.length;++i){const a=e[i],n=this.textMap.get(a)??this.inverseSpecialTokens[a];null!=n&&(t.push(n),s+=n.length)}const i=new Uint8Array(s);let a=0;for(const e of t)i.set(e,a),a+=e.length;return this.textDecoder.decode(i)}},d=u;((e,t,s)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(d,"symbol"!=typeof(l="specialTokenRegex")?l+"":l,(e=>new RegExp(e.map((e=>e.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"))).join("|"),"g")));const p={},b=new r.L({});var f=s(52399);class g extends f.eq{get lc_attributes(){return{callbacks:void 0,verbose:void 0}}constructor(e){super(e),Object.defineProperty(this,"verbose",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"callbacks",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tags",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metadata",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.verbose=e.verbose??!1,this.callbacks=e.callbacks,this.tags=e.tags??[],this.metadata=e.metadata??{}}}class y extends g{get callKeys(){return["stop","timeout","signal","tags","metadata","callbacks"]}constructor({callbacks:e,callbackManager:t,...s}){super({callbacks:e??t,...s}),Object.defineProperty(this,"caller",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cache",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_encoding",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),"object"==typeof s.cache?this.cache=s.cache:s.cache?this.cache=i.h4.global():this.cache=void 0,this.caller=new r.L(s??{})}async getNumTokens(e){if("string"!=typeof e)return 0;let t=Math.ceil(e.length/4);if(!this._encoding)try{this._encoding=await async function(e){return async function(e){return e in p||(p[e]=b.fetch(`https://tiktoken.pages.dev/js/${e}.json`).then((e=>e.json())).then((e=>new d(e))).catch((t=>{throw delete p[e],t}))),await p[e]}(function(e){switch(e){case"gpt2":return"gpt2";case"code-cushman-001":case"code-cushman-002":case"code-davinci-001":case"code-davinci-002":case"cushman-codex":case"davinci-codex":case"davinci-002":case"text-davinci-002":case"text-davinci-003":return"p50k_base";case"code-davinci-edit-001":case"text-davinci-edit-001":return"p50k_edit";case"ada":case"babbage":case"babbage-002":case"code-search-ada-code-001":case"code-search-babbage-code-001":case"curie":case"davinci":case"text-ada-001":case"text-babbage-001":case"text-curie-001":case"text-davinci-001":case"text-search-ada-doc-001":case"text-search-babbage-doc-001":case"text-search-curie-doc-001":case"text-search-davinci-doc-001":case"text-similarity-ada-001":case"text-similarity-babbage-001":case"text-similarity-curie-001":case"text-similarity-davinci-001":return"r50k_base";case"gpt-3.5-turbo-16k-0613":case"gpt-3.5-turbo-16k":case"gpt-3.5-turbo-0613":case"gpt-3.5-turbo-0301":case"gpt-3.5-turbo":case"gpt-4-32k-0613":case"gpt-4-32k-0314":case"gpt-4-32k":case"gpt-4-0613":case"gpt-4-0314":case"gpt-4":case"gpt-3.5-turbo-1106":case"gpt-35-turbo":case"gpt-4-1106-preview":case"gpt-4-vision-preview":case"text-embedding-ada-002":return"cl100k_base";default:throw new Error("Unknown model")}}(e))}("modelName"in this?(s=this.modelName,s.startsWith("gpt-3.5-turbo-16k")?"gpt-3.5-turbo-16k":s.startsWith("gpt-3.5-turbo-")?"gpt-3.5-turbo":s.startsWith("gpt-4-32k")?"gpt-4-32k":s.startsWith("gpt-4-")?"gpt-4":s):"gpt2")}catch(e){console.warn("Failed to calculate number of tokens, falling back to approximate count",e)}var s;if(this._encoding)try{t=this._encoding.encode(e).length}catch(e){console.warn("Failed to calculate number of tokens, falling back to approximate count",e)}return t}static _convertInputToPromptValue(e){return"string"==typeof e?new a.nw(e):Array.isArray(e)?new a.GU(e.map(n.E1)):e}_identifyingParams(){return{}}_getSerializedCacheKeyParametersForCall(e){const t={...this._identifyingParams(),...e,_type:this._llmType(),_model:this._modelType()},s=Object.entries(t).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}:${JSON.stringify(t)}`)).sort().join(",");return s}serialize(){return{...this._identifyingParams(),_type:this._llmType(),_model:this._modelType()}}static async deserialize(e){throw new Error("Use .toJSON() instead")}}},79559:function(e,t,s){s(11141)},3544:function(e,t,s){s.d(t,{l:function(){return n}}),s(13908),s(36141),s(79559),s(21981);var i=s(75290),a=s(20099);class n extends a.BD{get lc_namespace(){return["langchain","chains",this._chainType()]}constructor(e,t,s){if(1!==arguments.length||"object"!=typeof e||"saveContext"in e)super({verbose:t,callbacks:s}),this.memory=e;else{const{memory:t,callbackManager:s,...i}=e;super({...i,callbacks:s??i.callbacks}),this.memory=t}}_selectMemoryInputs(e){const t={...e};return"signal"in t&&delete t.signal,"timeout"in t&&delete t.timeout,t}async invoke(e,t){return this.call(e,t)}_validateOutputs(e){const t=this.outputKeys.filter((t=>!(t in e)));if(t.length)throw new Error(`Missing output keys: ${t.join(", ")} from chain ${this._chainType()}`)}async prepOutputs(e,t,s=!1){return this._validateOutputs(t),this.memory&&await this.memory.saveContext(e,t),s?t:{...e,...t}}serialize(){throw new Error("Method not implemented.")}async run(e,t){const s=this.inputKeys.filter((e=>!this.memory?.memoryKeys.includes(e)??!0));if(!(s.length<=1))throw new Error(`Chain ${this._chainType()} expects multiple inputs, cannot use 'run' `);const i=s.length?{[s[0]]:e}:{},a=await this.call(i,t),n=Object.keys(a);if(1===n.length)return a[n[0]];throw new Error("return values have multiple keys, `run` only supported when one key currently")}async _formatValues(e){const t={...e};if(t.timeout&&!t.signal&&(t.signal=AbortSignal.timeout(t.timeout),delete t.timeout),null!=this.memory){const s=await this.memory.loadMemoryVariables(this._selectMemoryInputs(e));for(const[e,i]of Object.entries(s))t[e]=i}return t}async call(e,t,s){const a=await this._formatValues(e),n=(0,i.QH)(t),r=await i.Ye.configure(n.callbacks,this.callbacks,n.tags||s,this.tags,n.metadata,this.metadata,{verbose:this.verbose}),c=await(r?.handleChainStart(this.toJSON(),a,void 0,void 0,void 0,void 0,n.runName));let o;try{o=await(e.signal?Promise.race([this._call(a,c),new Promise(((t,s)=>{e.signal?.addEventListener("abort",(()=>{s(new Error("AbortError"))}))}))]):this._call(a,c))}catch(e){throw await(c?.handleChainError(e)),e}return null!=this.memory&&await this.memory.saveContext(this._selectMemoryInputs(e),o),await(c?.handleChainEnd(o)),Object.defineProperty(o,"__run",{value:c?{runId:c?.runId}:void 0,configurable:!0}),o}async apply(e,t){return Promise.all(e.map((async(e,s)=>this.call(e,t?.[s]))))}static async deserialize(e,t={}){switch(e._type){case"llm_chain":{const{LLMChain:t}=await Promise.all([s.e(315),s.e(307)]).then(s.bind(s,82307));return t.deserialize(e)}case"sequential_chain":{const{SequentialChain:t}=await s.e(728).then(s.bind(s,43685));return t.deserialize(e)}case"simple_sequential_chain":{const{SimpleSequentialChain:t}=await s.e(728).then(s.bind(s,43685));return t.deserialize(e)}case"stuff_documents_chain":{const{StuffDocumentsChain:t}=await Promise.all([s.e(315),s.e(307),s.e(664)]).then(s.bind(s,26090));return t.deserialize(e)}case"map_reduce_documents_chain":{const{MapReduceDocumentsChain:t}=await Promise.all([s.e(315),s.e(307),s.e(664)]).then(s.bind(s,26090));return t.deserialize(e)}case"refine_documents_chain":{const{RefineDocumentsChain:t}=await Promise.all([s.e(315),s.e(307),s.e(664)]).then(s.bind(s,26090));return t.deserialize(e)}case"vector_db_qa":{const{VectorDBQAChain:i}=await Promise.all([s.e(315),s.e(307),s.e(127)]).then(s.bind(s,52127));return i.deserialize(e,t)}case"api_chain":{const{APIChain:t}=await Promise.all([s.e(315),s.e(307),s.e(703)]).then(s.bind(s,22702));return t.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}}}}]);
//# sourceMappingURL=544.js.map